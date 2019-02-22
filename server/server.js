const express = require('express');
const app = express();
const path = require('path');
const formidable = require('formidable');
const cookieParser = require('cookie-parser');
const data = require('./dataForTable').data;
const security = require('./securityKeys').keys;

app.set('port', process.env.PORT || 8000);
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(cookieParser(security.secretCookies));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.get('/api/getDataForTable', (req, res) => {
    // res.send(JSON.stringify(data));
    setTimeout( ()=> {
        res.json(data);
    }, 1000, res);

    // res.json(data);
});

app.delete('/api/deleteItem/:empId', (req, res) => {
    let empId = req.params['empId'];
    console.log(empId);
    res.send('ok');
});

app.post('/api/signInAdmin', (req, res) => {
    console.log('req is commind');

    let form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
        if(err) return console.error(err);

        console.log(fields);

        if(fields.login === security.login && fields.password === security.password) {
            res.cookie(security.publicCookieForAuth.name, security.publicCookieForAuth.value,
                {
                    signed: false,
                    path: '/',
                    // maxAge: 900000
                    // httpOnly: true
                });

            res.cookie(security.cookieForRestApi.name, security.cookieForRestApi.value,
                {
                    signed: true,
                    path: '/',
                    // maxAge: 900000
                    httpOnly: true
                });
            console.log('setCookies');
            res.send('ok');

        } else {
            res.status(200).send('badLoginOrPassword');
        }
    });
    

});


app.use((req, res, next) => {
    res.status(404).send('404!');
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('500');
});


process.on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at:', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
});

process.on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
    process.exit(1);
});


app.listen(app.get('port'), () => {
    console.log( 'Express запущенний на http://localhost:' +
        app.get('port') + '; нажміть Ctrl+C для завершення.' );
});