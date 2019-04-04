module.exports = {
    runtimeCaching: [{
        urlPattern: /countries\/.+/,
        handler: 'cacheFirst'
    }],
    swFile: 'public/service-worker.js',
    verbose: true
};