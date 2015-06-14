/**
 * Created by LamDo on 6/13/15.
 */
module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ['build', 'tmp'],

        concat: {
            web: {
                files: [
                    {
                        dest: 'tmp/app.js',
                        src: [  'app/common/**/*.js',
                                'app/components/**/*.js',
                                'app/profiles/web/**/*.js'
                        ]
                    }
                ]
            },
            phone:{
                files: [
                    {
                        dest: 'phonegap/www/app/main.js',
                        src: [
                                'app/common/**/*.js',
                                'app/components/**/*.js',
                                'app/profiles/phone/**/*.js',
                                '!app/**/*_test.js'
                        ]
                    }
                ]
            }
        },

        uglify: {
            web: {
                files: [{
                    flatten: true,
                    expand: true,
                    src: 'tmp/**/*.js',
                    dest: 'build',
                    ext: '.min.js'
                }]
            },
            phone: {
                files: [{
                    flatten: true,
                    expand: true,
                    src: ['tmp/**/*.js','!app.js'],
                    dest: 'phonegap/www/app/libs',
                    ext: '.min.js'
                }]
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    flatten: true,

                    cwd: 'app/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'release/css',
                    ext: '.min.css'
                }]
            },
            phone: {
                files: [{
                    expand: true,
                    flatten: true,
                    cwd: 'app/',
                    src: ['**/*.css', '!*.min.css'],
                    dest: 'phonegap/www/app/css',
                    ext: '.min.css'
                }]
            }

        },

        copy: {
            phonegap: {
                files:[
                    {
                        expand: true,
                        flatten: true,
                        cwd: 'app/profiles/phone',
                        src: ['**/*.html','!index.html'],
                        dest: 'phonegap/www/app'
                    }
                ]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-usemin');


    grunt.registerTask("prepareModules", "Finds and prepares modules for concatenation.", function(src, dest) {

        // get all module directories
        grunt.file.expand(src).forEach(function (dir) {

            // get the module name from the directory name
            var dirName = dir.substr(dir.lastIndexOf('/')+1);

            // get the current concat object from initConfig
            var concat = grunt.config.get('concat') || {};

            // create a subtask for each module, find all src files
            // and combine into a single js file per module
            concat[dirName] = {
                src: [dir + '/**/*.js'],
                dest: dest + dirName + '.js'
            };

            // add module subtasks to the concat task in initConfig
            grunt.config.set('concat', concat);
        });
        grunt.task.run('concat');
    });

    // Tell Grunt what to do when we type "grunt" into the terminal
    grunt.registerTask('default', ['clean','prepareModules:app/bower_components/*:tmp/', 'concat:web', 'uglify:web']);
    grunt.registerTask('phonegap', ['clean','prepareModules:app/bower_components/*:tmp/','concat:phone', 'copy:phonegap','uglify:phone', 'cssmin:phone']);

};