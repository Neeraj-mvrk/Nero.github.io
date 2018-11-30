maverick.config(["$routeProvider","$locationProvider","$rootScopeProvider",function($routeProvider,$locationProvider,$rootScopeProvider){
	
	$routeProvider.when("/",{
		templateUrl:"index.html",
		controller:"portfolioController"
	})
	.otherwise({
		redirectTo:"/"
	})
	$locationProvider.html5Mode({
		enable:true
		// requireBase:false
	})
}])