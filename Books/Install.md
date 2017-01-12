## 安装

### 下载与安装

* 查看node 版本：`node -v`
* 查看 npm 版本：`npm -v`
* 升级最新的npm：`npm update -g npm`
* 安装 Grunt 命令行： `npm install -g grunt-cli`
* 打开需要使用 grunt 的文件目录，执行 `npm init` 填写相关项目信息

### 下载插件

#### 插件列表

* 合并文件：`grunt-contrib-concat`
* 语法检查：`grunt-contrib-jshint`
* Scss 编译：`grunt-contrib-sass`
* 压缩文件：`grunt-contrib-uglify`
* 监听文件变动：`grunt-contrib-watch`
* 建立本地服务器：`grunt-contrib-connect`

#### 安装与配置

* `npm install grunt --save-dev`
>	安装完之后，会在 package.json 显示：
>
>	"devDependencies": {
	  "grunt": "^1.0.1"
	}

* `npm install --save-dev grunt-contrib-concat grunt-contrib-jshint grunt-contrib-sass
grunt-contrib-uglify grunt-contrib-watch grunt-contrib-connect `

> 安装成功后，目录又多出一个 node_modules 文件夹（几十M）这就是插件的来源

* 编写 gruntfile.js，并编写以下代码：
```js
	module.exports = function(grunt) {
		grunt.initConfig({
		  pkg: grunt.file.readJSON('package.json'),
		  uglify: {
		    options: {
		      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		    },
		    build: {
		      src: 'src/<%= pkg.name %>.js',
		      dest: 'build/<%= pkg.name %>.min.js'
		    }
		  }
		});
		grunt.loadNpmTasks('grunt-contrib-uglify');
		grunt.registerTask('default', ['uglify']);
	};
```
* 执行 grunt 命令（grunt命令会优先 gruntfile.js 下面的 task： default）
```js
	grunt
	或： grunt taskname

```
> 关于项目移植：
  当上传项目时，可以忽略 node_modules 这个插件文件目录，当需要二次开发时，可使用以下命令重新安装
  （该命令会读取 package.json并自动安装插件）：
		`npm install`

### 插件大全：

* 合并文件：`grunt-contrib-concat`
* 语法检查：`grunt-contrib-jshint`
* Scss 编译：`grunt-contrib-sass`
* 压缩文件：`grunt-contrib-uglify`
* 监听文件变动：`grunt-contrib-watch`
* 建立本地服务器：`grunt-contrib-connect`
* Less:`grunt-contrib-less`
