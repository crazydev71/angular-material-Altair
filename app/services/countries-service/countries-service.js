'use strict';

import angular from 'angular';
import {BASE_URL} from '../../constants';

const COUNTRIES_URL = `${BASE_URL}country`;

export default angular.module('app.services.countries', [])
  .factory('CountriesService', CountriesService)
  .name;

/**
 * @ngInject
 */
function CountriesService($http) {

  function fetch() {
    return $http.get(
        COUNTRIES_URL
    ).then(response => response.data);
  }

  return {
    fetch
  };
}
