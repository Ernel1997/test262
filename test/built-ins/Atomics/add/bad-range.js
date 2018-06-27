// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.add
description: >
  Test range checking of Atomics.add on arrays that allow atomic operations
includes: [testAtomics.js, testTypedArray.js]
features: [ArrayBuffer, arrow-function, Atomics, DataView, for-of, let, SharedArrayBuffer, TypedArray]
---*/

const buffer = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 2);
const views = intArrayConstructors.slice();

testWithTypedArrayConstructors(function(TA) {
  let view = new TA(buffer);
  testWithAtomicsOutOfBoundsIndices(function(IdxGen) {
    assert.throws(RangeError, function() {
      Atomics.add(view, IdxGen(view), 10);
    }, '`Atomics.add(view, IdxGen(view), 10)` throws RangeError');
  });
}, views);
