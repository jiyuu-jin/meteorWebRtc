import {Meteor} from 'meteor/meteor';


import {Notifications} from "/lib/collections.js"

Meteor.publish('currentUser', function(){
    var currentId = this._id;
    return Meteor.users.find({_id: currentId},{_id: 1});
});

Meteor.publish('notifications', function(){
    return Notifications.find();
});