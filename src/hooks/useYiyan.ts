import { YYRequest } from "@/request/index";

export default function useYiyan() {
  return YYRequest.get<yiyan>({});
}
interface yiyan {
  hitokoto: string;
}
