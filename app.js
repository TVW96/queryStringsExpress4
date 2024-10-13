// app.js

// Add your code here
import express from 'express';
const app = express();

app.get("/", (res, req) => {
    app.send("home page.");
})

// GET route to handle query strings
app.get('/get', (req, res) => {
    const queryParams = req.query; // Accessing query string parameters
    console.log(queryParams); // Logging query parameters to the console
    res.send('Query parameters logged to the console.'); // Sending a response
});

app.use((req, res) => {
    app.status(404).send("404 - Not Found");
})

export default app;