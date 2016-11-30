/* 载入插件 */
var gulp = require('gulp'),  //基础库
    less = require('gulp-less'),  //编译less插件
    cleancss = require('gulp-clean-css'),  //压缩css
    uglify = require('gulp-uglify'),  //压缩js
    concat = require('gulp-concat'),   //合并文件
    rename = require('gulp-rename'),  //重命名
    clean = require('gulp-clean');    //清空文件夹

/* 将node_modules目录中的文件对应到指定位置 */
gulp.task('buildLib',function(){
    gulp.src('./node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('./lib/js'));
});

/* less解析 */
gulp.task('build-less',function(){
    //编译less目录下的所有less文件，不包含子文件夹中的less文件
    gulp.src('./src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./src/css'));
});

/* 合并、压缩、重命名css */
gulp.task('stylesheets',['build-less'],function(){
    gulp.src(['./src/css/*.css','!./src/css/all.css','!./src/css/all.min.css'])
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./src/css/'))
        .pipe(rename({suffix : '.min'}))
        .pipe(cleancss())
        .pipe(gulp.dest('./src/css'))
});

/* 合并、压缩js文件 */
gulp.task('javascripts',function(){
    gulp.src(['./src/js/*.js','!./src/js/all.js','!./src/js/all.min.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./src/js'))
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./src/js'))
});

/* 清空目标文件夹 */
gulp.task('clean',function(){
    //read参数为false表示不读取文件的内容
    return gulp.src(['./dist/**/','./dist/**.**'],{read:false})
        .pipe(clean({force:true}));
});


/* 设置默认事件 */
gulp.task('default',['buildLib','build-less'],function(){
    console.log("gulp run");
});


//定义develop任务在开发中使用
gulp.task('develop',['buildLib','build-less'],function(){
    //监听less目录下的所有less文件，包含子文件夹中的less文件，当less文件改变则执行build-less
    gulp.watch('./src/less/**/*.less',['build-less']);
    console.log("developing");
});


//定义prod任务在发布或运行时使用
gulp.task('prod',['clean','buildLib','build-less','javascripts','stylesheets'],function(){
    console.log("project run");
});



