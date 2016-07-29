angular.
 module('portfolioList').
  component('portfolioList', {
    templateUrl: 'views/main.html',
    controller: ['$http', 
        function PortfolioListController($http){
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
    }]
});