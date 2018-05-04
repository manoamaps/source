import { Meteor } from 'meteor/meteor';
import { OpenStalls } from '../../api/OpenStalls/openstall.js';

import { log } from 'util';
const coordinates = [
    {
        name: 'spot1',
        lat: 21.29875,
        lon: -157.815591,
        open: true,
    },
    {
        name: 'spot2',
        lat: 21.29878,
        lon: -157.815591,
        open: true,
    },
    
    {
        name: 'spot3',
        lat: 21.29881,
        lon: -157.815591,
        open: true,
    },

    {
        name: 'spot4',
        lat: 21.29884,
        lon: -157.815591,
        open: true,
    },
    {
        name: 'spot5',
        lat: 21.29887,
        lon: -157.815591,
        open: true,
    },
];


// Initialize DB is empty
if (OpenStalls.find().count() === 0) {
    console.log("Initializing default OpenStalls");
    OpenStalls.remove({});
    coordinates.forEach((coord) => {
        OpenStalls.insert({
            lat: coord.lat,
            lon: coord.lon,
            open: coord.open,
        })
    });
}

Meteor.publish('OpenStalls'), function publish() {
    return OpenStalls.find();
}


