import { AxiosRequestConfig } from "axios";

export interface TTrequestConfig extends AxiosRequestConfig {
  loading?: boolean;
}
