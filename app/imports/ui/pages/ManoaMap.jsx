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

/*
    map1: Normal Student Parking
    map2: Everywhere Parking
    map3: Night Pass
*/
class Test extends Component {
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
                            <Map time={this.state.value}/>
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
