function filterCourses(category) {

    let courses = document.querySelectorAll(".course-card");

    courses.forEach(function(course) {

        if (category === "all" || course.dataset.category === category) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }

    });
}