angular
    .module("cstApp")
    .config(CstRoutesConfig);

    CstRoutesConfig.$inject = [
        "$routeProvider"
    ];

    function CstRoutesConfig(
        $routeProvider
    )
    {

        $routeProvider
            .when('/inicial', {
                templateUrl: './views/cst-inicial-tpl.html'
            })
            .otherwise({
                redirectTo: 'inicial'
            });

    }