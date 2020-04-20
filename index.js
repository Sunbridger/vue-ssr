const server = require('express')();
const fs = require('fs');
const createApp = require('./app');

const Renderer = require('vue-server-renderer').createRenderer({
    template: fs.readFileSync('./src/index.template.html', 'utf-8')
});

server.get('*', (req, res) => {
    const context = {
        title: 'SSR test#'
    };
    const app = createApp({
        url: req.url
    });
    Renderer.renderToString(app, context, (err, html) => {
        if (err) {
            res.status(500).end('server error');
        }
        res.end(html);
    })
})

server.listen(8989);
console.log('running at: http://localhost:8989');
