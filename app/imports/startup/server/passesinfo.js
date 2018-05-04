import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { PassesInfo } from '../../api/passesinfo/passesinfo.js';

/** Initialize the database with a default data document. */
function addData(data) {
  //console.log(`  Adding: ${data.name} (${data.owner})`);
  PassesInfo.insert(data);
}

/** Initialize the collection if empty.*/
if (PassesInfo.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    PassesInfo.insert({name: "Student", parkingTimes: {upperCampus: [0, 6, 16, 24], structure: [0, 24], hawaiian: [-1, -1], astronomy: [0, 6, 16, 24]}, id: 0});
    PassesInfo.insert({name: "Evening", parkingTimes: {upperCampus: [0, 6, 16, 24], structure: [13.5, 24], hawaiian: [-1, -1], astronomy: [0, 6, 16, 24]}, id: 1});
    PassesInfo.insert({name: "Hawaiian", parkingTimes: {upperCampus: [0, 6, 16, 24], structure: [13.5, 24], hawaiian: [0, 24], astronomy: [0, 6, 16, 24]}, id: 2});
    PassesInfo.insert({name: "Astronomy", parkingTimes: {upperCampus: [0, 6, 16, 24], structure: [13.5, 24], hawaiian: [-1, -1], astronomy: [0, 24]}, id: 3});
    //Meteor.settings.defaultData.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('PassesInfo', function publish() {
  /*if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return PassesInfo.find({ name: username });
  }*/
    if (this.userId) {
        return PassesInfo.find({});
    }

  return this.ready();
});

 //This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('PassAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Passesinfo.find();
  }
  return this.ready();
});
