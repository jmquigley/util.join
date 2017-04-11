'use strict';

import test from 'ava';
import {home} from 'util.home';
import {join, normalize} from './index';

test('Simple join', t => {
	const expected = '/test/one/two/three';
	t.is(expected, join('/test', 'one', 'two', 'three'));
});

test('Join using home directory expansion', t => {
	const expected = `${home}/one/two/three`;
	t.is(expected, join('~/', 'one', 'two', 'three'));
});

test('Join using windows directory expansion', t => {
	const expected = `C:/one/two/three`;
	t.is(expected, join('C:\\', 'one', 'two', 'three'));
});

test('Testing the normalize alias', t => {
	const expected = '/one/two/three';
	t.is(expected, normalize('\\one\\two\\three'));
});

test('Testing an empty path', t => {
	t.is('', normalize(''));
	t.is('', normalize());
});
