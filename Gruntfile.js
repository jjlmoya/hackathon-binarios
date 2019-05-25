module.exports = function (grunt) {
    const webpackConfig = require('./webpack.config.js'),
        jsComponents = "script/**/*.js",
        tasks = ['jshint', 'clean', 'copy', 'sass', 'postcss', 'cssmin'],
        tasksWatch = ['jshint', 'clean', 'copy', 'sass', 'postcss', 'cssmin', 'watch'],
        scssPath = 'style/index.scss';

    grunt.initConfig({
        jshint: {
            files: [jsComponents],
            options: {
                'esversion': 6,
                globals: {
                    handlebars: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'sass']
        },
        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {'www/public/css/index.css': scssPath}

            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'www/public/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'www/public/css',
                    ext: '.min.css'
                }]
            }
        },
        copy: {
            main: {
                files: [
                    {
                        cwd: './assets/',  // set working folder / root to copy
                        src: '*/**',           // copy all files and subfolders
                        dest: 'www/public',    // destination folder
                        expand: true
                    },
                ],
            },
        },
        clean: ['www/public/css'],
        watch: {
            scripts: {
                files: ['script/**/*',
                    'html/**/*',
                    'style/**/*'],
                tasks: tasks,
                options: {
                    spawn: false,
                },
            },
        },
        postcss: {
            options: {
                map: {
                    inline: false,
                    annotation: 'www/public/css/'
                },
                processors: [
                    require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                ]
            },
            dist: {
                src: 'www/public/css/*.css'
            },
        },
        webpack: {
            options: {
                stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
            },
            prod: webpackConfig,
            dev: Object.assign({watch: true}, webpackConfig)
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('default', tasks);
    grunt.registerTask('auto', tasksWatch);

};