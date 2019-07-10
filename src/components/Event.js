import React from 'react'
import './Event.css'

const Event = (props) => {
    if(props.allEvents) {        
        return props.allEvents.map(event => {
            const urlOK = event.images.find(img => {
                return img.ratio === "4_3"
            })
            return (
                <div id="all-events">
                <div key={event.id} id="event"> 
                    <img src={urlOK.url}/>
                    <h5>{event.name}</h5>
                    <p>{event.classifications[0].segment.name}</p>
                    <p>{event.classifications[0].subGenre.name}</p>
                </div>
                </div>
            )
        })
    } else return <h5> rendering please wait...</h5>
    
}
 
export default Event;