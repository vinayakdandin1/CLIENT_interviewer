import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import JobDescription from './components/JobDescription'
import EditJob from './components/EditJob'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/api/home/:jobId" render={(routeProps) => {
            return <JobDescription />
          }}/>
          <Route path="/api/home/:jobId" render={(routeProps) => {
            return <EditJob />
          }} />
        </Switch>
      </div>
    )
  }
}

export default App