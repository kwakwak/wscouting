'use strict';

describe('Directive: hideMe', function () {

  // load the directive's module
  beforeEach(module('wsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<hide-me></hide-me>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the hideMe directive');
  }));
});
