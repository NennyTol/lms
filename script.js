// script.js
document.addEventListener('DOMContentLoaded', function() {
    const userId = getUserId(); // Implement this function to get the logged-in user's ID
  
    fetch(`/user-courses/${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching selected courses');
        }
        return response.json();
      })
      .then(data => {
        const selectedCoursesDiv = document.getElementById('selectedCourses');
        data.forEach(course => {
          const courseElement = document.createElement('p');
          courseElement.textContent = course.name;
          selectedCoursesDiv.appendChild(courseElement);
        });
      })
      .catch(error => {
        console.error(error);
        alert('An error occurred while fetching selected courses');
      });
  });
  