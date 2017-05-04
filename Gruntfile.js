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

    grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat']); // , 'uglify'
};
