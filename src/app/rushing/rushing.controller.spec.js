describe('controllers', () => {
  let vm;

  beforeEach(angular.mock.module('fandata'));

  beforeEach(inject(($log) => {
    vm = $controller('RushingController');
  }));

  it('should define 0 rushing', () => {
    expect(angular.isArray(vm.rushing)).toBeTruthy();
    expect(vm.rushing.length === 0).toBeTruthy();
  });
});
