import { AppConstants } from './app.constant.d';

export const appConstants: AppConstants = {
  api_key: import.meta.env.VITE_API_KEY,
  api_uri: `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`,
};
