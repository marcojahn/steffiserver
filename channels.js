var channels = {};

Channel = function (name) {
    this.name = name;
    this.users = [];
};
Channel.prototype.join = function (username) {
    this.users.push(username);
};
Channel.prototype.getName = function () {
    return this.name;
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