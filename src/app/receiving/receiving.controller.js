export class ReceivingController {
  constructor ($log) {
    'ngInject';

    this.receiving = [];
    this.activate($log);
  }

  activate($log) {
    $log.debug('receiving activated');
  }
}
