// Import the page-mod API
var pageMod = require('sdk/page-mod');
// Import the self API
var self = require('sdk/self');
 
// Create a page mod
pageMod.PageMod({
  'include': '*',
  'contentStyleFile': [
    self.data.url('src/inject/inject.css')
  ],
  'contentScriptFile': [
    self.data.url('src/inject/vendor/jquery.min.js'),
    self.data.url('src/inject/inject.js')
  ]
});