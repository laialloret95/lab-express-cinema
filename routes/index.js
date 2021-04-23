const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    Movie.find()
      .then(moviesFromDB => { // moviesFromDB is an array
        res.render('movies', {moviesFromDB});
      })
      .catch(error => console.log(error));
})

router.get('/movies/:movieId', (req, res) => {
    const movieId = req.params.movieId
    Movie.find({_id: movieId})
      .then(movie => { // moviesFromDB is an array
        res.render('movie-detail', {movie});
      })
      .catch(error => console.log(error));
})

module.exports = router;
