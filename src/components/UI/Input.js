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
        if (event.target.value > 9 && props.filling ) {
            elem.value = event.target.value[1];
        }
        if (props.filling) {
            if(event.target.value[0] <= 9 && event.target.value[0] >= 1 || (event.target.value[0] <= 9 && event.target.value[0] >= 1 && event.target.value[1] <= 9 && event.target.value[1] >= 1)){
                divChange.style.display = '';
                const para  = document.getElementById(`${props.id}${event.target.value}`);
                if(para.style.display == 'block'){
                    para.style.display = 'none';
                }else{
                    para.style.display = 'block';
                }
                const inp = document.getElementById(`i${props.id}`);
                inp.value = ' ';
            }
        } else {
            if (event.target.value > 9 && event.target.value[1] >=1 && event.target.value[1] <= 9 ) {
                elem.value = event.target.value[1];
            }
            if (event.target.value[0] <= 9 && event.target.value[0] >= 1 || (event.target.value[0] <= 9 && event.target.value[0] >= 1 && event.target.value[1] <= 9 && event.target.value[1] >= 1)) {
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
                <div  style={{width: '100%', height:'33%'}}>
                <p id={`${props.id}1`} style={{verticalAlign: 'top', float: 'left', display:'none' }}>1</p>
                <p id={`${props.id}3`} style={{ verticalAlign: 'top',float: 'right', display:'none' }}>3</p>
                <p id={`${props.id}2`} style={{verticalAlign: 'top', display:'none'}} >2</p>
                </div>
                <div  style={{width: '100%', height:'33%'}}>
                <p id={`${props.id}4`} style={{verticalAlign: 'middle', float: 'left', display:'none' }}>4</p>
                <p id={`${props.id}6`} style={{verticalAlign: 'middle', float: 'right', display:'none' }}>6</p>
                <p id={`${props.id}5`} style={{verticalAlign: 'middle',display:'none'}} >5</p>
                </div>
                <div style={{width: '100%', height:'33%'}}>
                <p id={`${props.id}7`} style={{verticalAlign: 'bottom',  float: 'left', display:'none' }}>7</p>
                <p id={`${props.id}9`} style={{verticalAlign: 'bottom',  float: 'right', display:'none' }}>9</p>
                <p id={`${props.id}8`} style={{verticalAlign: 'bottom', display:'none'}} >8</p>
                </div>
            </div>

        </div>
    )
}