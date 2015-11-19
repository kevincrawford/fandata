describe('controllers', () => {
  let vm;

  beforeEach(angular.mock.module('fandata'));

  beforeEach(inject(($log) => {
    vm = $controller('ReceivingController');
  }));

  it('should define 0 receiving', () => {
    expect(angular.isArray(vm.receiving)).toBeTruthy();
    expect(vm.receiving.length === 0).toBeTruthy();
  });
});
