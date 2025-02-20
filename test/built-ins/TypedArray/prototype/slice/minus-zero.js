// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.slice
description: -0 values on start and end
info: |
  22.2.3.24 %TypedArray%.prototype.slice ( start, end )
includes: [testTypedArray.js, compareArray.js]
features: [TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([40, 41, 42, 43]);

  assert.compareArray(
    sample.slice(-0), [40, 41, 42, 43],
    'sample.slice(-0) must return [40, 41, 42, 43]'
  );
  assert.compareArray(
    sample.slice(-0, 4), [40, 41, 42, 43],
    'sample.slice(-0, 4) must return [40, 41, 42, 43]'
  );
  assert.compareArray(
    sample.slice(0, -0), [],
    'sample.slice(0, -0) must return []'
  );
  assert.compareArray(
    sample.slice(-0, -0), [],
    'sample.slice(-0, -0) must return []'
  );
});
