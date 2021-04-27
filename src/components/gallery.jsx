import React from "react";
import Modal, { useModal } from "./Modal";

const ItemModal = ({ activeItem, isVisible, hideModal }) => {
  return (
    <Modal isVisible={isVisible} closeModal={hideModal}>
      <img src={activeItem?.imageLink} alt="no internet" />
      <p>{activeItem?.description}</p>
    </Modal>
  );
};

export const Gallery = ({ data }) => {
  const [activeItem, setActiveItem] = React.useState();
  const { showModal, hideModal, isVisible } = useModal();
  const handleClickItem = React.useCallback(
    (data) => {
      setActiveItem(data);
      showModal();
    },
    [showModal]
  );

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{data?.title}</h2>
          <p>
            {data?.description}
          </p>
        </div>

        <div className="row">
          <div className="portfolio-items">
            {data?.items?.map((item) => (
              <div className="col-sm-6 col-md-4 col-lg-4">
                <button
                  onClick={() =>
                    handleClickItem(item)
                  }
                  className="portfolio-item item-btn"
                >
                  <div className="hover-bg">
                    <div className="hover-text">
                      <h4>{item.hoverText}</h4>
                    </div>
                    <img
                      src={item.imageLink}
                      className="img-responsive"
                      alt="Project Title"
                    />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ItemModal
        activeItem={activeItem}
        hideModal={hideModal}
        isVisible={isVisible}
      />
    </div>
  );
};
