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

test('this is the first test', (expect) => {
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
test('this is the second test', (expect) => {
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

// import function
import { multiplyBy12ThenHalve } from '../functions.js';

// run test
test('this is the third test', (expect) => {
    const expected = 10;
    const actual = multiplyBy12ThenHalve(8, 4, 5);
    expect.equal(actual, expected);
    const expected2 = 12;
    const actual2 = multiplyBy12ThenHalve(10, 5, 6);
    expect.equal(actual2, expected2);
    const expected3 = 672;
    const actual3 = multiplyBy12ThenHalve(7872, 82, 7);
    expect.equal(actual3, expected3);
});
