angular
    .module("cstApp")
    .controller("CstLoginController", CstLoginController);

    CstLoginController.$inject = [
        "$scope"
    ];

    function CstLoginController(
        $scope
    )
    {

        const vm = this;

        vm.teste = teste;
        vm.senha = '';

        function teste() {
            $scope.$broadcast("teste");
        }

    }