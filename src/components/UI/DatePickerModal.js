import React, { useState } from "react";
import Modal from "react-modal";
import close from "../../media/x-converted.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { addDays, format } from "date-fns";
const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    zIndex: 1000,
  },
  content: {
    top: "45%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "1000px",
    transform: "translate(-50%, -50%)",
    overflow: "visible",
    padding: 0,

    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  },
};

const buttonStyles = {
  position: "absolute",
  top: "-23px",
  right: "-35px",
  border: "none",
  background: "transparent",
  zIndex: "10001 !important",
};
Modal.setAppElement("#root");

const DatePickerModal = ({
  modalIsOpen,
  closeModal,
  setTime,
  time,
  date,
  setDate,
  setMonth,
  setYear,
  productByService,
  service,
}) => {
  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);
  const [day1, setDay1] = useState(true);
  const [day2, setDay2] = useState(false);
  const [day3, setDay3] = useState(false);
  const [day4, setDay4] = useState(false);
  const [day5, setDay5] = useState(false);
  const [day6, setDay6] = useState(false);
  const [day7, setDay7] = useState(false);

  const handleDay = (day, index) => {
    if (index === 0) {
      setDay2(true);
      setDay1(false);
      setDay3(false);
      setDay4(false);
      setDay5(false);
      setDay6(false);
      setDay7(false);
    }
    setDate(day.date);
    setMonth(day.month);
    setYear(day.year);
  };

  const handleDay1 = () => {
    setDate(format(new Date(), "dd"));
    setDay1(true);
    setDay2(false);
  };
  const handleButton1 = () => {
    setButton1(true);
    setButton2(false);
    setButton3(false);
    setButton4(false);
    setTime("7.00");
  };

  const handleButton2 = () => {
    setButton2(true);
    setButton1(false);
    setButton3(false);
    setButton4(false);
    setTime("8.00");
  };

  const handleButton3 = () => {
    setButton3(true);
    setButton2(false);
    setButton1(false);
    setButton4(false);
    setTime("9.00");
  };

  const handleButton4 = () => {
    setButton4(true);
    setButton2(false);
    setButton3(false);
    setButton1(false);
    setTime("10.00");
  };

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrow: false,
  };
  const dateArray = [
    {
      date: "",
      day: "",
      month: "",
      year: "",
    },
  ];

  for (let i = 1; i < 7; i++) {
    const days = addDays(new Date(), i);
    dateArray.push({
      date: format(days, "dd"),
      day: format(days, "EE"),
      month: format(days, "LLLL"),
      year: format(days, "yyyy"),
    });
  }
  dateArray.shift();
  return (
    <div className="cart-modal">
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="shadow-lg">
          <button onClick={closeModal} style={buttonStyles}>
            <img src={close} alt="" />
          </button>
          <div className="shadow-lg mt-0 pb-3 pt-4">
            <h5 className="text-center" style={{ fontWeight: 600 }}>
              Schedule Time
            </h5>
          </div>
          <div className="shadow mt-0  pt-4 text-center">
            <p>When would you like EasySheba to serve you?</p>
            <small className="text-muted d-block">
              Select your prefer date
            </small>
            <div className="d-flex justify-content-center">
              <div className="date-slider">
                <Slider {...settings}>
                  <div
                    className={
                      day1 ? `date-container active-date-btn` : `date-container`
                    }
                    onClick={handleDay1}
                  >
                    <h2 className="mb-0 mt-3">{format(new Date(), "dd")}</h2>
                    <p>Today</p>
                  </div>
                  {dateArray?.map((date, index) => (
                    <div
                      className={
                        day2
                          ? `date-container active-date-btn`
                          : `date-container`
                      }
                      key={index}
                      onClick={() => handleDay(date, index)}
                    >
                      <h2 className="mb-0 mt-3">{date.date}</h2>
                      <p>{date.day}</p>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            <small className="text-muted">
              Select your prefer time, expert will arrive by your selected time
            </small>
            <div className="mt-3 mb-5">
              <button
                className={`time-button me-3 ${
                  button1 ? "active-time-btn" : ""
                }`}
                onClick={handleButton1}
              >
                7.00 PM
              </button>
              <button
                className={`time-button me-3 ${
                  button2 ? "active-time-btn" : ""
                }`}
                onClick={handleButton2}
              >
                8.00 PM
              </button>
              <button
                className={`time-button me-3 ${
                  button3 ? "active-time-btn" : ""
                }`}
                onClick={handleButton3}
              >
                9.00 PM
              </button>
              <button
                className={`time-button me-3 ${
                  button4 ? "active-time-btn" : ""
                }`}
                onClick={handleButton4}
              >
                10.00 PM
              </button>
            </div>
            <div className="shadow-lg mt-0 pb-3 pt-3">
              <button className="primary-btn" onClick={closeModal}>
                Confirm Schedule
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DatePickerModal;
