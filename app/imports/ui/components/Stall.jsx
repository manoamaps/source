import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Button, Grid, Popup } from 'semantic-ui-react'


const style={
    
    position: 'relative', 
    color: 'white',
    background: 'red',
    height: 25, 
    width: 25, 
    top: -20, 
    left: -30,    
};

export default class Stall extends Component {
    render() {
        if (this.props.open) {
            return (
                <div>
                    <Button size="mini" color='green' content='Stall Open' onClick={this.onChange}/>
                </div>
            );
        } else {
            return (
                <div>
                    <Button size="mini" color='red' content='Stall Taken'/>
                </div>
            );

        }
    }
};


Stall.propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
};
