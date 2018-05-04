import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

const OpenStalls = new Mongo.Collection('OpenStalls');
const OpenStallsSchema = new SimpleSchema({
    lat: {
        type: Number,
    },
    lng: {
        type: Number,
    },
    open: {
        type: Boolean,
    },
}, {tracker: Tracker });

OpenStalls.attachSchema(OpenStallsSchema);

export {OpenStalls};

