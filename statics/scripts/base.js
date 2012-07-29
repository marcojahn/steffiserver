/**
 * Copyright (C) 2012 Marco Jahn and Remko Plantenga
 */
var SCRUM = {};
    
SCRUM.vote = function (channel, storyid) {
    var points = document.getElementById('points_' + storyid).value
    alert('voted story id {' + storyid + '} with points {' + points + '}');
    
    // TODO READ channel name from somewhere
    var req = snack.request({
      method: 'put',
      now: false, // don't send upon creation
      url: '/channel/' + channel +'/story/' + storyid + '/' + points,
      emulation: false
    }, function (err, res){
      if (err) {
        console.log(err);
      }
      if (res) {
        debugger;
      }
    });

    req.send();
};