const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const pug = require('pug');

exports.test = onRequest((req, res) => {
    let template = pug.compileFile('views/test.pug');
    let markup = template({
        name: req.query.name,
        major: req.query.major,
        quote: req.query.quote
    });

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(markup);
});
