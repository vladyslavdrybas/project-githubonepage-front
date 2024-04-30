import axios from "axios";
import AccountLocalStorage from "@/utils/StorageKeys";
import {jwt_decode} from "@/utils/Jwt";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL ?? '';

export interface IApiResponse {
  status: number;
  data: object|Array<any>;
}

export enum ApiRoutes {
  login = '/auth/login',
  register = '/auth/register',
  logout = '/auth/logout',
  accessTokenRefresh = '/auth/token/refresh',
}

interface IApiResponseError {
  status: number;
  routeName: string;
  route: string;
  data: object|Array<any>;
  message: string;
}

type TLoginAction = {
  email: string;
  password: string;
}

export class ApiAdapter {
  private static instance: ApiAdapter;
  protected _accountStorage: AccountLocalStorage;
  routes = ApiRoutes;

  protected constructor() {
    this._accountStorage = AccountLocalStorage.getInstance();
  }

  public static getInstance(): ApiAdapter {
    if (!ApiAdapter.instance) {
      ApiAdapter.instance = new ApiAdapter();
    }

    return ApiAdapter.instance;
  }

  async request (routeName: string, params: Record<string, any>): Promise<IApiResponse> {
    const actionName: string = routeName + 'Action';

    try {
      return await this[actionName as Exclude<keyof ApiAdapter, "routes"|"request"|"baseUrl">](params as any);
    } catch (e: any) {
      console.log(e.toJSON());
      e = e.toJSON();

      console.log(e.stack);

      throw {
        status: e.status,
        routeName: routeName,
        route: this.routes[routeName as keyof typeof ApiRoutes],
        data: params,
        message: e.message,
      } as IApiResponseError;
    }
  }

  async loginAction (params: TLoginAction): Promise<IApiResponse> {
    const {data, status} = await axios({
      url: this.routes.login,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      data: {
        email: params.email,
        password: params.password,
      }
    });

    this._accountStorage.accessToken = data.token;
    this._accountStorage.refreshToken = data.refresh_token;

    let {id, username, iat, exp} = jwt_decode(data.token);
    this._accountStorage.id = id;
    this._accountStorage.username = username;
    this._accountStorage.iat = iat;
    this._accountStorage.exp = exp;

    this._accountStorage.store();

    return {
      status: status,
      data: this._accountStorage.account,
    };
  }

  async logoutAction (params: TLoginAction): Promise<IApiResponse> {
    const {status} = await axios({
      url: this.routes.logout,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + this._accountStorage.accessToken,
      }
    });

    this._accountStorage.logout();

    return {
      status: status,
      data: this._accountStorage.account,
    };
  }
}

export default ApiAdapter;
