module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {   
            dist: {
                src: [ 'src/js/lib/*', 'src/js/*.js' ],
                dest: 'src/production.js',
            }
        }, 
        watch: {
            scripts: {
                files: ['src/js/*.js'],
                tasks: [ 'concat' ],
                options: {
                    spawn: false,
                }
            }
        }, 
        jslint: {
            popup: {
                src: [ 
                    'src/js/*.js',
                ],
                directives: {
                    predef: [
                        'jQuery'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-contrib-watch') 
    grunt.loadNpmTasks('grunt-jslint');

    grunt.registerTask('default', ['concat']) 
}
