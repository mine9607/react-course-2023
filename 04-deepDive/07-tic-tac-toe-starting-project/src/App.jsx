import { useState } from "react";
import Player from "./components/Players/Player";
import GameBoard from "./components/Board/GameBoard";
import Log from "./components/Score/Log";

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
};

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  const handleSelectTile = (rowIndex, colIndex) => {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];

      return updatedTurns;
    });
  };
  //Write a function to pass to the gameboard onClick which will set the current player symbol and then update the current player to the other player

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player defaultName="Player 1" playerSymbol="X" isActive={activePlayer === "X"} />
          <Player defaultName="Player 2" playerSymbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectTile={handleSelectTile} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
