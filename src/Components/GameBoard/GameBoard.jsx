export default function GameBoard({handleCellClick, board}){

    return (
        <>
            <ol id="game-board">
                {board.map((row, rowIndex) => {
                    return (
                        <li key={rowIndex}>
                            <ol>
                                {row.map((col, colIndex) => {
                                    return(
                                        <li key={colIndex}>
                                            <button disabled={board[rowIndex][colIndex] !== null} onClick={() => handleCellClick(rowIndex, colIndex)}>{board[rowIndex][colIndex]}</button>
                                        </li>
                                    )
                                })}
                            </ol>
                        </li>
                    )
                })}
            </ol>
        </>
    );
}