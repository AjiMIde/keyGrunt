/**
 * Created by Administrator on 2016/3/2.
 *
 * ## desc:
 * Load the npm tasks of grunt
 *
 * ## How to use:
 * var loadTasks = require('./grunt/loadTasks')
 * loadTasks(grunt, ['less', ...])
 */
module.exports = function (grunt, tasks) {
	for (let item of tasks) {
		grunt.loadNpmTasks('grunt-contrib-' + item);
	}
}

