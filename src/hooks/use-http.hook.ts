import axios from 'axios';
import { useState } from 'react';

// TODO: chuyển sang types.ts
export enum HttpMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

export const useRequest = (): [unknown, string, Function] => {
  const [response, setResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const sendHttpRequest = ({
    url,
    method = HttpMethod.GET,
    body = {},
    headers = {},
  }: {
    url: string;
    method: HttpMethod;
    body?: Record<string, unknown>;
    headers?: any;
  }): void => {
    axios({ url, method, data: JSON.stringify(body), headers })
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return [response, errorMessage, sendHttpRequest];
};
