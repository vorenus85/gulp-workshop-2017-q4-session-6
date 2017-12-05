# Handlebars task with gulp
Work to the <b>start</b> folder, the solutions are in the <b>end</b> folder

## 1. Npm init

type to terminal 
```$xslt
npm init
```

## 2. Declare packages
Declare 4 npm package in gulpfile.js
```
var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var fs = require('fs');
```

## 3. Install packages
Install 4 npm package

```
npm install gulp --save-dev
npm install gulp-compile-handlebars --save-dev
npm install gulp-rename --save-dev
npm install fs --save-dev
```

## 4. Write task

```
gulp.task('default', function () {
   var content = fs.readFileSync('src/templateData/product/templateData.json');
   var templateData = JSON.parse(content);

   var options = {
           batch : ['./src/templates/product/partials'],
           helpers : {
               capitals : function(str){
                   return str.toUpperCase();
               }
           }
       };
  
   return gulp.src('src/templates/product/product.hbs')
   .pipe(handlebars(templateData, options))
   .pipe(rename('product.html'))
   .pipe(gulp.dest('dist'));
});
```