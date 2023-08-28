import Button from "./UI/Button";
import styled from "styled-components";
const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
const Movie = (props) => {
  const onClickHandler = () => {
    props.onClickFn(props.id);
  };

  return (
    
      <div>
        <CardImage src={props.image} alt="No items found" />
        <h3>{props.title}</h3>
        <div>{props.genre}</div>
        <div>{props.director}</div>
        <div>
          <Button onClick={onClickHandler} bgcolor=" #931068">View Details</Button>
        </div>
      </div>
    
  );
};
export default Movie;
