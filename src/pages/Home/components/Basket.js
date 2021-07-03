import React, { memo } from 'react';
import { Frame, PriceFrame, FrameInner } from './styles';
import BasketProductItem from './ProductItem';
import { useSelector } from 'react-redux';
import {
  getTotalAmount,
  productsSelector,
} from 'store/slices/basketSlices';

function Basket() {
  const totalAmout = useSelector(getTotalAmount);
  const items = useSelector(productsSelector);
  return (
    <Frame>
      <FrameInner>
        {items.length === 0 ? (
          <p>No product</p>
        ) : (
          items.map((item) => (
            <BasketProductItem key={item.slug} item={item} />
          ))
        )}
        <PriceFrame>
          <FrameInner>₺{totalAmout.toFixed(2)}</FrameInner>
        </PriceFrame>
      </FrameInner>
    </Frame>
  );
}

export default memo(Basket);
