var path = require('path')
var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 8000));

app.use(express.static(path.join(__dirname, '/dist')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.listen(app.get('port'), function (err) {
  if (err) {
    console.log(err)
  }
  console.info('==> Listening on port %s.', app.get('port'));
})
