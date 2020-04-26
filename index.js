const assert = require("assert").strict;

/**
 * Returns true if the hamming distance between two strings or arrays of equal length is smaller than the given limit
 * @param {Number} - The distance limit between both values. If the difference is greater than this limit, this function will return false.
 * @param {String} - Some string
 * @param {String} - Some string
 * @throws
 * @returns {Boolean}
 * @see https://en.wikipedia.org/wiki/Hamming_distance
 * @example
 * const isInHammingDistance = require('is-in-hamming-distance');
 *
 * console.log(isInHammingDistance(3, 'karolin', 'kathrin'));
 * // => true
 * console.log(isInHammingDistance(1, 'karolin', 'kathrin'));
 * // => false
 */
function isInHammingDistance(limit, a, b) {
	assert.strictEqual(a.length, b.length, "Values should have equal length");

	let distance = 0;

	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) {
			if (++distance > limit) {
				return false;
			}
		}
	}
	return true;
}

module.exports = isInHammingDistance;
