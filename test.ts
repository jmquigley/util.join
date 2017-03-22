'use strict';

import test from 'ava';
import {home} from 'util.home';
import {join, normalize} from './index';

test('Simple join', t => {
	let expected = '/test/one/two/three';
	t.is(expected, join('/test', 'one', 'two', 'three'));
});

test('Join using home directory expansion', t => {
	let expected = `${home}/one/two/three`;
	t.is(expected, join('~/', 'one', 'two', 'three'));
});

test('Join using windows directory expansion', t => {
	let expected = `C:/one/two/three`;
	t.is(expected, join('C:\\', 'one', 'two', 'three'));
});

test('Testing the normalize alias', t => {
	let expected = '/one/two/three';
	t.is(expected, normalize('\\one\\two\\three'));
});
