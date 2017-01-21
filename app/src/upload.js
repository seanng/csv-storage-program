/* jshint esversion: 6 */
(function() {
  angular.module('csvReader.upload', [])
  .controller('UploadCtrl', UploadCtrl);

  function UploadCtrl ($scope, $rootScope) {

    let readerResult;

    $scope.selectFile = (evt) => {
      const file = evt.target.files[0],
            reader = new FileReader;
      reader.readAsBinaryString(file);
      reader.onload = () => readerResult = reader.result;
    }

    $scope.submitFile = () => {
      // upload(readerResult)
      // console.log('submitted!')
    }

  }



})();
