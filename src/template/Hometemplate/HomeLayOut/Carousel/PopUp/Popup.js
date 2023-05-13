import React from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
export default function Popup() {
  const element = <FontAwesomeIcon icon={faPlay} />;
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
    },
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#rgb(0 0 0 / 75%)";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <div>
        <button onClick={openModal}>{element}</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
          {/* <button onClick={closeModal}></button> */}
          <div>
            <iframe
              width="853"
              height="480"
              src="https://www.youtube.com/embed/oVzVdvGIC7U"
              title='Phim "Bàn Tay Diệt Quỷ" Trailer | KC 09.04.2021'
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </Modal>
      </div>
    </div>
  );
}
