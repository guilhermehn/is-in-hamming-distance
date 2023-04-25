# isInHammingDistance

Returns true if the hamming distance between two strings or arrays of equal length is smaller than the given limit.

## Install

```
npm install is-in-hamming-distance --save
```

## Usage

```js
import isInHammingDistance from "is-in-hamming-distance";

console.log(isInHammingDistance(3, "karolin", "kathrin"));
// => true
console.log(isInHammingDistance(1, "karolin", "kathrin"));
// => false
```

## License

MIT

## Links

-   Benchmark: [BENCHMARK.txt](./BENCHMARK.txt)
-   Wikipedia: [Hamming Distance](https://en.wikipedia.org/wiki/Hamming_distance)
