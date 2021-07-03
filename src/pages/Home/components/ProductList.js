import React from 'react';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import {
  productsSelector,
  loadingSelector,
} from 'store/slices/productSlices';
import { addProduct } from 'store/slices/basketSlices';
import Button from 'shared/Button';
import Loading from 'shared/Loading';
import {
  ProductListContainer,
  ProductImageWrapper,
  ProductImage,
  ProductName,
  ProductPrice,
} from './styles';

function ProductList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(loadingSelector);
  const products = useSelector(productsSelector);

  if (isLoading) {
    return <Loading />;
  }

  if (products.length === 0) {
    return <p>No products were found matching your search.</p>;
  }

  return (
    <ProductListContainer>
      {products.map((product) => (
        <div
          key={'productlist-' + product.slug}
          css={`
            display: flex;
            flex-direction: column;
          `}
        >
          <ProductImageWrapper>
            <ProductImage
              src="http://cdn.getir.com/product/5fd70d8702db165db82ffa9a_tr_1608290170079.jpeg"
              alt={product.slug}
              loading="lazy"
            />
          </ProductImageWrapper>
          <ProductPrice>₺ {product.price}</ProductPrice>
          <ProductName>{product.name}</ProductName>
          <Button
            onClick={() => {
              dispatch(addProduct(product));
            }}
            css={`
              margin-top: auto;
            `}
          >
            add
          </Button>
        </div>
      ))}
    </ProductListContainer>
  );
}

export default ProductList;
