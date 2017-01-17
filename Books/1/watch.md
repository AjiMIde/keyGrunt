## watch 监听并执行任务

```js
    watch: {
      scripts: {            // 监听脚本
        files: ['./scripts/a.js', './script/b.js'],
        tasks: ['concat','jshint','uglify']
      },
      sass: {               // 监听 sass 文件
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
```
