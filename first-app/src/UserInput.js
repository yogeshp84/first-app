import React from 'react';

const userInput =(props)=>{

    
    
        return(
            <div className="formRow">
                <label>Name:</label>
                <input type="text" onChange={props.changed} value={props.currentUser}/><br />
                <label>Age:</label>
                <input type="text" />
            </div>
        );
    
}

export default userInput;