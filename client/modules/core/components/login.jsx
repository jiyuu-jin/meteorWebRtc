import React from 'react';

const Login = () => ({


    registerClick(){
        FlowRouter.go("/register");
    },

    loginClick(){
        const email = $("#email").val();
        const pw = $("#pw").val();
        Meteor.loginWithPassword(email, pw, function(err) {
            FlowRouter.go("/");
        });
    },
    
    render() {
            return (
                <div id="login">
                    <input id="email" placeholder="Email" className="form-control"/>
                    <br/>
                    <input id="pw" type="password" placeholder="Password" className="form-control"/>
                    <br/>

                    <center>
                        <div className="center-ctn">
                            <button className="btn btn-primary-outline btn-lg" onClick={this.loginClick.bind(this)}>Login</button>
                            <div className="or"></div>
                            <button className="btn btn-primary-outline btn-lg" onClick={this.registerClick.bind(this)}>Register</button>
                        </div>
                    </center>
                </div>
            );
        }
});

export default Login;
