const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

// route setup
app.get('/', (req,res) => { res.send('route route');
})

// start server
app.listen(port, (req,res) => {
    console.log(`server listening on port: ${port}`)
})

