import React from 'react';
import Navbar from '../../components/Navbar';
import Products from '../../components/Products';
import './Main.scss';

function Main() {
  return (
    <>
      <Navbar />
      <main className="main-section">
        <section className="main-container">
          <Products />
        </section>
      </main>
    </>
  );
}

export default Main;
