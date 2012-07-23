var channels = {};

Channel = function (name) {
    this.name = name;
    this.users = [];
};
Channel.prototype.join = function (username) {
    this.users.push(username);
};

//

exports.create = function (name) {
    channels[name] = true;
};

exports.list = function () {
    return channels;
};