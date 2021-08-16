import React from 'react';
import SolutionMap from '../../data/SolutionMap';
import Input from '../UI/Input';

export default function Square(props) {
    const focused = (id) => {
        console.log(id);
        props.cbFocused(id);
    } 
    return(
        <div style={{display:'flex'}}> 
                <Input focused={focused} status={props.status} filling={props.filling} id={`${props.row}${props.col}`} ro={SolutionMap.get(`${props.row}${props.col}`) == 0 ? false : true}   />
                <Input focused={focused} status={props.status} filling={props.filling} id={`${props.row}${props.col+1}`} ro={SolutionMap.get(`${props.row}${props.col+1}`) == 0 ? false : true} />
                <Input focused={focused} status={props.status} filling={props.filling} id={`${props.row}${props.col+2}`} ro={SolutionMap.get(`${props.row}${props.col+2}`) == 0 ? false : true} />
                 <br />
                 <div style={{display: 'flex', borderLeft: '2px solid purple', borderRight: '2px solid purple'}}>
                <Input focused={focused} status={props.status} filling={props.filling} id={`${props.row+1}${props.col}`} ro={SolutionMap.get(`${props.row+1}${props.col}`) == 0 ? false : true}  /> 
                <Input focused={focused} status={props.status} filling={props.filling} id={`${props.row+1}${props.col+1}`} ro={SolutionMap.get(`${props.row+1}${props.col+1}`) == 0 ? false : true}  />
                <Input focused={focused} status={props.status} filling={props.filling} id={`${props.row+1}${props.col+2}`} ro={SolutionMap.get(`${props.row+1}${props.col+2}`) == 0 ? false : true}  />
                </div>
                <br />
                <Input focused={focused} status={props.status} filling={props.filling} id={`${props.row+2}${props.col}`} ro={SolutionMap.get(`${props.row+2}${props.col}`) == 0 ? false : true}  />
                <Input focused={focused} status={props.status} filling={props.filling} id={`${props.row+2}${props.col+1}`} ro={SolutionMap.get(`${props.row+2}${props.col+1}`) == 0 ? false : true} />
                <Input focused={focused} status={props.status} filling={props.filling} id={`${props.row+2}${props.col+2}`} ro={SolutionMap.get(`${props.row+2}${props.col+2}`) == 0 ? false : true}  />
        </div>
    );
}