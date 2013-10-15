consulate-github
================

GitHub exchange plugin for [consulate](https://github.com/consulate/consulate).

`consulate-github` allows users to login/register with GitHub and exchange
a GitHub access_token for a consulate authorization code.

Usage
-----

Just register `consulate-github` as a plugin with your [consulate](https://github.com/consulate/consulate) server:

```js
var consulate = require('consulate');
var github = require('consulate-github');

var app = consulate();

app.plugin(github({
  clientID: 'MY_GITHUB_CLIENT_ID',
  clientSecret: 'MY_GITHUB_CLIENT_SECRET',
  callbackURL: 'MY_GITHUB_CALLBACK_URL'
}, function(accessToken, refreshToken, profile, done) {

  // lookup user by github id here. if they don't exist create them
  ...

  // Return the user for your consulate system
  done(null, myUser);
}));
```

Tests
-----

```sh
$ npm test
```
