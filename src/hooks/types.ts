export enum HttpMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

export interface ParameterType {
  url: string;
  method?: HttpMethod;
  params?: any;
}

export interface ReturnType<T> {
  response?: T;
  error?: string;
  isLoading?: boolean;
  setParams?: (param: unknown) => void;
}

export interface StateType<T> {
  response?: T;
  error?: any;
  isLoading?: boolean;
  params?: any;
}
