     MyApp.controller('MyCtrl',['Upload','$window','productService','toastr',function(Upload,$window,productService,toastr){
        var vm = this;
        //===================================
        // Get all Product ==================
        // ==================================
            vm.getFile = function(){
            productService.GetProduct().
            then(function success(res){
                console.log(res)
                vm.file =res.data
            }, function error(res){
                console.log(res)
            })
        }
        //===================================
        // upload Product ==================
        // ==================================

        vm.upload = function (file) {
            vm.detail ={
                productName:vm.productName,
                price:vm.price,
                file:vm.file
            }
           file.upload =  Upload.upload({
                url: 'http://localhost:3080/create', //webAPI exposed to upload the file
                data:vm.detail //pass file as data, should be user ng-model
            }).then(function success(res){
            toastr.success('Success ' + res.config.data.file.name + ' uploaded.');
            window.location = "#/";
            }, function error(res){
            toastr.eror('error occured');

            })
        };

    }]);