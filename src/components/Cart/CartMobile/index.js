import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  decreaseCart,
  removeFromCart,
} from '../../../features/cartSlice';
import Plus from '../../../constants/icons/plus';
import Minus from '../../../constants/icons/minus';
import Garbage from '../../../constants/icons/garbage';
import FavoritePlus from '../../../constants/icons/favoriteplus';
import Modal from '../../Modal';
import Favorite from '../../../constants/icons/favorite';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../../features/favoriteSlice';
import { useTranslation } from 'react-i18next';

function CartMobile() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const favorites = useSelector((state) => state.favorites);
  const { favoriteItems } = favorites;
  const [showModal, setShowModal] = useState();
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
    <>
      {cartItems?.map((item) => (
        <div key={item.slug} className="cart-medium">
          <div className="cart-medium-card">
            <div className="cart-medium-card-image-area">
              <img src={item.image} alt="" />
              <span className="cart-medium-card-info-area-name">
                {item?.name}
              </span>
            </div>
            <div className="cart-medium-card-info-area">
              <ul className="cart-medium-card-info-area-list">
                <li className="cart-medium-card-info-area-list-first">
                  <div className="cart-medium-card-info-area-list-quantity">
                    <div className="" onClick={() => handleAddToCart(item)}>
                      <Plus />
                    </div>
                    <input
                      type="text"
                      className=""
                      value={item?.cartQuantity}
                      disabled
                    />
                    <div className="">
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
                </li>

                <li className="cart-medium-card-info-area-list-second">
                  <div>
                    <span className="card-price">{t('cart.price')}: </span>
                    {item?.price} TL
                  </div>
                </li>
                <li className="cart-medium-card-info-area-list-second">
                  <div>
                    <span className="card-price">{t('cart.subtotal')}: </span>
                    {item?.price * item?.cartQuantity} TL
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-remove" onClick={() => setShowModal(item)}>
            <Garbage size="2.4rem" />
          </div>
          <div className="card-favorite">
            {favoriteItems?.length >= 0 &&
              (favoriteItems?.find(
                (product) => item?.slug === product?.slug,
              ) ? (
                <div onClick={() => handleRemoveFromfavorites(item)}>
                  <Favorite />
                </div>
              ) : (
                <div onClick={() => handleAddToFavorites(item)}>
                  <FavoritePlus />
                </div>
              ))}
          </div>
        </div>
      ))}
      <Modal isVisible={showModal} onClose={() => setShowModal()}>
        <div className="modal-remove">
          <div className="modal-remove-question">{t('cart.question')}</div>
          <div className="modal-remove-btns">
            <button
              className="modal-remove-btn"
              type="text"
              onClick={() => handleRemoveFromCart(showModal)}
            >
              {t('cart.yesButton')}
            </button>
            {favoriteItems?.length >= 0 &&
              !favoriteItems?.find(
                (product) => product?.slug === showModal?.slug,
              ) && (
              <button
                className="modal-remove-btn option"
                onClick={() => handleRemoveFromCartAddFavorites(showModal)}
              >
                {t('cart.addFavButton')}
              </button>
            )}
          </div>
        </div>
      </Modal>

      <div className="cart-checkout-card">
        <div className="cart-checkout-card-wrapper">
          <ul className="cart-checkout-card-wrapper-list">
            <li>
              <div>
                {t('cart.totalProducts')} (
                {cartItems.reduce((a, c) => a + c.cartQuantity, 0)}){'  '}:{' '}
                {'  '}
                {cartItems.reduce((a, c) => a + c.cartQuantity * c.price, 0)} TL
              </div>
            </li>
            <li>
              <button className="cart-checkout-card-wrapper-button">
                {t('cart.nextButton')}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CartMobile;
