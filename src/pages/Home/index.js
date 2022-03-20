import "./styles.js";
import { Container, MovieList, Movie } from "./styles.js";
import { useState, useEffect } from "react";
import { APIKey } from "../../config/key";  


function Home() {
  
  const [movies, setMovies] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
    .then(reponse => reponse.json())
    .then(data => setMovies(data.results))
  }, [])  


  
  return (
    <Container>
      <h1>Movies</h1>
      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <a href="#">
                <img src={`${image_path}${movie.poster_path}`} alt={movie.tile}/>
              </a>
              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
};

export default Home;
