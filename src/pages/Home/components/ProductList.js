import React from 'react';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { productsSelector } from 'store/slices/productSlices';
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
  const { isLoading } = useSelector((state) => state.products);
  const products = useSelector(productsSelector);

  if (isLoading) {
    return <Loading />;
  }

  if (products.length === 0) {
    return <p>No product</p>;
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
              src="https://cdn.getir.com/product/6045d299a3b1ab82e4d1cccf_tr_1616163593619.jpeg"
              alt=""
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
