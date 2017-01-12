## ��װ

### �����밲װ

* �鿴node �汾��`node -v`
* �鿴 npm �汾��`npm -v`
* �������µ�npm��`npm update -g npm`
* ��װ Grunt �����У� `npm install -g grunt-cli`
* ����Ҫʹ�� grunt ���ļ�Ŀ¼��ִ�� `npm init` ��д�����Ŀ��Ϣ

### ���ز��

#### ����б�

* �ϲ��ļ���`grunt-contrib-concat`
* �﷨��飺`grunt-contrib-jshint`
* Scss ���룺`grunt-contrib-sass`
* ѹ���ļ���`grunt-contrib-uglify`
* �����ļ��䶯��`grunt-contrib-watch`
* �������ط�������`grunt-contrib-connect`

#### ��װ������

* `npm install grunt --save-dev`
>	��װ��֮�󣬻��� package.json?��ʾ��
>
>	"devDependencies": {
	  "grunt": "^1.0.1"
	}

* `npm install --save-dev grunt-contrib-concat grunt-contrib-jshint grunt-contrib-sass
grunt-contrib-uglify grunt-contrib-watch grunt-contrib-connect `

> ��װ�ɹ���Ŀ¼�ֶ��һ�� node_modules �ļ��У���ʮM������ǲ������Դ

* ��д gruntfile.js������д���´��룺
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
* ִ�� grunt ���grunt��������� gruntfile.js ����� task�� default��
```js
	grunt
	�� grunt taskname

```
> ������Ŀ��ֲ��
  ���ϴ���Ŀʱ�����Ժ��� node_modules �������ļ�Ŀ¼������Ҫ���ο���ʱ����ʹ�������������°�װ
  ����������ȡ package.json���Զ���װ�������
		`npm install`

### �����ȫ��

* �ϲ��ļ���`grunt-contrib-concat`
* �﷨��飺`grunt-contrib-jshint`
* Scss ���룺`grunt-contrib-sass`
* ѹ���ļ���`grunt-contrib-uglify`
* �����ļ��䶯��`grunt-contrib-watch`
* �������ط�������`grunt-contrib-connect`
* Less:`grunt-contrib-less`
