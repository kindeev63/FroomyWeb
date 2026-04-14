(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-lifecycle-lifecycle-common.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-lifecycle-lifecycle-common.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-savedstate-savedstate'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-savedstate-savedstate'.");
    }
    if (typeof globalThis['androidx-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'androidx-savedstate-savedstate'. Its dependency 'androidx-lifecycle-lifecycle-common' was not found. Please, check whether 'androidx-lifecycle-lifecycle-common' is loaded prior to 'androidx-savedstate-savedstate'.");
    }
    globalThis['androidx-savedstate-savedstate'] = factory(typeof globalThis['androidx-savedstate-savedstate'] === 'undefined' ? {} : globalThis['androidx-savedstate-savedstate'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-lifecycle-lifecycle-common']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_lifecycle_lifecycle_common) {
  'use strict';
  //region block: imports
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var protoOf = kotlin_kotlin.$_$.fa;
  var initMetadataForCompanion = kotlin_kotlin.$_$.o9;
  var equals = kotlin_kotlin.$_$.f9;
  var FunctionAdapter = kotlin_kotlin.$_$.t8;
  var isInterface = kotlin_kotlin.$_$.w9;
  var LifecycleEventObserver = kotlin_androidx_lifecycle_lifecycle_common.$_$.a;
  var hashCode = kotlin_kotlin.$_$.m9;
  var initMetadataForClass = kotlin_kotlin.$_$.n9;
  var VOID = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.n;
  var Event_ON_STOP_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.i;
  var Event_ON_START_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.h;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.b1;
  var toString = kotlin_kotlin.$_$.ha;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var THROW_CCE = kotlin_kotlin.$_$.ld;
  var KtMap = kotlin_kotlin.$_$.q3;
  var State_INITIALIZED_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.l;
  var State_STARTED_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.n;
  var emptyMap = kotlin_kotlin.$_$.v4;
  var toMutableMap = kotlin_kotlin.$_$.z6;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var initMetadataForInterface = kotlin_kotlin.$_$.r9;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(sam$androidx_lifecycle_LifecycleEventObserver$0, 'sam$androidx_lifecycle_LifecycleEventObserver$0', VOID, VOID, [LifecycleEventObserver, FunctionAdapter]);
  initMetadataForClass(SavedStateRegistryImpl, 'SavedStateRegistryImpl');
  initMetadataForClass(SavedState, 'SavedState');
  initMetadataForInterface(SavedStateProvider, 'SavedStateProvider');
  initMetadataForClass(SavedStateRegistry, 'SavedStateRegistry');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(SavedStateRegistryController, 'SavedStateRegistryController');
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  //endregion
  function keyOrValueNotFoundError(key) {
    throw IllegalArgumentException_init_$Create$("No valid saved state was found for the key '" + key + "'. It may be missing, null, or not of " + 'the expected type. This can occur if the value was saved with a different type or if the saved state was modified unexpectedly.');
  }
  function Companion() {
    this.n54_1 = 'androidx.lifecycle.BundlableSavedStateRegistry.key';
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function sam$androidx_lifecycle_LifecycleEventObserver$0(function_0) {
    this.o54_1 = function_0;
  }
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).y53 = function (source, event) {
    return this.o54_1(source, event);
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).r2 = function () {
    return this.o54_1;
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, LifecycleEventObserver) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.r2(), other.r2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).hashCode = function () {
    return hashCode(this.r2());
  };
  function SavedStateRegistryImpl$_init_$lambda_jhqb6s() {
    return Unit_instance;
  }
  function SavedStateRegistryImpl$performAttach$lambda(this$0) {
    return function (_unused_var__etf5q3, event) {
      var tmp;
      if (event.equals(Event_ON_START_getInstance())) {
        this$0.w54_1 = true;
        tmp = Unit_instance;
      } else if (event.equals(Event_ON_STOP_getInstance())) {
        this$0.w54_1 = false;
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function SavedStateRegistryImpl(owner, onAttach) {
    var tmp;
    if (onAttach === VOID) {
      tmp = SavedStateRegistryImpl$_init_$lambda_jhqb6s;
    } else {
      tmp = onAttach;
    }
    onAttach = tmp;
    this.p54_1 = owner;
    this.q54_1 = onAttach;
    this.r54_1 = new SynchronizedObject();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.s54_1 = LinkedHashMap_init_$Create$();
    this.t54_1 = false;
    this.u54_1 = null;
    this.v54_1 = false;
    this.w54_1 = true;
  }
  protoOf(SavedStateRegistryImpl).x54 = function (key) {
    // Inline function 'kotlin.check' call
    if (!this.v54_1) {
      var message = "You can 'consumeRestoredStateForKey' only after the corresponding component has moved to the 'CREATED' state";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp0_elvis_lhs = this.u54_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var state = tmp;
    // Inline function 'androidx.savedstate.read' call
    var $this$read = _SavedStateReader___init__impl__k2stzo(state);
    var consumed = SavedStateReader__contains_impl_ig4u69($this$read, key) ? SavedStateReader__getSavedState_impl_l38yfa($this$read, key) : null;
    // Inline function 'androidx.savedstate.write' call
    var $this$write = _SavedStateWriter___init__impl__99cr38(state);
    SavedStateWriter__remove_impl_9y9m5w($this$write, key);
    // Inline function 'androidx.savedstate.read' call
    var $this$read_0 = _SavedStateReader___init__impl__k2stzo(state);
    if (SavedStateReader__isEmpty_impl_ep4h1z($this$read_0)) {
      this.u54_1 = null;
    }
    return consumed;
  };
  protoOf(SavedStateRegistryImpl).y54 = function (key, provider) {
    // Inline function 'androidx.savedstate.internal.synchronized' call
    // Inline function 'androidx.savedstate.internal.synchronizedImpl' call
    this.r54_1;
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.s54_1;
    // Inline function 'kotlin.require' call
    if (!!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).e2(key)) {
      var message = 'SavedStateProvider with the given key is already registered';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.s54_1.y1(key, provider);
  };
  protoOf(SavedStateRegistryImpl).z54 = function (key) {
    // Inline function 'androidx.savedstate.internal.synchronized' call
    // Inline function 'androidx.savedstate.internal.synchronizedImpl' call
    this.r54_1;
    var tmp0 = this.s54_1;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = tmp0.d2().i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        // Inline function 'kotlin.collections.component1' call
        var k = element.w1();
        // Inline function 'kotlin.collections.component2' call
        var provider = element.x1();
        var result = k === key ? provider : null;
        if (!(result == null)) {
          tmp$ret$3 = result;
          break $l$block;
        }
      }
      tmp$ret$3 = null;
    }
    return tmp$ret$3;
  };
  protoOf(SavedStateRegistryImpl).a55 = function (key) {
    // Inline function 'androidx.savedstate.internal.synchronized' call
    // Inline function 'androidx.savedstate.internal.synchronizedImpl' call
    this.r54_1;
    this.s54_1.z1(key);
  };
  protoOf(SavedStateRegistryImpl).b55 = function () {
    // Inline function 'kotlin.check' call
    if (!this.p54_1.c55().k54().equals(State_INITIALIZED_getInstance())) {
      var message = "Restarter must be created only during owner's initialization stage";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    if (!!this.t54_1) {
      var message_0 = 'SavedStateRegistry was already attached.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    this.q54_1();
    var tmp = this.p54_1.c55();
    var tmp_0 = SavedStateRegistryImpl$performAttach$lambda(this);
    tmp.i54(new sam$androidx_lifecycle_LifecycleEventObserver$0(tmp_0));
    this.t54_1 = true;
  };
  protoOf(SavedStateRegistryImpl).d55 = function (savedState) {
    if (!this.t54_1) {
      this.b55();
    }
    // Inline function 'kotlin.check' call
    if (!!this.p54_1.c55().k54().g54(State_STARTED_getInstance())) {
      var message = 'performRestore cannot be called when owner is ' + this.p54_1.c55().k54().toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    if (!!this.v54_1) {
      var message_0 = 'SavedStateRegistry was already restored.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var tmp = this;
    var tmp_0;
    if (savedState == null) {
      tmp_0 = null;
    } else {
      // Inline function 'androidx.savedstate.read' call
      var $this$read = _SavedStateReader___init__impl__k2stzo(savedState);
      tmp_0 = SavedStateReader__contains_impl_ig4u69($this$read, 'androidx.lifecycle.BundlableSavedStateRegistry.key') ? SavedStateReader__getSavedState_impl_l38yfa($this$read, 'androidx.lifecycle.BundlableSavedStateRegistry.key') : null;
    }
    tmp.u54_1 = tmp_0;
    this.v54_1 = true;
  };
  protoOf(SavedStateRegistryImpl).e55 = function (outBundle) {
    // Inline function 'androidx.savedstate.savedState' call
    var initialState = emptyMap();
    var copiedState = toMutableMap(initialState);
    // Inline function 'kotlin.apply' call
    var this_0 = new SavedState(copiedState);
    // Inline function 'androidx.savedstate.write' call
    var $this$savedState = _SavedStateWriter___init__impl__99cr38(this_0);
    var tmp0_safe_receiver = this.u54_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      SavedStateWriter__putAll_impl_no0lvi($this$savedState, tmp0_safe_receiver);
    }
    // Inline function 'androidx.savedstate.internal.synchronized' call
    // Inline function 'androidx.savedstate.internal.synchronizedImpl' call
    this.r54_1;
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.s54_1.d2().i();
    while (_iterator__ex2g4s.j()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.k();
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.w1();
      // Inline function 'kotlin.collections.component2' call
      var provider = _destruct__k2r9zo.x1();
      SavedStateWriter__putSavedState_impl_5xy7ov($this$savedState, key, provider.f55());
    }
    var inState = this_0;
    // Inline function 'androidx.savedstate.read' call
    var $this$read = _SavedStateReader___init__impl__k2stzo(inState);
    if (!SavedStateReader__isEmpty_impl_ep4h1z($this$read)) {
      // Inline function 'androidx.savedstate.write' call
      var $this$write = _SavedStateWriter___init__impl__99cr38(outBundle);
      SavedStateWriter__putSavedState_impl_5xy7ov($this$write, 'androidx.lifecycle.BundlableSavedStateRegistry.key', inState);
    }
  };
  function SavedState(map) {
    var tmp;
    if (map === VOID) {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp = LinkedHashMap_init_$Create$();
    } else {
      tmp = map;
    }
    map = tmp;
    this.g55_1 = map;
  }
  function _SavedStateReader___init__impl__k2stzo(source) {
    return source;
  }
  function _get_source__4cuw5s($this) {
    return $this;
  }
  function SavedStateReader__getSavedState_impl_l38yfa($this, key) {
    var tmp = _get_source__4cuw5s($this).g55_1.g2(key);
    var tmp0_elvis_lhs = tmp instanceof SavedState ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateReader__isEmpty_impl_ep4h1z($this) {
    return _get_source__4cuw5s($this).g55_1.n();
  }
  function SavedStateReader__contains_impl_ig4u69($this, key) {
    return _get_source__4cuw5s($this).g55_1.e2(key);
  }
  function SavedStateReader__toMap_impl_49zebr($this) {
    // Inline function 'kotlin.collections.buildMap' call
    // Inline function 'kotlin.collections.buildMapInternal' call
    var capacity = _get_source__4cuw5s($this).g55_1.l();
    // Inline function 'kotlin.apply' call
    var this_0 = LinkedHashMap_init_$Create$_0(capacity);
    var _iterator__ex2g4s = _get_source__4cuw5s($this).g55_1.b2().i();
    while (_iterator__ex2g4s.j()) {
      var key = _iterator__ex2g4s.k();
      this_0.y1(key, _get_source__4cuw5s($this).g55_1.g2(key));
    }
    return this_0.u4();
  }
  function SavedStateProvider() {
  }
  function SavedStateRegistry(impl) {
    this.h55_1 = impl;
  }
  protoOf(SavedStateRegistry).x54 = function (key) {
    return this.h55_1.x54(key);
  };
  protoOf(SavedStateRegistry).y54 = function (key, provider) {
    this.h55_1.y54(key, provider);
  };
  protoOf(SavedStateRegistry).z54 = function (key) {
    return this.h55_1.z54(key);
  };
  protoOf(SavedStateRegistry).a55 = function (key) {
    this.h55_1.a55(key);
  };
  function Companion_0() {
  }
  protoOf(Companion_0).i55 = function (owner) {
    return new SavedStateRegistryController(new SavedStateRegistryImpl(owner));
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function SavedStateRegistryController(impl) {
    this.j55_1 = impl;
    this.k55_1 = new SavedStateRegistry(this.j55_1);
  }
  protoOf(SavedStateRegistryController).b55 = function () {
    this.j55_1.b55();
  };
  protoOf(SavedStateRegistryController).l55 = function (savedState) {
    this.j55_1.d55(savedState);
  };
  protoOf(SavedStateRegistryController).m55 = function (outBundle) {
    this.j55_1.e55(outBundle);
  };
  function _SavedStateWriter___init__impl__99cr38(source) {
    return source;
  }
  function _get_source__4cuw5s_0($this) {
    return $this;
  }
  function SavedStateWriter__putSavedState_impl_5xy7ov($this, key, value) {
    // Inline function 'kotlin.collections.set' call
    _get_source__4cuw5s_0($this).g55_1.y1(key, value);
  }
  function SavedStateWriter__putAll_impl_no0lvi($this, from) {
    _get_source__4cuw5s_0($this).g55_1.a2(from.g55_1);
  }
  function SavedStateWriter__remove_impl_9y9m5w($this, key) {
    _get_source__4cuw5s_0($this).g55_1.z1(key);
  }
  function SynchronizedObject() {
  }
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SavedStateProvider;
  _.$_$.b = SavedState;
  _.$_$.c = Companion_instance_0;
  _.$_$.d = _SavedStateReader___init__impl__k2stzo;
  _.$_$.e = SavedStateReader__isEmpty_impl_ep4h1z;
  _.$_$.f = SavedStateReader__toMap_impl_49zebr;
  _.$_$.g = _SavedStateWriter___init__impl__99cr38;
  _.$_$.h = SavedStateWriter__putAll_impl_no0lvi;
  _.$_$.i = SavedStateWriter__putSavedState_impl_5xy7ov;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-savedstate-savedstate.js.map
