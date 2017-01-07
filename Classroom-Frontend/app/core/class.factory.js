(function() {
    'use strict';

    angular
        .module('app')
        .factory('classFactory', classFactory);

    classFactory.$inject = ['$http'];

    /* @ngInject */
    function classFactory($http) {
        var service = {
            create: create,
            getAll: getAll,
            getById: getById,
            update: update,
            remove: remove
        };
        return service;

        ////////////////

        function create(classObj) {
            return $http.post('http://localhost:50180/api/classes', classObj);
        }

        function getAll() {
            return $http.get('http://localhost:50180/api/classes');
        }

        function getById(id) {
            return $http.get('http://localhost:50180/api/classes/' + id);
        }

        function update(id, classObj) {
            return $http.put('http://localhost:50180/api/classes/' + id, classObj);
        }

        function remove(id) {
            return $http.delete('http://localhost:50180/api/classes/' + id);
        }
    }
})();
