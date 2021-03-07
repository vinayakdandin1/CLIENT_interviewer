import React, { Component } from 'react'

class ShowSteps extends Component {
  
  state = {
    stepsArray: []
  }

 getSteps = () => {
    let steps = this.props.steps;

    this.setState({
      stepsArray: [...steps]
    })

 }

 componentDidMount() {
   this.getSteps()
 }

 componentDidUpdate() {
   
    if(this.props.steps.length !== this.state.stepsArray.length) {
      this.setState({
        stepsArray: [...this.props.steps]
      })
    }
 }
  
  render() {
    const {stepsArray} = this.state 
    
      return (
          <div>
              <div className="card1">
              <div className="scrollDown">
                  {
                    
                    stepsArray.map((ele) => {  
                      return (
                        (ele.jobId === this.props.jobId) ?
                          (<div>
                        <p className="un">{ele.description} </p>
                        <p className="un">{ele.date}</p>
                        <button className="deleteStep">Delete</button>
                        </div>) : null
                      )                                       
                    })
                     
                  }
                  </div>
              </div>
          </div>
      )
  }
}

export default ShowSteps