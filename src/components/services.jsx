import React from "react";
import ReactPlayer from "react-player/youtube";

export const Services = ({ data }) => {
  return (
    <div id="services">
      <div className="container">
        <div className="section-title">
          <h2 className="header-line text-center">{data?.title}</h2>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <ReactPlayer
              config={{
                youtube: {
                  playerVars: {
                    showinfo: 0,
                    controls: 1,
                    autoplay: 1,
                    mute: 1,
                    rel: 0,
                  },
                },
              }}
              width="100%"
              url={data?.youtubeURL}
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <p className="service-description">{data?.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
