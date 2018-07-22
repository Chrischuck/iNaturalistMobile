import React from 'react'
import { connect } from 'react-redux'

import { getObservations } from '../../modules/observations'

import createMarker from '../../utils/createMarker'

const mapStateToProps = state => ({ observations: state.observations, session: state.session })

@connect(mapStateToProps, { getObservations })
class Explore extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      radius: 5,
      watcher: null
    }
  }

  componentDidMount() {
    const { radius } = this.state
    const { tokenType, accessToken } = this.props.session

    const watcher = navigator.geolocation.watchPosition(console.log, console.error)
    this.setState({ watcher })
    
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.setState({ latitude, longitude })
        this.props.getObservations({ latitude, longitude, radius, accessToken, tokenType })
      },
      (err) => console.log(err),
      {
        enableHighAccuracy: true
      }
    )

  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.state.watcher)
  }

  render() {
    return (<div style={{height: '100%'}}>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        src= {
          `${process.env.GOOGLE_MAPS_URI}?` +
          `key=${process.env.GOOGLE_MAPS_KEY}&` +
          `maptype=satellite&` +
          `center=${this.state.latitude},${this.state.longitude}&` +
          this.props.observations.nearby.map(createMarker).join('&')
          
        }
      >
      </iframe>
    </div>)
  }
}

export default Explore