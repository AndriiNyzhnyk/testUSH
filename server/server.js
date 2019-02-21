const express = require('express');
const app = express();
const path = require('path');
const data = require('./dataForTable').data;

app.set('port', process.env.PORT || 8000);
app.use(express.static(path.resolve(__dirname, '../build')));


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