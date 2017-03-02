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
	// ������
	connect: {
		options: {
			port: 9000,
			open: true,
			livereload: 35729,
			// Change this to '0.0.0.0' to access the server from outside
			// hostname: 'aji.com'
			hostname: '127.0.0.1'
		},
		server: {//����������ģ�飬�����м���
			options: {
				port: 9001,
				base: './'
			}
		}
	},

	// ��������
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

	// less ����
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
				cwd: './less',    			//��ָ����Ŀ¼
				src: '**/*.less',				// all less files
				dest: './less',					// ���λ��
				ext: '.css',						// �������չ��
				extDot: 'first'         // Extensions in file names begin after the first dot
			}]
		}
	},

	// sass ����
	sass: {
		output : {
			options: {
				style: 'expanded'
			},
			files: {//�� .scss �ļ������ .css �ļ���ע�⣬��ʱ��Ҫϵͳ�� ruby ��  sass ����
				'./scss/style.css': './scss/style.scss'
			}
		}
	},

	// css min ����
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

	// ѹ�� javascript
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

	// �ϲ� js ����
	concat: {
		options: {
			separator: '\r\n',
		},
		doIt: {
			src: ['./scripts/**/*.js'],
			dest: './scripts/dist/index.js',
		},
	},

	//jshint �﷨���
	jshint: {
		doIt: ['./scripts/**/*.js']
	},

}

