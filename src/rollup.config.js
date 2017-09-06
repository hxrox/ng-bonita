import resolve from 'rollup-plugin-node-resolve';

const globals = {
  '@angular/core': 'ng.core',
  '@angular/platform-browser': 'ng.platformBrowser',
  '@angular/common': 'ng.common',
  '@angular/http': 'ng.http',
  '@angular/router': 'ng.router',
  'rxjs/Observable': 'Rx',
  'rxjs/observable/ErrorObservable': 'Rx',
  'rxjs/add/operator/map': 'Rx.Observable',
  'rxjs/add/operator/catch': 'Rx.Observable',
  'rxjs/add/observable/throw': 'Rx.Observable',
};

export default {
  input: '../dist/index.js',
  output: { 
      file : '../dist/bundles/ng-bonita.umd.js',
      format: 'umd',
  }, 
  exports: 'named',
  name: 'zgwnu.ng-bonita',
  plugins: [resolve()],
  external: Object.keys(globals),
  globals: globals
};