import React, { Component } from 'react'
import { getStrainOfStrains, getEffects, getFlavors } from "../helpers";


class Search extends Component {

    constructor(props){
        super(props)
        this.state = {
            query: '',
            result: [],
            effects: [],
            flavors: []
        }
      }

 handleInputChange = e => {
   this.setState({
    query: e.target.value,
    id: ''
   })

    getStrainOfStrains(e.target.value).then((response) => {
        console.log("=== ", response.data);
        this.setState({
            result: response.data
          })
    });     
 }

 getEffectsId = (e) => {
    console.log("ID IS:",e.target.id)
    var id = e.target.id;
    getEffects(id).then((response) => {
    this.setState({
        effects: response.data.positive
        // effectsNegative: response.data.negative,
        // effectsMedical: response.data.medical
      })
    })
 }

 getFlavorsId = (e) => {
    console.log("ID IS:",e.target.id)
    var id = e.target.id;
    getFlavors(id).then((response) => {
    this.setState({
        flavors: response.data
      })
    })
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
        <h2>
        <div>{item.name}</div>
        </h2>

        <button waves='light' type="submit" onClick={this.getEffectsId} id={item.id}>Effects: {item.id}
        <div>
        {this.state.effects}
        </div>
        </button>

        <button waves='light' type="submit" onClick={this.getFlavorsId} id={item.id}>Flavors: {item.id}
        <div>
        {this.state.flavors}
        </div>
        </button>

        <div>Type: {item.race}</div>
        <div>Description: {item.desc}</div>
     </div>
    ))}
     </div>
   )
 }
}

export default Search;

