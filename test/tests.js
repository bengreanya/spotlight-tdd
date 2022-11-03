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

import { getSecondItem } from '../functions.js';

test('get second item', (expect) => {
    const expected = 'apple';
    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);
    expect.equal(expected, actual);

    const expected2 = 8;
    const actual2 = getSecondItem([3, 8, 34, 'a billion']);
    expect.equal(expected2, actual2);

    const expected3 = 5;
    const actual3 = getSecondItem([12, 5, 7, true]);
    expect.equal(expected3, actual3);
});

import { getLastItem } from '../functions.js';

test('get last item', (expect) => {
    const plum = 'plum';
    const expected = plum;
    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);
    expect.deepEqual(expected, actual);

    const expected2 = 'a billion';
    const actual2 = getLastItem([3, 8, 34, 'a billion']);
    expect.equal(expected2, actual2);

    const expected3 = true;
    const actual3 = getLastItem([12, 5, 7, true]);
    expect.equal(expected3, actual3);
});

import { renderDogLI } from '../functions.js';

test('dog LI test', (expect) => {
    const expected = '<li>Benny</li>';
    const actual = renderDogLI({ name: 'Benny', age: 6 });
    expect.equal(actual, expected);
    const expected2 = '<li>Lampshade</li>';
    const actual2 = renderDogLI({ name: 'Lampshade', age: 8 });
    expect.equal(actual2, expected2);
    const expected3 = '<li>Booper</li>';
    const actual3 = renderDogLI({ name: 'Booper', age: 7 });
    expect.equal(actual3, expected3);
});

import { renderDogDiv } from '../functions.js';

test('dog div test', (expect) => {
    const expected = '<div><h1>Benny</h1><p>Benny is 6 years old</p></div>';
    const actual = renderDogDiv({ name: 'Benny', age: 6 });
    expect.equal(actual, expected);
    const expected2 = '<div><h1>Lampshade</h1><p>Lampshade is 8 years old</p></div>';
    const actual2 = renderDogDiv({ name: 'Lampshade', age: 8 });
    expect.equal(actual2, expected2);
    const expected3 = '<div><h1>Booper</h1><p>Booper is 7 years old</p></div>';
    const actual3 = renderDogDiv({ name: 'Booper', age: 7 });
    expect.equal(actual3, expected3);
});
