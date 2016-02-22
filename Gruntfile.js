module.exports = function(grunt) {

	// CONFIGURATION
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// https://github.com/gruntjs/grunt-contrib-concat
		concat: {
			nm_js: {
				// What are included (as default)?
				// jquery 2.2+; We all know what that is..
				// parallaxy; Creates a parallaxy effect on images. Great for cinematic images.
				// instafeed.js; Easy to set up a instagram feed.
				src: ['node_modules/jquery/dist/jquery.min.js', 'node_modules/parallaxy/dist/parallaxy.min.js', 'node_modules/instafeed.js/instafeed.min.js', 'node_modules/animatewheninview/dist/animatewheninview.min.js'],
				dest: 'dependencies/all.js',
			},
			nm_css: {
				src: ['node_modules/parallaxy/dist/parallaxy.min.css', 'node_modules/animatewheninview/dist/animatewheninview.min.css'],
				dest: 'css/dependencies.css'
			},
			js: {
				src: ['dependencies/all.js', 'js/*.js'],
				dest: 'dist/campaign.js'
			}
		},

		// https://github.com/gruntjs/grunt-contrib-uglify
		uglify: {
			dist: {
				files: {
					'dist/campaign.min.js': ['dist/campaign.js']
				}
			}
		},

		// Minify CSS
		// https://github.com/gruntjs/grunt-contrib-cssmin
		cssmin: {
			dist: {
				files: {
					'dist/campaign.min.css': ['css/dependencies.css', 'css/campaign.css']
				}
			}
		},

		sass: {
			app: {
				files: {
					'css/campaign.css': 'sass/modules.scss'
				}
			},
			options: {
				sourceMap: true
			}
		},

		// http://www.browsersync.io/docs/grunt/
		browserSync: {
			bsFiles: {
				src : [
					'./dist/campaign.min.js',
					'./dist/campaign.min.css',
				]
			},
			options: {
				watchTask: true,
				server: {
					baseDir: "./"
				}
			},
		},

		// https://github.com/gruntjs/grunt-contrib-watch
		watch: {
			demo: {
				files: [
					'js/**.js',
					'sass/**.scss'
				],
				tasks: ['concat:js', 'uglify', 'sass', 'cssmin']
			}
        },
	});

	// Load plugins
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-notify');

	// Task to run when doing 'grunt' in terminal.
	grunt.registerTask('default', [
		'concat:nm_js', // concat node_modules js files
		'concat:nm_css', // concat node_modules css files
		'concat:js',
		'uglify',
		'sass',
		'cssmin',
		'browserSync',
		'watch'
	]);
};
