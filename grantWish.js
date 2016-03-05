angular.module('bedazzled').directive('grantWish', function(){
	
	return {

		// scope: {
		// 	wish: '='
		// },

		template: `
			<ul>
				<li ng-repeat="wish in wishes">{{wish.wish}}
					<textarea ng-model="answer" placeholder="Your wish is granted, but..."></textarea>
					<button ng-click="addWishRef(answer, wish.$id); answer=''">Grant</button>
				</li>
			<ul>`
		, controller: function($firebaseArray, wishesService, $scope){
			var wishesRef = new Firebase('https://bedazzled.firebaseio.com/wishes')
			 $scope.wishes = $firebaseArray(wishesRef);

			 $scope.addWishRef = function(answer, id){
			 	wishesRef.child(id)
			 			.child('answer')
			 			.set(answer)
			 }

			 			//.set(value)
		}
	}
});