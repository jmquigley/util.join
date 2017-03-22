'use strict';

import test from 'ava';
import {home} from 'util.home';
import {join} from './index';

test('Simple join', t => {
	let expected = '/test/one/two/three';
	t.is(expected, join('/test', 'one', 'two', 'three'));
});

test('Join using home directory expansion', t => {
	let expected = `${home}/one/two/three`;
	let val = join('~/', 'one', 'two', 'three');
	t.is(expected, val);
});

test('Join using windows directory expansion', t => {
	let expected = `C:/one/two/three`;
	let val = join('C:\\', 'one', 'two', 'three');
	t.is(expected, val);
});
