import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import {PassesLink, PassesLinkSchema} from '/imports/api/passeslink/passeslink';



/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class PassItem extends React.Component {

    /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);

        this.formRef = null;
    }

    delete(data){

        const { name, id } = data;
        console.log("asdf" + id);
        console.log("asdf" + this.props.stuff._id);
        PassesLink.remove(this.props.stuff._id);
    }

      render() {
        return (
            <Table.Row>
              <Table.Cell>{this.props.stuff.passes.toString()}</Table.Cell>
              <Table.Cell><Button onClick={this.delete} key = {this.props.stuff._id}>Delete</Button></Table.Cell>
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
