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
  
  dateFormatChange = (date) => {
    let newDate = date.split("T", 1).reverse();
    return newDate
  }
  
  render() {
    const {stepsArray} = this.state 
    const {handleDeleteStep, jobId} = this.props
    
      return (
        <div>
            <div className="scrollDown">
              {stepsArray.map((ele) => {
                return ele.jobId === jobId ? (
                  <div className="card1">
                    <div className="un">
                      <p>{ele.description} </p>
                      <p>{ele.date}</p>
                    </div>
                    <button
                      onClick={() => {
                        handleDeleteStep(ele._id, jobId);
                      }}
                      className="deleteStep"
                    >
                      DELETE
                    </button>
                  </div>
                ) : null;
              })}
            </div>
          </div>
      );
  }
}

export default ShowSteps