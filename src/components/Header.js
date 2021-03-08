import React from "react";
import Logo from "../img/logo.svg";
import History from "./History";

const Header = () => {
  const handleClick = (e) => {
    History.push(e.target.attributes.getNamedItem("data-redirect").value);
  };

  return (
    <header id="header" className="fixed-top">
      <div className="container">
        <div className="logo float-left">
          <a href="#/" onClick={(e) => handleClick(e)} data-redirect="/" className="scrollto">
            <img src={Logo} alt="logo" width="150" className="img-fluid" />
          </a>
        </div>

        <nav className="main-nav float-right d-none d-lg-block">
          <ul>
            <li>
              <a href="#/" onClick={(e) => handleClick(e)} data-redirect="/">
                Home
              </a>
            </li>
            <li className="drop-down">
              <a href="#/">Enterprises</a>
              <ul>
                <li>
                  <a href="#/" onClick={(e) => handleClick(e)} data-redirect="/Services">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#/" onClick={(e) => handleClick(e)} data-redirect="/Products">
                    Products
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#/" onClick={(e) => handleClick(e)} data-redirect="/Technology">
                Technology
              </a>
            </li>
            <li className="drop-down">
              <a href="#/">Resourses </a>
              <ul>
                <li>
                  <a href="Under_Maintenance.html">Company Blog</a>
                </li>
                <li>
                  <a href="Under_Maintenance.html">Tech Blog</a>
                </li>
                <li>
                  <a href="Under_Maintenance.html">Research &amp; Reports </a>
                </li>
                <li>
                  <a href="Under_Maintenance.html">Case Study</a>
                </li>
              </ul>
            </li>
            <li className="drop-down">
              <a href="#/">Company</a>
              <ul>
                <li>
                  <a href="#/" onClick={(e) => handleClick(e)} data-redirect="/About">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#/" onClick={(e) => handleClick(e)} data-redirect="/Careers">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#/" onClick={(e) => handleClick(e)} data-redirect="/NewsandMedia">
                    News And Media
                  </a>
                </li>
                <li>
                  <a href="#/" onClick={(e) => handleClick(e)} data-redirect="/Partners">
                    Partners
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#/" onClick={(e) => handleClick(e)} data-redirect="/Contact">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
