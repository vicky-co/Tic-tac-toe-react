import { useState } from 'react';

function PlayerNameComponent({playerName, isActive, playerSymbol, ...props }){
    const [isEditing, setEditing] = useState(false);

    return (
        <li className={isActive ? 'active' : undefined}>
            <span>
            <span className="player">
                <input className="player-name" type="text" minLength={3} readOnly={!isEditing}
                    onChange={(e) => props.onChange(e.target.value)}
                    value={playerName} />
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={() => setEditing((edit) => !edit)}>{!isEditing ? "Edit" : "Save"}</button>
            </span>
        </li>
    );
}  

export default PlayerNameComponent;