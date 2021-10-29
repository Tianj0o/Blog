let BASE_URL = "";
const TIME_OUT = 3000;
if (process.env.NODE_ENV === "development") {
  BASE_URL = "/api";
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "http://121.5.224.241:8888";
}

export { BASE_URL, TIME_OUT };
