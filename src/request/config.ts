let BASE_URL = "";

if (process.env.NODE_ENV === "development") {
  BASE_URL = "/api";
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "http://121.5.224.241";
  console.log("hhh");
}

export { BASE_URL };
