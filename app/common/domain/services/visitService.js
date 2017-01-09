'use strict';

angular.module('bahmni.common.domain')
    .service('visitService', ['$http', function ($http) {

        this.create = function (visit) {
            return $http.post(Bahmni.Common.Constants.visitUrl, visit, {
                withCredentials:true,
                headers: {"Accept": "application/json", "Content-Type": "application/json"}
            });
        };

        this.getVisit = function (uuid, params) {
            var parameters = params ? params : "custom:(uuid,visitId,visitType,patient,encounters:(uuid,encounterType,voided,orders:(uuid,orderType,voided,concept:(uuid,set,name),),obs:(uuid,value,concept,obsDatetime,groupMembers:(uuid,concept:(uuid,name),obsDatetime,value:(uuid,name),groupMembers:(uuid,concept:(uuid,name),value:(uuid,name),groupMembers:(uuid,concept:(uuid,name),value:(uuid,name)))))))";
            return $http.get(Bahmni.Common.Constants.visitUrl + '/' + uuid,
                {
                    params: {
                        v: parameters
                    }
                }
            );
        };

      //TODO: Unused definition, to be removed after testing phase
      //   this.getVisitForAdmissionDetails = function (uuid) {
      //       var parameters = "custom:(uuid,visitId,visitType,patient,encounters:(uuid,encounterType,encounterDatetime,voided,provider,obs:(uuid,value,concept,obsDatetime)))";
      //       return this.getVisit(uuid, parameters);
      //   };

        this.endVisit = function (visitUuid) {
            return $http.post(Bahmni.Common.Constants.endVisitUrl + '?visitUuid=' + visitUuid, {
                withCredentials: true
            });
        };

      //TODO: Unused definition, to be removed after testing phase
        // this.updateVisit = function (visitUuid, attributes) {
        //     return $http.post(Bahmni.Common.Constants.visitUrl + '/' + visitUuid, attributes, {
        //         withCredentials: true
        //     });
        // };

      //TODO: Unused definition, to be removed after testing phase
      //   this.getVisitSummary = function (visitUuid) {
      //       return $http.get(Bahmni.Common.Constants.visitSummaryUrl,
      //           {
      //               params: {
      //                   visitUuid: visitUuid
      //               },
      //               withCredentials: true
      //           }
      //       );
      //   };

        this.search = function (parameters) {
            return $http.get(Bahmni.Common.Constants.visitUrl, {
                params: parameters,
                withCredentials: true
            });
        };

      //TODO: Unused definition, to be removed after testing phase
        // this.getVisitType = function () {
        //     return $http.get(Bahmni.Common.Constants.visitTypeUrl, {
        //         withCredentials: true
        //     });
        //
        // };

        this.activeVisits = function (visits) {
            return _.filter(visits, function (visit) {
                return visit.stopDatetime === null;
            });
        };
    }]);
