MyApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'../views/home.html',
        // controller: 'HomeCtrl',
    })
    .when('/add-product',{
            templateUrl:'../views/product_add.html',
            // controller: 'MyCtrl',
    })
}])