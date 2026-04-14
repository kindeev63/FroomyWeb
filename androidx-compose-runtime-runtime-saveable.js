(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js', './androidx-collection-collection.js', './androidx-savedstate-savedstate-compose.js', './androidx-lifecycle-lifecycle-runtime.js', './androidx-savedstate-savedstate.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'), require('./androidx-collection-collection.js'), require('./androidx-savedstate-savedstate-compose.js'), require('./androidx-lifecycle-lifecycle-runtime.js'), require('./androidx-savedstate-savedstate.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-compose-runtime-runtime-saveable'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-compose-runtime-runtime-saveable'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-compose-runtime-runtime-saveable'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'androidx-compose-runtime-runtime-saveable'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'androidx-compose-runtime-runtime-saveable'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'androidx-compose-runtime-runtime-saveable'.");
    }
    if (typeof globalThis['androidx-savedstate-savedstate-compose'] === 'undefined') {
      throw new Error("Error loading module 'androidx-compose-runtime-runtime-saveable'. Its dependency 'androidx-savedstate-savedstate-compose' was not found. Please, check whether 'androidx-savedstate-savedstate-compose' is loaded prior to 'androidx-compose-runtime-runtime-saveable'.");
    }
    if (typeof globalThis['androidx-lifecycle-lifecycle-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-compose-runtime-runtime-saveable'. Its dependency 'androidx-lifecycle-lifecycle-runtime' was not found. Please, check whether 'androidx-lifecycle-lifecycle-runtime' is loaded prior to 'androidx-compose-runtime-runtime-saveable'.");
    }
    if (typeof globalThis['androidx-savedstate-savedstate'] === 'undefined') {
      throw new Error("Error loading module 'androidx-compose-runtime-runtime-saveable'. Its dependency 'androidx-savedstate-savedstate' was not found. Please, check whether 'androidx-savedstate-savedstate' is loaded prior to 'androidx-compose-runtime-runtime-saveable'.");
    }
    globalThis['androidx-compose-runtime-runtime-saveable'] = factory(typeof globalThis['androidx-compose-runtime-runtime-saveable'] === 'undefined' ? {} : globalThis['androidx-compose-runtime-runtime-saveable'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime'], globalThis['androidx-collection-collection'], globalThis['androidx-savedstate-savedstate-compose'], globalThis['androidx-lifecycle-lifecycle-runtime'], globalThis['androidx-savedstate-savedstate']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime, kotlin_androidx_collection_collection, kotlin_androidx_savedstate_savedstate_compose, kotlin_androidx_lifecycle_lifecycle_runtime, kotlin_androidx_savedstate_savedstate) {
  'use strict';
  //region block: imports
  var THROW_CCE = kotlin_kotlin.$_$.ld;
  var Unit_instance = kotlin_kotlin.$_$.n;
  var toString = kotlin_kotlin.$_$.ha;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.s1;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.h1;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var get_currentCompositeKeyHashCode = kotlin_androidx_compose_runtime_runtime.$_$.d1;
  var charSequenceLength = kotlin_kotlin.$_$.a9;
  var toString_0 = kotlin_kotlin.$_$.pc;
  var isInterface = kotlin_kotlin.$_$.w9;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.a2;
  var SideEffect = kotlin_androidx_compose_runtime_runtime.$_$.x;
  var toString_1 = kotlin_kotlin.$_$.me;
  var protoOf = kotlin_kotlin.$_$.fa;
  var contentEquals = kotlin_kotlin.$_$.i4;
  var RememberObserver = kotlin_androidx_compose_runtime_runtime.$_$.u;
  var initMetadataForClass = kotlin_kotlin.$_$.n9;
  var VOID = kotlin_kotlin.$_$.c;
  var neverEqualPolicy = kotlin_androidx_compose_runtime_runtime.$_$.m1;
  var structuralEqualityPolicy = kotlin_androidx_compose_runtime_runtime.$_$.v1;
  var referentialEqualityPolicy = kotlin_androidx_compose_runtime_runtime.$_$.n1;
  var SnapshotMutableState = kotlin_androidx_compose_runtime_runtime.$_$.d;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.t1;
  var invert = kotlin_kotlin.$_$.j8;
  var shiftLeft = kotlin_kotlin.$_$.o8;
  var bitwiseAnd = kotlin_kotlin.$_$.a8;
  var Long = kotlin_kotlin.$_$.gd;
  var compare = kotlin_kotlin.$_$.d8;
  var shiftRight = kotlin_kotlin.$_$.q8;
  var equalsLong = kotlin_kotlin.$_$.h8;
  var initMetadataForCompanion = kotlin_kotlin.$_$.o9;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.y1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.b1;
  var mutableScatterMapOf = kotlin_androidx_collection_collection.$_$.h1;
  var get_LocalSavedStateRegistryOwner = kotlin_androidx_savedstate_savedstate_compose.$_$.a;
  var androidx_compose_runtime_ProvidedValue$stableprop_getter = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var CompositionLocalProvider = kotlin_androidx_compose_runtime_runtime.$_$.k;
  var DisposableEffect = kotlin_androidx_compose_runtime_runtime.$_$.p;
  var initMetadataForInterface = kotlin_kotlin.$_$.r9;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var emptyMap = kotlin_kotlin.$_$.v4;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.t;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var arrayListOf = kotlin_kotlin.$_$.z3;
  var MutableScatterMap = kotlin_androidx_collection_collection.$_$.n;
  var charSequenceGet = kotlin_kotlin.$_$.z8;
  var isWhitespace = kotlin_kotlin.$_$.ac;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.u1;
  var Companion_instance = kotlin_androidx_lifecycle_lifecycle_runtime.$_$.a;
  var Companion_instance_0 = kotlin_androidx_savedstate_savedstate.$_$.c;
  var toMutableMap = kotlin_kotlin.$_$.z6;
  var SavedState = kotlin_androidx_savedstate_savedstate.$_$.b;
  var _SavedStateWriter___init__impl__99cr38 = kotlin_androidx_savedstate_savedstate.$_$.g;
  var _SavedStateReader___init__impl__k2stzo = kotlin_androidx_savedstate_savedstate.$_$.d;
  var SavedStateReader__isEmpty_impl_ep4h1z = kotlin_androidx_savedstate_savedstate.$_$.e;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(SaveableHolder, 'SaveableHolder', VOID, VOID, [RememberObserver]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(SaveableStateHolderImpl$SaveableStateProvider$$inlined$ReusableContent$2$1);
  initMetadataForClass(SaveableStateHolderImpl, 'SaveableStateHolderImpl', SaveableStateHolderImpl);
  initMetadataForInterface(SaveableStateRegistry, 'SaveableStateRegistry');
  initMetadataForClass(SaveableStateRegistryImpl$registerProvider$1);
  initMetadataForClass(SaveableStateRegistryImpl, 'SaveableStateRegistryImpl', VOID, VOID, [SaveableStateRegistry]);
  initMetadataForClass(SaveableStateRegistryWrapper, 'SaveableStateRegistryWrapper', VOID, VOID, [SaveableStateRegistry]);
  initMetadataForInterface(Saver, 'Saver');
  initMetadataForClass(Saver$1, VOID, VOID, VOID, [Saver]);
  //endregion
  function listSaver(save, restore) {
    var tmp = listSaver$lambda(save);
    return Saver_0(tmp, typeof restore === 'function' ? restore : THROW_CCE());
  }
  function listSaver$lambda($save) {
    return function ($this$Saver, it) {
      var list = $save($this$Saver, it);
      var inductionVariable = 0;
      var last = list.l() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = list.m(index);
          if (!(item == null)) {
            // Inline function 'kotlin.require' call
            if (!$this$Saver.f56(item)) {
              var message = 'item at index ' + index + " can't be saved: " + toString(item);
              throw IllegalArgumentException_init_$Create$(toString(message));
            }
          }
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      var tmp_0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!list.n()) {
        tmp_0 = ArrayList_init_$Create$(list);
      } else {
        tmp_0 = null;
      }
      return tmp_0;
    };
  }
  var MaxSupportedRadix;
  function rememberSaveable(inputs, saver, init, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 674689872, 'C(rememberSaveable)P(1,2)182@8584L65:RememberSaveable.kt#r2ddri');
    if (isTraceInProgress()) {
      traceEventStart(674689872, $changed, -1, 'androidx.compose.runtime.saveable.rememberSaveable (RememberSaveable.kt:180)');
    }
    var tmp0 = rememberSaveable_0(inputs.slice(), saver, null, init, $composer_0, 384 | 112 & $changed | 7168 & $changed << 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function rememberSaveable_0(inputs, saver, key, init, $composer, $changed, $default) {
    var saver_0 = {_v: saver};
    var key_0 = key;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 441892779, 'C(rememberSaveable)P(1,3,2)80@3807L27,90@4177L7,92@4203L293,100@4582L59,100@4571L70:RememberSaveable.kt#r2ddri');
    if (!(($default & 2) === 0)) {
      saver_0._v = autoSaver();
    }
    if (!(($default & 4) === 0))
      key_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(441892779, $changed, -1, 'androidx.compose.runtime.saveable.rememberSaveable (RememberSaveable.kt:79)');
    }
    var compositeKey = get_currentCompositeKeyHashCode($composer_0, 0);
    var tmp;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    var this_0 = key_0;
    if (!(this_0 == null || charSequenceLength(this_0) === 0)) {
      tmp = key_0;
    } else {
      // Inline function 'androidx.compose.runtime.toString' call
      var radix = MaxSupportedRadix;
      tmp = toString_0(compositeKey, radix);
    }
    var finalKey = tmp;
    var tmp_0 = saver_0._v;
    if (!isInterface(tmp_0, Saver))
      THROW_CCE();
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_1 = get_LocalSaveableStateRegistry();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g21(this_1);
    sourceInformationMarkerEnd($composer_1);
    var registry = tmp0;
    sourceInformationMarkerStart($composer_0, -542783120, 'CC(remember):RememberSaveable.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.u20();
    var tmp_1;
    if (false || it === Companion_getInstance().s1z_1) {
      var tmp1_safe_receiver = registry == null ? null : registry.g56(finalKey);
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_2 = saver_0._v.h56(tmp1_safe_receiver);
      }
      var restored = tmp_2;
      var finalValue = restored == null ? init() : restored;
      var value = new SaveableHolder(saver_0._v, registry, finalKey, finalValue, inputs);
      $composer_0.v20(value);
      tmp_1 = value;
    } else {
      tmp_1 = it;
    }
    var tmp1_group = tmp_1;
    sourceInformationMarkerEnd($composer_0);
    var holder = tmp1_group;
    var tmp0_elvis_lhs = holder.p56(inputs);
    var value_0 = tmp0_elvis_lhs == null ? init() : tmp0_elvis_lhs;
    sourceInformationMarkerStart($composer_0, -542771226, 'CC(remember):RememberSaveable.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!(!!(!!(!!($composer_0.b21(holder) | (($changed & 112 ^ 48) > 32 && $composer_0.b21(saver_0._v) || ($changed & 48) === 32)) | $composer_0.b21(registry)) | $composer_0.w20(finalKey)) | $composer_0.b21(value_0)) | $composer_0.b21(inputs));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.u20();
    var tmp_3;
    if (invalid || it_0 === Companion_getInstance().s1z_1) {
      var value_1 = rememberSaveable$lambda(holder, saver_0, registry, finalKey, value_0, inputs);
      $composer_0.v20(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_0;
    }
    var tmp2_group = tmp_3;
    sourceInformationMarkerEnd($composer_0);
    SideEffect(tmp2_group, $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return value_0;
  }
  function register($this) {
    var registry = $this.j56_1;
    // Inline function 'kotlin.require' call
    if (!($this.n56_1 == null)) {
      var message = 'entry(' + toString_1($this.n56_1) + ') is not null';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (!(registry == null)) {
      requireCanBeSaved(registry, $this.o56_1());
      $this.n56_1 = registry.q56($this.k56_1, $this.o56_1);
    }
  }
  function SaveableHolder$valueProvider$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      var $this$with = this$0.i56_1;
      var tmp0 = this$0.l56_1;
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp0 == null) {
          var message = 'Value should be initialized';
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          tmp$ret$2 = tmp0;
          break $l$block;
        }
      }
      return $this$with.r56(this$0, tmp$ret$2);
    };
  }
  function SaveableHolder(saver, registry, key, value, inputs) {
    this.i56_1 = saver;
    this.j56_1 = registry;
    this.k56_1 = key;
    this.l56_1 = value;
    this.m56_1 = inputs;
    this.n56_1 = null;
    var tmp = this;
    tmp.o56_1 = SaveableHolder$valueProvider$lambda(this);
  }
  protoOf(SaveableHolder).s56 = function (saver, registry, key, value, inputs) {
    var entryIsOutdated = false;
    if (!(this.j56_1 === registry)) {
      this.j56_1 = registry;
      entryIsOutdated = true;
    }
    if (!(this.k56_1 === key)) {
      this.k56_1 = key;
      entryIsOutdated = true;
    }
    this.i56_1 = saver;
    this.l56_1 = value;
    this.m56_1 = inputs;
    if (!(this.n56_1 == null) && entryIsOutdated) {
      var tmp0_safe_receiver = this.n56_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.t56();
      }
      this.n56_1 = null;
      register(this);
    }
  };
  protoOf(SaveableHolder).f56 = function (value) {
    var registry = this.j56_1;
    return registry == null || registry.f56(value);
  };
  protoOf(SaveableHolder).p2f = function () {
    register(this);
  };
  protoOf(SaveableHolder).r2f = function () {
    var tmp0_safe_receiver = this.n56_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t56();
    }
  };
  protoOf(SaveableHolder).q2f = function () {
    var tmp0_safe_receiver = this.n56_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.t56();
    }
  };
  protoOf(SaveableHolder).p56 = function (inputs) {
    var tmp;
    if (contentEquals(inputs, this.m56_1)) {
      tmp = this.l56_1;
    } else {
      tmp = null;
    }
    return tmp;
  };
  function requireCanBeSaved(_this__u8e3s4, value) {
    if (!(value == null) && !_this__u8e3s4.f56(value)) {
      var tmp;
      if (isInterface(value, SnapshotMutableState)) {
        var tmp_0;
        if (!(value.y2m() === neverEqualPolicy()) && !(value.y2m() === structuralEqualityPolicy()) && !(value.y2m() === referentialEqualityPolicy())) {
          tmp_0 = 'If you use a custom SnapshotMutationPolicy for your MutableState you have to write a custom Saver';
        } else {
          tmp_0 = 'MutableState containing ' + toString_1(value.x1()) + ' cannot be saved using the current ' + 'SaveableStateRegistry. The default implementation only supports types which can be stored inside the Bundle. Please consider implementing a custom Saver for this class and pass it as a stateSaver parameter to rememberSaveable().';
        }
        tmp = tmp_0;
      } else {
        tmp = generateCannotBeSavedErrorMessage(value);
      }
      throw IllegalArgumentException_init_$Create$(tmp);
    }
  }
  function generateCannotBeSavedErrorMessage(value) {
    return toString(value) + ' cannot be saved using the current SaveableStateRegistry. The default ' + 'implementation only supports types which can be stored inside the Bundle. Please consider implementing a custom Saver for this class and pass it to rememberSaveable().';
  }
  function rememberSaveable$lambda($holder, $saver, $registry, $finalKey, $value, $inputs) {
    return function () {
      $holder.s56($saver._v, $registry, $finalKey, $value, $inputs);
      return Unit_instance;
    };
  }
  function rememberSaveableStateHolder($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 15454635, 'C(rememberSaveableStateHolder)57@2611L29,57@2555L85:SaveableStateHolder.kt#r2ddri');
    if (isTraceInProgress()) {
      traceEventStart(15454635, $changed, -1, 'androidx.compose.runtime.saveable.rememberSaveableStateHolder (SaveableStateHolder.kt:57)');
    }
    $composer_0.a20(1967007413);
    sourceInformation($composer_0, '*58@2715L7');
    var tmp = Companion_getInstance_0().u56_1;
    sourceInformationMarkerStart($composer_0, 1967006120, 'CC(remember):SaveableStateHolder.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.u20();
    var tmp_0;
    if (false || it === Companion_getInstance().s1z_1) {
      var value = rememberSaveableStateHolder$lambda;
      $composer_0.v20(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp1_group = tmp_0;
    sourceInformationMarkerEnd($composer_0);
    // Inline function 'kotlin.apply' call
    var this_0 = rememberSaveable([], tmp, tmp1_group, $composer_0, 384);
    var tmp_1 = this_0;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_1 = get_LocalSaveableStateRegistry();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g21(this_1);
    sourceInformationMarkerEnd($composer_1);
    tmp_1.x56_1 = tmp0;
    $composer_0.b20();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return this_0;
  }
  function SaveableStateHolderImpl$Companion$Saver$lambda($this$Saver, it) {
    return saveAll(it);
  }
  function SaveableStateHolderImpl$Companion$Saver$lambda_0(it) {
    return new SaveableStateHolderImpl(it);
  }
  function saveAll($this) {
    var map = $this.v56_1;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var this_0 = $this.w56_1;
    var k = this_0.wp_1;
    var v = this_0.xp_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.vp_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp0 = k[index];
                  var registry = v[index];
                  saveTo($this, registry, map, tmp0);
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp;
    if (map.n()) {
      tmp = null;
    } else {
      tmp = map;
    }
    return tmp;
  }
  function saveTo($this, $receiver, map, key) {
    var savedData = $receiver.z56();
    if (savedData.n()) {
      // Inline function 'kotlin.collections.minusAssign' call
      map.z1(key);
    } else {
      // Inline function 'kotlin.collections.set' call
      map.y1(key, savedData);
    }
  }
  function Companion() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp_0 = SaveableStateHolderImpl$Companion$Saver$lambda;
    tmp.u56_1 = Saver_0(tmp_0, SaveableStateHolderImpl$Companion$Saver$lambda_0);
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    if (Companion_instance_1 == null)
      new Companion();
    return Companion_instance_1;
  }
  function SaveableStateHolderImpl$canBeSaved$lambda(this$0) {
    return function (it) {
      var tmp0_safe_receiver = this$0.x56_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f56(it);
      return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
    };
  }
  function SaveableStateHolderImpl$SaveableStateProvider$$inlined$ReusableContent$2$1(this$0, $key, $registry) {
    this.a57_1 = this$0;
    this.b57_1 = $key;
    this.c57_1 = $registry;
  }
  protoOf(SaveableStateHolderImpl$SaveableStateProvider$$inlined$ReusableContent$2$1).rz = function () {
    if (this.a57_1.w56_1.z1(this.b57_1) === this.c57_1) {
      saveTo(this.a57_1, this.c57_1, this.a57_1.v56_1, this.b57_1);
    }
  };
  function SaveableStateHolderImpl$SaveableStateProvider$lambda(this$0, $key, $registry) {
    return function ($this$DisposableEffect) {
      // Inline function 'kotlin.require' call
      if (!!this$0.w56_1.c5($key)) {
        var message = 'Key ' + toString($key) + ' was used multiple times ';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp0 = this$0.v56_1;
      // Inline function 'kotlin.collections.minusAssign' call
      var key = $key;
      tmp0.z1(key);
      this$0.w56_1.gq($key, $registry);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new SaveableStateHolderImpl$SaveableStateProvider$$inlined$ReusableContent$2$1(this$0, $key, $registry);
    };
  }
  function SaveableStateHolderImpl$SaveableStateProvider$lambda_0($tmp0_rcvr, $key, $content, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.d57($key, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SaveableStateHolderImpl(savedStates) {
    Companion_getInstance_0();
    var tmp;
    if (savedStates === VOID) {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp = LinkedHashMap_init_$Create$();
    } else {
      tmp = savedStates;
    }
    savedStates = tmp;
    this.v56_1 = savedStates;
    this.w56_1 = mutableScatterMapOf();
    this.x56_1 = null;
    var tmp_0 = this;
    tmp_0.y56_1 = SaveableStateHolderImpl$canBeSaved$lambda(this);
  }
  protoOf(SaveableStateHolderImpl).d57 = function (key, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.g20(533563200);
    sourceInformation($composer_0, 'C(SaveableStateProvider)P(1)71@3248L1083:SaveableStateHolder.kt#r2ddri');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.b21(key) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.b21(content) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.b21(this) ? 256 : 128);
    if ($composer_0.d21(!(($dirty & 147) === 146), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(533563200, $dirty, -1, 'androidx.compose.runtime.saveable.SaveableStateHolderImpl.SaveableStateProvider (SaveableStateHolder.kt:70)');
      }
      // Inline function 'androidx.compose.runtime.ReusableContent' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1800201264, 'CC(ReusableContent)P(1)143@5486L9:Composables.kt#9igjgp');
      $composer_1.r20(207, key);
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1512655177, 'C72@3298L408,81@3719L200,86@3955L366,86@3932L389:SaveableStateHolder.kt#r2ddri');
      sourceInformationMarkerStart($composer_2, 366846518, 'CC(remember):SaveableStateHolder.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_2.u20();
      var tmp;
      if (false || it === Companion_getInstance().s1z_1) {
        // Inline function 'kotlin.require' call
        if (!this.y56_1(key)) {
          var message = 'Type of the key ' + toString(key) + ' is not supported. On Android you can only use types ' + 'which can be stored inside the Bundle.';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
        var value = new SaveableStateRegistryWrapper(SaveableStateRegistry_0(this.v56_1.g2(key), this.y56_1));
        $composer_2.v20(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp0_group = tmp;
      sourceInformationMarkerEnd($composer_2);
      var registry = tmp0_group;
      CompositionLocalProvider([get_LocalSaveableStateRegistry().e2m(registry), get_LocalSavedStateRegistryOwner().e2m(registry)], content, $composer_2, androidx_compose_runtime_ProvidedValue$stableprop_getter() | 112 & $dirty);
      sourceInformationMarkerStart($composer_2, 366867500, 'CC(remember):SaveableStateHolder.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_0.b21(this) | $composer_0.b21(key)) | $composer_0.b21(registry));
      // Inline function 'kotlin.let' call
      var it_0 = $composer_2.u20();
      var tmp_0;
      if (invalid || it_0 === Companion_getInstance().s1z_1) {
        var value_0 = SaveableStateHolderImpl$SaveableStateProvider$lambda(this, key, registry);
        $composer_2.v20(value_0);
        tmp_0 = value_0;
      } else {
        tmp_0 = it_0;
      }
      var tmp1_group = tmp_0;
      sourceInformationMarkerEnd($composer_2);
      DisposableEffect(Unit_instance, tmp1_group, $composer_2, 6);
      sourceInformationMarkerEnd($composer_2);
      $composer_1.s20();
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    var tmp1_safe_receiver = $composer_0.h20();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.k2m(SaveableStateHolderImpl$SaveableStateProvider$lambda_0(this, key, content, $changed));
    }
  };
  protoOf(SaveableStateHolderImpl).e57 = function (key) {
    if (this.w56_1.z1(key) == null) {
      // Inline function 'kotlin.collections.minusAssign' call
      this.v56_1.z1(key);
    }
  };
  function rememberSaveableStateHolder$lambda() {
    return new SaveableStateHolderImpl();
  }
  function get_LocalSaveableStateRegistry() {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return LocalSaveableStateRegistry;
  }
  var LocalSaveableStateRegistry;
  function SaveableStateRegistry() {
  }
  function SaveableStateRegistry_0(restoredValues, canBeSaved) {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return new SaveableStateRegistryImpl(restoredValues, canBeSaved);
  }
  function SaveableStateRegistryImpl$registerProvider$1($valueProviders, $key, $valueProvider) {
    this.f57_1 = $valueProviders;
    this.g57_1 = $key;
    this.h57_1 = $valueProvider;
  }
  protoOf(SaveableStateRegistryImpl$registerProvider$1).t56 = function () {
    var list = this.f57_1.z1(this.g57_1);
    if (list == null)
      null;
    else
      list.q1(this.h57_1);
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(list == null || list.n())) {
      this.f57_1.gq(this.g57_1, list);
    }
  };
  function SaveableStateRegistryImpl(restored, canBeSaved) {
    this.i57_1 = canBeSaved;
    var tmp = this;
    var tmp_0;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(restored == null || restored.n())) {
      tmp_0 = toMutableScatterMap(restored);
    } else {
      tmp_0 = null;
    }
    tmp.j57_1 = tmp_0;
    this.k57_1 = null;
  }
  protoOf(SaveableStateRegistryImpl).f56 = function (value) {
    return this.i57_1(value);
  };
  protoOf(SaveableStateRegistryImpl).g56 = function (key) {
    var tmp0_safe_receiver = this.j57_1;
    var list = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z1(key);
    var tmp;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(list == null || list.n())) {
      if (list.l() > 1) {
        var tmp1_safe_receiver = this.j57_1;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver.y1(key, list.o1(1, list.l()));
      }
      tmp = list.m(0);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SaveableStateRegistryImpl).q56 = function (key, valueProvider) {
    // Inline function 'kotlin.require' call
    if (!!fastIsBlank(key)) {
      var message = 'Registered key is empty or blank';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_elvis_lhs = this.k57_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterMapOf();
      this.k57_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var valueProviders = tmp;
    // Inline function 'androidx.collection.MutableScatterMap.getOrPut' call
    var tmp0_elvis_lhs_0 = valueProviders.g2(key);
    var tmp_0;
    if (tmp0_elvis_lhs_0 == null) {
      // Inline function 'kotlin.collections.mutableListOf' call
      // Inline function 'kotlin.also' call
      var this_1 = ArrayList_init_$Create$_0();
      valueProviders.gq(key, this_1);
      tmp_0 = this_1;
    } else {
      tmp_0 = tmp0_elvis_lhs_0;
    }
    tmp_0.h(valueProvider);
    return new SaveableStateRegistryImpl$registerProvider$1(valueProviders, key, valueProvider);
  };
  protoOf(SaveableStateRegistryImpl).z56 = function () {
    if (this.j57_1 == null && this.k57_1 == null) {
      return emptyMap();
    }
    var tmp0_safe_receiver = this.j57_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l();
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = this.k57_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.l();
    var expectedMapSize = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    // Inline function 'kotlin.apply' call
    var this_0 = HashMap_init_$Create$(expectedMapSize);
    var tmp0_safe_receiver_0 = this.j57_1;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'androidx.collection.ScatterMap.forEach' call
      var k = tmp0_safe_receiver_0.wp_1;
      var v = tmp0_safe_receiver_0.xp_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m = tmp0_safe_receiver_0.vp_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            var tmp$ret$4 = bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144));
            if (!equalsLong(tmp$ret$4, new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  var value = bitwiseAnd(slot, new Long(255, 0));
                  if (compare(value, new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    var tmp0 = k[index];
                    // Inline function 'kotlin.collections.set' call
                    var value_0 = v[index];
                    this_0.y1(tmp0, value_0);
                  }
                  slot = shiftRight(slot, 8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    }
    var map = this_0;
    var tmp4_safe_receiver = this.k57_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.collection.ScatterMap.forEach' call
      var k_0 = tmp4_safe_receiver.wp_1;
      var v_0 = tmp4_safe_receiver.xp_1;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m_0 = tmp4_safe_receiver.vp_1;
        var lastIndex_0 = m_0.length - 2 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var slot_0 = m_0[i_0];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_2 = slot_0;
            var tmp$ret$11 = bitwiseAnd(bitwiseAnd(this_2, shiftLeft(invert(this_2), 7)), new Long(-2139062144, -2139062144));
            if (!equalsLong(tmp$ret$11, new Long(-2139062144, -2139062144))) {
              var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < bitCount_0)
                do {
                  var j_0 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  var value_1 = bitwiseAnd(slot_0, new Long(255, 0));
                  if (compare(value_1, new Long(128, 0)) < 0) {
                    var index_0 = (i_0 << 3) + j_0 | 0;
                    var tmp0_0 = k_0[index_0];
                    var list = v_0[index_0];
                    if (list.l() === 1) {
                      var value_2 = list.m(0)();
                      if (!(value_2 == null)) {
                        // Inline function 'kotlin.check' call
                        if (!this.f56(value_2)) {
                          var message = generateCannotBeSavedErrorMessage(value_2);
                          throw IllegalStateException_init_$Create$(toString(message));
                        }
                        // Inline function 'kotlin.collections.set' call
                        var value_3 = arrayListOf([value_2]);
                        map.y1(tmp0_0, value_3);
                      }
                    } else {
                      // Inline function 'kotlin.collections.List' call
                      // Inline function 'kotlin.collections.MutableList' call
                      var size = list.l();
                      var list_0 = ArrayList_init_$Create$_1(size);
                      // Inline function 'kotlin.repeat' call
                      var inductionVariable_3 = 0;
                      if (inductionVariable_3 < size)
                        do {
                          var index_1 = inductionVariable_3;
                          inductionVariable_3 = inductionVariable_3 + 1 | 0;
                          var value_4 = list.m(index_1)();
                          if (!(value_4 == null)) {
                            // Inline function 'kotlin.check' call
                            if (!this.f56(value_4)) {
                              var message_0 = generateCannotBeSavedErrorMessage(value_4);
                              throw IllegalStateException_init_$Create$(toString(message_0));
                            }
                          }
                          list_0.h(value_4);
                        }
                         while (inductionVariable_3 < size);
                      // Inline function 'kotlin.collections.set' call
                      map.y1(tmp0_0, list_0);
                    }
                  }
                  slot_0 = shiftRight(slot_0, 8);
                }
                 while (inductionVariable_2 < bitCount_0);
              if (!(bitCount_0 === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i_0 === lastIndex_0));
      }
    }
    return map;
  };
  function toMutableScatterMap(_this__u8e3s4) {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    // Inline function 'kotlin.also' call
    var this_0 = new MutableScatterMap(_this__u8e3s4.l());
    // Inline function 'androidx.collection.MutableScatterMap.plusAssign' call
    this_0.iq(_this__u8e3s4);
    return this_0;
  }
  function fastIsBlank(_this__u8e3s4) {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    var blank = true;
    var inductionVariable = 0;
    var last = charSequenceLength(_this__u8e3s4);
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!isWhitespace(charSequenceGet(_this__u8e3s4, i))) {
          blank = false;
          break $l$loop;
        }
      }
       while (inductionVariable < last);
    return blank;
  }
  function LocalSaveableStateRegistry$lambda() {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return null;
  }
  var properties_initialized_SaveableStateRegistry_kt_4lrdzt;
  function _init_properties_SaveableStateRegistry_kt__lr5zhh() {
    if (!properties_initialized_SaveableStateRegistry_kt_4lrdzt) {
      properties_initialized_SaveableStateRegistry_kt_4lrdzt = true;
      LocalSaveableStateRegistry = staticCompositionLocalOf(LocalSaveableStateRegistry$lambda);
    }
  }
  var androidx_compose_runtime_saveable_SaveableStateRegistryWrapper$stable;
  function getOrInitLifecycle($this) {
    var tmp0_elvis_lhs = $this.m57_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = Companion_instance.c56($this);
      $this.m57_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_controller__bh9bov($this) {
    return getOrInitController($this, null);
  }
  function getOrInitController($this, savedState) {
    var tmp0_elvis_lhs = $this.n57_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = Companion_instance_0.i55($this);
      $this.n57_1 = this_0;
      this_0.l55(savedState);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SaveableStateRegistryWrapper$lambda(this$0) {
    return function () {
      var controller = this$0.n57_1;
      var tmp;
      if (!(controller == null)) {
        // Inline function 'androidx.savedstate.savedState' call
        var initialState = emptyMap();
        var copiedState = toMutableMap(initialState);
        // Inline function 'kotlin.apply' call
        var this_0 = new SavedState(copiedState);
        // Inline function 'androidx.savedstate.write' call
        _SavedStateWriter___init__impl__99cr38(this_0);
        var result = this_0;
        controller.m55(result);
        var tmp_0;
        // Inline function 'androidx.savedstate.read' call
        var $this$read = _SavedStateReader___init__impl__k2stzo(result);
        if (SavedStateReader__isEmpty_impl_ep4h1z($this$read)) {
          tmp_0 = null;
        } else {
          tmp_0 = result;
        }
        tmp = tmp_0;
      } else {
        tmp = null;
      }
      return tmp;
    };
  }
  function SaveableStateRegistryWrapper(base) {
    this.l57_1 = base;
    this.m57_1 = null;
    this.n57_1 = null;
    var tmp = this.g56('androidx.savedstate.SavedStateRegistry');
    var savedState = tmp instanceof SavedState ? tmp : null;
    if (!(savedState == null)) {
      getOrInitController(this, savedState);
    }
    this.q56('androidx.savedstate.SavedStateRegistry', SaveableStateRegistryWrapper$lambda(this));
  }
  protoOf(SaveableStateRegistryWrapper).c55 = function () {
    return getOrInitLifecycle(this);
  };
  protoOf(SaveableStateRegistryWrapper).o57 = function () {
    return _get_controller__bh9bov(this).k55_1;
  };
  protoOf(SaveableStateRegistryWrapper).g56 = function (key) {
    return this.l57_1.g56(key);
  };
  protoOf(SaveableStateRegistryWrapper).q56 = function (key, valueProvider) {
    return this.l57_1.q56(key, valueProvider);
  };
  protoOf(SaveableStateRegistryWrapper).f56 = function (value) {
    return this.l57_1.f56(value);
  };
  protoOf(SaveableStateRegistryWrapper).z56 = function () {
    return this.l57_1.z56();
  };
  function get_AutoSaver() {
    _init_properties_Saver_kt__z47nhf();
    return AutoSaver;
  }
  var AutoSaver;
  function Saver() {
  }
  function Saver_0(save, restore) {
    _init_properties_Saver_kt__z47nhf();
    return new Saver$1(save, restore);
  }
  function autoSaver() {
    _init_properties_Saver_kt__z47nhf();
    var tmp = get_AutoSaver();
    return isInterface(tmp, Saver) ? tmp : THROW_CCE();
  }
  function AutoSaver$lambda($this$Saver, it) {
    _init_properties_Saver_kt__z47nhf();
    return it;
  }
  function AutoSaver$lambda_0(it) {
    _init_properties_Saver_kt__z47nhf();
    return it;
  }
  function Saver$1($save, $restore) {
    this.p57_1 = $save;
    this.q57_1 = $restore;
  }
  protoOf(Saver$1).r56 = function (_this__u8e3s4, value) {
    return this.p57_1(_this__u8e3s4, value);
  };
  protoOf(Saver$1).h56 = function (value) {
    return this.q57_1(value);
  };
  var properties_initialized_Saver_kt_ch40dh;
  function _init_properties_Saver_kt__z47nhf() {
    if (!properties_initialized_Saver_kt_ch40dh) {
      properties_initialized_Saver_kt_ch40dh = true;
      var tmp = AutoSaver$lambda;
      AutoSaver = Saver_0(tmp, AutoSaver$lambda_0);
    }
  }
  //region block: init
  MaxSupportedRadix = 36;
  androidx_compose_runtime_saveable_SaveableStateRegistryWrapper$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LocalSaveableStateRegistry;
  _.$_$.b = SaveableStateRegistry_0;
  _.$_$.c = SaveableStateRegistry;
  _.$_$.d = Saver_0;
  _.$_$.e = Saver;
  _.$_$.f = listSaver;
  _.$_$.g = rememberSaveableStateHolder;
  _.$_$.h = rememberSaveable;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-compose-runtime-runtime-saveable.js.map
