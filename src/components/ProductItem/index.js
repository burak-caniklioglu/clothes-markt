import React from 'react';
import propTypes from 'prop-types';
import './product.scss';
import FavoritePlus from '../../constants/icons/favoriteplus';
import Cart from '../../constants/icons/cart';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
import { useNavigate } from 'react-router-dom';

function ProductItem({ product }) {
  const { brand, name, price, image } = product;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate('/cart');
  };

  return (
    <div className="card__item" role="none">
      <img src={image} alt="item-img" />
      <div className="product-btns">
        <div className="favorite-btn">
          <FavoritePlus />
        </div>
        <div className="cart-btn" onClick={() => handleAddToCart(product)}>
          <Cart />
        </div>
      </div>
      <div className="card__item-content">
        <div className="card__item-info">
          <p className="card__item-info-brand">{name}</p>
          <p className="card__item-info-color">
            <b>Brand: </b>
            {brand}
          </p>
        </div>
        <div className="card__item-price">{price}</div>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  product: propTypes.shape().isRequired,
};

export default ProductItem;
