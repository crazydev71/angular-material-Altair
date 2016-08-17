'use strict';

import angular from 'angular';
import {BASE_URL} from '../../constants';

const DOSSIERS_URL = `${BASE_URL}dossier`;

export default angular.module('app.services.dossiers', [])
  .factory('DossiersService', DossiersService)
  .name;

/**
 * @ngInject
 */
function DossiersService($http) {

  function fetchAll() {
    return $http.get(
      DOSSIERS_URL
    ).then(response => response.data);
  }

  function fetch(accountId) {
    return $http.get(
      DOSSIERS_URL + '?account=' + accountId
    ).then(response => response.data);
  }

  function update(id, data) {
    return $http.put(
      DOSSIERS_URL + '/' + id,
      data
    ).then(response => response.data);
  }

  function insert(data) {
    return $http.post(
      DOSSIERS_URL,
      data
    ).then(response => response.data);
  }

  function remove(id) {
    return $http.delete(
      DOSSIERS_URL + '/' + id
    );
  }

  return {
    fetchAll,
    fetch,
    update,
    insert,
    remove
  };
}
