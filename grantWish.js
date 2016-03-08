angular.module('bedazzled').directive('grantWish', function(){
	
	return {

		// scope: {
		// 	wish: '='
		// },

		template: `
			<div class="wish-input" ng-repeat="wish in wishes | filter:{grant:!false}">
				<ul>
					<li id="wish-input-font">{{wish.wish}}</li>
					<li><textarea class="answer-input" ng-model="answer" placeholder="Your wish is granted, but..."></textarea>
						<button ng-click="addWishRef(answer, wish.$id)">Grant</button>
					</li>
				<ul>
			</div>`
		, controller: function($firebaseArray, wishesService, $scope){
			var wishesRef = new Firebase('https://bedazzled.firebaseio.com/wishes')
			 $scope.wishes = $firebaseArray(wishesRef);
			 console.log('scope', $scope);

			 $scope.addWishRef = function(answer, id){
			 	wishesRef.child(id)
			 			// .child('answer')
			 			.set({answer:answer, grant:false, view:true})
			
			 }


			 			//.set(value)
		}
	}
});