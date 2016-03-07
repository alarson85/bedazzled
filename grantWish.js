angular.module('bedazzled').directive('grantWish', function(){
	
	return {

		// scope: {
		// 	wish: '='
		// },

		template: `
			<div class="wish-input" ng-repeat="wish in wishes">
				<ul>
					<li id="wish-input-font">{{wish.wish}}</li>
					<li><textarea class-"answer-input" ng-model="answer" placeholder="Your wish is granted, but..."></textarea>
						<button class="answer-button" ng-click="addWishRef(answer, wish.$id); answer=''">Grant</button>
					</li>
				<ul>
			</div>`
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