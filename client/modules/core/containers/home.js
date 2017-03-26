import React from 'react';
import {Meteor} from'meteor/meteor';
import Home from '../components/home';
import { composeWithTracker } from 'mantra-core';

const composer = ( props, onData ) => {
    const subscription = Meteor.subscribe('currentUser');
    if ( subscription.ready()) {
        const currentUser = Meteor.users.findOne();
        onData( null, { currentUser} )
    }
};

export default composeWithTracker( composer, Home )( Home );

