angular
    .module("cstApp", [
        'ngRoute'
    ])
    .run(run);

    run.$inject = ["$rootScope"];

    function run(
        $rootScope
    )
    {

        //Aciona sempre que o usuário trocar de página
        $rootScope.$on('$routeChangeStart', function (evt, route) {
            console.log(evt);
            
            console.log(route.originalPath);
            
            
            
        });

    }