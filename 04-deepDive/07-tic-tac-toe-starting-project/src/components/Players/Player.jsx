import React, { useState } from "react";

export default function Player({ defaultName, playerSymbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(defaultName);

  const handleEditClick = () => {
    // Note when updating state based on the previous state you should NOT use the below method and instead pass a function

    // setIsEditing(!isEditing); // this is bad practice because it schedules a state update in the future but these scheduled updates are delayed and may lead to unexpected behavior

    // React recommended practice - this will automatically get the current state value and return the new state that you want to set

    setIsEditing((editing) => !editing); //by calling a function the state update isn't scheduled but immediately changed!!!!!!!!!
    if (isEditing) {
      onChangeName(playerSymbol, playerName);
    }
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  //clean code by moving the player name logic outside the return

  let player;
  isEditing
    ? (player = <input type="text" required placeholder={playerName} onChange={handleChange} value={playerName} />)
    : (player = <span className="player-name">{playerName}</span>);

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {player}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
