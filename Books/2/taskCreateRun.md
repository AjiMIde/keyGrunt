## 任务创建、运行

#### 运行任务

```js
> grunt         // 运行默认任务： grunt.registerTask('default', [])
> grunt concat  // 运行 concat 任务
> grunt concat:foo     // 运行 concat:foo 任务
```

#### 任务别名
> 当运行此 "任务别名" 时，在 taskList 中指定的每个任务都会按照其出现的顺序依次执行。<br>
> taskList参数必须时一个任务数组。

```js
//  grunt.registerTask(taskName, [description, ] taskList)
//
// 运行 grunt 时， jshint--qunit--concat--uglify 将会被依次运行
grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
//
// 运行 grunt dist 时， concat:dist--uglify:dist 将会被依次运行
grunt.registerTask('dist', ['concat:dist', 'uglify:dist']);
```

#### 多任务

```js
grunt.initConfig({
  log: {
    foo: [1, 2, 3],
    bar: 'hello world',
    baz: false
  }
});

grunt.registerMultiTask('log', 'Log stuff.', function() {
  grunt.log.writeln(this.target + ': ' + this.data);
});
```

#### 基本任务

```js
grunt.registerTask('foo', 'A sample task that logs stuff.', function(arg1, arg2) {
  if (arguments.length === 0) {
    grunt.log.writeln(this.name + ", no args");
  } else {
    grunt.log.writeln(this.name + ", " + arg1 + " " + arg2);
  }
});

> grunt foo:aaa:111  // : foo, aaa 111
> grunt foo          // : foo, no args
```

#### 自定义任务
> 请参考官方文档。
