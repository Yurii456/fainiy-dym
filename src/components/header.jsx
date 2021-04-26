import React from 'react';

export const Header = (props) => {  
  return (
    <>
      <header id="header">
        <div className="intro">
          <video id="video" className="video" autoPlay loop muted>
            <source src={"https://drive.google.com/uc?export=download&id=1PXoLiR5vjeWRdWPn8I0R7nV0jwjqbO0y"} type="video/mp4" />
          </video>
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
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Дізнатися більше
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
