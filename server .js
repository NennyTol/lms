// Endpoint to fetch selected courses for a user
app.get('/user-courses/:userId', (req, res) => {
    const userId = req.params.userId;
    const selectQuery = 'SELECT c.name FROM courses c JOIN user_courses uc ON c.id = uc.course_id WHERE uc.user_id = ?';
  
    db.query(selectQuery, [userId], (err, result) => {
      if (err) {
        res.status(500).send('Error fetching selected courses');
      } else {
        res.status(200).json(result);
      }
    });
  });
  