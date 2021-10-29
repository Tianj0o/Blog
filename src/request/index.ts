import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import type {TTrequestConfig} from './type'
import { BASE_URL, TIME_OUT } from "./config";
class TTrequest {
  instance: AxiosInstance;

  constructor(config: TTrequestConfig) {
    this.instance = axios.create(config);
    this.instance.interceptors.response.use((res) => {
      return res.data;
    });
  }
  request<T=AxiosResponse>(config: TTrequestConfig): Promise<T> {
    return new Promise((resolve) => {
      this.instance.request<unknown,T>(config).then((res) => {
        resolve(res);
      });
    });
  }
  get<T>(config:TTrequestConfig){
    return this.request<T>({...config,method:'GET'})
  }
  post<T>(config:TTrequestConfig){
    return this.request<T>({...config,method:'POST'})
  }
}

const TR = new TTrequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});
export default TR;
