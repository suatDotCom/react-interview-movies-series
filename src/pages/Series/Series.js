import React, { Fragment, useState, useEffect } from "react";
import api from "../../services/api";
import { Card } from "../../components/Card/Card";
import "./Series.css";
import { Pagination } from "../../components/Pagination/Pagination";
import { paginationDataHelper } from "../../components/Pagination/PaginationDataHelper";
import { Loading } from "../../components/Loading/Loading";

const _constants = {
  pageSize: 21,
  equalGreaterReleaseYear: 2010,
};

export function Series() {
  const [seriesList, setSeriesList] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSeries();

    return () => {
      setSeriesList(null);
    };
  }, []);

  useEffect(() => {
    pagingChangeCallback(1); //for init page
  }, [seriesList]);

  const getSeries = () => {
    api._series
      .getAll()
      .then((data) => {
        data = filterReleaseYear(data);
        data = sortByTitleAsc(data);
        setSeriesList(data);

        setTimeout(function () { //for loader :)
          setLoading(false); 
        }, 2000);
      })
      .catch((err) => {
        debugger;
      });
  };

  const pagingChangeCallback = (activePage) => {
    let pagedItems = paginationDataHelper({
      activePage,
      data: seriesList,
      pageSize: _constants.pageSize,
    });
    setCurrentPageData(pagedItems);
  };

  const filterReleaseYear = (data) => {
    if (!data || !data.entries) return [];

    let filteredYearData = data.entries.filter((series) => {
      if (series.hasOwnProperty("releaseYear")) {
        return series.releaseYear >= _constants.equalGreaterReleaseYear;
      }
    });

    return filteredYearData;
  };

  const sortByTitleAsc = (data) => {
    if (!data || !data.entries) return [];

    let sortedData = data.sort((a, b) => a.title.localeCompare(b.title));

    return sortedData;
  }

  const filteredSeries = currentPageData.map(({ title, images }, key) => {
    return (
      <Card title={title} thumbImage={images["Poster Art"].url} key={key} />
    );
  });
  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <div className="series">{filteredSeries}</div>
          <Pagination
            totalLength={seriesList.length}
            pageSize={_constants.pageSize}
            callback={pagingChangeCallback}
          />
        </Fragment>
      )}
    </Fragment>
  );
}
