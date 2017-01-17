module.exports = function(grunt) {//配置 gruntjs 入口
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),     //读取 json 文件查看信息

    // 任务配置
    // uglify 的配置查看：https://github.com/gruntjs/grunt-contrib-uglify
    uglify: {                     //执行插件 uglify 所需要的配置
      options: {                  //配置--在压缩时顺便填上些 banner 信息，其中 pkg 来自上面的引用 package.json.
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> <%= pkg.author %> */\n'//在文件开头显示一个 banner 注释
      },
      doIt: {
        files: [{
          expand: true,
          cwd: './scripts',
          src: '**/*.js',
          dest: './scripts',
          ext: '.min.js',       // 目标文件的最终拓展名
          extDot: 'first'       // Extensions in filenames begin after the first dot
        }]
      }
    },

    //sass 任务
    sass: {
      output : {
        options: {
          style: 'expanded'
        },
        files: {//将 .scss 文件编译成 .css 文件，注意，此时需要系统有 ruby 和  sass 环境
          './scss/style.css': './scss/style.scss'
        }
      }
    },

    //less任务
    less: {
      development: {
        options: {
          paths: ['./less']
        },
        files: {
          './less/style.css': './less/style.less'
        }
      }
    },

    //合并 js 任务
    concat: {
      options: {
        separator: ';\r\n',
      },
      doIt: {
        src: ['./scripts/a.js', './scripts/b.js'],
        dest: './scripts/ab.js',
      },
    },

    //jshint 语法检测
    jshint: {
      all: ['./scripts/a.js','./scripts/b.js','./scripts/ab.js']
    },

    //监听任务：监听脚本，当脚本发生变化时，执行 tasks，监听 sass 当sass发生变化时，执行 task
    watch: {
      scripts: {
        files: ['./scripts/a.js', './script/b.js'],
        tasks: ['concat','jshint','uglify']
      },
      sass: {
        files: ['./scss/style.scss'],
        tasks: ['sass']
      },
      livereload: {
          options: {
              livereload: '<%= connect.options.livereload %>'
          },
          files: [//当以下文件变化时，进行主动刷新
              'index.html',
              './scripts/ab.min.js',
              'style.css'
          ]
      }
    },

    //服务器任务
    connect: {
      options: {
          port: 9000,
          open: true,
          livereload: 35729,
          // Change this to '0.0.0.0' to access the server from outside
          //hostname: 'aji.com'
        hostname: '127.0.0.1'
      },
      server: {//开启服务器模块，并进行监听
        options: {
          port: 9001,
          base: './'
        }
      }
    }
  });

  //加载此插件
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  //注册任务
  grunt.registerTask('default', ['uglify']);//将 uglify 任务注册到 default ，default为别名，执行命令：grunt时，优先会查找:gruntfile.js--default命令

  grunt.registerTask('outputcss',['sass']);
  grunt.registerTask('outputless',['less']);
  grunt.registerTask('concatjs',['concat']);
  grunt.registerTask('compressjs',['concat','jshint','uglify']);
  grunt.registerTask('watchit',['concat','jshint','uglify','connect','watch']);


  grunt.registerTask('foo', 'My "foo" task.', function() {
    // Enqueue "bar" and "baz" tasks, to run after "foo" finishes, in-order.
    //grunt.task.run('bar', 'baz');
    // Or:
    //grunt.task.run(['bar', 'baz']);
  });




};