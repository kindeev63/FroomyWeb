(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-compose-runtime-runtime-retain'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-compose-runtime-runtime-retain'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-compose-runtime-runtime-retain'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'androidx-compose-runtime-runtime-retain'.");
    }
    globalThis['androidx-compose-runtime-runtime-retain'] = factory(typeof globalThis['androidx-compose-runtime-runtime-retain'] === 'undefined' ? {} : globalThis['androidx-compose-runtime-runtime-retain'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.fa;
  var initMetadataForObject = kotlin_kotlin.$_$.t9;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.u1;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ForgetfulRetainedValuesStore, 'ForgetfulRetainedValuesStore');
  //endregion
  var androidx_compose_runtime_retain_ForgetfulRetainedValuesStore$stable;
  function ForgetfulRetainedValuesStore() {
  }
  var ForgetfulRetainedValuesStore_instance;
  function ForgetfulRetainedValuesStore_getInstance() {
    return ForgetfulRetainedValuesStore_instance;
  }
  function get_LocalRetainedValuesStore() {
    _init_properties_LocalRetainedValuesStore_kt__ccuf80();
    return LocalRetainedValuesStore;
  }
  var LocalRetainedValuesStore;
  function LocalRetainedValuesStore$lambda() {
    _init_properties_LocalRetainedValuesStore_kt__ccuf80();
    return ForgetfulRetainedValuesStore_instance;
  }
  var properties_initialized_LocalRetainedValuesStore_kt_6m23wu;
  function _init_properties_LocalRetainedValuesStore_kt__ccuf80() {
    if (!properties_initialized_LocalRetainedValuesStore_kt_6m23wu) {
      properties_initialized_LocalRetainedValuesStore_kt_6m23wu = true;
      LocalRetainedValuesStore = staticCompositionLocalOf(LocalRetainedValuesStore$lambda);
    }
  }
  var androidx_compose_runtime_retain_ManagedRetainedValuesStore$stable;
  var androidx_compose_runtime_retain_RetainedValueHolder$stable;
  var androidx_compose_runtime_retain_RetainedValuesStoreRegistry$stable;
  //region block: init
  androidx_compose_runtime_retain_ForgetfulRetainedValuesStore$stable = 0;
  ForgetfulRetainedValuesStore_instance = new ForgetfulRetainedValuesStore();
  androidx_compose_runtime_retain_ManagedRetainedValuesStore$stable = 8;
  androidx_compose_runtime_retain_RetainedValueHolder$stable = 8;
  androidx_compose_runtime_retain_RetainedValuesStoreRegistry$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LocalRetainedValuesStore;
  _.$_$.b = ForgetfulRetainedValuesStore_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-compose-runtime-runtime-retain.js.map
