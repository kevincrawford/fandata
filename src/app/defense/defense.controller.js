export class DefenseController {
  constructor ($log) {
    'ngInject';

    this.defense = [];
    this.activate($log);
  }

  activate($log) {
    $log.debug('defense activated');
  }
}
