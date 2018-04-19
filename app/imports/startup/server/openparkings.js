import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { OpenParkings } from '../../api/OpenParkings/openparking.js';

/** Initialize the database with a default data document. */
function addData(data) {
  /*console.log(`  Adding: ${data.name} (${data.owner})`);
  OpenParkings.insert(data);*/
}

/** Initialize the collection if empty. */
if (OpenParkings.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    //Meteor.settings.defaultData.map(data => addData(data));
    OpenParkings.insert({ name: "Zone 1", openSpots: 0 });
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('OpenParking', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return OpenParkings.find({ owner: username });
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
