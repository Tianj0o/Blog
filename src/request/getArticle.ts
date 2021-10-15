import axios from "axios";
import { BASE_URL } from "./config";
export default function(title: string): Promise<unknown> {
  return new Promise((resolve) => {
    axios
      .post(`${BASE_URL}/posts/1`, {
        title,
      })
      .then((res: unknown) => {
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
}
