import { Meteor } from 'meteor/meteor';
import { OpenStalls } from '../../api/OpenStalls/openstall.js';

import { log } from 'util';
const coordinates = [
    {
        name: 'spot1',
        lat: 21.29875,
        lng: -157.815591,
        open: true,
        numOpen: 0,
    },
    {
        name: 'spot2',
        lat: 21.29940,
        lng: -157.815691,
        open: true,
        numOpen: 0,
    },
    
    {
        name: 'spot3',
        lat: 21.29980,
        lng: -157.815391,
        open: true,
        numOpen: 0,
    },

    {
        name: 'zone1',
        lat: 21.298308,
        lng: -157.822364,
        open: true,
        numOpen: 0,
    },
    {
        name: 'zone3',
        lat: 21.300454,
        lng: -157.820793,
        open: true,
        numOpen: 0,
    },
    {
        name: 'zone4',
        lat: 21.297609,
        lng: -157.819669,
        open: true,
        numOpen: 0,
    },
    {
        name: 'zone5',
        lat: 21.299351,
        lng: -157.819879,
        open: true,
        numOpen: 0,
    },
    {
        name: 'zone6',
        lat: 21.301438,
        lng: -157.817773,
        open: true,
        numOpen: 0,
    },
    {
        name: 'zone7',
        lat: 21.303875,
        lng: -157.813437,
        open: true,
        numOpen: 0,
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
            numOpen: coord.numOpen,
        })
    });
}

Meteor.publish('OpenStalls', function() {
    return OpenStalls.find()
});


