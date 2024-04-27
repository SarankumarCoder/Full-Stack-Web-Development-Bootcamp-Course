const express = require("express");
const app = express();


const PORT = 3000;


//Simulate an in the Middleware
app.use((req, res, next) => {
  //!Simulate an error condition
  const isError = true;
  if (isError) {
    //Create an error obj
    const err = new Error("My new error");
    next(err);
  } else {
    next();
  }
});


//Regular Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to built in error handling !",
  });
});


//start the server
app.listen(PORT, console.log(`Server is running ${PORT}`));
 