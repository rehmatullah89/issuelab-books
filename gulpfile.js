var elixir          = require('laravel-elixir'),
    config          = elixir.config,
    gulp            = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    $               = gulpLoadPlugins(),
    gutils          = require('gulp-util'),
    _               = require('lodash')
;

// Extensions for elixir
require('laravel-elixir-sass-compass');
require('laravel-elixir-behat');
require('laravel-elixir-browser-sync');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

config.bootstrapJs = [
    config.assetsDir+'vendor/bootstrap-sass-official/assets/javascripts/bootstrap/transition.js',
    config.assetsDir+'vendor/bootstrap-sass-official/assets/javascripts/bootstrap/modal.js',
    config.assetsDir+'vendor/bootstrap-sass-official/assets/javascripts/bootstrap/dropdown.js',
    // config.assetsDir+'vendor/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy.js',
    // config.assetsDir+'vendor/bootstrap-sass-official/assets/javascripts/bootstrap/tab.js',
    // config.assetsDir+'vendor/bootstrap-sass-official/assets/javascripts/bootstrap/tooltip.js',
    // config.assetsDir+'vendor/bootstrap-sass-official/assets/javascripts/bootstrap/popover.js',
    config.assetsDir+'vendor/bootstrap-sass-official/assets/javascripts/bootstrap/alert.js',
    // config.assetsDir+'vendor/bootstrap-sass-official/assets/javascripts/bootstrap/button.js',
    config.assetsDir+'vendor/bootstrap-sass-official/assets/javascripts/bootstrap/collapse.js',
    // config.assetsDir+'vendor/bootstrap-sass-official/assets/javascripts/bootstrap/carousel.js',
    config.assetsDir+'vendor/bootstrap-sass-official/assets/javascripts/bootstrap/affix.js'
];

config.tdd = !! gutils.env.tdd
config.deploy = !! gutils.env.deploy

/*
 |--------------------------------------------------------------------------
 | Custom gulp tasks
 |--------------------------------------------------------------------------
 |
 | Call from within `elixir` function to add to default gulp task
 | i.e. `mix.task('mytask')`
 */

gulp.task('modernizr', function() {
    return gulp
        .src('./public/js/bundle.js')
        .pipe($.modernizr({
            tests: [
                'history',
                'mutationobserver',
            ]
        }))
        .pipe(gulp.dest('./public/js'))
    ;
});

gulp.task('deploy', function() {
    return gulp
        .src('', {read: false})
        .pipe($.shell([
            'scp -r public/build issuelab:/home/issuelab/www/www/public/',
            'git push beanstalk master'
        ]))
    ;
});

elixir(function(mix) {
    // Run in production mode if deploying
    if (config.deploy) {
        config.production = true;
    }

    // Assets
    mix.compass();
    mix.copy(config.assetsDir+'vendor/fonts/bootstrap/**', 'public/fonts');

    // Build custom bootstrap js
    mix.scripts(
        config.bootstrapJs,
        './resources/assets/vendor/bootstrap-sass-official/assets/javascripts/bootstrap.custom.js',
        './'
    );
    mix.browserify('main.js');
    mix.task('modernizr');
    mix.version(['css/main.css', 'js/bundle.js', 'js/modernizr.js']);

    //  Tasks we only need to do locally
    if (!config.production) {
        // Remove version from watchers, since we only need to run this during build of production files
        delete config.watchers.default.version;

        // Testing
        mix.behat('./features', {}, ['./features/**/*.php', 'resources/views/**/*.php']);
        mix.phpSpec();
        mix.phpUnit();

        if (config.tdd) {
            // Add './app/**/*.php' as a watched path on all test tasks, since `gulp watch` doesn't watch this path by default
            _.each(config.watchers.tdd, function(n, key){
                var paths = config.watchers.tdd[key];
                if ('string' === typeof(paths)) { paths = paths.split(); }
                paths.push('./app/**/*.php');
                config.watchers.tdd[key] = paths;
            });

            // Run all tdd tasks on `gulp watch`
            _.extend(config.watchers.default, config.watchers.tdd);
        }

        mix.browserSync(null, {
          proxy: 'www.issuelab.dev',
          notify: true,
          open: false
        });
    }

    if (config.deploy) {
        mix.task('deploy');
    }
});
