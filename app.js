const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

const indexRouter = require('./routers/index');
const authRouter = require('./routers/auth');
const instagramRouter = require('./routers/instagram')
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/instagram', instagramRouter);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
