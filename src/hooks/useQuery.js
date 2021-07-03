import { useMemo } from 'react';
import qs from 'qs';
import { useHistory } from 'react-router-dom';

export default function useQuery() {
  const history = useHistory();

  return useMemo(() => {
    return {
      query: qs.parse(history.location.search, {
        ignoreQueryPrefix: true,
      }),
      setQuery(name, value) {
        history.push({
          search: qs.stringify(
            {
              ...this.query,
              [name]: value,
            },
            { arrayFormat: 'brackets', encode: false },
          ),
        });
      },
    };
  }, [history]);
}
