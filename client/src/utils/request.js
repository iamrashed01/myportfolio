import cookie from "js-cookie";
import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

export function getAuthToken() {
  return cookie.get("auth_token") === undefined
    ? "NO"
    : cookie.get("auth_token");
}

export function resetAuthToken(token = "") {
  cookie.set("auth_token", token);
}

export function apiRequest(url, params, query = null) {
  const headers = {
    Authorization: `Bearer ${getAuthToken()}`,
    Accept: "application/json",
  };
  let requestUrl = "";
  if (query === null) {
    requestUrl = baseUrl + url.relativeUrl;
  } else {
    requestUrl = baseUrl + url.relativeUrl + query;
  }
  return axios({
    method: url.method,
    url: requestUrl,
    data: params,
    headers,
  });
}
