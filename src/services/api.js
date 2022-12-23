import axios from "axios";

const BASE_URL = "https://api-shortly-b5hn.onrender.com";

function createConfig(token) {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  return config;
}

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/signup`, body);
  return promise;
}

function signIn(body) {
  const promise = axios.post(`${BASE_URL}/signin`, body);
  return promise;
}

function shortenUrl(body, token) {
  const config = createConfig(token);
  const promise = axios.post(`${BASE_URL}/urls/shorten`, body, config);
  return promise;
}

function getUrlById(id) {
  const promise = axios.get(`${BASE_URL}/urls/${id}`);
  return promise;
}

function getShortenedUrl(shortUrl) {
  return `${BASE_URL}/urls/open/${shortUrl}`;
}

function deleteUrl(id, token) {
  const config = createConfig(token);
  const promise = axios.delete(`${BASE_URL}/urls/${id}`, config);
  return promise;
}

function getUserUrls(token) {
  const config = createConfig(token);
  const promise = axios.get(`${BASE_URL}/users/me`, config);
  return promise;
}

function getRanking() {
  const promise = axios.get(`${BASE_URL}/ranking`);
  return promise;
}

const api = {
  signUp,
  signIn,
  shortenUrl,
  getUrlById,
  getShortenedUrl,
  deleteUrl,
  getUserUrls,
  getRanking,
};

export default api;
