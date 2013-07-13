
(function($) {
    
    // make sure our app is defined
    window.CLSY = (window.CLSY || {});
    
    CLSY.users = {
        Students: [],
        Instructors: [],

        addUser: function(data) {
            var user = Object.create(CLSY[data.type].prototype);
            user.constructor((data || {}));
            this[data.type + "s"].push(user);
        },

        getUser: function(id) {
            var user = null;

            this.Students.concat(this.Instructors).forEach(function(s) {
                if (s.id === id) {
                    user = s;
                    return;
                }
            });

            return user;
        },

        getInstructorForCourse: function(course) {
            var user = null;
            if (!course) { return; }

            this.Instructors.forEach(function(u) {
                if (u.courses.indexOf(course) > -1) {
                    user = u;
                }
            });

            return user;
        }

    };
    
})(jQuery);