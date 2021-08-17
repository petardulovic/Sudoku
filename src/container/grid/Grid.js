import React, { useMemo, useState } from 'react';
import Controls from '../../components/controls/Controls';
import Square from '../../components/square/Square';
import classes from './Grid.module.css';
import Solution from '../../data/Solution';
import SolutionMap from '../../data/SolutionMap';
import BottomControls from '../../components/controls/BottomControls';

let focused = '';

export default function Grid(props) {

    const [gameStatus, setgameStatus] = React.useState(false);
    const [filling, setFilling] = React.useState(false);

    const focus = (id) => {
        focused = id;
    }

    function createRow(numb) {
        return (
            <div className={classes.row} style={numb == 4 ? {
                borderBottom: '2px solid purple',
                borderTop: '2px solid purple', marginLeft: '50%', transform: 'translate(-50%,0)'
            } : { marginLeft: '50%', transform: 'translate(-50%,0)' }}>
                <Square cbFocused={focus} filling={filling} status={gameStatus} row={numb} col={1} />
                <Square cbFocused={focus} status={gameStatus} filling={filling} row={numb} col={4} />
                <Square cbFocused={focus} status={gameStatus} filling={filling} row={numb} col={7} />
            </div>
        )
    }

    const start = () => {
        setgameStatus(true);
    }

    const check = () => {
        setgameStatus("ended");
        setFilling(false);
        for (let i = 1; i <= 9; i++) {
            for (let j = 1; j <= 9; j++) {
                if (document.getElementById(`i${i}${j}`).value == Solution.get(`${i}${j}`) && document.getElementById(`i${i}${j}`).readOnly === false) {
                    document.getElementById(`i${i}${j}`).style.color = 'green';
                } else if (document.getElementById(`i${i}${j}`).value != Solution.get(`${i}${j}`) && document.getElementById(`i${i}${j}`).readOnly === false) {
                    document.getElementById(`i${i}${j}`).style.color = 'red';
                } else {
                    document.getElementById(`i${i}${j}`).style.color = 'blue';
                }
                
            }
        }
    }

    const restart = () => {
        setFilling(false);
        focused = '';
        for (let i = 1; i <= 9; i++) {
            for (let j = 1; j <= 9; j++) {
                if(document.getElementById(`i${i}${j}`).value = SolutionMap.get(`${i}${j}`)  ){
                    document.getElementById(`i${i}${j}`).style.color = 'blue';
                }else{
                    document.getElementById(`i${i}${j}`).value = ' ';   
                    document.getElementById(`i${i}${j}`).disabled = false;
                    document.getElementById(`i${i}${j}`).style.color = 'black';
                }
                for(let k = 1 ; k <= 9 ; k++){
                    document.getElementById(`${i}${j}${k}`).style.display = 'none';
                }
            }
            
        }
        setgameStatus(true);
    }

    const handleBottomChanges = (number) => {
        let elem = document.getElementById("i"+focused);
        let divChange = document.getElementById(`d${focused}`);
        if (number < 1) {
            elem.value = ' '
        }
        if (number > 9 && filling) {
            elem.value = number[1]
        }
        if (filling && divChange !== null) {
            divChange.style.display = '';
            const para  = document.getElementById(`${focused}${number}`);
            if(para.style.display == 'block'){
                para.style.display = 'none';
            }else{
                para.style.display = 'block';
            }   
            const inp = document.getElementById(`i${focused}`);
            inp.value = ' ';
        } else {
            if (number > 9 && number[1] >=1 && number[1] <= 9 ) {
                elem.value = number[1];
            }
            if (number[0] <= 9 && number[0] && divChange !== null || (number[0] <= 9 && number[0] >= 1 && number[1] <= 9 && number[1] >= 1 && divChange !== null)) {
                divChange.style.display = 'none';
                if(number[1] == undefined){
                    elem.value = number[0];
                }else{
                    elem.value = number[1];
                }
            }
            if (number.length === 0) {
                divChange.style.display = 'none';
            }
        }
    }

    const enableHints = () => {
        setFilling(!filling);
    }

    return (
        <div >
            <Controls cbStart={() => start()} cbCheck={() => check()} cbRestart={() => restart()} />
            <div style={!gameStatus ? { display: 'none' } : {}}>
                {createRow(1)}
                {createRow(4)}
                {createRow(7)}
            </div>
            <div style={{ marginTop: '20px' }}>
                <BottomControls bottomChanges={handleBottomChanges} active={filling} cbHints={enableHints} />
            </div>
        </div>
    )
}