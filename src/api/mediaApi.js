import axios from "axios";

const unsplashApi = import.meta.env.VITE_UNSPLASH_KEY;
const pexelsApi = import.meta.env.VITE_PEXELS_KEY;

export async function fetchPhotos(query, page = 1, perPage = 10) {
  const res = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: { query, page, per_page: perPage },
    headers: { Authorization: `Client-ID ${unsplashApi}` },
  });
  return res.data;
}

export const fetchVideos = async (query, perPage = 10) => {
  const res = await axios.get(`https://api.pexels.com/videos/search`, {
    params: { query, per_page: perPage },
    headers: { Authorization: `Client-ID ${pexelsApi}` },
  });
  return res.data;
};
