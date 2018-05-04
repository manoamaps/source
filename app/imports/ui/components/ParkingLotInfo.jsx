import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { OpenParkings, OpenParkingSchema } from '/imports/api/OpenParkings/openparking';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class ParkingLotInfo extends React.Component {

    constructor(props) {
        super(props);
        this.takespot = this.takespot.bind(this);
        this.leavespot = this.leavespot.bind(this);

        this.formRef = null;
    }

    takespot(data){
        //const {name} = data;
        //OpenParkings.remove(this.props.stuff.name);
        //const hi = OpenParkings.find({name: this.props.stuff.name}).fetch();
        var doc = OpenParkings.findOne({name: this.props.stuff.name});
        if(doc.openSpots > 0) {
            OpenParkings.update({_id: doc._id}, {$set: {openSpots: (doc.openSpots - 1)}});
        }
        //console.log(hi);
        //console.log(OpenParkings.find(this.props.stuff._id));

    }

    leavespot(data){
        //const {name} = data;
        //OpenParkings.remove(this.props.stuff.name);
        //const hi = OpenParkings.find({name: this.props.stuff.name}).fetch();
        var doc = OpenParkings.findOne({name: this.props.stuff.name});
        if(doc.openSpots < 20){
            OpenParkings.update({_id: doc._id}, {$set: {openSpots: (doc.openSpots + 1)}});
        }

        //console.log(hi);
        //console.log(OpenParkings.find(this.props.stuff._id));

    }

  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.stuff.name}</Table.Cell>
          <Table.Cell>{this.props.stuff.openSpots}</Table.Cell>
            <Table.Cell><Button name = "Take" key = {this.props.stuff._id} onClick = {this.takespot}>Take</Button> </Table.Cell>
            <Table.Cell><Button name = "Leave" key = {this.props.stuff._id} onClick = {this.leavespot}>Leave</Button> </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
ParkingLotInfo.propTypes = {
  stuff: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ParkingLotInfo);
