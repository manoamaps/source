import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Button, Grid, Popup } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import { OpenStalls } from '/imports/api/OpenStalls/openstall';

const style={
    
    position: 'relative', 
    color: 'white',
    background: 'red',
    height: 25,
    top: -20, 
    left: -30,    
};

const sty = {
    width:500 + "px",
    marginLeft: -50 + "px"
};

class Stall extends Component {

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onDec = this.onDec.bind(this);
    }

    render() {

            return (
                <div style = {{width:500 + "px", marginLeft: -50 + "px"}}>

                    <Button size="mini" color='green' onClick={this.onChange}>+</Button>
                    <Button size="mini" color='black' content={this.props.numOpen}/>
                    <Button size="mini" color='red' onClick={this.onDec}>-</Button>


                </div>
            );
    }

    onChange(){
        console.log(this.props.numOpen);
        var doc = OpenStalls.findOne({lat: this.props.lat});
        OpenStalls.update({_id: doc._id}, {$set: {numOpen: doc.numOpen + 1}});
    }

    onDec(){
        var doc = OpenStalls.findOne({lat: this.props.lat});
        if(doc.numOpen > 0){
            OpenStalls.update({_id: doc._id}, {$set: {numOpen: doc.numOpen - 1}});
        }

    }
};


Stall.propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    numOpen: PropTypes.number.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe('OpenStalls');
    return {
        stuffs: OpenStalls.find({}).fetch(),
        ready: subscription.ready(),
    };
})(Stall);

