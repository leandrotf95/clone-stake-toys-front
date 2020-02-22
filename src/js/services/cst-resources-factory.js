angular
    .module("cstApp")
    .factory("CstResourcesFactory", CstResourcesFactory);

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