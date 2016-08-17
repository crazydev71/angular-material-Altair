'use strict';

import angular from 'angular';
import {BASE_URL} from '../../constants';

const ACCOUNTS_URL = `${BASE_URL}account`;

export default angular.module('app.services.accounts', [])
  .factory('AccountsService', AccountsService)
  .name;

/**
 * @ngInject
 */
function AccountsService($http) {

  function fetch() {
    return $http.get(
      ACCOUNTS_URL
    ).then(response => response.data);
  }

  function fetchById(id) {
    return $http.get(
      ACCOUNTS_URL + '/' + id
    ).then(response => response.data);
  }

  function update(id, data) {
    return $http.put(
      ACCOUNTS_URL + '/' + id,
      data
    ).then(response => response.data);
  }

  function insert(data) {
    return $http.post(
      ACCOUNTS_URL,
      data
    ).then(response => response.data);
  }

  function remove(id) {
    return $http.delete(
      ACCOUNTS_URL + '/' + id
    );
  }

  return {
    fetch,
    fetchById,
    update,
    insert,
    remove
  };
}
