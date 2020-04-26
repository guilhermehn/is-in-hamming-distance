const isInHammingDistance = require(".");

describe("isInHammingDistance", () => {
	it("should return true if the hamming distance between strings is smaller than the limit parameter", () => {
		// https://en.wikipedia.org/wiki/Hamming_distance#Examples
		expect(isInHammingDistance(0, "karolin", "karolin")).toBe(true);
		expect(isInHammingDistance(3, "karolin", "kathrin")).toBe(true);
		expect(isInHammingDistance(3, "karolin", "kerstin")).toBe(true);
		expect(isInHammingDistance(2, "1011101", "1001001")).toBe(true);
		expect(isInHammingDistance(3, "2173896", "2233796")).toBe(true);
		expect(isInHammingDistance(+Infinity, "a", "b")).toBe(true);
		expect(isInHammingDistance(1, [1, 2, 3], [1, 2, 4])).toBe(true);
	});

	it("should return false if the hamming distance is greater than the limit parameter", () => {
		// https://en.wikipedia.org/wiki/Hamming_distance#Examples
		expect(isInHammingDistance(2, "karolin", "kathrin")).toBe(false);
		expect(isInHammingDistance(2, "karolin", "kerstin")).toBe(false);
		expect(isInHammingDistance(1, "1011101", "1001001")).toBe(false);
		expect(isInHammingDistance(2, "2173896", "2233796")).toBe(false);
		expect(isInHammingDistance(0, "a", "b")).toBe(false);
		expect(isInHammingDistance(1, [1, 2, 3], [1, 4, 5])).toBe(false);
	});
});
