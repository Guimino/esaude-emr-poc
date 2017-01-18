'use strict';

angular
    .module('pharmacy')
    .run(['$rootScope', '$urlRouter', 'appService', 'formStatesAutoGen',
        function($rootScope, $urlRouter, appService, formStatesAutoGen) {
            var $state = $rootScope.$state;
            
            appService.initApp('vitals', {'app': true, 'extension' : true }).then(function (data) {
                formStatesAutoGen.gen(data, $state, $stateProviderRef);
            });
            $urlRouter.sync();
            $urlRouter.listen();
    }]);
