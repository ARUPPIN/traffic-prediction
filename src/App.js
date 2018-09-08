import React, { Component } from 'react'
import wyndhamcitylogo from './resources/wyndham-city-logo.jpeg'
import govhackbanner from './resources/jazzy-gov-hack-banner.jpeg'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: 'grapefruit'
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event) {
    this.setState({selected: event.target.value});
  }
  
  handleSubmit() {
    console.log('Submit success')
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={wyndhamcitylogo} className='App-logo' alt='wyndham-icon'/>
          <img src={govhackbanner} className='App-banner' alt='banner' />
          <h1 className='App-title'>Predict Wyndham Traffic</h1>
        </header>
      
        <p className='App-intro'>
          <form onSubmit={this.handleSubmit}>
            <div>
              <select value={this.state.selected} onChange={this.handleChange}>
                <option value="sample1">Sample 1</option>
                <option value="sample2">Sample 2</option>
                <option value="sample3">Sample 3</option>
                <option value="sample4">Sample 4</option>
              </select>
            <div>
          </form>
        </p>
      </div>
    )
  }
}

export default App
