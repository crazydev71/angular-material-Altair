'use strict';

import angular from 'angular';
import authenticationServiceModule from './authentication-service';
import SessionStorage from './session-storage';

export default angular.module('app.services.authentication', [
    authenticationServiceModule])
  .config(config)
  .run(run)
  .name;

/**
 * @ngInject
 */
function run($rootScope, $state, AuthenticationService) {

  let sessionEntity = new SessionStorage();
  $rootScope.$on('$stateChangeStart',
    function(event, toState, params){
      if (toState.auth && sessionEntity.get() === null) {
        event.preventDefault();
        AuthenticationService.session().then(response => {
          if (response.data === "") {
            $state.go('login');
          } else {
            $state.go(toState.name, params);
          }
        });
      }
    }
  );
}

/**
 * @ngInject
 */
function config($httpProvider) {
  $httpProvider.interceptors.push(function() {
    return {
      request: function(options) {
        options.withCredentials = true;
        return options;
      }
    };
  });
}
