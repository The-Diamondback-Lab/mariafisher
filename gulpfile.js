// imports
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const path = require('path');

const DIRECTORY = `./src/app`

const DIRECTORIES = [
  `${DIRECTORY}/atoms/sass/`,
  `${DIRECTORY}/molecules/sass/`,
  `${DIRECTORY}/templates/sass/`,
  `${DIRECTORY}/templates/sass/`,
  `${DIRECTORY}/pages/sass/`
];


// compile sass
gulp.task('sass', () => {
  let output = ''

  return (
    gulp
      .src(DIRECTORIES)
      .pipe(sass({ includePaths: DIRECTORIES, outputStyle: 'expanded' }))
      .pipe(function (file, t) {
        let from_path = path.dirname(file.path)
        let to_path = `${path.dirname(file.path)}/`

        output = path.resolve(from_path, to_path, '../css')
        console.info(output)
      })
      .pipe(autoprefixer())
      .pipe(cssmin())
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest(output))
  )
})

// watch files
gulp.task('watch', () =>
  gulp.watch(DIRECTORIES).on('change', gulp.series('sass'))
)

gulp.task('default', gulp.series('sass', 'watch', done => done()))
