export default function GameBoard({ onSelectTile, gameBoard }) {
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
