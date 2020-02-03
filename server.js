const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))
    //EXPRESS engine
hbs.registerPartials(__dirname + '/views/partials');


app.set('view engine', 'hbs');

// app.use(express.static('C:/Users/roqu/Documents/CursoReactJS/search-movies/public'))
console.log(__dirname);
app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'Roque aLVarez',
        anio: new Date().getFullYear()
    })
})

app.get('/about', function(req, res) {

    res.render('about', {
        nombre: 'Roque Alvarez',
        anio: new Date().getFullYear()
    })
})
app.get('/data', function(req, res) {
    let salida = {
        nombre: 'roque DATAAAAA',
        edad: 21,
        url: req.url
    }
    res.send(salida)
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})