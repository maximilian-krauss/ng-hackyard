var express    = require('express'),
    router     = express.Router(),
    path       = require('path'),
    http       = require('http'),
    logger     = require('morgan')
    app        = express();

// Setup routes
router.use('/static', express.static(path.join(__dirname, '../client')));
router.use('/static-vendor', express.static(path.join(__dirname, '../bower_components')));

router.get('/', function(req, res) {
  res.sendfile(path.join(__dirname, '../client', 'index.html'));
});

// Setup express
app.set('port', process.env.port || 3000);
app.use(logger({ format: 'dev' }));
app.use(router);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Hackyard up and running on 127.0.0.1:' + app.get('port'));
});
