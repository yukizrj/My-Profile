'use strict';
angular.module("myApp").controller("ProjectController",["$scope", "projectFactory",function($scope, projectFactory) {
  $scope.tab = 1;
  $scope.filtText = "";
  $scope.showDetails=false;
  $scope.infos=projectFactory.getProjects();

        /*$scope.infos=infos;*/
        $scope.select=function(setTab){
            $scope.tab=setTab;
             if (setTab === 2){
                    $scope.filtText = "17";
             }
                else if (setTab === 3){
                    $scope.filtText = "17";
                }
                else if (setTab === 4){
                    $scope.filtText = "15";
                }
                else if (setTab === 5){
                    $scope.filtText = "14";
                }
                else{
                    $scope.filtText = "";
                }
        };
        $scope.isSelected= function(checkTab){
            return($scope.tab===checkTab);
        };
        $scope.toggleDetails=function(){
        	$scope.showDetails= !$scope.showDetails;
        };

	}])
	.controller("ContactController",["$scope",function($scope){
		$scope.feedback={mychannel:"", firstName:"", lastName:"", agree:false, email:""};
		var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
                        $scope.channels = channels;
            $scope.invalidChannelSelection = false;
	}])
	.controller("FeedbackController",["$scope",function($scope){
		$scope.sendFeedback = function() {
                console.log($scope.feedback);
                if ($scope.feedback.agree && ($scope.feedback.mychannel === "")&& !$scope.feedback.mychannel){
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                                       agree:false, email:"" };
                    $scope.feedback.mychannel="";

                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
          };
	}])
    /*.controller('DetailController', ['$scope', '$routeParams', 'projectFactory', function($scope, $routeParams, projectFactory) {

            var info= projectFactory.getProject(parseInt($routeParams.id,10));                        
            $scope.info = info;
                    }])*/
    .controller('DetailController', ['$scope', '$stateParams', 'projectFactory', function($scope, $stateParams, projectFactory) {
            var info= projectFactory.getProject(parseInt($stateParams.id,10));
                        $scope.info = info;
                    }])
    .controller("SkillController",["$scope","skillFactory",function($scope, skillFactory){
            $scope.skills=skillFactory.getSkills();
    }])
    
    ;
 