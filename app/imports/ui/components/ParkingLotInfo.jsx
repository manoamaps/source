import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class ParkingLotInfo extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.stuff.name}</Table.Cell>
          <Table.Cell>{this.props.stuff.openSpots}</Table.Cell>
            <Table.Cell><Button name = "Take" >Take</Button> </Table.Cell>
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