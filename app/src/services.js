/*jshint esversion: 6*/
(function() {

  angular.module('csvReader.services', [
  ])
  .factory('services', ($http, AppSettings)=>{

    const postToServer = (data) => {

      const url = `${AppSettings.apiUrl}/api`,
        request = { method: 'POST', url, data};

      // $http.post(request).then( succ => {
      //   console.log('post success.', succ);
      // }, fail => {
      //   console.error(fail);
      // })

    }

    const submitFile = (file) => {
      const reader = new FileReader;
      reader.readAsBinaryString(file);
      reader.onload = () => postToServer(reader.result);
    }


    return {
      submitFile
    };
  });
})();
