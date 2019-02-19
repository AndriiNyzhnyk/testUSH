const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8000);

const data = [
    {
        empID: 1,
        empName: 'qwerty',
        empActive: 'yes',
        empDepartment: 'prog'
    },
    {
        empID: 2,
        empName: 'wot',
        empActive: 'no',
        empDepartment: 'hr'
    },
    {
        empID: 3,
        empName: 'era',
        empActive: 'no',
        empDepartment: 'hr'
    },
    {
        empID: 4,
        empName: 'rosa',
        empActive: 'yes',
        empDepartment: 'soc'
    },
    {
        empID: 5,
        empName: 'kara',
        empActive: 'yes',
        empDepartment: 'ceo'
    }
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/getDataForTable', (req, res) => {
    // res.send(JSON.stringify(data));
    res.json(data);
});

app.listen(app.get('port'), () => {
    console.log( 'Express запущенний на http://localhost:' +
        app.get('port') + '; нажміть Ctrl+C для завершення.' );
});