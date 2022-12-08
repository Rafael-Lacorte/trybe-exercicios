const path = require('path');

const express = require('express');

const app = express();

const movies = require('./movies.json')


app.use(express.json());

const fs = require('fs').promises;
const moviesPath = path.resolve(__dirname, './movies.json');
async function read() {
    try {
        const data = await fs.readFile(moviesPath, 'utf-8');
        const movies = JSON.parse(data)
        console.log(movies)
    } catch (err) {
        console.error(`Erro ao ler o arquivo: ${err.message}`);
    }
}

app.get('/teams', (req, res) => {

    res.status(200).json({ movies });
});

app.get('/teams/:id', (req, res) => {
    const { id } = req.params;

    const selectedTeam = movies.find((movie) => movie.id === Number(id));
    
    if (!selectedTeam) {
        res.status(404).json({ message: 'Team not found' });
    }
    res.status(200).json({ selectedTeam });
});

app.post('/teams', (req, res) => {
    const input = { ...req.body };
    const { movie, price } = input
    newMovie = {
        id: movies[movies.length - 1].id + 1,
        movie,
        price
    }
    movies.push(newMovie);
    res.status(201).json({ team: newMovie });
  });

app.put('/teams/:id', async (req, res) => {
const { id } = req.params;
const { movie, price } = req.body;

const index = movies.findIndex((movie) => movie.id === Number(id));
movies[index] = { id: Number(id), movie, price };
const updatedMovies = JSON.stringify(movies, null, 2);
await fs.writeFile(moviesPath, updatedMovies);
res.status(200).json(movies[index]);
});


app.delete('/teams/:id', async (req, res) => {
    try {
    const { id } = req.params;
    const filteredMovies = movies.filter((movie) => movie.id !== Number(id));
    const updatedMovies = JSON.stringify(filteredMovies, null, 2);
    await fs.writeFile(moviesPath, updatedMovies);
    res.status(200).json(filteredMovies);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });

module.exports = app;