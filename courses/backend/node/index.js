const express = require("express");
const app = express();

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

app.get("/user-count", (req, res) => {
  res.json({ count: users.length });
});

app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

app.get("/time", (req, res) => {
  res.json({ time: new Date().toISOString() });
});

app.get("/random-number", (req, res) => {
  res.json({ number: Math.floor(Math.random() * 100) + 1 });
});

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>User Count</title>
      </head>
      <body>
        <h1>Total Users</h1>
        <p id="count">Loading...</p>

        <script>
          fetch("/user-count")
            .then(response => response.json())
            .then(data => {
              document.getElementById("count").textContent = data.count;
            })
            .catch(() => {
              document.getElementById("count").textContent = "Error";
            });
        </script>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
