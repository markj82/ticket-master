import React from 'react'

const ControlPanel = (props) => {
    return (
        <>
         <h1>control panel</h1>
         <select>
             <option >select city</option>
             {props.cities.map(city => {
                 return (
                     <option key={city}>{city}</option>
                 )
             })}
         </select>

        <button>Whaaaat is happening...?</button>
        </>
    );
}
 
export default ControlPanel;