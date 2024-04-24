const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_mysql_password',
  database: 'learning_management'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL');
});

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to handle course selection
app.post('/select-courses', (req, res) => {
  const { userId, courses } = req.body;
  const insertQuery = 'INSERT INTO user_courses (user_id, course_id) VALUES ?';
  const values = courses.map(courseId => [userId, courseId]);

  db.query(insertQuery, [values], (err, result) => {
    if (err) {
      res.status(500).send('Error storing selected courses');
    } else {
      res.status(200).send('Selected courses stored successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
