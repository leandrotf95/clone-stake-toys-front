angular
    .module("cstApp")
    .controller("CstResourcesFactory", CstResourcesFactory);

    CstResourcesFactory.$inject = [
        "$http"
    ];

    function CstResourcesFactory(
        $http
    )
    {

        return {

        };

    }