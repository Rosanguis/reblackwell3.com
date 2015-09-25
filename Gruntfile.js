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
          'source/shared/html_partials/mid_build/shared-styles.min.css': 'source/shared/_shared-styles.scss'        }
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
    base64: {
      your_target: {
        // Target-specific file lists and/or options go here. 
        files: {
          'source/shared/html_partials/_mid-build/gold_headshot.b64': 'resources/images/brand/gold_headshot.jpg',
          'source/shared/html_partials/_mid-build/tech_tower.b64': 'resources/images/about/image-grid/tech_tower.jpg'
        }
      },
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
    findSrc: {
      src: ['source/*/*.html']
    },
    processhtml: {
      html_partials: {
        files: [{
          expand: true,
          cwd: './',
          src: ['source/*/html_partials/_mid-build/*.html'],
          dest: 'target/',
          ext: '.html',
          rename: function (dest, src) {
            console.log(src);
            var pathAfterSource = src.substr(src.indexOf('/') + 1);
            var folderName = pathAfterSource.slice(0, pathAfterSource.indexOf('/')+1);
            var fileName = src.substr(src.lastIndexOf('/'));
            return dest + folderName + fileName;
          }
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: './',
          src: ['source/*/*.html'],
          dest: 'target/',
          ext: '.html',
          rename: function (dest, src) {
            return dest + src.substr(src.indexOf('/'));
          }
        }]
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
          'source/shared/html_partials/_mid-build/foundation.min.js': ['bower_components/foundation/js/foundation/foundation.accordion.js', 'bower_components/foundation/js/foundation/foundation.equalizer.js', 'bower_components/foundation/js/foundation/foundation.topbar.js'],
          'source/shared/html_partials/_mid-build/modernizr.min.js': ['bower_components/foundation/js/vendor/modernizr.js'],
          'source/shared/html_partials/_mid-build/foundation_after-intro.min.js': ['source/shared/html_partials/mid_build/foundation.min.js', 'source/shared/after-intro.js'],
          // 'source/shared/html_partials/_mid-build/foundation_intro.min.js': ['source/shared/html_partials/mid_build/foundation.min.js', 'source/intro.js']
        }
      }
    },
    jsonKeyFileNameMap: {
      about: 'target/about.html',
      slides: 'target/slides.html',
      contact: 'target/contact-form.html'
    },
    base64HtmlFiles: ['source/shared/html_partials/html-header.html', 'source/shared/html_partials/top-bar.html', 'source/intro/first-slide-body.html']
  });
  // Load Grunt tasks declared in the package.json file
  require('matchdep')
    .filterDev('grunt-*')
    .forEach(grunt.loadNpmTasks);
  grunt.registerTask('inline-base64', function () {
    var files = grunt.config('base64HtmlFiles'),
      i;

    for (i = 0; i < files.length; i++) {
      var file = files[i];
      var html = grunt.file.read(file);
      var base64images = html.match('source.+_mid-build.+\.b64');
      var j;
      for (j = 0; j < base64images.length; j++) {
        var path = base64images[j];
        var base64 = 'data:image/jpg;base64,' + grunt.file.read(path);
        html = html.replace(path, base64);
      }
      var newFileName = file.slice(0, file.lastIndexOf('/')) + '/_mid-build' + file.substr(file.lastIndexOf('/'));
      grunt.file.write(newFileName, html);
    }

  });
  grunt.registerTask('build-json', function () {
    var project = grunt.file.readJSON('source/everything.json');
    var jsonKeyFileNameMap = grunt.config('jsonKeyFileNameMap');
    Object.keys(jsonKeyFileNameMap).forEach(function (jsonKey) {
      if (!grunt.file.exists(jsonKeyFileNameMap[jsonKey])) {
        grunt.log.error("file " + jsonKeyFileNameMap[jsonKey] + " not found");
        return true; //return false to abort the execution
      }
      project[jsonKey] = grunt.file.read(jsonKeyFileNameMap[jsonKey]);
    });
    grunt.file.write('target/everything.json', JSON.stringify(project, null, 2)); //serialize it back to file
  });
  grunt.registerTask('build', ['base64', 'sass', 'uglify', 'inline-base64', 'processhtml']);
  grunt.registerTask('server', ['express', 'open', 'watch']);
  grunt.registerTask('default', ['build', 'build-json', 'server']);
};
