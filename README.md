steffiserver
============
Server for scrum poker meetings.
[![Build Status](https://secure.travis-ci.org/marcojahn/steffiserver.png)](https://secure.travis-ci.org/marcojahn/steffiserver)

Requirements
------------
1. node.js (0.8.1)
2. express (3.x)
3. connect (1.9.2)
4. coffeecup (0.3.x)
5. socket.io (0.9.8)

For running the tests:

1. vows (0.6.3)

Contributing
------------
to install, use:

    npm install
    
to run tests, use:

    npm test
    


REST interface
--------------

    /                 GET                   enter username
    /login            POST[username]        connect session id with username
    /channel          GET                   list of channels
    /channel          POST[name]            create channel
    /channel/<name>   GET                   join channel
    /logout           GET                   leave all channels
 
    /channel/<name>/story                       GET                       list stories of channel
    /channel/<name>/story                       POST[task,description]    create story
    /channel/<name>/story/<id>                  PUT[points]               poker story
    /channel/<name>/story/<id>                  GET                       read results


Next steps
----------
1. channel creator = story creator
2. start voting
3. vote!
4. collect results and display
5. revote
6. close and remove story
7. close and remove channel

- auto close off channels?
- auto logout session?
- show a list of users in channel?