// import express library
const express = require('express');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.json(req.query);
});

server.post('/', (req, res) => {
    res.json(req.body);
});

server.post('/sum', (req, res) => {
    res.json({
        "sum": parseInt(req.body.input1) + parseInt(req.body.input2)
    });
});

server.delete('/:id', (req, res) => {
    res.json({
        "deleted": req.params.id
    });
})

server.listen(8001, () => {
    console.log('Server is started and listening on port 8001');
});