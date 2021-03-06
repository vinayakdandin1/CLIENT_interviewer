import React, { Component } from 'react'

class ShowSteps extends Component {
  
  stete = {
    stepsArray: []
  }

 checkOwner = () => {
    let steps = this.props.steps;
    // let showStepsArray = []

    // steps.forEach((ele) => {
    //   if(this.props.jobId === ele.jobId) {
    //     showStepsArray.push(ele)
    //   }
    // })

    this.setState({
      stepsArray: [...steps]
    })

 }

 componentDidMount() {
   this.checkOwner()
 }

 componentDidUpdate() {
    if(this.props.steps.length !== this.state.stepsArray.length) {
      this.setState({
        stepsArray: [...this.props.steps]
      }, () => {
        console.log(this.state.stepsArray)
      })
    }
 }
  
  render() {
    // const {stepsArray} = this.state 
    
      return (
          <div>
              <div className="card1">
                  <div>
                  {/* {
                    stepsArray.map((ele) => {                        
                      <div className="scrollDown">
                        <p className="un">I called the HR to set-up an interview  03/03/2021 <button className="deleteStep">Delete</button></p>
                      </div>                   
                    })
                  } */}
                  </div> 
              </div>
          </div>
      )
  }
}

export default ShowSteps