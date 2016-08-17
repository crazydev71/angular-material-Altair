'use strict';

import angular from 'angular';
import {BASE_URL} from '../../constants';

export default angular.module('app.services.api', [])
  .factory('api', api)
  .name;

/**
 * @ngInject
 */
function api($http) {

  function fetchById(name, id) {
    return $http.get(`${BASE_URL}${name}/${id}`).then(response => response.data);
  }

  function fetch(name, params) {
    return $http.get(`${BASE_URL}${name}`, {
        params: params
    }).then(response => response.data);
  }

  function update(name, id, data) {
    return $http.put(`${BASE_URL}${name}/${id}`,
      data
    ).then(response => response.data);
  }

  function insert(name, data) {
    return $http.post(`${BASE_URL}${name}`,
      data
    ).then(response => response.data);
  }

  function remove(name, id) {
    return $http.delete(`${BASE_URL}${name}/${id}`);
  }

  return {
    fetchById,
    fetch,
    update,
    insert,
    remove
  };
}
