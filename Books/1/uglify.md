## uglify 压缩文件

```js
    // 任务配置
    // uglify 的配置查看：https://github.com/gruntjs/grunt-contrib-uglify
    uglify: {                     //执行插件 uglify 所需要的配置
      options: {                  //配置--在压缩时顺便填上些 banner 信息，其中 pkg 来自上面的引用 package.json.
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> <%= pkg.author %> */\n'//在文件开头显示一个 banner 注释
      },
      doIt: {                      // 任务：scripts 下面的 js 全部转化为 xx.min.js
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
```

