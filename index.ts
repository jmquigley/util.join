import * as path from "path";
import { expandHomeDirectory as expand } from "util.home";

/**
 * Takes an array of strings that represent a path (when
 * concatentated), combines them, attempts to expand a
 * potential home directory, and then normalizes all of the
 * path separators to use linux path separators regardless
 * of environment.
 *
 * This function takes a variable number of arguments.
 * @returns {string} a combined path with linux path separators
 * empty string if no arguments are given.
 */
export function join(...args: string[]) {
	if (args.join("")) {
		return expand(path.join(...args))
			.trim()
			.replace(/[\\\/]+/g, "/");
	}

	return "";
}

export let normalize = join;
