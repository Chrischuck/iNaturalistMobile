import React from 'react'
import { connect } from 'react-redux'

import { getAccessToken } from '../../modules/session'

const mapStateToProps = state => ({ router: state.router })

@connect(mapStateToProps, { getAccessToken })
class Redirect extends React.Component {

  componentDidMount() {
    const { getAccessToken } = this.props
    const queryParams = window.location.search.substr(1)
    const paramMap = {}
    queryParams.split('&').forEach(el => {
      const pieces = el.split('=')
      paramMap[ pieces[0] ] = pieces[1]
    })
    
    getAccessToken({ code: paramMap.code })
  }


  render() {
    return (
      <div> redirect</div>
    )
  }
} 

export default Redirect