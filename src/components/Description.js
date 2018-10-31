import React, { Component } from 'react'
import { getEffects } from "../helpers";
import { getFlavors } from "../helpers";
import axios from 'axios';

class Description extends Component {

    constructor(props){
        super(props)
        this.state = {
            id: '',
            result: []
        }
      }

 handleInputChange = e => {
   this.setState({
    id: e.target.value,
   })

    getEffects(e.target.value).then((response) => {
        console.log("=== ", response.data);
        this.setState({
            result: response.data
          })
    });
 }

 render() {
   return (
    <div>
     {this.state.result.map(item => (
     <div>
        <div>Detailed Description: {item}</div>
     </div>
    ))}
     </div>
   )
 }
}

export default Description;