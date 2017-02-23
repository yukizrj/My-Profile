'use strict';
angular.module("myApp", ["ui.router"])/*.config(function($routeProvider) {
        $routeProvider
            // route for the contactus page
            .when('/contact', {
                templateUrl : 'contactus.html',
                controller  : 'ContactController'
            })
            // route for the menu page
            .when('/projects', {
                templateUrl : 'projects.html',
                controller  : 'ProjectController'
            })
            // route for the dish details page
            .when('/projects/:id', {
                templateUrl : 'projectdetail.html',
                controller  : 'DetailController'
            })
            .otherwise('/contactus');*/
        .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
                    // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html'
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
                    }
                }
            })
                    // route for the aboutus page
            .state('app.about', {
                url:'about',
                views:{
                    'content@':{
                        templateUrl : 'views/about.html',
                        controller : 'SkillController'
                    }
                }
            })
                    // route for the contactus page
            .state('app.contact', {
                url:'contact',
                views: {
                    'content@': {
                        templateUrl : 'views/contact.html',
                        controller  : 'ContactController'
                     }
                }
            })

            // route for the menu page
            .state('app.projects', {
                url: 'projects',
                views: {
                    'content@': {
                        templateUrl : 'views/projects.html',
                        controller  : 'ProjectController'
                    }
                }
            })

            // route for the dishdetail page
            .state('app.projectdetails', {
                url: 'projects/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/projectdetail.html',
                        controller  : 'DetailController'
                   }
                }
            })
            ;
            $urlRouterProvider.otherwise('/');
    });