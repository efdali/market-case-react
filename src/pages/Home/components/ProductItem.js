import { useDispatch } from 'react-redux';
import Flex from 'shared/Flex';
import {
  ProductItemContainer,
  ProductTitle,
  QuantityButton,
  QuantityContainer,
} from './styles';

import {
  decreaseQuantity,
  increaseQuantity,
} from 'store/slices/basketSlices';

export default function BasketProductItem({ item }) {
  const dispatch = useDispatch();
  return (
    <ProductItemContainer>
      <div>
        <ProductTitle>{item.name}</ProductTitle>
        <span className="price">₺{item.price}</span>
      </div>
      <Flex>
        <QuantityButton
          onClick={() => dispatch(decreaseQuantity(item.slug))}
        >
          -
        </QuantityButton>
        <QuantityContainer>{item.quantity}</QuantityContainer>
        <QuantityButton
          onClick={() => dispatch(increaseQuantity(item.slug))}
        >
          +
        </QuantityButton>
      </Flex>
    </ProductItemContainer>
  );
}
