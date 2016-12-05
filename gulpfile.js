var gulp = require('gulp'),  //基础库
    less = require('gulp-less'),  //编译less
    useref = require('gulp-useref'), //将html里引入的文件合并
    filter = require('gulp-filter'),  //过滤器
    csso = require('gulp-csso'),  //压缩css
    uglify = require('gulp-uglify'),  //压缩js
    rev = require('gulp-rev'),  //加md5后缀
    revReplace = require('gulp-rev-replace');  //替换引用的加了md5后缀的文件名

/* less编译 */
gulp.task('buildLess',function(){
    //编译less目录下的所有less文件，不包含子文件夹中的less文件
    gulp.src('./src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./src/css'));
});

/* 定义一个默认任务作为开发调试时使用 */
gulp.task('default',['buildLess'],function(){
    //监听less目录下的所有文件，包含子文件夹中的less文件，当less文件改变时执行buildLess
    gulp.watch('./src/less/**/*.less',['biuldLess']);
    console.log('develop module');
});

gulp.task('removeImage',function(){
    gulp.src('src/image/**/*')
        .pipe(gulp.dest('dist/image'));
})

/* 定义一个生产任务prod用于打包发布时使用 */
gulp.task('prod',['removeImage'],function(){
    var jsFilter = filter('**/*.js',{restore: true});
    var cssFilter = filter('**/*.css',{restore: true});
    var indexHtmlFilter = filter(['**/*', '!**/index.html'],{restore: true});

    return gulp.src('src/index.html')
        .pipe(useref())
        .pipe(jsFilter)
        .pipe(uglify())
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe(csso())
        .pipe(cssFilter.restore)
        .pipe(indexHtmlFilter)
        .pipe(rev())
        .pipe(indexHtmlFilter.restore)
        .pipe(revReplace())
        .pipe(gulp.dest('dist'));
});
