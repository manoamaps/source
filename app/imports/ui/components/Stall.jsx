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

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    render() {

            return (
                <div>
                    <Button size="mini" color='green' content={this.props.numOpen} onClick={this.onChange}>

                    </Button>
                </div>
            );
    }


    onChange(){
        console.log(this.props.numOpen);
        this.props.numOpen = this.props.numOpen + 1;
    }
};


Stall.propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    numOpen: PropTypes.number.isRequired,
};
