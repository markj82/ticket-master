import React, { Component }from 'react';
import './App.css';
import ControlPanel from './ControlPanel'
import Events from './Events'

class App extends Component {
  state = { 
    // cities: ['London', 'Manchester', 'Leeds', 'Newcastle'],
    // eventType: ['All Categories', 'Concerts', 'Sports', 'Art & Theater', 'Family', 'Film'],
    events: null
  }

  componentDidMount() {
    fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=7Ajn33n2j4tmkKQJGg7VTMuEmBCy9Kzp')
      .then(buffer => {
        return buffer.json()
      })
      .then(res => {
        this.setState({
          events: res._embedded.events
        })
      }) 
  }

  getData = () => {
    console.log(this.state.events)
  }


  render() { 
    return (
      <>
        <ControlPanel
          cities={this.state.cities}
          eventType={this.state.eventType}
          change={this.getData}
        />
        <Events allEvents={this.state.events}/>
      </>
    );
  }
}
 
export default App;
