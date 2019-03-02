import axios from "axios";

import apiBaseUrl from "./apiBaseUrl";

const unsplashApi = {
  getImages: async ({ page = 1 }) => {
    
    try {
      const response = await axios.get(`${apiBaseUrl}/api/images?page=${page}`);
      const results = response.data.results.map(r => {
        return {
          id: r.id,
          urls: r.urls,
          description: r.description,
          authorName: r.user.name,
          authorUrl: r.user.links.html
        };
      });
      const payload = {
        results,
        totalPages: response.data.total_pages
      };
      return payload;
    
    } catch (error) {
      throw error.response.data.errors.join(', ');
    }
  },

  getRandomImage: async () => {
    try {
      const url = `${apiBaseUrl}/api/images/random`;
      const response = await axios.get(url, {});
      const { data } = response;
      const imageUrl = data.urls.regular;
      const imageAuthorUrl = data.user.links.html;
      const imageAuthorName = data.user.name;
      const imageDescription = data.description;
      return {
        imageUrl,
        imageAuthorUrl,
        imageAuthorName,
        imageDescription
      };
    } catch (error) {
      throw error.response.data.errors.join(', ');
    }
  }
};

export default unsplashApi;
