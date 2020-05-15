import React, { Component } from 'react'
import PropTypes from 'prop-types';
import wyndhamcitylogo from './resources/govhack-logo.png'
import govhackbanner from './resources/jazzy-gov-hack-wyndham-banner.jpeg'
import './App.css'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import OverlayLoader from 'react-overlay-loading/lib/OverlayLoader'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      selectedTiming: 'Day',
      selectedAccidentTime: '6PM-8PM',
      selectedGeometry: 'Not at intersection',
      selectedAlcoholTime: 'Yes',
      selectedSpeedZone: '50 km/hr',
      selectedPriority: 'Fatality',
      selectedNodeType: 'Intersection',
      selectedLga: 'WYNDHAM',
      selectedLatitude: '37.95',
      selectedLongitude: '144.6',
      timing:['Dark Street lights on', 'Day', 'Dark Street lights off', 'Dusk/Dawn', 'Dark No street lights', 'Dark Street lights unknown'],
      accidentTime:['12AM-5AM', '5AM-6AM', '6AM-7AM', '7AM-8AM', '8AM-9AM', '9AM-10AM', '10AM-11AM', '11AM-1PM', '1PM-3PM', '3PM-4PM', '4PM-6PM', '6PM-8PM', '8PM-12AM'],
      geometry: ['Not at intersection', 'Cross intersection', 'T intersection', 'Dead end', 'Multiple intersection', 'Y intersection'],
      alcoholTime: ['Yes', 'No'],
      speedZone: ['30 km/hr', '40 km/hr', '50 km/hr', '60 km/hr', '70 km/hr','80 km/hr', '90 km/hr', '100 km/hr', 'Camping Road', 'Other Limit'],
      priority:['Fatality', 'Serious Injury', 'Pedes_Motor_Cycle Hazard'],
      nodeType:['Intersection', 'Non-Intersection', 'Off Road'],
      latitude: ['37.8', '37.85', '37.9', '37.95', '37.99'],
      longitude: ['144.4', '144.5', '144.6', '144.7', '144.8'],
      lga: ['-- All --', 'ALPINE', 'ARARAT', 'BALLARAT', 'BANYULE', 'BASS COAST', 'BAW BAW', 'BAYSIDE', 'BENALLA', 'BENDIGO', 'BOROONDARA', 'BRIMBANK', 'BULOKE', 'CAMPASPE', 'CARDINIA', 'CASEY', 'CENTRAL GOLDFIELDS', 'COLAC OTWAY', 'CORANGAMITE', 'DANDENONG', 'DAREBIN', 'EAST GIPPSLAND', 'FALLS CREEK', 'FRANKSTON', 'FRENCH ISLAND', 'GANNAWARRA', 'GEELONG', 'GLEN EIRA', 'GLENELG', 'GOLDEN PLAINS', 'HEPBURN', 'HINDMARSH', 'HOBSONS BAY', 'HORSHAM', 'HUME', 'INDIGO', 'KINGSTON', 'KNOX', 'LAKE MOUNTAIN', 'LATROBE', 'LODDON', 'MACEDON RANGES', 'MANNINGHAM', 'MANSFIELD', 'MARIBYRNONG', 'MAROONDAH', 'MELBOURNE', 'MELTON', 'MILDURA', 'MITCHELL', 'MOIRA', 'MONASH','MOONEE VALLEY', 'MOORABOOL', 'MORELAND', 'MORNINGTON PENINSULA', 'MOUNT ALEXANDER', 'MOUNT BAW BAW', 'MOUNT BULLER', 'MOUNT HOTHAM', 'MOUNT STIRLING', 'MOYNE', 'MURRINDINDI', 'NILLUMBIK', 'NORTHERN GRAMPIANS', 'PORT PHILLIP', 'PYRENEES', 'QUEENSCLIFFE', 'SHEPPARTON', 'SOUTH GIPPSLAND', 'SOUTHERN GRAMPIANS', 'STONNINGTON', 'STRATHBOGIE', 'SURF COAST', 'SWAN HILL', 'TOWONG', 'WANGARATTA', 'WARRNAMBOOL', 'WELLINGTON', 'WEST WIMMERA', 'WHITEHORSE', 'WHITTLESEA', 'WODONGA', 'WYNDHAM', 'YARRA', 'YARRA RANGES', 'YARRIAMBIACK'],
      response: {
        success: 'hidden',
        value: ''
      }
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(event) {
    switch (event.target.name) {
      case 'timingDropdown':
        this.setState({selectedTiming: event.target.value})
        break
      case 'accidentDropdown':
        this.setState({selectedAccidentTime: event.target.value})
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
      case 'nodeTypeDropdown':
        this.setState({selectedNodeType: event.target.value})
        break
      case 'lgaDropdown':
        this.setState({selectedLga: event.target.value})
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
  
  handleSubmit(e) {
    e.preventDefault();
    this.setState({response: {success: 'hidden', value: ''}})
    this.setState({loading: true})
    setTimeout(() => {
      fetch('http://127.0.0.1:5000/execute/'+this.state.selectedTiming.replace("/","@@")+'/'+this.state.selectedAccidentTime.replace("/","@@")+'/'
      +this.state.selectedGeometry.replace("/","@@")+'/'+this.state.selectedAlcoholTime.replace("/","@@")+'/'
      +this.state.selectedSpeedZone.replace("/","@@")+'/'+this.state.selectedNodeType.replace("/","@@")
      +'/'+this.state.selectedLatitude.replace("/","@@")
      +'/'+this.state.selectedLongitude.replace("/","@@")+'/'+this.state.selectedPriority.replace("/","@@"))
  .then(res => res.json())
  .then(
      (result) => {
      this.setState({loading: false})
    this.setState({response: {success: 'visible', value: result.result}})
  },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    (error) => {
      this.setState({loading: false})
      this.setState({response: {success: 'visible', value: 'Sory, Error Occured.'}})
    }
  )
  }, 1000)
  }
  
  render () {
    const { classes } = this.props;
    
    const timing = this.state.timing
    const accidentTime = this.state.accidentTime
    const geometry = this.state.geometry
    const alcoholTime = this.state.alcoholTime
    const speedZone = this.state.speedZone
    const nodeType = this.state.nodeType
    const priority = this.state.priority
    const lga = this.state.lga
    const latitude = this.state.latitude
    const longitude = this.state.longitude
    return (
      <OverlayLoader
    color={'darkgreen'} // default is white
    loader="ScaleLoader" // check below for more loaders
    text="Predicting... Please wait!"
    active={this.state.loading}
    backgroundColor={'black'} // default is black
    opacity=".4" // default is .9
      >
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
      <label htmlFor='priorityDropdown' className=''>Predict</label>
      </Grid>
      <Grid item xs={6} className='dropdown-class'>
      <select name='priorityDropdown' value={this.state.selectedPriority} onChange={this.handleChange} className='select-class'>
      {priority.map(function (item) {
        return <option value={item}>{item}</option>;
      })}
	  </select>
    </Grid>
    </Grid>
    
    <Grid container spacing={12} className='grid-control'>
      <Grid item xs={6}>
      <label htmlFor='AlcoholTimeDropdown' className=''>Alcohol Time Applicable</label>
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
      <label htmlFor='accidentDropdown' className=''>Time Zone</label>
    </Grid>
    <Grid item xs={6} className='dropdown-class'>
      <select name='accidentDropdown' value={this.state.selectedAccidentTime} onChange={this.handleChange} className='select-class'>
      {accidentTime.map(function (item) {
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
      <label htmlFor='nodeTypeDropdown' className=''>Node Type</label>
    </Grid>
    <Grid item xs={6} className='dropdown-class'>
      <select name='nodeTypeDropdown' value={this.state.selectedNodeType} onChange={this.handleChange} className='select-class'>
      {nodeType.map(function (item) {
        return <option value={item}>{item}</option>;
      })}
  </select>
    </Grid>
    </Grid>
    
    <Grid container spacing={12} className='grid-control'>
      <Grid item xs={6}>
      <label htmlFor='lgaDropdown' className=''>LGA</label>
      </Grid>
      <Grid item xs={6} className='dropdown-class'>
      <select name='lgaDropdown' value={this.state.selectedLga} onChange={this.handleChange} className='select-class'>
      {lga.map(function (item) {
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
    
    
    <Grid container spacing={12} className='grid-control last-grid'>
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
    
    <Button color='primary' variant='contained' id='form-save' className={classes.button} type='submit'>Predict Probability</Button>
    </form>
    <div class='response-result' style={{'visibility': this.state.response.success}}>
  <h3>ESTIMATED PROBABILITY: {this.state.response.value}</h3>
    </div>
    </div>
    </div>
    </OverlayLoader>
  )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)