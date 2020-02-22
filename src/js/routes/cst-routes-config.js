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
            .when('/cadastro-usuario', {
                templateUrl: './views/cst-cadastro-usuario-tpl.html'
            })
            .otherwise({
                redirectTo: 'login'
            });

    }