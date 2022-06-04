const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

PORT = process.env.PORT || 8080;

const app = express();

let books = [];



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname + '/book.html'));
// });

app.post('/book', (req, res) => {
    
    const book = req.body;

    console.log(book);
    books.push(book);

    res.send(book)
})

app.get('/books', (req, res) => {
    res.json(books);
});


app.listen(PORT)