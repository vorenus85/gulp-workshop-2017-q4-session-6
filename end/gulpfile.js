var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var fs = require('fs');

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