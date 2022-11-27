import React from 'react';
import propTypes from 'prop-types';
import './product.scss';
import FavoritePlus from '../../constants/icons/favoriteplus';
import Cart from '../../constants/icons/cart';

function ProductItem({ product }) {
  const { brand, name, price, image } = product;
  return (
    <div className="card__item" role="none">
      <img src={image} alt="item-img" />
      <div className="product-btns">
        <div className="favorite-btn">
          <FavoritePlus />
        </div>
        <div className="cart-btn">
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
