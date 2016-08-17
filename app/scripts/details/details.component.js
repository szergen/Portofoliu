angular.
 module('details').
  component('details', {
    templateUrl: 'views/details.html',
    controller: ['$http', '$location', '$anchorScroll', 
        function DetailsController($http, $location, $anchorScroll){
            
            self = this;
            self.myVar = "tralala2213";
            $http.get('scripts/data.json').then(function(response) {
                self.projects = response.data;
            });
            
            
            self.scrollTo = function(id) {
                var old = $location.hash();
                $location.hash(id);
                $anchorScroll();
                //reset to old to keep any additional routing logic from kicking in
                $location.hash(old);
                console.log("Merge, baaa!!!");
            }
    }]
});