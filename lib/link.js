var exec = require('child_process').exec
packageManager = 'npm'
exec(`${packageManager} link sass-cli`, function(err) {})