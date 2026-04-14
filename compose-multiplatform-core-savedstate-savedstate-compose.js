(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['compose-multiplatform-core-savedstate-savedstate-compose'] = factory(typeof globalThis['compose-multiplatform-core-savedstate-savedstate-compose'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-savedstate-savedstate-compose']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-savedstate-savedstate-compose.js.map
