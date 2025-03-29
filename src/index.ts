import express from "express";
import urlController from "./urls/urls.controller";

const app = express();

app.use(express.json());

app.use('/url', urlController)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
