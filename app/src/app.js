(function() {
  angular.module('csvReader', [
    'csvReader.directives',
    'csvReader.services',
    'csvReader.upload',
    'csvReader.query',
  ])
  .constant('AppSettings', {
    apiUrl: 'http://localhost:3000'
  })

})();
