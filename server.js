const express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())

var fs = require('fs')

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(80, () => console.log('Example app listening on port 80!'))

app.use('/', express.static('./'))
var data = []

function saveToFile() {
    fs.writeFile(`${__dirname}/data.json`, JSON.stringify(data), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!")
    });
}

app.post('/save', (req, res) => {
    var dataToAdd = req.body
    data.push(dataToAdd)
    saveToFile()
    res.json({})
})
