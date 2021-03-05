import React, { Component } from "react";
import {Row, Container, Col} from 'react-bootstrap'

class Landing extends Component {
  render() {
    const { jobDetails } = this.props;
    return (
      <div>
        <Container>
          <Row>
            <Col>
              Job Offers
                <div>
                  {/* {
                    jobDetails.map((detail) => {
                      return (
                        <div key={detail.}>
                          {detail.jobTitle}
                        </div>
                      )
                    })
                  } */}
                </div>
            </Col>
            <Col>
              <form onSubmit={this.props.onAdd}>
              <input name="jobTitle" type="text" placeholder="Job Title"/>
              <input name="companyName" type="text" placeholder="Company"/>
              <br></br>
              <label><strong>Application Date</strong></label>
              <input type="date" id="start" name="applicationDate"/>
              <br></br>
              <input name="contactPerson" type="text" placeholder="Contact Person"/>
              <input name="contactDetail" type="text" placeholder="Contact detail"/>
              <input name="jobDescription" type="text" placeholder="Job Description"/>
              {/* <input name="companyRating" type="text" placeholder="Company Rating"/> */}
              <input name="applicationLink" type="text" placeholder="Application Link" />
              <input name="sourceOfApplication" type="text" placeholder="Source of Application"/>
              <input name="salary" type="number" placeholder="Salary"/>
              <br></br>
              <label><strong>Interview Date</strong></label>
              {/* <input type="date" id="start" name="interviewDate"/> */}
              <br></br>
              <input name="jobLocation" type="text" placeholder="Job Location"/>
              <br></br>
              <button type="submit">Submit</button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Landing;
