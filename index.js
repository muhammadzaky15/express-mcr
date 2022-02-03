const express = require("express");
const app = express();
const indexRouter = require("./routers/indexRouter");
const userRouter = require("./routers/userRouter");

app.use("/", indexRouter);
app.use("/users", userRouter);

app.listen(5002, () => {
    console.log("app running in port 5002")
})