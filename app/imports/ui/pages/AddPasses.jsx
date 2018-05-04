import React from 'react';
import { Stuffs, StuffSchema } from '/imports/api/stuff/stuff';
import {PassesLink, PassesLinkSchema} from '/imports/api/passeslink/passeslink';
import {PassesInfo, PassesInfoSchema} from '/imports/api/passesinfo/passesinfo';
import PassItem from '/imports/ui/components/PassItem';
import { Grid, Segment, Header, Table } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import ListField from 'uniforms-semantic/ListField';
import ListItemField from 'uniforms-semantic/ListItemField';
import NestField from 'uniforms-semantic/NestField';
import NumField from 'uniforms-semantic/NumField';
import SelectField from 'uniforms-semantic/SelectField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';
import PropTypes from "prop-types";
import { withTracker } from 'meteor/react-meteor-data';

/** Renders the Page for adding a document. */
class AddPasses extends React.Component {

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.checkDups = this.checkDups.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
    const name = Meteor.userId();

    const passes = [];

    //PassesLink.insert({ name, passes }, this.insertCallback);
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Add failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'The task has been completed' });
      this.formRef.reset();
    }
  }

    checkDups(a){
        var uniq = [];
        for(var i = 0; i < a.length; i++){
            if(!(uniq.includes(a[i]))){
                uniq.push(a[i]);
            }
        }
        return uniq;
    }

  /** On submit, insert the data. */
  submit(data) {
    var { name, passes } = data;
    const _name = Meteor.user().username;
    //const passes = [];

      //var passesnames = PassesLink.find({name: _name}).fetch()[0].passes;
      if(PassesLink.find({name: _name}).fetch()[0] == null)
      {
          PassesLink.insert({ name: _name, passes }, this.insertCallback);
      }  else {
          //PassesLink.update({name: _name}, {$set: {passes: passes}});
          var doc = PassesLink.findOne({name: _name});

          passes = this.checkDups(passes);

          for(var i = 0; i < passes.length; i++){
              if(doc.passes.includes(passes[i])){
                  passes.splice(i, i+1);
                  i--;

              }
          }

          var newPasses = doc.passes.concat(_.uniq(passes));

          PassesLink.update({_id: doc._id}, {$set: {passes: newPasses}});
      }


  }



  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
        <Grid container centered>
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
              <Grid.Column>
                <Header as="h2" textAlign="center">Add Passes</Header>
                <AutoForm ref={(ref) => { this.formRef = ref; }} schema={PassesLinkSchema} onSubmit={this.submit}>
                  <Segment>
                    <HiddenField name = 'name' value = 'default'/>
                    <ListField name = 'passes'/>
                    <SubmitField value='Submit'/>
                  </Segment>
                </AutoForm>
              </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

AddPasses.propTypes = {
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
})(AddPasses);
