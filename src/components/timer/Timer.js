import React, { useEffect, useState } from 'react';

export default function Stopwatch(props) {
    const [time,setTime] = useState(0);

    useEffect(() => {
        setTimeout(
            setTime(time+1)
            ,1000)
    })

    return(
        <div> 
            {(time/10000).toPrecision(5)} Seconds!
        </div>
    )
}