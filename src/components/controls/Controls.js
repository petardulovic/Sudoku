import React from 'react';
import Stopwatch from '../timer/Timer';
import st from './Controls.modules.css';

export default function Controls(props){
    const [gameState, setGameState] = React.useState(false);

    return(
        <div style={{margin: '15px 0px 35px 0px'}}>
            {/* {gameState ? <Stopwatch /> : <div></div>} */}
            <button onClick={() => {
                setGameState("ended");
                {gameState ? props.cbCheck() : props.cbStart()}
                }}>{gameState ? "Check Your Answer" : "Start Game"}</button>
                {gameState === "ended" ? <button style={{marginLeft: '20px'}} onClick={() => props.cbRestart()}> Restart Game </button> : <div></div>}
        </div>
    )
}