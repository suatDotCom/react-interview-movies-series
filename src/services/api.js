import MockData from "../assets/mocks/sample.json";

const _constants = {
  programTypes: {
    series: "series",
    movie: "movie",
  },
};

export default {
  _movie: {
    getAll: async () => {
      // return await fetch();
      var movies = Object.assign({}, MockData);

      movies.entries = movies.entries.filter(
        (item) => item.programType === _constants.programTypes.movie
      );
      movies.total = movies.entries.length;

      return movies;
    },
  },
  _series: {
    getAll: async () => {
      var series = Object.assign({}, MockData);

      series.entries = series.entries.filter(
        (item) => item.programType === _constants.programTypes.series
      );
      series.total = series.entries.length;

      return series;
    },
  },
};
