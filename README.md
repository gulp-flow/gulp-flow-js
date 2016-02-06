# gulp-flow-js

JS bundle for [gulp-flow](https://github.com/gulp-flow/gulp-flow).

See also [gulp-flow-webpack](https://github.com/gulp-flow/gulp-flow-webpack).


## Requirements

 * [gulp-flow](https://github.com/gulp-flow/gulp-flow) must be installed.


## Install

```sh
npm install --save-dev gulp-flow-js
```


## Usage

A simple example:

_gulpfile.js_
```js
let gulp = require('gulp');
let flow = require('gulp-flow');
let {cfg, pipes} = flow;

// load (custom) webpack bundle
require('gulp-flow-js');


gulp.task('build.js', function() {
  return gulp.src('src/**/*.js')
    .pipe(pipes.jsMin())
    .pipe(gulp.dest(cfg.publicJsDir))
  ;
});
```

And run your task: `gulp build.js`


## LICENSE

[MIT](https://github.com/gulp-flow/gulp-flow-js/blob/master/LICENSE) (c) 2016, Nicolas Tallefourtane.


## Author

| [![Nicolas Tallefourtane - Nicolab.net](http://www.gravatar.com/avatar/d7dd0f4769f3aa48a3ecb308f0b457fc?s=64)](http://nicolab.net) |
|---|
| [Nicolas Talle](http://nicolab.net) |
| [![Make a donation via Paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PGRH4ZXP36GUC) |