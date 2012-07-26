var stories = {};

Story = function (id, task, description) {
    this.id = id;
    this.task = task;
    this.description = description;
    this.votes = {};
}
Story.prototype.vote = function (username, vote) {
    this.votes[username] = vote;
};

//

exports.create = function (id, task, description) {
    return new Story(id, task, description);
};