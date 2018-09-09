import React, { Component } from 'react'
import PropTypes from 'prop-types';
import wyndhamcitylogo from './resources/wyndham-city-logo1.jpeg'
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
      longitude: ['144.4', '144.5', '144.6', '144.7', '144.8'],
      lgaNames: ['BOROONDARA', 'PORT PHILLIP', 'YARRA', 'WHITEHORSE', 'KNOX', 'LATROBE', 'YARRA', 'DAREBIN', 'NILLUMBIK', 'DANDENONG', 'MONASH', 'MELBOURNE', 'MELTON', 'MOUNT ALEXANDER', 'KINGSTON', 'BANYULE', 'WYNDHAM', 'MANSFIELD', 'FRANKSTON', 'SHEPPARTON', 'MOYNE', 'GLENELG', 'CASEY', 'BAYSIDE', 'INDIGO', 'BRIMBANK', 'HUME', 'CENTRAL GOLDFIELDS', 'MORNINGTON PENINSULA', 'MOONEE VALLEY', 'MARIBYRNONG', 'BENDIGO', 'MORELAND', 'GEELONG', 'BAW BAW', 'WELLINGTON', 'HOBSONS BAY', 'STRATHBOGIE', 'GLEN EIRA', 'BAYSIDE', 'YARRA RANGES', 'LODDON', 'MAROONDAH', '(LAKE MOUNTAIN)', 'DAREBIN', 'MONASH', 'KINGSTON', 'WHITTLESEA', 'CAMPASPE', 'CORANGAMITE', 'CARDINIA', 'YARRA', 'MORELAND', 'STONNINGTON', 'MANNINGHAM', 'PORT PHILLIP', 'MELBOURNE', 'WHITEHORSE', 'MONASH', 'MACEDON RANGES', 'HUME', 'PORT PHILLIP', 'GLEN EIRA', 'KINGSTON', 'BAYSIDE', 'BALLARAT', 'EAST GIPPSLAND', 'MILDURA', 'MACEDON RANGES', 'MITCHELL', 'PYRENEES', 'GANNAWARRA', 'HORSHAM', 'WARRNAMBOOL', 'MOORABOOL', 'GLEN EIRA', 'STONNINGTON', 'MONASH', 'YARRA RANGES', 'MAROONDAH', 'MURRINDINDI', 'MURRINDINDI', 'SURF COAST', 'MONASH', 'BOROONDARA', 'GOLDEN PLAINS', 'SOUTH GIPPSLAND', 'WHITEHORSE', 'BOROONDARA', 'ARARAT', 'NORTHERN GRAMPIANS', 'WODONGA', 'SOUTHERN GRAMPIANS', 'MONASH', 'DANDENONG', 'WANGARATTA', 'NILLUMBIK', 'BANYULE', 'HEPBURN', 'BASS COAST', 'COLAC OTWAY', 'TOWONG', 'KINGSTON', 'DANDENONG', 'HINDMARSH', 'MOONEE VALLEY', 'MELBOURNE', 'FRANKSTON', 'CASEY', 'SWAN HILL', 'WYNDHAM', 'HOBSONS BAY', 'KINGSTON', 'GLEN EIRA', 'WYNDHAM', 'MELTON', 'YARRA', 'MELBOURNE', 'YARRA RANGES', 'MURRINDINDI', 'MURRINDINDI', 'YARRIAMBIACK', 'STONNINGTON', 'MELBOURNE', 'WHITTLESEA', 'DAREBIN', 'MOIRA', 'BULOKE', 'ALPINE', 'BENALLA', 'FRANKSTON', 'CASEY', 'DANDENONG', 'DANDENONG', 'CASEY', 'SHEPPARTON', 'CAMPASPE', 'FRANKSTON', 'MORNINGTON PENINSULA', 'MURRINDINDI', 'MITCHELL', 'MURRINDINDI', 'MONASH', 'GLEN EIRA', 'WELLINGTON', 'EAST GIPPSLAND', 'WARRNAMBOOL', 'MOYNE', 'YARRA RANGES', 'KNOX', 'WHITEHORSE', 'MANNINGHAM', 'MELTON', 'BRIMBANK', 'HOBSONS BAY', 'BRIMBANK', 'WHITTLESEA', 'NILLUMBIK', 'MOIRA', 'SHEPPARTON', 'WYNDHAM', 'BRIMBANK', 'YARRA RANGES', 'MANNINGHAM', 'WEST WIMMERA', 'GOLDEN PLAINS', 'GEELONG', 'STONNINGTON', 'PORT PHILLIP', 'WHITEHORSE', 'MAROONDAH', 'MARIBYRNONG', 'BRIMBANK', 'DAREBIN', 'BANYULE', 'MANSFIELD', 'BENALLA', 'FRANKSTON', 'DANDENONG', 'WODONGA', 'INDIGO', 'PYRENEES', 'BALLARAT', 'YARRA RANGES', 'CARDINIA', 'PYRENEES', 'ARARAT', 'SURF COAST', 'COLAC OTWAY', 'MORELAND', 'DAREBIN', 'SURF COAST', 'GEELONG', '(FALLS CREEK)', 'YARRA RANGES', 'CASEY', 'MARIBYRNONG', 'HOBSONS BAY', 'CARDINIA', 'BASS COAST', 'SOUTHERN GRAMPIANS', 'HORSHAM', 'MOORABOOL', 'BALLARAT', 'MORELAND', 'MELBOURNE', 'PORT PHILLIP', 'BAYSIDE', 'SOUTH GIPPSLAND', 'BASS COAST', 'FRANKSTON', 'KINGSTON', 'QUEENSCLIFFE', 'STONNINGTON', 'GLEN EIRA', 'YARRA RANGES', 'BAW BAW', 'HUME', 'BRIMBANK', 'MONASH', 'DANDENONG', 'KINGSTON', '(MOUNT BAW BAW)', 'NORTHERN GRAMPIANS', 'HORSHAM', 'HEPBURN', 'BALLARAT', 'MONASH', 'GLEN EIRA', 'KINGSTON', 'CARDINIA', 'CASEY', '(MOUNT HOTHAM)', 'LODDON', 'GANNAWARRA', 'COLAC OTWAY', 'CORANGAMITE', 'MANSFIELD', 'MURRINDINDI', 'MURRINDINDI', 'CORANGAMITE', 'COLAC OTWAY', 'WELLINGTON', 'LATROBE', 'LATROBE', 'BAW BAW', 'YARRA RANGES', 'NILLUMBIK', 'CARDINIA', 'BAW BAW', 'LODDON', 'BENDIGO', 'MORELAND', 'BRIMBANK', 'MACEDON RANGES', 'HEPBURN', 'STRATHBOGIE', 'MURRINDINDI', 'MURRINDINDI', 'SOUTHERN GRAMPIANS', 'GLENELG', 'WYNDHAM', 'BRIMBANK', 'MELTON', 'LODDON', 'CENTRAL GOLDFIELDS', 'KINGSTON', 'BAYSIDE', 'GLEN EIRA', 'MORNINGTON PENINSULA', 'CASEY', 'MANNINGHAM', 'BOROONDARA', 'WHITTLESEA', 'MITCHELL', '(MOUNT BULLER)', 'MOYNE', 'ARARAT', 'MOUNT ALEXANDER', 'BENDIGO', 'STONNINGTON', 'MELBOURNE', 'PORT PHILLIP', 'MAROONDAH', 'MANNINGHAM', 'GOLDEN PLAINS', 'BALLARAT', 'WANGARATTA', 'INDIGO', 'MOORABOOL', 'GEELONG', 'STRATHBOGIE', 'MANSFIELD', 'MOYNE', 'CORANGAMITE', 'MOORABOOL', 'HEPBURN', 'STRATHBOGIE', 'MITCHELL', 'HEPBURN', 'CENTRAL GOLDFIELDS', 'TOWONG', 'ALPINE', 'WHITEHORSE', 'BOROONDARA', 'MONASH', 'MANSFIELD', 'BAW BAW', 'TOWONG', 'INDIGO', 'WANGARATTA', 'BENALLA', 'MANSFIELD', 'BENALLA', 'WANGARATTA', 'SOUTH GIPPSLAND', 'BAW BAW', 'YARRA', 'MELBOURNE', 'MORELAND', 'NILLUMBIK', 'MURRINDINDI', 'MURRINDINDI', 'SWAN HILL', 'GANNAWARRA', 'YARRIAMBIACK', 'BULOKE', 'QUEENSCLIFFE', 'GEELONG', 'MOORABOOL', 'MELTON', 'MILDURA', 'BULOKE', 'STRATHBOGIE', 'SHEPPARTON', 'MOONEE VALLEY', 'MORELAND', 'MACEDON RANGES', 'MITCHELL', 'PYRENEES', 'NORTHERN GRAMPIANS', 'MITCHELL', 'BENDIGO', 'CAMPASPE', 'BENDIGO', 'YARRA RANGES', 'MANNINGHAM', 'MAROONDAH', 'STRATHBOGIE', 'BENALLA', 'GOLDEN PLAINS', 'COLAC OTWAY', 'MOUNT ALEXANDER', 'LODDON', 'SOUTH GIPPSLAND', 'CARDINIA', 'YARRIAMBIACK', 'NORTHERN GRAMPIANS', 'PYRENEES', 'CENTRAL GOLDFIELDS', '(MOUNT STIRLING)', '(FRENCH ISLAND)', 'YARRIAMBIACK', 'HINDMARSH', 'FRANKSTON', 'CASEY', 'MORNINGTON PENINSULA'],
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
  
  handleSubmit(e) {
    e.preventDefault();
    this.setState({response: {success: 'hidden', value: ''}})
    this.setState({loading: true})
    setTimeout(() => {
      fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
          (result) => {
          this.setState({loading: false})
          this.setState({response: {success: 'visible', value: ''}})
      },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({loading: false})
          this.setState({response: {success: 'visible', value: '<>%'}})
    }
      )
    }, 1000)
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
      <OverlayLoader
      color={'darkgreen'} // default is white
      loader="ScaleLoader" // check below for more loaders
      text="Loading... Please wait!"
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
            <div class='response-result' style={{'visibility': this.state.response.success}}>
                <h2>ESTIMATED VALUE: {this.state.response.value}</h2>
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
