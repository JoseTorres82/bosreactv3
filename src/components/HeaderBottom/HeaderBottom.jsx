import React, { useEffect, useState } from 'react';
import { HeaderBottomStyled } from './HeaderBottomStyles';

import { TfiBag } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

function HeaderBottom() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderBottomStyled >
   
      <div className={isScrolled ? 'scrolled container' : ''}>
        <div className="ContenedorNavegacion">
          <div className="logoContainer">
            <Link to="/">
              <img src="logo.svg" alt="Header Logo" />
              <h1>
                Buenas Olas <span>Store</span>
              </h1>
            </Link>
          </div>
          <div className="bagContainer">
            <span>0</span>
            <TfiBag className="bag" />
          </div>
        </div>
      </div>
    </HeaderBottomStyled>
  );
}

export default HeaderBottom;

