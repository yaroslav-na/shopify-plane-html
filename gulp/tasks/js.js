import gulp from 'gulp';
import webpackStream from 'webpack-stream';

import { path } from '../config/path.js';
import { plugins } from '../config/plugins.js';

export function js() {
  return gulp
    .src(path.src.js, { sourcemaps: true })
    .pipe(
      plugins.plumber(
        plugins.notify.onError({
          title: 'JS',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(
      webpackStream({
        mode: 'development',
        output: { filename: 'app.min.js' },
      })
    )
    .pipe(gulp.dest(path.build.js))
    .pipe(plugins.browserSync.stream());
}
