const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
if (!BASE_URL) {
  throw new Error('Required env var BASE_URL not provided');
}

export const fetcher = async (path, options = {}) => {
  const fullUrl = `${BASE_URL}${path}`;
  const response = await fetch(fullUrl, options);
  return response.json();
};

export const swrConfig = {
  fetcher,
};
