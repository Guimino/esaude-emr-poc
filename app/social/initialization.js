'use strict';

angular.module('social').factory('initialization',
    ['$cookies', '$rootScope', 'configurations', 'authenticator', 'appService', 'spinner', 'userService',
    function ($cookies, $rootScope, configurations, authenticator, appService, spinner, userService) {
        var getConfigs = function () {
            var configNames = ['patientAttributesConfig', 'addressLevels'];
            return configurations.load(configNames).then(function () {
                var mandatoryPersonAttributes = appService.getAppDescriptor().getConfigValue("mandatoryPersonAttributes");
                var patientAttributeTypes = new Poc.Patient.PatientAttributeTypeMapper().mapFromOpenmrsPatientAttributeTypes(configurations.patientAttributesConfig(), mandatoryPersonAttributes);
                $rootScope.patientConfiguration = new Poc.Patient.PatientConfig(patientAttributeTypes.personAttributeTypes, appService.getAppDescriptor().getConfigValue("additionalPatientInformation"));
                $rootScope.encounterTypes = appService.getAppDescriptor().getConfigValue("encounterTypes");
                $rootScope.landingPageAfterSearch = appService.getAppDescriptor().getConfigValue("landingPageAfterSearch");
                $rootScope.defaultVisitTypes = appService.getAppDescriptor().getConfigValue("defaultVisitTypes");
                $rootScope.appId = appService.getAppDescriptor().getId();
            });
        };

        var initApp = function() {
            return appService.initApp('social', {'app': true, 'extension' : true, 'service': true });
        };

        var loadUser = function () {
            var currentUser = $cookies.get(Bahmni.Common.Constants.currentUser);

            return userService.getUser(currentUser).success(function(data) {
                $rootScope.currentUser = data.results[0];
            });
        };

        return spinner.forPromise(authenticator.authenticateUser()
                .then(initApp)
                .then(getConfigs)
                .then(loadUser));
    }]
);
