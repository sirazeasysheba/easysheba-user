import React, { Fragment, useState } from "react";
import ModalVideo from "react-modal-video";

const MyModal = (props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Fragment>
      <ModalVideo
        channel="youtube"
        autoplay={true}
        isOpen={isOpen}
        videoId="djugeDGBp08"
        onClose={() => setOpen(false)}
      />

      <button
        className="how-it-works mt-3"
        onClick={() => setOpen(true)}
        style={{ height: 250, width: "100%" }}
      ></button>
    </Fragment>
  );
};

export default MyModal;
