import express from "express";
import { engine } from "express-handlebars";


const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
app.engine("handlebars", engine({
    defaultLayout: "index",
    })
);



app.get("/", (req, res) => {
    res.render("main");
});

app.get((req, res) => {
    res.send(200);
});






app.use("/", express.static("./public"));

app.listen(5080);