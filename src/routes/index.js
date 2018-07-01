import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from '../components/navbar'

import NotFound from './notFound'

class AppRouter extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <Router>
          <Switch>
            <Route exact component={NotFound} />
          </Switch>
        </Router>
      </>

    )
  }
}
export default AppRouter;