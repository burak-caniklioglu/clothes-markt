import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import Favorite from '../../constants/icons/favorite';
import Cart from '../../constants/icons/cart';
import World from '../../constants/icons/world';
import Moon from '../../constants/icons/moon';
import Sun from '../../constants/icons/sun';
import useWindowSize from '../../hooks/useWindowSize';
import Logo from '../../constants/icons/logo';
import { useDispatch, useSelector } from 'react-redux';
import { changeMode } from '../../features/themeSlice';

function Navbar() {
  const [width] = useWindowSize();
  const theme = useSelector((state) => state);
  const { darkMode } = theme;
  console.log(darkMode);
  const dispatch = useDispatch();

  const handleChangeMode = () => {
    dispatch(changeMode());
  };

  return (
    <div className="nav">
      <div className="nav-wrapper">
        <div className="nav-logo">
          <Link to="/">
            <Logo aria-label="logo" name="logo" />
          </Link>
        </div>
        <div className="nav-btns">
          <Link to="/favorite">
            <div className="nav-btn favorite">
              <div>
                <Favorite />
              </div>
              {width > 768 && <div>Favorites</div>}
            </div>
          </Link>
          <Link to="/cart">
            <div className="nav-btn cart">
              <div>
                <Cart />
              </div>
              {width > 768 && <div>Shopping Cart</div>}
            </div>
          </Link>
          <div className="nav-btn world">
            <div>
              <World />
            </div>
            {width > 768 && <div>Language</div>}
          </div>
          <div className="nav-btn world">
            <div onClick={() => handleChangeMode()}>
              {darkMode ? <Sun /> : <Moon />}
            </div>
            {width > 768 && <div>Theme</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
