import React, { Component } from "react";

class ShowSteps extends Component {
  state = {
    stepsArray: [],
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

  render() {
    const { stepsArray} = this.state;
    const { handleDeleteStep, jobId } = this.props;
    return (
      <div>
        <div className="card1">
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
