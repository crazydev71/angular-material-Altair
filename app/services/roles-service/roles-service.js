'use strict';

import angular from 'angular';
import {BASE_URL} from '../../constants';

const ROLES_URL = `${BASE_URL}role`;

export default angular.module('app.services.roles', [])
    .factory('RolesService', RolesService)
    .name;

/**
 * @ngInject
 */
function RolesService($http) {

    function fetch() {
        return $http.get(
            ROLES_URL
        ).then(response => response.data);
    }

    return {
        fetch
    };
}
