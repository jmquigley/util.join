"use strict";

import { home } from "util.home";
import { join, normalize } from "./index";

test("Simple join", () => {
	const expected = "/test/one/two/three";
	expect(expected).toBe(join("/test", "one", "two", "three"));
});

test("Join using home directory expansion", () => {
	const expected = `${home}/one/two/three`;
	expect(expected).toBe(join("~/", "one", "two", "three"));
});

test("Join using windows directory expansion", () => {
	const expected = `C:/one/two/three`;
	expect(expected).toBe(join("C:\\", "one", "two", "three"));
});

test("Testing the normalize alias", () => {
	const expected = "/one/two/three";
	expect(expected).toBe(normalize("\\one\\two\\three"));
});

test("Testing an empty path", () => {
	expect("").toBe(normalize(""));
	expect("").toBe(normalize());
});
