var os   = require('os');
var exec = require('child_process').exec;

// NOTE: It's dangerous to use 'os-family' here on npm<3.0.0: https://github.com/npm/npm/issues/4134
var platform = os.platform();

var binariesPath = '';

if (platform === 'darwin')
    binariesPath = './bin/mac/*';
else if (platform === 'linux')
    binariesPath = './bin/linux/*';

if (!binariesPath)
    return;

exec('chmod -R +x ' + binariesPath, function (err) {
    if (err)
        process.stdout.write(err.stack + '\n');
    else
        process.stdout.write('File permissions fixed\n');
});


