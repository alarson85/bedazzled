angular.module('bedazzled').directive('makeWish', function(){
	
	return {

		template: `
			<div class="wish-input-wrapper">
				<input class="wish-input" ng-model="wish" placeholder="I wish for ... a sandwich">
				<p class="wish-input-button" ng-click="addWish(wish)">Make It</p>
			</div>`
		, controller: function($scope, firebaseUrl, $firebaseArray){
			var wishesRef = new Firebase(firebaseUrl.ref + 'wishes');

			$scope.addWish = function(newWish){
				var newWishesRef = wishesRef.push({wish: newWish});
				$scope.wish = '';
			}
		}
	}
});