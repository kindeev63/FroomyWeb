(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-backhandler'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-backhandler'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-backhandler'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-backhandler'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-backhandler'], globalThis['androidx-compose-runtime-runtime']);
  }
}(function (_, kotlin_androidx_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.u1;
  //endregion
  //region block: pre-declaration
  //endregion
  var androidx_compose_ui_backhandler_BackEventCompat$stable;
  var androidx_compose_ui_backhandler_BackEventHandler$stable;
  function get_LocalCompatNavigationEventDispatcherOwner() {
    _init_properties_BackHandler_jb_kt__15k5tp();
    return LocalCompatNavigationEventDispatcherOwner;
  }
  var LocalCompatNavigationEventDispatcherOwner;
  function LocalCompatNavigationEventDispatcherOwner$lambda() {
    _init_properties_BackHandler_jb_kt__15k5tp();
    return null;
  }
  var properties_initialized_BackHandler_jb_kt_6brqwr;
  function _init_properties_BackHandler_jb_kt__15k5tp() {
    if (!properties_initialized_BackHandler_jb_kt_6brqwr) {
      properties_initialized_BackHandler_jb_kt_6brqwr = true;
      LocalCompatNavigationEventDispatcherOwner = staticCompositionLocalOf(LocalCompatNavigationEventDispatcherOwner$lambda);
    }
  }
  var androidx_compose_ui_backhandler_ProgressBackEventHandler$stable;
  //region block: init
  androidx_compose_ui_backhandler_BackEventCompat$stable = 0;
  androidx_compose_ui_backhandler_BackEventHandler$stable = 8;
  androidx_compose_ui_backhandler_ProgressBackEventHandler$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LocalCompatNavigationEventDispatcherOwner;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-backhandler.js.map
