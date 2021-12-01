<span class="badge-npmversion"><a href="https://npmjs.org/package/@to-da-moon/thai-baht-lib" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@to-da-moon/thai-baht-lib.svg" alt="NPM version" /></a></span> <!-- <span class="badge-npmdownloads"><a href="https://npmjs.org/package/@to-da-moon/thai-bath-lib" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/@to-da-moon/thai-bath-lib.svg" alt="NPM downloads" /></a></span> --> [![install size](https://packagephobia.com/badge?p=%40to-da-moon%2Fthai-baht-lib)](https://packagephobia.com/result?p=%40to-da-moon%2Fthai-baht-lib)


## Acknowledgements

Support both js and ts

This library is free software. We just make it easier for us to get the thai baht.

Improve version from bath.js 

## Improvement
1. Completely change original code to be from bathjs as it has better performance
2. Fix string 01 showing เอ็ด problem
3. Round satang to be 2 decimal place not just always rounddown
4. When satang reach 999 round it to the decimal place
5. Improve speed from bathjs
    
## Benchmark
MacBook Pro (15-inch, 2016)
```
bahtLatest (x100000): 1886ms
thaiBahtLib (x100000): 1755ms
```


## Getting Started

Send in the number to get thai baht result in string format

## Installation

using yarn
```
yarn add @to-da-moon/thai-baht-lib
```
using npm
```
npm i @to-da-moon/thai-baht-lib
```

## Example Usage

```
bahtText(1)
// return thai baht text format
// e.g. 1 -> หนึ่งบาทถ้วน
```

```
bahtText(100)
// return thai baht text format
// e.g. 100 -> หนึ่งร้อยบาทถ้วน
```

## Plan
- [ ] Let me know what to upgrade, just create issue for us, we will do it.
