var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  // calculator.add() - add 1 to 4 and get 5
  it('should add 1 to 4 and get 5', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 5);
  });

  // calculator.subtract() subtract 4 from 7 and get 3
  it('should subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  })

  // calculator.multiply() - multiply 3 by 5 and get 15
  it('should multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 15);
  })

  // calculator.divide() - divide 21 by 7 and get 3
  it('should divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  })

  // calculator.numberClick() - concatenate multiple number button clicks
  it('should concatenate multiple number button clicks', function(){
    calculator.numberClick(2);
    calculator.numberClick(3);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 23);
  })

  // calculator.operatorClick() - chain multiple operations together
  it('should chain multiple operations together', function(){
    calculator.previousTotal = 0;
    calculator.add(5);
    calculator.operatorClick('-');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  })

  // calculator.clearClick() - clear the running total without affecting the calculation
  it('should clear the running total without affecting the calculation', function(){
    calculator.previousTotal = 0;
    calculator.add(5);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.clearClick();
    calculator.numberClick(6);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 11);
  })

});
