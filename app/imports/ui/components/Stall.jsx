import React, { Component } from 'react';
import PropTypes from "prop-types";

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
        return (
            <Stall lat={this.props.lat} lng={this.props.lng}/>
        );
    }
};


Stall.propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    ready: PropTypes.bool.isRequired,
};
