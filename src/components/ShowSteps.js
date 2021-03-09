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
    const {handleDeleteStep, jobId} = this.props
    
      return (
          <div>
              <div className="card1">
              <div className="scrollDown">
                  {
                    
                    stepsArray.map((ele) => {  
                      return (
                        (ele.jobId === jobId) ?
                          (<div>
                             <div className="un">
                               <h5>Step</h5>
                               <p>{ele.description} </p>
                               <p>{ele.date}</p>
                             </div>
                               <button onClick={() => {handleDeleteStep(ele._id, jobId)}} className="deleteStep">Delete</button>
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