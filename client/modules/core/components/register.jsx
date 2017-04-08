import React from 'react';

const Register = () => ({
    
    
    registerSubmit(){
        const email =  $("#email").val();
        const pw1 = $("#pw1").val();
        const pw2 = $("#pw2").val();
        const userName = $("#username").val();
        const user = {email:email, username:userName, password:pw1};
        if(pw1 == pw2){
            Accounts.createUser(user,function(err){
                if(!err){
                    FlowRouter.go("/");
                }else{
                    console.log(err)
                }
            });
        }else{
            alert("Your passwords do not match!");
        }
    },

    render() {
        return (
            <div id="login" className="panel">
                    <div className="form-group">
                        <label for="formGroupExampleInput">Email</label>
                        <input type="text" className="form-control" id="email"/>
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Username</label>
                        <input type="text" className="form-control" id="username"/>
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Password</label>
                        <input type="password" className="form-control" id="pw1"/>
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Confirm Password</label>
                        <input type="password" className="form-control" id="pw2"/>
                    </div>
                    <br/>
                    <div className="btn btn-lg btn-primary-outline btn-center" onClick={this.registerSubmit.bind(this)}>Register</div>
            </div>
        );
    }
});

export default Register;

