import { Meteor } from 'meteor/meteor';
import { OpenStalls } from '../../api/OpenStalls/openstall.js';

import { log } from 'util';
const coordinates = [
    {
        name: 'spot1',
        lat: 21.29875,
        lng: -157.815591,
        open: true,
    },
    {
        name: 'spot2',
        lat: 21.29940,
        lng: -157.815691,
        open: true,
    },
    
    {
        name: 'spot3',
        lat: 21.29980,
        lng: -157.815391,
        open: true,
    },
    // {
    //     name: 'spot4',
    //     lat: 21.29990,
    //     lng: -157.814591,
    //     open: true,
    // },
];


// Initialize DB is empty
if (OpenStalls.find().count() === 0 || OpenStalls.find().count() != coordinates.length) {
    console.log("Initializing default OpenStalls");
    OpenStalls.remove({});
    coordinates.forEach((coord) => {
        OpenStalls.insert({
            lat: coord.lat,
            lng: coord.lng,
            open: coord.open,
        })
    });
}

Meteor.publish('OpenStalls', function() {
    return OpenStalls.find()
});


