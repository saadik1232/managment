import React, { Component } from 'react';
import axios from 'axios'


export default class Totalcomp extends Component {

    state = {
        data: []
    }

    async componentDidMount() {
        await axios.get("http://192.168.100.123:3001/panic").then((response) => {
            this.setState({ data: response.data.result.data })
            console.log(this.state.data.length)
        })
    }

    render() {
        return (
            <div>
                <p> <b>this is the totalcomplaints component and
                    total number of complaints are :</b> {this.state.data.length}
                </p>

            </div>
        )
    }
}
