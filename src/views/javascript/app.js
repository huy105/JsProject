
var coursesApi = 'http://localhost:3000/getCourse'


function start() {
    // getCourse(renderCourse); 
    getCourse(function(response) {console.log(response)}); 
}

function getCourse(callback) {
    fetch(coursesApi)
        .then(function(response) {
            return response.json()
        })
        .then(callback);
}

function renderCourse(courses) {
    var listCoursesBlock = document.querySelector('#list-courses')

    var htmls = courses.map(function(course) {
        return ` 
        <li> 
        <h4> ${course.name} </h4> 
        <p> ${course.description} </p>
        </li>
        `
    });
    listCoursesBlock.innerHTML = htmls.join('');
};

start();