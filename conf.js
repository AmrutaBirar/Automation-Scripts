exports.config = {
    directConnect: true,
    capabilites:{
        'browserName':'chrome'},
    framework: 'jasmine2',
    specs: ['testTethr.js'],
    
    //Jasmine Test Logging
    onPrepare: function(){
        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
      }
};