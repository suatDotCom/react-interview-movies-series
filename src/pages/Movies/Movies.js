import React, { Fragment, useState, useEffect } from "react";
import api from "../../services/api";
import { Card } from "../../components/Card/Card";
import "./Movies.css";
import { Pagination } from "../../components/Pagination/Pagination";
import { paginationDataHelper } from "../../components/Pagination/PaginationDataHelper";
import { Loading } from "../../components/Loading/Loading";

const _constants = {
  pageSize: 21,
  equalGreaterReleaseYear: 2010,
};

export function Movies() {
  const [movieList, setMovieList] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovies();

    return () => {
      setMovieList(null);
    };
  }, []);

  useEffect(() => {
    pagingChangeCallback(1); //for init page
  }, [movieList]);

  const getMovies = () => {
    api._movie.getAll().then((data) => {
      data = filterReleaseYear(data);
      data = sortByTitleAsc(data);
      setMovieList(data);

      setTimeout(function () {
        //for loader :)
        setLoading(false);
      }, 2000);
    });
  };

  const pagingChangeCallback = (activePage) => {
    let pagedItems = paginationDataHelper({
      activePage,
      data: movieList,
      pageSize: _constants.pageSize,
    });
    setCurrentPageData(pagedItems);
  };

  const filterReleaseYear = (data) => {
    if (!data || !data.entries) return [];

    let filteredYearData = data.entries.filter((movie) => {
      if (movie.hasOwnProperty("releaseYear")) {
        return movie.releaseYear >= _constants.equalGreaterReleaseYear;
      }
    });

    return filteredYearData;
  };

  const sortByTitleAsc = (data) => {
    if (!data || !data.entries) return [];

    let sortedData = data.sort((a, b) => a.title.localeCompare(b.title));

    return sortedData;
  };

  const filteredMovies = currentPageData.map(({ title, images }, key) => {
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
          <div className="movies">{filteredMovies}</div>
          <Pagination
            totalLength={movieList.length}
            pageSize={_constants.pageSize}
            callback={pagingChangeCallback}
          />
        </Fragment>
      )}
    </Fragment>
  );
}
