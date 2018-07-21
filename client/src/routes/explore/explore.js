import React from 'react'
import { connect } from 'react-redux'

import { getObservations } from '../../modules/observations'

const mapStateToProps = state => ({ observations: state.observations, session: state.session })

@connect(mapStateToProps, { getObservations })
class Explore extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      radius: 5
    }
  }
  componentDidMount() {
    
    const { radius } = this.state
    const { tokenType, accessToken } = this.props.session

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => this.props.getObservations({ latitude, longitude, radius, accessToken, tokenType }),
      (err) => console.log(err)
    )
  }



  render() {
    return <div>explosadfre</div>
  }
}

export default Explore