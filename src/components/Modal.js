import React from "react";
import RNModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    backgroundColor: 'white',
    transform: "translate(-50%, -50%)",
  },
};

export const useModal = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const showModal = React.useCallback((data = {}) => {
    setIsVisible(true);
  }, []);

  const hideModal = React.useCallback(() => {
    setIsVisible(false);
  }, []);

  return { showModal, hideModal, isVisible };
};

const Modal = ({ isVisible, afterOpenModal, closeModal, children="" }) => {
  return (
    <RNModal
      isOpen={isVisible}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      {children}
    </RNModal>
  );
};

export default Modal;
