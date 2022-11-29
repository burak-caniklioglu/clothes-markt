import React from 'react';
import { useSelector } from 'react-redux';
import Favorites from '../../components/Favorites';
import Navbar from '../../components/Navbar';
import './favorite.scss';

function FavoritePage() {
  const theme = useSelector((state) => state);
  const { darkMode } = theme;
  return (
    <>
      <Navbar />
      <main className="favorite-section" style={{backgroundColor: darkMode && '#171801'}} >
        <section className="favorite-container">
          <Favorites />
        </section>
      </main>
    </>
  );
}

export default FavoritePage;
