## concat 连接文件合并成一个文件

```js
    concat: {
      options: {                                    // 配置
        separator: ';\r\n',                         // 分隔符，合并文件之间的字符
      },
      doIt: {                                       // 任务
        src: ['./scripts/a.js', './scripts/b.js'],
        dest: './scripts/ab.js',
      },
    }
```

