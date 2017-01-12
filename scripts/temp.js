grunt.initConfig({
  // 这里是concat任务的配置信息。
  concat: {
    options: {
      // 任务配置，可选。这个对象将会应用到所有目标下面，当然，目标可以覆写该 options
    },
    foo: {
      // 这里是多任务的目标对象，一个任务可以有多个子目标
      // 执行时 grunt concat:foo ，如果 grunt concat ，则遍历这个任务下面所有目标
      // concat task "foo" target options and files go here.

      // Grunt 都是针对文件进行一个处理的，files 是 Grunt 的关键
      // 简洁模式
      src: ['src/a.js', 'src/b.js'],
      dest: 'dest/c.js',

      // 文件对象模式
      files: {
        'dest/c.js': ['src/a.js', 'src/b.js']
      },

      // 文件数组格式，好处是，可以添加额外的属性
      files: [
        {src: ['src/a.js', 'src/b.js'], dest: 'dest/c.js', nonull: true, filter: 'isFile'}
      ],

      // 自定义过滤函数，通过返回匹配获得文件
      src: ['src/*'],
      filter: function (filepath) {
        return true/false
      },

      // 通配符模式： `? 单个字符`, `* 任意字符`, `** 任意数量的字符，包括 / `, `{}  允许使用一个逗号分割的“或”表达式列表`, `! 在模式的开头用于排除一个匹配模式所匹配的任何文件`
      src: 'foo/a*.js',                  // 匹配 foo/ab.js foo/ac.js 等
      dest: 'xxx',
      src: 'foo/{a,b}*.js',              // 匹配 foo/aaa.js  bbb.js 等
      src: ['foo/*.js'],                 //
      src: ['foo/**/*.js'],              //foo 下所有 js 文件，包括子目录文件
      src: ['foot/*.js', '!foot/b.js'],  // 除了 b.js 以外的其他文件

      // 模板也可以用于文件路径或者匹配模式中：
      src: ['src/<%= basename %>.js'],
      dest: 'build/<%= basename %>.min.js',

      // 它们也可以引用在配置中定义的其他文件列表：
      src: ['foo/*.js', '<%= jshint.all.src %>'],
      dest: ''



    },
    bar: {
      // concat task "bar" target options and files go here.
    },
  },

  // 这里是uglify任务的配置信息
  uglify: {
  },

  // 任意数据。
  my_property: 'whatever',
  my_src_files: ['foo/*.js', 'bar/*.js'],
});