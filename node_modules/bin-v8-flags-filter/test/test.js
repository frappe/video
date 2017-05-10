var execFile = require('child_process').execFile;
var assert   = require('assert');
var path     = require('path');

it('Should filter v8 flags', function (done) {
    var args = [
        path.join(__dirname, './cli.js'),
        '--hey',
        '--allow-natives-syntax',
        '-t=yo',
        '--trace-gc'
    ];

    execFile(process.execPath, args, function (err, stdout) {
        assert.ok(stdout.indexOf('$$$ARGS:["--hey","-t=yo"]$$$') > -1);
        assert.ok(stdout.indexOf('$$$ISSMI:true$$$') > -1);

        done();
    });
});
