const companiesAPI = {
  async fetchAll() {
    const response = await fetch(
      process.env.REACT_APP_API_BASE_URL + '/companies',
    );
    return await response.json();
  },
};

export default companiesAPI;
