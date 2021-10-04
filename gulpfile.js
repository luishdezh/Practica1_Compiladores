const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const tsc = require('gulp-typescript');

gulp.task('styles',function(){
    return gulp.src('src/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/styles'));
});

gulp.task('scripts',function(){
    const configFile = tsc.createProject('tsconfig.json');
    return configFile.src()
        .pipe(configFile())
        .pipe(gulp.dest('assets/scripts'));
});

gulp.task('scripts:watch', gulp.series('scripts', function(done){
    gulp.watch('src/scripts/**/*.ts', gulp.series('scripts'));
    done();
}));

gulp.task('styles:watch', gulp.series('styles', function(done){
    gulp.watch('src/sass/**/*.scss', gulp.series('styles'));
    done();
}));

//gulp.task('serve',gulp.parallel('styles:watch','scripts:watch'));

gulp.task('serve', function(done){
    const tasks = gulp.parallel('styles:watch','scripts:watch');
    tasks();
    done();
});

gulp.task('default',gulp.parallel('styles','scripts', function(done){
    done();
}));