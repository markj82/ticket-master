import React from 'react'

const ControlPanel = (props) => {
    return (
        <>
         <h1>control panel</h1>

        <button onClick={props.change}>Whaaaat is happening...?</button>
        </>
    );
}
 
export default ControlPanel;