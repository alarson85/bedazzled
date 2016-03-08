angular.module('bedazzled').directive('viewWishes', function(){

	return {

		template: `
			<div ng-repeat="wish in wishes">
				<ul>
					<li content="wish">Wish: {{wish.wish}}</li>
					<li content="answer">Granted: {{answer.answer}}</li>
				</ul>
			</div>` 
		, controller: function($firebaseArray, wishesService, $scope){
			
		}
	}
});