// INSTRUCTIONS: https://www.npmjs.com/package/express-handlebars
// npm init
// npm install express --save
// npm install express-handlebars --save
// ensure "package.json" specifies file as - "type": "module"
// ensure "package.json" has under scripts - "start": "node app.js"
// then run "npm start" and load on http://localhost:3000/

import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000);