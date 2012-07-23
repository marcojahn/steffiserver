var stories = {};

Story = function (task, description) {
    this.task = task;
    this.description = description;
    this.votes = {};
}
Story.prototype.vote = function (username, vote) {
    this.votes[username] = vote;
};

//

exports.create = function (task, description) {
    return new Story(task, description);
};