// make 1st. 웹브라우저가 시작하면 제일 먼저 index.js가 시작된다.
// get을 먼저 찾을 걸 아마 그러면서 작업 시작.
// 2.8강에서 index.js -> app.js로 파일명 변경
import express from "express";
// import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import globalRouter from "./routers/globalRouter";
import coursesRouter from './routers/coursesRouter';
import apiRouter from './routers/apiRouter'
import apiV1Router from './routers/apiV1Router';
import apiV2Router from './routers/apiV2Router';
import routes from './routes';

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// app.use(helmet());
app.use(morgan('dev'));

// app.use는 "/user"에 접속했을때 userRouter를 전부 사용하겠다는 뜻.
app.use(routes.home, globalRouter)
app.use("/courses", coursesRouter);
app.use("/api", apiRouter);
app.use("/api/v1", apiV1Router);
app.use("/api/v2", apiV2Router);

export default app;