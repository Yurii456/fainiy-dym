import ReactPlayer from "react-player/youtube";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img
              src={props.data?.imageUrl}
              className="img-responsive about-image"
              alt=""
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text-container">
              <h2 className="header-line">Про Женю</h2>
              <p className="about-text">
                {props.data ? props.data.paragraph : "loading..."}
              </p>
            </div>
          </div>
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
              url={props.data?.youtubeURL}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
