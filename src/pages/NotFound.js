import React from "react";
import notFound from "../media/notfound.png";

const NotFound = () => {
  return (
    <div
      style={{ marginTop: 100, marginBottom: 50 }}
      className="d-flex justify-content-center"
    >
      <div>
        <img src={notFound} alt="" style={{ height: 400, width: "100%" }} />
      </div>
    </div>
  );
};

export default NotFound;
