(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentGridController', StudentGridController);

    StudentGridController.$inject = ['studentFactory'];

    /* @ngInject */
    function StudentGridController(studentFactory) {
        var vm = this;
        vm.title = 'StudentGridController';
        vm.students = [];
        vm.deleteStudent = deleteStudent

        activate();

        ////////////////

        function activate() {
            studentFactory
                .getAll()
                .then(function(response) {
                    vm.students = response.data;
                });
        }

        function deleteStudent(student) {
            studentFactory
                .remove(student.studentId)
                .then(function(response) {
                    var index = vm.students.indexOf(student);

                    vm.students.splice(index, 1)
                })
        }
    }
})();
