(function() {
    'use strict';

    angular
        .module('app')
        .controller('ClassDetailController', ClassDetailController);

    ClassDetailController.$inject = ['$stateParams',
        'classFactory',
        'teacherFactory'
    ];

    /* @ngInject */
    function ClassDetailController($stateParams, classFactory, teacherFactory) {
        var vm = this;
        vm.title = 'ClassDetailController';

        vm.classId = $stateParams.id;
        vm.isNewClass = true;
        vm.teachers = [];
        vm.saveClass = save;

        activate();

        ////////////////

        function activate() {
            // If $stateParams.id
            // Get BY ID - Class
            if ($stateParams.id) {
                classFactory
                    .getById($stateParams.id)
                    .then(function(response) {
                        vm.currentClass = response.data
                    })
            }

            // Get All - TEACHERS
            teacherFactory
                .getAll()
                .then(function(response) {
                    vm.teachers = response.data;
                });
        }

        // Update Class
        // Add Class
        function save() {
            if ($stateParams.id) {
                classFactory
                    .update(vm.currentClass.classId, vm.currentClass)
                    .then(function(response) {
                        alert('updated');
                    });
            } else {
                classFactory
                    .create(vm.currentClass)
                    .then(function(response) {
                        alert('created');
                    });
            }
        }
    }
})();