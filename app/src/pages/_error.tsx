import React from 'react';
import Error from 'next/error';

export async function getServerSideProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const errorCode = res.ok ? false : res.status
  const json = await res.json()

  return {
    props: { errorCode, stars: json.stargazers_count },
  }
}

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
