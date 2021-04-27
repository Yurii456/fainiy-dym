import React from "react";

export const Navigation = ({ data = {} }) => {
  console.log(data);
  React.useEffect(() => {
    const myNav = document.getElementById("menu");
    window.onscroll = () => {
      if (document.body.scrollTop >= 200) {
        if ([...myNav.classList].includes("nav-colored")) return;
        myNav.classList.add("nav-colored");
        myNav.classList.remove("transparent");
      } else {
        if ([...myNav.classList].includes("transparent")) return;
        myNav.classList.add("transparent");
        myNav.classList.remove("nav-colored");
      }
    };
  }, []);
  return (
    <nav id="menu" className="navbar shadow transparent navbar-fixed-top">
      <div className="container-fluid">
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
          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              src="https://i.ibb.co/rpRXRkq/IMG-20210427-214124-617.jpg"
              alt="no internet connection"
              className="img-circle logo"
            />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {data?.items?.map(({ label, link }) => (
              <li>
                <a href={link} className="page-scroll nav-item">
                  {label}
                </a>
              </li>
            ))}
            <li className="social">
              <a
                href={data.facebook}
                target="_blank"
                rel="noreferrer"
                className="nav-item inline"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href={data.instagram}
                target="_blank"
                rel="noreferrer"
                className="nav-item inline"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
