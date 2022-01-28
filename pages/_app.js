import '../styles/globals.css'
import axios from 'axios';
import nookies from 'nookies';

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

axios.interceptors.request.use((config) => {
  const getToken = nookies.get(null, 'token')
  const token = getToken.token
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
