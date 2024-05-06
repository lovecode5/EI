const express = require("express");
const router = require("./ROUTER/router.js").router;
var cors = require('cors')

//const connectionThread=require("./CONNECTION/connection.js").connectionThread.connection



const app = express();
app.use(cors())

app.use(express.json());

app.use("/api",router);

app.listen(5000);