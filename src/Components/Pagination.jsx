import React from "react";
import "../App.css";

function Pagination({ usersForPage, totalUsers, paginator }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersForPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
            <a
              href="!#"
              className="page-link"
              onClick={() => paginator(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
