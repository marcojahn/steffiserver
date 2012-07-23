var channels = {};

exports.create = function (name) {
    channels[name] = true;
};

exports.list = function () {
    return channels;
}