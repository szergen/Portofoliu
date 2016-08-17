angular.
 module('detailsPage').
  component('detailsPage', {
    templateUrl: 'views/details.html',
    controller: ['$http', '$routeParams',
        function DetailsPageController($http, $routeParams){
           this.projectId = parseInt($routeParams.itemId);
           
            self = this;
            $http.get('scripts/data.json').then(function(response) {
                self.projects = response.data;
            });
    }]
});