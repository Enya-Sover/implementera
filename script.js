const Express = require("express")
const fs = require('fs');
const path = require("path");
const app = Express("")
const PORT = 3000
app.use(Express.static('public'))


app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      if (err) {
        res.status(404).send('404 Not Found');
      } else {
        res.set('Content-Type', 'text/html');
        res.send(data);
      }
    });
  });
  app.get('/contact/', (req, res) => {
    fs.readFile(path.join(__dirname, 'contact.html'), (err, data) => {
      if (err) {
        res.status(404).send('404 Not Found');
      } else {
        res.set('Content-Type', 'text/html');
        res.send(data);
      }
    });
  });



app.get('/about/', (req, res) =>{
    fs.readFile(path.join(__dirname, 'about.html'), (err, data) => {
    if (err){
        res.status(404).send('404 Not found!')
    } else{
        res.set('Content-type', 'text/html')
        res.send(data)
    }        
    })
    
})


app.listen(PORT, () => {
    console.log(`Server is conected to ${PORT}`)
})