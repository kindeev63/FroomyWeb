(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-navigationevent-navigationevent'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-navigationevent-navigationevent'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'androidx-navigationevent-navigationevent'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'androidx-navigationevent-navigationevent'.");
    }
    globalThis['androidx-navigationevent-navigationevent'] = factory(typeof globalThis['androidx-navigationevent-navigationevent'] === 'undefined' ? {} : globalThis['androidx-navigationevent-navigationevent'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var getKClassFromExpression = kotlin_kotlin.$_$.bb;
  var THROW_CCE = kotlin_kotlin.$_$.ld;
  var Unit_instance = kotlin_kotlin.$_$.n;
  var equalsLong = kotlin_kotlin.$_$.h8;
  var protoOf = kotlin_kotlin.$_$.fa;
  var getNumberHashCode = kotlin_kotlin.$_$.j9;
  var initMetadataForClass = kotlin_kotlin.$_$.n9;
  var objectCreate = kotlin_kotlin.$_$.ea;
  var toString = kotlin_kotlin.$_$.ha;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.o9;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.d1;
  var emptyList = kotlin_kotlin.$_$.u4;
  var get_indices = kotlin_kotlin.$_$.l5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var equals = kotlin_kotlin.$_$.f9;
  var hashCode = kotlin_kotlin.$_$.m9;
  var VOID = kotlin_kotlin.$_$.c;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.s;
  var toString_0 = kotlin_kotlin.$_$.me;
  var initMetadataForObject = kotlin_kotlin.$_$.t9;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(NavigationEvent, 'NavigationEvent');
  initMetadataForCompanion(Companion);
  initMetadataForClass(NavigationEventDispatcher, 'NavigationEventDispatcher', NavigationEventDispatcher_init_$Create$);
  initMetadataForClass(NavigationEventHistory, 'NavigationEventHistory');
  initMetadataForClass(NavigationEventInput, 'NavigationEventInput');
  initMetadataForClass(NavigationEventProcessor, 'NavigationEventProcessor', NavigationEventProcessor);
  initMetadataForClass(NavigationEventTransitionState, 'NavigationEventTransitionState');
  initMetadataForObject(Idle, 'Idle', VOID, NavigationEventTransitionState);
  initMetadataForClass(InProgress, 'InProgress', VOID, NavigationEventTransitionState);
  initMetadataForCompanion(Companion_0);
  //endregion
  function NavigationEvent() {
  }
  protoOf(NavigationEvent).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NavigationEvent))
      THROW_CCE();
    if (!(this.b5w_1 === other.b5w_1))
      return false;
    if (!(this.c5w_1 === other.c5w_1))
      return false;
    if (!(this.a5w_1 === other.a5w_1))
      return false;
    if (!(this.z5v_1 === other.z5v_1))
      return false;
    if (!equalsLong(this.d5w_1, other.d5w_1))
      return false;
    return true;
  };
  protoOf(NavigationEvent).hashCode = function () {
    var result = getNumberHashCode(this.b5w_1);
    result = imul(31, result) + getNumberHashCode(this.c5w_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.a5w_1) | 0;
    result = imul(31, result) + this.z5v_1 | 0;
    result = imul(31, result) + this.d5w_1.hashCode() | 0;
    return result;
  };
  protoOf(NavigationEvent).toString = function () {
    return 'NavigationEvent(touchX=' + this.b5w_1 + ', touchY=' + this.c5w_1 + ', progress=' + this.a5w_1 + ', ' + ('swipeEdge=' + this.z5v_1 + ', frameTimeMillis=' + this.d5w_1.toString() + ')');
  };
  function NavigationEventDispatcher_init_$Init$($this) {
    NavigationEventDispatcher.call($this, null, null);
    return $this;
  }
  function NavigationEventDispatcher_init_$Create$() {
    return NavigationEventDispatcher_init_$Init$(objectCreate(protoOf(NavigationEventDispatcher)));
  }
  function _get_isDisposed__7k3404($this) {
    var tmp;
    var tmp0_safe_receiver = $this.e5w_1;
    if ((tmp0_safe_receiver == null ? null : _get_isDisposed__7k3404(tmp0_safe_receiver)) === true) {
      tmp = true;
    } else {
      tmp = $this.g5w_1;
    }
    return tmp;
  }
  function checkInvariants($this) {
    // Inline function 'kotlin.check' call
    if (!!_get_isDisposed__7k3404($this)) {
      var message = 'This NavigationEventDispatcher has already been disposed and cannot be used.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function Companion() {
    this.m5w_1 = 0;
    this.n5w_1 = 1;
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function NavigationEventDispatcher(parent, onBackCompletedFallback) {
    this.e5w_1 = parent;
    this.f5w_1 = onBackCompletedFallback;
    this.g5w_1 = false;
    this.h5w_1 = true;
    var tmp = this;
    var tmp0_safe_receiver = this.e5w_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i5w_1;
    tmp.i5w_1 = tmp1_elvis_lhs == null ? new NavigationEventProcessor() : tmp1_elvis_lhs;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.j5w_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_1.k5w_1 = LinkedHashSet_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_2.l5w_1 = LinkedHashSet_init_$Create$();
    var tmp0_safe_receiver_0 = this.e5w_1;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.collections.plusAssign' call
      tmp0_safe_receiver_0.j5w_1.h(this);
    }
  }
  protoOf(NavigationEventDispatcher).o5w = function () {
    var tmp;
    var tmp0_safe_receiver = this.e5w_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o5w()) === false) {
      tmp = false;
    } else {
      tmp = this.h5w_1;
    }
    return tmp;
  };
  protoOf(NavigationEventDispatcher).p5w = function (input) {
    checkInvariants(this);
    if (this.l5w_1.h(input)) {
      this.i5w_1.f5x(this, input, -1);
    }
  };
  protoOf(NavigationEventDispatcher).g5x = function (input, direction, event) {
    checkInvariants(this);
    if (!this.o5w())
      return Unit_instance;
    this.i5w_1.h5x(input, direction, event);
  };
  protoOf(NavigationEventDispatcher).i5x = function (input, direction) {
    checkInvariants(this);
    if (!this.o5w())
      return Unit_instance;
    this.i5w_1.j5x(input, direction, this.f5w_1);
  };
  function NavigationEventHistory_init_$Init$($this) {
    NavigationEventHistory.call($this, emptyList(), -1);
    return $this;
  }
  function NavigationEventHistory_init_$Create$() {
    return NavigationEventHistory_init_$Init$(objectCreate(protoOf(NavigationEventHistory)));
  }
  function NavigationEventHistory(mergedHistory, currentIndex) {
    this.k5x_1 = mergedHistory;
    this.l5x_1 = currentIndex;
    var tmp;
    if (this.k5x_1.n() && this.l5x_1 === -1) {
      tmp = true;
    } else {
      var tmp_0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.k5x_1.n()) {
        var containsUpper = this.k5x_1.l() - 1 | 0;
        var containsArg = this.l5x_1;
        tmp_0 = 0 <= containsArg ? containsArg <= containsUpper : false;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = "Invalid 'NavigationEventHistory' state:  'currentIndex' must be within the bounds of 'mergedHistory' (or -1 if empty)." + (" Received: currentIndex = '" + this.l5x_1 + "', bounds = '" + get_indices(this.k5x_1).toString() + "'.");
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(NavigationEventHistory).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NavigationEventHistory))
      THROW_CCE();
    if (!(this.l5x_1 === other.l5x_1))
      return false;
    if (!equals(this.k5x_1, other.k5x_1))
      return false;
    return true;
  };
  protoOf(NavigationEventHistory).hashCode = function () {
    var result = this.l5x_1;
    result = imul(31, result) + hashCode(this.k5x_1) | 0;
    return result;
  };
  protoOf(NavigationEventHistory).toString = function () {
    return 'NavigationEventHistory(currentIndex=' + this.l5x_1 + ', mergedHistory=' + toString(this.k5x_1) + ')';
  };
  function NavigationEventInput() {
    this.m5x_1 = null;
    this.n5x_1 = false;
    this.o5x_1 = false;
  }
  protoOf(NavigationEventInput).p5x = function (dispatcher) {
    this.q5x(dispatcher);
  };
  protoOf(NavigationEventInput).q5x = function (dispatcher) {
  };
  protoOf(NavigationEventInput).r5x = function (hasEnabledHandlers) {
    this.s5x(hasEnabledHandlers);
  };
  protoOf(NavigationEventInput).s5x = function (hasEnabledHandlers) {
  };
  protoOf(NavigationEventInput).t5x = function (history) {
    this.u5x(history);
  };
  protoOf(NavigationEventInput).u5x = function (history) {
  };
  protoOf(NavigationEventInput).v5x = function () {
    var tmp0 = this.m5x_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'This input is not added to any dispatcher.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    var dispatcher = tmp$ret$0;
    if (!this.n5x_1) {
      dispatcher.g5x(this, -1, null);
    }
    dispatcher.i5x(this, -1);
    this.n5x_1 = false;
  };
  function resolveEnabledHandler($this, direction) {
    direction = direction === VOID ? 0 : direction;
    var tmp;
    switch (direction) {
      case 0:
        // Inline function 'androidx.navigationevent.NavigationEventProcessor.findHandler' call

        var tmp0 = $this.u5w_1;
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var _iterator__ex2g4s = tmp0.i();
          while (_iterator__ex2g4s.j()) {
            var element = _iterator__ex2g4s.k();
            if (element.d5y() || element.e5y()) {
              tmp$ret$1 = element;
              break $l$block;
            }
          }
          tmp$ret$1 = null;
        }

        var tmp0_elvis_lhs = tmp$ret$1;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          var tmp0_0 = $this.v5w_1;
          var tmp$ret$3;
          $l$block_0: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var _iterator__ex2g4s_0 = tmp0_0.i();
            while (_iterator__ex2g4s_0.j()) {
              var element_0 = _iterator__ex2g4s_0.k();
              if (element_0.d5y() || element_0.e5y()) {
                tmp$ret$3 = element_0;
                break $l$block_0;
              }
            }
            tmp$ret$3 = null;
          }
          tmp_0 = tmp$ret$3;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }

        tmp = tmp_0;
        break;
      case -1:
        // Inline function 'androidx.navigationevent.NavigationEventProcessor.findHandler' call

        var tmp0_1 = $this.u5w_1;
        var tmp$ret$6;
        $l$block_1: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var _iterator__ex2g4s_1 = tmp0_1.i();
          while (_iterator__ex2g4s_1.j()) {
            var element_1 = _iterator__ex2g4s_1.k();
            if (element_1.d5y()) {
              tmp$ret$6 = element_1;
              break $l$block_1;
            }
          }
          tmp$ret$6 = null;
        }

        var tmp0_elvis_lhs_0 = tmp$ret$6;
        var tmp_1;
        if (tmp0_elvis_lhs_0 == null) {
          var tmp0_2 = $this.v5w_1;
          var tmp$ret$8;
          $l$block_2: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var _iterator__ex2g4s_2 = tmp0_2.i();
            while (_iterator__ex2g4s_2.j()) {
              var element_2 = _iterator__ex2g4s_2.k();
              if (element_2.d5y()) {
                tmp$ret$8 = element_2;
                break $l$block_2;
              }
            }
            tmp$ret$8 = null;
          }
          tmp_1 = tmp$ret$8;
        } else {
          tmp_1 = tmp0_elvis_lhs_0;
        }

        tmp = tmp_1;
        break;
      case 1:
        // Inline function 'androidx.navigationevent.NavigationEventProcessor.findHandler' call

        var tmp0_3 = $this.u5w_1;
        var tmp$ret$11;
        $l$block_3: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var _iterator__ex2g4s_3 = tmp0_3.i();
          while (_iterator__ex2g4s_3.j()) {
            var element_3 = _iterator__ex2g4s_3.k();
            if (element_3.e5y()) {
              tmp$ret$11 = element_3;
              break $l$block_3;
            }
          }
          tmp$ret$11 = null;
        }

        var tmp0_elvis_lhs_1 = tmp$ret$11;
        var tmp_2;
        if (tmp0_elvis_lhs_1 == null) {
          var tmp0_4 = $this.v5w_1;
          var tmp$ret$13;
          $l$block_4: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var _iterator__ex2g4s_4 = tmp0_4.i();
            while (_iterator__ex2g4s_4.j()) {
              var element_4 = _iterator__ex2g4s_4.k();
              if (element_4.e5y()) {
                tmp$ret$13 = element_4;
                break $l$block_4;
              }
            }
            tmp$ret$13 = null;
          }
          tmp_2 = tmp$ret$13;
        } else {
          tmp_2 = tmp0_elvis_lhs_1;
        }

        tmp = tmp_2;
        break;
      default:
        // Inline function 'kotlin.error' call

        var message = "Unsupported direction: '" + direction + "'.";
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function NavigationEventProcessor() {
    this.q5w_1 = MutableStateFlow(Idle_getInstance());
    this.r5w_1 = asStateFlow(this.q5w_1);
    this.s5w_1 = MutableStateFlow(NavigationEventHistory_init_$Create$());
    this.t5w_1 = asStateFlow(this.s5w_1);
    this.u5w_1 = ArrayDeque_init_$Create$();
    this.v5w_1 = ArrayDeque_init_$Create$();
    this.w5w_1 = null;
    this.x5w_1 = 0;
    this.y5w_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp.z5w_1 = LinkedHashSet_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.a5x_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_1.b5x_1 = LinkedHashSet_init_$Create$();
    this.c5x_1 = false;
    this.d5x_1 = false;
    this.e5x_1 = false;
  }
  protoOf(NavigationEventProcessor).f5x = function (dispatcher, input, priority) {
    // Inline function 'kotlin.require' call
    if (!(input.m5x_1 == null)) {
      var message = "Input '" + toString(input) + "' is already added to dispatcher " + toString_0(input.m5x_1) + '.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inputs;
    switch (priority) {
      case 0:
        inputs = this.b5x_1;
        break;
      case 1:
        inputs = this.a5x_1;
        break;
      default:
        inputs = this.z5w_1;
        break;
    }
    // Inline function 'kotlin.collections.plusAssign' call
    inputs.h(input);
    input.m5x_1 = dispatcher;
    input.p5x(dispatcher);
    input.t5x(this.t5w_1.x1());
    var hasEnabledHandlers;
    switch (priority) {
      case 0:
        hasEnabledHandlers = this.d5x_1;
        break;
      case 1:
        hasEnabledHandlers = this.c5x_1;
        break;
      default:
        hasEnabledHandlers = this.e5x_1;
        break;
    }
    input.r5x(hasEnabledHandlers);
  };
  protoOf(NavigationEventProcessor).h5x = function (input, direction, event) {
    if (!(this.x5w_1 === 0)) {
      return Unit_instance;
    }
    var handler = resolveEnabledHandler(this, direction);
    this.w5w_1 = handler;
    this.x5w_1 = direction;
    this.y5w_1 = input;
    if (!(event == null)) {
      switch (direction) {
        case -1:
          if (handler == null)
            null;
          else {
            handler.f5y(event);
          }

          break;
        case 1:
          if (handler == null)
            null;
          else {
            handler.g5y(event);
          }

          break;
        case 0:
          break;
      }
      this.q5w_1.k1k(new InProgress(event, direction));
    }
  };
  protoOf(NavigationEventProcessor).j5x = function (input, direction, onBackCompletedFallback) {
    if (!equals(input, this.y5w_1) || !(direction === this.x5w_1)) {
      return Unit_instance;
    }
    var tmp0_elvis_lhs = this.w5w_1;
    var handler = tmp0_elvis_lhs == null ? resolveEnabledHandler(this, direction) : tmp0_elvis_lhs;
    this.w5w_1 = null;
    this.x5w_1 = 0;
    this.y5w_1 = null;
    switch (direction) {
      case -1:
        if (handler == null) {
          if (onBackCompletedFallback == null)
            null;
          else {
            onBackCompletedFallback.i5y();
          }
        } else {
          handler.h5y();
        }

        break;
      case 1:
        if (handler == null)
          null;
        else {
          handler.j5y();
        }

        break;
      case 0:
        break;
    }
    this.q5w_1.k1k(Idle_getInstance());
  };
  function Idle() {
    Idle_instance = this;
    NavigationEventTransitionState.call(this);
  }
  protoOf(Idle).toString = function () {
    return 'Idle()';
  };
  var Idle_instance;
  function Idle_getInstance() {
    if (Idle_instance == null)
      new Idle();
    return Idle_instance;
  }
  function InProgress(latestEvent, direction) {
    NavigationEventTransitionState.call(this);
    this.k5y_1 = latestEvent;
    this.l5y_1 = direction;
  }
  protoOf(InProgress).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof InProgress))
      THROW_CCE();
    if (!(this.l5y_1 === other.l5y_1))
      return false;
    if (!this.k5y_1.equals(other.k5y_1))
      return false;
    return true;
  };
  protoOf(InProgress).hashCode = function () {
    var result = this.l5y_1;
    result = imul(31, result) + this.k5y_1.hashCode() | 0;
    return result;
  };
  protoOf(InProgress).toString = function () {
    return 'InProgress(latestEvent=' + this.k5y_1.toString() + ', direction=' + this.l5y_1 + ')';
  };
  function Companion_0() {
    this.m5y_1 = 0;
    this.n5y_1 = 1;
    this.o5y_1 = -1;
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function NavigationEventTransitionState() {
  }
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = NavigationEventInput;
  _.$_$.b = NavigationEventDispatcher_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-navigationevent-navigationevent.js.map
