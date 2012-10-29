var vows = require('vows'),
    assert = require('assert'),
    stories = require('../stories.js');

vows.describe('Stories').addBatch({
    'A story': {
        topic: stories.create('simpleTask', 'simpleDescription'),
        
        'has a number as id': function (story) {
            assert.isNumber(story.id);
        },
        
        'has the given task and description': function (story) {
            assert.equal(story.task, 'simpleTask');
            assert.equal(story.description, 'simpleDescription');
        }
    }
}).export(module);