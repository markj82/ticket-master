import React from 'react'
import './Event.css'

const Event = (props) => {
    if(props.allEvents) {
        return props.allEvents.map(event => {
            return (
                <div id="all-events">
                <div key={event.id} id="event"> 
                    <h5>{event.name}</h5>
                    <img src={event.images[2].url}/>
                    <p>{event.classifications[0].segment.name}</p>
                    <p>{event.classifications[0].subGenre.name}</p>
                </div>
                </div>
            )
        })
    } else return <h5> rendering please wait...</h5>
    
}
 
export default Event;
