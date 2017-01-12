grunt.initConfig({
  // ������concat�����������Ϣ��
  concat: {
    options: {
      // �������ã���ѡ��������󽫻�Ӧ�õ�����Ŀ�����棬��Ȼ��Ŀ����Ը�д�� options
    },
    foo: {
      // �����Ƕ������Ŀ�����һ����������ж����Ŀ��
      // ִ��ʱ grunt concat:foo ����� grunt concat ����������������������Ŀ��
      // concat task "foo" target options and files go here.

      // Grunt ��������ļ�����һ������ģ�files �� Grunt �Ĺؼ�
      // ���ģʽ
      src: ['src/a.js', 'src/b.js'],
      dest: 'dest/c.js',

      // �ļ�����ģʽ
      files: {
        'dest/c.js': ['src/a.js', 'src/b.js']
      },

      // �ļ������ʽ���ô��ǣ�������Ӷ��������
      files: [
        {src: ['src/a.js', 'src/b.js'], dest: 'dest/c.js', nonull: true, filter: 'isFile'}
      ],

      // �Զ�����˺�����ͨ������ƥ�����ļ�
      src: ['src/*'],
      filter: function (filepath) {
        return true/false
      },

      // ͨ���ģʽ�� `? �����ַ�`, `* �����ַ�`, `** �����������ַ������� / `, `{}  ����ʹ��һ�����ŷָ�ġ��򡱱��ʽ�б�`, `! ��ģʽ�Ŀ�ͷ�����ų�һ��ƥ��ģʽ��ƥ����κ��ļ�`
      src: 'foo/a*.js',                  // ƥ�� foo/ab.js foo/ac.js ��
      dest: 'xxx',
      src: 'foo/{a,b}*.js',              // ƥ�� foo/aaa.js  bbb.js ��
      src: ['foo/*.js'],                 //
      src: ['foo/**/*.js'],              //foo ������ js �ļ���������Ŀ¼�ļ�
      src: ['foot/*.js', '!foot/b.js'],  // ���� b.js ����������ļ�

      // ģ��Ҳ���������ļ�·������ƥ��ģʽ�У�
      src: ['src/<%= basename %>.js'],
      dest: 'build/<%= basename %>.min.js',

      // ����Ҳ���������������ж���������ļ��б�
      src: ['foo/*.js', '<%= jshint.all.src %>'],
      dest: ''



    },
    bar: {
      // concat task "bar" target options and files go here.
    },
  },

  // ������uglify�����������Ϣ
  uglify: {
  },

  // �������ݡ�
  my_property: 'whatever',
  my_src_files: ['foo/*.js', 'bar/*.js'],
});