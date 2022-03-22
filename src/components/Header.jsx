import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.svg";

const mainNav = [
  {
    display: "Xe máy",
    path: "/xe-may",
  },
  {
    display: "Ô tô",
    path: "/o-to",
  },
  {
    display: "Phụ tùng",
    path: "/phu-tung",
  },
  {
    display: "Dịch vụ",
    path: "/dich-vu",
  },
  {
    display: "Tin Tức",
    path: "/tin-tuc",
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__left">
            <div className="header__menu__mobile">
              <i class="bx bx-menu-alt-left"></i>
            </div>
            {mainNav.map((item, index) => (
              <div key={index} className="header__menu__left__item">
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right">
            <div className="header__menu__right__item">
              <i class="bx bx-search"></i>
            </div>
            <div className="header__menu__right__item">
              <i class="bx bxl-facebook-circle"></i>
            </div>
            <div className="header__menu__right__item">
              <i class="bx bxl-youtube"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
