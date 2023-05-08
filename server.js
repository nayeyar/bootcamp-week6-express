const app = require('./src/app');
const port = 3000;

app.listen(port, () => {
    console.log(`App server is listening on port: http://localhost:${port}`);
})