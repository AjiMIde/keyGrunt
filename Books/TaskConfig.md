## 任务配置

#### Grunt 配置
> Task 配置都是在 `Gruntfile` 中的 `grunt.initConfig` 指定的，可以用编程的方式实现想要的功能，如下：
* 一个配置可以有多个任务
* 一个任务可以有多个目标（亦称子目标）
	*  当指定某个任务的某个目标时，则只执行此目标内的任务
	*  执行方式：grunt concat:foo
	*  当只指定这个任务时，则遍历执行所有目标
	*  执行方式：grunt concat
* 任务中可以使用“配置”选项，这个选项将会应用到所有目标下面，当然，目标可以覆写该 options

```js

grunt.initConfig({
  // 这里是concat任务的配置信息。
  concat: {
    options: {
      // 任务配置，可选。
    },
    foo: {
      // concat task "foo" target options and files go here.
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
```

#### Grunt 文件配置
> Grunt 都是针对文件进行一个处理的，files 是 Grunt 的关键<br>
> 有多种模式可以配置文件处理的路径等

```js

grunt.initConfig({
  concat: {
    options: {},
    foo: {
      //
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

      // 通配符模式： `? 单个字符`, `* 任意字符`, `** 任意数量的字符，包括 / `,
      // `{}  允许使用一个逗号分割的“或”表达式列表`, `! 在模式的开头用于排除一个匹配模式所匹配的任何文件`
      src: 'foo/a*.js',                  // 匹配 foo/ab.js foo/ac.js 等
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
    }
  }
});
```

#### Grunt 文件动态配置
> 处理大量的单个文件时，使用动态构建文件对象 <br>
> 这些属性都可以用于 `Compact` 和 `Files Array` 文件映射格式

```js
grunt.initConfig({
  uglify: {
    dynamic_mappings: {
      // Grunt 会查找 "lib/**/*.js" 下的所有 js 文件。当配置生效时
      files: [
        {
          expand: true,     // Enable dynamic expansion.允许动态拓展，此为必须
          cwd: 'lib/',      // Src 配置将以此为根目录！
          src: ['**/*.js'],
          dest: 'build/',
          ext: '.min.js',   // 目标文件的最终拓展名
          extDot: 'first'   // Extensions in filenames begin after the first dot
        },
      ],
    },
  },
});
```

#### Grunt 模板
> 使用模板 `<%= %>` 分隔符指定模板将会从配置中读取数据进行扩展，看代码即懂<br>
> 注！`grunt` `prop` 为全局对象和内部对象

```js
grunt.initConfig({
  concat: {
    sample: {
      options: {
        banner: '/* <%= ban %> */\n',   // '/* I am aji */\n'
      },
      src: ['<%= qux %>', 'baz/*.js']   // [['foo/*.js', 'bar/*.js'], 'baz/*.js']
    },
  },
  //用于任务配置模板的任意属性
  ban: 'I am aji',
  qux: ['foo/*.js', 'bar/*.js'],
});
```

#### Grunt 导入外部数据
> 通过 `grunt.file.readJSON('xxx.json')`, `grunt.file.readYAML` 两方法引入　JSON　及　YAML　数据进行引用　

```js
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  uglify: {
    options: {
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    dist: {
      src: 'src/<%= pkg.name %>.js',
      dest: 'dist/<%= pkg.name %>.min.js'
    }
  }
});
```

