// make 1st. 웹브라우저가 시작하면 제일 먼저 index.js가 시작된다.
// get을 먼저 찾을 걸 아마 그러면서 작업 시작.
// 2.8강에서 index.js -> app.js로 파일명 변경
import express from "express";
// import helmet from "helmet";
import morgan from "morgan";
import request from "request";
import cookieParser from "cookie-parser";
// import multer from "multer";
// import fs from "fs";
import globalRouter from "./globalRouter";
import { localsMiddleware } from "./localsMiddleware"
import routes from './routes';

// const uploadMulter = multer({dest:'uploads/'});

const app = express();

app.set("view engine", "pug");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(morgan('dev'));

app.use(localsMiddleware);
// app.use는 "/user"에 접속했을때 userRouter를 전부 사용하겠다는 뜻.
// app.use(routes.home, globalRouter);

const statusCodeScan = (req, res, next) => {
  request.get(req.query.url, function (error, response, body) {
    if (error !== null) {
      res.send("Down");
      console.log("error:", error);
    } else if (response.statusCode <= 445) {
      res.send("Up");
      console.log("response:", response.statusCode);
    }
  });
}

function scanQuery (req, res, next){
  let queryUrl = req.query.url
  const parsedQuery = req._parsedUrl.query
  if (parsedQuery != null && parsedQuery === "url" && queryUrl.split("://")[0] !== "http"){
    req.query.url = "http://" + queryUrl;
  } else {
    return res.send(`<h1>it's false Query.</h1> <h2>you can try "/?url={url}"</h2>`)
  }
  next()
}

app.use("/", scanQuery, statusCodeScan);

export default app;