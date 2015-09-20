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
                    'src/css/robert3blackwell.min.css': 'src/scss/robert3blackwell.scss'
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
            livereload: {
                files: 'target/index.html',
                options: {
                    livereload: true
                }
            },
            sass: {
                files: 'src/scss/robert3blackwell.scss',
                tasks: ['sass']
            },
            uglify: {
                files: 'src/js/robert3blackwell.js',
                tasks: ['uglify']
            },
            processhtml: {
                files: 'src/**',
                tasks: ['processhtml']
            }
        },
        // grunt-open will open your browser at the project's URL
        open: {
            all: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= express.all.options.port%>/target/index.html'
            }
        },
        uncss: {
            dist: {
                options: {
                    ignore: ['#added_at_runtime', '.created_by_jQuery']
                },
                files: {
                    'src/css/uncss.css': 'src/index.html'
                }
            }
        },
        processhtml: {
            dist: {
                files: {
                    'target/index.html': ['src/index.html']
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'src/js/foundation_robert3blackwell.min.js': ['src/js/foundation/foundation.accordion.js', 'src/js/foundation/foundation.equalizer.js', 'src/js/foundation/foundation.topbar.js', 'src/js/robert3blackwell.js'],
                    'src/js/foundation/modernizr.min.js': ['src/js/foundation/modernizr.js']
                }
            }
        }
    });
    // Load Grunt tasks declared in the package.json file
    require('matchdep')
        .filterDev('grunt-*')
        .forEach(grunt.loadNpmTasks);
    grunt.registerTask('build', ['sass', 'uglify', 'processhtml']);
    grunt.registerTask('server', ['express', 'open', 'watch']);
    grunt.registerTask('default', ['build', 'server']);
};
