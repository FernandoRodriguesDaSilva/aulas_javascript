const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const uglifycass = require('gulp-uglifycss')
const concat = require('gulp-concat')
const phpMinify = require('@aquafadas/gulp-php-minify');

// task que vão ser executadas antes 
gulp.task('app', ['app.php', 'app.css', 'app.js', 'app.imgs'])

gulp.task('app.php', () => {
    // pasta de entrada
    return gulp.src('src/**/*.php')
        // tirar todos os espaço em branco que tem na página
        .pipe(phpMinify({ collapseWhitespace: true }))
        // pasta de saida
        .pipe(gulp.dest('build'))
})

gulp.task('app.css', () => {
// pasta de entrada
return gulp.src('src/assets/sass/index.scss')
// mostrar o erro no console
.pipe(sass().on('error', sass.logError))
// minificar o css
.pipe(uglifycass({"uglycomments": true}))
//concatenar todo css dentro de build/assets/css/app.min.css
.pipe(concat('app.min.css'))
// pasta de saída
.pipe(gulp.dest('build/assets/css'))
})

gulp.task('app.js', () => {
// pega qualquer javascript que estiver dentro desse caminho
return gulp.src('src/assets/js/**/*.js')
.pipe(babel({presets: ['env']}))
.pipe(uglify())
.pipe(concat('app.min.js'))
.pipe(gulp.dest('build/assets/js'))

})

gulp.task('app.imgs', () => {
// pega qualquer tipo de imagem dentro desse caminho
return gulp.src('src/assets/imgs/**/*.*')
// Envia as imagens para dentro desse caminho
.pipe(gulp.dest('build/assets/imgs'))
})