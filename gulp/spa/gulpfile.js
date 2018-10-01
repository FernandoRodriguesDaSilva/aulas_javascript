const gulp = require('gulp')
const util = require('gulp-util')
// processa de forma sequencial
const sequence = require('run-sequence')

// traz as aplicações
require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

// parte principal do gulp
gulp.task('default', () => {
    if(util.env.production){
      sequence('deps','app')
    } else {
       sequence('deps', 'app', 'servidor')
    }
})