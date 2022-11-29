import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '../../components/Cart';
import Navbar from '../../components/Navbar';
import './cartPage.scss';

function CartPage() {
  const theme = useSelector((state) => state);
  const { darkMode } = theme;
  return (
    <>
      <Navbar />
      <main
        className="cartPage-section"
        style={{ backgroundColor: darkMode && '#171801' }}
      >
        <section className="cartPage-container">
          <Cart />
        </section>
      </main>
    </>
  );
}

export default CartPage;
