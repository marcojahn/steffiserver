var ck = require('coffeekup'),
    express = require('express'),
    channels = require('./channels'),
    app = express.createServer();

app.set('view engine', 'coffee');
app.register('.coffee', ck.adapters.express);
// TODO:https://groups.google.com/group/express-js/browse_thread/thread/e94bcd01cd454c7d/f4ff4f37a111a1ea
app.set("view options", { layout: false });
    
app.use(express.logger());
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({secret: 'steffi'}));
    
app.get('/', function (req, res) {
    res.render('index');
});

app.post('/login', function (req, res) {
    req.session.username = req.body.username;
    res.redirect('/channel');
});

app.get('/channel/:name?', function (req, res) {
    console.log(req.params.name);
    if (req.params.name) {
        channels.join(req.params.name, req.session.username);
        
        res.render('story');
    } else {  
        res.render('channels', {
            locals: {
                channels: channels.list()
            }
        });
    }
});

app.post('/channel', function (req, res) {
    channels.create(req.body.name);
    res.redirect('/channel');
});

/**
 * /          GET                   enter username
 * /login     POST[username]        connect session id with username
 * /channel   GET                   list of channels
 * /channel   POST[name]            create channel
 * /channel   GET[name]             join channel
 * /logout    GET                   leave all channels
 *
 * /channel/n/story                   POST                create story
 * /channel/n/story/m/storypoints     PUT                 poker story
 * /channel/n/story/m                 GET                 read results
 */

app.listen(8080);