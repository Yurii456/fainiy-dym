import React from "react";
import logo from '../assets/logo.png';

export const Navigation = (props) => {
  React.useEffect(() => {
    const myNav = document.getElementById("menu");
    window.onscroll = () => {
      if (document.body.scrollTop >= 200) {
        if ([...myNav.classList].includes('nav-colored')) return;
        myNav.classList.add("nav-colored");
        myNav.classList.remove("transparent");
      } else {
        if ([...myNav.classList].includes('transparent')) return;
        myNav.classList.add("transparent");
        myNav.classList.remove("nav-colored");
      }
    };
  }, []);
  return (
    <nav id="menu" className="navbar shadow transparent navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar bg-white"></span>{" "}
            <span className="icon-bar bg-white"></span>{" "}
            <span className="icon-bar bg-white"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top"><img src="https://i.ibb.co/HY1xDnb/logo.png" alt="no internet connection" className="img-circle logo" /></a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll nav-item">
                Особливості
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll nav-item">
                Про нас
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll nav-item">
                Смоукер
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll nav-item">
                Меню
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll nav-item">
                Команда
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll nav-item">
                Контакти
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
