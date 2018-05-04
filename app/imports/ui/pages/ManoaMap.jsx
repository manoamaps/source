import React, { Component } from 'react';
import { Grid, Image, Button, Table } from 'semantic-ui-react';
import InputRange from 'react-input-range';
import {PassesLink, PassesLinkSchema} from '/imports/api/passeslink/passeslink';
import {PassesInfo, PassesInfoSchema} from '/imports/api/passesinfo/passesinfo';
import { OpenStalls } from '/imports/api/OpenStalls/openstall';
import PassItem from '/imports/ui/components/PassItem';
import 'react-input-range/lib/css/index.css';
import Map from '../components/Map.jsx';
import PropTypes from "prop-types";
import { withTracker } from 'meteor/react-meteor-data';
<<<<<<< HEAD
import { Meteor } from 'meteor/meteor';
=======
import GoogleMapReact from 'google-map-react';
import Stall from "../components/Stall.jsx";

const ReactComponent = (() => (
    <div style={{
        position: 'relative', color: 'white', background: 'red',
        height: 25, width: 25, top: -20, left: -30,    
    }}>
    </div>
));

>>>>>>> master

class Test extends Component {
    static defaultProps = {
        center: {
            lat: 21.298516,
            lng: -157.817563,
        },
        zoom: 17,
        stalls: OpenStalls.find().fetch(),
    };
    constructor(props) {
        super(props);

        this.updateValue = this.updateValue.bind(this);
        this.checkInside = this.checkInside.bind(this);

        //bind update value
        this.state = {
            thisDisplay: ["hidden", "hidden", "hidden"],
            value: 0,
            currentMap: 1,
            changethis: props.stalls,
        };
    }
    updateValue(i) {
        this.state.value = (i);
        _name = Meteor.user().username;
        //console.log(PassesLink.find({name: _name}).fetch()[0].passes);


        if(PassesLink.find({name: _name}).fetch()[0] != null)
        {
            var passesnames = PassesLink.find({name: _name}).fetch()[0].passes;
            if(passesnames.length > 0){
                var passes = [];  //All of the passes you own
                for(var x = 0; x < passesnames.length; x++){
                    passes.push(PassesInfo.find({name: passesnames[x]}).fetch()[0]);
                }
                console.log(passes);
                if(passes.length > 0){
                    var masterParkingTimes = [];
                    console.log(Object.keys(passes[0].parkingTimes));
                    var s = Object.keys(passes[0].parkingTimes);
                    console.log(s);
                    for(var x = 0; x < s.length; x++){
                        masterParkingTimes.push(passes[0].parkingTimes[s[x]]);
                    }


                    /*for(var x = 0; x < passes[0].parkingTimes.length; x++){
                        masterParkingTimes.push(passes[0].parkingTimes[x]);
                    }*/
                    console.log("master times: " + masterParkingTimes);


                    for(var x = 0; x < passes.length; x++){
                        for(var y = 0; y < passes[x].parkingTimes.length; y++){
                            masterParkingTimes[x] = mergeArrays(masterParkingTimes[x], passes.parkingTimes[y]);
                        }

                    }
                    console.log("master times: " + masterParkingTimes);
                }


                for(var x = 0; x < this.state.thisDisplay.length; x++) {
                    console.log(x + ": " + masterParkingTimes[x]);
                    if (this.checkInside(this.state.value, masterParkingTimes[x])) {
                        this.state.thisDisplay[x] = "visible";
                    } else {
                        this.state.thisDisplay[x] = "hidden";
                    }
                }
            }
        }
        this.setState({ value: i });
    }

    checkInside(time, timeArray){
        var isInside = false;
        for(var i = 0; i < timeArray.length; i+=2){
            if(time >= timeArray[i] && time <= timeArray[i+1]){
                isInside = true;
            }
        }
        return isInside;
    }

    mergeArrays(a, b){
        var newArray = [];
        if(a.length > b.length){
            return b;
        } else {
            return a;
        }
    }

    testprint(){
        console.log(Meteor.user().username);
    }

    render() {
        if (this.props.isLoading) {
            return (
                <div> 
                    <p>Loading!</p>
                </div>
            )
        }
        return (
            <div>
                <Grid container columns={1}>
                    <Grid.Column>
                        <Grid.Row>
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Your Passes</Table.HeaderCell>
                                        <Table.HeaderCell>Delete Passes</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {console.log(this.props.data)}
                                    {this.props.stuffs.map((stuff) => <PassItem key={stuff._id} stuff={stuff} />)}
                                </Table.Body>
                            </Table>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column>
                        <Map time={this.state.value} toDisplay={this.state.thisDisplay}/>
                        <InputRange
                            maxValue = {23} // Since 0 is 12:00AM
                            minValue = {0}
                            value = {this.state.value}
                            onChange = {value => {this.updateValue(value);}}
                        />
                        <Grid.Row>
                            <div style={{height: '85vh', width: '100%'}}>
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: ['AIzaSyCP_BFT1dJV1G3dMcU0KB_wNnixlSBl9E8']}}
                                    defaultCenter={this.props.center}
                                    defaultZoom={this.props.zoom}
                                >
                                    {this.props.data.map((stallx) => (
                                            <Stall
                                                lat={stallx.lat}
                                                lng={stallx.lng}
                                            />
                                    ))}
                                </GoogleMapReact>
                            </div>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            </div>
        )}
}


Test.propTypes = {
    stuffs: PropTypes.array.isRequired,
    other: PropTypes.array.isRequired,
    ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe('PassesLink');
    const subscriptio2n = Meteor.subscribe('PassesInfo');
    const sub = Meteor.subscribe('OpenStalls');
    const data = OpenStalls.find().fetch();
    const isLoading = !sub.ready();
    return {
        stuffs: PassesLink.find({}).fetch(),
        other: PassesInfo.find({}).fetch(),
        ready: subscription.ready(),
        stuffs: PassesLink.find({}).fetch(),
        data, 
        isLoading,
    };
})(Test);


//export default Test;
