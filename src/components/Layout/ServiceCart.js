import React from "react";
import gas from "../../media/gas-stove.png";
const ServiceCart = () => {
  return (
    <div className="service-cart">
      <img src={gas} alt="" className="image-fluid cart-image" />
      <h6 className="fw-bold mt-2 tex-center">
        Gas Stove/Burner/Gas pipe line rep
      </h6>
    </div>
  );
};

export default ServiceCart;
