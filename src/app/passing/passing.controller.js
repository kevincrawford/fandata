export class PassingController {
  constructor ($log) {
    'ngInject';

    this.passing = [];
    this.activate($log);
  }

  activate($log) {
    $log.debug('passing activated');
  }
}
