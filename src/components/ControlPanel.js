import React from 'react'
import './ControlPanel.css'

const ControlPanel = (props) => {
    return (
        <div id="control-panel">
            <h1>Event Awesome Tracker</h1>
            <form onSubmit={props.submit}>
                <label>
                    <input onChange={props.change} type="txt" placeholder="enter location"/>
                </label>
                <button>Search</button>
            </form>
        </div>
        
    );
}
 
export default ControlPanel;