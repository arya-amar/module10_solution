(function() {
/*'use strict';*/

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];

function routeConfig ($stateProvider,$locationProvider, $urlRouterProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
     .state('registration', {
      url: '/register',
      templateUrl: 'src/public/mystuff/myForm.html',
      controller:'formcontroller'
     
 
    })
     /*
     .state('regsuccessState', {
      url: '/registerSuccess',
      templateUrl: "src/public/registration2.html",
      controller:"regController",
      controllerAs:"regCtrl",
      resolve: {
        regItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.saveRegistration($stateParams.user);
        }]
      }
    */
   
    .state('regsuccessState', {
      url: '/registerSuccess',
      component:'regsuccess'
     
 
    })
    
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItem($stateParams.category);
        }]
      }
    });
}
})();
