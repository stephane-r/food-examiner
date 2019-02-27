import axios from 'axios';

const unsplashApi = {
  getImages: async (page = 1) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/images?page=${page}`
      );
      const results = response.data.results.map(r => {
        return {
          id: r.id,
          urls: r.urls,
          authorName: r.user.name,
          authorUrl: r.user.links.html
        };
      });
      return results;
    } catch (err) {
      return err.response.data.err.toString();
    }
  },

  getRandomImage: async () => {
    try {
      const url = "http://localhost:3001/api/images/random";
      const response = await axios.get(url, {});
      const { data } = response;
      const imageUrl = data.urls.regular;
      const imageAuthorUrl = data.user.links.html;
      const imageAuthorName = data.user.name;
      return {
        imageUrl,
        imageAuthorUrl,
        imageAuthorName
      };
    } catch (err) {
      return err.response.data.err;
    }
  }
};

export default unsplashApi;
