angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  // Your code here
  $scope.data = {};

  $scope.getLinks = function() {
    $http.get('/api/links')
    .then(function(response) {
      $scope.data.links = response.data;
    })
  };

  $scope.getLinks();
});
