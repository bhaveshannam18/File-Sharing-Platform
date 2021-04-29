const express = require("express");


const app = express();

const path = require("path");

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

const connectDB = require("./config/db");
connectDB();


app.set("views",path.join(__dirname,"/views"));
app.set("view engine","ejs");


app.use("/api/files",require("./routes/files"));
app.use("/files",require("./routes/show"));
app.use("/files/download",require("./routes/download"));
app.get("/",(req,res)=>{
    res.send("hey I listen to you");
})

app.listen(PORT , ()=>{
    console.log(`Listeneing on PORT: ${PORT}`);
})