import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Player = (props) => {
    const {name, image, salary} = props.player;
    return (
      <div className="player">
        <div className="player-img">
          <img src={image} alt="" />
        </div>
        <div>
          <h4 className="player-name">{name}</h4>
          <p>
            <small>Salary: ${salary}</small>
          </p>
          <Button onClick={() => props.handleAddPlayer(props.player)}>
            <FontAwesomeIcon icon={faUserPlus} />
            Add to Team
          </Button>
        </div>
      </div>
    );
};

export default Player;