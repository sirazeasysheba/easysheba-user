import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ScrollspyNav from "react-scrollspy-nav";
const AllServices = () => {
  //Category
  const [target, setTarget] = useState(null);
  const category = useSelector((state) => state.category);
  const ids = [];
  category.categories.map((cat, index) => {
    ids.push(`${index}`);
    return ids;
  });

  return (
    <div className="All-services mb-5" style={{ marginTop: 80 }}>
      <Container>
        <Row>
          <h3 className="mb-4 ms-3 fw-bold">All Services</h3>
          <Col
            md={3}
            className="border-end pe-0 scroll-section"
            style={{ maxWidth: 250 }}
          >
            <div
              className="scroll-spy mb-5"
              style={{ position: "sticky", top: 80 }}
            >
              <ScrollspyNav
                scrollTargetIds={ids}
                offset={290}
                activeNavClass="is-active"
                currentClassName="nav-item--active"
                scrollDuration="100"
                headerBackground="true"
                style={{ position: "fixed" }}
              >
                <div className="all-service-category ">
                  {category.categories.map((cat, index) => (
                    <div key={index} className="service-list">
                      <a href={`#${index}`} className="d-block">
                        <img
                          src={cat.categoryImage}
                          alt=""
                          style={{ height: 20 }}
                        />{" "}
                        {cat.name}
                      </a>
                    </div>
                  ))}
                </div>
              </ScrollspyNav>
            </div>
          </Col>
          <Col md={9} sm={12}>
            <div className="ms-5">
              {category.categories.map((cat, index) => (
                <div id={`${index}`} className="mb-5">
                  <h3 className="fw-bold mb-5">{cat.name}</h3>
                  <Container style={{ paddingLeft: 12 }}>
                    <Row>
                      {cat.children.map(
                        (child, _index) =>
                          child.type === "cart" && (
                            <Col
                              md={4}
                              key={_index}
                              style={{ padding: 0, marginBottom: 20 }}
                            >
                              <div
                                style={{ maxHeight: 200, maxWidth: 240 }}
                                onClick={() => setTarget(child)}
                              >
                                <Link
                                  to={`/services/${child.slug}`}
                                  className="link"
                                >
                                  <img
                                    src={child.categoryImage}
                                    alt=""
                                    className="sub-category-image"
                                  />

                                  <p className="text-center mt-2 fw-bold">
                                    {child.name}
                                  </p>
                                </Link>
                              </div>
                            </Col>
                          )
                      )}
                    </Row>
                  </Container>
                  <div className="mt-5">
                    <h6 style={{ fontWeight: 500 }} className="mb-3">
                      All Other {cat.name} Services
                    </h6>
                    <Container style={{ paddingLeft: 12 }}>
                      <Row>
                        {cat.children.map(
                          (child, _index) =>
                            child.type === "list" && (
                              <Col
                                md={4}
                                key={_index}
                                className="sub-category-list "
                                style={{ padding: 0 }}
                              >
                                <FontAwesomeIcon
                                  icon={faCog}
                                  className="sub-category-list-icon me-2"
                                />{" "}
                                <Link
                                  to={`/services/${child.slug}`}
                                  className="link"
                                >
                                  <p className="text-center fw-medium">
                                    {child.name}
                                  </p>
                                </Link>
                              </Col>
                            )
                        )}
                      </Row>
                    </Container>
                  </div>

                  {/* {cat.children &&
                    cat.children.map((child, index) => (
                      <div>
                        <div>
                          {child.categoryImage && (
                            <div>
                              <img
                                src={child.categoryImage}
                                alt=""
                                className="sub-category-image"
                              />
                              <p key={index}>{child.name}</p>
                            </div>
                          )}
                        </div>
                        <div>
                          {!child.categoryImage && (
                            <p key={index}>{child.name}</p>
                          )}
                        </div>
                      </div>
                    ))} */}
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
