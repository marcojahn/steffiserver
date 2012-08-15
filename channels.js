/**
 * Copyright (C) 2012 Marco Jahn and Remko Plantenga
 */
var stories = require('./stories.js'),
    channels = {};

Channel = function (name) {
    this.name = name;
    this.users = {};
    this.stories = [];
};
Channel.prototype.join = function (username) {
    this.users[username] = username;
};
Channel.prototype.getName = function () {
    return this.name;
};
Channel.prototype.createStory = function (task, description) {
    var story = stories.create(task, description);
    this.stories.push(story);
    return story;
};
Channel.prototype.getStoryById = function (id) {
    var i;
    
    for (i = this.stories.length - 1; i > -1; i--) {
        if (this.stories[i].id == id) {
            return this.stories[i];
        }
    }
}
Channel.prototype.vote = function (id, points, username) {
    var story = this.users[username] ? this.getStoryById(id) : false;
    
    if (story) {
        story.vote(points, username);
    }
    return !!story;
};
Channel.prototype.listVotes = function (id) {
    var votes, user,
		story = this.getStoryById(id);

    if (story) {
        votes = story.listVotes();
		for (user in this.users) {
			if (!votes[user]) {
				return;
			}
		}
		return votes;
    }
}

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
    return channels[name].createStory(task, description);
};

exports.listStories = function (name) {
    return channels[name].stories;
};

exports.vote = function (name, id, points, username) {
    return channels[name].vote(id, points, username);
}

exports.listVotes = function (name, id) {
    return channels[name].listVotes(id);
}