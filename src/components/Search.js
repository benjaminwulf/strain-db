import React, { Component } from 'react'
import { getStrainOfStrains, getEffects, getFlavors } from "../helpers";


class Search extends Component {

  constructor(props) {
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
    console.log("ID IS:", e.target.id)
    var id = e.target.id;
    getEffects(id).then((response) => {
      this.setState({
        effects: response.data.positive
      })
    })
  }

  getFlavorsId = (e) => {
    console.log("ID IS:", e.target.id)
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
        <div class="input-group input-group-lg">
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
            type="text" 
            class="form-control" 
            aria-label="Large" 
            aria-describedby="inputGroup-sizing-sm"
          />
          </div>
        </form>


        {/* <div class="input-group input-group-lg">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
          </div>
          <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </div> */}



        {this.state.result.map(item => (
          <div>
            <h2>
              <div>{item.name}</div>
            </h2>
            <div className="row">
              <div className="col-xl-6">
                <h4><a href="#"><span class="badge badge-pill badge-primary" id="sativa" onClick={this.getEffectsId} id={item.id}>Effects</span></a></h4>
                <div className="card">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{this.state.effects}</li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6">
                <h4><a href="#"><span class="badge badge-pill badge-danger" id="sativa" onClick={this.getFlavorsId} id={item.id}>Flavors</span></a></h4>
                <div className="card">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{this.state.flavors}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>Type: {item.race}</div>
            <div>Description: {item.desc}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default Search;

