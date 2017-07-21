'use strict';

angular.module('serviceform')
        .controller('ClinicalServiceController', ["$rootScope", "$scope", "$location", "$stateParams", 
                    function ($rootScope, $scope, $location, $stateParams) {
            var patientUuid;
    
            init();
    
            function init() {
                patientUuid = $stateParams.patientUuid;
            }
            
            $rootScope.linkServiceAdd = function(service) {
                
                findFormInfo(service);
                //in case the patient has a service today in
                if (service.hasEntryToday) {
                    //procede like editing
                    $rootScope.formPayload = Poc.Common.FormRequestMapper
                        .mapFromOpenMRSFormWithEncounter($scope.serviceForms[service.id], service.lastEncounterForService);
                    $rootScope.postAction = "add";//add obs to existing encounter
                } else {
                    $rootScope.formPayload = Poc.Common.FormRequestMapper
                            .mapFromOpenMRSForm($scope.serviceForms[service.id]);
                    $rootScope.postAction = "create";
                }
                //in case the service has a date mark
                if (service.markedOn) {
                    $rootScope.maskedOn = service.markedOn;
                }
                
                $location.url(service.url + "/" + patientUuid + "/" + 
                        service.id + $scope.formInfo.parts[0].sref.replace(".", "/"));

            };
            
            $rootScope.linkServiceEdit = function(service, encounter) {
                $rootScope.postAction = "edit";
                
                findFormInfo(service);
                
                $rootScope.formPayload = Poc.Common.FormRequestMapper
                        .mapFromOpenMRSFormWithEncounter($scope.serviceForms[service.id], encounter);
                
                $location.url(service.url + "/" + patientUuid + "/" + 
                        service.id + $scope.formInfo.parts[0].sref.replace(".", "/"));
            };

            $rootScope.linkServiceDisplay = function(service, encounter) {
                $rootScope.postAction = "display";
                
                findFormInfo(service);
                
                $rootScope.formPayload = Poc.Common.FormRequestMapper
                        .mapFromOpenMRSFormWithEncounter($scope.serviceForms[service.id], encounter);
                
                $location.url(service.url + "/" + patientUuid + "/" + 
                        service.id + "/display");
            };
            
            var findFormInfo = function (service) {
                $rootScope.formInfo = _.find($scope.formLayout, function(data) {
                    return data.id === service.id;
                });
            };
            
        }]);
