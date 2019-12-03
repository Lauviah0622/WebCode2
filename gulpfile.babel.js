import gulp from 'gulp';
import autoprefixer from 'autoprefixer';
import browserSync from "browser-sync";

const $ = require('gulp-load-plugins')();

export function js() {
    return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./dest/js'))
}

export function delTemp() {
    return del(['./test/*', '!./test/*.js']);
};

export function sass() {
    const processors = [
        autoprefixer()
    ];

    return gulp
        .src(['./src/css/**/*.sass', './src/css/**/*.scss'])
        .pipe($.sourcemaps.init())
        .pipe(
            $.sass({
                outputStyle: "nested",
                includePaths: ["./src/css/_normalize.css"]
            }).on("error", $.sass.logError)
        )
        .pipe($.postcss(processors))
        // .pipe($.cleanCss())
        .pipe($.sourcemaps.write("."))
        .pipe(gulp.dest("./dest/css"))
}

export function browser() {
    browserSync.init({
        server: {
            baseDir: "dest",
            reloadDebounce: 2000
        },
        port: 3000,
        watch: true
    })
}

export function imgMinify () {
    return gulp
    .src(["./src/asset/**/*", "!./src/asset/*.mp4"])
    .pipe($.imagemin())
    .pipe(gulp.dest("./dest/asset"))
}

export function ejs() {
    return  gulp.src(['./src/**/*.ejs', './src/**/*.html', "!./src/HTMLbackup/*"])
      .pipe($.frontMatter())
      .pipe(
        $.layout((file) => {
          return file.frontMatter;
        }),
      )
      .pipe(gulp.dest('./dest'))
  }

export function watch() {
    gulp.watch(["./src/**/*.html", "!./src/HTMLbackup/*", "./src/**/*.ejs"], ejs)
    // gulp.watch(['./src/**/*.jade', './src/**/*.pug'], ['jade'])
    gulp.watch(
        ["./src/css/**/*.sass", "./src/css/**/*.scss"],
        sass
    )
    gulp.watch(['./src/js/*.js'], js)
    // gulp.watch("./src/javascripts/**/*.js")
    console.log("watching file ~")
}



exports.default = gulp.parallel(
    sass,
    ejs,
    browser,
    watch,
    js
  )



