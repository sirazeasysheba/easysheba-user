import React, { createRef, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import ServiceCart from "../Layout/ServiceCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions";
import { ScrollSpy } from "bootstrap";
const AllServices = () => {
  //Category
  const category = useSelector((state) => state.category);

  return (
    <div className="All-services mx-3" style={{ marginTop: 80 }}>
      <Container fluid>
        <Row>
          <Col md={3}>
            <h3 className="ms-2">All Services</h3>
            <div
              id="list-example"
              className="list-group"
              // style={{ position: "fixed" }}
            >
              {category.categories.map((cat, index) => (
                <div key={index} className="mx-2">
                  {cat.categoryImage && (
                    <a
                      className="list-group-item list-group-item-action"
                      href={`#${index}`}
                    >
                      <div className="d-flex">
                        <img
                          src={cat.categoryImage}
                          alt=""
                          style={{ maxHeight: 20, marginRight: 5 }}
                        />
                        <p> {cat.name}</p>
                      </div>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </Col>
          <Col className="mt-5">
            <div
              data-bs-spy="scroll"
              data-bs-target="#list-example"
              data-bs-offset="0"
              className="scrollspy-example"
              tabindex="0"
            >
              {category.categories.map((cat, index) => (
                <div id={`${index}`}>
                  <h6>{cat.name}</h6>
                  {cat.children &&
                    cat.children.map((child, index) => (
                      <div>
                        <p key={index}>{child.name}</p>
                        {child.categoryImage ? (
                          <img
                            src={child.categoryImage}
                            alt=""
                            style={{ maxHeight: 60 }}
                          />
                        ) : null}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AllServices;
