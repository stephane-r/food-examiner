import axios from "axios";

import apiBaseUrl from './apiBaseUrl';

const recipePuppyApi = {
  getRecipes: async ({ keyword = "", page = 1 }) => {
    try {
        const response = await axios.get(`${apiBaseUrl}/api/recipes?keyword=${keyword}&page=${page}`);
        const { data } = response;
        const recipes = data.results.map((r) => {
          return {
            ...r,
            ingredients: r.ingredients.split(",").map(s => s.trimStart(" "))
          }
        });
      return recipes;
    } catch (err) {
      throw err.response.data.err.toString();
    }
  }
};

export default recipePuppyApi;
