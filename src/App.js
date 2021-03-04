import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import JobDescription from './components/JobDescription'
import EditJob from './components/EditJob'
import axios from 'axios'
import CreateSteps from './components/CreateSteps'
import ShowSteps from './components/ShowSteps'
import config from './config'

class App extends Component {

  state = {
    steps: []
  }

  componentDidMount(){
    axios.get(`${config.API_URL}/api/home/steps`)
      .then((response) => {
        console.log(response.data)
        this.setState({steps: response.data})
      })
      .catch(() => {
        console.log('Fetching failed')
      })
  }

  handleSubmitStep = (event) => {
    event.preventDefault()
    let date = event.target.date.value
    let description = event.target.description.value

    axios.post(`${config.API_URL}/api/home/create-steps`, {
      date: date,
      description: description,
    })
      .then((response) => {
        this.setState({
          steps: [response.data, ... this.state.steps]
        }, () => {
          this.props.history.push('/api/')
        })
      })
      .catch((err) => {
        console.log('create failed', err)
      })
  }

  handleDelete = (stepId) => {
    axios.delete(`${config.API_URL}/api/steps/${stepId}`)
      .then(() => {
        let filteredSteps = this.state.steps.filter((step) => {
          return step._id !==stepId
        })
        TouchList.setState({
          steps: filteredSteps
        }, () => {
          this.props.history.push('/')
        }) 
      })
      .catch((err) => {
        console.log('delete failed', err)
      })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/home/:jobId" render={(routeProps) => {
            return <JobDescription />
          }}/>
          <Route path="/home/:jobId" render={(routeProps) => {
            return <EditJob />
          }} />
        </Switch>
      </div>
    )
  }
}

export default App