(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-lifecycle-lifecycle-common.js', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-lifecycle-lifecycle-common.js'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['androidx-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-runtime'. Its dependency 'androidx-lifecycle-lifecycle-common' was not found. Please, check whether 'androidx-lifecycle-lifecycle-common' is loaded prior to 'androidx-lifecycle-lifecycle-runtime'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-lifecycle-lifecycle-runtime'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'androidx-lifecycle-lifecycle-runtime'.");
    }
    globalThis['androidx-lifecycle-lifecycle-runtime'] = factory(typeof globalThis['androidx-lifecycle-lifecycle-runtime'] === 'undefined' ? {} : globalThis['androidx-lifecycle-lifecycle-runtime'], globalThis['androidx-lifecycle-lifecycle-common'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_androidx_lifecycle_lifecycle_common, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var State_CREATED_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.j;
  var toString = kotlin_kotlin.$_$.me;
  var toString_0 = kotlin_kotlin.$_$.ha;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var State_INITIALIZED_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.l;
  var State_DESTROYED_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.k;
  var protoOf = kotlin_kotlin.$_$.fa;
  var objectCreate = kotlin_kotlin.$_$.ea;
  var Unit_instance = kotlin_kotlin.$_$.n;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.b1;
  var first = kotlin_kotlin.$_$.e5;
  var last = kotlin_kotlin.$_$.x5;
  var toList = kotlin_kotlin.$_$.w6;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.d1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u;
  var THROW_CCE = kotlin_kotlin.$_$.ld;
  var KtMap = kotlin_kotlin.$_$.q3;
  var isInterface = kotlin_kotlin.$_$.w9;
  var Companion_instance = kotlin_androidx_lifecycle_lifecycle_common.$_$.c;
  var reversed = kotlin_kotlin.$_$.m6;
  var lastOrNull = kotlin_kotlin.$_$.t5;
  var Lifecycling_instance = kotlin_androidx_lifecycle_lifecycle_common.$_$.d;
  var ensureNotNull = kotlin_kotlin.$_$.ud;
  var initMetadataForClass = kotlin_kotlin.$_$.n9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.o9;
  var Lifecycle = kotlin_androidx_lifecycle_lifecycle_common.$_$.b;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var VOID = kotlin_kotlin.$_$.c;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ObserverWithState, 'ObserverWithState');
  initMetadataForCompanion(Companion);
  initMetadataForClass(LifecycleRegistry, 'LifecycleRegistry', VOID, Lifecycle);
  initMetadataForClass(WeakReference, 'WeakReference');
  //endregion
  function checkLifecycleStateTransition(owner, current, next) {
    if (current.equals(State_INITIALIZED_getInstance()) && next.equals(State_DESTROYED_getInstance())) {
      // Inline function 'kotlin.error' call
      var message = "State must be at least '" + State_CREATED_getInstance().toString() + "' to be moved to '" + next.toString() + "' in component " + toString(owner);
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    if (current.equals(State_DESTROYED_getInstance()) && !current.equals(next)) {
      // Inline function 'kotlin.error' call
      var message_0 = "State is '" + State_DESTROYED_getInstance().toString() + "' and cannot be moved to `" + next.toString() + '` in component ' + toString(owner);
      throw IllegalStateException_init_$Create$(toString_0(message_0));
    }
  }
  function LifecycleRegistry_init_$Init$(provider, $this) {
    LifecycleRegistry.call($this, provider, true);
    return $this;
  }
  function LifecycleRegistry_init_$Create$(provider) {
    return LifecycleRegistry_init_$Init$(provider, objectCreate(protoOf(LifecycleRegistry)));
  }
  function moveToState($this, next) {
    if ($this.q55_1.equals(next)) {
      return Unit_instance;
    }
    checkLifecycleStateTransition($this.r55_1.x13(), $this.q55_1, next);
    $this.q55_1 = next;
    if ($this.t55_1 || !($this.s55_1 === 0)) {
      $this.u55_1 = true;
      return Unit_instance;
    }
    $this.t55_1 = true;
    sync($this);
    $this.t55_1 = false;
    if ($this.q55_1.equals(State_DESTROYED_getInstance())) {
      var tmp = $this;
      // Inline function 'kotlin.collections.linkedMapOf' call
      tmp.p55_1 = LinkedHashMap_init_$Create$();
    }
  }
  function _get_isSynced__dwdj3t($this) {
    if ($this.p55_1.n()) {
      return true;
    }
    var eldestObserverState = first($this.p55_1.c2()).y55_1;
    var newestObserverState = last($this.p55_1.c2()).y55_1;
    return eldestObserverState.equals(newestObserverState) && $this.q55_1.equals(newestObserverState);
  }
  function calculateTargetState($this, observer) {
    // Inline function 'kotlin.let' call
    var it = toList($this.p55_1.b2());
    var index = it.u(observer);
    var tmp;
    if (index > 0) {
      var tmp0_safe_receiver = $this.p55_1.g2(it.m(index - 1 | 0));
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y55_1;
    } else {
      tmp = null;
    }
    var siblingState = tmp;
    var tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.v55_1.n()) {
      tmp_0 = $this.v55_1.m($this.v55_1.l() - 1 | 0);
    } else {
      tmp_0 = null;
    }
    var parentState = tmp_0;
    return Companion_instance_0.a56(Companion_instance_0.a56($this.q55_1, siblingState), parentState);
  }
  function popParentState($this) {
    $this.v55_1.v1($this.v55_1.l() - 1 | 0);
  }
  function pushParentState($this, state) {
    $this.v55_1.h(state);
  }
  function forwardPass($this, lifecycleOwner) {
    // Inline function 'androidx.lifecycle.LifecycleRegistry.forEachObserverWithAdditions' call
    // Inline function 'kotlin.collections.mutableSetOf' call
    var visited = LinkedHashSet_init_$Create$();
    $l$loop: while (!$this.u55_1) {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = $this.p55_1.b2();
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (!visited.t(element)) {
          destination.h(element);
        }
      }
      var keys = destination;
      if (keys.n()) {
        break $l$loop;
      }
      var _iterator__ex2g4s_0 = keys.i();
      $l$loop_1: while (_iterator__ex2g4s_0.j()) {
        var key = _iterator__ex2g4s_0.k();
        if ($this.u55_1) {
          break $l$loop_1;
        }
        var tmp0_elvis_lhs = $this.p55_1.g2(key);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop_1;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var value = tmp;
        $l$loop_2: while (true) {
          var tmp_0;
          if (value.y55_1.j2($this.q55_1) < 0 && !$this.u55_1) {
            // Inline function 'kotlin.collections.contains' call
            // Inline function 'kotlin.collections.containsKey' call
            var this_0 = $this.p55_1;
            tmp_0 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).e2(key);
          } else {
            tmp_0 = false;
          }
          if (!tmp_0) {
            break $l$loop_2;
          }
          pushParentState($this, value.y55_1);
          var tmp0_elvis_lhs_0 = Companion_instance.a54(value.y55_1);
          var tmp_1;
          if (tmp0_elvis_lhs_0 == null) {
            throw IllegalStateException_init_$Create$('no event up from ' + value.y55_1.toString());
          } else {
            tmp_1 = tmp0_elvis_lhs_0;
          }
          var event = tmp_1;
          value.b56(lifecycleOwner, event);
          popParentState($this);
        }
        visited.h(key);
      }
    }
  }
  function backwardPass($this, lifecycleOwner) {
    // Inline function 'androidx.lifecycle.LifecycleRegistry.forEachObserverReversed' call
    var keys = reversed($this.p55_1.b2());
    var _iterator__ex2g4s = keys.i();
    $l$loop_0: while (_iterator__ex2g4s.j()) {
      var key = _iterator__ex2g4s.k();
      if ($this.u55_1) {
        break $l$loop_0;
      }
      var tmp0_elvis_lhs = $this.p55_1.g2(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      $l$loop_1: while (true) {
        var tmp_0;
        if (value.y55_1.j2($this.q55_1) > 0 && !$this.u55_1) {
          // Inline function 'kotlin.collections.contains' call
          // Inline function 'kotlin.collections.containsKey' call
          var this_0 = $this.p55_1;
          tmp_0 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).e2(key);
        } else {
          tmp_0 = false;
        }
        if (!tmp_0) {
          break $l$loop_1;
        }
        var tmp0_elvis_lhs_0 = Companion_instance.z53(value.y55_1);
        var tmp_1;
        if (tmp0_elvis_lhs_0 == null) {
          throw IllegalStateException_init_$Create$('no event down from ' + value.y55_1.toString());
        } else {
          tmp_1 = tmp0_elvis_lhs_0;
        }
        var event = tmp_1;
        pushParentState($this, event.d54());
        value.b56(lifecycleOwner, event);
        popParentState($this);
      }
    }
  }
  function sync($this) {
    var tmp0_elvis_lhs = $this.r55_1.x13();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('LifecycleOwner of this LifecycleRegistry is already garbage collected. It is too late to change lifecycle state.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var lifecycleOwner = tmp;
    while (!_get_isSynced__dwdj3t($this)) {
      $this.u55_1 = false;
      if ($this.q55_1.j2(first($this.p55_1.c2()).y55_1) < 0) {
        backwardPass($this, lifecycleOwner);
      }
      var newest = lastOrNull($this.p55_1.c2());
      if (!$this.u55_1 && !(newest == null) && $this.q55_1.j2(newest.y55_1) > 0) {
        forwardPass($this, lifecycleOwner);
      }
    }
    $this.u55_1 = false;
    $this.w55_1.k1k($this.k54());
  }
  function enforceMainThreadIfNeeded($this, methodName) {
    if ($this.o55_1) {
      // Inline function 'kotlin.check' call
      if (!isMainThread()) {
        var message = 'Method ' + methodName + ' must be called on the main thread';
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
    }
  }
  function ObserverWithState(observer, initialState) {
    this.z55_1 = Lifecycling_instance.m54(ensureNotNull(observer));
    this.y55_1 = initialState;
  }
  protoOf(ObserverWithState).b56 = function (owner, event) {
    var newState = event.d54();
    this.y55_1 = Companion_instance_0.a56(this.y55_1, newState);
    this.z55_1.y53(ensureNotNull(owner), event);
    this.y55_1 = newState;
  };
  function Companion() {
  }
  protoOf(Companion).c56 = function (owner) {
    return new LifecycleRegistry(owner, false);
  };
  protoOf(Companion).a56 = function (state1, state2) {
    return !(state2 == null) && state2.j2(state1) < 0 ? state2 : state1;
  };
  var Companion_instance_0;
  function Companion_getInstance() {
    return Companion_instance_0;
  }
  function LifecycleRegistry(provider, enforceMainThread) {
    Lifecycle.call(this);
    this.o55_1 = enforceMainThread;
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.p55_1 = LinkedHashMap_init_$Create$();
    this.q55_1 = State_INITIALIZED_getInstance();
    this.s55_1 = 0;
    this.t55_1 = false;
    this.u55_1 = false;
    this.v55_1 = ArrayList_init_$Create$();
    this.r55_1 = new WeakReference(provider);
    this.w55_1 = MutableStateFlow(State_INITIALIZED_getInstance());
  }
  protoOf(LifecycleRegistry).d56 = function (state) {
    enforceMainThreadIfNeeded(this, 'setCurrentState');
    moveToState(this, state);
  };
  protoOf(LifecycleRegistry).k54 = function () {
    return this.q55_1;
  };
  protoOf(LifecycleRegistry).e56 = function (event) {
    enforceMainThreadIfNeeded(this, 'handleLifecycleEvent');
    moveToState(this, event.d54());
  };
  protoOf(LifecycleRegistry).i54 = function (observer) {
    enforceMainThreadIfNeeded(this, 'addObserver');
    var initialState = this.q55_1.equals(State_DESTROYED_getInstance()) ? State_DESTROYED_getInstance() : State_INITIALIZED_getInstance();
    var statefulObserver = new ObserverWithState(observer, initialState);
    var previous = this.p55_1.y1(observer, statefulObserver);
    if (!(previous == null)) {
      return Unit_instance;
    }
    var tmp0_elvis_lhs = this.r55_1.x13();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var lifecycleOwner = tmp;
    var isReentrance = !(this.s55_1 === 0) || this.t55_1;
    var targetState = calculateTargetState(this, observer);
    this.s55_1 = this.s55_1 + 1 | 0;
    $l$loop: while (true) {
      var tmp_0;
      if (statefulObserver.y55_1.j2(targetState) < 0) {
        // Inline function 'kotlin.collections.contains' call
        // Inline function 'kotlin.collections.containsKey' call
        var this_0 = this.p55_1;
        tmp_0 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).e2(observer);
      } else {
        tmp_0 = false;
      }
      if (!tmp_0) {
        break $l$loop;
      }
      pushParentState(this, statefulObserver.y55_1);
      var tmp1_elvis_lhs = Companion_instance.a54(statefulObserver.y55_1);
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('no event up from ' + statefulObserver.y55_1.toString());
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var event = tmp_1;
      statefulObserver.b56(lifecycleOwner, event);
      popParentState(this);
      targetState = calculateTargetState(this, observer);
    }
    if (!isReentrance) {
      sync(this);
    }
    this.s55_1 = this.s55_1 - 1 | 0;
  };
  protoOf(LifecycleRegistry).j54 = function (observer) {
    enforceMainThreadIfNeeded(this, 'removeObserver');
    this.p55_1.z1(observer);
  };
  function isMainThread() {
    return true;
  }
  function WeakReference(reference) {
    this.x55_1 = reference;
  }
  protoOf(WeakReference).x13 = function () {
    return this.x55_1;
  };
  //region block: init
  Companion_instance_0 = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_instance_0;
  _.$_$.b = LifecycleRegistry_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-lifecycle-lifecycle-runtime.js.map
