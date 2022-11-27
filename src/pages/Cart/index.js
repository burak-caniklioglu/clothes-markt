import React from 'react';
import Cart from '../../components/Cart';
import Navbar from '../../components/Navbar';
import './cartPage.scss';

function CartPage() {
  return (
    <>
      <Navbar />
      <main className="cartPage-section">
        <section className="cartPage-container">
          <Cart />
        </section>
      </main>
    </>
  );
}

export default CartPage;
