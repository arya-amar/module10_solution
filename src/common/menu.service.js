(function () {
/*"use strict";*/

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
   var userdata={};
   service.message2={msg:""};

  service.setMessage=function(amsg){
      service.message.msg=amsg;
  }

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


service.saveRegistration = function (data) {
    this.userdata=data;
  };
  service.getRegistration = function () {
    return this.userdata;
  };

  service.getMenuItems = function (category) {
    //apiPath='https://ychaikin-course5.herokuapp.com'
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

}



})();
