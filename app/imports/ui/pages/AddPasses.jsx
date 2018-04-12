import React from 'react';
import { Stuffs, StuffSchema } from '/imports/api/stuff/stuff';
import {PassesLink, PassesLinkSchema} from '/imports/api/passeslink/passeslink';
import {PassesInfo, PassesInfoSchema} from '/imports/api/passesinfo/passesinfo';
import { Grid, Segment, Header } from 'semantic-ui-react';
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

/** Renders the Page for adding a document. */
class AddPasses extends React.Component {

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
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
      Bert.alert({ type: 'success', message: 'Add succeeded' });
      this.formRef.reset();
    }
  }

  /** On submit, insert the data. */
  submit(data) {
    const { name, passes } = data;
    const _name = Meteor.user().username;
    //const passes = [];
    PassesLink.insert({ name: _name, passes}, this.insertCallback);
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Add Passes</Header>
            <AutoForm ref={(ref) => { this.formRef = ref; }} schema={PassesLinkSchema} onSubmit={this.submit}>
              <Segment>
                <ListField name = 'passes'/>

                <SubmitField value='Submit'/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddPasses;



