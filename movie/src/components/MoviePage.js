import { useLocation } from "react-router-dom";
import styled from 'styled-components'

const MovieComponent=styled.div`
margin-left:25rem;
margin-right:25rem;
padding: 2rem;
padding-top: 5rem;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
border-radius: 14px;
background-color: rgba(250, 245, 245, 0.5);
width: 25%;


& > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

h2 {
  font-size: 1.5rem;
  margin: 0;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h3 {
  font-size: 1rem;
  margin: 0;
  color: #555;
}`

const MoviePage = () => {
  const location = useLocation();
  console.log(location.state.selected);
  const movie = location.state.selected;
  console.log(movie.id);
  console.log(movie.title);
  return(
  <MovieComponent>
    <h2>{movie.title}</h2>
    <img src={movie.image} alt="No Value found" />
    <h3>{movie.genre}</h3>
    <h3>{movie.releaseYear}</h3>
    <h3>{movie.director}</h3>
    <h3>{movie.actors}</h3>
  </MovieComponent>)
};
export default MoviePage;
