import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return(
        <div className="out">
            <p onClick={props.click}>this is paragraph and name is {props.userName}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    )
}

export default userOutput;