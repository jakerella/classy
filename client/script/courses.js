
(function($) {
    
    // make sure our app is defined
    window.CLSY = (window.CLSY || {});
    
    CLSY.courses = {
        
        data: [
            {
                "id": "advjs",
                "name": "Advanced JavaScript",
                "description": "After this course you will know ALL THE JAVASCRIPT... or at least, the fun parts.",
                "date": "2013-08-01",
                "students": 9,
                "max": 10
            },
            {
                "id": "html5",
                "name": "HTML5 APIs",
                "description": "Multimedia, drag and drop, FileReaders, oh my! You'll learn about these and more.",
                "date": "2013-09-01",
                "students": 0,
                "max": 10
            },
            {
                "id": "intnode",
                "name": "Intermediate Node.js",
                "description": "You'll need a basic understanding of Node, but we'll dive into some core features and useful libraries.",
                "date": "2013-08-17",
                "students": 10,
                "max": 10
            },
            {
                "id": "js101",
                "name": "JavaScript 101",
                "description": "Everything you always wanted to know about JavaScript, but were afraid to ask.",
                "date": "2013-07-30",
                "students": 5,
                "max": 10
            }
        ],

        getCourse: function(id) {
            var course = null;
            this.data.forEach(function(c) {
                if (c.id === id) {
                    course = c;
                }
            });
            return course;
        },

        addCoursesToList: function(count, list) {
            // variable declaration
            var i, listItems = "";

            // input audits
            count = (Number(count) || 5);
            list = $(list);
            if (!list.length) { return; }

            this.data.sort(function(a, b) { return (a.date < b.date) ? -1 : 1; });

            // build list item HTML...
            i = 0;
            this.data.forEach(function(course) {
                if (++i > count) { return false; }
                listItems += "<li class='course'><a href='courses.html#" + course.id + "'>" + course.name + "</a></li>";
            });
            // ...and add it to the DOM
            list.append(listItems);

            this.setupCourseTooltips(list);
        },

        setupCourseTooltips: function(list) {
            var self = this;

            list = $(list);
            if (!list.length) { return; }

            var tooltip = $(".tooltip.course-detail");

            list.on("click", "a", function(e) {
                var id, prop, course, instructor;

                e.preventDefault();
                e.stopPropagation();
                
                // courses.html#js101
                id = $(this).prop("href").match(/#(.+)$/);
                if (!id) { return; }
                id = id[1];

                course = self.getCourse(id);
                if (!course) { return; }

                instructor = CLSY.users.getInstructorForCourse(id);

                for (prop in course) {
                    tooltip.find(".course-" + prop).text(course[prop]);
                }
                tooltip
                    .find(".course-instructor")
                        .text( (instructor) ? instructor.name : "TBD" )
                        .end()
                    .css({
                        right: (window.innerWidth - (e.pageX + 10)) + "px",
                        top: (e.pageY + 10) + "px"
                    })
                    .show();
            });

            $("body").on("click", function() {
                tooltip.hide();
            });
        }

    };
    
})(jQuery);
