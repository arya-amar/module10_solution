(function() { //iife 

angular.
  module('public').     
    
    controller("formcontroller", ['$scope','$state','$stateParams','MenuService', function ($scope,$state, $stateParams,MenuService) {
    //controller("formcontroller", function ($scope,MenuService) {
        $scope.message={msg:""};
        $scope.menumessage={msg:""};
        $scope.reguser = {};
        userpref=[];
        var fieldsfilled=true;
        $scope.Submit = function (user) {
            console.log(user);

            console.log("got to form submit");
            $scope.reguser = angular.copy(user);
            console.log($scope.reguser);
            //setTimeout(() => this.abandonForm());
            //$state.go('regsuccessState');
 
            promise=MenuService.getMenuItems($scope.reguser.menupref).then(function(resp) {
                   return resp;
            });
            promise.then((data)=>{
                   
                   //console.log(Object.keys(data));
                   pref=data["data"];  //dictionary contains {data: [list of dictionaries of items]}
                   for (var i=0;i<pref.length;i++){
                       this.userpref.push(pref[i]);
                   }
                    
                    
                   //console.log("userpref");
                   //console.log(userpref);
         

          
                   //console.log(test);

            }, (error)=>{
                   console.log("Promise rejected with " + JSON.stringify(error));
            }); //end promise
            console.log(this.userpref);
            if (this.userpref==null){
                $scope.menumessage.msg="No Such Menu Number Exists";
            }else{
                MenuService.saveRegistration(user);
                $scope.message.msg="Your Preference has been Saved";
            }
            

 
        };

      
    }]);


    }());//end iife