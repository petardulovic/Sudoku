import React, { useEffect } from 'react';
import styles from './BottomControls.module.css';
import Pencile from '../../assets/icons/penBlack.svg';
import PencileGreen from '../../assets/icons/penGreen.svg';

export default function BottomControls(props) {
    const btns = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [active, setActive] = React.useState(false);

    const addHintsHandler = () => {
        setActive(!active);
        props.cbHints();
    }

    useEffect(() => {
        setActive(props.active)
    })

    const handleClick = (event) => {
        console.log(event.target.innerHTML);
        props.bottomChanges(event.target.innerHTML);
    }

    return (
        <div className={styles.container}>
            {btns.map(elem => {
                return(
                        <button id="btm" onClick={handleClick} onMouseDown={(event) => event.preventDefault()} className={styles.btn}>{elem}</button>
                )
            })}
            <button onMouseDown={(event) => event.preventDefault()} onClick={addHintsHandler} className={!active ? styles.btn : styles.btnActive}><img src={active ? PencileGreen : Pencile} /></button>
        </div>
    )
}