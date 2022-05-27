import express from "express";
import cors from "cors";
import { getAllQuotes } from "./functions/getQuotes";
import { createQuote } from "./functions/createQuote";


const PORT = 5656;

const app = express();
app.use(cors())

app.use(express.json());

app.get('/quotes', getAllQuotes);
app.post('/quotes', createQuote);


app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}...`))