(function (global) {
  System.config({
    paths: {
      'npm:': 'node_modules/',
    },
    map: {
      app: 'dist',
      angular: 'npm:angular',
      "@uirouter/angularjs": 'npm:@uirouter/angularjs/release',
      "angular-animate": "npm:angular-animate",
      "angular-sanitize": "npm:angular-sanitize"
    },
    packages: {
      app: {main: 'main', defaultExtension: 'js'},
      angular: {main: 'index', defaultExtension: 'js'},
      "@uirouter/angularjs": {main: 'angular-ui-router', defaultExtension: 'js'},
      "angular-animate": {main: 'angular-animate', defaultExtension: 'js'},
      "angular-sanitize": {main: 'angular-sanitize', defaultExtension: 'js'}
    },
  });
})(this);