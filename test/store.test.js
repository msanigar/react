describe('This should pass', function() {
  var someVar = true;
    it('should equal 1', function() {
        expect(1).to.equal(1);
    });
    it('should not equal 2', function() {
        expect(1).to.not.equal(2);
    });
    it('should return true', function() {
        expect(someVar).to.be.true;
    });
});
