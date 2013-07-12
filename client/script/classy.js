
(function() {
    window.CLSY = {

        init: function() {
            
            this.courses.addCoursesToList(3, ".sidebar .upcoming ul");
            
            userData.forEach(function(user) {
                CLSY.users.addUser(user);
            });

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
