
(function() {

    window.console = (window.console || { log: function(){} });

    window.CLSY = {

        init: function() {
            
            this.courses.addCoursesToList(3, ".upcoming ul");
            
            userData.forEach(function(user) {
                CLSY.users.addUser(user);
            });

            this.createVideoControls();

            this.highlightCurrentNav();
        },

        highlightCurrentNav: function() {
            var current = $("header nav a[href='" + document.location.pathname + "']");
            if (current.length) {
                current.closest("li").addClass("current_page_item");
            } else {
                if (document.location.pathname === "/home") {
                    $("header nav li:first").addClass("current_page_item");
                }
            }
        },

        createVideoControls: function() {
            var video = $(".video-container video"),
                button = $(".video-container input");

            if (!video.length) { return; }

            button.on("click", function() {
                video.get(0).play();
                button.fadeOut();
            });
            video.on("click", function() {
                video.get(0).pause();
                button.fadeIn();
            });
        },

        getDistance: function(p1, p2) {
            var dLat, dLon, deg2rad, a;

            deg2rad = function(deg) {
                return deg * (Math.PI / 180);
            };

            dLat = deg2rad(p2[0] - p1[0]);
            dLon = deg2rad(p2[1] - p1[1]);
            a = 
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(deg2rad(p1[0])) * Math.cos(deg2rad(p2[0])) * 
                Math.sin(dLon / 2) * Math.sin(dLon / 2);

            return 3960 * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
        }

    };

    var userData = [
        {
            "id": 13,
            "name": "Jordan Kasper",
            "type": "Instructor",
            "courses": [
                "advjs", "intnode"
            ],
            "fee": 1000
        },
        {
            "id": 23,
            "name": "Mr. T",
            "type": "Student",
            "courses": [
                {
                    "id": "intnode",
                    "paid": false
                }
            ]
        },
        {
            "id": 37,
            "name": "Vincent Price",
            "type": "Student",
            "courses": [
                {
                    "id": "js101",
                    "paid": true
                },
                {
                    "id": "hmlt5",
                    "paid": false
                }
            ]
        },
        {
            "id": 41,
            "name": "Bob Barker",
            "type": "Student",
            "courses": [
                
            ]
        }
    ];

})();
