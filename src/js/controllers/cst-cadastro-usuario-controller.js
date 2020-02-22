angular
    .module("cstApp")
    .controller("CstCadastroUsuarioController", CstCadastroUsuarioController);

    CstCadastroUsuarioController.$inject = [
        "CstResourcesFactory"
    ];

    function CstCadastroUsuarioController(
        CstResourcesFactory
    )
    {

        //vm:
        const vm = this;

        //funções públicas:
        vm.revelarOcultarSenha = revelarOcultarSenha;

        //variáveis públicas:
        vm.novoUsuario = {};
        vm.typeInputPassword = "password";

        //variáveis privadas:
        const factoryResources = CstResourcesFactory;

        //definição das funções:

        function revelarOcultarSenha(senha) {
            vm.typeInputPassword = (vm.typeInputPassword === "password") ? "text" : "password";
        }

    }