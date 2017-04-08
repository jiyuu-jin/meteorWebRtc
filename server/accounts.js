Accounts.onCreateUser(function(options, user) {
    user.firstName = options.firstName;
    user.lastName = options.lastName;
    user.username = options.username;
    return user;
});