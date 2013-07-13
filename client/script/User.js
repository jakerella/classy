
(function() {

    // make sure our app is defined
    window.CLSY = (window.CLSY || {});

    CLSY.User = function User(data) {
        var prop;

        if (data) {
            for (prop in data) {
                if (CLSY.User.prototype.hasOwnProperty(prop) &&
                    typeof this[prop] == typeof data[prop]) {
                    this[prop] = data[prop];
                }
            }
        }
    };

    CLSY.User.prototype.id = 0;
    CLSY.User.prototype.name = "John Doe";
    CLSY.User.prototype.courses = [];
    CLSY.User.prototype.addCourse = function(course) {
        if (course) {
            this.courses.push(course);
        }
    };


    CLSY.Student = function Student(data) {
        CLSY.User.apply(this, [data]);
    };
    CLSY.Student.prototype = Object.create(CLSY.User.prototype);
    CLSY.Student.prototype.constructor = CLSY.Student;
    CLSY.Student.prototype.register = function(course, paid) {
        if (typeof course === "string") {
            course = CLSY.courses.getCourse(course);
        } else if (!course.id && course.students) {
            return;
        }
        paid = !!paid;

        if (course.students >= course.max) {
            throw Error("Sorry, but this course is full!");
        }

        this.courses.push({ "id": course.id, "paid": paid });
        course.students++;
    };


    CLSY.Instructor = function Instructor(data) {
        CLSY.User.apply(this, [data]);
        if (Number(data.fee)) { this.fee = data.fee; }
    };
    CLSY.Instructor.prototype = Object.create(CLSY.User.prototype);
    CLSY.Instructor.prototype.constructor = CLSY.Instructor;
    CLSY.Instructor.prototype.fee = 0;

})();