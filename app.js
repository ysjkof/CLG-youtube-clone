// make 1st. 웹브라우저가 시작하면 제일 먼저 index.js가 시작된다.
// get을 먼저 찾을 걸 아마 그러면서 작업 시작.
// 2.8강에서 index.js -> app.js로 파일명 변경
import express from "express";
// import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import globalRouter from "./globalRouter";
import { localsMiddleware } from "./localsMiddleware"
import routes from './routes';

const app = express();

app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// app.use(helmet());
app.use(morgan('dev'));

app.use(localsMiddleware);
// app.use는 "/user"에 접속했을때 userRouter를 전부 사용하겠다는 뜻.
app.use(routes.home, globalRouter);

export default app;