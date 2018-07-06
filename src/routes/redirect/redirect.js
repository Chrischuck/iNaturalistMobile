import React from 'react'
import { connect } from 'react-redux'


@connect(mapStateToProps, mapDispatchToProps)
class Redirect extends React.Component {
  constructor(props) {
    super(props)


  }
  render() {

    return (
      <div> redirect</div>
    )
  }
} 

export default Redirect