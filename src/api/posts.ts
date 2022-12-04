import useSWR from 'swr';
import { fetcher } from './config';

export const getAllPostsData = () => {
  const { data, error } = useSWR('/news/top/50', fetcher);
  return {
    posts: data,
    isLoading: !error && !data,
    isError: error,
  };
};
