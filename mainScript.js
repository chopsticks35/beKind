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
        
//    $scope.submitForm = function(){
//        
//        //assethod="post" action="mailer.php"ing values
//        if ($scope.name){var name = $scope.name;}
//        else {var name = null;}
//        if ($scope.email){var email = $scope.email;}
//        else {var email = null;}
//        if ($scope.hear){var hear = $scope.hear;}
//        else {var hear = null;}
//        if ($scope.wantNewsletter){var wantNewsletter = $scope.wantNewsletter;}
//        else {var wantNewletter = false;}
//        if ($scope.message){var message = $scope.message;}
//        else {var message = nulle;}
//        
//        //build object
//        $scope.myForm.$add({
//            name:name,
//            email: email,
//            hear: hear,
//            wantNewsletter: wantNesletter,
//            message: message
//            
//        }).then(function(ref){
//            //assign primary key
//            var id = ref.key();
//            console.log("added myForm with id" + id);
//            
//            //clear form
//            clearFields();
//            
//            
//            //send message
//         $scope.msg = 'Quote added';
//            
//        });
    
    });

//        app.controller('ContactController', function ($scope, $http) {
//        
//            $scope.result = 'hidden'
//        
//            $scope.resultMessage;
//        
//            $scope.formData; //formData is an object holding the name, email, subject, and message
//        
//            $scope.submitButtonDisabled = false;
//        
//            $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
//        
//            $scope.submit = function(contactform) {
//        
//                $scope.submitted = true;
//    
//                $scope.submitButtonDisabled = true;
//        
//                if (contactform.$valid) {
//    
//                    $http({
//        
//                        method  : 'POST',
//        
//                        url     : 'contact-form.php',
//        
//                        data    : $.param($scope.formData),  //param method from jQuery
//        
//                        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
//        
//                    }).success(function(data){
//        
//                        console.log(data);
//        
//                        if (data.success) { //success comes from the return json object
//        
//                            $scope.submitButtonDisabled = true;
//        
//                            $scope.resultMessage = data.message;
//        
//                            $scope.result='bg-success';
//     
//                        } else {
//       
//                            $scope.submitButtonDisabled = false;
//       
//                            $scope.resultMessage = data.message;
//        
//                            $scope.result='bg-danger';
//       
//                        }
//       
//                    });
//        
//                } else {
//        
//                    $scope.submitButtonDisabled = false;
//        
//                    $scope.resultMessage = 'Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Please fill out all the fields.';
//        
//                    $scope.result='bg-danger';
//        
//                }
//        
//            }
//        
//        });



//<script>angular.module('myScheduleApp', ['infinite-scroll'])
//angular.module('myScheduleApp')	
//    .controller('myScheduleController', ['$scope','$timeout', function($scope,$timeout){
//
//	var today = new Date();
//	$scope.images = [];
//	$scope.counter = 0;
//
//	$scope.loadMore = function(){
//
//    	for(var i = 0; i <3; i++) {
//    		today.setDate(today.getDate()+1);
//    		var dd = today.getDate();
//    		var mm = today.getMonth()+1;
//    		var y = today.getFullYear();
//    		var formattedDate = mm+'/'+dd+'/'+y;
//    		var date = {
//    			count: $scope.counter++,
//    			day: formattedDate,
//    			visibility: false,
//    			agendaVisibility: true,
//    			button: 'Add Class to Schedule',
//    			agenda: 'a',
//			} 
//      		$scope.images.push(date);
//   		}
//	}
//	$scope.addAgenda = function(index, event){
//		$scope.images[index].visibility = true;
//		$timeout(function() {
//					event.target.nextElementSibling.focus();
//				});
//	}
//	$scope.exitText = function(index){
//		$scope.images[index].agenda = $scope.images[index].appointment
//		$scope.images[index].appointment = ''
//		$scope.images[index].visibility = false;
//		$scope.images[index].agendaVisibility = false;
//		$scope.images[index].button = "Edit Class";
//	}
//}]);</script>
