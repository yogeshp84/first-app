import React from 'react';

const userOutput=(props)=>{

    
        return(
            <div style={props.style}>
                <p>Hello My name is {props.name}</p>
                <p>My Age is {props.age}</p>
            </div>
        )
    }


export default userOutput;