const express = require('express');
const app = express();
const port = 3000;
const postsRouter = require('./routers/posts');
const postsArray = require('./arraypost/posts');


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})


app.use("/posts", postsRouter);
app.use("/arrayposts", postsArray);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})