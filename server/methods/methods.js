/**
 * Created by Zach on 2/27/17.
 */


import {Rooms, Notifications} from '/lib/collections.js';


Meteor.methods({

    'createRoom'(receiver, roomId){
        console.log(receiver);

        var receiverUserId = Meteor.users.findOne({username: receiver})._id;
        var senderUserName = Meteor.users.findOne({_id: Meteor.userId()}).username;

        console.log(receiverUserId);
            Rooms.insert({
                roomId: roomId,
                users: [Meteor.userId(), receiverUserId]
            });
        Meteor.call("create.notification", receiverUserId, senderUserName, roomId)
    },

    'create.notification'(receiverId, senderUserName, roomId){
        Notifications.insert({
            userId: receiverId,
            text: senderUserName + " is calling you.",
            type: "request",
            token: roomId
        });
    },

    'remove.notification'(id){
        Notifications.remove({_id: id});
    }

});


