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
        vm.cadastrarUsuario = cadastrarUsuario;

        //variáveis públicas:
        vm.novoUsuario = {};
        vm.typeInputPassword = "password";

        //variáveis privadas:
        const factoryResources = CstResourcesFactory;

        //definição das funções:

        function revelarOcultarSenha() {
            vm.typeInputPassword = (vm.typeInputPassword === "password") ? "text" : "password";
        }

        function cadastrarUsuario(novoUsuario) {
            factoryResources.cadastrarNovoUsuario(novoUsuario)
                .then(function() {

                })
                .catch(function() {

                });
        }

    }