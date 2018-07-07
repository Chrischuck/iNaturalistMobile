import React from 'react'
import { connect } from 'react-redux'

import { getAccessToken } from '../../modules/session'

const mapStateToProps = state => ({ router: state.router })

@connect(mapStateToProps, { getAccessToken })
class Redirect extends React.Component {
  constructor(props) {
    super(props)


  }
  render() {
    console.log(this.props)
    return (
      <div> redirect</div>
    )
  }
} 

export default Redirect