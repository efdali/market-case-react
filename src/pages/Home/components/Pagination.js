import React from 'react';
import { useSelector } from 'react-redux';
import { PRODUCTS_PER_PAGE } from 'contants/';
import { NextArrowSvg, PrevArrowSvg } from 'shared/Icons';
import {
  PaginationWrapper,
  PaginationIconButton,
  PaginationButton,
} from './styles';
import Flex from 'shared/Flex';
import useQuery from 'hooks/useQuery';

function Pagination() {
  const setQuery = useQuery().setQuery;
  const { totalCount, page } = useSelector((state) => state.products);
  const totalPage = Math.ceil(totalCount / PRODUCTS_PER_PAGE);
  let startPage;
  let endPage;

  if (totalPage < 9) {
    startPage = 1;
    endPage = totalPage;
  } else {
    if (page <= 6) {
      startPage = 1;
      endPage = 10;
    } else if (page + 4 >= totalPage) {
      startPage = totalPage - 9;
      endPage = totalPage;
    } else {
      startPage = page - 5;
      endPage = page + 4;
    }
  }

  var pages = [...Array(endPage + 1 - startPage).keys()].map(
    (i) => startPage + i,
  );

  return (
    <PaginationWrapper>
      <PaginationIconButton
        right
        disabled={page <= 1}
        onClick={(e) => {
          e.preventDefault();
          setQuery('page', page - 1);
        }}
      >
        <PrevArrowSvg />
        Prev
      </PaginationIconButton>
      <Flex className="wrap" centered>
        {pages.map((range) => (
          <PaginationButton
            active={page === range}
            key={'left-paginate-' + range}
            onClick={(e) => {
              e.preventDefault();
              setQuery('page', range);
            }}
          >
            {range}
          </PaginationButton>
        ))}
      </Flex>
      <PaginationIconButton
        disabled={page >= totalPage}
        onClick={(e) => {
          e.preventDefault();
          setQuery('page', page + 1);
        }}
      >
        Next
        <NextArrowSvg />
      </PaginationIconButton>
    </PaginationWrapper>
  );
}

export default Pagination;
