import React from "react";
import ReactPlayer from 'react-player/lazy'

export const Header = (props) => {
  return (
    <>
      <header id="header">
        <div className="intro">
          {/* <video id="video" className="video" autoPlay loop muted>
            <source src={"https://drive.google.com/uc?export=download&id=11ZLlnSEC4t7p36NUNrZj7lK-7arrOWbI"} type="video/mp4" />
          </video> */}
          <img src="https://i.ibb.co/vVpzqfv/2021-05-01-11-32-09.jpg" className="video" alt="no internet" />
          <ReactPlayer width="100%" height="100%" playing muted className="video" url="https://drive.google.com/uc?export=download&id=1Kydjgu1wrXEKKJ4tBJGONewysGPs_TWY" loop />
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#portfolio"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Дізнатися більше
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
