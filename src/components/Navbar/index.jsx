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
import { Menu } from '@headlessui/react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const [width] = useWindowSize();
  const theme = useSelector((state) => state);
  const { darkMode } = theme;
  const dispatch = useDispatch();

  const handleChangeMode = () => {
    dispatch(changeMode());
  };

  const { t } = useTranslation();

  return (
    <nav className="nav">
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
              {width > 768 && <div>{t('navbar.favorite')}</div>}
            </div>
          </Link>
          <Link to="/cart">
            <div className="nav-btn cart">
              <div>
                <Cart />
              </div>
              {width > 768 && <div>{t('navbar.cart')}</div>}
            </div>
          </Link>
          <div className="nav-btn world">
            <Menu as="div" className="header__menu">
              <Menu.Button as="div" className="header__menu__button">
                <World />
              </Menu.Button>
              <Menu.Items className="header__menu__items">
                <Menu.Item
                  as="div"
                  className="header__menu__item"
                  onClick={(e) => i18n.changeLanguage(e.target.innerHTML)}
                >
                  EN
                </Menu.Item>
                <Menu.Item
                  as="div"
                  className="header__menu__item"
                  onClick={(e) => {
                    i18n.changeLanguage(e.target.innerHTML);
                    
                  }}
                >
                  TR
                </Menu.Item>
              </Menu.Items>
            </Menu>

            {width > 768 && <div>{t('navbar.language')} {i18n.language} </div>}
          </div>
          <div className="nav-btn world">
            <div onClick={() => handleChangeMode()}>
              {darkMode ? <Sun /> : <Moon />}
            </div>
            {width > 768 && <div>{t('navbar.theme')}</div>}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
