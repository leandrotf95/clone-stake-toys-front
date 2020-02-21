angular
    .module("cstApp")
    .controller("CstInicialController", CstInicialController);

    CstInicialController.$inject = [
        "CstResourcesFactory"
    ];

    function CstInicialController(
        CstResourcesFactory
    )
    {

        const vm = this;
        const factoryResources = CstResourcesFactory;

    }