module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
            dist: {
                src: [ 'src/js/lib/*', 'src/js/*.js' ],
                dest: 'src/production.js',
            }
        }
        // , 
        // uglify: {
        //     build: {
        //         src: 'src/production.js',
        //         dest: 'src/production.min.js'
        //     }
        // } 
    });

    // tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-uglify');

    // tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat']); // , 'uglify'
};
