import React, { Component } from 'react'
import PropTypes from 'prop-types';
import wyndhamcitylogo from './resources/wyndham-city-logo1.jpeg'
import govhackbanner from './resources/jazzy-gov-hack-wyndham-banner.jpeg'
import './App.css'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedTiming: 'Day',
      selectedGeometry: 'Not at intersection',
      selectedAlcoholTime: 'Alcohol Times Not Applicable',
      selectedSpeedZone: '50 km/hr',
      selectedPriority: 'Pedes_Motor_Cycle Hazard',
      selectedLatitude: '37.95',
      selectedLongitude: '144.6',
      timing:['Dark Street lights on', 'Day', 'Dark Street lights off', 'Dusk/Dawn', 'Dark No Street Lights', 'Dark Street Lights Unknown'],
      geometry: ['Not at intersection', 'Cross intersection', 'T intersection', 'Dead End', 'Multiple Intersection', 'Y Intersection'],
      alcoholTime: ['Alcohol Times Applied', 'Alcohol Times Not Applicable'],
      speedZone: ['30 km/hr', '40 km/hr', '50 km/hr', '60 km/hr', '70 km/hr','80 km/hr', '90 km/hr', '100 km/hr', 'Camping Road', 'Other Limit'],
      priority:['Fatality', 'Serious Injury', 'Pedes_Motor_Cycle Hazard'],
      latitude: ['37.8', '37.85', '37.9', '37.95', '37.99'],
      longitude: ['144.4', '144.5', '144.6', '144.7', '144.8']
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(event) {
    switch (event.target.name) {
      case 'timingDropdown':
        this.setState({selectedTiming: event.target.value})
        break
      case 'GeometryDropdown':
        this.setState({selectedGeometry: event.target.value})
        break
      case 'AlcoholTimeDropdown':
        this.setState({selectedAlcoholTime: event.target.value})
        break
      case 'GeometryDropdown':
        this.setState({selectedGeometry: event.target.value})
        break
      case 'speedZoneDropdown':
        this.setState({selectedSpeedZone: event.target.value})
        break
      case 'priorityDropdown':
        this.setState({selectedPriority: event.target.value})
        break
      case 'latitudeDropdown':
        this.setState({selectedLatitude: event.target.value})
        break
      case 'longitudeDropdown':
        this.setState({selectedLongitude: event.target.value})
        break
      default:
    }
  }
  
  handleSubmit() {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
          (result) => {
          this.setState({
          isLoaded: true,
          items: result.items
        });
      },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render () {
    const { classes } = this.props;
    
    const timing = this.state.timing
    const geometry = this.state.geometry
    const alcoholTime = this.state.alcoholTime
    const speedZone = this.state.speedZone
    const priority = this.state.priority
    const latitude = this.state.latitude
    const longitude = this.state.longitude
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={wyndhamcitylogo} className='App-logo' alt='wyndham-icon'/>
          <img src={govhackbanner} className='App-banner' alt='banner' />
          <h1 className='App-title'>iCare Road</h1>
        </header>
      
        <div className='App-intro'>
          <form onSubmit={this.handleSubmit}>
            <Grid container spacing={12} className='grid-control'>
              <Grid item xs={6}>
                <label htmlFor='timingDropdown' className=''>Timing</label>
              </Grid>
              <Grid item xs={6} className='dropdown-class'>
                <select name='timingDropdown' value={this.state.selectedTiming} onChange={this.handleChange} className='select-class'>
                  {timing.map(function (item) {
                    return <option value={item}>{item}</option>;
                  })}
                </select>
              </Grid>
            </Grid>
            <Grid container spacing={12} className='grid-control'>
              <Grid item xs={6}>
                <label htmlFor='GeometryDropdown' className=''>Geometry</label>
              </Grid>
              <Grid item xs={6} className='dropdown-class'>
                <select name='GeometryDropdown' value={this.state.selectedGeometry} onChange={this.handleChange} className='select-class'>
                  {geometry.map(function (item) {
                    return <option value={item}>{item}</option>;
                  })}
               </select>
              </Grid>
            </Grid>
  
            <Grid container spacing={12} className='grid-control'>
              <Grid item xs={6}>
                <label htmlFor='AlcoholTimeDropdown' className=''>Alcohol Time</label>
                </Grid>
                <Grid item xs={6} className='dropdown-class'>
                <select name='AlcoholTimeDropdown' value={this.state.selectedAlcoholTime} onChange={this.handleChange} className='select-class'>
                  {alcoholTime.map(function (item) {
                    return <option value={item}>{item}</option>;
                  })}
                </select>
              </Grid>
            </Grid>
  
            <Grid container spacing={12} className='grid-control'>
              <Grid item xs={6}>
                <label htmlFor='speedZoneDropdown' className=''>Speed Zone</label>
                </Grid>
                <Grid item xs={6} className='dropdown-class'>
                  <select name='speedZoneDropdown' value={this.state.selectedSpeedZone} onChange={this.handleChange} className='select-class'>
                {speedZone.map(function (item) {
                  return <option value={item}>{item}</option>;
                })}
              </select>
              </Grid>
            </Grid>
  
          <Grid container spacing={12} className='grid-control'>
            <Grid item xs={6}>
              <label htmlFor='latitudeDropdown' className=''>Latitude</label>
              </Grid>
              <Grid item xs={6} className='dropdown-class'>
                  <select name='latitudeDropdown' value={this.state.selectedLatitude} onChange={this.handleChange} className='select-class'>
                {latitude.map(function (item) {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </Grid>
          </Grid>
  
  
            <Grid container spacing={12} className='grid-control'>
              <Grid item xs={6}>
              <label htmlFor='longitudeDropdown' className=''>Longitude</label>
              </Grid>
                  <Grid item xs={6} className='dropdown-class'>
                  <select name='longitudeDropdown' value={this.state.selectedLongitude} onChange={this.handleChange} className='select-class'>
                {longitude.map(function (item) {
                  return <option value={item}>{item}</option>;
                })}
              </select>
                </Grid>
            </Grid>
          
            <Grid container spacing={12} className='grid-control last-grid'>
              <Grid item xs={6}>
              <label htmlFor='priorityDropdown' className=''>Priority</label>
              </Grid>
              <Grid item xs={6} className='dropdown-class'>
                <select name='priorityDropdown' value={this.state.selectedPriority} onChange={this.handleChange} className='select-class'>
                    {priority.map(function (item) {
                      return <option value={item}>{item}</option>;
                    })}
                </select>
              </Grid>
            </Grid>

            <Button color='primary' variant='contained' id='form-save' className={classes.button} type='submit'>Save and finish later</Button>
          </form>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)
