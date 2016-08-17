'use strict';

import angular from 'angular';
import SessionStorage from './session-storage';
import {BASE_URL} from '../../constants';

const LOGIN_URL = `${BASE_URL}auth/local`;
const AUTHENTICATE_URL = `${BASE_URL}auth/authenticate`;
const REGISTER_URL = `${BASE_URL}auth/local/register`;
const LOGOUT_URL = `${BASE_URL}logout`;

export default angular.module('app.services.authentication.service', [])
  .service('AuthenticationService', AuthenticationService)
  .name;

/**
 * @ngInject
 * [AuthenticateService description]
 * @param {[type]} $http [description]
 */
function AuthenticationService ($http) {

  var sessionStorage = new SessionStorage();

  /**
   *
   * @param email
   * @param password
   * @returns {*}
   */
  this.login = function (email, password) {

    return $http.post(
      LOGIN_URL,
      {
        identifier: email,
        password: password
      }
    ).then(response => sessionStorage.set(response.data));
  };

  /**
   *
   * @param username
   * @param email
   * @param password
   * @returns {*}
   */
  this.register = function (username, email, password) {

    return $http.post(
      REGISTER_URL,
      {
        username: username,
        password: password,
        email: email
      }
    );
  };

  /**
   *
   * @returns {*}
   */
  this.session = function () {

    return $http.get(
      AUTHENTICATE_URL
    ).then(response => {
      if (response.data) {
        sessionStorage.set(response.data);
      }
      return response;
    });
  };

  /**
   *
   * @returns {*}
   */
  this.logout = function () {
    return $http.get(
      LOGOUT_URL
    );
  };
}
