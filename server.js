const path = require('path');
const http = require('http');
const serve = require('koa-static');
const Koa = require('koa');

const middlewares = require('./middlewares');

/* Init Koa instance */
const app = new Koa();

/* Serve assets from folder */
app.use(serve(path.join(__dirname, '/public/volkswagen'), {
    setHeaders(res) {
        res.setHeader('cache-control', 'public, max-age=31536000');
    }
}));

/* Register all middleware */
app.use(middlewares);

/* Start a http2 server with given certificate */
const httpServer = http.createServer(app.callback());

/* Use port given from environment variable or the default */
const httpPort = process.env.HTTP_PORT || 3000;

/* Start server with given port */
httpServer.listen(httpPort, () => console.log(`HTTP started on port ${httpPort}`));