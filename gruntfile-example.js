module.exports = function(grunt) {//配置 gruntjs 入口
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),     //读取 json 文件查看信息

    //任务配置
    //uglify 的配置查看：https://github.com/gruntjs/grunt-contrib-uglify
    uglify: {                     //执行插件 uglify 所需要的配置
      options: {                    //配置
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {                    //具体任务
        src: 'src/<%= pkg.name %>.js',        //来源
        dest: 'build/<%= pkg.name %>.min.js'      //目标
      }
    },
    
  });

  //加载此插件
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //注册任务
  grunt.registerTask('default', ['uglify']);//将 uglify 任务注册到 default ，default为别名，执行命令：grunt时，优先会查找:gruntfile.js--default命令
};