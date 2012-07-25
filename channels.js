var stories = require('./stories.js'),
    channels = {};

Channel = function (name) {
    this.name = name;
    this.users = [];
    this.stories = [];
};
Channel.prototype.join = function (username) {
    this.users.push(username);
};
Channel.prototype.getName = function () {
    return this.name;
};
Channel.prototype.createStory = function (task, description) {
    var story = stories.create(task, description);
    this.stories.push(story);
};

//

exports.create = function (name) {
    channels[name] = new Channel(name);
};

exports.list = function () {
    return channels;
};

exports.join = function (name, username) {
    channels[name].join(username);
};

exports.createStory = function (name, task, description) {
    channels[name].createStory(task, description);
};

exports.listStories = function (name) {
    return channels[name].stories;
};