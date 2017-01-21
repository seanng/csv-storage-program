/* jshint esversion: 6 */
(function() {
  angular.module('csvReader.upload', [])
  .controller('UploadCtrl', UploadCtrl);

  function UploadCtrl ($scope, $rootScope, services) {
    let file;
    $scope.selectFile = (evt) => file = evt.target.files[0];
    $scope.submitFile = () => services.submitFile(file);

  }



})();
