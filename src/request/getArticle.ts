import axios, { AxiosRequestConfig } from "axios";

export default function(title: string) {
  return new Promise((resolve, rej) => {
    axios
      .post(`/api/posts/1`, {
        title,
      })
      .then((res: any) => {
        resolve(res);
      });
  });
}
