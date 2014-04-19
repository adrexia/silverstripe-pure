module.exports = function (grunt) {

// -- Config -------------------------------------------------------------------

grunt.initConfig({

    //Convert css to sass, and place in sass directory
    "sass-convert": {

        options: {
          indent: 4
        },

        files: {
            src: [
                'thirdparty/pure/build/*.css',
                '!thirdparty/pure/build/*-min.css',
                '!thirdparty/pure/build/*-context.css',
                '!thirdparty/pure/build/*-core.css',
                '!thirdparty/pure/build/*-nr.css',
                '!thirdparty/pure/build/pure.css'
            ],
            dest: 'sass/pure/_'
        }
    },

    sass_compile_imports: {
        custom_options: {
          options: {
            separator: ''
          },
          target: 'sass/pure/_all.scss',
          src: ['sass/pure/*','!sass/pure/_all.scss']
        }
    }
});

// -- Main Tasks ---------------------------------------------------------------

grunt.loadNpmTasks('grunt-sass-convert');
grunt.loadNpmTasks('grunt-sass-compile-imports');

grunt.registerTask('build', [
    'sass-convert',
    'sass_compile_imports'
]);


grunt.registerTask('watch', ['build']);



};
