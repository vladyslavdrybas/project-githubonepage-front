export interface IAccountRecord {
  accessToken?: string;
  refreshToken?: string;
  id?: string;
  username?: string;
  iat?: number;
  exp?: number;
}

export class AccountLocalStorage {
  private static instance: AccountLocalStorage;
  private _account: IAccountRecord = {};

  protected constructor() {}

  public static getInstance(): AccountLocalStorage {
    if (!AccountLocalStorage.instance) {
      AccountLocalStorage.instance = new AccountLocalStorage();
    }

    return AccountLocalStorage.instance;
  }

  getAccountFromLocalStorage = (): IAccountRecord => {
    return JSON.parse(localStorage.getItem('account') ?? '{}');
  }

  store = () => {
    localStorage.setItem('account', JSON.stringify(this._account));
  }

  logout = () => {
    this.account = {};
    localStorage.removeItem('account');
  }

  get account(): IAccountRecord {
    if (!this._account) {
      this._account = this.getAccountFromLocalStorage();
    }

    return this._account;
  }

  set account(acc: IAccountRecord) {
    this._account = acc;
  }

  get accessToken(): string|null {
    return this.account.accessToken ?? null;
  }

  get refreshToken(): string|null {
    return this.account.refreshToken ?? null;
  }

  get id(): string|null {
    return this.account.id ?? null;
  }

  get iat(): number|null {
    return this.account.iat ?? null;
  }

  get exp(): number|null {
    return this.account.exp ?? null;
  }

  get username(): string|null {
    return this.account.username ?? null;
  }

  set accessToken(accessToken: string|null) {
    if (null == accessToken) {
      delete this.account.accessToken;
    } else {
      this.account.accessToken = accessToken;
    }
  }

  set refreshToken(refreshToken: string|null) {
    if (null == refreshToken) {
      delete this.account.refreshToken;
    } else {
      this.account.refreshToken = refreshToken;
    }
  }

  set id(id: string|null) {
    if (null == id) {
      delete this.account.id;
    } else {
      this.account.id = id;
    }
  }

  set username(username: string|null) {
    if (null == username) {
      delete this.account.username;
    } else {
      this.account.username = username;
    }
  }

  set iat(iat: number|null) {
    if (null == iat) {
      delete this.account.iat;
    } else {
      this.account.iat = iat;
    }
  }

  set exp(exp: number|null) {
    if (null == exp) {
      delete this.account.exp;
    } else {
      this.account.exp = exp;
    }
  }
}

export default AccountLocalStorage;
