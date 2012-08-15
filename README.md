steffiserver
============
Server for scrum poker meetings.

Contributing
------------
1. Install node.js (0.8.1)
2. Install express (2.5.11)
3. Install connect (1.9.2)
4. Install coffeekup (0.3.1)
5. Install socket.io (0.9.8)

For running the tests:

1. Install vows (0.6.3)

To install a specific version use npm install <npm-module>@<version> e.g.: 

	npm install express@2.5.11


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