import React from 'react';
import ProductItem from '../ProductItem';
import './favorites.scss';
import { useSelector } from 'react-redux';

function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const { favoriteItems } = favorites;


  return (
    <article className="favorites-container">
      {favoriteItems.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </article>
  );
}

export default Favorites;
