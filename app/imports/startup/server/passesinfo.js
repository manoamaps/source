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
      PassesInfo.insert({name: "Student", parkingTimes: [4], id: 0});
    //Meteor.settings.defaultData.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('PassesInfo', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return PassesInfo.find({ name: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('PassAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Passesinfo.find();
  }
  return this.ready();
});
