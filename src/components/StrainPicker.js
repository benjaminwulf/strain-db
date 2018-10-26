import React from 'react';
// import {Button, Icon} from 'react-materialize';
import {getAllStrains} from "../helpers";

class StrainPicker extends React.Component {
    render() {
        return (
        <React.Fragment>
            <h3 className="tagline">
            <span>{this.props.tagline}</span>
            </h3>
            <form action="" className="strain-selector">
            <p>Please Enter A Strain</p>
            <input type="text" required placeholder="Strain Name" defaultValue={getAllStrains()} />
            <button waves='light' type="submit">Search</button>
        </form>
        </React.Fragment>
        ) 
    }
}

export default StrainPicker;