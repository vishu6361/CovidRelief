import React from 'react';
import { useSelector } from 'react-redux';

const Data = () => {
    const data = useSelector(state => state);
    console.log(data[0]);
    const item = data.map(i => i.state);
    return (
        <ul>
            {data.map(i => (
                <li>{i.state}</li>
            ))}
        </ul>
    )
}

export default Data;