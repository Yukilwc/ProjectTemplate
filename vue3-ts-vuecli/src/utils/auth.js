// 用来验证用户身份是否失效
import Cookies from 'js-cookie'
const TokenKey = 'AUTH-HXY-TRADE-TOKEN'

export function getToken() {
  // let cookies = Cookies.get(TokenKey)
  // return localStorage.getItem(TokenKey)
  // return 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoie1wiY29ublR5cGVcIjoyLFwic3lzVHlwZVwiOjEsXCJ1c2VySWRcIjoxLFwib3BlbklkXCI6bnVsbCxcInVzZXJOYW1lXCI6XCJhZG1pblwiLFwibmFtZVwiOm51bGwsXCJuaWNrTmFtZVwiOlwi566h55CG5ZGYXCIsXCJwbGF0Zm9ybVwiOm51bGwsXCJwaG9uZU51bWJlclwiOlwiMTMwMjAxNjA4MjFcIixcInBhc3NXb3JkXCI6bnVsbCxcImVtYWlsXCI6bnVsbCxcImNvbXBhbnlJZFwiOjEsXCJjb21wYW55VHlwZVwiOjEsXCJjb21wYW55TmFtZVwiOlwi5a6B5rOi5riv5Lic5Y2X54mp5rWB6ZuG5Zui5pyJ6ZmQ5YWs5Y-4XCIsXCJsb2dvXCI6XCJodHRwczovL3RndDU2Lm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vdGd0NTYvY29tcGFueS9iN2FhMjAzMmM0MWM0YmM3OThlYWYwNmJiZDc4ODRiYi5wbmdcIixcInVzZXJMZXZlbFwiOjAsXCJ1c2VyVHlwZVwiOm51bGwsXCJwZXJtaXNzaW9uc1wiOltcIlRTLTA5MDdcIixcIlRTLTA5MDhcIixcIlRTLTA5MDVcIixcIlRTLTA5MDZcIixcIlRTLTA5MDNcIixcIlRTLTA5MDRcIixcIlRTLTA2MDFcIixcIlRTLTA5MDFcIixcIlRTLTA2MDJcIixcIlRTLTA5MDJcIixcIlRTLTEzXCIsXCJUUy0wNjAzXCIsXCJUUy0wNjA2XCIsXCJUUy0xMzAyXCIsXCJUUy0wNzAyXCIsXCJUUy0wNzA0XCIsXCJUUy0wNzAzXCIsXCJUUy0wN1wiLFwiVFMtMDZcIixcIlRTLTA5XCIsXCJUUy0wNjExXCIsXCJUUy0wNVwiLFwiVFMtMDYxMlwiLFwiVFMtMDRcIixcIlRTLTAxMDFcIixcIlRTLTAxMDJcIixcIlRTLTAxMDNcIixcIlRTLTA5MTFcIixcIlRTLTAxMDRcIixcIlRTLTAxMDVcIixcIlRTLTA1MDVcIixcIlRTLTA1MDJcIixcIlRTLTA1MDFcIixcIlRTLTA1MDRcIixcIlRTLTA0MDFcIixcIlRTLTAxXCIsXCJUUy0wNTAzXCIsXCJUUy0wNDAyXCIsXCJUUy0wOTA5XCIsXCJUUy0wNDAzXCIsXCJUUy0wNDA0XCIsXCJUUy0wNDA1XCJdLFwiaGVhZFBpY1wiOm51bGwsXCJiaW5kTXBVc2VJZFwiOm51bGwsXCJuYW1lQ25cIjpudWxsLFwibmFtZUVuXCI6bnVsbCxcImJsYWNrbGlzdEZsYWdcIjpudWxsfSIsImV4cCI6MjUzMzcwNzM2MDAwfQ.ELj-KIuMZK09C_E4ynV4oZsfzRSd2xh_y12cOxenz7o'
  // return cookies
  return window.sessionStorage.getItem(TokenKey) || ''
}

export function setToken(token) {
  // let lostDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
  // let lostDate = new Date(new Date().getTime()+60*60*1000)
  // return Cookies.set(TokenKey,`Bearer ${token}`, {expires: lostDate})
  // return Cookies.set(TokenKey, `${token}`, { expires: lostDate })
  // return localStorage.setItem(TokenKey, `${token}`)
  return window.sessionStorage.setItem(TokenKey, `${token || ''}`)
}

export function removeToken() {
  // return localStorage.removeItem(TokenKey)
  // return Cookies.remove(TokenKey)
  return window.sessionStorage.removeItem(TokenKey)
}
