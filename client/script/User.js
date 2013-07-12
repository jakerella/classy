
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


    CLSY.Instructor = function Instructor(data) {
        CLSY.User.apply(this, [data]);
        if (Number(data.fee)) { this.fee = data.fee; }
    };
    CLSY.Instructor.prototype = Object.create(CLSY.User.prototype);
    CLSY.Instructor.prototype.constructor = CLSY.Instructor;
    CLSY.Instructor.prototype.fee = 0;

})();