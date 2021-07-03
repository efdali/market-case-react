import React, { useMemo, useState } from 'react';
import Card from 'shared/Card';
import Checkbox from 'shared/Checkbox';
import Input from 'shared/Input';
import Loading from 'shared/Loading';
import useQuery from 'hooks/useQuery';
import { useSelector } from 'react-redux';
import { totalCountSelector } from 'store/slices/productSlices';

function FilterCard({
  type,
  title,
  searchPlaceholder,
  data,
  filterData,
  isLoading,
}) {
  const { query, setQuery } = useQuery();
  const [filter, setFilter] = useState('');
  const totalCount = useSelector(totalCountSelector);

  // Filter Data
  const memoizedData = useMemo(
    () =>
      data.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase()),
      ),
    [data, filter],
  );

  // Checkbox onChange Handler
  const changeHandler = ({ target }) => {
    let brands = query[type] || [];
    if (target.checked) {
      brands = [...brands, target.value];
    } else {
      brands = brands.filter((string) => string !== target.value);
    }

    setQuery(type, brands);
  };

  return (
    <Card title={title}>
      <Input
        value={filter}
        onChange={({ target }) => setFilter(target.value)}
        placeholder={searchPlaceholder}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <Card.ScrollableContent>
          <Checkbox
            value="all"
            checked={filterData.length === 0}
            onChange={({ target }) => {
              if (target.checked) {
                setQuery(type, []);
              } else {
                return;
              }
            }}
          >
            All <span className="count">({totalCount})</span>
          </Checkbox>
          {memoizedData.length === 0 && filter.length === 0 ? (
            <p>No Data Found.</p>
          ) : (
            memoizedData.map((item, index) => (
              <Checkbox
                key={'filter-' + item.slug + index}
                value={item.slug}
                checked={filterData.includes(item.slug)}
                onChange={changeHandler}
              >
                <div>
                  {item.name}
                  <span className="count">({item.count})</span>
                </div>
              </Checkbox>
            ))
          )}
        </Card.ScrollableContent>
      )}{' '}
    </Card>
  );
}

export default FilterCard;
