export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src={props.data?.imageUrl} className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text-container">
              <h2>Про нас</h2>
              <p className="about-text">
                {props.data ? props.data.paragraph : "loading..."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
