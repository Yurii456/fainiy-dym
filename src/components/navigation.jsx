import React from "react";

export const Navigation = (props) => {
  React.useEffect(() => {
    const myNav = document.getElementById("menu");
    // myNav.addEventListener('scroll', );
    window.onscroll = function () {
      // console.log([...myNav.classList]);
      if (document.body.scrollTop >= 200) {
        console.log([...myNav.classList].includes('nav-colored'));
        if ([...myNav.classList].includes('nav-colored')) return;
        myNav.classList.add("nav-colored");
        myNav.classList.remove("transparent");
      } else {
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
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top"></a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Особливості
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Про нас
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Смоукер
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Меню
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Команда
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Контакти
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};