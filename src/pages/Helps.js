import React from "react";
import { Container } from "react-bootstrap";
import image from "../media/banner (4).jpg";

const Helps = () => {
  return (
    <div style={{ marginTop: 67 }}>
      <img src={image} alt="" style={{ width: "100%", maxHeight: 300 }} />
      <Container className="mt-3 mb-5" style={{ fontSize: 13 }}>
        <p>
          <span className="fw-bold">EasySheba Platform Ltd.</span> uses your
          information to improve your experience. For your data deletion request
          or any other inquiry please contact our Customer support number:{" "}
          <span className="fw-bold">01966-050506</span> .
        </p>
        <p>
          Alternatively, you can also reach out to us using our Facebook
          EasySheba Platform Ltd. page:{" "}
          <a
            href="https://www.facebook.com/EasyShebaPlatform"
            target="_blank"
            rel="noreferrer"
          >
            https://www.facebook.com/EasyShebaPlatform
          </a>
        </p>
      </Container>
    </div>
  );
};

export default Helps;
