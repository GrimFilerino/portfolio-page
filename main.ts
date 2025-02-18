import express from "npm:express";
import path from "npm:path";
import expressLess from "npm:express-less";

// Create an instance of the express application
const app = express();

// Serve static files from the "assets" directory
//app.use("/public",express.static(path.join(Deno.cwd(), "public"), { etag: false}));
app.use("/less-css", expressLess(path.join(Deno.cwd(), "public" , "less"), { compress: true }));

// Set the view engine to EJS
app.get("/", (req: any, res: any) => {
    res.sendFile(path.join(Deno.cwd(), "views", "index.html"));
});

app.get("/contact-me", (req: any, res: any) => {
    res.sendFile(path.join(Deno.cwd(), "views", "contact.html"));
});


// Start the server
app.listen(8888, () => {
    console.log("Server is running on http://localhost:8888");
});

