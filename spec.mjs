import isInHammingDistance from "./index.mjs";
import { describe, it } from "node:test";
import { strict as assert } from "node:assert";

describe("isInHammingDistance", () => {
	it("should return true if the hamming distance between strings is smaller than the limit parameter", () => {
		// https://en.wikipedia.org/wiki/Hamming_distance#Examples
		assert.ok(isInHammingDistance(0, "karolin", "karolin"));
		assert.ok(isInHammingDistance(3, "karolin", "kathrin"));
		assert.ok(isInHammingDistance(3, "karolin", "kerstin"));
		assert.ok(isInHammingDistance(2, "1011101", "1001001"));
		assert.ok(isInHammingDistance(3, "2173896", "2233796"));
		assert.ok(isInHammingDistance(+Infinity, "a", "b"));
		assert.ok(isInHammingDistance(1, [1, 2, 3], [1, 2, 4]));
	});

	it("should return false if the hamming distance is greater than the limit parameter", () => {
		// https://en.wikipedia.org/wiki/Hamming_distance#Examples
		assert.equal(isInHammingDistance(2, "karolin", "kathrin"), false);
		assert.equal(isInHammingDistance(2, "karolin", "kerstin"), false);
		assert.equal(isInHammingDistance(1, "1011101", "1001001"), false);
		assert.equal(isInHammingDistance(2, "2173896", "2233796"), false);
		assert.equal(isInHammingDistance(0, "a", "b"), false);
		assert.equal(isInHammingDistance(1, [1, 2, 3], [1, 4, 5]), false);
	});
});
