const express = require('express');
const app = express();
const port = 3000;

const indexRouter = require('./routers/index');
const instagramRouter = require('./routers/instagram');
const cors = require("cors");

app.use(cors());
app.use('/', indexRouter);
app.use('/instagram', instagramRouter);

app.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`);
});
