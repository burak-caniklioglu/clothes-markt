import React from 'react';
import Favorites from '../../components/Favorites';
import Navbar from '../../components/Navbar';
import './favorite.scss';

function FavoritePage() {
  return (
    <>
      <Navbar />
      <main className="favorite-section">
        <section className="favorite-container">
          <Favorites />
        </section>
      </main>
    </>
  );
}

export default FavoritePage;
