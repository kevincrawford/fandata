export class RushingController {
  constructor ($log) {
    'ngInject';

    this.rushing = [];
    this.activate($log);
  }

  activate($log) {
    $log.debug('rushing activated');
  }
}
