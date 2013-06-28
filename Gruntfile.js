module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        jshint: {
            files: ["app/**/*.js"],
            options: {
                force: true,
                jshintrc: "./.jshintrc"
            }
        },

        qunit: {
            core: {
                options: {
                    urls: [ "tests/core.html" ]
                }
            }
        }

    });
    
    grunt.loadNpmTasks("grunt-contrib-qunit");
    grunt.loadNpmTasks("grunt-contrib-jshint");

    grunt.registerTask( "default", [ "jshint", "qunit" ]);

};
