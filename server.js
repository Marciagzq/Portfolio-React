const express = require('express');
const bodyParser = require('body-parser');



const app = express();
const port = process.env.PORT || 3000;
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});