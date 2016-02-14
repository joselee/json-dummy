var gulp = require("gulp");
var del = require("del");
var concat = require("gulp-concat");
var less = require("gulp-less");
var ts = require("gulp-typescript");
var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");
var mainBowerFiles = require("main-bower-files");
var filter = require("gulp-filter");
var listFiles = require("gulp-filesize"); /* .pipe(listFiles()) to see files in stream*/

gulp.task("default", ["app"], function(){
	gulp.watch(["styles/**/*.less"], ["styles"]);
	gulp.watch(["scripts/**/*.ts"], ["scripts"]);
});

gulp.task("app", ["styles", "scripts"]);

gulp.task("styles", function(){
	del.sync("build/app.css");

	gulp.src(["styles/**/*.less"])
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(concat("app.css"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("build"));
});

gulp.task("scripts", function(){
	del.sync(["build/app.js"]);

	gulp.src(["scripts/**/*module.ts", "scripts/**/*.ts", "typings/*.d.ts"])
		.pipe(sourcemaps.init())
		.pipe(ts({sortOutput: true, target: "es5", module: "commonjs"}))
		.pipe(concat("app.js"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("build"));
});


gulp.task("libs", function(){
	del.sync(["build/libs.js", "build/libs.css"]);
	gulp.src(mainBowerFiles())
		.pipe(filter(["**/*.js"]))
		.pipe(concat("libs.js"))
		.pipe(gulp.dest("build"));

	gulp.src(mainBowerFiles())
		.pipe(filter(["**/*.less", "**/*.css"]))
		.pipe(concat("libs.css"))
		.pipe(gulp.dest("build"));
});