angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $http, $location, Links) {
  // Your code here
  $scope.link = {};
  //console.log($location);
  //$scope.link = $location
  angular.extend($scope, Links);

  $scope.addLink = function() {
    $scope.link.url = $scope.shorten;
    console.log($scope.shorten);
    $http.post({
      url: '/api/links',
      data: $scope.shorten
    });
  };
});
