import React, { useEffect, useRef } from 'react';
import {
  FilterArea,
  MobileAccordionTitle,
  MobileAccordionContent,
} from './styles';
import Card from 'shared/Card';
import Checkbox from 'shared/Checkbox';
import { SORT_ITEMS } from 'contants/';
import { useDispatch, useSelector } from 'react-redux';
import {
  brandSelector,
  sortSelector,
  tagSelector,
} from 'store/slices/productSlices';
import {
  companiesRequested,
  companiesSelector,
} from 'store/slices/companiesSlices';
import { tagsRequested, tagsSelector } from 'store/slices/tagsSlices';
import FilterCard from './FilterCard';
import useQuery from 'hooks/useQuery';

function FilterAside() {
  const accordionRef = useRef();
  const dispatch = useDispatch();
  const sortValue = useSelector(sortSelector);
  const brandFilters = useSelector(brandSelector);
  const tagFilters = useSelector(tagSelector);
  const { companies, isLoading: companiesLoading } =
    useSelector(companiesSelector);
  const { tags, isLoading: tagsLoading } = useSelector(tagsSelector);

  const setQuery = useQuery().setQuery;

  useEffect(() => {
    dispatch(companiesRequested());
    dispatch(tagsRequested());
  }, [dispatch]);

  return (
    <FilterArea>
      <MobileAccordionTitle
        role="button"
        onClick={(e) => {
          if (accordionRef.current) {
            accordionRef.current.classList.toggle('active');
            e.target.classList.toggle('active');
          }
        }}
      >
        Filters
      </MobileAccordionTitle>
      <MobileAccordionContent ref={accordionRef}>
        <Card title="Sorting">
          {SORT_ITEMS.map((sort) => (
            <Checkbox
              key={sort.value}
              name="sort"
              value={sort.value}
              checked={sortValue === sort.value}
              onChange={({ target }) => {
                setQuery({ sort: target.value });
              }}
              radio
            >
              {sort.text}
            </Checkbox>
          ))}
        </Card>
        <FilterCard
          title="Brands"
          searchPlaceholder="Search brand"
          data={companies}
          filterData={brandFilters}
          isLoading={companiesLoading}
          type="brands"
        />
        <FilterCard
          title="Tags"
          searchPlaceholder="Search tag"
          data={tags}
          filterData={tagFilters}
          isLoading={tagsLoading}
          type="tags"
        />
      </MobileAccordionContent>
    </FilterArea>
  );
}

export default FilterAside;
