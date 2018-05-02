import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { OpenParkings, parkingZones } from '../../api/OpenParkings/openparking.js';




/** Initialize the database with a default data document. */
function addData(data) {
  /*console.log(`  Adding: ${data.name} (${data.owner})`);
  OpenParkings.insert(data);*/
}

/** Initialize the collection every time because why not. */

console.log("open parking count: " + OpenParkings.find().count());
console.log("parking zones length: " + parkingZones.length);

if(OpenParkings.find().count() === 0 || OpenParkings.find().count() != parkingZones.length)  {
    OpenParkings.remove({});
    for(i = 0; i < parkingZones.length; i++){
        OpenParkings.insert({ name:   parkingZones[i], openSpots: 5 });
    }
}

if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    //Meteor.settings.defaultData.map(data => addData(data));
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('OpenParking', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return OpenParkings.find();
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('OpenParkingAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return OpenParkings.find();
  }
  return this.ready();
});
