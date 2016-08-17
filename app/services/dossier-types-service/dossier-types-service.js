'use strict';

import angular from 'angular';
import {BASE_URL} from '../../constants';

const DOSSIER_TYPES_URL = `${BASE_URL}dossierType`;

export default angular.module('app.services.dossierTypes', [])
  .factory('DossierTypesService', DossierTypesService)
  .name;

/**
 * @ngInject
 */
function DossierTypesService($http) {

  function fetch() {
    return $http.get(
      DOSSIER_TYPES_URL
    ).then(response => response.data);
  }

  return {
    fetch
  };
}
