import gulp from 'gulp';
import autoprefixer from 'autoprefixer';
import browserSync from "browser-sync";

const $ = require('gulp-load-plugins')();


export function copyHTML(cb) {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dest'))
};

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


export function watch() {
    gulp.watch(["./src/**/*.html", "./src/**/*.ejs"], copyHTML)
    // gulp.watch(['./src/**/*.jade', './src/**/*.pug'], ['jade'])
    gulp.watch(
        ["./src/css/**/*.sass", "./src/css/**/*.scss"],
        sass
    )
    // gulp.watch("./src/javascripts/**/*.js")
    console.log("watching file ~")
}

export function ejs() {
    return  gulp.src(['./src/**/*.ejs', './src/ejs/**/*.html'])
      .pipe($.frontMatter())
      .pipe(
        $.layout((file) => {
          return file.frontMatter;
        }),
      )
      .pipe(gulp.dest('./dest/html'))
  }


exports.default = gulp.parallel(
    ejs,
    sass,
    browser,
    copyHTML,
    watch,
  )



