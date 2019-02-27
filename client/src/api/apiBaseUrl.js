let apiBaseUrl = "http://localhost:3001";
if (process.env.NODE_ENV === "production") {
  apiBaseUrl = "http://localhost:3002";
}

export default apiBaseUrl;
