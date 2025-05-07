// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber True
test('Good phone number 1', () => {
  expect(isPhoneNumber('(510)111-1111')).toBe(true);
});

test('Good phone number 2', () => {
  expect(isPhoneNumber('111-9999')).toBe(true);
});

// isPhoneNumber False
test('Bad phone number 1', () => {
  expect(isPhoneNumber('1 11-1111')).toBe(false);
});

test('Bad phone number 2', () => {
  expect(isPhoneNumber('blah blah blah')).toBe(false);
});

// isEmail True
test('Good email 1', () => {
  expect(isEmail('bkhor@ucsd.edu')).toBe(true);
});

test('Good email 2', () => {
  expect(isEmail('supercooldude123@hotmail.hii')).toBe(true);
});

// isEmail False
test('Bad email 1', () => {
  expect(isEmail('@nousername.thisistoolong')).toBe(false);
});

test('Bad email 2', () => {
  expect(isEmail('where\'s the at at?')).toBe(false);
});

// isStrongPassword True
test('Good password 1', () => {
  expect(isStrongPassword('password')).toBe(true);
});

test('Good password 2', () => {
  expect(isStrongPassword('GoodpW32_1')).toBe(true);
});

// isStrongPassword False
test('Bad password 1', () => {
  expect(isStrongPassword('1numberstart')).toBe(false);
});

test('Bad password 2', () => {
  expect(isStrongPassword('thispasswordiswayyyyyytoooooolooooooonnnnggggg')).toBe(false);
});

// isDate True
test('Good date 1', () => {
  expect(isDate('04/06/2005')).toBe(true);
});

test('Good date 2', () => {
  expect(isDate('1/1/2005')).toBe(true);
});

// isDate False
test('Bad date 1', () => {
  expect(isDate('1/1/05')).toBe(false);
});

test('Bad date 2', () => {
  expect(isDate('166/6/1616')).toBe(false);
});

// isHexColor True
test('Good hex color 1', () => {
  expect(isHexColor('000000')).toBe(true);
});

test('Good hex color 2', () => {
  expect(isHexColor('#FfEb7a')).toBe(true);
});

// isHexColor False
test('Bad hex color 1', () => {
  expect(isHexColor('#GGGGGG')).toBe(false);
});

test('Bad hex color 2', () => {
  expect(isHexColor('abcde')).toBe(false);
});