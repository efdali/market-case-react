import qs from 'qs';
import { history } from 'App';

function useQuery() {
  const query = qs.parse(history.location.search, {
    ignoreQueryPrefix: true,
  });

  function setQuery(newStringObject) {
    history.push({
      search: qs.stringify(
        {
          ...query,
          ...newStringObject,
        },
        { arrayFormat: 'brackets', encode: false },
      ),
    });
  }

  return { query, setQuery };
}

export default useQuery;
