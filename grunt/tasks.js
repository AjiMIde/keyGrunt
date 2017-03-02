/**
 * Created by Administrator on 2016/3/2.
 *
 * ## desc:
 * That is a list of grunt tasks
 * Include some tasks above
 *
 * ## list:
 * connect: 			sever connect include port,hostname
 * watch: 				watch sever,watch some file change and livereload
 * less:					compile .less file
 * uglify:				uglify your javascript .js to .mim.js ==> https://github.com/gruntjs/grunt-contrib-uglify
 *
 * ## How to use:
 * var ts = require('.path/to/tasks.js') // can omit .js
 */
module.exports = {
	// 服务器
	connect: {
		options: {
			port: 9000,
			open: true,
			livereload: 35729,
			// Change this to '0.0.0.0' to access the server from outside
			// hostname: 'aji.com'
			hostname: '127.0.0.1'
		},
		server: {//开启服务器模块，并进行监听
			options: {
				port: 9001,
				base: './'
			}
		}
	},

	// 监听服务
	watch: {
		scripts: {
			files: ['./scripts/**/*.js'],
			tasks: ['jshint']
		},
		/* sass: {
			files: ['./scss/style.scss'],
			tasks: ['sass']
		},*/
		less: {
			files: ['./less/**/*.less'],
			tasks: ['less:dev2']
		},
		livereload: {
			options: {
				livereload: '<%= connect.options.livereload %>'
			},
			files: ['index.html', './less/*', './scripts/*']
		}
	},

	// less 配置
	less: {
		options: {
			// paths: ['./less']
		},
		devXX: {
			src: './styles/less/style1.less',
			dest: './styles/css/style1.css'
		},
		dev: {
			files: [{
				expand: true,
				cwd: './less',    			//　指定基目录
				src: '**/*.less',				// all less files
				dest: './less',					// 输出位置
				ext: '.css',						// 输出的拓展名
				extDot: 'first'         // Extensions in file names begin after the first dot
			}]
		}
	},

	// sass 任务
	sass: {
		output : {
			options: {
				style: 'expanded'
			},
			files: {//将 .scss 文件编译成 .css 文件，注意，此时需要系统有 ruby 和  sass 环境
				'./scss/style.css': './scss/style.scss'
			}
		}
	},

	// css min 任务
	cssmin: {
		target: {
			files: [{
				expand: true,
				cwd: './less',
				src: ['*.css', '!*.min.css'],
				dest: './less/dist/',
				ext: '.min.css'
			}]
		}
	},

	// 压缩 javascript
	uglify: {
		options: {
			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> <%= pkg.author %> */\n'
		},
		doIt: {
			files: [{
				expand: true,
				cwd: './scripts/dist',
				src: '**/*.js',
				dest: './scripts/dist',
				ext: '.min.js',
				extDot: 'first'       // Extensions in file names begin after the first dot
			}]
		}
	},

	// 合并 js 任务
	concat: {
		options: {
			separator: '\r\n',
		},
		doIt: {
			src: ['./scripts/**/*.js'],
			dest: './scripts/dist/index.js',
		},
	},

	//jshint 语法检测
	jshint: {
		doIt: ['./scripts/**/*.js']
	},

}

