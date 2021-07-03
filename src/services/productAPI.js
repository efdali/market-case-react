import { PRODUCTS_PER_PAGE } from 'contants/';

const productsAPI = {
  async fetchAll(state) {
    const { sort, brandFilters, tagFilters, page, itemType } =
      state.products;

    const [sortValue, sortType] = sort.split('-');

    let filterString = '';

    if (brandFilters.length > 0) {
      filterString +=
        '&manufacturer[]=' + brandFilters.join('&manufacturer[]=');
    }

    if (tagFilters.length > 0) {
      filterString += '&tags[]=' + tagFilters.join('&tags[]=');
    }
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/items?_page=${page}&_limit=${PRODUCTS_PER_PAGE}&_sort=${sortValue}&_order=${sortType}&itemType=${itemType}${filterString}`,
    );
    const totalCount = response.headers.get('x-total-count');

    const res = await response.json();

    return [totalCount, res];
  },
};

export default productsAPI;
