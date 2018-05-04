import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader, Grid } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/stuff';
import { OpenParkings, OpenParkingSchema } from '/imports/api/OpenParkings/openparking';
import StuffItem from '/imports/ui/components/StuffItem';
import ParkingLotInfo from '/imports/ui/components/ParkingLotInfo';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import NumField from 'uniforms-semantic/NumField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Bert } from 'meteor/themeteorchef:bert';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListOpenParking extends React.Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.insertCallback = this.insertCallback.bind(this);
        this.formRef = null;
    }

    /** Notify the user of the results of the submit. If successful, clear the form. */
    insertCallback(error) {
        if (error) {
            Bert.alert({ type: 'danger', message: `Add failed: ${error.message}` });
        } else {
            Bert.alert({ type: 'success', message: 'Add succeeded' });
            this.formRef.reset();
        }
    }

    /** On submit, insert the data. */
    submit(data) {
        const { name, openSpots } = data;
        const owner = Meteor.user().username;
        //Stuffs.insert({ name, quantity, condition, owner }, this.insertCallback);
    }


  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">Open Spots</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Open Spots</Table.HeaderCell>
                <Table.HeaderCell>Take Spot</Table.HeaderCell>
                <Table.HeaderCell>Leave Spot</Table.HeaderCell>

              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.stuffs.map((stuff) => <ParkingLotInfo key={stuff._id} stuff={stuff} />)}
            </Table.Body>
          </Table>



        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListOpenParking.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('OpenParking');
  return {
    stuffs: OpenParkings.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListOpenParking);
