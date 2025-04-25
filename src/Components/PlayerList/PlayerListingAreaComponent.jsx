import PlayerNameComponent from './PlayerNameComponent'
function PlayerListingAreaComponent({activePlayerLogo , players, updatedPlayers}){

    function handlePlayerNameChange(playerName, symbol){
       updatedPlayers({ ...players, [symbol]: playerName})
    }

    return (
        <ol id="players" className='highlight-player'>
            <PlayerNameComponent  isActive={activePlayerLogo === 'X'} playerName={players['X']} onChange={(value) => handlePlayerNameChange(value, 'X')} playerSymbol= "X" />
            <PlayerNameComponent  isActive={activePlayerLogo === 'O'} playerName={players['O']} onChange={(value) => handlePlayerNameChange(value, 'O')} playerSymbol= "O" />
        </ol>
    );
}

export default PlayerListingAreaComponent;
