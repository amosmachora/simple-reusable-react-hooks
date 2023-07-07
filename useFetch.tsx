import axios, { AxiosHeaders, AxiosRequestConfig } from "axios";
import { useState } from "react";

export function useFetch<T>(url: string, headers: AxiosHeaders) {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [errors, setErrors] = useState<Error | any>(null);

  const fetchFunction = async () => {
    setIsFetching(true);
    const options: AxiosRequestConfig<T> = {
      method: "GET",
      url,
      headers,
    };
    try {
      const { data } = await axios.request<T>(options);
      setData(data);
    } catch (error) {
      setErrors(error);
    } finally {
      setIsFetching(false);
    }
  };

  fetchFunction();

  return {
    isFetching,
    data,
    errors,
  };
}
