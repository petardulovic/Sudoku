import React from 'react';
import style from '../square/Square.module.css';
import SolutionMap from '../../data/SolutionMap';
import Solution from '../../data/Solution';
import styles from './Input.module.css';

export default function Input(props) {
    const onChangeHandler = (event) => {
        let elem = document.getElementById(event.target.id);
        let divChange = document.getElementById(`d${props.id}`);
        if (event.target.value < 1) {
            elem.value = ' '
        }
        if (event.target.value > 9) {
            elem.value = ' '
        }
        if (props.filling) {
            divChange.style.display = '';
            const para  = document.getElementById(`${props.id}${event.target.value}`);
            para.style.display = 'block';
            const inp = document.getElementById(`i${props.id}`);
            inp.value = ' ';
        } else {
            if (event.target.value[0] <= 9 && event.target.value[0] || (event.target.value[0] <= 9 && event.target.value[0] >= 1 && event.target.value[1] <= 9 && event.target.value[1] >= 1)) {
                divChange.style.display = 'none';
                if(event.target.value[1] == undefined){
                    elem.value = event.target.value[0];
                }else{
                    elem.value = event.target.value[1];
                }
            }
            if (event.target.value.length === 0) {
                divChange.style.display = 'none';
            }
        }
    }

    const focusInput = () => {
        document.getElementById(`i${props.id}`).focus();
    }
    return (
        <div contentEditable={props.status === "ended" ? false : ''} id={props.id} onClick={focusInput} className={styles.container}>
            <input
                disabled={props.status === "ended" ? true : false}
                type="number"
                min="1"
                max="9"
                className={styles.box}
                onWheel={() => document.activeElement.blur()}
                id={`i${props.id}`}
                defaultValue={SolutionMap.get(props.id) === 0 ? '' : SolutionMap.get(props.id)}
                onChange={onChangeHandler}
                readOnly={props.ro}
                style={props.ro ? { color: 'blue' } : {}}
                onFocus={(event) => props.focused(props.id)}
            />
            <div id={`d${props.id}`} className={styles.stack} >
                <p id={`${props.id}1`} style={{ float: 'left', display:'none' }}>1</p>
                <p id={`${props.id}3`} style={{ float: 'right', display:'none' }}>3</p>
                <p id={`${props.id}2`} style={{display:'none'}} >2</p>
                <p id={`${props.id}4`} style={{ float: 'left', display:'none' }}>4</p>
                <p id={`${props.id}6`} style={{ float: 'right', display:'none' }}>6</p>
                <p id={`${props.id}5`} style={{display:'none'}} >5</p>
                <p id={`${props.id}7`} style={{ float: 'left', display:'none' }}>7</p>
                <p id={`${props.id}9`} style={{ float: 'right', display:'none' }}>9</p>
                <p id={`${props.id}8`} style={{display:'none'}} >8</p>
            </div>

        </div>
    )
}