angular.module('comicApp')

    .config(function($routeProvider) {
        $routeProvider
            .when('/angular', {
                templateUrl: 'templates/comic_search.html',
                controller: 'searchController'
            })

        .when('/comic_results/:searchResults', {
            templateUrl: 'templates/comic_results.html',
            controller: 'resultsController'
        })

        .when('/comic_info/:infoResults', {
            templateUrl: 'templates/comic_info.html',
            controller: 'infoController'
        })
    })
