import React, { Component } from 'react'
class CreateStep extends Component {


    render() {
      let jobId = this.props.jobId
        return (
            <div>
                <div className="card1">
                  <form onSubmit={this.props.handleSubmitStep} className="addStep">
                    <input className="un" name="date" type="date" />
                    <input className="un" name="description" type="text" placeholder="Enter a step" />
                    <input type="hidden" name="jobId" value={jobId} />
                    <button className="stepButton" type="submit">SUBMIT</button>
                  </form>
                </div>
            </div>
        )
    }
}

export default CreateStep