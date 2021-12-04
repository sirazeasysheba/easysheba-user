import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import format from "date-fns/format";
import { Link } from "react-router-dom";

export const COLUMNS = [
  {
    Header: "ID",
    Footer: "ID",
    accessor: "id",
    disableFilters: true,
    sticky: "left",
  },
  {
    Header: "Service",
    Footer: "Service",
    accessor: "items[0].serviceName",
    sticky: "left",
    // Cell: (row) => {
    //   return <div>{row.row.items[0].serviceName}</div>;
    // },
  },
  {
    Header: "Price",
    Footer: "Price",
    accessor: "totalAmount",
    sticky: "left",
  },
  {
    Header: "Schedule",
    Footer: "Schedule",
    accessor: "schedule",
  },
  {
    Header: "Ordered On",
    Footer: "Ordered On",
    accessor: "createdAt",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "",
    Footer: "",
    accessor: "_id",
    Cell: (cell) => (
      <Link to={`/order/${cell.cell._id}`}>
        <button className="view-details-btn fw-bold" style={{ fontSize: 13 }}>
          Details{" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            className="ms-1 pt-2 fw-bold"
            style={{ color: "#f16622", fontSize: 20 }}
          />
        </button>
      </Link>
    ),
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth",
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
];
