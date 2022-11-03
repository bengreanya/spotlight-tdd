// IMPORT MODULES under test here:
import { myFunction } from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected, 'true = true');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

import { addExclamationPoints } from '../functions.js';

test('exclamationTest', (expect) => {
    const expected = 'bunny rabbit!!!';
    const actual = addExclamationPoints('bunny rabbit');
    expect.equal(actual, expected);
    const expected2 = 'frogs!!!';
    const actual2 = addExclamationPoints('frogs');
    expect.equal(actual2, expected2);
    const expected3 = "the brown fox jumped over the i don't remember!!!";
    const actual3 = addExclamationPoints("the brown fox jumped over the i don't remember");
    expect.equal(actual3, expected3);
});

// import function
import { multiplyBySeven } from '../functions.js';

// run test

test('mult7test', (expect) => {
    const expected = 28;
    const actual = multiplyBySeven(4);
    expect.equal(actual, expected);

    const expected2 = 21;
    const actual2 = multiplyBySeven(3);
    expect.equal(actual2, expected2);

    const expected3 = 31633;
    const actual3 = multiplyBySeven(4519);
    expect.equal(actual3, expected3);
});
import { multiplyBy12ThenHalve } from '../functions.js';
test('multiplyBy12ThenHalve', (expect) => {
    const expected = 24;
    const actual = multiplyBy12ThenHalve(4);
    expect.equal(actual, expected);

    const expected2 = 48;
    const actual2 = multiplyBy12ThenHalve(8);
    expect.equal(actual2, expected2);

    const expected3 = 96;
    const actual3 = multiplyBy12ThenHalve(16);
    expect.equal(actual3, expected3);
});

// import function
import { divideThenMultiply } from '../functions.js';

// run test
test('divideThenMultTest', (expect) => {
    const expected = 10;
    const actual = divideThenMultiply(8, 4, 5);
    expect.equal(actual, expected);

    const expected2 = 12;
    const actual2 = divideThenMultiply(10, 5, 6);
    expect.equal(actual2, expected2);

    const expected3 = 672;
    const actual3 = divideThenMultiply(7872, 82, 7);
    expect.equal(actual3, expected3);
});

import { returnAsAnArray } from '../functions.js';

test('return as array test', (expect) => {
    const expected = [8, 4, 5];
    const actual = returnAsAnArray(8, 4, 5);
    expect.deepEqual(expected, actual);

    const expected2 = [3, 8, 22];
    const actual2 = returnAsAnArray(3, 8, 22);
    expect.deepEqual(expected2, actual2);

    const expected3 = [-2, 4, 2000];
    const actual3 = returnAsAnArray(-2, 4, 2000);
    expect.deepEqual(expected3, actual3);
});

import { returnAsAString } from '../functions.js';

test('return as string test', (expect) => {
    const expected = '845';
    const actual = returnAsAString(8, 4, 5);
    expect.equal(expected, actual);

    const expected2 = '3822';
    const actual2 = returnAsAString(3, 8, 22);
    expect.equal(expected2, actual2);

    const expected3 = '-242000';
    const actual3 = returnAsAString(-2, 4, 2000);
    expect.equal(expected3, actual3);
});

import { makeLuckyGreeting } from '../functions.js';

test('return lucky number', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 84.';
    const actual = makeLuckyGreeting(8, 4);
    expect.equal(expected, actual);

    const expected2 = 'Hello! Your lucky number for the day is 38.';
    const actual2 = makeLuckyGreeting(3, 8);
    expect.equal(expected2, actual2);

    const expected3 = 'Hello! Your lucky number for the day is -24.';
    const actual3 = makeLuckyGreeting(-2, 4);
    expect.equal(expected3, actual3);
});
