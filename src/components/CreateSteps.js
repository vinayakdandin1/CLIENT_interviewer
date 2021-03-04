import React, { Component } from 'react'

class CreateSteps extends Component {


    render() {
        return (
            <div>
                <div className="card">
                  <form className="addStep">
                    <input className="un" name="date" type="date" />
                    <input className="un" name="description" type="text" placeholder="Enter a step" />
                    <button className="stepButton" type="submit">Submit</button>
                  </form>
                </div>
            </div>
        )
    }
}

export default CreateSteps