import { useEffect } from "react";

export const useUpdateLogger = (value: any, info: string) => {
  useEffect(() => {
    console.log(value, info);
  }, [value]);
};
