angular
    .module("cstApp")
    .factory("CstResourcesFactory", CstResourcesFactory);

    CstResourcesFactory.$inject = [
        "$http",
        "ConfigUrl"
    ];

    function CstResourcesFactory(
        $http,
        ConfigUrl
    )
    {

        return {
            cadastrarNovoUsuario: _cadastrarNovoUsuario
        };

        function _cadastrarNovoUsuario(usuario) {
            return $http.post(ConfigUrl.apiPath + "/usuario/cadastrar", usuario);
        }

    }