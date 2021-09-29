import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./config";
export default function(title: string) {
  return new Promise((resolve, rej) => {
    axios
      .post(`${BASE_URL}/posts/1`, {
        title,
      })
      .then((res: any) => {
        resolve(res);
      });
  });
}
