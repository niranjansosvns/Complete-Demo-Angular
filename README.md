# ng-arch

Grunt serve : To build and execute the entire application

## Build & development
grunt test: To execute the test case 
Note:  Please have a look in coverage folder and then click on html file to view coverage report
## Testing

Running `grunt test` will run the unit tests with karma.
## Need to install dependency for coverage report
npm install karma-jasmine --save-dev  
npm install karma-phantomjs-launcher --save-dev  
npm install karma-coverage --save-dev  

## changes to karma file 
// Located on line 49 on my local version of karma.conf.js
browsers: ['PhantomJS'],  
// Code coverage report
reporters: ['progress', 'coverage'],  
preprocessors: {  
  'app/scripts/**/*.js': ['coverage']
},
coverageReporter: {  
  type: 'html',
  dir: 'coverage'
},

// Don't forget to add 'karma-coverage' to your list of plugins
plugins: [  
  'karma-jasmine',
  'karma-coverage' // required for coverage
]