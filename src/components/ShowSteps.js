import React, { Component } from "react";

class ShowSteps extends Component {
  state = {
    stepsArray: [],
    classes: null
  };

  getSteps = () => {
    let steps = this.props.steps;

    this.setState({
      stepsArray: [...steps],
    });
  };

  componentDidMount() {
    this.getSteps();
  }

  componentDidUpdate() {
    if (this.props.steps.length !== this.state.stepsArray.length) {
      this.setState({
        stepsArray: [...this.props.steps],
      });
    }
  }

  dateFormatChange = (date) => {
    let newDate = date.split("T", 1).reverse();
    return newDate;
  };

  dateFormatChange = (date) => {
    let newDate = date.split("T", 1).reverse();
    return newDate;
  };

  checkStepsEmpty = () => {
    let cloned = this.state.stepsArray;
    cloned.forEach((e) => {
      if (e._id === this.props.jobId) {
        this.setState({
          classes: "card1"
        })
      }
    });
  };

  render() {
    const { stepsArray,classes } = this.state;
    const { handleDeleteStep, jobId } = this.props;
    this.checkStepsEmpty()
    return (
      <div>
        <div className={classes}>
          <div className="scrollDown">
            {stepsArray.map((ele) => {
              return ele.jobId === jobId ? (
                <div key={ele._id}>
                  <div className="un">
                    <h6>{ele.description} </h6>
                    <h6>{ele.date ? this.dateFormatChange(ele.date) : null}</h6>
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
      </div>
    );
  }
}

export default ShowSteps;
