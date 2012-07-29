/**
 * Copyright (C) 2012 Marco Jahn and Remko Plantenga
 */
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
    this.stories.push(stories.create(task, description));
};
Channel.prototype.vote = function (id, points, username) {
    var i, l, 
        voted = false;
    
    for (i = 0, l = this.stories.length; i < l; i++) {
        if (this.stories[i].id == id) {
            this.stories[i].vote(points, username);
            voted = true;
            break;
        }
    }
    
    return voted;
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

exports.vote = function (name, id, points, username) {
    console.log(channels[name]);
    return channels[name].vote(id, points, username);
}