(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-collection-collection.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui-util.js', './androidx-compose-runtime-runtime-saveable.js', './kotlinx-coroutines-core.js', './androidx-compose-runtime-runtime.js', './kotlinx-atomicfu.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'), require('./androidx-compose-runtime-runtime-saveable.js'), require('./kotlinx-coroutines-core.js'), require('./androidx-compose-runtime-runtime.js'), require('./kotlinx-atomicfu.js'), require('./skiko-kjs.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'androidx-compose-runtime-runtime-saveable' was not found. Please, check whether 'androidx-compose-runtime-runtime-saveable' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-text'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-text'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-ui-ui-util'], globalThis['androidx-compose-runtime-runtime-saveable'], globalThis['kotlinx-coroutines-core'], globalThis['androidx-compose-runtime-runtime'], globalThis['kotlinx-atomicfu'], globalThis['skiko-kjs']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_collection_collection, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_util, kotlin_androidx_compose_runtime_runtime_saveable, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.fa;
  var objectCreate = kotlin_kotlin.$_$.ea;
  var emptyList = kotlin_kotlin.$_$.u4;
  var Unit_instance = kotlin_kotlin.$_$.n;
  var VOID = kotlin_kotlin.$_$.c;
  var toString = kotlin_kotlin.$_$.me;
  var hashCode = kotlin_kotlin.$_$.m9;
  var getStringHashCode = kotlin_kotlin.$_$.l9;
  var equals = kotlin_kotlin.$_$.f9;
  var initMetadataForClass = kotlin_kotlin.$_$.n9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.o9;
  var FunctionAdapter = kotlin_kotlin.$_$.t8;
  var isInterface = kotlin_kotlin.$_$.w9;
  var Comparator = kotlin_kotlin.$_$.zc;
  var compareValues = kotlin_kotlin.$_$.b7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u;
  var ensureNotNull = kotlin_kotlin.$_$.ud;
  var THROW_CCE = kotlin_kotlin.$_$.ld;
  var sortedWith = kotlin_kotlin.$_$.s6;
  var first = kotlin_kotlin.$_$.d5;
  var mutableIntListOf = kotlin_androidx_collection_collection.$_$.y;
  var charCodeAt = kotlin_kotlin.$_$.y8;
  var substring = kotlin_kotlin.$_$.jc;
  var CharSequence = kotlin_kotlin.$_$.vc;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var coerceIn = kotlin_kotlin.$_$.wa;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.s;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var coerceAtLeast = kotlin_kotlin.$_$.qa;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var get_lastIndex = kotlin_kotlin.$_$.r5;
  var addAll = kotlin_kotlin.$_$.x3;
  var plus = kotlin_kotlin.$_$.h6;
  var last = kotlin_kotlin.$_$.w5;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j2;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d2;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r;
  var BlendMode = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b1;
  var toRawBits = kotlin_kotlin.$_$.ke;
  var fromInt = kotlin_kotlin.$_$.i8;
  var shiftLeft = kotlin_kotlin.$_$.o8;
  var Long = kotlin_kotlin.$_$.gd;
  var bitwiseAnd = kotlin_kotlin.$_$.a8;
  var bitwiseOr = kotlin_kotlin.$_$.b8;
  var _Offset___init__impl__c168vi = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t;
  var toString_0 = kotlin_kotlin.$_$.ha;
  var getNumberHashCode = kotlin_kotlin.$_$.j9;
  var fastJoinToString = kotlin_org_jetbrains_compose_ui_ui_util.$_$.b;
  var compareTo = kotlin_kotlin.$_$.b9;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.q;
  var lazy = kotlin_kotlin.$_$.yd;
  var KProperty1 = kotlin_kotlin.$_$.gb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.k9;
  var numberToInt = kotlin_kotlin.$_$.da;
  var initMetadataForInterface = kotlin_kotlin.$_$.r9;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o3;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var TextUnit__hashCode_impl_qsmeov = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.l1;
  var TextUnit__toString_impl_51ghw0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m3;
  var _TextUnit___get_rawType__impl__tu8yq5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l3;
  var equalsLong = kotlin_kotlin.$_$.h8;
  var Enum = kotlin_kotlin.$_$.ad;
  var Saver = kotlin_androidx_compose_runtime_runtime_saveable.$_$.e;
  var arrayListOf = kotlin_kotlin.$_$.z3;
  var KtList = kotlin_kotlin.$_$.o3;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ae;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p2;
  var Shadow = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.a3;
  var toArgb = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x1;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o;
  var _TextUnit___get_type__impl__uc2olt = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n3;
  var TextUnitType = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u1;
  var TextUnit_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var _Offset___get_packedValue__impl__xh2k8q = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.z;
  var shiftRight = kotlin_kotlin.$_$.q8;
  var convertToInt = kotlin_kotlin.$_$.e8;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.g;
  var floatFromBits = kotlin_kotlin.$_$.g9;
  var Saver_0 = kotlin_androidx_compose_runtime_runtime_saveable.$_$.d;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i3;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k3;
  var isNaN_0 = kotlin_kotlin.$_$.wd;
  var Fill_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e2;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i1;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var IntSize__hashCode_impl_gm9mta = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d3;
  var IntSize__toString_impl_54w9zl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f3;
  var getBooleanHashCode = kotlin_kotlin.$_$.h9;
  var Constraints__hashCode_impl_ij7484 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var Constraints__toString_impl_37yskr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var LruCache = kotlin_androidx_collection_collection.$_$.c;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var Exception = kotlin_kotlin.$_$.cd;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.x1;
  var CoroutineImpl = kotlin_kotlin.$_$.s7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.d7;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.p9;
  var mutableScatterMapOf = kotlin_androidx_collection_collection.$_$.h1;
  var KMutableProperty1 = kotlin_kotlin.$_$.eb;
  var initMetadataForLambda = kotlin_kotlin.$_$.s9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var get_indices = kotlin_kotlin.$_$.l5;
  var yield_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var CancellationException = kotlin_kotlin.$_$.c7;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.l1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.h7;
  var Element = kotlin_kotlin.$_$.q7;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.e;
  var Key_instance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y1;
  var to = kotlin_kotlin.$_$.ne;
  var mutableListOf = kotlin_kotlin.$_$.f6;
  var Companion_instance = kotlin_kotlin.$_$.m;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.u2;
  var createFailure = kotlin_kotlin.$_$.td;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.x2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.w2;
  var listOf = kotlin_kotlin.$_$.a6;
  var Comparable = kotlin_kotlin.$_$.yc;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.s1;
  var Collection = kotlin_kotlin.$_$.n3;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var initMetadataForObject = kotlin_kotlin.$_$.t9;
  var ShaderBrush = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d1;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g1;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d3;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x3;
  var toList = kotlin_kotlin.$_$.x6;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var CharDirection_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a;
  var subtract = kotlin_kotlin.$_$.r8;
  var compare = kotlin_kotlin.$_$.d8;
  var currentNanoTime = kotlin_org_jetbrains_skiko_skiko.$_$.a6;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.x;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.b1;
  var charSequenceGet = kotlin_kotlin.$_$.z8;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.l;
  var isLowSurrogate = kotlin_kotlin.$_$.zb;
  var isHighSurrogate = kotlin_kotlin.$_$.xb;
  var charSequenceLength = kotlin_kotlin.$_$.a9;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.s2;
  var sequence = kotlin_kotlin.$_$.mb;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.p2;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.r2;
  var SequenceScope = kotlin_kotlin.$_$.hb;
  var numberRangeToNumber = kotlin_kotlin.$_$.aa;
  var lazy_0 = kotlin_kotlin.$_$.zd;
  var getKClassFromExpression = kotlin_kotlin.$_$.bb;
  var FontRastrSettings = kotlin_org_jetbrains_skiko_skiko.$_$.e5;
  var FontEdging_ALIAS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k3;
  var FontEdging_ANTI_ALIAS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l3;
  var FontEdging_SUBPIXEL_ANTI_ALIAS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m3;
  var FontHinting_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o3;
  var FontHinting_SLIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q3;
  var FontHinting_NORMAL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p3;
  var FontHinting_FULL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n3;
  var asList = kotlin_kotlin.$_$.a4;
  var binarySearch = kotlin_kotlin.$_$.c4;
  var get_lastIndex_0 = kotlin_kotlin.$_$.s5;
  var coerceAtMost = kotlin_kotlin.$_$.ta;
  var RectHeightMode_STRUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q1;
  var RectWidthMode_TIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r1;
  var firstOrNull = kotlin_kotlin.$_$.c5;
  var _Size___init__impl__aywn0g = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var lastOrNull = kotlin_kotlin.$_$.v5;
  var toComposeRect = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z1;
  var RectHeightMode_MAX_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p1;
  var asSkiaPath = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m1;
  var getOrNull = kotlin_kotlin.$_$.g5;
  var isWhitespace = kotlin_kotlin.$_$.ac;
  var get_nativeCanvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v1;
  var LineMetrics = kotlin_org_jetbrains_skiko_skiko.$_$.f5;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.l2;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.n4;
  var PaintMode_FILL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v3;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.w4;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.h;
  var copyToArray = kotlin_kotlin.$_$.s4;
  var Size__toString_impl_o87ni8 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var BlendMode__toString_impl_uuibkd = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b3;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var BlendMode__hashCode_impl_93ceri = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a3;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.j;
  var DecorationLineStyle_SOLID_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d1;
  var DecorationStyle = kotlin_org_jetbrains_skiko_skiko.$_$.d5;
  var Shadow_0 = kotlin_org_jetbrains_skiko_skiko.$_$.j5;
  var _TextUnit___get_isSp__impl__8c3r6q = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j3;
  var _TextUnit___get_isEm__impl__esrmtl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i3;
  var DecorationLineStyle_WAVY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e1;
  var DecorationLineStyle_DASHED_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a1;
  var DecorationLineStyle_DOTTED_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b1;
  var DecorationLineStyle_DOUBLE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c1;
  var KProperty0 = kotlin_kotlin.$_$.fb;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.w7;
  var sortWith = kotlin_kotlin.$_$.q6;
  var asReversed = kotlin_kotlin.$_$.b4;
  var ParagraphStyle = kotlin_org_jetbrains_skiko_skiko.$_$.h5;
  var HeightMode_DISABLE_ALL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i1;
  var TextIndent = kotlin_org_jetbrains_skiko_skiko.$_$.k5;
  var Font_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.t4;
  var ParagraphBuilder = kotlin_org_jetbrains_skiko_skiko.$_$.g5;
  var BaselineMode_ALPHABETIC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z;
  var PlaceholderStyle = kotlin_org_jetbrains_skiko_skiko.$_$.i5;
  var checkArithmetic = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var pack = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e1;
  var PlaceholderAlignment_MIDDLE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n1;
  var PlaceholderAlignment_BOTTOM_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m1;
  var PlaceholderAlignment_TOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o1;
  var PlaceholderAlignment_ABOVE_BASELINE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l1;
  var Alignment_START_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y;
  var Alignment_END_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u;
  var Alignment_JUSTIFY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v;
  var Alignment_CENTER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t;
  var Alignment_RIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x;
  var Alignment_LEFT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w;
  var HeightMode_ALL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h1;
  var HeightMode_DISABLE_LAST_DESCENT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k1;
  var HeightMode_DISABLE_FIRST_ASCENT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j1;
  var Direction_LTR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f1;
  var Direction_RTL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g1;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var listOf_0 = kotlin_kotlin.$_$.z5;
  var FontCollection_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.m4;
  var TypefaceFontProviderWithFallback_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.o4;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  var FontMgrWithFallback = kotlin_org_jetbrains_skiko_skiko.$_$.p5;
  var first_0 = kotlin_kotlin.$_$.f5;
  var FontVariation_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.v4;
  var mapOf = kotlin_kotlin.$_$.c6;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g2;
  var firstOrNull_0 = kotlin_kotlin.$_$.b5;
  var Paint = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i;
  var derivedStateOf = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var coerceIn_0 = kotlin_kotlin.$_$.va;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m2;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c;
  var setOf = kotlin_kotlin.$_$.p6;
  var get_hostOs = kotlin_org_jetbrains_skiko_skiko.$_$.c6;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.i;
  var Companion_getInstance_12 = kotlin_org_jetbrains_skiko_skiko.$_$.g;
  var FontSlant_UPRIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s3;
  var FontSlant_ITALIC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r3;
  var FontStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.u4;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Range, 'Range');
  initMetadataForCompanion(Companion);
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(AnnotatedString, 'AnnotatedString', VOID, VOID, [CharSequence]);
  initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(LinkAnnotation, 'LinkAnnotation');
  initMetadataForClass(Url, 'Url', VOID, LinkAnnotation);
  initMetadataForClass(Clickable, 'Clickable', VOID, LinkAnnotation);
  initMetadataForClass(MultiParagraph, 'MultiParagraph');
  initMetadataForClass(ParagraphInfo, 'ParagraphInfo');
  function get_hasStaleResolvedFonts() {
    return false;
  }
  initMetadataForInterface(ParagraphIntrinsics, 'ParagraphIntrinsics');
  initMetadataForClass(MultiParagraphIntrinsics, 'MultiParagraphIntrinsics', VOID, VOID, [ParagraphIntrinsics]);
  initMetadataForClass(ParagraphIntrinsicInfo, 'ParagraphIntrinsicInfo');
  initMetadataForClass(ParagraphStyle_0, 'ParagraphStyle');
  initMetadataForClass(Placeholder, 'Placeholder');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(AnnotationType, 'AnnotationType', VOID, Enum);
  initMetadataForInterface(NonNullValueClassSaver, 'NonNullValueClassSaver', VOID, VOID, [Saver]);
  initMetadataForClass(NonNullValueClassSaver$1, VOID, VOID, VOID, [NonNullValueClassSaver]);
  initMetadataForClass(SpanStyle, 'SpanStyle');
  initMetadataForClass(StringAnnotation, 'StringAnnotation');
  initMetadataForClass(TextLayoutResult, 'TextLayoutResult');
  initMetadataForClass(TextLayoutInput, 'TextLayoutInput');
  initMetadataForClass(TextLinkStyles, 'TextLinkStyles', TextLinkStyles);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(TextRange, 'TextRange');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(TextStyle, 'TextStyle');
  initMetadataForClass(TtsAnnotation, 'TtsAnnotation');
  initMetadataForClass(VerbatimTtsAnnotation, 'VerbatimTtsAnnotation', VOID, TtsAnnotation);
  initMetadataForClass(UrlAnnotation, 'UrlAnnotation');
  function get_loadingStrategy() {
    return Companion_getInstance_20().v5i_1;
  }
  initMetadataForInterface(Font, 'Font');
  initMetadataForClass(FontFamily, 'FontFamily');
  initMetadataForClass(SystemFontFamily, 'SystemFontFamily', VOID, FontFamily);
  initMetadataForClass(GenericFontFamily, 'GenericFontFamily', VOID, SystemFontFamily);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(DefaultFontFamily, 'DefaultFontFamily', VOID, SystemFontFamily);
  initMetadataForClass(FileBasedFontFamily, 'FileBasedFontFamily', VOID, FontFamily);
  initMetadataForClass(FontListFontFamily, 'FontListFontFamily', VOID, FileBasedFontFamily, [KtList]);
  initMetadataForClass(LoadedFontFamily, 'LoadedFontFamily', VOID, FontFamily);
  initMetadataForClass(TypefaceRequestCache, 'TypefaceRequestCache', TypefaceRequestCache);
  initMetadataForClass(TypefaceRequest, 'TypefaceRequest');
  initMetadataForClass(Immutable, 'Immutable');
  initMetadataForClass(Async, 'Async');
  initMetadataForClass(FontFamilyResolverImpl, 'FontFamilyResolverImpl', VOID, VOID, VOID, [1]);
  function interceptFontFamily(fontFamily) {
    return fontFamily;
  }
  function interceptFontWeight(fontWeight) {
    return fontWeight;
  }
  function interceptFontStyle(fontStyle) {
    return fontStyle;
  }
  function interceptFontSynthesis(fontSynthesis) {
    return fontSynthesis;
  }
  initMetadataForInterface(PlatformResolveInterceptor, 'PlatformResolveInterceptor');
  initMetadataForClass(PlatformResolveInterceptor$Companion$Default$1, VOID, VOID, VOID, [PlatformResolveInterceptor]);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(AsyncTypefaceResult, 'AsyncTypefaceResult');
  initMetadataForClass(Key, 'Key');
  initMetadataForCoroutine($runCachedCOROUTINE$, CoroutineImpl);
  initMetadataForClass(AsyncTypefaceCache, 'AsyncTypefaceCache', AsyncTypefaceCache, VOID, VOID, [4]);
  initMetadataForLambda(AsyncFontListLoader$load$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AsyncFontListLoader$loadWithTimeoutOrNull$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($loadCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($loadWithTimeoutOrNullCOROUTINE$, CoroutineImpl);
  initMetadataForClass(AsyncFontListLoader, 'AsyncFontListLoader', VOID, VOID, VOID, [0, 1]);
  initMetadataForClass(FontListFontFamilyTypefaceAdapter$Companion$DropExceptionHandler$$inlined$CoroutineExceptionHandler$1, VOID, VOID, AbstractCoroutineContextElement, [Element]);
  initMetadataForCompanion(Companion_5);
  initMetadataForLambda(FontListFontFamilyTypefaceAdapter$resolve$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(FontListFontFamilyTypefaceAdapter, 'FontListFontFamilyTypefaceAdapter', FontListFontFamilyTypefaceAdapter, VOID, VOID, [2]);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(FontMatcher, 'FontMatcher', FontMatcher);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(FontStyle, 'FontStyle');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(FontSynthesis, 'FontSynthesis');
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(FontWeight, 'FontWeight', VOID, VOID, [Comparable]);
  initMetadataForClass(TextInputService, 'TextInputService');
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(Locale, 'Locale');
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(LocaleList, 'LocaleList', VOID, VOID, [Collection]);
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(BaselineShift, 'BaselineShift');
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(Hyphens, 'Hyphens');
  initMetadataForCompanion(Companion_14);
  initMetadataForCompanion(Companion_15);
  initMetadataForCompanion(Companion_16);
  initMetadataForCompanion(Companion_17);
  initMetadataForClass(Trim, 'Trim');
  initMetadataForClass(Alignment, 'Alignment');
  initMetadataForClass(Mode, 'Mode');
  initMetadataForClass(LineHeightStyle, 'LineHeightStyle');
  initMetadataForClass(ResolvedTextDirection, 'ResolvedTextDirection', VOID, Enum);
  initMetadataForCompanion(Companion_18);
  initMetadataForClass(TextAlign, 'TextAlign');
  initMetadataForCompanion(Companion_19);
  initMetadataForClass(TextDecoration, 'TextDecoration');
  initMetadataForCompanion(Companion_20);
  initMetadataForClass(TextDirection, 'TextDirection');
  function merge(other) {
    var tmp;
    var tmp_0;
    if (other instanceof BrushStyle) {
      tmp_0 = this instanceof BrushStyle;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = new BrushStyle(other.b5p_1, takeOrElse_0(other.c5p_1, TextForegroundStyle$merge$lambda(this)));
    } else {
      var tmp_1;
      if (other instanceof BrushStyle) {
        tmp_1 = !(this instanceof BrushStyle);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp = other;
      } else {
        var tmp_2;
        if (!(other instanceof BrushStyle)) {
          tmp_2 = this instanceof BrushStyle;
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          tmp = this;
        } else {
          tmp = other.z5e(TextForegroundStyle$merge$lambda_0(this));
        }
      }
    }
    return tmp;
  }
  function takeOrElse(other) {
    return !equals(this, Unspecified_instance) ? this : other();
  }
  initMetadataForInterface(TextForegroundStyle, 'TextForegroundStyle');
  initMetadataForObject(Unspecified, 'Unspecified', VOID, VOID, [TextForegroundStyle]);
  initMetadataForCompanion(Companion_21);
  initMetadataForClass(BrushStyle, 'BrushStyle', VOID, VOID, [TextForegroundStyle]);
  initMetadataForClass(ColorStyle, 'ColorStyle', VOID, VOID, [TextForegroundStyle]);
  initMetadataForCompanion(Companion_22);
  initMetadataForClass(TextGeometricTransform, 'TextGeometricTransform', TextGeometricTransform);
  initMetadataForCompanion(Companion_23);
  initMetadataForClass(TextIndent_0, 'TextIndent', TextIndent_0);
  initMetadataForCompanion(Companion_24);
  initMetadataForClass(TextOverflow, 'TextOverflow');
  initMetadataForClass(AtomicReference, 'AtomicReference');
  initMetadataForClass(ExpireAfterAccessCache, 'ExpireAfterAccessCache');
  initMetadataForCompanion(Companion_25);
  initMetadataForLambda(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(_get_codePoints_$slambda_43x8dt, CoroutineImpl, VOID, [1]);
  initMetadataForCompanion(Companion_26);
  initMetadataForClass(FontRasterizationSettings, 'FontRasterizationSettings');
  initMetadataForClass(FontSmoothing, 'FontSmoothing', VOID, Enum);
  initMetadataForClass(FontHinting, 'FontHinting', VOID, Enum);
  function paint$default(canvas, color, shadow, textDecoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance().y4h_1 : color;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().y4m_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.i5a(canvas, color, shadow, textDecoration, drawStyle, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.i5a.call(this, canvas, new Color(color), shadow, textDecoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  }
  function paint$default_0(canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode, $super) {
    alpha = alpha === VOID ? NaN : alpha;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().y4m_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.k5a(canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.k5a.call(this, canvas, brush, alpha, shadow, textDecoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  }
  initMetadataForInterface(Paragraph_1, 'Paragraph');
  initMetadataForClass(SkiaParagraph, 'SkiaParagraph', VOID, VOID, [Paragraph_1]);
  initMetadataForCompanion(Companion_27);
  initMetadataForClass(TextDecorationLineStyle, 'TextDecorationLineStyle');
  initMetadataForClass(PlatformTextStyle, 'PlatformTextStyle');
  initMetadataForCompanion(Companion_28);
  initMetadataForClass(PlatformParagraphStyle, 'PlatformParagraphStyle');
  initMetadataForClass(PlatformFontFamilyTypefaceAdapter, 'PlatformFontFamilyTypefaceAdapter', PlatformFontFamilyTypefaceAdapter);
  initMetadataForClass(SkiaFontLoader, 'SkiaFontLoader', SkiaFontLoader_init_$Create$, VOID, VOID, [1]);
  initMetadataForClass(ComputedStyle, 'ComputedStyle', ComputedStyle);
  initMetadataForClass(Op, 'Op');
  initMetadataForClass(StyleAdd, 'StyleAdd', VOID, Op);
  initMetadataForClass(PutPlaceholder, 'PutPlaceholder', VOID, Op);
  initMetadataForClass(EndPlaceholder, 'EndPlaceholder', VOID, Op);
  initMetadataForClass(Cut, 'Cut');
  initMetadataForClass(StyleAdd_0, 'StyleAdd', VOID, Cut);
  initMetadataForClass(StyleRemove, 'StyleRemove', VOID, Cut);
  initMetadataForClass(PutPlaceholder_0, 'PutPlaceholder', VOID, Cut);
  initMetadataForClass(EndPlaceholder_0, 'EndPlaceholder', VOID, Cut);
  initMetadataForClass(sam$kotlin_Comparator$0_1, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(ParagraphBuilder_0, 'ParagraphBuilder');
  initMetadataForClass(ParagraphLayouter, 'ParagraphLayouter');
  initMetadataForClass(PlatformFont, 'PlatformFont', VOID, VOID, [Font]);
  initMetadataForClass(SystemFont, 'SystemFont', VOID, PlatformFont);
  initMetadataForClass(FontLoader, 'FontLoader', FontLoader);
  initMetadataForClass(FontLoadResult, 'FontLoadResult');
  initMetadataForClass(Platform, 'Platform', VOID, Enum);
  initMetadataForClass(FontCache, 'FontCache', FontCache);
  initMetadataForClass(SkiaBackedTypeface, 'SkiaBackedTypeface');
  initMetadataForClass(LoadedFont, 'LoadedFont', VOID, PlatformFont);
  initMetadataForClass(SkiaParagraphIntrinsics, 'SkiaParagraphIntrinsics', VOID, VOID, [ParagraphIntrinsics]);
  initMetadataForClass(SkiaTextPaint, 'SkiaTextPaint', SkiaTextPaint);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForCompanion(Companion_29);
  initMetadataForClass(LineBreak, 'LineBreak');
  initMetadataForCompanion(Companion_30);
  initMetadataForClass(TextMotion, 'TextMotion');
  initMetadataForClass(createPlatformLocaleDelegate$1);
  initMetadataForClass(NoCache, 'NoCache', NoCache);
  //endregion
  var EmptyAnnotatedString;
  var androidx_compose_ui_text_AnnotatedString_Range$stable;
  var androidx_compose_ui_text_AnnotatedString_Builder_BulletScope$stable;
  var androidx_compose_ui_text_AnnotatedString_Builder$stable;
  var androidx_compose_ui_text_AnnotatedString$stable;
  function Range_init_$Init$(item, start, end, $this) {
    Range.call($this, item, start, end, '');
    return $this;
  }
  function Range_init_$Create$(item, start, end) {
    return Range_init_$Init$(item, start, end, objectCreate(protoOf(Range)));
  }
  function AnnotatedString_init_$Init$(text, annotations, $this) {
    var tmp;
    if (annotations === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = annotations;
    }
    annotations = tmp;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_0;
    if (annotations.n()) {
      tmp_0 = null;
    } else {
      tmp_0 = annotations;
    }
    var tmp$ret$1 = tmp_0;
    AnnotatedString.call($this, tmp$ret$1, text);
    return $this;
  }
  function AnnotatedString_init_$Create$(text, annotations) {
    return AnnotatedString_init_$Init$(text, annotations, objectCreate(protoOf(AnnotatedString)));
  }
  function Range(item, start, end, tag) {
    this.r57_1 = item;
    this.s57_1 = start;
    this.t57_1 = end;
    this.u57_1 = tag;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(this.s57_1 <= this.t57_1)) {
      var tmp$ret$1 = 'Reversed range is not supported';
      throwIllegalArgumentException(tmp$ret$1);
    }
  }
  protoOf(Range).v57 = function (item, start, end, tag) {
    return new Range(item, start, end, tag);
  };
  protoOf(Range).w57 = function (item, start, end, tag, $super) {
    item = item === VOID ? this.r57_1 : item;
    start = start === VOID ? this.s57_1 : start;
    end = end === VOID ? this.t57_1 : end;
    tag = tag === VOID ? this.u57_1 : tag;
    return $super === VOID ? this.v57(item, start, end, tag) : $super.v57.call(this, item, start, end, tag);
  };
  protoOf(Range).toString = function () {
    return 'Range(item=' + toString(this.r57_1) + ', start=' + this.s57_1 + ', end=' + this.t57_1 + ', tag=' + this.u57_1 + ')';
  };
  protoOf(Range).hashCode = function () {
    var result = this.r57_1 == null ? 0 : hashCode(this.r57_1);
    result = imul(result, 31) + this.s57_1 | 0;
    result = imul(result, 31) + this.t57_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.u57_1) | 0;
    return result;
  };
  protoOf(Range).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Range))
      return false;
    if (!equals(this.r57_1, other.r57_1))
      return false;
    if (!(this.s57_1 === other.s57_1))
      return false;
    if (!(this.t57_1 === other.t57_1))
      return false;
    if (!(this.u57_1 === other.u57_1))
      return false;
    return true;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.x57_1 = get_AnnotatedStringSaver();
  }
  var Companion_instance_0;
  function Companion_getInstance_13() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.y57_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).yb = function (a, b) {
    return this.y57_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.yb(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).r2 = function () {
    return this.y57_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.r2());
  };
  function AnnotatedString$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.s57_1;
    var tmp$ret$2 = b.s57_1;
    return compareValues(tmp, tmp$ret$2);
  }
  function AnnotatedString(annotations, text) {
    Companion_getInstance_13();
    this.z57_1 = annotations;
    this.a58_1 = text;
    var spanStyles = null;
    var paragraphStyles = null;
    var tmp0_safe_receiver = this.z57_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.m(index);
          var tmp = item.r57_1;
          if (tmp instanceof SpanStyle) {
            if (spanStyles == null) {
              // Inline function 'kotlin.collections.mutableListOf' call
              spanStyles = ArrayList_init_$Create$();
            }
            var tmp_0 = ensureNotNull(spanStyles);
            tmp_0.h(item instanceof Range ? item : THROW_CCE());
          } else {
            var tmp_1 = item.r57_1;
            if (tmp_1 instanceof ParagraphStyle_0) {
              if (paragraphStyles == null) {
                // Inline function 'kotlin.collections.mutableListOf' call
                paragraphStyles = ArrayList_init_$Create$();
              }
              var tmp_2 = ensureNotNull(paragraphStyles);
              tmp_2.h(item instanceof Range ? item : THROW_CCE());
            }
          }
        }
         while (inductionVariable <= last);
    }
    this.b58_1 = spanStyles;
    this.c58_1 = paragraphStyles;
    var tmp1_safe_receiver = this.c58_1;
    var tmp_3;
    if (tmp1_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.collections.sortedBy' call
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp_4 = AnnotatedString$lambda;
      var tmp$ret$5 = new sam$kotlin_Comparator$0(tmp_4);
      tmp_3 = sortedWith(tmp1_safe_receiver, tmp$ret$5);
    }
    var sorted = tmp_3;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(sorted == null || sorted.n())) {
      var previousEnds = mutableIntListOf(first(sorted).t57_1);
      var inductionVariable_0 = 1;
      var last_0 = sorted.l();
      if (inductionVariable_0 < last_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var current = sorted.m(i);
          $l$loop_0: while (true) {
            // Inline function 'androidx.collection.IntList.isNotEmpty' call
            if (!!(previousEnds.ti_1 === 0)) {
              break $l$loop_0;
            }
            var previousEnd = previousEnds.ld();
            if (current.s57_1 >= previousEnd) {
              // Inline function 'androidx.collection.IntList.lastIndex' call
              var tmp$ret$8 = previousEnds.ti_1 - 1 | 0;
              previousEnds.v1(tmp$ret$8);
            } else {
              // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
              if (!(current.t57_1 <= previousEnd)) {
                var tmp$ret$10 = 'Paragraph overlap not allowed, end ' + current.t57_1 + ' should be less than or equal to ' + previousEnd;
                throwIllegalArgumentException(tmp$ret$10);
              }
              break $l$loop_0;
            }
          }
          previousEnds.yi(current.t57_1);
        }
         while (inductionVariable_0 < last_0);
    }
  }
  protoOf(AnnotatedString).a = function () {
    return this.a58_1.length;
  };
  protoOf(AnnotatedString).b = function (index) {
    return charCodeAt(this.a58_1, index);
  };
  protoOf(AnnotatedString).c = function (startIndex, endIndex) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(startIndex <= endIndex)) {
      var tmp$ret$1 = 'start (' + startIndex + ') should be less or equal to end (' + endIndex + ')';
      throwIllegalArgumentException(tmp$ret$1);
    }
    if (startIndex === 0 && endIndex === this.a58_1.length)
      return this;
    var text = substring(this.a58_1, startIndex, endIndex);
    var tmp0_annotations = filterRanges(this.z57_1, startIndex, endIndex);
    return new AnnotatedString(tmp0_annotations, text);
  };
  protoOf(AnnotatedString).d58 = function (start, end) {
    var tmp0_safe_receiver = this.z57_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastAny' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.l() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_safe_receiver.m(index);
            var tmp_0;
            var tmp_1 = item.r57_1;
            if (tmp_1 instanceof LinkAnnotation) {
              tmp_0 = intersect(start, end, item.s57_1, item.t57_1);
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$0 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(AnnotatedString).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnnotatedString))
      return false;
    if (!(this.a58_1 === other.a58_1))
      return false;
    if (!equals(this.z57_1, other.z57_1))
      return false;
    return true;
  };
  protoOf(AnnotatedString).hashCode = function () {
    var result = getStringHashCode(this.a58_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.z57_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(AnnotatedString).toString = function () {
    return this.a58_1;
  };
  protoOf(AnnotatedString).e58 = function (other) {
    return equals(this.z57_1, other.z57_1);
  };
  function filterRanges(ranges, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(start <= end)) {
      var tmp$ret$1 = 'start (' + start + ') should be less than or equal to end (' + end + ')';
      throwIllegalArgumentException(tmp$ret$1);
    }
    var tmp;
    if (ranges == null) {
      return null;
    } else {
      tmp = ranges;
    }
    var nonNullRange = tmp;
    // Inline function 'androidx.compose.ui.util.fastFilteredMap' call
    var target = ArrayList_init_$Create$_0(nonNullRange.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = nonNullRange.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nonNullRange.m(index);
        if (intersect(start, end, item.s57_1, item.t57_1)) {
          // Inline function 'kotlin.comparisons.maxOf' call
          var b = item.s57_1;
          var tmp_0 = Math.max(start, b) - start | 0;
          // Inline function 'kotlin.comparisons.minOf' call
          var b_0 = item.t57_1;
          var tmp$ret$8 = Math.min(end, b_0);
          // Inline function 'kotlin.collections.plusAssign' call
          var element = new Range(item.r57_1, tmp_0, tmp$ret$8 - start | 0, item.u57_1);
          target.h(element);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (target.n()) {
      tmp_1 = null;
    } else {
      tmp_1 = target;
    }
    return tmp_1;
  }
  function intersect(lStart, lEnd, rStart, rEnd) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    return !!(!!(!!(lStart === lEnd | rStart === rEnd) & lStart === rStart) | !!(lStart < rEnd & rStart < lEnd));
  }
  function getLocalAnnotations(_this__u8e3s4, start, end, predicate) {
    predicate = predicate === VOID ? null : predicate;
    _init_properties_AnnotatedString_kt__ww2pyh();
    if (start === end)
      return null;
    var tmp0_elvis_lhs = _this__u8e3s4.z57_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var annotations = tmp;
    if (start === 0 && end >= _this__u8e3s4.a58_1.length) {
      var tmp_0;
      if (predicate == null) {
        tmp_0 = annotations;
      } else {
        // Inline function 'androidx.compose.ui.util.fastFilter' call
        var target = ArrayList_init_$Create$_0(annotations.l());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable = 0;
        var last = annotations.l() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = annotations.m(index);
            if (predicate(item.r57_1)) {
              // Inline function 'kotlin.collections.plusAssign' call
              target.h(item);
            }
          }
           while (inductionVariable <= last);
        tmp_0 = target;
      }
      return tmp_0;
    }
    // Inline function 'androidx.compose.ui.util.fastFilteredMap' call
    var target_0 = ArrayList_init_$Create$_0(annotations.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable_0 = 0;
    var last_0 = annotations.l() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = annotations.m(index_0);
        var tmp_1;
        var tmp1_elvis_lhs = predicate == null ? null : predicate(item_0.r57_1);
        if (tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs) {
          tmp_1 = intersect(start, end, item_0.s57_1, item_0.t57_1);
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          var tmp0_tag = item_0.u57_1;
          var tmp1_item = item_0.r57_1;
          var tmp2_start = coerceIn(item_0.s57_1, start, end) - start | 0;
          var tmp3_end = coerceIn(item_0.t57_1, start, end) - start | 0;
          // Inline function 'kotlin.collections.plusAssign' call
          var element = new Range(tmp1_item, tmp2_start, tmp3_end, tmp0_tag);
          target_0.h(element);
        }
      }
       while (inductionVariable_0 <= last_0);
    return target_0;
  }
  function normalizedParagraphStyles(_this__u8e3s4, defaultParagraphStyle) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp0_safe_receiver = _this__u8e3s4.c58_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.sortedBy' call
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp_0 = normalizedParagraphStyles$lambda;
      var tmp$ret$1 = new sam$kotlin_Comparator$0_0(tmp_0);
      tmp = sortedWith(tmp0_safe_receiver, tmp$ret$1);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_1 = emptyList();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var sortedParagraphs = tmp_1;
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var lastAdded = 0;
    var stack = ArrayDeque_init_$Create$();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = sortedParagraphs.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = sortedParagraphs.m(index);
        var current = item.w57(defaultParagraphStyle.o58(item.r57_1));
        $l$loop: while (true) {
          var tmp_2;
          if (lastAdded < current.s57_1) {
            // Inline function 'kotlin.collections.isNotEmpty' call
            tmp_2 = !stack.n();
          } else {
            tmp_2 = false;
          }
          if (!tmp_2) {
            break $l$loop;
          }
          var lastInStack = stack.ld();
          if (current.s57_1 < lastInStack.t57_1) {
            result.h(Range_init_$Create$(lastInStack.r57_1, lastAdded, current.s57_1));
            lastAdded = current.s57_1;
          } else {
            result.h(Range_init_$Create$(lastInStack.r57_1, lastAdded, lastInStack.t57_1));
            lastAdded = lastInStack.t57_1;
            $l$loop_0: while (true) {
              var tmp_3;
              // Inline function 'kotlin.collections.isNotEmpty' call
              if (!stack.n()) {
                tmp_3 = lastAdded === stack.ld().t57_1;
              } else {
                tmp_3 = false;
              }
              if (!tmp_3) {
                break $l$loop_0;
              }
              stack.rd();
            }
          }
        }
        if (lastAdded < current.s57_1) {
          result.h(Range_init_$Create$(defaultParagraphStyle, lastAdded, current.s57_1));
          lastAdded = current.s57_1;
        }
        var lastInStack_0 = stack.md();
        if (!(lastInStack_0 == null)) {
          if (lastInStack_0.s57_1 === current.s57_1 && lastInStack_0.t57_1 === current.t57_1) {
            stack.rd();
            stack.h(Range_init_$Create$(lastInStack_0.r57_1.o58(current.r57_1), current.s57_1, current.t57_1));
          } else if (lastInStack_0.s57_1 === lastInStack_0.t57_1) {
            result.h(Range_init_$Create$(lastInStack_0.r57_1, lastInStack_0.s57_1, lastInStack_0.t57_1));
            stack.rd();
            stack.h(Range_init_$Create$(current.r57_1, current.s57_1, current.t57_1));
          } else if (lastInStack_0.t57_1 < current.t57_1) {
            throw IllegalArgumentException_init_$Create$();
          } else {
            stack.h(Range_init_$Create$(lastInStack_0.r57_1.o58(current.r57_1), current.s57_1, current.t57_1));
          }
        } else {
          stack.h(Range_init_$Create$(current.r57_1, current.s57_1, current.t57_1));
        }
      }
       while (inductionVariable <= last);
    $l$loop_1: while (true) {
      var tmp_4;
      if (lastAdded <= _this__u8e3s4.a58_1.length) {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_4 = !stack.n();
      } else {
        tmp_4 = false;
      }
      if (!tmp_4) {
        break $l$loop_1;
      }
      var lastInStack_1 = stack.ld();
      result.h(Range_init_$Create$(lastInStack_1.r57_1, lastAdded, lastInStack_1.t57_1));
      lastAdded = lastInStack_1.t57_1;
      $l$loop_2: while (true) {
        var tmp_5;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!stack.n()) {
          tmp_5 = lastAdded === stack.ld().t57_1;
        } else {
          tmp_5 = false;
        }
        if (!tmp_5) {
          break $l$loop_2;
        }
        stack.rd();
      }
    }
    if (lastAdded < _this__u8e3s4.a58_1.length) {
      result.h(Range_init_$Create$(defaultParagraphStyle, lastAdded, _this__u8e3s4.a58_1.length));
    }
    if (result.n()) {
      result.h(Range_init_$Create$(defaultParagraphStyle, 0, 0));
    }
    return result;
  }
  function substringWithoutParagraphStyles(_this__u8e3s4, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp = !(start === end) ? substring(_this__u8e3s4.a58_1, start, end) : '';
    var tmp0_elvis_lhs = getLocalAnnotations(_this__u8e3s4, start, end, substringWithoutParagraphStyles$lambda);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return AnnotatedString_init_$Create$(tmp, tmp_0);
  }
  function access$substringWithoutParagraphStyles$tAnnotatedStringKt($receiver, start, end) {
    return substringWithoutParagraphStyles($receiver, start, end);
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.p58_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).yb = function (a, b) {
    return this.p58_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.yb(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).r2 = function () {
    return this.p58_1;
  };
  protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0_0).hashCode = function () {
    return hashCode(this.r2());
  };
  function normalizedParagraphStyles$lambda(a, b) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.s57_1;
    var tmp$ret$2 = b.s57_1;
    return compareValues(tmp, tmp$ret$2);
  }
  function substringWithoutParagraphStyles$lambda(it) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    return !(it instanceof ParagraphStyle_0);
  }
  var properties_initialized_AnnotatedString_kt_um06op;
  function _init_properties_AnnotatedString_kt__ww2pyh() {
    if (!properties_initialized_AnnotatedString_kt_um06op) {
      properties_initialized_AnnotatedString_kt_um06op = true;
      EmptyAnnotatedString = AnnotatedString_init_$Create$('');
      androidx_compose_ui_text_AnnotatedString_Range$stable = 0;
      androidx_compose_ui_text_AnnotatedString_Builder_BulletScope$stable = 8;
      androidx_compose_ui_text_AnnotatedString_Builder$stable = 8;
      androidx_compose_ui_text_AnnotatedString$stable = 0;
    }
  }
  var androidx_compose_ui_text_Bullet$stable;
  var androidx_compose_ui_text_LinkAnnotation_Url$stable;
  var androidx_compose_ui_text_LinkAnnotation_Clickable$stable;
  var androidx_compose_ui_text_LinkAnnotation$stable;
  function Url(url, styles, linkInteractionListener) {
    styles = styles === VOID ? null : styles;
    linkInteractionListener = linkInteractionListener === VOID ? null : linkInteractionListener;
    LinkAnnotation.call(this);
    this.q58_1 = url;
    this.r58_1 = styles;
    this.s58_1 = linkInteractionListener;
  }
  protoOf(Url).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Url))
      return false;
    if (!(this.q58_1 === other.q58_1))
      return false;
    if (!equals(this.r58_1, other.r58_1))
      return false;
    if (!equals(this.s58_1, other.s58_1))
      return false;
    return true;
  };
  protoOf(Url).hashCode = function () {
    var result = getStringHashCode(this.q58_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.r58_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.s58_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  protoOf(Url).toString = function () {
    return 'LinkAnnotation.Url(url=' + this.q58_1 + ')';
  };
  function Clickable(tag, styles, linkInteractionListener) {
    styles = styles === VOID ? null : styles;
    LinkAnnotation.call(this);
    this.t58_1 = tag;
    this.u58_1 = styles;
    this.v58_1 = linkInteractionListener;
  }
  protoOf(Clickable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Clickable))
      return false;
    if (!(this.t58_1 === other.t58_1))
      return false;
    if (!equals(this.u58_1, other.u58_1))
      return false;
    if (!equals(this.v58_1, other.v58_1))
      return false;
    return true;
  };
  protoOf(Clickable).hashCode = function () {
    var result = getStringHashCode(this.t58_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.u58_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.v58_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  protoOf(Clickable).toString = function () {
    return 'LinkAnnotation.Clickable(tag=' + this.t58_1 + ')';
  };
  function LinkAnnotation() {
  }
  var androidx_compose_ui_text_MultiParagraph$stable;
  var androidx_compose_ui_text_ParagraphInfo$stable;
  function _get_annotatedString__kqljtk($this) {
    return $this.b59_1.w58_1;
  }
  function requireIndexInRangeInclusiveEnd($this, offset) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= offset ? offset <= _get_annotatedString__kqljtk($this).a58_1.length : false)) {
      var tmp$ret$1 = 'offset(' + offset + ') is out of bounds [0, ' + _get_annotatedString__kqljtk($this).a() + ']';
      throwIllegalArgumentException(tmp$ret$1);
    }
  }
  function requireLineIndexInRange($this, lineIndex) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= lineIndex ? lineIndex < $this.g59_1 : false)) {
      var tmp$ret$1 = 'lineIndex(' + lineIndex + ') is out of bounds [0, ' + $this.g59_1 + ')';
      throwIllegalArgumentException(tmp$ret$1);
    }
  }
  function MultiParagraph$getPathForRange$lambda($path, $start, $end) {
    return function (paragraphInfo) {
      // Inline function 'kotlin.with' call
      $path.y4n(paragraphInfo.s59(paragraphInfo.j59_1.r59(paragraphInfo.q59($start), paragraphInfo.q59($end))));
      return Unit_instance;
    };
  }
  function MultiParagraph(intrinsics, constraints, maxLines, overflow) {
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    overflow = overflow === VOID ? Companion_getInstance_38().t59_1 : overflow;
    this.b59_1 = intrinsics;
    this.c59_1 = maxLines;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(_Constraints___get_minWidth__impl__hi9lfi(constraints) === 0 && _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0)) {
      var tmp$ret$1 = 'Setting Constraints.minWidth and Constraints.minHeight is not supported, these should be the default zero values instead.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    var currentHeight = 0.0;
    var currentLineCount = 0;
    var didExceedMaxLines = false;
    // Inline function 'kotlin.collections.mutableListOf' call
    var paragraphInfoList = ArrayList_init_$Create$();
    var infoList = this.b59_1.a59_1;
    var inductionVariable = 0;
    var last = infoList.l() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paragraphInfo = infoList.m(index);
        var tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
        var tmp_0;
        if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints)) {
          tmp_0 = coerceAtLeast(_Constraints___get_maxHeight__impl__dt3e8z(constraints) - ceilToInt(currentHeight) | 0, 0);
        } else {
          tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
        }
        var paragraph = Paragraph_0(paragraphInfo.y59_1, Constraints(VOID, tmp, VOID, tmp_0), this.c59_1 - currentLineCount | 0, overflow);
        var paragraphTop = currentHeight;
        var paragraphBottom = currentHeight + paragraph.i3q();
        currentHeight = paragraphBottom;
        var startLineIndex = currentLineCount;
        var endLineIndex = startLineIndex + paragraph.b5a() | 0;
        currentLineCount = endLineIndex;
        paragraphInfoList.h(new ParagraphInfo(paragraph, paragraphInfo.z59_1, paragraphInfo.a5a_1, startLineIndex, endLineIndex, paragraphTop, paragraphBottom));
        if (paragraph.c5a() || (endLineIndex === this.c59_1 && !(index === get_lastIndex(this.b59_1.a59_1)))) {
          didExceedMaxLines = true;
          break $l$loop;
        }
      }
       while (inductionVariable <= last);
    this.f59_1 = currentHeight;
    this.g59_1 = currentLineCount;
    this.d59_1 = didExceedMaxLines;
    this.i59_1 = paragraphInfoList;
    this.e59_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.util.fastFlatMap' call
    var target = ArrayList_init_$Create$_0(paragraphInfoList.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable_0 = 0;
    var last_0 = paragraphInfoList.l() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item = paragraphInfoList.m(index_0);
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.util.fastMap' call
        var this_0 = item.j59_1.d5a();
        var target_0 = ArrayList_init_$Create$_0(this_0.l());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable_1 = 0;
        var last_1 = this_0.l() - 1 | 0;
        if (inductionVariable_1 <= last_1)
          do {
            var index_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item_0 = this_0.m(index_1);
            // Inline function 'kotlin.collections.plusAssign' call
            var element = item_0 == null ? null : item.e5a(item_0);
            target_0.h(element);
          }
           while (inductionVariable_1 <= last_1);
        var list = target_0;
        addAll(target, list);
      }
       while (inductionVariable_0 <= last_0);
    // Inline function 'kotlin.let' call
    var tmp_2;
    if (target.l() < this.b59_1.x58_1.l()) {
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var size = this.b59_1.x58_1.l() - target.l() | 0;
      var list_0 = ArrayList_init_$Create$_0(size);
      // Inline function 'kotlin.repeat' call
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < size)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          list_0.h(null);
        }
         while (inductionVariable_2 < size);
      tmp_2 = plus(target, list_0);
    } else {
      tmp_2 = target;
    }
    tmp_1.h59_1 = tmp_2;
  }
  protoOf(MultiParagraph).f5a = function () {
    var tmp;
    if (this.i59_1.n()) {
      tmp = 0.0;
    } else {
      tmp = this.i59_1.m(0).j59_1.f5a();
    }
    return tmp;
  };
  protoOf(MultiParagraph).g5a = function () {
    var tmp;
    if (this.i59_1.n()) {
      tmp = 0.0;
    } else {
      // Inline function 'kotlin.with' call
      var $this$with = last(this.i59_1);
      tmp = $this$with.h5a($this$with.j59_1.g5a());
    }
    return tmp;
  };
  protoOf(MultiParagraph).i5a = function (canvas, color, shadow, decoration, drawStyle, blendMode) {
    canvas.d4j();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.i59_1;
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        item.j59_1.i5a(canvas, color, shadow, decoration, drawStyle, blendMode);
        canvas.e3p(0.0, item.j59_1.i3q());
      }
       while (inductionVariable <= last);
    canvas.e4j();
  };
  protoOf(MultiParagraph).j5a = function (canvas, color, shadow, decoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance().y4h_1 : color;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().y4m_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.i5a(canvas, color, shadow, decoration, drawStyle, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.i5a.call(this, canvas, new Color(color), shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  };
  protoOf(MultiParagraph).k5a = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode) {
    drawMultiParagraph(this, canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
  };
  protoOf(MultiParagraph).l5a = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode, $super) {
    alpha = alpha === VOID ? NaN : alpha;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().y4m_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.k5a(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.k5a.call(this, canvas, brush, alpha, shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  };
  protoOf(MultiParagraph).r59 = function (start, end) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!((0 <= start ? start <= end : false) && end <= _get_annotatedString__kqljtk(this).a58_1.length)) {
      var tmp$ret$1 = 'Start(' + start + ') or End(' + end + ') is out of range [0..' + _get_annotatedString__kqljtk(this).a58_1.length + '),' + ' or start > end!';
      throwIllegalArgumentException(tmp$ret$1);
    }
    if (start === end)
      return Path();
    var path = Path();
    var tmp = TextRange_1(start, end);
    findParagraphsByRange(this.i59_1, tmp, MultiParagraph$getPathForRange$lambda(path, start, end));
    return path;
  };
  protoOf(MultiParagraph).m5a = function (vertical) {
    var paragraphIndex = findParagraphByY(this.i59_1, vertical);
    // Inline function 'kotlin.with' call
    var $this$with = this.i59_1.m(paragraphIndex);
    var tmp;
    if ($this$with.a() === 0) {
      tmp = $this$with.m59_1;
    } else {
      tmp = $this$with.o5a($this$with.j59_1.m5a($this$with.n5a(vertical)));
    }
    return tmp;
  };
  protoOf(MultiParagraph).p5a = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.i59_1);
    } else {
      tmp = findParagraphByIndex(this.i59_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var $this$with = this.i59_1.m(paragraphIndex);
    return $this$with.j59_1.p5a($this$with.q59(offset));
  };
  protoOf(MultiParagraph).q5a = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.i59_1);
    } else {
      tmp = findParagraphByIndex(this.i59_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var $this$with = this.i59_1.m(paragraphIndex);
    return $this$with.j59_1.q5a($this$with.q59(offset));
  };
  protoOf(MultiParagraph).r5a = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.i59_1);
    } else {
      tmp = findParagraphByIndex(this.i59_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var $this$with = this.i59_1.m(paragraphIndex);
    return $this$with.s5a($this$with.j59_1.r5a($this$with.q59(offset)), false);
  };
  protoOf(MultiParagraph).u5a = function (offset) {
    var tmp;
    if (offset >= _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.i59_1);
    } else if (offset < 0) {
      tmp = 0;
    } else {
      tmp = findParagraphByIndex(this.i59_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var $this$with = this.i59_1.m(paragraphIndex);
    return $this$with.o5a($this$with.j59_1.u5a($this$with.q59(offset)));
  };
  protoOf(MultiParagraph).v5a = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.i59_1, lineIndex);
    // Inline function 'kotlin.with' call
    var $this$with = this.i59_1.m(paragraphIndex);
    return $this$with.h5a($this$with.j59_1.v5a($this$with.w5a(lineIndex)));
  };
  protoOf(MultiParagraph).x5a = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.i59_1, lineIndex);
    // Inline function 'kotlin.with' call
    var $this$with = this.i59_1.m(paragraphIndex);
    return $this$with.y5a($this$with.j59_1.x5a($this$with.w5a(lineIndex)));
  };
  protoOf(MultiParagraph).z5a = function (lineIndex, visibleEnd) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.i59_1, lineIndex);
    // Inline function 'kotlin.with' call
    var $this$with = this.i59_1.m(paragraphIndex);
    return $this$with.y5a($this$with.j59_1.z5a($this$with.w5a(lineIndex), visibleEnd));
  };
  function ParagraphInfo(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom) {
    startLineIndex = startLineIndex === VOID ? -1 : startLineIndex;
    endLineIndex = endLineIndex === VOID ? -1 : endLineIndex;
    top = top === VOID ? -1.0 : top;
    bottom = bottom === VOID ? -1.0 : bottom;
    this.j59_1 = paragraph;
    this.k59_1 = startIndex;
    this.l59_1 = endIndex;
    this.m59_1 = startLineIndex;
    this.n59_1 = endLineIndex;
    this.o59_1 = top;
    this.p59_1 = bottom;
  }
  protoOf(ParagraphInfo).a = function () {
    return this.l59_1 - this.k59_1 | 0;
  };
  protoOf(ParagraphInfo).q59 = function (_this__u8e3s4) {
    return coerceIn(_this__u8e3s4, this.k59_1, this.l59_1) - this.k59_1 | 0;
  };
  protoOf(ParagraphInfo).y5a = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.k59_1 | 0;
  };
  protoOf(ParagraphInfo).w5a = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.m59_1 | 0;
  };
  protoOf(ParagraphInfo).o5a = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.m59_1 | 0;
  };
  protoOf(ParagraphInfo).h5a = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.o59_1;
  };
  protoOf(ParagraphInfo).n5a = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.o59_1;
  };
  protoOf(ParagraphInfo).e5a = function (_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.o59_1;
    var v1 = fromInt(toRawBits(0.0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$0 = _Offset___init__impl__c168vi(tmp$ret$1);
    return _this__u8e3s4.s3p(tmp$ret$0);
  };
  protoOf(ParagraphInfo).s59 = function (_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.o59_1;
    var v1 = fromInt(toRawBits(0.0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$0 = _Offset___init__impl__c168vi(tmp$ret$1);
    _this__u8e3s4.d3p(tmp$ret$0);
    return _this__u8e3s4;
  };
  protoOf(ParagraphInfo).s5a = function (_this__u8e3s4, treatZeroAsNull) {
    if (treatZeroAsNull && equals(_this__u8e3s4, Companion_getInstance_15().a5b_1)) {
      return Companion_getInstance_15().a5b_1;
    }
    return TextRange_1(this.y5a(_TextRange___get_start__impl__ww4t90(_this__u8e3s4)), this.y5a(_TextRange___get_end__impl__gcdxpp(_this__u8e3s4)));
  };
  protoOf(ParagraphInfo).toString = function () {
    return 'ParagraphInfo(paragraph=' + toString_0(this.j59_1) + ', startIndex=' + this.k59_1 + ', endIndex=' + this.l59_1 + ', startLineIndex=' + this.m59_1 + ', endLineIndex=' + this.n59_1 + ', top=' + this.o59_1 + ', bottom=' + this.p59_1 + ')';
  };
  protoOf(ParagraphInfo).hashCode = function () {
    var result = hashCode(this.j59_1);
    result = imul(result, 31) + this.k59_1 | 0;
    result = imul(result, 31) + this.l59_1 | 0;
    result = imul(result, 31) + this.m59_1 | 0;
    result = imul(result, 31) + this.n59_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.o59_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p59_1) | 0;
    return result;
  };
  protoOf(ParagraphInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphInfo))
      return false;
    if (!equals(this.j59_1, other.j59_1))
      return false;
    if (!(this.k59_1 === other.k59_1))
      return false;
    if (!(this.l59_1 === other.l59_1))
      return false;
    if (!(this.m59_1 === other.m59_1))
      return false;
    if (!(this.n59_1 === other.n59_1))
      return false;
    if (!equals(this.o59_1, other.o59_1))
      return false;
    if (!equals(this.p59_1, other.p59_1))
      return false;
    return true;
  };
  function findParagraphsByRange(paragraphInfoList, range, action) {
    var paragraphIndex = findParagraphByIndex(paragraphInfoList, _TextRange___get_min__impl__uu95c4(range));
    var inductionVariable = paragraphIndex;
    var last = paragraphInfoList.l();
    if (inductionVariable < last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paragraph = paragraphInfoList.m(i);
        if (paragraph.k59_1 >= _TextRange___get_max__impl__owm8m(range))
          break $l$loop_0;
        if (paragraph.k59_1 === paragraph.l59_1)
          continue $l$loop_0;
        action(paragraph);
      }
       while (inductionVariable < last);
  }
  function findParagraphByY(paragraphInfoList, y) {
    if (y <= 0)
      return 0;
    if (y >= last(paragraphInfoList).p59_1)
      return get_lastIndex(paragraphInfoList);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.l() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.m(mid);
        var cmp = midVal.o59_1 > y ? 1 : midVal.p59_1 <= y ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$0 = mid;
          break $l$block;
        }
      }
      tmp$ret$0 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$0;
  }
  function findParagraphByIndex(paragraphInfoList, index) {
    var lastLineEnd = last(paragraphInfoList).l59_1;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(index <= last(paragraphInfoList).l59_1)) {
      var tmp$ret$1 = 'Index ' + index + " should be less or equal than last line's end " + lastLineEnd;
      throwIllegalArgumentException(tmp$ret$1);
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.l() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.m(mid);
        var cmp = midVal.k59_1 > index ? 1 : midVal.l59_1 <= index ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$2 = mid;
          break $l$block;
        }
      }
      tmp$ret$2 = -(low + 1 | 0) | 0;
    }
    var paragraphIndex = tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= paragraphIndex ? paragraphIndex <= (paragraphInfoList.l() - 1 | 0) : false)) {
      var tmp = 'Found paragraph index ' + paragraphIndex + ' should be in range [0, ' + paragraphInfoList.l() + ').\n';
      var tmp$ret$5 = tmp + ('Debug info: index=' + index + ', paragraphs=[' + fastJoinToString(paragraphInfoList, VOID, VOID, VOID, VOID, VOID, findParagraphByIndex$lambda) + ']');
      throwIllegalArgumentException(tmp$ret$5);
    }
    return paragraphIndex;
  }
  function findParagraphByLineIndex(paragraphInfoList, lineIndex) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.l() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.m(mid);
        var cmp = midVal.m59_1 > lineIndex ? 1 : midVal.n59_1 <= lineIndex ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$0 = mid;
          break $l$block;
        }
      }
      tmp$ret$0 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$0;
  }
  function findParagraphByIndex$lambda(it) {
    return '[' + it.k59_1 + ', ' + it.l59_1 + ')';
  }
  var androidx_compose_ui_text_MultiParagraphIntrinsics$stable;
  var androidx_compose_ui_text_ParagraphIntrinsicInfo$stable;
  function resolveTextDirection($this, style, defaultStyle) {
    return !(style.g58_1 === Companion_getInstance_34().h5b_1) ? style : style.b5b(VOID, defaultStyle.g58_1);
  }
  function MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp0 = this$0.a59_1;
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        if (tmp0.n()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = tmp0.m(0);
        var maxValue = maxElem.y59_1.b48();
        var inductionVariable = 1;
        var last = get_lastIndex(tmp0);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = tmp0.m(i);
            var v = e.y59_1.b48();
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y59_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.b48();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics$_get_minIntrinsicWidth_$ref_bvjwng() {
    return function (p0) {
      return p0.b48();
    };
  }
  function MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp0 = this$0.a59_1;
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        if (tmp0.n()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = tmp0.m(0);
        var maxValue = maxElem.y59_1.c48();
        var inductionVariable = 1;
        var last = get_lastIndex(tmp0);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = tmp0.m(i);
            var v = e.y59_1.c48();
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y59_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.c48();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics$_get_maxIntrinsicWidth_$ref_co14jq() {
    return function (p0) {
      return p0.c48();
    };
  }
  function MultiParagraphIntrinsics(annotatedString, style, placeholders, density, fontFamilyResolver) {
    this.w58_1 = annotatedString;
    this.x58_1 = placeholders;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    tmp.y58_1 = lazy(tmp_0, MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this));
    var tmp_1 = this;
    var tmp_2 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_1.z58_1 = lazy(tmp_2, MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this));
    var paragraphStyle = style.l5b();
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle' call
    var this_0 = this.w58_1;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_1 = normalizedParagraphStyles(this_0, paragraphStyle);
    var target = ArrayList_init_$Create$_0(this_1.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = this_1.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_1.m(index);
        var annotatedString_0 = access$substringWithoutParagraphStyles$tAnnotatedStringKt(this_0, item.s57_1, item.t57_1);
        var currentParagraphStyle = resolveTextDirection(this, item.r57_1, paragraphStyle);
        var tmp1_text = annotatedString_0.a58_1;
        var tmp2_style = style.m5b(currentParagraphStyle);
        var tmp0_elvis_lhs = annotatedString_0.z57_1;
        var tmp3_annotations = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
        var tmp4_placeholders = getLocalPlaceholders(this.x58_1, item.s57_1, item.t57_1);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = new ParagraphIntrinsicInfo(ParagraphIntrinsics_0(tmp1_text, tmp2_style, tmp3_annotations, density, fontFamilyResolver, tmp4_placeholders), item.s57_1, item.t57_1);
        target.h(element);
      }
       while (inductionVariable <= last);
    tmp_3.a59_1 = target;
  }
  protoOf(MultiParagraphIntrinsics).b48 = function () {
    var tmp0 = this.y58_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('minIntrinsicWidth', 1, tmp, MultiParagraphIntrinsics$_get_minIntrinsicWidth_$ref_bvjwng(), null);
    return tmp0.x1();
  };
  protoOf(MultiParagraphIntrinsics).c48 = function () {
    var tmp0 = this.z58_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('maxIntrinsicWidth', 1, tmp, MultiParagraphIntrinsics$_get_maxIntrinsicWidth_$ref_co14jq(), null);
    return tmp0.x1();
  };
  protoOf(MultiParagraphIntrinsics).n5b = function () {
    var tmp0 = this.a59_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0.m(index);
          if (item.y59_1.n5b()) {
            tmp$ret$0 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  };
  function ParagraphIntrinsicInfo(intrinsics, startIndex, endIndex) {
    this.y59_1 = intrinsics;
    this.z59_1 = startIndex;
    this.a5a_1 = endIndex;
  }
  protoOf(ParagraphIntrinsicInfo).toString = function () {
    return 'ParagraphIntrinsicInfo(intrinsics=' + toString_0(this.y59_1) + ', startIndex=' + this.z59_1 + ', endIndex=' + this.a5a_1 + ')';
  };
  protoOf(ParagraphIntrinsicInfo).hashCode = function () {
    var result = hashCode(this.y59_1);
    result = imul(result, 31) + this.z59_1 | 0;
    result = imul(result, 31) + this.a5a_1 | 0;
    return result;
  };
  protoOf(ParagraphIntrinsicInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphIntrinsicInfo))
      return false;
    if (!equals(this.y59_1, other.y59_1))
      return false;
    if (!(this.z59_1 === other.z59_1))
      return false;
    if (!(this.a5a_1 === other.a5a_1))
      return false;
    return true;
  };
  function getLocalPlaceholders(_this__u8e3s4, start, end) {
    // Inline function 'androidx.compose.ui.util.fastFilteredMap' call
    var target = ArrayList_init_$Create$_0(_this__u8e3s4.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.m(index);
        if (intersect(start, end, item.s57_1, item.t57_1)) {
          // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
          if (!(start <= item.s57_1 && item.t57_1 <= end)) {
            var tmp$ret$6 = 'placeholder can not overlap with paragraph.';
            throwIllegalArgumentException(tmp$ret$6);
          }
          // Inline function 'kotlin.collections.plusAssign' call
          var element = Range_init_$Create$(item.r57_1, item.s57_1 - start | 0, item.t57_1 - start | 0);
          target.h(element);
        }
      }
       while (inductionVariable <= last);
    return target;
  }
  function Paragraph(text, style, constraints, density, fontFamilyResolver, spanStyles, placeholders, maxLines, overflow) {
    var tmp;
    if (spanStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = placeholders;
    }
    placeholders = tmp_0;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    overflow = overflow === VOID ? Companion_getInstance_38().t59_1 : overflow;
    return ActualParagraph(text, style, spanStyles, placeholders, maxLines, overflow, constraints, density, fontFamilyResolver);
  }
  function Paragraph_0(paragraphIntrinsics, constraints, maxLines, overflow) {
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    overflow = overflow === VOID ? Companion_getInstance_38().t59_1 : overflow;
    return ActualParagraph_0(paragraphIntrinsics, maxLines, overflow, constraints);
  }
  function ceilToInt(_this__u8e3s4) {
    // Inline function 'kotlin.math.ceil' call
    var tmp$ret$0 = Math.ceil(_this__u8e3s4);
    return numberToInt(tmp$ret$0);
  }
  function ParagraphIntrinsics() {
  }
  function ParagraphIntrinsics_0(text, style, annotations, density, fontFamilyResolver, placeholders) {
    var tmp;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = placeholders;
    }
    placeholders = tmp;
    return ActualParagraphIntrinsics(text, style, annotations, placeholders, density, fontFamilyResolver);
  }
  function get_DefaultLineHeight() {
    _init_properties_ParagraphStyle_kt__lbx7er();
    return DefaultLineHeight;
  }
  var DefaultLineHeight;
  var androidx_compose_ui_text_ParagraphStyle$stable;
  function ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    textAlign = textAlign === VOID ? Companion_getInstance_32().u5b_1 : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_34().h5b_1 : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().f3s_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_43().y5b_1 : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_27().b5c_1 : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    this.f58_1 = textAlign;
    this.g58_1 = textDirection;
    this.h58_1 = lineHeight;
    this.i58_1 = textIndent;
    this.j58_1 = platformStyle;
    this.k58_1 = lineHeightStyle;
    this.l58_1 = lineBreak;
    this.m58_1 = hyphens;
    this.n58_1 = textMotion;
    if (!equals(this.h58_1, Companion_getInstance_1().f3s_1)) {
      // Inline function 'androidx.compose.ui.text.internal.checkPrecondition' call
      if (!(_TextUnit___get_value__impl__hpbx0k(this.h58_1) >= 0.0)) {
        var tmp$ret$1 = "lineHeight can't be negative (" + _TextUnit___get_value__impl__hpbx0k(this.h58_1) + ')';
        throwIllegalStateException(tmp$ret$1);
      }
    }
  }
  protoOf(ParagraphStyle_0).o58 = function (other) {
    if (other == null)
      return this;
    return fastMerge(this, other.f58_1, other.g58_1, other.h58_1, other.i58_1, other.j58_1, other.k58_1, other.l58_1, other.m58_1, other.n58_1);
  };
  protoOf(ParagraphStyle_0).c5c = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
  };
  protoOf(ParagraphStyle_0).b5b = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    textAlign = textAlign === VOID ? this.f58_1 : textAlign;
    textDirection = textDirection === VOID ? this.g58_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.h58_1 : lineHeight;
    textIndent = textIndent === VOID ? this.i58_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.j58_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.k58_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.l58_1 : lineBreak;
    hyphens = hyphens === VOID ? this.m58_1 : hyphens;
    textMotion = textMotion === VOID ? this.n58_1 : textMotion;
    return $super === VOID ? this.c5c(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) : $super.c5c.call(this, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), textMotion);
  };
  protoOf(ParagraphStyle_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphStyle_0))
      return false;
    if (!(this.f58_1 === other.f58_1))
      return false;
    if (!(this.g58_1 === other.g58_1))
      return false;
    if (!equals(this.h58_1, other.h58_1))
      return false;
    if (!equals(this.i58_1, other.i58_1))
      return false;
    if (!equals(this.j58_1, other.j58_1))
      return false;
    if (!equals(this.k58_1, other.k58_1))
      return false;
    if (!(this.l58_1 === other.l58_1))
      return false;
    if (!(this.m58_1 === other.m58_1))
      return false;
    if (!equals(this.n58_1, other.n58_1))
      return false;
    return true;
  };
  protoOf(ParagraphStyle_0).hashCode = function () {
    var result = TextAlign__hashCode_impl_s8g35y(this.f58_1);
    result = imul(31, result) + TextDirection__hashCode_impl_g63nwg(this.g58_1) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.h58_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.i58_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.j58_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.k58_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    result = imul(31, result) + LineBreak__hashCode_impl_ybksn(this.l58_1) | 0;
    result = imul(31, result) + Hyphens__hashCode_impl_yb7t8v(this.m58_1) | 0;
    var tmp_2 = imul(31, result);
    var tmp6_safe_receiver = this.n58_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_2 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    return result;
  };
  protoOf(ParagraphStyle_0).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.r7('ParagraphStyle(');
    this_0.r7('textAlign=' + TextAlign__toString_impl_6ha6d3(this.f58_1) + ', ');
    this_0.r7('textDirection=' + TextDirection__toString_impl_x3uh9t(this.g58_1) + ', ');
    this_0.r7('lineHeight=' + TextUnit__toString_impl_51ghw0(this.h58_1) + ', ');
    this_0.r7('textIndent=' + toString(this.i58_1) + ', ');
    this_0.r7('platformStyle=' + toString(this.j58_1) + ', ');
    this_0.r7('lineHeightStyle=' + toString(this.k58_1) + ', ');
    this_0.r7('lineBreak=' + LineBreak__toString_impl_mphhli(this.l58_1) + ', ');
    this_0.r7('hyphens=' + Hyphens__toString_impl_ck1wg0(this.m58_1) + ', ');
    this_0.r7('textMotion=' + toString(this.n58_1));
    this_0.r7(')');
    return this_0.toString();
  };
  function fastMerge(_this__u8e3s4, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    var tmp_6;
    if (!(textAlign === Companion_getInstance_32().u5b_1) && !(textAlign === _this__u8e3s4.f58_1)) {
      tmp_6 = true;
    } else {
      var tmp_7;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(lineHeight), new Long(0, 0))) {
        tmp_7 = !equals(lineHeight, _this__u8e3s4.h58_1);
      } else {
        tmp_7 = false;
      }
      tmp_6 = tmp_7;
    }
    if (tmp_6) {
      tmp_5 = true;
    } else {
      tmp_5 = (!(textIndent == null) && !equals(textIndent, _this__u8e3s4.i58_1));
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      tmp_4 = (!(textDirection === Companion_getInstance_34().h5b_1) && !(textDirection === _this__u8e3s4.g58_1));
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = (!(platformStyle == null) && !equals(platformStyle, _this__u8e3s4.j58_1));
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      tmp_2 = (!(lineHeightStyle == null) && !equals(lineHeightStyle, _this__u8e3s4.k58_1));
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = (!(lineBreak === Companion_getInstance_43().y5b_1) && !(lineBreak === _this__u8e3s4.l58_1));
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = (!(hyphens === Companion_getInstance_27().b5c_1) && !(hyphens === _this__u8e3s4.m58_1));
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = (!(textMotion == null) && !equals(textMotion, _this__u8e3s4.n58_1));
    }
    var requiresAlloc = tmp;
    if (!requiresAlloc) {
      return _this__u8e3s4;
    }
    var tmp_8;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(lineHeight), new Long(0, 0))) {
      tmp_8 = _this__u8e3s4.h58_1;
    } else {
      tmp_8 = lineHeight;
    }
    var tmp3_lineHeight = tmp_8;
    var tmp4_textIndent = textIndent == null ? _this__u8e3s4.i58_1 : textIndent;
    var tmp5_textAlign = !(textAlign === Companion_getInstance_32().u5b_1) ? textAlign : _this__u8e3s4.f58_1;
    var tmp6_textDirection = !(textDirection === Companion_getInstance_34().h5b_1) ? textDirection : _this__u8e3s4.g58_1;
    var tmp7_platformStyle = mergePlatformStyle(_this__u8e3s4, platformStyle);
    var tmp8_lineHeightStyle = lineHeightStyle == null ? _this__u8e3s4.k58_1 : lineHeightStyle;
    var tmp9_lineBreak = !(lineBreak === Companion_getInstance_43().y5b_1) ? lineBreak : _this__u8e3s4.l58_1;
    var tmp10_hyphens = !(hyphens === Companion_getInstance_27().b5c_1) ? hyphens : _this__u8e3s4.m58_1;
    var tmp11_textMotion = textMotion == null ? _this__u8e3s4.n58_1 : textMotion;
    return new ParagraphStyle_0(tmp5_textAlign, tmp6_textDirection, tmp3_lineHeight, tmp4_textIndent, tmp7_platformStyle, tmp8_lineHeightStyle, tmp9_lineBreak, tmp10_hyphens, tmp11_textMotion);
  }
  function mergePlatformStyle(_this__u8e3s4, other) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    if (_this__u8e3s4.j58_1 == null)
      return other;
    if (other == null)
      return _this__u8e3s4.j58_1;
    return _this__u8e3s4.j58_1.e5c(other);
  }
  function resolveParagraphStyleDefaults(style, direction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp = style.f58_1 === Companion_getInstance_32().u5b_1 ? Companion_getInstance_32().s5b_1 : style.f58_1;
    var tmp_0 = resolveTextDirection_0(direction, style.g58_1);
    var tmp_1;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = style.h58_1;
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0))) {
      tmp_1 = get_DefaultLineHeight();
    } else {
      tmp_1 = style.h58_1;
    }
    var tmp_2 = tmp_1;
    var tmp0_elvis_lhs = style.i58_1;
    var tmp_3 = tmp0_elvis_lhs == null ? Companion_getInstance_37().f5c_1 : tmp0_elvis_lhs;
    var tmp_4 = style.l58_1 === Companion_getInstance_43().y5b_1 ? Companion_getInstance_43().v5b_1 : style.l58_1;
    var tmp_5 = style.m58_1 === Companion_getInstance_27().b5c_1 ? Companion_getInstance_27().z5b_1 : style.m58_1;
    var tmp1_elvis_lhs = style.n58_1;
    return new ParagraphStyle_0(tmp, tmp_0, tmp_2, tmp_3, style.j58_1, style.k58_1, tmp_4, tmp_5, tmp1_elvis_lhs == null ? Companion_getInstance_44().g5c_1 : tmp1_elvis_lhs);
  }
  var properties_initialized_ParagraphStyle_kt_y6w405;
  function _init_properties_ParagraphStyle_kt__lbx7er() {
    if (!properties_initialized_ParagraphStyle_kt_y6w405) {
      properties_initialized_ParagraphStyle_kt_y6w405 = true;
      DefaultLineHeight = Companion_getInstance_1().f3s_1;
      androidx_compose_ui_text_ParagraphStyle$stable = 0;
    }
  }
  var androidx_compose_ui_text_Placeholder$stable;
  function Placeholder() {
  }
  protoOf(Placeholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Placeholder))
      return false;
    if (!equals(this.i5c_1, other.i5c_1))
      return false;
    if (!equals(this.j5c_1, other.j5c_1))
      return false;
    if (!(this.k5c_1 === other.k5c_1))
      return false;
    return true;
  };
  protoOf(Placeholder).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.i5c_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.j5c_1) | 0;
    result = imul(31, result) + PlaceholderVerticalAlign__hashCode_impl_1c0k16(this.k5c_1) | 0;
    return result;
  };
  protoOf(Placeholder).toString = function () {
    return 'Placeholder(' + ('width=' + TextUnit__toString_impl_51ghw0(this.i5c_1) + ', ') + ('height=' + TextUnit__toString_impl_51ghw0(this.j5c_1) + ', ') + ('placeholderVerticalAlign=' + PlaceholderVerticalAlign__toString_impl_kf5crp(this.k5c_1)) + ')';
  };
  function _PlaceholderVerticalAlign___init__impl__mll0or(value) {
    return value;
  }
  function PlaceholderVerticalAlign__toString_impl_kf5crp($this) {
    return $this === Companion_getInstance_14().l5c_1 ? 'AboveBaseline' : $this === Companion_getInstance_14().m5c_1 ? 'Top' : $this === Companion_getInstance_14().n5c_1 ? 'Bottom' : $this === Companion_getInstance_14().o5c_1 ? 'Center' : $this === Companion_getInstance_14().p5c_1 ? 'TextTop' : $this === Companion_getInstance_14().q5c_1 ? 'TextBottom' : $this === Companion_getInstance_14().r5c_1 ? 'TextCenter' : 'Invalid';
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.l5c_1 = _PlaceholderVerticalAlign___init__impl__mll0or(1);
    this.m5c_1 = _PlaceholderVerticalAlign___init__impl__mll0or(2);
    this.n5c_1 = _PlaceholderVerticalAlign___init__impl__mll0or(3);
    this.o5c_1 = _PlaceholderVerticalAlign___init__impl__mll0or(4);
    this.p5c_1 = _PlaceholderVerticalAlign___init__impl__mll0or(5);
    this.q5c_1 = _PlaceholderVerticalAlign___init__impl__mll0or(6);
    this.r5c_1 = _PlaceholderVerticalAlign___init__impl__mll0or(7);
  }
  var Companion_instance_1;
  function Companion_getInstance_14() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function PlaceholderVerticalAlign__hashCode_impl_1c0k16($this) {
    return $this;
  }
  function get_AnnotatedStringSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return AnnotatedStringSaver;
  }
  var AnnotatedStringSaver;
  function get_AnnotationRangeListSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return AnnotationRangeListSaver;
  }
  var AnnotationRangeListSaver;
  function get_AnnotationRangeSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return AnnotationRangeSaver;
  }
  var AnnotationRangeSaver;
  function get_VerbatimTtsAnnotationSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return VerbatimTtsAnnotationSaver;
  }
  var VerbatimTtsAnnotationSaver;
  function get_UrlAnnotationSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return UrlAnnotationSaver;
  }
  var UrlAnnotationSaver;
  function get_LinkSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LinkSaver;
  }
  var LinkSaver;
  function get_ClickableSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ClickableSaver;
  }
  var ClickableSaver;
  function get_ParagraphStyleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ParagraphStyleSaver;
  }
  var ParagraphStyleSaver;
  function get_SpanStyleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return SpanStyleSaver;
  }
  var SpanStyleSaver;
  function get_TextLinkStylesSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextLinkStylesSaver;
  }
  var TextLinkStylesSaver;
  function get_TextDecorationSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextDecorationSaver;
  }
  var TextDecorationSaver;
  function get_TextGeometricTransformSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextGeometricTransformSaver;
  }
  var TextGeometricTransformSaver;
  function get_TextIndentSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextIndentSaver;
  }
  var TextIndentSaver;
  function get_FontWeightSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return FontWeightSaver;
  }
  var FontWeightSaver;
  function get_BaselineShiftSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return BaselineShiftSaver;
  }
  var BaselineShiftSaver;
  var TextRangeSaver;
  function get_ShadowSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ShadowSaver;
  }
  var ShadowSaver;
  function get_ColorSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ColorSaver;
  }
  var ColorSaver;
  function get_TextAlignSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextAlignSaver;
  }
  var TextAlignSaver;
  function get_TextDirectionSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextDirectionSaver;
  }
  var TextDirectionSaver;
  function get_HyphensSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return HyphensSaver;
  }
  var HyphensSaver;
  function get_FontStyleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return FontStyleSaver;
  }
  var FontStyleSaver;
  function get_FontSynthesisSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return FontSynthesisSaver;
  }
  var FontSynthesisSaver;
  function get_TextUnitSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextUnitSaver;
  }
  var TextUnitSaver;
  function get_TextUnitTypeSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextUnitTypeSaver;
  }
  var TextUnitTypeSaver;
  function get_OffsetSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return OffsetSaver;
  }
  var OffsetSaver;
  function get_LocaleListSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LocaleListSaver;
  }
  var LocaleListSaver;
  function get_LocaleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LocaleSaver;
  }
  var LocaleSaver;
  function get_LineHeightStyleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LineHeightStyleSaver;
  }
  var LineHeightStyleSaver;
  function get_LineHeightStyleAlignmentSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LineHeightStyleAlignmentSaver;
  }
  var LineHeightStyleAlignmentSaver;
  function get_LineHeightStyleTrimSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LineHeightStyleTrimSaver;
  }
  var LineHeightStyleTrimSaver;
  function get_LineHeightStyleModeSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LineHeightStyleModeSaver;
  }
  var LineHeightStyleModeSaver;
  function save(value) {
    _init_properties_Savers_kt__o6r3ry();
    return value;
  }
  function save_0(value, saver, scope) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.with' call
      tmp = saver.r56(scope, value);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  var AnnotationType_Paragraph_instance;
  var AnnotationType_Span_instance;
  var AnnotationType_VerbatimTts_instance;
  var AnnotationType_Url_instance;
  var AnnotationType_Link_instance;
  var AnnotationType_Clickable_instance;
  var AnnotationType_String_instance;
  var AnnotationType_entriesInitialized;
  function AnnotationType_initEntries() {
    if (AnnotationType_entriesInitialized)
      return Unit_instance;
    AnnotationType_entriesInitialized = true;
    AnnotationType_Paragraph_instance = new AnnotationType('Paragraph', 0);
    AnnotationType_Span_instance = new AnnotationType('Span', 1);
    AnnotationType_VerbatimTts_instance = new AnnotationType('VerbatimTts', 2);
    AnnotationType_Url_instance = new AnnotationType('Url', 3);
    AnnotationType_Link_instance = new AnnotationType('Link', 4);
    AnnotationType_Clickable_instance = new AnnotationType('Clickable', 5);
    AnnotationType_String_instance = new AnnotationType('String', 6);
  }
  function AnnotationType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function get_Saver(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextAlignSaver();
  }
  function get_Saver_0(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextDirectionSaver();
  }
  function get_Saver_1(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextUnitSaver();
  }
  function get_Saver_2(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextIndentSaver();
  }
  function get_Saver_3(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_LineHeightStyleSaver();
  }
  function get_Saver_4(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_HyphensSaver();
  }
  function get_Saver_5(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_ColorSaver();
  }
  function get_Saver_6(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_FontWeightSaver();
  }
  function get_Saver_7(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_FontStyleSaver();
  }
  function get_Saver_8(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_FontSynthesisSaver();
  }
  function get_Saver_9(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_BaselineShiftSaver();
  }
  function get_Saver_10(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextGeometricTransformSaver();
  }
  function get_Saver_11(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_LocaleListSaver();
  }
  function get_Saver_12(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextDecorationSaver();
  }
  function get_Saver_13(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_ShadowSaver();
  }
  function get_Saver_14(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_OffsetSaver();
  }
  function NonNullValueClassSaver() {
  }
  function NonNullValueClassSaver_0(save, restore) {
    _init_properties_Savers_kt__o6r3ry();
    return new NonNullValueClassSaver$1(save, restore);
  }
  function get_Saver_15(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextUnitTypeSaver();
  }
  function get_Saver_16(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_LocaleSaver();
  }
  function get_Saver_17(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_LineHeightStyleAlignmentSaver();
  }
  function get_Saver_18(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_LineHeightStyleTrimSaver();
  }
  function get_Saver_19(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_LineHeightStyleModeSaver();
  }
  function AnnotatedStringSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(it.a58_1), save_0(it.z57_1, get_AnnotationRangeListSaver(), $this$Saver)]);
  }
  function AnnotatedStringSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.m(1);
    var tmp2 = get_AnnotationRangeListSaver();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_1 = tmp2.h56(tmp0);
        tmp_0 = (tmp_1 == null ? true : isInterface(tmp_1, KtList)) ? tmp_1 : THROW_CCE();
      }
      tmp$ret$0 = tmp_0;
    }
    var annotationsOrNull = tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(0);
    var tmp_2;
    if (tmp0_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_2 = typeof tmp0_safe_receiver === 'string' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$5 = tmp_2;
    var tmp0_text = ensureNotNull(tmp$ret$5);
    return new AnnotatedString(annotationsOrNull, tmp0_text);
  }
  function AnnotationRangeListSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var target = ArrayList_init_$Create$_0(it.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = it.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = it.m(index);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = save_0(item, get_AnnotationRangeSaver(), $this$Saver);
        target.h(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function AnnotationRangeListSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var target = ArrayList_init_$Create$_0(list.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = list.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = list.m(index);
        var tmp2 = get_AnnotationRangeSaver();
        var tmp$ret$4;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp;
          if (equals(item, false)) {
            tmp = !isInterface(tmp2, NonNullValueClassSaver);
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$4 = null;
            break $l$block;
          }
          var tmp_0;
          if (item == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.with' call
            var tmp_1 = tmp2.h56(item);
            tmp_0 = (tmp_1 == null ? true : tmp_1 instanceof Range) ? tmp_1 : THROW_CCE();
          }
          tmp$ret$4 = tmp_0;
        }
        var range = ensureNotNull(tmp$ret$4);
        // Inline function 'kotlin.collections.plusAssign' call
        target.h(range);
      }
       while (inductionVariable <= last);
    return target;
  }
  function AnnotationRangeSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp0_subject = it.r57_1;
    var tmp;
    if (tmp0_subject instanceof ParagraphStyle_0) {
      tmp = AnnotationType_Paragraph_getInstance();
    } else {
      if (tmp0_subject instanceof SpanStyle) {
        tmp = AnnotationType_Span_getInstance();
      } else {
        if (tmp0_subject instanceof VerbatimTtsAnnotation) {
          tmp = AnnotationType_VerbatimTts_getInstance();
        } else {
          if (tmp0_subject instanceof UrlAnnotation) {
            tmp = AnnotationType_Url_getInstance();
          } else {
            if (tmp0_subject instanceof Url) {
              tmp = AnnotationType_Link_getInstance();
            } else {
              if (tmp0_subject instanceof Clickable) {
                tmp = AnnotationType_Clickable_getInstance();
              } else {
                if (tmp0_subject instanceof StringAnnotation) {
                  tmp = AnnotationType_String_getInstance();
                } else {
                  throw UnsupportedOperationException_init_$Create$();
                }
              }
            }
          }
        }
      }
    }
    var marker = tmp;
    var tmp_0;
    switch (marker.i2_1) {
      case 0:
        var tmp_1 = it.r57_1;
        tmp_0 = save_0(tmp_1 instanceof ParagraphStyle_0 ? tmp_1 : THROW_CCE(), get_ParagraphStyleSaver(), $this$Saver);
        break;
      case 1:
        var tmp_2 = it.r57_1;
        tmp_0 = save_0(tmp_2 instanceof SpanStyle ? tmp_2 : THROW_CCE(), get_SpanStyleSaver(), $this$Saver);
        break;
      case 2:
        var tmp_3 = it.r57_1;
        tmp_0 = save_0(tmp_3 instanceof VerbatimTtsAnnotation ? tmp_3 : THROW_CCE(), get_VerbatimTtsAnnotationSaver(), $this$Saver);
        break;
      case 3:
        var tmp_4 = it.r57_1;
        tmp_0 = save_0(tmp_4 instanceof UrlAnnotation ? tmp_4 : THROW_CCE(), get_UrlAnnotationSaver(), $this$Saver);
        break;
      case 4:
        var tmp_5 = it.r57_1;
        tmp_0 = save_0(tmp_5 instanceof Url ? tmp_5 : THROW_CCE(), get_LinkSaver(), $this$Saver);
        break;
      case 5:
        var tmp_6 = it.r57_1;
        tmp_0 = save_0(tmp_6 instanceof Clickable ? tmp_6 : THROW_CCE(), get_ClickableSaver(), $this$Saver);
        break;
      case 6:
        var tmp_7 = it.r57_1;
        tmp_0 = save(_StringAnnotation___get_value__impl__v4s4ej(tmp_7 instanceof StringAnnotation ? tmp_7.s5c_1 : THROW_CCE()));
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var item = tmp_0;
    return arrayListOf([save(marker), item, save(it.s57_1), save(it.t57_1), save(it.u57_1)]);
  }
  function AnnotationRangeSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = tmp0_safe_receiver instanceof AnnotationType ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$0 = tmp;
    var marker = ensureNotNull(tmp$ret$0);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.m(2);
    var tmp_0;
    if (tmp0_safe_receiver_0 == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = typeof tmp0_safe_receiver_0 === 'number' ? tmp0_safe_receiver_0 : THROW_CCE();
    }
    var tmp$ret$3 = tmp_0;
    var start = ensureNotNull(tmp$ret$3);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_1 = list.m(3);
    var tmp_1;
    if (tmp0_safe_receiver_1 == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_1 = typeof tmp0_safe_receiver_1 === 'number' ? tmp0_safe_receiver_1 : THROW_CCE();
    }
    var tmp$ret$6 = tmp_1;
    var end = ensureNotNull(tmp$ret$6);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_2 = list.m(4);
    var tmp_2;
    if (tmp0_safe_receiver_2 == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_2 = typeof tmp0_safe_receiver_2 === 'string' ? tmp0_safe_receiver_2 : THROW_CCE();
    }
    var tmp$ret$9 = tmp_2;
    var tag = ensureNotNull(tmp$ret$9);
    var tmp_3;
    switch (marker.i2_1) {
      case 0:
        var tmp0 = list.m(1);
        var tmp2 = get_ParagraphStyleSaver();
        var tmp$ret$12;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp_4;
          if (equals(tmp0, false)) {
            tmp_4 = !isInterface(tmp2, NonNullValueClassSaver);
          } else {
            tmp_4 = false;
          }
          if (tmp_4) {
            tmp$ret$12 = null;
            break $l$block;
          }
          var tmp_5;
          if (tmp0 == null) {
            tmp_5 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.with' call
            var tmp_6 = tmp2.h56(tmp0);
            tmp_5 = (tmp_6 == null ? true : tmp_6 instanceof ParagraphStyle_0) ? tmp_6 : THROW_CCE();
          }
          tmp$ret$12 = tmp_5;
        }

        var item = ensureNotNull(tmp$ret$12);
        tmp_3 = new Range(item, start, end, tag);
        break;
      case 1:
        var tmp0_0 = list.m(1);
        var tmp2_0 = get_SpanStyleSaver();
        var tmp$ret$17;
        $l$block_0: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp_7;
          if (equals(tmp0_0, false)) {
            tmp_7 = !isInterface(tmp2_0, NonNullValueClassSaver);
          } else {
            tmp_7 = false;
          }
          if (tmp_7) {
            tmp$ret$17 = null;
            break $l$block_0;
          }
          var tmp_8;
          if (tmp0_0 == null) {
            tmp_8 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.with' call
            var tmp_9 = tmp2_0.h56(tmp0_0);
            tmp_8 = (tmp_9 == null ? true : tmp_9 instanceof SpanStyle) ? tmp_9 : THROW_CCE();
          }
          tmp$ret$17 = tmp_8;
        }

        var item_0 = ensureNotNull(tmp$ret$17);
        tmp_3 = new Range(item_0, start, end, tag);
        break;
      case 2:
        var tmp0_1 = list.m(1);
        var tmp2_1 = get_VerbatimTtsAnnotationSaver();
        var tmp$ret$22;
        $l$block_1: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp_10;
          if (equals(tmp0_1, false)) {
            tmp_10 = !isInterface(tmp2_1, NonNullValueClassSaver);
          } else {
            tmp_10 = false;
          }
          if (tmp_10) {
            tmp$ret$22 = null;
            break $l$block_1;
          }
          var tmp_11;
          if (tmp0_1 == null) {
            tmp_11 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.with' call
            var tmp_12 = tmp2_1.h56(tmp0_1);
            tmp_11 = (tmp_12 == null ? true : tmp_12 instanceof VerbatimTtsAnnotation) ? tmp_12 : THROW_CCE();
          }
          tmp$ret$22 = tmp_11;
        }

        var item_1 = ensureNotNull(tmp$ret$22);
        tmp_3 = new Range(item_1, start, end, tag);
        break;
      case 3:
        var tmp0_2 = list.m(1);
        var tmp2_2 = get_UrlAnnotationSaver();
        var tmp$ret$27;
        $l$block_2: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp_13;
          if (equals(tmp0_2, false)) {
            tmp_13 = !isInterface(tmp2_2, NonNullValueClassSaver);
          } else {
            tmp_13 = false;
          }
          if (tmp_13) {
            tmp$ret$27 = null;
            break $l$block_2;
          }
          var tmp_14;
          if (tmp0_2 == null) {
            tmp_14 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.with' call
            var tmp_15 = tmp2_2.h56(tmp0_2);
            tmp_14 = (tmp_15 == null ? true : tmp_15 instanceof UrlAnnotation) ? tmp_15 : THROW_CCE();
          }
          tmp$ret$27 = tmp_14;
        }

        var item_2 = ensureNotNull(tmp$ret$27);
        tmp_3 = new Range(item_2, start, end, tag);
        break;
      case 4:
        var tmp0_3 = list.m(1);
        var tmp2_3 = get_LinkSaver();
        var tmp$ret$32;
        $l$block_3: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp_16;
          if (equals(tmp0_3, false)) {
            tmp_16 = !isInterface(tmp2_3, NonNullValueClassSaver);
          } else {
            tmp_16 = false;
          }
          if (tmp_16) {
            tmp$ret$32 = null;
            break $l$block_3;
          }
          var tmp_17;
          if (tmp0_3 == null) {
            tmp_17 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.with' call
            var tmp_18 = tmp2_3.h56(tmp0_3);
            tmp_17 = (tmp_18 == null ? true : tmp_18 instanceof Url) ? tmp_18 : THROW_CCE();
          }
          tmp$ret$32 = tmp_17;
        }

        var item_3 = ensureNotNull(tmp$ret$32);
        tmp_3 = new Range(item_3, start, end, tag);
        break;
      case 5:
        var tmp0_4 = list.m(1);
        var tmp2_4 = get_ClickableSaver();
        var tmp$ret$37;
        $l$block_4: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp_19;
          if (equals(tmp0_4, false)) {
            tmp_19 = !isInterface(tmp2_4, NonNullValueClassSaver);
          } else {
            tmp_19 = false;
          }
          if (tmp_19) {
            tmp$ret$37 = null;
            break $l$block_4;
          }
          var tmp_20;
          if (tmp0_4 == null) {
            tmp_20 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.with' call
            var tmp_21 = tmp2_4.h56(tmp0_4);
            tmp_20 = (tmp_21 == null ? true : tmp_21 instanceof Clickable) ? tmp_21 : THROW_CCE();
          }
          tmp$ret$37 = tmp_20;
        }

        var item_4 = ensureNotNull(tmp$ret$37);
        tmp_3 = new Range(item_4, start, end, tag);
        break;
      case 6:
        // Inline function 'androidx.compose.ui.text.restore' call

        var tmp0_safe_receiver_3 = list.m(1);
        var tmp_22;
        if (tmp0_safe_receiver_3 == null) {
          tmp_22 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_22 = typeof tmp0_safe_receiver_3 === 'string' ? tmp0_safe_receiver_3 : THROW_CCE();
        }

        var tmp$ret$42 = tmp_22;
        var item_5 = ensureNotNull(tmp$ret$42);
        tmp_3 = new Range(new StringAnnotation(_StringAnnotation___init__impl__o6a5i7(item_5)), start, end, tag);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_3;
  }
  function VerbatimTtsAnnotationSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return save(it.t5c_1);
  }
  function VerbatimTtsAnnotationSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp;
    if (it == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = typeof it === 'string' ? it : THROW_CCE();
    }
    var tmp$ret$0 = tmp;
    return new VerbatimTtsAnnotation(ensureNotNull(tmp$ret$0));
  }
  function UrlAnnotationSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return save(it.u5c_1);
  }
  function UrlAnnotationSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp;
    if (it == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = typeof it === 'string' ? it : THROW_CCE();
    }
    var tmp$ret$0 = tmp;
    return new UrlAnnotation(ensureNotNull(tmp$ret$0));
  }
  function LinkSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(it.q58_1), save_0(it.r58_1, get_TextLinkStylesSaver(), $this$Saver)]);
  }
  function LinkSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = typeof tmp0_safe_receiver === 'string' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$0 = tmp;
    var url = ensureNotNull(tmp$ret$0);
    var tmp0 = list.m(1);
    var tmp2 = get_TextLinkStylesSaver();
    var tmp$ret$3;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_0;
      if (equals(tmp0, false)) {
        tmp_0 = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$3 = null;
        break $l$block;
      }
      var tmp_1;
      if (tmp0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_2 = tmp2.h56(tmp0);
        tmp_1 = (tmp_2 == null ? true : tmp_2 instanceof TextLinkStyles) ? tmp_2 : THROW_CCE();
      }
      tmp$ret$3 = tmp_1;
    }
    var stylesOrNull = tmp$ret$3;
    return new Url(url, stylesOrNull);
  }
  function ClickableSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(it.t58_1), save_0(it.u58_1, get_TextLinkStylesSaver(), $this$Saver)]);
  }
  function ClickableSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = typeof tmp0_safe_receiver === 'string' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$0 = tmp;
    var tag = ensureNotNull(tmp$ret$0);
    var tmp0 = list.m(1);
    var tmp2 = get_TextLinkStylesSaver();
    var tmp$ret$3;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_0;
      if (equals(tmp0, false)) {
        tmp_0 = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$3 = null;
        break $l$block;
      }
      var tmp_1;
      if (tmp0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_2 = tmp2.h56(tmp0);
        tmp_1 = (tmp_2 == null ? true : tmp_2 instanceof TextLinkStyles) ? tmp_2 : THROW_CCE();
      }
      tmp$ret$3 = tmp_1;
    }
    var stylesOrNull = tmp$ret$3;
    return new Clickable(tag, stylesOrNull, null);
  }
  function ParagraphStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(new TextAlign(it.f58_1), get_Saver(Companion_getInstance_32()), $this$Saver), save_0(new TextDirection(it.g58_1), get_Saver_0(Companion_getInstance_34()), $this$Saver), save_0(new TextUnit(it.h58_1), get_Saver_1(Companion_getInstance_1()), $this$Saver), save_0(it.i58_1, get_Saver_2(Companion_getInstance_37()), $this$Saver), save_0(it.j58_1, get_Saver_20(Companion_getInstance_42()), $this$Saver), save_0(it.k58_1, get_Saver_3(Companion_getInstance_31()), $this$Saver), save_0(new LineBreak(it.l58_1), get_Saver_21(Companion_getInstance_43()), $this$Saver), save_0(new Hyphens(it.m58_1), get_Saver_4(Companion_getInstance_27()), $this$Saver), save_0(it.n58_1, get_Saver_22(Companion_getInstance_44()), $this$Saver)]);
  }
  function ParagraphStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.m(0);
    var tmp2 = get_Saver(Companion_getInstance_32());
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_1 = tmp2.h56(tmp0);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof TextAlign) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.v5c_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new TextAlign(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.v5c_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new TextAlign(tmp_6));
    var tmp0_0 = list.m(1);
    var tmp2_0 = get_Saver_0(Companion_getInstance_34());
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_8;
      if (equals(tmp0_0, false)) {
        tmp_8 = !isInterface(tmp2_0, NonNullValueClassSaver);
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_9;
      if (tmp0_0 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_10 = tmp2_0.h56(tmp0_0);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof TextDirection) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.w5c_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new TextDirection(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.w5c_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    var tmp_16 = ensureNotNull(tmp_15 == null ? null : new TextDirection(tmp_15));
    var tmp0_1 = list.m(2);
    var tmp2_1 = get_Saver_1(Companion_getInstance_1());
    var tmp$ret$10;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_17;
      if (equals(tmp0_1, false)) {
        tmp_17 = !isInterface(tmp2_1, NonNullValueClassSaver);
      } else {
        tmp_17 = false;
      }
      if (tmp_17) {
        tmp$ret$10 = null;
        break $l$block_1;
      }
      var tmp_18;
      if (tmp0_1 == null) {
        tmp_18 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_19 = tmp2_1.h56(tmp0_1);
        var tmp_20;
        if (tmp_19 == null ? true : tmp_19 instanceof TextUnit) {
          var tmp_21 = tmp_19;
          tmp_20 = tmp_21 == null ? null : tmp_21.h3s_1;
        } else {
          tmp_20 = THROW_CCE();
        }
        var tmp_22 = tmp_20;
        var tmp_23 = tmp_22 == null ? null : new TextUnit(tmp_22);
        tmp_18 = tmp_23 == null ? null : tmp_23.h3s_1;
      }
      tmp$ret$10 = tmp_18;
    }
    var tmp_24 = tmp$ret$10;
    var tmp_25 = ensureNotNull(tmp_24 == null ? null : new TextUnit(tmp_24));
    var tmp0_2 = list.m(3);
    var tmp2_2 = get_Saver_2(Companion_getInstance_37());
    var tmp$ret$15;
    $l$block_2: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_26;
      if (equals(tmp0_2, false)) {
        tmp_26 = !isInterface(tmp2_2, NonNullValueClassSaver);
      } else {
        tmp_26 = false;
      }
      if (tmp_26) {
        tmp$ret$15 = null;
        break $l$block_2;
      }
      var tmp_27;
      if (tmp0_2 == null) {
        tmp_27 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_28 = tmp2_2.h56(tmp0_2);
        tmp_27 = (tmp_28 == null ? true : tmp_28 instanceof TextIndent_0) ? tmp_28 : THROW_CCE();
      }
      tmp$ret$15 = tmp_27;
    }
    var tmp_29 = tmp$ret$15;
    var tmp0_3 = list.m(4);
    var tmp2_3 = get_Saver_20(Companion_getInstance_42());
    var tmp$ret$20;
    $l$block_3: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_30;
      if (equals(tmp0_3, false)) {
        tmp_30 = !isInterface(tmp2_3, NonNullValueClassSaver);
      } else {
        tmp_30 = false;
      }
      if (tmp_30) {
        tmp$ret$20 = null;
        break $l$block_3;
      }
      var tmp_31;
      if (tmp0_3 == null) {
        tmp_31 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_32 = tmp2_3.h56(tmp0_3);
        tmp_31 = (tmp_32 == null ? true : tmp_32 instanceof PlatformParagraphStyle) ? tmp_32 : THROW_CCE();
      }
      tmp$ret$20 = tmp_31;
    }
    var tmp_33 = tmp$ret$20;
    var tmp0_4 = list.m(5);
    var tmp2_4 = get_Saver_3(Companion_getInstance_31());
    var tmp$ret$25;
    $l$block_4: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_34;
      if (equals(tmp0_4, false)) {
        tmp_34 = !isInterface(tmp2_4, NonNullValueClassSaver);
      } else {
        tmp_34 = false;
      }
      if (tmp_34) {
        tmp$ret$25 = null;
        break $l$block_4;
      }
      var tmp_35;
      if (tmp0_4 == null) {
        tmp_35 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_36 = tmp2_4.h56(tmp0_4);
        tmp_35 = (tmp_36 == null ? true : tmp_36 instanceof LineHeightStyle) ? tmp_36 : THROW_CCE();
      }
      tmp$ret$25 = tmp_35;
    }
    var tmp_37 = tmp$ret$25;
    var tmp0_5 = list.m(6);
    var tmp2_5 = get_Saver_21(Companion_getInstance_43());
    var tmp$ret$30;
    $l$block_5: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_38;
      if (equals(tmp0_5, false)) {
        tmp_38 = !isInterface(tmp2_5, NonNullValueClassSaver);
      } else {
        tmp_38 = false;
      }
      if (tmp_38) {
        tmp$ret$30 = null;
        break $l$block_5;
      }
      var tmp_39;
      if (tmp0_5 == null) {
        tmp_39 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_40 = tmp2_5.h56(tmp0_5);
        var tmp_41;
        if (tmp_40 == null ? true : tmp_40 instanceof LineBreak) {
          var tmp_42 = tmp_40;
          tmp_41 = tmp_42 == null ? null : tmp_42.x5c_1;
        } else {
          tmp_41 = THROW_CCE();
        }
        var tmp_43 = tmp_41;
        var tmp_44 = tmp_43 == null ? null : new LineBreak(tmp_43);
        tmp_39 = tmp_44 == null ? null : tmp_44.x5c_1;
      }
      tmp$ret$30 = tmp_39;
    }
    var tmp_45 = tmp$ret$30;
    var tmp_46 = ensureNotNull(tmp_45 == null ? null : new LineBreak(tmp_45));
    var tmp0_6 = list.m(7);
    var tmp2_6 = get_Saver_4(Companion_getInstance_27());
    var tmp$ret$35;
    $l$block_6: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_47;
      if (equals(tmp0_6, false)) {
        tmp_47 = !isInterface(tmp2_6, NonNullValueClassSaver);
      } else {
        tmp_47 = false;
      }
      if (tmp_47) {
        tmp$ret$35 = null;
        break $l$block_6;
      }
      var tmp_48;
      if (tmp0_6 == null) {
        tmp_48 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_49 = tmp2_6.h56(tmp0_6);
        var tmp_50;
        if (tmp_49 == null ? true : tmp_49 instanceof Hyphens) {
          var tmp_51 = tmp_49;
          tmp_50 = tmp_51 == null ? null : tmp_51.y5c_1;
        } else {
          tmp_50 = THROW_CCE();
        }
        var tmp_52 = tmp_50;
        var tmp_53 = tmp_52 == null ? null : new Hyphens(tmp_52);
        tmp_48 = tmp_53 == null ? null : tmp_53.y5c_1;
      }
      tmp$ret$35 = tmp_48;
    }
    var tmp_54 = tmp$ret$35;
    var tmp_55 = ensureNotNull(tmp_54 == null ? null : new Hyphens(tmp_54));
    var tmp0_7 = list.m(8);
    var tmp2_7 = get_Saver_22(Companion_getInstance_44());
    var tmp$ret$40;
    $l$block_7: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_56;
      if (equals(tmp0_7, false)) {
        tmp_56 = !isInterface(tmp2_7, NonNullValueClassSaver);
      } else {
        tmp_56 = false;
      }
      if (tmp_56) {
        tmp$ret$40 = null;
        break $l$block_7;
      }
      var tmp_57;
      if (tmp0_7 == null) {
        tmp_57 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_58 = tmp2_7.h56(tmp0_7);
        tmp_57 = (tmp_58 == null ? true : tmp_58 instanceof TextMotion) ? tmp_58 : THROW_CCE();
      }
      tmp$ret$40 = tmp_57;
    }
    return new ParagraphStyle_0(tmp_7.v5c_1, tmp_16.w5c_1, tmp_25.h3s_1, tmp_29, tmp_33, tmp_37, tmp_46.x5c_1, tmp_55.y5c_1, tmp$ret$40);
  }
  function SpanStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp = save_0(new Color(it.z4h()), get_Saver_5(Companion_getInstance()), $this$Saver);
    var tmp_0 = save_0(new TextUnit(it.a5d_1), get_Saver_1(Companion_getInstance_1()), $this$Saver);
    var tmp_1 = save_0(it.b5d_1, get_Saver_6(Companion_getInstance_23()), $this$Saver);
    var tmp_2 = it.c5d_1;
    var tmp_3 = save_0(tmp_2 == null ? null : new FontStyle(tmp_2), get_Saver_7(Companion_getInstance_21()), $this$Saver);
    var tmp_4 = it.d5d_1;
    var tmp_5 = save_0(tmp_4 == null ? null : new FontSynthesis(tmp_4), get_Saver_8(Companion_getInstance_22()), $this$Saver);
    var tmp_6 = save(-1);
    var tmp_7 = save(it.f5d_1);
    var tmp_8 = save_0(new TextUnit(it.g5d_1), get_Saver_1(Companion_getInstance_1()), $this$Saver);
    var tmp_9 = it.h5d_1;
    return arrayListOf([tmp, tmp_0, tmp_1, tmp_3, tmp_5, tmp_6, tmp_7, tmp_8, save_0(tmp_9 == null ? null : new BaselineShift(tmp_9), get_Saver_9(Companion_getInstance_26()), $this$Saver), save_0(it.i5d_1, get_Saver_10(Companion_getInstance_36()), $this$Saver), save_0(it.j5d_1, get_Saver_11(Companion_getInstance_25()), $this$Saver), save_0(new Color(it.k5d_1), get_Saver_5(Companion_getInstance()), $this$Saver), save_0(it.l5d_1, get_Saver_12(Companion_getInstance_33()), $this$Saver), save_0(it.m5d_1, get_Saver_13(Companion_getInstance_2()), $this$Saver)]);
  }
  function SpanStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.m(0);
    var tmp2 = get_Saver_5(Companion_getInstance());
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_1 = tmp2.h56(tmp0);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof Color) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.f4l_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new Color(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.f4l_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new Color(tmp_6));
    var tmp0_0 = list.m(1);
    var tmp2_0 = get_Saver_1(Companion_getInstance_1());
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_8;
      if (equals(tmp0_0, false)) {
        tmp_8 = !isInterface(tmp2_0, NonNullValueClassSaver);
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_9;
      if (tmp0_0 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_10 = tmp2_0.h56(tmp0_0);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof TextUnit) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.h3s_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new TextUnit(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.h3s_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    var tmp_16 = ensureNotNull(tmp_15 == null ? null : new TextUnit(tmp_15));
    var tmp0_1 = list.m(2);
    var tmp2_1 = get_Saver_6(Companion_getInstance_23());
    var tmp$ret$10;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_17;
      if (equals(tmp0_1, false)) {
        tmp_17 = !isInterface(tmp2_1, NonNullValueClassSaver);
      } else {
        tmp_17 = false;
      }
      if (tmp_17) {
        tmp$ret$10 = null;
        break $l$block_1;
      }
      var tmp_18;
      if (tmp0_1 == null) {
        tmp_18 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_19 = tmp2_1.h56(tmp0_1);
        tmp_18 = (tmp_19 == null ? true : tmp_19 instanceof FontWeight) ? tmp_19 : THROW_CCE();
      }
      tmp$ret$10 = tmp_18;
    }
    var tmp_20 = tmp$ret$10;
    var tmp0_2 = list.m(3);
    var tmp2_2 = get_Saver_7(Companion_getInstance_21());
    var tmp$ret$15;
    $l$block_2: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_21;
      if (equals(tmp0_2, false)) {
        tmp_21 = !isInterface(tmp2_2, NonNullValueClassSaver);
      } else {
        tmp_21 = false;
      }
      if (tmp_21) {
        tmp$ret$15 = null;
        break $l$block_2;
      }
      var tmp_22;
      if (tmp0_2 == null) {
        tmp_22 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_23 = tmp2_2.h56(tmp0_2);
        var tmp_24;
        if (tmp_23 == null ? true : tmp_23 instanceof FontStyle) {
          var tmp_25 = tmp_23;
          tmp_24 = tmp_25 == null ? null : tmp_25.p5d_1;
        } else {
          tmp_24 = THROW_CCE();
        }
        var tmp_26 = tmp_24;
        var tmp_27 = tmp_26 == null ? null : new FontStyle(tmp_26);
        tmp_22 = tmp_27 == null ? null : tmp_27.p5d_1;
      }
      tmp$ret$15 = tmp_22;
    }
    var tmp_28 = tmp$ret$15;
    var tmp0_3 = list.m(4);
    var tmp2_3 = get_Saver_8(Companion_getInstance_22());
    var tmp$ret$20;
    $l$block_3: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_29;
      if (equals(tmp0_3, false)) {
        tmp_29 = !isInterface(tmp2_3, NonNullValueClassSaver);
      } else {
        tmp_29 = false;
      }
      if (tmp_29) {
        tmp$ret$20 = null;
        break $l$block_3;
      }
      var tmp_30;
      if (tmp0_3 == null) {
        tmp_30 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_31 = tmp2_3.h56(tmp0_3);
        var tmp_32;
        if (tmp_31 == null ? true : tmp_31 instanceof FontSynthesis) {
          var tmp_33 = tmp_31;
          tmp_32 = tmp_33 == null ? null : tmp_33.q5d_1;
        } else {
          tmp_32 = THROW_CCE();
        }
        var tmp_34 = tmp_32;
        var tmp_35 = tmp_34 == null ? null : new FontSynthesis(tmp_34);
        tmp_30 = tmp_35 == null ? null : tmp_35.q5d_1;
      }
      tmp$ret$20 = tmp_30;
    }
    var tmp_36 = tmp$ret$20;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(6);
    var tmp_37;
    if (tmp0_safe_receiver == null) {
      tmp_37 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_37 = typeof tmp0_safe_receiver === 'string' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp_38 = tmp_37;
    var tmp0_4 = list.m(7);
    var tmp2_4 = get_Saver_1(Companion_getInstance_1());
    var tmp$ret$28;
    $l$block_4: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_39;
      if (equals(tmp0_4, false)) {
        tmp_39 = !isInterface(tmp2_4, NonNullValueClassSaver);
      } else {
        tmp_39 = false;
      }
      if (tmp_39) {
        tmp$ret$28 = null;
        break $l$block_4;
      }
      var tmp_40;
      if (tmp0_4 == null) {
        tmp_40 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_41 = tmp2_4.h56(tmp0_4);
        var tmp_42;
        if (tmp_41 == null ? true : tmp_41 instanceof TextUnit) {
          var tmp_43 = tmp_41;
          tmp_42 = tmp_43 == null ? null : tmp_43.h3s_1;
        } else {
          tmp_42 = THROW_CCE();
        }
        var tmp_44 = tmp_42;
        var tmp_45 = tmp_44 == null ? null : new TextUnit(tmp_44);
        tmp_40 = tmp_45 == null ? null : tmp_45.h3s_1;
      }
      tmp$ret$28 = tmp_40;
    }
    var tmp_46 = tmp$ret$28;
    var tmp_47 = ensureNotNull(tmp_46 == null ? null : new TextUnit(tmp_46));
    var tmp0_5 = list.m(8);
    var tmp2_5 = get_Saver_9(Companion_getInstance_26());
    var tmp$ret$33;
    $l$block_5: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_48;
      if (equals(tmp0_5, false)) {
        tmp_48 = !isInterface(tmp2_5, NonNullValueClassSaver);
      } else {
        tmp_48 = false;
      }
      if (tmp_48) {
        tmp$ret$33 = null;
        break $l$block_5;
      }
      var tmp_49;
      if (tmp0_5 == null) {
        tmp_49 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_50 = tmp2_5.h56(tmp0_5);
        var tmp_51;
        if (tmp_50 == null ? true : tmp_50 instanceof BaselineShift) {
          var tmp_52 = tmp_50;
          tmp_51 = tmp_52 == null ? null : tmp_52.r5d_1;
        } else {
          tmp_51 = THROW_CCE();
        }
        var tmp_53 = tmp_51;
        var tmp_54 = tmp_53 == null ? null : new BaselineShift(tmp_53);
        tmp_49 = tmp_54 == null ? null : tmp_54.r5d_1;
      }
      tmp$ret$33 = tmp_49;
    }
    var tmp_55 = tmp$ret$33;
    var tmp0_6 = list.m(9);
    var tmp2_6 = get_Saver_10(Companion_getInstance_36());
    var tmp$ret$38;
    $l$block_6: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_56;
      if (equals(tmp0_6, false)) {
        tmp_56 = !isInterface(tmp2_6, NonNullValueClassSaver);
      } else {
        tmp_56 = false;
      }
      if (tmp_56) {
        tmp$ret$38 = null;
        break $l$block_6;
      }
      var tmp_57;
      if (tmp0_6 == null) {
        tmp_57 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_58 = tmp2_6.h56(tmp0_6);
        tmp_57 = (tmp_58 == null ? true : tmp_58 instanceof TextGeometricTransform) ? tmp_58 : THROW_CCE();
      }
      tmp$ret$38 = tmp_57;
    }
    var tmp_59 = tmp$ret$38;
    var tmp0_7 = list.m(10);
    var tmp2_7 = get_Saver_11(Companion_getInstance_25());
    var tmp$ret$43;
    $l$block_7: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_60;
      if (equals(tmp0_7, false)) {
        tmp_60 = !isInterface(tmp2_7, NonNullValueClassSaver);
      } else {
        tmp_60 = false;
      }
      if (tmp_60) {
        tmp$ret$43 = null;
        break $l$block_7;
      }
      var tmp_61;
      if (tmp0_7 == null) {
        tmp_61 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_62 = tmp2_7.h56(tmp0_7);
        tmp_61 = (tmp_62 == null ? true : tmp_62 instanceof LocaleList) ? tmp_62 : THROW_CCE();
      }
      tmp$ret$43 = tmp_61;
    }
    var tmp_63 = tmp$ret$43;
    var tmp0_8 = list.m(11);
    var tmp2_8 = get_Saver_5(Companion_getInstance());
    var tmp$ret$48;
    $l$block_8: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_64;
      if (equals(tmp0_8, false)) {
        tmp_64 = !isInterface(tmp2_8, NonNullValueClassSaver);
      } else {
        tmp_64 = false;
      }
      if (tmp_64) {
        tmp$ret$48 = null;
        break $l$block_8;
      }
      var tmp_65;
      if (tmp0_8 == null) {
        tmp_65 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_66 = tmp2_8.h56(tmp0_8);
        var tmp_67;
        if (tmp_66 == null ? true : tmp_66 instanceof Color) {
          var tmp_68 = tmp_66;
          tmp_67 = tmp_68 == null ? null : tmp_68.f4l_1;
        } else {
          tmp_67 = THROW_CCE();
        }
        var tmp_69 = tmp_67;
        var tmp_70 = tmp_69 == null ? null : new Color(tmp_69);
        tmp_65 = tmp_70 == null ? null : tmp_70.f4l_1;
      }
      tmp$ret$48 = tmp_65;
    }
    var tmp_71 = tmp$ret$48;
    var tmp_72 = ensureNotNull(tmp_71 == null ? null : new Color(tmp_71));
    var tmp0_9 = list.m(12);
    var tmp2_9 = get_Saver_12(Companion_getInstance_33());
    var tmp$ret$53;
    $l$block_9: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_73;
      if (equals(tmp0_9, false)) {
        tmp_73 = !isInterface(tmp2_9, NonNullValueClassSaver);
      } else {
        tmp_73 = false;
      }
      if (tmp_73) {
        tmp$ret$53 = null;
        break $l$block_9;
      }
      var tmp_74;
      if (tmp0_9 == null) {
        tmp_74 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_75 = tmp2_9.h56(tmp0_9);
        tmp_74 = (tmp_75 == null ? true : tmp_75 instanceof TextDecoration) ? tmp_75 : THROW_CCE();
      }
      tmp$ret$53 = tmp_74;
    }
    var tmp_76 = tmp$ret$53;
    var tmp0_10 = list.m(13);
    var tmp2_10 = get_Saver_13(Companion_getInstance_2());
    var tmp$ret$58;
    $l$block_10: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_77;
      if (equals(tmp0_10, false)) {
        tmp_77 = !isInterface(tmp2_10, NonNullValueClassSaver);
      } else {
        tmp_77 = false;
      }
      if (tmp_77) {
        tmp$ret$58 = null;
        break $l$block_10;
      }
      var tmp_78;
      if (tmp0_10 == null) {
        tmp_78 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_79 = tmp2_10.h56(tmp0_10);
        tmp_78 = (tmp_79 == null ? true : tmp_79 instanceof Shadow) ? tmp_79 : THROW_CCE();
      }
      tmp$ret$58 = tmp_78;
    }
    return SpanStyle_init_$Create$(tmp_7.f4l_1, tmp_16.h3s_1, tmp_20, tmp_28, tmp_36, VOID, tmp_38, tmp_47.h3s_1, tmp_55, tmp_59, tmp_63, tmp_72.f4l_1, tmp_76, tmp$ret$58);
  }
  function TextLinkStylesSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(it.s5d_1, get_SpanStyleSaver(), $this$Saver), save_0(it.t5d_1, get_SpanStyleSaver(), $this$Saver), save_0(it.u5d_1, get_SpanStyleSaver(), $this$Saver), save_0(it.v5d_1, get_SpanStyleSaver(), $this$Saver)]);
  }
  function TextLinkStylesSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.m(0);
    var tmp2 = get_SpanStyleSaver();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_1 = tmp2.h56(tmp0);
        tmp_0 = (tmp_1 == null ? true : tmp_1 instanceof SpanStyle) ? tmp_1 : THROW_CCE();
      }
      tmp$ret$0 = tmp_0;
    }
    var styleOrNull = tmp$ret$0;
    var tmp0_0 = list.m(1);
    var tmp2_0 = get_SpanStyleSaver();
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_2;
      if (equals(tmp0_0, false)) {
        tmp_2 = !isInterface(tmp2_0, NonNullValueClassSaver);
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_3;
      if (tmp0_0 == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_4 = tmp2_0.h56(tmp0_0);
        tmp_3 = (tmp_4 == null ? true : tmp_4 instanceof SpanStyle) ? tmp_4 : THROW_CCE();
      }
      tmp$ret$5 = tmp_3;
    }
    var focusedStyleOrNull = tmp$ret$5;
    var tmp0_1 = list.m(2);
    var tmp2_1 = get_SpanStyleSaver();
    var tmp$ret$10;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_5;
      if (equals(tmp0_1, false)) {
        tmp_5 = !isInterface(tmp2_1, NonNullValueClassSaver);
      } else {
        tmp_5 = false;
      }
      if (tmp_5) {
        tmp$ret$10 = null;
        break $l$block_1;
      }
      var tmp_6;
      if (tmp0_1 == null) {
        tmp_6 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_7 = tmp2_1.h56(tmp0_1);
        tmp_6 = (tmp_7 == null ? true : tmp_7 instanceof SpanStyle) ? tmp_7 : THROW_CCE();
      }
      tmp$ret$10 = tmp_6;
    }
    var hoveredStyleOrNull = tmp$ret$10;
    var tmp0_2 = list.m(3);
    var tmp2_2 = get_SpanStyleSaver();
    var tmp$ret$15;
    $l$block_2: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_8;
      if (equals(tmp0_2, false)) {
        tmp_8 = !isInterface(tmp2_2, NonNullValueClassSaver);
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp$ret$15 = null;
        break $l$block_2;
      }
      var tmp_9;
      if (tmp0_2 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_10 = tmp2_2.h56(tmp0_2);
        tmp_9 = (tmp_10 == null ? true : tmp_10 instanceof SpanStyle) ? tmp_10 : THROW_CCE();
      }
      tmp$ret$15 = tmp_9;
    }
    var pressedStyleOrNull = tmp$ret$15;
    return new TextLinkStyles(styleOrNull, focusedStyleOrNull, hoveredStyleOrNull, pressedStyleOrNull);
  }
  function TextDecorationSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.w5d_1;
  }
  function TextDecorationSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new TextDecoration(typeof it === 'number' ? it : THROW_CCE());
  }
  function TextGeometricTransformSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([it.x5d_1, it.y5d_1]);
  }
  function TextGeometricTransformSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    return new TextGeometricTransform(list.m(0), list.m(1));
  }
  function TextIndentSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(new TextUnit(it.z5d_1), get_Saver_1(Companion_getInstance_1()), $this$Saver), save_0(new TextUnit(it.a5e_1), get_Saver_1(Companion_getInstance_1()), $this$Saver)]);
  }
  function TextIndentSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.m(0);
    var tmp2 = get_Saver_1(Companion_getInstance_1());
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_1 = tmp2.h56(tmp0);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof TextUnit) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.h3s_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new TextUnit(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.h3s_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new TextUnit(tmp_6));
    var tmp0_0 = list.m(1);
    var tmp2_0 = get_Saver_1(Companion_getInstance_1());
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_8;
      if (equals(tmp0_0, false)) {
        tmp_8 = !isInterface(tmp2_0, NonNullValueClassSaver);
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_9;
      if (tmp0_0 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_10 = tmp2_0.h56(tmp0_0);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof TextUnit) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.h3s_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new TextUnit(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.h3s_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    return new TextIndent_0(tmp_7.h3s_1, ensureNotNull(tmp_15 == null ? null : new TextUnit(tmp_15)).h3s_1);
  }
  function FontWeightSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.b5e_1;
  }
  function FontWeightSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new FontWeight(typeof it === 'number' ? it : THROW_CCE());
  }
  function BaselineShiftSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return _BaselineShift___get_multiplier__impl__qhmjek(it.r5d_1);
  }
  function BaselineShiftSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new BaselineShift(_BaselineShift___init__impl__scj05g(typeof it === 'number' ? it : THROW_CCE()));
  }
  function TextRangeSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(_TextRange___get_start__impl__ww4t90(it.t5a_1)), save(_TextRange___get_end__impl__gcdxpp(it.t5a_1))]);
  }
  function TextRangeSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$0 = tmp;
    var tmp_0 = ensureNotNull(tmp$ret$0);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.m(1);
    var tmp_1;
    if (tmp0_safe_receiver_0 == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_1 = typeof tmp0_safe_receiver_0 === 'number' ? tmp0_safe_receiver_0 : THROW_CCE();
    }
    var tmp$ret$3 = tmp_1;
    return new TextRange(TextRange_1(tmp_0, ensureNotNull(tmp$ret$3)));
  }
  function ShadowSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(new Color(it.m4o_1), get_Saver_5(Companion_getInstance()), $this$Saver), save_0(new Offset(it.n4o_1), get_Saver_14(Companion_getInstance_3()), $this$Saver), save(it.o4o_1)]);
  }
  function ShadowSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.m(0);
    var tmp2 = get_Saver_5(Companion_getInstance());
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_1 = tmp2.h56(tmp0);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof Color) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.f4l_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new Color(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.f4l_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new Color(tmp_6));
    var tmp0_0 = list.m(1);
    var tmp2_0 = get_Saver_14(Companion_getInstance_3());
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_8;
      if (equals(tmp0_0, false)) {
        tmp_8 = !isInterface(tmp2_0, NonNullValueClassSaver);
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_9;
      if (tmp0_0 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_10 = tmp2_0.h56(tmp0_0);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof Offset) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.h3p_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new Offset(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.h3p_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    var tmp_16 = ensureNotNull(tmp_15 == null ? null : new Offset(tmp_15));
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(2);
    var tmp_17;
    if (tmp0_safe_receiver == null) {
      tmp_17 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_17 = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$10 = tmp_17;
    return new Shadow(tmp_7.f4l_1, tmp_16.h3p_1, ensureNotNull(tmp$ret$10));
  }
  function ColorSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isUnspecified' call
    var this_0 = it.f4l_1;
    if (equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = false;
    } else {
      tmp = toArgb(it.f4l_1);
    }
    return tmp;
  }
  function ColorSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance().y4h_1;
    } else {
      tmp = Color_0(typeof it === 'number' ? it : THROW_CCE());
    }
    var tmp_0 = tmp;
    return tmp_0 == null ? null : new Color(tmp_0);
  }
  function TextAlignSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return _TextAlign___get_value__impl__lst7m3(it.v5c_1);
  }
  function TextAlignSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new TextAlign(_TextAlign___init__impl__99wz4v(typeof it === 'number' ? it : THROW_CCE()));
  }
  function TextDirectionSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return _TextDirection___get_value__impl__ka7r45(it.w5c_1);
  }
  function TextDirectionSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new TextDirection(_TextDirection___init__impl__lh8lzt(typeof it === 'number' ? it : THROW_CCE()));
  }
  function HyphensSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return _Hyphens___get_value__impl__5itus4(it.y5c_1);
  }
  function HyphensSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new Hyphens(_Hyphens___init__impl__m2cvg8(typeof it === 'number' ? it : THROW_CCE()));
  }
  function FontStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return save(_FontStyle___get_value__impl__gx8aaz(it.p5d_1));
  }
  function FontStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new FontStyle(_FontStyle___init__impl__jcnduf(typeof it === 'number' ? it : THROW_CCE()));
  }
  function FontSynthesisSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return _FontSynthesis___get_value__impl__xrueqg(it.q5d_1);
  }
  function FontSynthesisSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new FontSynthesis(_FontSynthesis___init__impl__n397bg(typeof it === 'number' ? it : THROW_CCE()));
  }
  function TextUnitSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, new TextUnit(Companion_getInstance_1().f3s_1))) {
      tmp = false;
    } else {
      tmp = arrayListOf([save(_TextUnit___get_value__impl__hpbx0k(it.h3s_1)), save_0(new TextUnitType(_TextUnit___get_type__impl__uc2olt(it.h3s_1)), get_Saver_15(Companion_getInstance_4()), $this$NonNullValueClassSaver)]);
    }
    return tmp;
  }
  function TextUnitSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance_1().f3s_1;
    } else {
      var list = isInterface(it, KtList) ? it : THROW_CCE();
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver = list.m(0);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_0 = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
      }
      var tmp$ret$0 = tmp_0;
      var tmp_1 = ensureNotNull(tmp$ret$0);
      var tmp0 = list.m(1);
      var tmp2 = get_Saver_15(Companion_getInstance_4());
      var tmp$ret$3;
      $l$block: {
        // Inline function 'androidx.compose.ui.text.restore' call
        var tmp_2;
        if (equals(tmp0, false)) {
          tmp_2 = !isInterface(tmp2, NonNullValueClassSaver);
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          tmp$ret$3 = null;
          break $l$block;
        }
        var tmp_3;
        if (tmp0 == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.with' call
          var tmp_4 = tmp2.h56(tmp0);
          var tmp_5;
          if (tmp_4 == null ? true : tmp_4 instanceof TextUnitType) {
            var tmp_6 = tmp_4;
            tmp_5 = tmp_6 == null ? null : tmp_6.g3s_1;
          } else {
            tmp_5 = THROW_CCE();
          }
          var tmp_7 = tmp_5;
          var tmp_8 = tmp_7 == null ? null : new TextUnitType(tmp_7);
          tmp_3 = tmp_8 == null ? null : tmp_8.g3s_1;
        }
        tmp$ret$3 = tmp_3;
      }
      var tmp_9 = tmp$ret$3;
      tmp = TextUnit_0(tmp_1, ensureNotNull(tmp_9 == null ? null : new TextUnitType(tmp_9)).g3s_1);
    }
    var tmp_10 = tmp;
    return tmp_10 == null ? null : new TextUnit(tmp_10);
  }
  function TextUnitTypeSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp0_subject = it.g3s_1;
    return equals(tmp0_subject, Companion_getInstance_4().z3q_1) ? 0 : equals(tmp0_subject, Companion_getInstance_4().y3q_1) ? 1 : false;
  }
  function TextUnitTypeSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp = equals(it, 0) ? Companion_getInstance_4().z3q_1 : equals(it, 1) ? Companion_getInstance_4().y3q_1 : Companion_getInstance_4().x3q_1;
    return tmp == null ? null : new TextUnitType(tmp);
  }
  function OffsetSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, new Offset(Companion_getInstance_3().l3p_1))) {
      tmp = false;
    } else {
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_0 = it.h3p_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(this_0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      var tmp$ret$0 = floatFromBits(bits);
      var tmp_0 = save(tmp$ret$0);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_1 = it.h3p_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      var tmp$ret$4 = floatFromBits(bits_0);
      tmp = arrayListOf([tmp_0, save(tmp$ret$4)]);
    }
    return tmp;
  }
  function OffsetSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance_3().l3p_1;
    } else {
      var list = isInterface(it, KtList) ? it : THROW_CCE();
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver = list.m(0);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_0 = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
      }
      var tmp$ret$0 = tmp_0;
      var tmp0 = ensureNotNull(tmp$ret$0);
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver_0 = list.m(1);
      var tmp_1;
      if (tmp0_safe_receiver_0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_1 = typeof tmp0_safe_receiver_0 === 'number' ? tmp0_safe_receiver_0 : THROW_CCE();
      }
      var tmp$ret$3 = tmp_1;
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2 = ensureNotNull(tmp$ret$3);
      var v1 = fromInt(toRawBits(tmp0));
      var v2 = fromInt(toRawBits(val2));
      var tmp$ret$7 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      tmp = _Offset___init__impl__c168vi(tmp$ret$7);
    }
    var tmp_2 = tmp;
    return tmp_2 == null ? null : new Offset(tmp_2);
  }
  function LocaleListSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_0 = it.c5e_1;
    var target = ArrayList_init_$Create$_0(this_0.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = save_0(item, get_Saver_16(Companion_instance_11), $this$Saver);
        target.h(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function LocaleListSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var target = ArrayList_init_$Create$_0(list.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = list.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = list.m(index);
        var tmp2 = get_Saver_16(Companion_instance_11);
        var tmp$ret$4;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp;
          if (equals(item, false)) {
            tmp = !isInterface(tmp2, NonNullValueClassSaver);
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$4 = null;
            break $l$block;
          }
          var tmp_0;
          if (item == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.with' call
            var tmp_1 = tmp2.h56(item);
            tmp_0 = (tmp_1 == null ? true : tmp_1 instanceof Locale) ? tmp_1 : THROW_CCE();
          }
          tmp$ret$4 = tmp_0;
        }
        // Inline function 'kotlin.collections.plusAssign' call
        var element = ensureNotNull(tmp$ret$4);
        target.h(element);
      }
       while (inductionVariable <= last);
    return new LocaleList(target);
  }
  function LocaleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.f5e();
  }
  function LocaleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return Locale_init_$Create$(typeof it === 'string' ? it : THROW_CCE());
  }
  function LineHeightStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(new Alignment(it.g5e_1), get_Saver_17(Companion_getInstance_29()), $this$Saver), save_0(new Trim(it.h5e_1), get_Saver_18(Companion_getInstance_28()), $this$Saver), save_0(new Mode(it.i5e_1), get_Saver_19(Companion_getInstance_30()), $this$Saver)]);
  }
  function LineHeightStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.m(0);
    var tmp2 = get_Saver_17(Companion_getInstance_29());
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_1 = tmp2.h56(tmp0);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof Alignment) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.j5e_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new Alignment(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.j5e_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new Alignment(tmp_6));
    var tmp0_0 = list.m(1);
    var tmp2_0 = get_Saver_18(Companion_getInstance_28());
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_8;
      if (equals(tmp0_0, false)) {
        tmp_8 = !isInterface(tmp2_0, NonNullValueClassSaver);
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_9;
      if (tmp0_0 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_10 = tmp2_0.h56(tmp0_0);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof Trim) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.k5e_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new Trim(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.k5e_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    var tmp_16 = ensureNotNull(tmp_15 == null ? null : new Trim(tmp_15));
    var tmp0_1 = list.m(2);
    var tmp2_1 = get_Saver_19(Companion_getInstance_30());
    var tmp$ret$10;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_17;
      if (equals(tmp0_1, false)) {
        tmp_17 = !isInterface(tmp2_1, NonNullValueClassSaver);
      } else {
        tmp_17 = false;
      }
      if (tmp_17) {
        tmp$ret$10 = null;
        break $l$block_1;
      }
      var tmp_18;
      if (tmp0_1 == null) {
        tmp_18 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_19 = tmp2_1.h56(tmp0_1);
        var tmp_20;
        if (tmp_19 == null ? true : tmp_19 instanceof Mode) {
          var tmp_21 = tmp_19;
          tmp_20 = tmp_21 == null ? null : tmp_21.l5e_1;
        } else {
          tmp_20 = THROW_CCE();
        }
        var tmp_22 = tmp_20;
        var tmp_23 = tmp_22 == null ? null : new Mode(tmp_22);
        tmp_18 = tmp_23 == null ? null : tmp_23.l5e_1;
      }
      tmp$ret$10 = tmp_18;
    }
    var tmp_24 = tmp$ret$10;
    return new LineHeightStyle(tmp_7.j5e_1, tmp_16.k5e_1, ensureNotNull(tmp_24 == null ? null : new Mode(tmp_24)).l5e_1);
  }
  function LineHeightStyleAlignmentSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return _Alignment___get_topRatio__impl__gg7tir(it.j5e_1);
  }
  function LineHeightStyleAlignmentSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new Alignment(_Alignment___init__impl__it107q(typeof it === 'number' ? it : THROW_CCE()));
  }
  function LineHeightStyleTrimSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return _Trim___get_value__impl__o5eglp(it.k5e_1);
  }
  function LineHeightStyleTrimSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new Trim(_Trim___init__impl__tcc1lr(typeof it === 'number' ? it : THROW_CCE()));
  }
  function LineHeightStyleModeSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return _Mode___get_value__impl__uitpda(it.l5e_1);
  }
  function LineHeightStyleModeSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new Mode(_Mode___init__impl__3rgsrm(typeof it === 'number' ? it : THROW_CCE()));
  }
  function NonNullValueClassSaver$1($save, $restore) {
    this.m5e_1 = $save;
    this.n5e_1 = $restore;
  }
  protoOf(NonNullValueClassSaver$1).r56 = function (_this__u8e3s4, value) {
    return this.m5e_1(_this__u8e3s4, value);
  };
  protoOf(NonNullValueClassSaver$1).h56 = function (value) {
    return this.n5e_1(value);
  };
  function AnnotationType_Paragraph_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Paragraph_instance;
  }
  function AnnotationType_Span_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Span_instance;
  }
  function AnnotationType_VerbatimTts_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_VerbatimTts_instance;
  }
  function AnnotationType_Url_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Url_instance;
  }
  function AnnotationType_Link_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Link_instance;
  }
  function AnnotationType_Clickable_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Clickable_instance;
  }
  function AnnotationType_String_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_String_instance;
  }
  var properties_initialized_Savers_kt_vjp8zk;
  function _init_properties_Savers_kt__o6r3ry() {
    if (!properties_initialized_Savers_kt_vjp8zk) {
      properties_initialized_Savers_kt_vjp8zk = true;
      var tmp = AnnotatedStringSaver$lambda;
      AnnotatedStringSaver = Saver_0(tmp, AnnotatedStringSaver$lambda_0);
      var tmp_0 = AnnotationRangeListSaver$lambda;
      AnnotationRangeListSaver = Saver_0(tmp_0, AnnotationRangeListSaver$lambda_0);
      var tmp_1 = AnnotationRangeSaver$lambda;
      AnnotationRangeSaver = Saver_0(tmp_1, AnnotationRangeSaver$lambda_0);
      var tmp_2 = VerbatimTtsAnnotationSaver$lambda;
      VerbatimTtsAnnotationSaver = Saver_0(tmp_2, VerbatimTtsAnnotationSaver$lambda_0);
      var tmp_3 = UrlAnnotationSaver$lambda;
      UrlAnnotationSaver = Saver_0(tmp_3, UrlAnnotationSaver$lambda_0);
      var tmp_4 = LinkSaver$lambda;
      LinkSaver = Saver_0(tmp_4, LinkSaver$lambda_0);
      var tmp_5 = ClickableSaver$lambda;
      ClickableSaver = Saver_0(tmp_5, ClickableSaver$lambda_0);
      var tmp_6 = ParagraphStyleSaver$lambda;
      ParagraphStyleSaver = Saver_0(tmp_6, ParagraphStyleSaver$lambda_0);
      var tmp_7 = SpanStyleSaver$lambda;
      SpanStyleSaver = Saver_0(tmp_7, SpanStyleSaver$lambda_0);
      var tmp_8 = TextLinkStylesSaver$lambda;
      TextLinkStylesSaver = Saver_0(tmp_8, TextLinkStylesSaver$lambda_0);
      var tmp_9 = TextDecorationSaver$lambda;
      TextDecorationSaver = Saver_0(tmp_9, TextDecorationSaver$lambda_0);
      var tmp_10 = TextGeometricTransformSaver$lambda;
      TextGeometricTransformSaver = Saver_0(tmp_10, TextGeometricTransformSaver$lambda_0);
      var tmp_11 = TextIndentSaver$lambda;
      TextIndentSaver = Saver_0(tmp_11, TextIndentSaver$lambda_0);
      var tmp_12 = FontWeightSaver$lambda;
      FontWeightSaver = Saver_0(tmp_12, FontWeightSaver$lambda_0);
      var tmp_13 = BaselineShiftSaver$lambda;
      BaselineShiftSaver = Saver_0(tmp_13, BaselineShiftSaver$lambda_0);
      var tmp_14 = TextRangeSaver$lambda;
      TextRangeSaver = Saver_0(tmp_14, TextRangeSaver$lambda_0);
      var tmp_15 = ShadowSaver$lambda;
      ShadowSaver = Saver_0(tmp_15, ShadowSaver$lambda_0);
      var tmp_16 = ColorSaver$lambda;
      ColorSaver = NonNullValueClassSaver_0(tmp_16, ColorSaver$lambda_0);
      var tmp_17 = TextAlignSaver$lambda;
      TextAlignSaver = NonNullValueClassSaver_0(tmp_17, TextAlignSaver$lambda_0);
      var tmp_18 = TextDirectionSaver$lambda;
      TextDirectionSaver = NonNullValueClassSaver_0(tmp_18, TextDirectionSaver$lambda_0);
      var tmp_19 = HyphensSaver$lambda;
      HyphensSaver = NonNullValueClassSaver_0(tmp_19, HyphensSaver$lambda_0);
      var tmp_20 = FontStyleSaver$lambda;
      FontStyleSaver = Saver_0(tmp_20, FontStyleSaver$lambda_0);
      var tmp_21 = FontSynthesisSaver$lambda;
      FontSynthesisSaver = Saver_0(tmp_21, FontSynthesisSaver$lambda_0);
      var tmp_22 = TextUnitSaver$lambda;
      TextUnitSaver = NonNullValueClassSaver_0(tmp_22, TextUnitSaver$lambda_0);
      var tmp_23 = TextUnitTypeSaver$lambda;
      TextUnitTypeSaver = NonNullValueClassSaver_0(tmp_23, TextUnitTypeSaver$lambda_0);
      var tmp_24 = OffsetSaver$lambda;
      OffsetSaver = NonNullValueClassSaver_0(tmp_24, OffsetSaver$lambda_0);
      var tmp_25 = LocaleListSaver$lambda;
      LocaleListSaver = Saver_0(tmp_25, LocaleListSaver$lambda_0);
      var tmp_26 = LocaleSaver$lambda;
      LocaleSaver = Saver_0(tmp_26, LocaleSaver$lambda_0);
      var tmp_27 = LineHeightStyleSaver$lambda;
      LineHeightStyleSaver = Saver_0(tmp_27, LineHeightStyleSaver$lambda_0);
      var tmp_28 = LineHeightStyleAlignmentSaver$lambda;
      LineHeightStyleAlignmentSaver = NonNullValueClassSaver_0(tmp_28, LineHeightStyleAlignmentSaver$lambda_0);
      var tmp_29 = LineHeightStyleTrimSaver$lambda;
      LineHeightStyleTrimSaver = NonNullValueClassSaver_0(tmp_29, LineHeightStyleTrimSaver$lambda_0);
      var tmp_30 = LineHeightStyleModeSaver$lambda;
      LineHeightStyleModeSaver = NonNullValueClassSaver_0(tmp_30, LineHeightStyleModeSaver$lambda_0);
    }
  }
  function get_DefaultFontSize() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultFontSize;
  }
  var DefaultFontSize;
  function get_DefaultLetterSpacing() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultLetterSpacing;
  }
  var DefaultLetterSpacing;
  function get_DefaultBackgroundColor() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultBackgroundColor;
  }
  var DefaultBackgroundColor;
  function get_DefaultColor() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultColor;
  }
  var DefaultColor;
  function get_DefaultColorForegroundStyle() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultColorForegroundStyle;
  }
  var DefaultColorForegroundStyle;
  var androidx_compose_ui_text_SpanStyle$stable;
  function SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $this) {
    color = color === VOID ? Companion_getInstance().y4h_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().f3s_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().f3s_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().y4h_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_instance_22.o5e(color), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    return $this;
  }
  function SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle_init_$Init$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $this) {
    alpha = alpha === VOID ? NaN : alpha;
    fontSize = fontSize === VOID ? Companion_getInstance_1().f3s_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().f3s_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().y4h_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_instance_22.p5e(brush, alpha), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    return $this;
  }
  function SpanStyle_init_$Create$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return SpanStyle_init_$Init$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle(textForegroundStyle, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    fontSize = fontSize === VOID ? Companion_getInstance_1().f3s_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().f3s_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().y4h_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    this.z5c_1 = textForegroundStyle;
    this.a5d_1 = fontSize;
    this.b5d_1 = fontWeight;
    this.c5d_1 = fontStyle;
    this.d5d_1 = fontSynthesis;
    this.e5d_1 = fontFamily;
    this.f5d_1 = fontFeatureSettings;
    this.g5d_1 = letterSpacing;
    this.h5d_1 = baselineShift;
    this.i5d_1 = textGeometricTransform;
    this.j5d_1 = localeList;
    this.k5d_1 = background;
    this.l5d_1 = textDecoration;
    this.m5d_1 = shadow;
    this.n5d_1 = platformStyle;
    this.o5d_1 = drawStyle;
  }
  protoOf(SpanStyle).z4h = function () {
    return this.z5c_1.z4h();
  };
  protoOf(SpanStyle).q5e = function () {
    return this.z5c_1.q5e();
  };
  protoOf(SpanStyle).b4e = function () {
    return this.z5c_1.b4e();
  };
  protoOf(SpanStyle).r5e = function (other) {
    if (other == null)
      return this;
    return fastMerge_0(this, other.z5c_1.z4h(), other.z5c_1.q5e(), other.z5c_1.b4e(), other.a5d_1, other.b5d_1, other.c5d_1, other.d5d_1, other.e5d_1, other.f5d_1, other.g5d_1, other.h5d_1, other.i5d_1, other.j5d_1, other.k5d_1, other.l5d_1, other.m5d_1, other.n5d_1, other.o5d_1);
  };
  protoOf(SpanStyle).s5e = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    var tmp;
    if (equals(color, this.z4h())) {
      tmp = this.z5c_1;
    } else {
      tmp = Companion_instance_22.o5e(color);
    }
    return new SpanStyle(tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
  };
  protoOf(SpanStyle).t5e = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $super) {
    color = color === VOID ? this.z4h() : color;
    fontSize = fontSize === VOID ? this.a5d_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.b5d_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.c5d_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.d5d_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.e5d_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.f5d_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.g5d_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.h5d_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.i5d_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.j5d_1 : localeList;
    background = background === VOID ? this.k5d_1 : background;
    textDecoration = textDecoration === VOID ? this.l5d_1 : textDecoration;
    shadow = shadow === VOID ? this.m5d_1 : shadow;
    platformStyle = platformStyle === VOID ? this.n5d_1 : platformStyle;
    drawStyle = drawStyle === VOID ? this.o5d_1 : drawStyle;
    var tmp;
    if ($super === VOID) {
      tmp = this.s5e(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    } else {
      var tmp_0 = $super.s5e;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, platformStyle, drawStyle);
    }
    return tmp;
  };
  protoOf(SpanStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpanStyle))
      return false;
    return this.u5e(other) && this.v5e(other);
  };
  protoOf(SpanStyle).u5e = function (other) {
    if (this === other)
      return true;
    if (!equals(this.a5d_1, other.a5d_1))
      return false;
    if (!equals(this.b5d_1, other.b5d_1))
      return false;
    var tmp = this.c5d_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = other.c5d_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.d5d_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = other.d5d_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.e5d_1, other.e5d_1))
      return false;
    if (!(this.f5d_1 == other.f5d_1))
      return false;
    if (!equals(this.g5d_1, other.g5d_1))
      return false;
    var tmp_5 = this.h5d_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = other.h5d_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.i5d_1, other.i5d_1))
      return false;
    if (!equals(this.j5d_1, other.j5d_1))
      return false;
    if (!equals(this.k5d_1, other.k5d_1))
      return false;
    if (!equals(this.n5d_1, other.n5d_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).v5e = function (other) {
    if (!equals(this.z5c_1, other.z5c_1))
      return false;
    if (!equals(this.l5d_1, other.l5d_1))
      return false;
    if (!equals(this.m5d_1, other.m5d_1))
      return false;
    if (!equals(this.o5d_1, other.o5d_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.z4h());
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.q5e();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + getNumberHashCode(this.b4e()) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.a5d_1) | 0;
    var tmp_0 = imul(31, result);
    var tmp0_safe_receiver_0 = this.b5d_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.hashCode();
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(31, result);
    var tmp2_safe_receiver = this.c5d_1;
    var tmp_2;
    var tmp_3 = tmp2_safe_receiver;
    if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
      tmp_2 = null;
    } else {
      tmp_2 = FontStyle__hashCode_impl_7qhg4w(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_2;
    result = tmp_1 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_4 = imul(31, result);
    var tmp4_safe_receiver = this.d5d_1;
    var tmp_5;
    var tmp_6 = tmp4_safe_receiver;
    if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
      tmp_5 = null;
    } else {
      tmp_5 = FontSynthesis__hashCode_impl_4wi11v(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_5;
    result = tmp_4 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_7 = imul(31, result);
    var tmp6_safe_receiver = this.e5d_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_7 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_8 = imul(31, result);
    var tmp8_safe_receiver = this.f5d_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : getStringHashCode(tmp8_safe_receiver);
    result = tmp_8 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.g5d_1) | 0;
    var tmp_9 = imul(31, result);
    var tmp10_safe_receiver = this.h5d_1;
    var tmp_10;
    var tmp_11 = tmp10_safe_receiver;
    if ((tmp_11 == null ? null : new BaselineShift(tmp_11)) == null) {
      tmp_10 = null;
    } else {
      tmp_10 = BaselineShift__hashCode_impl_g0potx(tmp10_safe_receiver);
    }
    var tmp11_elvis_lhs = tmp_10;
    result = tmp_9 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    var tmp_12 = imul(31, result);
    var tmp12_safe_receiver = this.i5d_1;
    var tmp13_elvis_lhs = tmp12_safe_receiver == null ? null : tmp12_safe_receiver.hashCode();
    result = tmp_12 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    var tmp_13 = imul(31, result);
    var tmp14_safe_receiver = this.j5d_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.hashCode();
    result = tmp_13 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.k5d_1) | 0;
    var tmp_14 = imul(31, result);
    var tmp16_safe_receiver = this.l5d_1;
    var tmp17_elvis_lhs = tmp16_safe_receiver == null ? null : tmp16_safe_receiver.hashCode();
    result = tmp_14 + (tmp17_elvis_lhs == null ? 0 : tmp17_elvis_lhs) | 0;
    var tmp_15 = imul(31, result);
    var tmp18_safe_receiver = this.m5d_1;
    var tmp19_elvis_lhs = tmp18_safe_receiver == null ? null : tmp18_safe_receiver.hashCode();
    result = tmp_15 + (tmp19_elvis_lhs == null ? 0 : tmp19_elvis_lhs) | 0;
    var tmp_16 = imul(31, result);
    var tmp20_safe_receiver = this.n5d_1;
    var tmp21_elvis_lhs = tmp20_safe_receiver == null ? null : tmp20_safe_receiver.hashCode();
    result = tmp_16 + (tmp21_elvis_lhs == null ? 0 : tmp21_elvis_lhs) | 0;
    var tmp_17 = imul(31, result);
    var tmp22_safe_receiver = this.o5d_1;
    var tmp23_elvis_lhs = tmp22_safe_receiver == null ? null : hashCode(tmp22_safe_receiver);
    result = tmp_17 + (tmp23_elvis_lhs == null ? 0 : tmp23_elvis_lhs) | 0;
    return result;
  };
  protoOf(SpanStyle).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.r7('SpanStyle(');
    this_0.r7('color=' + Color__toString_impl_hpzmaq(this.z4h()) + ', ');
    this_0.r7('brush=' + toString(this.q5e()) + ', ');
    this_0.r7('alpha=' + this.b4e() + ', ');
    this_0.r7('fontSize=' + TextUnit__toString_impl_51ghw0(this.a5d_1) + ', ');
    this_0.r7('fontWeight=' + toString(this.b5d_1) + ', ');
    var tmp = this.c5d_1;
    this_0.r7('fontStyle=' + toString(tmp == null ? null : new FontStyle(tmp)) + ', ');
    var tmp_0 = this.d5d_1;
    this_0.r7('fontSynthesis=' + toString(tmp_0 == null ? null : new FontSynthesis(tmp_0)) + ', ');
    this_0.r7('fontFamily=' + toString(this.e5d_1) + ', ');
    this_0.r7('fontFeatureSettings=' + this.f5d_1 + ', ');
    this_0.r7('letterSpacing=' + TextUnit__toString_impl_51ghw0(this.g5d_1) + ', ');
    var tmp_1 = this.h5d_1;
    this_0.r7('baselineShift=' + toString(tmp_1 == null ? null : new BaselineShift(tmp_1)) + ', ');
    this_0.r7('textGeometricTransform=' + toString(this.i5d_1) + ', ');
    this_0.r7('localeList=' + toString(this.j5d_1) + ', ');
    this_0.r7('background=' + Color__toString_impl_hpzmaq(this.k5d_1) + ', ');
    this_0.r7('textDecoration=' + toString(this.l5d_1) + ', ');
    this_0.r7('shadow=' + toString(this.m5d_1) + ', ');
    this_0.r7('platformStyle=' + toString(this.n5d_1) + ', ');
    this_0.r7('drawStyle=' + toString(this.o5d_1));
    this_0.r7(')');
    return this_0.toString();
  };
  function fastMerge_0(_this__u8e3s4, color, brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    var tmp_6;
    var tmp_7;
    var tmp_8;
    var tmp_9;
    var tmp_10;
    var tmp_11;
    var tmp_12;
    var tmp_13;
    var tmp_14;
    var tmp_15;
    var tmp_16;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(fontSize), new Long(0, 0))) {
      tmp_16 = !equals(fontSize, _this__u8e3s4.a5d_1);
    } else {
      tmp_16 = false;
    }
    if (tmp_16) {
      tmp_15 = true;
    } else {
      var tmp_17;
      var tmp_18;
      if (brush == null) {
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        tmp_18 = !equals(_Color___get_value__impl__1pls5m(color), _ULong___init__impl__c78o9k(new Long(16, 0)));
      } else {
        tmp_18 = false;
      }
      if (tmp_18) {
        tmp_17 = !equals(color, _this__u8e3s4.z5c_1.z4h());
      } else {
        tmp_17 = false;
      }
      tmp_15 = tmp_17;
    }
    if (tmp_15) {
      tmp_14 = true;
    } else {
      var tmp_19;
      var tmp_20 = fontStyle;
      if (!((tmp_20 == null ? null : new FontStyle(tmp_20)) == null)) {
        var tmp_21 = fontStyle;
        var tmp_22 = tmp_21 == null ? null : new FontStyle(tmp_21);
        var tmp_23 = _this__u8e3s4.c5d_1;
        tmp_19 = !equals(tmp_22, tmp_23 == null ? null : new FontStyle(tmp_23));
      } else {
        tmp_19 = false;
      }
      tmp_14 = tmp_19;
    }
    if (tmp_14) {
      tmp_13 = true;
    } else {
      tmp_13 = (!(fontWeight == null) && !equals(fontWeight, _this__u8e3s4.b5d_1));
    }
    if (tmp_13) {
      tmp_12 = true;
    } else {
      tmp_12 = (!(fontFamily == null) && !(fontFamily === _this__u8e3s4.e5d_1));
    }
    if (tmp_12) {
      tmp_11 = true;
    } else {
      var tmp_24;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(letterSpacing), new Long(0, 0))) {
        tmp_24 = !equals(letterSpacing, _this__u8e3s4.g5d_1);
      } else {
        tmp_24 = false;
      }
      tmp_11 = tmp_24;
    }
    if (tmp_11) {
      tmp_10 = true;
    } else {
      tmp_10 = (!(textDecoration == null) && !equals(textDecoration, _this__u8e3s4.l5d_1));
    }
    if (tmp_10) {
      tmp_9 = true;
    } else {
      tmp_9 = !equals(brush, _this__u8e3s4.z5c_1.q5e());
    }
    if (tmp_9) {
      tmp_8 = true;
    } else {
      tmp_8 = (!(brush == null) && !(alpha === _this__u8e3s4.z5c_1.b4e()));
    }
    if (tmp_8) {
      tmp_7 = true;
    } else {
      var tmp_25;
      var tmp_26 = fontSynthesis;
      if (!((tmp_26 == null ? null : new FontSynthesis(tmp_26)) == null)) {
        var tmp_27 = fontSynthesis;
        var tmp_28 = tmp_27 == null ? null : new FontSynthesis(tmp_27);
        var tmp_29 = _this__u8e3s4.d5d_1;
        tmp_25 = !equals(tmp_28, tmp_29 == null ? null : new FontSynthesis(tmp_29));
      } else {
        tmp_25 = false;
      }
      tmp_7 = tmp_25;
    }
    if (tmp_7) {
      tmp_6 = true;
    } else {
      tmp_6 = (!(fontFeatureSettings == null) && !(fontFeatureSettings == _this__u8e3s4.f5d_1));
    }
    if (tmp_6) {
      tmp_5 = true;
    } else {
      var tmp_30;
      var tmp_31 = baselineShift;
      if (!((tmp_31 == null ? null : new BaselineShift(tmp_31)) == null)) {
        var tmp_32 = baselineShift;
        var tmp_33 = tmp_32 == null ? null : new BaselineShift(tmp_32);
        var tmp_34 = _this__u8e3s4.h5d_1;
        tmp_30 = !equals(tmp_33, tmp_34 == null ? null : new BaselineShift(tmp_34));
      } else {
        tmp_30 = false;
      }
      tmp_5 = tmp_30;
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      tmp_4 = (!(textGeometricTransform == null) && !equals(textGeometricTransform, _this__u8e3s4.i5d_1));
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = (!(localeList == null) && !equals(localeList, _this__u8e3s4.j5d_1));
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      var tmp_35;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(background), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
        tmp_35 = !equals(background, _this__u8e3s4.k5d_1);
      } else {
        tmp_35 = false;
      }
      tmp_2 = tmp_35;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = (!(shadow == null) && !equals(shadow, _this__u8e3s4.m5d_1));
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = (!(platformStyle == null) && !equals(platformStyle, _this__u8e3s4.n5d_1));
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = (!(drawStyle == null) && !equals(drawStyle, _this__u8e3s4.o5d_1));
    }
    var requiresAlloc = tmp;
    if (!requiresAlloc) {
      return _this__u8e3s4;
    }
    var tmp_36;
    if (!(brush == null)) {
      tmp_36 = Companion_instance_22.p5e(brush, alpha);
    } else {
      tmp_36 = Companion_instance_22.o5e(color);
    }
    var otherTextForegroundStyle = tmp_36;
    var tmp11_textForegroundStyle = _this__u8e3s4.z5c_1.w5e(otherTextForegroundStyle);
    var tmp12_fontFamily = fontFamily == null ? _this__u8e3s4.e5d_1 : fontFamily;
    var tmp_37;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(fontSize), new Long(0, 0))) {
      tmp_37 = fontSize;
    } else {
      tmp_37 = _this__u8e3s4.a5d_1;
    }
    var tmp13_fontSize = tmp_37;
    var tmp14_fontWeight = fontWeight == null ? _this__u8e3s4.b5d_1 : fontWeight;
    var tmp_38;
    var tmp_39 = fontStyle;
    if ((tmp_39 == null ? null : new FontStyle(tmp_39)) == null) {
      tmp_38 = _this__u8e3s4.c5d_1;
    } else {
      tmp_38 = fontStyle;
    }
    var tmp15_fontStyle = tmp_38;
    var tmp_40;
    var tmp_41 = fontSynthesis;
    if ((tmp_41 == null ? null : new FontSynthesis(tmp_41)) == null) {
      tmp_40 = _this__u8e3s4.d5d_1;
    } else {
      tmp_40 = fontSynthesis;
    }
    var tmp16_fontSynthesis = tmp_40;
    var tmp17_fontFeatureSettings = fontFeatureSettings == null ? _this__u8e3s4.f5d_1 : fontFeatureSettings;
    var tmp_42;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(letterSpacing), new Long(0, 0))) {
      tmp_42 = letterSpacing;
    } else {
      tmp_42 = _this__u8e3s4.g5d_1;
    }
    var tmp18_letterSpacing = tmp_42;
    var tmp_43;
    var tmp_44 = baselineShift;
    if ((tmp_44 == null ? null : new BaselineShift(tmp_44)) == null) {
      tmp_43 = _this__u8e3s4.h5d_1;
    } else {
      tmp_43 = baselineShift;
    }
    var tmp19_baselineShift = tmp_43;
    var tmp20_textGeometricTransform = textGeometricTransform == null ? _this__u8e3s4.i5d_1 : textGeometricTransform;
    var tmp21_localeList = localeList == null ? _this__u8e3s4.j5d_1 : localeList;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_45;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(background), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_45 = background;
    } else {
      tmp_45 = _this__u8e3s4.k5d_1;
    }
    var tmp22_background = tmp_45;
    var tmp23_textDecoration = textDecoration == null ? _this__u8e3s4.l5d_1 : textDecoration;
    var tmp24_shadow = shadow == null ? _this__u8e3s4.m5d_1 : shadow;
    var tmp25_platformStyle = mergePlatformStyle_0(_this__u8e3s4, platformStyle);
    var tmp26_drawStyle = drawStyle == null ? _this__u8e3s4.o5d_1 : drawStyle;
    return new SpanStyle(tmp11_textForegroundStyle, tmp13_fontSize, tmp14_fontWeight, tmp15_fontStyle, tmp16_fontSynthesis, tmp12_fontFamily, tmp17_fontFeatureSettings, tmp18_letterSpacing, tmp19_baselineShift, tmp20_textGeometricTransform, tmp21_localeList, tmp22_background, tmp23_textDecoration, tmp24_shadow, tmp25_platformStyle, tmp26_drawStyle);
  }
  function mergePlatformStyle_0(_this__u8e3s4, other) {
    _init_properties_SpanStyle_kt__ixg4k5();
    if (_this__u8e3s4.n5d_1 == null)
      return other;
    if (other == null)
      return _this__u8e3s4.n5d_1;
    return _this__u8e3s4.n5d_1.y5e(other);
  }
  function resolveSpanStyleDefaults(style) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp = style.z5c_1.z5e(resolveSpanStyleDefaults$lambda);
    var tmp_0;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = style.a5d_1;
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0))) {
      tmp_0 = get_DefaultFontSize();
    } else {
      tmp_0 = style.a5d_1;
    }
    var tmp_1 = tmp_0;
    var tmp0_elvis_lhs = style.b5d_1;
    var tmp_2 = tmp0_elvis_lhs == null ? Companion_getInstance_23().m5f_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.c5d_1;
    var tmp_3;
    var tmp_4 = tmp1_elvis_lhs;
    if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
      tmp_3 = Companion_getInstance_21().t5f_1;
    } else {
      tmp_3 = tmp1_elvis_lhs;
    }
    var tmp_5 = tmp_3;
    var tmp2_elvis_lhs = style.d5d_1;
    var tmp_6;
    var tmp_7 = tmp2_elvis_lhs;
    if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
      tmp_6 = Companion_getInstance_22().y5f_1;
    } else {
      tmp_6 = tmp2_elvis_lhs;
    }
    var tmp_8 = tmp_6;
    var tmp3_elvis_lhs = style.e5d_1;
    var tmp_9 = tmp3_elvis_lhs == null ? Companion_getInstance_17().z5f_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = style.f5d_1;
    var tmp_10 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_11;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_1 = style.g5d_1;
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_1), new Long(0, 0))) {
      tmp_11 = get_DefaultLetterSpacing();
    } else {
      tmp_11 = style.g5d_1;
    }
    var tmp_12 = tmp_11;
    var tmp5_elvis_lhs = style.h5d_1;
    var tmp_13;
    var tmp_14 = tmp5_elvis_lhs;
    if ((tmp_14 == null ? null : new BaselineShift(tmp_14)) == null) {
      tmp_13 = Companion_getInstance_26().g5g_1;
    } else {
      tmp_13 = tmp5_elvis_lhs;
    }
    // Inline function 'androidx.compose.ui.text.style.takeOrElse' call
    var this_2 = tmp_13;
    var tmp_15;
    if (isNaN_0(_BaselineShift___get_multiplier__impl__qhmjek(this_2))) {
      tmp_15 = Companion_getInstance_26().g5g_1;
    } else {
      tmp_15 = this_2;
    }
    var tmp_16 = tmp_15;
    var tmp6_elvis_lhs = style.i5d_1;
    var tmp_17 = tmp6_elvis_lhs == null ? Companion_getInstance_36().i5g_1 : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = style.j5d_1;
    var tmp_18 = tmp7_elvis_lhs == null ? Companion_getInstance_25().w1x() : tmp7_elvis_lhs;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var this_3 = style.k5d_1;
    var tmp_19;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(this_3), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_19 = this_3;
    } else {
      tmp_19 = get_DefaultBackgroundColor();
    }
    var tmp_20 = tmp_19;
    var tmp8_elvis_lhs = style.l5d_1;
    var tmp_21 = tmp8_elvis_lhs == null ? Companion_getInstance_33().k5g_1 : tmp8_elvis_lhs;
    var tmp9_elvis_lhs = style.m5d_1;
    var tmp_22 = tmp9_elvis_lhs == null ? Companion_getInstance_2().l4o_1 : tmp9_elvis_lhs;
    var tmp10_elvis_lhs = style.o5d_1;
    return new SpanStyle(tmp, tmp_1, tmp_2, tmp_5, tmp_8, tmp_9, tmp_10, tmp_12, tmp_16, tmp_17, tmp_18, tmp_20, tmp_21, tmp_22, style.n5d_1, tmp10_elvis_lhs == null ? Fill_getInstance() : tmp10_elvis_lhs);
  }
  function resolveSpanStyleDefaults$lambda() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return get_DefaultColorForegroundStyle();
  }
  var properties_initialized_SpanStyle_kt_cqbdlj;
  function _init_properties_SpanStyle_kt__ixg4k5() {
    if (!properties_initialized_SpanStyle_kt_cqbdlj) {
      properties_initialized_SpanStyle_kt_cqbdlj = true;
      DefaultFontSize = get_sp(14);
      DefaultLetterSpacing = get_sp(0);
      DefaultBackgroundColor = Companion_getInstance().x4h_1;
      DefaultColor = Companion_getInstance().m4h_1;
      DefaultColorForegroundStyle = Companion_instance_22.o5e(get_DefaultColor());
      androidx_compose_ui_text_SpanStyle$stable = 0;
    }
  }
  function _StringAnnotation___init__impl__o6a5i7(value) {
    return value;
  }
  function _StringAnnotation___get_value__impl__v4s4ej($this) {
    return $this;
  }
  function StringAnnotation__toString_impl_xnbt1d($this) {
    return 'StringAnnotation(value=' + $this + ')';
  }
  function StringAnnotation__hashCode_impl_bw5w8i($this) {
    return getStringHashCode($this);
  }
  function StringAnnotation__equals_impl_ro6p8u($this, other) {
    if (!(other instanceof StringAnnotation))
      return false;
    if (!($this === other.s5c_1))
      return false;
    return true;
  }
  function StringAnnotation(value) {
    this.s5c_1 = value;
  }
  protoOf(StringAnnotation).toString = function () {
    return StringAnnotation__toString_impl_xnbt1d(this.s5c_1);
  };
  protoOf(StringAnnotation).hashCode = function () {
    return StringAnnotation__hashCode_impl_bw5w8i(this.s5c_1);
  };
  protoOf(StringAnnotation).equals = function (other) {
    return StringAnnotation__equals_impl_ro6p8u(this.s5c_1, other);
  };
  var androidx_compose_ui_text_TextLayoutInput$stable;
  var androidx_compose_ui_text_TextLayoutResult$stable;
  function TextLayoutResult(layoutInput, multiParagraph, size) {
    this.n5g_1 = layoutInput;
    this.o5g_1 = multiParagraph;
    this.p5g_1 = size;
    this.q5g_1 = this.o5g_1.f5a();
    this.r5g_1 = this.o5g_1.g5a();
    this.s5g_1 = this.o5g_1.h59_1;
  }
  protoOf(TextLayoutResult).t5g = function () {
    var tmp;
    if (this.o5g_1.d59_1) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_0 = this.p5g_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      tmp = convertToInt(bitwiseAnd(value, new Long(-1, 0))) < this.o5g_1.f59_1;
    }
    return tmp;
  };
  protoOf(TextLayoutResult).u5g = function () {
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    var this_0 = this.p5g_1;
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
    return convertToInt(shiftRight(value, 32)) < this.o5g_1.e59_1;
  };
  protoOf(TextLayoutResult).v5g = function () {
    return this.u5g() || this.t5g();
  };
  protoOf(TextLayoutResult).b5a = function () {
    return this.o5g_1.g59_1;
  };
  protoOf(TextLayoutResult).x5a = function (lineIndex) {
    return this.o5g_1.x5a(lineIndex);
  };
  protoOf(TextLayoutResult).z5a = function (lineIndex, visibleEnd) {
    return this.o5g_1.z5a(lineIndex, visibleEnd);
  };
  protoOf(TextLayoutResult).w5g = function (lineIndex, visibleEnd, $super) {
    visibleEnd = visibleEnd === VOID ? false : visibleEnd;
    return $super === VOID ? this.z5a(lineIndex, visibleEnd) : $super.z5a.call(this, lineIndex, visibleEnd);
  };
  protoOf(TextLayoutResult).v5a = function (lineIndex) {
    return this.o5g_1.v5a(lineIndex);
  };
  protoOf(TextLayoutResult).u5a = function (offset) {
    return this.o5g_1.u5a(offset);
  };
  protoOf(TextLayoutResult).m5a = function (vertical) {
    return this.o5g_1.m5a(vertical);
  };
  protoOf(TextLayoutResult).p5a = function (offset) {
    return this.o5g_1.p5a(offset);
  };
  protoOf(TextLayoutResult).q5a = function (offset) {
    return this.o5g_1.q5a(offset);
  };
  protoOf(TextLayoutResult).r5a = function (offset) {
    return this.o5g_1.r5a(offset);
  };
  protoOf(TextLayoutResult).r59 = function (start, end) {
    return this.o5g_1.r59(start, end);
  };
  protoOf(TextLayoutResult).x5g = function (layoutInput, size) {
    return new TextLayoutResult(layoutInput, this.o5g_1, size);
  };
  protoOf(TextLayoutResult).y5g = function (layoutInput, size, $super) {
    layoutInput = layoutInput === VOID ? this.n5g_1 : layoutInput;
    size = size === VOID ? this.p5g_1 : size;
    return $super === VOID ? this.x5g(layoutInput, size) : $super.x5g.call(this, layoutInput, new IntSize(size));
  };
  protoOf(TextLayoutResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutResult))
      return false;
    if (!this.n5g_1.equals(other.n5g_1))
      return false;
    if (!equals(this.o5g_1, other.o5g_1))
      return false;
    if (!equals(this.p5g_1, other.p5g_1))
      return false;
    if (!(this.q5g_1 === other.q5g_1))
      return false;
    if (!(this.r5g_1 === other.r5g_1))
      return false;
    if (!equals(this.s5g_1, other.s5g_1))
      return false;
    return true;
  };
  protoOf(TextLayoutResult).hashCode = function () {
    var result = this.n5g_1.hashCode();
    result = imul(31, result) + hashCode(this.o5g_1) | 0;
    result = imul(31, result) + IntSize__hashCode_impl_gm9mta(this.p5g_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.q5g_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.r5g_1) | 0;
    result = imul(31, result) + hashCode(this.s5g_1) | 0;
    return result;
  };
  protoOf(TextLayoutResult).toString = function () {
    return 'TextLayoutResult(' + ('layoutInput=' + this.n5g_1.toString() + ', ') + ('multiParagraph=' + toString_0(this.o5g_1) + ', ') + ('size=' + IntSize__toString_impl_54w9zl(this.p5g_1) + ', ') + ('firstBaseline=' + this.q5g_1 + ', ') + ('lastBaseline=' + this.r5g_1 + ', ') + ('placeholderRects=' + toString_0(this.s5g_1)) + ')';
  };
  function TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, $this) {
    TextLayoutInput.call($this, text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, null, fontFamilyResolver, constraints);
    return $this;
  }
  function TextLayoutInput_init_$Create$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints) {
    return TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, objectCreate(protoOf(TextLayoutInput)));
  }
  function TextLayoutInput(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, fontFamilyResolver, constraints) {
    this.z5g_1 = text;
    this.a5h_1 = style;
    this.b5h_1 = placeholders;
    this.c5h_1 = maxLines;
    this.d5h_1 = softWrap;
    this.e5h_1 = overflow;
    this.f5h_1 = density;
    this.g5h_1 = layoutDirection;
    this.h5h_1 = fontFamilyResolver;
    this.i5h_1 = constraints;
    this.j5h_1 = resourceLoader;
  }
  protoOf(TextLayoutInput).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutInput))
      return false;
    if (!this.z5g_1.equals(other.z5g_1))
      return false;
    if (!this.a5h_1.equals(other.a5h_1))
      return false;
    if (!equals(this.b5h_1, other.b5h_1))
      return false;
    if (!(this.c5h_1 === other.c5h_1))
      return false;
    if (!(this.d5h_1 === other.d5h_1))
      return false;
    if (!(this.e5h_1 === other.e5h_1))
      return false;
    if (!equals(this.f5h_1, other.f5h_1))
      return false;
    if (!this.g5h_1.equals(other.g5h_1))
      return false;
    if (!equals(this.h5h_1, other.h5h_1))
      return false;
    if (!equals(this.i5h_1, other.i5h_1))
      return false;
    return true;
  };
  protoOf(TextLayoutInput).hashCode = function () {
    var result = this.z5g_1.hashCode();
    result = imul(31, result) + this.a5h_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.b5h_1) | 0;
    result = imul(31, result) + this.c5h_1 | 0;
    result = imul(31, result) + getBooleanHashCode(this.d5h_1) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.e5h_1) | 0;
    result = imul(31, result) + hashCode(this.f5h_1) | 0;
    result = imul(31, result) + this.g5h_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.h5h_1) | 0;
    result = imul(31, result) + Constraints__hashCode_impl_ij7484(this.i5h_1) | 0;
    return result;
  };
  protoOf(TextLayoutInput).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.r7('TextLayoutInput(');
    this_0.r7('text=' + this.z5g_1.toString() + ', ');
    this_0.r7('style=' + this.a5h_1.toString() + ', ');
    this_0.r7('placeholders=' + toString_0(this.b5h_1) + ', ');
    this_0.r7('maxLines=' + this.c5h_1 + ', ');
    this_0.r7('softWrap=' + this.d5h_1 + ', ');
    this_0.r7('overflow=' + TextOverflow__toString_impl_10s0c2(this.e5h_1) + ', ');
    this_0.r7('density=' + toString_0(this.f5h_1) + ', ');
    this_0.r7('layoutDirection=' + this.g5h_1.toString() + ', ');
    this_0.r7('fontFamilyResolver=' + toString_0(this.h5h_1) + ', ');
    this_0.r7('constraints=' + Constraints__toString_impl_37yskr(this.i5h_1));
    this_0.r7(')');
    return this_0.toString();
  };
  function androidx_compose_ui_text_TextLayoutResult$stableprop_getter() {
    return androidx_compose_ui_text_TextLayoutResult$stable;
  }
  var androidx_compose_ui_text_TextLinkStyles$stable;
  function TextLinkStyles(style, focusedStyle, hoveredStyle, pressedStyle) {
    style = style === VOID ? null : style;
    focusedStyle = focusedStyle === VOID ? null : focusedStyle;
    hoveredStyle = hoveredStyle === VOID ? null : hoveredStyle;
    pressedStyle = pressedStyle === VOID ? null : pressedStyle;
    this.s5d_1 = style;
    this.t5d_1 = focusedStyle;
    this.u5d_1 = hoveredStyle;
    this.v5d_1 = pressedStyle;
  }
  protoOf(TextLinkStyles).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof TextLinkStyles);
    }
    if (tmp)
      return false;
    if (!equals(this.s5d_1, other.s5d_1))
      return false;
    if (!equals(this.t5d_1, other.t5d_1))
      return false;
    if (!equals(this.u5d_1, other.u5d_1))
      return false;
    if (!equals(this.v5d_1, other.v5d_1))
      return false;
    return true;
  };
  protoOf(TextLinkStyles).hashCode = function () {
    var tmp0_safe_receiver = this.s5d_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.t5d_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp4_safe_receiver = this.u5d_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_0 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp6_safe_receiver = this.v5d_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.hashCode();
    result = tmp_1 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    return result;
  };
  var androidx_compose_ui_text_TextMeasurer$stable;
  var androidx_compose_ui_text_TextLayoutCache$stable;
  var androidx_compose_ui_text_CacheTextLayoutInput$stable;
  var androidx_compose_ui_text_TextPainter$stable;
  function _TextRange___init__impl__h6icbt(packedValue) {
    return packedValue;
  }
  function _get_packedValue__aj623s($this) {
    return $this;
  }
  function _TextRange___get_start__impl__ww4t90($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _get_packedValue__aj623s($this);
    return convertToInt(shiftRight(value, 32));
  }
  function _TextRange___get_end__impl__gcdxpp($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value = _get_packedValue__aj623s($this);
    return convertToInt(bitwiseAnd(value, new Long(-1, 0)));
  }
  function _TextRange___get_min__impl__uu95c4($this) {
    var tmp0 = _TextRange___get_start__impl__ww4t90($this);
    // Inline function 'kotlin.math.min' call
    var b = _TextRange___get_end__impl__gcdxpp($this);
    return Math.min(tmp0, b);
  }
  function _TextRange___get_max__impl__owm8m($this) {
    var tmp0 = _TextRange___get_start__impl__ww4t90($this);
    // Inline function 'kotlin.math.max' call
    var b = _TextRange___get_end__impl__gcdxpp($this);
    return Math.max(tmp0, b);
  }
  function TextRange__toString_impl_pqvlzl($this) {
    return 'TextRange(' + _TextRange___get_start__impl__ww4t90($this) + ', ' + _TextRange___get_end__impl__gcdxpp($this) + ')';
  }
  function Companion_1() {
    Companion_instance_2 = this;
    this.a5b_1 = TextRange_0(0);
  }
  var Companion_instance_2;
  function Companion_getInstance_15() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function TextRange__hashCode_impl_3zpp6q($this) {
    return $this.hashCode();
  }
  function TextRange__equals_impl_hkkmea($this, other) {
    if (!(other instanceof TextRange))
      return false;
    var tmp0_other_with_cast = other.t5a_1;
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextRange(packedValue) {
    Companion_getInstance_15();
    this.t5a_1 = packedValue;
  }
  protoOf(TextRange).toString = function () {
    return TextRange__toString_impl_pqvlzl(this.t5a_1);
  };
  protoOf(TextRange).hashCode = function () {
    return TextRange__hashCode_impl_3zpp6q(this.t5a_1);
  };
  protoOf(TextRange).equals = function (other) {
    return TextRange__equals_impl_hkkmea(this.t5a_1, other);
  };
  function TextRange_0(index) {
    return TextRange_1(index, index);
  }
  function TextRange_1(start, end) {
    return _TextRange___init__impl__h6icbt(packWithCheck(start, end));
  }
  function packWithCheck(start, end) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(start >= 0 && end >= 0)) {
      var tmp$ret$1 = 'start and end cannot be negative. [start: ' + start + ', end: ' + end + ']';
      throwIllegalArgumentException(tmp$ret$1);
    }
    // Inline function 'androidx.compose.ui.util.packInts' call
    return bitwiseOr(shiftLeft(fromInt(start), 32), bitwiseAnd(fromInt(end), new Long(-1, 0)));
  }
  var androidx_compose_ui_text_TextStyle$stable;
  function TextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    TextStyle.call($this, spanStyle, paragraphStyle, createPlatformTextStyleInternal(spanStyle.n5d_1, paragraphStyle.j58_1));
    return $this;
  }
  function TextStyle_init_$Create$_0(spanStyle, paragraphStyle) {
    return TextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(TextStyle)));
  }
  function TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $this) {
    color = color === VOID ? Companion_getInstance().y4h_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().f3s_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().f3s_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().y4h_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? Companion_getInstance_32().u5b_1 : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_34().h5b_1 : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().f3s_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_43().y5b_1 : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_27().b5c_1 : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp = SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.k5h_1, drawStyle);
    TextStyle.call($this, tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.l5h_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, objectCreate(protoOf(TextStyle)));
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.m5h_1 = TextStyle_init_$Create$_1();
  }
  var Companion_instance_3;
  function Companion_getInstance_16() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function TextStyle(spanStyle, paragraphStyle, platformStyle) {
    Companion_getInstance_16();
    platformStyle = platformStyle === VOID ? null : platformStyle;
    this.i5b_1 = spanStyle;
    this.j5b_1 = paragraphStyle;
    this.k5b_1 = platformStyle;
  }
  protoOf(TextStyle).n5h = function () {
    return this.i5b_1;
  };
  protoOf(TextStyle).l5b = function () {
    return this.j5b_1;
  };
  protoOf(TextStyle).o5h = function (other) {
    if (other == null || equals(other, Companion_getInstance_16().m5h_1))
      return this;
    return TextStyle_init_$Create$_0(this.n5h().r5e(other.n5h()), this.l5b().o58(other.l5b()));
  };
  protoOf(TextStyle).p5h = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion) {
    var mergedSpanStyle = fastMerge_0(this.i5b_1, color, null, NaN, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.k5h_1, drawStyle);
    var mergedParagraphStyle = fastMerge(this.j5b_1, textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.l5h_1, lineHeightStyle, lineBreak, hyphens, textMotion);
    if (this.i5b_1 === mergedSpanStyle && this.j5b_1 === mergedParagraphStyle)
      return this;
    return TextStyle_init_$Create$_0(mergedSpanStyle, mergedParagraphStyle);
  };
  protoOf(TextStyle).q5h = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion, $super) {
    color = color === VOID ? Companion_getInstance().y4h_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().f3s_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().f3s_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().y4h_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? Companion_getInstance_32().u5b_1 : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_34().h5b_1 : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().f3s_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_43().y5b_1 : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_27().b5c_1 : hyphens;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.p5h(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion);
    } else {
      var tmp_0 = $super.p5h;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), platformStyle, textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).m5b = function (other) {
    return TextStyle_init_$Create$_0(this.n5h(), this.l5b().o58(other));
  };
  protoOf(TextStyle).r5h = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp;
    if (equals(color, this.i5b_1.z4h())) {
      tmp = this.i5b_1.z5c_1;
    } else {
      tmp = Companion_instance_22.o5e(color);
    }
    var tmp_0 = tmp;
    var tmp_1 = new SpanStyle(tmp_0, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.k5h_1, drawStyle);
    return new TextStyle(tmp_1, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.l5h_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).s5h = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    color = color === VOID ? this.i5b_1.z4h() : color;
    fontSize = fontSize === VOID ? this.i5b_1.a5d_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.i5b_1.b5d_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.i5b_1.c5d_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.i5b_1.d5d_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.i5b_1.e5d_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.i5b_1.f5d_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.i5b_1.g5d_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.i5b_1.h5d_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.i5b_1.i5d_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.i5b_1.j5d_1 : localeList;
    background = background === VOID ? this.i5b_1.k5d_1 : background;
    textDecoration = textDecoration === VOID ? this.i5b_1.l5d_1 : textDecoration;
    shadow = shadow === VOID ? this.i5b_1.m5d_1 : shadow;
    drawStyle = drawStyle === VOID ? this.i5b_1.o5d_1 : drawStyle;
    textAlign = textAlign === VOID ? this.j5b_1.f58_1 : textAlign;
    textDirection = textDirection === VOID ? this.j5b_1.g58_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.j5b_1.h58_1 : lineHeight;
    textIndent = textIndent === VOID ? this.j5b_1.i58_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.k5b_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.j5b_1.k58_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.j5b_1.l58_1 : lineBreak;
    hyphens = hyphens === VOID ? this.j5b_1.m58_1 : hyphens;
    textMotion = textMotion === VOID ? this.j5b_1.n58_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.r5h(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.r5h;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).t5h = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp = SpanStyle_init_$Create$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.k5h_1, drawStyle);
    return new TextStyle(tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.l5h_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).u5h = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    alpha = alpha === VOID ? this.i5b_1.b4e() : alpha;
    fontSize = fontSize === VOID ? this.i5b_1.a5d_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.i5b_1.b5d_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.i5b_1.c5d_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.i5b_1.d5d_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.i5b_1.e5d_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.i5b_1.f5d_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.i5b_1.g5d_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.i5b_1.h5d_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.i5b_1.i5d_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.i5b_1.j5d_1 : localeList;
    background = background === VOID ? this.i5b_1.k5d_1 : background;
    textDecoration = textDecoration === VOID ? this.i5b_1.l5d_1 : textDecoration;
    shadow = shadow === VOID ? this.i5b_1.m5d_1 : shadow;
    drawStyle = drawStyle === VOID ? this.i5b_1.o5d_1 : drawStyle;
    textAlign = textAlign === VOID ? this.j5b_1.f58_1 : textAlign;
    textDirection = textDirection === VOID ? this.j5b_1.g58_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.j5b_1.h58_1 : lineHeight;
    textIndent = textIndent === VOID ? this.j5b_1.i58_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.k5b_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.j5b_1.k58_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.j5b_1.l58_1 : lineBreak;
    hyphens = hyphens === VOID ? this.j5b_1.m58_1 : hyphens;
    textMotion = textMotion === VOID ? this.j5b_1.n58_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.t5h(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.t5h;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, brush, alpha, new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).q5e = function () {
    return this.i5b_1.q5e();
  };
  protoOf(TextStyle).z4h = function () {
    return this.i5b_1.z4h();
  };
  protoOf(TextStyle).b4e = function () {
    return this.i5b_1.b4e();
  };
  protoOf(TextStyle).v5h = function () {
    return this.i5b_1.a5d_1;
  };
  protoOf(TextStyle).w5h = function () {
    return this.i5b_1.b5d_1;
  };
  protoOf(TextStyle).x5h = function () {
    return this.i5b_1.c5d_1;
  };
  protoOf(TextStyle).y5h = function () {
    return this.i5b_1.d5d_1;
  };
  protoOf(TextStyle).z5h = function () {
    return this.i5b_1.e5d_1;
  };
  protoOf(TextStyle).a5i = function () {
    return this.i5b_1.f5d_1;
  };
  protoOf(TextStyle).b5i = function () {
    return this.i5b_1.g5d_1;
  };
  protoOf(TextStyle).c5i = function () {
    return this.i5b_1.h5d_1;
  };
  protoOf(TextStyle).d5i = function () {
    return this.i5b_1.i5d_1;
  };
  protoOf(TextStyle).e5i = function () {
    return this.i5b_1.j5d_1;
  };
  protoOf(TextStyle).f5i = function () {
    return this.i5b_1.k5d_1;
  };
  protoOf(TextStyle).g5i = function () {
    return this.i5b_1.l5d_1;
  };
  protoOf(TextStyle).h5i = function () {
    return this.i5b_1.m5d_1;
  };
  protoOf(TextStyle).i5i = function () {
    return this.i5b_1.o5d_1;
  };
  protoOf(TextStyle).j5i = function () {
    return this.j5b_1.f58_1;
  };
  protoOf(TextStyle).k5i = function () {
    return this.j5b_1.g58_1;
  };
  protoOf(TextStyle).l5i = function () {
    return this.j5b_1.h58_1;
  };
  protoOf(TextStyle).m5i = function () {
    return this.j5b_1.i58_1;
  };
  protoOf(TextStyle).n5i = function () {
    return this.j5b_1.k58_1;
  };
  protoOf(TextStyle).o5i = function () {
    return this.j5b_1.m58_1;
  };
  protoOf(TextStyle).p5i = function () {
    return this.j5b_1.l58_1;
  };
  protoOf(TextStyle).q5i = function () {
    return this.j5b_1.n58_1;
  };
  protoOf(TextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextStyle))
      return false;
    if (!this.i5b_1.equals(other.i5b_1))
      return false;
    if (!this.j5b_1.equals(other.j5b_1))
      return false;
    if (!equals(this.k5b_1, other.k5b_1))
      return false;
    return true;
  };
  protoOf(TextStyle).r5i = function (other) {
    return this === other || (this.j5b_1.equals(other.j5b_1) && this.i5b_1.u5e(other.i5b_1));
  };
  protoOf(TextStyle).s5i = function (other) {
    return this === other || this.i5b_1.v5e(other.i5b_1);
  };
  protoOf(TextStyle).hashCode = function () {
    var result = this.i5b_1.hashCode();
    result = imul(31, result) + this.j5b_1.hashCode() | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.k5b_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(TextStyle).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.r7('TextStyle(');
    this_0.r7('color=' + Color__toString_impl_hpzmaq(this.z4h()) + ', ');
    this_0.r7('brush=' + toString(this.q5e()) + ', ');
    this_0.r7('alpha=' + this.b4e() + ', ');
    this_0.r7('fontSize=' + TextUnit__toString_impl_51ghw0(this.v5h()) + ', ');
    this_0.r7('fontWeight=' + toString(this.w5h()) + ', ');
    var tmp = this.x5h();
    this_0.r7('fontStyle=' + toString(tmp == null ? null : new FontStyle(tmp)) + ', ');
    var tmp_0 = this.y5h();
    this_0.r7('fontSynthesis=' + toString(tmp_0 == null ? null : new FontSynthesis(tmp_0)) + ', ');
    this_0.r7('fontFamily=' + toString(this.z5h()) + ', ');
    this_0.r7('fontFeatureSettings=' + this.a5i() + ', ');
    this_0.r7('letterSpacing=' + TextUnit__toString_impl_51ghw0(this.b5i()) + ', ');
    var tmp_1 = this.c5i();
    this_0.r7('baselineShift=' + toString(tmp_1 == null ? null : new BaselineShift(tmp_1)) + ', ');
    this_0.r7('textGeometricTransform=' + toString(this.d5i()) + ', ');
    this_0.r7('localeList=' + toString(this.e5i()) + ', ');
    this_0.r7('background=' + Color__toString_impl_hpzmaq(this.f5i()) + ', ');
    this_0.r7('textDecoration=' + toString(this.g5i()) + ', ');
    this_0.r7('shadow=' + toString(this.h5i()) + ', ');
    this_0.r7('drawStyle=' + toString(this.i5i()) + ', ');
    this_0.r7('textAlign=' + TextAlign__toString_impl_6ha6d3(this.j5i()) + ', ');
    this_0.r7('textDirection=' + TextDirection__toString_impl_x3uh9t(this.k5i()) + ', ');
    this_0.r7('lineHeight=' + TextUnit__toString_impl_51ghw0(this.l5i()) + ', ');
    this_0.r7('textIndent=' + toString(this.m5i()) + ', ');
    this_0.r7('platformStyle=' + toString(this.k5b_1) + ', ');
    this_0.r7('lineHeightStyle=' + toString(this.n5i()) + ', ');
    this_0.r7('lineBreak=' + LineBreak__toString_impl_mphhli(this.p5i()) + ', ');
    this_0.r7('hyphens=' + Hyphens__toString_impl_ck1wg0(this.o5i()) + ', ');
    this_0.r7('textMotion=' + toString(this.q5i()));
    this_0.r7(')');
    return this_0.toString();
  };
  function resolveDefaults(style, direction) {
    return new TextStyle(resolveSpanStyleDefaults(style.i5b_1), resolveParagraphStyleDefaults(style.j5b_1, direction), style.k5b_1);
  }
  function createPlatformTextStyleInternal(platformSpanStyle, platformParagraphStyle) {
    var tmp;
    if (platformSpanStyle == null && platformParagraphStyle == null) {
      tmp = null;
    } else {
      tmp = createPlatformTextStyle(platformSpanStyle, platformParagraphStyle);
    }
    return tmp;
  }
  function resolveTextDirection_0(layoutDirection, textDirection) {
    var tmp;
    if (textDirection === Companion_getInstance_34().e5b_1) {
      var tmp_0;
      switch (layoutDirection.i2_1) {
        case 0:
          tmp_0 = Companion_getInstance_34().f5b_1;
          break;
        case 1:
          tmp_0 = Companion_getInstance_34().g5b_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    } else if (textDirection === Companion_getInstance_34().h5b_1) {
      var tmp_1;
      switch (layoutDirection.i2_1) {
        case 0:
          tmp_1 = Companion_getInstance_34().c5b_1;
          break;
        case 1:
          tmp_1 = Companion_getInstance_34().d5b_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_1;
    } else {
      tmp = textDirection;
    }
    return tmp;
  }
  var androidx_compose_ui_text_TtsAnnotation$stable;
  var androidx_compose_ui_text_VerbatimTtsAnnotation$stable;
  function TtsAnnotation() {
  }
  function VerbatimTtsAnnotation(verbatim) {
    TtsAnnotation.call(this);
    this.t5c_1 = verbatim;
  }
  protoOf(VerbatimTtsAnnotation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerbatimTtsAnnotation))
      return false;
    if (!(this.t5c_1 === other.t5c_1))
      return false;
    return true;
  };
  protoOf(VerbatimTtsAnnotation).hashCode = function () {
    return getStringHashCode(this.t5c_1);
  };
  protoOf(VerbatimTtsAnnotation).toString = function () {
    return 'VerbatimTtsAnnotation(verbatim=' + this.t5c_1 + ')';
  };
  var androidx_compose_ui_text_UrlAnnotation$stable;
  function UrlAnnotation(url) {
    this.u5c_1 = url;
  }
  protoOf(UrlAnnotation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UrlAnnotation))
      return false;
    if (!(this.u5c_1 === other.u5c_1))
      return false;
    return true;
  };
  protoOf(UrlAnnotation).hashCode = function () {
    return getStringHashCode(this.u5c_1);
  };
  protoOf(UrlAnnotation).toString = function () {
    return 'UrlAnnotation(url=' + this.u5c_1 + ')';
  };
  var androidx_compose_ui_text_font_ResourceFont$stable;
  function Font() {
  }
  var androidx_compose_ui_text_font_FontFamily$stable;
  var androidx_compose_ui_text_font_FileBasedFontFamily$stable;
  var androidx_compose_ui_text_font_SystemFontFamily$stable;
  var androidx_compose_ui_text_font_FontListFontFamily$stable;
  var androidx_compose_ui_text_font_GenericFontFamily$stable;
  var androidx_compose_ui_text_font_DefaultFontFamily$stable;
  var androidx_compose_ui_text_font_LoadedFontFamily$stable;
  function GenericFontFamily(name, fontFamilyName) {
    SystemFontFamily.call(this);
    this.z5i_1 = name;
    this.a5j_1 = fontFamilyName;
  }
  protoOf(GenericFontFamily).toString = function () {
    return this.a5j_1;
  };
  function Companion_3() {
    Companion_instance_4 = this;
    this.z5f_1 = new DefaultFontFamily();
    this.a5g_1 = new GenericFontFamily('sans-serif', 'FontFamily.SansSerif');
    this.b5g_1 = new GenericFontFamily('serif', 'FontFamily.Serif');
    this.c5g_1 = new GenericFontFamily('monospace', 'FontFamily.Monospace');
    this.d5g_1 = new GenericFontFamily('cursive', 'FontFamily.Cursive');
  }
  var Companion_instance_4;
  function Companion_getInstance_17() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function FontFamily(canLoadSynchronously) {
    Companion_getInstance_17();
    this.b5j_1 = canLoadSynchronously;
  }
  function SystemFontFamily() {
    FontFamily.call(this, true);
  }
  function DefaultFontFamily() {
    SystemFontFamily.call(this);
  }
  protoOf(DefaultFontFamily).toString = function () {
    return 'FontFamily.Default';
  };
  function FontListFontFamily() {
  }
  protoOf(FontListFontFamily).toString = function () {
    return 'FontListFontFamily(fonts=' + toString_0(this.d5j_1) + ')';
  };
  function FileBasedFontFamily() {
  }
  function LoadedFontFamily() {
  }
  function get_GlobalTypefaceRequestCache() {
    _init_properties_FontFamilyResolver_kt__lawdt3();
    return GlobalTypefaceRequestCache;
  }
  var GlobalTypefaceRequestCache;
  function get_GlobalAsyncTypefaceCache() {
    _init_properties_FontFamilyResolver_kt__lawdt3();
    return GlobalAsyncTypefaceCache;
  }
  var GlobalAsyncTypefaceCache;
  var androidx_compose_ui_text_font_FontFamilyResolverImpl$stable;
  var androidx_compose_ui_text_font_TypefaceRequest$stable;
  var androidx_compose_ui_text_font_TypefaceResult_Immutable$stable;
  var androidx_compose_ui_text_font_TypefaceResult_Async$stable;
  var androidx_compose_ui_text_font_TypefaceRequestCache$stable;
  function TypefaceRequestCache$runCached$lambda(this$0, $typefaceRequest) {
    return function (finalResult) {
      // Inline function 'androidx.compose.ui.text.platform.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.e5j_1;
      if (finalResult.g5j()) {
        this$0.f5j_1.tl($typefaceRequest, finalResult);
      } else {
        this$0.f5j_1.xl($typefaceRequest);
      }
      return Unit_instance;
    };
  }
  function TypefaceRequestCache() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.text.platform.makeSynchronizedObject' call
    tmp.e5j_1 = new SynchronizedObject();
    this.f5j_1 = new LruCache(16);
  }
  protoOf(TypefaceRequestCache).h5j = function (typefaceRequest, resolveTypeface) {
    // Inline function 'androidx.compose.ui.text.platform.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.e5j_1;
    var tmp0_safe_receiver = this.f5j_1.ql(typefaceRequest);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_0;
      if (tmp0_safe_receiver.g5j()) {
        return tmp0_safe_receiver;
      } else {
        tmp_0 = this.f5j_1.xl(typefaceRequest);
      }
      tmp = tmp_0;
    }
    var tmp_1;
    try {
      tmp_1 = resolveTypeface(TypefaceRequestCache$runCached$lambda(this, typefaceRequest));
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var cause = $p;
        throw IllegalStateException_init_$Create$('Could not load font', cause);
      } else {
        throw $p;
      }
    }
    var currentTypefaceResult = tmp_1;
    // Inline function 'androidx.compose.ui.text.platform.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.e5j_1;
    if (this.f5j_1.ql(typefaceRequest) == null && currentTypefaceResult.g5j()) {
      this.f5j_1.tl(typefaceRequest, currentTypefaceResult);
    }
    return currentTypefaceResult;
  };
  function TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    this.i5j_1 = fontFamily;
    this.j5j_1 = fontWeight;
    this.k5j_1 = fontStyle;
    this.l5j_1 = fontSynthesis;
    this.m5j_1 = resourceLoaderCacheKey;
  }
  protoOf(TypefaceRequest).n5j = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    return new TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).o5j = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey, $super) {
    fontFamily = fontFamily === VOID ? this.i5j_1 : fontFamily;
    fontWeight = fontWeight === VOID ? this.j5j_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.k5j_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.l5j_1 : fontSynthesis;
    resourceLoaderCacheKey = resourceLoaderCacheKey === VOID ? this.m5j_1 : resourceLoaderCacheKey;
    return $super === VOID ? this.n5j(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) : $super.n5j.call(this, fontFamily, fontWeight, new FontStyle(fontStyle), new FontSynthesis(fontSynthesis), resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).toString = function () {
    return 'TypefaceRequest(fontFamily=' + toString(this.i5j_1) + ', fontWeight=' + this.j5j_1.toString() + ', fontStyle=' + FontStyle__toString_impl_thncxr(this.k5j_1) + ', fontSynthesis=' + FontSynthesis__toString_impl_gunvr0(this.l5j_1) + ', resourceLoaderCacheKey=' + toString(this.m5j_1) + ')';
  };
  protoOf(TypefaceRequest).hashCode = function () {
    var result = this.i5j_1 == null ? 0 : hashCode(this.i5j_1);
    result = imul(result, 31) + this.j5j_1.hashCode() | 0;
    result = imul(result, 31) + FontStyle__hashCode_impl_7qhg4w(this.k5j_1) | 0;
    result = imul(result, 31) + FontSynthesis__hashCode_impl_4wi11v(this.l5j_1) | 0;
    result = imul(result, 31) + (this.m5j_1 == null ? 0 : hashCode(this.m5j_1)) | 0;
    return result;
  };
  protoOf(TypefaceRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypefaceRequest))
      return false;
    if (!equals(this.i5j_1, other.i5j_1))
      return false;
    if (!this.j5j_1.equals(other.j5j_1))
      return false;
    if (!(this.k5j_1 === other.k5j_1))
      return false;
    if (!(this.l5j_1 === other.l5j_1))
      return false;
    if (!equals(this.m5j_1, other.m5j_1))
      return false;
    return true;
  };
  function Immutable(value, cacheable) {
    cacheable = cacheable === VOID ? true : cacheable;
    this.p5j_1 = value;
    this.q5j_1 = cacheable;
  }
  protoOf(Immutable).x1 = function () {
    return this.p5j_1;
  };
  protoOf(Immutable).g5j = function () {
    return this.q5j_1;
  };
  function Async(current) {
    this.r5j_1 = current;
  }
  protoOf(Async).g5j = function () {
    return this.r5j_1.y5j_1;
  };
  protoOf(Async).x1 = function () {
    return this.r5j_1.x1();
  };
  function resolve($this, typefaceRequest) {
    var result = $this.b5k_1.h5j(typefaceRequest, FontFamilyResolverImpl$resolve$lambda($this, typefaceRequest));
    return result;
  }
  function FontFamilyResolverImpl$createDefaultTypeface$lambda(this$0) {
    return function (it) {
      return resolve(this$0, it.o5j(null)).x1();
    };
  }
  function FontFamilyResolverImpl$resolve$lambda(this$0, $typefaceRequest) {
    return function (onAsyncCompletion) {
      var tmp0_elvis_lhs = this$0.c5k_1.h5k($typefaceRequest, this$0.z5j_1, onAsyncCompletion, this$0.e5k_1);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.d5k_1.h5k($typefaceRequest, this$0.z5j_1, onAsyncCompletion, this$0.e5k_1) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$_0('Could not load font');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      return tmp;
    };
  }
  function FontFamilyResolverImpl(platformFontLoader, platformResolveInterceptor, typefaceRequestCache, fontListFontFamilyTypefaceAdapter, platformFamilyTypefaceAdapter) {
    platformResolveInterceptor = platformResolveInterceptor === VOID ? Companion_getInstance_18().i5k_1 : platformResolveInterceptor;
    typefaceRequestCache = typefaceRequestCache === VOID ? get_GlobalTypefaceRequestCache() : typefaceRequestCache;
    fontListFontFamilyTypefaceAdapter = fontListFontFamilyTypefaceAdapter === VOID ? new FontListFontFamilyTypefaceAdapter(get_GlobalAsyncTypefaceCache()) : fontListFontFamilyTypefaceAdapter;
    platformFamilyTypefaceAdapter = platformFamilyTypefaceAdapter === VOID ? new PlatformFontFamilyTypefaceAdapter() : platformFamilyTypefaceAdapter;
    this.z5j_1 = platformFontLoader;
    this.a5k_1 = platformResolveInterceptor;
    this.b5k_1 = typefaceRequestCache;
    this.c5k_1 = fontListFontFamilyTypefaceAdapter;
    this.d5k_1 = platformFamilyTypefaceAdapter;
    var tmp = this;
    tmp.e5k_1 = FontFamilyResolverImpl$createDefaultTypeface$lambda(this);
  }
  protoOf(FontFamilyResolverImpl).j5k = function (fontFamily, fontWeight, fontStyle, fontSynthesis) {
    return resolve(this, new TypefaceRequest(this.a5k_1.k5k(fontFamily), this.a5k_1.l5k(fontWeight), this.a5k_1.m5k(fontStyle), this.a5k_1.n5k(fontSynthesis), this.z5j_1.o5k()));
  };
  function PlatformResolveInterceptor$Companion$Default$1() {
  }
  function Companion_4() {
    Companion_instance_5 = this;
    var tmp = this;
    tmp.i5k_1 = new PlatformResolveInterceptor$Companion$Default$1();
  }
  var Companion_instance_5;
  function Companion_getInstance_18() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function PlatformResolveInterceptor() {
  }
  var properties_initialized_FontFamilyResolver_kt_43uw85;
  function _init_properties_FontFamilyResolver_kt__lawdt3() {
    if (!properties_initialized_FontFamilyResolver_kt_43uw85) {
      properties_initialized_FontFamilyResolver_kt_43uw85 = true;
      GlobalTypefaceRequestCache = new TypefaceRequestCache();
      GlobalAsyncTypefaceCache = new AsyncTypefaceCache();
      androidx_compose_ui_text_font_FontFamilyResolverImpl$stable = 8;
      androidx_compose_ui_text_font_TypefaceRequest$stable = 8;
      androidx_compose_ui_text_font_TypefaceResult_Immutable$stable = 0;
      androidx_compose_ui_text_font_TypefaceResult_Async$stable = 0;
      androidx_compose_ui_text_font_TypefaceRequestCache$stable = 8;
    }
  }
  var androidx_compose_ui_text_font_FontListFontFamilyTypefaceAdapter$stable;
  var androidx_compose_ui_text_font_AsyncFontListLoader$stable;
  var androidx_compose_ui_text_font_AsyncTypefaceCache_Key$stable;
  var androidx_compose_ui_text_font_AsyncTypefaceCache$stable;
  function _AsyncTypefaceResult___init__impl__h4msax(result) {
    return result;
  }
  function _AsyncTypefaceResult___get_result__impl__kpcqqb($this) {
    return $this;
  }
  function _AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca($this) {
    return _AsyncTypefaceResult___get_result__impl__kpcqqb($this) == null;
  }
  function AsyncTypefaceResult__toString_impl_imltdd($this) {
    return 'AsyncTypefaceResult(result=' + toString($this) + ')';
  }
  function AsyncTypefaceResult__hashCode_impl_34k3fi($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function AsyncTypefaceResult__equals_impl_4qqxz2($this, other) {
    if (!(other instanceof AsyncTypefaceResult))
      return false;
    var tmp0_other_with_cast = other.p5k_1;
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function AsyncTypefaceResult(result) {
    this.p5k_1 = result;
  }
  protoOf(AsyncTypefaceResult).toString = function () {
    return AsyncTypefaceResult__toString_impl_imltdd(this.p5k_1);
  };
  protoOf(AsyncTypefaceResult).hashCode = function () {
    return AsyncTypefaceResult__hashCode_impl_34k3fi(this.p5k_1);
  };
  protoOf(AsyncTypefaceResult).equals = function (other) {
    return AsyncTypefaceResult__equals_impl_4qqxz2(this.p5k_1, other);
  };
  function Key(font, loaderKey) {
    this.q5k_1 = font;
    this.r5k_1 = loaderKey;
  }
  protoOf(Key).toString = function () {
    return 'Key(font=' + toString_0(this.q5k_1) + ', loaderKey=' + toString(this.r5k_1) + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = hashCode(this.q5k_1);
    result = imul(result, 31) + (this.r5k_1 == null ? 0 : hashCode(this.r5k_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    if (!equals(this.q5k_1, other.q5k_1))
      return false;
    if (!equals(this.r5k_1, other.r5k_1))
      return false;
    return true;
  };
  function access$_get_resultCache__u960s4($this) {
    return $this.t5k_1;
  }
  function access$_get_permanentCache__bpfryv($this) {
    return $this.u5k_1;
  }
  function access$_get_cacheLock__y7hpng($this) {
    return $this.v5k_1;
  }
  function $runCachedCOROUTINE$(_this__u8e3s4, font, platformFontLoader, forever, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e5l_1 = _this__u8e3s4;
    this.f5l_1 = font;
    this.g5l_1 = platformFontLoader;
    this.h5l_1 = forever;
    this.i5l_1 = block;
  }
  protoOf($runCachedCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.j5l_1 = new Key(this.f5l_1, this.g5l_1.o5k());
            this.e5l_1.v5k_1;
            var tmp0_elvis_lhs = this.e5l_1.t5k_1.ql(this.j5l_1);
            var priorResult = tmp0_elvis_lhs == null ? this.e5l_1.u5k_1.g2(this.j5l_1) : tmp0_elvis_lhs;
            if (!(priorResult == null)) {
              return _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.p5k_1);
            }

            this.m8_1 = 1;
            suspendResult = this.i5l_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = suspendResult;
            this.e5l_1.v5k_1;
            if (this_0 == null) {
              this.e5l_1.u5k_1.gq(this.j5l_1, new AsyncTypefaceResult(this.e5l_1.s5k_1));
            } else if (this.h5l_1) {
              this.e5l_1.u5k_1.gq(this.j5l_1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(this_0)));
            } else {
              this.e5l_1.t5k_1.tl(this.j5l_1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(this_0)));
            }

            return this_0;
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
  function AsyncTypefaceCache() {
    this.s5k_1 = _AsyncTypefaceResult___init__impl__h4msax(null);
    this.t5k_1 = new LruCache(16);
    this.u5k_1 = mutableScatterMapOf();
    var tmp = this;
    // Inline function 'androidx.compose.ui.text.platform.makeSynchronizedObject' call
    tmp.v5k_1 = new SynchronizedObject();
  }
  protoOf(AsyncTypefaceCache).k5l = function (font, platformFontLoader, result, forever) {
    var key = new Key(font, platformFontLoader.o5k());
    // Inline function 'androidx.compose.ui.text.platform.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.v5k_1;
    var tmp;
    if (result == null) {
      this.u5k_1.gq(key, new AsyncTypefaceResult(this.s5k_1));
      tmp = Unit_instance;
    } else if (forever) {
      this.u5k_1.gq(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
      tmp = Unit_instance;
    } else {
      tmp = this.t5k_1.tl(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    }
  };
  protoOf(AsyncTypefaceCache).l5l = function (font, platformFontLoader, result, forever, $super) {
    forever = forever === VOID ? false : forever;
    var tmp;
    if ($super === VOID) {
      this.k5l(font, platformFontLoader, result, forever);
      tmp = Unit_instance;
    } else {
      tmp = $super.k5l.call(this, font, platformFontLoader, result, forever);
    }
    return tmp;
  };
  protoOf(AsyncTypefaceCache).m5l = function (font, platformFontLoader) {
    var key = new Key(font, platformFontLoader.o5k());
    // Inline function 'androidx.compose.ui.text.platform.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.v5k_1;
    var tmp0_elvis_lhs = this.t5k_1.ql(key);
    return tmp0_elvis_lhs == null ? this.u5k_1.g2(key) : tmp0_elvis_lhs;
  };
  protoOf(AsyncTypefaceCache).n5l = function (font, platformFontLoader, forever, block, $completion) {
    var tmp = new $runCachedCOROUTINE$(this, font, platformFontLoader, forever, block, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  function _set_value__lx0xdg($this, _set____db54di) {
    var tmp0 = $this.x5j_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AsyncFontListLoader$_get_value_$ref_okp6ex_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, AsyncFontListLoader$_set_value_$ref_h5kf5n_0());
    tmp0.k1k(_set____db54di);
    return Unit_instance;
  }
  function AsyncFontListLoader$_get_value_$ref_okp6ex() {
    return function (p0) {
      return p0.x1();
    };
  }
  function AsyncFontListLoader$_set_value_$ref_h5kf5n() {
    return function (p0, p1) {
      _set_value__lx0xdg(p0, p1);
      return Unit_instance;
    };
  }
  function AsyncFontListLoader$_get_value_$ref_okp6ex_0() {
    return function (p0) {
      return p0.x1();
    };
  }
  function AsyncFontListLoader$_set_value_$ref_h5kf5n_0() {
    return function (p0, p1) {
      _set_value__lx0xdg(p0, p1);
      return Unit_instance;
    };
  }
  function AsyncFontListLoader$load$slambda(this$0, $font, resultContinuation) {
    this.w5l_1 = this$0;
    this.x5l_1 = $font;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$load$slambda).y5l = function ($completion) {
    var tmp = this.p1o($completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(AsyncFontListLoader$load$slambda).q1o = function ($completion) {
    return this.y5l($completion);
  };
  protoOf(AsyncFontListLoader$load$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.w5l_1.z5l(this.x5l_1, this);
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
  protoOf(AsyncFontListLoader$load$slambda).p1o = function (completion) {
    return new AsyncFontListLoader$load$slambda(this.w5l_1, this.x5l_1, completion);
  };
  function AsyncFontListLoader$load$slambda_0(this$0, $font, resultContinuation) {
    var i = new AsyncFontListLoader$load$slambda(this$0, $font, resultContinuation);
    var l = function ($completion) {
      return i.y5l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    this.i5m_1 = this$0;
    this.j5m_1 = $this_loadWithTimeoutOrNull;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).l5m = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.c1m($this$withTimeoutOrNull, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).e9 = function (p1, $completion) {
    return this.l5m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.i5m_1.w5j_1.m5m(this.j5m_1, this);
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
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).c1m = function ($this$withTimeoutOrNull, completion) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this.i5m_1, this.j5m_1, completion);
    i.k5m_1 = $this$withTimeoutOrNull;
    return i;
  };
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $completion) {
      return i.l5m($this$withTimeoutOrNull, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $loadCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v5m_1 = _this__u8e3s4;
  }
  protoOf($loadCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 12;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.m8_1 = 2;
            continue $sm;
          case 2:
            this.n8_1 = 11;
            this.x5m_1 = this.v5m_1.s5j_1;
            this.y5m_1 = get_indices(this.x5m_1).i();
            this.m8_1 = 3;
            continue $sm;
          case 3:
            if (!this.y5m_1.j()) {
              this.m8_1 = 9;
              continue $sm;
            }

            var index = this.y5m_1.k();
            var item = this.x5m_1.m(index);
            this.w5m_1 = item;
            if (this.w5m_1.u5i() === Companion_getInstance_20().x5i_1) {
              this.m8_1 = 4;
              suspendResult = this.v5m_1.u5j_1.n5l(this.w5m_1, this.v5m_1.w5j_1, false, AsyncFontListLoader$load$slambda_0(this.v5m_1, this.w5m_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 7;
              continue $sm;
            }

          case 4:
            var typeface = suspendResult;
            if (!(typeface == null)) {
              _set_value__lx0xdg(this.v5m_1, synthesizeTypeface(this.v5m_1.t5j_1.l5j_1, typeface, this.w5m_1, this.v5m_1.t5j_1.j5j_1, this.v5m_1.t5j_1.k5j_1));
              this.n8_1 = 12;
              this.m8_1 = 8;
              continue $sm;
            } else {
              this.m8_1 = 5;
              suspendResult = yield_0(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 5:
            this.m8_1 = 6;
            continue $sm;
          case 6:
            this.m8_1 = 7;
            continue $sm;
          case 7:
            this.m8_1 = 3;
            continue $sm;
          case 8:
            this.n8_1 = 12;
            var shouldCache = get_isActive(this.s8());
            this.v5m_1.y5j_1 = false;
            this.v5m_1.v5j_1(new Immutable(this.v5m_1.x1(), shouldCache));
            return Unit_instance;
          case 9:
            this.n8_1 = 12;
            this.m8_1 = 10;
            continue $sm;
          case 10:
            this.n8_1 = 12;
            var shouldCache_0 = get_isActive(this.s8());
            this.v5m_1.y5j_1 = false;
            this.v5m_1.v5j_1(new Immutable(this.v5m_1.x1(), shouldCache_0));
            return Unit_instance;
          case 11:
            this.n8_1 = 12;
            var t = this.p8_1;
            var shouldCache_1 = get_isActive(this.s8());
            this.v5m_1.y5j_1 = false;
            this.v5m_1.v5j_1(new Immutable(this.v5m_1.x1(), shouldCache_1));
            throw t;
          case 12:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 12) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  function $loadWithTimeoutOrNullCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h5n_1 = _this__u8e3s4;
    this.i5n_1 = _this__u8e3s4_0;
  }
  protoOf($loadWithTimeoutOrNullCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            this.n8_1 = 2;
            this.m8_1 = 1;
            var tmp_0 = new Long(15000, 0);
            suspendResult = withTimeoutOrNull(tmp_0, AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this.h5n_1, this.i5n_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.j5n_1 = suspendResult;
            this.n8_1 = 3;
            this.m8_1 = 4;
            continue $sm;
          case 2:
            this.n8_1 = 3;
            var tmp_1 = this.p8_1;
            if (tmp_1 instanceof CancellationException) {
              var cancel = this.p8_1;
              var tmp_2 = this;
              var tmp_3;
              if (get_isActive(this.s8())) {
                tmp_3 = null;
              } else {
                throw cancel;
              }
              tmp_2.j5n_1 = tmp_3;
              this.m8_1 = 4;
              continue $sm;
            } else {
              var tmp_4 = this.p8_1;
              if (tmp_4 instanceof Exception) {
                var uncaughtFontLoadException = this.p8_1;
                var tmp_5 = this;
                var tmp0_safe_receiver = this.s8().z8(Key_instance);
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  tmp0_safe_receiver.a13(this.s8(), IllegalStateException_init_$Create$('Unable to load font ' + toString_0(this.i5n_1), uncaughtFontLoadException));
                }
                tmp_5.j5n_1 = null;
                this.m8_1 = 4;
                continue $sm;
              } else {
                throw this.p8_1;
              }
            }

          case 3:
            throw this.p8_1;
          case 4:
            this.n8_1 = 3;
            return this.j5n_1;
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
  function AsyncFontListLoader(fontList, initialType, typefaceRequest, asyncTypefaceCache, onCompletion, platformFontLoader) {
    this.s5j_1 = fontList;
    this.t5j_1 = typefaceRequest;
    this.u5j_1 = asyncTypefaceCache;
    this.v5j_1 = onCompletion;
    this.w5j_1 = platformFontLoader;
    this.x5j_1 = mutableStateOf(initialType);
    this.y5j_1 = true;
  }
  protoOf(AsyncFontListLoader).x1 = function () {
    var tmp0 = this.x5j_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AsyncFontListLoader$_get_value_$ref_okp6ex();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, AsyncFontListLoader$_set_value_$ref_h5kf5n());
    return tmp0.x1();
  };
  protoOf(AsyncFontListLoader).k5n = function ($completion) {
    var tmp = new $loadCOROUTINE$(this, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(AsyncFontListLoader).z5l = function (_this__u8e3s4, $completion) {
    var tmp = new $loadWithTimeoutOrNullCOROUTINE$(this, _this__u8e3s4, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  function FontListFontFamilyTypefaceAdapter$Companion$DropExceptionHandler$$inlined$CoroutineExceptionHandler$1() {
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$Companion$DropExceptionHandler$$inlined$CoroutineExceptionHandler$1).a13 = function (context, exception) {
    return Unit_instance;
  };
  function Companion_5() {
    Companion_instance_6 = this;
    this.m5n_1 = new FontMatcher();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    tmp.n5n_1 = new FontListFontFamilyTypefaceAdapter$Companion$DropExceptionHandler$$inlined$CoroutineExceptionHandler$1();
  }
  var Companion_instance_6;
  function Companion_getInstance_19() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  function FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation) {
    this.w5n_1 = $asyncLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).b1m = function ($this$launch, $completion) {
    var tmp = this.c1m($this$launch, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).e9 = function (p1, $completion) {
    return this.b1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.w5n_1.k5n(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).c1m = function ($this$launch, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda(this.w5n_1, completion);
    i.x5n_1 = $this$launch;
    return i;
  };
  function FontListFontFamilyTypefaceAdapter$resolve$slambda_0($asyncLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter(asyncTypefaceCache, injectedContext) {
    Companion_getInstance_19();
    asyncTypefaceCache = asyncTypefaceCache === VOID ? new AsyncTypefaceCache() : asyncTypefaceCache;
    injectedContext = injectedContext === VOID ? EmptyCoroutineContext_getInstance() : injectedContext;
    this.f5k_1 = asyncTypefaceCache;
    this.g5k_1 = CoroutineScope_0(Companion_getInstance_19().n5n_1.jf(get_FontCacheManagementDispatcher()).jf(injectedContext).jf(SupervisorJob(injectedContext.z8(Key_instance_0))));
  }
  protoOf(FontListFontFamilyTypefaceAdapter).h5k = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.i5j_1;
    if (!(tmp instanceof FontListFontFamily))
      return null;
    var matched = Companion_getInstance_19().m5n_1.y5n(typefaceRequest.i5j_1.d5j_1, typefaceRequest.j5j_1, typefaceRequest.k5j_1);
    var _destruct__k2r9zo = firstImmediatelyAvailable(matched, typefaceRequest, this.f5k_1, platformFontLoader, createDefaultTypeface);
    var asyncFontsToLoad = _destruct__k2r9zo.de();
    var synthesizedTypeface = _destruct__k2r9zo.ee();
    if (asyncFontsToLoad == null)
      return new Immutable(synthesizedTypeface);
    var asyncLoader = new AsyncFontListLoader(asyncFontsToLoad, synthesizedTypeface, typefaceRequest, this.f5k_1, onAsyncCompletion, platformFontLoader);
    var tmp_0 = this.g5k_1;
    var tmp_1 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp_0, VOID, tmp_1, FontListFontFamilyTypefaceAdapter$resolve$slambda_0(asyncLoader, null));
    return new Async(asyncLoader);
  };
  function firstImmediatelyAvailable(_this__u8e3s4, typefaceRequest, asyncTypefaceCache, platformFontLoader, createDefaultTypeface) {
    var asyncFontsToLoad = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.l() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var idx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var font = _this__u8e3s4.m(idx);
        var tmp0_subject = font.u5i();
        if (tmp0_subject === Companion_getInstance_20().v5i_1) {
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            // Inline function 'androidx.compose.ui.text.platform.synchronized' call
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            access$_get_cacheLock__y7hpng(asyncTypefaceCache);
            var key = new Key(font, platformFontLoader.o5k());
            var tmp0_elvis_lhs = access$_get_resultCache__u960s4(asyncTypefaceCache).ql(key);
            var priorResult = tmp0_elvis_lhs == null ? access$_get_permanentCache__bpfryv(asyncTypefaceCache).g2(key) : tmp0_elvis_lhs;
            if (!(priorResult == null)) {
              tmp$ret$0 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.p5k_1);
              break $l$block;
            }
            var tmp;
            try {
              tmp = platformFontLoader.z5n(font);
            } catch ($p) {
              var tmp_0;
              if ($p instanceof Exception) {
                var cause = $p;
                tmp_0 = createDefaultTypeface(typefaceRequest);
              } else {
                throw $p;
              }
              tmp = tmp_0;
            }
            // Inline function 'kotlin.also' call
            var this_0 = tmp;
            asyncTypefaceCache.l5l(font, platformFontLoader, this_0);
            tmp$ret$0 = this_0;
          }
          var tmp1_elvis_lhs = tmp$ret$0;
          var result = tmp1_elvis_lhs == null ? createDefaultTypeface(typefaceRequest) : tmp1_elvis_lhs;
          return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.l5j_1, result, font, typefaceRequest.j5j_1, typefaceRequest.k5j_1));
        } else if (tmp0_subject === Companion_getInstance_20().w5i_1) {
          var tmp$ret$7;
          $l$block_0: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            // Inline function 'androidx.compose.ui.text.platform.synchronized' call
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            access$_get_cacheLock__y7hpng(asyncTypefaceCache);
            var key_0 = new Key(font, platformFontLoader.o5k());
            var tmp0_elvis_lhs_0 = access$_get_resultCache__u960s4(asyncTypefaceCache).ql(key_0);
            var priorResult_0 = tmp0_elvis_lhs_0 == null ? access$_get_permanentCache__bpfryv(asyncTypefaceCache).g2(key_0) : tmp0_elvis_lhs_0;
            if (!(priorResult_0 == null)) {
              tmp$ret$7 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult_0.p5k_1);
              break $l$block_0;
            }
            // Inline function 'kotlin.runCatching' call
            var tmp_1;
            try {
              // Inline function 'kotlin.Companion.success' call
              var value = platformFontLoader.z5n(font);
              tmp_1 = _Result___init__impl__xyqfz8(value);
            } catch ($p) {
              var tmp_2;
              if ($p instanceof Error) {
                var e = $p;
                // Inline function 'kotlin.Companion.failure' call
                tmp_2 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p;
              }
              tmp_1 = tmp_2;
            }
            // Inline function 'kotlin.Result.getOrNull' call
            var this_1 = tmp_1;
            // Inline function 'kotlin.also' call
            var this_2 = _Result___get_isFailure__impl__jpiriv(this_1) ? null : _Result___get_value__impl__bjfvqg(this_1);
            asyncTypefaceCache.l5l(font, platformFontLoader, this_2);
            tmp$ret$7 = this_2;
          }
          var result_0 = tmp$ret$7;
          if (!(result_0 == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.l5j_1, result_0, font, typefaceRequest.j5j_1, typefaceRequest.k5j_1));
          }
        } else if (tmp0_subject === Companion_getInstance_20().x5i_1) {
          var cacheResult = asyncTypefaceCache.m5l(font, platformFontLoader);
          if (cacheResult == null) {
            if (asyncFontsToLoad == null) {
              asyncFontsToLoad = mutableListOf([font]);
            } else {
              asyncFontsToLoad.h(font);
            }
          } else if (_AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca(cacheResult.p5k_1)) {
            continue $l$loop;
          } else if (!(_AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.p5k_1) == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.l5j_1, _AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.p5k_1), font, typefaceRequest.j5j_1, typefaceRequest.k5j_1));
          }
        } else
          throw IllegalStateException_init_$Create$_0('Unknown font type ' + toString_0(font));
      }
       while (inductionVariable <= last);
    var fallbackTypeface = createDefaultTypeface(typefaceRequest);
    return to(asyncFontsToLoad, fallbackTypeface);
  }
  function _FontLoadingStrategy___init__impl__if1sp3(value) {
    return value;
  }
  function _FontLoadingStrategy___get_value__impl__ggsl83($this) {
    return $this;
  }
  function FontLoadingStrategy__toString_impl_fx0z8f($this) {
    return $this === Companion_getInstance_20().v5i_1 ? 'Blocking' : $this === Companion_getInstance_20().w5i_1 ? 'Optional' : $this === Companion_getInstance_20().x5i_1 ? 'Async' : 'Invalid(value=' + _FontLoadingStrategy___get_value__impl__ggsl83($this) + ')';
  }
  function Companion_6() {
    Companion_instance_7 = this;
    this.v5i_1 = _FontLoadingStrategy___init__impl__if1sp3(0);
    this.w5i_1 = _FontLoadingStrategy___init__impl__if1sp3(1);
    this.x5i_1 = _FontLoadingStrategy___init__impl__if1sp3(2);
  }
  var Companion_instance_7;
  function Companion_getInstance_20() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  var androidx_compose_ui_text_font_FontMatcher$stable;
  function FontMatcher() {
  }
  protoOf(FontMatcher).y5n = function (fontList, fontWeight, fontStyle) {
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    var target = ArrayList_init_$Create$_0(fontList.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = fontList.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = fontList.m(index);
        if (item.p3z().equals(fontWeight) && item.t5i() === fontStyle) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.h(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!target.n()) {
      return target;
    }
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    var target_0 = ArrayList_init_$Create$_0(fontList.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable_0 = 0;
    var last_0 = fontList.l() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = fontList.m(index_0);
        if (item_0.t5i() === fontStyle) {
          // Inline function 'kotlin.collections.plusAssign' call
          target_0.h(item_0);
        }
      }
       while (inductionVariable_0 <= last_0);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp;
    if (target_0.n()) {
      tmp = fontList;
    } else {
      tmp = target_0;
    }
    var fontsToSearch = tmp;
    var tmp_0;
    if (fontWeight.a5o(Companion_getInstance_23().d5f_1) < 0) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove = null;
      var bestWeightBelow = null;
      var inductionVariable_1 = 0;
      var last_1 = fontsToSearch.l() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        $l$loop_1: do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var font = fontsToSearch.m(index_1);
          var possibleWeight = font.p3z();
          if (!(null == null) && possibleWeight.a5o(null) < 0) {
            continue $l$loop_1;
          }
          if (!(null == null) && possibleWeight.a5o(null) > 0) {
            continue $l$loop_1;
          }
          if (possibleWeight.a5o(fontWeight) < 0) {
            if (bestWeightBelow == null || possibleWeight.a5o(bestWeightBelow) > 0) {
              bestWeightBelow = possibleWeight;
            }
          } else if (possibleWeight.a5o(fontWeight) > 0) {
            if (bestWeightAbove == null || possibleWeight.a5o(bestWeightAbove) < 0) {
              bestWeightAbove = possibleWeight;
            }
          } else {
            bestWeightAbove = possibleWeight;
            bestWeightBelow = possibleWeight;
            break $l$loop_1;
          }
        }
         while (inductionVariable_1 <= last_1);
      var tmp_1;
      if (true) {
        var tmp0_elvis_lhs = bestWeightBelow;
        tmp_1 = tmp0_elvis_lhs == null ? bestWeightAbove : tmp0_elvis_lhs;
      } else {
        var tmp1_elvis_lhs = bestWeightAbove;
        tmp_1 = tmp1_elvis_lhs == null ? bestWeightBelow : tmp1_elvis_lhs;
      }
      var bestWeight = tmp_1;
      // Inline function 'androidx.compose.ui.util.fastFilter' call
      var target_1 = ArrayList_init_$Create$_0(fontsToSearch.l());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_2 = 0;
      var last_2 = fontsToSearch.l() - 1 | 0;
      if (inductionVariable_2 <= last_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_1 = fontsToSearch.m(index_2);
          if (item_1.p3z().equals(bestWeight)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_1.h(item_1);
          }
        }
         while (inductionVariable_2 <= last_2);
      tmp_0 = target_1;
    } else if (fontWeight.a5o(Companion_getInstance_23().e5f_1) > 0) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove_0 = null;
      var bestWeightBelow_0 = null;
      var inductionVariable_3 = 0;
      var last_3 = fontsToSearch.l() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        $l$loop_4: do {
          var index_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var font_0 = fontsToSearch.m(index_3);
          var possibleWeight_0 = font_0.p3z();
          if (!(null == null) && possibleWeight_0.a5o(null) < 0) {
            continue $l$loop_4;
          }
          if (!(null == null) && possibleWeight_0.a5o(null) > 0) {
            continue $l$loop_4;
          }
          if (possibleWeight_0.a5o(fontWeight) < 0) {
            if (bestWeightBelow_0 == null || possibleWeight_0.a5o(bestWeightBelow_0) > 0) {
              bestWeightBelow_0 = possibleWeight_0;
            }
          } else if (possibleWeight_0.a5o(fontWeight) > 0) {
            if (bestWeightAbove_0 == null || possibleWeight_0.a5o(bestWeightAbove_0) < 0) {
              bestWeightAbove_0 = possibleWeight_0;
            }
          } else {
            bestWeightAbove_0 = possibleWeight_0;
            bestWeightBelow_0 = possibleWeight_0;
            break $l$loop_4;
          }
        }
         while (inductionVariable_3 <= last_3);
      var tmp_2;
      if (false) {
        var tmp0_elvis_lhs_0 = bestWeightBelow_0;
        tmp_2 = tmp0_elvis_lhs_0 == null ? bestWeightAbove_0 : tmp0_elvis_lhs_0;
      } else {
        var tmp1_elvis_lhs_0 = bestWeightAbove_0;
        tmp_2 = tmp1_elvis_lhs_0 == null ? bestWeightBelow_0 : tmp1_elvis_lhs_0;
      }
      var bestWeight_0 = tmp_2;
      // Inline function 'androidx.compose.ui.util.fastFilter' call
      var target_2 = ArrayList_init_$Create$_0(fontsToSearch.l());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_4 = 0;
      var last_4 = fontsToSearch.l() - 1 | 0;
      if (inductionVariable_4 <= last_4)
        do {
          var index_4 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var item_2 = fontsToSearch.m(index_4);
          if (item_2.p3z().equals(bestWeight_0)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_2.h(item_2);
          }
        }
         while (inductionVariable_4 <= last_4);
      tmp_0 = target_2;
    } else {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var maxSearchRange = Companion_getInstance_23().e5f_1;
      var bestWeightAbove_1 = null;
      var bestWeightBelow_1 = null;
      var inductionVariable_5 = 0;
      var last_5 = fontsToSearch.l() - 1 | 0;
      if (inductionVariable_5 <= last_5)
        $l$loop_7: do {
          var index_5 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          var font_1 = fontsToSearch.m(index_5);
          var possibleWeight_1 = font_1.p3z();
          if (!(null == null) && possibleWeight_1.a5o(null) < 0) {
            continue $l$loop_7;
          }
          if (!(maxSearchRange == null) && possibleWeight_1.a5o(maxSearchRange) > 0) {
            continue $l$loop_7;
          }
          if (possibleWeight_1.a5o(fontWeight) < 0) {
            if (bestWeightBelow_1 == null || possibleWeight_1.a5o(bestWeightBelow_1) > 0) {
              bestWeightBelow_1 = possibleWeight_1;
            }
          } else if (possibleWeight_1.a5o(fontWeight) > 0) {
            if (bestWeightAbove_1 == null || possibleWeight_1.a5o(bestWeightAbove_1) < 0) {
              bestWeightAbove_1 = possibleWeight_1;
            }
          } else {
            bestWeightAbove_1 = possibleWeight_1;
            bestWeightBelow_1 = possibleWeight_1;
            break $l$loop_7;
          }
        }
         while (inductionVariable_5 <= last_5);
      var tmp_3;
      if (false) {
        var tmp0_elvis_lhs_1 = bestWeightBelow_1;
        tmp_3 = tmp0_elvis_lhs_1 == null ? bestWeightAbove_1 : tmp0_elvis_lhs_1;
      } else {
        var tmp1_elvis_lhs_1 = bestWeightAbove_1;
        tmp_3 = tmp1_elvis_lhs_1 == null ? bestWeightBelow_1 : tmp1_elvis_lhs_1;
      }
      var bestWeight_1 = tmp_3;
      // Inline function 'androidx.compose.ui.util.fastFilter' call
      var target_3 = ArrayList_init_$Create$_0(fontsToSearch.l());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_6 = 0;
      var last_6 = fontsToSearch.l() - 1 | 0;
      if (inductionVariable_6 <= last_6)
        do {
          var index_6 = inductionVariable_6;
          inductionVariable_6 = inductionVariable_6 + 1 | 0;
          var item_3 = fontsToSearch.m(index_6);
          if (item_3.p3z().equals(bestWeight_1)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_3.h(item_3);
          }
        }
         while (inductionVariable_6 <= last_6);
      // Inline function 'kotlin.collections.ifEmpty' call
      var tmp_4;
      if (target_3.n()) {
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
        var minSearchRange = Companion_getInstance_23().e5f_1;
        var bestWeightAbove_2 = null;
        var bestWeightBelow_2 = null;
        var inductionVariable_7 = 0;
        var last_7 = fontsToSearch.l() - 1 | 0;
        if (inductionVariable_7 <= last_7)
          $l$loop_10: do {
            var index_7 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            var font_2 = fontsToSearch.m(index_7);
            var possibleWeight_2 = font_2.p3z();
            if (!(minSearchRange == null) && possibleWeight_2.a5o(minSearchRange) < 0) {
              continue $l$loop_10;
            }
            if (!(null == null) && possibleWeight_2.a5o(null) > 0) {
              continue $l$loop_10;
            }
            if (possibleWeight_2.a5o(fontWeight) < 0) {
              if (bestWeightBelow_2 == null || possibleWeight_2.a5o(bestWeightBelow_2) > 0) {
                bestWeightBelow_2 = possibleWeight_2;
              }
            } else if (possibleWeight_2.a5o(fontWeight) > 0) {
              if (bestWeightAbove_2 == null || possibleWeight_2.a5o(bestWeightAbove_2) < 0) {
                bestWeightAbove_2 = possibleWeight_2;
              }
            } else {
              bestWeightAbove_2 = possibleWeight_2;
              bestWeightBelow_2 = possibleWeight_2;
              break $l$loop_10;
            }
          }
           while (inductionVariable_7 <= last_7);
        var tmp_5;
        if (false) {
          var tmp0_elvis_lhs_2 = bestWeightBelow_2;
          tmp_5 = tmp0_elvis_lhs_2 == null ? bestWeightAbove_2 : tmp0_elvis_lhs_2;
        } else {
          var tmp1_elvis_lhs_2 = bestWeightAbove_2;
          tmp_5 = tmp1_elvis_lhs_2 == null ? bestWeightBelow_2 : tmp1_elvis_lhs_2;
        }
        var bestWeight_2 = tmp_5;
        // Inline function 'androidx.compose.ui.util.fastFilter' call
        var target_4 = ArrayList_init_$Create$_0(fontsToSearch.l());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable_8 = 0;
        var last_8 = fontsToSearch.l() - 1 | 0;
        if (inductionVariable_8 <= last_8)
          do {
            var index_8 = inductionVariable_8;
            inductionVariable_8 = inductionVariable_8 + 1 | 0;
            var item_4 = fontsToSearch.m(index_8);
            if (item_4.p3z().equals(bestWeight_2)) {
              // Inline function 'kotlin.collections.plusAssign' call
              target_4.h(item_4);
            }
          }
           while (inductionVariable_8 <= last_8);
        tmp_4 = target_4;
      } else {
        tmp_4 = target_3;
      }
      tmp_0 = tmp_4;
    }
    var result = tmp_0;
    return result;
  };
  function _FontStyle___init__impl__jcnduf(value) {
    return value;
  }
  function _FontStyle___get_value__impl__gx8aaz($this) {
    return $this;
  }
  function FontStyle__toString_impl_thncxr($this) {
    return $this === Companion_getInstance_21().t5f_1 ? 'Normal' : $this === Companion_getInstance_21().u5f_1 ? 'Italic' : 'Invalid';
  }
  function Companion_7() {
    Companion_instance_8 = this;
    this.t5f_1 = _FontStyle___init__impl__jcnduf(0);
    this.u5f_1 = _FontStyle___init__impl__jcnduf(1);
  }
  var Companion_instance_8;
  function Companion_getInstance_21() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function FontStyle__hashCode_impl_7qhg4w($this) {
    return $this;
  }
  function FontStyle__equals_impl_2zal3g($this, other) {
    if (!(other instanceof FontStyle))
      return false;
    if (!($this === other.p5d_1))
      return false;
    return true;
  }
  function FontStyle(value) {
    Companion_getInstance_21();
    this.p5d_1 = value;
  }
  protoOf(FontStyle).toString = function () {
    return FontStyle__toString_impl_thncxr(this.p5d_1);
  };
  protoOf(FontStyle).hashCode = function () {
    return FontStyle__hashCode_impl_7qhg4w(this.p5d_1);
  };
  protoOf(FontStyle).equals = function (other) {
    return FontStyle__equals_impl_2zal3g(this.p5d_1, other);
  };
  function _FontSynthesis___init__impl__n397bg(value) {
    return value;
  }
  function _FontSynthesis___get_value__impl__xrueqg($this) {
    return $this;
  }
  function FontSynthesis__toString_impl_gunvr0($this) {
    return $this === Companion_getInstance_22().v5f_1 ? 'None' : $this === Companion_getInstance_22().w5f_1 ? 'Weight' : $this === Companion_getInstance_22().x5f_1 ? 'Style' : $this === Companion_getInstance_22().y5f_1 ? 'All' : 'Invalid';
  }
  function Companion_8() {
    Companion_instance_9 = this;
    this.v5f_1 = _FontSynthesis___init__impl__n397bg(0);
    this.w5f_1 = _FontSynthesis___init__impl__n397bg(1);
    this.x5f_1 = _FontSynthesis___init__impl__n397bg(2);
    this.y5f_1 = _FontSynthesis___init__impl__n397bg(65535);
  }
  protoOf(Companion_8).b5o = function (value) {
    var tmp0;
    switch (value) {
      case 0:
      case 1:
      case 2:
        tmp0 = true;
        break;
      default:
        tmp0 = value === 65535;
        break;
    }
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!tmp0) {
      var tmp$ret$1 = 'The given value=' + value + ' is not recognized by FontSynthesis.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    return _FontSynthesis___init__impl__n397bg(value);
  };
  var Companion_instance_9;
  function Companion_getInstance_22() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function FontSynthesis__hashCode_impl_4wi11v($this) {
    return $this;
  }
  function FontSynthesis__equals_impl_zgu9mf($this, other) {
    if (!(other instanceof FontSynthesis))
      return false;
    if (!($this === other.q5d_1))
      return false;
    return true;
  }
  function FontSynthesis(value) {
    Companion_getInstance_22();
    this.q5d_1 = value;
  }
  protoOf(FontSynthesis).toString = function () {
    return FontSynthesis__toString_impl_gunvr0(this.q5d_1);
  };
  protoOf(FontSynthesis).hashCode = function () {
    return FontSynthesis__hashCode_impl_4wi11v(this.q5d_1);
  };
  protoOf(FontSynthesis).equals = function (other) {
    return FontSynthesis__equals_impl_zgu9mf(this.q5d_1, other);
  };
  var androidx_compose_ui_text_font_FontVariation_Settings$stable;
  var androidx_compose_ui_text_font_FontVariation$stable;
  var androidx_compose_ui_text_font_FontWeight$stable;
  function Companion_9() {
    Companion_instance_10 = this;
    this.a5f_1 = new FontWeight(100);
    this.b5f_1 = new FontWeight(200);
    this.c5f_1 = new FontWeight(300);
    this.d5f_1 = new FontWeight(400);
    this.e5f_1 = new FontWeight(500);
    this.f5f_1 = new FontWeight(600);
    this.g5f_1 = new FontWeight(700);
    this.h5f_1 = new FontWeight(800);
    this.i5f_1 = new FontWeight(900);
    this.j5f_1 = this.a5f_1;
    this.k5f_1 = this.b5f_1;
    this.l5f_1 = this.c5f_1;
    this.m5f_1 = this.d5f_1;
    this.n5f_1 = this.e5f_1;
    this.o5f_1 = this.f5f_1;
    this.p5f_1 = this.g5f_1;
    this.q5f_1 = this.h5f_1;
    this.r5f_1 = this.i5f_1;
    this.s5f_1 = listOf([this.a5f_1, this.b5f_1, this.c5f_1, this.d5f_1, this.e5f_1, this.f5f_1, this.g5f_1, this.h5f_1, this.i5f_1]);
  }
  var Companion_instance_10;
  function Companion_getInstance_23() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function FontWeight(weight) {
    Companion_getInstance_23();
    this.b5e_1 = weight;
    var containsArg = this.b5e_1;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(1 <= containsArg ? containsArg <= 1000 : false)) {
      var tmp$ret$1 = 'Font weight can be in range [1, 1000]. Current value: ' + this.b5e_1;
      throwIllegalArgumentException(tmp$ret$1);
    }
  }
  protoOf(FontWeight).a5o = function (other) {
    return compareTo(this.b5e_1, other.b5e_1);
  };
  protoOf(FontWeight).d = function (other) {
    return this.a5o(other instanceof FontWeight ? other : THROW_CCE());
  };
  protoOf(FontWeight).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontWeight))
      return false;
    if (!(this.b5e_1 === other.b5e_1))
      return false;
    return true;
  };
  protoOf(FontWeight).hashCode = function () {
    return this.b5e_1;
  };
  protoOf(FontWeight).toString = function () {
    return 'FontWeight(weight=' + this.b5e_1 + ')';
  };
  var androidx_compose_ui_text_input_CommitTextCommand$stable;
  var androidx_compose_ui_text_input_SetComposingRegionCommand$stable;
  var androidx_compose_ui_text_input_SetComposingTextCommand$stable;
  var androidx_compose_ui_text_input_DeleteSurroundingTextCommand$stable;
  var androidx_compose_ui_text_input_DeleteSurroundingTextInCodePointsCommand$stable;
  var androidx_compose_ui_text_input_SetSelectionCommand$stable;
  var androidx_compose_ui_text_input_FinishComposingTextCommand$stable;
  var androidx_compose_ui_text_input_BackspaceCommand$stable;
  var androidx_compose_ui_text_input_MoveCursorCommand$stable;
  var androidx_compose_ui_text_input_DeleteAllCommand$stable;
  var androidx_compose_ui_text_input_EditProcessor$stable;
  var androidx_compose_ui_text_input_EditingBuffer$stable;
  var androidx_compose_ui_text_input_PartialGapBuffer$stable;
  var androidx_compose_ui_text_input_ImeOptions$stable;
  var androidx_compose_ui_text_input_TextFieldValue$stable;
  var androidx_compose_ui_text_input_TextInputService$stable;
  var androidx_compose_ui_text_input_TextInputSession$stable;
  function TextInputService(platformTextInputService) {
    this.c5o_1 = platformTextInputService;
    this.d5o_1 = new AtomicReference(null);
  }
  var androidx_compose_ui_text_input_TransformedText$stable;
  var androidx_compose_ui_text_input_PasswordVisualTransformation$stable;
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$_0(message);
  }
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$_0(message);
  }
  var androidx_compose_ui_text_intl_Locale$stable;
  function Companion_10() {
  }
  protoOf(Companion_10).w1x = function () {
    return get_platformLocaleDelegate().w1x().m(0);
  };
  var Companion_instance_11;
  function Companion_getInstance_24() {
    return Companion_instance_11;
  }
  function Locale_init_$Init$(languageTag, $this) {
    Locale.call($this, get_platformLocaleDelegate().e5o(languageTag));
    return $this;
  }
  function Locale_init_$Create$(languageTag) {
    return Locale_init_$Init$(languageTag, objectCreate(protoOf(Locale)));
  }
  function Locale(platformLocale) {
    this.e5e_1 = platformLocale;
  }
  protoOf(Locale).f5o = function () {
    return get_language(this.e5e_1);
  };
  protoOf(Locale).g5o = function () {
    return get_region(this.e5e_1);
  };
  protoOf(Locale).f5e = function () {
    return getLanguageTag(this.e5e_1);
  };
  protoOf(Locale).equals = function (other) {
    if (other == null)
      return false;
    if (!(other instanceof Locale))
      return false;
    if (this === other)
      return true;
    return this.f5e() === other.f5e();
  };
  protoOf(Locale).hashCode = function () {
    return getStringHashCode(this.f5e());
  };
  protoOf(Locale).toString = function () {
    return this.f5e();
  };
  var androidx_compose_ui_text_intl_LocaleList$stable;
  function Companion_11() {
    Companion_instance_12 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.listOf' call
    var tmp$ret$0 = emptyList();
    tmp.j5g_1 = new LocaleList(tmp$ret$0);
  }
  protoOf(Companion_11).w1x = function () {
    return get_platformLocaleDelegate().w1x();
  };
  var Companion_instance_12;
  function Companion_getInstance_25() {
    if (Companion_instance_12 == null)
      new Companion_11();
    return Companion_instance_12;
  }
  function LocaleList(localeList) {
    Companion_getInstance_25();
    this.c5e_1 = localeList;
    this.d5e_1 = this.c5e_1.l();
  }
  protoOf(LocaleList).m = function (i) {
    return this.c5e_1.m(i);
  };
  protoOf(LocaleList).l = function () {
    return this.d5e_1;
  };
  protoOf(LocaleList).h5o = function (element) {
    return this.c5e_1.t(element);
  };
  protoOf(LocaleList).t = function (element) {
    if (!(element instanceof Locale))
      return false;
    return this.h5o(element instanceof Locale ? element : THROW_CCE());
  };
  protoOf(LocaleList).n = function () {
    return this.c5e_1.n();
  };
  protoOf(LocaleList).i = function () {
    return this.c5e_1.i();
  };
  protoOf(LocaleList).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LocaleList))
      return false;
    if (!equals(this.c5e_1, other.c5e_1))
      return false;
    return true;
  };
  protoOf(LocaleList).hashCode = function () {
    return hashCode(this.c5e_1);
  };
  protoOf(LocaleList).toString = function () {
    return 'LocaleList(localeList=' + toString_0(this.c5e_1) + ')';
  };
  function get_platformLocaleDelegate() {
    _init_properties_PlatformLocale_kt__d5ixzh();
    return platformLocaleDelegate;
  }
  var platformLocaleDelegate;
  var properties_initialized_PlatformLocale_kt_ya8ii9;
  function _init_properties_PlatformLocale_kt__d5ixzh() {
    if (!properties_initialized_PlatformLocale_kt_ya8ii9) {
      properties_initialized_PlatformLocale_kt_ya8ii9 = true;
      platformLocaleDelegate = createPlatformLocaleDelegate();
    }
  }
  function get_FontCacheManagementDispatcher() {
    _init_properties_Dispatcher_kt__c4qz95();
    return FontCacheManagementDispatcher;
  }
  var FontCacheManagementDispatcher;
  var properties_initialized_Dispatcher_kt_c7cauv;
  function _init_properties_Dispatcher_kt__c4qz95() {
    if (!properties_initialized_Dispatcher_kt_c7cauv) {
      properties_initialized_Dispatcher_kt_c7cauv = true;
      FontCacheManagementDispatcher = Dispatchers_getInstance().f13();
    }
  }
  function _BaselineShift___init__impl__scj05g(multiplier) {
    return multiplier;
  }
  function _BaselineShift___get_multiplier__impl__qhmjek($this) {
    return $this;
  }
  function Companion_12() {
    Companion_instance_13 = this;
    this.e5g_1 = _BaselineShift___init__impl__scj05g(0.5);
    this.f5g_1 = _BaselineShift___init__impl__scj05g(-0.5);
    this.g5g_1 = _BaselineShift___init__impl__scj05g(0.0);
    this.h5g_1 = _BaselineShift___init__impl__scj05g(NaN);
  }
  var Companion_instance_13;
  function Companion_getInstance_26() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function BaselineShift__toString_impl_x98gcc($this) {
    return 'BaselineShift(multiplier=' + $this + ')';
  }
  function BaselineShift__hashCode_impl_g0potx($this) {
    return getNumberHashCode($this);
  }
  function BaselineShift__equals_impl_37wrjj($this, other) {
    if (!(other instanceof BaselineShift))
      return false;
    var tmp0_other_with_cast = other.r5d_1;
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function BaselineShift(multiplier) {
    Companion_getInstance_26();
    this.r5d_1 = multiplier;
  }
  protoOf(BaselineShift).toString = function () {
    return BaselineShift__toString_impl_x98gcc(this.r5d_1);
  };
  protoOf(BaselineShift).hashCode = function () {
    return BaselineShift__hashCode_impl_g0potx(this.r5d_1);
  };
  protoOf(BaselineShift).equals = function (other) {
    return BaselineShift__equals_impl_37wrjj(this.r5d_1, other);
  };
  function _Hyphens___init__impl__m2cvg8(value) {
    return value;
  }
  function _Hyphens___get_value__impl__5itus4($this) {
    return $this;
  }
  function Companion_13() {
    Companion_instance_14 = this;
    this.z5b_1 = _Hyphens___init__impl__m2cvg8(1);
    this.a5c_1 = _Hyphens___init__impl__m2cvg8(2);
    this.b5c_1 = _Hyphens___init__impl__m2cvg8(0);
  }
  protoOf(Companion_13).i5o = function (value) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= value ? value <= 2 : false)) {
      var tmp$ret$1 = 'The given value=' + value + ' is not recognized by Hyphens.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    return _Hyphens___init__impl__m2cvg8(value);
  };
  var Companion_instance_14;
  function Companion_getInstance_27() {
    if (Companion_instance_14 == null)
      new Companion_13();
    return Companion_instance_14;
  }
  function Hyphens__toString_impl_ck1wg0($this) {
    return $this === Companion_getInstance_27().z5b_1 ? 'Hyphens.None' : $this === Companion_getInstance_27().a5c_1 ? 'Hyphens.Auto' : $this === Companion_getInstance_27().b5c_1 ? 'Hyphens.Unspecified' : 'Invalid';
  }
  function Hyphens__hashCode_impl_yb7t8v($this) {
    return $this;
  }
  function Hyphens__equals_impl_oqoi4t($this, other) {
    if (!(other instanceof Hyphens))
      return false;
    if (!($this === other.y5c_1))
      return false;
    return true;
  }
  function Hyphens(value) {
    Companion_getInstance_27();
    this.y5c_1 = value;
  }
  protoOf(Hyphens).toString = function () {
    return Hyphens__toString_impl_ck1wg0(this.y5c_1);
  };
  protoOf(Hyphens).hashCode = function () {
    return Hyphens__hashCode_impl_yb7t8v(this.y5c_1);
  };
  protoOf(Hyphens).equals = function (other) {
    return Hyphens__equals_impl_oqoi4t(this.y5c_1, other);
  };
  var androidx_compose_ui_text_style_LineHeightStyle$stable;
  function _Trim___init__impl__tcc1lr(value) {
    return value;
  }
  function _Trim___get_value__impl__o5eglp($this) {
    return $this;
  }
  function Trim__toString_impl_hxcm0x($this) {
    var tmp0_subject = _Trim___get_value__impl__o5eglp($this);
    return tmp0_subject === _Trim___get_value__impl__o5eglp(Companion_getInstance_28().l5o_1) ? 'LineHeightStyle.Trim.FirstLineTop' : tmp0_subject === _Trim___get_value__impl__o5eglp(Companion_getInstance_28().m5o_1) ? 'LineHeightStyle.Trim.LastLineBottom' : tmp0_subject === _Trim___get_value__impl__o5eglp(Companion_getInstance_28().n5o_1) ? 'LineHeightStyle.Trim.Both' : tmp0_subject === _Trim___get_value__impl__o5eglp(Companion_getInstance_28().o5o_1) ? 'LineHeightStyle.Trim.None' : 'Invalid';
  }
  function Companion_14() {
    Companion_instance_15 = this;
    this.j5o_1 = 1;
    this.k5o_1 = 16;
    this.l5o_1 = _Trim___init__impl__tcc1lr(1);
    this.m5o_1 = _Trim___init__impl__tcc1lr(16);
    this.n5o_1 = _Trim___init__impl__tcc1lr(17);
    this.o5o_1 = _Trim___init__impl__tcc1lr(0);
  }
  var Companion_instance_15;
  function Companion_getInstance_28() {
    if (Companion_instance_15 == null)
      new Companion_14();
    return Companion_instance_15;
  }
  function Trim__isTrimFirstLineTop_impl_tqdsaa($this) {
    return (_Trim___get_value__impl__o5eglp($this) & 1) > 0;
  }
  function Trim__isTrimLastLineBottom_impl_8k6x3e($this) {
    return (_Trim___get_value__impl__o5eglp($this) & 16) > 0;
  }
  function Trim__hashCode_impl_vclj5c($this) {
    return $this;
  }
  function Trim__equals_impl_6x7eks($this, other) {
    if (!(other instanceof Trim))
      return false;
    if (!($this === other.k5e_1))
      return false;
    return true;
  }
  function _Alignment___init__impl__it107q(topRatio) {
    var tmp;
    var containsArg = _Alignment___get_topRatio__impl__gg7tir(topRatio);
    if (0.0 <= containsArg ? containsArg <= 1.0 : false) {
      tmp = true;
    } else {
      tmp = _Alignment___get_topRatio__impl__gg7tir(topRatio) === -1.0;
    }
    // Inline function 'androidx.compose.ui.text.internal.checkPrecondition' call
    if (!tmp) {
      var tmp$ret$1 = 'topRatio should be in [0..1] range or -1';
      throwIllegalStateException(tmp$ret$1);
    }
    return topRatio;
  }
  function _Alignment___get_topRatio__impl__gg7tir($this) {
    return $this;
  }
  function Alignment__toString_impl_on6yhu($this) {
    var tmp0_subject = _Alignment___get_topRatio__impl__gg7tir($this);
    return tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_29().p5o_1) ? 'LineHeightStyle.Alignment.Top' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_29().q5o_1) ? 'LineHeightStyle.Alignment.Center' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_29().r5o_1) ? 'LineHeightStyle.Alignment.Proportional' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_29().s5o_1) ? 'LineHeightStyle.Alignment.Bottom' : 'LineHeightStyle.Alignment(topPercentage = ' + _Alignment___get_topRatio__impl__gg7tir($this) + ')';
  }
  function Companion_15() {
    Companion_instance_16 = this;
    this.p5o_1 = _Alignment___init__impl__it107q(0.0);
    this.q5o_1 = _Alignment___init__impl__it107q(0.5);
    this.r5o_1 = _Alignment___init__impl__it107q(-1.0);
    this.s5o_1 = _Alignment___init__impl__it107q(1.0);
  }
  var Companion_instance_16;
  function Companion_getInstance_29() {
    if (Companion_instance_16 == null)
      new Companion_15();
    return Companion_instance_16;
  }
  function Alignment__hashCode_impl_omr6of($this) {
    return getNumberHashCode($this);
  }
  function Alignment__equals_impl_9ve0tn($this, other) {
    if (!(other instanceof Alignment))
      return false;
    var tmp0_other_with_cast = other.j5e_1;
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function _Mode___init__impl__3rgsrm(value) {
    return value;
  }
  function _Mode___get_value__impl__uitpda($this) {
    return $this;
  }
  function Mode__toString_impl_dwwrtq($this) {
    return $this === Companion_getInstance_30().t5o_1 ? 'LineHeightStyle.Mode.Fixed' : $this === Companion_getInstance_30().u5o_1 ? 'LineHeightStyle.Mode.Minimum' : $this === Companion_getInstance_30().v5o_1 ? 'LineHeightStyle.Mode.Tight' : 'Invalid';
  }
  function Companion_16() {
    Companion_instance_17 = this;
    this.t5o_1 = _Mode___init__impl__3rgsrm(0);
    this.u5o_1 = _Mode___init__impl__3rgsrm(1);
    this.v5o_1 = _Mode___init__impl__3rgsrm(2);
  }
  var Companion_instance_17;
  function Companion_getInstance_30() {
    if (Companion_instance_17 == null)
      new Companion_16();
    return Companion_instance_17;
  }
  function Mode__hashCode_impl_7u94z5($this) {
    return $this;
  }
  function Mode__equals_impl_uwixm3($this, other) {
    if (!(other instanceof Mode))
      return false;
    if (!($this === other.l5e_1))
      return false;
    return true;
  }
  function LineHeightStyle_init_$Init$(alignment, trim, $this) {
    LineHeightStyle.call($this, alignment, trim, Companion_getInstance_30().t5o_1);
    return $this;
  }
  function LineHeightStyle_init_$Create$(alignment, trim) {
    return LineHeightStyle_init_$Init$(alignment, trim, objectCreate(protoOf(LineHeightStyle)));
  }
  function Companion_17() {
    Companion_instance_18 = this;
    this.w5o_1 = new LineHeightStyle(Companion_getInstance_29().r5o_1, Companion_getInstance_28().n5o_1, Companion_getInstance_30().t5o_1);
  }
  var Companion_instance_18;
  function Companion_getInstance_31() {
    if (Companion_instance_18 == null)
      new Companion_17();
    return Companion_instance_18;
  }
  function Trim(value) {
    Companion_getInstance_28();
    this.k5e_1 = value;
  }
  protoOf(Trim).toString = function () {
    return Trim__toString_impl_hxcm0x(this.k5e_1);
  };
  protoOf(Trim).hashCode = function () {
    return Trim__hashCode_impl_vclj5c(this.k5e_1);
  };
  protoOf(Trim).equals = function (other) {
    return Trim__equals_impl_6x7eks(this.k5e_1, other);
  };
  function Alignment(topRatio) {
    Companion_getInstance_29();
    this.j5e_1 = topRatio;
  }
  protoOf(Alignment).toString = function () {
    return Alignment__toString_impl_on6yhu(this.j5e_1);
  };
  protoOf(Alignment).hashCode = function () {
    return Alignment__hashCode_impl_omr6of(this.j5e_1);
  };
  protoOf(Alignment).equals = function (other) {
    return Alignment__equals_impl_9ve0tn(this.j5e_1, other);
  };
  function Mode(value) {
    Companion_getInstance_30();
    this.l5e_1 = value;
  }
  protoOf(Mode).toString = function () {
    return Mode__toString_impl_dwwrtq(this.l5e_1);
  };
  protoOf(Mode).hashCode = function () {
    return Mode__hashCode_impl_7u94z5(this.l5e_1);
  };
  protoOf(Mode).equals = function (other) {
    return Mode__equals_impl_uwixm3(this.l5e_1, other);
  };
  function LineHeightStyle(alignment, trim, mode) {
    Companion_getInstance_31();
    this.g5e_1 = alignment;
    this.h5e_1 = trim;
    this.i5e_1 = mode;
  }
  protoOf(LineHeightStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LineHeightStyle))
      return false;
    if (!equals(this.g5e_1, other.g5e_1))
      return false;
    if (!(this.h5e_1 === other.h5e_1))
      return false;
    if (!(this.i5e_1 === other.i5e_1))
      return false;
    return true;
  };
  protoOf(LineHeightStyle).hashCode = function () {
    var result = Alignment__hashCode_impl_omr6of(this.g5e_1);
    result = imul(31, result) + Trim__hashCode_impl_vclj5c(this.h5e_1) | 0;
    result = imul(31, result) + Mode__hashCode_impl_7u94z5(this.i5e_1) | 0;
    return result;
  };
  protoOf(LineHeightStyle).toString = function () {
    return 'LineHeightStyle(' + ('alignment=' + Alignment__toString_impl_on6yhu(this.g5e_1) + ', ') + ('trim=' + Trim__toString_impl_hxcm0x(this.h5e_1) + ',') + ('mode=' + Mode__toString_impl_dwwrtq(this.i5e_1)) + ')';
  };
  var ResolvedTextDirection_Ltr_instance;
  var ResolvedTextDirection_Rtl_instance;
  var ResolvedTextDirection_entriesInitialized;
  function ResolvedTextDirection_initEntries() {
    if (ResolvedTextDirection_entriesInitialized)
      return Unit_instance;
    ResolvedTextDirection_entriesInitialized = true;
    ResolvedTextDirection_Ltr_instance = new ResolvedTextDirection('Ltr', 0);
    ResolvedTextDirection_Rtl_instance = new ResolvedTextDirection('Rtl', 1);
  }
  function ResolvedTextDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ResolvedTextDirection_Ltr_getInstance() {
    ResolvedTextDirection_initEntries();
    return ResolvedTextDirection_Ltr_instance;
  }
  function ResolvedTextDirection_Rtl_getInstance() {
    ResolvedTextDirection_initEntries();
    return ResolvedTextDirection_Rtl_instance;
  }
  function _TextAlign___init__impl__99wz4v(value) {
    return value;
  }
  function _TextAlign___get_value__impl__lst7m3($this) {
    return $this;
  }
  function TextAlign__toString_impl_6ha6d3($this) {
    return $this === Companion_getInstance_32().o5b_1 ? 'Left' : $this === Companion_getInstance_32().p5b_1 ? 'Right' : $this === Companion_getInstance_32().q5b_1 ? 'Center' : $this === Companion_getInstance_32().r5b_1 ? 'Justify' : $this === Companion_getInstance_32().s5b_1 ? 'Start' : $this === Companion_getInstance_32().t5b_1 ? 'End' : $this === Companion_getInstance_32().u5b_1 ? 'Unspecified' : 'Invalid';
  }
  function Companion_18() {
    Companion_instance_19 = this;
    this.o5b_1 = _TextAlign___init__impl__99wz4v(1);
    this.p5b_1 = _TextAlign___init__impl__99wz4v(2);
    this.q5b_1 = _TextAlign___init__impl__99wz4v(3);
    this.r5b_1 = _TextAlign___init__impl__99wz4v(4);
    this.s5b_1 = _TextAlign___init__impl__99wz4v(5);
    this.t5b_1 = _TextAlign___init__impl__99wz4v(6);
    this.u5b_1 = _TextAlign___init__impl__99wz4v(0);
  }
  protoOf(Companion_18).x5o = function (value) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= value ? value <= 6 : false)) {
      var tmp$ret$1 = 'The given value=' + value + ' is not recognized by TextAlign.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    return _TextAlign___init__impl__99wz4v(value);
  };
  var Companion_instance_19;
  function Companion_getInstance_32() {
    if (Companion_instance_19 == null)
      new Companion_18();
    return Companion_instance_19;
  }
  function TextAlign__hashCode_impl_s8g35y($this) {
    return $this;
  }
  function TextAlign__equals_impl_latoh6($this, other) {
    if (!(other instanceof TextAlign))
      return false;
    if (!($this === other.v5c_1))
      return false;
    return true;
  }
  function TextAlign(value) {
    Companion_getInstance_32();
    this.v5c_1 = value;
  }
  protoOf(TextAlign).toString = function () {
    return TextAlign__toString_impl_6ha6d3(this.v5c_1);
  };
  protoOf(TextAlign).hashCode = function () {
    return TextAlign__hashCode_impl_s8g35y(this.v5c_1);
  };
  protoOf(TextAlign).equals = function (other) {
    return TextAlign__equals_impl_latoh6(this.v5c_1, other);
  };
  var androidx_compose_ui_text_style_TextDecoration$stable;
  function Companion_19() {
    Companion_instance_20 = this;
    this.k5g_1 = new TextDecoration(0);
    this.l5g_1 = new TextDecoration(1);
    this.m5g_1 = new TextDecoration(2);
  }
  protoOf(Companion_19).y5o = function (mask) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!((mask | 3) === 3)) {
      var tmp$ret$1 = 'The given mask=' + mask + ' is not recognized by TextDecoration.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    switch (mask) {
      case 0:
        return this.k5g_1;
      case 1:
        return this.l5g_1;
      case 2:
        return this.m5g_1;
      default:
        return new TextDecoration(mask);
    }
  };
  var Companion_instance_20;
  function Companion_getInstance_33() {
    if (Companion_instance_20 == null)
      new Companion_19();
    return Companion_instance_20;
  }
  function TextDecoration(mask) {
    Companion_getInstance_33();
    this.w5d_1 = mask;
  }
  protoOf(TextDecoration).z5o = function (other) {
    return (this.w5d_1 | other.w5d_1) === this.w5d_1;
  };
  protoOf(TextDecoration).toString = function () {
    if (this.w5d_1 === 0) {
      return 'TextDecoration.None';
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var values = ArrayList_init_$Create$();
    if (!((this.w5d_1 & Companion_getInstance_33().l5g_1.w5d_1) === 0)) {
      values.h('Underline');
    }
    if (!((this.w5d_1 & Companion_getInstance_33().m5g_1.w5d_1) === 0)) {
      values.h('LineThrough');
    }
    if (values.l() === 1) {
      return 'TextDecoration.' + values.m(0);
    }
    return 'TextDecoration[' + fastJoinToString(values, ', ') + ']';
  };
  protoOf(TextDecoration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextDecoration))
      return false;
    if (!(this.w5d_1 === other.w5d_1))
      return false;
    return true;
  };
  protoOf(TextDecoration).hashCode = function () {
    return this.w5d_1;
  };
  function _TextDirection___init__impl__lh8lzt(value) {
    return value;
  }
  function _TextDirection___get_value__impl__ka7r45($this) {
    return $this;
  }
  function TextDirection__toString_impl_x3uh9t($this) {
    return $this === Companion_getInstance_34().c5b_1 ? 'Ltr' : $this === Companion_getInstance_34().d5b_1 ? 'Rtl' : $this === Companion_getInstance_34().e5b_1 ? 'Content' : $this === Companion_getInstance_34().f5b_1 ? 'ContentOrLtr' : $this === Companion_getInstance_34().g5b_1 ? 'ContentOrRtl' : $this === Companion_getInstance_34().h5b_1 ? 'Unspecified' : 'Invalid';
  }
  function Companion_20() {
    Companion_instance_21 = this;
    this.c5b_1 = _TextDirection___init__impl__lh8lzt(1);
    this.d5b_1 = _TextDirection___init__impl__lh8lzt(2);
    this.e5b_1 = _TextDirection___init__impl__lh8lzt(3);
    this.f5b_1 = _TextDirection___init__impl__lh8lzt(4);
    this.g5b_1 = _TextDirection___init__impl__lh8lzt(5);
    this.h5b_1 = _TextDirection___init__impl__lh8lzt(0);
  }
  protoOf(Companion_20).a5p = function (value) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= value ? value <= 5 : false)) {
      var tmp$ret$1 = 'The given value=' + value + ' is not recognized by TextDirection.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    return _TextDirection___init__impl__lh8lzt(value);
  };
  var Companion_instance_21;
  function Companion_getInstance_34() {
    if (Companion_instance_21 == null)
      new Companion_20();
    return Companion_instance_21;
  }
  function TextDirection__hashCode_impl_g63nwg($this) {
    return $this;
  }
  function TextDirection__equals_impl_3fvxt0($this, other) {
    if (!(other instanceof TextDirection))
      return false;
    if (!($this === other.w5c_1))
      return false;
    return true;
  }
  function TextDirection(value) {
    Companion_getInstance_34();
    this.w5c_1 = value;
  }
  protoOf(TextDirection).toString = function () {
    return TextDirection__toString_impl_x3uh9t(this.w5c_1);
  };
  protoOf(TextDirection).hashCode = function () {
    return TextDirection__hashCode_impl_g63nwg(this.w5c_1);
  };
  protoOf(TextDirection).equals = function (other) {
    return TextDirection__equals_impl_3fvxt0(this.w5c_1, other);
  };
  var androidx_compose_ui_text_style_TextForegroundStyle_Unspecified$stable;
  function Unspecified() {
  }
  protoOf(Unspecified).z4h = function () {
    return Companion_getInstance().y4h_1;
  };
  protoOf(Unspecified).q5e = function () {
    return null;
  };
  protoOf(Unspecified).b4e = function () {
    return NaN;
  };
  var Unspecified_instance;
  function Unspecified_getInstance() {
    return Unspecified_instance;
  }
  function Companion_21() {
  }
  protoOf(Companion_21).o5e = function (color) {
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = new ColorStyle(color);
    } else {
      tmp = Unspecified_instance;
    }
    return tmp;
  };
  protoOf(Companion_21).p5e = function (brush, alpha) {
    var tmp;
    if (brush == null) {
      tmp = Unspecified_instance;
    } else {
      if (brush instanceof SolidColor) {
        tmp = this.o5e(modulate(brush.w4g_1, alpha));
      } else {
        if (brush instanceof ShaderBrush) {
          tmp = new BrushStyle(brush, alpha);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  var Companion_instance_22;
  function Companion_getInstance_35() {
    return Companion_instance_22;
  }
  function TextForegroundStyle$merge$lambda(this$0) {
    return function () {
      return this$0.c5p_1;
    };
  }
  function TextForegroundStyle$merge$lambda_0(this$0) {
    return function () {
      return this$0;
    };
  }
  function TextForegroundStyle() {
  }
  function BrushStyle(value, alpha) {
    this.b5p_1 = value;
    this.c5p_1 = alpha;
  }
  protoOf(BrushStyle).b4e = function () {
    return this.c5p_1;
  };
  protoOf(BrushStyle).z4h = function () {
    return Companion_getInstance().y4h_1;
  };
  protoOf(BrushStyle).q5e = function () {
    return this.b5p_1;
  };
  protoOf(BrushStyle).toString = function () {
    return 'BrushStyle(value=' + toString_0(this.b5p_1) + ', alpha=' + this.c5p_1 + ')';
  };
  protoOf(BrushStyle).hashCode = function () {
    var result = hashCode(this.b5p_1);
    result = imul(result, 31) + getNumberHashCode(this.c5p_1) | 0;
    return result;
  };
  protoOf(BrushStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BrushStyle))
      return false;
    if (!equals(this.b5p_1, other.b5p_1))
      return false;
    if (!equals(this.c5p_1, other.c5p_1))
      return false;
    return true;
  };
  function takeOrElse_0(_this__u8e3s4, block) {
    return isNaN_0(_this__u8e3s4) ? block() : _this__u8e3s4;
  }
  function ColorStyle(value) {
    this.d5p_1 = value;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = this.d5p_1;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      var tmp$ret$2 = 'ColorStyle value must be specified, use TextForegroundStyle.Unspecified instead.';
      throwIllegalArgumentException(tmp$ret$2);
    }
  }
  protoOf(ColorStyle).z4h = function () {
    return this.d5p_1;
  };
  protoOf(ColorStyle).q5e = function () {
    return null;
  };
  protoOf(ColorStyle).b4e = function () {
    return _Color___get_alpha__impl__wcfyv1(this.z4h());
  };
  protoOf(ColorStyle).toString = function () {
    return 'ColorStyle(value=' + Color__toString_impl_hpzmaq(this.d5p_1) + ')';
  };
  protoOf(ColorStyle).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.d5p_1);
  };
  protoOf(ColorStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColorStyle))
      return false;
    if (!equals(this.d5p_1, other.d5p_1))
      return false;
    return true;
  };
  function modulate(_this__u8e3s4, alpha) {
    return isNaN_0(alpha) || alpha >= 1.0 ? _this__u8e3s4 : Color__copy$default_impl_ectz3s(_this__u8e3s4, _Color___get_alpha__impl__wcfyv1(_this__u8e3s4) * alpha);
  }
  var androidx_compose_ui_text_style_TextGeometricTransform$stable;
  function Companion_22() {
    Companion_instance_23 = this;
    this.i5g_1 = new TextGeometricTransform(1.0, 0.0);
  }
  var Companion_instance_23;
  function Companion_getInstance_36() {
    if (Companion_instance_23 == null)
      new Companion_22();
    return Companion_instance_23;
  }
  function TextGeometricTransform(scaleX, skewX) {
    Companion_getInstance_36();
    scaleX = scaleX === VOID ? 1.0 : scaleX;
    skewX = skewX === VOID ? 0.0 : skewX;
    this.x5d_1 = scaleX;
    this.y5d_1 = skewX;
  }
  protoOf(TextGeometricTransform).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextGeometricTransform))
      return false;
    if (!(this.x5d_1 === other.x5d_1))
      return false;
    if (!(this.y5d_1 === other.y5d_1))
      return false;
    return true;
  };
  protoOf(TextGeometricTransform).hashCode = function () {
    var result = getNumberHashCode(this.x5d_1);
    result = imul(31, result) + getNumberHashCode(this.y5d_1) | 0;
    return result;
  };
  protoOf(TextGeometricTransform).toString = function () {
    return 'TextGeometricTransform(scaleX=' + this.x5d_1 + ', skewX=' + this.y5d_1 + ')';
  };
  var androidx_compose_ui_text_style_TextIndent$stable;
  function Companion_23() {
    Companion_instance_24 = this;
    this.f5c_1 = new TextIndent_0();
  }
  var Companion_instance_24;
  function Companion_getInstance_37() {
    if (Companion_instance_24 == null)
      new Companion_23();
    return Companion_instance_24;
  }
  function TextIndent_0(firstLine, restLine) {
    Companion_getInstance_37();
    firstLine = firstLine === VOID ? get_sp(0) : firstLine;
    restLine = restLine === VOID ? get_sp(0) : restLine;
    this.z5d_1 = firstLine;
    this.a5e_1 = restLine;
  }
  protoOf(TextIndent_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent_0))
      return false;
    if (!equals(this.z5d_1, other.z5d_1))
      return false;
    if (!equals(this.a5e_1, other.a5e_1))
      return false;
    return true;
  };
  protoOf(TextIndent_0).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.z5d_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.a5e_1) | 0;
    return result;
  };
  protoOf(TextIndent_0).toString = function () {
    return 'TextIndent(firstLine=' + TextUnit__toString_impl_51ghw0(this.z5d_1) + ', restLine=' + TextUnit__toString_impl_51ghw0(this.a5e_1) + ')';
  };
  function _TextOverflow___init__impl__obguoe(value) {
    return value;
  }
  function _TextOverflow___get_value__impl__vugm5i($this) {
    return $this;
  }
  function TextOverflow__toString_impl_10s0c2($this) {
    return $this === Companion_getInstance_38().t59_1 ? 'Clip' : $this === Companion_getInstance_38().u59_1 ? 'Ellipsis' : $this === Companion_getInstance_38().x59_1 ? 'MiddleEllipsis' : $this === Companion_getInstance_38().v59_1 ? 'Visible' : $this === Companion_getInstance_38().w59_1 ? 'StartEllipsis' : 'Invalid';
  }
  function Companion_24() {
    Companion_instance_25 = this;
    this.t59_1 = _TextOverflow___init__impl__obguoe(1);
    this.u59_1 = _TextOverflow___init__impl__obguoe(2);
    this.v59_1 = _TextOverflow___init__impl__obguoe(3);
    this.w59_1 = _TextOverflow___init__impl__obguoe(4);
    this.x59_1 = _TextOverflow___init__impl__obguoe(5);
  }
  var Companion_instance_25;
  function Companion_getInstance_38() {
    if (Companion_instance_25 == null)
      new Companion_24();
    return Companion_instance_25;
  }
  function TextOverflow__hashCode_impl_kqdwgt($this) {
    return $this;
  }
  function TextOverflow__equals_impl_jkxdof($this, other) {
    if (!(other instanceof TextOverflow))
      return false;
    if (!($this === other.e5p_1))
      return false;
    return true;
  }
  function TextOverflow(value) {
    Companion_getInstance_38();
    this.e5p_1 = value;
  }
  protoOf(TextOverflow).toString = function () {
    return TextOverflow__toString_impl_10s0c2(this.e5p_1);
  };
  protoOf(TextOverflow).hashCode = function () {
    return TextOverflow__hashCode_impl_kqdwgt(this.e5p_1);
  };
  protoOf(TextOverflow).equals = function (other) {
    return TextOverflow__equals_impl_jkxdof(this.e5p_1, other);
  };
  function userPreferredLanguages() {
    return toList(getUserPreferredLanguagesAsArray());
  }
  function getUserPreferredLanguagesAsArray() {
    return window.navigator.languages;
  }
  var androidx_compose_ui_text_AtomicReference$stable;
  function AtomicReference(value) {
    this.f5p_1 = atomic$ref$1(value);
  }
  function strongDirectionType(_this__u8e3s4) {
    switch (CharDirection_getInstance().l46(_this__u8e3s4)) {
      case 0:
        return Companion_getInstance_39().h5p_1;
      case 1:
      case 13:
        return Companion_getInstance_39().i5p_1;
      default:
        return Companion_getInstance_39().g5p_1;
    }
  }
  var androidx_compose_ui_text_ExpireAfterAccessCache$stable;
  function checkEvicted($this, now) {
    var expireTime = subtract(now, $this.j5p_1);
    var iterator = $this.m5p_1.d2().i();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = iterator;
    $l$loop: while (_iterator__ex2g4s.j()) {
      var entry = _iterator__ex2g4s.k();
      if (compare(entry.x1(), expireTime) < 0) {
        $this.l5p_1.z1(entry.w1());
        iterator.m3();
      } else
        break $l$loop;
    }
  }
  function currentNanoTime$ref() {
    var l = function () {
      return currentNanoTime();
    };
    l.callableName = 'currentNanoTime';
    return l;
  }
  function ExpireAfterAccessCache(expireAfterNanos, currentNanos) {
    var tmp;
    if (currentNanos === VOID) {
      tmp = currentNanoTime$ref();
    } else {
      tmp = currentNanos;
    }
    currentNanos = tmp;
    this.j5p_1 = expireAfterNanos;
    this.k5p_1 = currentNanos;
    this.l5p_1 = HashMap_init_$Create$();
    this.m5p_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ExpireAfterAccessCache).n5p = function (key, loader) {
    this.m5p_1.z1(key);
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.l5p_1;
    var value = this_0.g2(key);
    var tmp;
    if (value == null) {
      var answer = loader(key);
      this_0.y1(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    // Inline function 'kotlin.also' call
    var this_1 = tmp;
    var now = this.k5p_1();
    // Inline function 'kotlin.collections.set' call
    this.m5p_1.y1(key, now);
    checkEvicted(this, now);
    return this_1;
  };
  function get_PUSH_DIRECTIONAL_ISOLATE_RANGE() {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return PUSH_DIRECTIONAL_ISOLATE_RANGE;
  }
  var PUSH_DIRECTIONAL_ISOLATE_RANGE;
  function _StrongDirectionType___init__impl__59uet3(value) {
    return value;
  }
  function Companion_25() {
    Companion_instance_26 = this;
    this.g5p_1 = _StrongDirectionType___init__impl__59uet3(0);
    this.h5p_1 = _StrongDirectionType___init__impl__59uet3(1);
    this.i5p_1 = _StrongDirectionType___init__impl__59uet3(2);
  }
  var Companion_instance_26;
  function Companion_getInstance_39() {
    if (Companion_instance_26 == null)
      new Companion_25();
    return Companion_instance_26;
  }
  function firstStrongDirectionType(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var _iterator__ex2g4s = get_codePointsOutsideDirectionalIsolate(_this__u8e3s4).i();
    $l$loop: while (_iterator__ex2g4s.j()) {
      var codePoint = _iterator__ex2g4s.k();
      var strongDirectionType_0 = strongDirectionType(codePoint);
      var tmp;
      if (strongDirectionType_0 === Companion_getInstance_39().g5p_1) {
        continue $l$loop;
      } else {
        tmp = strongDirectionType_0;
      }
      return tmp;
    }
    return Companion_getInstance_39().g5p_1;
  }
  function codePointAt(_this__u8e3s4, index) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var high = charSequenceGet(_this__u8e3s4, index);
    if (isHighSurrogate(high) && (index + 1 | 0) < charSequenceLength(_this__u8e3s4)) {
      var low = charSequenceGet(_this__u8e3s4, index + 1 | 0);
      if (isLowSurrogate(low)) {
        return toCodePoint(Companion_getInstance_5(), high, low);
      }
    }
    // Inline function 'kotlin.code' call
    return Char__toInt_impl_vasixd(high);
  }
  function get_codePointsOutsideDirectionalIsolate(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return sequence(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj_0(_this__u8e3s4, null));
  }
  function toCodePoint(_this__u8e3s4, high, low) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return (Char__minus_impl_a2frrh(high, _Char___init__impl__6a9atx(55296)) << 10 | Char__minus_impl_a2frrh(low, _Char___init__impl__6a9atx(56320))) + 65536 | 0;
  }
  function get_codePoints(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return sequence(_get_codePoints_$slambda_43x8dt_0(_this__u8e3s4, null));
  }
  function charCount(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return _this__u8e3s4 >= 65536 ? 2 : 1;
  }
  function _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj($this_codePointsOutsideDirectionalIsolate, resultContinuation) {
    this.w5p_1 = $this_codePointsOutsideDirectionalIsolate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).a5q = function ($this$sequence, $completion) {
    var tmp = this.b5q($this$sequence, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).e9 = function (p1, $completion) {
    return this.a5q(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 5;
            this.y5p_1 = 0;
            this.z5p_1 = get_codePoints(this.w5p_1).i();
            this.m8_1 = 1;
            continue $sm;
          case 1:
            if (!this.z5p_1.j()) {
              this.m8_1 = 4;
              continue $sm;
            }

            var codePoint = this.z5p_1.k();
            var progression = get_PUSH_DIRECTIONAL_ISOLATE_RANGE();
            var containsLower = progression.x_1;
            if (codePoint <= progression.y_1 ? containsLower <= codePoint : false) {
              this.y5p_1 = this.y5p_1 + 1 | 0;
              this.m8_1 = 3;
              continue $sm;
            } else {
              if (codePoint === 8297) {
                if (this.y5p_1 > 0) {
                  this.y5p_1 = this.y5p_1 - 1 | 0;
                }
                this.m8_1 = 3;
                continue $sm;
              } else {
                if (this.y5p_1 === 0) {
                  this.m8_1 = 2;
                  suspendResult = this.x5p_1.je(codePoint, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.m8_1 = 3;
                  continue $sm;
                }
              }
            }

          case 2:
            this.m8_1 = 3;
            continue $sm;
          case 3:
            this.m8_1 = 1;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 5) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).b5q = function ($this$sequence, completion) {
    var i = new _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj(this.w5p_1, completion);
    i.x5p_1 = $this$sequence;
    return i;
  };
  function _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj_0($this_codePointsOutsideDirectionalIsolate, resultContinuation) {
    var i = new _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj($this_codePointsOutsideDirectionalIsolate, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.a5q($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_codePoints_$slambda_43x8dt($this_codePoints, resultContinuation) {
    this.k5q_1 = $this_codePoints;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_codePoints_$slambda_43x8dt).a5q = function ($this$sequence, $completion) {
    var tmp = this.b5q($this$sequence, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(_get_codePoints_$slambda_43x8dt).e9 = function (p1, $completion) {
    return this.a5q(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_codePoints_$slambda_43x8dt).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            this.m5q_1 = 0;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            if (!(this.m5q_1 < charSequenceLength(this.k5q_1))) {
              this.m8_1 = 3;
              continue $sm;
            }

            this.n5q_1 = codePointAt(this.k5q_1, this.m5q_1);
            this.m8_1 = 2;
            suspendResult = this.l5q_1.je(this.n5q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m5q_1 = this.m5q_1 + charCount(this.n5q_1) | 0;
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
  protoOf(_get_codePoints_$slambda_43x8dt).b5q = function ($this$sequence, completion) {
    var i = new _get_codePoints_$slambda_43x8dt(this.k5q_1, completion);
    i.l5q_1 = $this$sequence;
    return i;
  };
  function _get_codePoints_$slambda_43x8dt_0($this_codePoints, resultContinuation) {
    var i = new _get_codePoints_$slambda_43x8dt($this_codePoints, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.a5q($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_CharHelpers_skiko_kt_d762bq;
  function _init_properties_CharHelpers_skiko_kt__8ej40s() {
    if (!properties_initialized_CharHelpers_skiko_kt_d762bq) {
      properties_initialized_CharHelpers_skiko_kt_d762bq = true;
      PUSH_DIRECTIONAL_ISOLATE_RANGE = numberRangeToNumber(8294, 8296);
    }
  }
  var androidx_compose_ui_text_FontRasterizationSettings$stable;
  function FontRasterizationSettings$Companion$PlatformDefault$delegate$lambda() {
    var tmp;
    switch (currentPlatform().i2_1) {
      case 2:
        var tmp1_smoothing = FontSmoothing_AntiAlias_getInstance();
        var tmp2_hinting = FontHinting_Normal_getInstance();
        tmp = new FontRasterizationSettings(tmp1_smoothing, tmp2_hinting, true, false);
        break;
      case 1:
      case 0:
        var tmp3_smoothing = FontSmoothing_AntiAlias_getInstance();
        var tmp4_hinting = FontHinting_Slight_getInstance();
        tmp = new FontRasterizationSettings(tmp3_smoothing, tmp4_hinting, true, false);
        break;
      case 7:
        var tmp5_smoothing = FontSmoothing_AntiAlias_getInstance();
        var tmp6_hinting = FontHinting_Slight_getInstance();
        tmp = new FontRasterizationSettings(tmp5_smoothing, tmp6_hinting, true, false);
        break;
      case 3:
      case 4:
      case 5:
      case 6:
        var tmp7_smoothing = FontSmoothing_AntiAlias_getInstance();
        var tmp8_hinting = FontHinting_Normal_getInstance();
        tmp = new FontRasterizationSettings(tmp7_smoothing, tmp8_hinting, true, false);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function FontRasterizationSettings$Companion$_get_PlatformDefault_$ref_q7exdb() {
    return function (p0) {
      return p0.p5q();
    };
  }
  function Companion_26() {
    Companion_instance_27 = this;
    var tmp = this;
    tmp.o5q_1 = lazy_0(FontRasterizationSettings$Companion$PlatformDefault$delegate$lambda);
  }
  protoOf(Companion_26).p5q = function () {
    var tmp0 = this.o5q_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('PlatformDefault', 1, tmp, FontRasterizationSettings$Companion$_get_PlatformDefault_$ref_q7exdb(), null);
    return tmp0.x1();
  };
  var Companion_instance_27;
  function Companion_getInstance_40() {
    if (Companion_instance_27 == null)
      new Companion_26();
    return Companion_instance_27;
  }
  function FontRasterizationSettings(smoothing, hinting, subpixelPositioning, autoHintingForced) {
    Companion_getInstance_40();
    this.q5q_1 = smoothing;
    this.r5q_1 = hinting;
    this.s5q_1 = subpixelPositioning;
    this.t5q_1 = autoHintingForced;
  }
  protoOf(FontRasterizationSettings).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof FontRasterizationSettings))
      THROW_CCE();
    if (!this.q5q_1.equals(other.q5q_1))
      return false;
    if (!this.r5q_1.equals(other.r5q_1))
      return false;
    if (!(this.s5q_1 === other.s5q_1))
      return false;
    return this.t5q_1 === other.t5q_1;
  };
  protoOf(FontRasterizationSettings).hashCode = function () {
    var result = this.q5q_1.hashCode();
    result = imul(31, result) + this.r5q_1.hashCode() | 0;
    result = imul(31, result) + getBooleanHashCode(this.s5q_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.t5q_1) | 0;
    return result;
  };
  protoOf(FontRasterizationSettings).toString = function () {
    return 'FontRasterizationSettings(smoothing=' + this.q5q_1.toString() + ', ' + ('hinting=' + this.r5q_1.toString() + ', ') + ('subpixelPositioning=' + this.s5q_1 + ', ') + ('autoHintingForced=' + this.t5q_1 + ')');
  };
  var FontSmoothing_None_instance;
  var FontSmoothing_AntiAlias_instance;
  var FontSmoothing_SubpixelAntiAlias_instance;
  var FontSmoothing_entriesInitialized;
  function FontSmoothing_initEntries() {
    if (FontSmoothing_entriesInitialized)
      return Unit_instance;
    FontSmoothing_entriesInitialized = true;
    FontSmoothing_None_instance = new FontSmoothing('None', 0);
    FontSmoothing_AntiAlias_instance = new FontSmoothing('AntiAlias', 1);
    FontSmoothing_SubpixelAntiAlias_instance = new FontSmoothing('SubpixelAntiAlias', 2);
  }
  function FontSmoothing(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var FontHinting_None_instance;
  var FontHinting_Slight_instance;
  var FontHinting_Normal_instance;
  var FontHinting_Full_instance;
  var FontHinting_entriesInitialized;
  function FontHinting_initEntries() {
    if (FontHinting_entriesInitialized)
      return Unit_instance;
    FontHinting_entriesInitialized = true;
    FontHinting_None_instance = new FontHinting('None', 0);
    FontHinting_Slight_instance = new FontHinting('Slight', 1);
    FontHinting_Normal_instance = new FontHinting('Normal', 2);
    FontHinting_Full_instance = new FontHinting('Full', 3);
  }
  function FontHinting(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toSkFontRastrSettings(_this__u8e3s4) {
    return new FontRastrSettings(toSkFontEdging(_this__u8e3s4.q5q_1), toSkFontHinting(_this__u8e3s4.r5q_1), _this__u8e3s4.s5q_1);
  }
  function toSkFontEdging(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.i2_1) {
      case 0:
        tmp = FontEdging_ALIAS_getInstance();
        break;
      case 1:
        tmp = FontEdging_ANTI_ALIAS_getInstance();
        break;
      case 2:
        tmp = FontEdging_SUBPIXEL_ANTI_ALIAS_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function toSkFontHinting(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.i2_1) {
      case 0:
        tmp = FontHinting_NONE_getInstance();
        break;
      case 1:
        tmp = FontHinting_SLIGHT_getInstance();
        break;
      case 2:
        tmp = FontHinting_NORMAL_getInstance();
        break;
      case 3:
        tmp = FontHinting_FULL_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function FontSmoothing_AntiAlias_getInstance() {
    FontSmoothing_initEntries();
    return FontSmoothing_AntiAlias_instance;
  }
  function FontHinting_Slight_getInstance() {
    FontHinting_initEntries();
    return FontHinting_Slight_instance;
  }
  function FontHinting_Normal_getInstance() {
    FontHinting_initEntries();
    return FontHinting_Normal_instance;
  }
  function Paragraph_1() {
  }
  function get_PlatformParagraphStyleSaver() {
    _init_properties_Savers_skiko_kt__qtio6d();
    return PlatformParagraphStyleSaver;
  }
  var PlatformParagraphStyleSaver;
  function get_LineBreakSaver() {
    _init_properties_Savers_skiko_kt__qtio6d();
    return LineBreakSaver;
  }
  var LineBreakSaver;
  function get_TextMotionSaver() {
    _init_properties_Savers_skiko_kt__qtio6d();
    return TextMotionSaver;
  }
  var TextMotionSaver;
  function get_Saver_20(_this__u8e3s4) {
    _init_properties_Savers_skiko_kt__qtio6d();
    return get_PlatformParagraphStyleSaver();
  }
  function get_Saver_21(_this__u8e3s4) {
    _init_properties_Savers_skiko_kt__qtio6d();
    return get_LineBreakSaver();
  }
  function get_Saver_22(_this__u8e3s4) {
    _init_properties_Savers_skiko_kt__qtio6d();
    return get_TextMotionSaver();
  }
  function PlatformParagraphStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_skiko_kt__qtio6d();
    return Unit_instance;
  }
  function PlatformParagraphStyleSaver$lambda_0(it) {
    _init_properties_Savers_skiko_kt__qtio6d();
    return PlatformParagraphStyle_init_$Create$();
  }
  function LineBreakSaver$lambda($this$Saver, it) {
    _init_properties_Savers_skiko_kt__qtio6d();
    return _LineBreak___get_mask__impl__je2e1t(it.x5c_1);
  }
  function LineBreakSaver$lambda_0(it) {
    _init_properties_Savers_skiko_kt__qtio6d();
    var mask = typeof it === 'number' ? it : THROW_CCE();
    var tmp;
    switch (mask) {
      case 1:
        tmp = Companion_getInstance_43().v5b_1;
        break;
      case 2:
        tmp = Companion_getInstance_43().w5b_1;
        break;
      case 3:
        tmp = Companion_getInstance_43().x5b_1;
        break;
      default:
        tmp = Companion_getInstance_43().y5b_1;
        break;
    }
    var tmp_0 = tmp;
    return tmp_0 == null ? null : new LineBreak(tmp_0);
  }
  function TextMotionSaver$lambda($this$Saver, it) {
    _init_properties_Savers_skiko_kt__qtio6d();
    return equals(it, Companion_getInstance_44().g5c_1) ? 0 : 1;
  }
  function TextMotionSaver$lambda_0(it) {
    _init_properties_Savers_skiko_kt__qtio6d();
    var tmp;
    if (equals(it, 0)) {
      tmp = Companion_getInstance_44().g5c_1;
    } else {
      tmp = Companion_getInstance_44().h5c_1;
    }
    return tmp;
  }
  var properties_initialized_Savers_skiko_kt_n0li93;
  function _init_properties_Savers_skiko_kt__qtio6d() {
    if (!properties_initialized_Savers_skiko_kt_n0li93) {
      properties_initialized_Savers_skiko_kt_n0li93 = true;
      var tmp = PlatformParagraphStyleSaver$lambda;
      PlatformParagraphStyleSaver = Saver_0(tmp, PlatformParagraphStyleSaver$lambda_0);
      var tmp_0 = LineBreakSaver$lambda;
      LineBreakSaver = Saver_0(tmp_0, LineBreakSaver$lambda_0);
      var tmp_1 = TextMotionSaver$lambda;
      TextMotionSaver = Saver_0(tmp_1, TextMotionSaver$lambda_0);
    }
  }
  var androidx_compose_ui_text_SkiaParagraph$stable;
  function _set_paragraph__p1bfvb($this, value) {
    $this.c5r_1 = value;
    $this.d5r_1 = null;
  }
  function _get_ellipsis__kt5xpi($this) {
    return listOf([new TextOverflow(Companion_getInstance_38().u59_1), new TextOverflow(Companion_getInstance_38().x59_1), new TextOverflow(Companion_getInstance_38().w59_1)]).t(new TextOverflow($this.z5q_1)) ? '\u2026' : '';
  }
  function _get_text__de5ose($this) {
    return $this.x5q_1.e5r_1;
  }
  function lineMetricsForOffset($this, offset) {
    var tmp;
    if (0 <= offset ? offset <= _get_text__de5ose($this).length : false) {
      var tmp0 = _get_lineMetrics__5iiuki($this);
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.text.binarySearchFirstMatchingOrLast' call
        // Inline function 'kotlin.collections.isEmpty' call
        if (tmp0.length === 0) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var tmp_0 = asList(tmp0);
        var index = binarySearch(tmp_0, VOID, VOID, SkiaParagraph$lineMetricsForOffset$lambda(offset));
        tmp$ret$0 = tmp0[coerceAtMost((-index | 0) - 1 | 0, get_lastIndex_0(tmp0))];
      }
      tmp = tmp$ret$0;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function getLineMetricsForVerticalPosition($this, vertical) {
    var tmp0 = _get_lineMetrics__5iiuki($this);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.binarySearchFirstMatchingOrLast' call
      // Inline function 'kotlin.collections.isEmpty' call
      if (tmp0.length === 0) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp = asList(tmp0);
      var index = binarySearch(tmp, VOID, VOID, SkiaParagraph$getLineMetricsForVerticalPosition$lambda(vertical));
      tmp$ret$0 = tmp0[coerceAtMost((-index | 0) - 1 | 0, get_lastIndex_0(tmp0))];
    }
    return tmp$ret$0;
  }
  function _get_lineMetrics__5iiuki($this) {
    var tmp0_elvis_lhs = $this.d5r_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = receiveLineMetrics($this);
      $this.d5r_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var lineMetrics = tmp;
    return lineMetrics;
  }
  function receiveLineMetrics($this) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = _get_text__de5ose($this);
    if (charSequenceLength(this_0) === 0) {
      tmp = $this.b5r_1.t5r($this.c5r_1);
    } else {
      // Inline function 'kotlin.collections.ifEmpty' call
      var this_1 = $this.c5r_1.k48();
      var tmp_0;
      // Inline function 'kotlin.collections.isEmpty' call
      if (this_1.length === 0) {
        tmp_0 = $this.b5r_1.t5r($this.c5r_1);
      } else {
        tmp_0 = this_1;
      }
      tmp = tmp_0;
    }
    var lineMetrics = tmp;
    var fontMetrics = $this.u5r().u3x();
    lineMetrics[0] = trimFirstAscent(lineMetrics[0], fontMetrics, $this.b5r_1.v5r());
    lineMetrics[lineMetrics.length - 1 | 0] = trimLastDescent(lineMetrics[lineMetrics.length - 1 | 0], fontMetrics, $this.b5r_1.v5r());
    return lineMetrics;
  }
  function getBoxForwardByOffset($this, offset) {
    if (!(0 <= offset ? offset <= _get_text__de5ose($this).length : false))
      return null;
    var to = offset + 1 | 0;
    while (to <= _get_text__de5ose($this).length) {
      var box = firstOrNull($this.c5r_1.h48(offset, to, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
      if (!(box == null)) {
        return box;
      }
      to = to + 1 | 0;
    }
    return null;
  }
  function SkiaParagraph$lineMetricsForOffset$lambda($offset) {
    return function (it) {
      var tmp;
      if ($offset < it.n47_1) {
        tmp = 1;
      } else {
        tmp = -1;
      }
      return tmp;
    };
  }
  function SkiaParagraph$getLineMetricsForVerticalPosition$lambda($vertical) {
    return function (it) {
      var tmp;
      if ($vertical < it.v47_1 + it.q47_1) {
        tmp = 1;
      } else {
        tmp = -1;
      }
      return tmp;
    };
  }
  function SkiaParagraph(paragraphIntrinsics, maxLines, overflow, constraints) {
    this.x5q_1 = paragraphIntrinsics;
    this.y5q_1 = maxLines;
    this.z5q_1 = overflow;
    this.a5r_1 = constraints;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = this.x5q_1.w5r();
    this_0.x5r(this.y5q_1, _get_ellipsis__kt5xpi(this));
    tmp.b5r_1 = this_0;
    this.c5r_1 = this.b5r_1.y5r(this.h3q());
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(_Constraints___get_minHeight__impl__ev4bgx(this.a5r_1) === 0 && _Constraints___get_minWidth__impl__hi9lfi(this.a5r_1) === 0)) {
      var tmp$ret$3 = 'Setting Constraints.minWidth and Constraints.minHeight is not supported, these should be the default zero values instead.';
      throwIllegalArgumentException(tmp$ret$3);
    }
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(this.y5q_1 >= 1)) {
      var tmp$ret$5 = 'maxLines should be greater than 0';
      throwIllegalArgumentException(tmp$ret$5);
    }
    var tmp0 = this.h3q();
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.i3q();
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$7 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$6 = _Size___init__impl__aywn0g(tmp$ret$7);
    this.b5r_1.z5r(tmp$ret$6);
    _set_paragraph__p1bfvb(this, this.b5r_1.y5r(this.h3q()));
    if (this.z5q_1 === Companion_getInstance_38().u59_1 && this.c5r_1.i3q() > _Constraints___get_maxHeight__impl__dt3e8z(this.a5r_1) && this.y5q_1 > 1) {
      var calculatedMaxLines = numberOfLinesThatFitMaxHeight(this, _Constraints___get_maxHeight__impl__dt3e8z(this.a5r_1));
      if (calculatedMaxLines >= 0 && !(calculatedMaxLines === this.y5q_1)) {
        this.b5r_1.x5r(coerceAtLeast(calculatedMaxLines, 1), _get_ellipsis__kt5xpi(this));
        _set_paragraph__p1bfvb(this, this.b5r_1.y5r(this.h3q()));
      }
    }
    this.d5r_1 = null;
  }
  protoOf(SkiaParagraph).u5r = function () {
    return this.b5r_1.a5s();
  };
  protoOf(SkiaParagraph).h3q = function () {
    return _Constraints___get_maxWidth__impl__uuyqc(this.a5r_1);
  };
  protoOf(SkiaParagraph).i3q = function () {
    return this.c5r_1.i3q();
  };
  protoOf(SkiaParagraph).c48 = function () {
    return this.x5q_1.n5r_1;
  };
  protoOf(SkiaParagraph).f5a = function () {
    var tmp0_safe_receiver = firstOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      tmp = tmp0_safe_receiver.v47_1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).g5a = function () {
    var tmp0_safe_receiver = lastOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      tmp = tmp0_safe_receiver.v47_1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).c5a = function () {
    return this.c5r_1.e48();
  };
  protoOf(SkiaParagraph).b5a = function () {
    var tmp;
    if (_get_text__de5ose(this) === '' || this.c5r_1.l48() < 1) {
      tmp = 1;
    } else {
      tmp = this.c5r_1.l48();
    }
    return tmp;
  };
  protoOf(SkiaParagraph).d5a = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.c5r_1.i48();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(this_0.length);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var item = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$2 = toComposeRect(item.u49_1);
      destination.h(tmp$ret$2);
    }
    return destination;
  };
  protoOf(SkiaParagraph).r59 = function (start, end) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!((0 <= start ? start <= end : false) && end <= _get_text__de5ose(this).length)) {
      var tmp$ret$1 = 'start(' + start + ') or end(' + end + ') is out of range [0..' + _get_text__de5ose(this).length + '],' + ' or start > end!';
      throwIllegalArgumentException(tmp$ret$1);
    }
    var boxes = this.c5r_1.h48(start, end, RectHeightMode_MAX_getInstance(), RectWidthMode_TIGHT_getInstance());
    var path = Path();
    var inductionVariable = 0;
    var last = boxes.length;
    while (inductionVariable < last) {
      var b = boxes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      asSkiaPath(path).q42(b.u49_1);
    }
    return path;
  };
  protoOf(SkiaParagraph).v5a = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.math.floor' call
      var x = tmp0_safe_receiver.v47_1 - tmp0_safe_receiver.p47_1;
      tmp = Math.floor(x);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).u5q = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.math.floor' call
      var x = tmp0_safe_receiver.v47_1 + tmp0_safe_receiver.q47_1;
      tmp = Math.floor(x);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).x5a = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k47_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).z5a = function (lineIndex, visibleEnd) {
    var tmp0_elvis_lhs = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var metrics = tmp;
    var tmp_0;
    if (visibleEnd) {
      var tmp_1;
      if (lineIndex > 0 && metrics.k47_1 < _get_lineMetrics__5iiuki(this)[lineIndex - 1 | 0].l47_1) {
        tmp_1 = metrics.l47_1;
      } else if (metrics.k47_1 < _get_text__de5ose(this).length && charCodeAt(_get_text__de5ose(this), metrics.k47_1) === _Char___init__impl__6a9atx(10)) {
        tmp_1 = metrics.k47_1;
      } else {
        tmp_1 = metrics.m47_1;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = metrics.l47_1;
    }
    return tmp_0;
  };
  protoOf(SkiaParagraph).u5a = function (offset) {
    return offset < 0 ? 0 : offset > _get_text__de5ose(this).length ? this.b5a() - 1 | 0 : ensureNotNull(lineMetricsForOffset(this, offset)).w47_1;
  };
  protoOf(SkiaParagraph).m5a = function (vertical) {
    var tmp0_safe_receiver = getLineMetricsForVerticalPosition(this, vertical);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w47_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).p5a = function (offset) {
    return this.x5q_1.k5r_1;
  };
  protoOf(SkiaParagraph).q5a = function (offset) {
    var tmp0_safe_receiver = getBoxForwardByOffset(this, offset);
    var tmp1_subject = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w49();
    var tmp;
    switch (tmp1_subject == null ? -1 : tmp1_subject.i2_1) {
      case 0:
        tmp = ResolvedTextDirection_Rtl_getInstance();
        break;
      case 1:
        tmp = ResolvedTextDirection_Ltr_getInstance();
        break;
      case -1:
        tmp = ResolvedTextDirection_Ltr_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(SkiaParagraph).r5a = function (offset) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= offset ? offset <= _get_text__de5ose(this).length : false)) {
      var tmp$ret$2 = 'offset(' + offset + ') is out of bounds [0,' + _get_text__de5ose(this).length + ']';
      throwIllegalArgumentException(tmp$ret$2);
    }
    if (offset < _get_text__de5ose(this).length && isWhitespace(charCodeAt(_get_text__de5ose(this), offset)) || offset === _get_text__de5ose(this).length) {
      var tmp;
      if (offset > 0 && !isWhitespace(charCodeAt(_get_text__de5ose(this), offset - 1 | 0))) {
        tmp = toTextRange(this.c5r_1.j48(offset - 1 | 0));
      } else {
        tmp = TextRange_1(offset, offset);
      }
      return tmp;
    }
    return toTextRange(this.c5r_1.j48(offset));
  };
  protoOf(SkiaParagraph).i5a = function (canvas, color, shadow, textDecoration, drawStyle, blendMode) {
    // Inline function 'kotlin.with' call
    var $this$with = this.b5r_1;
    $this$with.b5s(color);
    $this$with.c5s(shadow, textDecoration);
    $this$with.d5s(drawStyle);
    $this$with.e5s(blendMode);
    var tmp$ret$0 = $this$with.y5r(this.h3q());
    _set_paragraph__p1bfvb(this, tmp$ret$0);
    this.c5r_1.g48(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  protoOf(SkiaParagraph).k5a = function (canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode) {
    // Inline function 'kotlin.with' call
    var $this$with = this.b5r_1;
    var tmp0 = this.h3q();
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.i3q();
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$3 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$2 = _Size___init__impl__aywn0g(tmp$ret$3);
    $this$with.f5s(brush, tmp$ret$2, alpha);
    $this$with.c5s(shadow, textDecoration);
    $this$with.d5s(drawStyle);
    $this$with.e5s(blendMode);
    var tmp$ret$0 = $this$with.y5r(this.h3q());
    _set_paragraph__p1bfvb(this, tmp$ret$0);
    this.c5r_1.g48(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  function numberOfLinesThatFitMaxHeight(_this__u8e3s4, maxHeight) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.b5a();
    if (inductionVariable < last)
      do {
        var lineIndex = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (_this__u8e3s4.u5q(lineIndex) > maxHeight)
          return lineIndex;
      }
       while (inductionVariable < last);
    return _this__u8e3s4.b5a();
  }
  function trimFirstAscent(_this__u8e3s4, fontMetrics, textStyle) {
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = textStyle.l5i();
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0)))
      return _this__u8e3s4;
    var tmp0_elvis_lhs = textStyle.n5i();
    var style = tmp0_elvis_lhs == null ? Companion_getInstance_31().w5o_1 : tmp0_elvis_lhs;
    var tmp;
    if (Trim__isTrimFirstLineTop_impl_tqdsaa(style.h5e_1)) {
      tmp = -fontMetrics.o3y_1;
    } else {
      tmp = _this__u8e3s4.p47_1;
    }
    var ascent = tmp;
    return copy(_this__u8e3s4, VOID, VOID, VOID, VOID, VOID, ascent);
  }
  function trimLastDescent(_this__u8e3s4, fontMetrics, textStyle) {
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = textStyle.l5i();
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0)))
      return _this__u8e3s4;
    var tmp0_elvis_lhs = textStyle.n5i();
    var style = tmp0_elvis_lhs == null ? Companion_getInstance_31().w5o_1 : tmp0_elvis_lhs;
    var tmp;
    if (Trim__isTrimLastLineBottom_impl_8k6x3e(style.h5e_1)) {
      tmp = fontMetrics.p3y_1;
    } else {
      tmp = _this__u8e3s4.q47_1;
    }
    var descent = tmp;
    return copy(_this__u8e3s4, VOID, VOID, VOID, VOID, VOID, VOID, descent);
  }
  function toTextRange(_this__u8e3s4) {
    return TextRange_1(_this__u8e3s4.g40_1, _this__u8e3s4.h40_1);
  }
  function copy(_this__u8e3s4, startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber) {
    startIndex = startIndex === VOID ? _this__u8e3s4.k47_1 : startIndex;
    endIndex = endIndex === VOID ? _this__u8e3s4.l47_1 : endIndex;
    endExcludingWhitespaces = endExcludingWhitespaces === VOID ? _this__u8e3s4.m47_1 : endExcludingWhitespaces;
    endIncludingNewline = endIncludingNewline === VOID ? _this__u8e3s4.n47_1 : endIncludingNewline;
    isHardBreak = isHardBreak === VOID ? _this__u8e3s4.o47_1 : isHardBreak;
    ascent = ascent === VOID ? _this__u8e3s4.p47_1 : ascent;
    descent = descent === VOID ? _this__u8e3s4.q47_1 : descent;
    unscaledAscent = unscaledAscent === VOID ? _this__u8e3s4.r47_1 : unscaledAscent;
    height = height === VOID ? _this__u8e3s4.s47_1 : height;
    width = width === VOID ? _this__u8e3s4.t47_1 : width;
    left = left === VOID ? _this__u8e3s4.u47_1 : left;
    baseline = baseline === VOID ? _this__u8e3s4.v47_1 : baseline;
    lineNumber = lineNumber === VOID ? _this__u8e3s4.w47_1 : lineNumber;
    return new LineMetrics(startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber);
  }
  function _TextDecorationLineStyle___init__impl__fccanb(value) {
    return value;
  }
  function TextDecorationLineStyle__toString_impl_uezvi9($this) {
    return $this === Companion_getInstance_41().g5s_1 ? 'Solid' : $this === Companion_getInstance_41().h5s_1 ? 'Double' : $this === Companion_getInstance_41().i5s_1 ? 'Dotted' : $this === Companion_getInstance_41().j5s_1 ? 'Dashed' : $this === Companion_getInstance_41().k5s_1 ? 'Wavy' : 'Invalid';
  }
  function Companion_27() {
    Companion_instance_28 = this;
    this.g5s_1 = _TextDecorationLineStyle___init__impl__fccanb(1);
    this.h5s_1 = _TextDecorationLineStyle___init__impl__fccanb(2);
    this.i5s_1 = _TextDecorationLineStyle___init__impl__fccanb(3);
    this.j5s_1 = _TextDecorationLineStyle___init__impl__fccanb(4);
    this.k5s_1 = _TextDecorationLineStyle___init__impl__fccanb(5);
  }
  var Companion_instance_28;
  function Companion_getInstance_41() {
    if (Companion_instance_28 == null)
      new Companion_27();
    return Companion_instance_28;
  }
  function TextDecorationLineStyle__hashCode_impl_8ntype($this) {
    return $this;
  }
  function TextDecorationLineStyle__equals_impl_3jy6m($this, other) {
    if (!(other instanceof TextDecorationLineStyle))
      return false;
    if (!($this === other.l5s_1))
      return false;
    return true;
  }
  function TextDecorationLineStyle(value) {
    Companion_getInstance_41();
    this.l5s_1 = value;
  }
  protoOf(TextDecorationLineStyle).toString = function () {
    return TextDecorationLineStyle__toString_impl_uezvi9(this.l5s_1);
  };
  protoOf(TextDecorationLineStyle).hashCode = function () {
    return TextDecorationLineStyle__hashCode_impl_8ntype(this.l5s_1);
  };
  protoOf(TextDecorationLineStyle).equals = function (other) {
    return TextDecorationLineStyle__equals_impl_3jy6m(this.l5s_1, other);
  };
  var androidx_compose_ui_text_PlatformTextStyle$stable;
  var androidx_compose_ui_text_PlatformParagraphStyle$stable;
  var androidx_compose_ui_text_PlatformSpanStyle$stable;
  function PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    PlatformTextStyle.call($this);
    $this.k5h_1 = spanStyle;
    $this.l5h_1 = paragraphStyle;
    return $this;
  }
  function PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(PlatformTextStyle)));
  }
  protoOf(PlatformTextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformTextStyle))
      return false;
    if (!equals(this.l5h_1, other.l5h_1))
      return false;
    if (!equals(this.k5h_1, other.k5h_1))
      return false;
    return true;
  };
  protoOf(PlatformTextStyle).hashCode = function () {
    var tmp0_safe_receiver = this.k5h_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.l5h_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  function PlatformTextStyle() {
  }
  function Companion_28() {
    Companion_instance_29 = this;
    this.m5s_1 = PlatformParagraphStyle_init_$Create$();
  }
  var Companion_instance_29;
  function Companion_getInstance_42() {
    if (Companion_instance_29 == null)
      new Companion_28();
    return Companion_instance_29;
  }
  function PlatformParagraphStyle_init_$Init$($this) {
    PlatformParagraphStyle.call($this);
    $this.d5c_1 = Companion_getInstance_40().p5q();
    return $this;
  }
  function PlatformParagraphStyle_init_$Create$() {
    return PlatformParagraphStyle_init_$Init$(objectCreate(protoOf(PlatformParagraphStyle)));
  }
  protoOf(PlatformParagraphStyle).e5c = function (other) {
    if (other == null)
      return this;
    return other;
  };
  protoOf(PlatformParagraphStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformParagraphStyle))
      return false;
    if (!this.d5c_1.equals(other.d5c_1))
      return false;
    return true;
  };
  protoOf(PlatformParagraphStyle).hashCode = function () {
    return this.d5c_1.hashCode();
  };
  function PlatformParagraphStyle() {
    Companion_getInstance_42();
  }
  function createPlatformTextStyle(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle);
  }
  function createFontFamilyResolver(fontCache) {
    return new FontFamilyResolverImpl(SkiaFontLoader_init_$Create$(fontCache), createPlatformResolveInterceptor());
  }
  function createFontFamilyResolver_0() {
    return new FontFamilyResolverImpl(SkiaFontLoader_init_$Create$(), createPlatformResolveInterceptor());
  }
  var androidx_compose_ui_text_font_PlatformFontFamilyTypefaceAdapter$stable;
  function PlatformFontFamilyTypefaceAdapter() {
  }
  protoOf(PlatformFontFamilyTypefaceAdapter).h5k = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.i5j_1;
    if (tmp instanceof FontListFontFamily)
      return null;
    var skiaFontLoader = platformFontLoader instanceof SkiaFontLoader ? platformFontLoader : THROW_CCE();
    var tmp0_elvis_lhs = typefaceRequest.i5j_1;
    var result = skiaFontLoader.o5s(tmp0_elvis_lhs == null ? Companion_getInstance_17().z5f_1 : tmp0_elvis_lhs, typefaceRequest.j5j_1, typefaceRequest.k5j_1);
    return new Immutable(result);
  };
  var androidx_compose_ui_text_font_SkiaFontLoader$stable;
  function SkiaFontLoader_init_$Init$(fontCache, $this) {
    fontCache = fontCache === VOID ? new FontCache() : fontCache;
    SkiaFontLoader.call($this, SkiaFontLoader$_init_$lambda_5eoe7t(fontCache));
    return $this;
  }
  function SkiaFontLoader_init_$Create$(fontCache) {
    return SkiaFontLoader_init_$Init$(fontCache, objectCreate(protoOf(SkiaFontLoader)));
  }
  function _get_fontCache__rq14qm($this) {
    var tmp0 = $this.n5s_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('fontCache', 1, tmp, SkiaFontLoader$_get_fontCache_$ref_77g67v(), null);
    return tmp0.x1();
  }
  function SkiaFontLoader$_init_$lambda_5eoe7t($fontCache) {
    return function () {
      return $fontCache;
    };
  }
  function SkiaFontLoader$_get_fontCache_$ref_77g67v() {
    return function (p0) {
      return _get_fontCache__rq14qm(p0);
    };
  }
  function SkiaFontLoader(fontCacheProvider) {
    this.n5s_1 = lazy_0(fontCacheProvider);
  }
  protoOf(SkiaFontLoader).p5s = function () {
    return _get_fontCache__rq14qm(this).q5s_1;
  };
  protoOf(SkiaFontLoader).z5n = function (font) {
    if (!(font instanceof PlatformFont)) {
      if (!(font.u5i() === Companion_getInstance_20().w5i_1)) {
        throw IllegalArgumentException_init_$Create$_0('Unsupported font type: ' + toString_0(font));
      }
      return null;
    }
    var tmp0_subject = font.u5i();
    var tmp;
    if (tmp0_subject === Companion_getInstance_20().v5i_1) {
      tmp = _get_fontCache__rq14qm(this).u5s(font);
    } else if (tmp0_subject === Companion_getInstance_20().w5i_1) {
      // Inline function 'kotlin.runCatching' call
      var tmp_0;
      try {
        // Inline function 'kotlin.Companion.success' call
        var value = _get_fontCache__rq14qm(this).u5s(font);
        tmp_0 = _Result___init__impl__xyqfz8(value);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.Companion.failure' call
          tmp_1 = _Result___init__impl__xyqfz8(createFailure(e));
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      // Inline function 'kotlin.Result.getOrNull' call
      var this_0 = tmp_0;
      tmp = _Result___get_isFailure__impl__jpiriv(this_0) ? null : _Result___get_value__impl__bjfvqg(this_0);
    } else if (tmp0_subject === Companion_getInstance_20().x5i_1) {
      throw UnsupportedOperationException_init_$Create$_0('Unsupported Async font load path');
    } else {
      throw IllegalArgumentException_init_$Create$_0('Unknown loading type ' + FontLoadingStrategy__toString_impl_fx0z8f(font.u5i()));
    }
    return tmp;
  };
  protoOf(SkiaFontLoader).o5s = function (fontFamily, fontWeight, fontStyle) {
    return _get_fontCache__rq14qm(this).o5s(fontFamily, fontWeight, fontStyle);
  };
  protoOf(SkiaFontLoader).v5s = function (font, $completion) {
    return this.z5n(font);
  };
  protoOf(SkiaFontLoader).m5m = function (font, $completion) {
    return this.v5s(font, $completion);
  };
  protoOf(SkiaFontLoader).o5k = function () {
    return _get_fontCache__rq14qm(this);
  };
  var androidx_compose_ui_text_input_PlatformImeOptions$stable;
  function ActualParagraph(text, style, annotations, placeholders, maxLines, overflow, constraints, density, fontFamilyResolver) {
    return new SkiaParagraph(new SkiaParagraphIntrinsics(text, style, annotations, placeholders, density, fontFamilyResolver), maxLines, overflow, constraints);
  }
  function ActualParagraph_0(paragraphIntrinsics, maxLines, overflow, constraints) {
    return new SkiaParagraph(paragraphIntrinsics instanceof SkiaParagraphIntrinsics ? paragraphIntrinsics : THROW_CCE(), maxLines, overflow, constraints);
  }
  function get_DefaultFontSize_0() {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return DefaultFontSize_0;
  }
  var DefaultFontSize_0;
  function get_skTextStylesCache() {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return skTextStylesCache;
  }
  var skTextStylesCache;
  var androidx_compose_ui_text_platform_ParagraphBuilder_Op_StyleAdd$stable;
  var androidx_compose_ui_text_platform_ParagraphBuilder_Op_PutPlaceholder$stable;
  var androidx_compose_ui_text_platform_ParagraphBuilder_Op_EndPlaceholder$stable;
  var androidx_compose_ui_text_platform_ParagraphBuilder_Cut_StyleAdd$stable;
  var androidx_compose_ui_text_platform_ParagraphBuilder_Cut_StyleRemove$stable;
  var androidx_compose_ui_text_platform_ParagraphBuilder_Cut_PutPlaceholder$stable;
  var androidx_compose_ui_text_platform_ParagraphBuilder_Cut_EndPlaceholder$stable;
  var androidx_compose_ui_text_platform_ParagraphBuilder$stable;
  function ComputedStyle_init_$Init$(density, spanStyle, brushSize, blendMode, lineHeight, lineHeightStyle, $this) {
    brushSize = brushSize === VOID ? Companion_getInstance_6().k3q_1 : brushSize;
    blendMode = blendMode === VOID ? Companion_getInstance_0().y4m_1 : blendMode;
    ComputedStyle.call($this);
    $this.r5t(density, spanStyle, brushSize, blendMode, lineHeight, lineHeightStyle);
    return $this;
  }
  function ComputedStyle_init_$Create$(density, spanStyle, brushSize, blendMode, lineHeight, lineHeightStyle) {
    return ComputedStyle_init_$Init$(density, spanStyle, brushSize, blendMode, lineHeight, lineHeightStyle, objectCreate(protoOf(ComputedStyle)));
  }
  function ComputedStyle(textForegroundStyle, brushSize, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, textDecorationLineStyle, shadow, drawStyle, blendMode, lineHeight, topRatio) {
    textForegroundStyle = textForegroundStyle === VOID ? Unspecified_instance : textForegroundStyle;
    brushSize = brushSize === VOID ? Companion_getInstance_6().k3q_1 : brushSize;
    fontSize = fontSize === VOID ? NaN : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? null : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().y4h_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    textDecorationLineStyle = textDecorationLineStyle === VOID ? null : textDecorationLineStyle;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().y4m_1 : blendMode;
    lineHeight = lineHeight === VOID ? null : lineHeight;
    topRatio = topRatio === VOID ? -1.0 : topRatio;
    this.w5s_1 = textForegroundStyle;
    this.x5s_1 = brushSize;
    this.y5s_1 = fontSize;
    this.z5s_1 = fontWeight;
    this.a5t_1 = fontStyle;
    this.b5t_1 = fontSynthesis;
    this.c5t_1 = fontFamily;
    this.d5t_1 = fontFeatureSettings;
    this.e5t_1 = letterSpacing;
    this.f5t_1 = baselineShift;
    this.g5t_1 = textGeometricTransform;
    this.h5t_1 = localeList;
    this.i5t_1 = background;
    this.j5t_1 = textDecoration;
    this.k5t_1 = textDecorationLineStyle;
    this.l5t_1 = shadow;
    this.m5t_1 = drawStyle;
    this.n5t_1 = blendMode;
    this.o5t_1 = lineHeight;
    this.p5t_1 = topRatio;
    this.q5t_1 = new SkiaTextPaint();
  }
  protoOf(ComputedStyle).r5t = function (density, spanStyle, brushSize, blendMode, lineHeight, lineHeightStyle) {
    this.w5s_1 = spanStyle.z5c_1;
    this.x5s_1 = brushSize;
    var tmp = this;
    // Inline function 'kotlin.with' call
    tmp.y5s_1 = density.w3q(spanStyle.a5d_1);
    this.z5s_1 = spanStyle.b5d_1;
    this.a5t_1 = spanStyle.c5d_1;
    this.b5t_1 = spanStyle.d5d_1;
    this.c5t_1 = spanStyle.e5d_1;
    this.d5t_1 = spanStyle.f5d_1;
    var tmp_0 = this;
    var tmp_1;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = spanStyle.g5d_1;
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0))) {
      // Inline function 'kotlin.with' call
      tmp_1 = density.w3q(spanStyle.g5d_1);
    } else {
      tmp_1 = null;
    }
    tmp_0.e5t_1 = tmp_1;
    this.f5t_1 = spanStyle.h5d_1;
    this.g5t_1 = spanStyle.i5d_1;
    this.h5t_1 = spanStyle.j5d_1;
    this.i5t_1 = spanStyle.k5d_1;
    this.j5t_1 = spanStyle.l5d_1;
    var tmp_2 = this;
    var tmp0_safe_receiver = spanStyle.n5d_1;
    tmp_2.k5t_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x5e_1;
    this.l5t_1 = spanStyle.m5d_1;
    this.m5t_1 = spanStyle.o5d_1;
    this.n5t_1 = blendMode;
    var tmp_3 = this;
    var tmp_4;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(lineHeight), new Long(0, 0))) {
      tmp_4 = toPx(lineHeight, density, spanStyle.a5d_1);
    } else {
      tmp_4 = null;
    }
    tmp_3.o5t_1 = tmp_4;
    var tmp2_elvis_lhs = lineHeightStyle == null ? null : lineHeightStyle.g5e_1;
    var tmp_5;
    var tmp_6 = tmp2_elvis_lhs;
    if ((tmp_6 == null ? null : new Alignment(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_29().r5o_1;
    } else {
      tmp_5 = tmp2_elvis_lhs;
    }
    var alignment = tmp_5;
    this.p5t_1 = _Alignment___get_topRatio__impl__gg7tir(alignment);
  };
  protoOf(ComputedStyle).s5t = function () {
    var paint = this.q5t_1.p52();
    paint.b41();
    this.q5t_1.y4g(this.w5s_1.z4h());
    this.q5t_1.f5s(this.w5s_1.q5e(), this.x5s_1, this.w5s_1.b4e());
    this.q5t_1.d5s(this.m5t_1);
    this.q5t_1.y4t(this.n5t_1);
    return paint;
  };
  protoOf(ComputedStyle).x5t = function (fontFamilyResolver) {
    var res = TextStyle_init_$Create$();
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = this.w5s_1.z4h();
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      res.f41(toArgb(this.w5s_1.z4h()));
    }
    var foreground = this.s5t();
    if (!(foreground.q41() == null) || !foreground.e41().equals(PaintMode_FILL_getInstance()) || !foreground.u41()) {
      res.b4a(foreground);
    }
    var tmp0_safe_receiver = this.a5t_1;
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp0_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new FontStyle(tmp_0)).p5d_1;
      res.h4a(toSkFontStyle(it));
    }
    var tmp1_safe_receiver = this.j5t_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      res.f4a(toSkDecorationStyle(tmp1_safe_receiver, this.w5s_1.z4h(), this.k5t_1));
    }
    if (!equals(this.i5t_1, Companion_getInstance().y4h_1)) {
      // Inline function 'kotlin.also' call
      var this_1 = Paint_init_$Create$();
      this_1.f41(toArgb(this.i5t_1));
      res.d4a(this_1);
    }
    var tmp2_safe_receiver = this.z5s_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      res.h4a(res.i45().q3z(tmp2_safe_receiver.b5e_1));
    }
    var tmp3_safe_receiver = this.l5t_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      res.j4a(toSkShadow(tmp3_safe_receiver));
    }
    var tmp4_safe_receiver = this.e5t_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      res.u4a(tmp4_safe_receiver);
    }
    var tmp_1 = Companion_getInstance_7();
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.d5t_1;
    var tmp$ret$13 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    res.l4a(tmp_1.g3y(tmp$ret$13));
    res.m4a(this.y5s_1);
    var tmp5_safe_receiver = this.c5t_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp0_elvis_lhs_0 = this.z5s_1;
      var tmp_2 = tmp0_elvis_lhs_0 == null ? Companion_getInstance_23().m5f_1 : tmp0_elvis_lhs_0;
      var tmp1_elvis_lhs = this.a5t_1;
      var tmp_3;
      var tmp_4 = tmp1_elvis_lhs;
      if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
        tmp_3 = Companion_getInstance_21().t5f_1;
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      var tmp_5 = tmp_3;
      var tmp2_elvis_lhs = this.b5t_1;
      var tmp_6;
      var tmp_7 = tmp2_elvis_lhs;
      if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
        tmp_6 = Companion_getInstance_22().v5f_1;
      } else {
        tmp_6 = tmp2_elvis_lhs;
      }
      var tmp_8 = fontFamilyResolver.j5k(tmp5_safe_receiver, tmp_2, tmp_5, tmp_6).x1();
      var resolved = tmp_8 instanceof FontLoadResult ? tmp_8 : THROW_CCE();
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_2 = resolved.z5t_1;
      var tmp$ret$16 = copyToArray(this_2);
      res.o4a(tmp$ret$16);
      res.y4a(resolved.y5t_1);
    }
    var tmp6_safe_receiver = this.f5t_1;
    var tmp_9 = tmp6_safe_receiver;
    if ((tmp_9 == null ? null : new BaselineShift(tmp_9)) == null)
      null;
    else {
      var tmp_10 = tmp6_safe_receiver;
      // Inline function 'kotlin.let' call
      var it_0 = (tmp_10 == null ? null : new BaselineShift(tmp_10)).r5d_1;
      var fontMetrics = res.a4b();
      res.w4a(_BaselineShift___get_multiplier__impl__qhmjek(it_0) * fontMetrics.o3y_1);
    }
    var tmp7_safe_receiver = this.o5t_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      res.q4a(tmp7_safe_receiver / this.y5s_1);
    }
    res.s4a(this.p5t_1);
    return res;
  };
  protoOf(ComputedStyle).a5u = function (density, other) {
    var fontSize = toPx_0(other.a5d_1, density, this.y5s_1);
    this.w5s_1 = this.w5s_1.w5e(other.z5c_1);
    var tmp0_safe_receiver = other.e5d_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.c5t_1 = tmp0_safe_receiver;
    }
    this.y5s_1 = fontSize;
    var tmp1_safe_receiver = other.b5d_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.z5s_1 = tmp1_safe_receiver;
    }
    var tmp2_safe_receiver = other.c5d_1;
    var tmp = tmp2_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp2_safe_receiver;
      // Inline function 'kotlin.let' call
      this.a5t_1 = (tmp_0 == null ? null : new FontStyle(tmp_0)).p5d_1;
    }
    var tmp3_safe_receiver = other.d5d_1;
    var tmp_1 = tmp3_safe_receiver;
    if ((tmp_1 == null ? null : new FontSynthesis(tmp_1)) == null)
      null;
    else {
      var tmp_2 = tmp3_safe_receiver;
      // Inline function 'kotlin.let' call
      this.b5t_1 = (tmp_2 == null ? null : new FontSynthesis(tmp_2)).q5d_1;
    }
    var tmp4_safe_receiver = other.f5d_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.d5t_1 = tmp4_safe_receiver;
    }
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = other.g5d_1;
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0))) {
      this.e5t_1 = toPx_0(other.g5d_1, density, fontSize);
    }
    var tmp5_safe_receiver = other.h5d_1;
    var tmp_3 = tmp5_safe_receiver;
    if ((tmp_3 == null ? null : new BaselineShift(tmp_3)) == null)
      null;
    else {
      var tmp_4 = tmp5_safe_receiver;
      // Inline function 'kotlin.let' call
      this.f5t_1 = (tmp_4 == null ? null : new BaselineShift(tmp_4)).r5d_1;
    }
    var tmp6_safe_receiver = other.i5d_1;
    if (tmp6_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.g5t_1 = tmp6_safe_receiver;
    }
    var tmp7_safe_receiver = other.j5d_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.h5t_1 = tmp7_safe_receiver;
    }
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_1 = other.k5d_1;
    if (!equals(_Color___get_value__impl__1pls5m(this_1), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      this.i5t_1 = other.k5d_1;
    }
    var tmp8_safe_receiver = other.l5d_1;
    if (tmp8_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.j5t_1 = tmp8_safe_receiver;
    }
    var tmp9_safe_receiver = other.m5d_1;
    if (tmp9_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.l5t_1 = tmp9_safe_receiver;
    }
    var tmp10_safe_receiver = other.o5d_1;
    if (tmp10_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.m5t_1 = tmp10_safe_receiver;
    }
    var tmp11_safe_receiver = other.n5d_1;
    if (tmp11_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = tmp11_safe_receiver.x5e_1;
      var tmp_5;
      var tmp_6 = tmp0_safe_receiver_0;
      if ((tmp_6 == null ? null : new TextDecorationLineStyle(tmp_6)) == null) {
        tmp_5 = null;
      } else {
        var tmp_7 = tmp0_safe_receiver_0;
        // Inline function 'kotlin.let' call
        this.k5t_1 = (tmp_7 == null ? null : new TextDecorationLineStyle(tmp_7)).l5s_1;
        tmp_5 = Unit_instance;
      }
    }
  };
  protoOf(ComputedStyle).toString = function () {
    var tmp = toString_0(this.w5s_1);
    var tmp_0 = Size__toString_impl_o87ni8(this.x5s_1);
    var tmp_1 = this.y5s_1;
    var tmp_2 = toString(this.z5s_1);
    var tmp_3 = this.a5t_1;
    var tmp_4 = toString(tmp_3 == null ? null : new FontStyle(tmp_3));
    var tmp_5 = this.b5t_1;
    var tmp_6 = toString(tmp_5 == null ? null : new FontSynthesis(tmp_5));
    var tmp_7 = toString(this.c5t_1);
    var tmp_8 = this.d5t_1;
    var tmp_9 = this.e5t_1;
    var tmp_10 = this.f5t_1;
    var tmp_11 = toString(tmp_10 == null ? null : new BaselineShift(tmp_10));
    var tmp_12 = toString(this.g5t_1);
    var tmp_13 = toString(this.h5t_1);
    var tmp_14 = Color__toString_impl_hpzmaq(this.i5t_1);
    var tmp_15 = toString(this.j5t_1);
    var tmp_16 = this.k5t_1;
    return 'ComputedStyle(textForegroundStyle=' + tmp + ', brushSize=' + tmp_0 + ', fontSize=' + tmp_1 + ', fontWeight=' + tmp_2 + ', fontStyle=' + tmp_4 + ', fontSynthesis=' + tmp_6 + ', fontFamily=' + tmp_7 + ', fontFeatureSettings=' + tmp_8 + ', letterSpacing=' + tmp_9 + ', baselineShift=' + tmp_11 + ', textGeometricTransform=' + tmp_12 + ', localeList=' + tmp_13 + ', background=' + tmp_14 + ', textDecoration=' + tmp_15 + ', textDecorationLineStyle=' + toString(tmp_16 == null ? null : new TextDecorationLineStyle(tmp_16)) + ', shadow=' + toString(this.l5t_1) + ', drawStyle=' + toString(this.m5t_1) + ', blendMode=' + BlendMode__toString_impl_uuibkd(this.n5t_1) + ', lineHeight=' + this.o5t_1 + ', topRatio=' + this.p5t_1 + ')';
  };
  protoOf(ComputedStyle).hashCode = function () {
    var result = hashCode(this.w5s_1);
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.x5s_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.y5s_1) | 0;
    result = imul(result, 31) + (this.z5s_1 == null ? 0 : this.z5s_1.hashCode()) | 0;
    var tmp = imul(result, 31);
    var tmp_0;
    var tmp_1 = this.a5t_1;
    if ((tmp_1 == null ? null : new FontStyle(tmp_1)) == null) {
      tmp_0 = 0;
    } else {
      tmp_0 = FontStyle__hashCode_impl_7qhg4w(this.a5t_1);
    }
    result = tmp + tmp_0 | 0;
    var tmp_2 = imul(result, 31);
    var tmp_3;
    var tmp_4 = this.b5t_1;
    if ((tmp_4 == null ? null : new FontSynthesis(tmp_4)) == null) {
      tmp_3 = 0;
    } else {
      tmp_3 = FontSynthesis__hashCode_impl_4wi11v(this.b5t_1);
    }
    result = tmp_2 + tmp_3 | 0;
    result = imul(result, 31) + (this.c5t_1 == null ? 0 : hashCode(this.c5t_1)) | 0;
    result = imul(result, 31) + (this.d5t_1 == null ? 0 : getStringHashCode(this.d5t_1)) | 0;
    result = imul(result, 31) + (this.e5t_1 == null ? 0 : getNumberHashCode(this.e5t_1)) | 0;
    var tmp_5 = imul(result, 31);
    var tmp_6;
    var tmp_7 = this.f5t_1;
    if ((tmp_7 == null ? null : new BaselineShift(tmp_7)) == null) {
      tmp_6 = 0;
    } else {
      tmp_6 = BaselineShift__hashCode_impl_g0potx(this.f5t_1);
    }
    result = tmp_5 + tmp_6 | 0;
    result = imul(result, 31) + (this.g5t_1 == null ? 0 : this.g5t_1.hashCode()) | 0;
    result = imul(result, 31) + (this.h5t_1 == null ? 0 : this.h5t_1.hashCode()) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.i5t_1) | 0;
    result = imul(result, 31) + (this.j5t_1 == null ? 0 : this.j5t_1.hashCode()) | 0;
    var tmp_8 = imul(result, 31);
    var tmp_9;
    var tmp_10 = this.k5t_1;
    if ((tmp_10 == null ? null : new TextDecorationLineStyle(tmp_10)) == null) {
      tmp_9 = 0;
    } else {
      tmp_9 = TextDecorationLineStyle__hashCode_impl_8ntype(this.k5t_1);
    }
    result = tmp_8 + tmp_9 | 0;
    result = imul(result, 31) + (this.l5t_1 == null ? 0 : this.l5t_1.hashCode()) | 0;
    result = imul(result, 31) + (this.m5t_1 == null ? 0 : hashCode(this.m5t_1)) | 0;
    result = imul(result, 31) + BlendMode__hashCode_impl_93ceri(this.n5t_1) | 0;
    result = imul(result, 31) + (this.o5t_1 == null ? 0 : getNumberHashCode(this.o5t_1)) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p5t_1) | 0;
    return result;
  };
  protoOf(ComputedStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComputedStyle))
      return false;
    if (!equals(this.w5s_1, other.w5s_1))
      return false;
    if (!equals(this.x5s_1, other.x5s_1))
      return false;
    if (!equals(this.y5s_1, other.y5s_1))
      return false;
    if (!equals(this.z5s_1, other.z5s_1))
      return false;
    var tmp = this.a5t_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = other.a5t_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.b5t_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = other.b5t_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.c5t_1, other.c5t_1))
      return false;
    if (!(this.d5t_1 == other.d5t_1))
      return false;
    if (!equals(this.e5t_1, other.e5t_1))
      return false;
    var tmp_5 = this.f5t_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = other.f5t_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.g5t_1, other.g5t_1))
      return false;
    if (!equals(this.h5t_1, other.h5t_1))
      return false;
    if (!equals(this.i5t_1, other.i5t_1))
      return false;
    if (!equals(this.j5t_1, other.j5t_1))
      return false;
    var tmp_8 = this.k5t_1;
    var tmp_9 = tmp_8 == null ? null : new TextDecorationLineStyle(tmp_8);
    var tmp_10 = other.k5t_1;
    if (!equals(tmp_9, tmp_10 == null ? null : new TextDecorationLineStyle(tmp_10)))
      return false;
    if (!equals(this.l5t_1, other.l5t_1))
      return false;
    if (!equals(this.m5t_1, other.m5t_1))
      return false;
    if (!(this.n5t_1 === other.n5t_1))
      return false;
    if (!equals(this.o5t_1, other.o5t_1))
      return false;
    if (!equals(this.p5t_1, other.p5t_1))
      return false;
    return true;
  };
  function toPx(_this__u8e3s4, density, fontSize) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    // Inline function 'kotlin.with' call
    var tmp$ret$0 = density.w3q(fontSize);
    return toPx_0(_this__u8e3s4, density, tmp$ret$0);
  }
  function toSkFontStyle(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_21().u5f_1 ? Companion_getInstance_8().n3z_1 : Companion_getInstance_8().l3z_1;
  }
  function toSkDecorationStyle(_this__u8e3s4, color, textDecorationLineStyle) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var underline = _this__u8e3s4.z5o(Companion_getInstance_33().l5g_1);
    var overline = false;
    var lineThrough = _this__u8e3s4.z5o(Companion_getInstance_33().m5g_1);
    var gaps = false;
    var tmp;
    var tmp_0 = textDecorationLineStyle;
    if ((tmp_0 == null ? null : new TextDecorationLineStyle(tmp_0)) == null) {
      tmp = null;
    } else {
      tmp = toSkDecorationLineStyle(textDecorationLineStyle);
    }
    var tmp1_elvis_lhs = tmp;
    var lineStyle = tmp1_elvis_lhs == null ? DecorationLineStyle_SOLID_getInstance() : tmp1_elvis_lhs;
    var thicknessMultiplier = 1.0;
    return new DecorationStyle(underline, overline, lineThrough, gaps, toArgb(color), lineStyle, thicknessMultiplier);
  }
  function toSkShadow(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp = toArgb(_this__u8e3s4.m4o_1);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_0 = _this__u8e3s4.n4o_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_1 = _this__u8e3s4.n4o_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(this_1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp$ret$4 = floatFromBits(bits_0);
    return new Shadow_0(tmp, tmp_0, tmp$ret$4, _this__u8e3s4.o4o_1);
  }
  function toPx_0(_this__u8e3s4, density, fontSize) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(_this__u8e3s4), new Long(0, 0))) {
      tmp = fontSize;
    } else {
      if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4)) {
        tmp = fontSize * _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4);
      } else {
        if (_TextUnit___get_isSp__impl__8c3r6q(_this__u8e3s4)) {
          // Inline function 'kotlin.with' call
          tmp = density.w3q(_this__u8e3s4);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'Unexpected size in TextUnit.toPx';
          throw IllegalStateException_init_$Create$_0(toString_0(message));
        }
      }
    }
    return tmp;
  }
  function toSkDecorationLineStyle(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_41().g5s_1 ? DecorationLineStyle_SOLID_getInstance() : _this__u8e3s4 === Companion_getInstance_41().h5s_1 ? DecorationLineStyle_DOUBLE_getInstance() : _this__u8e3s4 === Companion_getInstance_41().i5s_1 ? DecorationLineStyle_DOTTED_getInstance() : _this__u8e3s4 === Companion_getInstance_41().j5s_1 ? DecorationLineStyle_DASHED_getInstance() : _this__u8e3s4 === Companion_getInstance_41().k5s_1 ? DecorationLineStyle_WAVY_getInstance() : DecorationLineStyle_SOLID_getInstance();
  }
  function ParagraphBuilder$Cut$PutPlaceholder$_get_position_$ref_jq6gk8(p0) {
    return function () {
      return p0.b5u_1;
    };
  }
  function ParagraphBuilder$Op$PutPlaceholder$_get_position_$ref_n2s1fp() {
    return function (p0) {
      return p0.h5u();
    };
  }
  function ParagraphBuilder$Cut$EndPlaceholder$_get_position_$ref_bdxpek(p0) {
    return function () {
      return p0.i5u_1;
    };
  }
  function ParagraphBuilder$Op$EndPlaceholder$_get_position_$ref_81c4j3() {
    return function (p0) {
      return p0.h5u();
    };
  }
  function StyleAdd(position, style) {
    Op.call(this);
    this.l5u_1 = position;
    this.m5u_1 = style;
  }
  protoOf(StyleAdd).h5u = function () {
    return this.l5u_1;
  };
  protoOf(StyleAdd).toString = function () {
    return 'StyleAdd(position=' + this.l5u_1 + ', style=' + this.m5u_1.toString() + ')';
  };
  protoOf(StyleAdd).hashCode = function () {
    var result = this.l5u_1;
    result = imul(result, 31) + this.m5u_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd))
      return false;
    if (!(this.l5u_1 === other.l5u_1))
      return false;
    if (!this.m5u_1.equals(other.m5u_1))
      return false;
    return true;
  };
  function PutPlaceholder(cut, width, height) {
    Op.call(this);
    this.d5u_1 = cut;
    this.e5u_1 = width;
    this.f5u_1 = height;
    var tmp = this;
    var tmp_0 = KProperty0;
    tmp.g5u_1 = getPropertyCallableRef('position', 0, tmp_0, ParagraphBuilder$Cut$PutPlaceholder$_get_position_$ref_jq6gk8(this.d5u_1), null);
  }
  protoOf(PutPlaceholder).h5u = function () {
    var tmp0 = this.g5u_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('position', 1, tmp, ParagraphBuilder$Op$PutPlaceholder$_get_position_$ref_n2s1fp(), null);
    return tmp0.get();
  };
  protoOf(PutPlaceholder).toString = function () {
    return 'PutPlaceholder(cut=' + this.d5u_1.toString() + ', width=' + this.e5u_1 + ', height=' + this.f5u_1 + ')';
  };
  protoOf(PutPlaceholder).hashCode = function () {
    var result = this.d5u_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.e5u_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.f5u_1) | 0;
    return result;
  };
  protoOf(PutPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder))
      return false;
    if (!this.d5u_1.equals(other.d5u_1))
      return false;
    if (!equals(this.e5u_1, other.e5u_1))
      return false;
    if (!equals(this.f5u_1, other.f5u_1))
      return false;
    return true;
  };
  function EndPlaceholder(cut) {
    Op.call(this);
    this.j5u_1 = cut;
    var tmp = this;
    var tmp_0 = KProperty0;
    tmp.k5u_1 = getPropertyCallableRef('position', 0, tmp_0, ParagraphBuilder$Cut$EndPlaceholder$_get_position_$ref_bdxpek(this.j5u_1), null);
  }
  protoOf(EndPlaceholder).h5u = function () {
    var tmp0 = this.k5u_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('position', 1, tmp, ParagraphBuilder$Op$EndPlaceholder$_get_position_$ref_81c4j3(), null);
    return tmp0.get();
  };
  protoOf(EndPlaceholder).toString = function () {
    return 'EndPlaceholder(cut=' + this.j5u_1.toString() + ')';
  };
  protoOf(EndPlaceholder).hashCode = function () {
    return this.j5u_1.hashCode();
  };
  protoOf(EndPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder))
      return false;
    if (!this.j5u_1.equals(other.j5u_1))
      return false;
    return true;
  };
  function StyleAdd_0(position, style) {
    Cut.call(this);
    this.n5u_1 = position;
    this.o5u_1 = style;
  }
  protoOf(StyleAdd_0).h5u = function () {
    return this.n5u_1;
  };
  protoOf(StyleAdd_0).toString = function () {
    return 'StyleAdd(position=' + this.n5u_1 + ', style=' + this.o5u_1.toString() + ')';
  };
  protoOf(StyleAdd_0).hashCode = function () {
    var result = this.n5u_1;
    result = imul(result, 31) + this.o5u_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd_0))
      return false;
    if (!(this.n5u_1 === other.n5u_1))
      return false;
    if (!this.o5u_1.equals(other.o5u_1))
      return false;
    return true;
  };
  function StyleRemove(position, style) {
    Cut.call(this);
    this.p5u_1 = position;
    this.q5u_1 = style;
  }
  protoOf(StyleRemove).h5u = function () {
    return this.p5u_1;
  };
  protoOf(StyleRemove).toString = function () {
    return 'StyleRemove(position=' + this.p5u_1 + ', style=' + this.q5u_1.toString() + ')';
  };
  protoOf(StyleRemove).hashCode = function () {
    var result = this.p5u_1;
    result = imul(result, 31) + this.q5u_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleRemove).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleRemove))
      return false;
    if (!(this.p5u_1 === other.p5u_1))
      return false;
    if (!this.q5u_1.equals(other.q5u_1))
      return false;
    return true;
  };
  function PutPlaceholder_0(position, placeholder) {
    Cut.call(this);
    this.b5u_1 = position;
    this.c5u_1 = placeholder;
  }
  protoOf(PutPlaceholder_0).h5u = function () {
    return this.b5u_1;
  };
  protoOf(PutPlaceholder_0).toString = function () {
    return 'PutPlaceholder(position=' + this.b5u_1 + ', placeholder=' + this.c5u_1.toString() + ')';
  };
  protoOf(PutPlaceholder_0).hashCode = function () {
    var result = this.b5u_1;
    result = imul(result, 31) + this.c5u_1.hashCode() | 0;
    return result;
  };
  protoOf(PutPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder_0))
      return false;
    if (!(this.b5u_1 === other.b5u_1))
      return false;
    if (!this.c5u_1.equals(other.c5u_1))
      return false;
    return true;
  };
  function EndPlaceholder_0(position) {
    Cut.call(this);
    this.i5u_1 = position;
  }
  protoOf(EndPlaceholder_0).h5u = function () {
    return this.i5u_1;
  };
  protoOf(EndPlaceholder_0).toString = function () {
    return 'EndPlaceholder(position=' + this.i5u_1 + ')';
  };
  protoOf(EndPlaceholder_0).hashCode = function () {
    return this.i5u_1;
  };
  protoOf(EndPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder_0))
      return false;
    if (!(this.i5u_1 === other.i5u_1))
      return false;
    return true;
  };
  function _get_initialStyle__6to25e($this) {
    var tmp = $this.e5v_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('initialStyle');
    }
  }
  function _get_ops__e6e97j($this) {
    var tmp = $this.f5v_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('ops');
    }
  }
  function prepareDefaultStyle($this) {
    $this.e5v_1 = copyWithDefaultFontSize($this.t5u_1.n5h(), $this.b5v_1);
    $this.d5v_1 = ComputedStyle_init_$Create$($this.z5u_1, _get_initialStyle__6to25e($this), $this.u5u_1, $this.c5v_1, $this.t5u_1.l5i(), $this.t5u_1.n5i());
  }
  function Op() {
  }
  function Cut() {
  }
  function makeOps($this, annotations, placeholders) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var cuts = ArrayList_init_$Create$();
    var _iterator__ex2g4s = annotations.i();
    $l$loop: while (_iterator__ex2g4s.j()) {
      var annotation = _iterator__ex2g4s.k();
      var tmp = annotation.r57_1;
      if (!(tmp instanceof SpanStyle))
        continue $l$loop;
      cuts.h(new StyleAdd_0(annotation.s57_1, annotation.r57_1));
      cuts.h(new StyleRemove(annotation.t57_1, annotation.r57_1));
    }
    var _iterator__ex2g4s_0 = placeholders.i();
    while (_iterator__ex2g4s_0.j()) {
      var placeholder = _iterator__ex2g4s_0.k();
      cuts.h(new PutPlaceholder_0(placeholder.s57_1, placeholder.r57_1));
      cuts.h(new EndPlaceholder_0(placeholder.t57_1));
    }
    var ops = mutableListOf([new StyleAdd(0, $this.d5v_1)]);
    // Inline function 'kotlin.collections.sortBy' call
    if (cuts.l() > 1) {
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp_0 = ParagraphBuilder$makeOps$lambda;
      var tmp$ret$2 = new sam$kotlin_Comparator$0_1(tmp_0);
      sortWith(cuts, tmp$ret$2);
    }
    var activeStyles = mutableListOf([_get_initialStyle__6to25e($this)]);
    var _iterator__ex2g4s_1 = cuts.i();
    while (_iterator__ex2g4s_1.j()) {
      var cut = _iterator__ex2g4s_1.k();
      if (cut instanceof StyleAdd_0) {
        activeStyles.h(cut.o5u_1);
        var prev = previousStyleAddAtTheSamePosition($this, cut.n5u_1, ops);
        if (prev == null) {
          // Inline function 'kotlin.also' call
          var this_0 = mergeStyles($this, activeStyles);
          this_0.a5u($this.z5u_1, cut.o5u_1);
          ops.h(new StyleAdd(cut.n5u_1, this_0));
        } else {
          prev.m5u_1.a5u($this.z5u_1, cut.o5u_1);
        }
      } else {
        if (cut instanceof StyleRemove) {
          activeStyles.q1(cut.q5u_1);
          ops.h(new StyleAdd(cut.p5u_1, mergeStyles($this, activeStyles)));
        } else {
          if (cut instanceof PutPlaceholder_0) {
            var currentStyle = mergeStyles($this, activeStyles);
            var op = new PutPlaceholder(cut, toPx_0(cut.c5u_1.i5c_1, $this.z5u_1, currentStyle.y5s_1), toPx_0(cut.c5u_1.j5c_1, $this.z5u_1, currentStyle.y5s_1));
            ops.h(op);
          } else {
            if (cut instanceof EndPlaceholder_0)
              ops.h(new EndPlaceholder(cut));
            else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
    }
    return ops;
  }
  function mergeStyles($this, activeStyles) {
    var style = ComputedStyle_init_$Create$($this.z5u_1, activeStyles.m(0), $this.u5u_1, $this.c5v_1, $this.t5u_1.l5i(), $this.t5u_1.n5i());
    var inductionVariable = 1;
    var last = activeStyles.l();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        style.a5u($this.z5u_1, activeStyles.m(i));
      }
       while (inductionVariable < last);
    return style;
  }
  function previousStyleAddAtTheSamePosition($this, position, ops) {
    var _iterator__ex2g4s = asReversed(ops).i();
    while (_iterator__ex2g4s.j()) {
      var prevOp = _iterator__ex2g4s.k();
      if (prevOp.h5u() < position)
        return null;
      if (prevOp instanceof StyleAdd)
        return prevOp;
    }
    return null;
  }
  function makeSkFontRasterizationSettings($this, style) {
    var tmp0_safe_receiver = style.j5b_1.j58_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d5c_1;
    var rasterizationSettings = tmp1_elvis_lhs == null ? Companion_getInstance_40().p5q() : tmp1_elvis_lhs;
    return toSkFontRastrSettings(rasterizationSettings);
  }
  function textStyleToParagraphStyle($this, style, computedStyle) {
    var pStyle = new ParagraphStyle();
    pStyle.f49(true);
    pStyle.m49(makeSkFontRasterizationSettings($this, style));
    pStyle.g49(makeSkTextStyle($this, computedStyle));
    // Inline function 'kotlin.let' call
    var it = style.j5i();
    pStyle.i49(toSkAlignment(it));
    var lineHeight = computedStyle.o5t_1;
    if (!(lineHeight == null) && lineHeight > computedStyle.y5s_1) {
      var tmp0_elvis_lhs = style.n5i();
      var lineHeightStyle = tmp0_elvis_lhs == null ? Companion_getInstance_31().w5o_1 : tmp0_elvis_lhs;
      pStyle.l49(toHeightMode(lineHeightStyle.h5e_1));
    } else {
      pStyle.l49(HeightMode_DISABLE_ALL_getInstance());
    }
    pStyle.h49(toSkDirection($this.a5v_1));
    var tmp1_safe_receiver = $this.t5u_1.m5i();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.with' call
      var $this$with = $this.z5u_1;
      pStyle.n49(new TextIndent($this$with.w3q(tmp1_safe_receiver.z5d_1), $this$with.w3q(tmp1_safe_receiver.a5e_1)));
    }
    return pStyle;
  }
  function makeSkTextStyle($this, style) {
    var tmp = get_skTextStylesCache();
    return tmp.h5v(style, ParagraphBuilder$makeSkTextStyle$lambda($this));
  }
  function sam$kotlin_Comparator$0_1(function_0) {
    this.i5v_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_1).yb = function (a, b) {
    return this.i5v_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).compare = function (a, b) {
    return this.yb(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).r2 = function () {
    return this.i5v_1;
  };
  protoOf(sam$kotlin_Comparator$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0_1).hashCode = function () {
    return hashCode(this.r2());
  };
  function ParagraphBuilder$makeOps$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.h5u();
    var tmp$ret$2 = b.h5u();
    return compareValues(tmp, tmp$ret$2);
  }
  function ParagraphBuilder$makeSkTextStyle$lambda(this$0) {
    return function (it) {
      return it.x5t(this$0.r5u_1);
    };
  }
  function ParagraphBuilder$defaultFont$delegate$lambda(this$0) {
    return function () {
      var loadResult = resolveFontFamily(this$0.t5u_1, this$0.r5u_1);
      return Font_init_$Create$(loadResult == null ? null : loadResult.y5t_1, this$0.d5v_1.y5s_1);
    };
  }
  function ParagraphBuilder$_get_defaultFont_$ref_9jivqf() {
    return function (p0) {
      return p0.u5r();
    };
  }
  function ParagraphBuilder_0(fontFamilyResolver, text, textStyle, brushSize, ellipsis, maxLines, annotations, placeholders, density, textDirection, drawStyle, blendMode) {
    brushSize = brushSize === VOID ? Companion_getInstance_6().k3q_1 : brushSize;
    ellipsis = ellipsis === VOID ? '' : ellipsis;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().y4m_1 : blendMode;
    this.r5u_1 = fontFamilyResolver;
    this.s5u_1 = text;
    this.t5u_1 = textStyle;
    this.u5u_1 = brushSize;
    this.v5u_1 = ellipsis;
    this.w5u_1 = maxLines;
    this.x5u_1 = annotations;
    this.y5u_1 = placeholders;
    this.z5u_1 = density;
    this.a5v_1 = textDirection;
    this.b5v_1 = drawStyle;
    this.c5v_1 = blendMode;
    this.d5v_1 = new ComputedStyle();
    var tmp = this;
    tmp.g5v_1 = lazy_0(ParagraphBuilder$defaultFont$delegate$lambda(this));
  }
  protoOf(ParagraphBuilder_0).j5v = function (paragraph) {
    if (paragraph == null)
      return Unit_instance;
    prepareDefaultStyle(this);
    var foregroundPaint = this.d5v_1.s5t();
    paragraph.n48(0, this.s5u_1.length, foregroundPaint);
  };
  protoOf(ParagraphBuilder_0).i2a = function () {
    prepareDefaultStyle(this);
    this.f5v_1 = makeOps(this, this.x5u_1, this.y5u_1);
    var pos = 0;
    var ps = textStyleToParagraphStyle(this, this.t5u_1, this.d5v_1);
    if (!(this.w5u_1 === 2147483647)) {
      ps.j49(this.w5u_1);
      ps.k49(this.v5u_1);
    }
    var tmp = this.r5u_1;
    var platformFontLoader = (tmp instanceof FontFamilyResolverImpl ? tmp : THROW_CCE()).z5j_1;
    var tmp_0;
    if (platformFontLoader instanceof SkiaFontLoader) {
      tmp_0 = platformFontLoader.p5s();
    } else {
      throw IllegalStateException_init_$Create$_0('Unsupported font loader ' + toString_0(platformFontLoader));
    }
    var fontCollection = tmp_0;
    var pb = new ParagraphBuilder(ps, fontCollection);
    var addText = true;
    var _iterator__ex2g4s = _get_ops__e6e97j(this).i();
    while (_iterator__ex2g4s.j()) {
      var op = _iterator__ex2g4s.k();
      if (addText && pos < op.h5u()) {
        pb.t48(toString_0(substring(this.s5u_1, pos, op.h5u())));
      }
      if (op instanceof StyleAdd) {
        var tmp_1 = op.m5u_1.c5t_1;
        var tmp2_elvis_lhs = op.m5u_1.z5s_1;
        var tmp_2 = tmp2_elvis_lhs == null ? Companion_getInstance_23().m5f_1 : tmp2_elvis_lhs;
        var tmp3_elvis_lhs = op.m5u_1.a5t_1;
        var tmp_3;
        var tmp_4 = tmp3_elvis_lhs;
        if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
          tmp_3 = Companion_getInstance_21().t5f_1;
        } else {
          tmp_3 = tmp3_elvis_lhs;
        }
        var tmp_5 = tmp_3;
        var tmp4_elvis_lhs = op.m5u_1.b5t_1;
        var tmp_6;
        var tmp_7 = tmp4_elvis_lhs;
        if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
          tmp_6 = Companion_getInstance_22().y5f_1;
        } else {
          tmp_6 = tmp4_elvis_lhs;
        }
        this.r5u_1.j5k(tmp_1, tmp_2, tmp_5, tmp_6);
        pb.s48(makeSkTextStyle(this, op.m5u_1));
      } else {
        if (op instanceof PutPlaceholder) {
          var placeholderStyle = new PlaceholderStyle(op.e5u_1, op.f5u_1, toSkPlaceholderAlignment(op.d5u_1.c5u_1.k5c_1), BaselineMode_ALPHABETIC_getInstance(), 0.0);
          pb.u48(placeholderStyle);
          addText = false;
        } else {
          if (op instanceof EndPlaceholder) {
            addText = true;
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      pos = op.h5u();
    }
    if (addText && pos < this.s5u_1.length) {
      pb.t48(toString_0(substring(this.s5u_1, pos, this.s5u_1.length)));
    }
    return pb.i2a();
  };
  protoOf(ParagraphBuilder_0).u5r = function () {
    var tmp0 = this.g5v_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('defaultFont', 1, tmp, ParagraphBuilder$_get_defaultFont_$ref_9jivqf(), null);
    return tmp0.x1();
  };
  protoOf(ParagraphBuilder_0).t5r = function (paragraph) {
    var metrics = this.u5r().u3x();
    var ascent = metrics.o3y_1;
    var descent = metrics.p3y_1;
    var baseline = paragraph.d48();
    var lineHeight = this.d5v_1.o5t_1;
    if (!(lineHeight == null)) {
      var topRatio = this.d5v_1.p5t_1;
      if (0.0 <= topRatio ? topRatio <= 1.0 : false) {
        var extraLeading = lineHeight - this.d5v_1.y5s_1;
        ascent = ascent - extraLeading * topRatio;
        descent = descent + extraLeading * (1.0 - topRatio);
      } else {
        var multiplier = lineHeight / this.d5v_1.y5s_1;
        ascent = ascent * multiplier;
        descent = descent * multiplier;
      }
    }
    var height = descent - ascent;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [new LineMetrics(0, 0, 0, 0, true, -ascent, descent, ascent, height, 0.0, 0.0, baseline, 0)];
  };
  function copyWithDefaultFontSize(_this__u8e3s4, drawStyle) {
    drawStyle = drawStyle === VOID ? null : drawStyle;
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var fontSize = orDefaultFontSize(_this__u8e3s4.a5d_1);
    var tmp;
    if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4.g5d_1)) {
      // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
      var other = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4.g5d_1);
      checkArithmetic(fontSize);
      tmp = pack(_TextUnit___get_rawType__impl__tu8yq5(fontSize), _TextUnit___get_value__impl__hpbx0k(fontSize) * other);
    } else {
      tmp = _this__u8e3s4.g5d_1;
    }
    var letterSpacing = tmp;
    return _this__u8e3s4.t5e(VOID, fontSize, VOID, VOID, VOID, VOID, VOID, letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, drawStyle);
  }
  function toSkPlaceholderAlignment(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    if (_this__u8e3s4 === Companion_getInstance_14().l5c_1) {
      tmp = PlaceholderAlignment_ABOVE_BASELINE_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_14().p5c_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_14().q5c_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_14().r5c_1) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_14().m5c_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_14().n5c_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_14().o5c_1) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else {
      // Inline function 'kotlin.error' call
      var message = 'Invalid PlaceholderVerticalAlign.';
      throw IllegalStateException_init_$Create$_0(toString_0(message));
    }
    return tmp;
  }
  function toSkAlignment(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_32().o5b_1 ? Alignment_LEFT_getInstance() : _this__u8e3s4 === Companion_getInstance_32().p5b_1 ? Alignment_RIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_32().q5b_1 ? Alignment_CENTER_getInstance() : _this__u8e3s4 === Companion_getInstance_32().r5b_1 ? Alignment_JUSTIFY_getInstance() : _this__u8e3s4 === Companion_getInstance_32().s5b_1 ? Alignment_START_getInstance() : _this__u8e3s4 === Companion_getInstance_32().t5b_1 ? Alignment_END_getInstance() : Alignment_START_getInstance();
  }
  function toHeightMode(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_28().n5o_1 ? HeightMode_DISABLE_ALL_getInstance() : _this__u8e3s4 === Companion_getInstance_28().l5o_1 ? HeightMode_DISABLE_FIRST_ASCENT_getInstance() : _this__u8e3s4 === Companion_getInstance_28().m5o_1 ? HeightMode_DISABLE_LAST_DESCENT_getInstance() : _this__u8e3s4 === Companion_getInstance_28().o5o_1 ? HeightMode_ALL_getInstance() : HeightMode_DISABLE_ALL_getInstance();
  }
  function toSkDirection(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    switch (_this__u8e3s4.i2_1) {
      case 0:
        tmp = Direction_LTR_getInstance();
        break;
      case 1:
        tmp = Direction_RTL_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function resolveFontFamily(_this__u8e3s4, fontFamilyResolver) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp0_safe_receiver = _this__u8e3s4.z5h();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_elvis_lhs = _this__u8e3s4.w5h();
      var tmp_0 = tmp0_elvis_lhs == null ? Companion_getInstance_23().m5f_1 : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = _this__u8e3s4.x5h();
      var tmp_1;
      var tmp_2 = tmp1_elvis_lhs;
      if ((tmp_2 == null ? null : new FontStyle(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_21().t5f_1;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var tmp_3 = tmp_1;
      var tmp2_elvis_lhs = _this__u8e3s4.y5h();
      var tmp_4;
      var tmp_5 = tmp2_elvis_lhs;
      if ((tmp_5 == null ? null : new FontSynthesis(tmp_5)) == null) {
        tmp_4 = Companion_getInstance_22().y5f_1;
      } else {
        tmp_4 = tmp2_elvis_lhs;
      }
      var tmp_6 = fontFamilyResolver.j5k(tmp0_safe_receiver, tmp_0, tmp_3, tmp_4).x1();
      tmp = tmp_6 instanceof FontLoadResult ? tmp_6 : THROW_CCE();
    }
    return tmp;
  }
  function orDefaultFontSize(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(_this__u8e3s4), new Long(0, 0))) {
      tmp = get_DefaultFontSize_0();
    } else {
      if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4)) {
        var tmp0 = get_DefaultFontSize_0();
        // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
        var other = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4);
        checkArithmetic(tmp0);
        tmp = pack(_TextUnit___get_rawType__impl__tu8yq5(tmp0), _TextUnit___get_value__impl__hpbx0k(tmp0) * other);
      } else {
        tmp = _this__u8e3s4;
      }
    }
    return tmp;
  }
  var properties_initialized_ParagraphBuilder_skiko_kt_5j6rti;
  function _init_properties_ParagraphBuilder_skiko_kt__fblzyk() {
    if (!properties_initialized_ParagraphBuilder_skiko_kt_5j6rti) {
      properties_initialized_ParagraphBuilder_skiko_kt_5j6rti = true;
      DefaultFontSize_0 = get_sp(16);
      skTextStylesCache = new NoCache();
      androidx_compose_ui_text_platform_ParagraphBuilder_Op_StyleAdd$stable = 8;
      androidx_compose_ui_text_platform_ParagraphBuilder_Op_PutPlaceholder$stable = 8;
      androidx_compose_ui_text_platform_ParagraphBuilder_Op_EndPlaceholder$stable = 8;
      androidx_compose_ui_text_platform_ParagraphBuilder_Cut_StyleAdd$stable = 0;
      androidx_compose_ui_text_platform_ParagraphBuilder_Cut_StyleRemove$stable = 0;
      androidx_compose_ui_text_platform_ParagraphBuilder_Cut_PutPlaceholder$stable = 0;
      androidx_compose_ui_text_platform_ParagraphBuilder_Cut_EndPlaceholder$stable = 0;
      androidx_compose_ui_text_platform_ParagraphBuilder$stable = 8;
    }
  }
  var androidx_compose_ui_text_platform_ParagraphLayouter$stable;
  function invalidateParagraph($this, onlyForeground) {
    onlyForeground = onlyForeground === VOID ? false : onlyForeground;
    if (onlyForeground && $this.p5r_1.x5u_1.n()) {
      $this.r5r_1 = true;
    } else {
      $this.q5r_1 = null;
    }
  }
  function ParagraphLayouter(text, textDirection, style, annotations, placeholders, density, fontFamilyResolver) {
    this.o5r_1 = text;
    this.p5r_1 = new ParagraphBuilder_0(fontFamilyResolver, this.o5r_1, style, VOID, VOID, VOID, annotations, placeholders, density, textDirection);
    this.q5r_1 = null;
    this.r5r_1 = false;
    this.s5r_1 = NaN;
  }
  protoOf(ParagraphLayouter).a5s = function () {
    return this.p5r_1.u5r();
  };
  protoOf(ParagraphLayouter).v5r = function () {
    return this.p5r_1.t5u_1;
  };
  protoOf(ParagraphLayouter).t5r = function (paragraph) {
    return this.p5r_1.t5r(paragraph);
  };
  protoOf(ParagraphLayouter).x5r = function (maxLines, ellipsis) {
    if (!(this.p5r_1.w5u_1 === maxLines) || !(this.p5r_1.v5u_1 === ellipsis)) {
      this.p5r_1.w5u_1 = maxLines;
      this.p5r_1.v5u_1 = ellipsis;
      invalidateParagraph(this);
    }
  };
  protoOf(ParagraphLayouter).b5s = function (color) {
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = color;
    } else {
      tmp = this.p5r_1.t5u_1.z4h();
    }
    var actualColor = tmp;
    if (!equals(this.p5r_1.t5u_1.z4h(), actualColor)) {
      this.p5r_1.t5u_1 = this.p5r_1.t5u_1.s5h(actualColor);
      invalidateParagraph(this, true);
    }
  };
  protoOf(ParagraphLayouter).f5s = function (brush, brushSize, alpha) {
    var actualSize = this.p5r_1.u5u_1;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (!equals(this.p5r_1.t5u_1.q5e(), brush)) {
      tmp_2 = true;
    } else {
      // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
      tmp_2 = equalsLong(_Size___get_packedValue__impl__7rlt1o(actualSize), new Long(2143289344, 2143289344));
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Size___get_packedValue__impl__7rlt1o(actualSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      var tmp_3 = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o(brushSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(shiftRight(value_0, 32));
      var tmp$ret$5 = floatFromBits(bits_0);
      tmp_1 = !sameValueAs(tmp_3, tmp$ret$5);
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_1 = _Size___get_packedValue__impl__7rlt1o(actualSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
      var tmp_4 = floatFromBits(bits_1);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_2 = _Size___get_packedValue__impl__7rlt1o(brushSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      var tmp$ret$13 = floatFromBits(bits_2);
      tmp_0 = !sameValueAs(tmp_4, tmp$ret$13);
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !sameValueAs(this.p5r_1.t5u_1.b4e(), alpha);
    }
    if (tmp) {
      this.p5r_1.t5u_1 = this.p5r_1.t5u_1.u5h(brush, alpha);
      this.p5r_1.u5u_1 = brushSize;
      invalidateParagraph(this, true);
    }
  };
  protoOf(ParagraphLayouter).z5r = function (brushSize) {
    if (!equals(this.p5r_1.u5u_1, brushSize)) {
      this.p5r_1.u5u_1 = brushSize;
      var tmp;
      var tmp_0 = this.p5r_1.t5u_1.q5e();
      if (tmp_0 instanceof ShaderBrush) {
        tmp = true;
      } else {
        var tmp0 = this.p5r_1.x5u_1;
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.ui.util.fastAny' call
          // Inline function 'androidx.compose.ui.util.fastForEach' call
          var inductionVariable = 0;
          var last = tmp0.l() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0.m(index);
              var tmp_1;
              var tmp_2 = item.r57_1;
              if (tmp_2 instanceof SpanStyle) {
                var tmp_3 = item.r57_1.q5e();
                tmp_1 = tmp_3 instanceof ShaderBrush;
              } else {
                tmp_1 = false;
              }
              if (tmp_1) {
                tmp$ret$0 = true;
                break $l$block;
              }
            }
             while (inductionVariable <= last);
          tmp$ret$0 = false;
        }
        tmp = tmp$ret$0;
      }
      if (tmp) {
        invalidateParagraph(this, true);
      }
    }
  };
  protoOf(ParagraphLayouter).c5s = function (shadow, textDecoration) {
    if (!equals(this.p5r_1.t5u_1.h5i(), shadow) || !equals(this.p5r_1.t5u_1.g5i(), textDecoration)) {
      this.p5r_1.t5u_1 = this.p5r_1.t5u_1.s5h(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, textDecoration, shadow);
      invalidateParagraph(this);
    }
  };
  protoOf(ParagraphLayouter).d5s = function (drawStyle) {
    if (!equals(this.p5r_1.b5v_1, drawStyle)) {
      this.p5r_1.b5v_1 = drawStyle;
      invalidateParagraph(this, true);
    }
  };
  protoOf(ParagraphLayouter).e5s = function (blendMode) {
    if (!(this.p5r_1.c5v_1 === blendMode)) {
      this.p5r_1.c5v_1 = blendMode;
      invalidateParagraph(this);
    }
  };
  protoOf(ParagraphLayouter).y5r = function (width) {
    var paragraph = this.q5r_1;
    var tmp;
    if (!(paragraph == null)) {
      var layoutRequired = false;
      if (this.r5r_1) {
        this.p5r_1.j5v(paragraph);
        this.r5r_1 = false;
        paragraph.m48();
        layoutRequired = true;
      }
      if (!sameValueAs(this.s5r_1, width)) {
        this.s5r_1 = width;
        layoutRequired = true;
      }
      if (layoutRequired) {
        paragraph.f48(width);
      }
      tmp = paragraph;
    } else {
      paragraph = this.p5r_1.i2a();
      paragraph.f48(width);
      this.q5r_1 = paragraph;
      this.r5r_1 = false;
      return paragraph;
    }
    return tmp;
  };
  function sameValueAs(_this__u8e3s4, other) {
    // Inline function 'kotlin.math.abs' call
    var x = _this__u8e3s4 - other;
    return Math.abs(x) < 1.0E-5;
  }
  function get_GenericFontFamiliesMapping() {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    var tmp0 = GenericFontFamiliesMapping$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('GenericFontFamiliesMapping', 0, tmp, _get_GenericFontFamiliesMapping_$ref_opq6z8(), null);
    return tmp0.x1();
  }
  var GenericFontFamiliesMapping$delegate;
  var androidx_compose_ui_text_platform_SystemFont$stable;
  var androidx_compose_ui_text_platform_LoadedFont$stable;
  var androidx_compose_ui_text_platform_FontLoader$stable;
  var androidx_compose_ui_text_platform_FontLoadResult$stable;
  var androidx_compose_ui_text_platform_FontCache$stable;
  function SystemFont() {
  }
  function _get_fontCache__rq14qm_0($this) {
    var tmp0 = $this.k5v_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('fontCache', 1, tmp, FontLoader$_get_fontCache_$ref_6slm39(), null);
    return tmp0.x1();
  }
  function FontLoader$fontCache$delegate$lambda() {
    return new FontCache();
  }
  function FontLoader$_get_fontCache_$ref_6slm39() {
    return function (p0) {
      return _get_fontCache__rq14qm_0(p0);
    };
  }
  function FontLoader$fontFamilyResolver$delegate$lambda(this$0) {
    return function () {
      return createFontFamilyResolver(_get_fontCache__rq14qm_0(this$0));
    };
  }
  function FontLoader() {
    var tmp = this;
    tmp.k5v_1 = lazy_0(FontLoader$fontCache$delegate$lambda);
    var tmp_0 = this;
    tmp_0.l5v_1 = lazy_0(FontLoader$fontFamilyResolver$delegate$lambda(this));
  }
  function FontLoadResult(typeface, aliases) {
    this.y5t_1 = typeface;
    this.z5t_1 = aliases;
  }
  var Platform_Unknown_instance;
  var Platform_Linux_instance;
  var Platform_Windows_instance;
  var Platform_MacOS_instance;
  var Platform_IOS_instance;
  var Platform_TvOS_instance;
  var Platform_WatchOS_instance;
  var Platform_Android_instance;
  var Platform_entriesInitialized;
  function Platform_initEntries() {
    if (Platform_entriesInitialized)
      return Unit_instance;
    Platform_entriesInitialized = true;
    Platform_Unknown_instance = new Platform('Unknown', 0);
    Platform_Linux_instance = new Platform('Linux', 1);
    Platform_Windows_instance = new Platform('Windows', 2);
    Platform_MacOS_instance = new Platform('MacOS', 3);
    Platform_IOS_instance = new Platform('IOS', 4);
    Platform_TvOS_instance = new Platform('TvOS', 5);
    Platform_WatchOS_instance = new Platform('WatchOS', 6);
    Platform_Android_instance = new Platform('Android', 7);
  }
  function Platform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ensureRegistered($this, typeface, key) {
    if (!$this.s5s_1.t(key)) {
      $this.r5s_1.d4b(typeface, key);
      $this.s5s_1.h(key);
    }
  }
  function ensureRegistered_0($this, fontFamily) {
    var tmp;
    if (fontFamily instanceof FontListFontFamily) {
      // Inline function 'androidx.compose.ui.util.fastMapNotNull' call
      var this_0 = fontFamily.d5j_1;
      var target = ArrayList_init_$Create$_0(this_0.l());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = this_0.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.m(index);
          var tmp_0;
          if (item instanceof SystemFont) {
            tmp_0 = item.q5v_1;
          } else {
            tmp_0 = null;
          }
          var tmp0_safe_receiver = tmp_0;
          if (tmp0_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.collections.plusAssign' call
            target.h(tmp0_safe_receiver);
          }
        }
         while (inductionVariable <= last);
      var fonts = target;
      var tmp_1;
      if (fonts.l() === fontFamily.d5j_1.l()) {
        tmp_1 = fonts;
      } else {
        throw IllegalArgumentException_init_$Create$_0("Don't load FontListFontFamily through ensureRegistered: " + fontFamily.toString());
      }
      tmp = tmp_1;
    } else {
      if (fontFamily instanceof LoadedFontFamily) {
        var tmp_2 = fontFamily.n5v_1;
        var typeface = tmp_2 instanceof SkiaBackedTypeface ? tmp_2 : THROW_CCE();
        ensureRegistered($this, typeface.o5v_1, typeface.p5v_1);
        tmp = listOf_0(typeface.p5v_1);
      } else {
        if (fontFamily instanceof GenericFontFamily) {
          tmp = get_aliases(fontFamily);
        } else {
          if (fontFamily instanceof DefaultFontFamily) {
            tmp = get_aliases(Companion_getInstance_17().a5g_1);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
    }
    return tmp;
  }
  function FontCache$load$lambda($font) {
    return function (it) {
      return loadTypeface($font);
    };
  }
  function FontCache() {
    this.q5s_1 = FontCollection_init_$Create$();
    this.r5s_1 = TypefaceFontProviderWithFallback_init_$Create$();
    this.s5s_1 = HashSet_init_$Create$();
    this.t5s_1 = new ExpireAfterAccessCache(new Long(-129542144, 13));
    this.q5s_1.y46(new FontMgrWithFallback(this.r5s_1));
    this.q5s_1.x46(this.r5s_1);
  }
  protoOf(FontCache).u5s = function (font) {
    var tmp = font.r5v();
    var typeface = this.t5s_1.n5p(tmp, FontCache$load$lambda(font));
    ensureRegistered(this, typeface, font.r5v());
    return new FontLoadResult(typeface, listOf_0(font.r5v()));
  };
  protoOf(FontCache).o5s = function (fontFamily, fontWeight, fontStyle) {
    var aliases = ensureRegistered_0(this, fontFamily);
    var style = toSkFontStyle(fontStyle).q3z(fontWeight.b5e_1);
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(aliases);
    return new FontLoadResult(first_0(this.q5s_1.a47(tmp$ret$0, style)), aliases);
  };
  function SkiaBackedTypeface() {
  }
  function get_aliases(_this__u8e3s4) {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    var tmp0_elvis_lhs = get_GenericFontFamiliesMapping().g2(_this__u8e3s4.z5i_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'Unknown generic font family ' + _this__u8e3s4.z5i_1;
      throw IllegalStateException_init_$Create$_0(toString_0(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cloneWithVariationSettings(_this__u8e3s4, variationSettings) {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    if (variationSettings.s5v_1.n())
      return _this__u8e3s4;
    var variations = toSkiaFontVariationList(variationSettings);
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(variations);
    return _this__u8e3s4.l45(tmp$ret$0);
  }
  function LoadedFont() {
  }
  function toSkiaFontVariationList(_this__u8e3s4) {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_0 = _this__u8e3s4.s5v_1;
    var target = ArrayList_init_$Create$_0(this_0.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = FontVariation_init_$Create$(item.u5v(), item.v5v(null));
        target.h(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function GenericFontFamiliesMapping$delegate$lambda() {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    var tmp;
    switch (currentPlatform().i2_1) {
      case 1:
        tmp = mapOf([to(Companion_getInstance_17().a5g_1.z5i_1, listOf(['Noto Sans', 'DejaVu Sans', 'Arial'])), to(Companion_getInstance_17().b5g_1.z5i_1, listOf(['Noto Serif', 'DejaVu Serif', 'Times New Roman'])), to(Companion_getInstance_17().c5g_1.z5i_1, listOf(['Noto Sans Mono', 'DejaVu Sans Mono', 'Consolas'])), to(Companion_getInstance_17().d5g_1.z5i_1, listOf_0('Comic Sans MS'))]);
        break;
      case 2:
        tmp = mapOf([to(Companion_getInstance_17().a5g_1.z5i_1, listOf(['Segoe UI', 'Arial'])), to(Companion_getInstance_17().b5g_1.z5i_1, listOf_0('Times New Roman')), to(Companion_getInstance_17().c5g_1.z5i_1, listOf_0('Consolas')), to(Companion_getInstance_17().d5g_1.z5i_1, listOf_0('Comic Sans MS'))]);
        break;
      case 3:
      case 4:
      case 5:
      case 6:
        tmp = mapOf([to(Companion_getInstance_17().a5g_1.z5i_1, listOf(['.AppleSystemUIFont', 'Helvetica Neue', 'Helvetica'])), to(Companion_getInstance_17().b5g_1.z5i_1, listOf(['.AppleSystemUIFontSerif', 'Times', 'Times New Roman'])), to(Companion_getInstance_17().c5g_1.z5i_1, listOf(['.AppleSystemUIFontMonospaced', 'Menlo', 'Courier'])), to(Companion_getInstance_17().d5g_1.z5i_1, listOf(['Apple Chancery', 'Snell Roundhand']))]);
        break;
      case 7:
        tmp = mapOf([to(Companion_getInstance_17().a5g_1.z5i_1, listOf(['Roboto', 'Noto Sans'])), to(Companion_getInstance_17().b5g_1.z5i_1, listOf(['Roboto Serif', 'Noto Serif'])), to(Companion_getInstance_17().c5g_1.z5i_1, listOf(['Roboto Mono', 'Noto Sans Mono'])), to(Companion_getInstance_17().d5g_1.z5i_1, listOf_0('Comic Sans MS'))]);
        break;
      case 0:
        tmp = mapOf([to(Companion_getInstance_17().a5g_1.z5i_1, listOf_0('Arial')), to(Companion_getInstance_17().b5g_1.z5i_1, listOf_0('Times New Roman')), to(Companion_getInstance_17().c5g_1.z5i_1, listOf_0('Consolas')), to(Companion_getInstance_17().d5g_1.z5i_1, listOf_0('Comic Sans MS'))]);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function _get_GenericFontFamiliesMapping_$ref_opq6z8() {
    return function () {
      return get_GenericFontFamiliesMapping();
    };
  }
  function Platform_Unknown_getInstance() {
    Platform_initEntries();
    return Platform_Unknown_instance;
  }
  function Platform_Linux_getInstance() {
    Platform_initEntries();
    return Platform_Linux_instance;
  }
  function Platform_Windows_getInstance() {
    Platform_initEntries();
    return Platform_Windows_instance;
  }
  function Platform_MacOS_getInstance() {
    Platform_initEntries();
    return Platform_MacOS_instance;
  }
  function Platform_IOS_getInstance() {
    Platform_initEntries();
    return Platform_IOS_instance;
  }
  function Platform_Android_getInstance() {
    Platform_initEntries();
    return Platform_Android_instance;
  }
  var properties_initialized_PlatformFont_skiko_kt_pdb6wl;
  function _init_properties_PlatformFont_skiko_kt__1fvojb() {
    if (!properties_initialized_PlatformFont_skiko_kt_pdb6wl) {
      properties_initialized_PlatformFont_skiko_kt_pdb6wl = true;
      GenericFontFamiliesMapping$delegate = lazy_0(GenericFontFamiliesMapping$delegate$lambda);
      androidx_compose_ui_text_platform_SystemFont$stable = 0;
      androidx_compose_ui_text_platform_LoadedFont$stable = 0;
      androidx_compose_ui_text_platform_FontLoader$stable = 8;
      androidx_compose_ui_text_platform_FontLoadResult$stable = 8;
      androidx_compose_ui_text_platform_FontCache$stable = 8;
    }
  }
  function drawMultiParagraph(_this__u8e3s4, canvas, brush, alpha, shadow, decoration, drawStyle, blendMode) {
    alpha = alpha === VOID ? NaN : alpha;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_9().u4f_1 : blendMode;
    canvas.d4j();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = _this__u8e3s4.i59_1;
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        item.j59_1.k5a(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
        canvas.e3p(0.0, item.j59_1.i3q());
      }
       while (inductionVariable <= last);
    canvas.e4j();
  }
  var androidx_compose_ui_text_platform_SkiaParagraphIntrinsics$stable;
  function ActualParagraphIntrinsics(text, style, annotations, placeholders, density, fontFamilyResolver) {
    return new SkiaParagraphIntrinsics(text, style, annotations, placeholders, density, fontFamilyResolver);
  }
  function newLayouter($this) {
    return new ParagraphLayouter($this.e5r_1, $this.k5r_1, $this.f5r_1, $this.g5r_1, $this.h5r_1, $this.i5r_1, $this.j5r_1);
  }
  function SkiaParagraphIntrinsics(text, style, annotations, placeholders, density, fontFamilyResolver) {
    this.e5r_1 = text;
    this.f5r_1 = style;
    this.g5r_1 = annotations;
    this.h5r_1 = placeholders;
    this.i5r_1 = density;
    this.j5r_1 = fontFamilyResolver;
    this.k5r_1 = resolveTextDirection_1(this.e5r_1, this.f5r_1.k5i(), this.f5r_1.e5i());
    this.l5r_1 = newLayouter(this);
    this.m5r_1 = 0.0;
    this.n5r_1 = 0.0;
    var para = ensureNotNull(this.l5r_1).y5r(Infinity);
    var tmp = this;
    // Inline function 'kotlin.math.ceil' call
    var x = para.b48();
    tmp.m5r_1 = Math.ceil(x);
    var tmp_0 = this;
    // Inline function 'kotlin.math.ceil' call
    var x_0 = para.c48();
    tmp_0.n5r_1 = Math.ceil(x_0);
  }
  protoOf(SkiaParagraphIntrinsics).w5r = function () {
    var tmp0_elvis_lhs = this.l5r_1;
    var layouter = tmp0_elvis_lhs == null ? newLayouter(this) : tmp0_elvis_lhs;
    this.l5r_1 = null;
    return layouter;
  };
  protoOf(SkiaParagraphIntrinsics).b48 = function () {
    return this.m5r_1;
  };
  protoOf(SkiaParagraphIntrinsics).c48 = function () {
    return this.n5r_1;
  };
  function resolveTextDirection_1(text, textDirection, localeList) {
    textDirection = textDirection === VOID ? null : textDirection;
    localeList = localeList === VOID ? null : localeList;
    var tmp;
    var tmp_0 = textDirection;
    if ((tmp_0 == null ? null : new TextDirection(tmp_0)) == null) {
      tmp = Companion_getInstance_34().e5b_1;
    } else {
      tmp = textDirection;
    }
    var tmp1_subject = tmp;
    var tmp_1;
    if (tmp1_subject === Companion_getInstance_34().c5b_1) {
      tmp_1 = ResolvedTextDirection_Ltr_getInstance();
    } else if (tmp1_subject === Companion_getInstance_34().d5b_1) {
      tmp_1 = ResolvedTextDirection_Rtl_getInstance();
    } else if (tmp1_subject === Companion_getInstance_34().e5b_1 || tmp1_subject === Companion_getInstance_34().h5b_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda(localeList));
    } else if (tmp1_subject === Companion_getInstance_34().f5b_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda_0);
    } else if (tmp1_subject === Companion_getInstance_34().g5b_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda_1);
    } else {
      // Inline function 'kotlin.error' call
      var message = 'Invalid TextDirection.';
      throw IllegalStateException_init_$Create$_0(toString_0(message));
    }
    return tmp_1;
  }
  function contentBasedTextDirection(text, fallback) {
    var tmp0_subject = firstStrongDirectionType(text);
    return tmp0_subject === Companion_getInstance_39().h5p_1 ? ResolvedTextDirection_Ltr_getInstance() : tmp0_subject === Companion_getInstance_39().i5p_1 ? ResolvedTextDirection_Rtl_getInstance() : fallback();
  }
  function localeBasedTextDirection(locale) {
    var tmp;
    if (isRtl((locale == null ? Companion_instance_11.w1x() : locale).e5e_1)) {
      tmp = ResolvedTextDirection_Rtl_getInstance();
    } else {
      tmp = ResolvedTextDirection_Ltr_getInstance();
    }
    return tmp;
  }
  function resolveTextDirection$lambda($localeList) {
    return function () {
      var tmp0_safe_receiver = $localeList;
      return localeBasedTextDirection(tmp0_safe_receiver == null ? null : firstOrNull_0(tmp0_safe_receiver));
    };
  }
  function resolveTextDirection$lambda_0() {
    return ResolvedTextDirection_Ltr_getInstance();
  }
  function resolveTextDirection$lambda_1() {
    return ResolvedTextDirection_Rtl_getInstance();
  }
  var androidx_compose_ui_text_platform_SkiaTextPaint$stable;
  function clearShader($this) {
    $this.v5t_1 = null;
    $this.u5t_1 = null;
    $this.w5t_1 = null;
    $this.p41(null);
  }
  function SkiaTextPaint$setBrush$lambda($brush, $size) {
    return function () {
      return $brush.h4h($size);
    };
  }
  function SkiaTextPaint() {
    this.t5t_1 = Paint();
    this.u5t_1 = null;
    this.v5t_1 = null;
    this.w5t_1 = null;
  }
  protoOf(SkiaTextPaint).f5s = function (brush, size, alpha) {
    if (brush == null) {
      clearShader(this);
    } else {
      if (brush instanceof SolidColor) {
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        var this_0 = this.z4h();
        if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
          this.y4g(modulate(brush.w4g_1, alpha));
          clearShader(this);
        }
      } else {
        if (brush instanceof ShaderBrush) {
          var tmp;
          if (!equals(this.u5t_1, brush)) {
            tmp = true;
          } else {
            var tmp_0 = this.w5t_1;
            tmp = !equals(tmp_0 == null ? null : new Size(tmp_0), new Size(size));
          }
          if (tmp) {
            // Inline function 'androidx.compose.ui.geometry.isSpecified' call
            if (!equalsLong(_Size___get_packedValue__impl__7rlt1o(size), new Long(2143289344, 2143289344))) {
              this.u5t_1 = brush;
              this.w5t_1 = size;
              var tmp_1 = this;
              tmp_1.v5t_1 = derivedStateOf(SkiaTextPaint$setBrush$lambda(brush, size));
            }
          }
          var tmp1_safe_receiver = this.v5t_1;
          this.p41(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.x1());
          this.n4c(isNaN_0(alpha) ? 1.0 : coerceIn_0(alpha, 0.0, 1.0));
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  };
  protoOf(SkiaTextPaint).d5s = function (drawStyle) {
    if (equals(drawStyle, Fill_getInstance()) || drawStyle == null) {
      this.i4t(Companion_getInstance_10().g4n_1);
    } else {
      if (drawStyle instanceof Stroke) {
        this.i4t(Companion_getInstance_10().h4n_1);
        this.k41(drawStyle.j4t_1);
        this.q4t(drawStyle.k4t_1);
        this.s4t(drawStyle.m4t_1);
        this.o4t(drawStyle.l4t_1);
        this.u4t(drawStyle.n4t_1);
      } else {
        noWhenBranchMatchedException();
      }
    }
  };
  protoOf(SkiaTextPaint).p52 = function () {
    return this.t5t_1.p52();
  };
  protoOf(SkiaTextPaint).n4c = function (_set____db54di) {
    this.t5t_1.n4c(_set____db54di);
  };
  protoOf(SkiaTextPaint).b4e = function () {
    return this.t5t_1.b4e();
  };
  protoOf(SkiaTextPaint).y4g = function (_set____db54di) {
    this.t5t_1.y4g(_set____db54di);
  };
  protoOf(SkiaTextPaint).z4h = function () {
    return this.t5t_1.z4h();
  };
  protoOf(SkiaTextPaint).y4t = function (_set____db54di) {
    this.t5t_1.y4t(_set____db54di);
  };
  protoOf(SkiaTextPaint).z4t = function () {
    return this.t5t_1.z4t();
  };
  protoOf(SkiaTextPaint).i4t = function (_set____db54di) {
    this.t5t_1.i4t(_set____db54di);
  };
  protoOf(SkiaTextPaint).k41 = function (_set____db54di) {
    this.t5t_1.k41(_set____db54di);
  };
  protoOf(SkiaTextPaint).l41 = function () {
    return this.t5t_1.l41();
  };
  protoOf(SkiaTextPaint).o4t = function (_set____db54di) {
    this.t5t_1.o4t(_set____db54di);
  };
  protoOf(SkiaTextPaint).p4t = function () {
    return this.t5t_1.p4t();
  };
  protoOf(SkiaTextPaint).s4t = function (_set____db54di) {
    this.t5t_1.s4t(_set____db54di);
  };
  protoOf(SkiaTextPaint).t4t = function () {
    return this.t5t_1.t4t();
  };
  protoOf(SkiaTextPaint).q4t = function (_set____db54di) {
    this.t5t_1.q4t(_set____db54di);
  };
  protoOf(SkiaTextPaint).r4t = function () {
    return this.t5t_1.r4t();
  };
  protoOf(SkiaTextPaint).a4u = function (_set____db54di) {
    this.t5t_1.a4u(_set____db54di);
  };
  protoOf(SkiaTextPaint).b4u = function () {
    return this.t5t_1.b4u();
  };
  protoOf(SkiaTextPaint).p41 = function (_set____db54di) {
    this.t5t_1.p41(_set____db54di);
  };
  protoOf(SkiaTextPaint).q41 = function () {
    return this.t5t_1.q41();
  };
  protoOf(SkiaTextPaint).w4t = function (_set____db54di) {
    this.t5t_1.w4t(_set____db54di);
  };
  protoOf(SkiaTextPaint).x4t = function () {
    return this.t5t_1.x4t();
  };
  protoOf(SkiaTextPaint).u4t = function (_set____db54di) {
    this.t5t_1.u4t(_set____db54di);
  };
  protoOf(SkiaTextPaint).v4t = function () {
    return this.t5t_1.v4t();
  };
  var androidx_compose_ui_text_platform_SynchronizedObject$stable;
  function SynchronizedObject() {
  }
  function _LineBreak___init__impl__o5i11q(mask) {
    return mask;
  }
  function _LineBreak___get_mask__impl__je2e1t($this) {
    return $this;
  }
  function Companion_29() {
    Companion_instance_30 = this;
    this.v5b_1 = _LineBreak___init__impl__o5i11q(1);
    this.w5b_1 = _LineBreak___init__impl__o5i11q(2);
    this.x5b_1 = _LineBreak___init__impl__o5i11q(3);
    this.y5b_1 = _LineBreak___init__impl__o5i11q(4);
  }
  var Companion_instance_30;
  function Companion_getInstance_43() {
    if (Companion_instance_30 == null)
      new Companion_29();
    return Companion_instance_30;
  }
  function LineBreak__toString_impl_mphhli($this) {
    return 'LineBreak(mask=' + $this + ')';
  }
  function LineBreak__hashCode_impl_ybksn($this) {
    return $this;
  }
  function LineBreak__equals_impl_1r98t9($this, other) {
    if (!(other instanceof LineBreak))
      return false;
    if (!($this === other.x5c_1))
      return false;
    return true;
  }
  function LineBreak(mask) {
    Companion_getInstance_43();
    this.x5c_1 = mask;
  }
  protoOf(LineBreak).toString = function () {
    return LineBreak__toString_impl_mphhli(this.x5c_1);
  };
  protoOf(LineBreak).hashCode = function () {
    return LineBreak__hashCode_impl_ybksn(this.x5c_1);
  };
  protoOf(LineBreak).equals = function (other) {
    return LineBreak__equals_impl_1r98t9(this.x5c_1, other);
  };
  var androidx_compose_ui_text_style_TextMotion$stable;
  function Companion_30() {
    Companion_instance_31 = this;
    this.g5c_1 = new TextMotion();
    this.h5c_1 = new TextMotion();
  }
  var Companion_instance_31;
  function Companion_getInstance_44() {
    if (Companion_instance_31 == null)
      new Companion_30();
    return Companion_instance_31;
  }
  function TextMotion() {
    Companion_getInstance_44();
  }
  function get_rtlLanguagesSet() {
    _init_properties_PlatformLocale_web_kt__363p4j();
    return rtlLanguagesSet;
  }
  var rtlLanguagesSet;
  var androidx_compose_ui_text_intl_PlatformLocale$stable;
  function get_language(_this__u8e3s4) {
    _init_properties_PlatformLocale_web_kt__363p4j();
    return _this__u8e3s4.language;
  }
  function get_region(_this__u8e3s4) {
    _init_properties_PlatformLocale_web_kt__363p4j();
    var tmp0_elvis_lhs = _this__u8e3s4.region;
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  }
  function getLanguageTag(_this__u8e3s4) {
    _init_properties_PlatformLocale_web_kt__363p4j();
    return _this__u8e3s4.baseName;
  }
  function createPlatformLocaleDelegate() {
    _init_properties_PlatformLocale_web_kt__363p4j();
    return new createPlatformLocaleDelegate$1();
  }
  function isRtl(_this__u8e3s4) {
    _init_properties_PlatformLocale_web_kt__363p4j();
    return get_rtlLanguagesSet().t(get_language(_this__u8e3s4));
  }
  function toIntlLocale(_this__u8e3s4) {
    _init_properties_PlatformLocale_web_kt__363p4j();
    return parseLanguageTagToIntlLocale(_this__u8e3s4);
  }
  function parseLanguageTagToIntlLocale(languageTag) {
    _init_properties_PlatformLocale_web_kt__363p4j();
    return new Intl.Locale(languageTag);
  }
  function createPlatformLocaleDelegate$1() {
  }
  protoOf(createPlatformLocaleDelegate$1).w1x = function () {
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_0 = userPreferredLanguages();
    var target = ArrayList_init_$Create$_0(this_0.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = new Locale(toIntlLocale(item));
        target.h(element);
      }
       while (inductionVariable <= last);
    return new LocaleList(target);
  };
  protoOf(createPlatformLocaleDelegate$1).e5o = function (languageTag) {
    return toIntlLocale(languageTag);
  };
  var properties_initialized_PlatformLocale_web_kt_9h93ez;
  function _init_properties_PlatformLocale_web_kt__363p4j() {
    if (!properties_initialized_PlatformLocale_web_kt_9h93ez) {
      properties_initialized_PlatformLocale_web_kt_9h93ez = true;
      rtlLanguagesSet = setOf(['ar', 'fa', 'he', 'iw', 'ji', 'ur', 'yi']);
      androidx_compose_ui_text_intl_PlatformLocale$stable = 0;
    }
  }
  function currentPlatform() {
    switch (get_hostOs().i2_1) {
      case 0:
        return Platform_Android_getInstance();
      case 4:
        return Platform_IOS_getInstance();
      case 3:
        return Platform_MacOS_getInstance();
      case 1:
        return Platform_Linux_getInstance();
      case 2:
        return Platform_Windows_getInstance();
      default:
        return Platform_Unknown_getInstance();
    }
  }
  function loadTypeface(font) {
    if (!(font instanceof PlatformFont)) {
      throw IllegalArgumentException_init_$Create$_0('Unsupported font type: ' + toString_0(font));
    }
    var tmp;
    if (font instanceof LoadedFont) {
      var tmp1_elvis_lhs = Companion_getInstance_11().e3z_1.i3z(Companion_getInstance_12().e3x(font.w5v_1()));
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.error' call
        var message = 'loadTypeface makeFromData failed';
        throw IllegalStateException_init_$Create$_0(toString_0(message));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (font instanceof SystemFont) {
        var tmp2_elvis_lhs = Companion_getInstance_11().e3z_1.j3z(font.q5v_1, get_skFontStyle(font));
        var tmp_1;
        if (tmp2_elvis_lhs == null) {
          // Inline function 'kotlin.error' call
          var message_0 = 'loadTypeface legacyMakeTypeface failed';
          throw IllegalStateException_init_$Create$_0(toString_0(message_0));
        } else {
          tmp_1 = tmp2_elvis_lhs;
        }
        tmp = tmp_1;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return cloneWithVariationSettings(tmp, font.x5v());
  }
  function get_skFontStyle(_this__u8e3s4) {
    return FontStyle_init_$Create$(_this__u8e3s4.p3z().b5e_1, 5, _this__u8e3s4.t5i() === Companion_getInstance_21().u5f_1 ? FontSlant_ITALIC_getInstance() : FontSlant_UPRIGHT_getInstance());
  }
  var androidx_compose_ui_text_platform_JsStringDelegate$stable;
  var androidx_compose_ui_text_NoCache$stable;
  function NoCache() {
  }
  protoOf(NoCache).h5v = function (key, loader) {
    return loader(key);
  };
  protoOf(NoCache).n5p = function (key, loader) {
    return this.h5v(!(key == null) ? key : THROW_CCE(), loader);
  };
  function createPlatformResolveInterceptor() {
    return Companion_getInstance_18().i5k_1;
  }
  function synthesizeTypeface(_this__u8e3s4, typeface, font, requestedWeight, requestedStyle) {
    return typeface;
  }
  var androidx_compose_ui_text_platform_PlatformFont$stable;
  function PlatformFont() {
  }
  protoOf(PlatformFont).r5v = function () {
    return '' + getKClassFromExpression(this).y9() + '|' + this.y5v() + '|weight=' + this.p3z().b5e_1 + '|style=' + FontStyle__toString_impl_thncxr(this.t5i()) + '|variationSettings=' + toString_0(this.x5v().s5v_1);
  };
  //region block: post-declaration
  protoOf(PlatformResolveInterceptor$Companion$Default$1).k5k = interceptFontFamily;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).l5k = interceptFontWeight;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).m5k = interceptFontStyle;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).n5k = interceptFontSynthesis;
  protoOf(Unspecified).w5e = merge;
  protoOf(Unspecified).z5e = takeOrElse;
  protoOf(BrushStyle).w5e = merge;
  protoOf(BrushStyle).z5e = takeOrElse;
  protoOf(ColorStyle).w5e = merge;
  protoOf(ColorStyle).z5e = takeOrElse;
  protoOf(SkiaParagraph).v5q = paint$default;
  protoOf(SkiaParagraph).w5q = paint$default_0;
  protoOf(SkiaParagraphIntrinsics).n5b = get_hasStaleResolvedFonts;
  //endregion
  //region block: init
  androidx_compose_ui_text_Bullet$stable = 8;
  androidx_compose_ui_text_LinkAnnotation_Url$stable = 8;
  androidx_compose_ui_text_LinkAnnotation_Clickable$stable = 8;
  androidx_compose_ui_text_LinkAnnotation$stable = 0;
  androidx_compose_ui_text_MultiParagraph$stable = 8;
  androidx_compose_ui_text_ParagraphInfo$stable = 8;
  androidx_compose_ui_text_MultiParagraphIntrinsics$stable = 8;
  androidx_compose_ui_text_ParagraphIntrinsicInfo$stable = 8;
  androidx_compose_ui_text_Placeholder$stable = 0;
  androidx_compose_ui_text_TextLayoutInput$stable = 8;
  androidx_compose_ui_text_TextLayoutResult$stable = 8;
  androidx_compose_ui_text_TextLinkStyles$stable = 0;
  androidx_compose_ui_text_TextMeasurer$stable = 0;
  androidx_compose_ui_text_TextLayoutCache$stable = 8;
  androidx_compose_ui_text_CacheTextLayoutInput$stable = 0;
  androidx_compose_ui_text_TextPainter$stable = 0;
  androidx_compose_ui_text_TextStyle$stable = 0;
  androidx_compose_ui_text_TtsAnnotation$stable = 0;
  androidx_compose_ui_text_VerbatimTtsAnnotation$stable = 0;
  androidx_compose_ui_text_UrlAnnotation$stable = 0;
  androidx_compose_ui_text_font_ResourceFont$stable = 0;
  androidx_compose_ui_text_font_FontFamily$stable = 0;
  androidx_compose_ui_text_font_FileBasedFontFamily$stable = 0;
  androidx_compose_ui_text_font_SystemFontFamily$stable = 0;
  androidx_compose_ui_text_font_FontListFontFamily$stable = 0;
  androidx_compose_ui_text_font_GenericFontFamily$stable = 0;
  androidx_compose_ui_text_font_DefaultFontFamily$stable = 0;
  androidx_compose_ui_text_font_LoadedFontFamily$stable = 0;
  androidx_compose_ui_text_font_FontListFontFamilyTypefaceAdapter$stable = 8;
  androidx_compose_ui_text_font_AsyncFontListLoader$stable = 0;
  androidx_compose_ui_text_font_AsyncTypefaceCache_Key$stable = 8;
  androidx_compose_ui_text_font_AsyncTypefaceCache$stable = 8;
  androidx_compose_ui_text_font_FontMatcher$stable = 0;
  androidx_compose_ui_text_font_FontVariation_Settings$stable = 0;
  androidx_compose_ui_text_font_FontVariation$stable = 0;
  androidx_compose_ui_text_font_FontWeight$stable = 0;
  androidx_compose_ui_text_input_CommitTextCommand$stable = 0;
  androidx_compose_ui_text_input_SetComposingRegionCommand$stable = 0;
  androidx_compose_ui_text_input_SetComposingTextCommand$stable = 0;
  androidx_compose_ui_text_input_DeleteSurroundingTextCommand$stable = 0;
  androidx_compose_ui_text_input_DeleteSurroundingTextInCodePointsCommand$stable = 0;
  androidx_compose_ui_text_input_SetSelectionCommand$stable = 0;
  androidx_compose_ui_text_input_FinishComposingTextCommand$stable = 0;
  androidx_compose_ui_text_input_BackspaceCommand$stable = 0;
  androidx_compose_ui_text_input_MoveCursorCommand$stable = 0;
  androidx_compose_ui_text_input_DeleteAllCommand$stable = 0;
  androidx_compose_ui_text_input_EditProcessor$stable = 8;
  androidx_compose_ui_text_input_EditingBuffer$stable = 8;
  androidx_compose_ui_text_input_PartialGapBuffer$stable = 8;
  androidx_compose_ui_text_input_ImeOptions$stable = 0;
  androidx_compose_ui_text_input_TextFieldValue$stable = 0;
  androidx_compose_ui_text_input_TextInputService$stable = 8;
  androidx_compose_ui_text_input_TextInputSession$stable = 8;
  androidx_compose_ui_text_input_TransformedText$stable = 8;
  androidx_compose_ui_text_input_PasswordVisualTransformation$stable = 0;
  androidx_compose_ui_text_intl_Locale$stable = 0;
  Companion_instance_11 = new Companion_10();
  androidx_compose_ui_text_intl_LocaleList$stable = 0;
  androidx_compose_ui_text_style_LineHeightStyle$stable = 0;
  androidx_compose_ui_text_style_TextDecoration$stable = 0;
  androidx_compose_ui_text_style_TextForegroundStyle_Unspecified$stable = 0;
  Unspecified_instance = new Unspecified();
  Companion_instance_22 = new Companion_21();
  androidx_compose_ui_text_style_TextGeometricTransform$stable = 0;
  androidx_compose_ui_text_style_TextIndent$stable = 0;
  androidx_compose_ui_text_AtomicReference$stable = 8;
  androidx_compose_ui_text_ExpireAfterAccessCache$stable = 8;
  androidx_compose_ui_text_FontRasterizationSettings$stable = 0;
  androidx_compose_ui_text_SkiaParagraph$stable = 8;
  androidx_compose_ui_text_PlatformTextStyle$stable = 0;
  androidx_compose_ui_text_PlatformParagraphStyle$stable = 0;
  androidx_compose_ui_text_PlatformSpanStyle$stable = 0;
  androidx_compose_ui_text_font_PlatformFontFamilyTypefaceAdapter$stable = 0;
  androidx_compose_ui_text_font_SkiaFontLoader$stable = 8;
  androidx_compose_ui_text_input_PlatformImeOptions$stable = 0;
  androidx_compose_ui_text_platform_ParagraphLayouter$stable = 8;
  androidx_compose_ui_text_platform_SkiaParagraphIntrinsics$stable = 8;
  androidx_compose_ui_text_platform_SkiaTextPaint$stable = 8;
  androidx_compose_ui_text_platform_SynchronizedObject$stable = 0;
  androidx_compose_ui_text_style_TextMotion$stable = 0;
  androidx_compose_ui_text_platform_JsStringDelegate$stable = 0;
  androidx_compose_ui_text_NoCache$stable = 0;
  androidx_compose_ui_text_platform_PlatformFont$stable = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FontStyle;
  _.$_$.b = createFontFamilyResolver_0;
  _.$_$.c = TextInputService;
  _.$_$.d = FontLoader;
  _.$_$.e = TextAlign;
  _.$_$.f = TextOverflow;
  _.$_$.g = MultiParagraphIntrinsics;
  _.$_$.h = MultiParagraph;
  _.$_$.i = ParagraphIntrinsics_0;
  _.$_$.j = Paragraph_0;
  _.$_$.k = Paragraph;
  _.$_$.l = TextLayoutResult;
  _.$_$.m = TextRange_1;
  _.$_$.n = TextRange;
  _.$_$.o = androidx_compose_ui_text_TextLayoutResult$stableprop_getter;
  _.$_$.p = resolveDefaults;
  _.$_$.q = Companion_getInstance_17;
  _.$_$.r = Companion_getInstance_23;
  _.$_$.s = Companion_instance_11;
  _.$_$.t = Companion_getInstance_29;
  _.$_$.u = Companion_getInstance_28;
  _.$_$.v = Companion_getInstance_32;
  _.$_$.w = Companion_getInstance_33;
  _.$_$.x = Companion_getInstance_38;
  _.$_$.y = Companion_getInstance_16;
  _.$_$.z = LineHeightStyle_init_$Create$;
  _.$_$.a1 = AnnotatedString_init_$Create$;
  _.$_$.b1 = TextLayoutInput_init_$Create$;
  _.$_$.c1 = _TextOverflow___init__impl__obguoe;
  _.$_$.d1 = TextOverflow__hashCode_impl_kqdwgt;
  _.$_$.e1 = _TextOverflow___get_value__impl__vugm5i;
  _.$_$.f1 = _TextRange___get_end__impl__gcdxpp;
  _.$_$.g1 = _TextRange___get_start__impl__ww4t90;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-text.js.map
