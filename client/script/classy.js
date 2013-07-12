
window.CLSY = {

    init: function() {
        this.courses.addCoursesToList(
            {
                "courses": [
                    {
                        "id": "js101",
                        "name": "JavaScript 101",
                        "description": "Everything you always wanted to know about JavaScript, but were afraid to ask.",
                        "date": "2013-07-30",
                        "students": 5,
                        "max": 10
                    },
                    {
                        "id": "advjs",
                        "name": "Advanced JavaScript",
                        "description": "After this course you will know ALL THE JAVASCRIPT... or at least, the fun parts.",
                        "date": "2013-08-01",
                        "students": 9,
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
                        "id": "html5",
                        "name": "HTML5 APIs",
                        "description": "Multimedia, drag and drop, FileReaders, oh my! You'll learn about these and more.",
                        "date": "2013-09-01",
                        "students": 0,
                        "max": 10
                    }
                ]
            },
            ".sidebar .upcoming ul"
        );
    }

};

