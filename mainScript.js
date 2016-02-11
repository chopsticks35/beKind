angular.module("myApp", [])

angular.module("myApp")
    .controller("myController", function ($scope) {
    
            //contact-form binding
            $scope.myForm = {};
            $scope.myForm.name = "";
            $scope.myForm.email = "";
            $scope.myForm.hear = "";
            $scope.myForm.wantNewsletter;
            $scope.myForm.message = "";
            
            $scope.myForm.options = [
                {id: "referrals", name: "Referrals"},
                {id: "web", name: "Web Search"},
                {id: "facebook", name: "Facebook"},
                {id: "advertisement", name: "Advertisement"}
            ];
    
            });