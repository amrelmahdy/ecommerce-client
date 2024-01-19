import axios from 'axios';
import Cookies from 'universal-cookie';
import moment from 'moment'
class AuthService {
  constructor() {
    this.token = null;
    this.refreshToken = null;
  }

  setTokens(token, refreshToken) {
    this.token = token;
    this.refreshToken = refreshToken;
  }

  async refreshAccessToken() {
    const cookies = new Cookies();
    cookies.set("last_refreshed", moment.now())
    const lastRefreshed = cookies.get("expires_at");
    const lastRfreshedFormatted = moment.unix((lastRefreshed / 1000) - 500).format("DD-MM-YY hh:mm:ss") 
    //const lastRfreshedFormatted = new Date(1705384846714) 
    try {

      console.log("refreshing token", cookies.get("expires_at"),  lastRfreshedFormatted)
      
    //   const response = await axios.post(
    //     'YOUR_REFRESH_TOKEN_ENDPOINT',
    //     { refreshToken: this.refreshToken }
    //   );

    //   const { accessToken } = response.data;
    //   this.token = accessToken;

      // Set a timeout to refresh the token again in 1 hour
    //   setTimeout(() => this.refreshAccessToken(), 60 * 60 * 1000);
    //setTimeout(() => this.refreshAccessToken(), 60);
    } catch (error) {
      console.error('Error refreshing token:', error);
      // Handle error (e.g., redirect to login page)
    }
  }

  // async login(username, password) {
  //   try {
  //     const response = await axios.post('YOUR_LOGIN_ENDPOINT', {
  //       username,
  //       password,
  //     });

  //     const { accessToken, refreshToken } = response.data;
  //     this.setTokens(accessToken, refreshToken);

  //     // Set a timeout to refresh the token in 1 hour
  //     setTimeout(() => this.refreshAccessToken(), 60 * 60 * 1000);
  //   } catch (error) {
  //     console.error('Login failed:', error);
  //     // Handle error (e.g., display error message)
  //   }
  // }

  getAccessToken() {
    return this.token;
  }
}

export default AuthService;
