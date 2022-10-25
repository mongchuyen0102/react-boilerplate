import axios from 'axios';
import { SetStateAction, useEffect, useState } from 'react';
import { HttpMethod, ParameterType, ReturnType } from './types';

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  async (error) => {
    // Do something with request error
    return await Promise.reject(error);
  },
);

export const useRequest = <T>({
  url,
  method = HttpMethod.GET,
  params = undefined,
}: ParameterType): ReturnType<T> => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const result = await axiosInstance[method](url, { params });
      setResponse(result.data);
    } catch (error) {
      setError(error as SetStateAction<undefined>);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData()
      .then(() => {})
      .catch(() => {});
  }, [params]);

  return { response, error, isLoading } as any;
};
