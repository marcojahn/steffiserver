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
    var id = new Date().getTime();
    id = 1; // for developing
    var story = stories.create(id, task, description);
    this.stories.push(story);
};
Channel.prototype.vote = function (id, points, username) {
    var voted = false;
    console.log(this.stories);
    
    for (var i = 0, iLen = this.stories.length; i < iLen; i++) {
        if (this.stories[i].id === id) {
            this.stories[i].vote(username, vote);
            voted = true;
            // story found, break loop
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
    console.log("channel object {'+name+'}");
    console.log(channels[name]);
    return channels[name].vote(id, points, username);
}