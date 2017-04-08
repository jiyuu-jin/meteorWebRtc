import {Mongo} from 'meteor/mongo';


export const Rooms = new Mongo.Collection('rooms');

export const Notifications = new Mongo.Collection('notifications');