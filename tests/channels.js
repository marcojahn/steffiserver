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
            
            'allows to vote if joined': function (storyId) {
                assert.isTrue(channels.vote('test', storyId, 4, 'testuser'));
            },
			'denies vote if not joined': function (storyId) {
				assert.isFalse(channels.vote('test', storyId, 8, 'testuser2'));
				channels.join('test', 'testuser2');
                assert.isTrue(channels.vote('test', storyId, 8, 'testuser2'));
			},
            'can list all votes': function (storyId) {
                var votes = channels.listVotes('test', storyId);
                assert.equal(votes.testuser, 4);
                assert.equal(votes.testuser2, 8);
            },
			'only list votes if all users have voted': function (storyId) {
				var votes;
				channels.join('test', 'testuser3');
				votes = channels.listVotes('test', storyId);
				assert.isUndefined(votes);
				channels.vote('test', storyId, 6, 'testuser3')
				votes = channels.listVotes('test', storyId);				
			}
        }
    }
}).export(module);