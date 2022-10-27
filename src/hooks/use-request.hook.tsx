import axios, { AxiosResponse } from 'axios';

// TODO: chuyển sang types.ts
export enum HttpMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

export const useRequest = (): [Function] => {
  const sendHttpRequest = async ({
    url,
    method = HttpMethod.GET,
    body = {},
    headers = {},
  }: {
    url: string;
    method: HttpMethod;
    body?: Record<string, unknown>;
    headers?: any;
  }): Promise<AxiosResponse> => {
    return await axios({
      url,
      method,
      data: JSON.stringify(body),
      headers,
    });
  };

  return [sendHttpRequest];
};
