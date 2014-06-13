'use strict';

describe('Service: getDb', function () {

  // load the service's module
  beforeEach(module('wsApp'));

  // instantiate service
  var getDb;
  beforeEach(inject(function (_getDb_) {
    getDb = _getDb_;
  }));

  it('should do something', function () {
    expect(!!getDb).toBe(true);
  });

});
