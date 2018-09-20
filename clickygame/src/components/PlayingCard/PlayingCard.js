//FriendCard component
import React from "react";
import "./PlayingCard.css";

//rendering all images into the cards
const PlayingCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default PlayingCard;