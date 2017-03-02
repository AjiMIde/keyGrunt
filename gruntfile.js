module.exports = function(grunt) {//配置 gruntjs 入口
  // 加载任务
  var ts = require('./grunt/tasks')

  // 加载-加载参数的函数
  var loadTasks = require('./grunt/loadTasks')
  //var loadTasks = function (tasks) {
  //  for (let item of tasks) {
  //    grunt.loadNpmTasks('grunt-contrib-' + item);
  //  }
  //}

  // 加载配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),     //读取 json 文件查看信息
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
    '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
    '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
    '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
    ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

    connect: ts.connect,
    concat: ts.concat,
    jshint: ts.jshint,
    less: ts.less,
    sass: ts.sass,
    cssmin: ts.cssmin,
    uglify: ts.uglify,
    watch: ts.watch
  });

  //加载插件
  loadTasks(grunt, ['cssmin', 'connect', 'concat', 'jshint', 'less', 'sass', 'uglify', 'watch'])

  // 注册任务
  grunt.registerTask('default', ['less:dev', 'concat', 'jshint','uglify','connect','watch']);
  grunt.registerTask('dev', ['jshint', 'less:dev', 'connect', 'watch' ]);
  grunt.registerTask('product', ['jshint', 'concat', 'uglify', 'less:dev', 'cssmin']);

  grunt.registerTask('test', ['cssmin']);

  // grunt.registerTask('default', ['uglify']);//将 uglify 任务注册到 default ，default为别名，执行命令：grunt时，优先会查找:gruntfile.js--default命令
  // grunt.registerTask('foo', 'My "foo" task.', function() {
    // Enqueue "bar" and "baz" tasks, to run after "foo" finishes, in-order.
    //grunt.task.run('bar', 'baz');
    // Or:
    //grunt.task.run(['bar', 'baz']);
  // });

};