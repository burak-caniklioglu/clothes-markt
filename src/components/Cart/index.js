import React from 'react';
import { useSelector } from 'react-redux';
import useWindowSize from '../../hooks/useWindowSize';
import './cartItem.scss';
import { useTranslation } from 'react-i18next';
import CartLarge from './CartLarge';
import CartMobile from './CartMobile';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const [width] = useWindowSize();
  const { t } = useTranslation();

  return (
    <article>
      {cartItems.length === 0 ? (
        <div style={{ fontSize: '2rem', color: 'white' }}>{t('cart.empty')}</div>
      ) : (
        <div>{width > 768 ? <CartLarge /> : <CartMobile />}</div>
      )}
    </article>
  );
}

export default Cart;
