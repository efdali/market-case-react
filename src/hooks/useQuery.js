import qs from 'qs';
import { history } from 'App';

function useQuery() {
  const query = qs.parse(history.location.search, {
    ignoreQueryPrefix: true,
  });

  function setQuery(name, value) {
    history.push({
      search: qs.stringify(
        {
          ...query,
          [name]: value,
        },
        { arrayFormat: 'brackets', encode: false },
      ),
    });
  }

  return { query, setQuery };
}

export default useQuery;
