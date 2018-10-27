import React from 'react';
// import {Button, Icon} from 'react-materialize';
import {getStrainOfStrains} from "../helpers";

class StrainPicker extends React.Component {

    myInput = React.createRef();

    goToStrain = event => {
        // 1. Stop form from submitting
        event.preventDefault();
        // 2. Get text from the input
        const strainName = (this.myInput.value.value);
        // 3. Change to /strain the specific strain
        this.props.history.push(`/stain/${strainName}`)
    };

    render() {
        return (
        <React.Fragment>
            <h3 className="tagline">
            <span>{this.props.tagline}</span>
            </h3>
            <form action="" className="strain-selector">
            <p>Please Enter A Strain</p>
            <input type="text" 
                ref={this.myInput}
                required 
                placeholder="Strain Name" 
                defaultValue={getStrainOfStrains()} />
            <button waves='light' type="submit">Search</button>
        </form>
        </React.Fragment>
        ) 
    }
}

export default StrainPicker;