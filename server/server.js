const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8000);

const data = [
    {
        empId: 1,
        empName: 'qwerty',
        empActive: 'yes',
        empDepartment: 'prog'
    },
    {
        empId: 2,
        empName: 'wot',
        empActive: 'no',
        empDepartment: 'hr'
    },
    {
        empId: 3,
        empName: 'era',
        empActive: 'no',
        empDepartment: 'hr'
    },
    {
        empId: 4,
        empName: 'rosa',
        empActive: 'yes',
        empDepartment: 'soc'
    },
    {
        empId: 5,
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
    // setTimeout( ()=> {
    //     res.json(data);
    // }, 1000, res);

    res.json(data);
});

app.listen(app.get('port'), () => {
    console.log( 'Express запущенний на http://localhost:' +
        app.get('port') + '; нажміть Ctrl+C для завершення.' );
});