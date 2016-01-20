var app_profile = angular.module('app_profile', ['ngRoute']);

app_profile.config( function($routeProvider) {
    $routeProvider
        .when( '/', {
            templateUrl: 'views/home.html'
        } )
        .when( '/about', {
            templateUrl: 'views/about.html'
        } )
        .when( '/contact', {
            templateUrl: 'views/contact.html'
        } )
        .otherwise( {
            redirectTo: '/'
        } );
} );

