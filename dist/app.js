import express from 'express';
const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.send("Hello World");
});
app.use((error, req, res, next) => {
    res.status(500).send(error.message);
});
export default app;
//# sourceMappingURL=app.js.map