export default function Log({turns, players}){
    return (
        <ol id="log">
            { turns && turns.map((turn) =>
                <li key={`${turn.square.row}${turn.square.col}`}>
                    {players[turn.player]} selected {turn.square.row},{turn.square.col}
                </li>
            )}
        </ol>
    );
}