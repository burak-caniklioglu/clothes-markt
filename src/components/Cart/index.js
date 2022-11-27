import React from 'react';
import './cartItem.scss';
import { useDispatch, useSelector } from 'react-redux';
import useWindowSize from '../../hooks/useWindowSize';
import {
  addToCart,
  decreaseCart,
  removeFromCart,
} from '../../features/cartSlice';
import Plus from '../../constants/icons/plus';
import Minus from '../../constants/icons/minus';
import Garbage from '../../constants/icons/garbage';
import Favorite from '../../constants/icons/favoriteplus';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);
  const dispatch = useDispatch();
  const [width] = useWindowSize();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <article>
      {cartItems.length === 0 ? (
        <div style={{ fontSize: '2rem', color: 'white' }}>Sepet Boş.</div>
      ) : (
        <div className="cart-container">
          {width > 768 ? (
            <div className="cart-wrapper-xlarge">
              <table className="cart-table">
                <thead className="cart-table-head">
                  <tr className="cart-table-head-row">
                    <th className="cart-table-head-product">Ürün</th>
                    <th className="cart-table-head-quantity">Adet</th>
                    <th className="cart-table-head-favorite">
                      Favorilere Ekle
                    </th>
                    <th className="cart-table-head-price">Adet Fiyatı</th>
                    <th className="cart-table-head-price">Ara Toplam</th>
                    <th className="cart-table-head-remove">Sepetten Kaldır</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((item) => (
                    <tr key={item?.slug} className="cartItem-item">
                      <td className="cartItem-item-name">
                        <img
                          className="cartItem-item-name-image"
                          src={item.image}
                          alt=""
                        />
                        &nbsp;
                        <span>{item?.name}</span>
                      </td>
                      <td className="cartItem-item-quantity">
                        <div className="cartItem-item-quantity-wrapper">
                          <div
                            className="plus"
                            onClick={() => handleAddToCart(item)}
                          >
                            <Plus />
                          </div>
                          <input
                            type="text"
                            className="input"
                            value={item.cartQuantity}
                            disabled
                          />
                          <div className="minus">
                            {item.cartQuantity === 1 ? (
                              <div onClick={() => handleRemoveFromCart(item)}>
                                <Garbage />{' '}
                              </div>
                            ) : (
                              <div onClick={() => handleDecreaseCart(item)}>
                                <Minus />
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="cartItem-item-favorite">
                        <Favorite />
                      </td>
                      <td className="cartItem-item-price">{item.price} TL</td>
                      <td className="cartItem-item-price">
                        {item.price * item.cartQuantity} TL
                      </td>
                      <td
                        className="cartItem-item-remove"
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        {' '}
                        <Garbage size="2.4rem" />{' '}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div></div>
          )}

          <div className="cart-checkout">
            <ul className="cart-checkout-list">
              <li>
                <div>
                  Toplam Ürün (
                  {cartItems.reduce((a, c) => a + c.cartQuantity, 0)}){'  '}:{' '}
                  {'  '}
                  {cartItems.reduce(
                    (a, c) => a + c.cartQuantity * c.price,
                    0,
                  )}{' '}
                  TL
                </div>
              </li>
              <li>
                <button className='cart-checkout-button'>Devam Et</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </article>
  );
}

export default Cart;
