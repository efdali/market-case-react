import React, { useLayoutEffect } from 'react';
import { Wrapper, TabButton, PageTitle } from './components/styles';
import Basket from './components/Basket';
import ProductList from './components/ProductList';
import FilterAside from './components/FilterAside';
import Flex from 'shared/Flex';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import {
  initFilters,
  itemTypeSelector,
} from 'store/slices/productSlices';
import { useSelector, useDispatch } from 'react-redux';
import { ITEM_TYPES } from 'contants';
import Pagination from './components/Pagination';
import useQuery from 'hooks/useQuery';
import useWindowSize from 'hooks/useWindowSize';

export default function HomePage() {
  const itemType = useSelector(itemTypeSelector);
  const dispatch = useDispatch();
  const { query, setQuery } = useQuery();
  const { width } = useWindowSize();

  useLayoutEffect(() => {
    let page = parseInt(query.page || 1);
    let brands = query.brands || [];
    let tags = query.tags || [];
    let sort = query.sort || 'price-asc';
    let itemType = query.itemType || 'mug';
    dispatch(initFilters({ page, sort, brands, tags, itemType }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <Wrapper as={'main'}>
      <FilterAside />
      <div
        css={`
          width: 100%;
        `}
      >
        <PageTitle>Products</PageTitle>
        <Flex
          centered
          css={`
            margin-bottom: 16px;
            justify-content: flex-start;
          `}
        >
          {ITEM_TYPES.map((item) => (
            <TabButton
              key={item + '-type'}
              active={itemType === item}
              onClick={() => {
                setQuery('itemType', item);
              }}
            >
              {item}
            </TabButton>
          ))}
        </Flex>
        <ProductList />

        <Pagination />
      </div>
      {width > 1147 && <Basket />}
    </Wrapper>
  );
}
