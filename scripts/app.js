angular.module('wpp', ['wasabi'])

.controller('DemoCtrl', ['$scope', function($scope) {
  $scope.items = [
    {value:'foo'},
    {value:'bar'},
    {value:'totu'},
    {value:'baz'},
    {value:'qux'},
    {value:'toto'}
  ];
}]);