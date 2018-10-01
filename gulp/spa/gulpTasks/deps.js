const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('deps', ['deps.css', 'deps.fonts'])

gulp.task('deps.css', () => {
    // selecionando para atribuir os pipe pra transformar
    return gulp.src(['node_modules/font-awesome/css/font-awesome.min.css'])

        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('deps.min.css'))

        // copiar pra pastas de destino
        .pipe(gulp.dest('build/assets/css'))
})

gulp.task('deps.fonts', () => {
    return gulp.src(['node_modules/font-awesome/fonts/*.*'])
        .pipe(gulp.dest('build/assets/fonts'))

})