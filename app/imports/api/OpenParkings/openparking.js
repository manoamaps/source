import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

// Ok 

/** Create a Meteor collection. */
const OpenParkings = new Mongo.Collection('OpenParkings');

/** Create a schema to constrain the structure of documents associated with this collection. */
const OpenParkingSchema = new SimpleSchema({
  name: {
    type: String,
    allowedValues: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4',
        'Zone 5', 'Zone 6', 'Zone 7', 'Zone 8',
        'Zone 9', 'Zone 10', 'Zone 11', 'Zone 12',
        'Zone 13', 'Zone 14', 'Zone 15', 'Zone 16',
        'Zone 17', 'Zone 18', 'Zone 19','Zone 20',
        'Astronomy'],
    defaultValue: 'Zone 20',
  },
  openSpots: {
    type: Number,
  },
}, { tracker: Tracker });

/** Attach this schema to the collection. */
OpenParkings.attachSchema(OpenParkingSchema);

/** Make the collection and schema available to other code. */
export { OpenParkings, OpenParkingSchema };
