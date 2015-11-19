describe('controllers', () => {
  let vm;

  beforeEach(angular.mock.module('fandata'));

  beforeEach(inject(($log) => {
    vm = $controller('DefenseController');
  }));

  it('should define 0 defense', () => {
    expect(angular.isArray(vm.defense)).toBeTruthy();
    expect(vm.defense.length === 0).toBeTruthy();
  });
});
