const express = require('express');
const PORT = 80;
const app = express();
app.use(express.json());

app.get('/',(req, res) => {
  res.send('Hello AWS')
});  

const start = async () => {
  try {
    app.listen(PORT,() => {
      console.log(`server started on port ${PORT}`);
    });
  } catch (e) {
    console.log(e)
  }
}

start();







