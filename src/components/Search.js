import React, { Component } from 'react'
import { getStrainOfStrains } from "../helpers";
import axios from 'axios';

class Search extends Component {

    constructor(props){
        super(props)
        this.state = {
            query: '',
            result: []
        }
      }

//       componentDidMount(){
//         //console.log('Query:', query);
//   axios.get(`http://strainapi.evanbusse.com/yh2fbKy/strains/search/name/${this.state.query}`)
//         .then(json => json.data.results.map(result => (
//           {
//             name: `${result.name}`,
//             race: `${result.race}`,
//             desc: `${result.desc}`,
//           })))
//         .then(newData => this.setState({query: newData, result: newData}))
//         .catch(error => alert(error))
//         }

 handleInputChange = e => {
   this.setState({
    query: e.target.value,
   })

    getStrainOfStrains(e.target.value).then((response) => {
        console.log("=== ", response.data);
        this.setState({
            result: response.data
          })
    });
 }

 render() {
   return (
    <div>
     <form>
       <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <p>{this.state.query}</p>
     </form>
     {this.state.result.map(item => (
     <div>
        <div>{item.name}</div>
        <div>{item.race}</div>
        <div>{item.desc}</div>
     </div>
    ))}
     </div>
   )
 }
}

export default Search;

