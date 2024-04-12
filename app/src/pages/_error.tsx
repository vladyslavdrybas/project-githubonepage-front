import React from 'react';
import Error from 'next/error';

interface IErrorPage {
  errorCode: number,
  stars: number,
}

const Page: React.FunctionComponent<IErrorPage> = ({ errorCode, stars }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return <div>Next stars: {stars}</div>
}

export default Page;
