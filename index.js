const express = require("express");
const userRouter = require("./Route/model.route");

const dbConnect = require("./config/db");
const app = express();
app.use(express.json());


app.get("/" , (req, res) => {
    res.send("welcome")
});

app.use("/api",userRouter);



app.listen(3000, (req,res) => {
  console.log("Server is running on port 3000");
  dbConnect

});
