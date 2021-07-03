const tagsAPI = {
  async fetchAll() {
    const response = await fetch(
      process.env.REACT_APP_API_BASE_URL + '/tags',
    );
    return await response.json();
  },
};

export default tagsAPI;
