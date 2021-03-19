// make 1st. 웹브라우저가 시작하면 제일 먼저 index.js가 시작된다.
// get을 먼저 찾을 걸 아마 그러면서 작업 시작.

import express from "express";
// import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`✅ Listening on: http://localhost:${PORT}`);
};


function middlewereConsol(req,res, next){
  console.log("i'm a middleware");
  next();
}

function middlewereProcted(req, res){
  res.redirect('/')
}

function handleHome(req, res){
  res.send('Home')
}
function handleAbout(req, res){
  res.send('About-Us')
}
function handleContact(req, res){
  res.send('Contact')
}
function handleProtected(req, res){
  res.send('Protected');
}

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// app.use(helmet());
app.use(morgan('dev'));


app.get("/", middlewereConsol, handleHome);
app.get("/about-us", middlewereConsol, handleAbout);
app.get("/contact", middlewereConsol, handleContact);
app.get("/protected", middlewereConsol, middlewereProcted, handleProtected);

app.listen(PORT, handleListening);
