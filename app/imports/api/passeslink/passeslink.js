import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const PassesLink = new Mongo.Collection('PassesLink');

/** Create a schema to constrain the structure of documents associated with this collection. */
const PassesLinkSchema = new SimpleSchema({
  name: String,   //This one will just be Meteor.userId()
  passes: [Number],
}, { tracker: Tracker });

/** Attach this schema to the collection. */
PassesLink.attachSchema(PassesLinkSchema);

/** Make the collection and schema available to other code. */
export {PassesLink, PassesLinkSchema };
