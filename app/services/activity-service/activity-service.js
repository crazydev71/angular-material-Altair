'use strict';

import angular from 'angular';
import {BASE_URL} from '../../constants';

const CONTACTS_URL = `${BASE_URL}activity`;

export default angular.module('app.services.activities', [])
  .factory('ActivityService', ActivityService)
  .name;

/**
 * @ngInject
 */
function ActivityService($http) {

  function fetch(accountId) {
    return $http.get(
      CONTACTS_URL + '?account=' + accountId
    ).then(response => response.data);
  }

  function fetchAll() {
    return $http.get(
      CONTACTS_URL
    ).then(response => response.data);
  }

  function update(id, data) {
    return $http.put(
      CONTACTS_URL + '/' + id,
      data
    ).then(response => response.data);
  }

  function insert(data) {
    return $http.post(
      CONTACTS_URL,
      data
    ).then(response => response.data);
  }

  function remove(id) {
    return $http.delete(
      CONTACTS_URL + '/' + id
    );
  }

  return {
    fetch,
    fetchAll,
    update,
    insert,
    remove
  };
}
