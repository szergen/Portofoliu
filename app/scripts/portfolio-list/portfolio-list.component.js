angular.
 module('portfolioList').
  component('portfolioList', {
    templateUrl: 'views/main.html',
    controller: ['$http', '$filter', 
        function PortfolioListController($http, $filter){
            
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
            
    }]
});