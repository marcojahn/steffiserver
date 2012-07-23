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

app.get('/channel', function (req, res) {
    res.render('channels', {
        locals: {
            channels: channels.list()
        }
    });
});

app.post('/channel', function (req, res) {
    channels.create(req.body.name);
    res.redirect('/channel');
});

app.get('/channel/:name?', function (req, res, next) {
    var channelname = req.params.name;
    
    if (channelname) {
        channels.join(channelname, req.session.username);
        res.redirect('/channel/' + channelname + '/story');
    } else {
        res.send('error 1');
    }
});

app.get('/channel/:name?/story', function (req, res, next) {
    var channelname = req.params.name;

    if (channelname) {
        res.render('stories', {
            locals: {
                channel: channels.list()[channelname]
            }
        });
    } else {
        res.send('error 3');
    }
});

app.post('/channel/:name/story', function (req, res, next) {
    var channelname = req.params.name;
    if (channelname) {
        channels.createStory(channelname, req.body.task, req.body.description);
        res.redirect('/channel/' + channelname + '/story');
    } else {
        res.send('error 2');
    }
});

app.listen(8080);