const compress = require('koa-compress');
const compose = require('koa-compose');

/* Compression middleware for html */
const compression = compress({
    filter(content_type) {
        return /text/i.test(content_type)
    },
    threshold: 1024,
    flush: require('zlib').constants.Z_SYNC_FLUSH
});

module.exports = compose([
    compression
]);