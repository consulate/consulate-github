/**
 * Module dependencies
 */
var debug = require('simple-debug')('consulate-github');
var GithubStrategy = require('passport-github').Strategy;

/**
 * GitHub Exchange Plugin
 */

module.exports = function(options, getUserByGithubOrCreate) {
  if (!getUserByGithubOrCreate) throw new Error('`getUserByGithubOrCreate` callback required for `consulate-github`');

  var path = options.path || '/login/github';
  delete options.path;

  var name = options.name || 'github';

  if (!options.callbackURL) options.callbackURL = path;

  var authOpts = options.authOpts || {};
  delete options.authOpts;

  return function(app) {
    debug('registering github passport strategy with options', options);
    var strategy = new GithubStrategy(options, getUserByGithubOrCreate);
    strategy.name = name;
    app.register(strategy);
    app.get(path, app.authenticate(name, authOpts), app.viewCallback('login'));
  };
};
