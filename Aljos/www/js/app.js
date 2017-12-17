// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic-ratings'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(['$ionicConfigProvider', function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom'); // other values: top

}])
.config(function($stateProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller : 'tabsCtrl'
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/home.html',
        controller: 'buscarCtrl'
      }
    }
  })
  .state('tab.top10', {
      url: '/top10',
      views: {
        'tab-top10': {
          templateUrl: 'templates/top10.html',
          controller: 'top10Ctrl'
        }
      }
    })
  .state('tab.terminosycondiciones', {
    url: '/terminosycondiciones',
    views: {
      'tab-terminosycondiciones': {
        templateUrl: 'templates/terminosycondiciones.html',
        controller: ''
      }
    }
  })
  // para pasar los datos, la url debe quedar con /:variable?
  // esto permite nombrar la variable, que debe tener el mismo nombre en
  //$state.go y $stateParams
  .state('tab.registrarse', {
    url: '/registrarse/:data_registro?',
    views: {
      'tab-home': {
        templateUrl: 'templates/registrarse.html',
        controller: 'registrarseCtrl'
      }
    }
  })
  .state('tab.perfilUsuario', {
    url: '/perfilUsuario',
    views:{
      'tab-perfilUsuario':{
        templateUrl: 'templates/perfilUsuario.html',
        controller: 'perfilUsuarioCtrl'
      }
    }
  })
  .state('tab.local',{
    url: '/local',
    views:{
      'tab-perfilUsuario':{
        templateUrl:'templates/local.html',
        controller: 'localCtrl'
      }
    }
  })
  .state('tab.menu',{
    url: '/menu',
    views:{
      'tab-perfilUsuario':{
        templateUrl:'templates/menu.html',
        controller: 'menuCtrl'
      }
    }
  })
  .state('tab.preguntasGenerales',{
    url: '/preguntasGenerales',
    views:{
      'tab-perfilUsuario':{
        templateUrl:'templates/preguntasGenerales.html',
        controller: 'preguntasGeneralesCtrl'
      }
    }
  })
  .state('tab.productosServicios',{
    url: '/productosServicios/:data_publicacion?',
    views:{
      'tab-perfilUsuario':{
        templateUrl:'templates/productosServicios.html',
        controller: 'productosServiciosCtrl'
      }
    }
  })
  .state('tab.estadisticas',{
    url: '/estadisticas',
    views:{
      'tab-perfilUsuario':{
        templateUrl:'templates/estadisticas.html',
        controller: 'estadisticasCtrl'
      }
    }
  })
  .state('tab.verpublicacion',{
    url: '/verpublicacion/:data_publicacion?',
    views:{
      'tab-perfilUsuario':{
        templateUrl:'templates/verPublicacion.html',
        controller: 'verPublicacionCTRL'
      }/*,
      'tab-home': {
        templateUrl: 'templates/verPublicacion.html',
        controller: 'verPublicacionCTRL'
      }*/
    }
  })
  .state('tab.favoritos',{
    url: '/favoritos',
    views:{
      'tab-perfilUsuario':{
        templateUrl:'templates/favoritos.html',
        controller: 'favoritosCtrl'
      }
    }
  })
  .state('tab.agregarpublicacion',{
    url: '/agregarpublicacion/:data_publicacion?',
    views:{
      'tab-perfilUsuario':{
        templateUrl:'templates/agregarPublicacion.html',
        controller: 'agregarPublicacionCTRL'
      }
    }
  });
  //ng-if="logeado"
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/perfilUsuario');

});
