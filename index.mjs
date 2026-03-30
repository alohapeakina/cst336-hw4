import express from 'express';


const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res) => {
   let page_name = "home";
   res.render("index", {page_name});
});

app.get('/kanban', (req, res) => {
   console.log("Loading kanban page");
   let page_name = "kanban";
   res.render("kanban", {page_name});
});

app.get('/lean', (req, res) => {
   console.log("Loading lean page");
   let page_name = "lean";
   res.render("lean", {page_name});
});

app.get('/scrum', (req, res) => {
   console.log("Loading scrum page");
   let page_name = "scrum";
   res.render("scrum", {page_name});
});

app.get('/xp', (req, res) => {
   console.log("Loading XP page");
   let page_name = "xp";
   res.render("xp", {page_name});
});

app.listen(3000, () => {
   console.log('server started');
});