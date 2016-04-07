var through = require('through2'),
    styleExtract = require('style-extract');

module.exports = function(options) {
    return through.obj(function(file, encoding, callback) {

        file.contents = new Buffer(styleExtract(file.contents.toString(), options));
        
        callback(null, file);
    });
};