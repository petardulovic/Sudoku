import React from 'react';
import SolutionMap from '../../data/SolutionMap';
import InputWithHints from '../UI/InputWithHints';

export default function Square(props) {
    return(
        <div > 
                <InputWithHints id={`${props.row}${props.col}`} ro={SolutionMap.get(`${props.row}${props.col}`) == 0 ? false : true}   />
                <InputWithHints id={`${props.row}${props.col+1}`} ro={SolutionMap.get(`${props.row}${props.col+1}`) == 0 ? false : true} />
                <InputWithHints id={`${props.row}${props.col+2}`} ro={SolutionMap.get(`${props.row}${props.col+2}`) == 0 ? false : true} />
                 <br />
                <InputWithHints id={`${props.row+1}${props.col}`} ro={SolutionMap.get(`${props.row+1}${props.col}`) == 0 ? false : true}  /> 
                <InputWithHints id={`${props.row+1}${props.col+1}`} ro={SolutionMap.get(`${props.row+1}${props.col+1}`) == 0 ? false : true}  />
                <InputWithHints id={`${props.row+1}${props.col+2}`} ro={SolutionMap.get(`${props.row+1}${props.col+2}`) == 0 ? false : true}  />
                <br />
                <InputWithHints id={`${props.row+2}${props.col}`} ro={SolutionMap.get(`${props.row+2}${props.col}`) == 0 ? false : true}  />
                <InputWithHints id={`${props.row+2}${props.col+1}`} ro={SolutionMap.get(`${props.row+2}${props.col+1}`) == 0 ? false : true} />
                <InputWithHints id={`${props.row+2}${props.col+2}`} ro={SolutionMap.get(`${props.row+2}${props.col+2}`) == 0 ? false : true}  />
        </div>
    );
}