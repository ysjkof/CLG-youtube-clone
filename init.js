// make 2nd. 2.8강에서 시작.
// package에서 script index.js -> init.js로 변경.
import app from "./app";

const PORT = 4000;

const handleListening = () => {
  console.log(`✅ Listening on: http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);