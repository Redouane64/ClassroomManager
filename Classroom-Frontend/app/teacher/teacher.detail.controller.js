(function() {
    'use strict';

    angular
        .module('app')
        .controller('TeacherDetailController', TeacherDetailController);

    TeacherDetailController.$inject = ['$stateParams',
        'teacherFactory',
        'studentFactory'
    ];

    /* @ngInject */
    function TeacherDetailController($stateParams, teacherFactory, studentFactory) {
        var vm = this;
        vm.title = 'TeacherDetailController';

        vm.teacherId = $stateParams.id;
        vm.isNewTeacher = true;
        vm.students = [];
        vm.saveTeacher = save;

        activate();

        ////////////////

        function activate() {
            //If stateParams
            //get by ID - Teacher
            if ($stateParams.id) {
                teacherFactory
                    .getById($stateParams.id)
                    .then(function(response) {
                        vm.currentTeacher = response.data
                    })
            }

            //get ALL - STUDENTS
            studentFactory
                .getAll()
                .then(function(response) {
                    vm.students = response.data
                });
        }

        // Update Teacher
        // Add Teacher
        function save() {
            if ($stateParams.id) {
                teacherFactory
                    .update(vm.currentTeacher.teacherId, vm.currentTeacher)
                    .then(function(response) {
                        alert('updated');
                    });
            } else {
                teacherFactory
                    .create(vm.currentTeacher)
                    .then(function(response) {
                        alert('created');
                    });
            }
        }
    }
})();