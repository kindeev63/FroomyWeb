(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './androidx-compose-runtime-runtime.js', './compose-multiplatform-core-compose-foundation-foundation-layout.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-animation-animation.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-animation-animation-core.js', './compose-multiplatform-core-compose-ui-ui-util.js', './compose-multiplatform-core-compose-ui-ui-text.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-material-material-ripple.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./androidx-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-foundation-foundation-layout.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-animation-animation.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-material-material-ripple.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation-layout' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-animation-animation' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-material-material-ripple'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-material-material-ripple' was not found. Please, check whether 'compose-multiplatform-core-compose-material-material-ripple' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    globalThis['compose-multiplatform-core-compose-material3-material3'] = factory(typeof globalThis['compose-multiplatform-core-compose-material3-material3'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-material3-material3'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['androidx-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-animation-animation'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['compose-multiplatform-core-compose-ui-ui-util'], globalThis['compose-multiplatform-core-compose-ui-ui-text'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-material-material-ripple']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_animation_animation, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_util, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_material_material_ripple) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.fa;
  var equals = kotlin_kotlin.$_$.f9;
  var FunctionAdapter = kotlin_kotlin.$_$.t8;
  var isInterface = kotlin_kotlin.$_$.w9;
  var PointerInputEventHandler = kotlin_org_jetbrains_compose_ui_ui.$_$.e1;
  var hashCode = kotlin_kotlin.$_$.m9;
  var initMetadataForClass = kotlin_kotlin.$_$.n9;
  var VOID = kotlin_kotlin.$_$.c;
  var KProperty0 = kotlin_kotlin.$_$.fb;
  var getLocalDelegateReference = kotlin_kotlin.$_$.i9;
  var Unit_instance = kotlin_kotlin.$_$.n;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.t1;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.h1;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.o6;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.s1;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.p6;
  var rowMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.v;
  var get_currentCompositeKeyHashCode = kotlin_androidx_compose_runtime_runtime.$_$.d1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.a6;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.l6;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.g1;
  var Applier = kotlin_androidx_compose_runtime_runtime.$_$.h;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.e2;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.h2;
  var Updater__init_impl_uaeges = kotlin_androidx_compose_runtime_runtime.$_$.f2;
  var Updater__reconcile_impl_1mfi6g = kotlin_androidx_compose_runtime_runtime.$_$.g2;
  var RowScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e1;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var CoroutineImpl = kotlin_kotlin.$_$.s7;
  var THROW_CCE = kotlin_kotlin.$_$.ld;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.d7;
  var Velocity = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var initMetadataForLambda = kotlin_kotlin.$_$.s9;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j2;
  var set_isTraversalGroup = kotlin_org_jetbrains_compose_ui_ui.$_$.c5;
  var PointerInputScope = kotlin_org_jetbrains_compose_ui_ui.$_$.f1;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.y1;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var isNaN_0 = kotlin_kotlin.$_$.wd;
  var toRawBits = kotlin_kotlin.$_$.ke;
  var toString = kotlin_kotlin.$_$.ha;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var derivedStateOf = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var Companion_getInstance_2 = kotlin_androidx_compose_runtime_runtime.$_$.a2;
  var animateColorAsState = kotlin_org_jetbrains_compose_animation_animation.$_$.b;
  var rememberComposableLambda = kotlin_androidx_compose_runtime_runtime.$_$.c;
  var Orientation_Vertical_getInstance = kotlin_org_jetbrains_compose_foundation_foundation.$_$.h1;
  var rememberDraggableState = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b;
  var draggable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a;
  var drawBehind = kotlin_org_jetbrains_compose_ui_ui.$_$.e;
  var semantics = kotlin_org_jetbrains_compose_ui_ui.$_$.j5;
  var pointerInput = kotlin_org_jetbrains_compose_ui_ui.$_$.q1;
  var maybeCachedBoxMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.o;
  var BoxScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c1;
  var windowInsetsPadding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a1;
  var clipToBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.c;
  var initMetadataForObject = kotlin_kotlin.$_$.t9;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l3;
  var Long = kotlin_kotlin.$_$.gd;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.a3;
  var get_FastOutLinearInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.i;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u1;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i3;
  var onSizeChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.o2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.b3;
  var layoutId = kotlin_org_jetbrains_compose_ui_ui.$_$.n2;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.t;
  var androidx_compose_runtime_ProvidedValue$stableprop_getter = kotlin_androidx_compose_runtime_runtime.$_$.z;
  var CompositionLocalProvider = kotlin_androidx_compose_runtime_runtime.$_$.l;
  var padding_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u;
  var clearAndSetSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.q4;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.n;
  var columnMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j;
  var ColumnScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.d1;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var PaddingValues = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.f1;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.g1;
  var WindowInsetsSides__plus_impl_9q9m59 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h1;
  var only = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.q;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var calculateStartPadding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i;
  var calculateEndPadding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var get_layoutId = kotlin_org_jetbrains_compose_ui_ui.$_$.m2;
  var throwNoSuchElementException = kotlin_org_jetbrains_compose_ui_ui_util.$_$.d;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v3;
  var coerceAtLeast = kotlin_kotlin.$_$.qa;
  var get_LastBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.z1;
  var roundToInt = kotlin_kotlin.$_$.ka;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.b2;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.y;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o1;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e3;
  var bitwiseAnd = kotlin_kotlin.$_$.a8;
  var convertToInt = kotlin_kotlin.$_$.e8;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var AnimationState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.d;
  var animateDecay = kotlin_org_jetbrains_compose_animation_animation_core.$_$.x;
  var animateTo = kotlin_org_jetbrains_compose_animation_animation_core.$_$.y;
  var Velocity_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.p9;
  var compositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.a1;
  var CubicBezierEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.l1;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ae;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x3;
  var compositeOver = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n1;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.u1;
  var Companion_instance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k2;
  var toolingGraphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.p;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui.$_$.k6;
  var paint = kotlin_org_jetbrains_compose_ui_ui.$_$.f;
  var Box = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var shiftRight = kotlin_kotlin.$_$.q8;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.g;
  var floatFromBits = kotlin_kotlin.$_$.g9;
  var isInfinite = kotlin_kotlin.$_$.vd;
  var set_contentDescription = kotlin_org_jetbrains_compose_ui_ui.$_$.t4;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui.$_$.n6;
  var set_role = kotlin_org_jetbrains_compose_ui_ui.$_$.f5;
  var size = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.x;
  var funMutableInteractionSource = kotlin_org_jetbrains_compose_foundation_foundation.$_$.k;
  var size_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.w;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.d;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.c1;
  var clickable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.o9;
  var DpSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.b3;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.a1;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.u5;
  var currentValueOf = kotlin_org_jetbrains_compose_ui_ui.$_$.o3;
  var coerceAtLeast_0 = kotlin_kotlin.$_$.ra;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var emptyMap = kotlin_kotlin.$_$.v4;
  var CompositionLocalConsumerModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.r2;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.a3;
  var HorizontalAlignmentLine = kotlin_org_jetbrains_compose_ui_ui.$_$.y1;
  var VerticalAlignmentLine = kotlin_org_jetbrains_compose_ui_ui.$_$.k2;
  var get_LocalIndication = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b1;
  var get_LocalTextSelectionColors = kotlin_org_jetbrains_compose_foundation_foundation.$_$.w;
  var CompositionLocalProvider_0 = kotlin_androidx_compose_runtime_runtime.$_$.k;
  var TextSelectionColors = kotlin_org_jetbrains_compose_foundation_foundation.$_$.x;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.v;
  var FiniteAnimationSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k;
  var toString_0 = kotlin_kotlin.$_$.me;
  var objectCreate = kotlin_kotlin.$_$.ea;
  var ColorProducer = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m;
  var getBooleanHashCode = kotlin_kotlin.$_$.h9;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var rememberUpdatedInstance = kotlin_org_jetbrains_compose_foundation_foundation.$_$.z;
  var IndicationNodeFactory = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a1;
  var observeReads = kotlin_org_jetbrains_compose_ui_ui.$_$.w3;
  var createRippleModifierNode = kotlin_org_jetbrains_compose_material_material_ripple.$_$.b;
  var DelegatingNode = kotlin_org_jetbrains_compose_ui_ui.$_$.t2;
  var DelegatableNode = kotlin_org_jetbrains_compose_ui_ui.$_$.s2;
  var RippleAlpha = kotlin_org_jetbrains_compose_material_material_ripple.$_$.a;
  var onConsumedWindowInsetsChanged = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p;
  var SubcomposeLayout = kotlin_org_jetbrains_compose_ui_ui.$_$.i2;
  var Enum = kotlin_kotlin.$_$.ad;
  var exclude = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.l1;
  var KMutableProperty1 = kotlin_kotlin.$_$.eb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.k9;
  var ensureNotNull = kotlin_kotlin.$_$.ud;
  var first = kotlin_kotlin.$_$.d5;
  var offset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d1;
  var asPaddingValues = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.g;
  var PaddingValues_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.d;
  var get_CircleShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.r;
  var get_RectangleShape = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c1;
  var CornerSize = kotlin_org_jetbrains_compose_foundation_foundation.$_$.t;
  var graphicsLayer_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.o;
  var border = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d1;
  var set_isContainer = kotlin_org_jetbrains_compose_ui_ui.$_$.a5;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.d4;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var FontStyle = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a;
  var TextAlign = kotlin_org_jetbrains_compose_ui_ui_text.$_$.e;
  var TextOverflow = kotlin_org_jetbrains_compose_ui_ui_text.$_$.f;
  var _TextUnit___get_packedValue__impl__it60w4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k3;
  var _TextOverflow___get_value__impl__vugm5i = kotlin_org_jetbrains_compose_ui_ui_text.$_$.e1;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.x;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.v;
  var BasicText = kotlin_org_jetbrains_compose_foundation_foundation.$_$.y;
  var structuralEqualityPolicy = kotlin_androidx_compose_runtime_runtime.$_$.v1;
  var invalidateSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.v3;
  var TraversableNode = kotlin_org_jetbrains_compose_ui_ui.$_$.n3;
  var SemanticsModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.m3;
  var traverseAncestors = kotlin_org_jetbrains_compose_ui_ui.$_$.b4;
  var get_shouldClearDescendantSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.k3;
  var get_shouldMergeDescendantSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.l3;
  var get_isImportantForBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.j3;
  var initMetadataForInterface = kotlin_kotlin.$_$.r9;
  var WindowInsets = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.f;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.u;
  var RoundedCornerShape_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.v;
  var CornerSize_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.s;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h1;
  var get_sp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i1;
  var checkArithmetic = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var _TextUnit___get_rawType__impl__tu8yq5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l3;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o3;
  var pack = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e1;
  var Companion_getInstance_13 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.q;
  var Companion_getInstance_14 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.r;
  var Companion_getInstance_15 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.t;
  var Companion_getInstance_16 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.u;
  var LineHeightStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.z;
  var get_systemBars = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.y;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(sam$androidx_compose_ui_input_pointer_PointerInputEventHandler$0, 'sam$androidx_compose_ui_input_pointer_PointerInputEventHandler$0', VOID, VOID, [PointerInputEventHandler, FunctionAdapter], [1]);
  initMetadataForInterface(FloatProducer, 'FloatProducer');
  initMetadataForClass(sam$androidx_compose_material3_internal_FloatProducer$0, 'sam$androidx_compose_material3_internal_FloatProducer$0', VOID, VOID, [FloatProducer, FunctionAdapter]);
  initMetadataForLambda(DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForObject(DefaultSingleRowTopAppBarOverride, 'DefaultSingleRowTopAppBarOverride');
  initMetadataForObject(DefaultTwoRowsTopAppBarOverride, 'DefaultTwoRowsTopAppBarOverride');
  initMetadataForClass(SingleRowTopAppBarOverrideScope, 'SingleRowTopAppBarOverrideScope');
  initMetadataForClass(TopAppBarColors, 'TopAppBarColors');
  initMetadataForObject(TopAppBarDefaults, 'TopAppBarDefaults');
  initMetadataForObject(ComposableSingletons$AppBarKt, 'ComposableSingletons$AppBarKt');
  initMetadataForClass(TopAppBarMeasurePolicy, 'TopAppBarMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForCoroutine($settleAppBarCOROUTINE$, CoroutineImpl);
  initMetadataForClass(ColorScheme, 'ColorScheme');
  initMetadataForClass(IconButtonColors, 'IconButtonColors');
  initMetadataForCompanion(Companion);
  initMetadataForClass(IconButtonWidthOption, 'IconButtonWidthOption');
  initMetadataForObject(IconButtonDefaults, 'IconButtonDefaults');
  initMetadataForObject(MinimumInteractiveModifier, 'MinimumInteractiveModifier', VOID, ModifierNodeElement);
  initMetadataForClass(MinimumInteractiveModifierNode, 'MinimumInteractiveModifierNode', MinimumInteractiveModifierNode, Node, [CompositionLocalConsumerModifierNode, LayoutModifierNode]);
  initMetadataForObject(MaterialTheme, 'MaterialTheme');
  initMetadataForCompanion(Companion_0);
  initMetadataForObject(StandardMotionSchemeImpl, 'StandardMotionSchemeImpl');
  initMetadataForClass(RippleConfiguration, 'RippleConfiguration', RippleConfiguration);
  initMetadataForClass(sam$androidx_compose_ui_graphics_ColorProducer$0, 'sam$androidx_compose_ui_graphics_ColorProducer$0', VOID, VOID, [ColorProducer, FunctionAdapter]);
  initMetadataForClass(RippleNodeFactory, 'RippleNodeFactory', VOID, VOID, [IndicationNodeFactory]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_ColorProducer$0_0, 'sam$androidx_compose_ui_graphics_ColorProducer$0', VOID, VOID, [ColorProducer, FunctionAdapter]);
  initMetadataForClass(DelegatingThemeAwareRippleNode, 'DelegatingThemeAwareRippleNode', VOID, DelegatingNode, [CompositionLocalConsumerModifierNode, DelegatableNode]);
  initMetadataForObject(RippleDefaults, 'RippleDefaults');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(FabPosition, 'FabPosition');
  initMetadataForObject(ComposableSingletons$ScaffoldKt, 'ComposableSingletons$ScaffoldKt');
  initMetadataForObject(ScaffoldDefaults, 'ScaffoldDefaults');
  initMetadataForClass(ScaffoldLayoutContent, 'ScaffoldLayoutContent', VOID, Enum);
  initMetadataForClass(FabPlacement, 'FabPlacement');
  initMetadataForClass(ScaffoldLayout$contentPadding$1);
  initMetadataForClass(Shapes, 'Shapes');
  initMetadataForObject(ShapeDefaults, 'ShapeDefaults');
  initMetadataForClass(sam$androidx_compose_ui_input_pointer_PointerInputEventHandler$0_0, 'sam$androidx_compose_ui_input_pointer_PointerInputEventHandler$0', VOID, VOID, [PointerInputEventHandler, FunctionAdapter], [1]);
  initMetadataForLambda(Surface$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(Typography, 'Typography');
  initMetadataForClass(ParentSemanticsNode, 'ParentSemanticsNode', VOID, Node, [TraversableNode, SemanticsModifierNode]);
  initMetadataForObject(ParentSemanticsNodeKey, 'ParentSemanticsNodeKey');
  initMetadataForClass(ChildSemanticsNodeElement, 'ChildSemanticsNodeElement', VOID, ModifierNodeElement);
  initMetadataForClass(ChildSemanticsNode, 'ChildSemanticsNode', VOID, Node, [SemanticsModifierNode]);
  initMetadataForClass(MutableWindowInsets, 'MutableWindowInsets', MutableWindowInsets);
  initMetadataForObject(AppBarLargeFlexibleTokens, 'AppBarLargeFlexibleTokens');
  initMetadataForObject(AppBarLargeTokens, 'AppBarLargeTokens');
  initMetadataForObject(AppBarMediumFlexibleTokens, 'AppBarMediumFlexibleTokens');
  initMetadataForObject(AppBarMediumTokens, 'AppBarMediumTokens');
  initMetadataForObject(AppBarSmallTokens, 'AppBarSmallTokens');
  initMetadataForObject(AppBarTokens, 'AppBarTokens');
  initMetadataForObject(ColorLightTokens, 'ColorLightTokens');
  initMetadataForClass(ColorSchemeKeyTokens, 'ColorSchemeKeyTokens', VOID, Enum);
  initMetadataForObject(ElevationTokens, 'ElevationTokens');
  initMetadataForObject(StandardIconButtonTokens, 'StandardIconButtonTokens');
  initMetadataForObject(LargeIconButtonTokens, 'LargeIconButtonTokens');
  initMetadataForObject(MediumIconButtonTokens, 'MediumIconButtonTokens');
  initMetadataForClass(MotionSchemeKeyTokens, 'MotionSchemeKeyTokens', VOID, Enum);
  initMetadataForObject(PaletteTokens, 'PaletteTokens');
  initMetadataForClass(ShapeKeyTokens, 'ShapeKeyTokens', VOID, Enum);
  initMetadataForObject(ShapeTokens, 'ShapeTokens');
  initMetadataForObject(SmallIconButtonTokens, 'SmallIconButtonTokens');
  initMetadataForObject(StandardMotionTokens, 'StandardMotionTokens');
  initMetadataForObject(TypeScaleTokens, 'TypeScaleTokens');
  initMetadataForObject(TypefaceTokens, 'TypefaceTokens');
  initMetadataForClass(TypographyKeyTokens, 'TypographyKeyTokens', VOID, Enum);
  initMetadataForObject(TypographyTokens, 'TypographyTokens');
  initMetadataForObject(XLargeIconButtonTokens, 'XLargeIconButtonTokens');
  initMetadataForObject(XSmallIconButtonTokens, 'XSmallIconButtonTokens');
  //endregion
  function get_BottomAppBarHorizontalPadding() {
    _init_properties_AppBar_kt__51suc2();
    return BottomAppBarHorizontalPadding;
  }
  var BottomAppBarHorizontalPadding;
  function get_BottomAppBarVerticalPadding() {
    _init_properties_AppBar_kt__51suc2();
    return BottomAppBarVerticalPadding;
  }
  var BottomAppBarVerticalPadding;
  var FABHorizontalPadding;
  var FABVerticalPadding;
  function get_LocalSingleRowTopAppBarOverride() {
    _init_properties_AppBar_kt__51suc2();
    return LocalSingleRowTopAppBarOverride;
  }
  var LocalSingleRowTopAppBarOverride;
  var LocalTwoRowsTopAppBarOverride;
  var TopTitleAlphaEasing;
  var MediumTitleBottomPadding;
  var LargeTitleBottomPadding;
  function get_TopAppBarHorizontalPadding() {
    _init_properties_AppBar_kt__51suc2();
    return TopAppBarHorizontalPadding;
  }
  var TopAppBarHorizontalPadding;
  function get_TopAppBarTitleInset() {
    _init_properties_AppBar_kt__51suc2();
    return TopAppBarTitleInset;
  }
  var TopAppBarTitleInset;
  var androidx_compose_material3_TopAppBarDefaults$stable;
  var androidx_compose_material3_TopAppBarState$stable;
  var androidx_compose_material3_TopAppBarColors$stable;
  var androidx_compose_material3_BottomAppBarDefaults$stable;
  var androidx_compose_material3_DefaultSingleRowTopAppBarOverride$stable;
  var androidx_compose_material3_SingleRowTopAppBarOverrideScope$stable;
  var androidx_compose_material3_DefaultTwoRowsTopAppBarOverride$stable;
  var androidx_compose_material3_TwoRowsTopAppBarOverrideScope$stable;
  function sam$androidx_compose_ui_input_pointer_PointerInputEventHandler$0(function_0) {
    this.tdx_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_input_pointer_PointerInputEventHandler$0).k76 = function (_this__u8e3s4, $completion) {
    return this.tdx_1(_this__u8e3s4, $completion);
  };
  protoOf(sam$androidx_compose_ui_input_pointer_PointerInputEventHandler$0).r2 = function () {
    return this.tdx_1;
  };
  protoOf(sam$androidx_compose_ui_input_pointer_PointerInputEventHandler$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, PointerInputEventHandler) : false) {
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
  protoOf(sam$androidx_compose_ui_input_pointer_PointerInputEventHandler$0).hashCode = function () {
    return hashCode(this.r2());
  };
  function sam$androidx_compose_material3_internal_FloatProducer$0(function_0) {
    this.udx_1 = function_0;
  }
  protoOf(sam$androidx_compose_material3_internal_FloatProducer$0).vdx = function () {
    return this.udx_1();
  };
  protoOf(sam$androidx_compose_material3_internal_FloatProducer$0).r2 = function () {
    return this.udx_1;
  };
  protoOf(sam$androidx_compose_material3_internal_FloatProducer$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FloatProducer) : false) {
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
  protoOf(sam$androidx_compose_material3_internal_FloatProducer$0).hashCode = function () {
    return hashCode(this.r2());
  };
  function SingleRowTopAppBar$lambda($targetColor$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('targetColor', KProperty0, false);
    return $targetColor$delegate.x1().f4l_1;
  }
  function DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$lambda($this_SingleRowTopAppBar) {
    return function () {
      var tmp0_safe_receiver = $this_SingleRowTopAppBar.idy_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jdy();
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ndy();
      var overlappingFraction = tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
      return new Color($this_SingleRowTopAppBar.hdy_1.udy(overlappingFraction > 0.01 ? 1.0 : 0.0));
    };
  }
  function DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$lambda_0($this_SingleRowTopAppBar) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C2745@130827L190:AppBar.kt#uh7d8r');
      var tmp;
      if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-1658896622, $changed, -1, 'androidx.compose.material3.DefaultSingleRowTopAppBarOverride.SingleRowTopAppBar.<anonymous> (AppBar.kt:2745)');
        }
        var tmp2 = Arrangement_getInstance().x9r_1;
        var tmp4 = Companion_getInstance().r60_1;
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var content = $this_SingleRowTopAppBar.ddy_1;
        var modifier = null;
        var horizontalArrangement = tmp2;
        var verticalAlignment = tmp4;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 844473419, 'CC(Row)P(2,1,3)99@5125L58,100@5188L131:Row.kt#2w3rfo');
        if (!((1 & 1) === 0))
          modifier = Companion_instance;
        if (!((1 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().w9r_1;
        if (!((1 & 4) === 0))
          verticalAlignment = Companion_getInstance().q60_1;
        var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, -1159599143, 'CC(Layout)P(!1,2)81@3355L27,84@3521L416:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_instance;
        var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
        var localMap = $composer_2.f21();
        var materialized = materialize($composer_2, modifier_0);
        var tmp0 = Companion_getInstance_0().d7s_1;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
        var tmp_0 = $composer_3.t1z();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_3.n20();
        if ($composer_3.u1z()) {
          $composer_3.o20(tmp0);
        } else {
          $composer_3.p20();
        }
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_0().i7s_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_0().h7s_1);
        Updater__init_impl_uaeges($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_0().l7s_1);
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_0().m7s_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_0().f7s_1);
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, 1456264949, 'C101@5233L9:Row.kt#2w3rfo');
        content(RowScopeInstance_instance, $composer_4, 6 | 112 & 432 >> 6);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.q20();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_instance;
        }
        tmp = tmp_1;
      } else {
        $composer_0.l20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$lambda_1($this_SingleRowTopAppBar) {
    return function (delta) {
      var _receiver__tnumb7 = $this_SingleRowTopAppBar.idy_1.jdy();
      _receiver__tnumb7.wdy(_receiver__tnumb7.vdy() + delta);
      return Unit_instance;
    };
  }
  function DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$slambda($this_SingleRowTopAppBar, resultContinuation) {
    this.fdz_1 = $this_SingleRowTopAppBar;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$slambda).mbr = function ($this$draggable, velocity, $completion) {
    var tmp = this.nbr($this$draggable, velocity, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$slambda).w1p = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE();
    return this.mbr(tmp, (!(p2 == null) ? typeof p2 === 'number' : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            this.m8_1 = 1;
            suspendResult = settleAppBar(this.fdz_1.idy_1.jdy(), this.hdz_1, this.fdz_1.idy_1.idz(), this.fdz_1.idy_1.jdz(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m8_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.i3s_1;
            suspendResult = new Velocity(unboxed);
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
  protoOf(DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$slambda).nbr = function ($this$draggable, velocity, completion) {
    var i = new DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$slambda(this.fdz_1, completion);
    i.gdz_1 = $this$draggable;
    i.hdz_1 = velocity;
    return i;
  };
  function DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$slambda_0($this_SingleRowTopAppBar, resultContinuation) {
    var i = new DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$slambda($this_SingleRowTopAppBar, resultContinuation);
    var l = function ($this$draggable, velocity, $completion) {
      return i.mbr($this$draggable, velocity, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$lambda_2($appBarContainerColor) {
    return function ($this$drawBehind) {
      var color = $appBarContainerColor.x1().f4l_1;
      var tmp;
      if (!equals(color, Companion_getInstance_1().y4h_1)) {
        $this$drawBehind.v4u(color);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$lambda_3($this$semantics) {
    set_isTraversalGroup($this$semantics, true);
    return Unit_instance;
  }
  function DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$slambda_1).wam = function ($this$pointerInput, $completion) {
    var tmp = this.xam($this$pointerInput, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$slambda_1).e9 = function (p1, $completion) {
    return this.wam((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$slambda_1).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        if (tmp === 0) {
          this.n8_1 = 1;
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
  protoOf(DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$slambda_1).xam = function ($this$pointerInput, completion) {
    var i = new DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$slambda_1(completion);
    i.sdz_1 = $this$pointerInput;
    return i;
  };
  function DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$slambda_2(resultContinuation) {
    var i = new DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$slambda_1(resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.wam($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$lambda_4($this_SingleRowTopAppBar) {
    return function () {
      var tmp0_safe_receiver = $this_SingleRowTopAppBar.idy_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jdy();
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.vdy();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$lambda_5() {
    return 1.0;
  }
  function DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$lambda_6($tmp9_rcvr, $this_SingleRowTopAppBar, $$changed) {
    return function ($composer, $force) {
      $tmp9_rcvr.tdz($this_SingleRowTopAppBar, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function DefaultSingleRowTopAppBarOverride() {
  }
  protoOf(DefaultSingleRowTopAppBarOverride).tdz = function (_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.g20(2137486921);
    sourceInformation($composer_0, 'C(SingleRowTopAppBar)2728@130160L280,2739@130692L7,2736@130489L225,2744@130809L222,2782@132395L222,2788@132649L27,2789@132717L2,2778@132264L1773:AppBar.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w20(_this__u8e3s4) ? 4 : 2);
    if ($composer_0.d21(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(2137486921, $dirty, -1, 'androidx.compose.material3.DefaultSingleRowTopAppBarOverride.SingleRowTopAppBar (AppBar.kt:2718)');
      }
      var tmp;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      var this_0 = _this__u8e3s4.edy_1;
      if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
        // Inline function 'androidx.compose.ui.unit.isFinite' call
        var this_1 = _this__u8e3s4.edy_1;
        // Inline function 'androidx.compose.ui.util.fastIsFinite' call
        var this_2 = _Dp___get_value__impl__geb1vb(this_1);
        tmp = (toRawBits(this_2) & 2147483647) < 2139095040;
      } else {
        tmp = false;
      }
      // Inline function 'kotlin.require' call
      if (!tmp) {
        var message = 'The expandedHeight is expected to be specified and finite';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp0_remember$arg$0 = _this__u8e3s4.hdy_1;
      var tmp1_remember$arg$1 = _this__u8e3s4.idy_1;
      sourceInformationMarkerStart($composer_0, 1130584129, 'CC(remember):AppBar.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.w20(tmp0_remember$arg$0) | $composer_0.w20(tmp1_remember$arg$1));
      // Inline function 'kotlin.let' call
      var it = tmp0.u20();
      var tmp_0;
      if (invalid || it === Companion_getInstance_2().s1z_1) {
        var value_0 = derivedStateOf(DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$lambda(_this__u8e3s4));
        tmp0.v20(value_0);
        tmp_0 = value_0;
      } else {
        tmp_0 = it;
      }
      var tmp2_group = tmp_0;
      sourceInformationMarkerEnd($composer_0);
      var targetColor$delegate = tmp2_group;
      var tmp_1 = SingleRowTopAppBar$lambda(targetColor$delegate);
      var tmp_2 = value(MotionSchemeKeyTokens_DefaultEffects_getInstance(), $composer_0, 6);
      var appBarContainerColor = animateColorAsState(tmp_1, tmp_2, null, null, $composer_0, 0, 12);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1658896622, true, DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$lambda_0(_this__u8e3s4), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.w20(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.u20();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance_2().s1z_1) {
        var value_1 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.v20(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_0;
      }
      var tmp0_0 = tmp_3;
      sourceInformationMarkerEnd($composer_1);
      var actionsRow = tmp0_0;
      var tmp_4;
      if (!(_this__u8e3s4.idy_1 == null) && !_this__u8e3s4.idy_1.udz()) {
        $composer_0.a20(689468335);
        sourceInformation($composer_0, '2758@131399L107,2758@131376L130,2761@131544L312');
        var tmp1_orientation = Orientation_Vertical_getInstance();
        sourceInformationMarkerStart($composer_0, 1130623604, 'CC(remember):AppBar.kt#9igjgp');
        var tmp0_1 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = ($dirty & 14) === 4;
        // Inline function 'kotlin.let' call
        var it_1 = tmp0_1.u20();
        var tmp_5;
        if (invalid_1 || it_1 === Companion_getInstance_2().s1z_1) {
          var value_2 = DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$lambda_1(_this__u8e3s4);
          tmp0_1.v20(value_2);
          tmp_5 = value_2;
        } else {
          tmp_5 = it_1;
        }
        var tmp3_group = tmp_5;
        sourceInformationMarkerEnd($composer_0);
        var tmp2_state = rememberDraggableState(tmp3_group, $composer_0, 0);
        sourceInformationMarkerStart($composer_0, 1130628449, 'CC(remember):AppBar.kt#9igjgp');
        var tmp0_2 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_2 = ($dirty & 14) === 4;
        // Inline function 'kotlin.let' call
        var it_2 = tmp0_2.u20();
        var tmp_6;
        if (invalid_2 || it_2 === Companion_getInstance_2().s1z_1) {
          var value_3 = DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$slambda_0(_this__u8e3s4, null);
          tmp0_2.v20(value_3);
          tmp_6 = value_3;
        } else {
          tmp_6 = it_2;
        }
        var tmp4_group = tmp_6;
        sourceInformationMarkerEnd($composer_0);
        var tmp5_group = draggable(Companion_instance, tmp2_state, tmp1_orientation, VOID, VOID, VOID, VOID, tmp4_group);
        $composer_0.b20();
        tmp_4 = tmp5_group;
      } else {
        $composer_0.a20(690083313);
        $composer_0.b20();
        tmp_4 = Companion_instance;
      }
      var appBarDragModifier = tmp_4;
      var tmp_7 = _this__u8e3s4.wdx_1.y61(appBarDragModifier);
      sourceInformationMarkerStart($composer_0, 1130655591, 'CC(remember):AppBar.kt#9igjgp');
      var tmp0_3 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_3 = $composer_0.w20(appBarContainerColor);
      // Inline function 'kotlin.let' call
      var it_3 = tmp0_3.u20();
      var tmp_8;
      if (invalid_3 || it_3 === Companion_getInstance_2().s1z_1) {
        var value_4 = DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$lambda_2(appBarContainerColor);
        tmp0_3.v20(value_4);
        tmp_8 = value_4;
      } else {
        tmp_8 = it_3;
      }
      var tmp6_group = tmp_8;
      sourceInformationMarkerEnd($composer_0);
      var tmp_9 = drawBehind(tmp_7, tmp6_group);
      sourceInformationMarkerStart($composer_0, 1130663524, 'CC(remember):AppBar.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_4 = this_3.u20();
      var tmp_10;
      if (false || it_4 === Companion_getInstance_2().s1z_1) {
        var value_5 = DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$lambda_3;
        this_3.v20(value_5);
        tmp_10 = value_5;
      } else {
        tmp_10 = it_4;
      }
      var tmp7_group = tmp_10;
      sourceInformationMarkerEnd($composer_0);
      var tmp_11 = semantics(tmp_9, VOID, tmp7_group);
      sourceInformationMarkerStart($composer_0, 1130665675, 'CC(remember):AppBar.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_4 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_5 = this_4.u20();
      var tmp_12;
      if (false || it_5 === Companion_getInstance_2().s1z_1) {
        var tmp_13 = DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$slambda_2(null);
        var value_6 = new sam$androidx_compose_ui_input_pointer_PointerInputEventHandler$0(tmp_13);
        this_4.v20(value_6);
        tmp_12 = value_6;
      } else {
        tmp_12 = it_5;
      }
      var tmp8_group = tmp_12;
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier = pointerInput(tmp_11, Unit_instance, tmp8_group);
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1042775818, 'CC(Box)P(2,1,3)71@3424L131:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance().h60_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -1159599143, 'CC(Layout)P(!1,2)81@3355L27,84@3521L416:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_3, 0).hashCode();
      var localMap = $composer_3.f21();
      var materialized = materialize($composer_3, modifier_0);
      var tmp0_4 = Companion_getInstance_0().d7s_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
      var tmp_14 = $composer_4.t1z();
      if (!isInterface(tmp_14, Applier)) {
        invalidApplier();
      }
      $composer_4.n20();
      if ($composer_4.u1z()) {
        $composer_4.o20(tmp0_4);
      } else {
        $composer_4.p20();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_4);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_0().i7s_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_0().h7s_1);
      Updater__init_impl_uaeges($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_0().l7s_1);
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_0().m7s_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_0().f7s_1);
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 1833054614, 'C72@3469L9:Box.kt#2w3rfo');
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, -1199732035, 'C2797@133083L45,2806@133613L6,2791@132744L1283:AppBar.kt#uh7d8r');
      var tmp0_modifier = adjustHeightOffsetLimit(clipToBounds(windowInsetsPadding(Companion_instance, _this__u8e3s4.gdy_1)), _this__u8e3s4.idy_1);
      sourceInformationMarkerStart($composer_6, -592880752, 'CC(remember):AppBar.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_4 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_6 = $composer_6.u20();
      var tmp_15;
      if (invalid_4 || it_6 === Companion_getInstance_2().s1z_1) {
        var tmp_16 = DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$lambda_4(_this__u8e3s4);
        var value_7 = new sam$androidx_compose_material3_internal_FloatProducer$0(tmp_16);
        $composer_6.v20(value_7);
        tmp_15 = value_7;
      } else {
        tmp_15 = it_6;
      }
      var tmp0_group = tmp_15;
      sourceInformationMarkerEnd($composer_6);
      var tmp2_navigationIconContentColor = _this__u8e3s4.hdy_1.qdy_1;
      var tmp3_titleContentColor = _this__u8e3s4.hdy_1.rdy_1;
      var tmp4_actionIconContentColor = _this__u8e3s4.hdy_1.sdy_1;
      var tmp5_subtitleContentColor = _this__u8e3s4.hdy_1.tdy_1;
      var tmp6_title = _this__u8e3s4.xdx_1;
      var tmp7_titleTextStyle = _this__u8e3s4.ydx_1;
      var tmp8_subtitle = _this__u8e3s4.zdx_1;
      var tmp9_subtitleTextStyle = _this__u8e3s4.ady_1;
      var tmp10_titleVerticalArrangement = Arrangement_getInstance().a9s_1;
      var tmp11_titleHorizontalAlignment = _this__u8e3s4.bdy_1;
      var tmp12_navigationIcon = _this__u8e3s4.cdy_1;
      var tmp13_height = _this__u8e3s4.edy_1;
      var tmp14_contentPadding = _this__u8e3s4.fdy_1;
      sourceInformationMarkerStart($composer_6, -592863831, 'CC(remember):AppBar.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_7 = $composer_6.u20();
      var tmp_17;
      if (false || it_7 === Companion_getInstance_2().s1z_1) {
        var value_8 = DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$lambda_5;
        $composer_6.v20(value_8);
        tmp_17 = value_8;
      } else {
        tmp_17 = it_7;
      }
      var tmp1_group = tmp_17;
      sourceInformationMarkerEnd($composer_6);
      TopAppBarLayout(tmp0_modifier, tmp0_group, tmp2_navigationIconContentColor, tmp3_titleContentColor, tmp5_subtitleContentColor, tmp4_actionIconContentColor, tmp6_title, tmp7_titleTextStyle, tmp8_subtitle, tmp9_subtitleTextStyle, tmp1_group, tmp10_titleVerticalArrangement, tmp11_titleHorizontalAlignment, 0, false, tmp12_navigationIcon, actionsRow, tmp13_height, tmp14_contentPadding, $composer_6, 0, 1600566);
      sourceInformationMarkerEnd($composer_6);
      sourceInformationMarkerEnd($composer_5);
      $composer_4.q20();
      sourceInformationMarkerEnd($composer_4);
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    var tmp10_safe_receiver = $composer_0.h20();
    if (tmp10_safe_receiver == null)
      null;
    else {
      tmp10_safe_receiver.k2m(DefaultSingleRowTopAppBarOverride$SingleRowTopAppBar$lambda_6(this, _this__u8e3s4, $changed));
    }
  };
  var DefaultSingleRowTopAppBarOverride_instance;
  function DefaultSingleRowTopAppBarOverride_getInstance() {
    return DefaultSingleRowTopAppBarOverride_instance;
  }
  function DefaultTwoRowsTopAppBarOverride() {
  }
  var DefaultTwoRowsTopAppBarOverride_instance;
  function DefaultTwoRowsTopAppBarOverride_getInstance() {
    return DefaultTwoRowsTopAppBarOverride_instance;
  }
  function SingleRowTopAppBarOverrideScope(modifier, title, titleTextStyle, subtitle, subtitleTextStyle, titleHorizontalAlignment, navigationIcon, actions, expandedHeight, contentPadding, windowInsets, colors, scrollBehavior) {
    this.wdx_1 = modifier;
    this.xdx_1 = title;
    this.ydx_1 = titleTextStyle;
    this.zdx_1 = subtitle;
    this.ady_1 = subtitleTextStyle;
    this.bdy_1 = titleHorizontalAlignment;
    this.cdy_1 = navigationIcon;
    this.ddy_1 = actions;
    this.edy_1 = expandedHeight;
    this.fdy_1 = contentPadding;
    this.gdy_1 = windowInsets;
    this.hdy_1 = colors;
    this.idy_1 = scrollBehavior;
  }
  function TopAppBarColors(containerColor, scrolledContainerColor, navigationIconContentColor, titleContentColor, actionIconContentColor, subtitleContentColor) {
    this.ody_1 = containerColor;
    this.pdy_1 = scrolledContainerColor;
    this.qdy_1 = navigationIconContentColor;
    this.rdy_1 = titleContentColor;
    this.sdy_1 = actionIconContentColor;
    this.tdy_1 = subtitleContentColor;
  }
  protoOf(TopAppBarColors).vdz = function (containerColor, scrolledContainerColor, navigationIconContentColor, titleContentColor, actionIconContentColor, subtitleContentColor) {
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(containerColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = containerColor;
    } else {
      tmp = this.ody_1;
    }
    var tmp_0 = tmp;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_1;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(scrolledContainerColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_1 = scrolledContainerColor;
    } else {
      tmp_1 = this.pdy_1;
    }
    var tmp_2 = tmp_1;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_3;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(navigationIconContentColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_3 = navigationIconContentColor;
    } else {
      tmp_3 = this.qdy_1;
    }
    var tmp_4 = tmp_3;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_5;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(titleContentColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_5 = titleContentColor;
    } else {
      tmp_5 = this.rdy_1;
    }
    var tmp_6 = tmp_5;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_7;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(actionIconContentColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_7 = actionIconContentColor;
    } else {
      tmp_7 = this.sdy_1;
    }
    var tmp_8 = tmp_7;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_9;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(subtitleContentColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_9 = subtitleContentColor;
    } else {
      tmp_9 = this.tdy_1;
    }
    var tmp$ret$15 = tmp_9;
    return new TopAppBarColors(tmp_0, tmp_2, tmp_4, tmp_6, tmp_8, tmp$ret$15);
  };
  protoOf(TopAppBarColors).udy = function (colorTransitionFraction) {
    return lerp(this.ody_1, this.pdy_1, get_FastOutLinearInEasing().xaa(colorTransitionFraction));
  };
  protoOf(TopAppBarColors).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof TopAppBarColors);
    }
    if (tmp)
      return false;
    if (!equals(this.ody_1, other.ody_1))
      return false;
    if (!equals(this.pdy_1, other.pdy_1))
      return false;
    if (!equals(this.qdy_1, other.qdy_1))
      return false;
    if (!equals(this.rdy_1, other.rdy_1))
      return false;
    if (!equals(this.sdy_1, other.sdy_1))
      return false;
    if (!equals(this.tdy_1, other.tdy_1))
      return false;
    return true;
  };
  protoOf(TopAppBarColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.ody_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.pdy_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.qdy_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.rdy_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.sdy_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.tdy_1) | 0;
    return result;
  };
  function TopAppBarState$_get_contentOffset_$ref_eujjy2() {
    return function (p0) {
      return p0.wdz();
    };
  }
  function TopAppBarState$_set_contentOffset_$ref_ygrlqq() {
    return function (p0, p1) {
      p0.xdz(p1);
      return Unit_instance;
    };
  }
  function TopAppBarState$_get_contentOffset_$ref_eujjy2_0() {
    return function (p0) {
      return p0.wdz();
    };
  }
  function TopAppBarState$_set_contentOffset_$ref_ygrlqq_0() {
    return function (p0, p1) {
      p0.xdz(p1);
      return Unit_instance;
    };
  }
  function settleAppBar(state, velocity, flingAnimationSpec, snapAnimationSpec, $completion) {
    var tmp = new $settleAppBarCOROUTINE$(state, velocity, flingAnimationSpec, snapAnimationSpec, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    var tmp_0 = tmp.u8();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  }
  function adjustHeightOffsetLimit(_this__u8e3s4, scrollBehavior) {
    _init_properties_AppBar_kt__51suc2();
    var tmp1_safe_receiver = scrollBehavior == null ? null : scrollBehavior.jdy();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = onSizeChanged(_this__u8e3s4, adjustHeightOffsetLimit$lambda(tmp1_safe_receiver));
    }
    var tmp2_elvis_lhs = tmp;
    return tmp2_elvis_lhs == null ? _this__u8e3s4 : tmp2_elvis_lhs;
  }
  function TopAppBarLayout(modifier, scrolledOffset, navigationIconContentColor, titleContentColor, subtitleContentColor, actionIconContentColor, title, titleTextStyle, subtitle, subtitleTextStyle, titleAlpha, titleVerticalArrangement, titleHorizontalAlignment, titleBottomPadding, hideTitleSemantics, navigationIcon, actions, height, contentPadding, $composer, $changed, $changed1) {
    _init_properties_AppBar_kt__51suc2();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.g20(239553141);
    sourceInformation($composer_0, 'C(TopAppBarLayout)P(5,8,7:c#ui.graphics.Color,15:c#ui.graphics.Color,10:c#ui.graphics.Color,0:c#ui.graphics.Color,12,17,9,11,13,18,16,14,4,6!1,3:c#ui.unit.Dp)3278@156253L505,3220@153733L3032:AppBar.kt#uh7d8r');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w20(modifier) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ((($changed & 64) === 0 ? $composer_0.w20(scrolledOffset) : $composer_0.b21(scrolledOffset)) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.a21(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(navigationIconContentColor))) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.a21(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(titleContentColor))) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.a21(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(subtitleContentColor))) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.a21(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(actionIconContentColor))) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.b21(title) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.w20(titleTextStyle) ? 8388608 : 4194304);
    if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.b21(subtitle) ? 67108864 : 33554432);
    if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.w20(subtitleTextStyle) ? 536870912 : 268435456);
    if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.b21(titleAlpha) ? 4 : 2);
    if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ($composer_0.w20(titleVerticalArrangement) ? 32 : 16);
    if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ($composer_0.w20(titleHorizontalAlignment) ? 256 : 128);
    if (($changed1 & 3072) === 0)
      $dirty1 = $dirty1 | ($composer_0.y20(titleBottomPadding) ? 2048 : 1024);
    if (($changed1 & 24576) === 0)
      $dirty1 = $dirty1 | ($composer_0.x20(hideTitleSemantics) ? 16384 : 8192);
    if (($changed1 & 196608) === 0)
      $dirty1 = $dirty1 | ($composer_0.b21(navigationIcon) ? 131072 : 65536);
    if (($changed1 & 1572864) === 0)
      $dirty1 = $dirty1 | ($composer_0.b21(actions) ? 1048576 : 524288);
    if (($changed1 & 12582912) === 0)
      $dirty1 = $dirty1 | ($composer_0.z20(_Dp___get_value__impl__geb1vb(height)) ? 8388608 : 4194304);
    if (($changed1 & 100663296) === 0)
      $dirty1 = $dirty1 | ($composer_0.w20(contentPadding) ? 67108864 : 33554432);
    if ($composer_0.d21(!(($dirty & 306783379) === 306783378) || !(($dirty1 & 38347923) === 38347922), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(239553141, $dirty, $dirty1, 'androidx.compose.material3.TopAppBarLayout (AppBar.kt:3219)');
      }
      sourceInformationMarkerStart($composer_0, -1717562162, 'CC(remember):AppBar.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!(!!((($dirty & 112) === 32 || (!(($dirty & 64) === 0) && $composer_0.w20(scrolledOffset))) | ($dirty1 & 112) === 32) | ($dirty1 & 896) === 256) | ($dirty1 & 7168) === 2048) | ($dirty1 & 29360128) === 8388608);
      // Inline function 'kotlin.let' call
      var it = tmp0.u20();
      var tmp;
      if (invalid || it === Companion_getInstance_2().s1z_1) {
        var value = new TopAppBarMeasurePolicy(scrolledOffset, titleVerticalArrangement, titleHorizontalAlignment, titleBottomPadding, height, contentPadding);
        tmp0.v20(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp0_group = tmp;
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -1159599143, 'CC(Layout)P(!1,2)81@3355L27,84@3521L416:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_1, 0).hashCode();
      var localMap = $composer_1.f21();
      var materialized = materialize($composer_1, modifier_0);
      var tmp0_0 = Companion_getInstance_0().d7s_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
      var tmp_0 = $composer_2.t1z();
      if (!isInterface(tmp_0, Applier)) {
        invalidApplier();
      }
      $composer_2.n20();
      if ($composer_2.u1z()) {
        $composer_2.o20(tmp0_0);
      } else {
        $composer_2.p20();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp0_group, Companion_getInstance_0().i7s_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_0().h7s_1);
      Updater__init_impl_uaeges($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_0().l7s_1);
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_0().m7s_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_0().f7s_1);
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, 407230616, 'C3222@153763L281,3269@155911L265:AppBar.kt#uh7d8r');
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_1 = padding(layoutId(Companion_instance, 'navigationIcon'), get_TopAppBarHorizontalPadding());
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, 1042775818, 'CC(Box)P(2,1,3)71@3424L131:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance().h60_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -1159599143, 'CC(Layout)P(!1,2)81@3355L27,84@3521L416:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_5, 0).hashCode();
      var localMap_0 = $composer_5.f21();
      var materialized_0 = materialize($composer_5, modifier_2);
      var tmp0_1 = Companion_getInstance_0().d7s_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
      var tmp_1 = $composer_6.t1z();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_6.n20();
      if ($composer_6.u1z()) {
        $composer_6.o20(tmp0_1);
      } else {
        $composer_6.p20();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_6);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy, Companion_getInstance_0().i7s_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_0().h7s_1);
      Updater__init_impl_uaeges($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_0().l7s_1);
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_0().m7s_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_0().f7s_1);
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, 1833054614, 'C72@3469L9:Box.kt#2w3rfo');
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, 1162727495, 'C3223@153866L164:AppBar.kt#uh7d8r');
      CompositionLocalProvider(get_LocalContentColor().e2m(new Color(navigationIconContentColor)), navigationIcon, $composer_8, androidx_compose_runtime_ProvidedValue$stableprop_getter() | 112 & $dirty1 >> 12);
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      $composer_6.q20();
      sourceInformationMarkerEnd($composer_6);
      sourceInformationMarkerEnd($composer_5);
      sourceInformationMarkerEnd($composer_4);
      if (!(subtitle == null)) {
        $composer_3.a20(407501183);
        sourceInformation($composer_3, '3237@154508L24,3229@154097L997');
        var tmp_2 = padding_0(layoutId(Companion_instance, 'title'), get_TopAppBarHorizontalPadding());
        var tmp_3;
        if (hideTitleSemantics) {
          $composer_3.a20(-402488651);
          sourceInformation($composer_3, '3234@154386L2');
          var tmp_4 = Companion_instance;
          sourceInformationMarkerStart($composer_3, -402488000, 'CC(remember):AppBar.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          var it_0 = $composer_3.u20();
          var tmp_5;
          if (false || it_0 === Companion_getInstance_2().s1z_1) {
            var value_0 = TopAppBarLayout$lambda;
            $composer_3.v20(value_0);
            tmp_5 = value_0;
          } else {
            tmp_5 = it_0;
          }
          var tmp0_group_0 = tmp_5;
          sourceInformationMarkerEnd($composer_3);
          var tmp1_group = clearAndSetSemantics(tmp_4, tmp0_group_0);
          $composer_3.b20();
          tmp_3 = tmp1_group;
        } else {
          $composer_3.a20(-402486714);
          $composer_3.b20();
          tmp_3 = Companion_instance;
        }
        var tmp_6 = tmp_2.y61(tmp_3);
        sourceInformationMarkerStart($composer_3, -402484074, 'CC(remember):AppBar.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = ($dirty1 & 14) === 4;
        // Inline function 'kotlin.let' call
        var it_1 = $composer_3.u20();
        var tmp_7;
        if (invalid_0 || it_1 === Companion_getInstance_2().s1z_1) {
          var value_1 = TopAppBarLayout$lambda_0(titleAlpha);
          $composer_3.v20(value_1);
          tmp_7 = value_1;
        } else {
          tmp_7 = it_1;
        }
        var tmp2_group = tmp_7;
        sourceInformationMarkerEnd($composer_3);
        // Inline function 'androidx.compose.foundation.layout.Column' call
        var $changed_0 = 896 & $dirty1;
        var modifier_3 = graphicsLayer(tmp_6, tmp2_group);
        var verticalArrangement = null;
        var horizontalAlignment = titleHorizontalAlignment;
        var $composer_9 = $composer_3;
        sourceInformationMarkerStart($composer_9, 1341605231, 'CC(Column)P(2,3,1)87@4443L61,88@4509L134:Column.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier_3 = Companion_instance;
        if (!((2 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().y9r_1;
        if (!((2 & 4) === 0))
          horizontalAlignment = Companion_getInstance().t60_1;
        var measurePolicy_0 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_9, 14 & $changed_0 >> 3 | 112 & $changed_0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_4 = modifier_3;
        var $composer_10 = $composer_9;
        sourceInformationMarkerStart($composer_10, -1159599143, 'CC(Layout)P(!1,2)81@3355L27,84@3521L416:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_4 = Companion_instance;
        var compositeKeyHash_1 = get_currentCompositeKeyHashCode($composer_10, 0).hashCode();
        var localMap_1 = $composer_10.f21();
        var materialized_1 = materialize($composer_10, modifier_4);
        var tmp0_2 = Companion_getInstance_0().d7s_1;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_11 = $composer_10;
        sourceInformationMarkerStart($composer_11, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
        var tmp_8 = $composer_11.t1z();
        if (!isInterface(tmp_8, Applier)) {
          invalidApplier();
        }
        $composer_11.n20();
        if ($composer_11.u1z()) {
          $composer_11.o20(tmp0_2);
        } else {
          $composer_11.p20();
        }
        var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_11);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_0, Companion_getInstance_0().i7s_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_0().h7s_1);
        Updater__init_impl_uaeges($this$ReusableComposeNode_1, compositeKeyHash_1, Companion_getInstance_0().l7s_1);
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_1, Companion_getInstance_0().m7s_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_0().f7s_1);
        var $composer_12 = $composer_11;
        sourceInformationMarkerStart($composer_12, 2093002350, 'C89@4557L9:Column.kt#2w3rfo');
        var $composer_13 = $composer_12;
        sourceInformationMarkerStart($composer_13, -1267818492, 'C3240@154642L202,3245@154865L211:AppBar.kt#uh7d8r');
        ProvideContentColorTextStyle(titleContentColor, titleTextStyle, title, $composer_13, 14 & $dirty >> 9 | 112 & $dirty >> 18 | 896 & $dirty >> 12);
        ProvideContentColorTextStyle(subtitleContentColor, subtitleTextStyle, subtitle, $composer_13, 14 & $dirty >> 12 | 112 & $dirty >> 24 | 896 & $dirty >> 18);
        sourceInformationMarkerEnd($composer_13);
        sourceInformationMarkerEnd($composer_12);
        $composer_11.q20();
        sourceInformationMarkerEnd($composer_11);
        sourceInformationMarkerEnd($composer_10);
        sourceInformationMarkerEnd($composer_9);
        $composer_3.b20();
      } else {
        $composer_3.a20(408520308);
        sourceInformation($composer_3, '3260@155599L24,3252@155191L693');
        var tmp_9 = padding_0(layoutId(Companion_instance, 'title'), get_TopAppBarHorizontalPadding());
        var tmp_10;
        if (hideTitleSemantics) {
          $composer_3.a20(-402453739);
          sourceInformation($composer_3, '3257@155477L2');
          var tmp_11 = Companion_instance;
          sourceInformationMarkerStart($composer_3, -402453088, 'CC(remember):AppBar.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          var it_2 = $composer_3.u20();
          var tmp_12;
          if (false || it_2 === Companion_getInstance_2().s1z_1) {
            var value_2 = TopAppBarLayout$lambda_1;
            $composer_3.v20(value_2);
            tmp_12 = value_2;
          } else {
            tmp_12 = it_2;
          }
          var tmp3_group = tmp_12;
          sourceInformationMarkerEnd($composer_3);
          var tmp4_group = clearAndSetSemantics(tmp_11, tmp3_group);
          $composer_3.b20();
          tmp_10 = tmp4_group;
        } else {
          $composer_3.a20(-402451802);
          $composer_3.b20();
          tmp_10 = Companion_instance;
        }
        var tmp_13 = tmp_9.y61(tmp_10);
        sourceInformationMarkerStart($composer_3, -402449162, 'CC(remember):AppBar.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = ($dirty1 & 14) === 4;
        // Inline function 'kotlin.let' call
        var it_3 = $composer_3.u20();
        var tmp_14;
        if (invalid_1 || it_3 === Companion_getInstance_2().s1z_1) {
          var value_3 = TopAppBarLayout$lambda_2(titleAlpha);
          $composer_3.v20(value_3);
          tmp_14 = value_3;
        } else {
          tmp_14 = it_3;
        }
        var tmp5_group = tmp_14;
        sourceInformationMarkerEnd($composer_3);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier_5 = graphicsLayer(tmp_13, tmp5_group);
        var contentAlignment_0 = null;
        var propagateMinConstraints_0 = false;
        var $composer_14 = $composer_3;
        sourceInformationMarkerStart($composer_14, 1042775818, 'CC(Box)P(2,1,3)71@3424L131:Box.kt#2w3rfo');
        if (!((6 & 1) === 0))
          modifier_5 = Companion_instance;
        if (!((6 & 2) === 0))
          contentAlignment_0 = Companion_getInstance().h60_1;
        if (!((6 & 4) === 0))
          propagateMinConstraints_0 = false;
        var measurePolicy_1 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_6 = modifier_5;
        var $composer_15 = $composer_14;
        sourceInformationMarkerStart($composer_15, -1159599143, 'CC(Layout)P(!1,2)81@3355L27,84@3521L416:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_6 = Companion_instance;
        var compositeKeyHash_2 = get_currentCompositeKeyHashCode($composer_15, 0).hashCode();
        var localMap_2 = $composer_15.f21();
        var materialized_2 = materialize($composer_15, modifier_6);
        var tmp0_3 = Companion_getInstance_0().d7s_1;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_16 = $composer_15;
        sourceInformationMarkerStart($composer_16, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
        var tmp_15 = $composer_16.t1z();
        if (!isInterface(tmp_15, Applier)) {
          invalidApplier();
        }
        $composer_16.n20();
        if ($composer_16.u1z()) {
          $composer_16.o20(tmp0_3);
        } else {
          $composer_16.p20();
        }
        var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_16);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_1, Companion_getInstance_0().i7s_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_0().h7s_1);
        Updater__init_impl_uaeges($this$ReusableComposeNode_2, compositeKeyHash_2, Companion_getInstance_0().l7s_1);
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_2, Companion_getInstance_0().m7s_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_0().f7s_1);
        var $composer_17 = $composer_16;
        sourceInformationMarkerStart($composer_17, 1833054614, 'C72@3469L9:Box.kt#2w3rfo');
        var $composer_18 = $composer_17;
        sourceInformationMarkerStart($composer_18, 645404165, 'C3262@155664L202:AppBar.kt#uh7d8r');
        ProvideContentColorTextStyle(titleContentColor, titleTextStyle, title, $composer_18, 14 & $dirty >> 9 | 112 & $dirty >> 18 | 896 & $dirty >> 12);
        sourceInformationMarkerEnd($composer_18);
        sourceInformationMarkerEnd($composer_17);
        $composer_16.q20();
        sourceInformationMarkerEnd($composer_16);
        sourceInformationMarkerEnd($composer_15);
        sourceInformationMarkerEnd($composer_14);
        $composer_3.b20();
      }
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_7 = padding(layoutId(Companion_instance, 'actionIcons'), VOID, VOID, get_TopAppBarHorizontalPadding());
      var contentAlignment_1 = null;
      var propagateMinConstraints_1 = false;
      var $composer_19 = $composer_3;
      sourceInformationMarkerStart($composer_19, 1042775818, 'CC(Box)P(2,1,3)71@3424L131:Box.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier_7 = Companion_instance;
      if (!((6 & 2) === 0))
        contentAlignment_1 = Companion_getInstance().h60_1;
      if (!((6 & 4) === 0))
        propagateMinConstraints_1 = false;
      var measurePolicy_2 = maybeCachedBoxMeasurePolicy(contentAlignment_1, propagateMinConstraints_1);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_8 = modifier_7;
      var $composer_20 = $composer_19;
      sourceInformationMarkerStart($composer_20, -1159599143, 'CC(Layout)P(!1,2)81@3355L27,84@3521L416:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_8 = Companion_instance;
      var compositeKeyHash_3 = get_currentCompositeKeyHashCode($composer_20, 0).hashCode();
      var localMap_3 = $composer_20.f21();
      var materialized_3 = materialize($composer_20, modifier_8);
      var tmp0_4 = Companion_getInstance_0().d7s_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_21 = $composer_20;
      sourceInformationMarkerStart($composer_21, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
      var tmp_16 = $composer_21.t1z();
      if (!isInterface(tmp_16, Applier)) {
        invalidApplier();
      }
      $composer_21.n20();
      if ($composer_21.u1z()) {
        $composer_21.o20(tmp0_4);
      } else {
        $composer_21.p20();
      }
      var $this$ReusableComposeNode_3 = _Updater___init__impl__rbfxm8($composer_21);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, measurePolicy_2, Companion_getInstance_0().i7s_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, localMap_3, Companion_getInstance_0().h7s_1);
      Updater__init_impl_uaeges($this$ReusableComposeNode_3, compositeKeyHash_3, Companion_getInstance_0().l7s_1);
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_3, Companion_getInstance_0().m7s_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, materialized_3, Companion_getInstance_0().f7s_1);
      var $composer_22 = $composer_21;
      sourceInformationMarkerStart($composer_22, 1833054614, 'C72@3469L9:Box.kt#2w3rfo');
      var $composer_23 = $composer_22;
      sourceInformationMarkerStart($composer_23, 1075145961, 'C3270@156009L153:AppBar.kt#uh7d8r');
      CompositionLocalProvider(get_LocalContentColor().e2m(new Color(actionIconContentColor)), actions, $composer_23, androidx_compose_runtime_ProvidedValue$stableprop_getter() | 112 & $dirty1 >> 15);
      sourceInformationMarkerEnd($composer_23);
      sourceInformationMarkerEnd($composer_22);
      $composer_21.q20();
      sourceInformationMarkerEnd($composer_21);
      sourceInformationMarkerEnd($composer_20);
      sourceInformationMarkerEnd($composer_19);
      sourceInformationMarkerEnd($composer_3);
      $composer_2.q20();
      sourceInformationMarkerEnd($composer_2);
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
      tmp1_safe_receiver.k2m(TopAppBarLayout$lambda_3(modifier, scrolledOffset, navigationIconContentColor, titleContentColor, subtitleContentColor, actionIconContentColor, title, titleTextStyle, subtitle, subtitleTextStyle, titleAlpha, titleVerticalArrangement, titleHorizontalAlignment, titleBottomPadding, hideTitleSemantics, navigationIcon, actions, height, contentPadding, $changed, $changed1));
    }
  }
  function TopAppBarDefaults() {
    TopAppBarDefaults_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    tmp.le0_1 = PaddingValues(tmp$ret$0);
    this.me0_1 = AppBarSmallTokens_getInstance().ve0_1;
    this.ne0_1 = AppBarSmallTokens_getInstance().ve0_1;
    this.oe0_1 = AppBarMediumTokens_getInstance().ye0_1;
    this.pe0_1 = AppBarMediumFlexibleTokens_getInstance().ae1_1;
    this.qe0_1 = AppBarMediumFlexibleTokens_getInstance().de1_1;
    this.re0_1 = AppBarSmallTokens_getInstance().ve0_1;
    this.se0_1 = AppBarLargeTokens_getInstance().ee1_1;
    this.te0_1 = AppBarLargeFlexibleTokens_getInstance().ge1_1;
    this.ue0_1 = AppBarLargeFlexibleTokens_getInstance().je1_1;
  }
  protoOf(TopAppBarDefaults).ke1 = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1388520854, 'C(topAppBarColors)1638@83061L11:AppBar.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1388520854, $changed, -1, 'androidx.compose.material3.TopAppBarDefaults.topAppBarColors (AppBar.kt:1638)');
    }
    var tmp0 = this.me1(MaterialTheme_instance.le1($composer_0, 6));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(TopAppBarDefaults).ne1 = function (containerColor, scrolledContainerColor, navigationIconContentColor, titleContentColor, actionIconContentColor, subtitleContentColor, $composer, $changed, $default) {
    var containerColor_0 = containerColor;
    var scrolledContainerColor_0 = scrolledContainerColor;
    var navigationIconContentColor_0 = navigationIconContentColor;
    var titleContentColor_0 = titleContentColor;
    var actionIconContentColor_0 = actionIconContentColor;
    var subtitleContentColor_0 = subtitleContentColor;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1325733438, 'C(topAppBarColors)P(1:c#ui.graphics.Color,3:c#ui.graphics.Color,2:c#ui.graphics.Color,5:c#ui.graphics.Color,0:c#ui.graphics.Color,4:c#ui.graphics.Color)1661@84245L11:AppBar.kt#uh7d8r');
    if (!(($default & 1) === 0))
      containerColor_0 = Companion_getInstance_1().y4h_1;
    if (!(($default & 2) === 0))
      scrolledContainerColor_0 = Companion_getInstance_1().y4h_1;
    if (!(($default & 4) === 0))
      navigationIconContentColor_0 = Companion_getInstance_1().y4h_1;
    if (!(($default & 8) === 0))
      titleContentColor_0 = Companion_getInstance_1().y4h_1;
    if (!(($default & 16) === 0))
      actionIconContentColor_0 = Companion_getInstance_1().y4h_1;
    if (!(($default & 32) === 0))
      subtitleContentColor_0 = Companion_getInstance_1().y4h_1;
    if (isTraceInProgress()) {
      traceEventStart(-1325733438, $changed, -1, 'androidx.compose.material3.TopAppBarDefaults.topAppBarColors (AppBar.kt:1661)');
    }
    var tmp0 = this.me1(MaterialTheme_instance.le1($composer_0, 6)).vdz(containerColor_0, scrolledContainerColor_0, navigationIconContentColor_0, titleContentColor_0, actionIconContentColor_0, subtitleContentColor_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(TopAppBarDefaults).me1 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.ae4_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new TopAppBarColors(fromToken(_this__u8e3s4, AppBarTokens_getInstance().ne5_1), fromToken(_this__u8e3s4, AppBarTokens_getInstance().ue5_1), fromToken(_this__u8e3s4, AppBarTokens_getInstance().se5_1), fromToken(_this__u8e3s4, AppBarTokens_getInstance().xe5_1), fromToken(_this__u8e3s4, AppBarTokens_getInstance().ye5_1), fromToken(_this__u8e3s4, AppBarTokens_getInstance().we5_1));
      _this__u8e3s4.ae4_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(TopAppBarDefaults).ae6 = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 2143182847, 'C(<get-windowInsets>)1723@87109L29:AppBar.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(2143182847, $changed, -1, 'androidx.compose.material3.TopAppBarDefaults.<get-windowInsets> (AppBar.kt:1723)');
    }
    var tmp0 = only(get_systemBarsForVisualComponents(Companion_instance_0, $composer_0, 6), WindowInsetsSides__plus_impl_9q9m59(Companion_getInstance_3().u9z_1, Companion_getInstance_3().q9z_1));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  var TopAppBarDefaults_instance;
  function TopAppBarDefaults_getInstance() {
    if (TopAppBarDefaults_instance == null)
      new TopAppBarDefaults();
    return TopAppBarDefaults_instance;
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$_944449303$lambda_c6jabl($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-944449303, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$-944449303.<anonymous> (AppBar.kt:165)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.s3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$917296843$lambda(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 17) === 16), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(917296843, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$917296843.<anonymous> (AppBar.kt:166)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_2(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$657782987$lambda($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(657782987, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$657782987.<anonymous> (AppBar.kt:226)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.s3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$_1270442071$lambda_1m4tn5(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 17) === 16), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1270442071, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$-1270442071.<anonymous> (AppBar.kt:227)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_4(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$2094288676$lambda($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(2094288676, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$2094288676.<anonymous> (AppBar.kt:286)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_5(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.s3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$_1342205566$lambda_vt4x6l(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 17) === 16), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1342205566, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$-1342205566.<anonymous> (AppBar.kt:287)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_6(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$1866429650$lambda($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1866429650, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$1866429650.<anonymous> (AppBar.kt:355)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_7(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.s3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$_541682128$lambda_asbsp0(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 17) === 16), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-541682128, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$-541682128.<anonymous> (AppBar.kt:356)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_8(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$575301698$lambda($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(575301698, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$575301698.<anonymous> (AppBar.kt:416)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_9(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.s3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$_643931612$lambda_mbyyjk(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 17) === 16), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-643931612, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$-643931612.<anonymous> (AppBar.kt:417)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_10(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$_684072357$lambda_sfd321($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-684072357, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$-684072357.<anonymous> (AppBar.kt:476)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_11(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.s3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$2136598717$lambda(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 17) === 16), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(2136598717, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$2136598717.<anonymous> (AppBar.kt:477)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_12(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$_1609649717$lambda_vakju7($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1609649717, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$-1609649717.<anonymous> (AppBar.kt:548)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_13(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.s3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$968008621$lambda(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 17) === 16), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(968008621, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$968008621.<anonymous> (AppBar.kt:549)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_14(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$1152131198$lambda($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1152131198, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$1152131198.<anonymous> (AppBar.kt:620)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_15(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.s3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$_1707954976$lambda_uhmix8(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 17) === 16), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1707954976, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$-1707954976.<anonymous> (AppBar.kt:621)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_16(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$_229000834$lambda_ef792r($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-229000834, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$-229000834.<anonymous> (AppBar.kt:685)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_17(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.s3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$_1276513184$lambda_vlnsej(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 17) === 16), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1276513184, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$-1276513184.<anonymous> (AppBar.kt:686)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_18(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$_185842620$lambda_xqsiqf($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-185842620, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$-185842620.<anonymous> (AppBar.kt:779)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_19(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.s3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$1113419554$lambda(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 17) === 16), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1113419554, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$1113419554.<anonymous> (AppBar.kt:780)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_20(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$_790317886$lambda_j94o2e($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-790317886, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$-790317886.<anonymous> (AppBar.kt:800)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_21(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$_1926007989$lambda_b9nhea($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1926007989, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$-1926007989.<anonymous> (AppBar.kt:802)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_22(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$_699106370$lambda_xi6eqe($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-699106370, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$-699106370.<anonymous> (AppBar.kt:870)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_23(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.s3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$1702484764$lambda(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 17) === 16), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1702484764, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$1702484764.<anonymous> (AppBar.kt:871)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_24(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$_1230986050$lambda_844kcv($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1230986050, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$-1230986050.<anonymous> (AppBar.kt:935)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_25(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.s3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$1921811868$lambda(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 17) === 16), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1921811868, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$1921811868.<anonymous> (AppBar.kt:936)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_26(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$_780193532$lambda_3brp4t($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-780193532, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$-780193532.<anonymous> (AppBar.kt:1029)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_27(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.s3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$_1846660506$lambda_s313h(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 17) === 16), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1846660506, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$-1846660506.<anonymous> (AppBar.kt:1030)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_28(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$_661145402$lambda_nn10sg($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-661145402, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$-661145402.<anonymous> (AppBar.kt:1050)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_29(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$_1113422563$lambda_tsqiv3($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1113422563, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$-1113422563.<anonymous> (AppBar.kt:1052)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_30(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$1767216677$lambda($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1767216677, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$1767216677.<anonymous> (AppBar.kt:1141)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_31(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.s3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$_470693625$lambda_ljjdy7(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 17) === 16), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-470693625, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$-470693625.<anonymous> (AppBar.kt:1142)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_32(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$_2101264077$lambda_q78tjz($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-2101264077, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$-2101264077.<anonymous> (AppBar.kt:3065)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_33(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppBarKt$lambda$37575796$lambda($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:AppBar.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(37575796, $changed, -1, 'androidx.compose.material3.ComposableSingletons$AppBarKt.lambda$37575796.<anonymous> (AppBar.kt:3066)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableSingletons$AppBarKt() {
    ComposableSingletons$AppBarKt_instance = this;
    var tmp = this;
    tmp.be6_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-944449303, false, ComposableSingletons$AppBarKt$lambda$_944449303$lambda_c6jabl));
    var tmp_0 = this;
    tmp_0.ce6_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(917296843, false, ComposableSingletons$AppBarKt$lambda$917296843$lambda));
    var tmp_1 = this;
    tmp_1.de6_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(657782987, false, ComposableSingletons$AppBarKt$lambda$657782987$lambda));
    var tmp_2 = this;
    tmp_2.ee6_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(-1270442071, false, ComposableSingletons$AppBarKt$lambda$_1270442071$lambda_1m4tn5));
    var tmp_3 = this;
    tmp_3.fe6_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(2094288676, false, ComposableSingletons$AppBarKt$lambda$2094288676$lambda));
    var tmp_4 = this;
    tmp_4.ge6_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(-1342205566, false, ComposableSingletons$AppBarKt$lambda$_1342205566$lambda_vt4x6l));
    var tmp_5 = this;
    tmp_5.he6_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(1866429650, false, ComposableSingletons$AppBarKt$lambda$1866429650$lambda));
    var tmp_6 = this;
    tmp_6.ie6_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-541682128, false, ComposableSingletons$AppBarKt$lambda$_541682128$lambda_asbsp0));
    var tmp_7 = this;
    tmp_7.je6_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(575301698, false, ComposableSingletons$AppBarKt$lambda$575301698$lambda));
    var tmp_8 = this;
    tmp_8.ke6_1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(-643931612, false, ComposableSingletons$AppBarKt$lambda$_643931612$lambda_mbyyjk));
    var tmp_9 = this;
    tmp_9.le6_1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(-684072357, false, ComposableSingletons$AppBarKt$lambda$_684072357$lambda_sfd321));
    var tmp_10 = this;
    tmp_10.me6_1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(2136598717, false, ComposableSingletons$AppBarKt$lambda$2136598717$lambda));
    var tmp_11 = this;
    tmp_11.ne6_1 = ComposableLambda$invoke$ref_12(composableLambdaInstance(-1609649717, false, ComposableSingletons$AppBarKt$lambda$_1609649717$lambda_vakju7));
    var tmp_12 = this;
    tmp_12.oe6_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(968008621, false, ComposableSingletons$AppBarKt$lambda$968008621$lambda));
    var tmp_13 = this;
    tmp_13.pe6_1 = ComposableLambda$invoke$ref_14(composableLambdaInstance(1152131198, false, ComposableSingletons$AppBarKt$lambda$1152131198$lambda));
    var tmp_14 = this;
    tmp_14.qe6_1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(-1707954976, false, ComposableSingletons$AppBarKt$lambda$_1707954976$lambda_uhmix8));
    var tmp_15 = this;
    tmp_15.re6_1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(-229000834, false, ComposableSingletons$AppBarKt$lambda$_229000834$lambda_ef792r));
    var tmp_16 = this;
    tmp_16.se6_1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(-1276513184, false, ComposableSingletons$AppBarKt$lambda$_1276513184$lambda_vlnsej));
    var tmp_17 = this;
    tmp_17.te6_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(-185842620, false, ComposableSingletons$AppBarKt$lambda$_185842620$lambda_xqsiqf));
    var tmp_18 = this;
    tmp_18.ue6_1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(1113419554, false, ComposableSingletons$AppBarKt$lambda$1113419554$lambda));
    var tmp_19 = this;
    tmp_19.ve6_1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(-790317886, false, ComposableSingletons$AppBarKt$lambda$_790317886$lambda_j94o2e));
    var tmp_20 = this;
    tmp_20.we6_1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(-1926007989, false, ComposableSingletons$AppBarKt$lambda$_1926007989$lambda_b9nhea));
    var tmp_21 = this;
    tmp_21.xe6_1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(-699106370, false, ComposableSingletons$AppBarKt$lambda$_699106370$lambda_xi6eqe));
    var tmp_22 = this;
    tmp_22.ye6_1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(1702484764, false, ComposableSingletons$AppBarKt$lambda$1702484764$lambda));
    var tmp_23 = this;
    tmp_23.ze6_1 = ComposableLambda$invoke$ref_24(composableLambdaInstance(-1230986050, false, ComposableSingletons$AppBarKt$lambda$_1230986050$lambda_844kcv));
    var tmp_24 = this;
    tmp_24.ae7_1 = ComposableLambda$invoke$ref_25(composableLambdaInstance(1921811868, false, ComposableSingletons$AppBarKt$lambda$1921811868$lambda));
    var tmp_25 = this;
    tmp_25.be7_1 = ComposableLambda$invoke$ref_26(composableLambdaInstance(-780193532, false, ComposableSingletons$AppBarKt$lambda$_780193532$lambda_3brp4t));
    var tmp_26 = this;
    tmp_26.ce7_1 = ComposableLambda$invoke$ref_27(composableLambdaInstance(-1846660506, false, ComposableSingletons$AppBarKt$lambda$_1846660506$lambda_s313h));
    var tmp_27 = this;
    tmp_27.de7_1 = ComposableLambda$invoke$ref_28(composableLambdaInstance(-661145402, false, ComposableSingletons$AppBarKt$lambda$_661145402$lambda_nn10sg));
    var tmp_28 = this;
    tmp_28.ee7_1 = ComposableLambda$invoke$ref_29(composableLambdaInstance(-1113422563, false, ComposableSingletons$AppBarKt$lambda$_1113422563$lambda_tsqiv3));
    var tmp_29 = this;
    tmp_29.fe7_1 = ComposableLambda$invoke$ref_30(composableLambdaInstance(1767216677, false, ComposableSingletons$AppBarKt$lambda$1767216677$lambda));
    var tmp_30 = this;
    tmp_30.ge7_1 = ComposableLambda$invoke$ref_31(composableLambdaInstance(-470693625, false, ComposableSingletons$AppBarKt$lambda$_470693625$lambda_ljjdy7));
    var tmp_31 = this;
    tmp_31.he7_1 = ComposableLambda$invoke$ref_32(composableLambdaInstance(-2101264077, false, ComposableSingletons$AppBarKt$lambda$_2101264077$lambda_q78tjz));
    var tmp_32 = this;
    tmp_32.ie7_1 = ComposableLambda$invoke$ref_33(composableLambdaInstance(37575796, false, ComposableSingletons$AppBarKt$lambda$37575796$lambda));
  }
  var ComposableSingletons$AppBarKt_instance;
  function ComposableSingletons$AppBarKt_getInstance() {
    if (ComposableSingletons$AppBarKt_instance == null)
      new ComposableSingletons$AppBarKt();
    return ComposableSingletons$AppBarKt_instance;
  }
  function placeTopAppBar($this, $receiver, constraints, layoutHeight, maxLayoutHeight, navigationIconPlaceable, titlePlaceable, actionIconsPlaceable, titleBaseline, contentPadding) {
    var topPadding = $receiver.v3q(contentPadding.e9u());
    var bottomPadding = $receiver.v3q(contentPadding.f9u());
    var startPadding = $receiver.v3q(calculateStartPadding(contentPadding, $receiver.p4u()));
    var endPadding = $receiver.v3q(calculateEndPadding(contentPadding, $receiver.p4u()));
    var contentHeight = (layoutHeight + topPadding | 0) - bottomPadding | 0;
    var tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    return $receiver.i6c(tmp, layoutHeight, VOID, TopAppBarMeasurePolicy$placeTopAppBar$lambda(navigationIconPlaceable, startPadding, contentHeight, titlePlaceable, actionIconsPlaceable, $this, constraints, titleBaseline, maxLayoutHeight, endPadding));
  }
  function TopAppBarMeasurePolicy$placeTopAppBar$lambda($navigationIconPlaceable, $startPadding, $contentHeight, $titlePlaceable, $actionIconsPlaceable, this$0, $constraints, $titleBaseline, $maxLayoutHeight, $endPadding) {
    return function ($this$layout) {
      $this$layout.a6c($navigationIconPlaceable, $startPadding, ($contentHeight - $navigationIconPlaceable.e6c_1 | 0) / 2 | 0);
      // Inline function 'kotlin.let' call
      var it = $titlePlaceable;
      var tmp0 = $this$layout.v3q(get_TopAppBarTitleInset());
      // Inline function 'kotlin.math.max' call
      var b = $navigationIconPlaceable.d6c_1;
      var start = Math.max(tmp0, b);
      var end = $actionIconsPlaceable.d6c_1;
      var titleX = this$0.le7_1.x60($titlePlaceable.d6c_1, _Constraints___get_maxWidth__impl__uuyqc($constraints), LayoutDirection_Ltr_getInstance());
      if (titleX < start) {
        titleX = titleX + ($startPadding + (start - titleX | 0) | 0) | 0;
      } else if ((titleX + $titlePlaceable.d6c_1 | 0) > (_Constraints___get_maxWidth__impl__uuyqc($constraints) - end | 0)) {
        titleX = titleX + ($startPadding + ((_Constraints___get_maxWidth__impl__uuyqc($constraints) - end | 0) - (titleX + $titlePlaceable.d6c_1 | 0) | 0) | 0) | 0;
      }
      var tmp0_subject = this$0.ke7_1;
      var tmp;
      if (equals(tmp0_subject, Arrangement_getInstance().a9s_1)) {
        tmp = ($contentHeight - $titlePlaceable.e6c_1 | 0) / 2 | 0;
      } else if (equals(tmp0_subject, Arrangement_getInstance().z9r_1)) {
        var tmp_0;
        if (this$0.me7_1 === 0) {
          tmp_0 = $contentHeight - $titlePlaceable.e6c_1 | 0;
        } else {
          var paddingFromBottom = this$0.me7_1 - ($titlePlaceable.e6c_1 - $titleBaseline | 0) | 0;
          var heightWithPadding = paddingFromBottom + $titlePlaceable.e6c_1 | 0;
          var tmp_1;
          if (heightWithPadding > $maxLayoutHeight) {
            tmp_1 = paddingFromBottom - (heightWithPadding - $maxLayoutHeight | 0) | 0;
          } else {
            tmp_1 = paddingFromBottom;
          }
          var adjustedBottomPadding = tmp_1;
          var tmp_2 = $contentHeight - $titlePlaceable.e6c_1 | 0;
          // Inline function 'kotlin.math.max' call
          tmp_0 = tmp_2 - Math.max(0, adjustedBottomPadding) | 0;
        }
        tmp = tmp_0;
      } else {
        tmp = 0;
      }
      var titleY = tmp;
      $this$layout.a6c(it, titleX, titleY);
      $this$layout.a6c($actionIconsPlaceable, (_Constraints___get_maxWidth__impl__uuyqc($constraints) - $actionIconsPlaceable.d6c_1 | 0) - $endPadding | 0, ($contentHeight - $actionIconsPlaceable.e6c_1 | 0) / 2 | 0);
      return Unit_instance;
    };
  }
  function TopAppBarMeasurePolicy(scrolledOffset, titleVerticalArrangement, titleHorizontalAlignment, titleBottomPadding, height, contentPadding) {
    this.je7_1 = scrolledOffset;
    this.ke7_1 = titleVerticalArrangement;
    this.le7_1 = titleHorizontalAlignment;
    this.me7_1 = titleBottomPadding;
    this.ne7_1 = height;
    this.oe7_1 = contentPadding;
  }
  protoOf(TopAppBarMeasurePolicy).q7g = function (_this__u8e3s4, measurables, constraints) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastFirst' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = measurables.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.m(index);
          if (equals(get_layoutId(item), 'navigationIcon')) {
            tmp$ret$0 = item;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      throwNoSuchElementException('Collection contains no element matching the predicate.');
    }
    var navigationIconPlaceable = tmp$ret$0.c6c(Constraints__copy$default_impl_f452rp(constraints, 0));
    var tmp$ret$4;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.util.fastFirst' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.l() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.m(index_0);
          if (equals(get_layoutId(item_0), 'actionIcons')) {
            tmp$ret$4 = item_0;
            break $l$block_0;
          }
        }
         while (inductionVariable_0 <= last_0);
      throwNoSuchElementException('Collection contains no element matching the predicate.');
    }
    var actionIconsPlaceable = tmp$ret$4.c6c(Constraints__copy$default_impl_f452rp(constraints, 0));
    var startPaddingPx = calculateStartPadding(this.oe7_1, _this__u8e3s4.p4u());
    var endPaddingPx = calculateEndPadding(this.oe7_1, _this__u8e3s4.p4u());
    var tmp;
    if (_Constraints___get_maxWidth__impl__uuyqc(constraints) === 2147483647) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      tmp = coerceAtLeast((((_Constraints___get_maxWidth__impl__uuyqc(constraints) - navigationIconPlaceable.d6c_1 | 0) - actionIconsPlaceable.d6c_1 | 0) - _this__u8e3s4.v3q(startPaddingPx) | 0) - _this__u8e3s4.v3q(endPaddingPx) | 0, 0);
    }
    var maxTitleWidth = tmp;
    var tmp$ret$8;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.util.fastFirst' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_1 = 0;
      var last_1 = measurables.l() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var item_1 = measurables.m(index_1);
          if (equals(get_layoutId(item_1), 'title')) {
            tmp$ret$8 = item_1;
            break $l$block_1;
          }
        }
         while (inductionVariable_1 <= last_1);
      throwNoSuchElementException('Collection contains no element matching the predicate.');
    }
    var titlePlaceable = tmp$ret$8.c6c(Constraints__copy$default_impl_f452rp(constraints, 0, maxTitleWidth));
    var tmp_0;
    if (!(titlePlaceable.l7f(get_LastBaseline()) === -2147483648)) {
      tmp_0 = titlePlaceable.l7f(get_LastBaseline());
    } else {
      tmp_0 = 0;
    }
    var titleBaseline = tmp_0;
    var scrolledOffsetValue = this.je7_1.vdx();
    var tmp_1;
    if (isNaN_0(scrolledOffsetValue)) {
      tmp_1 = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp_1 = roundToInt(scrolledOffsetValue);
    }
    var heightOffset = tmp_1;
    var topPaddingPx = _this__u8e3s4.v3q(this.oe7_1.e9u());
    var bottomPaddingPx = _this__u8e3s4.v3q(this.oe7_1.f9u());
    var tmp0 = _this__u8e3s4.v3q(this.ne7_1);
    // Inline function 'kotlin.math.max' call
    var b = titlePlaceable.e6c_1;
    var maxLayoutHeight = (Math.max(tmp0, b) + topPaddingPx | 0) + bottomPaddingPx | 0;
    var tmp_2;
    if (_Constraints___get_maxHeight__impl__dt3e8z(constraints) === 2147483647) {
      tmp_2 = maxLayoutHeight;
    } else {
      tmp_2 = coerceAtLeast(maxLayoutHeight + heightOffset | 0, 0);
    }
    var layoutHeight = tmp_2;
    return placeTopAppBar(this, _this__u8e3s4, constraints, layoutHeight, maxLayoutHeight, navigationIconPlaceable, titlePlaceable, actionIconsPlaceable, titleBaseline, this.oe7_1);
  };
  function TopAppBar(title, modifier, navigationIcon, actions, expandedHeight, windowInsets, colors, scrollBehavior, contentPadding, $composer, $changed, $default) {
    _init_properties_AppBar_kt__51suc2();
    var modifier_0 = {_v: modifier};
    var navigationIcon_0 = {_v: navigationIcon};
    var actions_0 = {_v: actions};
    var expandedHeight_0 = {_v: new Dp(expandedHeight)};
    var windowInsets_0 = {_v: windowInsets};
    var colors_0 = {_v: colors};
    var scrollBehavior_0 = {_v: scrollBehavior};
    var contentPadding_0 = {_v: contentPadding};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.g20(660588393);
    sourceInformation($composer_0, 'C(TopAppBar)P(7,4,5!1,3:c#ui.unit.Dp,8!1,6)297@14961L5,294@14836L708:AppBar.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.b21(title) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w20(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.b21(navigationIcon_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.b21(actions_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.z20(_Dp___get_value__impl__geb1vb(expandedHeight_0._v.h3r_1)) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | (($default & 32) === 0 && $composer_0.w20(windowInsets_0._v) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | (($default & 64) === 0 && $composer_0.w20(colors_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.w20(scrollBehavior_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.w20(contentPadding_0._v) ? 67108864 : 33554432);
    if ($composer_0.d21(!(($dirty & 38347923) === 38347922), $dirty & 1)) {
      $composer_0.e20();
      sourceInformation($composer_0, '289@14624L12,290@14686L17');
      if (($changed & 1) === 0 || $composer_0.w1z()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 4) === 0)) {
          navigationIcon_0._v = ComposableSingletons$AppBarKt_getInstance().fe6_1;
        }
        if (!(($default & 8) === 0)) {
          actions_0._v = ComposableSingletons$AppBarKt_getInstance().ge6_1;
        }
        if (!(($default & 16) === 0)) {
          expandedHeight_0._v = new Dp(TopAppBarDefaults_getInstance().me0_1);
        }
        if (!(($default & 32) === 0)) {
          windowInsets_0._v = TopAppBarDefaults_getInstance().ae6($composer_0, 6);
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          colors_0._v = TopAppBarDefaults_getInstance().ke1($composer_0, 6);
          $dirty = $dirty & -3670017;
        }
        if (!(($default & 128) === 0)) {
          scrollBehavior_0._v = null;
        }
        if (!(($default & 256) === 0)) {
          contentPadding_0._v = TopAppBarDefaults_getInstance().le0_1;
        }
      } else {
        $composer_0.l20();
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
        if (!(($default & 64) === 0))
          $dirty = $dirty & -3670017;
      }
      $composer_0.f20();
      if (isTraceInProgress()) {
        traceEventStart(660588393, $dirty, -1, 'androidx.compose.material3.TopAppBar (AppBar.kt:294)');
      }
      var tmp = modifier_0._v;
      var tmp_0 = get_value_0(AppBarSmallTokens_getInstance().xe0_1, $composer_0, 6);
      var tmp_1 = Companion_getInstance_4().m5h_1;
      var tmp_2 = Companion_getInstance().t60_1;
      var tmp_3 = navigationIcon_0._v;
      var tmp_4 = actions_0._v;
      var tmp_5;
      if (expandedHeight_0._v.equals(new Dp(Companion_getInstance_5().k3r_1)) || expandedHeight_0._v.equals(new Dp(Companion_getInstance_5().j3r_1))) {
        tmp_5 = TopAppBarDefaults_getInstance().me0_1;
      } else {
        tmp_5 = expandedHeight_0._v.h3r_1;
      }
      SingleRowTopAppBar(tmp, title, tmp_0, null, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, contentPadding_0._v, windowInsets_0._v, colors_0._v, scrollBehavior_0._v, $composer_0, 224256 | 14 & $dirty >> 3 | 112 & $dirty << 3 | 3670016 & $dirty << 12 | 29360128 & $dirty << 12 | 1879048192 & $dirty << 3, 14 & $dirty >> 15 | 112 & $dirty >> 15 | 896 & $dirty >> 15, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    var tmp0_safe_receiver = $composer_0.h20();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k2m(TopAppBar$lambda(title, modifier_0, navigationIcon_0, actions_0, expandedHeight_0, windowInsets_0, colors_0, scrollBehavior_0, contentPadding_0, $changed, $default));
    }
  }
  function androidx_compose_material3_TopAppBarDefaults$stableprop_getter() {
    return androidx_compose_material3_TopAppBarDefaults$stable;
  }
  function SingleRowTopAppBar(modifier, title, titleTextStyle, subtitle, subtitleTextStyle, titleHorizontalAlignment, navigationIcon, actions, expandedHeight, contentPadding, windowInsets, colors, scrollBehavior, $composer, $changed, $changed1, $default) {
    _init_properties_AppBar_kt__51suc2();
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.g20(703932376);
    sourceInformation($composer_0, 'C(SingleRowTopAppBar)P(4,9,11,7,8,10,5!1,3:c#ui.unit.Dp,2,12)2707@129158L7,*2707@129175L20:AppBar.kt#uh7d8r');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w20(modifier_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.b21(title) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.w20(titleTextStyle) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.b21(subtitle) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.w20(subtitleTextStyle) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.w20(titleHorizontalAlignment) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.b21(navigationIcon) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.b21(actions) ? 8388608 : 4194304);
    if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.z20(_Dp___get_value__impl__geb1vb(expandedHeight)) ? 67108864 : 33554432);
    if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.w20(contentPadding) ? 536870912 : 268435456);
    if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.w20(windowInsets) ? 4 : 2);
    if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ($composer_0.w20(colors) ? 32 : 16);
    if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ($composer_0.w20(scrollBehavior) ? 256 : 128);
    if ($composer_0.d21(!(($dirty & 306783379) === 306783378) || !(($dirty1 & 147) === 146), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (isTraceInProgress()) {
        traceEventStart(703932376, $dirty, $dirty1, 'androidx.compose.material3.SingleRowTopAppBar (AppBar.kt:2690)');
      }
      var scope = new SingleRowTopAppBarOverrideScope(modifier_0._v, title, titleTextStyle, subtitle, subtitleTextStyle, titleHorizontalAlignment, navigationIcon, actions, expandedHeight, contentPadding, windowInsets, colors, scrollBehavior);
      var tmp0 = get_LocalSingleRowTopAppBarOverride();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_1.g21(tmp0);
      sourceInformationMarkerEnd($composer_1);
      // Inline function 'kotlin.with' call
      tmp0_0.tdz(scope, $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    var tmp0_safe_receiver = $composer_0.h20();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k2m(SingleRowTopAppBar$lambda_0(modifier_0, title, titleTextStyle, subtitle, subtitleTextStyle, titleHorizontalAlignment, navigationIcon, actions, expandedHeight, contentPadding, windowInsets, colors, scrollBehavior, $changed, $changed1, $default));
    }
  }
  function LocalSingleRowTopAppBarOverride$lambda() {
    _init_properties_AppBar_kt__51suc2();
    return DefaultSingleRowTopAppBarOverride_instance;
  }
  function LocalTwoRowsTopAppBarOverride$lambda() {
    _init_properties_AppBar_kt__51suc2();
    return DefaultTwoRowsTopAppBarOverride_instance;
  }
  function settleAppBar$lambda($lastValue, $state, $remainingVelocity) {
    return function ($this$animateDecay) {
      var delta = $this$animateDecay.x1() - $lastValue._v;
      var initialHeightOffset = $state.vdy();
      $state.wdy(initialHeightOffset + delta);
      // Inline function 'kotlin.math.abs' call
      var x = initialHeightOffset - $state.vdy();
      var consumed = Math.abs(x);
      $lastValue._v = $this$animateDecay.x1();
      $remainingVelocity._v = $this$animateDecay.ya5();
      var tmp;
      // Inline function 'kotlin.math.abs' call
      var x_0 = delta - consumed;
      if (Math.abs(x_0) > 0.5) {
        $this$animateDecay.ba4();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function settleAppBar$lambda_0($state) {
    return function ($this$animateTo) {
      $state.wdy($this$animateTo.x1());
      return Unit_instance;
    };
  }
  function adjustHeightOffsetLimit$lambda($it) {
    return function (size) {
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_0 = size.d3s_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var offset = convertToInt(bitwiseAnd(value, new Long(-1, 0))) - $it.vdy();
      $it.kdy_1 = -offset;
      return Unit_instance;
    };
  }
  function TopAppBarLayout$lambda($this$clearAndSetSemantics) {
    _init_properties_AppBar_kt__51suc2();
    return Unit_instance;
  }
  function TopAppBarLayout$lambda_0($titleAlpha) {
    return function ($this$graphicsLayer) {
      $this$graphicsLayer.n4c($titleAlpha());
      return Unit_instance;
    };
  }
  function TopAppBarLayout$lambda_1($this$clearAndSetSemantics) {
    _init_properties_AppBar_kt__51suc2();
    return Unit_instance;
  }
  function TopAppBarLayout$lambda_2($titleAlpha) {
    return function ($this$graphicsLayer) {
      $this$graphicsLayer.n4c($titleAlpha());
      return Unit_instance;
    };
  }
  function TopAppBarLayout$lambda_3($modifier, $scrolledOffset, $navigationIconContentColor, $titleContentColor, $subtitleContentColor, $actionIconContentColor, $title, $titleTextStyle, $subtitle, $subtitleTextStyle, $titleAlpha, $titleVerticalArrangement, $titleHorizontalAlignment, $titleBottomPadding, $hideTitleSemantics, $navigationIcon, $actions, $height, $contentPadding, $$changed, $$changed1) {
    return function ($composer, $force) {
      TopAppBarLayout($modifier, $scrolledOffset, $navigationIconContentColor, $titleContentColor, $subtitleContentColor, $actionIconContentColor, $title, $titleTextStyle, $subtitle, $subtitleTextStyle, $titleAlpha, $titleVerticalArrangement, $titleHorizontalAlignment, $titleBottomPadding, $hideTitleSemantics, $navigationIcon, $actions, $height, $contentPadding, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1));
      return Unit_instance;
    };
  }
  function TopAppBar$lambda($title, $modifier, $navigationIcon, $actions, $expandedHeight, $windowInsets, $colors, $scrollBehavior, $contentPadding, $$changed, $$default) {
    return function ($composer, $force) {
      TopAppBar($title, $modifier._v, $navigationIcon._v, $actions._v, $expandedHeight._v.h3r_1, $windowInsets._v, $colors._v, $scrollBehavior._v, $contentPadding._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SingleRowTopAppBar$lambda_0($modifier, $title, $titleTextStyle, $subtitle, $subtitleTextStyle, $titleHorizontalAlignment, $navigationIcon, $actions, $expandedHeight, $contentPadding, $windowInsets, $colors, $scrollBehavior, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      SingleRowTopAppBar($modifier._v, $title, $titleTextStyle, $subtitle, $subtitleTextStyle, $titleHorizontalAlignment, $navigationIcon, $actions, $expandedHeight, $contentPadding, $windowInsets, $colors, $scrollBehavior, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function $settleAppBarCOROUTINE$(state, velocity, flingAnimationSpec, snapAnimationSpec, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ge0_1 = state;
    this.he0_1 = velocity;
    this.ie0_1 = flingAnimationSpec;
    this.je0_1 = snapAnimationSpec;
  }
  protoOf($settleAppBarCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 6;
            if (this.ge0_1.pe7() < 0.01 || this.ge0_1.pe7() === 1.0) {
              return new Velocity(Companion_getInstance_6().k3s_1);
            }

            this.ke0_1 = {_v: this.he0_1};
            var tmp_0;
            if (!(this.ie0_1 == null)) {
              var x = this.he0_1;
              tmp_0 = Math.abs(x) > 1.0;
            } else {
              tmp_0 = false;
            }

            if (tmp_0) {
              var lastValue = {_v: 0.0};
              this.m8_1 = 1;
              var tmp_1 = AnimationState(0.0, this.he0_1);
              suspendResult = animateDecay(tmp_1, this.ie0_1, VOID, settleAppBar$lambda(lastValue, this.ge0_1, this.ke0_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 2;
              continue $sm;
            }

          case 1:
            this.m8_1 = 2;
            continue $sm;
          case 2:
            if (!(this.je0_1 == null)) {
              if (this.ge0_1.vdy() < 0 && this.ge0_1.vdy() > this.ge0_1.kdy_1) {
                this.m8_1 = 3;
                var tmp_2 = AnimationState(this.ge0_1.vdy());
                var tmp_3;
                if (this.ge0_1.pe7() < 0.5) {
                  tmp_3 = 0.0;
                } else {
                  tmp_3 = this.ge0_1.kdy_1;
                }
                var tmp_4 = tmp_3;
                suspendResult = animateTo(tmp_2, tmp_4, this.je0_1, VOID, settleAppBar$lambda_0(this.ge0_1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.m8_1 = 4;
                continue $sm;
              }
            } else {
              this.m8_1 = 5;
              continue $sm;
            }

          case 3:
            this.m8_1 = 4;
            continue $sm;
          case 4:
            this.m8_1 = 5;
            continue $sm;
          case 5:
            return new Velocity(Velocity_0(0.0, this.ke0_1._v));
          case 6:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 6) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  var properties_initialized_AppBar_kt_if00s4;
  function _init_properties_AppBar_kt__51suc2() {
    if (!properties_initialized_AppBar_kt_if00s4) {
      properties_initialized_AppBar_kt_if00s4 = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp0 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.ui.unit.dp' call
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var other = _Dp___init__impl__ms3zkb(12);
      BottomAppBarHorizontalPadding = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0) - _Dp___get_value__impl__geb1vb(other));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp0_0 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.ui.unit.dp' call
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var other_0 = _Dp___init__impl__ms3zkb(12);
      BottomAppBarVerticalPadding = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_0) - _Dp___get_value__impl__geb1vb(other_0));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp0_1 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var other_1 = get_BottomAppBarHorizontalPadding();
      FABHorizontalPadding = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_1) - _Dp___get_value__impl__geb1vb(other_1));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp0_2 = _Dp___init__impl__ms3zkb(12);
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var other_2 = get_BottomAppBarVerticalPadding();
      FABVerticalPadding = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_2) - _Dp___get_value__impl__geb1vb(other_2));
      LocalSingleRowTopAppBarOverride = compositionLocalOf(VOID, LocalSingleRowTopAppBarOverride$lambda);
      LocalTwoRowsTopAppBarOverride = compositionLocalOf(VOID, LocalTwoRowsTopAppBarOverride$lambda);
      TopTitleAlphaEasing = new CubicBezierEasing(0.8, 0.0, 0.8, 0.15);
      // Inline function 'androidx.compose.ui.unit.dp' call
      MediumTitleBottomPadding = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.ui.unit.dp' call
      LargeTitleBottomPadding = _Dp___init__impl__ms3zkb(28);
      // Inline function 'androidx.compose.ui.unit.dp' call
      TopAppBarHorizontalPadding = _Dp___init__impl__ms3zkb(4);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp0_3 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var other_3 = get_TopAppBarHorizontalPadding();
      TopAppBarTitleInset = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_3) - _Dp___get_value__impl__geb1vb(other_3));
      androidx_compose_material3_TopAppBarDefaults$stable = 0;
      androidx_compose_material3_TopAppBarState$stable = 0;
      androidx_compose_material3_TopAppBarColors$stable = 0;
      androidx_compose_material3_BottomAppBarDefaults$stable = 0;
      androidx_compose_material3_DefaultSingleRowTopAppBarOverride$stable = 0;
      androidx_compose_material3_SingleRowTopAppBarOverrideScope$stable = 0;
      androidx_compose_material3_DefaultTwoRowsTopAppBarOverride$stable = 0;
      androidx_compose_material3_TwoRowsTopAppBarOverrideScope$stable = 0;
    }
  }
  var androidx_compose_material3_AppBarScopeImpl$stable;
  var androidx_compose_material3_ClickableAppBarItem$stable;
  var androidx_compose_material3_ToggleableAppBarItem$stable;
  var androidx_compose_material3_CustomAppBarItem$stable;
  var androidx_compose_material3_AppBarMenuState$stable;
  var androidx_compose_material3_OverflowMeasurePolicy$stable;
  var androidx_compose_material3_BottomSheetScaffoldState$stable;
  var androidx_compose_material3_ButtonDefaults$stable;
  var androidx_compose_material3_ButtonElevation$stable;
  var androidx_compose_material3_ButtonColors$stable;
  var androidx_compose_material3_ButtonShapes$stable;
  var androidx_compose_material3_ButtonGroupDefaults$stable;
  var androidx_compose_material3_ButtonGroupMenuState$stable;
  var androidx_compose_material3_ButtonGroupParentData$stable;
  var androidx_compose_material3_ButtonGroupElement$stable;
  var androidx_compose_material3_ButtonGroupNode$stable;
  var androidx_compose_material3_EnlargeOnPressElement$stable;
  var androidx_compose_material3_EnlargeOnPressNode$stable;
  var androidx_compose_material3_ClickableButtonGroupItem$stable;
  var androidx_compose_material3_ToggleableButtonGroupItem$stable;
  var androidx_compose_material3_CustomButtonGroupItem$stable;
  var androidx_compose_material3_CardDefaults$stable;
  var androidx_compose_material3_CardElevation$stable;
  var androidx_compose_material3_CardColors$stable;
  function get_LocalColorScheme() {
    _init_properties_ColorScheme_kt__xhtsty();
    return LocalColorScheme;
  }
  var LocalColorScheme;
  function get_LocalTonalElevationEnabled() {
    _init_properties_ColorScheme_kt__xhtsty();
    return LocalTonalElevationEnabled;
  }
  var LocalTonalElevationEnabled;
  var androidx_compose_material3_ColorScheme$stable;
  function ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceDim, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest, primaryFixed, primaryFixedDim, onPrimaryFixed, onPrimaryFixedVariant, secondaryFixed, secondaryFixedDim, onSecondaryFixed, onSecondaryFixedVariant, tertiaryFixed, tertiaryFixedDim, onTertiaryFixed, onTertiaryFixedVariant) {
    this.oe1_1 = primary;
    this.pe1_1 = onPrimary;
    this.qe1_1 = primaryContainer;
    this.re1_1 = onPrimaryContainer;
    this.se1_1 = inversePrimary;
    this.te1_1 = secondary;
    this.ue1_1 = onSecondary;
    this.ve1_1 = secondaryContainer;
    this.we1_1 = onSecondaryContainer;
    this.xe1_1 = tertiary;
    this.ye1_1 = onTertiary;
    this.ze1_1 = tertiaryContainer;
    this.ae2_1 = onTertiaryContainer;
    this.be2_1 = background;
    this.ce2_1 = onBackground;
    this.de2_1 = surface;
    this.ee2_1 = onSurface;
    this.fe2_1 = surfaceVariant;
    this.ge2_1 = onSurfaceVariant;
    this.he2_1 = surfaceTint;
    this.ie2_1 = inverseSurface;
    this.je2_1 = inverseOnSurface;
    this.ke2_1 = error;
    this.le2_1 = onError;
    this.me2_1 = errorContainer;
    this.ne2_1 = onErrorContainer;
    this.oe2_1 = outline;
    this.pe2_1 = outlineVariant;
    this.qe2_1 = scrim;
    this.re2_1 = surfaceBright;
    this.se2_1 = surfaceDim;
    this.te2_1 = surfaceContainer;
    this.ue2_1 = surfaceContainerHigh;
    this.ve2_1 = surfaceContainerHighest;
    this.we2_1 = surfaceContainerLow;
    this.xe2_1 = surfaceContainerLowest;
    this.ye2_1 = primaryFixed;
    this.ze2_1 = primaryFixedDim;
    this.ae3_1 = onPrimaryFixed;
    this.be3_1 = onPrimaryFixedVariant;
    this.ce3_1 = secondaryFixed;
    this.de3_1 = secondaryFixedDim;
    this.ee3_1 = onSecondaryFixed;
    this.fe3_1 = onSecondaryFixedVariant;
    this.ge3_1 = tertiaryFixed;
    this.he3_1 = tertiaryFixedDim;
    this.ie3_1 = onTertiaryFixed;
    this.je3_1 = onTertiaryFixedVariant;
    this.ke3_1 = null;
    this.le3_1 = null;
    this.me3_1 = null;
    this.ne3_1 = null;
    this.oe3_1 = null;
    this.pe3_1 = null;
    this.qe3_1 = null;
    this.re3_1 = null;
    this.se3_1 = null;
    this.te3_1 = null;
    this.ue3_1 = null;
    this.ve3_1 = null;
    this.we3_1 = null;
    this.xe3_1 = null;
    this.ye3_1 = null;
    this.ze3_1 = null;
    this.ae4_1 = null;
    this.be4_1 = null;
    this.ce4_1 = null;
    this.de4_1 = null;
    this.ee4_1 = null;
    this.fe4_1 = null;
    this.ge4_1 = null;
    this.he4_1 = null;
    this.ie4_1 = null;
    this.je4_1 = null;
    this.ke4_1 = null;
    this.le4_1 = null;
    this.me4_1 = null;
    this.ne4_1 = null;
    this.oe4_1 = null;
    this.pe4_1 = null;
    this.qe4_1 = null;
    this.re4_1 = null;
    this.se4_1 = null;
    this.te4_1 = null;
    this.ue4_1 = null;
    this.ve4_1 = null;
    this.we4_1 = null;
    this.xe4_1 = null;
    this.ye4_1 = null;
    this.ze4_1 = null;
    this.ae5_1 = null;
    this.be5_1 = null;
    this.ce5_1 = null;
    this.de5_1 = null;
    this.ee5_1 = null;
    this.fe5_1 = null;
    this.ge5_1 = null;
    this.he5_1 = null;
    this.ie5_1 = null;
    this.je5_1 = null;
    this.ke5_1 = null;
    this.le5_1 = null;
  }
  protoOf(ColorScheme).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.r7('ColorScheme(');
    this_0.r7('primary=' + Color__toString_impl_hpzmaq(this.oe1_1) + ', ');
    this_0.r7('onPrimary=' + Color__toString_impl_hpzmaq(this.pe1_1) + ', ');
    this_0.r7('primaryContainer=' + Color__toString_impl_hpzmaq(this.qe1_1) + ', ');
    this_0.r7('onPrimaryContainer=' + Color__toString_impl_hpzmaq(this.re1_1) + ', ');
    this_0.r7('inversePrimary=' + Color__toString_impl_hpzmaq(this.se1_1) + ', ');
    this_0.r7('secondary=' + Color__toString_impl_hpzmaq(this.te1_1) + ', ');
    this_0.r7('onSecondary=' + Color__toString_impl_hpzmaq(this.ue1_1) + ', ');
    this_0.r7('secondaryContainer=' + Color__toString_impl_hpzmaq(this.ve1_1) + ', ');
    this_0.r7('onSecondaryContainer=' + Color__toString_impl_hpzmaq(this.we1_1) + ', ');
    this_0.r7('tertiary=' + Color__toString_impl_hpzmaq(this.xe1_1) + ', ');
    this_0.r7('onTertiary=' + Color__toString_impl_hpzmaq(this.ye1_1) + ', ');
    this_0.r7('tertiaryContainer=' + Color__toString_impl_hpzmaq(this.ze1_1) + ', ');
    this_0.r7('onTertiaryContainer=' + Color__toString_impl_hpzmaq(this.ae2_1) + ', ');
    this_0.r7('background=' + Color__toString_impl_hpzmaq(this.be2_1) + ', ');
    this_0.r7('onBackground=' + Color__toString_impl_hpzmaq(this.ce2_1) + ', ');
    this_0.r7('surface=' + Color__toString_impl_hpzmaq(this.de2_1) + ', ');
    this_0.r7('onSurface=' + Color__toString_impl_hpzmaq(this.ee2_1) + ', ');
    this_0.r7('surfaceVariant=' + Color__toString_impl_hpzmaq(this.fe2_1) + ', ');
    this_0.r7('onSurfaceVariant=' + Color__toString_impl_hpzmaq(this.ge2_1) + ', ');
    this_0.r7('surfaceTint=' + Color__toString_impl_hpzmaq(this.he2_1) + ', ');
    this_0.r7('inverseSurface=' + Color__toString_impl_hpzmaq(this.ie2_1) + ', ');
    this_0.r7('inverseOnSurface=' + Color__toString_impl_hpzmaq(this.je2_1) + ', ');
    this_0.r7('error=' + Color__toString_impl_hpzmaq(this.ke2_1) + ', ');
    this_0.r7('onError=' + Color__toString_impl_hpzmaq(this.le2_1) + ', ');
    this_0.r7('errorContainer=' + Color__toString_impl_hpzmaq(this.me2_1) + ', ');
    this_0.r7('onErrorContainer=' + Color__toString_impl_hpzmaq(this.ne2_1) + ', ');
    this_0.r7('outline=' + Color__toString_impl_hpzmaq(this.oe2_1) + ', ');
    this_0.r7('outlineVariant=' + Color__toString_impl_hpzmaq(this.pe2_1) + ', ');
    this_0.r7('scrim=' + Color__toString_impl_hpzmaq(this.qe2_1) + ', ');
    this_0.r7('surfaceBright=' + Color__toString_impl_hpzmaq(this.re2_1) + ', ');
    this_0.r7('surfaceDim=' + Color__toString_impl_hpzmaq(this.se2_1) + ', ');
    this_0.r7('surfaceContainer=' + Color__toString_impl_hpzmaq(this.te2_1) + ', ');
    this_0.r7('surfaceContainerHigh=' + Color__toString_impl_hpzmaq(this.ue2_1) + ', ');
    this_0.r7('surfaceContainerHighest=' + Color__toString_impl_hpzmaq(this.ve2_1) + ', ');
    this_0.r7('surfaceContainerLow=' + Color__toString_impl_hpzmaq(this.we2_1) + ', ');
    this_0.r7('surfaceContainerLowest=' + Color__toString_impl_hpzmaq(this.xe2_1) + ', ');
    this_0.r7('primaryFixed=' + Color__toString_impl_hpzmaq(this.ye2_1) + ', ');
    this_0.r7('primaryFixedDim=' + Color__toString_impl_hpzmaq(this.ze2_1) + ', ');
    this_0.r7('onPrimaryFixed=' + Color__toString_impl_hpzmaq(this.re1_1) + ', ');
    this_0.r7('onPrimaryFixedVariant=' + Color__toString_impl_hpzmaq(this.be3_1) + ', ');
    this_0.r7('secondaryFixed=' + Color__toString_impl_hpzmaq(this.ce3_1) + ', ');
    this_0.r7('secondaryFixedDim=' + Color__toString_impl_hpzmaq(this.de3_1) + ', ');
    this_0.r7('onSecondaryFixed=' + Color__toString_impl_hpzmaq(this.ee3_1) + ', ');
    this_0.r7('onSecondaryFixedVariant=' + Color__toString_impl_hpzmaq(this.fe3_1) + ', ');
    this_0.r7('tertiaryFixed=' + Color__toString_impl_hpzmaq(this.ge3_1) + ', ');
    this_0.r7('tertiaryFixedDim=' + Color__toString_impl_hpzmaq(this.he3_1) + ', ');
    this_0.r7('onTertiaryFixed=' + Color__toString_impl_hpzmaq(this.ie3_1) + ', ');
    this_0.r7('onTertiaryFixedVariant=' + Color__toString_impl_hpzmaq(this.je3_1) + ', ');
    this_0.r7(')');
    return this_0.toString();
  };
  function fromToken(_this__u8e3s4, value) {
    _init_properties_ColorScheme_kt__xhtsty();
    var tmp;
    switch (value.i2_1) {
      case 0:
        tmp = _this__u8e3s4.be2_1;
        break;
      case 1:
        tmp = _this__u8e3s4.ke2_1;
        break;
      case 2:
        tmp = _this__u8e3s4.me2_1;
        break;
      case 3:
        tmp = _this__u8e3s4.je2_1;
        break;
      case 4:
        tmp = _this__u8e3s4.se1_1;
        break;
      case 5:
        tmp = _this__u8e3s4.ie2_1;
        break;
      case 6:
        tmp = _this__u8e3s4.ce2_1;
        break;
      case 7:
        tmp = _this__u8e3s4.le2_1;
        break;
      case 8:
        tmp = _this__u8e3s4.ne2_1;
        break;
      case 9:
        tmp = _this__u8e3s4.pe1_1;
        break;
      case 10:
        tmp = _this__u8e3s4.re1_1;
        break;
      case 13:
        tmp = _this__u8e3s4.ue1_1;
        break;
      case 14:
        tmp = _this__u8e3s4.we1_1;
        break;
      case 17:
        tmp = _this__u8e3s4.ee2_1;
        break;
      case 18:
        tmp = _this__u8e3s4.ge2_1;
        break;
      case 42:
        tmp = _this__u8e3s4.he2_1;
        break;
      case 19:
        tmp = _this__u8e3s4.ye1_1;
        break;
      case 20:
        tmp = _this__u8e3s4.ae2_1;
        break;
      case 23:
        tmp = _this__u8e3s4.oe2_1;
        break;
      case 24:
        tmp = _this__u8e3s4.pe2_1;
        break;
      case 25:
        tmp = _this__u8e3s4.oe1_1;
        break;
      case 26:
        tmp = _this__u8e3s4.qe1_1;
        break;
      case 29:
        tmp = _this__u8e3s4.qe2_1;
        break;
      case 30:
        tmp = _this__u8e3s4.te1_1;
        break;
      case 31:
        tmp = _this__u8e3s4.ve1_1;
        break;
      case 34:
        tmp = _this__u8e3s4.de2_1;
        break;
      case 43:
        tmp = _this__u8e3s4.fe2_1;
        break;
      case 35:
        tmp = _this__u8e3s4.re2_1;
        break;
      case 36:
        tmp = _this__u8e3s4.te2_1;
        break;
      case 37:
        tmp = _this__u8e3s4.ue2_1;
        break;
      case 38:
        tmp = _this__u8e3s4.ve2_1;
        break;
      case 39:
        tmp = _this__u8e3s4.we2_1;
        break;
      case 40:
        tmp = _this__u8e3s4.xe2_1;
        break;
      case 41:
        tmp = _this__u8e3s4.se2_1;
        break;
      case 44:
        tmp = _this__u8e3s4.xe1_1;
        break;
      case 45:
        tmp = _this__u8e3s4.ze1_1;
        break;
      case 27:
        tmp = _this__u8e3s4.ye2_1;
        break;
      case 28:
        tmp = _this__u8e3s4.ze2_1;
        break;
      case 11:
        tmp = _this__u8e3s4.ae3_1;
        break;
      case 12:
        tmp = _this__u8e3s4.be3_1;
        break;
      case 32:
        tmp = _this__u8e3s4.ce3_1;
        break;
      case 33:
        tmp = _this__u8e3s4.de3_1;
        break;
      case 15:
        tmp = _this__u8e3s4.ee3_1;
        break;
      case 16:
        tmp = _this__u8e3s4.fe3_1;
        break;
      case 46:
        tmp = _this__u8e3s4.ge3_1;
        break;
      case 47:
        tmp = _this__u8e3s4.he3_1;
        break;
      case 21:
        tmp = _this__u8e3s4.ie3_1;
        break;
      case 22:
        tmp = _this__u8e3s4.je3_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function lightColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest, surfaceDim, primaryFixed, primaryFixedDim, onPrimaryFixed, onPrimaryFixedVariant, secondaryFixed, secondaryFixedDim, onSecondaryFixed, onSecondaryFixedVariant, tertiaryFixed, tertiaryFixedDim, onTertiaryFixed, onTertiaryFixedVariant) {
    primary = primary === VOID ? ColorLightTokens_getInstance().pe8_1 : primary;
    onPrimary = onPrimary === VOID ? ColorLightTokens_getInstance().ze7_1 : onPrimary;
    primaryContainer = primaryContainer === VOID ? ColorLightTokens_getInstance().qe8_1 : primaryContainer;
    onPrimaryContainer = onPrimaryContainer === VOID ? ColorLightTokens_getInstance().ae8_1 : onPrimaryContainer;
    inversePrimary = inversePrimary === VOID ? ColorLightTokens_getInstance().ue7_1 : inversePrimary;
    secondary = secondary === VOID ? ColorLightTokens_getInstance().ue8_1 : secondary;
    onSecondary = onSecondary === VOID ? ColorLightTokens_getInstance().de8_1 : onSecondary;
    secondaryContainer = secondaryContainer === VOID ? ColorLightTokens_getInstance().ve8_1 : secondaryContainer;
    onSecondaryContainer = onSecondaryContainer === VOID ? ColorLightTokens_getInstance().ee8_1 : onSecondaryContainer;
    tertiary = tertiary === VOID ? ColorLightTokens_getInstance().ie9_1 : tertiary;
    onTertiary = onTertiary === VOID ? ColorLightTokens_getInstance().je8_1 : onTertiary;
    tertiaryContainer = tertiaryContainer === VOID ? ColorLightTokens_getInstance().je9_1 : tertiaryContainer;
    onTertiaryContainer = onTertiaryContainer === VOID ? ColorLightTokens_getInstance().ke8_1 : onTertiaryContainer;
    background = background === VOID ? ColorLightTokens_getInstance().qe7_1 : background;
    onBackground = onBackground === VOID ? ColorLightTokens_getInstance().we7_1 : onBackground;
    surface = surface === VOID ? ColorLightTokens_getInstance().ye8_1 : surface;
    onSurface = onSurface === VOID ? ColorLightTokens_getInstance().he8_1 : onSurface;
    surfaceVariant = surfaceVariant === VOID ? ColorLightTokens_getInstance().he9_1 : surfaceVariant;
    onSurfaceVariant = onSurfaceVariant === VOID ? ColorLightTokens_getInstance().ie8_1 : onSurfaceVariant;
    surfaceTint = surfaceTint === VOID ? primary : surfaceTint;
    inverseSurface = inverseSurface === VOID ? ColorLightTokens_getInstance().ve7_1 : inverseSurface;
    inverseOnSurface = inverseOnSurface === VOID ? ColorLightTokens_getInstance().te7_1 : inverseOnSurface;
    error = error === VOID ? ColorLightTokens_getInstance().re7_1 : error;
    onError = onError === VOID ? ColorLightTokens_getInstance().xe7_1 : onError;
    errorContainer = errorContainer === VOID ? ColorLightTokens_getInstance().se7_1 : errorContainer;
    onErrorContainer = onErrorContainer === VOID ? ColorLightTokens_getInstance().ye7_1 : onErrorContainer;
    outline = outline === VOID ? ColorLightTokens_getInstance().ne8_1 : outline;
    outlineVariant = outlineVariant === VOID ? ColorLightTokens_getInstance().oe8_1 : outlineVariant;
    scrim = scrim === VOID ? ColorLightTokens_getInstance().te8_1 : scrim;
    surfaceBright = surfaceBright === VOID ? ColorLightTokens_getInstance().ze8_1 : surfaceBright;
    surfaceContainer = surfaceContainer === VOID ? ColorLightTokens_getInstance().ae9_1 : surfaceContainer;
    surfaceContainerHigh = surfaceContainerHigh === VOID ? ColorLightTokens_getInstance().be9_1 : surfaceContainerHigh;
    surfaceContainerHighest = surfaceContainerHighest === VOID ? ColorLightTokens_getInstance().ce9_1 : surfaceContainerHighest;
    surfaceContainerLow = surfaceContainerLow === VOID ? ColorLightTokens_getInstance().de9_1 : surfaceContainerLow;
    surfaceContainerLowest = surfaceContainerLowest === VOID ? ColorLightTokens_getInstance().ee9_1 : surfaceContainerLowest;
    surfaceDim = surfaceDim === VOID ? ColorLightTokens_getInstance().fe9_1 : surfaceDim;
    primaryFixed = primaryFixed === VOID ? ColorLightTokens_getInstance().re8_1 : primaryFixed;
    primaryFixedDim = primaryFixedDim === VOID ? ColorLightTokens_getInstance().se8_1 : primaryFixedDim;
    onPrimaryFixed = onPrimaryFixed === VOID ? ColorLightTokens_getInstance().be8_1 : onPrimaryFixed;
    onPrimaryFixedVariant = onPrimaryFixedVariant === VOID ? ColorLightTokens_getInstance().ce8_1 : onPrimaryFixedVariant;
    secondaryFixed = secondaryFixed === VOID ? ColorLightTokens_getInstance().we8_1 : secondaryFixed;
    secondaryFixedDim = secondaryFixedDim === VOID ? ColorLightTokens_getInstance().xe8_1 : secondaryFixedDim;
    onSecondaryFixed = onSecondaryFixed === VOID ? ColorLightTokens_getInstance().fe8_1 : onSecondaryFixed;
    onSecondaryFixedVariant = onSecondaryFixedVariant === VOID ? ColorLightTokens_getInstance().ge8_1 : onSecondaryFixedVariant;
    tertiaryFixed = tertiaryFixed === VOID ? ColorLightTokens_getInstance().ke9_1 : tertiaryFixed;
    tertiaryFixedDim = tertiaryFixedDim === VOID ? ColorLightTokens_getInstance().le9_1 : tertiaryFixedDim;
    onTertiaryFixed = onTertiaryFixed === VOID ? ColorLightTokens_getInstance().le8_1 : onTertiaryFixed;
    onTertiaryFixedVariant = onTertiaryFixedVariant === VOID ? ColorLightTokens_getInstance().me8_1 : onTertiaryFixedVariant;
    _init_properties_ColorScheme_kt__xhtsty();
    return new ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceDim, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest, primaryFixed, primaryFixedDim, onPrimaryFixed, onPrimaryFixedVariant, secondaryFixed, secondaryFixedDim, onSecondaryFixed, onSecondaryFixedVariant, tertiaryFixed, tertiaryFixedDim, onTertiaryFixed, onTertiaryFixedVariant);
  }
  function contentColorFor(_this__u8e3s4, backgroundColor) {
    _init_properties_ColorScheme_kt__xhtsty();
    return equals(backgroundColor, _this__u8e3s4.oe1_1) ? _this__u8e3s4.pe1_1 : equals(backgroundColor, _this__u8e3s4.te1_1) ? _this__u8e3s4.ue1_1 : equals(backgroundColor, _this__u8e3s4.xe1_1) ? _this__u8e3s4.ye1_1 : equals(backgroundColor, _this__u8e3s4.be2_1) ? _this__u8e3s4.ce2_1 : equals(backgroundColor, _this__u8e3s4.ke2_1) ? _this__u8e3s4.le2_1 : equals(backgroundColor, _this__u8e3s4.qe1_1) ? _this__u8e3s4.re1_1 : equals(backgroundColor, _this__u8e3s4.ve1_1) ? _this__u8e3s4.we1_1 : equals(backgroundColor, _this__u8e3s4.ze1_1) ? _this__u8e3s4.ae2_1 : equals(backgroundColor, _this__u8e3s4.me2_1) ? _this__u8e3s4.ne2_1 : equals(backgroundColor, _this__u8e3s4.ie2_1) ? _this__u8e3s4.je2_1 : equals(backgroundColor, _this__u8e3s4.de2_1) ? _this__u8e3s4.ee2_1 : equals(backgroundColor, _this__u8e3s4.fe2_1) ? _this__u8e3s4.ge2_1 : equals(backgroundColor, _this__u8e3s4.re2_1) ? _this__u8e3s4.ee2_1 : equals(backgroundColor, _this__u8e3s4.te2_1) ? _this__u8e3s4.ee2_1 : equals(backgroundColor, _this__u8e3s4.ue2_1) ? _this__u8e3s4.ee2_1 : equals(backgroundColor, _this__u8e3s4.ve2_1) ? _this__u8e3s4.ee2_1 : equals(backgroundColor, _this__u8e3s4.we2_1) ? _this__u8e3s4.ee2_1 : equals(backgroundColor, _this__u8e3s4.xe2_1) ? _this__u8e3s4.ee2_1 : equals(backgroundColor, _this__u8e3s4.se2_1) ? _this__u8e3s4.ee2_1 : equals(backgroundColor, _this__u8e3s4.ye2_1) ? _this__u8e3s4.ae3_1 : equals(backgroundColor, _this__u8e3s4.ze2_1) ? _this__u8e3s4.ae3_1 : equals(backgroundColor, _this__u8e3s4.ce3_1) ? _this__u8e3s4.ee3_1 : equals(backgroundColor, _this__u8e3s4.de3_1) ? _this__u8e3s4.ee3_1 : equals(backgroundColor, _this__u8e3s4.ge3_1) ? _this__u8e3s4.ie3_1 : equals(backgroundColor, _this__u8e3s4.he3_1) ? _this__u8e3s4.ie3_1 : Companion_getInstance_1().y4h_1;
  }
  function contentColorFor_0(backgroundColor, $composer, $changed) {
    _init_properties_ColorScheme_kt__xhtsty();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 509589638, 'C(contentColorFor)P(0:c#ui.graphics.Color)1130@52492L11:ColorScheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(509589638, $changed, -1, 'androidx.compose.material3.contentColorFor (ColorScheme.kt:1130)');
    }
    $composer_0.a20(89373914);
    sourceInformation($composer_0, '*1131@52576L7');
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var this_0 = contentColorFor(MaterialTheme_instance.le1($composer_0, 6), backgroundColor);
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = this_0;
    } else {
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_1 = get_LocalContentColor();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.g21(this_1);
      sourceInformationMarkerEnd($composer_1);
      tmp = tmp0.f4l_1;
    }
    var tmp1_group = tmp;
    $composer_0.b20();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function applyTonalElevation(_this__u8e3s4, backgroundColor, elevation, $composer, $changed) {
    _init_properties_ColorScheme_kt__xhtsty();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1610977682, 'C(applyTonalElevation)P(0:c#ui.graphics.Color,1:c#ui.unit.Dp)1561@72254L7:ColorScheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1610977682, $changed, -1, 'androidx.compose.material3.applyTonalElevation (ColorScheme.kt:1560)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalTonalElevationEnabled();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g21(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tonalElevationEnabled = tmp0;
    var tmp;
    if (equals(backgroundColor, _this__u8e3s4.de2_1) && tonalElevationEnabled) {
      tmp = surfaceColorAtElevation(_this__u8e3s4, elevation);
    } else {
      tmp = backgroundColor;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  }
  function surfaceColorAtElevation(_this__u8e3s4, elevation) {
    _init_properties_ColorScheme_kt__xhtsty();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (equals(elevation, tmp$ret$0))
      return _this__u8e3s4.de2_1;
    // Inline function 'kotlin.math.ln' call
    var x = _Dp___get_value__impl__geb1vb(elevation) + 1;
    var alpha = (4.5 * Math.log(x) + 2.0) / 100.0;
    return compositeOver(Color__copy$default_impl_ectz3s(_this__u8e3s4.he2_1, alpha), _this__u8e3s4.de2_1);
  }
  function LocalColorScheme$lambda() {
    _init_properties_ColorScheme_kt__xhtsty();
    return lightColorScheme();
  }
  function LocalTonalElevationEnabled$lambda() {
    _init_properties_ColorScheme_kt__xhtsty();
    return true;
  }
  var properties_initialized_ColorScheme_kt_ox8mco;
  function _init_properties_ColorScheme_kt__xhtsty() {
    if (!properties_initialized_ColorScheme_kt_ox8mco) {
      properties_initialized_ColorScheme_kt_ox8mco = true;
      LocalColorScheme = staticCompositionLocalOf(LocalColorScheme$lambda);
      LocalTonalElevationEnabled = staticCompositionLocalOf(LocalTonalElevationEnabled$lambda);
      androidx_compose_material3_ColorScheme$stable = 0;
    }
  }
  function get_LocalContentColor() {
    _init_properties_ContentColor_kt__5mda8a();
    return LocalContentColor;
  }
  var LocalContentColor;
  function LocalContentColor$lambda() {
    _init_properties_ContentColor_kt__5mda8a();
    return new Color(Companion_getInstance_1().m4h_1);
  }
  var properties_initialized_ContentColor_kt_sc8rw;
  function _init_properties_ContentColor_kt__5mda8a() {
    if (!properties_initialized_ContentColor_kt_sc8rw) {
      properties_initialized_ContentColor_kt_sc8rw = true;
      LocalContentColor = compositionLocalOf(VOID, LocalContentColor$lambda);
    }
  }
  var androidx_compose_material3_DividerDefaults$stable;
  var androidx_compose_material3_DragHandleColors$stable;
  var androidx_compose_material3_DragHandleShapes$stable;
  var androidx_compose_material3_DragHandleSizes$stable;
  var androidx_compose_material3_VerticalDragHandleDefaults$stable;
  function get_DefaultIconSizeModifier() {
    _init_properties_Icon_kt__pgqcnt();
    return DefaultIconSizeModifier;
  }
  var DefaultIconSizeModifier;
  function Icon(painter, contentDescription, modifier, tint, $composer, $changed, $default) {
    _init_properties_Icon_kt__pgqcnt();
    var modifier_0 = {_v: modifier};
    var tint_0 = {_v: new Color(tint)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.g20(-2142239481);
    sourceInformation($composer_0, 'C(Icon)P(2!,3:c#ui.graphics.Color)144@6871L82,154@7215L217:Icon.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.b21(painter) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w20(contentDescription) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.w20(modifier_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | (($default & 8) === 0 && $composer_0.a21(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(tint_0._v.f4l_1))) ? 2048 : 1024);
    if ($composer_0.d21(!(($dirty & 1171) === 1170), $dirty & 1)) {
      $composer_0.e20();
      sourceInformation($composer_0, '141@6828L7');
      if (($changed & 1) === 0 || $composer_0.w1z()) {
        if (!(($default & 4) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 8) === 0)) {
          var tmp0 = get_LocalContentColor();
          // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
          var $composer_1 = $composer_0;
          sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
          var tmp0_0 = $composer_1.g21(tmp0);
          sourceInformationMarkerEnd($composer_1);
          var tmp$ret$0 = tmp0_0.f4l_1;
          tint_0._v = new Color(tmp$ret$0);
          $dirty = $dirty & -7169;
        }
      } else {
        $composer_0.l20();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.f20();
      if (isTraceInProgress()) {
        traceEventStart(-2142239481, $dirty, -1, 'androidx.compose.material3.Icon (Icon.kt:142)');
      }
      sourceInformationMarkerStart($composer_0, -1402800647, 'CC(remember):Icon.kt#9igjgp');
      var tmp0_1 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 7168 ^ 3072) > 2048 && $composer_0.a21(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(tint_0._v.f4l_1))) || ($dirty & 3072) === 2048;
      // Inline function 'kotlin.let' call
      var it = tmp0_1.u20();
      var tmp;
      if (invalid || it === Companion_getInstance_2().s1z_1) {
        var value = tint_0._v.equals(new Color(Companion_getInstance_1().y4h_1)) ? null : Companion_instance_1.q4l(tint_0._v.f4l_1);
        tmp0_1.v20(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp0_group = tmp;
      sourceInformationMarkerEnd($composer_0);
      var colorFilter = tmp0_group;
      var tmp_0;
      if (!(contentDescription == null)) {
        $composer_0.a20(-537002883);
        sourceInformation($composer_0, '147@7047L115');
        var tmp_1 = Companion_instance;
        sourceInformationMarkerStart($composer_0, -1402794982, 'CC(remember):Icon.kt#9igjgp');
        var tmp0_2 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = ($dirty & 112) === 32;
        // Inline function 'kotlin.let' call
        var it_0 = tmp0_2.u20();
        var tmp_2;
        if (invalid_0 || it_0 === Companion_getInstance_2().s1z_1) {
          var value_0 = Icon$lambda(contentDescription);
          tmp0_2.v20(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp1_group = tmp_2;
        sourceInformationMarkerEnd($composer_0);
        var tmp2_group = semantics(tmp_1, VOID, tmp1_group);
        $composer_0.b20();
        tmp_0 = tmp2_group;
      } else {
        $composer_0.a20(-536844101);
        $composer_0.b20();
        tmp_0 = Companion_instance;
      }
      var semantics_0 = tmp_0;
      var tmp0_$receiver = defaultSizeFor(toolingGraphicsLayer(modifier_0._v), painter);
      var tmp1_contentScale = Companion_getInstance_7().q6a_1;
      Box(paint(tmp0_$receiver, painter, VOID, VOID, tmp1_contentScale, VOID, colorFilter).y61(semantics_0), $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    var tmp3_safe_receiver = $composer_0.h20();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.k2m(Icon$lambda_0(painter, contentDescription, modifier_0, tint_0, $changed, $default));
    }
  }
  function defaultSizeFor(_this__u8e3s4, painter) {
    _init_properties_Icon_kt__pgqcnt();
    var tmp;
    if (equals(painter.t4x(), Companion_getInstance_8().k3q_1) || isInfinite_0(painter.t4x())) {
      tmp = get_DefaultIconSizeModifier();
    } else {
      tmp = Companion_instance;
    }
    return _this__u8e3s4.y61(tmp);
  }
  function isInfinite_0(_this__u8e3s4) {
    _init_properties_Icon_kt__pgqcnt();
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp$ret$0 = floatFromBits(bits);
    if (isInfinite(tmp$ret$0)) {
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      var tmp$ret$4 = floatFromBits(bits_0);
      tmp = isInfinite(tmp$ret$4);
    } else {
      tmp = false;
    }
    return tmp;
  }
  function Icon$lambda($contentDescription) {
    return function ($this$semantics) {
      set_contentDescription($this$semantics, $contentDescription);
      set_role($this$semantics, Companion_getInstance_9().p8n_1);
      return Unit_instance;
    };
  }
  function Icon$lambda_0($painter, $contentDescription, $modifier, $tint, $$changed, $$default) {
    return function ($composer, $force) {
      Icon($painter, $contentDescription, $modifier._v, $tint._v.f4l_1, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Icon_kt_u3g1lx;
  function _init_properties_Icon_kt__pgqcnt() {
    if (!properties_initialized_Icon_kt_u3g1lx) {
      properties_initialized_Icon_kt_u3g1lx = true;
      DefaultIconSizeModifier = size(Companion_instance, SmallIconButtonTokens_getInstance().re9_1);
    }
  }
  var androidx_compose_material3_IconButtonColors$stable;
  var androidx_compose_material3_IconToggleButtonColors$stable;
  var androidx_compose_material3_IconButtonShapes$stable;
  var androidx_compose_material3_IconToggleButtonShapes$stable;
  function IconButtonColors(containerColor, contentColor, disabledContainerColor, disabledContentColor) {
    this.aea_1 = containerColor;
    this.bea_1 = contentColor;
    this.cea_1 = disabledContainerColor;
    this.dea_1 = disabledContentColor;
  }
  protoOf(IconButtonColors).eea = function (containerColor, contentColor, disabledContainerColor, disabledContentColor) {
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(containerColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = containerColor;
    } else {
      tmp = this.aea_1;
    }
    var tmp_0 = tmp;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_1;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(contentColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_1 = contentColor;
    } else {
      tmp_1 = this.bea_1;
    }
    var tmp_2 = tmp_1;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_3;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(disabledContainerColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_3 = disabledContainerColor;
    } else {
      tmp_3 = this.cea_1;
    }
    var tmp_4 = tmp_3;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_5;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(disabledContentColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_5 = disabledContentColor;
    } else {
      tmp_5 = this.dea_1;
    }
    var tmp$ret$9 = tmp_5;
    return new IconButtonColors(tmp_0, tmp_2, tmp_4, tmp$ret$9);
  };
  protoOf(IconButtonColors).fea = function (containerColor, contentColor, disabledContainerColor, disabledContentColor, $super) {
    containerColor = containerColor === VOID ? this.aea_1 : containerColor;
    contentColor = contentColor === VOID ? this.bea_1 : contentColor;
    disabledContainerColor = disabledContainerColor === VOID ? this.cea_1 : disabledContainerColor;
    disabledContentColor = disabledContentColor === VOID ? this.dea_1 : disabledContentColor;
    return $super === VOID ? this.eea(containerColor, contentColor, disabledContainerColor, disabledContentColor) : $super.eea.call(this, new Color(containerColor), new Color(contentColor), new Color(disabledContainerColor), new Color(disabledContentColor));
  };
  protoOf(IconButtonColors).gea = function (enabled) {
    return enabled ? this.aea_1 : this.cea_1;
  };
  protoOf(IconButtonColors).hea = function (enabled) {
    return enabled ? this.bea_1 : this.dea_1;
  };
  protoOf(IconButtonColors).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof IconButtonColors);
    }
    if (tmp)
      return false;
    if (!equals(this.aea_1, other.aea_1))
      return false;
    if (!equals(this.bea_1, other.bea_1))
      return false;
    if (!equals(this.cea_1, other.cea_1))
      return false;
    if (!equals(this.dea_1, other.dea_1))
      return false;
    return true;
  };
  protoOf(IconButtonColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.aea_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.bea_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.cea_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.dea_1) | 0;
    return result;
  };
  function IconButton(onClick, modifier, enabled, colors, interactionSource, shape, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var colors_0 = {_v: colors};
    var interactionSource_0 = {_v: interactionSource};
    var shape_0 = {_v: shape};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.g20(1413012038);
    sourceInformation($composer_0, 'C(IconButton)P(5,4,2!1,3,6)166@7367L226:IconButton.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.b21(onClick) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w20(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.x20(enabled_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | (($default & 8) === 0 && $composer_0.w20(colors_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.w20(interactionSource_0._v) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | (($default & 32) === 0 && $composer_0.w20(shape_0._v) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.b21(content) ? 1048576 : 524288);
    if ($composer_0.d21(!(($dirty & 599187) === 599186), $dirty & 1)) {
      $composer_0.e20();
      sourceInformation($composer_0, '161@7192L18,163@7307L13');
      if (($changed & 1) === 0 || $composer_0.w1z()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 4) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 8) === 0)) {
          colors_0._v = IconButtonDefaults_getInstance().nea($composer_0, 6);
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          interactionSource_0._v = null;
        }
        if (!(($default & 32) === 0)) {
          shape_0._v = IconButtonDefaults_getInstance().oea($composer_0, 6);
          $dirty = $dirty & -458753;
        }
      } else {
        $composer_0.l20();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
      }
      $composer_0.f20();
      if (isTraceInProgress()) {
        traceEventStart(1413012038, $dirty, -1, 'androidx.compose.material3.IconButton (IconButton.kt:166)');
      }
      IconButtonImpl(modifier_0._v, onClick, enabled_0._v, shape_0._v, colors_0._v, interactionSource_0._v, content, $composer_0, 14 & $dirty >> 3 | 112 & $dirty << 3 | 896 & $dirty | 7168 & $dirty >> 6 | 57344 & $dirty << 3 | 458752 & $dirty << 3 | 3670016 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    var tmp0_safe_receiver = $composer_0.h20();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k2m(IconButton$lambda(onClick, modifier_0, enabled_0, colors_0, interactionSource_0, shape_0, content, $changed, $default));
    }
  }
  function IconButtonImpl(modifier, onClick, enabled, shape, colors, interactionSource, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.g20(-1134296466);
    sourceInformation($composer_0, 'C(IconButtonImpl)P(4,5,2,6!1,3)245@10679L779:IconButton.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w20(modifier) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.b21(onClick) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.x20(enabled) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.w20(shape) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.w20(colors) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.w20(interactionSource) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.b21(content) ? 1048576 : 524288);
    if ($composer_0.d21(!(($dirty & 599187) === 599186), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1134296466, $dirty, -1, 'androidx.compose.material3.IconButtonImpl (IconButton.kt:242)');
      }
      var tmp;
      if (interactionSource == null) {
        $composer_0.a20(976976045);
        sourceInformation($composer_0, '244@10635L39');
        sourceInformationMarkerStart($composer_0, 862799349, 'CC(remember):IconButton.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        var it = this_0.u20();
        var tmp_0;
        if (false || it === Companion_getInstance_2().s1z_1) {
          var value = funMutableInteractionSource();
          this_0.v20(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp0_group = tmp_0;
        sourceInformationMarkerEnd($composer_0);
        $composer_0.b20();
        tmp = tmp0_group;
      } else {
        $composer_0.a20(862798698);
        $composer_0.b20();
        tmp = interactionSource;
      }
      var interactionSource_0 = tmp;
      var tmp1_$receiver = background(clip(size_0(minimumInteractiveComponentSize(modifier), IconButtonDefaults_getInstance().pea()), shape), colors.gea(enabled), shape);
      var tmp2_role = Companion_getInstance_9().k8n_1;
      var tmp3_indication = ripple();
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_0 = childSemantics(clickable(tmp1_$receiver, interactionSource_0, tmp3_indication, enabled, VOID, tmp2_role, onClick));
      var contentAlignment = Companion_getInstance().l60_1;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1042775818, 'CC(Box)P(2,1,3)71@3424L131:Box.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier_0 = Companion_instance;
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance().h60_1;
      if (!((4 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_1 = modifier_0;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1159599143, 'CC(Layout)P(!1,2)81@3355L27,84@3521L416:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_1 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.f21();
      var materialized = materialize($composer_2, modifier_1);
      var tmp0 = Companion_getInstance_0().d7s_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
      var tmp_1 = $composer_3.t1z();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_3.n20();
      if ($composer_3.u1z()) {
        $composer_3.o20(tmp0);
      } else {
        $composer_3.p20();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_0().i7s_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_0().h7s_1);
      Updater__init_impl_uaeges($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_0().l7s_1);
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_0().m7s_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_0().f7s_1);
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, 1833054614, 'C72@3469L9:Box.kt#2w3rfo');
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -414233073, 'C263@11368L84:IconButton.kt#uh7d8r');
      var contentColor = colors.hea(enabled);
      CompositionLocalProvider(get_LocalContentColor().e2m(new Color(contentColor)), content, $composer_5, androidx_compose_runtime_ProvidedValue$stableprop_getter() | 112 & $dirty >> 15);
      sourceInformationMarkerEnd($composer_5);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.q20();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    var tmp2_safe_receiver = $composer_0.h20();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.k2m(IconButtonImpl$lambda(modifier, onClick, enabled, shape, colors, interactionSource, content, $changed));
    }
  }
  function IconButton$lambda($onClick, $modifier, $enabled, $colors, $interactionSource, $shape, $content, $$changed, $$default) {
    return function ($composer, $force) {
      IconButton($onClick, $modifier._v, $enabled._v, $colors._v, $interactionSource._v, $shape._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function IconButtonImpl$lambda($modifier, $onClick, $enabled, $shape, $colors, $interactionSource, $content, $$changed) {
    return function ($composer, $force) {
      IconButtonImpl($modifier, $onClick, $enabled, $shape, $colors, $interactionSource, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var androidx_compose_material3_IconButtonDefaults$stable;
  function _IconButtonWidthOption___init__impl__2iiqjb(value) {
    return value;
  }
  function Companion() {
    Companion_instance_2 = this;
    this.qea_1 = _IconButtonWidthOption___init__impl__2iiqjb(0);
    this.rea_1 = _IconButtonWidthOption___init__impl__2iiqjb(1);
    this.sea_1 = _IconButtonWidthOption___init__impl__2iiqjb(2);
  }
  var Companion_instance_2;
  function Companion_getInstance_17() {
    if (Companion_instance_2 == null)
      new Companion();
    return Companion_instance_2;
  }
  function IconButtonWidthOption__toString_impl_nnknkh($this) {
    return $this === Companion_getInstance_17().qea_1 ? 'Narrow' : $this === Companion_getInstance_17().rea_1 ? 'Uniform' : $this === Companion_getInstance_17().sea_1 ? 'Wide' : 'Unknown';
  }
  function IconButtonWidthOption__hashCode_impl_1weqrm($this) {
    return $this;
  }
  function IconButtonWidthOption__equals_impl_z8c0u($this, other) {
    if (!(other instanceof IconButtonWidthOption))
      return false;
    if (!($this === other.tea_1))
      return false;
    return true;
  }
  function IconButtonWidthOption(value) {
    Companion_getInstance_17();
    this.tea_1 = value;
  }
  protoOf(IconButtonWidthOption).toString = function () {
    return IconButtonWidthOption__toString_impl_nnknkh(this.tea_1);
  };
  protoOf(IconButtonWidthOption).hashCode = function () {
    return IconButtonWidthOption__hashCode_impl_1weqrm(this.tea_1);
  };
  protoOf(IconButtonWidthOption).equals = function (other) {
    return IconButtonWidthOption__equals_impl_z8c0u(this.tea_1, other);
  };
  function IconButtonDefaults() {
    IconButtonDefaults_instance = this;
    this.iea_1 = XSmallIconButtonTokens_getInstance().zea_1;
    this.jea_1 = SmallIconButtonTokens_getInstance().re9_1;
    this.kea_1 = MediumIconButtonTokens_getInstance().neb_1;
    this.lea_1 = LargeIconButtonTokens_getInstance().zeb_1;
    this.mea_1 = XLargeIconButtonTokens_getInstance().pec_1;
  }
  protoOf(IconButtonDefaults).nea = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1037266503, 'C(iconButtonColors)49@2138L7,50@2181L11:IconButtonDefaults.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1037266503, $changed, -1, 'androidx.compose.material3.IconButtonDefaults.iconButtonColors (IconButtonDefaults.kt:48)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalContentColor();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g21(this_0);
    sourceInformationMarkerEnd($composer_1);
    var contentColor = tmp0.f4l_1;
    var colors = this.yec(MaterialTheme_instance.le1($composer_0, 6), contentColor);
    var tmp;
    if (equals(colors.bea_1, contentColor)) {
      tmp = colors;
    } else {
      tmp = colors.fea(VOID, contentColor, VOID, Color__copy$default_impl_ectz3s(contentColor, StandardIconButtonTokens_getInstance().aed_1));
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  };
  protoOf(IconButtonDefaults).ned = function (containerColor, contentColor, disabledContainerColor, disabledContentColor, $composer, $changed, $default) {
    var containerColor_0 = containerColor;
    var contentColor_0 = contentColor;
    var disabledContainerColor_0 = disabledContainerColor;
    var disabledContentColor_0 = disabledContentColor;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1639168605, 'C(iconButtonColors)P(0:c#ui.graphics.Color,1:c#ui.graphics.Color,2:c#ui.graphics.Color,3:c#ui.graphics.Color)79@3481L7,84@3716L11,85@3783L7:IconButtonDefaults.kt#uh7d8r');
    if (!(($default & 1) === 0))
      containerColor_0 = Companion_getInstance_1().y4h_1;
    if (!(($default & 2) === 0)) {
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_0 = get_LocalContentColor();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.g21(this_0);
      sourceInformationMarkerEnd($composer_1);
      contentColor_0 = tmp0.f4l_1;
    }
    if (!(($default & 4) === 0))
      disabledContainerColor_0 = Companion_getInstance_1().y4h_1;
    if (!(($default & 8) === 0))
      disabledContentColor_0 = Color__copy$default_impl_ectz3s(contentColor_0, StandardIconButtonTokens_getInstance().aed_1);
    if (isTraceInProgress()) {
      traceEventStart(-1639168605, $changed, -1, 'androidx.compose.material3.IconButtonDefaults.iconButtonColors (IconButtonDefaults.kt:84)');
    }
    var tmp = MaterialTheme_instance.le1($composer_0, 6);
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_1 = get_LocalContentColor();
    var $composer_2 = $composer_0;
    sourceInformationMarkerStart($composer_2, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0_0 = $composer_2.g21(this_1);
    sourceInformationMarkerEnd($composer_2);
    var tmp$ret$1 = tmp0_0.f4l_1;
    var tmp0_1 = this.yec(tmp, tmp$ret$1).eea(containerColor_0, contentColor_0, disabledContainerColor_0, disabledContentColor_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_1;
  };
  protoOf(IconButtonDefaults).yec = function (_this__u8e3s4, localContentColor) {
    var tmp0_elvis_lhs = _this__u8e3s4.de4_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.also' call
      var this_0 = new IconButtonColors(Companion_getInstance_1().x4h_1, localContentColor, Companion_getInstance_1().x4h_1, Color__copy$default_impl_ectz3s(localContentColor, StandardIconButtonTokens_getInstance().aed_1));
      _this__u8e3s4.de4_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(IconButtonDefaults).oea = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -377108005, 'C(<get-standardShape>)855@40294L5:IconButtonDefaults.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-377108005, $changed, -1, 'androidx.compose.material3.IconButtonDefaults.<get-standardShape> (IconButtonDefaults.kt:855)');
    }
    var tmp0 = get_value(SmallIconButtonTokens_getInstance().ne9_1, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(IconButtonDefaults).oed = function (widthOption) {
    var tmp;
    if (widthOption === Companion_getInstance_17().qea_1) {
      var tmp0 = SmallIconButtonTokens_getInstance().se9_1;
      // Inline function 'androidx.compose.ui.unit.Dp.plus' call
      var other = SmallIconButtonTokens_getInstance().te9_1;
      tmp = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0) + _Dp___get_value__impl__geb1vb(other));
    } else if (widthOption === Companion_getInstance_17().rea_1) {
      var tmp0_0 = SmallIconButtonTokens_getInstance().pe9_1;
      // Inline function 'androidx.compose.ui.unit.Dp.plus' call
      var other_0 = SmallIconButtonTokens_getInstance().pe9_1;
      tmp = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_0) + _Dp___get_value__impl__geb1vb(other_0));
    } else if (widthOption === Companion_getInstance_17().sea_1) {
      var tmp0_1 = SmallIconButtonTokens_getInstance().ye9_1;
      // Inline function 'androidx.compose.ui.unit.Dp.plus' call
      var other_1 = SmallIconButtonTokens_getInstance().ze9_1;
      tmp = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_1) + _Dp___get_value__impl__geb1vb(other_1));
    } else {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    }
    var horizontalSpace = tmp;
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    var this_0 = SmallIconButtonTokens_getInstance().re9_1;
    var tmp$ret$4 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(this_0) + _Dp___get_value__impl__geb1vb(horizontalSpace));
    return DpSize(tmp$ret$4, SmallIconButtonTokens_getInstance().me9_1);
  };
  protoOf(IconButtonDefaults).pea = function (widthOption, $super) {
    widthOption = widthOption === VOID ? Companion_getInstance_17().rea_1 : widthOption;
    return $super === VOID ? this.oed(widthOption) : $super.oed.call(this, new IconButtonWidthOption(widthOption)).o3r_1;
  };
  var IconButtonDefaults_instance;
  function IconButtonDefaults_getInstance() {
    if (IconButtonDefaults_instance == null)
      new IconButtonDefaults();
    return IconButtonDefaults_instance;
  }
  function androidx_compose_material3_IconButtonDefaults$stableprop_getter() {
    return androidx_compose_material3_IconButtonDefaults$stable;
  }
  function get_MinimumInteractiveTopAlignmentLine() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return MinimumInteractiveTopAlignmentLine;
  }
  var MinimumInteractiveTopAlignmentLine;
  function get_MinimumInteractiveLeftAlignmentLine() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return MinimumInteractiveLeftAlignmentLine;
  }
  var MinimumInteractiveLeftAlignmentLine;
  var LocalMinimumInteractiveComponentEnforcement;
  function get_LocalMinimumInteractiveComponentSize() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return LocalMinimumInteractiveComponentSize;
  }
  var LocalMinimumInteractiveComponentSize;
  var androidx_compose_material3_MinimumInteractiveModifier$stable;
  var androidx_compose_material3_MinimumInteractiveModifierNode$stable;
  function minimumInteractiveComponentSize(_this__u8e3s4) {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return _this__u8e3s4.y61(MinimumInteractiveModifier_getInstance());
  }
  function MinimumInteractiveModifier() {
    MinimumInteractiveModifier_instance = this;
    ModifierNodeElement.call(this);
  }
  protoOf(MinimumInteractiveModifier).i2n = function () {
    return new MinimumInteractiveModifierNode();
  };
  protoOf(MinimumInteractiveModifier).qed = function (node) {
  };
  protoOf(MinimumInteractiveModifier).t67 = function (node) {
    return this.qed(node instanceof MinimumInteractiveModifierNode ? node : THROW_CCE());
  };
  protoOf(MinimumInteractiveModifier).hashCode = function () {
    return identityHashCode(this);
  };
  protoOf(MinimumInteractiveModifier).equals = function (other) {
    return other === this;
  };
  var MinimumInteractiveModifier_instance;
  function MinimumInteractiveModifier_getInstance() {
    if (MinimumInteractiveModifier_instance == null)
      new MinimumInteractiveModifier();
    return MinimumInteractiveModifier_instance;
  }
  function updateAlignmentLines($this, sizePx, placeable) {
    var cache = getAlignmentLinesCache($this);
    var tmp2 = get_MinimumInteractiveLeftAlignmentLine();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_0 = (sizePx - placeable.d6c_1 | 0) / 2.0;
    var tmp;
    if (isNaN_0(this_0)) {
      tmp = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp = roundToInt(this_0);
    }
    var tmp$ret$0 = tmp;
    // Inline function 'kotlin.collections.set' call
    var value = coerceAtLeast(tmp$ret$0, 0);
    cache.y1(tmp2, value);
    var tmp2_0 = get_MinimumInteractiveTopAlignmentLine();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_1 = (sizePx - placeable.e6c_1 | 0) / 2.0;
    var tmp_0;
    if (isNaN_0(this_1)) {
      tmp_0 = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp_0 = roundToInt(this_1);
    }
    var tmp$ret$3 = tmp_0;
    // Inline function 'kotlin.collections.set' call
    var value_0 = coerceAtLeast(tmp$ret$3, 0);
    cache.y1(tmp2_0, value_0);
  }
  function getAlignmentLinesCache($this) {
    var tmp0_elvis_lhs = $this.fee_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = LinkedHashMap_init_$Create$(2);
      $this.fee_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function MinimumInteractiveModifierNode$measure$lambda($width, $placeable, $height) {
    return function ($this$layout) {
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = ($width - $placeable.d6c_1 | 0) / 2.0;
      var centerX = roundToInt(this_0);
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = ($height - $placeable.e6c_1 | 0) / 2.0;
      var centerY = roundToInt(this_1);
      $this$layout.i7h($placeable, centerX, centerY);
      return Unit_instance;
    };
  }
  function MinimumInteractiveModifierNode() {
    Node.call(this);
    this.fee_1 = null;
  }
  protoOf(MinimumInteractiveModifierNode).b6c = function (_this__u8e3s4, measurable, constraints) {
    var tmp0 = currentValueOf(this, get_LocalMinimumInteractiveComponentSize()).h3r_1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    // Inline function 'androidx.compose.ui.unit.coerceAtLeast' call
    var minimumValue = _Dp___init__impl__ms3zkb(0);
    var size = _Dp___init__impl__ms3zkb(coerceAtLeast_0(_Dp___get_value__impl__geb1vb(tmp0), _Dp___get_value__impl__geb1vb(minimumValue)));
    var placeable = measurable.c6c(constraints);
    var tmp;
    if (this.u62_1) {
      var tmp_0;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      if (!isNaN_0(_Dp___get_value__impl__geb1vb(size))) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$3 = _Dp___init__impl__ms3zkb(0);
        tmp_0 = Dp__compareTo_impl_tlg3dl(size, tmp$ret$3) > 0;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    var enforcement = tmp;
    var tmp_1;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(size))) {
      tmp_1 = _this__u8e3s4.v3q(size);
    } else {
      tmp_1 = 0;
    }
    var sizePx = tmp_1;
    var tmp_2;
    if (enforcement) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var a = placeable.d6c_1;
      tmp_2 = Math.max(a, sizePx);
    } else {
      tmp_2 = placeable.d6c_1;
    }
    var width = tmp_2;
    var tmp_3;
    if (enforcement) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var a_0 = placeable.e6c_1;
      tmp_3 = Math.max(a_0, sizePx);
    } else {
      tmp_3 = placeable.e6c_1;
    }
    var height = tmp_3;
    if (enforcement) {
      updateAlignmentLines(this, sizePx, placeable);
    }
    var tmp0_elvis_lhs = this.fee_1;
    var tmp_4 = tmp0_elvis_lhs == null ? emptyMap() : tmp0_elvis_lhs;
    return _this__u8e3s4.c7f(width, height, tmp_4, MinimumInteractiveModifierNode$measure$lambda(width, placeable, height));
  };
  function min$ref() {
    var l = function (p0, p1) {
      // Inline function 'kotlin.math.min' call
      return Math.min(p0, p1);
    };
    l.callableName = 'min';
    return l;
  }
  function min$ref_0() {
    var l = function (p0, p1) {
      // Inline function 'kotlin.math.min' call
      return Math.min(p0, p1);
    };
    l.callableName = 'min';
    return l;
  }
  function LocalMinimumInteractiveComponentEnforcement$lambda() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return true;
  }
  function LocalMinimumInteractiveComponentSize$lambda() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(48);
    return new Dp(tmp$ret$0);
  }
  var properties_initialized_InteractiveComponentSize_kt_3r58bm;
  function _init_properties_InteractiveComponentSize_kt__58cq2s() {
    if (!properties_initialized_InteractiveComponentSize_kt_3r58bm) {
      properties_initialized_InteractiveComponentSize_kt_3r58bm = true;
      MinimumInteractiveTopAlignmentLine = new HorizontalAlignmentLine(min$ref());
      MinimumInteractiveLeftAlignmentLine = new VerticalAlignmentLine(min$ref_0());
      LocalMinimumInteractiveComponentEnforcement = staticCompositionLocalOf(LocalMinimumInteractiveComponentEnforcement$lambda);
      LocalMinimumInteractiveComponentSize = staticCompositionLocalOf(LocalMinimumInteractiveComponentSize$lambda);
      androidx_compose_material3_MinimumInteractiveModifier$stable = 0;
      androidx_compose_material3_MinimumInteractiveModifierNode$stable = 8;
    }
  }
  var androidx_compose_material3_LoadingIndicatorDefaults$stable;
  var androidx_compose_material3_MaterialShapes$stable;
  var LocalUsingExpressiveTheme;
  function get__localMotionScheme() {
    _init_properties_MaterialTheme_kt__ccmets();
    return _localMotionScheme;
  }
  var _localMotionScheme;
  var androidx_compose_material3_MaterialTheme$stable;
  function MaterialTheme() {
  }
  protoOf(MaterialTheme).le1 = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -561618718, 'C(<get-colorScheme>)122@5381L7:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-561618718, $changed, -1, 'androidx.compose.material3.MaterialTheme.<get-colorScheme> (MaterialTheme.kt:122)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalColorScheme();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g21(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(MaterialTheme).gee = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -942794935, 'C(<get-typography>)130@5667L7:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-942794935, $changed, -1, 'androidx.compose.material3.MaterialTheme.<get-typography> (MaterialTheme.kt:130)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalTypography();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g21(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(MaterialTheme).hee = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 419509830, 'C(<get-shapes>)138@5933L7:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(419509830, $changed, -1, 'androidx.compose.material3.MaterialTheme.<get-shapes> (MaterialTheme.kt:138)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalShapes();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g21(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(MaterialTheme).iee = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -506613891, 'C(<get-motionScheme>)143@6177L7:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-506613891, $changed, -1, 'androidx.compose.material3.MaterialTheme.<get-motionScheme> (MaterialTheme.kt:143)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = this.jee();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g21(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(MaterialTheme).jee = function () {
    return get__localMotionScheme();
  };
  var MaterialTheme_instance;
  function MaterialTheme_getInstance() {
    return MaterialTheme_instance;
  }
  function androidx_compose_material3_MaterialTheme$stableprop_getter() {
    return androidx_compose_material3_MaterialTheme$stable;
  }
  function MaterialTheme_0(colorScheme, shapes, typography, content, $composer, $changed, $default) {
    _init_properties_MaterialTheme_kt__ccmets();
    var colorScheme_0 = {_v: colorScheme};
    var shapes_0 = {_v: shapes};
    var typography_0 = {_v: typography};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.g20(-449719819);
    sourceInformation($composer_0, 'C(MaterialTheme)P(!1,2,3)61@2821L12,59@2734L191:MaterialTheme.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && $composer_0.w20(colorScheme_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.w20(shapes_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && $composer_0.w20(typography_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.b21(content) ? 2048 : 1024);
    if ($composer_0.d21(!(($dirty & 1171) === 1170), $dirty & 1)) {
      $composer_0.e20();
      sourceInformation($composer_0, '54@2578L11,55@2626L6,56@2677L10');
      if (($changed & 1) === 0 || $composer_0.w1z()) {
        if (!(($default & 1) === 0)) {
          colorScheme_0._v = MaterialTheme_instance.le1($composer_0, 6);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          shapes_0._v = MaterialTheme_instance.hee($composer_0, 6);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          typography_0._v = MaterialTheme_instance.gee($composer_0, 6);
          $dirty = $dirty & -897;
        }
      } else {
        $composer_0.l20();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.f20();
      if (isTraceInProgress()) {
        traceEventStart(-449719819, $dirty, -1, 'androidx.compose.material3.MaterialTheme (MaterialTheme.kt:59)');
      }
      MaterialTheme_1(colorScheme_0._v, MaterialTheme_instance.iee($composer_0, 6), shapes_0._v, typography_0._v, content, $composer_0, 14 & $dirty | 896 & $dirty << 3 | 7168 & $dirty << 3 | 57344 & $dirty << 3, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    var tmp0_safe_receiver = $composer_0.h20();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k2m(MaterialTheme$lambda(colorScheme_0, shapes_0, typography_0, content, $changed, $default));
    }
  }
  function MaterialTheme_1(colorScheme, motionScheme, shapes, typography, content, $composer, $changed, $default) {
    _init_properties_MaterialTheme_kt__ccmets();
    var colorScheme_0 = {_v: colorScheme};
    var motionScheme_0 = {_v: motionScheme};
    var shapes_0 = {_v: shapes};
    var typography_0 = {_v: typography};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.g20(904511636);
    sourceInformation($composer_0, 'C(MaterialTheme)P(!1,2,3,4)98@4507L40,106@4873L81,99@4552L402:MaterialTheme.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && $composer_0.w20(colorScheme_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.w20(motionScheme_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && $composer_0.w20(shapes_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | (($default & 8) === 0 && $composer_0.w20(typography_0._v) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.b21(content) ? 16384 : 8192);
    if ($composer_0.d21(!(($dirty & 9363) === 9362), $dirty & 1)) {
      $composer_0.e20();
      sourceInformation($composer_0, '91@4232L11,92@4292L12,93@4341L6,94@4392L10');
      if (($changed & 1) === 0 || $composer_0.w1z()) {
        if (!(($default & 1) === 0)) {
          colorScheme_0._v = MaterialTheme_instance.le1($composer_0, 6);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          motionScheme_0._v = MaterialTheme_instance.iee($composer_0, 6);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          shapes_0._v = MaterialTheme_instance.hee($composer_0, 6);
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          typography_0._v = MaterialTheme_instance.gee($composer_0, 6);
          $dirty = $dirty & -7169;
        }
      } else {
        $composer_0.l20();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.f20();
      if (isTraceInProgress()) {
        traceEventStart(904511636, $dirty, -1, 'androidx.compose.material3.MaterialTheme (MaterialTheme.kt:96)');
      }
      var rippleIndication = ripple();
      var selectionColors = rememberTextSelectionColors(colorScheme_0._v, $composer_0, 14 & $dirty);
      var tmp = [get_LocalColorScheme().e2m(colorScheme_0._v), get__localMotionScheme().e2m(motionScheme_0._v), get_LocalIndication().e2m(rippleIndication), get_LocalShapes().e2m(shapes_0._v), get_LocalTextSelectionColors().e2m(selectionColors), get_LocalTypography().e2m(typography_0._v)];
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1750539308, true, MaterialTheme$lambda_0(typography_0, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w20(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.u20();
      var tmp_0;
      if (invalid || it === Companion_getInstance_2().s1z_1) {
        var value = ComposableLambda$invoke$ref_34(dispatchReceiver);
        $composer_1.v20(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp0 = tmp_0;
      sourceInformationMarkerEnd($composer_1);
      CompositionLocalProvider_0(tmp, tmp0, $composer_0, 48 | androidx_compose_runtime_ProvidedValue$stableprop_getter());
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    var tmp0_safe_receiver = $composer_0.h20();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k2m(MaterialTheme$lambda_1(colorScheme_0, motionScheme_0, shapes_0, typography_0, content, $changed, $default));
    }
  }
  function rememberTextSelectionColors(colorScheme, $composer, $changed) {
    _init_properties_MaterialTheme_kt__ccmets();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1866455512, 'C(rememberTextSelectionColors)224@9739L198:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(1866455512, $changed, -1, 'androidx.compose.material3.rememberTextSelectionColors (MaterialTheme.kt:222)');
    }
    var primaryColor = colorScheme.oe1_1;
    sourceInformationMarkerStart($composer_0, -1632578178, 'CC(remember):MaterialTheme.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.a21(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(primaryColor)));
    // Inline function 'kotlin.let' call
    var it = $composer_0.u20();
    var tmp;
    if (invalid || it === Companion_getInstance_2().s1z_1) {
      var value = new TextSelectionColors(primaryColor, Color__copy$default_impl_ectz3s(primaryColor, 0.4));
      $composer_0.v20(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp1_group = tmp;
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function LocalUsingExpressiveTheme$lambda() {
    _init_properties_MaterialTheme_kt__ccmets();
    return false;
  }
  function _localMotionScheme$lambda() {
    _init_properties_MaterialTheme_kt__ccmets();
    return Companion_instance_3.kee();
  }
  function MaterialTheme$lambda($colorScheme, $shapes, $typography, $content, $$changed, $$default) {
    return function ($composer, $force) {
      MaterialTheme_0($colorScheme._v, $shapes._v, $typography._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function MaterialTheme$lambda_0($typography, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C107@4883L65:MaterialTheme.kt#uh7d8r');
      var tmp;
      if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-1750539308, $changed, -1, 'androidx.compose.material3.MaterialTheme.<anonymous> (MaterialTheme.kt:107)');
        }
        ProvideTextStyle($typography._v.uee_1, $content, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.l20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_34(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function MaterialTheme$lambda_1($colorScheme, $motionScheme, $shapes, $typography, $content, $$changed, $$default) {
    return function ($composer, $force) {
      MaterialTheme_1($colorScheme._v, $motionScheme._v, $shapes._v, $typography._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_MaterialTheme_kt_8j16em;
  function _init_properties_MaterialTheme_kt__ccmets() {
    if (!properties_initialized_MaterialTheme_kt_8j16em) {
      properties_initialized_MaterialTheme_kt_8j16em = true;
      LocalUsingExpressiveTheme = staticCompositionLocalOf(LocalUsingExpressiveTheme$lambda);
      _localMotionScheme = staticCompositionLocalOf(_localMotionScheme$lambda);
      androidx_compose_material3_MaterialTheme$stable = 0;
    }
  }
  function value(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -19828261, 'C(value)298@11863L12:MotionScheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-19828261, $changed, -1, 'androidx.compose.material3.value (MotionScheme.kt:298)');
    }
    var tmp0 = fromToken_0(MaterialTheme_instance.iee($composer_0, 6), _this__u8e3s4);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function Companion_0() {
  }
  protoOf(Companion_0).kee = function () {
    return StandardMotionSchemeImpl_getInstance();
  };
  var Companion_instance_3;
  function Companion_getInstance_18() {
    return Companion_instance_3;
  }
  function StandardMotionSchemeImpl() {
    StandardMotionSchemeImpl_instance = this;
    this.pef_1 = spring(StandardMotionTokens_instance.vef_1, StandardMotionTokens_instance.wef_1);
    this.qef_1 = spring(StandardMotionTokens_instance.zef_1, StandardMotionTokens_instance.aeg_1);
    this.ref_1 = spring(StandardMotionTokens_instance.deg_1, StandardMotionTokens_instance.eeg_1);
    this.sef_1 = spring(StandardMotionTokens_instance.xef_1, StandardMotionTokens_instance.yef_1);
    this.tef_1 = spring(StandardMotionTokens_instance.beg_1, StandardMotionTokens_instance.ceg_1);
    this.uef_1 = spring(StandardMotionTokens_instance.feg_1, StandardMotionTokens_instance.geg_1);
  }
  protoOf(StandardMotionSchemeImpl).heg = function () {
    var tmp = this.pef_1;
    return isInterface(tmp, FiniteAnimationSpec) ? tmp : THROW_CCE();
  };
  protoOf(StandardMotionSchemeImpl).ieg = function () {
    var tmp = this.qef_1;
    return isInterface(tmp, FiniteAnimationSpec) ? tmp : THROW_CCE();
  };
  protoOf(StandardMotionSchemeImpl).jeg = function () {
    var tmp = this.ref_1;
    return isInterface(tmp, FiniteAnimationSpec) ? tmp : THROW_CCE();
  };
  protoOf(StandardMotionSchemeImpl).keg = function () {
    var tmp = this.sef_1;
    return isInterface(tmp, FiniteAnimationSpec) ? tmp : THROW_CCE();
  };
  protoOf(StandardMotionSchemeImpl).leg = function () {
    var tmp = this.tef_1;
    return isInterface(tmp, FiniteAnimationSpec) ? tmp : THROW_CCE();
  };
  protoOf(StandardMotionSchemeImpl).meg = function () {
    var tmp = this.uef_1;
    return isInterface(tmp, FiniteAnimationSpec) ? tmp : THROW_CCE();
  };
  var StandardMotionSchemeImpl_instance;
  function StandardMotionSchemeImpl_getInstance() {
    if (StandardMotionSchemeImpl_instance == null)
      new StandardMotionSchemeImpl();
    return StandardMotionSchemeImpl_instance;
  }
  function fromToken_0(_this__u8e3s4, value) {
    var tmp;
    switch (value.i2_1) {
      case 0:
        tmp = _this__u8e3s4.heg();
        break;
      case 1:
        tmp = _this__u8e3s4.ieg();
        break;
      case 2:
        tmp = _this__u8e3s4.jeg();
        break;
      case 3:
        tmp = _this__u8e3s4.keg();
        break;
      case 4:
        tmp = _this__u8e3s4.leg();
        break;
      case 5:
        tmp = _this__u8e3s4.meg();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function get_LocalRippleConfiguration() {
    _init_properties_Ripple_kt__d55ieo();
    return LocalRippleConfiguration;
  }
  var LocalRippleConfiguration;
  function get_DefaultBoundedRipple() {
    _init_properties_Ripple_kt__d55ieo();
    return DefaultBoundedRipple;
  }
  var DefaultBoundedRipple;
  function get_DefaultUnboundedRipple() {
    _init_properties_Ripple_kt__d55ieo();
    return DefaultUnboundedRipple;
  }
  var DefaultUnboundedRipple;
  var androidx_compose_material3_RippleDefaults$stable;
  var androidx_compose_material3_RippleConfiguration$stable;
  function RippleConfiguration(color, rippleAlpha) {
    color = color === VOID ? Companion_getInstance_1().y4h_1 : color;
    rippleAlpha = rippleAlpha === VOID ? null : rippleAlpha;
    this.neg_1 = color;
    this.oeg_1 = rippleAlpha;
  }
  protoOf(RippleConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RippleConfiguration))
      return false;
    if (!equals(this.neg_1, other.neg_1))
      return false;
    if (!equals(this.oeg_1, other.oeg_1))
      return false;
    return true;
  };
  protoOf(RippleConfiguration).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.neg_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.oeg_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(RippleConfiguration).toString = function () {
    return 'RippleConfiguration(color=' + Color__toString_impl_hpzmaq(this.neg_1) + ', rippleAlpha=' + toString_0(this.oeg_1) + ')';
  };
  function RippleNodeFactory_init_$Init$(bounded, radius, color, $this) {
    RippleNodeFactory.call($this, bounded, radius, null, color);
    return $this;
  }
  function RippleNodeFactory_init_$Create$(bounded, radius, color) {
    return RippleNodeFactory_init_$Init$(bounded, radius, color, objectCreate(protoOf(RippleNodeFactory)));
  }
  function sam$androidx_compose_ui_graphics_ColorProducer$0(function_0) {
    this.peg_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0).k4l = function () {
    return this.peg_1().f4l_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0).r2 = function () {
    return this.peg_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ColorProducer) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0).hashCode = function () {
    return hashCode(this.r2());
  };
  function RippleNodeFactory$create$lambda(this$0) {
    return function () {
      return new Color(this$0.teg_1);
    };
  }
  function RippleNodeFactory(bounded, radius, colorProducer, color) {
    this.qeg_1 = bounded;
    this.reg_1 = radius;
    this.seg_1 = colorProducer;
    this.teg_1 = color;
  }
  protoOf(RippleNodeFactory).eap = function (interactionSource) {
    var tmp0_elvis_lhs = this.seg_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0 = RippleNodeFactory$create$lambda(this);
      tmp = new sam$androidx_compose_ui_graphics_ColorProducer$0(tmp_0);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var colorProducer = tmp;
    return new DelegatingThemeAwareRippleNode(interactionSource, this.qeg_1, this.reg_1, colorProducer);
  };
  protoOf(RippleNodeFactory).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RippleNodeFactory))
      return false;
    if (!(this.qeg_1 === other.qeg_1))
      return false;
    if (!equals(this.reg_1, other.reg_1))
      return false;
    if (!equals(this.seg_1, other.seg_1))
      return false;
    return equals(this.teg_1, other.teg_1);
  };
  protoOf(RippleNodeFactory).hashCode = function () {
    var result = getBooleanHashCode(this.qeg_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.reg_1) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.seg_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.teg_1) | 0;
    return result;
  };
  function updateConfiguration($this) {
    observeReads($this, DelegatingThemeAwareRippleNode$updateConfiguration$lambda($this));
  }
  function attachNewRipple($this) {
    var tmp = DelegatingThemeAwareRippleNode$attachNewRipple$lambda($this);
    var calculateColor = new sam$androidx_compose_ui_graphics_ColorProducer$0_0(tmp);
    var calculateRippleAlpha = DelegatingThemeAwareRippleNode$attachNewRipple$lambda_0($this);
    $this.oeh_1 = $this.m7w(createRippleModifierNode($this.keh_1, $this.leh_1, $this.meh_1, calculateColor, calculateRippleAlpha));
  }
  function removeRipple($this) {
    var tmp0_safe_receiver = $this.oeh_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $this.o7w(tmp0_safe_receiver);
    }
    $this.oeh_1 = null;
  }
  function sam$androidx_compose_ui_graphics_ColorProducer$0_0(function_0) {
    this.peh_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0_0).k4l = function () {
    return this.peh_1().f4l_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0_0).r2 = function () {
    return this.peh_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ColorProducer) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0_0).hashCode = function () {
    return hashCode(this.r2());
  };
  function DelegatingThemeAwareRippleNode$updateConfiguration$lambda(this$0) {
    return function () {
      var configuration = currentValueOf(this$0, get_LocalRippleConfiguration());
      var tmp;
      if (configuration == null) {
        removeRipple(this$0);
        tmp = Unit_instance;
      } else {
        var tmp_0;
        if (this$0.oeh_1 == null) {
          attachNewRipple(this$0);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }
      return Unit_instance;
    };
  }
  function DelegatingThemeAwareRippleNode$attachNewRipple$lambda(this$0) {
    return function () {
      var userDefinedColor = this$0.neh_1.k4l();
      var tmp;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(userDefinedColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
        tmp = userDefinedColor;
      } else {
        var rippleConfiguration = currentValueOf(this$0, get_LocalRippleConfiguration());
        var tmp_0;
        var tmp1_safe_receiver = rippleConfiguration == null ? null : rippleConfiguration.neg_1;
        var tmp_1;
        var tmp_2 = tmp1_safe_receiver;
        if ((tmp_2 == null ? null : new Color(tmp_2)) == null) {
          tmp_1 = null;
        } else {
          // Inline function 'androidx.compose.ui.graphics.isSpecified' call
          tmp_1 = !equals(_Color___get_value__impl__1pls5m(tmp1_safe_receiver), _ULong___init__impl__c78o9k(new Long(16, 0)));
        }
        if (tmp_1 === true) {
          tmp_0 = rippleConfiguration.neg_1;
        } else {
          tmp_0 = currentValueOf(this$0, get_LocalContentColor()).f4l_1;
        }
        tmp = tmp_0;
      }
      return new Color(tmp);
    };
  }
  function DelegatingThemeAwareRippleNode$attachNewRipple$lambda_0(this$0) {
    return function () {
      var rippleConfiguration = currentValueOf(this$0, get_LocalRippleConfiguration());
      var tmp1_elvis_lhs = rippleConfiguration == null ? null : rippleConfiguration.oeg_1;
      return tmp1_elvis_lhs == null ? RippleDefaults_getInstance().qeh_1 : tmp1_elvis_lhs;
    };
  }
  function DelegatingThemeAwareRippleNode(interactionSource, bounded, radius, color) {
    DelegatingNode.call(this);
    this.keh_1 = interactionSource;
    this.leh_1 = bounded;
    this.meh_1 = radius;
    this.neh_1 = color;
    this.oeh_1 = null;
  }
  protoOf(DelegatingThemeAwareRippleNode).b63 = function () {
    updateConfiguration(this);
  };
  protoOf(DelegatingThemeAwareRippleNode).m6a = function () {
    updateConfiguration(this);
  };
  function RippleDefaults() {
    RippleDefaults_instance = this;
    var tmp = this;
    tmp.qeh_1 = new RippleAlpha(0.16, 0.1, 0.08, 0.1);
  }
  var RippleDefaults_instance;
  function RippleDefaults_getInstance() {
    if (RippleDefaults_instance == null)
      new RippleDefaults();
    return RippleDefaults_instance;
  }
  function ripple(bounded, radius, color) {
    bounded = bounded === VOID ? true : bounded;
    radius = radius === VOID ? Companion_getInstance_5().k3r_1 : radius;
    color = color === VOID ? Companion_getInstance_1().y4h_1 : color;
    _init_properties_Ripple_kt__d55ieo();
    var tmp;
    if (equals(radius, Companion_getInstance_5().k3r_1) && equals(color, Companion_getInstance_1().y4h_1)) {
      var tmp_0;
      if (bounded) {
        return get_DefaultBoundedRipple();
      } else {
        tmp_0 = get_DefaultUnboundedRipple();
      }
      tmp = tmp_0;
    } else {
      tmp = RippleNodeFactory_init_$Create$(bounded, radius, color);
    }
    return tmp;
  }
  function LocalRippleConfiguration$lambda() {
    _init_properties_Ripple_kt__d55ieo();
    return new RippleConfiguration();
  }
  var properties_initialized_Ripple_kt_3wqvym;
  function _init_properties_Ripple_kt__d55ieo() {
    if (!properties_initialized_Ripple_kt_3wqvym) {
      properties_initialized_Ripple_kt_3wqvym = true;
      LocalRippleConfiguration = compositionLocalOf(VOID, LocalRippleConfiguration$lambda);
      DefaultBoundedRipple = RippleNodeFactory_init_$Create$(true, Companion_getInstance_5().k3r_1, Companion_getInstance_1().y4h_1);
      DefaultUnboundedRipple = RippleNodeFactory_init_$Create$(false, Companion_getInstance_5().k3r_1, Companion_getInstance_1().y4h_1);
      androidx_compose_material3_RippleDefaults$stable = 0;
      androidx_compose_material3_RippleConfiguration$stable = 0;
    }
  }
  function get_FabSpacing() {
    _init_properties_Scaffold_kt__o4wwkq();
    return FabSpacing;
  }
  var FabSpacing;
  var androidx_compose_material3_ScaffoldDefaults$stable;
  var androidx_compose_material3_FabPlacement$stable;
  function Scaffold(modifier, topBar, bottomBar, snackbarHost, floatingActionButton, floatingActionButtonPosition, containerColor, contentColor, contentWindowInsets, content, $composer, $changed, $default) {
    _init_properties_Scaffold_kt__o4wwkq();
    var modifier_0 = {_v: modifier};
    var topBar_0 = {_v: topBar};
    var bottomBar_0 = {_v: bottomBar};
    var snackbarHost_0 = {_v: snackbarHost};
    var floatingActionButton_0 = {_v: floatingActionButton};
    var floatingActionButtonPosition_0 = {_v: new FabPosition(floatingActionButtonPosition)};
    var containerColor_0 = {_v: new Color(containerColor)};
    var contentColor_0 = {_v: new Color(contentColor)};
    var contentWindowInsets_0 = {_v: contentWindowInsets};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.g20(-1211482744);
    sourceInformation($composer_0, 'C(Scaffold)P(7,9!1,8,5,6:c#material3.FabPosition,1:c#ui.graphics.Color,3:c#ui.graphics.Color,4)94@4873L74,97@5031L224,103@5332L315,95@4952L695:Scaffold.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w20(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.b21(topBar_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.b21(bottomBar_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.b21(snackbarHost_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.b21(floatingActionButton_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.y20(_get_value__a43j40(floatingActionButtonPosition_0._v.reh_1)) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | (($default & 64) === 0 && $composer_0.a21(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(containerColor_0._v.f4l_1))) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | (($default & 128) === 0 && $composer_0.a21(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor_0._v.f4l_1))) ? 8388608 : 4194304);
    if (($changed & 100663296) === 0)
      $dirty = $dirty | (($default & 256) === 0 && $composer_0.w20(contentWindowInsets_0._v) ? 67108864 : 33554432);
    if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.b21(content) ? 536870912 : 268435456);
    if ($composer_0.d21(!(($dirty & 306783379) === 306783378), $dirty & 1)) {
      $composer_0.e20();
      sourceInformation($composer_0, '89@4637L11,90@4687L31,91@4777L19');
      if (($changed & 1) === 0 || $composer_0.w1z()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 2) === 0)) {
          topBar_0._v = ComposableSingletons$ScaffoldKt_getInstance().seh_1;
        }
        if (!(($default & 4) === 0)) {
          bottomBar_0._v = ComposableSingletons$ScaffoldKt_getInstance().teh_1;
        }
        if (!(($default & 8) === 0)) {
          snackbarHost_0._v = ComposableSingletons$ScaffoldKt_getInstance().ueh_1;
        }
        if (!(($default & 16) === 0)) {
          floatingActionButton_0._v = ComposableSingletons$ScaffoldKt_getInstance().veh_1;
        }
        if (!(($default & 32) === 0)) {
          floatingActionButtonPosition_0._v = new FabPosition(Companion_getInstance_19().yeh_1);
        }
        if (!(($default & 64) === 0)) {
          containerColor_0._v = new Color(MaterialTheme_instance.le1($composer_0, 6).be2_1);
          $dirty = $dirty & -3670017;
        }
        if (!(($default & 128) === 0)) {
          contentColor_0._v = new Color(contentColorFor_0(containerColor_0._v.f4l_1, $composer_0, 14 & $dirty >> 18));
          $dirty = $dirty & -29360129;
        }
        if (!(($default & 256) === 0)) {
          contentWindowInsets_0._v = ScaffoldDefaults_instance.aei($composer_0, 6);
          $dirty = $dirty & -234881025;
        }
      } else {
        $composer_0.l20();
        if (!(($default & 64) === 0))
          $dirty = $dirty & -3670017;
        if (!(($default & 128) === 0))
          $dirty = $dirty & -29360129;
        if (!(($default & 256) === 0))
          $dirty = $dirty & -234881025;
      }
      $composer_0.f20();
      if (isTraceInProgress()) {
        traceEventStart(-1211482744, $dirty, -1, 'androidx.compose.material3.Scaffold (Scaffold.kt:93)');
      }
      sourceInformationMarkerStart($composer_0, -298761166, 'CC(remember):Scaffold.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 234881024 ^ 100663296) > 67108864 && $composer_0.w20(contentWindowInsets_0._v) || ($dirty & 100663296) === 67108864;
      // Inline function 'kotlin.let' call
      var it = tmp0.u20();
      var tmp;
      if (invalid || it === Companion_getInstance_2().s1z_1) {
        var value = new MutableWindowInsets(contentWindowInsets_0._v);
        tmp0.v20(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp0_group = tmp;
      sourceInformationMarkerEnd($composer_0);
      var safeInsets = tmp0_group;
      var tmp_0 = modifier_0._v;
      sourceInformationMarkerStart($composer_0, -298755960, 'CC(remember):Scaffold.kt#9igjgp');
      var tmp0_0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!($composer_0.w20(safeInsets) | (($dirty & 234881024 ^ 100663296) > 67108864 && $composer_0.w20(contentWindowInsets_0._v) || ($dirty & 100663296) === 67108864));
      // Inline function 'kotlin.let' call
      var it_0 = tmp0_0.u20();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance_2().s1z_1) {
        var value_0 = Scaffold$lambda(safeInsets, contentWindowInsets_0);
        tmp0_0.v20(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp1_group = tmp_1;
      sourceInformationMarkerEnd($composer_0);
      var tmp_2 = onConsumedWindowInsetsChanged(tmp_0, tmp1_group);
      var tmp_3 = containerColor_0._v;
      var tmp_4 = contentColor_0._v;
      var tmp_5 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_6 = _Dp___init__impl__ms3zkb(0.0);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(848889571, true, Scaffold$lambda_0(floatingActionButtonPosition_0, topBar_0, content, snackbarHost_0, floatingActionButton_0, safeInsets, bottomBar_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_1.w20(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_1.u20();
      var tmp_7;
      if (invalid_1 || it_1 === Companion_getInstance_2().s1z_1) {
        var value_1 = ComposableLambda$invoke$ref_39(dispatchReceiver);
        $composer_1.v20(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp0_1 = tmp_7;
      sourceInformationMarkerEnd($composer_1);
      Surface(tmp_2, null, tmp_3.f4l_1, tmp_4.f4l_1, tmp_5, tmp_6, null, tmp0_1, $composer_0, 12582912 | 896 & $dirty >> 12 | 7168 & $dirty >> 12, 114);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    var tmp2_safe_receiver = $composer_0.h20();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.k2m(Scaffold$lambda_1(modifier_0, topBar_0, bottomBar_0, snackbarHost_0, floatingActionButton_0, floatingActionButtonPosition_0, containerColor_0, contentColor_0, contentWindowInsets_0, content, $changed, $default));
    }
  }
  function _FabPosition___init__impl__9ib2hj(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function Companion_1() {
    Companion_instance_4 = this;
    this.weh_1 = _FabPosition___init__impl__9ib2hj(0);
    this.xeh_1 = _FabPosition___init__impl__9ib2hj(1);
    this.yeh_1 = _FabPosition___init__impl__9ib2hj(2);
    this.zeh_1 = _FabPosition___init__impl__9ib2hj(3);
  }
  var Companion_instance_4;
  function Companion_getInstance_19() {
    if (Companion_instance_4 == null)
      new Companion_1();
    return Companion_instance_4;
  }
  function FabPosition__toString_impl_vcmu5r($this) {
    return $this === Companion_getInstance_19().weh_1 ? 'FabPosition.Start' : $this === Companion_getInstance_19().xeh_1 ? 'FabPosition.Center' : $this === Companion_getInstance_19().yeh_1 ? 'FabPosition.End' : 'FabPosition.EndOverlay';
  }
  function FabPosition__hashCode_impl_hxbb0i($this) {
    return $this;
  }
  function FabPosition__equals_impl_9xsrq6($this, other) {
    if (!(other instanceof FabPosition))
      return false;
    if (!($this === other.reh_1))
      return false;
    return true;
  }
  function FabPosition(value) {
    Companion_getInstance_19();
    this.reh_1 = value;
  }
  protoOf(FabPosition).toString = function () {
    return FabPosition__toString_impl_vcmu5r(this.reh_1);
  };
  protoOf(FabPosition).hashCode = function () {
    return FabPosition__hashCode_impl_hxbb0i(this.reh_1);
  };
  protoOf(FabPosition).equals = function (other) {
    return FabPosition__equals_impl_9xsrq6(this.reh_1, other);
  };
  function ComposableLambda$invoke$ref_35(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$ScaffoldKt$lambda$_39202156$lambda_3exe4f($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Scaffold.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-39202156, $changed, -1, 'androidx.compose.material3.ComposableSingletons$ScaffoldKt.lambda$-39202156.<anonymous> (Scaffold.kt:84)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_36(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$ScaffoldKt$lambda$1582488484$lambda($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Scaffold.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1582488484, $changed, -1, 'androidx.compose.material3.ComposableSingletons$ScaffoldKt.lambda$1582488484.<anonymous> (Scaffold.kt:85)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_37(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$ScaffoldKt$lambda$414328099$lambda($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Scaffold.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(414328099, $changed, -1, 'androidx.compose.material3.ComposableSingletons$ScaffoldKt.lambda$414328099.<anonymous> (Scaffold.kt:86)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_38(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$ScaffoldKt$lambda$_1514016380$lambda_lq3vfs($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C:Scaffold.kt#uh7d8r');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1514016380, $changed, -1, 'androidx.compose.material3.ComposableSingletons$ScaffoldKt.lambda$-1514016380.<anonymous> (Scaffold.kt:87)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ScaffoldKt() {
    ComposableSingletons$ScaffoldKt_instance = this;
    var tmp = this;
    tmp.seh_1 = ComposableLambda$invoke$ref_35(composableLambdaInstance(-39202156, false, ComposableSingletons$ScaffoldKt$lambda$_39202156$lambda_3exe4f));
    var tmp_0 = this;
    tmp_0.teh_1 = ComposableLambda$invoke$ref_36(composableLambdaInstance(1582488484, false, ComposableSingletons$ScaffoldKt$lambda$1582488484$lambda));
    var tmp_1 = this;
    tmp_1.ueh_1 = ComposableLambda$invoke$ref_37(composableLambdaInstance(414328099, false, ComposableSingletons$ScaffoldKt$lambda$414328099$lambda));
    var tmp_2 = this;
    tmp_2.veh_1 = ComposableLambda$invoke$ref_38(composableLambdaInstance(-1514016380, false, ComposableSingletons$ScaffoldKt$lambda$_1514016380$lambda_lq3vfs));
  }
  var ComposableSingletons$ScaffoldKt_instance;
  function ComposableSingletons$ScaffoldKt_getInstance() {
    if (ComposableSingletons$ScaffoldKt_instance == null)
      new ComposableSingletons$ScaffoldKt();
    return ComposableSingletons$ScaffoldKt_instance;
  }
  function ScaffoldDefaults() {
  }
  protoOf(ScaffoldDefaults).aei = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 757124140, 'C(<get-contentWindowInsets>)301@14133L29:Scaffold.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(757124140, $changed, -1, 'androidx.compose.material3.ScaffoldDefaults.<get-contentWindowInsets> (Scaffold.kt:301)');
    }
    var tmp0 = get_systemBarsForVisualComponents(Companion_instance_0, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  var ScaffoldDefaults_instance;
  function ScaffoldDefaults_getInstance() {
    return ScaffoldDefaults_instance;
  }
  function ScaffoldLayout(fabPosition, topBar, content, snackbar, fab, contentWindowInsets, bottomBar, $composer, $changed) {
    _init_properties_Scaffold_kt__o4wwkq();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.g20(-280287501);
    sourceInformation($composer_0, 'C(ScaffoldLayout)P(4:c#material3.FabPosition,6,1,5,3,2)142@6839L626,158@7515L41,159@7607L45,160@7698L35,162@7788L73,163@7913L47,164@7982L5885,164@7965L5902:Scaffold.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.y20(_get_value__a43j40(fabPosition)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.b21(topBar) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.b21(content) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.b21(snackbar) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.b21(fab) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.w20(contentWindowInsets) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.b21(bottomBar) ? 1048576 : 524288);
    if ($composer_0.d21(!(($dirty & 599187) === 599186), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-280287501, $dirty, -1, 'androidx.compose.material3.ScaffoldLayout (Scaffold.kt:137)');
      }
      sourceInformationMarkerStart($composer_0, 1226670373, 'CC(remember):Scaffold.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.u20();
      var tmp;
      if (false || it === Companion_getInstance_2().s1z_1) {
        var value = new ScaffoldLayout$contentPadding$1();
        this_0.v20(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp0_group = tmp;
      sourceInformationMarkerEnd($composer_0);
      var contentPadding = tmp0_group;
      sourceInformationMarkerStart($composer_0, 1226691420, 'CC(remember):Scaffold.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 112) === 32;
      // Inline function 'kotlin.let' call
      var it_0 = tmp0.u20();
      var tmp_0;
      if (invalid || it_0 === Companion_getInstance_2().s1z_1) {
        var value_0 = ComposableLambda$invoke$ref_40(composableLambdaInstance(605195056, true, ScaffoldLayout$lambda(topBar)));
        tmp0.v20(value_0);
        tmp_0 = value_0;
      } else {
        tmp_0 = it_0;
      }
      var tmp1_group = tmp_0;
      sourceInformationMarkerEnd($composer_0);
      var topBarContent = tmp1_group;
      sourceInformationMarkerStart($composer_0, 1226694368, 'CC(remember):Scaffold.kt#9igjgp');
      var tmp0_0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($dirty & 7168) === 2048;
      // Inline function 'kotlin.let' call
      var it_1 = tmp0_0.u20();
      var tmp_1;
      if (invalid_0 || it_1 === Companion_getInstance_2().s1z_1) {
        var value_1 = ComposableLambda$invoke$ref_41(composableLambdaInstance(418899191, true, ScaffoldLayout$lambda_0(snackbar)));
        tmp0_0.v20(value_1);
        tmp_1 = value_1;
      } else {
        tmp_1 = it_1;
      }
      var tmp2_group = tmp_1;
      sourceInformationMarkerEnd($composer_0);
      var snackbarContent = tmp2_group;
      sourceInformationMarkerStart($composer_0, 1226697270, 'CC(remember):Scaffold.kt#9igjgp');
      var tmp0_1 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = ($dirty & 57344) === 16384;
      // Inline function 'kotlin.let' call
      var it_2 = tmp0_1.u20();
      var tmp_2;
      if (invalid_1 || it_2 === Companion_getInstance_2().s1z_1) {
        var value_2 = ComposableLambda$invoke$ref_42(composableLambdaInstance(338600263, true, ScaffoldLayout$lambda_1(fab)));
        tmp0_1.v20(value_2);
        tmp_2 = value_2;
      } else {
        tmp_2 = it_2;
      }
      var tmp3_group = tmp_2;
      sourceInformationMarkerEnd($composer_0);
      var fabContent = tmp3_group;
      sourceInformationMarkerStart($composer_0, 1226700188, 'CC(remember):Scaffold.kt#9igjgp');
      var tmp0_2 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = ($dirty & 896) === 256;
      // Inline function 'kotlin.let' call
      var it_3 = tmp0_2.u20();
      var tmp_3;
      if (invalid_2 || it_3 === Companion_getInstance_2().s1z_1) {
        var value_3 = ComposableLambda$invoke$ref_43(composableLambdaInstance(-1776388365, true, ScaffoldLayout$lambda_2(content, contentPadding)));
        tmp0_2.v20(value_3);
        tmp_3 = value_3;
      } else {
        tmp_3 = it_3;
      }
      var tmp4_group = tmp_3;
      sourceInformationMarkerEnd($composer_0);
      var bodyContent = tmp4_group;
      sourceInformationMarkerStart($composer_0, 1226704162, 'CC(remember):Scaffold.kt#9igjgp');
      var tmp0_3 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_3 = ($dirty & 3670016) === 1048576;
      // Inline function 'kotlin.let' call
      var it_4 = tmp0_3.u20();
      var tmp_4;
      if (invalid_3 || it_4 === Companion_getInstance_2().s1z_1) {
        var value_4 = ComposableLambda$invoke$ref_44(composableLambdaInstance(-1731662488, true, ScaffoldLayout$lambda_3(bottomBar)));
        tmp0_3.v20(value_4);
        tmp_4 = value_4;
      } else {
        tmp_4 = it_4;
      }
      var tmp5_group = tmp_4;
      sourceInformationMarkerEnd($composer_0);
      var bottomBarContent = tmp5_group;
      sourceInformationMarkerStart($composer_0, 1226712208, 'CC(remember):Scaffold.kt#9igjgp');
      var tmp0_4 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_4 = !!(!!(!!(!!(!!(!!(($dirty & 458752) === 131072 | $composer_0.w20(topBarContent)) | $composer_0.w20(snackbarContent)) | $composer_0.w20(fabContent)) | ($dirty & 14) === 4) | $composer_0.w20(bottomBarContent)) | $composer_0.w20(bodyContent));
      // Inline function 'kotlin.let' call
      var it_5 = tmp0_4.u20();
      var tmp_5;
      if (invalid_4 || it_5 === Companion_getInstance_2().s1z_1) {
        var value_5 = ScaffoldLayout$lambda_4(contentWindowInsets, topBarContent, snackbarContent, fabContent, fabPosition, bottomBarContent, contentPadding, bodyContent);
        tmp0_4.v20(value_5);
        tmp_5 = value_5;
      } else {
        tmp_5 = it_5;
      }
      var tmp6_group = tmp_5;
      sourceInformationMarkerEnd($composer_0);
      SubcomposeLayout(null, tmp6_group, $composer_0, 0, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    var tmp7_safe_receiver = $composer_0.h20();
    if (tmp7_safe_receiver == null)
      null;
    else {
      tmp7_safe_receiver.k2m(ScaffoldLayout$lambda_5(fabPosition, topBar, content, snackbar, fab, contentWindowInsets, bottomBar, $changed));
    }
  }
  var ScaffoldLayoutContent_TopBar_instance;
  var ScaffoldLayoutContent_MainContent_instance;
  var ScaffoldLayoutContent_Snackbar_instance;
  var ScaffoldLayoutContent_Fab_instance;
  var ScaffoldLayoutContent_BottomBar_instance;
  var ScaffoldLayoutContent_entriesInitialized;
  function ScaffoldLayoutContent_initEntries() {
    if (ScaffoldLayoutContent_entriesInitialized)
      return Unit_instance;
    ScaffoldLayoutContent_entriesInitialized = true;
    ScaffoldLayoutContent_TopBar_instance = new ScaffoldLayoutContent('TopBar', 0);
    ScaffoldLayoutContent_MainContent_instance = new ScaffoldLayoutContent('MainContent', 1);
    ScaffoldLayoutContent_Snackbar_instance = new ScaffoldLayoutContent('Snackbar', 2);
    ScaffoldLayoutContent_Fab_instance = new ScaffoldLayoutContent('Fab', 3);
    ScaffoldLayoutContent_BottomBar_instance = new ScaffoldLayoutContent('BottomBar', 4);
  }
  function ScaffoldLayoutContent(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FabPlacement(left, width, height) {
    this.bei_1 = left;
    this.cei_1 = width;
    this.dei_1 = height;
  }
  function Scaffold$lambda($safeInsets, $contentWindowInsets) {
    return function (consumedWindowInsets) {
      $safeInsets.fei(exclude($contentWindowInsets._v, consumedWindowInsets));
      return Unit_instance;
    };
  }
  function Scaffold$lambda_0($floatingActionButtonPosition, $topBar, $content, $snackbarHost, $floatingActionButton, $safeInsets, $bottomBar) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C104@5342L299:Scaffold.kt#uh7d8r');
      var tmp;
      if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(848889571, $changed, -1, 'androidx.compose.material3.Scaffold.<anonymous> (Scaffold.kt:104)');
        }
        ScaffoldLayout($floatingActionButtonPosition._v.reh_1, $topBar._v, $content, $snackbarHost._v, $floatingActionButton._v, $safeInsets, $bottomBar._v, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.l20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_39(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function Scaffold$lambda_1($modifier, $topBar, $bottomBar, $snackbarHost, $floatingActionButton, $floatingActionButtonPosition, $containerColor, $contentColor, $contentWindowInsets, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Scaffold($modifier._v, $topBar._v, $bottomBar._v, $snackbarHost._v, $floatingActionButton._v, $floatingActionButtonPosition._v.reh_1, $containerColor._v.f4l_1, $contentColor._v.f4l_1, $contentWindowInsets._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ScaffoldLayout$o$_get_paddingHolder_$ref_nowk0a() {
    return function (p0) {
      return p0.hei();
    };
  }
  function ScaffoldLayout$o$_set_paddingHolder_$ref_pmeloi() {
    return function (p0, p1) {
      p0.iei(p1);
      return Unit_instance;
    };
  }
  function ScaffoldLayout$o$_get_paddingHolder_$ref_nowk0a_0() {
    return function (p0) {
      return p0.hei();
    };
  }
  function ScaffoldLayout$o$_set_paddingHolder_$ref_pmeloi_0() {
    return function (p0, p1) {
      p0.iei(p1);
      return Unit_instance;
    };
  }
  function ScaffoldLayout$contentPadding$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    tmp.gei_1 = mutableStateOf(PaddingValues(tmp$ret$0));
  }
  protoOf(ScaffoldLayout$contentPadding$1).iei = function (_set____db54di) {
    var tmp0 = this.gei_1;
    var tmp = KMutableProperty1;
    var tmp_0 = ScaffoldLayout$o$_get_paddingHolder_$ref_nowk0a_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('paddingHolder', 1, tmp, tmp_0, ScaffoldLayout$o$_set_paddingHolder_$ref_pmeloi_0());
    tmp0.k1k(_set____db54di);
    return Unit_instance;
  };
  protoOf(ScaffoldLayout$contentPadding$1).hei = function () {
    var tmp0 = this.gei_1;
    var tmp = KMutableProperty1;
    var tmp_0 = ScaffoldLayout$o$_get_paddingHolder_$ref_nowk0a();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('paddingHolder', 1, tmp, tmp_0, ScaffoldLayout$o$_set_paddingHolder_$ref_pmeloi());
    return tmp0.x1();
  };
  protoOf(ScaffoldLayout$contentPadding$1).z9t = function (layoutDirection) {
    return this.hei().z9t(layoutDirection);
  };
  protoOf(ScaffoldLayout$contentPadding$1).e9u = function () {
    return this.hei().e9u();
  };
  protoOf(ScaffoldLayout$contentPadding$1).y9t = function (layoutDirection) {
    return this.hei().y9t(layoutDirection);
  };
  protoOf(ScaffoldLayout$contentPadding$1).f9u = function () {
    return this.hei().f9u();
  };
  function ComposableLambda$invoke$ref_40(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ScaffoldLayout$lambda($topBar) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C158@7536L16:Scaffold.kt#uh7d8r');
      var tmp;
      if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(605195056, $changed, -1, 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous> (Scaffold.kt:158)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = null;
        var contentAlignment = null;
        var propagateMinConstraints = false;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1042775818, 'CC(Box)P(2,1,3)71@3424L131:Box.kt#2w3rfo');
        if (!((7 & 1) === 0))
          modifier = Companion_instance;
        if (!((7 & 2) === 0))
          contentAlignment = Companion_getInstance().h60_1;
        if (!((7 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, -1159599143, 'CC(Layout)P(!1,2)81@3355L27,84@3521L416:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_instance;
        var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
        var localMap = $composer_2.f21();
        var materialized = materialize($composer_2, modifier_0);
        var tmp0 = Companion_getInstance_0().d7s_1;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
        var tmp_0 = $composer_3.t1z();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_3.n20();
        if ($composer_3.u1z()) {
          $composer_3.o20(tmp0);
        } else {
          $composer_3.p20();
        }
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_0().i7s_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_0().h7s_1);
        Updater__init_impl_uaeges($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_0().l7s_1);
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_0().m7s_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_0().f7s_1);
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, 1833054614, 'C72@3469L9:Box.kt#2w3rfo');
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, -1154869819, 'C158@7542L8:Scaffold.kt#uh7d8r');
        $topBar($composer_5, 0);
        sourceInformationMarkerEnd($composer_5);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.q20();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_instance;
        }
        tmp = tmp_1;
      } else {
        $composer_0.l20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_41(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ScaffoldLayout$lambda_0($snackbar) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C159@7630L18:Scaffold.kt#uh7d8r');
      var tmp;
      if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(418899191, $changed, -1, 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous> (Scaffold.kt:159)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = null;
        var contentAlignment = null;
        var propagateMinConstraints = false;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1042775818, 'CC(Box)P(2,1,3)71@3424L131:Box.kt#2w3rfo');
        if (!((7 & 1) === 0))
          modifier = Companion_instance;
        if (!((7 & 2) === 0))
          contentAlignment = Companion_getInstance().h60_1;
        if (!((7 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, -1159599143, 'CC(Layout)P(!1,2)81@3355L27,84@3521L416:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_instance;
        var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
        var localMap = $composer_2.f21();
        var materialized = materialize($composer_2, modifier_0);
        var tmp0 = Companion_getInstance_0().d7s_1;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
        var tmp_0 = $composer_3.t1z();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_3.n20();
        if ($composer_3.u1z()) {
          $composer_3.o20(tmp0);
        } else {
          $composer_3.p20();
        }
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_0().i7s_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_0().h7s_1);
        Updater__init_impl_uaeges($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_0().l7s_1);
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_0().m7s_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_0().f7s_1);
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, 1833054614, 'C72@3469L9:Box.kt#2w3rfo');
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, 367258716, 'C159@7636L10:Scaffold.kt#uh7d8r');
        $snackbar($composer_5, 0);
        sourceInformationMarkerEnd($composer_5);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.q20();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_instance;
        }
        tmp = tmp_1;
      } else {
        $composer_0.l20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_42(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ScaffoldLayout$lambda_1($fab) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C160@7716L13:Scaffold.kt#uh7d8r');
      var tmp;
      if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(338600263, $changed, -1, 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous> (Scaffold.kt:160)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = null;
        var contentAlignment = null;
        var propagateMinConstraints = false;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1042775818, 'CC(Box)P(2,1,3)71@3424L131:Box.kt#2w3rfo');
        if (!((7 & 1) === 0))
          modifier = Companion_instance;
        if (!((7 & 2) === 0))
          contentAlignment = Companion_getInstance().h60_1;
        if (!((7 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, -1159599143, 'CC(Layout)P(!1,2)81@3355L27,84@3521L416:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_instance;
        var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
        var localMap = $composer_2.f21();
        var materialized = materialize($composer_2, modifier_0);
        var tmp0 = Companion_getInstance_0().d7s_1;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
        var tmp_0 = $composer_3.t1z();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_3.n20();
        if ($composer_3.u1z()) {
          $composer_3.o20(tmp0);
        } else {
          $composer_3.p20();
        }
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_0().i7s_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_0().h7s_1);
        Updater__init_impl_uaeges($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_0().l7s_1);
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_0().m7s_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_0().f7s_1);
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, 1833054614, 'C72@3469L9:Box.kt#2w3rfo');
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, 2140512701, 'C160@7722L5:Scaffold.kt#uh7d8r');
        $fab($composer_5, 0);
        sourceInformationMarkerEnd($composer_5);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.q20();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_instance;
        }
        tmp = tmp_1;
      } else {
        $composer_0.l20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_43(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ScaffoldLayout$lambda_2($content, $contentPadding) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C162@7826L31:Scaffold.kt#uh7d8r');
      var tmp;
      if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-1776388365, $changed, -1, 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous> (Scaffold.kt:162)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = null;
        var contentAlignment = null;
        var propagateMinConstraints = false;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1042775818, 'CC(Box)P(2,1,3)71@3424L131:Box.kt#2w3rfo');
        if (!((7 & 1) === 0))
          modifier = Companion_instance;
        if (!((7 & 2) === 0))
          contentAlignment = Companion_getInstance().h60_1;
        if (!((7 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, -1159599143, 'CC(Layout)P(!1,2)81@3355L27,84@3521L416:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_instance;
        var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
        var localMap = $composer_2.f21();
        var materialized = materialize($composer_2, modifier_0);
        var tmp0 = Companion_getInstance_0().d7s_1;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
        var tmp_0 = $composer_3.t1z();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_3.n20();
        if ($composer_3.u1z()) {
          $composer_3.o20(tmp0);
        } else {
          $composer_3.p20();
        }
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_0().i7s_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_0().h7s_1);
        Updater__init_impl_uaeges($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_0().l7s_1);
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_0().m7s_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_0().f7s_1);
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, 1833054614, 'C72@3469L9:Box.kt#2w3rfo');
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, -931973261, 'C162@7832L23:Scaffold.kt#uh7d8r');
        $content($contentPadding, $composer_5, 6);
        sourceInformationMarkerEnd($composer_5);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.q20();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_instance;
        }
        tmp = tmp_1;
      } else {
        $composer_0.l20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_44(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ScaffoldLayout$lambda_3($bottomBar) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C163@7937L19:Scaffold.kt#uh7d8r');
      var tmp;
      if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-1731662488, $changed, -1, 'androidx.compose.material3.ScaffoldLayout.<anonymous>.<anonymous> (Scaffold.kt:163)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = null;
        var contentAlignment = null;
        var propagateMinConstraints = false;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1042775818, 'CC(Box)P(2,1,3)71@3424L131:Box.kt#2w3rfo');
        if (!((7 & 1) === 0))
          modifier = Companion_instance;
        if (!((7 & 2) === 0))
          contentAlignment = Companion_getInstance().h60_1;
        if (!((7 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, -1159599143, 'CC(Layout)P(!1,2)81@3355L27,84@3521L416:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_instance;
        var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
        var localMap = $composer_2.f21();
        var materialized = materialize($composer_2, modifier_0);
        var tmp0 = Companion_getInstance_0().d7s_1;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
        var tmp_0 = $composer_3.t1z();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_3.n20();
        if ($composer_3.u1z()) {
          $composer_3.o20(tmp0);
        } else {
          $composer_3.p20();
        }
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_0().i7s_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_0().h7s_1);
        Updater__init_impl_uaeges($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_0().l7s_1);
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_0().m7s_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_0().f7s_1);
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, 1833054614, 'C72@3469L9:Box.kt#2w3rfo');
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, 79510070, 'C163@7943L11:Scaffold.kt#uh7d8r');
        $bottomBar($composer_5, 0);
        sourceInformationMarkerEnd($composer_5);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.q20();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_instance;
        }
        tmp = tmp_1;
      } else {
        $composer_0.l20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ScaffoldLayout$lambda$lambda($bodyContentPlaceable, $topBarPlaceable, $snackbarPlaceable, $layoutWidth, $contentWindowInsets, $this_SubcomposeLayout, $layoutHeight, $snackbarOffsetFromBottom, $bottomBarPlaceable, $fabPlacement, $fabPlaceable, $fabOffsetFromBottom) {
    return function ($this$layout) {
      $this$layout.i7h($bodyContentPlaceable, 0, 0);
      $this$layout.i7h($topBarPlaceable, 0, 0);
      $this$layout.i7h($snackbarPlaceable, ((($layoutWidth - $snackbarPlaceable.d6c_1 | 0) + $contentWindowInsets.aa0($this_SubcomposeLayout, $this_SubcomposeLayout.p4u()) | 0) - $contentWindowInsets.ca0($this_SubcomposeLayout, $this_SubcomposeLayout.p4u()) | 0) / 2 | 0, $layoutHeight - $snackbarOffsetFromBottom | 0);
      $this$layout.i7h($bottomBarPlaceable, 0, $layoutHeight - $bottomBarPlaceable.e6c_1 | 0);
      var tmp0_safe_receiver = $fabPlacement;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $this$layout.i7h($fabPlaceable, tmp0_safe_receiver.bei_1, $layoutHeight - ensureNotNull($fabOffsetFromBottom) | 0);
      }
      return Unit_instance;
    };
  }
  function ScaffoldLayout$lambda_4($contentWindowInsets, $topBarContent, $snackbarContent, $fabContent, $fabPosition, $bottomBarContent, $contentPadding, $bodyContent) {
    return function ($this$SubcomposeLayout, constraints) {
      var layoutWidth = _Constraints___get_maxWidth__impl__uuyqc(constraints.n3q_1);
      var layoutHeight = _Constraints___get_maxHeight__impl__dt3e8z(constraints.n3q_1);
      var looseConstraints = Constraints__copy$default_impl_f452rp(constraints.n3q_1, 0, VOID, 0);
      var leftInset = $contentWindowInsets.aa0($this$SubcomposeLayout, $this$SubcomposeLayout.p4u());
      var rightInset = $contentWindowInsets.ca0($this$SubcomposeLayout, $this$SubcomposeLayout.p4u());
      var bottomInset = $contentWindowInsets.da0($this$SubcomposeLayout);
      var topBarPlaceable = first($this$SubcomposeLayout.c7r(ScaffoldLayoutContent_TopBar_getInstance(), $topBarContent)).c6c(looseConstraints);
      var snackbarPlaceable = first($this$SubcomposeLayout.c7r(ScaffoldLayoutContent_Snackbar_getInstance(), $snackbarContent)).c6c(offset(looseConstraints, (-leftInset | 0) - rightInset | 0, -bottomInset | 0));
      var fabPlaceable = first($this$SubcomposeLayout.c7r(ScaffoldLayoutContent_Fab_getInstance(), $fabContent)).c6c(offset(looseConstraints, (-leftInset | 0) - rightInset | 0, -bottomInset | 0));
      var isFabEmpty = fabPlaceable.d6c_1 === 0 && fabPlaceable.e6c_1 === 0;
      var tmp;
      if (!isFabEmpty) {
        var fabWidth = fabPlaceable.d6c_1;
        var fabHeight = fabPlaceable.e6c_1;
        var tmp0_subject = $fabPosition;
        var tmp_0;
        if (tmp0_subject === Companion_getInstance_19().weh_1) {
          var tmp_1;
          if ($this$SubcomposeLayout.p4u().equals(LayoutDirection_Ltr_getInstance())) {
            tmp_1 = $this$SubcomposeLayout.v3q(get_FabSpacing()) + leftInset | 0;
          } else {
            tmp_1 = ((layoutWidth - $this$SubcomposeLayout.v3q(get_FabSpacing()) | 0) - fabWidth | 0) - rightInset | 0;
          }
          tmp_0 = tmp_1;
        } else if (tmp0_subject === Companion_getInstance_19().yeh_1 || tmp0_subject === Companion_getInstance_19().zeh_1) {
          var tmp_2;
          if ($this$SubcomposeLayout.p4u().equals(LayoutDirection_Ltr_getInstance())) {
            tmp_2 = ((layoutWidth - $this$SubcomposeLayout.v3q(get_FabSpacing()) | 0) - fabWidth | 0) - rightInset | 0;
          } else {
            tmp_2 = $this$SubcomposeLayout.v3q(get_FabSpacing()) + leftInset | 0;
          }
          tmp_0 = tmp_2;
        } else {
          tmp_0 = (((layoutWidth - fabWidth | 0) + leftInset | 0) - rightInset | 0) / 2 | 0;
        }
        var fabLeftOffset = tmp_0;
        tmp = new FabPlacement(fabLeftOffset, fabWidth, fabHeight);
      } else {
        tmp = null;
      }
      var fabPlacement = tmp;
      var bottomBarPlaceable = first($this$SubcomposeLayout.c7r(ScaffoldLayoutContent_BottomBar_getInstance(), $bottomBarContent)).c6c(looseConstraints);
      var isBottomBarEmpty = bottomBarPlaceable.d6c_1 === 0 && bottomBarPlaceable.e6c_1 === 0;
      var tmp_3;
      if (fabPlacement == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.let' call
        var tmp_4;
        if (isBottomBarEmpty || $fabPosition === Companion_getInstance_19().zeh_1) {
          tmp_4 = (fabPlacement.dei_1 + $this$SubcomposeLayout.v3q(get_FabSpacing()) | 0) + $contentWindowInsets.da0($this$SubcomposeLayout) | 0;
        } else {
          tmp_4 = (bottomBarPlaceable.e6c_1 + fabPlacement.dei_1 | 0) + $this$SubcomposeLayout.v3q(get_FabSpacing()) | 0;
        }
        tmp_3 = tmp_4;
      }
      var fabOffsetFromBottom = tmp_3;
      var snackbarHeight = snackbarPlaceable.e6c_1;
      var tmp_5;
      if (!(snackbarHeight === 0)) {
        var tmp_6;
        if (fabOffsetFromBottom == null) {
          // Inline function 'kotlin.takeIf' call
          var this_0 = bottomBarPlaceable.e6c_1;
          var tmp_7;
          if (!isBottomBarEmpty) {
            tmp_7 = this_0;
          } else {
            tmp_7 = null;
          }
          tmp_6 = tmp_7;
        } else {
          tmp_6 = fabOffsetFromBottom;
        }
        var tmp3_elvis_lhs = tmp_6;
        tmp_5 = snackbarHeight + (tmp3_elvis_lhs == null ? $contentWindowInsets.da0($this$SubcomposeLayout) : tmp3_elvis_lhs) | 0;
      } else {
        tmp_5 = 0;
      }
      var snackbarOffsetFromBottom = tmp_5;
      var insets = asPaddingValues($contentWindowInsets, $this$SubcomposeLayout);
      var tmp_8;
      if (topBarPlaceable.d6c_1 === 0 && topBarPlaceable.e6c_1 === 0) {
        tmp_8 = insets.e9u();
      } else {
        tmp_8 = $this$SubcomposeLayout.b3r(topBarPlaceable.e6c_1);
      }
      var tmp4_top = tmp_8;
      var tmp_9;
      if (isBottomBarEmpty) {
        tmp_9 = insets.f9u();
      } else {
        tmp_9 = $this$SubcomposeLayout.b3r(bottomBarPlaceable.e6c_1);
      }
      var tmp5_bottom = tmp_9;
      var tmp6_start = calculateStartPadding(insets, $this$SubcomposeLayout.p4u());
      var tmp7_end = calculateEndPadding(insets, $this$SubcomposeLayout.p4u());
      $contentPadding.iei(PaddingValues_0(tmp6_start, tmp4_top, tmp7_end, tmp5_bottom));
      var bodyContentPlaceable = first($this$SubcomposeLayout.c7r(ScaffoldLayoutContent_MainContent_getInstance(), $bodyContent)).c6c(looseConstraints);
      return $this$SubcomposeLayout.i6c(layoutWidth, layoutHeight, VOID, ScaffoldLayout$lambda$lambda(bodyContentPlaceable, topBarPlaceable, snackbarPlaceable, layoutWidth, $contentWindowInsets, $this$SubcomposeLayout, layoutHeight, snackbarOffsetFromBottom, bottomBarPlaceable, fabPlacement, fabPlaceable, fabOffsetFromBottom));
    };
  }
  function ScaffoldLayout$lambda_5($fabPosition, $topBar, $content, $snackbar, $fab, $contentWindowInsets, $bottomBar, $$changed) {
    return function ($composer, $force) {
      ScaffoldLayout($fabPosition, $topBar, $content, $snackbar, $fab, $contentWindowInsets, $bottomBar, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ScaffoldLayoutContent_TopBar_getInstance() {
    ScaffoldLayoutContent_initEntries();
    return ScaffoldLayoutContent_TopBar_instance;
  }
  function ScaffoldLayoutContent_MainContent_getInstance() {
    ScaffoldLayoutContent_initEntries();
    return ScaffoldLayoutContent_MainContent_instance;
  }
  function ScaffoldLayoutContent_Snackbar_getInstance() {
    ScaffoldLayoutContent_initEntries();
    return ScaffoldLayoutContent_Snackbar_instance;
  }
  function ScaffoldLayoutContent_Fab_getInstance() {
    ScaffoldLayoutContent_initEntries();
    return ScaffoldLayoutContent_Fab_instance;
  }
  function ScaffoldLayoutContent_BottomBar_getInstance() {
    ScaffoldLayoutContent_initEntries();
    return ScaffoldLayoutContent_BottomBar_instance;
  }
  var properties_initialized_Scaffold_kt_ayrd2w;
  function _init_properties_Scaffold_kt__o4wwkq() {
    if (!properties_initialized_Scaffold_kt_ayrd2w) {
      properties_initialized_Scaffold_kt_ayrd2w = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      FabSpacing = _Dp___init__impl__ms3zkb(16);
      androidx_compose_material3_ScaffoldDefaults$stable = 0;
      androidx_compose_material3_FabPlacement$stable = 0;
    }
  }
  function get_LocalShapes() {
    _init_properties_Shapes_kt__48nj2q();
    return LocalShapes;
  }
  var LocalShapes;
  var androidx_compose_material3_Shapes$stable;
  var androidx_compose_material3_ShapeDefaults$stable;
  function get_value(_this__u8e3s4, $composer, $changed) {
    _init_properties_Shapes_kt__48nj2q();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1629172543, 'C(<get-value>)389@17399L6:Shapes.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(1629172543, $changed, -1, 'androidx.compose.material3.<get-value> (Shapes.kt:389)');
    }
    var tmp0 = fromToken_1(MaterialTheme_instance.hee($composer_0, 6), _this__u8e3s4);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function Shapes_init_$Init$(extraSmall, small, medium, large, extraLarge, $this) {
    extraSmall = extraSmall === VOID ? ShapeDefaults_getInstance().jei_1 : extraSmall;
    small = small === VOID ? ShapeDefaults_getInstance().kei_1 : small;
    medium = medium === VOID ? ShapeDefaults_getInstance().lei_1 : medium;
    large = large === VOID ? ShapeDefaults_getInstance().mei_1 : large;
    extraLarge = extraLarge === VOID ? ShapeDefaults_getInstance().oei_1 : extraLarge;
    Shapes.call($this, extraSmall, small, medium, large, extraLarge, ShapeDefaults_getInstance().nei_1, ShapeDefaults_getInstance().pei_1, ShapeDefaults_getInstance().qei_1);
    return $this;
  }
  function Shapes_init_$Create$(extraSmall, small, medium, large, extraLarge) {
    return Shapes_init_$Init$(extraSmall, small, medium, large, extraLarge, objectCreate(protoOf(Shapes)));
  }
  function Shapes(extraSmall, small, medium, large, extraLarge, largeIncreased, extraLargeIncreased, extraExtraLarge) {
    extraSmall = extraSmall === VOID ? ShapeDefaults_getInstance().jei_1 : extraSmall;
    small = small === VOID ? ShapeDefaults_getInstance().kei_1 : small;
    medium = medium === VOID ? ShapeDefaults_getInstance().lei_1 : medium;
    large = large === VOID ? ShapeDefaults_getInstance().mei_1 : large;
    extraLarge = extraLarge === VOID ? ShapeDefaults_getInstance().oei_1 : extraLarge;
    largeIncreased = largeIncreased === VOID ? ShapeDefaults_getInstance().nei_1 : largeIncreased;
    extraLargeIncreased = extraLargeIncreased === VOID ? ShapeDefaults_getInstance().pei_1 : extraLargeIncreased;
    extraExtraLarge = extraExtraLarge === VOID ? ShapeDefaults_getInstance().qei_1 : extraExtraLarge;
    this.bej_1 = extraSmall;
    this.cej_1 = small;
    this.dej_1 = medium;
    this.eej_1 = large;
    this.fej_1 = extraLarge;
    this.gej_1 = largeIncreased;
    this.hej_1 = extraLargeIncreased;
    this.iej_1 = extraExtraLarge;
    this.jej_1 = null;
    this.kej_1 = null;
    this.lej_1 = null;
    this.mej_1 = null;
    this.nej_1 = null;
    this.oej_1 = null;
  }
  protoOf(Shapes).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shapes))
      return false;
    if (!equals(this.bej_1, other.bej_1))
      return false;
    if (!equals(this.cej_1, other.cej_1))
      return false;
    if (!equals(this.dej_1, other.dej_1))
      return false;
    if (!equals(this.eej_1, other.eej_1))
      return false;
    if (!equals(this.fej_1, other.fej_1))
      return false;
    if (!equals(this.gej_1, other.gej_1))
      return false;
    if (!equals(this.hej_1, other.hej_1))
      return false;
    if (!equals(this.iej_1, other.iej_1))
      return false;
    return true;
  };
  protoOf(Shapes).hashCode = function () {
    var result = hashCode(this.bej_1);
    result = imul(31, result) + hashCode(this.cej_1) | 0;
    result = imul(31, result) + hashCode(this.dej_1) | 0;
    result = imul(31, result) + hashCode(this.eej_1) | 0;
    result = imul(31, result) + hashCode(this.fej_1) | 0;
    result = imul(31, result) + hashCode(this.gej_1) | 0;
    result = imul(31, result) + hashCode(this.hej_1) | 0;
    result = imul(31, result) + hashCode(this.iej_1) | 0;
    return result;
  };
  protoOf(Shapes).toString = function () {
    return 'Shapes(' + ('extraSmall=' + toString(this.bej_1) + ', ') + ('small=' + toString(this.cej_1) + ', ') + ('medium=' + toString(this.dej_1) + ', ') + ('large=' + toString(this.eej_1) + ', ') + ('largeIncreased=' + toString(this.gej_1) + ', ') + ('extraLarge=' + toString(this.fej_1) + ', ') + ('extralargeIncreased=' + toString(this.hej_1) + ', ') + ('extraExtraLarge=' + toString(this.iej_1) + ')');
  };
  function fromToken_1(_this__u8e3s4, value) {
    _init_properties_Shapes_kt__48nj2q();
    var tmp;
    switch (value.i2_1) {
      case 1:
        tmp = _this__u8e3s4.fej_1;
        break;
      case 2:
        tmp = _this__u8e3s4.hej_1;
        break;
      case 0:
        tmp = _this__u8e3s4.iej_1;
        break;
      case 3:
        tmp = top(_this__u8e3s4.fej_1);
        break;
      case 4:
        tmp = _this__u8e3s4.bej_1;
        break;
      case 5:
        tmp = top(_this__u8e3s4.bej_1);
        break;
      case 6:
        tmp = get_CircleShape();
        break;
      case 7:
        tmp = _this__u8e3s4.eej_1;
        break;
      case 9:
        tmp = _this__u8e3s4.gej_1;
        break;
      case 8:
        tmp = end(_this__u8e3s4.eej_1);
        break;
      case 11:
        tmp = top(_this__u8e3s4.eej_1);
        break;
      case 12:
        tmp = _this__u8e3s4.dej_1;
        break;
      case 13:
        tmp = get_RectangleShape();
        break;
      case 14:
        tmp = _this__u8e3s4.cej_1;
        break;
      case 10:
        tmp = start(_this__u8e3s4.eej_1);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function ShapeDefaults() {
    ShapeDefaults_instance = this;
    this.jei_1 = ShapeTokens_getInstance().tej_1;
    this.kei_1 = ShapeTokens_getInstance().dek_1;
    this.lei_1 = ShapeTokens_getInstance().bek_1;
    this.mei_1 = ShapeTokens_getInstance().wej_1;
    this.nei_1 = ShapeTokens_getInstance().yej_1;
    this.oei_1 = ShapeTokens_getInstance().qej_1;
    this.pei_1 = ShapeTokens_getInstance().rej_1;
    this.qei_1 = ShapeTokens_getInstance().pej_1;
    this.rei_1 = ShapeTokens_getInstance().lek_1;
    this.sei_1 = ShapeTokens_getInstance().hek_1;
    this.tei_1 = ShapeTokens_getInstance().mek_1;
    this.uei_1 = ShapeTokens_getInstance().kek_1;
    this.vei_1 = ShapeTokens_getInstance().iek_1;
    this.wei_1 = ShapeTokens_getInstance().jek_1;
    this.xei_1 = ShapeTokens_getInstance().fek_1;
    this.yei_1 = ShapeTokens_getInstance().gek_1;
    this.zei_1 = ShapeTokens_getInstance().eek_1;
    this.aej_1 = CornerSize(100);
  }
  var ShapeDefaults_instance;
  function ShapeDefaults_getInstance() {
    if (ShapeDefaults_instance == null)
      new ShapeDefaults();
    return ShapeDefaults_instance;
  }
  function top(_this__u8e3s4, bottomSize) {
    bottomSize = bottomSize === VOID ? ShapeDefaults_getInstance().rei_1 : bottomSize;
    _init_properties_Shapes_kt__48nj2q();
    return _this__u8e3s4.wd7(VOID, VOID, bottomSize, bottomSize);
  }
  function end(_this__u8e3s4, startSize) {
    startSize = startSize === VOID ? ShapeDefaults_getInstance().rei_1 : startSize;
    _init_properties_Shapes_kt__48nj2q();
    return _this__u8e3s4.wd7(startSize, VOID, VOID, startSize);
  }
  function start(_this__u8e3s4, endSize) {
    endSize = endSize === VOID ? ShapeDefaults_getInstance().rei_1 : endSize;
    _init_properties_Shapes_kt__48nj2q();
    return _this__u8e3s4.wd7(VOID, endSize, endSize);
  }
  function LocalShapes$lambda() {
    _init_properties_Shapes_kt__48nj2q();
    return Shapes_init_$Create$();
  }
  var properties_initialized_Shapes_kt_91wqbw;
  function _init_properties_Shapes_kt__48nj2q() {
    if (!properties_initialized_Shapes_kt_91wqbw) {
      properties_initialized_Shapes_kt_91wqbw = true;
      LocalShapes = staticCompositionLocalOf(LocalShapes$lambda);
      androidx_compose_material3_Shapes$stable = 0;
      androidx_compose_material3_ShapeDefaults$stable = 0;
    }
  }
  var androidx_compose_material3_SnackbarHostState$stable;
  var androidx_compose_material3_SplitButtonDefaults$stable;
  var androidx_compose_material3_SplitButtonShapes$stable;
  function get_LocalAbsoluteTonalElevation() {
    _init_properties_Surface_kt__8o7unv();
    return LocalAbsoluteTonalElevation;
  }
  var LocalAbsoluteTonalElevation;
  function Surface(modifier, shape, color, contentColor, tonalElevation, shadowElevation, border, content, $composer, $changed, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var shape_0 = {_v: shape};
    var color_0 = {_v: new Color(color)};
    var contentColor_0 = contentColor;
    var tonalElevation_0 = tonalElevation;
    var shadowElevation_0 = {_v: new Dp(shadowElevation)};
    var border_0 = {_v: border};
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1093433818, 'C(Surface)P(4,6,1:c#ui.graphics.Color,3:c#ui.graphics.Color,7:c#ui.unit.Dp,5:c#ui.unit.Dp)100@5265L11,101@5312L22,107@5530L7,111@5704L884,108@5559L1029:Surface.kt#uh7d8r');
    if (!(($default & 1) === 0)) {
      modifier_0._v = Companion_instance;
    }
    if (!(($default & 2) === 0)) {
      shape_0._v = get_RectangleShape();
    }
    if (!(($default & 4) === 0)) {
      color_0._v = new Color(MaterialTheme_instance.le1($composer_0, 6).de2_1);
    }
    if (!(($default & 8) === 0))
      contentColor_0 = contentColorFor_0(color_0._v.f4l_1, $composer_0, 14 & $changed >> 6);
    if (!(($default & 16) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tonalElevation_0 = _Dp___init__impl__ms3zkb(0);
    }
    if (!(($default & 32) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      shadowElevation_0._v = new Dp(tmp$ret$1);
    }
    if (!(($default & 64) === 0)) {
      border_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(-1093433818, $changed, -1, 'androidx.compose.material3.Surface (Surface.kt:106)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalAbsoluteTonalElevation();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g21(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = tmp0.h3r_1;
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    var other = tonalElevation_0;
    var absoluteElevation = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_0) + _Dp___get_value__impl__geb1vb(other));
    var tmp = [get_LocalContentColor().e2m(new Color(contentColor_0)), get_LocalAbsoluteTonalElevation().e2m(new Dp(absoluteElevation))];
    // Inline function 'kotlin.run' call
    var dispatchReceiver = rememberComposableLambda(421772006, true, Surface$lambda(modifier_0, shape_0, color_0, absoluteElevation, border_0, shadowElevation_0, content), $composer_0, 54);
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_2 = $composer_0;
    sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_2.w20(dispatchReceiver);
    // Inline function 'kotlin.let' call
    var it = $composer_2.u20();
    var tmp_0;
    if (invalid || it === Companion_getInstance_2().s1z_1) {
      var value = ComposableLambda$invoke$ref_45(dispatchReceiver);
      $composer_2.v20(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp0_1 = tmp_0;
    sourceInformationMarkerEnd($composer_2);
    CompositionLocalProvider_0(tmp, tmp0_1, $composer_0, 48 | androidx_compose_runtime_ProvidedValue$stableprop_getter());
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function surface(_this__u8e3s4, shape, backgroundColor, border_0, shadowElevation) {
    _init_properties_Surface_kt__8o7unv();
    var tmp;
    if (shadowElevation > 0.0) {
      tmp = graphicsLayer_0(Companion_instance, VOID, VOID, VOID, VOID, VOID, shadowElevation, VOID, VOID, VOID, VOID, VOID, shape, false);
    } else {
      tmp = Companion_instance;
    }
    return clip(background(_this__u8e3s4.y61(tmp).y61(!(border_0 == null) ? border(Companion_instance, border_0, shape) : Companion_instance), backgroundColor, shape), shape);
  }
  function surfaceColorAtElevation_0(color, elevation, $composer, $changed) {
    _init_properties_Surface_kt__8o7unv();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -2079918090, 'C(surfaceColorAtElevation)P(0:c#ui.graphics.Color,1:c#ui.unit.Dp)524@26643L11,524@26655L37:Surface.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-2079918090, $changed, -1, 'androidx.compose.material3.surfaceColorAtElevation (Surface.kt:524)');
    }
    var tmp0 = applyTonalElevation(MaterialTheme_instance.le1($composer_0, 6), color, elevation, $composer_0, 112 & $changed << 3 | 896 & $changed << 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function LocalAbsoluteTonalElevation$lambda() {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return new Dp(tmp$ret$0);
  }
  function sam$androidx_compose_ui_input_pointer_PointerInputEventHandler$0_0(function_0) {
    this.nek_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_input_pointer_PointerInputEventHandler$0_0).k76 = function (_this__u8e3s4, $completion) {
    return this.nek_1(_this__u8e3s4, $completion);
  };
  protoOf(sam$androidx_compose_ui_input_pointer_PointerInputEventHandler$0_0).r2 = function () {
    return this.nek_1;
  };
  protoOf(sam$androidx_compose_ui_input_pointer_PointerInputEventHandler$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, PointerInputEventHandler) : false) {
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
  protoOf(sam$androidx_compose_ui_input_pointer_PointerInputEventHandler$0_0).hashCode = function () {
    return hashCode(this.r2());
  };
  function Surface$lambda$lambda($this$semantics) {
    _init_properties_Surface_kt__8o7unv();
    set_isContainer($this$semantics, true);
    return Unit_instance;
  }
  function Surface$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$lambda$slambda).wam = function ($this$pointerInput, $completion) {
    var tmp = this.xam($this$pointerInput, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(Surface$lambda$slambda).e9 = function (p1, $completion) {
    return this.wam((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$lambda$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        if (tmp === 0) {
          this.n8_1 = 1;
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
  protoOf(Surface$lambda$slambda).xam = function ($this$pointerInput, completion) {
    var i = new Surface$lambda$slambda(completion);
    i.wek_1 = $this$pointerInput;
    return i;
  };
  function Surface$lambda$slambda_0(resultContinuation) {
    var i = new Surface$lambda$slambda(resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.wam($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$lambda($modifier, $shape, $color, $absoluteElevation, $border, $shadowElevation, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C118@5906L69,120@6078L7,122@6194L256,128@6491L2,112@5714L868:Surface.kt#uh7d8r');
      var tmp;
      if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(421772006, $changed, -1, 'androidx.compose.material3.Surface.<anonymous> (Surface.kt:112)');
        }
        var tmp_0 = $modifier._v;
        var tmp_1 = $shape._v;
        var tmp_2 = surfaceColorAtElevation_0($color._v.f4l_1, $absoluteElevation, $composer_0, 0);
        var tmp_3 = $border._v;
        // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
        var this_0 = get_LocalDensity();
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_1.g21(this_0);
        sourceInformationMarkerEnd($composer_1);
        // Inline function 'kotlin.with' call
        var tmp$ret$1 = tmp0.u3q($shadowElevation._v.h3r_1);
        var tmp_4 = surface(tmp_0, tmp_1, tmp_2, tmp_3, tmp$ret$1);
        sourceInformationMarkerStart($composer_0, 1595987878, 'CC(remember):Surface.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.u20();
        var tmp_5;
        if (false || it === Companion_getInstance_2().s1z_1) {
          var value = Surface$lambda$lambda;
          $composer_0.v20(value);
          tmp_5 = value;
        } else {
          tmp_5 = it;
        }
        var tmp0_group = tmp_5;
        sourceInformationMarkerEnd($composer_0);
        var tmp_6 = semantics(tmp_4, false, tmp0_group);
        sourceInformationMarkerStart($composer_0, 1595997128, 'CC(remember):Surface.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.u20();
        var tmp_7;
        if (false || it_0 === Companion_getInstance_2().s1z_1) {
          var tmp_8 = Surface$lambda$slambda_0(null);
          var value_0 = new sam$androidx_compose_ui_input_pointer_PointerInputEventHandler$0_0(tmp_8);
          $composer_0.v20(value_0);
          tmp_7 = value_0;
        } else {
          tmp_7 = it_0;
        }
        var tmp1_group = tmp_7;
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = pointerInput(tmp_6, Unit_instance, tmp1_group);
        var contentAlignment = null;
        var propagateMinConstraints = true;
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1042775818, 'CC(Box)P(2,1,3)71@3424L131:Box.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier = Companion_instance;
        if (!((2 & 2) === 0))
          contentAlignment = Companion_getInstance().h60_1;
        if (!((2 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -1159599143, 'CC(Layout)P(!1,2)81@3355L27,84@3521L416:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_instance;
        var compositeKeyHash = get_currentCompositeKeyHashCode($composer_3, 0).hashCode();
        var localMap = $composer_3.f21();
        var materialized = materialize($composer_3, modifier_0);
        var tmp0_0 = Companion_getInstance_0().d7s_1;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
        var tmp_9 = $composer_4.t1z();
        if (!isInterface(tmp_9, Applier)) {
          invalidApplier();
        }
        $composer_4.n20();
        if ($composer_4.u1z()) {
          $composer_4.o20(tmp0_0);
        } else {
          $composer_4.p20();
        }
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_4);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_0().i7s_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_0().h7s_1);
        Updater__init_impl_uaeges($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_0().l7s_1);
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_0().m7s_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_0().f7s_1);
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, 1833054614, 'C72@3469L9:Box.kt#2w3rfo');
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, 258689390, 'C131@6563L9:Surface.kt#uh7d8r');
        $content($composer_6, 0);
        sourceInformationMarkerEnd($composer_6);
        sourceInformationMarkerEnd($composer_5);
        $composer_4.q20();
        sourceInformationMarkerEnd($composer_4);
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        var tmp_10;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_10 = Unit_instance;
        }
        tmp = tmp_10;
      } else {
        $composer_0.l20();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_45(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (!properties_initialized_Surface_kt_k203pf) {
      properties_initialized_Surface_kt_k203pf = true;
      LocalAbsoluteTonalElevation = compositionLocalOf(VOID, LocalAbsoluteTonalElevation$lambda);
    }
  }
  var androidx_compose_material3_TabIndicatorModifier$stable;
  var androidx_compose_material3_TabIndicatorOffsetNode$stable;
  var androidx_compose_material3_TabPosition$stable;
  var androidx_compose_material3_TabRowDefaults$stable;
  function get_LocalTextStyle() {
    _init_properties_Text_kt__l2j80d();
    return LocalTextStyle;
  }
  var LocalTextStyle;
  function Text(text, modifier, color, autoSize, fontSize, fontStyle, fontWeight, fontFamily, letterSpacing, textDecoration, textAlign, lineHeight, overflow, softWrap, maxLines, minLines, onTextLayout, style, $composer, $changed, $changed1, $default) {
    _init_properties_Text_kt__l2j80d();
    var modifier_0 = {_v: modifier};
    var color_0 = {_v: new Color(color)};
    var autoSize_0 = {_v: autoSize};
    var fontSize_0 = {_v: new TextUnit(fontSize)};
    var tmp = fontStyle;
    var fontStyle_0 = {_v: tmp == null ? null : new FontStyle(tmp)};
    var fontWeight_0 = {_v: fontWeight};
    var fontFamily_0 = {_v: fontFamily};
    var letterSpacing_0 = {_v: new TextUnit(letterSpacing)};
    var textDecoration_0 = {_v: textDecoration};
    var tmp_0 = textAlign;
    var textAlign_0 = {_v: tmp_0 == null ? null : new TextAlign(tmp_0)};
    var lineHeight_0 = {_v: new TextUnit(lineHeight)};
    var overflow_0 = {_v: new TextOverflow(overflow)};
    var softWrap_0 = {_v: softWrap};
    var maxLines_0 = {_v: maxLines};
    var minLines_0 = {_v: minLines};
    var onTextLayout_0 = {_v: onTextLayout};
    var style_0 = {_v: style};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.g20(1809465675);
    sourceInformation($composer_0, 'C(Text)P(15,10,1:c#ui.graphics.Color!1,3:c#ui.unit.TextUnit,4:c#ui.text.font.FontStyle,5!1,6:c#ui.unit.TextUnit,17,16:c#ui.text.style.TextAlign,7:c#ui.unit.TextUnit,12:c#ui.text.style.TextOverflow,13)125@6459L698:Text.kt#uh7d8r');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w20(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w20(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.a21(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.f4l_1))) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.b21(autoSize_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.a21(_TextUnit___get_packedValue__impl__it60w4(fontSize_0._v.h3s_1)) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.w20(fontStyle_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.w20(fontWeight_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.w20(fontFamily_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.a21(_TextUnit___get_packedValue__impl__it60w4(letterSpacing_0._v.h3s_1)) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.w20(textDecoration_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.w20(textAlign_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ($composer_0.a21(_TextUnit___get_packedValue__impl__it60w4(lineHeight_0._v.h3s_1)) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ($composer_0.y20(_TextOverflow___get_value__impl__vugm5i(overflow_0._v.e5p_1)) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 3072) === 0)
      $dirty1 = $dirty1 | ($composer_0.x20(softWrap_0._v) ? 2048 : 1024);
    if (!(($default & 16384) === 0))
      $dirty1 = $dirty1 | 24576;
    else if (($changed1 & 24576) === 0)
      $dirty1 = $dirty1 | ($composer_0.y20(maxLines_0._v) ? 16384 : 8192);
    if (!(($default & 32768) === 0))
      $dirty1 = $dirty1 | 196608;
    else if (($changed1 & 196608) === 0)
      $dirty1 = $dirty1 | ($composer_0.y20(minLines_0._v) ? 131072 : 65536);
    if (!(($default & 65536) === 0))
      $dirty1 = $dirty1 | 1572864;
    else if (($changed1 & 1572864) === 0)
      $dirty1 = $dirty1 | ($composer_0.b21(onTextLayout_0._v) ? 1048576 : 524288);
    if (($changed1 & 12582912) === 0)
      $dirty1 = $dirty1 | (($default & 131072) === 0 && $composer_0.w20(style_0._v) ? 8388608 : 4194304);
    if ($composer_0.d21(!(($dirty & 306783379) === 306783378) || !(($dirty1 & 4793491) === 4793490), $dirty & 1)) {
      $composer_0.e20();
      sourceInformation($composer_0, '120@6346L7');
      if (($changed & 1) === 0 || $composer_0.w1z()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 4) === 0)) {
          color_0._v = new Color(Companion_getInstance_1().y4h_1);
        }
        if (!(($default & 8) === 0)) {
          autoSize_0._v = null;
        }
        if (!(($default & 16) === 0)) {
          fontSize_0._v = new TextUnit(Companion_getInstance_10().f3s_1);
        }
        if (!(($default & 32) === 0)) {
          fontStyle_0._v = null;
        }
        if (!(($default & 64) === 0)) {
          fontWeight_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          fontFamily_0._v = null;
        }
        if (!(($default & 256) === 0)) {
          letterSpacing_0._v = new TextUnit(Companion_getInstance_10().f3s_1);
        }
        if (!(($default & 512) === 0)) {
          textDecoration_0._v = null;
        }
        if (!(($default & 1024) === 0)) {
          textAlign_0._v = null;
        }
        if (!(($default & 2048) === 0)) {
          lineHeight_0._v = new TextUnit(Companion_getInstance_10().f3s_1);
        }
        if (!(($default & 4096) === 0)) {
          overflow_0._v = new TextOverflow(Companion_getInstance_11().t59_1);
        }
        if (!(($default & 8192) === 0)) {
          softWrap_0._v = true;
        }
        if (!(($default & 16384) === 0)) {
          maxLines_0._v = 2147483647;
        }
        if (!(($default & 32768) === 0)) {
          minLines_0._v = 1;
        }
        if (!(($default & 65536) === 0)) {
          onTextLayout_0._v = null;
        }
        if (!(($default & 131072) === 0)) {
          var tmp0 = get_LocalTextStyle();
          // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
          var $composer_1 = $composer_0;
          sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
          var tmp0_0 = $composer_1.g21(tmp0);
          sourceInformationMarkerEnd($composer_1);
          style_0._v = tmp0_0;
          $dirty1 = $dirty1 & -29360129;
        }
      } else {
        $composer_0.l20();
        if (!(($default & 131072) === 0))
          $dirty1 = $dirty1 & -29360129;
      }
      $composer_0.f20();
      if (isTraceInProgress()) {
        traceEventStart(1809465675, $dirty, $dirty1, 'androidx.compose.material3.Text (Text.kt:121)');
      }
      $composer_0.a20(-565217490);
      sourceInformation($composer_0, '');
      // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
      var this_0 = color_0._v.f4l_1;
      var tmp_1;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
        tmp_1 = this_0;
      } else {
        $composer_0.a20(-565216717);
        sourceInformation($composer_0, '*123@6442L7');
        // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
        var this_1 = style_0._v.z4h();
        var tmp_2;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        if (!equals(_Color___get_value__impl__1pls5m(this_1), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
          tmp_2 = this_1;
        } else {
          var tmp0_1 = get_LocalContentColor();
          // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
          var $composer_2 = $composer_0;
          sourceInformationMarkerStart($composer_2, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
          var tmp0_2 = $composer_2.g21(tmp0_1);
          sourceInformationMarkerEnd($composer_2);
          tmp_2 = tmp0_2.f4l_1;
        }
        var tmp0_group = tmp_2;
        $composer_0.b20();
        tmp_1 = tmp0_group;
      }
      var tmp0_group_0 = tmp_1;
      $composer_0.b20();
      var textColor = tmp0_group_0;
      var tmp_3 = modifier_0._v;
      var tmp_4 = textAlign_0._v;
      var tmp0_elvis_lhs = tmp_4 == null ? null : tmp_4.v5c_1;
      var tmp_5;
      var tmp_6 = tmp0_elvis_lhs;
      if ((tmp_6 == null ? null : new TextAlign(tmp_6)) == null) {
        tmp_5 = Companion_getInstance_12().u5b_1;
      } else {
        tmp_5 = tmp0_elvis_lhs;
      }
      var tmp1_textAlign = tmp_5;
      var tmp_7 = style_0._v;
      var tmp_8 = fontSize_0._v;
      var tmp_9 = fontWeight_0._v;
      var tmp_10 = fontStyle_0._v;
      var tmp_11 = tmp_7.q5h(textColor, tmp_8.h3s_1, tmp_9, tmp_10 == null ? null : tmp_10.p5d_1, VOID, fontFamily_0._v, VOID, letterSpacing_0._v.h3s_1, VOID, VOID, VOID, VOID, textDecoration_0._v, VOID, VOID, tmp1_textAlign, VOID, lineHeight_0._v.h3s_1);
      var tmp_12 = onTextLayout_0._v;
      var tmp_13 = overflow_0._v;
      var tmp_14 = softWrap_0._v;
      var tmp_15 = maxLines_0._v;
      var tmp_16 = minLines_0._v;
      BasicText(text, tmp_3, tmp_11, tmp_12, tmp_13.e5p_1, tmp_14, tmp_15, tmp_16, null, autoSize_0._v, $composer_0, 14 & $dirty | 112 & $dirty | 7168 & $dirty1 >> 9 | 57344 & $dirty1 << 6 | 458752 & $dirty1 << 6 | 3670016 & $dirty1 << 6 | 29360128 & $dirty1 << 6 | 1879048192 & $dirty << 18, 256);
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
      tmp1_safe_receiver.k2m(Text$lambda(text, modifier_0, color_0, autoSize_0, fontSize_0, fontStyle_0, fontWeight_0, fontFamily_0, letterSpacing_0, textDecoration_0, textAlign_0, lineHeight_0, overflow_0, softWrap_0, maxLines_0, minLines_0, onTextLayout_0, style_0, $changed, $changed1, $default));
    }
  }
  function ProvideTextStyle(value, content, $composer, $changed) {
    _init_properties_Text_kt__l2j80d();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.g20(15327438);
    sourceInformation($composer_0, 'C(ProvideTextStyle)P(1)665@30044L7,666@30069L80:Text.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w20(value) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.b21(content) ? 32 : 16);
    if ($composer_0.d21(!(($dirty & 19) === 18), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(15327438, $dirty, -1, 'androidx.compose.material3.ProvideTextStyle (Text.kt:664)');
      }
      var tmp0 = get_LocalTextStyle();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_1.g21(tmp0);
      sourceInformationMarkerEnd($composer_1);
      var mergedStyle = tmp0_0.o5h(value);
      CompositionLocalProvider(get_LocalTextStyle().e2m(mergedStyle), content, $composer_0, androidx_compose_runtime_ProvidedValue$stableprop_getter() | 112 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    var tmp0_safe_receiver = $composer_0.h20();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k2m(ProvideTextStyle$lambda(value, content, $changed));
    }
  }
  function LocalTextStyle$lambda() {
    _init_properties_Text_kt__l2j80d();
    return get_DefaultTextStyle();
  }
  function Text$lambda($text, $modifier, $color, $autoSize, $fontSize, $fontStyle, $fontWeight, $fontFamily, $letterSpacing, $textDecoration, $textAlign, $lineHeight, $overflow, $softWrap, $maxLines, $minLines, $onTextLayout, $style, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      var tmp = $modifier._v;
      var tmp_0 = $color._v;
      var tmp_1 = $autoSize._v;
      var tmp_2 = $fontSize._v;
      var tmp_3 = $fontStyle._v;
      var tmp_4 = tmp_3 == null ? null : tmp_3.p5d_1;
      var tmp_5 = $fontWeight._v;
      var tmp_6 = $fontFamily._v;
      var tmp_7 = $letterSpacing._v;
      var tmp_8 = $textDecoration._v;
      var tmp_9 = $textAlign._v;
      Text($text, tmp, tmp_0.f4l_1, tmp_1, tmp_2.h3s_1, tmp_4, tmp_5, tmp_6, tmp_7.h3s_1, tmp_8, tmp_9 == null ? null : tmp_9.v5c_1, $lineHeight._v.h3s_1, $overflow._v.e5p_1, $softWrap._v, $maxLines._v, $minLines._v, $onTextLayout._v, $style._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function ProvideTextStyle$lambda($value, $content, $$changed) {
    return function ($composer, $force) {
      ProvideTextStyle($value, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_Text_kt_kgdrtb;
  function _init_properties_Text_kt__l2j80d() {
    if (!properties_initialized_Text_kt_kgdrtb) {
      properties_initialized_Text_kt_kgdrtb = true;
      var tmp = structuralEqualityPolicy();
      LocalTextStyle = compositionLocalOf(tmp, LocalTextStyle$lambda);
    }
  }
  var androidx_compose_material3_TextFieldDefaults$stable;
  var androidx_compose_material3_OutlinedTextFieldDefaults$stable;
  var androidx_compose_material3_TextFieldColors$stable;
  var androidx_compose_material3_TextFieldLabelPosition_Attached$stable;
  var androidx_compose_material3_TextFieldLabelPosition_Above$stable;
  var androidx_compose_material3_TextFieldLabelPosition$stable;
  var androidx_compose_material3_TimePickerDialogDefaults$stable;
  var androidx_compose_material3_ToggleButtonDefaults$stable;
  var androidx_compose_material3_ToggleButtonColors$stable;
  var androidx_compose_material3_ToggleButtonShapes$stable;
  function get_LocalTypography() {
    _init_properties_Typography_kt__rm3fch();
    return LocalTypography;
  }
  var LocalTypography;
  var androidx_compose_material3_Typography$stable;
  function Typography_init_$Init$(displayLarge, displayMedium, displaySmall, headlineLarge, headlineMedium, headlineSmall, titleLarge, titleMedium, titleSmall, bodyLarge, bodyMedium, bodySmall, labelLarge, labelMedium, labelSmall, $this) {
    displayLarge = displayLarge === VOID ? TypographyTokens_getInstance().ael_1 : displayLarge;
    displayMedium = displayMedium === VOID ? TypographyTokens_getInstance().bel_1 : displayMedium;
    displaySmall = displaySmall === VOID ? TypographyTokens_getInstance().cel_1 : displaySmall;
    headlineLarge = headlineLarge === VOID ? TypographyTokens_getInstance().del_1 : headlineLarge;
    headlineMedium = headlineMedium === VOID ? TypographyTokens_getInstance().eel_1 : headlineMedium;
    headlineSmall = headlineSmall === VOID ? TypographyTokens_getInstance().fel_1 : headlineSmall;
    titleLarge = titleLarge === VOID ? TypographyTokens_getInstance().jel_1 : titleLarge;
    titleMedium = titleMedium === VOID ? TypographyTokens_getInstance().kel_1 : titleMedium;
    titleSmall = titleSmall === VOID ? TypographyTokens_getInstance().lel_1 : titleSmall;
    bodyLarge = bodyLarge === VOID ? TypographyTokens_getInstance().xek_1 : bodyLarge;
    bodyMedium = bodyMedium === VOID ? TypographyTokens_getInstance().yek_1 : bodyMedium;
    bodySmall = bodySmall === VOID ? TypographyTokens_getInstance().zek_1 : bodySmall;
    labelLarge = labelLarge === VOID ? TypographyTokens_getInstance().gel_1 : labelLarge;
    labelMedium = labelMedium === VOID ? TypographyTokens_getInstance().hel_1 : labelMedium;
    labelSmall = labelSmall === VOID ? TypographyTokens_getInstance().iel_1 : labelSmall;
    Typography.call($this, displayLarge, displayMedium, displaySmall, headlineLarge, headlineMedium, headlineSmall, titleLarge, titleMedium, titleSmall, bodyLarge, bodyMedium, bodySmall, labelLarge, labelMedium, labelSmall, displayLarge, displayMedium, displaySmall, headlineLarge, headlineMedium, headlineSmall, titleLarge, titleMedium, titleSmall, bodyLarge, bodyMedium, bodySmall, labelLarge, labelMedium, labelSmall);
    return $this;
  }
  function Typography_init_$Create$(displayLarge, displayMedium, displaySmall, headlineLarge, headlineMedium, headlineSmall, titleLarge, titleMedium, titleSmall, bodyLarge, bodyMedium, bodySmall, labelLarge, labelMedium, labelSmall) {
    return Typography_init_$Init$(displayLarge, displayMedium, displaySmall, headlineLarge, headlineMedium, headlineSmall, titleLarge, titleMedium, titleSmall, bodyLarge, bodyMedium, bodySmall, labelLarge, labelMedium, labelSmall, objectCreate(protoOf(Typography)));
  }
  function Typography(displayLarge, displayMedium, displaySmall, headlineLarge, headlineMedium, headlineSmall, titleLarge, titleMedium, titleSmall, bodyLarge, bodyMedium, bodySmall, labelLarge, labelMedium, labelSmall, displayLargeEmphasized, displayMediumEmphasized, displaySmallEmphasized, headlineLargeEmphasized, headlineMediumEmphasized, headlineSmallEmphasized, titleLargeEmphasized, titleMediumEmphasized, titleSmallEmphasized, bodyLargeEmphasized, bodyMediumEmphasized, bodySmallEmphasized, labelLargeEmphasized, labelMediumEmphasized, labelSmallEmphasized) {
    displayLarge = displayLarge === VOID ? TypographyTokens_getInstance().ael_1 : displayLarge;
    displayMedium = displayMedium === VOID ? TypographyTokens_getInstance().bel_1 : displayMedium;
    displaySmall = displaySmall === VOID ? TypographyTokens_getInstance().cel_1 : displaySmall;
    headlineLarge = headlineLarge === VOID ? TypographyTokens_getInstance().del_1 : headlineLarge;
    headlineMedium = headlineMedium === VOID ? TypographyTokens_getInstance().eel_1 : headlineMedium;
    headlineSmall = headlineSmall === VOID ? TypographyTokens_getInstance().fel_1 : headlineSmall;
    titleLarge = titleLarge === VOID ? TypographyTokens_getInstance().jel_1 : titleLarge;
    titleMedium = titleMedium === VOID ? TypographyTokens_getInstance().kel_1 : titleMedium;
    titleSmall = titleSmall === VOID ? TypographyTokens_getInstance().lel_1 : titleSmall;
    bodyLarge = bodyLarge === VOID ? TypographyTokens_getInstance().xek_1 : bodyLarge;
    bodyMedium = bodyMedium === VOID ? TypographyTokens_getInstance().yek_1 : bodyMedium;
    bodySmall = bodySmall === VOID ? TypographyTokens_getInstance().zek_1 : bodySmall;
    labelLarge = labelLarge === VOID ? TypographyTokens_getInstance().gel_1 : labelLarge;
    labelMedium = labelMedium === VOID ? TypographyTokens_getInstance().hel_1 : labelMedium;
    labelSmall = labelSmall === VOID ? TypographyTokens_getInstance().iel_1 : labelSmall;
    displayLargeEmphasized = displayLargeEmphasized === VOID ? TypographyTokens_getInstance().pel_1 : displayLargeEmphasized;
    displayMediumEmphasized = displayMediumEmphasized === VOID ? TypographyTokens_getInstance().qel_1 : displayMediumEmphasized;
    displaySmallEmphasized = displaySmallEmphasized === VOID ? TypographyTokens_getInstance().rel_1 : displaySmallEmphasized;
    headlineLargeEmphasized = headlineLargeEmphasized === VOID ? TypographyTokens_getInstance().sel_1 : headlineLargeEmphasized;
    headlineMediumEmphasized = headlineMediumEmphasized === VOID ? TypographyTokens_getInstance().tel_1 : headlineMediumEmphasized;
    headlineSmallEmphasized = headlineSmallEmphasized === VOID ? TypographyTokens_getInstance().uel_1 : headlineSmallEmphasized;
    titleLargeEmphasized = titleLargeEmphasized === VOID ? TypographyTokens_getInstance().yel_1 : titleLargeEmphasized;
    titleMediumEmphasized = titleMediumEmphasized === VOID ? TypographyTokens_getInstance().zel_1 : titleMediumEmphasized;
    titleSmallEmphasized = titleSmallEmphasized === VOID ? TypographyTokens_getInstance().aem_1 : titleSmallEmphasized;
    bodyLargeEmphasized = bodyLargeEmphasized === VOID ? TypographyTokens_getInstance().mel_1 : bodyLargeEmphasized;
    bodyMediumEmphasized = bodyMediumEmphasized === VOID ? TypographyTokens_getInstance().nel_1 : bodyMediumEmphasized;
    bodySmallEmphasized = bodySmallEmphasized === VOID ? TypographyTokens_getInstance().oel_1 : bodySmallEmphasized;
    labelLargeEmphasized = labelLargeEmphasized === VOID ? TypographyTokens_getInstance().vel_1 : labelLargeEmphasized;
    labelMediumEmphasized = labelMediumEmphasized === VOID ? TypographyTokens_getInstance().wel_1 : labelMediumEmphasized;
    labelSmallEmphasized = labelSmallEmphasized === VOID ? TypographyTokens_getInstance().xel_1 : labelSmallEmphasized;
    this.lee_1 = displayLarge;
    this.mee_1 = displayMedium;
    this.nee_1 = displaySmall;
    this.oee_1 = headlineLarge;
    this.pee_1 = headlineMedium;
    this.qee_1 = headlineSmall;
    this.ree_1 = titleLarge;
    this.see_1 = titleMedium;
    this.tee_1 = titleSmall;
    this.uee_1 = bodyLarge;
    this.vee_1 = bodyMedium;
    this.wee_1 = bodySmall;
    this.xee_1 = labelLarge;
    this.yee_1 = labelMedium;
    this.zee_1 = labelSmall;
    this.aef_1 = displayLargeEmphasized;
    this.bef_1 = displayMediumEmphasized;
    this.cef_1 = displaySmallEmphasized;
    this.def_1 = headlineLargeEmphasized;
    this.eef_1 = headlineMediumEmphasized;
    this.fef_1 = headlineSmallEmphasized;
    this.gef_1 = titleLargeEmphasized;
    this.hef_1 = titleMediumEmphasized;
    this.ief_1 = titleSmallEmphasized;
    this.jef_1 = bodyLargeEmphasized;
    this.kef_1 = bodyMediumEmphasized;
    this.lef_1 = bodySmallEmphasized;
    this.mef_1 = labelLargeEmphasized;
    this.nef_1 = labelMediumEmphasized;
    this.oef_1 = labelSmallEmphasized;
  }
  protoOf(Typography).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Typography))
      return false;
    if (!this.lee_1.equals(other.lee_1))
      return false;
    if (!this.mee_1.equals(other.mee_1))
      return false;
    if (!this.nee_1.equals(other.nee_1))
      return false;
    if (!this.oee_1.equals(other.oee_1))
      return false;
    if (!this.pee_1.equals(other.pee_1))
      return false;
    if (!this.qee_1.equals(other.qee_1))
      return false;
    if (!this.ree_1.equals(other.ree_1))
      return false;
    if (!this.see_1.equals(other.see_1))
      return false;
    if (!this.tee_1.equals(other.tee_1))
      return false;
    if (!this.uee_1.equals(other.uee_1))
      return false;
    if (!this.vee_1.equals(other.vee_1))
      return false;
    if (!this.wee_1.equals(other.wee_1))
      return false;
    if (!this.xee_1.equals(other.xee_1))
      return false;
    if (!this.yee_1.equals(other.yee_1))
      return false;
    if (!this.zee_1.equals(other.zee_1))
      return false;
    if (!this.aef_1.equals(other.aef_1))
      return false;
    if (!this.bef_1.equals(other.bef_1))
      return false;
    if (!this.cef_1.equals(other.cef_1))
      return false;
    if (!this.def_1.equals(other.def_1))
      return false;
    if (!this.eef_1.equals(other.eef_1))
      return false;
    if (!this.fef_1.equals(other.fef_1))
      return false;
    if (!this.gef_1.equals(other.gef_1))
      return false;
    if (!this.hef_1.equals(other.hef_1))
      return false;
    if (!this.ief_1.equals(other.ief_1))
      return false;
    if (!this.jef_1.equals(other.jef_1))
      return false;
    if (!this.kef_1.equals(other.kef_1))
      return false;
    if (!this.lef_1.equals(other.lef_1))
      return false;
    if (!this.mef_1.equals(other.mef_1))
      return false;
    if (!this.nef_1.equals(other.nef_1))
      return false;
    if (!this.oef_1.equals(other.oef_1))
      return false;
    return true;
  };
  protoOf(Typography).hashCode = function () {
    var result = this.lee_1.hashCode();
    result = imul(31, result) + this.mee_1.hashCode() | 0;
    result = imul(31, result) + this.nee_1.hashCode() | 0;
    result = imul(31, result) + this.oee_1.hashCode() | 0;
    result = imul(31, result) + this.pee_1.hashCode() | 0;
    result = imul(31, result) + this.qee_1.hashCode() | 0;
    result = imul(31, result) + this.ree_1.hashCode() | 0;
    result = imul(31, result) + this.see_1.hashCode() | 0;
    result = imul(31, result) + this.tee_1.hashCode() | 0;
    result = imul(31, result) + this.uee_1.hashCode() | 0;
    result = imul(31, result) + this.vee_1.hashCode() | 0;
    result = imul(31, result) + this.wee_1.hashCode() | 0;
    result = imul(31, result) + this.xee_1.hashCode() | 0;
    result = imul(31, result) + this.yee_1.hashCode() | 0;
    result = imul(31, result) + this.zee_1.hashCode() | 0;
    result = imul(31, result) + this.aef_1.hashCode() | 0;
    result = imul(31, result) + this.bef_1.hashCode() | 0;
    result = imul(31, result) + this.cef_1.hashCode() | 0;
    result = imul(31, result) + this.def_1.hashCode() | 0;
    result = imul(31, result) + this.eef_1.hashCode() | 0;
    result = imul(31, result) + this.fef_1.hashCode() | 0;
    result = imul(31, result) + this.gef_1.hashCode() | 0;
    result = imul(31, result) + this.hef_1.hashCode() | 0;
    result = imul(31, result) + this.ief_1.hashCode() | 0;
    result = imul(31, result) + this.jef_1.hashCode() | 0;
    result = imul(31, result) + this.kef_1.hashCode() | 0;
    result = imul(31, result) + this.lef_1.hashCode() | 0;
    result = imul(31, result) + this.mef_1.hashCode() | 0;
    result = imul(31, result) + this.nef_1.hashCode() | 0;
    result = imul(31, result) + this.oef_1.hashCode() | 0;
    return result;
  };
  protoOf(Typography).toString = function () {
    return 'Typography(displayLarge=' + this.lee_1.toString() + ', displayMedium=' + this.mee_1.toString() + ',' + ('displaySmall=' + this.nee_1.toString() + ', ') + ('headlineLarge=' + this.oee_1.toString() + ', headlineMedium=' + this.pee_1.toString() + ',') + (' headlineSmall=' + this.qee_1.toString() + ', ') + ('titleLarge=' + this.ree_1.toString() + ', titleMedium=' + this.see_1.toString() + ', titleSmall=' + this.tee_1.toString() + ', ') + ('bodyLarge=' + this.uee_1.toString() + ', bodyMedium=' + this.vee_1.toString() + ', bodySmall=' + this.wee_1.toString() + ', ') + ('labelLarge=' + this.xee_1.toString() + ', labelMedium=' + this.yee_1.toString() + ', labelSmall=' + this.zee_1.toString() + ', ') + ('displayLargeEmphasized=' + this.aef_1.toString() + ', ') + ('displayMediumEmphasized=' + this.bef_1.toString() + ', ') + ('displaySmallEmphasized=' + this.cef_1.toString() + ', ') + ('headlineLargeEmphasized=' + this.def_1.toString() + ', ') + ('headlineMediumEmphasized=' + this.eef_1.toString() + ', ') + ('headlineSmallEmphasized=' + this.fef_1.toString() + ', ') + ('titleLargeEmphasized=' + this.gef_1.toString() + ', ') + ('titleMediumEmphasized=' + this.hef_1.toString() + ', ') + ('titleSmallEmphasized=' + this.ief_1.toString() + ', ') + ('bodyLargeEmphasized=' + this.jef_1.toString() + ', ') + ('bodyMediumEmphasized=' + this.kef_1.toString() + ', ') + ('bodySmallEmphasized=' + this.lef_1.toString() + ', ') + ('labelLargeEmphasized=' + this.mef_1.toString() + ', ') + ('labelMediumEmphasized=' + this.nef_1.toString() + ', ') + ('labelSmallEmphasized=' + this.oef_1.toString() + ')');
  };
  function get_value_0(_this__u8e3s4, $composer, $changed) {
    _init_properties_Typography_kt__rm3fch();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1049072145, 'C(<get-value>)556@30586L10:Typography.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1049072145, $changed, -1, 'androidx.compose.material3.<get-value> (Typography.kt:556)');
    }
    var tmp0 = fromToken_2(MaterialTheme_instance.gee($composer_0, 6), _this__u8e3s4);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function fromToken_2(_this__u8e3s4, value) {
    _init_properties_Typography_kt__rm3fch();
    var tmp;
    switch (value.i2_1) {
      case 3:
        tmp = _this__u8e3s4.lee_1;
        break;
      case 4:
        tmp = _this__u8e3s4.mee_1;
        break;
      case 5:
        tmp = _this__u8e3s4.nee_1;
        break;
      case 6:
        tmp = _this__u8e3s4.oee_1;
        break;
      case 7:
        tmp = _this__u8e3s4.pee_1;
        break;
      case 8:
        tmp = _this__u8e3s4.qee_1;
        break;
      case 12:
        tmp = _this__u8e3s4.ree_1;
        break;
      case 13:
        tmp = _this__u8e3s4.see_1;
        break;
      case 14:
        tmp = _this__u8e3s4.tee_1;
        break;
      case 0:
        tmp = _this__u8e3s4.uee_1;
        break;
      case 1:
        tmp = _this__u8e3s4.vee_1;
        break;
      case 2:
        tmp = _this__u8e3s4.wee_1;
        break;
      case 9:
        tmp = _this__u8e3s4.xee_1;
        break;
      case 10:
        tmp = _this__u8e3s4.yee_1;
        break;
      case 11:
        tmp = _this__u8e3s4.zee_1;
        break;
      case 18:
        tmp = _this__u8e3s4.aef_1;
        break;
      case 19:
        tmp = _this__u8e3s4.bef_1;
        break;
      case 20:
        tmp = _this__u8e3s4.cef_1;
        break;
      case 21:
        tmp = _this__u8e3s4.def_1;
        break;
      case 22:
        tmp = _this__u8e3s4.eef_1;
        break;
      case 23:
        tmp = _this__u8e3s4.fef_1;
        break;
      case 27:
        tmp = _this__u8e3s4.gef_1;
        break;
      case 28:
        tmp = _this__u8e3s4.hef_1;
        break;
      case 29:
        tmp = _this__u8e3s4.ief_1;
        break;
      case 15:
        tmp = _this__u8e3s4.jef_1;
        break;
      case 16:
        tmp = _this__u8e3s4.kef_1;
        break;
      case 17:
        tmp = _this__u8e3s4.lef_1;
        break;
      case 24:
        tmp = _this__u8e3s4.mef_1;
        break;
      case 25:
        tmp = _this__u8e3s4.nef_1;
        break;
      case 26:
        tmp = _this__u8e3s4.oef_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function LocalTypography$lambda() {
    _init_properties_Typography_kt__rm3fch();
    return Typography_init_$Create$();
  }
  var properties_initialized_Typography_kt_bpd27j;
  function _init_properties_Typography_kt__rm3fch() {
    if (!properties_initialized_Typography_kt_bpd27j) {
      properties_initialized_Typography_kt_bpd27j = true;
      LocalTypography = staticCompositionLocalOf(LocalTypography$lambda);
      androidx_compose_material3_Typography$stable = 0;
    }
  }
  var androidx_compose_material3_WideNavigationRailStateImpl$stable;
  var androidx_compose_material3_ModalWideNavigationRailState$stable;
  var androidx_compose_material3_RailPredictiveBackState$stable;
  var androidx_compose_material3_carousel_Arrangement$stable;
  var androidx_compose_material3_carousel_CarouselPageSize$stable;
  var androidx_compose_material3_carousel_CarouselDefaults$stable;
  var androidx_compose_material3_carousel_CarouselItemScopeImpl$stable;
  var androidx_compose_material3_carousel_CarouselState$stable;
  var androidx_compose_material3_carousel_CarouselPagerState$stable;
  var androidx_compose_material3_carousel_CarouselItemDrawInfoImpl$stable;
  var androidx_compose_material3_carousel_Keyline$stable;
  var androidx_compose_material3_carousel_KeylineList$stable;
  var androidx_compose_material3_carousel_Strategy$stable;
  var androidx_compose_material3_internal_DraggableAnchorsConfig$stable;
  var androidx_compose_material3_internal_AnchoredDraggableState$stable;
  var androidx_compose_material3_internal_AnchoredDraggableDefaults$stable;
  var androidx_compose_material3_internal_AnchoredDragFinishedSignal$stable;
  var androidx_compose_material3_internal_AnimatedShapeState$stable;
  var androidx_compose_material3_internal_BackEventProgress_NotRunning$stable;
  var androidx_compose_material3_internal_BackEventProgress_InProgress$stable;
  var androidx_compose_material3_internal_BackEventProgress_Completed$stable;
  var androidx_compose_material3_internal_BasicTooltipDefaults$stable;
  var androidx_compose_material3_internal_CalendarModel$stable;
  var androidx_compose_material3_internal_CalendarDate$stable;
  var androidx_compose_material3_internal_CalendarMonth$stable;
  var androidx_compose_material3_internal_DateInputFormat$stable;
  var androidx_compose_material3_internal_ChildSemanticsNodeElement$stable;
  var androidx_compose_material3_internal_ParentSemanticsNodeElement$stable;
  var androidx_compose_material3_internal_ChildSemanticsNode$stable;
  var androidx_compose_material3_internal_ParentSemanticsNode$stable;
  var androidx_compose_material3_internal_ParentSemanticsNodeKey$stable;
  function ParentSemanticsNode() {
  }
  protoOf(ParentSemanticsNode).rem = function (_this__u8e3s4) {
    this.qem_1 = true;
    this.pem_1(_this__u8e3s4);
    invalidateSemantics(this);
  };
  protoOf(ParentSemanticsNode).sem = function () {
    this.qem_1 = false;
    invalidateSemantics(this);
  };
  function ParentSemanticsNodeKey() {
  }
  var ParentSemanticsNodeKey_instance;
  function ParentSemanticsNodeKey_getInstance() {
    return ParentSemanticsNodeKey_instance;
  }
  function childSemantics(_this__u8e3s4, properties) {
    var tmp;
    if (properties === VOID) {
      tmp = childSemantics$lambda;
    } else {
      tmp = properties;
    }
    properties = tmp;
    return _this__u8e3s4.y61(new ChildSemanticsNodeElement(properties));
  }
  function ChildSemanticsNodeElement(properties) {
    ModifierNodeElement.call(this);
    this.uem_1 = properties;
  }
  protoOf(ChildSemanticsNodeElement).i2n = function () {
    return new ChildSemanticsNode(this.uem_1);
  };
  protoOf(ChildSemanticsNodeElement).vem = function (node) {
    node.ken_1 = this.uem_1;
    invalidateSemantics(node);
  };
  protoOf(ChildSemanticsNodeElement).t67 = function (node) {
    return this.vem(node instanceof ChildSemanticsNode ? node : THROW_CCE());
  };
  protoOf(ChildSemanticsNodeElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChildSemanticsNodeElement))
      return false;
    return this.uem_1 === other.uem_1;
  };
  protoOf(ChildSemanticsNodeElement).hashCode = function () {
    return hashCode(this.uem_1);
  };
  function ChildSemanticsNode$applySemantics$lambda($this_applySemantics) {
    return function (node) {
      // Inline function 'kotlin.with' call
      (node instanceof ParentSemanticsNode ? node : THROW_CCE()).rem($this_applySemantics);
      return false;
    };
  }
  function ChildSemanticsNode$onDetach$lambda(node) {
    if (!(node instanceof ParentSemanticsNode))
      THROW_CCE();
    node.sem();
    return false;
  }
  function ChildSemanticsNode(properties) {
    Node.call(this);
    this.ken_1 = properties;
  }
  protoOf(ChildSemanticsNode).x6k = function (_this__u8e3s4) {
    var tmp = ParentSemanticsNodeKey_instance;
    traverseAncestors(this, tmp, ChildSemanticsNode$applySemantics$lambda(_this__u8e3s4));
    this.ken_1(_this__u8e3s4);
  };
  protoOf(ChildSemanticsNode).d63 = function () {
    protoOf(Node).d63.call(this);
    var tmp = ParentSemanticsNodeKey_instance;
    traverseAncestors(this, tmp, ChildSemanticsNode$onDetach$lambda);
  };
  function childSemantics$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function FloatProducer() {
  }
  var androidx_compose_material3_internal_Icons_AutoMirrored_Filled$stable;
  var androidx_compose_material3_internal_Icons_AutoMirrored$stable;
  var androidx_compose_material3_internal_Icons_Filled$stable;
  var androidx_compose_material3_internal_Icons_Outlined$stable;
  var androidx_compose_material3_internal_Icons$stable;
  var androidx_compose_material3_internal_InternalMutatorMutex$stable;
  var androidx_compose_material3_internal_MappedInteractionSource$stable;
  var androidx_compose_material3_internal_MenuPosition$stable;
  var androidx_compose_material3_internal_AnchorAlignmentOffsetPosition_Horizontal$stable;
  var androidx_compose_material3_internal_AnchorAlignmentOffsetPosition_Vertical$stable;
  var androidx_compose_material3_internal_AnchorAlignmentOffsetPosition$stable;
  var androidx_compose_material3_internal_WindowAlignmentMarginPosition_Horizontal$stable;
  var androidx_compose_material3_internal_WindowAlignmentMarginPosition_Vertical$stable;
  var androidx_compose_material3_internal_WindowAlignmentMarginPosition$stable;
  var androidx_compose_material3_internal_DropdownMenuPositionProvider$stable;
  var androidx_compose_material3_internal_MutableWindowInsets$stable;
  function MutableWindowInsets$_get_insets_$ref_21josk() {
    return function (p0) {
      return p0.len();
    };
  }
  function MutableWindowInsets$_set_insets_$ref_d0owco() {
    return function (p0, p1) {
      p0.fei(p1);
      return Unit_instance;
    };
  }
  function MutableWindowInsets$_get_insets_$ref_21josk_0() {
    return function (p0) {
      return p0.len();
    };
  }
  function MutableWindowInsets$_set_insets_$ref_d0owco_0() {
    return function (p0, p1) {
      p0.fei(p1);
      return Unit_instance;
    };
  }
  function MutableWindowInsets(initialInsets) {
    initialInsets = initialInsets === VOID ? WindowInsets(0, 0, 0, 0) : initialInsets;
    this.eei_1 = mutableStateOf(initialInsets);
  }
  protoOf(MutableWindowInsets).fei = function (_set____db54di) {
    var tmp0 = this.eei_1;
    var tmp = KMutableProperty1;
    var tmp_0 = MutableWindowInsets$_get_insets_$ref_21josk_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('insets', 1, tmp, tmp_0, MutableWindowInsets$_set_insets_$ref_d0owco_0());
    tmp0.k1k(_set____db54di);
    return Unit_instance;
  };
  protoOf(MutableWindowInsets).len = function () {
    var tmp0 = this.eei_1;
    var tmp = KMutableProperty1;
    var tmp_0 = MutableWindowInsets$_get_insets_$ref_21josk();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('insets', 1, tmp, tmp_0, MutableWindowInsets$_set_insets_$ref_d0owco());
    return tmp0.x1();
  };
  protoOf(MutableWindowInsets).aa0 = function (density, layoutDirection) {
    return this.len().aa0(density, layoutDirection);
  };
  protoOf(MutableWindowInsets).ba0 = function (density) {
    return this.len().ba0(density);
  };
  protoOf(MutableWindowInsets).ca0 = function (density, layoutDirection) {
    return this.len().ca0(density, layoutDirection);
  };
  protoOf(MutableWindowInsets).da0 = function (density) {
    return this.len().da0(density);
  };
  function ProvideContentColorTextStyle(contentColor, textStyle, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.g20(-684938728);
    sourceInformation($composer_0, 'C(ProvideContentColorTextStyle)P(1:c#ui.graphics.Color,2)39@1492L7,40@1521L152:ProvideContentColorTextStyle.kt#mqatfk');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.a21(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor))) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w20(textStyle) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.b21(content) ? 256 : 128);
    if ($composer_0.d21(!(($dirty & 147) === 146), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-684938728, $dirty, -1, 'androidx.compose.material3.internal.ProvideContentColorTextStyle (ProvideContentColorTextStyle.kt:38)');
      }
      var tmp0 = get_LocalTextStyle();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_1.g21(tmp0);
      sourceInformationMarkerEnd($composer_1);
      var mergedStyle = tmp0_0.o5h(textStyle);
      CompositionLocalProvider_0([get_LocalContentColor().e2m(new Color(contentColor)), get_LocalTextStyle().e2m(mergedStyle)], content, $composer_0, androidx_compose_runtime_ProvidedValue$stableprop_getter() | 112 & $dirty >> 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    var tmp0_safe_receiver = $composer_0.h20();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k2m(ProvideContentColorTextStyle$lambda(contentColor, textStyle, content, $changed));
    }
  }
  function ProvideContentColorTextStyle$lambda($contentColor, $textStyle, $content, $$changed) {
    return function ($composer, $force) {
      ProvideContentColorTextStyle($contentColor, $textStyle, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var androidx_compose_material3_tokens_AppBarLargeFlexibleTokens$stable;
  function AppBarLargeFlexibleTokens() {
    AppBarLargeFlexibleTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.ge1_1 = _Dp___init__impl__ms3zkb(120.0);
    this.he1_1 = TypographyKeyTokens_TitleMedium_getInstance();
    this.ie1_1 = TypographyKeyTokens_DisplaySmall_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.je1_1 = _Dp___init__impl__ms3zkb(152.0);
  }
  var AppBarLargeFlexibleTokens_instance;
  function AppBarLargeFlexibleTokens_getInstance() {
    if (AppBarLargeFlexibleTokens_instance == null)
      new AppBarLargeFlexibleTokens();
    return AppBarLargeFlexibleTokens_instance;
  }
  var androidx_compose_material3_tokens_AppBarLargeTokens$stable;
  function AppBarLargeTokens() {
    AppBarLargeTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.ee1_1 = _Dp___init__impl__ms3zkb(152.0);
    this.fe1_1 = TypographyKeyTokens_HeadlineMedium_getInstance();
  }
  var AppBarLargeTokens_instance;
  function AppBarLargeTokens_getInstance() {
    if (AppBarLargeTokens_instance == null)
      new AppBarLargeTokens();
    return AppBarLargeTokens_instance;
  }
  var androidx_compose_material3_tokens_AppBarMediumFlexibleTokens$stable;
  function AppBarMediumFlexibleTokens() {
    AppBarMediumFlexibleTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.ae1_1 = _Dp___init__impl__ms3zkb(112.0);
    this.be1_1 = TypographyKeyTokens_LabelLarge_getInstance();
    this.ce1_1 = TypographyKeyTokens_HeadlineMedium_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.de1_1 = _Dp___init__impl__ms3zkb(136.0);
  }
  var AppBarMediumFlexibleTokens_instance;
  function AppBarMediumFlexibleTokens_getInstance() {
    if (AppBarMediumFlexibleTokens_instance == null)
      new AppBarMediumFlexibleTokens();
    return AppBarMediumFlexibleTokens_instance;
  }
  var androidx_compose_material3_tokens_AppBarMediumTokens$stable;
  function AppBarMediumTokens() {
    AppBarMediumTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.ye0_1 = _Dp___init__impl__ms3zkb(112.0);
    this.ze0_1 = TypographyKeyTokens_HeadlineSmall_getInstance();
  }
  var AppBarMediumTokens_instance;
  function AppBarMediumTokens_getInstance() {
    if (AppBarMediumTokens_instance == null)
      new AppBarMediumTokens();
    return AppBarMediumTokens_instance;
  }
  var androidx_compose_material3_tokens_AppBarSmallTokens$stable;
  function AppBarSmallTokens() {
    AppBarSmallTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.ve0_1 = _Dp___init__impl__ms3zkb(64.0);
    this.we0_1 = TypographyKeyTokens_LabelMedium_getInstance();
    this.xe0_1 = TypographyKeyTokens_TitleLarge_getInstance();
  }
  var AppBarSmallTokens_instance;
  function AppBarSmallTokens_getInstance() {
    if (AppBarSmallTokens_instance == null)
      new AppBarSmallTokens();
    return AppBarSmallTokens_instance;
  }
  var androidx_compose_material3_tokens_AppBarTokens$stable;
  function AppBarTokens() {
    AppBarTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.me5_1 = _Dp___init__impl__ms3zkb(32.0);
    this.ne5_1 = ColorSchemeKeyTokens_Surface_getInstance();
    this.oe5_1 = ElevationTokens_getInstance().men_1;
    this.pe5_1 = ShapeKeyTokens_CornerNone_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.qe5_1 = _Dp___init__impl__ms3zkb(0.0);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.re5_1 = _Dp___init__impl__ms3zkb(24.0);
    this.se5_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.te5_1 = _Dp___init__impl__ms3zkb(4.0);
    this.ue5_1 = ColorSchemeKeyTokens_SurfaceContainer_getInstance();
    this.ve5_1 = ElevationTokens_getInstance().oen_1;
    this.we5_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.xe5_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.ye5_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.ze5_1 = _Dp___init__impl__ms3zkb(4.0);
  }
  var AppBarTokens_instance;
  function AppBarTokens_getInstance() {
    if (AppBarTokens_instance == null)
      new AppBarTokens();
    return AppBarTokens_instance;
  }
  var androidx_compose_material3_tokens_AssistChipTokens$stable;
  var androidx_compose_material3_tokens_BadgeTokens$stable;
  var androidx_compose_material3_tokens_BaselineButtonTokens$stable;
  var androidx_compose_material3_tokens_BottomAppBarTokens$stable;
  var androidx_compose_material3_tokens_ButtonGroupSmallTokens$stable;
  var androidx_compose_material3_tokens_ButtonLargeTokens$stable;
  var androidx_compose_material3_tokens_ButtonMediumTokens$stable;
  var androidx_compose_material3_tokens_ButtonSmallTokens$stable;
  var androidx_compose_material3_tokens_ButtonXLargeTokens$stable;
  var androidx_compose_material3_tokens_ButtonXSmallTokens$stable;
  var androidx_compose_material3_tokens_CheckboxTokens$stable;
  var androidx_compose_material3_tokens_CircularProgressIndicatorTokens$stable;
  var androidx_compose_material3_tokens_ColorDarkTokens$stable;
  var androidx_compose_material3_tokens_ColorLightTokens$stable;
  function ColorLightTokens() {
    ColorLightTokens_instance = this;
    this.qe7_1 = PaletteTokens_getInstance().cep_1;
    this.re7_1 = PaletteTokens_getInstance().yen_1;
    this.se7_1 = PaletteTokens_getInstance().deo_1;
    this.te7_1 = PaletteTokens_getInstance().aep_1;
    this.ue7_1 = PaletteTokens_getInstance().aeq_1;
    this.ve7_1 = PaletteTokens_getInstance().leo_1;
    this.we7_1 = PaletteTokens_getInstance().heo_1;
    this.xe7_1 = PaletteTokens_getInstance().ven_1;
    this.ye7_1 = PaletteTokens_getInstance().uen_1;
    this.ze7_1 = PaletteTokens_getInstance().tep_1;
    this.ae8_1 = PaletteTokens_getInstance().sep_1;
    this.be8_1 = PaletteTokens_getInstance().sep_1;
    this.ce8_1 = PaletteTokens_getInstance().vep_1;
    this.de8_1 = PaletteTokens_getInstance().geq_1;
    this.ee8_1 = PaletteTokens_getInstance().feq_1;
    this.fe8_1 = PaletteTokens_getInstance().feq_1;
    this.ge8_1 = PaletteTokens_getInstance().ieq_1;
    this.he8_1 = PaletteTokens_getInstance().heo_1;
    this.ie8_1 = PaletteTokens_getInstance().iep_1;
    this.je8_1 = PaletteTokens_getInstance().teq_1;
    this.ke8_1 = PaletteTokens_getInstance().seq_1;
    this.le8_1 = PaletteTokens_getInstance().seq_1;
    this.me8_1 = PaletteTokens_getInstance().veq_1;
    this.ne8_1 = PaletteTokens_getInstance().kep_1;
    this.oe8_1 = PaletteTokens_getInstance().nep_1;
    this.pe8_1 = PaletteTokens_getInstance().wep_1;
    this.qe8_1 = PaletteTokens_getInstance().beq_1;
    this.re8_1 = PaletteTokens_getInstance().beq_1;
    this.se8_1 = PaletteTokens_getInstance().aeq_1;
    this.te8_1 = PaletteTokens_getInstance().geo_1;
    this.ue8_1 = PaletteTokens_getInstance().jeq_1;
    this.ve8_1 = PaletteTokens_getInstance().oeq_1;
    this.we8_1 = PaletteTokens_getInstance().oeq_1;
    this.xe8_1 = PaletteTokens_getInstance().neq_1;
    this.ye8_1 = PaletteTokens_getInstance().cep_1;
    this.ze8_1 = PaletteTokens_getInstance().cep_1;
    this.ae9_1 = PaletteTokens_getInstance().zeo_1;
    this.be9_1 = PaletteTokens_getInstance().yeo_1;
    this.ce9_1 = PaletteTokens_getInstance().xeo_1;
    this.de9_1 = PaletteTokens_getInstance().bep_1;
    this.ee9_1 = PaletteTokens_getInstance().ieo_1;
    this.fe9_1 = PaletteTokens_getInstance().weo_1;
    this.ge9_1 = this.pe8_1;
    this.he9_1 = PaletteTokens_getInstance().oep_1;
    this.ie9_1 = PaletteTokens_getInstance().weq_1;
    this.je9_1 = PaletteTokens_getInstance().ber_1;
    this.ke9_1 = PaletteTokens_getInstance().ber_1;
    this.le9_1 = PaletteTokens_getInstance().aer_1;
  }
  var ColorLightTokens_instance;
  function ColorLightTokens_getInstance() {
    if (ColorLightTokens_instance == null)
      new ColorLightTokens();
    return ColorLightTokens_instance;
  }
  var ColorSchemeKeyTokens_Background_instance;
  var ColorSchemeKeyTokens_Error_instance;
  var ColorSchemeKeyTokens_ErrorContainer_instance;
  var ColorSchemeKeyTokens_InverseOnSurface_instance;
  var ColorSchemeKeyTokens_InversePrimary_instance;
  var ColorSchemeKeyTokens_InverseSurface_instance;
  var ColorSchemeKeyTokens_OnBackground_instance;
  var ColorSchemeKeyTokens_OnError_instance;
  var ColorSchemeKeyTokens_OnErrorContainer_instance;
  var ColorSchemeKeyTokens_OnPrimary_instance;
  var ColorSchemeKeyTokens_OnPrimaryContainer_instance;
  var ColorSchemeKeyTokens_OnPrimaryFixed_instance;
  var ColorSchemeKeyTokens_OnPrimaryFixedVariant_instance;
  var ColorSchemeKeyTokens_OnSecondary_instance;
  var ColorSchemeKeyTokens_OnSecondaryContainer_instance;
  var ColorSchemeKeyTokens_OnSecondaryFixed_instance;
  var ColorSchemeKeyTokens_OnSecondaryFixedVariant_instance;
  var ColorSchemeKeyTokens_OnSurface_instance;
  var ColorSchemeKeyTokens_OnSurfaceVariant_instance;
  var ColorSchemeKeyTokens_OnTertiary_instance;
  var ColorSchemeKeyTokens_OnTertiaryContainer_instance;
  var ColorSchemeKeyTokens_OnTertiaryFixed_instance;
  var ColorSchemeKeyTokens_OnTertiaryFixedVariant_instance;
  var ColorSchemeKeyTokens_Outline_instance;
  var ColorSchemeKeyTokens_OutlineVariant_instance;
  var ColorSchemeKeyTokens_Primary_instance;
  var ColorSchemeKeyTokens_PrimaryContainer_instance;
  var ColorSchemeKeyTokens_PrimaryFixed_instance;
  var ColorSchemeKeyTokens_PrimaryFixedDim_instance;
  var ColorSchemeKeyTokens_Scrim_instance;
  var ColorSchemeKeyTokens_Secondary_instance;
  var ColorSchemeKeyTokens_SecondaryContainer_instance;
  var ColorSchemeKeyTokens_SecondaryFixed_instance;
  var ColorSchemeKeyTokens_SecondaryFixedDim_instance;
  var ColorSchemeKeyTokens_Surface_instance;
  var ColorSchemeKeyTokens_SurfaceBright_instance;
  var ColorSchemeKeyTokens_SurfaceContainer_instance;
  var ColorSchemeKeyTokens_SurfaceContainerHigh_instance;
  var ColorSchemeKeyTokens_SurfaceContainerHighest_instance;
  var ColorSchemeKeyTokens_SurfaceContainerLow_instance;
  var ColorSchemeKeyTokens_SurfaceContainerLowest_instance;
  var ColorSchemeKeyTokens_SurfaceDim_instance;
  var ColorSchemeKeyTokens_SurfaceTint_instance;
  var ColorSchemeKeyTokens_SurfaceVariant_instance;
  var ColorSchemeKeyTokens_Tertiary_instance;
  var ColorSchemeKeyTokens_TertiaryContainer_instance;
  var ColorSchemeKeyTokens_TertiaryFixed_instance;
  var ColorSchemeKeyTokens_TertiaryFixedDim_instance;
  var ColorSchemeKeyTokens_entriesInitialized;
  function ColorSchemeKeyTokens_initEntries() {
    if (ColorSchemeKeyTokens_entriesInitialized)
      return Unit_instance;
    ColorSchemeKeyTokens_entriesInitialized = true;
    ColorSchemeKeyTokens_Background_instance = new ColorSchemeKeyTokens('Background', 0);
    ColorSchemeKeyTokens_Error_instance = new ColorSchemeKeyTokens('Error', 1);
    ColorSchemeKeyTokens_ErrorContainer_instance = new ColorSchemeKeyTokens('ErrorContainer', 2);
    ColorSchemeKeyTokens_InverseOnSurface_instance = new ColorSchemeKeyTokens('InverseOnSurface', 3);
    ColorSchemeKeyTokens_InversePrimary_instance = new ColorSchemeKeyTokens('InversePrimary', 4);
    ColorSchemeKeyTokens_InverseSurface_instance = new ColorSchemeKeyTokens('InverseSurface', 5);
    ColorSchemeKeyTokens_OnBackground_instance = new ColorSchemeKeyTokens('OnBackground', 6);
    ColorSchemeKeyTokens_OnError_instance = new ColorSchemeKeyTokens('OnError', 7);
    ColorSchemeKeyTokens_OnErrorContainer_instance = new ColorSchemeKeyTokens('OnErrorContainer', 8);
    ColorSchemeKeyTokens_OnPrimary_instance = new ColorSchemeKeyTokens('OnPrimary', 9);
    ColorSchemeKeyTokens_OnPrimaryContainer_instance = new ColorSchemeKeyTokens('OnPrimaryContainer', 10);
    ColorSchemeKeyTokens_OnPrimaryFixed_instance = new ColorSchemeKeyTokens('OnPrimaryFixed', 11);
    ColorSchemeKeyTokens_OnPrimaryFixedVariant_instance = new ColorSchemeKeyTokens('OnPrimaryFixedVariant', 12);
    ColorSchemeKeyTokens_OnSecondary_instance = new ColorSchemeKeyTokens('OnSecondary', 13);
    ColorSchemeKeyTokens_OnSecondaryContainer_instance = new ColorSchemeKeyTokens('OnSecondaryContainer', 14);
    ColorSchemeKeyTokens_OnSecondaryFixed_instance = new ColorSchemeKeyTokens('OnSecondaryFixed', 15);
    ColorSchemeKeyTokens_OnSecondaryFixedVariant_instance = new ColorSchemeKeyTokens('OnSecondaryFixedVariant', 16);
    ColorSchemeKeyTokens_OnSurface_instance = new ColorSchemeKeyTokens('OnSurface', 17);
    ColorSchemeKeyTokens_OnSurfaceVariant_instance = new ColorSchemeKeyTokens('OnSurfaceVariant', 18);
    ColorSchemeKeyTokens_OnTertiary_instance = new ColorSchemeKeyTokens('OnTertiary', 19);
    ColorSchemeKeyTokens_OnTertiaryContainer_instance = new ColorSchemeKeyTokens('OnTertiaryContainer', 20);
    ColorSchemeKeyTokens_OnTertiaryFixed_instance = new ColorSchemeKeyTokens('OnTertiaryFixed', 21);
    ColorSchemeKeyTokens_OnTertiaryFixedVariant_instance = new ColorSchemeKeyTokens('OnTertiaryFixedVariant', 22);
    ColorSchemeKeyTokens_Outline_instance = new ColorSchemeKeyTokens('Outline', 23);
    ColorSchemeKeyTokens_OutlineVariant_instance = new ColorSchemeKeyTokens('OutlineVariant', 24);
    ColorSchemeKeyTokens_Primary_instance = new ColorSchemeKeyTokens('Primary', 25);
    ColorSchemeKeyTokens_PrimaryContainer_instance = new ColorSchemeKeyTokens('PrimaryContainer', 26);
    ColorSchemeKeyTokens_PrimaryFixed_instance = new ColorSchemeKeyTokens('PrimaryFixed', 27);
    ColorSchemeKeyTokens_PrimaryFixedDim_instance = new ColorSchemeKeyTokens('PrimaryFixedDim', 28);
    ColorSchemeKeyTokens_Scrim_instance = new ColorSchemeKeyTokens('Scrim', 29);
    ColorSchemeKeyTokens_Secondary_instance = new ColorSchemeKeyTokens('Secondary', 30);
    ColorSchemeKeyTokens_SecondaryContainer_instance = new ColorSchemeKeyTokens('SecondaryContainer', 31);
    ColorSchemeKeyTokens_SecondaryFixed_instance = new ColorSchemeKeyTokens('SecondaryFixed', 32);
    ColorSchemeKeyTokens_SecondaryFixedDim_instance = new ColorSchemeKeyTokens('SecondaryFixedDim', 33);
    ColorSchemeKeyTokens_Surface_instance = new ColorSchemeKeyTokens('Surface', 34);
    ColorSchemeKeyTokens_SurfaceBright_instance = new ColorSchemeKeyTokens('SurfaceBright', 35);
    ColorSchemeKeyTokens_SurfaceContainer_instance = new ColorSchemeKeyTokens('SurfaceContainer', 36);
    ColorSchemeKeyTokens_SurfaceContainerHigh_instance = new ColorSchemeKeyTokens('SurfaceContainerHigh', 37);
    ColorSchemeKeyTokens_SurfaceContainerHighest_instance = new ColorSchemeKeyTokens('SurfaceContainerHighest', 38);
    ColorSchemeKeyTokens_SurfaceContainerLow_instance = new ColorSchemeKeyTokens('SurfaceContainerLow', 39);
    ColorSchemeKeyTokens_SurfaceContainerLowest_instance = new ColorSchemeKeyTokens('SurfaceContainerLowest', 40);
    ColorSchemeKeyTokens_SurfaceDim_instance = new ColorSchemeKeyTokens('SurfaceDim', 41);
    ColorSchemeKeyTokens_SurfaceTint_instance = new ColorSchemeKeyTokens('SurfaceTint', 42);
    ColorSchemeKeyTokens_SurfaceVariant_instance = new ColorSchemeKeyTokens('SurfaceVariant', 43);
    ColorSchemeKeyTokens_Tertiary_instance = new ColorSchemeKeyTokens('Tertiary', 44);
    ColorSchemeKeyTokens_TertiaryContainer_instance = new ColorSchemeKeyTokens('TertiaryContainer', 45);
    ColorSchemeKeyTokens_TertiaryFixed_instance = new ColorSchemeKeyTokens('TertiaryFixed', 46);
    ColorSchemeKeyTokens_TertiaryFixedDim_instance = new ColorSchemeKeyTokens('TertiaryFixedDim', 47);
  }
  function ColorSchemeKeyTokens(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ColorSchemeKeyTokens_OnSurface_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnSurface_instance;
  }
  function ColorSchemeKeyTokens_OnSurfaceVariant_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnSurfaceVariant_instance;
  }
  function ColorSchemeKeyTokens_Primary_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_Primary_instance;
  }
  function ColorSchemeKeyTokens_Surface_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_Surface_instance;
  }
  function ColorSchemeKeyTokens_SurfaceContainer_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_SurfaceContainer_instance;
  }
  var androidx_compose_material3_tokens_ConnectedButtonGroupSmallTokens$stable;
  var androidx_compose_material3_tokens_DateInputModalTokens$stable;
  var androidx_compose_material3_tokens_DatePickerModalTokens$stable;
  var androidx_compose_material3_tokens_DialogTokens$stable;
  var androidx_compose_material3_tokens_DividerTokens$stable;
  var androidx_compose_material3_tokens_DockedToolbarTokens$stable;
  var androidx_compose_material3_tokens_DragHandleTokens$stable;
  var androidx_compose_material3_tokens_ElevatedButtonTokens$stable;
  var androidx_compose_material3_tokens_ElevatedCardTokens$stable;
  var androidx_compose_material3_tokens_ElevationTokens$stable;
  function ElevationTokens() {
    ElevationTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.men_1 = _Dp___init__impl__ms3zkb(0.0);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.nen_1 = _Dp___init__impl__ms3zkb(1.0);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.oen_1 = _Dp___init__impl__ms3zkb(3.0);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.pen_1 = _Dp___init__impl__ms3zkb(6.0);
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.qen_1 = _Dp___init__impl__ms3zkb(8.0);
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_4.ren_1 = _Dp___init__impl__ms3zkb(12.0);
  }
  var ElevationTokens_instance;
  function ElevationTokens_getInstance() {
    if (ElevationTokens_instance == null)
      new ElevationTokens();
    return ElevationTokens_instance;
  }
  var androidx_compose_material3_tokens_ExpandedListTokens$stable;
  var androidx_compose_material3_tokens_ExpressiveMotionTokens$stable;
  var androidx_compose_material3_tokens_ExtendedFabLargeTokens$stable;
  var androidx_compose_material3_tokens_ExtendedFabMediumTokens$stable;
  var androidx_compose_material3_tokens_ExtendedFabPrimaryTokens$stable;
  var androidx_compose_material3_tokens_ExtendedFabSmallTokens$stable;
  var androidx_compose_material3_tokens_FabBaselineTokens$stable;
  var androidx_compose_material3_tokens_FabLargeTokens$stable;
  var androidx_compose_material3_tokens_FabMediumTokens$stable;
  var androidx_compose_material3_tokens_FabMenuBaselineTokens$stable;
  var androidx_compose_material3_tokens_FabPrimaryContainerTokens$stable;
  var androidx_compose_material3_tokens_FabSecondaryContainerTokens$stable;
  var androidx_compose_material3_tokens_FabSmallTokens$stable;
  var androidx_compose_material3_tokens_FilledAutocompleteTokens$stable;
  var androidx_compose_material3_tokens_FilledButtonTokens$stable;
  var androidx_compose_material3_tokens_FilledCardTokens$stable;
  var androidx_compose_material3_tokens_FilledIconButtonTokens$stable;
  var androidx_compose_material3_tokens_FilledTextFieldTokens$stable;
  var androidx_compose_material3_tokens_FilledTonalButtonTokens$stable;
  var androidx_compose_material3_tokens_FilledTonalIconButtonTokens$stable;
  var androidx_compose_material3_tokens_FilterChipTokens$stable;
  var androidx_compose_material3_tokens_FloatingToolbarTokens$stable;
  var androidx_compose_material3_tokens_StandardIconButtonTokens$stable;
  function StandardIconButtonTokens() {
    StandardIconButtonTokens_instance = this;
    this.zec_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.aed_1 = 0.38;
    this.bed_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.ced_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.ded_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.eed_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.fed_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.ged_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.hed_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.ied_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.jed_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.ked_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.led_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.med_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
  }
  var StandardIconButtonTokens_instance;
  function StandardIconButtonTokens_getInstance() {
    if (StandardIconButtonTokens_instance == null)
      new StandardIconButtonTokens();
    return StandardIconButtonTokens_instance;
  }
  var androidx_compose_material3_tokens_InputChipTokens$stable;
  var androidx_compose_material3_tokens_LargeIconButtonTokens$stable;
  function LargeIconButtonTokens() {
    LargeIconButtonTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.web_1 = _Dp___init__impl__ms3zkb(96.0);
    this.xeb_1 = ShapeKeyTokens_CornerFull_getInstance();
    this.yeb_1 = ShapeKeyTokens_CornerExtraLarge_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.zeb_1 = _Dp___init__impl__ms3zkb(32.0);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.aec_1 = _Dp___init__impl__ms3zkb(16.0);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.bec_1 = _Dp___init__impl__ms3zkb(16.0);
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.cec_1 = _Dp___init__impl__ms3zkb(2.0);
    this.dec_1 = ShapeKeyTokens_CornerLarge_getInstance();
    this.eec_1 = ShapeKeyTokens_CornerExtraLarge_getInstance();
    this.fec_1 = ShapeKeyTokens_CornerFull_getInstance();
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_4.gec_1 = _Dp___init__impl__ms3zkb(32.0);
    var tmp_5 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_5.hec_1 = _Dp___init__impl__ms3zkb(32.0);
    var tmp_6 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_6.iec_1 = _Dp___init__impl__ms3zkb(48.0);
    var tmp_7 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_7.jec_1 = _Dp___init__impl__ms3zkb(48.0);
  }
  var LargeIconButtonTokens_instance;
  function LargeIconButtonTokens_getInstance() {
    if (LargeIconButtonTokens_instance == null)
      new LargeIconButtonTokens();
    return LargeIconButtonTokens_instance;
  }
  var androidx_compose_material3_tokens_LinearProgressIndicatorTokens$stable;
  var androidx_compose_material3_tokens_ListTokens$stable;
  var androidx_compose_material3_tokens_LoadingIndicatorTokens$stable;
  var androidx_compose_material3_tokens_MediumIconButtonTokens$stable;
  function MediumIconButtonTokens() {
    MediumIconButtonTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.ieb_1 = _Dp___init__impl__ms3zkb(56.0);
    this.jeb_1 = ShapeKeyTokens_CornerFull_getInstance();
    this.keb_1 = ShapeKeyTokens_CornerLarge_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.leb_1 = _Dp___init__impl__ms3zkb(16.0);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.meb_1 = _Dp___init__impl__ms3zkb(16.0);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.neb_1 = _Dp___init__impl__ms3zkb(24.0);
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.oeb_1 = _Dp___init__impl__ms3zkb(12.0);
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_4.peb_1 = _Dp___init__impl__ms3zkb(12.0);
    var tmp_5 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_5.qeb_1 = _Dp___init__impl__ms3zkb(1.0);
    this.reb_1 = ShapeKeyTokens_CornerMedium_getInstance();
    this.seb_1 = ShapeKeyTokens_CornerLarge_getInstance();
    this.teb_1 = ShapeKeyTokens_CornerFull_getInstance();
    var tmp_6 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_6.ueb_1 = _Dp___init__impl__ms3zkb(24.0);
    var tmp_7 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_7.veb_1 = _Dp___init__impl__ms3zkb(24.0);
  }
  var MediumIconButtonTokens_instance;
  function MediumIconButtonTokens_getInstance() {
    if (MediumIconButtonTokens_instance == null)
      new MediumIconButtonTokens();
    return MediumIconButtonTokens_instance;
  }
  var androidx_compose_material3_tokens_MenuTokens$stable;
  var MotionSchemeKeyTokens_DefaultSpatial_instance;
  var MotionSchemeKeyTokens_FastSpatial_instance;
  var MotionSchemeKeyTokens_SlowSpatial_instance;
  var MotionSchemeKeyTokens_DefaultEffects_instance;
  var MotionSchemeKeyTokens_FastEffects_instance;
  var MotionSchemeKeyTokens_SlowEffects_instance;
  var MotionSchemeKeyTokens_entriesInitialized;
  function MotionSchemeKeyTokens_initEntries() {
    if (MotionSchemeKeyTokens_entriesInitialized)
      return Unit_instance;
    MotionSchemeKeyTokens_entriesInitialized = true;
    MotionSchemeKeyTokens_DefaultSpatial_instance = new MotionSchemeKeyTokens('DefaultSpatial', 0);
    MotionSchemeKeyTokens_FastSpatial_instance = new MotionSchemeKeyTokens('FastSpatial', 1);
    MotionSchemeKeyTokens_SlowSpatial_instance = new MotionSchemeKeyTokens('SlowSpatial', 2);
    MotionSchemeKeyTokens_DefaultEffects_instance = new MotionSchemeKeyTokens('DefaultEffects', 3);
    MotionSchemeKeyTokens_FastEffects_instance = new MotionSchemeKeyTokens('FastEffects', 4);
    MotionSchemeKeyTokens_SlowEffects_instance = new MotionSchemeKeyTokens('SlowEffects', 5);
  }
  function MotionSchemeKeyTokens(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MotionSchemeKeyTokens_DefaultEffects_getInstance() {
    MotionSchemeKeyTokens_initEntries();
    return MotionSchemeKeyTokens_DefaultEffects_instance;
  }
  var androidx_compose_material3_tokens_MotionTokens$stable;
  var androidx_compose_material3_tokens_NavigationBarHorizontalItemTokens$stable;
  var androidx_compose_material3_tokens_NavigationBarTokens$stable;
  var androidx_compose_material3_tokens_NavigationBarVerticalItemTokens$stable;
  var androidx_compose_material3_tokens_NavigationDrawerTokens$stable;
  var androidx_compose_material3_tokens_NavigationRailBaselineItemTokens$stable;
  var androidx_compose_material3_tokens_NavigationRailCollapsedTokens$stable;
  var androidx_compose_material3_tokens_NavigationRailColorTokens$stable;
  var androidx_compose_material3_tokens_NavigationRailExpandedTokens$stable;
  var androidx_compose_material3_tokens_NavigationRailHorizontalItemTokens$stable;
  var androidx_compose_material3_tokens_NavigationRailVerticalItemTokens$stable;
  var androidx_compose_material3_tokens_OutlinedAutocompleteTokens$stable;
  var androidx_compose_material3_tokens_OutlinedButtonTokens$stable;
  var androidx_compose_material3_tokens_OutlinedCardTokens$stable;
  var androidx_compose_material3_tokens_OutlinedIconButtonTokens$stable;
  var androidx_compose_material3_tokens_OutlinedSegmentedButtonTokens$stable;
  var androidx_compose_material3_tokens_OutlinedTextFieldTokens$stable;
  var androidx_compose_material3_tokens_PaletteTokens$stable;
  function PaletteTokens() {
    PaletteTokens_instance = this;
    this.sen_1 = Color_0(0, 0, 0);
    this.ten_1 = Color_0(0, 0, 0);
    this.uen_1 = Color_0(65, 14, 11);
    this.ven_1 = Color_0(255, 255, 255);
    this.wen_1 = Color_0(96, 20, 16);
    this.xen_1 = Color_0(140, 29, 24);
    this.yen_1 = Color_0(179, 38, 30);
    this.zen_1 = Color_0(220, 54, 46);
    this.aeo_1 = Color_0(228, 105, 98);
    this.beo_1 = Color_0(236, 146, 142);
    this.ceo_1 = Color_0(242, 184, 181);
    this.deo_1 = Color_0(249, 222, 220);
    this.eeo_1 = Color_0(252, 238, 238);
    this.feo_1 = Color_0(255, 251, 249);
    this.geo_1 = Color_0(0, 0, 0);
    this.heo_1 = Color_0(29, 27, 32);
    this.ieo_1 = Color_0(255, 255, 255);
    this.jeo_1 = Color_0(33, 31, 38);
    this.keo_1 = Color_0(43, 41, 48);
    this.leo_1 = Color_0(50, 47, 53);
    this.meo_1 = Color_0(54, 52, 59);
    this.neo_1 = Color_0(59, 56, 62);
    this.oeo_1 = Color_0(72, 70, 76);
    this.peo_1 = Color_0(15, 13, 19);
    this.qeo_1 = Color_0(96, 93, 100);
    this.reo_1 = Color_0(121, 118, 125);
    this.seo_1 = Color_0(20, 18, 24);
    this.teo_1 = Color_0(147, 143, 150);
    this.ueo_1 = Color_0(174, 169, 177);
    this.veo_1 = Color_0(202, 197, 205);
    this.weo_1 = Color_0(222, 216, 225);
    this.xeo_1 = Color_0(230, 224, 233);
    this.yeo_1 = Color_0(236, 230, 240);
    this.zeo_1 = Color_0(243, 237, 247);
    this.aep_1 = Color_0(245, 239, 247);
    this.bep_1 = Color_0(247, 242, 250);
    this.cep_1 = Color_0(254, 247, 255);
    this.dep_1 = Color_0(255, 251, 255);
    this.eep_1 = Color_0(0, 0, 0);
    this.fep_1 = Color_0(29, 26, 34);
    this.gep_1 = Color_0(255, 255, 255);
    this.hep_1 = Color_0(50, 47, 55);
    this.iep_1 = Color_0(73, 69, 79);
    this.jep_1 = Color_0(96, 93, 102);
    this.kep_1 = Color_0(121, 116, 126);
    this.lep_1 = Color_0(147, 143, 153);
    this.mep_1 = Color_0(174, 169, 180);
    this.nep_1 = Color_0(202, 196, 208);
    this.oep_1 = Color_0(231, 224, 236);
    this.pep_1 = Color_0(245, 238, 250);
    this.qep_1 = Color_0(255, 251, 254);
    this.rep_1 = Color_0(0, 0, 0);
    this.sep_1 = Color_0(33, 0, 93);
    this.tep_1 = Color_0(255, 255, 255);
    this.uep_1 = Color_0(56, 30, 114);
    this.vep_1 = Color_0(79, 55, 139);
    this.wep_1 = Color_0(103, 80, 164);
    this.xep_1 = Color_0(127, 103, 190);
    this.yep_1 = Color_0(154, 130, 219);
    this.zep_1 = Color_0(182, 157, 248);
    this.aeq_1 = Color_0(208, 188, 255);
    this.beq_1 = Color_0(234, 221, 255);
    this.ceq_1 = Color_0(246, 237, 255);
    this.deq_1 = Color_0(255, 251, 254);
    this.eeq_1 = Color_0(0, 0, 0);
    this.feq_1 = Color_0(29, 25, 43);
    this.geq_1 = Color_0(255, 255, 255);
    this.heq_1 = Color_0(51, 45, 65);
    this.ieq_1 = Color_0(74, 68, 88);
    this.jeq_1 = Color_0(98, 91, 113);
    this.keq_1 = Color_0(122, 114, 137);
    this.leq_1 = Color_0(149, 141, 165);
    this.meq_1 = Color_0(176, 167, 192);
    this.neq_1 = Color_0(204, 194, 220);
    this.oeq_1 = Color_0(232, 222, 248);
    this.peq_1 = Color_0(246, 237, 255);
    this.qeq_1 = Color_0(255, 251, 254);
    this.req_1 = Color_0(0, 0, 0);
    this.seq_1 = Color_0(49, 17, 29);
    this.teq_1 = Color_0(255, 255, 255);
    this.ueq_1 = Color_0(73, 37, 50);
    this.veq_1 = Color_0(99, 59, 72);
    this.weq_1 = Color_0(125, 82, 96);
    this.xeq_1 = Color_0(152, 105, 119);
    this.yeq_1 = Color_0(181, 131, 146);
    this.zeq_1 = Color_0(210, 157, 172);
    this.aer_1 = Color_0(239, 184, 200);
    this.ber_1 = Color_0(255, 216, 228);
    this.cer_1 = Color_0(255, 236, 241);
    this.der_1 = Color_0(255, 251, 250);
    this.eer_1 = Color_0(255, 255, 255);
  }
  var PaletteTokens_instance;
  function PaletteTokens_getInstance() {
    if (PaletteTokens_instance == null)
      new PaletteTokens();
    return PaletteTokens_instance;
  }
  var androidx_compose_material3_tokens_PlainTooltipTokens$stable;
  var androidx_compose_material3_tokens_PrimaryNavigationTabTokens$stable;
  var androidx_compose_material3_tokens_ProgressIndicatorTokens$stable;
  var androidx_compose_material3_tokens_RadioButtonTokens$stable;
  var androidx_compose_material3_tokens_ReorderListTokens$stable;
  var androidx_compose_material3_tokens_RevealListTokens$stable;
  var androidx_compose_material3_tokens_RichTooltipTokens$stable;
  var androidx_compose_material3_tokens_ScrimTokens$stable;
  var androidx_compose_material3_tokens_SearchBarTokens$stable;
  var androidx_compose_material3_tokens_SearchViewTokens$stable;
  var androidx_compose_material3_tokens_SecondaryNavigationTabTokens$stable;
  var ShapeKeyTokens_CornerExtraExtraLarge_instance;
  var ShapeKeyTokens_CornerExtraLarge_instance;
  var ShapeKeyTokens_CornerExtraLargeIncreased_instance;
  var ShapeKeyTokens_CornerExtraLargeTop_instance;
  var ShapeKeyTokens_CornerExtraSmall_instance;
  var ShapeKeyTokens_CornerExtraSmallTop_instance;
  var ShapeKeyTokens_CornerFull_instance;
  var ShapeKeyTokens_CornerLarge_instance;
  var ShapeKeyTokens_CornerLargeEnd_instance;
  var ShapeKeyTokens_CornerLargeIncreased_instance;
  var ShapeKeyTokens_CornerLargeStart_instance;
  var ShapeKeyTokens_CornerLargeTop_instance;
  var ShapeKeyTokens_CornerMedium_instance;
  var ShapeKeyTokens_CornerNone_instance;
  var ShapeKeyTokens_CornerSmall_instance;
  var ShapeKeyTokens_entriesInitialized;
  function ShapeKeyTokens_initEntries() {
    if (ShapeKeyTokens_entriesInitialized)
      return Unit_instance;
    ShapeKeyTokens_entriesInitialized = true;
    ShapeKeyTokens_CornerExtraExtraLarge_instance = new ShapeKeyTokens('CornerExtraExtraLarge', 0);
    ShapeKeyTokens_CornerExtraLarge_instance = new ShapeKeyTokens('CornerExtraLarge', 1);
    ShapeKeyTokens_CornerExtraLargeIncreased_instance = new ShapeKeyTokens('CornerExtraLargeIncreased', 2);
    ShapeKeyTokens_CornerExtraLargeTop_instance = new ShapeKeyTokens('CornerExtraLargeTop', 3);
    ShapeKeyTokens_CornerExtraSmall_instance = new ShapeKeyTokens('CornerExtraSmall', 4);
    ShapeKeyTokens_CornerExtraSmallTop_instance = new ShapeKeyTokens('CornerExtraSmallTop', 5);
    ShapeKeyTokens_CornerFull_instance = new ShapeKeyTokens('CornerFull', 6);
    ShapeKeyTokens_CornerLarge_instance = new ShapeKeyTokens('CornerLarge', 7);
    ShapeKeyTokens_CornerLargeEnd_instance = new ShapeKeyTokens('CornerLargeEnd', 8);
    ShapeKeyTokens_CornerLargeIncreased_instance = new ShapeKeyTokens('CornerLargeIncreased', 9);
    ShapeKeyTokens_CornerLargeStart_instance = new ShapeKeyTokens('CornerLargeStart', 10);
    ShapeKeyTokens_CornerLargeTop_instance = new ShapeKeyTokens('CornerLargeTop', 11);
    ShapeKeyTokens_CornerMedium_instance = new ShapeKeyTokens('CornerMedium', 12);
    ShapeKeyTokens_CornerNone_instance = new ShapeKeyTokens('CornerNone', 13);
    ShapeKeyTokens_CornerSmall_instance = new ShapeKeyTokens('CornerSmall', 14);
  }
  function ShapeKeyTokens(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ShapeKeyTokens_CornerExtraLarge_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerExtraLarge_instance;
  }
  function ShapeKeyTokens_CornerFull_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerFull_instance;
  }
  function ShapeKeyTokens_CornerLarge_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerLarge_instance;
  }
  function ShapeKeyTokens_CornerMedium_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerMedium_instance;
  }
  function ShapeKeyTokens_CornerNone_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerNone_instance;
  }
  function ShapeKeyTokens_CornerSmall_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerSmall_instance;
  }
  var androidx_compose_material3_tokens_ShapeTokens$stable;
  function ShapeTokens() {
    ShapeTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(48.0);
    tmp.pej_1 = RoundedCornerShape(tmp$ret$0);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(28.0);
    tmp_0.qej_1 = RoundedCornerShape(tmp$ret$1);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$2 = _Dp___init__impl__ms3zkb(32.0);
    tmp_1.rej_1 = RoundedCornerShape(tmp$ret$2);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_3 = _Dp___init__impl__ms3zkb(28.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_4 = _Dp___init__impl__ms3zkb(28.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_5 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$6 = _Dp___init__impl__ms3zkb(0.0);
    tmp_2.sej_1 = RoundedCornerShape_0(tmp_3, tmp_4, tmp_5, tmp$ret$6);
    var tmp_6 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$7 = _Dp___init__impl__ms3zkb(4.0);
    tmp_6.tej_1 = RoundedCornerShape(tmp$ret$7);
    var tmp_7 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_8 = _Dp___init__impl__ms3zkb(4.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_9 = _Dp___init__impl__ms3zkb(4.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_10 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$11 = _Dp___init__impl__ms3zkb(0.0);
    tmp_7.uej_1 = RoundedCornerShape_0(tmp_8, tmp_9, tmp_10, tmp$ret$11);
    this.vej_1 = get_CircleShape();
    var tmp_11 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$12 = _Dp___init__impl__ms3zkb(16.0);
    tmp_11.wej_1 = RoundedCornerShape(tmp$ret$12);
    var tmp_12 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_13 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_14 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_15 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$16 = _Dp___init__impl__ms3zkb(0.0);
    tmp_12.xej_1 = RoundedCornerShape_0(tmp_13, tmp_14, tmp_15, tmp$ret$16);
    var tmp_16 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$17 = _Dp___init__impl__ms3zkb(20.0);
    tmp_16.yej_1 = RoundedCornerShape(tmp$ret$17);
    var tmp_17 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_18 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_19 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_20 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$21 = _Dp___init__impl__ms3zkb(16.0);
    tmp_17.zej_1 = RoundedCornerShape_0(tmp_18, tmp_19, tmp_20, tmp$ret$21);
    var tmp_21 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_22 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_23 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_24 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$25 = _Dp___init__impl__ms3zkb(0.0);
    tmp_21.aek_1 = RoundedCornerShape_0(tmp_22, tmp_23, tmp_24, tmp$ret$25);
    var tmp_25 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$26 = _Dp___init__impl__ms3zkb(12.0);
    tmp_25.bek_1 = RoundedCornerShape(tmp$ret$26);
    this.cek_1 = get_RectangleShape();
    var tmp_26 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$27 = _Dp___init__impl__ms3zkb(8.0);
    tmp_26.dek_1 = RoundedCornerShape(tmp$ret$27);
    var tmp_27 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$28 = _Dp___init__impl__ms3zkb(48.0);
    tmp_27.eek_1 = CornerSize_0(tmp$ret$28);
    var tmp_28 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$29 = _Dp___init__impl__ms3zkb(28.0);
    tmp_28.fek_1 = CornerSize_0(tmp$ret$29);
    var tmp_29 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$30 = _Dp___init__impl__ms3zkb(32.0);
    tmp_29.gek_1 = CornerSize_0(tmp$ret$30);
    var tmp_30 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$31 = _Dp___init__impl__ms3zkb(4.0);
    tmp_30.hek_1 = CornerSize_0(tmp$ret$31);
    var tmp_31 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$32 = _Dp___init__impl__ms3zkb(16.0);
    tmp_31.iek_1 = CornerSize_0(tmp$ret$32);
    var tmp_32 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$33 = _Dp___init__impl__ms3zkb(20.0);
    tmp_32.jek_1 = CornerSize_0(tmp$ret$33);
    var tmp_33 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$34 = _Dp___init__impl__ms3zkb(12.0);
    tmp_33.kek_1 = CornerSize_0(tmp$ret$34);
    var tmp_34 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$35 = _Dp___init__impl__ms3zkb(0.0);
    tmp_34.lek_1 = CornerSize_0(tmp$ret$35);
    var tmp_35 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$36 = _Dp___init__impl__ms3zkb(8.0);
    tmp_35.mek_1 = CornerSize_0(tmp$ret$36);
  }
  var ShapeTokens_instance;
  function ShapeTokens_getInstance() {
    if (ShapeTokens_instance == null)
      new ShapeTokens();
    return ShapeTokens_instance;
  }
  var androidx_compose_material3_tokens_SheetBottomTokens$stable;
  var androidx_compose_material3_tokens_SliderTokens$stable;
  var androidx_compose_material3_tokens_SmallIconButtonTokens$stable;
  function SmallIconButtonTokens() {
    SmallIconButtonTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.me9_1 = _Dp___init__impl__ms3zkb(40.0);
    this.ne9_1 = ShapeKeyTokens_CornerFull_getInstance();
    this.oe9_1 = ShapeKeyTokens_CornerMedium_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.pe9_1 = _Dp___init__impl__ms3zkb(8.0);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.qe9_1 = _Dp___init__impl__ms3zkb(8.0);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.re9_1 = _Dp___init__impl__ms3zkb(24.0);
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.se9_1 = _Dp___init__impl__ms3zkb(4.0);
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_4.te9_1 = _Dp___init__impl__ms3zkb(4.0);
    var tmp_5 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_5.ue9_1 = _Dp___init__impl__ms3zkb(1.0);
    this.ve9_1 = ShapeKeyTokens_CornerSmall_getInstance();
    this.we9_1 = ShapeKeyTokens_CornerMedium_getInstance();
    this.xe9_1 = ShapeKeyTokens_CornerFull_getInstance();
    var tmp_6 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_6.ye9_1 = _Dp___init__impl__ms3zkb(14.0);
    var tmp_7 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_7.ze9_1 = _Dp___init__impl__ms3zkb(14.0);
  }
  var SmallIconButtonTokens_instance;
  function SmallIconButtonTokens_getInstance() {
    if (SmallIconButtonTokens_instance == null)
      new SmallIconButtonTokens();
    return SmallIconButtonTokens_instance;
  }
  var androidx_compose_material3_tokens_SnackbarTokens$stable;
  var androidx_compose_material3_tokens_SplitButtonLargeTokens$stable;
  var androidx_compose_material3_tokens_SplitButtonMediumTokens$stable;
  var androidx_compose_material3_tokens_SplitButtonSmallTokens$stable;
  var androidx_compose_material3_tokens_SplitButtonXLargeTokens$stable;
  var androidx_compose_material3_tokens_SplitButtonXSmallTokens$stable;
  var androidx_compose_material3_tokens_StandardMotionTokens$stable;
  function StandardMotionTokens() {
    this.vef_1 = 0.9;
    this.wef_1 = 700.0;
    this.xef_1 = 1.0;
    this.yef_1 = 1600.0;
    this.zef_1 = 0.9;
    this.aeg_1 = 1400.0;
    this.beg_1 = 1.0;
    this.ceg_1 = 3800.0;
    this.deg_1 = 0.9;
    this.eeg_1 = 300.0;
    this.feg_1 = 1.0;
    this.geg_1 = 800.0;
  }
  var StandardMotionTokens_instance;
  function StandardMotionTokens_getInstance() {
    return StandardMotionTokens_instance;
  }
  var androidx_compose_material3_tokens_StateTokens$stable;
  var androidx_compose_material3_tokens_SuggestionChipTokens$stable;
  var androidx_compose_material3_tokens_SwitchTokens$stable;
  var androidx_compose_material3_tokens_TextButtonTokens$stable;
  var androidx_compose_material3_tokens_TimeInputTokens$stable;
  var androidx_compose_material3_tokens_TimePickerTokens$stable;
  var androidx_compose_material3_tokens_TonalButtonTokens$stable;
  var androidx_compose_material3_tokens_TypeScaleTokens$stable;
  function TypeScaleTokens() {
    TypeScaleTokens_instance = this;
    this.fer_1 = TypefaceTokens_getInstance().aex_1;
    this.ger_1 = get_sp(24.0);
    this.her_1 = get_sp_0(16);
    this.ier_1 = get_sp(0.5);
    this.jer_1 = TypefaceTokens_getInstance().dex_1;
    this.ker_1 = TypefaceTokens_getInstance().aex_1;
    this.ler_1 = get_sp(20.0);
    this.mer_1 = get_sp_0(14);
    this.ner_1 = get_sp(0.2);
    this.oer_1 = TypefaceTokens_getInstance().dex_1;
    this.per_1 = TypefaceTokens_getInstance().aex_1;
    this.qer_1 = get_sp(16.0);
    this.rer_1 = get_sp_0(12);
    this.ser_1 = get_sp(0.4);
    this.ter_1 = TypefaceTokens_getInstance().dex_1;
    this.uer_1 = TypefaceTokens_getInstance().zew_1;
    this.ver_1 = get_sp(64.0);
    this.wer_1 = get_sp_0(57);
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.TextUnit.unaryMinus' call
    var this_0 = get_sp(0.2);
    checkArithmetic(this_0);
    tmp.xer_1 = pack(_TextUnit___get_rawType__impl__tu8yq5(this_0), -_TextUnit___get_value__impl__hpbx0k(this_0));
    this.yer_1 = TypefaceTokens_getInstance().dex_1;
    this.zer_1 = TypefaceTokens_getInstance().zew_1;
    this.aes_1 = get_sp(52.0);
    this.bes_1 = get_sp_0(45);
    this.ces_1 = get_sp(0.0);
    this.des_1 = TypefaceTokens_getInstance().dex_1;
    this.ees_1 = TypefaceTokens_getInstance().zew_1;
    this.fes_1 = get_sp(44.0);
    this.ges_1 = get_sp_0(36);
    this.hes_1 = get_sp(0.0);
    this.ies_1 = TypefaceTokens_getInstance().dex_1;
    this.jes_1 = TypefaceTokens_getInstance().zew_1;
    this.kes_1 = get_sp(40.0);
    this.les_1 = get_sp_0(32);
    this.mes_1 = get_sp(0.0);
    this.nes_1 = TypefaceTokens_getInstance().dex_1;
    this.oes_1 = TypefaceTokens_getInstance().zew_1;
    this.pes_1 = get_sp(36.0);
    this.qes_1 = get_sp_0(28);
    this.res_1 = get_sp(0.0);
    this.ses_1 = TypefaceTokens_getInstance().dex_1;
    this.tes_1 = TypefaceTokens_getInstance().zew_1;
    this.ues_1 = get_sp(32.0);
    this.ves_1 = get_sp_0(24);
    this.wes_1 = get_sp(0.0);
    this.xes_1 = TypefaceTokens_getInstance().dex_1;
    this.yes_1 = TypefaceTokens_getInstance().aex_1;
    this.zes_1 = get_sp(20.0);
    this.aet_1 = get_sp_0(14);
    this.bet_1 = get_sp(0.1);
    this.cet_1 = TypefaceTokens_getInstance().cex_1;
    this.det_1 = TypefaceTokens_getInstance().aex_1;
    this.eet_1 = get_sp(16.0);
    this.fet_1 = get_sp_0(12);
    this.get_1 = get_sp(0.5);
    this.het_1 = TypefaceTokens_getInstance().cex_1;
    this.iet_1 = TypefaceTokens_getInstance().aex_1;
    this.jet_1 = get_sp(16.0);
    this.ket_1 = get_sp_0(11);
    this.let_1 = get_sp(0.5);
    this.met_1 = TypefaceTokens_getInstance().cex_1;
    this.net_1 = TypefaceTokens_getInstance().zew_1;
    this.oet_1 = get_sp(28.0);
    this.pet_1 = get_sp_0(22);
    this.qet_1 = get_sp(0.0);
    this.ret_1 = TypefaceTokens_getInstance().dex_1;
    this.set_1 = TypefaceTokens_getInstance().aex_1;
    this.tet_1 = get_sp(24.0);
    this.uet_1 = get_sp_0(16);
    this.vet_1 = get_sp(0.2);
    this.wet_1 = TypefaceTokens_getInstance().cex_1;
    this.xet_1 = TypefaceTokens_getInstance().aex_1;
    this.yet_1 = get_sp(20.0);
    this.zet_1 = get_sp_0(14);
    this.aeu_1 = get_sp(0.1);
    this.beu_1 = TypefaceTokens_getInstance().cex_1;
    this.ceu_1 = TypefaceTokens_getInstance().aex_1;
    this.deu_1 = get_sp(24.0);
    this.eeu_1 = get_sp_0(16);
    this.feu_1 = get_sp(0.15);
    this.geu_1 = TypefaceTokens_getInstance().cex_1;
    this.heu_1 = TypefaceTokens_getInstance().aex_1;
    this.ieu_1 = get_sp(20.0);
    this.jeu_1 = get_sp_0(14);
    this.keu_1 = get_sp(0.25);
    this.leu_1 = TypefaceTokens_getInstance().cex_1;
    this.meu_1 = TypefaceTokens_getInstance().aex_1;
    this.neu_1 = get_sp(16.0);
    this.oeu_1 = get_sp_0(12);
    this.peu_1 = get_sp(0.4);
    this.qeu_1 = TypefaceTokens_getInstance().cex_1;
    this.reu_1 = TypefaceTokens_getInstance().zew_1;
    this.seu_1 = get_sp(64.0);
    this.teu_1 = get_sp_0(57);
    this.ueu_1 = get_sp_0(0);
    this.veu_1 = TypefaceTokens_getInstance().cex_1;
    this.weu_1 = TypefaceTokens_getInstance().zew_1;
    this.xeu_1 = get_sp(52.0);
    this.yeu_1 = get_sp_0(45);
    this.zeu_1 = get_sp_0(0);
    this.aev_1 = TypefaceTokens_getInstance().cex_1;
    this.bev_1 = TypefaceTokens_getInstance().zew_1;
    this.cev_1 = get_sp(44.0);
    this.dev_1 = get_sp_0(36);
    this.eev_1 = get_sp_0(0);
    this.fev_1 = TypefaceTokens_getInstance().cex_1;
    this.gev_1 = TypefaceTokens_getInstance().zew_1;
    this.hev_1 = get_sp(40.0);
    this.iev_1 = get_sp_0(32);
    this.jev_1 = get_sp_0(0);
    this.kev_1 = TypefaceTokens_getInstance().cex_1;
    this.lev_1 = TypefaceTokens_getInstance().zew_1;
    this.mev_1 = get_sp(36.0);
    this.nev_1 = get_sp_0(28);
    this.oev_1 = get_sp_0(0);
    this.pev_1 = TypefaceTokens_getInstance().cex_1;
    this.qev_1 = TypefaceTokens_getInstance().zew_1;
    this.rev_1 = get_sp(32.0);
    this.sev_1 = get_sp_0(24);
    this.tev_1 = get_sp_0(0);
    this.uev_1 = TypefaceTokens_getInstance().cex_1;
    this.vev_1 = TypefaceTokens_getInstance().aex_1;
    this.wev_1 = get_sp(20.0);
    this.xev_1 = get_sp_0(14);
    this.yev_1 = get_sp(0.1);
    this.zev_1 = TypefaceTokens_getInstance().bex_1;
    this.aew_1 = TypefaceTokens_getInstance().aex_1;
    this.bew_1 = get_sp(16.0);
    this.cew_1 = get_sp_0(12);
    this.dew_1 = get_sp(0.5);
    this.eew_1 = TypefaceTokens_getInstance().bex_1;
    this.few_1 = TypefaceTokens_getInstance().aex_1;
    this.gew_1 = get_sp(16.0);
    this.hew_1 = get_sp_0(11);
    this.iew_1 = get_sp(0.5);
    this.jew_1 = TypefaceTokens_getInstance().bex_1;
    this.kew_1 = TypefaceTokens_getInstance().zew_1;
    this.lew_1 = get_sp(28.0);
    this.mew_1 = get_sp_0(22);
    this.new_1 = get_sp_0(0);
    this.oew_1 = TypefaceTokens_getInstance().cex_1;
    this.pew_1 = TypefaceTokens_getInstance().aex_1;
    this.qew_1 = get_sp(24.0);
    this.rew_1 = get_sp_0(16);
    this.sew_1 = get_sp(0.15);
    this.tew_1 = TypefaceTokens_getInstance().bex_1;
    this.uew_1 = TypefaceTokens_getInstance().aex_1;
    this.vew_1 = get_sp(20.0);
    this.wew_1 = get_sp_0(14);
    this.xew_1 = get_sp(0.1);
    this.yew_1 = TypefaceTokens_getInstance().bex_1;
  }
  var TypeScaleTokens_instance;
  function TypeScaleTokens_getInstance() {
    if (TypeScaleTokens_instance == null)
      new TypeScaleTokens();
    return TypeScaleTokens_instance;
  }
  var androidx_compose_material3_tokens_TypefaceTokens$stable;
  function TypefaceTokens() {
    TypefaceTokens_instance = this;
    this.zew_1 = Companion_getInstance_13().a5g_1;
    this.aex_1 = Companion_getInstance_13().a5g_1;
    this.bex_1 = Companion_getInstance_14().p5f_1;
    this.cex_1 = Companion_getInstance_14().n5f_1;
    this.dex_1 = Companion_getInstance_14().m5f_1;
  }
  var TypefaceTokens_instance;
  function TypefaceTokens_getInstance() {
    if (TypefaceTokens_instance == null)
      new TypefaceTokens();
    return TypefaceTokens_instance;
  }
  var TypographyKeyTokens_BodyLarge_instance;
  var TypographyKeyTokens_BodyMedium_instance;
  var TypographyKeyTokens_BodySmall_instance;
  var TypographyKeyTokens_DisplayLarge_instance;
  var TypographyKeyTokens_DisplayMedium_instance;
  var TypographyKeyTokens_DisplaySmall_instance;
  var TypographyKeyTokens_HeadlineLarge_instance;
  var TypographyKeyTokens_HeadlineMedium_instance;
  var TypographyKeyTokens_HeadlineSmall_instance;
  var TypographyKeyTokens_LabelLarge_instance;
  var TypographyKeyTokens_LabelMedium_instance;
  var TypographyKeyTokens_LabelSmall_instance;
  var TypographyKeyTokens_TitleLarge_instance;
  var TypographyKeyTokens_TitleMedium_instance;
  var TypographyKeyTokens_TitleSmall_instance;
  var TypographyKeyTokens_BodyLargeEmphasized_instance;
  var TypographyKeyTokens_BodyMediumEmphasized_instance;
  var TypographyKeyTokens_BodySmallEmphasized_instance;
  var TypographyKeyTokens_DisplayLargeEmphasized_instance;
  var TypographyKeyTokens_DisplayMediumEmphasized_instance;
  var TypographyKeyTokens_DisplaySmallEmphasized_instance;
  var TypographyKeyTokens_HeadlineLargeEmphasized_instance;
  var TypographyKeyTokens_HeadlineMediumEmphasized_instance;
  var TypographyKeyTokens_HeadlineSmallEmphasized_instance;
  var TypographyKeyTokens_LabelLargeEmphasized_instance;
  var TypographyKeyTokens_LabelMediumEmphasized_instance;
  var TypographyKeyTokens_LabelSmallEmphasized_instance;
  var TypographyKeyTokens_TitleLargeEmphasized_instance;
  var TypographyKeyTokens_TitleMediumEmphasized_instance;
  var TypographyKeyTokens_TitleSmallEmphasized_instance;
  var TypographyKeyTokens_entriesInitialized;
  function TypographyKeyTokens_initEntries() {
    if (TypographyKeyTokens_entriesInitialized)
      return Unit_instance;
    TypographyKeyTokens_entriesInitialized = true;
    TypographyKeyTokens_BodyLarge_instance = new TypographyKeyTokens('BodyLarge', 0);
    TypographyKeyTokens_BodyMedium_instance = new TypographyKeyTokens('BodyMedium', 1);
    TypographyKeyTokens_BodySmall_instance = new TypographyKeyTokens('BodySmall', 2);
    TypographyKeyTokens_DisplayLarge_instance = new TypographyKeyTokens('DisplayLarge', 3);
    TypographyKeyTokens_DisplayMedium_instance = new TypographyKeyTokens('DisplayMedium', 4);
    TypographyKeyTokens_DisplaySmall_instance = new TypographyKeyTokens('DisplaySmall', 5);
    TypographyKeyTokens_HeadlineLarge_instance = new TypographyKeyTokens('HeadlineLarge', 6);
    TypographyKeyTokens_HeadlineMedium_instance = new TypographyKeyTokens('HeadlineMedium', 7);
    TypographyKeyTokens_HeadlineSmall_instance = new TypographyKeyTokens('HeadlineSmall', 8);
    TypographyKeyTokens_LabelLarge_instance = new TypographyKeyTokens('LabelLarge', 9);
    TypographyKeyTokens_LabelMedium_instance = new TypographyKeyTokens('LabelMedium', 10);
    TypographyKeyTokens_LabelSmall_instance = new TypographyKeyTokens('LabelSmall', 11);
    TypographyKeyTokens_TitleLarge_instance = new TypographyKeyTokens('TitleLarge', 12);
    TypographyKeyTokens_TitleMedium_instance = new TypographyKeyTokens('TitleMedium', 13);
    TypographyKeyTokens_TitleSmall_instance = new TypographyKeyTokens('TitleSmall', 14);
    TypographyKeyTokens_BodyLargeEmphasized_instance = new TypographyKeyTokens('BodyLargeEmphasized', 15);
    TypographyKeyTokens_BodyMediumEmphasized_instance = new TypographyKeyTokens('BodyMediumEmphasized', 16);
    TypographyKeyTokens_BodySmallEmphasized_instance = new TypographyKeyTokens('BodySmallEmphasized', 17);
    TypographyKeyTokens_DisplayLargeEmphasized_instance = new TypographyKeyTokens('DisplayLargeEmphasized', 18);
    TypographyKeyTokens_DisplayMediumEmphasized_instance = new TypographyKeyTokens('DisplayMediumEmphasized', 19);
    TypographyKeyTokens_DisplaySmallEmphasized_instance = new TypographyKeyTokens('DisplaySmallEmphasized', 20);
    TypographyKeyTokens_HeadlineLargeEmphasized_instance = new TypographyKeyTokens('HeadlineLargeEmphasized', 21);
    TypographyKeyTokens_HeadlineMediumEmphasized_instance = new TypographyKeyTokens('HeadlineMediumEmphasized', 22);
    TypographyKeyTokens_HeadlineSmallEmphasized_instance = new TypographyKeyTokens('HeadlineSmallEmphasized', 23);
    TypographyKeyTokens_LabelLargeEmphasized_instance = new TypographyKeyTokens('LabelLargeEmphasized', 24);
    TypographyKeyTokens_LabelMediumEmphasized_instance = new TypographyKeyTokens('LabelMediumEmphasized', 25);
    TypographyKeyTokens_LabelSmallEmphasized_instance = new TypographyKeyTokens('LabelSmallEmphasized', 26);
    TypographyKeyTokens_TitleLargeEmphasized_instance = new TypographyKeyTokens('TitleLargeEmphasized', 27);
    TypographyKeyTokens_TitleMediumEmphasized_instance = new TypographyKeyTokens('TitleMediumEmphasized', 28);
    TypographyKeyTokens_TitleSmallEmphasized_instance = new TypographyKeyTokens('TitleSmallEmphasized', 29);
  }
  function TypographyKeyTokens(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function TypographyKeyTokens_DisplaySmall_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_DisplaySmall_instance;
  }
  function TypographyKeyTokens_HeadlineMedium_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_HeadlineMedium_instance;
  }
  function TypographyKeyTokens_HeadlineSmall_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_HeadlineSmall_instance;
  }
  function TypographyKeyTokens_LabelLarge_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_LabelLarge_instance;
  }
  function TypographyKeyTokens_LabelMedium_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_LabelMedium_instance;
  }
  function TypographyKeyTokens_TitleLarge_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_TitleLarge_instance;
  }
  function TypographyKeyTokens_TitleMedium_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_TitleMedium_instance;
  }
  function get_DefaultLineHeightStyle() {
    _init_properties_TypographyTokens_kt__by6b7t();
    return DefaultLineHeightStyle;
  }
  var DefaultLineHeightStyle;
  function get_DefaultTextStyle() {
    _init_properties_TypographyTokens_kt__by6b7t();
    return DefaultTextStyle;
  }
  var DefaultTextStyle;
  var androidx_compose_material3_tokens_TypographyTokens$stable;
  function TypographyTokens() {
    TypographyTokens_instance = this;
    var tmp = this;
    var tmp0_$this = get_DefaultTextStyle();
    var tmp1_fontFamily = TypeScaleTokens_getInstance().fer_1;
    var tmp2_fontWeight = TypeScaleTokens_getInstance().jer_1;
    var tmp3_fontSize = TypeScaleTokens_getInstance().her_1;
    var tmp4_lineHeight = TypeScaleTokens_getInstance().ger_1;
    var tmp5_letterSpacing = TypeScaleTokens_getInstance().ier_1;
    tmp.xek_1 = tmp0_$this.s5h(VOID, tmp3_fontSize, tmp2_fontWeight, VOID, VOID, tmp1_fontFamily, VOID, tmp5_letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight);
    var tmp_0 = this;
    var tmp0_$this_0 = get_DefaultTextStyle();
    var tmp1_fontFamily_0 = TypeScaleTokens_getInstance().ker_1;
    var tmp2_fontWeight_0 = TypeScaleTokens_getInstance().oer_1;
    var tmp3_fontSize_0 = TypeScaleTokens_getInstance().mer_1;
    var tmp4_lineHeight_0 = TypeScaleTokens_getInstance().ler_1;
    var tmp5_letterSpacing_0 = TypeScaleTokens_getInstance().ner_1;
    tmp_0.yek_1 = tmp0_$this_0.s5h(VOID, tmp3_fontSize_0, tmp2_fontWeight_0, VOID, VOID, tmp1_fontFamily_0, VOID, tmp5_letterSpacing_0, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_0);
    var tmp_1 = this;
    var tmp0_$this_1 = get_DefaultTextStyle();
    var tmp1_fontFamily_1 = TypeScaleTokens_getInstance().per_1;
    var tmp2_fontWeight_1 = TypeScaleTokens_getInstance().ter_1;
    var tmp3_fontSize_1 = TypeScaleTokens_getInstance().rer_1;
    var tmp4_lineHeight_1 = TypeScaleTokens_getInstance().qer_1;
    var tmp5_letterSpacing_1 = TypeScaleTokens_getInstance().ser_1;
    tmp_1.zek_1 = tmp0_$this_1.s5h(VOID, tmp3_fontSize_1, tmp2_fontWeight_1, VOID, VOID, tmp1_fontFamily_1, VOID, tmp5_letterSpacing_1, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_1);
    var tmp_2 = this;
    var tmp0_$this_2 = get_DefaultTextStyle();
    var tmp1_fontFamily_2 = TypeScaleTokens_getInstance().uer_1;
    var tmp2_fontWeight_2 = TypeScaleTokens_getInstance().yer_1;
    var tmp3_fontSize_2 = TypeScaleTokens_getInstance().wer_1;
    var tmp4_lineHeight_2 = TypeScaleTokens_getInstance().ver_1;
    var tmp5_letterSpacing_2 = TypeScaleTokens_getInstance().xer_1;
    tmp_2.ael_1 = tmp0_$this_2.s5h(VOID, tmp3_fontSize_2, tmp2_fontWeight_2, VOID, VOID, tmp1_fontFamily_2, VOID, tmp5_letterSpacing_2, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_2);
    var tmp_3 = this;
    var tmp0_$this_3 = get_DefaultTextStyle();
    var tmp1_fontFamily_3 = TypeScaleTokens_getInstance().zer_1;
    var tmp2_fontWeight_3 = TypeScaleTokens_getInstance().des_1;
    var tmp3_fontSize_3 = TypeScaleTokens_getInstance().bes_1;
    var tmp4_lineHeight_3 = TypeScaleTokens_getInstance().aes_1;
    var tmp5_letterSpacing_3 = TypeScaleTokens_getInstance().ces_1;
    tmp_3.bel_1 = tmp0_$this_3.s5h(VOID, tmp3_fontSize_3, tmp2_fontWeight_3, VOID, VOID, tmp1_fontFamily_3, VOID, tmp5_letterSpacing_3, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_3);
    var tmp_4 = this;
    var tmp0_$this_4 = get_DefaultTextStyle();
    var tmp1_fontFamily_4 = TypeScaleTokens_getInstance().ees_1;
    var tmp2_fontWeight_4 = TypeScaleTokens_getInstance().ies_1;
    var tmp3_fontSize_4 = TypeScaleTokens_getInstance().ges_1;
    var tmp4_lineHeight_4 = TypeScaleTokens_getInstance().fes_1;
    var tmp5_letterSpacing_4 = TypeScaleTokens_getInstance().hes_1;
    tmp_4.cel_1 = tmp0_$this_4.s5h(VOID, tmp3_fontSize_4, tmp2_fontWeight_4, VOID, VOID, tmp1_fontFamily_4, VOID, tmp5_letterSpacing_4, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_4);
    var tmp_5 = this;
    var tmp0_$this_5 = get_DefaultTextStyle();
    var tmp1_fontFamily_5 = TypeScaleTokens_getInstance().jes_1;
    var tmp2_fontWeight_5 = TypeScaleTokens_getInstance().nes_1;
    var tmp3_fontSize_5 = TypeScaleTokens_getInstance().les_1;
    var tmp4_lineHeight_5 = TypeScaleTokens_getInstance().kes_1;
    var tmp5_letterSpacing_5 = TypeScaleTokens_getInstance().mes_1;
    tmp_5.del_1 = tmp0_$this_5.s5h(VOID, tmp3_fontSize_5, tmp2_fontWeight_5, VOID, VOID, tmp1_fontFamily_5, VOID, tmp5_letterSpacing_5, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_5);
    var tmp_6 = this;
    var tmp0_$this_6 = get_DefaultTextStyle();
    var tmp1_fontFamily_6 = TypeScaleTokens_getInstance().oes_1;
    var tmp2_fontWeight_6 = TypeScaleTokens_getInstance().ses_1;
    var tmp3_fontSize_6 = TypeScaleTokens_getInstance().qes_1;
    var tmp4_lineHeight_6 = TypeScaleTokens_getInstance().pes_1;
    var tmp5_letterSpacing_6 = TypeScaleTokens_getInstance().res_1;
    tmp_6.eel_1 = tmp0_$this_6.s5h(VOID, tmp3_fontSize_6, tmp2_fontWeight_6, VOID, VOID, tmp1_fontFamily_6, VOID, tmp5_letterSpacing_6, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_6);
    var tmp_7 = this;
    var tmp0_$this_7 = get_DefaultTextStyle();
    var tmp1_fontFamily_7 = TypeScaleTokens_getInstance().tes_1;
    var tmp2_fontWeight_7 = TypeScaleTokens_getInstance().xes_1;
    var tmp3_fontSize_7 = TypeScaleTokens_getInstance().ves_1;
    var tmp4_lineHeight_7 = TypeScaleTokens_getInstance().ues_1;
    var tmp5_letterSpacing_7 = TypeScaleTokens_getInstance().wes_1;
    tmp_7.fel_1 = tmp0_$this_7.s5h(VOID, tmp3_fontSize_7, tmp2_fontWeight_7, VOID, VOID, tmp1_fontFamily_7, VOID, tmp5_letterSpacing_7, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_7);
    var tmp_8 = this;
    var tmp0_$this_8 = get_DefaultTextStyle();
    var tmp1_fontFamily_8 = TypeScaleTokens_getInstance().yes_1;
    var tmp2_fontWeight_8 = TypeScaleTokens_getInstance().cet_1;
    var tmp3_fontSize_8 = TypeScaleTokens_getInstance().aet_1;
    var tmp4_lineHeight_8 = TypeScaleTokens_getInstance().zes_1;
    var tmp5_letterSpacing_8 = TypeScaleTokens_getInstance().bet_1;
    tmp_8.gel_1 = tmp0_$this_8.s5h(VOID, tmp3_fontSize_8, tmp2_fontWeight_8, VOID, VOID, tmp1_fontFamily_8, VOID, tmp5_letterSpacing_8, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_8);
    var tmp_9 = this;
    var tmp0_$this_9 = get_DefaultTextStyle();
    var tmp1_fontFamily_9 = TypeScaleTokens_getInstance().det_1;
    var tmp2_fontWeight_9 = TypeScaleTokens_getInstance().het_1;
    var tmp3_fontSize_9 = TypeScaleTokens_getInstance().fet_1;
    var tmp4_lineHeight_9 = TypeScaleTokens_getInstance().eet_1;
    var tmp5_letterSpacing_9 = TypeScaleTokens_getInstance().get_1;
    tmp_9.hel_1 = tmp0_$this_9.s5h(VOID, tmp3_fontSize_9, tmp2_fontWeight_9, VOID, VOID, tmp1_fontFamily_9, VOID, tmp5_letterSpacing_9, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_9);
    var tmp_10 = this;
    var tmp0_$this_10 = get_DefaultTextStyle();
    var tmp1_fontFamily_10 = TypeScaleTokens_getInstance().iet_1;
    var tmp2_fontWeight_10 = TypeScaleTokens_getInstance().met_1;
    var tmp3_fontSize_10 = TypeScaleTokens_getInstance().ket_1;
    var tmp4_lineHeight_10 = TypeScaleTokens_getInstance().jet_1;
    var tmp5_letterSpacing_10 = TypeScaleTokens_getInstance().let_1;
    tmp_10.iel_1 = tmp0_$this_10.s5h(VOID, tmp3_fontSize_10, tmp2_fontWeight_10, VOID, VOID, tmp1_fontFamily_10, VOID, tmp5_letterSpacing_10, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_10);
    var tmp_11 = this;
    var tmp0_$this_11 = get_DefaultTextStyle();
    var tmp1_fontFamily_11 = TypeScaleTokens_getInstance().net_1;
    var tmp2_fontWeight_11 = TypeScaleTokens_getInstance().ret_1;
    var tmp3_fontSize_11 = TypeScaleTokens_getInstance().pet_1;
    var tmp4_lineHeight_11 = TypeScaleTokens_getInstance().oet_1;
    var tmp5_letterSpacing_11 = TypeScaleTokens_getInstance().qet_1;
    tmp_11.jel_1 = tmp0_$this_11.s5h(VOID, tmp3_fontSize_11, tmp2_fontWeight_11, VOID, VOID, tmp1_fontFamily_11, VOID, tmp5_letterSpacing_11, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_11);
    var tmp_12 = this;
    var tmp0_$this_12 = get_DefaultTextStyle();
    var tmp1_fontFamily_12 = TypeScaleTokens_getInstance().set_1;
    var tmp2_fontWeight_12 = TypeScaleTokens_getInstance().wet_1;
    var tmp3_fontSize_12 = TypeScaleTokens_getInstance().uet_1;
    var tmp4_lineHeight_12 = TypeScaleTokens_getInstance().tet_1;
    var tmp5_letterSpacing_12 = TypeScaleTokens_getInstance().vet_1;
    tmp_12.kel_1 = tmp0_$this_12.s5h(VOID, tmp3_fontSize_12, tmp2_fontWeight_12, VOID, VOID, tmp1_fontFamily_12, VOID, tmp5_letterSpacing_12, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_12);
    var tmp_13 = this;
    var tmp0_$this_13 = get_DefaultTextStyle();
    var tmp1_fontFamily_13 = TypeScaleTokens_getInstance().xet_1;
    var tmp2_fontWeight_13 = TypeScaleTokens_getInstance().beu_1;
    var tmp3_fontSize_13 = TypeScaleTokens_getInstance().zet_1;
    var tmp4_lineHeight_13 = TypeScaleTokens_getInstance().yet_1;
    var tmp5_letterSpacing_13 = TypeScaleTokens_getInstance().aeu_1;
    tmp_13.lel_1 = tmp0_$this_13.s5h(VOID, tmp3_fontSize_13, tmp2_fontWeight_13, VOID, VOID, tmp1_fontFamily_13, VOID, tmp5_letterSpacing_13, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_13);
    var tmp_14 = this;
    var tmp0_$this_14 = get_DefaultTextStyle();
    var tmp1_fontFamily_14 = TypeScaleTokens_getInstance().ceu_1;
    var tmp2_fontWeight_14 = TypeScaleTokens_getInstance().geu_1;
    var tmp3_fontSize_14 = TypeScaleTokens_getInstance().eeu_1;
    var tmp4_lineHeight_14 = TypeScaleTokens_getInstance().deu_1;
    var tmp5_letterSpacing_14 = TypeScaleTokens_getInstance().feu_1;
    tmp_14.mel_1 = tmp0_$this_14.s5h(VOID, tmp3_fontSize_14, tmp2_fontWeight_14, VOID, VOID, tmp1_fontFamily_14, VOID, tmp5_letterSpacing_14, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_14);
    var tmp_15 = this;
    var tmp0_$this_15 = get_DefaultTextStyle();
    var tmp1_fontFamily_15 = TypeScaleTokens_getInstance().heu_1;
    var tmp2_fontWeight_15 = TypeScaleTokens_getInstance().leu_1;
    var tmp3_fontSize_15 = TypeScaleTokens_getInstance().jeu_1;
    var tmp4_lineHeight_15 = TypeScaleTokens_getInstance().ieu_1;
    var tmp5_letterSpacing_15 = TypeScaleTokens_getInstance().keu_1;
    tmp_15.nel_1 = tmp0_$this_15.s5h(VOID, tmp3_fontSize_15, tmp2_fontWeight_15, VOID, VOID, tmp1_fontFamily_15, VOID, tmp5_letterSpacing_15, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_15);
    var tmp_16 = this;
    var tmp0_$this_16 = get_DefaultTextStyle();
    var tmp1_fontFamily_16 = TypeScaleTokens_getInstance().meu_1;
    var tmp2_fontWeight_16 = TypeScaleTokens_getInstance().qeu_1;
    var tmp3_fontSize_16 = TypeScaleTokens_getInstance().oeu_1;
    var tmp4_lineHeight_16 = TypeScaleTokens_getInstance().neu_1;
    var tmp5_letterSpacing_16 = TypeScaleTokens_getInstance().peu_1;
    tmp_16.oel_1 = tmp0_$this_16.s5h(VOID, tmp3_fontSize_16, tmp2_fontWeight_16, VOID, VOID, tmp1_fontFamily_16, VOID, tmp5_letterSpacing_16, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_16);
    var tmp_17 = this;
    var tmp0_$this_17 = get_DefaultTextStyle();
    var tmp1_fontFamily_17 = TypeScaleTokens_getInstance().reu_1;
    var tmp2_fontWeight_17 = TypeScaleTokens_getInstance().veu_1;
    var tmp3_fontSize_17 = TypeScaleTokens_getInstance().teu_1;
    var tmp4_lineHeight_17 = TypeScaleTokens_getInstance().seu_1;
    var tmp5_letterSpacing_17 = TypeScaleTokens_getInstance().ueu_1;
    tmp_17.pel_1 = tmp0_$this_17.s5h(VOID, tmp3_fontSize_17, tmp2_fontWeight_17, VOID, VOID, tmp1_fontFamily_17, VOID, tmp5_letterSpacing_17, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_17);
    var tmp_18 = this;
    var tmp0_$this_18 = get_DefaultTextStyle();
    var tmp1_fontFamily_18 = TypeScaleTokens_getInstance().weu_1;
    var tmp2_fontWeight_18 = TypeScaleTokens_getInstance().aev_1;
    var tmp3_fontSize_18 = TypeScaleTokens_getInstance().yeu_1;
    var tmp4_lineHeight_18 = TypeScaleTokens_getInstance().xeu_1;
    var tmp5_letterSpacing_18 = TypeScaleTokens_getInstance().zeu_1;
    tmp_18.qel_1 = tmp0_$this_18.s5h(VOID, tmp3_fontSize_18, tmp2_fontWeight_18, VOID, VOID, tmp1_fontFamily_18, VOID, tmp5_letterSpacing_18, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_18);
    var tmp_19 = this;
    var tmp0_$this_19 = get_DefaultTextStyle();
    var tmp1_fontFamily_19 = TypeScaleTokens_getInstance().bev_1;
    var tmp2_fontWeight_19 = TypeScaleTokens_getInstance().fev_1;
    var tmp3_fontSize_19 = TypeScaleTokens_getInstance().dev_1;
    var tmp4_lineHeight_19 = TypeScaleTokens_getInstance().cev_1;
    var tmp5_letterSpacing_19 = TypeScaleTokens_getInstance().eev_1;
    tmp_19.rel_1 = tmp0_$this_19.s5h(VOID, tmp3_fontSize_19, tmp2_fontWeight_19, VOID, VOID, tmp1_fontFamily_19, VOID, tmp5_letterSpacing_19, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_19);
    var tmp_20 = this;
    var tmp0_$this_20 = get_DefaultTextStyle();
    var tmp1_fontFamily_20 = TypeScaleTokens_getInstance().gev_1;
    var tmp2_fontWeight_20 = TypeScaleTokens_getInstance().kev_1;
    var tmp3_fontSize_20 = TypeScaleTokens_getInstance().iev_1;
    var tmp4_lineHeight_20 = TypeScaleTokens_getInstance().hev_1;
    var tmp5_letterSpacing_20 = TypeScaleTokens_getInstance().jev_1;
    tmp_20.sel_1 = tmp0_$this_20.s5h(VOID, tmp3_fontSize_20, tmp2_fontWeight_20, VOID, VOID, tmp1_fontFamily_20, VOID, tmp5_letterSpacing_20, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_20);
    var tmp_21 = this;
    var tmp0_$this_21 = get_DefaultTextStyle();
    var tmp1_fontFamily_21 = TypeScaleTokens_getInstance().lev_1;
    var tmp2_fontWeight_21 = TypeScaleTokens_getInstance().pev_1;
    var tmp3_fontSize_21 = TypeScaleTokens_getInstance().nev_1;
    var tmp4_lineHeight_21 = TypeScaleTokens_getInstance().mev_1;
    var tmp5_letterSpacing_21 = TypeScaleTokens_getInstance().oev_1;
    tmp_21.tel_1 = tmp0_$this_21.s5h(VOID, tmp3_fontSize_21, tmp2_fontWeight_21, VOID, VOID, tmp1_fontFamily_21, VOID, tmp5_letterSpacing_21, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_21);
    var tmp_22 = this;
    var tmp0_$this_22 = get_DefaultTextStyle();
    var tmp1_fontFamily_22 = TypeScaleTokens_getInstance().qev_1;
    var tmp2_fontWeight_22 = TypeScaleTokens_getInstance().uev_1;
    var tmp3_fontSize_22 = TypeScaleTokens_getInstance().sev_1;
    var tmp4_lineHeight_22 = TypeScaleTokens_getInstance().rev_1;
    var tmp5_letterSpacing_22 = TypeScaleTokens_getInstance().tev_1;
    tmp_22.uel_1 = tmp0_$this_22.s5h(VOID, tmp3_fontSize_22, tmp2_fontWeight_22, VOID, VOID, tmp1_fontFamily_22, VOID, tmp5_letterSpacing_22, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_22);
    var tmp_23 = this;
    var tmp0_$this_23 = get_DefaultTextStyle();
    var tmp1_fontFamily_23 = TypeScaleTokens_getInstance().vev_1;
    var tmp2_fontWeight_23 = TypeScaleTokens_getInstance().zev_1;
    var tmp3_fontSize_23 = TypeScaleTokens_getInstance().xev_1;
    var tmp4_lineHeight_23 = TypeScaleTokens_getInstance().wev_1;
    var tmp5_letterSpacing_23 = TypeScaleTokens_getInstance().yev_1;
    tmp_23.vel_1 = tmp0_$this_23.s5h(VOID, tmp3_fontSize_23, tmp2_fontWeight_23, VOID, VOID, tmp1_fontFamily_23, VOID, tmp5_letterSpacing_23, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_23);
    var tmp_24 = this;
    var tmp0_$this_24 = get_DefaultTextStyle();
    var tmp1_fontFamily_24 = TypeScaleTokens_getInstance().aew_1;
    var tmp2_fontWeight_24 = TypeScaleTokens_getInstance().eew_1;
    var tmp3_fontSize_24 = TypeScaleTokens_getInstance().cew_1;
    var tmp4_lineHeight_24 = TypeScaleTokens_getInstance().bew_1;
    var tmp5_letterSpacing_24 = TypeScaleTokens_getInstance().dew_1;
    tmp_24.wel_1 = tmp0_$this_24.s5h(VOID, tmp3_fontSize_24, tmp2_fontWeight_24, VOID, VOID, tmp1_fontFamily_24, VOID, tmp5_letterSpacing_24, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_24);
    var tmp_25 = this;
    var tmp0_$this_25 = get_DefaultTextStyle();
    var tmp1_fontFamily_25 = TypeScaleTokens_getInstance().few_1;
    var tmp2_fontWeight_25 = TypeScaleTokens_getInstance().jew_1;
    var tmp3_fontSize_25 = TypeScaleTokens_getInstance().hew_1;
    var tmp4_lineHeight_25 = TypeScaleTokens_getInstance().gew_1;
    var tmp5_letterSpacing_25 = TypeScaleTokens_getInstance().iew_1;
    tmp_25.xel_1 = tmp0_$this_25.s5h(VOID, tmp3_fontSize_25, tmp2_fontWeight_25, VOID, VOID, tmp1_fontFamily_25, VOID, tmp5_letterSpacing_25, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_25);
    var tmp_26 = this;
    var tmp0_$this_26 = get_DefaultTextStyle();
    var tmp1_fontFamily_26 = TypeScaleTokens_getInstance().kew_1;
    var tmp2_fontWeight_26 = TypeScaleTokens_getInstance().oew_1;
    var tmp3_fontSize_26 = TypeScaleTokens_getInstance().mew_1;
    var tmp4_lineHeight_26 = TypeScaleTokens_getInstance().lew_1;
    var tmp5_letterSpacing_26 = TypeScaleTokens_getInstance().new_1;
    tmp_26.yel_1 = tmp0_$this_26.s5h(VOID, tmp3_fontSize_26, tmp2_fontWeight_26, VOID, VOID, tmp1_fontFamily_26, VOID, tmp5_letterSpacing_26, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_26);
    var tmp_27 = this;
    var tmp0_$this_27 = get_DefaultTextStyle();
    var tmp1_fontFamily_27 = TypeScaleTokens_getInstance().pew_1;
    var tmp2_fontWeight_27 = TypeScaleTokens_getInstance().tew_1;
    var tmp3_fontSize_27 = TypeScaleTokens_getInstance().rew_1;
    var tmp4_lineHeight_27 = TypeScaleTokens_getInstance().qew_1;
    var tmp5_letterSpacing_27 = TypeScaleTokens_getInstance().sew_1;
    tmp_27.zel_1 = tmp0_$this_27.s5h(VOID, tmp3_fontSize_27, tmp2_fontWeight_27, VOID, VOID, tmp1_fontFamily_27, VOID, tmp5_letterSpacing_27, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_27);
    var tmp_28 = this;
    var tmp0_$this_28 = get_DefaultTextStyle();
    var tmp1_fontFamily_28 = TypeScaleTokens_getInstance().uew_1;
    var tmp2_fontWeight_28 = TypeScaleTokens_getInstance().yew_1;
    var tmp3_fontSize_28 = TypeScaleTokens_getInstance().wew_1;
    var tmp4_lineHeight_28 = TypeScaleTokens_getInstance().vew_1;
    var tmp5_letterSpacing_28 = TypeScaleTokens_getInstance().xew_1;
    tmp_28.aem_1 = tmp0_$this_28.s5h(VOID, tmp3_fontSize_28, tmp2_fontWeight_28, VOID, VOID, tmp1_fontFamily_28, VOID, tmp5_letterSpacing_28, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_28);
  }
  var TypographyTokens_instance;
  function TypographyTokens_getInstance() {
    if (TypographyTokens_instance == null)
      new TypographyTokens();
    return TypographyTokens_instance;
  }
  var properties_initialized_TypographyTokens_kt_gw7fqt;
  function _init_properties_TypographyTokens_kt__by6b7t() {
    if (!properties_initialized_TypographyTokens_kt_gw7fqt) {
      properties_initialized_TypographyTokens_kt_gw7fqt = true;
      DefaultLineHeightStyle = LineHeightStyle_init_$Create$(Companion_getInstance_15().q5o_1, Companion_getInstance_16().o5o_1);
      DefaultTextStyle = Companion_getInstance_4().m5h_1.s5h(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, defaultPlatformTextStyle(), get_DefaultLineHeightStyle());
      androidx_compose_material3_tokens_TypographyTokens$stable = 0;
    }
  }
  var androidx_compose_material3_tokens_XLargeIconButtonTokens$stable;
  function XLargeIconButtonTokens() {
    XLargeIconButtonTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.kec_1 = _Dp___init__impl__ms3zkb(136.0);
    this.lec_1 = ShapeKeyTokens_CornerFull_getInstance();
    this.mec_1 = ShapeKeyTokens_CornerExtraLarge_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.nec_1 = _Dp___init__impl__ms3zkb(48.0);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.oec_1 = _Dp___init__impl__ms3zkb(48.0);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.pec_1 = _Dp___init__impl__ms3zkb(40.0);
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.qec_1 = _Dp___init__impl__ms3zkb(32.0);
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_4.rec_1 = _Dp___init__impl__ms3zkb(32.0);
    var tmp_5 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_5.sec_1 = _Dp___init__impl__ms3zkb(3.0);
    this.tec_1 = ShapeKeyTokens_CornerLarge_getInstance();
    this.uec_1 = ShapeKeyTokens_CornerExtraLarge_getInstance();
    this.vec_1 = ShapeKeyTokens_CornerFull_getInstance();
    var tmp_6 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_6.wec_1 = _Dp___init__impl__ms3zkb(72.0);
    var tmp_7 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_7.xec_1 = _Dp___init__impl__ms3zkb(72.0);
  }
  var XLargeIconButtonTokens_instance;
  function XLargeIconButtonTokens_getInstance() {
    if (XLargeIconButtonTokens_instance == null)
      new XLargeIconButtonTokens();
    return XLargeIconButtonTokens_instance;
  }
  var androidx_compose_material3_tokens_XSmallIconButtonTokens$stable;
  function XSmallIconButtonTokens() {
    XSmallIconButtonTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.uea_1 = _Dp___init__impl__ms3zkb(32.0);
    this.vea_1 = ShapeKeyTokens_CornerFull_getInstance();
    this.wea_1 = ShapeKeyTokens_CornerMedium_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.xea_1 = _Dp___init__impl__ms3zkb(6.0);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.yea_1 = _Dp___init__impl__ms3zkb(6.0);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.zea_1 = _Dp___init__impl__ms3zkb(20.0);
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.aeb_1 = _Dp___init__impl__ms3zkb(4.0);
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_4.beb_1 = _Dp___init__impl__ms3zkb(4.0);
    var tmp_5 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_5.ceb_1 = _Dp___init__impl__ms3zkb(1.0);
    this.deb_1 = ShapeKeyTokens_CornerSmall_getInstance();
    this.eeb_1 = ShapeKeyTokens_CornerMedium_getInstance();
    this.feb_1 = ShapeKeyTokens_CornerFull_getInstance();
    var tmp_6 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_6.geb_1 = _Dp___init__impl__ms3zkb(10.0);
    var tmp_7 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_7.heb_1 = _Dp___init__impl__ms3zkb(10.0);
  }
  var XSmallIconButtonTokens_instance;
  function XSmallIconButtonTokens_getInstance() {
    if (XSmallIconButtonTokens_instance == null)
      new XSmallIconButtonTokens();
    return XSmallIconButtonTokens_instance;
  }
  function set_nextHash(_set____db54di) {
    _init_properties_System_js_kt__dn51u2();
    nextHash = _set____db54di;
  }
  function get_nextHash() {
    _init_properties_System_js_kt__dn51u2();
    return nextHash;
  }
  var nextHash;
  function get_weakMap() {
    _init_properties_System_js_kt__dn51u2();
    return weakMap;
  }
  var weakMap;
  function identityHashCode(instance) {
    _init_properties_System_js_kt__dn51u2();
    if (instance == null) {
      return 0;
    }
    var tmp0_elvis_lhs = get_weakMap().get(instance);
    return tmp0_elvis_lhs == null ? memoizeIdentityHashCode(instance) : tmp0_elvis_lhs;
  }
  function memoizeIdentityHashCode(instance) {
    _init_properties_System_js_kt__dn51u2();
    var _unary__edvuaz = get_nextHash();
    set_nextHash(_unary__edvuaz + 1 | 0);
    var value = _unary__edvuaz;
    get_weakMap().set(instance, value);
    return value;
  }
  var properties_initialized_System_js_kt_4jrb3c;
  function _init_properties_System_js_kt__dn51u2() {
    if (!properties_initialized_System_js_kt_4jrb3c) {
      properties_initialized_System_js_kt_4jrb3c = true;
      nextHash = 1;
      weakMap = new WeakMap();
    }
  }
  var androidx_compose_material3_internal_InternalAtomicReference$stable;
  var androidx_compose_material3_internal_PlatformOptimizedCancellationException$stable;
  var androidx_compose_material3_WindowBoundsCalculator$stable;
  var androidx_compose_material3_ModalBottomSheetProperties$stable;
  var androidx_compose_material3_ModalBottomSheetDefaults$stable;
  var androidx_compose_material3_ModalWideNavigationRailProperties$stable;
  var androidx_compose_material3_internal_BackEventCompat$stable;
  var androidx_compose_material3_internal_BasicTooltipStrings$stable;
  function defaultPlatformTextStyle() {
    return null;
  }
  function get_systemBarsForVisualComponents(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 140679772, 'C(<get-systemBarsForVisualComponents>)24@942L10:SystemBarsDefaultInsets.skiko.kt#mqatfk');
    if (isTraceInProgress()) {
      traceEventStart(140679772, $changed, -1, 'androidx.compose.material3.internal.<get-systemBarsForVisualComponents> (SystemBarsDefaultInsets.skiko.kt:24)');
    }
    var tmp0 = get_systemBars(Companion_instance_0, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  var androidx_compose_material3_internal_PlatformDateFormat$stable;
  //region block: post-declaration
  protoOf(RippleNodeFactory).jay = rememberUpdatedInstance;
  protoOf(ChildSemanticsNode).w6l = get_shouldClearDescendantSemantics;
  protoOf(ChildSemanticsNode).x6l = get_shouldMergeDescendantSemantics;
  protoOf(ChildSemanticsNode).v6k = get_isImportantForBounds;
  //endregion
  //region block: init
  DefaultSingleRowTopAppBarOverride_instance = new DefaultSingleRowTopAppBarOverride();
  DefaultTwoRowsTopAppBarOverride_instance = new DefaultTwoRowsTopAppBarOverride();
  androidx_compose_material3_AppBarScopeImpl$stable = 8;
  androidx_compose_material3_ClickableAppBarItem$stable = 0;
  androidx_compose_material3_ToggleableAppBarItem$stable = 0;
  androidx_compose_material3_CustomAppBarItem$stable = 0;
  androidx_compose_material3_AppBarMenuState$stable = 8;
  androidx_compose_material3_OverflowMeasurePolicy$stable = 0;
  androidx_compose_material3_BottomSheetScaffoldState$stable = 0;
  androidx_compose_material3_ButtonDefaults$stable = 0;
  androidx_compose_material3_ButtonElevation$stable = 0;
  androidx_compose_material3_ButtonColors$stable = 0;
  androidx_compose_material3_ButtonShapes$stable = 0;
  androidx_compose_material3_ButtonGroupDefaults$stable = 0;
  androidx_compose_material3_ButtonGroupMenuState$stable = 8;
  androidx_compose_material3_ButtonGroupParentData$stable = 8;
  androidx_compose_material3_ButtonGroupElement$stable = 0;
  androidx_compose_material3_ButtonGroupNode$stable = 8;
  androidx_compose_material3_EnlargeOnPressElement$stable = 0;
  androidx_compose_material3_EnlargeOnPressNode$stable = 8;
  androidx_compose_material3_ClickableButtonGroupItem$stable = 8;
  androidx_compose_material3_ToggleableButtonGroupItem$stable = 8;
  androidx_compose_material3_CustomButtonGroupItem$stable = 0;
  androidx_compose_material3_CardDefaults$stable = 0;
  androidx_compose_material3_CardElevation$stable = 0;
  androidx_compose_material3_CardColors$stable = 0;
  androidx_compose_material3_DividerDefaults$stable = 0;
  androidx_compose_material3_DragHandleColors$stable = 0;
  androidx_compose_material3_DragHandleShapes$stable = 0;
  androidx_compose_material3_DragHandleSizes$stable = 0;
  androidx_compose_material3_VerticalDragHandleDefaults$stable = 0;
  androidx_compose_material3_IconButtonColors$stable = 0;
  androidx_compose_material3_IconToggleButtonColors$stable = 0;
  androidx_compose_material3_IconButtonShapes$stable = 0;
  androidx_compose_material3_IconToggleButtonShapes$stable = 0;
  androidx_compose_material3_IconButtonDefaults$stable = 0;
  androidx_compose_material3_LoadingIndicatorDefaults$stable = 8;
  androidx_compose_material3_MaterialShapes$stable = 0;
  MaterialTheme_instance = new MaterialTheme();
  Companion_instance_3 = new Companion_0();
  ScaffoldDefaults_instance = new ScaffoldDefaults();
  androidx_compose_material3_SnackbarHostState$stable = 0;
  androidx_compose_material3_SplitButtonDefaults$stable = 0;
  androidx_compose_material3_SplitButtonShapes$stable = 0;
  androidx_compose_material3_TabIndicatorModifier$stable = 0;
  androidx_compose_material3_TabIndicatorOffsetNode$stable = 8;
  androidx_compose_material3_TabPosition$stable = 0;
  androidx_compose_material3_TabRowDefaults$stable = 0;
  androidx_compose_material3_TextFieldDefaults$stable = 0;
  androidx_compose_material3_OutlinedTextFieldDefaults$stable = 0;
  androidx_compose_material3_TextFieldColors$stable = 0;
  androidx_compose_material3_TextFieldLabelPosition_Attached$stable = 0;
  androidx_compose_material3_TextFieldLabelPosition_Above$stable = 0;
  androidx_compose_material3_TextFieldLabelPosition$stable = 0;
  androidx_compose_material3_TimePickerDialogDefaults$stable = 0;
  androidx_compose_material3_ToggleButtonDefaults$stable = 0;
  androidx_compose_material3_ToggleButtonColors$stable = 0;
  androidx_compose_material3_ToggleButtonShapes$stable = 0;
  androidx_compose_material3_WideNavigationRailStateImpl$stable = 8;
  androidx_compose_material3_ModalWideNavigationRailState$stable = 8;
  androidx_compose_material3_RailPredictiveBackState$stable = 0;
  androidx_compose_material3_carousel_Arrangement$stable = 0;
  androidx_compose_material3_carousel_CarouselPageSize$stable = 0;
  androidx_compose_material3_carousel_CarouselDefaults$stable = 0;
  androidx_compose_material3_carousel_CarouselItemScopeImpl$stable = 8;
  androidx_compose_material3_carousel_CarouselState$stable = 8;
  androidx_compose_material3_carousel_CarouselPagerState$stable = 0;
  androidx_compose_material3_carousel_CarouselItemDrawInfoImpl$stable = 0;
  androidx_compose_material3_carousel_Keyline$stable = 0;
  androidx_compose_material3_carousel_KeylineList$stable = 8;
  androidx_compose_material3_carousel_Strategy$stable = 8;
  androidx_compose_material3_internal_DraggableAnchorsConfig$stable = 8;
  androidx_compose_material3_internal_AnchoredDraggableState$stable = 0;
  androidx_compose_material3_internal_AnchoredDraggableDefaults$stable = 0;
  androidx_compose_material3_internal_AnchoredDragFinishedSignal$stable = 8;
  androidx_compose_material3_internal_AnimatedShapeState$stable = 0;
  androidx_compose_material3_internal_BackEventProgress_NotRunning$stable = 0;
  androidx_compose_material3_internal_BackEventProgress_InProgress$stable = 0;
  androidx_compose_material3_internal_BackEventProgress_Completed$stable = 0;
  androidx_compose_material3_internal_BasicTooltipDefaults$stable = 0;
  androidx_compose_material3_internal_CalendarModel$stable = 8;
  androidx_compose_material3_internal_CalendarDate$stable = 0;
  androidx_compose_material3_internal_CalendarMonth$stable = 0;
  androidx_compose_material3_internal_DateInputFormat$stable = 0;
  androidx_compose_material3_internal_ChildSemanticsNodeElement$stable = 0;
  androidx_compose_material3_internal_ParentSemanticsNodeElement$stable = 0;
  androidx_compose_material3_internal_ChildSemanticsNode$stable = 8;
  androidx_compose_material3_internal_ParentSemanticsNode$stable = 8;
  androidx_compose_material3_internal_ParentSemanticsNodeKey$stable = 0;
  ParentSemanticsNodeKey_instance = new ParentSemanticsNodeKey();
  androidx_compose_material3_internal_Icons_AutoMirrored_Filled$stable = 8;
  androidx_compose_material3_internal_Icons_AutoMirrored$stable = 0;
  androidx_compose_material3_internal_Icons_Filled$stable = 8;
  androidx_compose_material3_internal_Icons_Outlined$stable = 8;
  androidx_compose_material3_internal_Icons$stable = 0;
  androidx_compose_material3_internal_InternalMutatorMutex$stable = 0;
  androidx_compose_material3_internal_MappedInteractionSource$stable = 0;
  androidx_compose_material3_internal_MenuPosition$stable = 0;
  androidx_compose_material3_internal_AnchorAlignmentOffsetPosition_Horizontal$stable = 0;
  androidx_compose_material3_internal_AnchorAlignmentOffsetPosition_Vertical$stable = 0;
  androidx_compose_material3_internal_AnchorAlignmentOffsetPosition$stable = 0;
  androidx_compose_material3_internal_WindowAlignmentMarginPosition_Horizontal$stable = 0;
  androidx_compose_material3_internal_WindowAlignmentMarginPosition_Vertical$stable = 0;
  androidx_compose_material3_internal_WindowAlignmentMarginPosition$stable = 0;
  androidx_compose_material3_internal_DropdownMenuPositionProvider$stable = 0;
  androidx_compose_material3_internal_MutableWindowInsets$stable = 0;
  androidx_compose_material3_tokens_AppBarLargeFlexibleTokens$stable = 0;
  androidx_compose_material3_tokens_AppBarLargeTokens$stable = 0;
  androidx_compose_material3_tokens_AppBarMediumFlexibleTokens$stable = 0;
  androidx_compose_material3_tokens_AppBarMediumTokens$stable = 0;
  androidx_compose_material3_tokens_AppBarSmallTokens$stable = 0;
  androidx_compose_material3_tokens_AppBarTokens$stable = 0;
  androidx_compose_material3_tokens_AssistChipTokens$stable = 0;
  androidx_compose_material3_tokens_BadgeTokens$stable = 0;
  androidx_compose_material3_tokens_BaselineButtonTokens$stable = 0;
  androidx_compose_material3_tokens_BottomAppBarTokens$stable = 0;
  androidx_compose_material3_tokens_ButtonGroupSmallTokens$stable = 0;
  androidx_compose_material3_tokens_ButtonLargeTokens$stable = 0;
  androidx_compose_material3_tokens_ButtonMediumTokens$stable = 0;
  androidx_compose_material3_tokens_ButtonSmallTokens$stable = 0;
  androidx_compose_material3_tokens_ButtonXLargeTokens$stable = 0;
  androidx_compose_material3_tokens_ButtonXSmallTokens$stable = 0;
  androidx_compose_material3_tokens_CheckboxTokens$stable = 0;
  androidx_compose_material3_tokens_CircularProgressIndicatorTokens$stable = 0;
  androidx_compose_material3_tokens_ColorDarkTokens$stable = 0;
  androidx_compose_material3_tokens_ColorLightTokens$stable = 0;
  androidx_compose_material3_tokens_ConnectedButtonGroupSmallTokens$stable = 0;
  androidx_compose_material3_tokens_DateInputModalTokens$stable = 0;
  androidx_compose_material3_tokens_DatePickerModalTokens$stable = 0;
  androidx_compose_material3_tokens_DialogTokens$stable = 0;
  androidx_compose_material3_tokens_DividerTokens$stable = 0;
  androidx_compose_material3_tokens_DockedToolbarTokens$stable = 0;
  androidx_compose_material3_tokens_DragHandleTokens$stable = 0;
  androidx_compose_material3_tokens_ElevatedButtonTokens$stable = 0;
  androidx_compose_material3_tokens_ElevatedCardTokens$stable = 0;
  androidx_compose_material3_tokens_ElevationTokens$stable = 0;
  androidx_compose_material3_tokens_ExpandedListTokens$stable = 0;
  androidx_compose_material3_tokens_ExpressiveMotionTokens$stable = 0;
  androidx_compose_material3_tokens_ExtendedFabLargeTokens$stable = 0;
  androidx_compose_material3_tokens_ExtendedFabMediumTokens$stable = 0;
  androidx_compose_material3_tokens_ExtendedFabPrimaryTokens$stable = 0;
  androidx_compose_material3_tokens_ExtendedFabSmallTokens$stable = 0;
  androidx_compose_material3_tokens_FabBaselineTokens$stable = 0;
  androidx_compose_material3_tokens_FabLargeTokens$stable = 0;
  androidx_compose_material3_tokens_FabMediumTokens$stable = 0;
  androidx_compose_material3_tokens_FabMenuBaselineTokens$stable = 0;
  androidx_compose_material3_tokens_FabPrimaryContainerTokens$stable = 0;
  androidx_compose_material3_tokens_FabSecondaryContainerTokens$stable = 0;
  androidx_compose_material3_tokens_FabSmallTokens$stable = 0;
  androidx_compose_material3_tokens_FilledAutocompleteTokens$stable = 0;
  androidx_compose_material3_tokens_FilledButtonTokens$stable = 0;
  androidx_compose_material3_tokens_FilledCardTokens$stable = 0;
  androidx_compose_material3_tokens_FilledIconButtonTokens$stable = 0;
  androidx_compose_material3_tokens_FilledTextFieldTokens$stable = 0;
  androidx_compose_material3_tokens_FilledTonalButtonTokens$stable = 0;
  androidx_compose_material3_tokens_FilledTonalIconButtonTokens$stable = 0;
  androidx_compose_material3_tokens_FilterChipTokens$stable = 0;
  androidx_compose_material3_tokens_FloatingToolbarTokens$stable = 0;
  androidx_compose_material3_tokens_StandardIconButtonTokens$stable = 0;
  androidx_compose_material3_tokens_InputChipTokens$stable = 0;
  androidx_compose_material3_tokens_LargeIconButtonTokens$stable = 0;
  androidx_compose_material3_tokens_LinearProgressIndicatorTokens$stable = 0;
  androidx_compose_material3_tokens_ListTokens$stable = 0;
  androidx_compose_material3_tokens_LoadingIndicatorTokens$stable = 0;
  androidx_compose_material3_tokens_MediumIconButtonTokens$stable = 0;
  androidx_compose_material3_tokens_MenuTokens$stable = 0;
  androidx_compose_material3_tokens_MotionTokens$stable = 0;
  androidx_compose_material3_tokens_NavigationBarHorizontalItemTokens$stable = 0;
  androidx_compose_material3_tokens_NavigationBarTokens$stable = 0;
  androidx_compose_material3_tokens_NavigationBarVerticalItemTokens$stable = 0;
  androidx_compose_material3_tokens_NavigationDrawerTokens$stable = 0;
  androidx_compose_material3_tokens_NavigationRailBaselineItemTokens$stable = 0;
  androidx_compose_material3_tokens_NavigationRailCollapsedTokens$stable = 0;
  androidx_compose_material3_tokens_NavigationRailColorTokens$stable = 0;
  androidx_compose_material3_tokens_NavigationRailExpandedTokens$stable = 0;
  androidx_compose_material3_tokens_NavigationRailHorizontalItemTokens$stable = 0;
  androidx_compose_material3_tokens_NavigationRailVerticalItemTokens$stable = 0;
  androidx_compose_material3_tokens_OutlinedAutocompleteTokens$stable = 0;
  androidx_compose_material3_tokens_OutlinedButtonTokens$stable = 0;
  androidx_compose_material3_tokens_OutlinedCardTokens$stable = 0;
  androidx_compose_material3_tokens_OutlinedIconButtonTokens$stable = 0;
  androidx_compose_material3_tokens_OutlinedSegmentedButtonTokens$stable = 0;
  androidx_compose_material3_tokens_OutlinedTextFieldTokens$stable = 0;
  androidx_compose_material3_tokens_PaletteTokens$stable = 0;
  androidx_compose_material3_tokens_PlainTooltipTokens$stable = 0;
  androidx_compose_material3_tokens_PrimaryNavigationTabTokens$stable = 0;
  androidx_compose_material3_tokens_ProgressIndicatorTokens$stable = 0;
  androidx_compose_material3_tokens_RadioButtonTokens$stable = 0;
  androidx_compose_material3_tokens_ReorderListTokens$stable = 0;
  androidx_compose_material3_tokens_RevealListTokens$stable = 0;
  androidx_compose_material3_tokens_RichTooltipTokens$stable = 0;
  androidx_compose_material3_tokens_ScrimTokens$stable = 0;
  androidx_compose_material3_tokens_SearchBarTokens$stable = 0;
  androidx_compose_material3_tokens_SearchViewTokens$stable = 0;
  androidx_compose_material3_tokens_SecondaryNavigationTabTokens$stable = 0;
  androidx_compose_material3_tokens_ShapeTokens$stable = 0;
  androidx_compose_material3_tokens_SheetBottomTokens$stable = 0;
  androidx_compose_material3_tokens_SliderTokens$stable = 0;
  androidx_compose_material3_tokens_SmallIconButtonTokens$stable = 0;
  androidx_compose_material3_tokens_SnackbarTokens$stable = 0;
  androidx_compose_material3_tokens_SplitButtonLargeTokens$stable = 0;
  androidx_compose_material3_tokens_SplitButtonMediumTokens$stable = 0;
  androidx_compose_material3_tokens_SplitButtonSmallTokens$stable = 0;
  androidx_compose_material3_tokens_SplitButtonXLargeTokens$stable = 0;
  androidx_compose_material3_tokens_SplitButtonXSmallTokens$stable = 0;
  androidx_compose_material3_tokens_StandardMotionTokens$stable = 0;
  StandardMotionTokens_instance = new StandardMotionTokens();
  androidx_compose_material3_tokens_StateTokens$stable = 0;
  androidx_compose_material3_tokens_SuggestionChipTokens$stable = 0;
  androidx_compose_material3_tokens_SwitchTokens$stable = 0;
  androidx_compose_material3_tokens_TextButtonTokens$stable = 0;
  androidx_compose_material3_tokens_TimeInputTokens$stable = 0;
  androidx_compose_material3_tokens_TimePickerTokens$stable = 0;
  androidx_compose_material3_tokens_TonalButtonTokens$stable = 0;
  androidx_compose_material3_tokens_TypeScaleTokens$stable = 0;
  androidx_compose_material3_tokens_TypefaceTokens$stable = 0;
  androidx_compose_material3_tokens_XLargeIconButtonTokens$stable = 0;
  androidx_compose_material3_tokens_XSmallIconButtonTokens$stable = 0;
  androidx_compose_material3_internal_InternalAtomicReference$stable = 8;
  androidx_compose_material3_internal_PlatformOptimizedCancellationException$stable = 8;
  androidx_compose_material3_WindowBoundsCalculator$stable = 0;
  androidx_compose_material3_ModalBottomSheetProperties$stable = 0;
  androidx_compose_material3_ModalBottomSheetDefaults$stable = 0;
  androidx_compose_material3_ModalWideNavigationRailProperties$stable = 0;
  androidx_compose_material3_internal_BackEventCompat$stable = 0;
  androidx_compose_material3_internal_BasicTooltipStrings$stable = 0;
  androidx_compose_material3_internal_PlatformDateFormat$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = IconButton;
  _.$_$.b = Icon;
  _.$_$.c = MaterialTheme_0;
  _.$_$.d = Scaffold;
  _.$_$.e = Text;
  _.$_$.f = TopAppBar;
  _.$_$.g = androidx_compose_material3_IconButtonDefaults$stableprop_getter;
  _.$_$.h = androidx_compose_material3_MaterialTheme$stableprop_getter;
  _.$_$.i = androidx_compose_material3_TopAppBarDefaults$stableprop_getter;
  _.$_$.j = lightColorScheme;
  _.$_$.k = IconButtonDefaults_getInstance;
  _.$_$.l = MaterialTheme_instance;
  _.$_$.m = TopAppBarDefaults_getInstance;
  _.$_$.n = _FabPosition___init__impl__9ib2hj;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-material3-material3.js.map
