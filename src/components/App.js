import React, { Component }from 'react';
import './App.css';
import ControlPanel from './ControlPanel'

class App extends Component {
  state = { 
    cities: ['London', 'Manchester', 'Leeds', 'Newcastle'],
    eventType: ['All Categories', 'Concerts', 'Sports', 'Art & Theater', 'Family', 'Film'],

  }


  componentDidMount() {
    fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=7Ajn33n2j4tmkKQJGg7VTMuEmBCy9Kzp')
      .then(buffer => {
        return buffer.json()
      })
      .then(res => {
        console.log(res)
      })
  }

  render() { 
    return (
      <>
        <ControlPanel
          cities={this.state.cities}
          eventType={this.state.eventType}
        />
      </>
    );
  }
}
 
export default App;
