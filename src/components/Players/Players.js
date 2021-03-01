import React, { useEffect, useState } from 'react';
import playersData from '../../playersData/playersData';
import Cart from '../Cart/Cart';
import Player from '../Player/Player'
import './Players.css'
const Players = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        setPlayers(playersData);
    },[])

    const handleAddPlayer = (player) => {
        const newCart = [...cart, player];
        setCart(newCart);
    }
    return (
      <div className="players-container">
        <div className="player-container">
          {players.map((player) => (
            <Player handleAddPlayer={handleAddPlayer} player={player}></Player>
          ))}
        </div>
        <div className="player-cart">
          <Cart cart={cart}></Cart>
          <div className="added-player">
            <ol>
              <h5>Selected Player</h5>
              {cart.map((addCart) => (
                <li>{addCart.name}</li>
              ))}
            </ol>
          </div>
          <div className="added-salary">
            <ul>
                <h5>Salary</h5>
              {cart.map((addCart) => (
                <li>${addCart.salary}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Players;