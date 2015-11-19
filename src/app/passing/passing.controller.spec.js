describe('controllers', () => {
  let vm;

  beforeEach(angular.mock.module('fandata'));

  beforeEach(inject(($log) => {
    vm = $controller('PassingController');
  }));

  it('should define 0 passing', () => {
    expect(angular.isArray(vm.passing)).toBeTruthy();
    expect(vm.passing.length === 0).toBeTruthy();
  });
});
