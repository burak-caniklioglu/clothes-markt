import React, { useState } from 'react';
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
import FavoritePlus from '../../constants/icons/favoriteplus';
import Modal from '../Modal';
import Favorite from '../../constants/icons/favorite';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../features/favoriteSlice';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const favorites = useSelector((state) => state.favorites);
  const { favoriteItems } = favorites;
  const [showModal, setShowModal] = useState();
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
    setShowModal();
  };

  const handleRemoveFromCartAddFavorites = (product) => {
    dispatch(addToFavorites(product));
    dispatch(removeFromCart(product));
    setShowModal();
  };

  const handleAddToFavorites = (product) => {
    dispatch(addToFavorites(product));
  };

  const handleRemoveFromfavorites = (product) => {
    dispatch(removeFromFavorites(product));
  };

  return (
    <article>
      {cartItems.length === 0 ? (
        <div style={{ fontSize: '2rem', color: 'white' }}>Cart is empty.</div>
      ) : (
        <div className="cart-container">
          {width > 768 ? (
            <div className="cart-wrapper-xlarge">
              <table className="cart-table">
                <thead className="cart-table-head">
                  <tr className="cart-table-head-row">
                    <th className="cart-table-head-product">Product</th>
                    <th className="cart-table-head-quantity">Quantity</th>
                    <th className="cart-table-head-favorite">Add Favorites</th>
                    <th className="cart-table-head-price">Quantity Price</th>
                    <th className="cart-table-head-price">Sub Total</th>
                    <th className="cart-table-head-remove">Remove From Cart</th>
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
                            value={item?.cartQuantity}
                            disabled
                          />
                          <div className="minus">
                            {item?.cartQuantity === 1 ? (
                              <div onClick={() => setShowModal(item)}>
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
                        {favoriteItems?.length >= 0 &&
                          (favoriteItems?.find(
                            (product) => item?.slug === product?.slug,
                          ) ? (
                            <div
                              onClick={() => handleRemoveFromfavorites(item)}
                            >
                              <Favorite />
                            </div>
                          ) : (
                            <div onClick={() => handleAddToFavorites(item)}>
                              <FavoritePlus />
                            </div>
                          ))}
                      </td>
                      <td className="cartItem-item-price">{item?.price} TL</td>
                      <td className="cartItem-item-price">
                        {item?.price * item?.cartQuantity} TL
                      </td>
                      <td className="cartItem-item-remove">
                        <div onClick={() => setShowModal(item)}>
                          <Garbage size="2.4rem" />
                        </div>
                      </td>
                    </tr>
                  ))}
                  <Modal isVisible={showModal} onClose={setShowModal}>
                    <div className="modal-remove">
                      <div className="modal-remove-question">
                        Will the product be removed from the cart?
                      </div>
                      <div className="modal-remove-btns">
                        <button
                          className="modal-remove-btn"
                          type="text"
                          onClick={() => handleRemoveFromCart(showModal)}
                        >
                          Yes, I am sure
                        </button>
                        <button
                          className="modal-remove-btn"
                          onClick={() =>
                            handleRemoveFromCartAddFavorites(showModal)
                          }
                        >
                          Remove and Add to Favorites
                        </button>
                      </div>
                    </div>
                  </Modal>
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
                  Total Products (
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
                <button className="cart-checkout-button">Next</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </article>
  );
}

export default Cart;
