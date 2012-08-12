var vows = require('vows'),
    assert = require('assert'),
    channels = require('../channels.js');

vows.describe('Channels').addBatch({
    'Create a new channel': {
        topic: function () { 
            channels.create('test');
            return channels.list();
        },
        
        'is created with the given name': function (channellist) {
            assert.isNotNull(channellist);
            assert.isNotNull(channellist['test']);
            assert.equal(channellist['test'].getName(), 'test');
        },
        
        'can be joined': function () {
            channels.join('test', 'testuser');
        },
        
        'cannot be joined if not created before': function () {
            assert.throws(function () { channels.join('notcreated', 'testuser'); }, TypeError);
        },
        
        'and work with a story': {
            topic: function () {
                var story = channels.createStory('test', 'storyTask', 'storyDescription');
                return story.id;
            },
            
            'allows to vote': function (storyId) {
                assert.isTrue(channels.vote('test', storyId, 4, 'testuser'));
                assert.isTrue(channels.vote('test', storyId, 8, 'testuser2'));
                assert.isTrue(channels.vote('test', storyId, 6, 'testuser3'));
            },
            'can list all votes': function (storyId) {
                var votes = channels.listVotes('test', storyId);
                assert.equal(4, votes.testuser);
                assert.equal(8, votes.testuser2);
                assert.equal(6, votes.testuser3);
            }
        }
    }
}).export(module);