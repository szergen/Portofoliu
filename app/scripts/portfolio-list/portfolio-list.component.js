angular.
 module('portfolioList').
  component('portfolioList', {
    templateUrl: 'views/main.html',
    controller: ['$http', '$location', '$anchorScroll', '$sce', 'checkType', 
        function PortfolioListController($http, $location, $anchorScroll, $sce, checkType){
            self = this;
            
            //setting the currentName and currentPath to null for the modal so when we click on it it will change it's value
            self.currentName = '';
            self.currentPath = '';
            
            //we use the checkType curstom service that verifies what type of content we want to introduce in the modal and we validate the html with the trustAsHtml method of the $sce built in service for security reasons.
            self.insert = function() {
                return $sce.trustAsHtml(checkType('', self.currentPath));
            }
            //just a testing method
            self.test = function() {
                console.log('test');
            }
            
            self.myVar = "tralala2213";
            //retrieving the json data with the $http built in service
            $http.get('scripts/data.json').then(function(response) {
                self.projects = response.data;
            });
            
            //method to force the removal of the active class on the navigation
            self.changeClass = function(){
                $('li.active').removeClass('active');
            }
            //method for setting the active class to the current navigated item
            self.changeClass2 = function(a){
                $('.nav li').removeClass('active');
                $('[data-cat='+a+']').addClass('active'); 
                console.log(a);
            }
            //method to scroll to item without changing the location. Uses the $anchorScroll built in service
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