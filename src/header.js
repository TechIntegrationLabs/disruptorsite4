import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentPath }) => {
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const [header, setHeader] = useState(null);
  const [headerMenu, setHeaderMenu] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/api/header-data`)
      .then(response => response.json())
      .then(data => {
        setHeader(data.data[0]); // Accessing the header data from the response
      })
      .catch(error => console.error('Error fetching header data:', error));

    fetch(`${apiUrl}/api/header-menu`)
      .then(response => response.json())
      .then(data => {
        setHeaderMenu(data); // Accessing the header data from the response
      })
      .catch(error => console.error('Error fetching header menu data:', error));

    // Preload header logo image
    const headerLogoImg = new Image();
    headerLogoImg.src = `${apiUrl}/${header?.header_logo}`;

    // Preload mobile menu logo image
    const mobileMenuLogoImg = new Image();
    mobileMenuLogoImg.src = '/images/logo-menu.png';

  }, [apiUrl, header]);

  if (!header) {
    return <div>Loading...</div>;
  }
  return (
    <header className="header">
    <div className="container hide-res">
      <div className="row va-ctr">
        <div className="col-sm-3">
          <figure>
          <Link to="/">
              {header ? (
                  <img src={`${apiUrl}/${header.header_logo}`} alt="Logo" className="main-logo" />
              ) : (
                  <div>Loading...</div>
              )}
            </Link>
          </figure>
        </div>
        <div className="col-sm-6 text-center">
          <ul className="navigation">
          {headerMenu.map((menuItem, index) => (
              <li key={index}>
                <Link to={'/' + menuItem.menu_name} className="shuffle">{menuItem.menu_name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-sm-3 text-right">
          <Link to={header.header_right_side_anchor_link} className="primary-btn">
          {header.header_right_side_anchor_text} <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1H11M11 1V11M11 1L1 11" stroke="#F1EDE9" stroke-width="2"/>
          </svg>
          </Link>
        </div>
      </div>
    </div>
    <div className="container show-res">
      <div className="row va-ctr">
        <div className="col-xs-8">
          <figure>
           <figure>
          <Link to="/">
              {header ? (
                  <img src={`${apiUrl}/${header.header_logo}`} alt="Logo" className="main-logo" />
              ) : (
                  <div>Loading...</div>
              )}
            </Link>
          </figure>
          </figure>
        </div>
        <div className="col-xs-4 text-right">
          <button type="button" className="showmenu" style={{background: 'none', border: 'none', cursor: 'pointer'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 15H21" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 9H21" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>


    <div className="mobile-menu">
      <div className="container">
        <div className="row">
        <div className="col-sm-12">
          <div className="main-head">
            <div className="row va-ctr">
              <div className="col-xs-8">
                <figure>
                  <Link to="/">
                    <img src="/images/logo-menu.png" alt="*" />
                  </Link>
                </figure>
              </div>
              <div className="col-xs-4 text-right">
                <button type="button" className="hidemenu" style={{background: 'none', border: 'none', cursor: 'pointer'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18" stroke="#F1EDE9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 6L18 18" stroke="#F1EDE9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="main-menu-xs">
            <div className="row">
              <div className="col-xs-12">
                <ul className="navigation">
                  {headerMenu.map((menuItem, index) => (
              <li key={index}>
                <Link to={'/' + menuItem.menu_name} className={currentPath === menuItem.menu_name ? 'active' : ''}>{menuItem.menu_name}</Link>
              </li>
            ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="menu-xs-btm">
            <div className="row">
              <div className="col-xs-12">
                <h4>Disruptors Media <br/> &copy;2024</h4>
                <p>Disrupting the industry with optimal <br/> marketing solutions for your brand.</p>
              </div>
            </div>
          </div>
        </div>
          
        </div>
      </div>
    </div>

  </header>
  );
};

export default Header;
