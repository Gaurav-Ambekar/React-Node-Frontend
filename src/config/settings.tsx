const URLS = {
  localhost: 'http://localhost:4000/backend/',
  server: 'http://server6.interlinkconsultant.com/maverix/',
};

export const BASE_URL = process.env.PUBLIC_URL;
export const BACKEND_URL =
  process.env.NODE_ENV !== 'production' ? URLS.localhost : URLS.server;
export const API_ACCESS_KEY = 'ZkC6BDUzxz';
export const TITLE = {
  main: 'MADE TO MEASURE',
  sub: 'MTM',
};
export const ROLE = [
  { label: '2020-2021', value: '2020-2021' },
  { label: '2019-2020', value: '2019-2020' },
];
