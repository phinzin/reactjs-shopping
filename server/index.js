const express = require('express')
const app = express()
const port = 8080
var fs = require("fs"),
    json;
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/products/new-arrivals', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(readJsonFileSync("products.json", "utf8"))
})
app.get('/products/featured', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(readJsonFileSync("products.json", "utf8"))
})
app.get('/products/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(readJsonFileSync("single-product.json", "utf8"))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



function readJsonFileSync(filepath, encoding) {

    if (typeof (encoding) == 'undefined') {
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}


