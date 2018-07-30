import React from 'react'
import { connect } from 'react-redux'

import { getProfile } from '../../modules/me'

const mapStateToProps = state => ({ me: state.me, session: state.session })

export default function me(WrappedComponent) {

  @connect(mapStateToProps, { getProfile })
  class Me extends React.Component {

    componentDidMount() {
      if (!this.props.me.profile) {
        const { accessToken } = this.props.session
        this.props.getProfile({ accessToken })
      }
    }

    render() {
      return <WrappedComponent me={this.props.me} {...this.props} />;
    }
  }

  return Me
}