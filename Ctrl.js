angular.module('bedazzled')
.controller('ctrl', function($scope, firebaseUrl, $firebaseArray) {

	var wishesRef = new Firebase(firebaseUrl.ref + 'wishes');

	$scope.wishes = $firebaseArray(wishesRef);

	
});