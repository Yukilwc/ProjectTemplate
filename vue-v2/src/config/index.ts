let baseUrl = "";
if (import.meta.env.PROD) {
  // 生产环境
  baseUrl = "http://production";
} else {
  // 开发环境
  baseUrl = "http://google.com/";
}
export { baseUrl };
