import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class PassItem extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.stuff.passes.toString()}</Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
PassItem.propTypes = {
  stuff: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(PassItem);
