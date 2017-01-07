(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentDetailController', StudentDetailController);

    StudentDetailController.$inject = ['$stateParams',
        'studentFactory',
        'classFactory'
    ];
    /* @ngInject */

    function StudentDetailController($stateParams, studentFactory, classFactory) {
        var vm = this;
        vm.title = 'StudentDetailController';

        vm.studentId = $stateParams.id;
        vm.isNewStudent = true;
        vm.students = [];
        vm.saveStudent = save;

        activate();

        ////////////////

        function activate() {
            //If $stateparams.id
            //Get BY ID - student
            if ($stateParams.id) {
                studentFactory
                    .getById($stateParams.id)
                    .then(function(response) {
                        vm.currentStudent = response.data;
                    });
            }

            //Get ALL - Classes
            /*classFactory
                 .getAll()
                 .then(function(response) {
                     vm.classes = response.data;
                 });*/

        }

        //Update Class
        //Add Class
        function save() {
            if ($stateParams.id) {
                studentFactory
                    .update(vm.currentStudent.studentId, vm.currentStudent)
                    .then(function(response) {
                        alert('updated');
                    });
            } else {
                studentFactory
                    .create(vm.currentStudent)
                    .then(function(response) {
                        alert('created');
                    });
            }
        }
    }

})();
