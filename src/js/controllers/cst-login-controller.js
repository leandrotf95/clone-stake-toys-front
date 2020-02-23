angular
    .module("cstApp")
    .controller("CstLoginController", CstLoginController);

    CstLoginController.$inject = [
        "CstResourcesFactory"
    ];

    function CstLoginController(
        CstResourcesFactory
    )
    {

        //vm:
        const vm = this;

        //funções públicas:
        vm.revelarOcultarSenha = revelarOcultarSenha;

        //variáveis públicas:
        vm.usuario = {};
        vm.typeInputPassword = "password";

        //variáveis privadas:
        const factoryResources = CstResourcesFactory;

        //definição das funções:

        function revelarOcultarSenha() {
            vm.typeInputPassword = (vm.typeInputPassword === "password") ? "text" : "password";
        }

    }