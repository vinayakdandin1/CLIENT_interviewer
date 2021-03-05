import React, { Component } from 'react'

class ShowSteps extends Component {

    state = {
        stepsArray: []
    }
/*
    getStep = () => {
        let id = this.props.match.params.stepId
        axios.get(`${config.API_URL}/api/steps/${stepid}`)
          .then((response) => {
              let step = {
                  date: date,
                  description: description
              }
              this.setState({
                  step: step
              })
          })
          .catch(() => {
            console.log('Fetching failed')
          })
    }
*/
    componentDidMount(){
        this.setState({
            stepsArray:  [...this.props.steps]
        })
    }
    

/*    handleDeleteStep = (stepId) => {
        axios.delete(`${config.API_URL}/api/steps/${stepId}`)
          .then(() => {
            let filteredSteps = this.state.steps.filter((step) => {
              return step._id !==stepId
            })
            TouchList.setState({
              steps: filteredSteps
            }, () => {
              this.props.history.push('/home/:jobId')
            }) 
          })
          .catch((err) => {
            console.log('delete failed', err)
          })
      }
      */
  
    render() {
        console.log(this.state.stepsArray)
        return (
            <div>
                <div className="card1">
                    <div>
                      <h4>Your steps</h4>
                        <div className="scrollDown">
                          <p className="un">I called the HR to set-up an interview  03/03/2021 <button className="deleteStep">Delete</button></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowSteps