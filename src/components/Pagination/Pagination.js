import React, { useEffect, useState } from "react";
import "./Pagination.css";

export function Pagination(props) {
  const { totalLength, pageSize, callback } = props;
  const [numberButtons, setNumberButtons] = useState([]);
  const [mappedButtons, setMappedButtons] = useState([]);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    setPageButtons(totalLength);
  }, [totalLength]);

  useEffect(() => {
    setPageButtons(totalLength);
  }, [activePage]);

  useEffect(() => {
    setMappedButtons(
      numberButtons.map((item) => {
        return (
          <button
            className={item === activePage ? "btn active" : "btn"}
            key={item}
            onClick={() => handlePageChange(item)}
          >
            {item}
          </button>
        );
      })
    );
  }, [numberButtons]);

  const handlePageChange = (page) => {
    setActivePage(page);
    callback(page);
  };

  const setPageButtons = (total) => {
    let numbers = Math.ceil(total / pageSize);
    var tmp = [];
    for (let index = 1; index <= numbers; index++) {
      tmp.push(index);
    }
    setNumberButtons(tmp);
  };

  return (
    <div className="btns-container">
      <button className="btn prev">
        <span>&lt;</span>
      </button>
      <div className="btns-pagination">{mappedButtons}</div>
      <button className="btn next">
        <span>&gt;</span>
      </button>
    </div>
  );
}
