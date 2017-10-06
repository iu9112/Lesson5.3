'use strict'

let assert = require('chai').assert;
let expect = require('chai').expect;
let should = require('chai').should();

let Calculator = require('../src');

let calc = new Calculator();

describe('Calculator', () => {
    
    it('0 by default', () => {
        calc.add('').should.equal(0); 
    });
    
    it('",1,2,0" => 3', () => {
        calc.add(',1,2,0').should.equal(3); 
    });
    
    it('",,,,,,," => 0', () => {
        calc.add(',,,,,,,').should.equal(0); 
    });
    
    it('"1,1,1,1" => 4', () => {
        calc.add('1,1,1,1').should.equal(4); 
    });
    
    it('"1\n2,3" => 6', () => {
        calc.add('1\n2,3').should.equal(6); 
    });
    
    it('"1,\n" => -1', () => {
        calc.add('1,\n').should.equal(-1); 
    });
    
    it('"2,1000" => 1002', () => {
		calc.add('2,1000').should.equal(1002);
	});
    
    it('"2,1001" => 2', () => { // Задание 6.1
		calc.add('2,1001').should.equal(2);
	});
    
    it('"//<***>\n1***2***3" => 6', () => {
        calc.add('//<***>\n1***2***3').should.equal(6); // Задание 6.2
    });
    
    it('"//<*><%>\n1*2%3" => 6', () => {
        calc.add('//<*><%>\n1*2%3').should.equal(6); // Задание 6.3
    });
    
    it('"//<****><%%><////////>\n1****2%%3////////4" => 10', () => {
        calc.add('//<****><%%><////////>\n1****2%%3////////4').should.equal(10); // Задание 6.4
    });
    
    it('"1,-2" -> throw', () => {
		const res = () => {
			calc.add('1,-2');
		};

		assert.throws(res, 'Отрицательные числа не допустимы: -2'); // Задание 5
	});

	it('"-3,1,-2,-5" -> throw', () => {
		const res = () => {
			calc.add('-3,1,-2,-5');
		};

		assert.throws(res, 'Отрицательные числа не допустимы: -3,-2,-5'); // Задание 5
	});
    
});
