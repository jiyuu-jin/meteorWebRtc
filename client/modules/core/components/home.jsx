import React from 'react';
import SimpleWebRTC from '../../../configs/simplewebrtc.bundle';
import { Random } from 'meteor/random';


const Home = () =>({


    callUser(){
        Meteor.call('createRoom');
        $('#createRoom').hide();
    },


    render(){
        return(
            <div>
                <div className="app-title">
                    <center>WebRTC Test</center>
                    <center><h2>{ FlowRouter.getParam('id') || "Call a user!"}</h2></center>
                </div>
                <br/>
                <center>
                    <form id="createRoom">
                        <input id="sessionInput"/>
                        <button type="submit">Call</button>
                    </form>
                </center>
                <br/>
                <center><video id="localVideo" className="video"/></center>

            <center>
                <div id="remotes">
                </div>
            </center>
            </div>
        )
    },

    componentDidMount(){



        // create our webrtc connection
        var webrtc = new SimpleWebRTC({
            // the id/element dom element that will hold "our" video
            localVideoEl: 'localVideo',
            // the id/element dom element that will hold remote videos
            remoteVideosEl: 'remotes',
            // immediately ask for camera access
            autoRequestMedia: true,
            debug: false,
            detectSpeakingEvents: true
        });

        // when it's ready, join if we got a room from the URL
        webrtc.on('readyToCall', function () {
            // you can name it anything
            if (room) webrtc.joinRoom(room);
        });

        webrtc.on('videoAdded', function (video, peer) {
            console.log('video added', peer);
        });

            $('form').submit(function () {
                var val = $('#sessionInput').val().toLowerCase().replace(/\s/g, '-').replace(/[^A-Za-z0-9_\-]/g, '');
                webrtc.createRoom(val, function (err, name) {
                    console.log(' create room cb', arguments);
                    var newUrl = '/room/' + name;
                    FlowRouter.go(newUrl);
                });
                return false;
            });

    }
});

export default Home;