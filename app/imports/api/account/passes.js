import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Passes = new Mongo.Collection('Passes');

/** Create a schema to constrain the structure of documents associated with this collection. */
const PassesSchema = new SimpleSchema({
  name: String,   //This one will just be Meteor.userId()
  passes: [Number],
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Passes.attachSchema(PassesSchema);

/** Make the collection and schema available to other code. */
export {Passes, PassesSchema };
