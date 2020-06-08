const express = require('express')
const app = express();
const path = require('path')
const port = process.env.PORT || 5000;

// route setup
app.get('/', (req,res) => { 
    res.send('route route');
})

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item 1", "item 2", "item 3"];
    res.json(list);
    console.log('Sent list of items');
});


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')))

// production mode
if(process.env.NODE_ENV == 'production'){
    app.use(express.static(path.join(__dirname, 'client/build'))); 

    // Handles any requests that don't match the ones above
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname = 'client/build/index.html'));
    })
}

//build mode
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
})

// start server
app.listen(port, (req,res) => {
    console.log(`server listening on port: ${port}`)
})

