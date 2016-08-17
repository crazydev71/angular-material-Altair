'use strict';

import angular from 'angular';
import {BASE_URL} from '../../constants';

const CONTACTS_URL = `${BASE_URL}contact`;

export default angular.module('app.services.contacts', [])
  .factory('ContactsService', ContactsService)
  .name;

/**
 * @ngInject
 */
function ContactsService($http) {

  function fetch(accountId) {
    return $http.get(
      CONTACTS_URL + '?account=' + accountId
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
    update,
    insert,
    remove
  };
}
