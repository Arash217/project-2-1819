require('dotenv').config();
const path = require('path');
const http2 = require('http2');
const http = require('http');
const serve = require('koa-static');
const Koa = require('koa');

const middlewares = require('./middlewares');
// const router = require('./routes');
const certificate = require('./config/certificate');

/* Init Koa instance */
const app = new Koa();

/* Serve assets from folder */
app.use(serve(path.join(__dirname, '/public'), {
    setHeaders(res) {
        res.setHeader('cache-control', 'public, max-age=31536000');
    }
}));

/* Register all middleware */
app.use(middlewares);

// /* Register all routes */
// app.use(router.routes());
//
// /* Allow all types of HTTP methods */
// app.use(router.allowedMethods());

/* Start a http2 server with given certificate */
const httpServer = http.createServer(app.callback());
const http2Server = http2.createSecureServer(certificate, app.callback());

/* Use port given from environment variable or the default */
const httpPort = process.env.HTTP_PORT || 3000;
const http2Port = process.env.HTTP2_PORT || 3001;

/* Start server with given port */
httpServer.listen(httpPort, () => console.log(`HTTP started on port ${httpPort}`));
http2Server.listen(http2Port,() => console.log(`HTTP2 started on port ${http2Port}`));