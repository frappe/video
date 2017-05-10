var spawn = require('child_process').spawn;

var FLAGS = [
    'debug',
    '--debug',
    '--debug-brk',
    '--inspect',
    '--expose-gc',
    '--gc-global',
    '--es_staging',
    '--no-deprecation',
    '--prof',
    '--log-timer-events',
    '--throw-deprecation',
    '--trace-deprecation',
    '--use_strict',
    '--allow-natives-syntax',
    '--perf-basic-prof'
];

var FLAG_PREFIXES = [
    '--harmony',
    '--trace',
    '--icu-data-dir',
    '--max-old-space-size',
    '--preserve-symlinks'
];

module.exports = function (cliPath) {
    var args = [cliPath];

    process.argv.slice(2).forEach(function (arg) {
        var flag = arg.split('=')[0];

        if (FLAGS.indexOf(flag) > -1) {
            args.unshift(arg);
            return;
        }

        for (var i = 0; i < FLAG_PREFIXES.length; i++) {
            if (arg.indexOf(FLAG_PREFIXES[i]) === 0) {
                args.unshift(arg);
                return;
            }
        }

        args.push(arg);
    });

    var cliProc = spawn(process.execPath, args, { stdio: 'inherit' });

    cliProc.on('exit', function (code, signal) {
        process.on('exit', function () {
            if (signal)
                process.kill(process.pid, signal);

            else
                process.exit(code);
        });
    });

    process.on('SIGINT', function () {
        cliProc.kill('SIGINT');
        cliProc.kill('SIGTERM');
    });
};
