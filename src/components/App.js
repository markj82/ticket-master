import React, { Component }from 'react';
import './App.css';
import ControlPanel from './ControlPanel'
import Events from './Events'

class App extends Component {
  state = { 
    // cities: ['London', 'Manchester', 'Leeds', 'Newcastle'],
    // eventType: ['All Categories', 'Concerts', 'Sports', 'Art & Theater', 'Family', 'Film'],
    events: null,
    citySearch: ''
  }

  // https://app.ticketmaster.com/discovery/v2/events.json?city=leeds&apikey=7Ajn33n2j4tmkKQJGg7VTMuEmBCy9Kzp

  // componentDidMount() {
  //   fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=7Ajn33n2j4tmkKQJGg7VTMuEmBCy9Kzp')
  //     .then(buffer => {
  //       return buffer.json()
  //     })
  //     .then(res => {
  //       this.setState({
  //         events: res._embedded.events
  //       })
  //     }) 
  // }

  handleChangeInput = e => {
    this.setState({
      citySearch: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.fetchData()
  }

  fetchData = () => {
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?city=${this.state.citySearch}&apikey=7Ajn33n2j4tmkKQJGg7VTMuEmBCy9Kzp`)
      .then(buffer => {
        return buffer.json()
      })
      .then(res => {
        this.setState({
          events: res._embedded.events
        })
      }) 
  }

  render() { 
    return (
      <div id="main">
        <ControlPanel
          cities={this.state.cities}
          eventType={this.state.eventType}
          change={this.handleChangeInput}
          submit={this.handleSubmit}
        />
        <Events allEvents={this.state.events}/>
      </div>
    );
  }
}
 
export default App;
