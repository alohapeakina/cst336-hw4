import express from 'express';


const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res) => {
   // res.send('Hello Express app!')
   res.render("index");
});

app.get('/kanban', (req, res) => {
   console.log("Loading kanban page");
   res.render("kanban");
});

app.get('/lean', (req, res) => {
   console.log("Loading lean page");
   res.render("lean");
});

app.get('/scrum', (req, res) => {
   console.log("Loading scrum page");
   res.render("scrum");
});

app.get('/xp', (req, res) => {
   console.log("Loading XP page");
   res.render("xp");
});

app.listen(3000, () => {
   console.log('server started');
});