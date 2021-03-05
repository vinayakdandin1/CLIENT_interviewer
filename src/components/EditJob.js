import React, { Component } from 'react'
import axios from 'axios'
import config from '../config'


class EditJob extends Component {

    state = {
        jobDescription: {}
    }

    componentDidMount(){
        let jobDescriptionId = this.props.match.params.jobDescriptionId
        axios.get(`${config.API_URL}/api/home/${jobDescriptionId}`)
          .then((response) => {
              this.setState ({
                  jobDescription: response.data
              })
          })
          .catch(() => {
              console.log('Detail fetch failed')
          })
    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default EditJob