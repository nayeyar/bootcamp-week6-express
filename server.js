const { db } = require('./db/connection');
const app = require('./src/app');
const port = 3000;

app.listen(port, async () => {
    await db.sync();
    console.log(`App server is listening on port: http://localhost:${port}`);
})