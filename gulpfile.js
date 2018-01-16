const gulp = require("gulp");//加载gulp模块;
const connect = require("gulp-connect");//加载 gulp-connect 插件  连接服务器
const babel = require("gulp-babel");//加载gulp-babel 插件；es6编译
const sass = require("gulp-sass-china");//编译css


gulp.task("html",()=>{
	return gulp
				.src(["*.html"])
			 	.pipe(gulp.dest("dist"))
			 	.pipe(connect.reload());//自动刷新;
})

gulp.task("watch",()=>{
	gulp.watch(["scss/*.scss","*.html","src/libs/*.js", "src/main/*.js", "src/modular/*.js","es6/*.js"],["sass","html","script","es6"]);
})

gulp.task('server',function(){
    connect.server({
        root:'dist',  //以谁为服务器根目录
        port:8888,  // 端口号 
        livereload:true //开启自动刷新;
    })
})

gulp.task("script", () => {
	return gulp
		.src(["src/libs/*.js", "src/main/*.js", "src/modular/*.js"])
		.pipe(connect.reload())
		.pipe(gulp.dest("dist/scripts"))
})

gulp.task("sass",()=>{
	 return gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
})

gulp.task('es6',() =>{
	   return gulp.src('es6/*.js')
	        .pipe(babel({
	            presets: ['env']
	        }))
	        .pipe(gulp.dest('dist/scripts/'))
});

gulp.task("default",["watch","server"]);
