//======================================
// Product Service =====================
//======================================

MyApp.service('productService', ['$http',function($http){

// var AddProduct = function(data){
//     return $http.post('/product/add', data)
// }
var GetProduct = function(){
    return $http.get('/product/all')
}

return{
    // AddProduct:AddProduct,
    GetProduct:GetProduct
}
}])