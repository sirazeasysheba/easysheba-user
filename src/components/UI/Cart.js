import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Cart = (props) => {
  return (
    <div style={{ fontSize: "20px", position: "relative" }}>
      <span
        style={{
          position: "absolute",
          color: "white",
          background: "#f16622",
          width: "20px",
          height: "20px",
          borderRadius: "5px",
          fontSize: "10px",
          border: "1px solid #fff",
          textAlign: "center",
          alignSelf: "center",
          top: "-12px",
          right: "-4px",
          cursor: "pointer",
        }}
      >
        {props.count}
      </span>
      <FontAwesomeIcon
        icon={faCartPlus}
        style={{ color: "black", cursor: "pointer" }}
        className="cart-icon"
      />
    </div>
  );
};

export default Cart;
