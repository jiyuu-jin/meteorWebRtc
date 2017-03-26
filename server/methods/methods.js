/**
 * Created by Zach on 2/27/17.
 */


import {Rooms} from '/lib/collections.js';


Meteor.methods({

    'createRoom'(sender, receiver){
            Rooms.insert({
                id: Random.id(),
                users: [sender, receiver]
            })
    },

});


