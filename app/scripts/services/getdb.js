'use strict';

/**
 * @ngdoc service
 * @name wsApp.getDb
 * @description
 * # getDb
 * Factory in the wsApp.
 */
angular.module('wsApp')
    .factory('getDb', ['$http',function ($http) {
        var params = {'isDeveloper':false,'langid':1,'db':21,'VideoItem':-1};
        return $http.post ('http://playmaker-demos.cloudapp.net/zoomin/ZoomInService.svc/ZoomInJson/GetDatabase',params);
    }]);