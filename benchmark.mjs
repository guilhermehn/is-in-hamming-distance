import isInHammingDistance from "./index.mjs";
import benchmark from "benchmark";

new benchmark.Suite()
	.add("isInHammingDistance (with greater limit)", () => {
		isInHammingDistance(4, "2173896", "2233796");
	})
	.add("isInHammingDistance (with smaller limit)", () => {
		isInHammingDistance(2, "2173896", "2233796");
	})
	.on("cycle", (event) => {
		console.log(String(event.target));
	})
	.run({ async: true });
