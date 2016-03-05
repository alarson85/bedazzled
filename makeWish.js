angular.module('bedazzled').directive('makeWish', function(){
	
	return {

		template: `
			<textarea ng-model="wish" placeholder="or, better yet, don't"></textarea>
			<div></div>
			<button ng-click="addWish(wish)">Make It</button>`
		, controller: function($scope, firebaseUrl, $firebaseArray){
			var wishesRef = new Firebase(firebaseUrl.ref + 'wishes');

			$scope.addWish = function(newWish){
				var newWishesRef = wishesRef.push({wish: newWish});
				$scope.wish = '';
			}
		}
	}
});