const express = require("express");


const app = express();
const PORT = process.env.PORT || 3001;

require("dotenv").config();


//Sets up middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Checks if we're in production or just dev 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});
