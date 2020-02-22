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
            .when('/login', {
                templateUrl: './views/cst-login-tpl.html'
            })
            .otherwise({
                redirectTo: 'login'
            });

    }