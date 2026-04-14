(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['androidx-graphics-graphics-shapes'] = factory(typeof globalThis['androidx-graphics-graphics-shapes'] === 'undefined' ? {} : globalThis['androidx-graphics-graphics-shapes']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  var LOG_TAG;
  var LOG_TAG_0;
  //region block: init
  LOG_TAG = 'Morph';
  LOG_TAG_0 = 'PolygonMeasure';
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-graphics-graphics-shapes.js.map
