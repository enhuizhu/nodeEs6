import express from "express";
import expressSetting from "./config/expressConfig.js";
import route from "./routes/route.js";

let app = express();

expressSetting(app);

new route(app);

app.listen(3000);

console.log("server running at http://127.0.0.1:3000");
