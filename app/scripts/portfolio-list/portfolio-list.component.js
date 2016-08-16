angular.
 module('portfolioList').
  component('portfolioList', {
    templateUrl: 'views/main.html',
    controller: ['$http', '$location', '$anchorScroll', 
        function PortfolioListController($http, $location, $anchorScroll){
            
            self = this;
            self.myVar = "tralala2213";
            $http.get('scripts/data.json').then(function(response) {
                self.projects = response.data;
            });
            
            self.changeClass = function(){
                $('li.active').removeClass('active');
            }
            
            self.changeClass2 = function(a){
                $('.nav li').removeClass('active');
                $('[data-cat='+a+']').addClass('active'); 
                console.log(a);
            }
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