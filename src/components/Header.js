import React from "react";

import lock from "../assets/lock.png";
import logo from "../assets/logo.png";
import phone from "../assets/phone.png";
import letter from "../assets/letter.png";
import profile from "../assets/profile.png";
import bucket from "../assets/bucket.png";

import "./Header.scss";

const Header = () => (
  <header>
    <div className="content-head">
      <div className="content-head__left">
        <img src={phone} alt="phone" />
        <span className="contact">293 939 098</span>
        <img src={letter} alt="mail" />
        <span className="contact">kontakt@aurorabox.pl</span>
      </div>
      <div className="content-head__right">
        <img src={lock} alt="lock" />
        <span className="profile">Zaloguj się</span>
        <img src={profile} alt="profile" />
        <span className="profile">Załóż konto</span>
      </div>
    </div>
    <div className="horizontal-line" />
    <div className="content-middle">
      <div className="content-middle__left">
        <img src={logo} alt="logo" />
      </div>
      <div className="content-middle__center">
        <input placeholder="Co chcesz kupić?" />
      </div>
      <div className="content-middle__right">
        <img src={bucket} alt="bucket" />
        <span className="profile">Twój koszyk</span>
        <div>
          <span className="profile">2</span>
        </div>
      </div>
    </div>
    <div className="content-navline">
      <span>Kategorie</span>
      <span>Nowości</span>
      <span>Promocje</span>
      <span>wyprzedaże</span>
      <span>Kolekcje</span>
      <span>Nasza oferta</span>
      <span>Trendy 2018</span>
      <span>Blog</span>
      <span>Kontakt</span>
    </div>
  </header>
);

export default Header;
