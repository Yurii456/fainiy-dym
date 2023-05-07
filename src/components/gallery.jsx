import React from "react";
import ImageViewer from "react-simple-image-viewer";
import NoImage from "../assets/no-image.svg";

export const Gallery = ({ data }) => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);
  const images = React.useMemo(
    () => data?.items?.map((item) => item.imageLink),
    [data?.items]
  );

  const closeImageViewer = React.useCallback(() => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  }, []);

  const handleClickItem = React.useCallback(
    (currentData) => {
      setIsViewerOpen(true);
      console.log(currentData.imageLink);
      const activeIndex = images.findIndex(
        (imageLink) => imageLink === currentData.imageLink
      );
      console.log(activeIndex);
      setCurrentImage(activeIndex);
    },
    [images]
  );
  return (
    <div id="portfolio" className="text-center">
      <div className="menu-background" />
      <div className="container">
        <div className="section-title">
          <h2 className="header-line-white">{data?.title}</h2>
        </div>

        <div className="row">
          <div className="portfolio-items">
            {data?.items?.map((item) => (
              <div
                key={item.imageLink || item.hoverText}
                className="col-sm-6 col-md-4 col-lg-4"
              >
                <button
                  onClick={() => handleClickItem(item)}
                  className="portfolio-item item-btn"
                >
                  <img
                    src={item.imageLink || NoImage}
                    className="img-responsive menu-img"
                    alt="Project Title"
                  />
                  <div style={{ height: 60 }}>
                    <h4 className="menu-item-text">{item.text}</h4>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
};
