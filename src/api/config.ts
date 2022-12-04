import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_X_RAPID_API_URL,
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_X_RAPID_API_KEY,
    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com',
  },
});
export const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);
