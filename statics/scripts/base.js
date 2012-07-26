// introducing namespace
var SCRUM = {};
    
SCRUM.vote = function (id) {
    var points = document.getElementById('points_' + id).value
    alert('voted story id {' + id + '} with points {' + points + '}');
    
    // TODO READ channel name from somewhere
    var req = snack.request({
      method: 'put',
      now: false, // don't send upon creation
      url: '/channel/test/story/' + id + '/' + points
    }, function (err, res){
      if (err){
        console.log(err);
        return
      }

    })



      // send the request
      req.send();
    console.log('request sent');

};