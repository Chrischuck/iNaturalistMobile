import React from 'react'
import Loadable from 'react-loadable'


import Loading from '../../components/loading'

const LoadableComponent = Loadable({
  loader: () => import('./landing'),
  loading: Loading,
})

const LoadableComp = () => <LoadableComponent />

export default LoadableComp