/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { DefenseController } from './defense/defense.controller';
import { KickingController } from './kicking/kicking.controller';
import { MainController } from './main/main.controller';
import { PassingController } from './passing/passing.controller';
import { ReceivingController } from './receiving/receiving.controller';
import { RushingController } from './rushing/rushing.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('fandata', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'mgcrea.ngStrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('DefenseController', DefenseController)
  .controller('KickingController', KickingController)
  .controller('MainController', MainController)
  .controller('PassingController', PassingController)
  .controller('ReceivingController', ReceivingController)
  .controller('RushingController', RushingController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
