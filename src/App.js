import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import MainPage from './components/MainPage'

class App extends Component {
  render() {
    return (
      <div>
        

        
        { <Switch>
            <Route exact path="/" render={() => {
                return <MainPage />
            }} />
           
        </Switch> }
      </div>
    )
  }
}

export default withRouter(App)