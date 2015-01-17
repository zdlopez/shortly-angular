angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $http, $location, Links) {
  // Your code here
  $scope.link = {};
  //console.log($location);
  //$scope.link = $location
  angular.extend($scope, Links);

  $scope.addLink = function() {
    if(!$scope.isValidUrl($scope.shorten)){
      $scope.error = 'Please enter a valid url';
    } else {
      $scope.error = '';
      $scope.link.url = $scope.shorten;

      console.log($scope.shorten);
      $http.post('/api/links', $scope.link)
      .success(function() {
        $location.path('/');
      })
      console.log($scope.link)
    }
  }
});
