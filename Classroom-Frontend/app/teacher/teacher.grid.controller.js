(function() {
    'use strict';

    angular
        .module('app')
        .controller('TeacherGridController', TeacherGridController);

    TeacherGridController.$inject = ['teacherFactory'];

    /* @ngInject */
    function TeacherGridController(teacherFactory) {
        var vm = this;
        vm.title = 'TeacherGridController';
        vm.teachers = [];
        vm.deleteTeacher = deleteTeacher

        activate();

        ////////////////

        function activate() {
            teacherFactory
                .getAll()
                .then(function(response) {
                    vm.teachers = response.data;
                });
        }

        function deleteTeacher(teacher) {
            teacherFactory
                .remove(teacher.teacherId)
                .then(function(response) {
                    var index = vm.teachers.indexOf(teacher);

                    vm.teachers.splice(index, 1)
                })
        }
    }
})();
