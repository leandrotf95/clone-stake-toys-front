angular
    .module("cstApp")
    .controller("CstLoginController", CstLoginController);

    CstLoginController.$inject = [
        
    ];

    function CstLoginController(
        
    )
    {

        const vm = this;

        vm.revelarOcultarSenha = revelarOcultarSenha;

        vm.typeInput = "password";

        function revelarOcultarSenha(senha) {
            if(!senha) {
                vm.typeInput = "password";
                return;
            }
            vm.typeInput = (vm.typeInput === "password") ? "text" : "password"; 
        }

    }