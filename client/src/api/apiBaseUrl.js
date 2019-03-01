let apiBaseUrl = "http://localhost:3001";
if (process.env.NODE_ENV === "production") {
  apiBaseUrl = "";
}

export default apiBaseUrl;
