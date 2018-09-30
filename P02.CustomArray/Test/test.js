let chai = require('chai');
let expect = chai.expect;
let createCustomArr = require('../customArray.js');

describe('Custom Array Tests', function () {
    let arr;

    describe('toString and append Functions Tests', function() {
        beforeEach(function() {
            arr = createCustomArr();
        });

        it('Printing empty arr', function() {
            expect(arr.toString()).to.be.equal('');
        });

        it('Appending string', function() {
            arr.append('Text');

            expect(arr.toString()).to.be.equal('Text');
        });

        it('Appending number', function() {
            arr.append(5);

            expect(arr.toString()).to.be.equal('5');
        });

        it('Appending object', function() {
            arr.append({username: "Master"});

            expect(arr.toString()).to.be.equal('[object Object]');
        });

        it('Appending values from different data type', function() {
            arr.append('Text');
            arr.append(5);
            arr.append({username: "Master"});

            expect(arr.toString()).to.be.equal('Text, 5, [object Object]');
        });
    });

    describe('shiftLeft Function Tests', function() {
        beforeEach(function() {
            arr = createCustomArr();

            arr.append('1');
            arr.append(2);
            arr.append('3');
        });

        it('Shifting empty arr', function() {
            arr = createCustomArr();

            arr.shiftLeft();

            expect(arr.toString()).to.be.equal('');
        });

        it('Shifting arr with length = 1', function() {
            arr = createCustomArr();

            arr.append(5);
            arr.shiftLeft();

            expect(arr.toString()).to.be.equal('5');
        });

        it('Shifting once', function() {
            arr.shiftLeft();

            expect(arr.toString()).to.be.equal('2, 3, 1');
        });

        it('Shifting twice', function() {
            arr.shiftLeft();
            arr.shiftLeft();

            expect(arr.toString()).to.be.equal('3, 1, 2');
        });

        it('Shifting arr.length times', function() {
            arr.shiftLeft();
            arr.shiftLeft();
            arr.shiftLeft();

            expect(arr.toString()).to.be.equal('1, 2, 3');
        });
    });

    describe('shiftRight Function Tests', function() {
        beforeEach(function() {
            arr = createCustomArr();

            arr.append('1');
            arr.append(2);
            arr.append('3');
        });

        it('Shifting empty arr', function() {
            arr = createCustomArr();

            arr.shiftRight();

            expect(arr.toString()).to.be.equal('');
        });

        it('Shifting arr with length = 1', function() {
            arr = createCustomArr();

            arr.append(5);
            arr.shiftRight();

            expect(arr.toString()).to.be.equal('5');
        });

        it('Shifting once', function() {
            arr.shiftRight();

            expect(arr.toString()).to.be.equal('3, 1, 2');
        });

        it('Shifting twice', function() {
            arr.shiftRight();
            arr.shiftRight();

            expect(arr.toString()).to.be.equal('2, 3, 1');
        });

        it('Shifting arr.length times', function() {
            arr.shiftRight();
            arr.shiftRight();
            arr.shiftRight();

            expect(arr.toString()).to.be.equal('1, 2, 3');
        });
    });

    describe('swap Function Tests', function() {
        beforeEach(function() {
            arr = createCustomArr();

            arr.append('1');
            arr.append(2);
            arr.append('3');
        });

        it('Invalid first parameter (floating-point number)', function() {
            expect(arr.swap(1.10, 2)).to.be.equal(false);
        });

        it('Invalid first parameter (string)', function() {
            expect(arr.swap('1', 2)).to.be.equal(false);
        });

        it('Invalid first parameter (Too small)', function() {
            expect(arr.swap(-1, 1)).to.be.equal(false);
        });

        it('Invalid first parameter (Too big)', function() {
            expect(arr.swap(3, 0)).to.be.equal(false);
        });

        it('Invalid second parameter (floating-point number)', function() {
            expect(arr.swap(1, 2.1)).to.be.equal(false);
        });

        it('Invalid second parameter (string)', function() {
            expect(arr.swap(2, '1')).to.be.equal(false);
        });

        it('Invalid second parameter (Too small)', function() {
            expect(arr.swap(1, -1)).to.be.equal(false);
        });

        it('Invalid second parameter (Too big)', function() {
            expect(arr.swap(0, 3)).to.be.equal(false);
        });

        it('Invalid parameters (Equal)', function() {
            expect(arr.swap(0, 0)).to.be.equal(false);
        });

        it('Swapping two values', function() {
            arr.swap(0, 2);

            expect(arr.toString()).to.be.equal('3, 2, 1');
        });

        it('Multiple swaps', function() {
            arr.swap(3, 5);
            arr.shiftLeft();
            arr.shiftLeft();
            arr.shiftRight();
            arr.swap(0, 1);
            arr.swap(1, 2);
            arr.swap(1, 0);

            expect(arr.toString()).to.be.equal('1, 3, 2');
        });
    });
});