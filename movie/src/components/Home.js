import React from "react";
import dummyMovies from "../Data/movieData";
import Card from "./UI/Card";
import Movie from "./Movie";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MovieSlides from "./MovieSlides";
const HomeComponent = styled.div`
  position: relative;
  background: rgb(54, 0, 0);
  background: -moz-radial-gradient(
    circle,
    rgba(54, 0, 0, 1) 56%,
    rgba(13, 58, 68, 1) 100%
  );
  background: -webkit-radial-gradient(
    circle,
    rgba(54, 0, 0, 1) 56%,
    rgba(13, 58, 68, 1) 100%
  );
  background: radial-gradient(
    circle,
    rgba(54, 0, 0, 1) 56%,
    rgba(13, 58, 68, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#360000",endColorstr="#0d3a44",GradientType=1);
  padding-top: 5rem;
`;
const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-right: 3rem;
  margin-left: 3rem;
`;
const Home = () => {
  const navigate = useNavigate();
  const clickHandler = (id) => {
    const selected = dummyMovies.find((movie) => movie.id === id);

    console.log(selected);
    navigate("/products", { state: { selected } });
  };

  const movies = dummyMovies.map((movie) => (
    <Card key={movie.id}>
      <Movie
        id={movie.id}
        title={movie.title}
        genre={movie.genre}
        director={movie.director}
        image={movie.image}
        onClickFn={clickHandler}
      />
    </Card>
  ));
  return (
    <HomeComponent>
      <MovieSlides />
      <MoviesContainer>{movies}</MoviesContainer>
    </HomeComponent>
  );
};
export default Home;
