/**
 *
 *
 */
/**
 * Created by Administrator on 2016/3/2.
 *
 * ## desc:
 * Load the npm tasks of grunt
 *
 * ## How to use:
 * var loadTasks = require('./grunt/loadTasks')
 * loadTasks(grunt, ['less', ...], true/false)
 *
 * @param grunt     the grunt object
 * @param tasks     the tasks array
 * @param contrib   if add the perfix 'grunt-contrib' ?
 */
module.exports = function (grunt, tasks, contrib = true) {
	if (contrib) {
		for (let item of tasks) {
			grunt.loadNpmTasks('grunt-contrib-' + item);
		}
	} else {
		for (let item of tasks) {
			grunt.loadNpmTasks(item);
		}
	}
}

