var should = require('chai').should(),
	simple-math = require('../index'),
	add = simple-math.add,
	subtract = simple-math.subtract;

describe('#add', function(){
  it('add two numbers', function() {
	add(1,2).should.equal(3);
  });

});

describe('#substract', function(){
  it('subtract one number from another', function(){
	subtract(2,1).should.equal(1);
  });
});
