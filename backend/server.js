const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")

const app = express();
const port = 3002;

app.use(cors())
app.use(bodyParser.json());


app.post('/save-transcript', (req, res) => {
    const {speechData} = req.body
    
    res.json({msg:"data saved successfully"})
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
