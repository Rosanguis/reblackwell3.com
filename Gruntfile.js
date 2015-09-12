module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                includePaths: ['bower_components/foundation/scss']
            },
            dist: {
                options: {
                    outputStyle: 'compressed',
                    sourceMap: true
                },
                files: {
                    'css/app.css': 'scss/app.scss'
                }
            }
        },
        // grunt-express will serve the files from the folders listed in `bases`
        // on specified `port` and `hostname`
        express: {
            all: {
                options: {
                    port: 9000,
                    hostname: '0.0.0.0',
                    bases: ['C:\\Users\\HP\\Desktop\\robert3blackwell.com'], // Replace with the directory you want the files served from
                    // Make sure you don't use `.` or `..` in the path as Express
                    // is likely to return 403 Forbidden responses if you do
                    // http://stackoverflow.com/questions/14594121/express-res-sendfile-throwing-forbidden-error
                    livereload: true
                }
            }
        },
        watch: {
            grunt: {
                options: {
                    reload: true
                },
                files: ['Gruntfile.js']
            },
            sass: {
                files: 'scss/**/*.scss',
                tasks: ['sass']
            },
            all: {
                files: 'processed-index.html',
                options: {
                    livereload: true
                }
            },
            processhtml: {
                files: ['index.html', 'html/**.html'],
                tasks: ['processhtml']
            }
        },
        // grunt-open will open your browser at the project's URL
        open: {
            all: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= express.all.options.port%>/processed-index.html'
            }
        },
        uncss: {
            dist: {
                options: {
                    ignore: ['#added_at_runtime', '.created_by_jQuery']
                },
                files: {
                    'css/uncss.css': 'index.html'
                }
            }
        },
        processhtml: {
            dist: {
                files: {
                    'processed-index.html': ['index.html']
                }
            }
        }
    });
    // Load Grunt tasks declared in the package.json file
    require('matchdep')
        .filterDev('grunt-*')
        .forEach(grunt.loadNpmTasks);
    grunt.registerTask('build', ['sass', 'processhtml']);
    grunt.registerTask('server', ['express', 'open', 'watch']);
    grunt.registerTask('default', ['build', 'server']);
};
