import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res) => {
   let page_name = "home";
   res.render("index", {page_name});
});

app.get('/kanban', async (req, res) => {
   console.log("Loading kanban page");
   let page_name = "kanban";

   const apiKey = process.env.TRELLO_API_KEY;
   const token = process.env.TRELLO_API_TOKEN;
   const boardId = process.env.TRELLO_BOARD_ID;

   const url = `https://api.trello.com/1/boards/${boardId}?lists=open&cards=open&key=${apiKey}&token=${token}`;

   try {
      const response = await fetch(url);
      const data = await response.json();

      res.render("kanban", {
         page_name,
         lists: data.lists,
         cards: data.cards
      });
   } catch (error) {
      console.error("Failed to fetch Trello data: ", error);
      res.render("kanban", {page_name, lists: [], cards: [] });
   }

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