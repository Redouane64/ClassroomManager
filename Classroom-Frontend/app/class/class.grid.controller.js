(function() {
    'use strict';

    angular
        .module('app')
        .controller('ClassGridController', ClassGridController);

    ClassGridController.$inject = ['classFactory'];

    /* @ngInject */
    function ClassGridController(classFactory) {
        var vm = this;
        vm.title = 'ClassGridController';
        vm.classes = [];
        vm.deleteClass = deleteClass

        activate();

        ////////////////

        function activate() {
       
            classFactory
                .getAll()
                .then(function(response) {
                    vm.classes = response.data;
                });
        }

        function deleteClass(classObj) {

            classFactory
                .remove(classObj.classId)
                .then(function(response) {
                    var index = vm.classes.indexOf(classObj);

                    vm.classes.splice(index, 1);
                });
        }
    }
})();
