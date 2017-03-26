import {Meteor} from 'meteor/meteor';
import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout';
import Home from './containers/home.js'
import Register from './components/register.jsx'
import Login from './components/login.jsx'

export default function (injectDeps, {FlowRouter}) {
    const MainLayoutCtx = injectDeps(MainLayout);

    FlowRouter.route('/', {
        name: 'home',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Home />)
            });
        }
    });

    FlowRouter.route('/room/:id', {
        name: 'peerId',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Home />)
            });
        }
    });

    FlowRouter.route('/register', {
        name: 'register',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Register />)
            });
        }
    });


    FlowRouter.route('/login', {
        name: 'login',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Login />)
            });
        }
    });
}