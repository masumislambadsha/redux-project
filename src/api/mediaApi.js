import axios from "axios";

const unsplashApi = import.meta.env.VITE_UNSPLASH_KEY;
// const tenorApi = import.meta.env.VITE_TENOR_KEY;
const pexelsApi = import.meta.env.VITE_PEXELS_KEY;

export async function fetchPhotos (query, page = 1, perPage = 10) {
  if (!query) {
    throw new Error("fetchPhotos requires a query string");
  }

  const res = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: { query, page, per_page: perPage },
    headers: { Authorization: `Client-ID ${unsplashApi}` }
  });

  return res.data;
}
