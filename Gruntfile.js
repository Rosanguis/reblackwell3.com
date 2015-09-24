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
          'source/mid_build/index.min.css': 'source/index.scss',
          'source/mid_build/intro.min.css': 'source/intro.scss'
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
        files: 'target/**',
        options: {
          livereload: true
        }
      },
      sass: {
        files: 'source/**.scss',
        tasks: ['sass']
      },
      uglify: {
        files: 'source/**.js',
        tasks: ['uglify']
      },
      processhtml: {
        options: {
          strip: true
        },
        files: 'source/**',
        tasks: ['processhtml']
      }
    },
    // grunt-open will open your browser at the project's URL
    open: {
      index: {
        // Gets the port from the connect configuration
        path: 'http://localhost:<%= express.all.options.port%>/target/index.html'
      },
      intro: {
        path: 'http://localhost:<%= express.all.options.port%>/target/intro.html'
      }
    },
    processhtml: {
      dist: {
        files: {
          'target/index.html': ['source/index.html'],
          'target/intro.html': ['source/intro.html']
        }
      }
    },
    uglify: {
      my_target: {
        options: {
          preserveComments: false,
          compress: true,
          mangle: true,

        },
        files: {
          'source/mid_build/foundation.min.js': ['bower_components/foundation/js/foundation/foundation.accordion.js', 'bower_components/foundation/js/foundation/foundation.equalizer.js', 'bower_components/foundation/js/foundation/foundation.topbar.js'],
          'source/mid_build/modernizr.min.js': ['bower_components/foundation/js/vendor/modernizr.js'],
          'source/mid_build/foundation_index.min.js': ['source/mid_build/foundation.min.js', 'source/index.js'],
          'source/mid_build/foundation_intro.min.js': ['source/mid_build/foundation.min.js', 'source/intro.js']
        }
      }
    },
    jsonKeyFileNameMap: {
      about: 'target/about.html',
      slides: 'target/slides.html',
      contact: 'target/contact-form.html'
    }
  });
  // Load Grunt tasks declared in the package.json file
  require('matchdep')
    .filterDev('grunt-*')
    .forEach(grunt.loadNpmTasks);
  grunt.registerTask('build-json', function () {
    var project = grunt.file.readJSON('source/everything.json');
    var jsonKeyFileNameMap = grunt.config('jsonKeyFileNameMap');
    console.log(project, jsonKeyFileNameMap);
    Object.keys(jsonKeyFileNameMap).forEach(function (jsonKey) {
      if (!grunt.file.exists(jsonKeyFileNameMap[jsonKey])) {
        grunt.log.error("file " + jsonKeyFileNameMap[jsonKey] + " not found");
        return true; //return false to abort the execution
      }
      project[jsonKey] = grunt.file.read(jsonKeyFileNameMap[jsonKey]);
    });
    grunt.file.write('target/everything.json', JSON.stringify(project, null, 2)); //serialize it back to file
  });
  grunt.registerTask('build', ['sass', 'uglify', 'processhtml']);
  grunt.registerTask('server', ['express', 'open', 'watch']);
  grunt.registerTask('default', ['build', 'build-json', 'server']);
};
