const request = require("postman-request");

require("dotenv").config();
const APIKEY = process.env.API_KEY;

const similarMovies = (id, callback) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${APIKEY}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to server.", undefined);
    } else if (body.success) {
      callback("Unable to find movie.", undefined);
    } else {
      callback(
        undefined,
        `${body.results[0].poster_path} ${body.results[0].original_title} ${body.results[0].overview}`
      );
    }
  });
};

module.exports = similarMovies;
