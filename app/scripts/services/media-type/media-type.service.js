angular.
    module('mediaType').
        factory('checkType', function(){
            return function(cat, path) {
                if(path.search('.jpg')>-1) { 
                    return  '<img src="images/'+path+'" class="img-responsive">';
                }
                else if(path.search('.html')>-1) {
                    console.log('animation');
                    return '<iframe src="images/'+path+'" scrolling="no" width="300", height="250"></iframe>';
                }
            } 
});
