import React from 'react'
import Loadable from 'react-loadable'


import Loading from '../../components/loading'

const LoadableComponent = Loadable({
  loader: () => import('./redirect'),
  loading: Loading,
})

const LoadableComp = () => <LoadableComponent />

export default LoadableComp