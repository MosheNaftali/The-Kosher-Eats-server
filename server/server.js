const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use("/", require("./api"));

app.listen(PORT, () => {
  console.log(`Server Listen on port ${PORT}`);
});
