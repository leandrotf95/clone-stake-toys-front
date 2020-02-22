angular
    .module("cstApp")
    .directive("mascaraSenha", mascaraSenha);

    mascaraSenha.$inject = [
    ];

    function mascaraSenha(
    ) 
    {

        return {

            require: 'ngModel',

            link: function(scope, element, attrs, ctrl) {

                scope.$on("teste", function() {
                    console.log("DJIOASAISDJIO");
                    ctrl.$setViewValue( _desmascararSenha( ctrl.$viewValue) );
                    ctrl.$render();
                });

                var _mascararSenha = function(input) {
                    input = input.replace(/[A-z]|[0-9]/g, "*");
                    return input;
                };

                var _desmascararSenha = function(input) {
                    return ctrl.$parsers[0];
                };

                element.bind("keyup", function() {
                    //Altera a visualização
                    ctrl.$setViewValue( _mascararSenha( ctrl.$viewValue) );
                    ctrl.$render();
                });

                ctrl.$parsers.push(function(value) {
                    //Altera o ngModel sem mudar a visualização
                    return value;
                });

                ctrl.$formatters.push(function(value) {
                    //Modifica a visibiliade de um ngModel pré-preenchido
                    if(!value) {
                        return "";
                    } 
                    return _mascararSenha(value);
                });
                
            }

        };

    }