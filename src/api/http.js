import axios from 'axios';
import Cookies from 'universal-cookie';
import { refreshAccessToken } from './auth';

const httpClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

let isRefreshing = false;

httpClient.interceptors.request.use(
  async (config) => {
    const cookies = new Cookies();
    const accessToken = cookies.get("access_token");

    const pathName = window.location.pathname;
    const refreshToken = cookies.get("refresh_token");
    const expirationTimestamp = Math.floor(cookies.get("expires_at") / 1000);
    const currentTimestamp = Math.floor(new Date().getTime() / 1000);

    // Check if the token is expired and the request is not the token refresh request
    if ((expirationTimestamp - currentTimestamp) < 100 && pathName !== "/login") {
      if (!isRefreshing) {
        try {
          // Set the refreshing flag
          isRefreshing = true;

          // Make the token refresh request
          const refreshedToken = await refreshAccessToken(refreshToken);

          // If the refresh is successful, update the access token
          if (refreshedToken) {
            const { access_token, expires_at } = refreshedToken;
            cookies.set("access_token", access_token);
            cookies.set("expires_at", expires_at);

            // Retry the original request with the new token
            config.headers.Authorization = `Bearer ${access_token}`;
          }
        } catch (error) {
          // Handle refresh error
          if (window.location.pathname !== "/login") {
            window.location.href = "/login";
          }
        } finally {
          // Reset the refreshing flag
          isRefreshing = false;
        }
      }
    }
    // Set the Authorization header with the current access token
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export { httpClient };