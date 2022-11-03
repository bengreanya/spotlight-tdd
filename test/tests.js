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
});
