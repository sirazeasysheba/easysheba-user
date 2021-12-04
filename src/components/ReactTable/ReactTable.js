import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo } from "react";
import { Container, Form, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
import { usePagination, useSortBy, useTable } from "react-table";
import { COLUMNS } from "./Columns";
const ReactTable = () => {
  const orders = useSelector((state) => state.user.orders);
  const columns = useMemo(() => COLUMNS, []);
  const data = orders;
  console.log(data);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },

    useSortBy,
    usePagination
  );

  const { pageIndex } = state;
  return (
    <div className="react-data-table">
      <Container className="mb-5">
        <div className="d-flex">
          <div className="order-search-box-container border rounded me-5">
            <Form className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={faSearch}
                className="ms-2 order-search-box-icon"
              />
              <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="search-order me-2 shadow-none"
              />
            </Form>
          </div>
          <Form className="order-select-form">
            <Form.Select>
              <option selected>All</option>
              <option value="1">Served</option>
              <option value="2">Not Responded</option>
              <option value="3">Pending</option>
              <option value="4">Schedule Due</option>
              <option value="5">Payment Due</option>
              <option value="6">Accepted</option>
              <option value="7">Serve Due</option>
              <option value="8">Declined Due</option>
              <option value="9">Canceled</option>
            </Form.Select>
          </Form>
          <p className="fw-bold mt-1 ms-5">Total Orders : {orders.length}</p>
        </div>
      </Container>
      <Container>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div
          className="d-flex justify-content-between mt-3"
          style={{ fontSize: 12 }}
        >
          <div>
            <span>
              Showing
              <small className="ms-2">
                {pageIndex * 10 + 1} - {(pageIndex + 1) * 10}
              </small>{" "}
            </span>
          </div>
          <div>
            <span>Page {pageIndex + 1} |</span>
            <button
              className="ms-3"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              Previous
            </button>{" "}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              Next
            </button>{" "}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReactTable;
