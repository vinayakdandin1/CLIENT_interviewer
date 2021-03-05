import React, { Component } from 'react'

class CreateStep extends Component {

  /*
  state = {
    steps: []
  }

  componentDidMount(){
    let jobId = this.props.match.params.jobId
    axios.get(`${config.API_URL}/api/home/${jobId}`)
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
  
      axios.post(`${config.API_URL}/api/create-steps`, {
        date: date,
        description: description,
      })
        .then((response) => {
          this.setState({
            steps: [response.data, ...this.state.steps]
          }, () => {
            this.props.history.push('/home/:jobId')
          })
        })
        .catch((err) => {
          console.log('create failed', err)
        })
    }
    */


    render() {
      //console.log(this.props.steps)
        return (
            <div>
                <div className="card">
                  <form onSubmit={this.props.handleSubmitStep} className="addStep">
                    <input className="un" name="date" type="date" />
                    <input className="un" name="description" type="text" placeholder="Enter a step" />
                    <button className="stepButton" type="submit">Submit</button>
                  </form>
                </div>
            </div>
        )
    }
}

export default CreateStep