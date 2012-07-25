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
        }
    }
}).export(module);