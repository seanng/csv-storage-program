/*jshint esversion: 6*/
(function() {

  angular.module('csvReader.services', [
  ])
  .factory('services', ($http, AppSettings)=>{

    const postToServer = (data) => {
      const url = AppSettings.apiUrl+'/api',
        request = { method: 'POST', url, data};

      $http(request)
      .then( succ => {
        console.log('post success.', succ);
      })
      .catch( fail => {
        console.error(fail);
      })
    }

    const parseToJson = text => {
      const json = Papa.parse(text, {
        header: true
      });
      console.log('json', json);

      postToServer(json)
    }

    const submitFile = file => {
      const reader = new FileReader;
      reader.readAsBinaryString(file);
      reader.onload = () => parseToJson(reader.result);
    }


    return {
      submitFile
    };
  });
})();
