describe('controllers', () => {
  let vm;

  beforeEach(angular.mock.module('fandata'));

  beforeEach(inject(($log) => {
    vm = $controller('KickingController');
  }));

  it('should define 0 kicking', () => {
    expect(angular.isArray(vm.kicking)).toBeTruthy();
    expect(vm.kicking.length === 0).toBeTruthy();
  });
});
