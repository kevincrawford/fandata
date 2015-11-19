export class KickingController {
  constructor ($log) {
    'ngInject';

    this.kicking = [];
    this.activate($log);
  }

  activate($log) {
    $log.debug('kicking activated');
  }
}
