/**
 * Copyright (C) 2012 Marco Jahn and Remko Plantenga
 */
var stories = {};

(function () {
    function StoryIdGenerator() {
        var that = this;
        
        this.nextStoryId = 1;
        
        this.generate = function () {
            return that.nextStoryId++;
        }
    }
    myStoryIdGenerator = new StoryIdGenerator();
}());
    
Story = function (id, task, description) {
    this.id = id;
    this.task = task;
    this.description = description;
    this.votes = {};
}
Story.prototype.vote = function (vote, username) {
    this.votes[username] = vote;
};
Story.prototype.listVotes = function () {
    return this.votes;
}

//

exports.create = function (task, description) {
    var id = myStoryIdGenerator.generate();

    return new Story(id, task, description);
};