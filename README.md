## What is gulp-style-extract?

Gulp-style-extract is a Gulp version of [style-extract](https://github.com/anpsthemes/style-extract/), which is used for extracting only specific CSS properties and their selectors from CSS code

## Install

```
npm install gulp-style-extract
```

## Usage

``` javascript
var gulp = require('gulp'),
    extract = require('gulp-style-extract');

gulp.task('extract', function() {
    gulp.src('lib/style.css')
     .pipe(extract({
        properties: ['color', 'background-color']
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('default', ['extract']);
```

### Before

``` css
/* Foo */
.foo {
  background-color: #fff;
  color: #000;
  display: block;
  font-size: 12px;
}

/* Bar */
.bar {
  text-align: center;
}
```

### After
``` css
.foo {
  background-color: #fff;
  color: #000;
}
```

## Grunt version
The Grunt version can be found at [grunt-style-extract](https://www.npmjs.com/package/grunt-style-extract).

## Node version
The Node version can be found at [gulp-style-extract](https://www.npmjs.com/package/style-extract).

## License

[MIT](http://en.wikipedia.org/wiki/MIT_License)
