import React, { useState } from 'react';
import './products.scss';
import data from '../../utils/data';
import Product from '../ProductItem';

function Products() {
  const { products } = data;
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [backSearch, setBackSearch] = useState('');
  const [sort, setSort] = useState('Choose');

  const updateSort = (sort) => {
    setSort(sort);
    if (sort === 'Choose') {
      setFilteredProducts(products);
    }
    if (sort === 'Best-Selling') {
      const FilteredBest = products.sort(
        (itemA, itemB) => itemA.countInStock - itemB.countInStock,
      );

      setFilteredProducts(FilteredBest);
    }

    if (sort === 'Low-to-High') {
      const FilteredLow = products.sort(
        (itemA, itemB) => itemA.price - itemB.price,
      );

      setFilteredProducts(FilteredLow);
    }

    if (sort === 'High-to-Low') {
      const FilteredHigh = products.sort(
        (itemA, itemB) => itemB.price - itemA.price,
      );

      setFilteredProducts(FilteredHigh);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const Filtered = products.filter((item) =>
      item.slug.toLowerCase().includes(search.toLowerCase()),
    );

    setBackSearch(search);
    setFilteredProducts(Filtered);

    setSearch('');
    console.log(backSearch);
  };

  return (
    <>
      <div className="search-area-container">
        <div className="sort-area">
          <span className="sort-area-sort">Sort by:</span>
          <select
            value={sort}
            name="sort"
            id="sort"
            onChange={(e) => updateSort(e.target.value)}
          >
            <option value="Choose">Choose</option>
            <option value="Best-Selling">Best Selling Products</option>
            <option value="Low-to-High">Price: Low to High</option>
            <option value="High-to-Low">Price: High to Low</option>
          </select>
        </div>

        <form className="search-form">
          <input
            type="input"
            id="searchTerm"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onClick={() => setBackSearch('')}
          />
          <button className="searchButton" onClick={(e) => handleSubmit(e)}>
            search
          </button>
        </form>
      </div>

      <article className="products-container">
        {!search && backSearch 
          ? filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))
          : products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </article>
    </>
  );
}

export default Products;
