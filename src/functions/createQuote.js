import connectDb from "./connectDb.js";

  export function createQuote(req, res) {
    if(!req.body) {
        res.status(401).send('Invalid request');
          return;
    }
    const db = connectDb();
    db.collection('quotes').add(req.body)
      .then(doc => {
      res.send('Quote created ' + doc.id)
      })
      .catch(err => {
      res.status(500).send(err);
    });
}