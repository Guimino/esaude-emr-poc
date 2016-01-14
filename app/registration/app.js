'use strict';

angular
    .module('registration')
    .config(['$urlRouterProvider', '$stateProvider', 
                function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/search');
        $stateProvider
            .state('search', {
                url: '/search',
                views: {
                    'layout': { templateUrl: '../common/application/views/layout.html', controller: 'SearchController'},
                    'content@search': { templateUrl: 'views/search.html'}
                },
                resolve: { initialization: 'initialization' }
            })
            .state('dashboard', {
                url: '/dashboard/:patientUuid',
                views: {
                    'layout': { templateUrl: '../common/application/views/layout.html', controller: 'DashboardController'},
                    'content@dashboard': { templateUrl: 'views/dashboard.html'}
                },
                resolve: { initialization: 'initialization' }
            })
            .state('dashboard.program', {
                url: '/program',
                templateUrl: 'views/patient-programs.html', 
                controller: 'ManageProgramController'
            })
            .state('dashboard.visits', {
                url: '/visits',
                templateUrl: 'views/patient-visits.html'
            })
            .state('dashboard.services', {
                url: '/services',
                templateUrl: 'views/patient-services.html'
            })
            .state('dashboard.alerts', {
                url: '/alerts',
                templateUrl: 'views/patient-alerts.html'
            })
            .state('serviceslist', {
                url: '/services/:patientUuid',
                views: {
                    'layout': { templateUrl: '../common/application/views/layout.html', controller: 'ServicesListController'},
                    'content@serviceslist': { templateUrl: 'views/services-list.html'}
                },
                resolve: { initialization: 'initialization' }
            })
            .state('newpatient', {
                url: '/patient/new',
                views: {
                    'layout': { templateUrl: '../common/application/views/layout.html', controller: 'CreatePatientController'},
                    'content@newpatient': { templateUrl: 'views/patient-add.html'}
                }
            })
            .state('newpatient.name', {
                url: '/name',
                templateUrl: 'views/patient-name-input.html'
            })
            .state('newpatient.gender', {
                url: '/gender',
                templateUrl: 'views/patient-gender-input.html'
            })
            .state('newpatient.age', {
                url: '/age',
                templateUrl: 'views/patient-age-input.html'
            })
            .state('newpatient.address', {
                url: '/address',
                templateUrl: 'views/patient-address-input.html'
            })
            .state('newpatient.other', {
                url: '/other',
                templateUrl: 'views/patient-other-input.html'
            })
            .state('newpatient.identifier', {
                url: '/identifier',
                templateUrl: 'views/patient-identifier-input.html'
            })
            .state('newpatient.death', {
                url: '/death',
                templateUrl: 'views/patient-death-input.html'
            })
            .state('newpatient.confirm', {
                url: '/confirm',
                templateUrl: 'views/patient-confirm-input.html'
            })
            .state('visit', {
                url: '/visit/:patientUuid',
                views: {
                    'layout': { templateUrl: '../common/application/views/layout.html', controller: 'VisitController'},
                    'content@visit': { templateUrl: 'views/visit.html'}
                },
                resolve: { initialization: 'initialization' }
            })
            .state('detailpatient', {
                url: '/patient/detail/:patientUuid',
                views: {
                    'layout': { templateUrl: '../common/application/views/layout.html', controller: 'DetailPatientController'},
                    'content@detailpatient': { templateUrl: 'views/patient-details.html'}
                },
                resolve: { initialization: 'initialization' }
            })
            .state('detailpatient.demographic', {
                url: '/demographic',
                templateUrl: 'views/patient-demographics.html'
            })
            .state('detailpatient.addresses', {
                url: '/addresses',
                templateUrl: 'views/patient-addresses.html'
            })
            .state('detailpatient.attributes', {
                url: '/attributes',
                templateUrl: 'views/patient-attributes.html'
            })
            .state('detailpatient.identifiers', {
                url: '/identifiers',
                templateUrl: 'views/patient-identifiers.html'
            })
            .state('detailpatient.death', {
                url: '/death',
                templateUrl: 'views/patient-death.html'
            })
            .state('anamnesis', {
                url: '/anamnesis/a/:patientUuid',
                views: {
                    'layout': { templateUrl: '../common/application/views/layout.html', controller: 'AnamnesisController'},
                    'content@anamnesis': { templateUrl: '../anamnesis/views/anamnesis-add.html'}
                }
            })
            .state('anamnesis.reference', {
                url: '/reference',
                templateUrl: '../anamnesis/views/anamnesis-reference-input.html'
            })
            .state('anamnesis.extra', {
                url: '/extra',
                templateUrl: '../anamnesis/views/anamnesis-extra-input.html'
            })
            .state('anamnesis.children', {
                url: '/children',
                templateUrl: '../anamnesis/views/anamnesis-children-input.html'
            })
            .state('anamnesis.confirm', {
                url: '/confirm',
                templateUrl: '../anamnesis/views/anamnesis-a-adult-confirm-input.html'
            });
    }]);