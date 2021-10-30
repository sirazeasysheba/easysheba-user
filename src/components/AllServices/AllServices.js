import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { useSelector } from "react-redux";

import ScrollspyNav from "react-scrollspy-nav";
const AllServices = () => {
  //Category
  const category = useSelector((state) => state.category);
  const ids = [];
  category.categories.map((cat, index) => {
    ids.push(`${index}`);
    return ids;
  });
  console.log(ids);

  return (
    <div className="All-services mx-3 mb-5" style={{ marginTop: 80 }}>
      <Container fluid>
        <Row>
          <Col md={3}>
            <div className="scroll-spy mb-5" style={{ position: "fixed" }}>
              <h3 className="text-center mb-4">All Services</h3>
              <ScrollspyNav
                scrollTargetIds={ids}
                offset={90}
                activeNavClass="is-active"
                currentClassName="nav-item--active"
                scrollDuration="100"
                headerBackground="true"
                style={{ position: "fixed" }}
              >
                <div className="all-service-category">
                  {category.categories.map((cat, index) => (
                    <div key={index} className="mb-3 service-list">
                      <a href={`#${index}`}>
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
          <Col md={9} className="mb-5">
            <div>
              {category.categories.map((cat, index) => (
                <div id={`${index}`} className="mb-5">
                  <h3 className="fw-bold mb-3">{cat.name}</h3>
                  <Container style={{ paddingLeft: 12 }}>
                    <Row>
                      {cat.children.map(
                        (child, _index) =>
                          child.type === "cart" && (
                            <Col md={4} key={_index} style={{ padding: 0 }}>
                              <img
                                src={child.categoryImage}
                                alt=""
                                className="sub-category-image"
                              />
                              <p className="ms-5 mt-2 fw-bold">{child.name}</p>
                            </Col>
                          )
                      )}
                    </Row>
                  </Container>
                  <div className="mt-4">
                    <h6 style={{ fontWeight: 500 }}>
                      All Other {cat.name} Services
                    </h6>
                    <Container>
                      <Row>
                        {cat.children.map(
                          (child, _index) =>
                            child.type === "list" && (
                              <Col
                                md={4}
                                key={_index}
                                className="sub-category-list "
                              >
                                <FontAwesomeIcon
                                  icon={faCog}
                                  className="sub-category-list-icon"
                                />{" "}
                                <p className="sub-category-list-name">
                                  {child.name}
                                </p>
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
