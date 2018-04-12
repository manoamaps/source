import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import {PassesInfo} from '../passeslink/passeslink'


/** Create a Meteor collection. */
const PassesLink = new Mongo.Collection('PassesLink');

/** This schema holds the link between the username and what passes they own */
const PassesLinkSchema = new SimpleSchema({
  name: String,   //This one will just be Meteor.userId()
  passes:{
      type: Array,
  },
  'passes.$':{
      type: String,
      allowedValues: ['Evening', 'Student', 'Hawaiian', 'Astronomy'],
  }
}, { tracker: Tracker });

/** Attach this schema to the collection. */
PassesLink.attachSchema(PassesLinkSchema);

/** Make the collection and schema available to other code. */
export {PassesLink, PassesLinkSchema };
