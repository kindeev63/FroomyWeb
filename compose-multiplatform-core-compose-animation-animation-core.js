(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './androidx-collection-collection.js', './compose-multiplatform-core-compose-ui-ui.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./androidx-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    globalThis['compose-multiplatform-core-compose-animation-animation-core'] = factory(typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['androidx-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_androidx_collection_collection, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var hypot = Math.hypot;
  var Unit_instance = kotlin_kotlin.$_$.n;
  var equals = kotlin_kotlin.$_$.f9;
  var KMutableProperty1 = kotlin_kotlin.$_$.eb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.k9;
  var VOID = kotlin_kotlin.$_$.c;
  var coerceIn = kotlin_kotlin.$_$.va;
  var Long = kotlin_kotlin.$_$.gd;
  var CoroutineImpl = kotlin_kotlin.$_$.s7;
  var protoOf = kotlin_kotlin.$_$.fa;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.d7;
  var CancellationException = kotlin_kotlin.$_$.c7;
  var initMetadataForLambda = kotlin_kotlin.$_$.s9;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.l1;
  var THROW_CCE = kotlin_kotlin.$_$.ld;
  var initMetadataForClass = kotlin_kotlin.$_$.n9;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.g;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.s1;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.a2;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.h1;
  var rememberUpdatedState = kotlin_androidx_compose_runtime_runtime.$_$.p1;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var SideEffect = kotlin_androidx_compose_runtime_runtime.$_$.x;
  var LaunchedEffect = kotlin_androidx_compose_runtime_runtime.$_$.q;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var KProperty0 = kotlin_kotlin.$_$.fb;
  var getLocalDelegateReference = kotlin_kotlin.$_$.i9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var isInterface = kotlin_kotlin.$_$.w9;
  var ChannelResult__getOrNull_impl_f5e07h = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o1;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.h;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var objectCreate = kotlin_kotlin.$_$.ea;
  var isNaN_0 = kotlin_kotlin.$_$.wd;
  var toString = kotlin_kotlin.$_$.ha;
  var compare = kotlin_kotlin.$_$.d8;
  var toString_0 = kotlin_kotlin.$_$.me;
  var initMetadataForInterface = kotlin_kotlin.$_$.r9;
  var divide = kotlin_kotlin.$_$.g8;
  var Enum = kotlin_kotlin.$_$.ad;
  var hashCode = kotlin_kotlin.$_$.m9;
  var getNumberHashCode = kotlin_kotlin.$_$.j9;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.w7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var computeCubicVerticalBounds = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o1;
  var _FloatFloatPair___get_packedValue__impl__5lczxp = kotlin_androidx_collection_collection.$_$.m1;
  var shiftRight = kotlin_kotlin.$_$.q8;
  var convertToInt = kotlin_kotlin.$_$.e8;
  var floatFromBits = kotlin_kotlin.$_$.g9;
  var bitwiseAnd = kotlin_kotlin.$_$.a8;
  var findFirstCubicRoot = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s1;
  var evaluateCubic = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r1;
  var FunctionAdapter = kotlin_kotlin.$_$.t8;
  var numberToLong = kotlin_kotlin.$_$.n8;
  var multiply = kotlin_kotlin.$_$.l8;
  var subtract = kotlin_kotlin.$_$.r8;
  var toNumber = kotlin_kotlin.$_$.s8;
  var add = kotlin_kotlin.$_$.z7;
  var equalsLong = kotlin_kotlin.$_$.h8;
  var withFrameNanos = kotlin_androidx_compose_runtime_runtime.$_$.c2;
  var Key_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.m6;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.p9;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var Key_instance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var ensureNotNull = kotlin_kotlin.$_$.ud;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var captureStack = kotlin_kotlin.$_$.w8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var toRawBits = kotlin_kotlin.$_$.le;
  var isNaN_1 = kotlin_kotlin.$_$.xd;
  var toRawBits_0 = kotlin_kotlin.$_$.ke;
  var fromInt = kotlin_kotlin.$_$.i8;
  var shiftLeft = kotlin_kotlin.$_$.o8;
  var bitwiseOr = kotlin_kotlin.$_$.b8;
  var Key_instance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.q6;
  var numberToInt = kotlin_kotlin.$_$.da;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var _DpOffset___get_x__impl__uauqb5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var _DpOffset___get_y__impl__1h898y = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var _DpOffset___init__impl__yq36wy = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var DpOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var _Size___init__impl__aywn0g = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var _Offset___get_packedValue__impl__xh2k8q = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.z;
  var _Offset___init__impl__c168vi = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a3;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b3;
  var roundToInt = kotlin_kotlin.$_$.ka;
  var _IntOffset___init__impl__rq8h7b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u2;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e3;
  var _IntSize___init__impl__emcjft = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var to = kotlin_kotlin.$_$.ne;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p1;
  var mapOf = kotlin_kotlin.$_$.c6;
  var compareTo = kotlin_kotlin.$_$.b9;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.f1;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(Animatable$runAnimation$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Animatable$snapTo$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Animatable$stop$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForClass(Animatable, 'Animatable', VOID, VOID, VOID, [4, 3, 1, 0]);
  initMetadataForClass(AnimationResult, 'AnimationResult');
  initMetadataForLambda(animateValueAsState$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(animateValueAsState$slambda, CoroutineImpl, VOID, [1]);
  function isFinishedFromNanos(playTimeNanos) {
    return compare(playTimeNanos, this.ba8()) >= 0;
  }
  initMetadataForInterface(Animation, 'Animation');
  initMetadataForClass(TargetBasedAnimation, 'TargetBasedAnimation', VOID, VOID, [Animation]);
  initMetadataForClass(DecayAnimation, 'DecayAnimation', VOID, VOID, [Animation]);
  initMetadataForClass(AnimationEndReason, 'AnimationEndReason', VOID, Enum);
  initMetadataForInterface(FiniteAnimationSpec, 'FiniteAnimationSpec');
  initMetadataForClass(SpringSpec, 'SpringSpec', SpringSpec, VOID, [FiniteAnimationSpec]);
  initMetadataForClass(TweenSpec, 'TweenSpec', TweenSpec, VOID, [FiniteAnimationSpec]);
  initMetadataForClass(AnimationState, 'AnimationState');
  initMetadataForClass(AnimationScope, 'AnimationScope');
  initMetadataForClass(AnimationVector, 'AnimationVector');
  initMetadataForClass(AnimationVector1D, 'AnimationVector1D', VOID, AnimationVector);
  initMetadataForClass(AnimationVector4D, 'AnimationVector4D', VOID, AnimationVector);
  initMetadataForClass(AnimationVector2D, 'AnimationVector2D', VOID, AnimationVector);
  initMetadataForClass(AnimationVector3D, 'AnimationVector3D', VOID, AnimationVector);
  initMetadataForClass(Arc, 'Arc');
  initMetadataForClass(ArcSpline, 'ArcSpline');
  initMetadataForClass(DecayAnimationSpecImpl, 'DecayAnimationSpecImpl');
  initMetadataForClass(VectorizedFloatDecaySpec, 'VectorizedFloatDecaySpec');
  initMetadataForInterface(Easing, 'Easing');
  initMetadataForClass(CubicBezierEasing, 'CubicBezierEasing', VOID, VOID, [Easing]);
  initMetadataForClass(sam$androidx_compose_animation_core_Easing$0, 'sam$androidx_compose_animation_core_Easing$0', VOID, VOID, [Easing, FunctionAdapter]);
  function getEndVelocity(initialValue, targetValue, initialVelocity) {
    return this.gab(this.fab(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  function vectorize(converter) {
    return VectorizedFloatAnimationSpec_init_$Create$(this);
  }
  initMetadataForInterface(FloatAnimationSpec, 'FloatAnimationSpec');
  initMetadataForClass(FloatTweenSpec, 'FloatTweenSpec', FloatTweenSpec, VOID, [FloatAnimationSpec]);
  initMetadataForClass(FloatSpringSpec, 'FloatSpringSpec', FloatSpringSpec, VOID, [FloatAnimationSpec]);
  initMetadataForLambda(withInfiniteAnimationFrameNanos$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($withInfiniteAnimationFrameNanosCOROUTINE$, CoroutineImpl);
  initMetadataForClass(Mutator, 'Mutator');
  initMetadataForLambda(MutatorMutex$mutate$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(MutatorMutex, 'MutatorMutex', MutatorMutex, VOID, VOID, [2, 3]);
  initMetadataForClass(MutatePriority, 'MutatePriority', VOID, Enum);
  initMetadataForClass(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', VOID, CancellationException);
  initMetadataForClass(MutationInterruptedException, 'MutationInterruptedException', MutationInterruptedException, PlatformOptimizedCancellationException);
  initMetadataForClass(SpringSimulation, 'SpringSimulation');
  initMetadataForCoroutine($animateCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($callWithFrameNanosCOROUTINE$, CoroutineImpl);
  initMetadataForClass(TwoWayConverterImpl, 'TwoWayConverterImpl');
  function getEndVelocity_0(initialValue, targetValue, initialVelocity) {
    return this.ea8(this.ca8(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  initMetadataForInterface(VectorizedAnimationSpec, 'VectorizedAnimationSpec');
  function get_isInfinite() {
    return false;
  }
  initMetadataForInterface(VectorizedFiniteAnimationSpec, 'VectorizedFiniteAnimationSpec', VOID, VOID, [VectorizedAnimationSpec]);
  initMetadataForClass(VectorizedSpringSpec, 'VectorizedSpringSpec', VectorizedSpringSpec_init_$Create$, VOID, [VectorizedFiniteAnimationSpec]);
  function getDurationNanos(initialValue, targetValue, initialVelocity) {
    return multiply(numberToLong(this.xae() + this.wae() | 0), new Long(1000000, 0));
  }
  initMetadataForInterface(VectorizedDurationBasedAnimationSpec, 'VectorizedDurationBasedAnimationSpec', VOID, VOID, [VectorizedFiniteAnimationSpec]);
  initMetadataForClass(VectorizedTweenSpec, 'VectorizedTweenSpec', VectorizedTweenSpec, VOID, [VectorizedDurationBasedAnimationSpec]);
  initMetadataForClass(VectorizedFloatAnimationSpec$1);
  initMetadataForClass(VectorizedFloatAnimationSpec, 'VectorizedFloatAnimationSpec', VOID, VOID, [VectorizedFiniteAnimationSpec]);
  initMetadataForClass(createSpringAnimations$1);
  initMetadataForClass(createSpringAnimations$2);
  initMetadataForClass(AtomicReference, 'AtomicReference');
  //endregion
  function get_positiveInfinityBounds1D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds1D;
  }
  var positiveInfinityBounds1D;
  function get_positiveInfinityBounds2D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds2D;
  }
  var positiveInfinityBounds2D;
  function get_positiveInfinityBounds3D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds3D;
  }
  var positiveInfinityBounds3D;
  function get_positiveInfinityBounds4D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds4D;
  }
  var positiveInfinityBounds4D;
  function get_negativeInfinityBounds1D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds1D;
  }
  var negativeInfinityBounds1D;
  function get_negativeInfinityBounds2D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds2D;
  }
  var negativeInfinityBounds2D;
  function get_negativeInfinityBounds3D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds3D;
  }
  var negativeInfinityBounds3D;
  function get_negativeInfinityBounds4D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds4D;
  }
  var negativeInfinityBounds4D;
  var androidx_compose_animation_core_Animatable$stable;
  var androidx_compose_animation_core_AnimationResult$stable;
  function Animatable$runAnimation$slambda$lambda(this$0, $endState, $block, $clampingNeeded) {
    return function ($this$animate) {
      updateState($this$animate, this$0.aa3_1);
      var clamped = clampToBounds(this$0, $this$animate.x1());
      if (!equals(clamped, $this$animate.x1())) {
        this$0.aa3_1.aa4(clamped);
        $endState.aa4(clamped);
        var tmp0_safe_receiver = $block;
        if (tmp0_safe_receiver == null)
          null;
        else
          tmp0_safe_receiver(this$0);
        $this$animate.ba4();
        $clampingNeeded._v = true;
      } else {
        var tmp1_safe_receiver = $block;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver(this$0);
      }
      return Unit_instance;
    };
  }
  function _set_isRunning__kpbg34($this, _set____db54di) {
    var tmp0 = $this.ba3_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Animatable$_get_isRunning_$ref_121fnp_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isRunning', 1, tmp, tmp_0, Animatable$_set_isRunning_$ref_g9sy61_0());
    tmp0.k1k(_set____db54di);
    return Unit_instance;
  }
  function _set_targetValue__aqsk0r($this, _set____db54di) {
    var tmp0 = $this.ca3_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Animatable$_get_targetValue_$ref_gosum2_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('targetValue', 1, tmp, tmp_0, Animatable$_set_targetValue_$ref_6l2n3i_0());
    tmp0.k1k(_set____db54di);
    return Unit_instance;
  }
  function runAnimation($this, animation, initialVelocity, block, $completion) {
    var startTime = $this.aa3_1.xa3_1;
    return $this.fa3_1.ea4(VOID, Animatable$runAnimation$slambda_0($this, initialVelocity, animation, startTime, block, null), $completion);
  }
  function clampToBounds($this, value) {
    if (equals($this.ja3_1, $this.ha3_1) && equals($this.ka3_1, $this.ia3_1)) {
      return value;
    }
    var valueVector = $this.xa2_1.fa4()(value);
    var clamped = false;
    var inductionVariable = 0;
    var last = valueVector.ga4();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (valueVector.ha4(i) < $this.ja3_1.ha4(i) || valueVector.ha4(i) > $this.ka3_1.ha4(i)) {
          clamped = true;
          valueVector.ia4(i, coerceIn(valueVector.ha4(i), $this.ja3_1.ha4(i), $this.ka3_1.ha4(i)));
        }
      }
       while (inductionVariable < last);
    if (clamped) {
      return $this.xa2_1.ja4()(valueVector);
    } else {
      return value;
    }
  }
  function endAnimation($this) {
    // Inline function 'kotlin.apply' call
    var this_0 = $this.aa3_1;
    this_0.wa3_1.ka4();
    this_0.xa3_1 = new Long(0, -2147483648);
    _set_isRunning__kpbg34($this, false);
  }
  function Animatable$_get_isRunning_$ref_121fnp() {
    return function (p0) {
      return p0.la4();
    };
  }
  function Animatable$_set_isRunning_$ref_g9sy61() {
    return function (p0, p1) {
      _set_isRunning__kpbg34(p0, p1);
      return Unit_instance;
    };
  }
  function Animatable$_get_isRunning_$ref_121fnp_0() {
    return function (p0) {
      return p0.la4();
    };
  }
  function Animatable$_set_isRunning_$ref_g9sy61_0() {
    return function (p0, p1) {
      _set_isRunning__kpbg34(p0, p1);
      return Unit_instance;
    };
  }
  function Animatable$_get_targetValue_$ref_gosum2() {
    return function (p0) {
      return p0.ma4();
    };
  }
  function Animatable$_set_targetValue_$ref_6l2n3i() {
    return function (p0, p1) {
      _set_targetValue__aqsk0r(p0, p1);
      return Unit_instance;
    };
  }
  function Animatable$_get_targetValue_$ref_gosum2_0() {
    return function (p0) {
      return p0.ma4();
    };
  }
  function Animatable$_set_targetValue_$ref_6l2n3i_0() {
    return function (p0, p1) {
      _set_targetValue__aqsk0r(p0, p1);
      return Unit_instance;
    };
  }
  function Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    this.va4_1 = this$0;
    this.wa4_1 = $initialVelocity;
    this.xa4_1 = $animation;
    this.ya4_1 = $startTime;
    this.za4_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$runAnimation$slambda).da5 = function ($completion) {
    var tmp = this.p1o($completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(Animatable$runAnimation$slambda).q1o = function ($completion) {
    return this.da5($completion);
  };
  protoOf(Animatable$runAnimation$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            this.n8_1 = 2;
            this.va4_1.aa3_1.wa3_1 = this.va4_1.xa2_1.fa4()(this.wa4_1);
            _set_targetValue__aqsk0r(this.va4_1, this.xa4_1.ma4());
            _set_isRunning__kpbg34(this.va4_1, true);
            this.ba5_1 = copy_0(this.va4_1.aa3_1, VOID, VOID, VOID, new Long(0, -2147483648));
            this.ca5_1 = {_v: false};
            this.m8_1 = 1;
            suspendResult = animate_0(this.ba5_1, this.xa4_1, this.ya4_1, Animatable$runAnimation$slambda$lambda(this.va4_1, this.ba5_1, this.za4_1, this.ca5_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var endReason = this.ca5_1._v ? AnimationEndReason_BoundReached_getInstance() : AnimationEndReason_Finished_getInstance();
            endAnimation(this.va4_1);
            this.aa5_1 = new AnimationResult(this.ba5_1, endReason);
            this.n8_1 = 3;
            this.m8_1 = 4;
            continue $sm;
          case 2:
            this.n8_1 = 3;
            var tmp_0 = this.p8_1;
            if (tmp_0 instanceof CancellationException) {
              var e = this.p8_1;
              var tmp_1 = this;
              endAnimation(this.va4_1);
              throw e;
            } else {
              throw this.p8_1;
            }

          case 3:
            throw this.p8_1;
          case 4:
            this.n8_1 = 3;
            return this.aa5_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.n8_1 === 3) {
          throw e_0;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(Animatable$runAnimation$slambda).p1o = function (completion) {
    return new Animatable$runAnimation$slambda(this.va4_1, this.wa4_1, this.xa4_1, this.ya4_1, this.za4_1, completion);
  };
  function Animatable$runAnimation$slambda_0(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    var i = new Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation);
    var l = function ($completion) {
      return i.da5($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation) {
    this.ma5_1 = this$0;
    this.na5_1 = $targetValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$snapTo$slambda).o1o = function ($completion) {
    var tmp = this.p1o($completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(Animatable$snapTo$slambda).q1o = function ($completion) {
    return this.o1o($completion);
  };
  protoOf(Animatable$snapTo$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        if (tmp === 0) {
          this.n8_1 = 1;
          endAnimation(this.ma5_1);
          var clampedValue = clampToBounds(this.ma5_1, this.na5_1);
          this.ma5_1.aa3_1.aa4(clampedValue);
          _set_targetValue__aqsk0r(this.ma5_1, clampedValue);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Animatable$snapTo$slambda).p1o = function (completion) {
    return new Animatable$snapTo$slambda(this.ma5_1, this.na5_1, completion);
  };
  function Animatable$snapTo$slambda_0(this$0, $targetValue, resultContinuation) {
    var i = new Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation);
    var l = function ($completion) {
      return i.o1o($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable$stop$slambda(this$0, resultContinuation) {
    this.wa5_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$stop$slambda).o1o = function ($completion) {
    var tmp = this.p1o($completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(Animatable$stop$slambda).q1o = function ($completion) {
    return this.o1o($completion);
  };
  protoOf(Animatable$stop$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        if (tmp === 0) {
          this.n8_1 = 1;
          endAnimation(this.wa5_1);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Animatable$stop$slambda).p1o = function (completion) {
    return new Animatable$stop$slambda(this.wa5_1, completion);
  };
  function Animatable$stop$slambda_0(this$0, resultContinuation) {
    var i = new Animatable$stop$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.o1o($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable(initialValue, typeConverter, visibilityThreshold, label) {
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    label = label === VOID ? 'Animatable' : label;
    this.xa2_1 = typeConverter;
    this.ya2_1 = visibilityThreshold;
    this.za2_1 = label;
    this.aa3_1 = new AnimationState(this.xa2_1, initialValue);
    this.ba3_1 = mutableStateOf(false);
    this.ca3_1 = mutableStateOf(initialValue);
    this.da3_1 = null;
    this.ea3_1 = null;
    this.fa3_1 = new MutatorMutex();
    this.ga3_1 = new SpringSpec(VOID, VOID, this.ya2_1);
    var tmp = this;
    var tmp0_subject = this.xa5();
    var tmp_0;
    if (tmp0_subject instanceof AnimationVector1D) {
      tmp_0 = get_negativeInfinityBounds1D();
    } else {
      if (tmp0_subject instanceof AnimationVector2D) {
        tmp_0 = get_negativeInfinityBounds2D();
      } else {
        if (tmp0_subject instanceof AnimationVector3D) {
          tmp_0 = get_negativeInfinityBounds3D();
        } else {
          tmp_0 = get_negativeInfinityBounds4D();
        }
      }
    }
    var tmp_1 = tmp_0;
    tmp.ha3_1 = tmp_1 instanceof AnimationVector ? tmp_1 : THROW_CCE();
    var tmp_2 = this;
    var tmp0_subject_0 = this.xa5();
    var tmp_3;
    if (tmp0_subject_0 instanceof AnimationVector1D) {
      tmp_3 = get_positiveInfinityBounds1D();
    } else {
      if (tmp0_subject_0 instanceof AnimationVector2D) {
        tmp_3 = get_positiveInfinityBounds2D();
      } else {
        if (tmp0_subject_0 instanceof AnimationVector3D) {
          tmp_3 = get_positiveInfinityBounds3D();
        } else {
          tmp_3 = get_positiveInfinityBounds4D();
        }
      }
    }
    var tmp_4 = tmp_3;
    tmp_2.ia3_1 = tmp_4 instanceof AnimationVector ? tmp_4 : THROW_CCE();
    this.ja3_1 = this.ha3_1;
    this.ka3_1 = this.ia3_1;
  }
  protoOf(Animatable).x1 = function () {
    return this.aa3_1.x1();
  };
  protoOf(Animatable).xa5 = function () {
    return this.aa3_1.wa3_1;
  };
  protoOf(Animatable).ya5 = function () {
    return this.xa2_1.ja4()(this.xa5());
  };
  protoOf(Animatable).la4 = function () {
    var tmp0 = this.ba3_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Animatable$_get_isRunning_$ref_121fnp();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isRunning', 1, tmp, tmp_0, Animatable$_set_isRunning_$ref_g9sy61());
    return tmp0.x1();
  };
  protoOf(Animatable).ma4 = function () {
    var tmp0 = this.ca3_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Animatable$_get_targetValue_$ref_gosum2();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('targetValue', 1, tmp, tmp_0, Animatable$_set_targetValue_$ref_6l2n3i());
    return tmp0.x1();
  };
  protoOf(Animatable).za5 = function (targetValue, animationSpec, initialVelocity, block, $completion) {
    var tmp0_initialValue = this.x1();
    var tmp1_typeConverter = this.xa2_1;
    var anim = TargetBasedAnimation_0(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, initialVelocity);
    return runAnimation(this, anim, initialVelocity, block, $completion);
  };
  protoOf(Animatable).aa6 = function (targetValue, animationSpec, initialVelocity, block, $completion, $super) {
    animationSpec = animationSpec === VOID ? this.ga3_1 : animationSpec;
    initialVelocity = initialVelocity === VOID ? this.ya5() : initialVelocity;
    block = block === VOID ? null : block;
    return $super === VOID ? this.za5(targetValue, animationSpec, initialVelocity, block, $completion) : $super.za5.call(this, targetValue, animationSpec, initialVelocity, block, $completion);
  };
  protoOf(Animatable).ba6 = function (targetValue, $completion) {
    return this.fa3_1.ea4(VOID, Animatable$snapTo$slambda_0(this, targetValue, null), $completion);
  };
  protoOf(Animatable).ca6 = function ($completion) {
    return this.fa3_1.ea4(VOID, Animatable$stop$slambda_0(this, null), $completion);
  };
  protoOf(Animatable).da6 = function () {
    return this.aa3_1;
  };
  function Animatable_0(initialValue, visibilityThreshold) {
    visibilityThreshold = visibilityThreshold === VOID ? 0.01 : visibilityThreshold;
    _init_properties_Animatable_kt__f2hc5e();
    return new Animatable(initialValue, get_VectorConverter(FloatCompanionObject_instance), visibilityThreshold);
  }
  function AnimationResult(endState, endReason) {
    this.ea6_1 = endState;
    this.fa6_1 = endReason;
  }
  protoOf(AnimationResult).toString = function () {
    return 'AnimationResult(endReason=' + this.fa6_1.toString() + ', endState=' + this.ea6_1.toString() + ')';
  };
  var properties_initialized_Animatable_kt_s5cd7k;
  function _init_properties_Animatable_kt__f2hc5e() {
    if (!properties_initialized_Animatable_kt_s5cd7k) {
      properties_initialized_Animatable_kt_s5cd7k = true;
      positiveInfinityBounds1D = AnimationVector_0(Infinity);
      positiveInfinityBounds2D = AnimationVector_1(Infinity, Infinity);
      positiveInfinityBounds3D = AnimationVector_2(Infinity, Infinity, Infinity);
      positiveInfinityBounds4D = AnimationVector_3(Infinity, Infinity, Infinity, Infinity);
      negativeInfinityBounds1D = AnimationVector_0(-Infinity);
      negativeInfinityBounds2D = AnimationVector_1(-Infinity, -Infinity);
      negativeInfinityBounds3D = AnimationVector_2(-Infinity, -Infinity, -Infinity);
      negativeInfinityBounds4D = AnimationVector_3(-Infinity, -Infinity, -Infinity, -Infinity);
      androidx_compose_animation_core_Animatable$stable = 8;
      androidx_compose_animation_core_AnimationResult$stable = 0;
    }
  }
  var defaultAnimation;
  var dpDefaultSpring;
  var sizeDefaultSpring;
  var offsetDefaultSpring;
  var rectDefaultSpring;
  var intDefaultSpring;
  var intOffsetDefaultSpring;
  var intSizeDefaultSpring;
  function animateValueAsState(targetValue, typeConverter, animationSpec, visibilityThreshold, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var visibilityThreshold_0 = visibilityThreshold;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1994373980, 'C(animateValueAsState)P(3,4!1,5,2)391@17999L21,397@18182L44,398@18248L79,399@18348L38,401@18433L428,414@18880L42,415@18938L32,415@18927L43,416@18999L697,416@18975L721:AnimateAsState.kt#pdpnli');
    if (!(($default & 4) === 0)) {
      sourceInformationMarkerStart($composer_0, -1037975943, 'CC(remember):AnimateAsState.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.u20();
      var tmp;
      if (false || it === Companion_getInstance().s1z_1) {
        var value = spring();
        $composer_0.v20(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp0_group = tmp;
      sourceInformationMarkerEnd($composer_0);
      animationSpec_0 = tmp0_group;
    }
    if (!(($default & 8) === 0))
      visibilityThreshold_0 = null;
    if (!(($default & 16) === 0))
      label_0 = 'ValueAnimation';
    if (!(($default & 32) === 0))
      finishedListener_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(-1994373980, $changed, -1, 'androidx.compose.animation.core.animateValueAsState (AnimateAsState.kt:395)');
    }
    sourceInformationMarkerStart($composer_0, -1037970064, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.u20();
    var tmp_0;
    if (false || it_0 === Companion_getInstance().s1z_1) {
      var value_0 = mutableStateOf(null);
      $composer_0.v20(value_0);
      tmp_0 = value_0;
    } else {
      tmp_0 = it_0;
    }
    var tmp2_group = tmp_0;
    sourceInformationMarkerEnd($composer_0);
    var toolingOverride = tmp2_group;
    sourceInformationMarkerStart($composer_0, -1037967917, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_1 = $composer_0.u20();
    var tmp_1;
    if (false || it_1 === Companion_getInstance().s1z_1) {
      var value_1 = new Animatable(targetValue, typeConverter, visibilityThreshold_0, label_0);
      $composer_0.v20(value_1);
      tmp_1 = value_1;
    } else {
      tmp_1 = it_1;
    }
    var tmp3_group = tmp_1;
    sourceInformationMarkerEnd($composer_0);
    var animatable = tmp3_group;
    var listener$delegate = rememberUpdatedState(finishedListener_0, $composer_0, 14 & $changed >> 15);
    // Inline function 'kotlin.run' call
    var $this$run = animationSpec_0;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    if (!(visibilityThreshold_0 == null)) {
      tmp_4 = $this$run instanceof SpringSpec;
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      tmp_3 = !equals($this$run.ia6_1, visibilityThreshold_0);
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      tmp_2 = spring($this$run.ga6_1, $this$run.ha6_1, visibilityThreshold_0);
    } else {
      tmp_2 = $this$run;
    }
    var tmp$ret$12 = tmp_2;
    var animSpec$delegate = rememberUpdatedState(tmp$ret$12, $composer_0, 0);
    sourceInformationMarkerStart($composer_0, -1037947730, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_2 = $composer_0.u20();
    var tmp_5;
    if (false || it_2 === Companion_getInstance().s1z_1) {
      var value_2 = Channel(-1);
      $composer_0.v20(value_2);
      tmp_5 = value_2;
    } else {
      tmp_5 = it_2;
    }
    var tmp4_group = tmp_5;
    sourceInformationMarkerEnd($composer_0);
    var channel = tmp4_group;
    sourceInformationMarkerStart($composer_0, -1037945884, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.b21(channel) | (($changed & 14 ^ 6) > 4 && $composer_0.b21(targetValue) || ($changed & 6) === 4));
    // Inline function 'kotlin.let' call
    var it_3 = $composer_0.u20();
    var tmp_6;
    if (invalid || it_3 === Companion_getInstance().s1z_1) {
      var value_3 = animateValueAsState$lambda_1(channel, targetValue);
      $composer_0.v20(value_3);
      tmp_6 = value_3;
    } else {
      tmp_6 = it_3;
    }
    var tmp5_group = tmp_6;
    sourceInformationMarkerEnd($composer_0);
    SideEffect(tmp5_group, $composer_0, 0);
    sourceInformationMarkerStart($composer_0, -1037943267, 'CC(remember):AnimateAsState.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!(!!(!!($composer_0.b21(channel) | $composer_0.b21(animatable)) | $composer_0.w20(animSpec$delegate)) | $composer_0.w20(listener$delegate));
    // Inline function 'kotlin.let' call
    var it_4 = $composer_0.u20();
    var tmp_7;
    if (invalid_0 || it_4 === Companion_getInstance().s1z_1) {
      var value_4 = animateValueAsState$slambda_0(channel, animatable, animSpec$delegate, listener$delegate, null);
      $composer_0.v20(value_4);
      tmp_7 = value_4;
    } else {
      tmp_7 = it_4;
    }
    var tmp6_group = tmp_7;
    sourceInformationMarkerEnd($composer_0);
    LaunchedEffect(channel, tmp6_group, $composer_0, 0);
    var tmp0_elvis_lhs = toolingOverride.x1();
    var tmp1 = tmp0_elvis_lhs == null ? animatable.da6() : tmp0_elvis_lhs;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1;
  }
  function animateValueAsState$lambda($listener$delegate) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('listener', KProperty0, false);
    return $listener$delegate.x1();
  }
  function animateValueAsState$lambda_0($animSpec$delegate) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('animSpec', KProperty0, false);
    return $animSpec$delegate.x1();
  }
  function animateValueAsState$lambda_1($channel, $targetValue) {
    return function () {
      $channel.s1d($targetValue);
      return Unit_instance;
    };
  }
  function animateValueAsState$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.ra6_1 = $newTarget;
    this.sa6_1 = $animatable;
    this.ta6_1 = $animSpec$delegate;
    this.ua6_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(animateValueAsState$slambda$slambda).b1m = function ($this$launch, $completion) {
    var tmp = this.c1m($this$launch, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(animateValueAsState$slambda$slambda).e9 = function (p1, $completion) {
    return this.b1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(animateValueAsState$slambda$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            if (!equals(this.ra6_1, this.sa6_1.ma4())) {
              this.m8_1 = 1;
              suspendResult = this.sa6_1.aa6(this.ra6_1, animateValueAsState$lambda_0(this.ta6_1), VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 2;
              continue $sm;
            }

          case 1:
            var tmp0_safe_receiver = animateValueAsState$lambda(this.ua6_1);
            if (tmp0_safe_receiver == null)
              null;
            else
              tmp0_safe_receiver(this.sa6_1.x1());
            this.m8_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 3) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  protoOf(animateValueAsState$slambda$slambda).c1m = function ($this$launch, completion) {
    var i = new animateValueAsState$slambda$slambda(this.ra6_1, this.sa6_1, this.ta6_1, this.ua6_1, completion);
    i.va6_1 = $this$launch;
    return i;
  };
  function animateValueAsState$slambda$slambda_0($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function animateValueAsState$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.ea7_1 = $channel;
    this.fa7_1 = $animatable;
    this.ga7_1 = $animSpec$delegate;
    this.ha7_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(animateValueAsState$slambda).b1m = function ($this$LaunchedEffect, $completion) {
    var tmp = this.c1m($this$LaunchedEffect, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(animateValueAsState$slambda).e9 = function (p1, $completion) {
    return this.b1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(animateValueAsState$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            this.ja7_1 = this.ea7_1.i();
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.m8_1 = 2;
            suspendResult = this.ja7_1.v1b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.m8_1 = 3;
              continue $sm;
            }

            var target = this.ja7_1.k();
            var tmp0_elvis_lhs = ChannelResult__getOrNull_impl_f5e07h(this.ea7_1.w1d());
            var newTarget = tmp0_elvis_lhs == null ? target : tmp0_elvis_lhs;
            launch(this.ia7_1, VOID, VOID, animateValueAsState$slambda$slambda_0(newTarget, this.fa7_1, this.ga7_1, this.ha7_1, null));
            this.m8_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 4) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  protoOf(animateValueAsState$slambda).c1m = function ($this$LaunchedEffect, completion) {
    var i = new animateValueAsState$slambda(this.ea7_1, this.fa7_1, this.ga7_1, this.ha7_1, completion);
    i.ia7_1 = $this$LaunchedEffect;
    return i;
  };
  function animateValueAsState$slambda_0($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.b1m($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_AnimateAsState_kt_bq3rmo;
  function _init_properties_AnimateAsState_kt__7h7b9a() {
    if (!properties_initialized_AnimateAsState_kt_bq3rmo) {
      properties_initialized_AnimateAsState_kt_bq3rmo = true;
      defaultAnimation = spring();
      dpDefaultSpring = spring(VOID, VOID, new Dp(get_VisibilityThreshold_3(Companion_getInstance_0())));
      sizeDefaultSpring = spring(VOID, VOID, new Size(get_VisibilityThreshold_4(Companion_getInstance_1())));
      offsetDefaultSpring = spring(VOID, VOID, new Offset(get_VisibilityThreshold_2(Companion_getInstance_2())));
      rectDefaultSpring = spring(VOID, VOID, get_VisibilityThreshold_0(Companion_getInstance_3()));
      intDefaultSpring = spring(VOID, VOID, get_VisibilityThreshold_5(IntCompanionObject_instance));
      intOffsetDefaultSpring = spring(VOID, VOID, new IntOffset(get_VisibilityThreshold(Companion_getInstance_4())));
      intSizeDefaultSpring = spring(VOID, VOID, new IntSize(get_VisibilityThreshold_1(Companion_getInstance_5())));
    }
  }
  var androidx_compose_animation_core_TargetBasedAnimation$stable;
  var androidx_compose_animation_core_DecayAnimation$stable;
  function TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $this) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    TargetBasedAnimation.call($this, animationSpec.ka7(typeConverter), typeConverter, initialValue, targetValue, initialVelocityVector);
    return $this;
  }
  function TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    return TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, objectCreate(protoOf(TargetBasedAnimation)));
  }
  function _get_endVelocity__lqkp53($this) {
    var tmp0_elvis_lhs = $this.ta7_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.la7_1.ua7($this.pa7_1, $this.qa7_1, $this.ra7_1);
      $this.ta7_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function TargetBasedAnimation(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    this.la7_1 = animationSpec;
    this.ma7_1 = typeConverter;
    this.na7_1 = targetValue;
    this.oa7_1 = initialValue;
    this.pa7_1 = this.ma7_1.fa4()(initialValue);
    this.qa7_1 = this.ma7_1.fa4()(targetValue);
    var tmp = this;
    var tmp1_elvis_lhs = initialVelocityVector == null ? null : copy_1(initialVelocityVector);
    tmp.ra7_1 = tmp1_elvis_lhs == null ? newInstance(this.ma7_1.fa4()(initialValue)) : tmp1_elvis_lhs;
    this.sa7_1 = new Long(-1, -1);
    this.ta7_1 = null;
  }
  protoOf(TargetBasedAnimation).va7 = function () {
    return this.ma7_1;
  };
  protoOf(TargetBasedAnimation).wa7 = function () {
    return this.oa7_1;
  };
  protoOf(TargetBasedAnimation).ma4 = function () {
    return this.na7_1;
  };
  protoOf(TargetBasedAnimation).xa7 = function () {
    return this.la7_1.xa7();
  };
  protoOf(TargetBasedAnimation).ya7 = function (playTimeNanos) {
    var tmp;
    if (!this.aa8(playTimeNanos)) {
      // Inline function 'kotlin.let' call
      var it = this.la7_1.za7(playTimeNanos, this.pa7_1, this.qa7_1, this.ra7_1);
      var inductionVariable = 0;
      var last = it.ga4();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.core.checkPrecondition' call
          if (!!isNaN_0(it.ha4(i))) {
            var tmp$ret$3 = 'AnimationVector cannot contain a NaN. ' + toString(it) + '. Animation: ' + this.toString() + ',' + (' playTimeNanos: ' + playTimeNanos.toString());
            throwIllegalStateException(tmp$ret$3);
          }
        }
         while (inductionVariable < last);
      tmp = this.ma7_1.ja4()(it);
    } else {
      tmp = this.ma4();
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).ba8 = function () {
    if (compare(this.sa7_1, new Long(0, 0)) < 0) {
      this.sa7_1 = this.la7_1.ca8(this.pa7_1, this.qa7_1, this.ra7_1);
    }
    return this.sa7_1;
  };
  protoOf(TargetBasedAnimation).da8 = function (playTimeNanos) {
    var tmp;
    if (!this.aa8(playTimeNanos)) {
      tmp = this.la7_1.ea8(playTimeNanos, this.pa7_1, this.qa7_1, this.ra7_1);
    } else {
      tmp = _get_endVelocity__lqkp53(this);
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).toString = function () {
    return 'TargetBasedAnimation: ' + toString_0(this.wa7()) + ' -> ' + toString_0(this.ma4()) + ',' + ('initial velocity: ' + toString(this.ra7_1) + ', duration: ' + get_durationMillis(this).toString() + ' ms,') + ('animationSpec: ' + toString(this.la7_1));
  };
  function TargetBasedAnimation_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocity) {
    return TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, typeConverter.fa4()(initialVelocity));
  }
  function DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, $this) {
    DecayAnimation.call($this, animationSpec.ka7(typeConverter), typeConverter, initialValue, initialVelocityVector);
    return $this;
  }
  function DecayAnimation_init_$Create$(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    return DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, objectCreate(protoOf(DecayAnimation)));
  }
  function DecayAnimation(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    this.fa8_1 = animationSpec;
    this.ga8_1 = typeConverter;
    this.ha8_1 = initialValue;
    this.ia8_1 = this.ga8_1.fa4()(this.ha8_1);
    this.ja8_1 = copy_1(initialVelocityVector);
    this.la8_1 = this.ga8_1.ja4()(this.fa8_1.oa8(this.ia8_1, initialVelocityVector));
    this.na8_1 = false;
    this.ma8_1 = this.fa8_1.pa8(this.ia8_1, initialVelocityVector);
    this.ka8_1 = copy_1(this.fa8_1.qa8(this.ma8_1, this.ia8_1, initialVelocityVector));
    var inductionVariable = 0;
    var last = this.ka8_1.ga4();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.ka8_1.ia4(i, coerceIn(this.ka8_1.ha4(i), -this.fa8_1.ra8(), this.fa8_1.ra8()));
      }
       while (inductionVariable < last);
  }
  protoOf(DecayAnimation).va7 = function () {
    return this.ga8_1;
  };
  protoOf(DecayAnimation).ma4 = function () {
    return this.la8_1;
  };
  protoOf(DecayAnimation).ba8 = function () {
    return this.ma8_1;
  };
  protoOf(DecayAnimation).xa7 = function () {
    return this.na8_1;
  };
  protoOf(DecayAnimation).ya7 = function (playTimeNanos) {
    if (!this.aa8(playTimeNanos)) {
      return this.ga8_1.ja4()(this.fa8_1.sa8(playTimeNanos, this.ia8_1, this.ja8_1));
    } else {
      return this.la8_1;
    }
  };
  protoOf(DecayAnimation).da8 = function (playTimeNanos) {
    if (!this.aa8(playTimeNanos)) {
      return this.fa8_1.qa8(playTimeNanos, this.ia8_1, this.ja8_1);
    } else {
      return this.ka8_1;
    }
  };
  function Animation() {
  }
  function get_durationMillis(_this__u8e3s4) {
    return divide(_this__u8e3s4.ba8(), new Long(1000000, 0));
  }
  var AnimationEndReason_BoundReached_instance;
  var AnimationEndReason_Finished_instance;
  var AnimationEndReason_entriesInitialized;
  function AnimationEndReason_initEntries() {
    if (AnimationEndReason_entriesInitialized)
      return Unit_instance;
    AnimationEndReason_entriesInitialized = true;
    AnimationEndReason_BoundReached_instance = new AnimationEndReason('BoundReached', 0);
    AnimationEndReason_Finished_instance = new AnimationEndReason('Finished', 1);
  }
  function AnimationEndReason(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AnimationEndReason_BoundReached_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_BoundReached_instance;
  }
  function AnimationEndReason_Finished_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_Finished_instance;
  }
  var androidx_compose_animation_core_AnimationConstants$stable;
  var androidx_compose_animation_core_TweenSpec$stable;
  var androidx_compose_animation_core_SpringSpec$stable;
  var androidx_compose_animation_core_ArcAnimationSpec$stable;
  var androidx_compose_animation_core_RepeatableSpec$stable;
  var androidx_compose_animation_core_InfiniteRepeatableSpec$stable;
  var androidx_compose_animation_core_SnapSpec$stable;
  var androidx_compose_animation_core_KeyframesSpecBaseConfig$stable;
  var androidx_compose_animation_core_KeyframeBaseEntity$stable;
  var androidx_compose_animation_core_KeyframesSpec_KeyframesSpecConfig$stable;
  var androidx_compose_animation_core_KeyframesSpec_KeyframeEntity$stable;
  var androidx_compose_animation_core_KeyframesSpec$stable;
  var androidx_compose_animation_core_KeyframesWithSplineSpec_KeyframesWithSplineSpecConfig$stable;
  var androidx_compose_animation_core_KeyframesWithSplineSpec$stable;
  function FiniteAnimationSpec() {
  }
  function SpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    dampingRatio = dampingRatio === VOID ? 1.0 : dampingRatio;
    stiffness = stiffness === VOID ? 1500.0 : stiffness;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    this.ga6_1 = dampingRatio;
    this.ha6_1 = stiffness;
    this.ia6_1 = visibilityThreshold;
  }
  protoOf(SpringSpec).ka7 = function (converter) {
    return VectorizedSpringSpec_init_$Create$(this.ga6_1, this.ha6_1, convert(converter, this.ia6_1));
  };
  protoOf(SpringSpec).equals = function (other) {
    var tmp;
    if (other instanceof SpringSpec) {
      tmp = (other.ga6_1 === this.ga6_1 && other.ha6_1 === this.ha6_1 && equals(other.ia6_1, this.ia6_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SpringSpec).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.ia6_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return imul(imul(tmp$ret$0, 31) + getNumberHashCode(this.ga6_1) | 0, 31) + getNumberHashCode(this.ha6_1) | 0;
  };
  function spring(dampingRatio, stiffness, visibilityThreshold) {
    dampingRatio = dampingRatio === VOID ? 1.0 : dampingRatio;
    stiffness = stiffness === VOID ? 1500.0 : stiffness;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    return new SpringSpec(dampingRatio, stiffness, visibilityThreshold);
  }
  function TweenSpec(durationMillis, delay, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.ta8_1 = durationMillis;
    this.ua8_1 = delay;
    this.va8_1 = easing;
  }
  protoOf(TweenSpec).ka7 = function (converter) {
    return new VectorizedTweenSpec(this.ta8_1, this.ua8_1, this.va8_1);
  };
  protoOf(TweenSpec).equals = function (other) {
    var tmp;
    if (other instanceof TweenSpec) {
      tmp = (other.ta8_1 === this.ta8_1 && other.ua8_1 === this.ua8_1 && equals(other.va8_1, this.va8_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TweenSpec).hashCode = function () {
    return imul(imul(this.ta8_1, 31) + hashCode(this.va8_1) | 0, 31) + this.ua8_1 | 0;
  };
  function tween(durationMillis, delayMillis, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    return new TweenSpec(durationMillis, delayMillis, easing);
  }
  function convert(_this__u8e3s4, data) {
    if (data == null) {
      return null;
    } else {
      return _this__u8e3s4.fa4()(data);
    }
  }
  var androidx_compose_animation_core_AnimationState$stable;
  var androidx_compose_animation_core_AnimationScope$stable;
  function AnimationState$_get_value_$ref_fgr73c() {
    return function (p0) {
      return p0.x1();
    };
  }
  function AnimationState$_set_value_$ref_q9ieh8() {
    return function (p0, p1) {
      p0.aa4(p1);
      return Unit_instance;
    };
  }
  function AnimationState$_get_value_$ref_fgr73c_0() {
    return function (p0) {
      return p0.x1();
    };
  }
  function AnimationState$_set_value_$ref_q9ieh8_0() {
    return function (p0, p1) {
      p0.aa4(p1);
      return Unit_instance;
    };
  }
  function AnimationState(typeConverter, initialValue, initialVelocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? new Long(0, -2147483648) : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? new Long(0, -2147483648) : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    this.ua3_1 = typeConverter;
    this.va3_1 = mutableStateOf(initialValue);
    var tmp = this;
    var tmp1_elvis_lhs = initialVelocityVector == null ? null : copy_1(initialVelocityVector);
    tmp.wa3_1 = tmp1_elvis_lhs == null ? createZeroVectorFrom(this.ua3_1, initialValue) : tmp1_elvis_lhs;
    this.xa3_1 = lastFrameTimeNanos;
    this.ya3_1 = finishedTimeNanos;
    this.za3_1 = isRunning;
  }
  protoOf(AnimationState).aa4 = function (_set____db54di) {
    var tmp0 = this.va3_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AnimationState$_get_value_$ref_fgr73c_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, AnimationState$_set_value_$ref_q9ieh8_0());
    tmp0.k1k(_set____db54di);
    return Unit_instance;
  };
  protoOf(AnimationState).x1 = function () {
    var tmp0 = this.va3_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AnimationState$_get_value_$ref_fgr73c();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, AnimationState$_set_value_$ref_q9ieh8());
    return tmp0.x1();
  };
  protoOf(AnimationState).ya5 = function () {
    return this.ua3_1.ja4()(this.wa3_1);
  };
  protoOf(AnimationState).toString = function () {
    return 'AnimationState(' + ('value=' + toString_0(this.x1()) + ', ') + ('velocity=' + toString_0(this.ya5()) + ', ') + ('isRunning=' + this.za3_1 + ', ') + ('lastFrameTimeNanos=' + this.xa3_1.toString() + ', ') + ('finishedTimeNanos=' + this.ya3_1.toString()) + ')';
  };
  function AnimationState_0(initialValue, initialVelocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    initialVelocity = initialVelocity === VOID ? 0.0 : initialVelocity;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? new Long(0, -2147483648) : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? new Long(0, -2147483648) : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    return new AnimationState(get_VectorConverter(FloatCompanionObject_instance), initialValue, AnimationVector_0(initialVelocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function AnimationScope$_get_value_$ref_u38x5x() {
    return function (p0) {
      return p0.x1();
    };
  }
  function AnimationScope$_set_value_$ref_bn0oen() {
    return function (p0, p1) {
      p0.aa4(p1);
      return Unit_instance;
    };
  }
  function AnimationScope$_get_value_$ref_u38x5x_0() {
    return function (p0) {
      return p0.x1();
    };
  }
  function AnimationScope$_set_value_$ref_bn0oen_0() {
    return function (p0, p1) {
      p0.aa4(p1);
      return Unit_instance;
    };
  }
  function AnimationScope$_get_isRunning_$ref_gxcmg9() {
    return function (p0) {
      return p0.la4();
    };
  }
  function AnimationScope$_set_isRunning_$ref_1pl3xx() {
    return function (p0, p1) {
      p0.wa8(p1);
      return Unit_instance;
    };
  }
  function AnimationScope$_get_isRunning_$ref_gxcmg9_0() {
    return function (p0) {
      return p0.la4();
    };
  }
  function AnimationScope$_set_isRunning_$ref_1pl3xx_0() {
    return function (p0, p1) {
      p0.wa8(p1);
      return Unit_instance;
    };
  }
  function AnimationScope(initialValue, typeConverter, initialVelocityVector, lastFrameTimeNanos, targetValue, startTimeNanos, isRunning, onCancel) {
    this.la3_1 = typeConverter;
    this.ma3_1 = targetValue;
    this.na3_1 = startTimeNanos;
    this.oa3_1 = onCancel;
    this.pa3_1 = mutableStateOf(initialValue);
    this.qa3_1 = copy_1(initialVelocityVector);
    this.ra3_1 = lastFrameTimeNanos;
    this.sa3_1 = new Long(0, -2147483648);
    this.ta3_1 = mutableStateOf(isRunning);
  }
  protoOf(AnimationScope).aa4 = function (_set____db54di) {
    var tmp0 = this.pa3_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AnimationScope$_get_value_$ref_u38x5x_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, AnimationScope$_set_value_$ref_bn0oen_0());
    tmp0.k1k(_set____db54di);
    return Unit_instance;
  };
  protoOf(AnimationScope).x1 = function () {
    var tmp0 = this.pa3_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AnimationScope$_get_value_$ref_u38x5x();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, AnimationScope$_set_value_$ref_bn0oen());
    return tmp0.x1();
  };
  protoOf(AnimationScope).wa8 = function (_set____db54di) {
    var tmp0 = this.ta3_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AnimationScope$_get_isRunning_$ref_gxcmg9_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isRunning', 1, tmp, tmp_0, AnimationScope$_set_isRunning_$ref_1pl3xx_0());
    tmp0.k1k(_set____db54di);
    return Unit_instance;
  };
  protoOf(AnimationScope).la4 = function () {
    var tmp0 = this.ta3_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AnimationScope$_get_isRunning_$ref_gxcmg9();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isRunning', 1, tmp, tmp_0, AnimationScope$_set_isRunning_$ref_1pl3xx());
    return tmp0.x1();
  };
  protoOf(AnimationScope).ya5 = function () {
    return this.la3_1.ja4()(this.qa3_1);
  };
  protoOf(AnimationScope).ba4 = function () {
    this.wa8(false);
    this.oa3_1();
  };
  function copy(_this__u8e3s4, value, velocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    value = value === VOID ? _this__u8e3s4.x1() : value;
    velocity = velocity === VOID ? _this__u8e3s4.wa3_1.xa8_1 : velocity;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? _this__u8e3s4.xa3_1 : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? _this__u8e3s4.ya3_1 : finishedTimeNanos;
    isRunning = isRunning === VOID ? _this__u8e3s4.za3_1 : isRunning;
    return new AnimationState(_this__u8e3s4.ua3_1, value, AnimationVector_0(velocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function AnimationState_1(typeConverter, initialValue, initialVelocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? new Long(0, -2147483648) : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? new Long(0, -2147483648) : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    return new AnimationState(typeConverter, initialValue, typeConverter.fa4()(initialVelocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function copy_0(_this__u8e3s4, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    value = value === VOID ? _this__u8e3s4.x1() : value;
    velocityVector = velocityVector === VOID ? copy_1(_this__u8e3s4.wa3_1) : velocityVector;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? _this__u8e3s4.xa3_1 : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? _this__u8e3s4.ya3_1 : finishedTimeNanos;
    isRunning = isRunning === VOID ? _this__u8e3s4.za3_1 : isRunning;
    return new AnimationState(_this__u8e3s4.ua3_1, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function createZeroVectorFrom(_this__u8e3s4, value) {
    // Inline function 'kotlin.also' call
    var this_0 = _this__u8e3s4.fa4()(value);
    this_0.ka4();
    return this_0;
  }
  var androidx_compose_animation_core_AnimationVector$stable;
  var androidx_compose_animation_core_AnimationVector1D$stable;
  var androidx_compose_animation_core_AnimationVector2D$stable;
  var androidx_compose_animation_core_AnimationVector3D$stable;
  var androidx_compose_animation_core_AnimationVector4D$stable;
  function AnimationVector1D(initVal) {
    AnimationVector.call(this);
    this.xa8_1 = initVal;
    this.ya8_1 = 1;
  }
  protoOf(AnimationVector1D).ka4 = function () {
    this.xa8_1 = 0.0;
  };
  protoOf(AnimationVector1D).za8 = function () {
    return new AnimationVector1D(0.0);
  };
  protoOf(AnimationVector1D).ha4 = function (index) {
    if (index === 0) {
      return this.xa8_1;
    } else {
      return 0.0;
    }
  };
  protoOf(AnimationVector1D).ia4 = function (index, value) {
    if (index === 0) {
      this.xa8_1 = value;
    }
  };
  protoOf(AnimationVector1D).ga4 = function () {
    return this.ya8_1;
  };
  protoOf(AnimationVector1D).toString = function () {
    return 'AnimationVector1D: value = ' + this.xa8_1;
  };
  protoOf(AnimationVector1D).equals = function (other) {
    var tmp;
    if (other instanceof AnimationVector1D) {
      tmp = other.xa8_1 === this.xa8_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector1D).hashCode = function () {
    return getNumberHashCode(this.xa8_1);
  };
  function AnimationVector4D(v1, v2, v3, v4) {
    AnimationVector.call(this);
    this.aa9_1 = v1;
    this.ba9_1 = v2;
    this.ca9_1 = v3;
    this.da9_1 = v4;
    this.ea9_1 = 4;
  }
  protoOf(AnimationVector4D).ka4 = function () {
    this.aa9_1 = 0.0;
    this.ba9_1 = 0.0;
    this.ca9_1 = 0.0;
    this.da9_1 = 0.0;
  };
  protoOf(AnimationVector4D).za8 = function () {
    return new AnimationVector4D(0.0, 0.0, 0.0, 0.0);
  };
  protoOf(AnimationVector4D).ha4 = function (index) {
    switch (index) {
      case 0:
        return this.aa9_1;
      case 1:
        return this.ba9_1;
      case 2:
        return this.ca9_1;
      case 3:
        return this.da9_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector4D).ia4 = function (index, value) {
    switch (index) {
      case 0:
        this.aa9_1 = value;
        break;
      case 1:
        this.ba9_1 = value;
        break;
      case 2:
        this.ca9_1 = value;
        break;
      case 3:
        this.da9_1 = value;
        break;
    }
  };
  protoOf(AnimationVector4D).ga4 = function () {
    return this.ea9_1;
  };
  protoOf(AnimationVector4D).toString = function () {
    return 'AnimationVector4D: v1 = ' + this.aa9_1 + ', v2 = ' + this.ba9_1 + ', v3 = ' + this.ca9_1 + ', v4 = ' + this.da9_1;
  };
  protoOf(AnimationVector4D).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof AnimationVector4D) {
      tmp_2 = other.aa9_1 === this.aa9_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.ba9_1 === this.ba9_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.ca9_1 === this.ca9_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.da9_1 === this.da9_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector4D).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.aa9_1), 31) + getNumberHashCode(this.ba9_1) | 0, 31) + getNumberHashCode(this.ca9_1) | 0, 31) + getNumberHashCode(this.da9_1) | 0;
  };
  function AnimationVector() {
  }
  function AnimationVector2D(v1, v2) {
    AnimationVector.call(this);
    this.fa9_1 = v1;
    this.ga9_1 = v2;
    this.ha9_1 = 2;
  }
  protoOf(AnimationVector2D).ka4 = function () {
    this.fa9_1 = 0.0;
    this.ga9_1 = 0.0;
  };
  protoOf(AnimationVector2D).za8 = function () {
    return new AnimationVector2D(0.0, 0.0);
  };
  protoOf(AnimationVector2D).ha4 = function (index) {
    switch (index) {
      case 0:
        return this.fa9_1;
      case 1:
        return this.ga9_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector2D).ia4 = function (index, value) {
    if (index === 0)
      this.fa9_1 = value;
    else if (index === 1)
      this.ga9_1 = value;
  };
  protoOf(AnimationVector2D).ga4 = function () {
    return this.ha9_1;
  };
  protoOf(AnimationVector2D).toString = function () {
    return 'AnimationVector2D: v1 = ' + this.fa9_1 + ', v2 = ' + this.ga9_1;
  };
  protoOf(AnimationVector2D).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AnimationVector2D) {
      tmp_0 = other.fa9_1 === this.fa9_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.ga9_1 === this.ga9_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector2D).hashCode = function () {
    return imul(getNumberHashCode(this.fa9_1), 31) + getNumberHashCode(this.ga9_1) | 0;
  };
  function AnimationVector_0(v1) {
    return new AnimationVector1D(v1);
  }
  function AnimationVector_1(v1, v2) {
    return new AnimationVector2D(v1, v2);
  }
  function AnimationVector3D(v1, v2, v3) {
    AnimationVector.call(this);
    this.ia9_1 = v1;
    this.ja9_1 = v2;
    this.ka9_1 = v3;
    this.la9_1 = 3;
  }
  protoOf(AnimationVector3D).ka4 = function () {
    this.ia9_1 = 0.0;
    this.ja9_1 = 0.0;
    this.ka9_1 = 0.0;
  };
  protoOf(AnimationVector3D).za8 = function () {
    return new AnimationVector3D(0.0, 0.0, 0.0);
  };
  protoOf(AnimationVector3D).ha4 = function (index) {
    switch (index) {
      case 0:
        return this.ia9_1;
      case 1:
        return this.ja9_1;
      case 2:
        return this.ka9_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector3D).ia4 = function (index, value) {
    switch (index) {
      case 0:
        this.ia9_1 = value;
        break;
      case 1:
        this.ja9_1 = value;
        break;
      case 2:
        this.ka9_1 = value;
        break;
    }
  };
  protoOf(AnimationVector3D).ga4 = function () {
    return this.la9_1;
  };
  protoOf(AnimationVector3D).toString = function () {
    return 'AnimationVector3D: v1 = ' + this.ia9_1 + ', v2 = ' + this.ja9_1 + ', v3 = ' + this.ka9_1;
  };
  protoOf(AnimationVector3D).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof AnimationVector3D) {
      tmp_1 = other.ia9_1 === this.ia9_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.ja9_1 === this.ja9_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.ka9_1 === this.ka9_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector3D).hashCode = function () {
    return imul(imul(getNumberHashCode(this.ia9_1), 31) + getNumberHashCode(this.ja9_1) | 0, 31) + getNumberHashCode(this.ka9_1) | 0;
  };
  function AnimationVector_2(v1, v2, v3) {
    return new AnimationVector3D(v1, v2, v3);
  }
  function AnimationVector_3(v1, v2, v3, v4) {
    return new AnimationVector4D(v1, v2, v3, v4);
  }
  function copy_1(_this__u8e3s4) {
    var newVector = newInstance(_this__u8e3s4);
    var inductionVariable = 0;
    var last = newVector.ga4();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newVector.ia4(i, _this__u8e3s4.ha4(i));
      }
       while (inductionVariable < last);
    return newVector;
  }
  function newInstance(_this__u8e3s4) {
    var tmp = _this__u8e3s4.za8();
    return tmp instanceof AnimationVector ? tmp : THROW_CCE();
  }
  function copyFrom(_this__u8e3s4, source) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.ga4();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.ia4(i, source.ha4(i));
      }
       while (inductionVariable < last);
  }
  function get_OurPercentCache() {
    _init_properties_ArcSpline_kt__f15lqp();
    return OurPercentCache;
  }
  var OurPercentCache;
  var androidx_compose_animation_core_ArcSpline_Arc$stable;
  var androidx_compose_animation_core_ArcSpline$stable;
  function Arc(mode, time1, time2, x1, y1, x2, y2) {
    this.ma9_1 = time1;
    this.na9_1 = time2;
    this.oa9_1 = x1;
    this.pa9_1 = y1;
    this.qa9_1 = x2;
    this.ra9_1 = y2;
    this.sa9_1 = 0.0;
    this.ta9_1 = 0.0;
    this.ua9_1 = 0.0;
    var dx = this.qa9_1 - this.oa9_1;
    var dy = this.ra9_1 - this.pa9_1;
    var isVertical;
    switch (mode) {
      case 1:
        isVertical = true;
        break;
      case 5:
        isVertical = dy < 0;
        break;
      case 4:
        isVertical = dy > 0;
        break;
      default:
        isVertical = false;
        break;
    }
    this.ya9_1 = isVertical ? -1.0 : 1.0;
    this.wa9_1 = 1 / (this.na9_1 - this.ma9_1);
    this.va9_1 = new Float32Array(101);
    var isLinear = mode === 3;
    var tmp;
    var tmp_0;
    if (isLinear) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.math.abs' call
      tmp_0 = Math.abs(dx) < 0.001;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.math.abs' call
      tmp = Math.abs(dy) < 0.001;
    }
    if (tmp) {
      isLinear = true;
      var tmp_1 = this;
      // Inline function 'kotlin.math.hypot' call
      tmp_1.sa9_1 = hypot(dy, dx);
      this.xa9_1 = this.sa9_1 * this.wa9_1;
      this.caa_1 = dx * this.wa9_1;
      this.daa_1 = dy * this.wa9_1;
      this.za9_1 = NaN;
      this.aaa_1 = NaN;
    } else {
      this.za9_1 = dx * this.ya9_1;
      this.aaa_1 = dy * -this.ya9_1;
      this.caa_1 = isVertical ? this.qa9_1 : this.oa9_1;
      this.daa_1 = isVertical ? this.pa9_1 : this.ra9_1;
      this.eaa(this.oa9_1, this.pa9_1, this.qa9_1, this.ra9_1);
      this.xa9_1 = this.sa9_1 * this.wa9_1;
    }
    this.baa_1 = isLinear;
  }
  protoOf(Arc).eaa = function (x1, y1, x2, y2) {
    var a = x2 - x1;
    var b = y1 - y2;
    var lx = 0.0;
    var ly = b;
    var dist = 0.0;
    var ourPercent = get_OurPercentCache();
    var lastIndex = ourPercent.length - 1 | 0;
    var lastIndexFloat = lastIndex;
    var lut = this.va9_1;
    var inductionVariable = 1;
    if (inductionVariable <= lastIndex)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.core.toRadians' call
        var angle = 90.0 * i / lastIndex * (3.141592653589793 / 180.0);
        // Inline function 'kotlin.math.sin' call
        var s = Math.sin(angle);
        // Inline function 'kotlin.math.cos' call
        var c = Math.cos(angle);
        var px = a * s;
        var py = b * c;
        var tmp = dist;
        var tmp0 = px - lx;
        // Inline function 'kotlin.math.hypot' call
        var y = py - ly;
        dist = tmp + hypot(tmp0, y);
        ourPercent[i] = dist;
        lx = px;
        ly = py;
      }
       while (!(i === lastIndex));
    this.sa9_1 = dist;
    var inductionVariable_0 = 1;
    if (inductionVariable_0 <= lastIndex)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _index_0__fvwizt = i_0;
        ourPercent[_index_0__fvwizt] = ourPercent[_index_0__fvwizt] / dist;
      }
       while (!(i_0 === lastIndex));
    var lutLastIndex = 100;
    var inductionVariable_1 = 0;
    var last = lut.length - 1 | 0;
    if (inductionVariable_1 <= last)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var pos = i_1 / lutLastIndex;
        var index = binarySearch(ourPercent, pos);
        if (index >= 0) {
          lut[i_1] = index / lastIndexFloat;
        } else if (index === -1) {
          lut[i_1] = 0.0;
        } else {
          var p1 = (-index | 0) - 2 | 0;
          var p2 = (-index | 0) - 1 | 0;
          var ans = (p1 + (pos - ourPercent[p1]) / (ourPercent[p2] - ourPercent[p1])) / lastIndexFloat;
          lut[i_1] = ans;
        }
      }
       while (inductionVariable_1 <= last);
  };
  function ArcSpline(arcModes, timePoints, y) {
    this.gaa_1 = true;
    var mode = {_v: 1};
    var last = {_v: 1};
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = timePoints.length - 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      switch (arcModes[tmp_3]) {
        case 1:
          mode._v = 1;
          last._v = mode._v;
          break;
        case 2:
          mode._v = 2;
          last._v = mode._v;
          break;
        case 3:
          mode._v = last._v === 1 ? 2 : 1;
          last._v = mode._v;
          break;
        case 0:
          mode._v = 3;
          break;
        case 5:
          mode._v = 5;
          break;
        case 4:
          mode._v = 4;
          break;
      }
      var yArray = y[tmp_3];
      var yArray1 = y[tmp_3 + 1 | 0];
      var timeArray = timePoints[tmp_3];
      var timeArray1 = timePoints[tmp_3 + 1 | 0];
      var dim = (yArray.length / 2 | 0) + (yArray.length % 2 | 0) | 0;
      var tmp_4 = 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_5 = Array(dim);
      while (tmp_4 < dim) {
        var tmp_6 = tmp_4;
        var k = imul(tmp_6, 2);
        tmp_5[tmp_6] = new Arc(mode._v, timeArray, timeArray1, yArray[k], yArray[k + 1 | 0], yArray1[k], yArray1[k + 1 | 0]);
        tmp_4 = tmp_4 + 1 | 0;
      }
      tmp_2[tmp_3] = tmp_5;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.faa_1 = tmp_2;
  }
  var properties_initialized_ArcSpline_kt_jqay4z;
  function _init_properties_ArcSpline_kt__f15lqp() {
    if (!properties_initialized_ArcSpline_kt_jqay4z) {
      properties_initialized_ArcSpline_kt_jqay4z = true;
      OurPercentCache = new Float32Array(91);
      androidx_compose_animation_core_ArcSpline_Arc$stable = 8;
      androidx_compose_animation_core_ArcSpline$stable = 8;
    }
  }
  function generateDecayAnimationSpec(_this__u8e3s4) {
    return new DecayAnimationSpecImpl(_this__u8e3s4);
  }
  function DecayAnimationSpecImpl(floatDecaySpec) {
    this.haa_1 = floatDecaySpec;
  }
  protoOf(DecayAnimationSpecImpl).ka7 = function (typeConverter) {
    return new VectorizedFloatDecaySpec(this.haa_1);
  };
  function _get_valueVector__r10idf($this) {
    var tmp = $this.jaa_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _get_velocityVector__dvxlkl($this) {
    var tmp = $this.kaa_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _get_targetVector__vn6c89($this) {
    var tmp = $this.laa_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('targetVector');
    }
  }
  function VectorizedFloatDecaySpec(floatDecaySpec) {
    this.iaa_1 = floatDecaySpec;
    this.maa_1 = this.iaa_1.ra8();
  }
  protoOf(VectorizedFloatDecaySpec).ra8 = function () {
    return this.maa_1;
  };
  protoOf(VectorizedFloatDecaySpec).sa8 = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.jaa_1 == null)) {
      this.jaa_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf(this).ga4();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf(this).ia4(i, this.iaa_1.naa(playTimeNanos, initialValue.ha4(i), initialVelocity.ha4(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf(this);
  };
  protoOf(VectorizedFloatDecaySpec).pa8 = function (initialValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    if (!!(this.kaa_1 == null)) {
      this.kaa_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).ga4();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0 = maxDuration;
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = this.iaa_1.oaa(initialValue.ha4(i), initialVelocity.ha4(i));
        maxDuration = compare(tmp0, b) >= 0 ? tmp0 : b;
      }
       while (inductionVariable < last);
    return maxDuration;
  };
  protoOf(VectorizedFloatDecaySpec).qa8 = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.kaa_1 == null)) {
      this.kaa_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).ga4();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl(this).ia4(i, this.iaa_1.paa(playTimeNanos, initialValue.ha4(i), initialVelocity.ha4(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl(this);
  };
  protoOf(VectorizedFloatDecaySpec).oa8 = function (initialValue, initialVelocity) {
    if (!!(this.laa_1 == null)) {
      this.laa_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_targetVector__vn6c89(this).ga4();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_targetVector__vn6c89(this).ia4(i, this.iaa_1.qaa(initialValue.ha4(i), initialVelocity.ha4(i)));
      }
       while (inductionVariable < last);
    return _get_targetVector__vn6c89(this);
  };
  var androidx_compose_animation_core_DeferredTargetAnimation$stable;
  function get_FastOutSlowInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return FastOutSlowInEasing;
  }
  var FastOutSlowInEasing;
  var LinearOutSlowInEasing;
  function get_FastOutLinearInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return FastOutLinearInEasing;
  }
  var FastOutLinearInEasing;
  function get_LinearEasing() {
    _init_properties_Easing_kt__v6fq45();
    return LinearEasing;
  }
  var LinearEasing;
  var androidx_compose_animation_core_CubicBezierEasing$stable;
  function throwNoSolution($this, fraction) {
    throw IllegalArgumentException_init_$Create$('The cubic curve with parameters (' + $this.raa_1 + ', ' + $this.saa_1 + ', ' + $this.taa_1 + ', ' + $this.uaa_1 + ') has no solution at ' + fraction);
  }
  function CubicBezierEasing(a, b, c, d) {
    this.raa_1 = a;
    this.saa_1 = b;
    this.taa_1 = c;
    this.uaa_1 = d;
    // Inline function 'androidx.compose.animation.core.requirePrecondition' call
    if (!(!isNaN_0(this.raa_1) && !isNaN_0(this.saa_1) && !isNaN_0(this.taa_1) && !isNaN_0(this.uaa_1))) {
      var tmp$ret$1 = 'Parameters to CubicBezierEasing cannot be NaN. Actual parameters are: ' + this.raa_1 + ', ' + this.saa_1 + ', ' + this.taa_1 + ', ' + this.uaa_1 + '.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    var roots = new Float32Array(5);
    var extrema = computeCubicVerticalBounds(0.0, this.saa_1, this.uaa_1, 1.0, roots, 0);
    var tmp = this;
    // Inline function 'androidx.collection.FloatFloatPair.first' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(_FloatFloatPair___get_packedValue__impl__5lczxp(extrema), 32));
    tmp.vaa_1 = floatFromBits(bits);
    var tmp_0 = this;
    // Inline function 'androidx.collection.FloatFloatPair.second' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(_FloatFloatPair___get_packedValue__impl__5lczxp(extrema), new Long(-1, 0)));
    tmp_0.waa_1 = floatFromBits(bits_0);
  }
  protoOf(CubicBezierEasing).xaa = function (fraction) {
    var tmp;
    if (fraction > 0.0 && fraction < 1.0) {
      // Inline function 'kotlin.math.max' call
      var b = 1.1920929E-7;
      var f = Math.max(fraction, b);
      var t = findFirstCubicRoot(0.0 - f, this.raa_1 - f, this.taa_1 - f, 1.0 - f);
      if (isNaN_0(t)) {
        throwNoSolution(this, fraction);
      }
      var tmp0 = evaluateCubic(this.saa_1, this.uaa_1, t);
      var tmp2 = this.vaa_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue = this.waa_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_0 = tmp0 < tmp2 ? tmp2 : tmp0;
      tmp = this_0 > maximumValue ? maximumValue : this_0;
    } else {
      tmp = fraction;
    }
    return tmp;
  };
  protoOf(CubicBezierEasing).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof CubicBezierEasing) {
      tmp_2 = this.raa_1 === other.raa_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.saa_1 === other.saa_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.taa_1 === other.taa_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.uaa_1 === other.uaa_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CubicBezierEasing).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.raa_1), 31) + getNumberHashCode(this.saa_1) | 0, 31) + getNumberHashCode(this.taa_1) | 0, 31) + getNumberHashCode(this.uaa_1) | 0;
  };
  protoOf(CubicBezierEasing).toString = function () {
    return 'CubicBezierEasing(a=' + this.raa_1 + ', b=' + this.saa_1 + ', c=' + this.taa_1 + ', d=' + this.uaa_1 + ')';
  };
  function Easing() {
  }
  function sam$androidx_compose_animation_core_Easing$0(function_0) {
    this.yaa_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0).xaa = function (fraction) {
    return this.yaa_1(fraction);
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0).r2 = function () {
    return this.yaa_1;
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Easing) : false) {
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
  protoOf(sam$androidx_compose_animation_core_Easing$0).hashCode = function () {
    return hashCode(this.r2());
  };
  function LinearEasing$lambda(fraction) {
    _init_properties_Easing_kt__v6fq45();
    return fraction;
  }
  var properties_initialized_Easing_kt_af4f4d;
  function _init_properties_Easing_kt__v6fq45() {
    if (!properties_initialized_Easing_kt_af4f4d) {
      properties_initialized_Easing_kt_af4f4d = true;
      FastOutSlowInEasing = new CubicBezierEasing(0.4, 0.0, 0.2, 1.0);
      LinearOutSlowInEasing = new CubicBezierEasing(0.0, 0.0, 0.2, 1.0);
      FastOutLinearInEasing = new CubicBezierEasing(0.4, 0.0, 1.0, 1.0);
      var tmp = LinearEasing$lambda;
      LinearEasing = new sam$androidx_compose_animation_core_Easing$0(tmp);
      androidx_compose_animation_core_CubicBezierEasing$stable = 0;
    }
  }
  var androidx_compose_animation_core_FloatSpringSpec$stable;
  var androidx_compose_animation_core_FloatTweenSpec$stable;
  function FloatTweenSpec(duration, delay, easing) {
    duration = duration === VOID ? 300 : duration;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.zaa_1 = duration;
    this.aab_1 = delay;
    this.bab_1 = easing;
    this.cab_1 = multiply(numberToLong(this.zaa_1), new Long(1000000, 0));
    this.dab_1 = multiply(numberToLong(this.aab_1), new Long(1000000, 0));
  }
  protoOf(FloatTweenSpec).eab = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    // Inline function 'androidx.compose.animation.core.FloatTweenSpec.clampPlayTimeNanos' call
    var tmp0 = subtract(playTimeNanos, this.dab_1);
    var tmp2 = new Long(0, 0);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue = this.cab_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = compare(tmp0, tmp2) < 0 ? tmp2 : tmp0;
    var clampedPlayTimeNanos = compare(this_0, maximumValue) > 0 ? maximumValue : this_0;
    var tmp;
    if (this.zaa_1 === 0) {
      tmp = 1.0;
    } else {
      // Inline function 'kotlin.Long.div' call
      var other = toNumber(this.cab_1);
      tmp = toNumber(clampedPlayTimeNanos) / other;
    }
    var rawFraction = tmp;
    var fraction = this.bab_1.xaa(rawFraction);
    // Inline function 'androidx.compose.animation.core.lerp' call
    return initialValue * (1 - fraction) + targetValue * fraction;
  };
  protoOf(FloatTweenSpec).fab = function (initialValue, targetValue, initialVelocity) {
    return add(this.dab_1, this.cab_1);
  };
  protoOf(FloatTweenSpec).gab = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    // Inline function 'androidx.compose.animation.core.FloatTweenSpec.clampPlayTimeNanos' call
    var tmp0 = subtract(playTimeNanos, this.dab_1);
    var tmp2 = new Long(0, 0);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue = this.cab_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = compare(tmp0, tmp2) < 0 ? tmp2 : tmp0;
    var clampedPlayTimeNanos = compare(this_0, maximumValue) > 0 ? maximumValue : this_0;
    if (equalsLong(clampedPlayTimeNanos, new Long(0, 0))) {
      return initialVelocity;
    }
    var startNum = this.eab(subtract(clampedPlayTimeNanos, new Long(1000000, 0)), initialValue, targetValue, initialVelocity);
    var endNum = this.eab(clampedPlayTimeNanos, initialValue, targetValue, initialVelocity);
    return (endNum - startNum) * 1000.0;
  };
  protoOf(FloatTweenSpec).ka7 = function (converter) {
    return this.iab(converter);
  };
  function FloatAnimationSpec() {
  }
  function FloatSpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    dampingRatio = dampingRatio === VOID ? 1.0 : dampingRatio;
    stiffness = stiffness === VOID ? 1500.0 : stiffness;
    visibilityThreshold = visibilityThreshold === VOID ? 0.01 : visibilityThreshold;
    this.jab_1 = dampingRatio;
    this.kab_1 = stiffness;
    this.lab_1 = visibilityThreshold;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = new SpringSimulation(1.0);
    this_0.qab(this.jab_1);
    this_0.rab(this.kab_1);
    tmp.mab_1 = this_0;
  }
  protoOf(FloatSpringSpec).eab = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = divide(playTimeNanos, new Long(1000000, 0));
    this.mab_1.nab_1 = targetValue;
    // Inline function 'androidx.compose.animation.core.Motion.value' call
    var this_0 = this.mab_1.sab(initialValue, initialVelocity, playTimeMillis);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Motion___get_packedValue__impl__qymh4n(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    return floatFromBits(bits);
  };
  protoOf(FloatSpringSpec).gab = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = divide(playTimeNanos, new Long(1000000, 0));
    this.mab_1.nab_1 = targetValue;
    // Inline function 'androidx.compose.animation.core.Motion.velocity' call
    var this_0 = this.mab_1.sab(initialValue, initialVelocity, playTimeMillis);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value = _Motion___get_packedValue__impl__qymh4n(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    return floatFromBits(bits);
  };
  protoOf(FloatSpringSpec).hab = function (initialValue, targetValue, initialVelocity) {
    return 0.0;
  };
  protoOf(FloatSpringSpec).fab = function (initialValue, targetValue, initialVelocity) {
    var tmp0_stiffness = this.mab_1.tab();
    var tmp1_dampingRatio = this.mab_1.pab_1;
    var tmp2_initialDisplacement = (initialValue - targetValue) / this.lab_1;
    var tmp3_initialVelocity = initialVelocity / this.lab_1;
    return multiply(estimateAnimationDurationMillis(tmp0_stiffness, tmp1_dampingRatio, tmp3_initialVelocity, tmp2_initialDisplacement, 1.0), new Long(1000000, 0));
  };
  protoOf(FloatSpringSpec).ka7 = function (converter) {
    return this.iab(converter);
  };
  var androidx_compose_animation_core_FloatExponentialDecaySpec$stable;
  function withInfiniteAnimationFrameNanos(onFrame, $completion) {
    var tmp = new $withInfiniteAnimationFrameNanosCOROUTINE$(onFrame, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation) {
    this.mac_1 = $onFrame;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(withInfiniteAnimationFrameNanos$slambda).q1o = function ($completion) {
    var tmp = this.p1o($completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(withInfiniteAnimationFrameNanos$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = withFrameNanos(this.mac_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 2) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  protoOf(withInfiniteAnimationFrameNanos$slambda).p1o = function (completion) {
    return new withInfiniteAnimationFrameNanos$slambda(this.mac_1, completion);
  };
  function withInfiniteAnimationFrameNanos$slambda_0($onFrame, resultContinuation) {
    var i = new withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation);
    var l = function ($completion) {
      return i.q1o($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $withInfiniteAnimationFrameNanosCOROUTINE$(onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.cac_1 = onFrame;
  }
  protoOf($withInfiniteAnimationFrameNanosCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            var policy = this.s8().z8(Key_instance);
            if (policy == null) {
              this.m8_1 = 2;
              suspendResult = withFrameNanos(this.cac_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 1;
              suspendResult = policy.nac(withInfiniteAnimationFrameNanos$slambda_0(this.cac_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.dac_1 = suspendResult;
            this.m8_1 = 3;
            continue $sm;
          case 2:
            this.dac_1 = suspendResult;
            this.m8_1 = 3;
            continue $sm;
          case 3:
            return this.dac_1;
          case 4:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 4) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  var androidx_compose_animation_core_InfiniteTransition$stable;
  var androidx_compose_animation_core_MutationInterruptedException$stable;
  var androidx_compose_animation_core_MutatorMutex$stable;
  function Mutator(priority, job) {
    this.oac_1 = priority;
    this.pac_1 = job;
  }
  protoOf(Mutator).qac = function (other) {
    return this.oac_1.j2(other.oac_1) >= 0;
  };
  protoOf(Mutator).t1y = function () {
    return this.pac_1.bx(new MutationInterruptedException());
  };
  function tryMutateOrCancel($this, mutator) {
    $l$loop: while (true) {
      var oldMutator = $this.ca4_1.x13();
      if (oldMutator == null || mutator.qac(oldMutator)) {
        if ($this.ca4_1.p1k(oldMutator, mutator)) {
          if (oldMutator == null)
            null;
          else {
            oldMutator.t1y();
          }
          break $l$loop;
        }
      } else
        throw CancellationException_init_$Create$('Current mutation had a higher priority');
    }
  }
  function MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation) {
    this.aad_1 = $priority;
    this.bad_1 = this$0;
    this.cad_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutatorMutex$mutate$slambda).jad = function ($this$coroutineScope, $completion) {
    var tmp = this.c1m($this$coroutineScope, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(MutatorMutex$mutate$slambda).e9 = function (p1, $completion) {
    return this.jad((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutatorMutex$mutate$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 9;
            this.gad_1 = new Mutator(this.aad_1, ensureNotNull(this.dad_1.sv().z8(Key_instance_0)));
            tryMutateOrCancel(this.bad_1, this.gad_1);
            this.fad_1 = this.bad_1.da4_1;
            this.ead_1 = null;
            this.m8_1 = 1;
            suspendResult = this.fad_1.i1u(this.ead_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.had_1 = Unit_instance;
            this.m8_1 = 2;
            continue $sm;
          case 2:
            this.n8_1 = 8;
            this.m8_1 = 3;
            continue $sm;
          case 3:
            this.n8_1 = 7;
            this.m8_1 = 4;
            suspendResult = this.cad_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.iad_1 = suspendResult;
            this.m8_1 = 5;
            continue $sm;
          case 5:
            var tmp_0 = this.iad_1;
            this.n8_1 = 8;
            this.bad_1.ca4_1.p1k(this.gad_1, null);
            this.had_1 = tmp_0;
            this.n8_1 = 9;
            this.m8_1 = 6;
            continue $sm;
          case 6:
            var tmp_1 = this.had_1;
            this.n8_1 = 9;
            this.fad_1.k1u(this.ead_1);
            return tmp_1;
          case 7:
            this.n8_1 = 8;
            var t = this.p8_1;
            this.bad_1.ca4_1.p1k(this.gad_1, null);
            throw t;
          case 8:
            this.n8_1 = 9;
            var t_0 = this.p8_1;
            this.fad_1.k1u(this.ead_1);
            throw t_0;
          case 9:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 9) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  protoOf(MutatorMutex$mutate$slambda).c1m = function ($this$coroutineScope, completion) {
    var i = new MutatorMutex$mutate$slambda(this.aad_1, this.bad_1, this.cad_1, completion);
    i.dad_1 = $this$coroutineScope;
    return i;
  };
  function MutatorMutex$mutate$slambda_0($priority, this$0, $block, resultContinuation) {
    var i = new MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.jad($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutatorMutex() {
    this.ca4_1 = new AtomicReference(null);
    this.da4_1 = Mutex();
  }
  protoOf(MutatorMutex).kad = function (priority, block, $completion) {
    return coroutineScope(MutatorMutex$mutate$slambda_0(priority, this, block, null), $completion);
  };
  protoOf(MutatorMutex).ea4 = function (priority, block, $completion, $super) {
    priority = priority === VOID ? MutatePriority_Default_getInstance() : priority;
    return $super === VOID ? this.kad(priority, block, $completion) : $super.kad.call(this, priority, block, $completion);
  };
  var MutatePriority_Default_instance;
  var MutatePriority_UserInput_instance;
  var MutatePriority_PreventUserInput_instance;
  var MutatePriority_entriesInitialized;
  function MutatePriority_initEntries() {
    if (MutatePriority_entriesInitialized)
      return Unit_instance;
    MutatePriority_entriesInitialized = true;
    MutatePriority_Default_instance = new MutatePriority('Default', 0);
    MutatePriority_UserInput_instance = new MutatePriority('UserInput', 1);
    MutatePriority_PreventUserInput_instance = new MutatePriority('PreventUserInput', 2);
  }
  function MutatePriority(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MutationInterruptedException() {
    PlatformOptimizedCancellationException.call(this, 'Mutation interrupted');
    captureStack(this, MutationInterruptedException);
  }
  function MutatePriority_Default_getInstance() {
    MutatePriority_initEntries();
    return MutatePriority_Default_instance;
  }
  var androidx_compose_animation_core_MonoSpline$stable;
  var androidx_compose_animation_core_PathEasing$stable;
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function estimateAnimationDurationMillis(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    if (dampingRatio === 0.0) {
      return new Long(2077252342, 2147);
    }
    return estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    var tmp = 2.0 * dampingRatio;
    // Inline function 'kotlin.math.sqrt' call
    var dampingCoefficient = tmp * Math.sqrt(stiffness);
    var partialRoot = dampingCoefficient * dampingCoefficient - 4.0 * stiffness;
    var tmp_0;
    if (partialRoot < 0.0) {
      tmp_0 = 0.0;
    } else {
      // Inline function 'kotlin.math.sqrt' call
      tmp_0 = Math.sqrt(partialRoot);
    }
    var partialRootReal = tmp_0;
    var tmp_1;
    if (partialRoot < 0.0) {
      // Inline function 'kotlin.math.abs' call
      // Inline function 'kotlin.math.sqrt' call
      var x = Math.abs(partialRoot);
      tmp_1 = Math.sqrt(x);
    } else {
      tmp_1 = 0.0;
    }
    var partialRootImaginary = tmp_1;
    var firstRootReal = (-dampingCoefficient + partialRootReal) * 0.5;
    var firstRootImaginary = partialRootImaginary * 0.5;
    var secondRootReal = (-dampingCoefficient - partialRootReal) * 0.5;
    return estimateDurationInternal(firstRootReal, firstRootImaginary, secondRootReal, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateDurationInternal(firstRootReal, firstRootImaginary, secondRootReal, dampingRatio, initialVelocity, initialPosition, delta) {
    if (initialPosition === 0.0 && initialVelocity === 0.0) {
      return new Long(0, 0);
    }
    var v0 = initialPosition < 0 ? -initialVelocity : initialVelocity;
    // Inline function 'kotlin.math.abs' call
    var p0 = Math.abs(initialPosition);
    return numberToLong((dampingRatio > 1.0 ? estimateOverDamped(firstRootReal, secondRootReal, p0, v0, delta) : dampingRatio < 1.0 ? estimateUnderDamped(firstRootReal, firstRootImaginary, p0, v0, delta) : estimateCriticallyDamped(firstRootReal, p0, v0, delta)) * 1000.0);
  }
  function estimateOverDamped(firstRootReal, secondRootReal, p0, v0, delta) {
    var r1 = firstRootReal;
    var r2 = secondRootReal;
    var c2 = (r1 * p0 - v0) / (r1 - r2);
    var c1 = p0 - c2;
    // Inline function 'kotlin.math.abs' call
    var x = delta / c1;
    // Inline function 'kotlin.math.ln' call
    var x_0 = Math.abs(x);
    var t1 = Math.log(x_0) / r1;
    // Inline function 'kotlin.math.abs' call
    var x_1 = delta / c2;
    // Inline function 'kotlin.math.ln' call
    var x_2 = Math.abs(x_1);
    var t2 = Math.log(x_2) / r2;
    var tmp;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    if (!(compare(bitwiseAnd(toRawBits(t1), new Long(-1, 2147483647)), new Long(0, 2146435072)) < 0)) {
      tmp = t2;
    } else {
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      // Inline function 'androidx.compose.ui.util.fastIsFinite' call
      if (!(compare(bitwiseAnd(toRawBits(t2), new Long(-1, 2147483647)), new Long(0, 2146435072)) < 0)) {
        tmp = t1;
      } else {
        // Inline function 'kotlin.math.max' call
        tmp = Math.max(t1, t2);
      }
    }
    var tCurr = tmp;
    // Inline function 'kotlin.math.ln' call
    var x_3 = c1 * r1 / (-c2 * r2);
    var tInflection = Math.log(x_3) / (r2 - r1);
    var tmp_0;
    if (isNaN_1(tInflection) || tInflection <= 0.0) {
      tmp_0 = -delta;
    } else if (tInflection > 0.0 && -estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) < delta) {
      if (c2 > 0.0 && c1 < 0.0) {
        tCurr = 0.0;
      }
      tmp_0 = -delta;
    } else {
      // Inline function 'kotlin.math.ln' call
      var x_4 = -(c2 * r2 * r2) / (c1 * r1 * r1);
      tCurr = Math.log(x_4) / (r1 - r2);
      tmp_0 = delta;
    }
    var signedDelta = tmp_0;
    var tmp_1 = c1 * r1;
    // Inline function 'kotlin.math.exp' call
    var x_5 = r1 * tCurr;
    var tmp_2 = tmp_1 * Math.exp(x_5);
    var tmp_3 = c2 * r2;
    // Inline function 'kotlin.math.exp' call
    var x_6 = r2 * tCurr;
    // Inline function 'kotlin.math.abs' call
    var x_7 = tmp_2 + tmp_3 * Math.exp(x_6);
    if (Math.abs(x_7) < 1.0E-4) {
      return tCurr;
    }
    var tDelta = 1.7976931348623157E308;
    var iterations = 0;
    while (tDelta > 0.001 && iterations < 100) {
      iterations = iterations + 1 | 0;
      var tLast = tCurr;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var x_8 = tCurr;
      // Inline function 'kotlin.math.exp' call
      var x_9 = r1 * x_8;
      var tmp_4 = c1 * Math.exp(x_9);
      // Inline function 'kotlin.math.exp' call
      var x_10 = r2 * x_8;
      var tmp_5 = tmp_4 + c2 * Math.exp(x_10) + signedDelta;
      var tmp_6 = c1 * r1;
      // Inline function 'kotlin.math.exp' call
      var x_11 = r1 * x_8;
      var tmp_7 = tmp_6 * Math.exp(x_11);
      var tmp_8 = c2 * r2;
      // Inline function 'kotlin.math.exp' call
      var x_12 = r2 * x_8;
      tCurr = x_8 - tmp_5 / (tmp_7 + tmp_8 * Math.exp(x_12));
      // Inline function 'kotlin.math.abs' call
      var x_13 = tLast - tCurr;
      tDelta = Math.abs(x_13);
    }
    return tCurr;
  }
  function estimateUnderDamped(firstRootReal, firstRootImaginary, p0, v0, delta) {
    var r = firstRootReal;
    var c1 = p0;
    var c2 = (v0 - r * c1) / firstRootImaginary;
    // Inline function 'kotlin.math.sqrt' call
    var x = c1 * c1 + c2 * c2;
    var c = Math.sqrt(x);
    // Inline function 'kotlin.math.ln' call
    var x_0 = delta / c;
    return Math.log(x_0) / r;
  }
  function estimateCriticallyDamped(firstRootReal, p0, v0, delta) {
    var r = firstRootReal;
    var c1 = p0;
    var c2 = v0 - r * c1;
    // Inline function 'kotlin.math.abs' call
    var x = delta / c1;
    // Inline function 'kotlin.math.ln' call
    var x_0 = Math.abs(x);
    var t1 = Math.log(x_0) / r;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.math.abs' call
    var x_1 = delta / c2;
    // Inline function 'kotlin.math.ln' call
    var x_2 = Math.abs(x_1);
    var guess = Math.log(x_2);
    var t = guess;
    var inductionVariable = 0;
    if (inductionVariable <= 5)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.math.abs' call
        var x_3 = t / r;
        // Inline function 'kotlin.math.ln' call
        var x_4 = Math.abs(x_3);
        t = guess - Math.log(x_4);
      }
       while (inductionVariable <= 5);
    var t2 = t / r;
    var tmp;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    if (!(compare(bitwiseAnd(toRawBits(t1), new Long(-1, 2147483647)), new Long(0, 2146435072)) < 0)) {
      tmp = t2;
    } else {
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      // Inline function 'androidx.compose.ui.util.fastIsFinite' call
      if (!(compare(bitwiseAnd(toRawBits(t2), new Long(-1, 2147483647)), new Long(0, 2146435072)) < 0)) {
        tmp = t1;
      } else {
        // Inline function 'kotlin.math.max' call
        tmp = Math.max(t1, t2);
      }
    }
    var tCurr = tmp;
    var tInflection = -(r * c1 + c2) / (r * c2);
    // Inline function 'kotlin.math.exp' call
    var x_5 = r * tInflection;
    var tmp_0 = c1 * Math.exp(x_5);
    var tmp_1 = c2 * tInflection;
    // Inline function 'kotlin.math.exp' call
    var x_6 = r * tInflection;
    var xInflection = tmp_0 + tmp_1 * Math.exp(x_6);
    var tmp_2;
    if (isNaN_1(tInflection) || tInflection <= 0.0) {
      tmp_2 = -delta;
    } else if (tInflection > 0.0 && -xInflection < delta) {
      if (c2 < 0 && c1 > 0) {
        tCurr = 0.0;
      }
      tmp_2 = -delta;
    } else {
      tCurr = -(2.0 / r) - c1 / c2;
      tmp_2 = delta;
    }
    var signedDelta = tmp_2;
    var tDelta = 1.7976931348623157E308;
    var iterations = 0;
    while (tDelta > 0.001 && iterations < 100) {
      iterations = iterations + 1 | 0;
      var tLast = tCurr;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var x_7 = tCurr;
      var tmp_3 = c1 + c2 * x_7;
      // Inline function 'kotlin.math.exp' call
      var x_8 = r * x_7;
      var tmp_4 = tmp_3 * Math.exp(x_8) + signedDelta;
      var tmp_5 = c2 * (r * x_7 + 1) + c1 * r;
      // Inline function 'kotlin.math.exp' call
      var x_9 = r * x_7;
      tCurr = x_7 - tmp_4 / (tmp_5 * Math.exp(x_9));
      // Inline function 'kotlin.math.abs' call
      var x_10 = tLast - tCurr;
      tDelta = Math.abs(x_10);
    }
    return tCurr;
  }
  function estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) {
    // Inline function 'kotlin.math.exp' call
    var x = r1 * tInflection;
    var tmp = c1 * Math.exp(x);
    // Inline function 'kotlin.math.exp' call
    var x_0 = r2 * tInflection;
    return tmp + c2 * Math.exp(x_0);
  }
  var androidx_compose_animation_core_SpringSimulation$stable;
  function SpringSimulation(finalPosition) {
    this.nab_1 = finalPosition;
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    tmp.oab_1 = Math.sqrt(50.0);
    this.pab_1 = 1.0;
  }
  protoOf(SpringSimulation).rab = function (value) {
    if (this.tab() <= 0) {
      throwIllegalArgumentException('Spring stiffness constant must be positive.');
    }
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    tmp.oab_1 = Math.sqrt(value);
  };
  protoOf(SpringSimulation).tab = function () {
    return this.oab_1 * this.oab_1;
  };
  protoOf(SpringSimulation).qab = function (value) {
    if (value < 0) {
      throwIllegalArgumentException('Damping ratio must be non-negative');
    }
    this.pab_1 = value;
  };
  protoOf(SpringSimulation).sab = function (lastDisplacement, lastVelocity, timeElapsed) {
    var adjustedDisplacement = lastDisplacement - this.nab_1;
    // Inline function 'kotlin.Long.div' call
    var deltaT = toNumber(timeElapsed) / 1000.0;
    var dampingRatioSquared = this.pab_1 * this.pab_1;
    var r = -this.pab_1 * this.oab_1;
    var displacement;
    var currentVelocity;
    if (this.pab_1 > 1) {
      var tmp = this.oab_1;
      // Inline function 'kotlin.math.sqrt' call
      var x = dampingRatioSquared - 1;
      var s = tmp * Math.sqrt(x);
      var gammaPlus = r + s;
      var gammaMinus = r - s;
      var coeffB = (gammaMinus * adjustedDisplacement - lastVelocity) / (gammaMinus - gammaPlus);
      var coeffA = adjustedDisplacement - coeffB;
      // Inline function 'kotlin.math.exp' call
      var x_0 = gammaMinus * deltaT;
      var tmp_0 = coeffA * Math.exp(x_0);
      // Inline function 'kotlin.math.exp' call
      var x_1 = gammaPlus * deltaT;
      displacement = tmp_0 + coeffB * Math.exp(x_1);
      var tmp_1 = coeffA * gammaMinus;
      // Inline function 'kotlin.math.exp' call
      var x_2 = gammaMinus * deltaT;
      var tmp_2 = tmp_1 * Math.exp(x_2);
      var tmp_3 = coeffB * gammaPlus;
      // Inline function 'kotlin.math.exp' call
      var x_3 = gammaPlus * deltaT;
      currentVelocity = tmp_2 + tmp_3 * Math.exp(x_3);
    } else if (this.pab_1 === 1.0) {
      var coeffA_0 = adjustedDisplacement;
      var coeffB_0 = lastVelocity + this.oab_1 * adjustedDisplacement;
      var nFdT = -this.oab_1 * deltaT;
      var tmp_4 = coeffA_0 + coeffB_0 * deltaT;
      // Inline function 'kotlin.math.exp' call
      displacement = tmp_4 * Math.exp(nFdT);
      var tmp_5 = coeffA_0 + coeffB_0 * deltaT;
      // Inline function 'kotlin.math.exp' call
      var tmp_6 = tmp_5 * Math.exp(nFdT) * -this.oab_1;
      // Inline function 'kotlin.math.exp' call
      currentVelocity = tmp_6 + coeffB_0 * Math.exp(nFdT);
    } else {
      var tmp_7 = this.oab_1;
      // Inline function 'kotlin.math.sqrt' call
      var x_4 = 1 - dampingRatioSquared;
      var dampedFreq = tmp_7 * Math.sqrt(x_4);
      var cosCoeff = adjustedDisplacement;
      var sinCoeff = 1 / dampedFreq * (-r * adjustedDisplacement + lastVelocity);
      var dFdT = dampedFreq * deltaT;
      // Inline function 'kotlin.math.exp' call
      var x_5 = r * deltaT;
      var tmp_8 = Math.exp(x_5);
      // Inline function 'kotlin.math.cos' call
      var tmp_9 = cosCoeff * Math.cos(dFdT);
      // Inline function 'kotlin.math.sin' call
      displacement = tmp_8 * (tmp_9 + sinCoeff * Math.sin(dFdT));
      var tmp_10 = displacement * r;
      // Inline function 'kotlin.math.exp' call
      var x_6 = r * deltaT;
      var tmp_11 = Math.exp(x_6);
      var tmp_12 = -dampedFreq * cosCoeff;
      // Inline function 'kotlin.math.sin' call
      var tmp_13 = tmp_12 * Math.sin(dFdT);
      var tmp_14 = dampedFreq * sinCoeff;
      // Inline function 'kotlin.math.cos' call
      currentVelocity = tmp_10 + tmp_11 * (tmp_13 + tmp_14 * Math.cos(dFdT));
    }
    var newValue = displacement + this.nab_1;
    var newVelocity = currentVelocity;
    // Inline function 'androidx.compose.animation.core.Motion' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits_0(newValue));
    var v2 = fromInt(toRawBits_0(newVelocity));
    var tmp$ret$17 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Motion___init__impl__vk56rv(tmp$ret$17);
  };
  function _Motion___init__impl__vk56rv(packedValue) {
    return packedValue;
  }
  function _Motion___get_packedValue__impl__qymh4n($this) {
    return $this;
  }
  function animateDecay(_this__u8e3s4, animationSpec, sequentialAnimation, block, $completion) {
    sequentialAnimation = sequentialAnimation === VOID ? false : sequentialAnimation;
    var tmp;
    if (block === VOID) {
      tmp = animateDecay$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp0_initialValue = _this__u8e3s4.x1();
    var tmp1_initialVelocityVector = _this__u8e3s4.wa3_1;
    var tmp2_typeConverter = _this__u8e3s4.ua3_1;
    var anim = DecayAnimation_init_$Create$(animationSpec, tmp2_typeConverter, tmp0_initialValue, tmp1_initialVelocityVector);
    return animate_0(_this__u8e3s4, anim, sequentialAnimation ? _this__u8e3s4.xa3_1 : new Long(0, -2147483648), block, $completion);
  }
  function animateTo(_this__u8e3s4, targetValue, animationSpec, sequentialAnimation, block, $completion) {
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    sequentialAnimation = sequentialAnimation === VOID ? false : sequentialAnimation;
    var tmp;
    if (block === VOID) {
      tmp = animateTo$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp0_initialValue = _this__u8e3s4.x1();
    var tmp1_typeConverter = _this__u8e3s4.ua3_1;
    var tmp2_initialVelocityVector = _this__u8e3s4.wa3_1;
    var anim = TargetBasedAnimation_init_$Create$(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, tmp2_initialVelocityVector);
    return animate_0(_this__u8e3s4, anim, sequentialAnimation ? _this__u8e3s4.xa3_1 : new Long(0, -2147483648), block, $completion);
  }
  function animate(initialValue, targetValue, initialVelocity, animationSpec, block, $completion) {
    initialVelocity = initialVelocity === VOID ? 0.0 : initialVelocity;
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    return animate_1(get_VectorConverter(FloatCompanionObject_instance), initialValue, targetValue, initialVelocity, animationSpec, block, $completion);
  }
  function animate_0(_this__u8e3s4, animation, startTimeNanos, block, $completion) {
    startTimeNanos = startTimeNanos === VOID ? new Long(0, -2147483648) : startTimeNanos;
    var tmp;
    if (block === VOID) {
      tmp = animate$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp_0 = new $animateCOROUTINE$(_this__u8e3s4, animation, startTimeNanos, block, $completion);
    tmp_0.o8_1 = Unit_instance;
    tmp_0.p8_1 = null;
    return tmp_0.u8();
  }
  function updateState(_this__u8e3s4, state) {
    state.aa4(_this__u8e3s4.x1());
    copyFrom(state.wa3_1, _this__u8e3s4.qa3_1);
    state.ya3_1 = _this__u8e3s4.sa3_1;
    state.xa3_1 = _this__u8e3s4.ra3_1;
    state.za3_1 = _this__u8e3s4.la4();
  }
  function animate_1(typeConverter, initialValue, targetValue, initialVelocity, animationSpec, block, $completion) {
    initialVelocity = initialVelocity === VOID ? null : initialVelocity;
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    var tmp;
    if (initialVelocity == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = typeConverter.fa4()(initialVelocity);
    }
    var tmp1_elvis_lhs = tmp;
    var initialVelocityVector = tmp1_elvis_lhs == null ? newInstance(typeConverter.fa4()(initialValue)) : tmp1_elvis_lhs;
    var anim = TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector);
    var tmp_0 = new AnimationState(typeConverter, initialValue, initialVelocityVector);
    return animate_0(tmp_0, anim, VOID, animate$lambda_3(block, typeConverter), $completion);
  }
  function get_durationScale(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.z8(Key_instance_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n63();
    var scale = tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs;
    // Inline function 'androidx.compose.animation.core.checkPrecondition' call
    if (!(scale >= 0.0)) {
      var tmp$ret$1 = 'negative scale factor';
      throwIllegalStateException(tmp$ret$1);
    }
    return scale;
  }
  function callWithFrameNanos(_this__u8e3s4, onFrame, $completion) {
    var tmp = new $callWithFrameNanosCOROUTINE$(_this__u8e3s4, onFrame, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function doAnimationFrameWithScale(_this__u8e3s4, frameTimeNanos, durationScale, anim, state, block) {
    var tmp;
    if (durationScale === 0.0) {
      tmp = anim.ba8();
    } else {
      // Inline function 'kotlin.Long.div' call
      var this_0 = subtract(frameTimeNanos, _this__u8e3s4.na3_1);
      var tmp$ret$0 = toNumber(this_0) / durationScale;
      tmp = numberToLong(tmp$ret$0);
    }
    var playTimeNanos = tmp;
    doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block);
  }
  function doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block) {
    _this__u8e3s4.ra3_1 = frameTimeNanos;
    _this__u8e3s4.aa4(anim.ya7(playTimeNanos));
    _this__u8e3s4.qa3_1 = anim.da8(playTimeNanos);
    var isLastFrame = anim.aa8(playTimeNanos);
    if (isLastFrame) {
      _this__u8e3s4.sa3_1 = _this__u8e3s4.ra3_1;
      _this__u8e3s4.wa8(false);
    }
    updateState(_this__u8e3s4, state);
    block(_this__u8e3s4);
  }
  function animateDecay$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function animateTo$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function animate$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function animate$lambda$lambda($this_animate) {
    return function () {
      $this_animate.za3_1 = false;
      return Unit_instance;
    };
  }
  function animate$lambda_0($lateInitScope, $initialValue, $animation, $initialVelocityVector, $durationScale, $this_animate, $block) {
    return function (it) {
      var tmp = $animation.va7();
      var tmp_0 = $animation.ma4();
      // Inline function 'kotlin.apply' call
      var this_0 = new AnimationScope($initialValue, tmp, $initialVelocityVector, it, tmp_0, it, true, animate$lambda$lambda($this_animate));
      doAnimationFrameWithScale(this_0, it, $durationScale, $animation, $this_animate, $block);
      $lateInitScope._v = this_0;
      return Unit_instance;
    };
  }
  function animate$lambda_1($this_animate) {
    return function () {
      $this_animate.za3_1 = false;
      return Unit_instance;
    };
  }
  function animate$lambda_2($lateInitScope, $durationScale, $animation, $this_animate, $block) {
    return function (it) {
      doAnimationFrameWithScale(ensureNotNull($lateInitScope._v), it, $durationScale, $animation, $this_animate, $block);
      return Unit_instance;
    };
  }
  function animate$lambda_3($block, $typeConverter) {
    return function ($this$animate) {
      $block($this$animate.x1(), $typeConverter.ja4()($this$animate.qa3_1));
      return Unit_instance;
    };
  }
  function callWithFrameNanos$lambda($onFrame) {
    return function (it) {
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = divide(it, fromInt(1));
      return $onFrame(tmp$ret$0);
    };
  }
  function $animateCOROUTINE$(_this__u8e3s4, animation, startTimeNanos, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.tad_1 = _this__u8e3s4;
    this.uad_1 = animation;
    this.vad_1 = startTimeNanos;
    this.wad_1 = block;
  }
  protoOf($animateCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 8;
            var initialValue = this.uad_1.ya7(new Long(0, 0));
            var initialVelocityVector = this.uad_1.da8(new Long(0, 0));
            this.xad_1 = {_v: null};
            this.n8_1 = 7;
            if (equalsLong(this.vad_1, new Long(0, -2147483648))) {
              var durationScale = get_durationScale(this.s8());
              this.m8_1 = 1;
              suspendResult = callWithFrameNanos(this.uad_1, animate$lambda_0(this.xad_1, initialValue, this.uad_1, initialVelocityVector, durationScale, this.tad_1, this.wad_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_0 = this.uad_1.va7();
              var tmp_1 = this.uad_1.ma4();
              var this_0 = new AnimationScope(initialValue, tmp_0, initialVelocityVector, this.vad_1, tmp_1, this.vad_1, true, animate$lambda_1(this.tad_1));
              doAnimationFrameWithScale(this_0, this.vad_1, get_durationScale(this.s8()), this.uad_1, this.tad_1, this.wad_1);
              this.xad_1._v = this_0;
              this.m8_1 = 2;
              continue $sm;
            }

          case 1:
            this.m8_1 = 2;
            continue $sm;
          case 2:
            this.m8_1 = 3;
            continue $sm;
          case 3:
            if (!ensureNotNull(this.xad_1._v).la4()) {
              this.m8_1 = 5;
              continue $sm;
            }

            var durationScale_0 = get_durationScale(this.s8());
            this.m8_1 = 4;
            suspendResult = callWithFrameNanos(this.uad_1, animate$lambda_2(this.xad_1, durationScale_0, this.uad_1, this.tad_1, this.wad_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.m8_1 = 3;
            continue $sm;
          case 5:
            this.n8_1 = 8;
            this.m8_1 = 6;
            continue $sm;
          case 6:
            this.n8_1 = 8;
            return Unit_instance;
          case 7:
            this.n8_1 = 8;
            var tmp_2 = this.p8_1;
            if (tmp_2 instanceof CancellationException) {
              var e = this.p8_1;
              var tmp0_safe_receiver = this.xad_1._v;
              if (tmp0_safe_receiver == null)
                null;
              else {
                tmp0_safe_receiver.wa8(false);
              }
              var tmp1_safe_receiver = this.xad_1._v;
              if (equals(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ra3_1, this.tad_1.xa3_1)) {
                this.tad_1.za3_1 = false;
              }
              throw e;
            } else {
              throw this.p8_1;
            }

          case 8:
            throw this.p8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.n8_1 === 8) {
          throw e_0;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e_0;
        }
      }
     while (true);
  };
  function $callWithFrameNanosCOROUTINE$(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.gae_1 = _this__u8e3s4;
    this.hae_1 = onFrame;
  }
  protoOf($callWithFrameNanosCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            if (this.gae_1.xa7()) {
              this.m8_1 = 2;
              suspendResult = withInfiniteAnimationFrameNanos(this.hae_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 1;
              suspendResult = withFrameNanos(callWithFrameNanos$lambda(this.hae_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.iae_1 = suspendResult;
            this.m8_1 = 3;
            continue $sm;
          case 2:
            this.iae_1 = suspendResult;
            this.m8_1 = 3;
            continue $sm;
          case 3:
            return this.iae_1;
          case 4:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 4) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  function get_FloatToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return FloatToVector;
  }
  var FloatToVector;
  function get_IntToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntToVector;
  }
  var IntToVector;
  function get_DpToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return DpToVector;
  }
  var DpToVector;
  function get_DpOffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return DpOffsetToVector;
  }
  var DpOffsetToVector;
  function get_SizeToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return SizeToVector;
  }
  var SizeToVector;
  function get_OffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return OffsetToVector;
  }
  var OffsetToVector;
  function get_IntOffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntOffsetToVector;
  }
  var IntOffsetToVector;
  function get_IntSizeToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntSizeToVector;
  }
  var IntSizeToVector;
  function get_RectToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return RectToVector;
  }
  var RectToVector;
  function get_VectorConverter(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_FloatToVector();
  }
  function get_VectorConverter_0(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_DpToVector();
  }
  function TwoWayConverter(convertToVector, convertFromVector) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new TwoWayConverterImpl(convertToVector, convertFromVector);
  }
  function get_VectorConverter_1(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntOffsetToVector();
  }
  function get_VectorConverter_2(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntSizeToVector();
  }
  function get_VectorConverter_3(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_RectToVector();
  }
  function get_VectorConverter_4(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_OffsetToVector();
  }
  function TwoWayConverterImpl(convertToVector, convertFromVector) {
    this.jae_1 = convertToVector;
    this.kae_1 = convertFromVector;
  }
  protoOf(TwoWayConverterImpl).fa4 = function () {
    return this.jae_1;
  };
  protoOf(TwoWayConverterImpl).ja4 = function () {
    return this.kae_1;
  };
  function get_VectorConverter_5(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntToVector();
  }
  function get_VectorConverter_6(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_SizeToVector();
  }
  function get_VectorConverter_7(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_DpOffsetToVector();
  }
  function FloatToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function FloatToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return it.xa8_1;
  }
  function IntToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function IntToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return numberToInt(it.xa8_1);
  }
  function DpToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(_Dp___get_value__impl__geb1vb(it.h3r_1));
  }
  function DpToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Dp(_Dp___init__impl__ms3zkb(it.xa8_1));
  }
  function DpOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Dp___get_value__impl__geb1vb(_DpOffset___get_x__impl__uauqb5(it.r3r_1)), _Dp___get_value__impl__geb1vb(_DpOffset___get_y__impl__1h898y(it.r3r_1)));
  }
  function DpOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = it.fa9_1;
    var tmp0 = _Dp___init__impl__ms3zkb(this_0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_1 = it.ga9_1;
    // Inline function 'androidx.compose.ui.unit.DpOffset' call
    var y = _Dp___init__impl__ms3zkb(this_1);
    var tmp0_0 = _Dp___get_value__impl__geb1vb(tmp0);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _Dp___get_value__impl__geb1vb(y);
    var v1 = fromInt(toRawBits_0(tmp0_0));
    var v2 = fromInt(toRawBits_0(val2));
    var tmp$ret$3 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$2 = _DpOffset___init__impl__yq36wy(tmp$ret$3);
    return new DpOffset(tmp$ret$2);
  }
  function SizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    var this_0 = it.l3q_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    var this_1 = it.l3q_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp$ret$4 = floatFromBits(bits_0);
    return new AnimationVector2D(tmp, tmp$ret$4);
  }
  function SizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    var tmp0 = it.fa9_1;
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = it.ga9_1;
    var v1 = fromInt(toRawBits_0(tmp0));
    var v2 = fromInt(toRawBits_0(val2));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$0 = _Size___init__impl__aywn0g(tmp$ret$1);
    return new Size(tmp$ret$0);
  }
  function OffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_0 = it.h3p_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_1 = it.h3p_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(this_1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp$ret$4 = floatFromBits(bits_0);
    return new AnimationVector2D(tmp, tmp$ret$4);
  }
  function OffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    var tmp0 = it.fa9_1;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = it.ga9_1;
    var v1 = fromInt(toRawBits_0(tmp0));
    var v2 = fromInt(toRawBits_0(val2));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$0 = _Offset___init__impl__c168vi(tmp$ret$1);
    return new Offset(tmp$ret$0);
  }
  function IntOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_IntOffset___get_x__impl__qiqr5o(it.s3r_1), _IntOffset___get_y__impl__2avpwj(it.s3r_1));
  }
  function IntOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_0 = it.fa9_1;
    var tmp;
    if (isNaN_0(this_0)) {
      tmp = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp = roundToInt(this_0);
    }
    var tmp0 = tmp;
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_1 = it.ga9_1;
    var tmp_0;
    if (isNaN_0(this_1)) {
      tmp_0 = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp_0 = roundToInt(this_1);
    }
    // Inline function 'androidx.compose.ui.unit.IntOffset' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = tmp_0;
    var tmp$ret$5 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    var tmp$ret$4 = _IntOffset___init__impl__rq8h7b(tmp$ret$5);
    return new IntOffset(tmp$ret$4);
  }
  function IntSizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    var this_0 = it.d3s_1;
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
    var tmp = convertToInt(shiftRight(value, 32));
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    var this_1 = it.d3s_1;
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
    var tmp$ret$2 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    return new AnimationVector2D(tmp, tmp$ret$2);
  }
  function IntSizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_0 = it.fa9_1;
    var tmp;
    if (isNaN_0(this_0)) {
      tmp = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp = roundToInt(this_0);
    }
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_1 = tmp;
    var tmp0 = this_1 < 0 ? 0 : this_1;
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_2 = it.ga9_1;
    var tmp_0;
    if (isNaN_0(this_2)) {
      tmp_0 = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp_0 = roundToInt(this_2);
    }
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_3 = tmp_0;
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = this_3 < 0 ? 0 : this_3;
    var tmp$ret$7 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    var tmp$ret$6 = _IntSize___init__impl__emcjft(tmp$ret$7);
    return new IntSize(tmp$ret$6);
  }
  function RectToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector4D(it.n3p_1, it.o3p_1, it.p3p_1, it.q3p_1);
  }
  function RectToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Rect(it.aa9_1, it.ba9_1, it.ca9_1, it.da9_1);
  }
  var properties_initialized_VectorConverters_kt_cg0a6g;
  function _init_properties_VectorConverters_kt__g28mmu() {
    if (!properties_initialized_VectorConverters_kt_cg0a6g) {
      properties_initialized_VectorConverters_kt_cg0a6g = true;
      var tmp = FloatToVector$lambda;
      FloatToVector = TwoWayConverter(tmp, FloatToVector$lambda_0);
      var tmp_0 = IntToVector$lambda;
      IntToVector = TwoWayConverter(tmp_0, IntToVector$lambda_0);
      var tmp_1 = DpToVector$lambda;
      DpToVector = TwoWayConverter(tmp_1, DpToVector$lambda_0);
      var tmp_2 = DpOffsetToVector$lambda;
      DpOffsetToVector = TwoWayConverter(tmp_2, DpOffsetToVector$lambda_0);
      var tmp_3 = SizeToVector$lambda;
      SizeToVector = TwoWayConverter(tmp_3, SizeToVector$lambda_0);
      var tmp_4 = OffsetToVector$lambda;
      OffsetToVector = TwoWayConverter(tmp_4, OffsetToVector$lambda_0);
      var tmp_5 = IntOffsetToVector$lambda;
      IntOffsetToVector = TwoWayConverter(tmp_5, IntOffsetToVector$lambda_0);
      var tmp_6 = IntSizeToVector$lambda;
      IntSizeToVector = TwoWayConverter(tmp_6, IntSizeToVector$lambda_0);
      var tmp_7 = RectToVector$lambda;
      RectToVector = TwoWayConverter(tmp_7, RectToVector$lambda_0);
    }
  }
  var EmptyIntArray;
  var EmptyFloatArray;
  var EmptyArcSpline;
  var androidx_compose_animation_core_VectorizedKeyframesSpec$stable;
  var androidx_compose_animation_core_VectorizedKeyframeSpecElementInfo$stable;
  var androidx_compose_animation_core_VectorizedSnapSpec$stable;
  var androidx_compose_animation_core_VectorizedInfiniteRepeatableSpec$stable;
  var androidx_compose_animation_core_VectorizedRepeatableSpec$stable;
  var androidx_compose_animation_core_Spring$stable;
  var androidx_compose_animation_core_VectorizedSpringSpec$stable;
  var androidx_compose_animation_core_VectorizedTweenSpec$stable;
  var androidx_compose_animation_core_VectorizedFloatAnimationSpec$stable;
  function VectorizedAnimationSpec() {
  }
  function VectorizedFiniteAnimationSpec() {
  }
  function VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, $this) {
    dampingRatio = dampingRatio === VOID ? 1.0 : dampingRatio;
    stiffness = stiffness === VOID ? 1500.0 : stiffness;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    VectorizedSpringSpec.call($this, dampingRatio, stiffness, createSpringAnimations(visibilityThreshold, dampingRatio, stiffness));
    return $this;
  }
  function VectorizedSpringSpec_init_$Create$(dampingRatio, stiffness, visibilityThreshold) {
    return VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, objectCreate(protoOf(VectorizedSpringSpec)));
  }
  function VectorizedSpringSpec(dampingRatio, stiffness, anims) {
    this.lae_1 = new VectorizedFloatAnimationSpec(anims);
    this.mae_1 = dampingRatio;
    this.nae_1 = stiffness;
  }
  protoOf(VectorizedSpringSpec).xa7 = function () {
    return this.lae_1.xa7();
  };
  protoOf(VectorizedSpringSpec).za7 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.lae_1.za7(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).ea8 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.lae_1.ea8(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).ca8 = function (initialValue, targetValue, initialVelocity) {
    return this.lae_1.ca8(initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).ua7 = function (initialValue, targetValue, initialVelocity) {
    return this.lae_1.ua7(initialValue, targetValue, initialVelocity);
  };
  function VectorizedTweenSpec(durationMillis, delayMillis, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.sae_1 = durationMillis;
    this.tae_1 = delayMillis;
    this.uae_1 = easing;
    this.vae_1 = VectorizedFloatAnimationSpec_init_$Create$(new FloatTweenSpec(this.sae_1, this.tae_1, this.uae_1));
  }
  protoOf(VectorizedTweenSpec).wae = function () {
    return this.sae_1;
  };
  protoOf(VectorizedTweenSpec).xae = function () {
    return this.tae_1;
  };
  protoOf(VectorizedTweenSpec).za7 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.vae_1.za7(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedTweenSpec).ea8 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.vae_1.ea8(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  function VectorizedDurationBasedAnimationSpec() {
  }
  function _get_valueVector__r10idf_0($this) {
    var tmp = $this.pae_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _get_velocityVector__dvxlkl_0($this) {
    var tmp = $this.qae_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _get_endVelocityVector__l8kbka($this) {
    var tmp = $this.rae_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('endVelocityVector');
    }
  }
  function VectorizedFloatAnimationSpec_init_$Init$(anim, $this) {
    VectorizedFloatAnimationSpec.call($this, new VectorizedFloatAnimationSpec$1(anim));
    return $this;
  }
  function VectorizedFloatAnimationSpec_init_$Create$(anim) {
    return VectorizedFloatAnimationSpec_init_$Init$(anim, objectCreate(protoOf(VectorizedFloatAnimationSpec)));
  }
  function VectorizedFloatAnimationSpec$1($anim) {
    this.yae_1 = $anim;
  }
  protoOf(VectorizedFloatAnimationSpec$1).m = function (index) {
    return this.yae_1;
  };
  function VectorizedFloatAnimationSpec(anims) {
    this.oae_1 = anims;
  }
  protoOf(VectorizedFloatAnimationSpec).za7 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.pae_1 == null)) {
      this.pae_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf_0(this).ga4();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf_0(this).ia4(i, this.oae_1.m(i).eab(playTimeNanos, initialValue.ha4(i), targetValue.ha4(i), initialVelocity.ha4(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf_0(this);
  };
  protoOf(VectorizedFloatAnimationSpec).ea8 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.qae_1 == null)) {
      this.qae_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl_0(this).ga4();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl_0(this).ia4(i, this.oae_1.m(i).gab(playTimeNanos, initialValue.ha4(i), targetValue.ha4(i), initialVelocity.ha4(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl_0(this);
  };
  protoOf(VectorizedFloatAnimationSpec).ua7 = function (initialValue, targetValue, initialVelocity) {
    if (!!(this.rae_1 == null)) {
      this.rae_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_endVelocityVector__l8kbka(this).ga4();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_endVelocityVector__l8kbka(this).ia4(i, this.oae_1.m(i).hab(initialValue.ha4(i), targetValue.ha4(i), initialVelocity.ha4(i)));
      }
       while (inductionVariable < last);
    return _get_endVelocityVector__l8kbka(this);
  };
  protoOf(VectorizedFloatAnimationSpec).ca8 = function (initialValue, targetValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    var inductionVariable = 0;
    var last = initialValue.ga4();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0 = maxDuration;
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = this.oae_1.m(i).fab(initialValue.ha4(i), targetValue.ha4(i), initialVelocity.ha4(i));
        maxDuration = compare(tmp0, b) >= 0 ? tmp0 : b;
      }
       while (inductionVariable < last);
    return maxDuration;
  };
  function createSpringAnimations(visibilityThreshold, dampingRatio, stiffness) {
    _init_properties_VectorizedAnimationSpec_kt__qefgpy();
    var tmp;
    if (!(visibilityThreshold == null)) {
      tmp = new createSpringAnimations$1(visibilityThreshold, dampingRatio, stiffness);
    } else {
      tmp = new createSpringAnimations$2(dampingRatio, stiffness);
    }
    return tmp;
  }
  function createSpringAnimations$1($visibilityThreshold, $dampingRatio, $stiffness) {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = $visibilityThreshold.ga4();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      tmp_2[tmp_3] = new FloatSpringSpec($dampingRatio, $stiffness, $visibilityThreshold.ha4(tmp_3));
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.zae_1 = tmp_2;
  }
  protoOf(createSpringAnimations$1).m = function (index) {
    return this.zae_1[index];
  };
  function createSpringAnimations$2($dampingRatio, $stiffness) {
    this.aaf_1 = new FloatSpringSpec($dampingRatio, $stiffness);
  }
  protoOf(createSpringAnimations$2).m = function (index) {
    return this.aaf_1;
  };
  var properties_initialized_VectorizedAnimationSpec_kt_jkmo58;
  function _init_properties_VectorizedAnimationSpec_kt__qefgpy() {
    if (!properties_initialized_VectorizedAnimationSpec_kt_jkmo58) {
      properties_initialized_VectorizedAnimationSpec_kt_jkmo58 = true;
      EmptyIntArray = new Int32Array(0);
      EmptyFloatArray = new Float32Array(0);
      var tmp = new Int32Array(2);
      var tmp_0 = new Float32Array(2);
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [new Float32Array(2), new Float32Array(2)];
      EmptyArcSpline = new ArcSpline(tmp, tmp_0, tmp$ret$0);
      androidx_compose_animation_core_VectorizedKeyframesSpec$stable = 8;
      androidx_compose_animation_core_VectorizedKeyframeSpecElementInfo$stable = 0;
      androidx_compose_animation_core_VectorizedSnapSpec$stable = 0;
      androidx_compose_animation_core_VectorizedInfiniteRepeatableSpec$stable = 8;
      androidx_compose_animation_core_VectorizedRepeatableSpec$stable = 8;
      androidx_compose_animation_core_Spring$stable = 0;
      androidx_compose_animation_core_VectorizedSpringSpec$stable = 8;
      androidx_compose_animation_core_VectorizedTweenSpec$stable = 8;
      androidx_compose_animation_core_VectorizedFloatAnimationSpec$stable = 8;
    }
  }
  var androidx_compose_animation_core_VectorizedMonoSplineKeyframesSpec$stable;
  function get_RectVisibilityThreshold() {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return RectVisibilityThreshold;
  }
  var RectVisibilityThreshold;
  var VisibilityThresholdMap;
  function get_VisibilityThreshold(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    // Inline function 'androidx.compose.ui.unit.IntOffset' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(1), 32), bitwiseAnd(fromInt(1), new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$1);
  }
  function get_VisibilityThreshold_0(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return get_RectVisibilityThreshold();
  }
  function get_VisibilityThreshold_1(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(1), 32), bitwiseAnd(fromInt(1), new Long(-1, 0)));
    return _IntSize___init__impl__emcjft(tmp$ret$1);
  }
  function get_VisibilityThreshold_2(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits_0(1.0));
    var v2 = fromInt(toRawBits_0(1.0));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$1);
  }
  function get_VisibilityThreshold_3(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0.4);
  }
  function get_VisibilityThreshold_4(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits_0(1.0));
    var v2 = fromInt(toRawBits_0(1.0));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$1);
  }
  function get_VisibilityThreshold_5(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return 1;
  }
  var properties_initialized_VisibilityThresholds_kt_k6rdp8;
  function _init_properties_VisibilityThresholds_kt__rvu6yi() {
    if (!properties_initialized_VisibilityThresholds_kt_k6rdp8) {
      properties_initialized_VisibilityThresholds_kt_k6rdp8 = true;
      RectVisibilityThreshold = new Rect(1.0, 1.0, 1.0, 1.0);
      VisibilityThresholdMap = mapOf([to(get_VectorConverter_5(IntCompanionObject_instance), 1.0), to(get_VectorConverter_2(Companion_getInstance_5()), 1.0), to(get_VectorConverter_1(Companion_getInstance_4()), 1.0), to(get_VectorConverter(FloatCompanionObject_instance), 0.01), to(get_VectorConverter_3(Companion_getInstance_3()), 1.0), to(get_VectorConverter_6(Companion_getInstance_1()), 1.0), to(get_VectorConverter_4(Companion_getInstance_2()), 1.0), to(get_VectorConverter_0(Companion_getInstance_0()), 0.4), to(get_VectorConverter_7(Companion_getInstance_6()), 0.4)]);
    }
  }
  function binarySearch(_this__u8e3s4, element, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? _this__u8e3s4.length : toIndex;
    rangeCheck(_this__u8e3s4.length, fromIndex, toIndex);
    var low = fromIndex;
    var high = toIndex - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      var cmp = compareTo(midVal, element);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function rangeCheck(size, fromIndex, toIndex) {
    if (fromIndex > toIndex)
      throw IllegalArgumentException_init_$Create$('fromIndex (' + fromIndex + ') is greater than toIndex (' + toIndex + ').');
    else if (fromIndex < 0)
      throw IndexOutOfBoundsException_init_$Create$('fromIndex (' + fromIndex + ') is less than zero.');
    else if (toIndex > size)
      throw IndexOutOfBoundsException_init_$Create$('toIndex (' + toIndex + ') is greater than size (' + size + ').');
  }
  var androidx_compose_animation_core_AtomicReference$stable;
  function AtomicReference(value) {
    this.rac_1 = atomic$ref$1(value);
  }
  protoOf(AtomicReference).x13 = function () {
    return this.rac_1.kotlinx$atomicfu$value;
  };
  protoOf(AtomicReference).p1k = function (expect, newValue) {
    return this.rac_1.atomicfu$compareAndSet(expect, newValue);
  };
  var androidx_compose_animation_core_internal_PlatformOptimizedCancellationException$stable;
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  //region block: post-declaration
  protoOf(TargetBasedAnimation).aa8 = isFinishedFromNanos;
  protoOf(DecayAnimation).aa8 = isFinishedFromNanos;
  protoOf(FloatTweenSpec).hab = getEndVelocity;
  protoOf(FloatTweenSpec).iab = vectorize;
  protoOf(FloatSpringSpec).iab = vectorize;
  protoOf(VectorizedTweenSpec).ca8 = getDurationNanos;
  protoOf(VectorizedTweenSpec).xa7 = get_isInfinite;
  protoOf(VectorizedTweenSpec).ua7 = getEndVelocity_0;
  protoOf(VectorizedFloatAnimationSpec).xa7 = get_isInfinite;
  //endregion
  //region block: init
  androidx_compose_animation_core_TargetBasedAnimation$stable = 8;
  androidx_compose_animation_core_DecayAnimation$stable = 0;
  androidx_compose_animation_core_AnimationConstants$stable = 0;
  androidx_compose_animation_core_TweenSpec$stable = 0;
  androidx_compose_animation_core_SpringSpec$stable = 0;
  androidx_compose_animation_core_ArcAnimationSpec$stable = 0;
  androidx_compose_animation_core_RepeatableSpec$stable = 0;
  androidx_compose_animation_core_InfiniteRepeatableSpec$stable = 8;
  androidx_compose_animation_core_SnapSpec$stable = 0;
  androidx_compose_animation_core_KeyframesSpecBaseConfig$stable = 8;
  androidx_compose_animation_core_KeyframeBaseEntity$stable = 8;
  androidx_compose_animation_core_KeyframesSpec_KeyframesSpecConfig$stable = 8;
  androidx_compose_animation_core_KeyframesSpec_KeyframeEntity$stable = 8;
  androidx_compose_animation_core_KeyframesSpec$stable = 0;
  androidx_compose_animation_core_KeyframesWithSplineSpec_KeyframesWithSplineSpecConfig$stable = 8;
  androidx_compose_animation_core_KeyframesWithSplineSpec$stable = 0;
  androidx_compose_animation_core_AnimationState$stable = 0;
  androidx_compose_animation_core_AnimationScope$stable = 8;
  androidx_compose_animation_core_AnimationVector$stable = 0;
  androidx_compose_animation_core_AnimationVector1D$stable = 8;
  androidx_compose_animation_core_AnimationVector2D$stable = 8;
  androidx_compose_animation_core_AnimationVector3D$stable = 8;
  androidx_compose_animation_core_AnimationVector4D$stable = 8;
  androidx_compose_animation_core_DeferredTargetAnimation$stable = 8;
  androidx_compose_animation_core_FloatSpringSpec$stable = 8;
  androidx_compose_animation_core_FloatTweenSpec$stable = 0;
  androidx_compose_animation_core_FloatExponentialDecaySpec$stable = 0;
  androidx_compose_animation_core_InfiniteTransition$stable = 8;
  androidx_compose_animation_core_MutationInterruptedException$stable = 8;
  androidx_compose_animation_core_MutatorMutex$stable = 0;
  androidx_compose_animation_core_MonoSpline$stable = 8;
  androidx_compose_animation_core_PathEasing$stable = 0;
  androidx_compose_animation_core_SpringSimulation$stable = 8;
  androidx_compose_animation_core_VectorizedMonoSplineKeyframesSpec$stable = 8;
  androidx_compose_animation_core_AtomicReference$stable = 8;
  androidx_compose_animation_core_internal_PlatformOptimizedCancellationException$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Animatable_0;
  _.$_$.b = Animatable;
  _.$_$.c = AnimationState_1;
  _.$_$.d = AnimationState_0;
  _.$_$.e = AnimationState;
  _.$_$.f = AnimationVector1D;
  _.$_$.g = AnimationVector4D;
  _.$_$.h = CubicBezierEasing;
  _.$_$.i = get_FastOutLinearInEasing;
  _.$_$.j = get_FastOutSlowInEasing;
  _.$_$.k = FiniteAnimationSpec;
  _.$_$.l = get_LinearEasing;
  _.$_$.m = SpringSpec;
  _.$_$.n = TweenSpec;
  _.$_$.o = TwoWayConverter;
  _.$_$.p = get_VectorConverter_1;
  _.$_$.q = get_VectorConverter;
  _.$_$.r = get_VisibilityThreshold;
  _.$_$.s = animateValueAsState;
  _.$_$.t = copy;
  _.$_$.u = generateDecayAnimationSpec;
  _.$_$.v = spring;
  _.$_$.w = tween;
  _.$_$.x = animateDecay;
  _.$_$.y = animateTo;
  _.$_$.z = animate;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-animation-animation-core.js.map
