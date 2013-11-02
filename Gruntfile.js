module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        version: {
            build: {
                options: {
                    release: 'build'
                },
                src: ['package.json']
            },
            minor: {
                options: {
                    release: 'minor'
                },
                src: ['package.json']
            }
        },
        watch: {
            js: {
                files: ['main.js'],
                tasks: ['version:build']
            }
        }
    });

    grunt.loadNpmTasks('grunt-version');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch:js']);
    grunt.registerTask('bump_minor', ['version:minor']);

};