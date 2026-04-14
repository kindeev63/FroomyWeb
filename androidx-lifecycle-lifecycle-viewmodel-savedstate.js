(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-lifecycle-lifecycle-common.js', './kotlin-kotlin-stdlib.js', './androidx-savedstate-savedstate.js', './androidx-lifecycle-lifecycle-viewmodel.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-lifecycle-lifecycle-common.js'), require('./kotlin-kotlin-stdlib.js'), require('./androidx-savedstate-savedstate.js'), require('./androidx-lifecycle-lifecycle-viewmodel.js'));
  else {
    if (typeof globalThis['androidx-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-viewmodel-savedstate'. Its dependency 'androidx-lifecycle-lifecycle-common' was not found. Please, check whether 'androidx-lifecycle-lifecycle-common' is loaded prior to 'androidx-lifecycle-lifecycle-viewmodel-savedstate'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-viewmodel-savedstate'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-lifecycle-lifecycle-viewmodel-savedstate'.");
    }
    if (typeof globalThis['androidx-savedstate-savedstate'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-viewmodel-savedstate'. Its dependency 'androidx-savedstate-savedstate' was not found. Please, check whether 'androidx-savedstate-savedstate' is loaded prior to 'androidx-lifecycle-lifecycle-viewmodel-savedstate'.");
    }
    if (typeof globalThis['androidx-lifecycle-lifecycle-viewmodel'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-viewmodel-savedstate'. Its dependency 'androidx-lifecycle-lifecycle-viewmodel' was not found. Please, check whether 'androidx-lifecycle-lifecycle-viewmodel' is loaded prior to 'androidx-lifecycle-lifecycle-viewmodel-savedstate'.");
    }
    globalThis['androidx-lifecycle-lifecycle-viewmodel-savedstate'] = factory(typeof globalThis['androidx-lifecycle-lifecycle-viewmodel-savedstate'] === 'undefined' ? {} : globalThis['androidx-lifecycle-lifecycle-viewmodel-savedstate'], globalThis['androidx-lifecycle-lifecycle-common'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-savedstate-savedstate'], globalThis['androidx-lifecycle-lifecycle-viewmodel']);
  }
}(function (_, kotlin_androidx_lifecycle_lifecycle_common, kotlin_kotlin, kotlin_androidx_savedstate_savedstate, kotlin_androidx_lifecycle_lifecycle_viewmodel) {
  'use strict';
  //region block: imports
  var State_INITIALIZED_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.l;
  var State_CREATED_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.j;
  var toString = kotlin_kotlin.$_$.ha;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var Unit_instance = kotlin_kotlin.$_$.n;
  var KProperty1 = kotlin_kotlin.$_$.gb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.k9;
  var lazy = kotlin_kotlin.$_$.zd;
  var emptyMap = kotlin_kotlin.$_$.v4;
  var toMutableMap = kotlin_kotlin.$_$.z6;
  var SavedState = kotlin_androidx_savedstate_savedstate.$_$.b;
  var _SavedStateWriter___init__impl__99cr38 = kotlin_androidx_savedstate_savedstate.$_$.g;
  var SavedStateWriter__putAll_impl_no0lvi = kotlin_androidx_savedstate_savedstate.$_$.h;
  var _SavedStateReader___init__impl__k2stzo = kotlin_androidx_savedstate_savedstate.$_$.d;
  var SavedStateReader__isEmpty_impl_ep4h1z = kotlin_androidx_savedstate_savedstate.$_$.e;
  var SavedStateWriter__putSavedState_impl_5xy7ov = kotlin_androidx_savedstate_savedstate.$_$.i;
  var protoOf = kotlin_kotlin.$_$.fa;
  var SavedStateProvider = kotlin_androidx_savedstate_savedstate.$_$.a;
  var initMetadataForClass = kotlin_kotlin.$_$.n9;
  var VOID = kotlin_kotlin.$_$.c;
  var Event_ON_CREATE_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.e;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var LifecycleEventObserver = kotlin_androidx_lifecycle_lifecycle_common.$_$.a;
  var ViewModel = kotlin_androidx_lifecycle_lifecycle_viewmodel.$_$.e;
  var ViewModel_init_$Init$ = kotlin_androidx_lifecycle_lifecycle_viewmodel.$_$.i;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.b1;
  var Companion_getInstance = kotlin_androidx_lifecycle_lifecycle_viewmodel.$_$.g;
  var getKClass = kotlin_kotlin.$_$.cb;
  var THROW_CCE = kotlin_kotlin.$_$.ld;
  var Factory = kotlin_androidx_lifecycle_lifecycle_viewmodel.$_$.c;
  var Companion_instance = kotlin_androidx_lifecycle_lifecycle_viewmodel.$_$.f;
  var create = kotlin_androidx_lifecycle_lifecycle_viewmodel.$_$.b;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(SavedStateHandlesProvider, 'SavedStateHandlesProvider', VOID, VOID, [SavedStateProvider]);
  initMetadataForClass(SavedStateHandleAttacher, 'SavedStateHandleAttacher', VOID, VOID, [LifecycleEventObserver]);
  initMetadataForClass(SavedStateHandlesVM, 'SavedStateHandlesVM', SavedStateHandlesVM, ViewModel);
  initMetadataForClass(SAVED_STATE_REGISTRY_OWNER_KEY$$inlined$Key$1);
  initMetadataForClass(VIEW_MODEL_STORE_OWNER_KEY$$inlined$Key$1);
  initMetadataForClass(DEFAULT_ARGS_KEY$$inlined$Key$1);
  initMetadataForClass(savedStateHandlesVM$1, VOID, VOID, VOID, [Factory]);
  initMetadataForClass(SavedStateViewModelFactory, 'SavedStateViewModelFactory', SavedStateViewModelFactory, VOID, [Factory]);
  //endregion
  function get_SAVED_STATE_REGISTRY_OWNER_KEY() {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    return SAVED_STATE_REGISTRY_OWNER_KEY;
  }
  var SAVED_STATE_REGISTRY_OWNER_KEY;
  function get_VIEW_MODEL_STORE_OWNER_KEY() {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    return VIEW_MODEL_STORE_OWNER_KEY;
  }
  var VIEW_MODEL_STORE_OWNER_KEY;
  var DEFAULT_ARGS_KEY;
  function enableSavedStateHandles(_this__u8e3s4) {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    var currentState = _this__u8e3s4.c55().k54();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(currentState.equals(State_INITIALIZED_getInstance()) || currentState.equals(State_CREATED_getInstance()))) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (_this__u8e3s4.o57().z54('androidx.lifecycle.internal.SavedStateHandlesProvider') == null) {
      var provider = new SavedStateHandlesProvider(_this__u8e3s4.o57(), _this__u8e3s4);
      _this__u8e3s4.o57().y54('androidx.lifecycle.internal.SavedStateHandlesProvider', provider);
      _this__u8e3s4.c55().i54(new SavedStateHandleAttacher(provider));
    }
  }
  function _get_viewModel__fokd3h($this) {
    var tmp0 = $this.y5z_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('viewModel', 1, tmp, SavedStateHandlesProvider$_get_viewModel_$ref_aibsd2(), null);
    return tmp0.x1();
  }
  function SavedStateHandlesProvider$viewModel$delegate$lambda($viewModelStoreOwner) {
    return function () {
      return get_savedStateHandlesVM($viewModelStoreOwner);
    };
  }
  function SavedStateHandlesProvider$_get_viewModel_$ref_aibsd2() {
    return function (p0) {
      return _get_viewModel__fokd3h(p0);
    };
  }
  function SavedStateHandlesProvider(savedStateRegistry, viewModelStoreOwner) {
    this.v5z_1 = savedStateRegistry;
    this.w5z_1 = false;
    this.x5z_1 = null;
    var tmp = this;
    tmp.y5z_1 = lazy(SavedStateHandlesProvider$viewModel$delegate$lambda(viewModelStoreOwner));
  }
  protoOf(SavedStateHandlesProvider).f55 = function () {
    // Inline function 'androidx.savedstate.savedState' call
    var initialState = emptyMap();
    var copiedState = toMutableMap(initialState);
    // Inline function 'kotlin.apply' call
    var this_0 = new SavedState(copiedState);
    // Inline function 'androidx.savedstate.write' call
    var $this$savedState = _SavedStateWriter___init__impl__99cr38(this_0);
    var tmp0_safe_receiver = this.x5z_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      SavedStateWriter__putAll_impl_no0lvi($this$savedState, tmp0_safe_receiver);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = _get_viewModel__fokd3h(this).a60_1.d2().i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      // Inline function 'kotlin.collections.component1' call
      var key = element.w1();
      // Inline function 'kotlin.collections.component2' call
      var handle = element.x1();
      var savedState = handle.c60().f55();
      // Inline function 'androidx.savedstate.read' call
      var $this$read = _SavedStateReader___init__impl__k2stzo(savedState);
      if (!SavedStateReader__isEmpty_impl_ep4h1z($this$read)) {
        SavedStateWriter__putSavedState_impl_5xy7ov($this$savedState, key, savedState);
      }
    }
    this.w5z_1 = false;
    return this_0;
  };
  protoOf(SavedStateHandlesProvider).d60 = function () {
    if (!this.w5z_1) {
      var newState = this.v5z_1.x54('androidx.lifecycle.internal.SavedStateHandlesProvider');
      var tmp = this;
      // Inline function 'androidx.savedstate.savedState' call
      var initialState = emptyMap();
      var copiedState = toMutableMap(initialState);
      // Inline function 'kotlin.apply' call
      var this_0 = new SavedState(copiedState);
      // Inline function 'androidx.savedstate.write' call
      var $this$savedState = _SavedStateWriter___init__impl__99cr38(this_0);
      var tmp0_safe_receiver = this.x5z_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        SavedStateWriter__putAll_impl_no0lvi($this$savedState, tmp0_safe_receiver);
      }
      if (newState == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        SavedStateWriter__putAll_impl_no0lvi($this$savedState, newState);
      }
      tmp.x5z_1 = this_0;
      this.w5z_1 = true;
      _get_viewModel__fokd3h(this);
    }
  };
  function SavedStateHandleAttacher(provider) {
    this.e60_1 = provider;
  }
  protoOf(SavedStateHandleAttacher).y53 = function (source, event) {
    // Inline function 'kotlin.check' call
    if (!event.equals(Event_ON_CREATE_getInstance())) {
      var message = 'Next event must be ON_CREATE, it was ' + event.toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    source.c55().j54(this);
    this.e60_1.d60();
  };
  function SavedStateHandlesVM() {
    ViewModel_init_$Init$(this);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.a60_1 = LinkedHashMap_init_$Create$();
  }
  function get_savedStateHandlesVM(_this__u8e3s4) {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    var tmp = Companion_getInstance();
    return tmp.s5z(_this__u8e3s4, new savedStateHandlesVM$1()).u5z('androidx.lifecycle.internal.SavedStateHandlesVM', getKClass(SavedStateHandlesVM));
  }
  function SAVED_STATE_REGISTRY_OWNER_KEY$$inlined$Key$1() {
  }
  function VIEW_MODEL_STORE_OWNER_KEY$$inlined$Key$1() {
  }
  function DEFAULT_ARGS_KEY$$inlined$Key$1() {
  }
  function savedStateHandlesVM$1() {
  }
  protoOf(savedStateHandlesVM$1).p5z = function (modelClass, extras) {
    var tmp = new SavedStateHandlesVM();
    return tmp instanceof ViewModel ? tmp : THROW_CCE();
  };
  var properties_initialized_SavedStateHandleSupport_kt_6hqgvh;
  function _init_properties_SavedStateHandleSupport_kt__nxqisr() {
    if (!properties_initialized_SavedStateHandleSupport_kt_6hqgvh) {
      properties_initialized_SavedStateHandleSupport_kt_6hqgvh = true;
      // Inline function 'androidx.lifecycle.viewmodel.Companion.Key' call
      SAVED_STATE_REGISTRY_OWNER_KEY = new SAVED_STATE_REGISTRY_OWNER_KEY$$inlined$Key$1();
      // Inline function 'androidx.lifecycle.viewmodel.Companion.Key' call
      VIEW_MODEL_STORE_OWNER_KEY = new VIEW_MODEL_STORE_OWNER_KEY$$inlined$Key$1();
      // Inline function 'androidx.lifecycle.viewmodel.Companion.Key' call
      DEFAULT_ARGS_KEY = new DEFAULT_ARGS_KEY$$inlined$Key$1();
    }
  }
  function SavedStateViewModelFactory() {
  }
  protoOf(SavedStateViewModelFactory).p5z = function (modelClass, extras) {
    return create.call(this, modelClass, extras);
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_SAVED_STATE_REGISTRY_OWNER_KEY;
  _.$_$.b = SavedStateViewModelFactory;
  _.$_$.c = get_VIEW_MODEL_STORE_OWNER_KEY;
  _.$_$.d = enableSavedStateHandles;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-lifecycle-lifecycle-viewmodel-savedstate.js.map
