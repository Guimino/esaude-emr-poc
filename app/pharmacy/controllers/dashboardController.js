(function () {
  'use strict';

  angular
    .module('pharmacy')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$state', '$stateParams', 'patientService'];

  function DashboardController($state, $stateParams, patientService) {
    var patientUuid = $stateParams.patientUuid;

    var vm = this;
    vm.linkPatientDetail = linkPatientDetail;
    vm.linkSearch = linkSearch;
    vm.patient = {};
    vm.print = print;

    activate();

    ////////////////

    function activate() {
      patientService.getPatient(patientUuid).then(function (patient) {
        vm.patient = patient;
      });
    }

    function linkSearch() {
      $state.go("search");
    }

    function linkPatientDetail() {
      $state.go('detailpatient', {
        patientUuid: patientUuid,
        returnState: $state.current
      });
    }
  }

})();
