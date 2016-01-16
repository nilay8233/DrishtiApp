angular.module("DrishtiApp", ['ionic'])

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

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('home', {
    url: '/home',
    templateUrl: 'app/home/home.html'
  })

    .state('home.post', {
      url: "/post",
      views: {
        "tab-post": {
          templateUrl: "app/home/post.html"
        }
      }
    })

    .state('home.schedule', {
      url: "/schedule",
      views: {
        "tab-schedule": {
          templateUrl: "app/home/schedule.html"
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home/post');
});