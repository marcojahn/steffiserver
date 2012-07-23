steffiserver
============
Server for scrum poker meetings.

Contributing
------------
1. Install node.js
2. Install connect
3. Install express
4. Install coffeekup

For Windows:
Copy `node_modules` folder from nodejs to project folder.


REST interface
--------------

  /                 GET                   enter username
  /login            POST[username]        connect session id with username
  /channel          GET                   list of channels
  /channel          POST[name]            create channel
  /channel/<name>   GET                   join channel
  /logout           GET                   leave all channels
 
  /channel/<name>/story                        GET                 list stories of channel
  /channel/<name>/story                        POST                create story
  /channel/<name>/story/<task>/storypoints     PUT                 poker story
  /channel/<name>/story/<task>                 GET                 read results


Next steps
----------