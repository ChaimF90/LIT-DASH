import * as express from "express";
const app = express();

app.get("/sample", (req, res) => {
    res.status(200).json({foo: "bar"});
});

const port = process.env.PORT || 1337;
app.listen(port, () => console.log(`server is running on port ${port}`))