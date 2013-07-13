
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
        },

        setupProfilePicCamera: function(container) {
            var captureMethod, video, canvas, button;

            container = $(container);
            if (!container.length || container.hasClass("camera-set")) { return; }

            if (navigator.webkitGetUserMedia) {
                captureMethod = "webkitGetUserMedia";
            } else if (navigator.mozGetUserMedia) {
                captureMethod = "mozGetUserMedia";
            } else {
                container.html("<p>Sorry, but your browser doesn't support this feature.</p>");
                return;
            }

            container.html(
                "<video height='110' width='150'></video><br />" +
                "<input type='button' class='snap-pic' value='Take Picture' />" +
                "<input type='button' class='reset-pic' value='Reset' />" +
                "<canvas style='display:none;'></canvas>"
            );

            video = container.find("video");
            canvas = container.find("canvas");
            snap = container.find(".snap-pic");
            reset = container.find(".reset-pic").hide();

            canvas.width(video.width());

            snap.on("click", function() {
                video.get(0).pause();
                canvas.get(0).getContext("2d").drawImage(video.get(0), 0, 0, video.width(), video.height());
                snap.hide();
                reset.show();
            });
            reset.on("click", function() {
                video.get(0).play();
                reset.hide();
                snap.show();
            });

            navigator[captureMethod](
                { video: true, audio: true },
                function(stream) {
                    video
                        .prop("src", URL.createObjectURL(stream))
                        .get(0).play();
                },
                function(err) {
                    container.html("<p>Sorry, but this feature isn't working properly.</p>");
                }
            );

            container.addClass("camera-set");
        }

    };
    
})(jQuery);
