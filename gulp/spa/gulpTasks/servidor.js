// Importando as dependencias
const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('monitorarMudancas',() => {
    // monitorando arquivos .php
    watch('src/**/*.php', () => gulp.start('app.php'))
    // monitorando arquivos .css
    watch('src/**/*.scss', () => gulp.start('app.css'))
    // monitorando arquivos .js
    watch('src/**/*.js', () => gulp.start('app.js'))
    // monitorando imagem 
    watch('scr/assets/imgs/**/*.*', () => gulp.start('app.imgs'))
})

gulp.task('servidor', ['monitorarMudancas'], () => {
    // vai ficar monitorando a pasta build
    return gulp.src('build')
    .pipe(webserver({liveredload: true, port:8000, open: true}))
})