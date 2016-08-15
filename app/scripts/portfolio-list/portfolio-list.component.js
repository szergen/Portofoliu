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
                $('.marketing .nav li').click(function(e) {

                $('li.active').removeClass('active');

                $(this).addClass('active');
                    e.preventDefault();
                    
    });
            }
            self.changeClass2 = function(){
                $('.marketing .nav li').click(function(e) {

                $('li.active').removeClass('active');

               
                    e.preventDefault();
                    
    });
            }
            
    }]
});