import useSWR from 'swr';
export const useAuth = () => {
  const url = '/auth/refresh-token';
  const { data, error } = useSWR(url);
  return {
    isLoading: !data && !error,
    isSuccess: data,
  };
};
