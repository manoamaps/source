import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const PassesInfo = new Mongo.Collection('PassesInfo');

/** Create a schema to constrain the structure of documents associated with this collection. */
const PassesInfoSchema = new SimpleSchema({
  name: String,           // Name of the Pass
  parkingTimes: Object, // Times they can park, its ordered like [0] - [1] is the first time and so on
  'parkingTimes.upperCampus': [Number],
  'parkingTimes.structure': [Number],
  'parkingTimes.hawaiian': [Number],
  'parkingTimes.astronomy': [Number],


  id : Number,            // Just an into to keep track of the passes
}, { tracker: Tracker });

/** Attach this schema to the collection. */
PassesInfo.attachSchema(PassesInfoSchema);

/** Make the collection and schema available to other code. */
export { PassesInfo, PassesInfoSchema };
