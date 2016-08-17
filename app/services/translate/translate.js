'use strict';

import angular from 'angular';
import angularTranslateModule from 'angular-translate';

import enTranslations from './locale/locale-en_US.json';
import frTranslations from './locale/locale-fr_FR.json';

export default angular.module('app.services.translate', [
  angularTranslateModule])
  .config(config)
  .name;

/**
 * @ngInject
 * @param $translateProvider
 */
function config($translateProvider) {

  $translateProvider.translations('en_US', enTranslations);
  $translateProvider.translations('fr_FR', frTranslations);

  $translateProvider.useSanitizeValueStrategy(null);
  $translateProvider.preferredLanguage('en_US');
}
