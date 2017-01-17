## jsHint 检查文件

```js
    jshint: {
      // define the files to lint
      files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
          // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    }
    或：
    jshint: {
      all: ['./scripts/a.js','./scripts/b.js','./scripts/ab.js']
    },
```

