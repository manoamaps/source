import React, { Component } from 'react';
import { Grid, Image, Button, Table } from 'semantic-ui-react';
import InputRange from 'react-input-range';
import {PassesLink, PassesLinkSchema} from '/imports/api/passeslink/passeslink';
import {PassesInfo, PassesInfoSchema} from '/imports/api/passesinfo/passesinfo';
import PassItem from '/imports/ui/components/PassItem';
import 'react-input-range/lib/css/index.css';
import Map from '../components/Map.jsx';
import PropTypes from "prop-types";
import { withTracker } from 'meteor/react-meteor-data';
import GoogleMapReact from 'google-map-react';

21.29875, -157.815591
const openStalls = [
    {
        lat: 21.29885,
        lng: -157.815591,
        open: true,
    },
    {
        lat: 21.29878,
        lng: -157.815591,
        open: true,
    },
    {
        lat: 21.29881,
        lng: -157.815591,
        open: true,
    },
];

const ReactComponent = (() => (
    <div style={{
        position: 'relative', color: 'white', background: 'red',
        height: 25, width: 25, top: -20, left: -30,    
    }}>
    </div>
));


class Test extends Component {
    static defaultProps = {
        center: {
            lat: 21.298516,
            lng: -157.817563,
        },
        zoom: 17,
    };
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            currentMap: 1,
        };

        console.log(PassesLink.find());
    }
    updateValue(i) {
        this.setState({ value: i });
    }

    render() {
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
                                    {this.props.stuffs.map((stuff) => <PassItem key={stuff._id} stuff={stuff} />)}
                                </Table.Body>
                            </Table>
                        </Grid.Row>
                        <Grid.Row>
                            <div style={{height: '85vh', width: '100%'}}>
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: ['AIzaSyCP_BFT1dJV1G3dMcU0KB_wNnixlSBl9E8']}}
                                    defaultCenter={this.props.center}
                                    defaultZoom={this.props.zoom}
                                >
                                    { <ReactComponent
                                        lat={21.29875}
                                        lng={-157.815591}
                                    /> }
                                    {openStalls.map((stall) => (
                                            <ReactComponent
                                                lat={stall.lat}
                                                lng={stall.lng}
                                            />
                                    ))}
                                </GoogleMapReact>
                            </div>
                            <InputRange
                                maxValue = {23} // Since 0 is 12:00AM
                                minValue = {0}
                                value = {this.state.value}
                                onChange = {value => this.setState({ value })}
                            />
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

Test.propTypes = {
    stuffs: PropTypes.array.isRequired,
    ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe('PassesLink');
    return {
        stuffs: PassesLink.find({}).fetch(),
        ready: subscription.ready(),
    };
})(Test);

//export default Test;
