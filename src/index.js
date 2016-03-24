/**
 * This file is part of gulp-flow-js.
 *
 * (c) Nicolas Tallefourtane <dev@nicolab.net>
 *
 * For the full copyright and license information, please view the LICENSE file
 * distributed with this source code
 * or visit https://github.com/gulp-flow/gulp-flow.
 */

'use strict';

let flow = require('gulp-flow');
let {cfg, gp, pipes, utils} = flow;

// Gulp plugins
gp.uglify = require('gulp-uglify');

if (!cfg.js) {
  cfg.js = {};
}

cfg.js.jsMin = {
  mangle : false, 
  mangleProperties: false
};

// pipes
pipes.jsMin = utils.lazypipe()
  .pipe(function() {
    return gp.uglify(cfg.js.jsMin);
  })
  .pipe(gp.header, cfg.banner)
;
