angular.
 module('detailsPage').
  component('detailsPage', {
    templateUrl: 'views/details.html',
    controller: ['$http', '$routeParams', 'checkType', '$sce', 
        function DetailsPageController($http, $routeParams, checkType, $sce){
           this.projectId = parseInt($routeParams.itemId);
            self = this;
           
            $http.get('scripts/data.json').then(function(response) {
                self.projects = response.data;
                self.inserter = $sce.trustAsHtml(checkType('', self.projects[self.projectId-1].link));
                
            });
            
            $('#myAffix').affix({
              offset: {
                top: 100,
                bottom: function () {
                  return (this.bottom = $('.footer').outerHeight(true))
                }
              }
           });
            
            //console.log(self.projects[this.projectId-1].name);
            
            
    }]
});