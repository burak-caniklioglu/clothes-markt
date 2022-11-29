import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar';
import Products from '../../components/Products';
import './Main.scss';

function Main() {
  const theme = useSelector((state) => state);
  const { darkMode } = theme;
  return (
    <>
      <Navbar />
      <main className="main-section" style={{backgroundColor: darkMode && '#171801'}} >
        <section className="main-container">
          <Products />
        </section>
      </main>
    </>
  );
}

export default Main;
