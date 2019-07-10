import React from 'react'
import Event from './Event'

const Events = (props) => {
    console.log(props)
    return ( 
        <Event allEvents={props.allEvents}/>
     );
}
 
export default Events;
