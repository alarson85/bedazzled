angular.module('bedazzled')
.service('wishesService', function($http) {

		var url = 'https://bedazzled.firebaseio.com/';

		this.addWish = function( newWish ) {
			newWish.unanswered = true;
			this.wish.push( newWish);
		}
		this.getWishes = function() {
			return $http.get('https://bedazzled.firebaseio.com/wishes.json');
		}
});