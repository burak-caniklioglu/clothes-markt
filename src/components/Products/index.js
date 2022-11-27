import React from 'react';
import './products.scss';
import data from '../../utils/data';
import Product from '../ProductItem';

function Products() {
  const { products } = data;

  return (
    <article className="products-container">
      {products.map((product) => (
        <Product key={product.slug} product={product} />
      ))}
    </article>
  );
}

export default Products;
