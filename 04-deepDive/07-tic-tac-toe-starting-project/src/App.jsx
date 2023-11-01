import { useState } from "react";
import Player from "./components/Players/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player defaultName="Player 1" playerSymbol="X" />
          <Player defaultName="Player 2" playerSymbol="O" />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
