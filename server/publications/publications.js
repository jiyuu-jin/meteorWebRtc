import {Meteor} from 'meteor/meteor';

Meteor.publish('currentUser', function(){
    var currentId = Meteor._id();
    return Meteor.users.find({_id: currentId},{_id: 1});
});