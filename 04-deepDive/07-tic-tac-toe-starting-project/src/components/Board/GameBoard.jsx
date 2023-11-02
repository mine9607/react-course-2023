const initialGameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

export default function GameBoard({ onSelectTile, turns }) {
  let gameBoard = initialGameBoard;

  // Computed aka derived state from the game "turns" state that is managed in the App component - THIS IS BEST PRACTICE
  turns.forEach((turn) => {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  });

  // REFACTORED CODE ABOVE
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // const handleTileSelect = (rowIndex, colIndex) => {
  //   setGameBoard((prevGameBoard) => {
  //     // NOTE!!! - It is recommended to make a deep copy of an Object or Array and then make updates to the state of that object so that you are not updating/mutating the state of the original object/array
  //     const updatedGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];

  //     updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;

  //     return updatedGameBoard;
  //   });

  //   onSelectTile();
  // };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                {/* The Col needs to be set dynamically based on who clicks the button */}
                <button onClick={() => onSelectTile(rowIndex, colIndex)} disabled={playerSymbol !== ""}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
