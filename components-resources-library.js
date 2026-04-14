(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-text.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './skiko-kjs.js', './kotlinx-browser.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./skiko-kjs.js'), require('./kotlinx-browser.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['kotlinx-browser'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'kotlinx-browser' was not found. Please, check whether 'kotlinx-browser' is loaded prior to 'components-resources-library'.");
    }
    globalThis['components-resources-library'] = factory(typeof globalThis['components-resources-library'] === 'undefined' ? {} : globalThis['components-resources-library'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-text'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['skiko-kjs'], globalThis['kotlinx-browser']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_skiko_skiko, kotlin_org_jetbrains_kotlinx_kotlinx_browser) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var KProperty0 = kotlin_kotlin.$_$.fb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.k9;
  var protoOf = kotlin_kotlin.$_$.fa;
  var initMetadataForClass = kotlin_kotlin.$_$.n9;
  var VOID = kotlin_kotlin.$_$.c;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var Unit_instance = kotlin_kotlin.$_$.n;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.h1;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.s1;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.a2;
  var BitmapPainter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var endsWith = kotlin_kotlin.$_$.ub;
  var rememberVectorPainter = kotlin_org_jetbrains_compose_ui_ui.$_$.m;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.d4;
  var ImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var Builder = kotlin_org_jetbrains_compose_ui_ui.$_$.k;
  var getLocalDelegateReference = kotlin_kotlin.$_$.i9;
  var CoroutineImpl = kotlin_kotlin.$_$.s7;
  var THROW_CCE = kotlin_kotlin.$_$.ld;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.d7;
  var initMetadataForLambda = kotlin_kotlin.$_$.s9;
  var lazy = kotlin_kotlin.$_$.zd;
  var getKClassFromExpression = kotlin_kotlin.$_$.bb;
  var getStringHashCode = kotlin_kotlin.$_$.l9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.o9;
  var Enum = kotlin_kotlin.$_$.ad;
  var enumEntries = kotlin_kotlin.$_$.v7;
  var toString = kotlin_kotlin.$_$.ha;
  var hashCode = kotlin_kotlin.$_$.m9;
  var equals = kotlin_kotlin.$_$.f9;
  var equalsLong = kotlin_kotlin.$_$.h8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var isInterface = kotlin_kotlin.$_$.w9;
  var CoroutineStart_LAZY_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r1;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.b1;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u;
  var initMetadataForObject = kotlin_kotlin.$_$.t9;
  var toList = kotlin_kotlin.$_$.w6;
  var first = kotlin_kotlin.$_$.d5;
  var joinToString = kotlin_kotlin.$_$.n5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var emptyList = kotlin_kotlin.$_$.u4;
  var sortedWith = kotlin_kotlin.$_$.s6;
  var Collection = kotlin_kotlin.$_$.n3;
  var minus = kotlin_kotlin.$_$.d6;
  var FunctionAdapter = kotlin_kotlin.$_$.t8;
  var Comparator = kotlin_kotlin.$_$.zc;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui_text.$_$.s;
  var isSystemInDarkTheme = kotlin_org_jetbrains_compose_foundation_foundation.$_$.g1;
  var compareValues = kotlin_kotlin.$_$.b7;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.u1;
  var Exception = kotlin_kotlin.$_$.cd;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.q1;
  var captureStack = kotlin_kotlin.$_$.w8;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var removeSuffix = kotlin_kotlin.$_$.cc;
  var toDouble = kotlin_kotlin.$_$.kc;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n2;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q2;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r2;
  var startsWith = kotlin_kotlin.$_$.hc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var substring = kotlin_kotlin.$_$.ic;
  var toUInt = kotlin_kotlin.$_$.qc;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.z2;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s2;
  var isBlank = kotlin_kotlin.$_$.wb;
  var filter = kotlin_kotlin.$_$.jb;
  var Sequence = kotlin_kotlin.$_$.ib;
  var sequence = kotlin_kotlin.$_$.mb;
  var addPathNodes = kotlin_org_jetbrains_compose_ui_ui.$_$.l;
  var PathFillType = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z;
  var StrokeCap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h1;
  var StrokeJoin = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i1;
  var get_EmptyPath = kotlin_org_jetbrains_compose_ui_ui.$_$.j;
  var removeLastOrNull = kotlin_kotlin.$_$.k6;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g1;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h2;
  var toRawBits = kotlin_kotlin.$_$.ke;
  var fromInt = kotlin_kotlin.$_$.i8;
  var shiftLeft = kotlin_kotlin.$_$.o8;
  var Long = kotlin_kotlin.$_$.gd;
  var bitwiseAnd = kotlin_kotlin.$_$.a8;
  var bitwiseOr = kotlin_kotlin.$_$.b8;
  var _Offset___init__impl__c168vi = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t;
  var TileMode = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j1;
  var toList_0 = kotlin_kotlin.$_$.nb;
  var checkIndexOverflow = kotlin_kotlin.$_$.d4;
  var get_lastIndex = kotlin_kotlin.$_$.r5;
  var coerceAtLeast = kotlin_kotlin.$_$.qa;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r;
  var to = kotlin_kotlin.$_$.ne;
  var copyToArray = kotlin_kotlin.$_$.s4;
  var SequenceScope = kotlin_kotlin.$_$.hb;
  var until = kotlin_kotlin.$_$.ab;
  var initMetadataForInterface = kotlin_kotlin.$_$.r9;
  var decodeToString = kotlin_kotlin.$_$.sb;
  var numberToInt = kotlin_kotlin.$_$.da;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.p9;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var KProperty1 = kotlin_kotlin.$_$.gb;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j2;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g2;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l2;
  var CanvasDrawScope = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e3;
  var shiftRight = kotlin_kotlin.$_$.q8;
  var convertToInt = kotlin_kotlin.$_$.e8;
  var Canvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m1;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.g;
  var SVGDOM_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.p4;
  var Companion_getInstance_9 = kotlin_org_jetbrains_skiko_skiko.$_$.k;
  var Companion_instance_1 = kotlin_org_jetbrains_skiko_skiko.$_$.o;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$_$.s;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.w4;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.p;
  var toComposeImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y1;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.g;
  var floatFromBits = kotlin_kotlin.$_$.g9;
  var SVGLengthUnit_PX_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s1;
  var SVGLength = kotlin_org_jetbrains_skiko_skiko.$_$.l5;
  var SVGPreserveAspectRatioAlign_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t1;
  var SVGPreserveAspectRatio_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.q4;
  var get_nativeCanvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v1;
  var Painter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g;
  var _Size___init__impl__aywn0g = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i;
  var Size__times_impl_fnp4nc = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var _IntSize___init__impl__emcjft = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var createCompositionCoroutineScope = kotlin_androidx_compose_runtime_runtime.$_$.c1;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.l1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y1;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.e;
  var get_undefined = kotlin_org_jetbrains_kotlinx_kotlinx_browser.$_$.a;
  var intercepted = kotlin_kotlin.$_$.f7;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var Companion_instance_2 = kotlin_kotlin.$_$.m;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.u2;
  var createFailure = kotlin_kotlin.$_$.td;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Bitmap, 'Bitmap');
  initMetadataForClass(Vector, 'Vector');
  initMetadataForClass(Svg, 'Svg');
  initMetadataForClass(Resource, 'Resource');
  initMetadataForClass(DrawableResource, 'DrawableResource', VOID, Resource);
  initMetadataForLambda(vectorResource$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(svgPainter$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(imageResource$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(loadImage$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForClass(LanguageQualifier, 'LanguageQualifier');
  initMetadataForClass(RegionQualifier, 'RegionQualifier');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ThemeQualifier, 'ThemeQualifier', VOID, Enum);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(DensityQualifier, 'DensityQualifier', VOID, Enum);
  initMetadataForClass(ResourceItem, 'ResourceItem');
  initMetadataForLambda(AsyncCache$getOrLoad$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AsyncCache$getOrLoad$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(AsyncCache, 'AsyncCache', AsyncCache, VOID, VOID, [2, 0]);
  initMetadataForObject(ResourceCaches, 'ResourceCaches', VOID, VOID, VOID, [0]);
  initMetadataForClass(ResourceEnvironment, 'ResourceEnvironment');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(DefaultComposeEnvironment$1);
  initMetadataForClass(MissingResourceException, 'MissingResourceException', VOID, Exception);
  initMetadataForClass(Group, 'Group', VOID, Enum);
  initMetadataForClass(BuildContext, 'BuildContext', BuildContext);
  initMetadataForLambda(_get_childrenSequence_$slambda_9jpw3j, CoroutineImpl, VOID, [1]);
  initMetadataForInterface(Element_0, 'Element');
  initMetadataForClass(MalformedXMLException, 'MalformedXMLException', VOID, Exception);
  initMetadataForObject(TestJsResourceReader, 'TestJsResourceReader', VOID, VOID, VOID, [1, 3]);
  initMetadataForLambda(DefaultJsResourceReader$readAsBlob$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($readCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readAsBlobCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($asByteArrayCOROUTINE$, CoroutineImpl);
  initMetadataForObject(DefaultJsResourceReader, 'DefaultJsResourceReader', VOID, VOID, VOID, [1, 3]);
  initMetadataForClass(NodeImpl, 'NodeImpl');
  initMetadataForClass(ElementImpl, 'ElementImpl', VOID, NodeImpl, [Element_0]);
  initMetadataForClass(NodeImpl$childNodes$3$1);
  initMetadataForClass(DrawCache, 'DrawCache', DrawCache);
  initMetadataForClass(SvgElement, 'SvgElement');
  initMetadataForClass(SvgPainter, 'SvgPainter', VOID, Painter);
  initMetadataForObject(WebResourcesConfiguration, 'WebResourcesConfiguration');
  initMetadataForLambda(rememberResourceState$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($loadCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($resetCacheCOROUTINE$, CoroutineImpl);
  initMetadataForObject(ResourceWebCache, 'ResourceWebCache', VOID, VOID, VOID, [2, 0]);
  //endregion
  var org_jetbrains_compose_resources_FontResource$stable;
  function get_emptyImageBitmap() {
    _init_properties_ImageResources_kt__6e1y7e();
    var tmp0 = emptyImageBitmap$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('emptyImageBitmap', 0, tmp, _get_emptyImageBitmap_$ref_302yd9(), null);
    return tmp0.x1();
  }
  var emptyImageBitmap$delegate;
  function get_emptyImageVector() {
    _init_properties_ImageResources_kt__6e1y7e();
    var tmp0 = emptyImageVector$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('emptyImageVector', 0, tmp, _get_emptyImageVector_$ref_h5qmfr(), null);
    return tmp0.x1();
  }
  var emptyImageVector$delegate;
  function get_emptySvgPainter() {
    _init_properties_ImageResources_kt__6e1y7e();
    var tmp0 = emptySvgPainter$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('emptySvgPainter', 0, tmp, _get_emptySvgPainter_$ref_tgsxpw(), null);
    return tmp0.x1();
  }
  var emptySvgPainter$delegate;
  function get_imageCache() {
    _init_properties_ImageResources_kt__6e1y7e();
    return imageCache;
  }
  var imageCache;
  var org_jetbrains_compose_resources_DrawableResource$stable;
  var org_jetbrains_compose_resources_ImageCache_Bitmap$stable;
  var org_jetbrains_compose_resources_ImageCache_Vector$stable;
  var org_jetbrains_compose_resources_ImageCache_Svg$stable;
  function Bitmap(bitmap) {
    this.eex_1 = bitmap;
  }
  function Vector(vector) {
    this.fex_1 = vector;
  }
  function Svg(painter) {
    this.gex_1 = painter;
  }
  function DrawableResource(id, items) {
    Resource.call(this, id, items);
  }
  function painterResource(resource, $composer, $changed) {
    _init_properties_ImageResources_kt__6e1y7e();
    var $composer_0 = $composer;
    $composer_0.a20(-1508925367);
    if (isTraceInProgress()) {
      traceEventStart(-1508925367, $changed, -1, 'org.jetbrains.compose.resources.painterResource (ImageResources.kt:35)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalComposeEnvironment();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g21(this_0);
    sourceInformationMarkerEnd($composer_1);
    var environment = tmp0.hex($composer_0, 0);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.w20(resource) || ($changed & 6) === 4) | $composer_0.w20(environment));
    // Inline function 'kotlin.let' call
    var it = $composer_0.u20();
    var tmp;
    if (invalid || it === Companion_getInstance().s1z_1) {
      var value = getResourceItemByEnvironment(resource, environment).jex_1;
      $composer_0.v20(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var filePath = tmp;
    if (endsWith(filePath, '.xml', true)) {
      $composer_0.a20(-1267601485);
      var tmp0_return = rememberVectorPainter(vectorResource(resource, $composer_0, 14 & $changed), $composer_0, 0);
      $composer_0.b20();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.b20();
      return tmp0_return;
    } else if (endsWith(filePath, '.svg', true)) {
      $composer_0.a20(-1267490226);
      var tmp1_return = svgPainter(resource, $composer_0, 14 & $changed);
      $composer_0.b20();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.b20();
      return tmp1_return;
    } else {
      $composer_0.a20(-1267441060);
      var tmp2_return = new BitmapPainter(imageResource(resource, $composer_0, 14 & $changed));
      $composer_0.b20();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
      $composer_0.b20();
      return tmp2_return;
    }
  }
  function vectorResource(resource, $composer, $changed) {
    _init_properties_ImageResources_kt__6e1y7e();
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1394399862, $changed, -1, 'org.jetbrains.compose.resources.vectorResource (ImageResources.kt:92)');
    }
    var resourceReader = get_currentOrPreview(get_LocalResourceReader(), $composer_0, 6);
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g21(this_0);
    sourceInformationMarkerEnd($composer_1);
    var density = tmp0;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.u20();
    var tmp;
    if (false || it === Companion_getInstance().s1z_1) {
      var value = vectorResource$lambda_0;
      $composer_0.v20(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!((($changed & 14 ^ 6) > 4 && $composer_0.w20(resource) || ($changed & 6) === 4) | $composer_0.b21(resourceReader)) | $composer_0.w20(density));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.u20();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance().s1z_1) {
      var value_0 = vectorResource$slambda_0(resource, resourceReader, density, null);
      $composer_0.v20(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp$ret$5 = tmp_1;
    var imageVector$delegate = rememberResourceState(resource, resourceReader, density, tmp_0, tmp$ret$5, $composer_0, 3072 | 14 & $changed);
    var tmp0_0 = vectorResource$lambda(imageVector$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0_0;
  }
  function svgPainter(resource, $composer, $changed) {
    _init_properties_ImageResources_kt__6e1y7e();
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1371694195, $changed, -1, 'org.jetbrains.compose.resources.svgPainter (ImageResources.kt:112)');
    }
    var resourceReader = get_currentOrPreview(get_LocalResourceReader(), $composer_0, 6);
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g21(this_0);
    sourceInformationMarkerEnd($composer_1);
    var density = tmp0;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.u20();
    var tmp;
    if (false || it === Companion_getInstance().s1z_1) {
      var value = svgPainter$lambda_0;
      $composer_0.v20(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!((($changed & 14 ^ 6) > 4 && $composer_0.w20(resource) || ($changed & 6) === 4) | $composer_0.b21(resourceReader)) | $composer_0.w20(density));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.u20();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance().s1z_1) {
      var value_0 = svgPainter$slambda_0(resource, resourceReader, density, null);
      $composer_0.v20(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp$ret$5 = tmp_1;
    var svgPainter$delegate = rememberResourceState(resource, resourceReader, density, tmp_0, tmp$ret$5, $composer_0, 3072 | 14 & $changed);
    var tmp0_0 = svgPainter$lambda(svgPainter$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0_0;
  }
  function imageResource(resource, $composer, $changed) {
    _init_properties_ImageResources_kt__6e1y7e();
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1838739546, $changed, -1, 'org.jetbrains.compose.resources.imageResource (ImageResources.kt:59)');
    }
    var resourceReader = get_currentOrPreview(get_LocalResourceReader(), $composer_0, 6);
    var resourceEnvironment = rememberResourceEnvironment($composer_0, 0);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.u20();
    var tmp;
    if (false || it === Companion_getInstance().s1z_1) {
      var value = imageResource$lambda_0;
      $composer_0.v20(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!((($changed & 14 ^ 6) > 4 && $composer_0.w20(resource) || ($changed & 6) === 4) | $composer_0.w20(resourceEnvironment)) | $composer_0.b21(resourceReader));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.u20();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance().s1z_1) {
      var value_0 = imageResource$slambda_0(resource, resourceEnvironment, resourceReader, null);
      $composer_0.v20(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp$ret$4 = tmp_1;
    var imageBitmap$delegate = rememberResourceState(resource, resourceReader, resourceEnvironment, tmp_0, tmp$ret$4, $composer_0, 3072 | 14 & $changed);
    var tmp0 = imageResource$lambda(imageBitmap$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0;
  }
  function loadImage(path, cacheKey, resourceReader, decode, $completion) {
    var tmp = get_imageCache();
    return tmp.oex(cacheKey, loadImage$slambda_0(decode, resourceReader, path, null), $completion);
  }
  function emptyImageBitmap$delegate$lambda() {
    _init_properties_ImageResources_kt__6e1y7e();
    return ImageBitmap(1, 1);
  }
  function _get_emptyImageBitmap_$ref_302yd9() {
    return function () {
      return get_emptyImageBitmap();
    };
  }
  function emptyImageVector$delegate$lambda() {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(1);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(1);
    return (new Builder('emptyImageVector', tmp, tmp$ret$1, 1.0, 1.0)).i2a();
  }
  function _get_emptyImageVector_$ref_h5qmfr() {
    return function () {
      return get_emptyImageVector();
    };
  }
  function emptySvgPainter$delegate$lambda() {
    _init_properties_ImageResources_kt__6e1y7e();
    return new BitmapPainter(get_emptyImageBitmap());
  }
  function _get_emptySvgPainter_$ref_tgsxpw() {
    return function () {
      return get_emptySvgPainter();
    };
  }
  function vectorResource$lambda($imageVector$delegate) {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('imageVector', KProperty0, false);
    return $imageVector$delegate.x1();
  }
  function vectorResource$lambda_0() {
    _init_properties_ImageResources_kt__6e1y7e();
    return get_emptyImageVector();
  }
  function vectorResource$slambda$lambda($density) {
    return function (it) {
      return new Vector(toImageVector(toXmlElement(it), $density));
    };
  }
  function vectorResource$slambda($resource, $resourceReader, $density, resultContinuation) {
    this.xex_1 = $resource;
    this.yex_1 = $resourceReader;
    this.zex_1 = $density;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(vectorResource$slambda).bey = function (env, $completion) {
    var tmp = this.cey(env, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(vectorResource$slambda).e9 = function (p1, $completion) {
    return this.bey(p1 instanceof ResourceEnvironment ? p1 : THROW_CCE(), $completion);
  };
  protoOf(vectorResource$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            var path = getResourceItemByEnvironment(this.xex_1, this.aey_1).jex_1;
            this.m8_1 = 1;
            suspendResult = loadImage(path, path, this.yex_1, vectorResource$slambda$lambda(this.zex_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cached = suspendResult instanceof Vector ? suspendResult : THROW_CCE();
            return cached.fex_1;
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
  protoOf(vectorResource$slambda).cey = function (env, completion) {
    var i = new vectorResource$slambda(this.xex_1, this.yex_1, this.zex_1, completion);
    i.aey_1 = env;
    return i;
  };
  function vectorResource$slambda_0($resource, $resourceReader, $density, resultContinuation) {
    var i = new vectorResource$slambda($resource, $resourceReader, $density, resultContinuation);
    var l = function (env, $completion) {
      return i.bey(env, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function svgPainter$lambda($svgPainter$delegate) {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('svgPainter', KProperty0, false);
    return $svgPainter$delegate.x1();
  }
  function svgPainter$lambda_0() {
    _init_properties_ImageResources_kt__6e1y7e();
    return get_emptySvgPainter();
  }
  function svgPainter$slambda$lambda($density) {
    return function (it) {
      return new Svg(toSvgPainter(toSvgElement(it), $density));
    };
  }
  function svgPainter$slambda($resource, $resourceReader, $density, resultContinuation) {
    this.ley_1 = $resource;
    this.mey_1 = $resourceReader;
    this.ney_1 = $density;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(svgPainter$slambda).pey = function (env, $completion) {
    var tmp = this.cey(env, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(svgPainter$slambda).e9 = function (p1, $completion) {
    return this.pey(p1 instanceof ResourceEnvironment ? p1 : THROW_CCE(), $completion);
  };
  protoOf(svgPainter$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            var path = getResourceItemByEnvironment(this.ley_1, this.oey_1).jex_1;
            this.m8_1 = 1;
            suspendResult = loadImage(path, path, this.mey_1, svgPainter$slambda$lambda(this.ney_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cached = suspendResult instanceof Svg ? suspendResult : THROW_CCE();
            return cached.gex_1;
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
  protoOf(svgPainter$slambda).cey = function (env, completion) {
    var i = new svgPainter$slambda(this.ley_1, this.mey_1, this.ney_1, completion);
    i.oey_1 = env;
    return i;
  };
  function svgPainter$slambda_0($resource, $resourceReader, $density, resultContinuation) {
    var i = new svgPainter$slambda($resource, $resourceReader, $density, resultContinuation);
    var l = function (env, $completion) {
      return i.pey(env, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function imageResource$lambda($imageBitmap$delegate) {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('imageBitmap', KProperty0, false);
    return $imageBitmap$delegate.x1();
  }
  function imageResource$lambda_0() {
    _init_properties_ImageResources_kt__6e1y7e();
    return get_emptyImageBitmap();
  }
  function imageResource$slambda$lambda($resourceDensity, $screenDensity) {
    return function (it) {
      return new Bitmap(toImageBitmap(it, $resourceDensity, $screenDensity));
    };
  }
  function imageResource$slambda($resource, $resourceEnvironment, $resourceReader, resultContinuation) {
    this.yey_1 = $resource;
    this.zey_1 = $resourceEnvironment;
    this.aez_1 = $resourceReader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(imageResource$slambda).cez = function (env, $completion) {
    var tmp = this.cey(env, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(imageResource$slambda).e9 = function (p1, $completion) {
    return this.cez(p1 instanceof ResourceEnvironment ? p1 : THROW_CCE(), $completion);
  };
  protoOf(imageResource$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            var item = getResourceItemByEnvironment(this.yey_1, this.bez_1);
            var tmp0 = item.iex_1;
            var tmp$ret$0;
            l$ret$1: do {
              var _iterator__ex2g4s = tmp0.i();
              while (_iterator__ex2g4s.j()) {
                var element = _iterator__ex2g4s.k();
                if (element instanceof DensityQualifier) {
                  tmp$ret$0 = element;
                  break l$ret$1;
                }
              }
              tmp$ret$0 = null;
            }
             while (false);
            var tmp_0 = tmp$ret$0;
            var resourceDensityQualifier = tmp_0 instanceof DensityQualifier ? tmp_0 : null;
            var tmp1_elvis_lhs = resourceDensityQualifier == null ? null : resourceDensityQualifier.fez_1;
            var resourceDensity = tmp1_elvis_lhs == null ? DensityQualifier_MDPI_getInstance().fez_1 : tmp1_elvis_lhs;
            var screenDensity = this.zey_1.jez_1.fez_1;
            var path = item.jex_1;
            this.m8_1 = 1;
            var tmp_1 = path + '-' + screenDensity + 'dpi';
            suspendResult = loadImage(path, tmp_1, this.aez_1, imageResource$slambda$lambda(resourceDensity, screenDensity), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cached = suspendResult instanceof Bitmap ? suspendResult : THROW_CCE();
            return cached.eex_1;
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
  protoOf(imageResource$slambda).cey = function (env, completion) {
    var i = new imageResource$slambda(this.yey_1, this.zey_1, this.aez_1, completion);
    i.bez_1 = env;
    return i;
  };
  function imageResource$slambda_0($resource, $resourceEnvironment, $resourceReader, resultContinuation) {
    var i = new imageResource$slambda($resource, $resourceEnvironment, $resourceReader, resultContinuation);
    var l = function (env, $completion) {
      return i.cez(env, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function loadImage$slambda($decode, $resourceReader, $path, resultContinuation) {
    this.sez_1 = $decode;
    this.tez_1 = $resourceReader;
    this.uez_1 = $path;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(loadImage$slambda).vez = function ($completion) {
    var tmp = this.p1o($completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(loadImage$slambda).q1o = function ($completion) {
    return this.vez($completion);
  };
  protoOf(loadImage$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.tez_1.wez(this.uez_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return this.sez_1(ARGUMENT);
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
  protoOf(loadImage$slambda).p1o = function (completion) {
    return new loadImage$slambda(this.sez_1, this.tez_1, this.uez_1, completion);
  };
  function loadImage$slambda_0($decode, $resourceReader, $path, resultContinuation) {
    var i = new loadImage$slambda($decode, $resourceReader, $path, resultContinuation);
    var l = function ($completion) {
      return i.vez($completion);
    };
    l.$arity = 0;
    return l;
  }
  var properties_initialized_ImageResources_kt_9gvoi4;
  function _init_properties_ImageResources_kt__6e1y7e() {
    if (!properties_initialized_ImageResources_kt_9gvoi4) {
      properties_initialized_ImageResources_kt_9gvoi4 = true;
      emptyImageBitmap$delegate = lazy(emptyImageBitmap$delegate$lambda);
      emptyImageVector$delegate = lazy(emptyImageVector$delegate$lambda);
      emptySvgPainter$delegate = lazy(emptySvgPainter$delegate$lambda);
      imageCache = new AsyncCache();
      org_jetbrains_compose_resources_DrawableResource$stable = 0;
      org_jetbrains_compose_resources_ImageCache_Bitmap$stable = 8;
      org_jetbrains_compose_resources_ImageCache_Vector$stable = 0;
      org_jetbrains_compose_resources_ImageCache_Svg$stable = 8;
    }
  }
  var org_jetbrains_compose_resources_PluralStringResource$stable;
  var org_jetbrains_compose_resources_LanguageQualifier$stable;
  var org_jetbrains_compose_resources_RegionQualifier$stable;
  function LanguageQualifier(language) {
    this.xez_1 = language;
  }
  protoOf(LanguageQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof LanguageQualifier))
      THROW_CCE();
    return this.xez_1 === other.xez_1;
  };
  protoOf(LanguageQualifier).hashCode = function () {
    return getStringHashCode(this.xez_1);
  };
  protoOf(LanguageQualifier).toString = function () {
    return "LanguageQualifier(language='" + this.xez_1 + "')";
  };
  function RegionQualifier(region) {
    this.yez_1 = region;
  }
  protoOf(RegionQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof RegionQualifier))
      THROW_CCE();
    return this.yez_1 === other.yez_1;
  };
  protoOf(RegionQualifier).hashCode = function () {
    return getStringHashCode(this.yez_1);
  };
  protoOf(RegionQualifier).toString = function () {
    return "RegionQualifier(region='" + this.yez_1 + "')";
  };
  var ThemeQualifier_LIGHT_instance;
  var ThemeQualifier_DARK_instance;
  function Companion() {
  }
  protoOf(Companion).zez = function (isDark) {
    return isDark ? ThemeQualifier_DARK_getInstance() : ThemeQualifier_LIGHT_getInstance();
  };
  var Companion_instance_3;
  function Companion_getInstance_13() {
    return Companion_instance_3;
  }
  var ThemeQualifier_entriesInitialized;
  function ThemeQualifier_initEntries() {
    if (ThemeQualifier_entriesInitialized)
      return Unit_instance;
    ThemeQualifier_entriesInitialized = true;
    ThemeQualifier_LIGHT_instance = new ThemeQualifier('LIGHT', 0);
    ThemeQualifier_DARK_instance = new ThemeQualifier('DARK', 1);
  }
  function ThemeQualifier(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var DensityQualifier_LDPI_instance;
  var DensityQualifier_MDPI_instance;
  var DensityQualifier_HDPI_instance;
  var DensityQualifier_XHDPI_instance;
  var DensityQualifier_XXHDPI_instance;
  var DensityQualifier_XXXHDPI_instance;
  function Companion_0() {
  }
  protoOf(Companion_0).af0 = function (dpi) {
    return dpi <= DensityQualifier_LDPI_getInstance().fez_1 ? DensityQualifier_LDPI_getInstance() : dpi <= DensityQualifier_MDPI_getInstance().fez_1 ? DensityQualifier_MDPI_getInstance() : dpi <= DensityQualifier_HDPI_getInstance().fez_1 ? DensityQualifier_HDPI_getInstance() : dpi <= DensityQualifier_XHDPI_getInstance().fez_1 ? DensityQualifier_XHDPI_getInstance() : dpi <= DensityQualifier_XXHDPI_getInstance().fez_1 ? DensityQualifier_XXHDPI_getInstance() : DensityQualifier_XXXHDPI_getInstance();
  };
  protoOf(Companion_0).bf0 = function (density) {
    return density <= 0.75 ? DensityQualifier_LDPI_getInstance() : density <= 1.0 ? DensityQualifier_MDPI_getInstance() : density <= 1.5 ? DensityQualifier_HDPI_getInstance() : density <= 2.0 ? DensityQualifier_XHDPI_getInstance() : density <= 3.0 ? DensityQualifier_XXHDPI_getInstance() : DensityQualifier_XXXHDPI_getInstance();
  };
  var Companion_instance_4;
  function Companion_getInstance_14() {
    return Companion_instance_4;
  }
  function values() {
    return [DensityQualifier_LDPI_getInstance(), DensityQualifier_MDPI_getInstance(), DensityQualifier_HDPI_getInstance(), DensityQualifier_XHDPI_getInstance(), DensityQualifier_XXHDPI_getInstance(), DensityQualifier_XXXHDPI_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var DensityQualifier_entriesInitialized;
  function DensityQualifier_initEntries() {
    if (DensityQualifier_entriesInitialized)
      return Unit_instance;
    DensityQualifier_entriesInitialized = true;
    DensityQualifier_LDPI_instance = new DensityQualifier('LDPI', 0, 120);
    DensityQualifier_MDPI_instance = new DensityQualifier('MDPI', 1, 160);
    DensityQualifier_HDPI_instance = new DensityQualifier('HDPI', 2, 240);
    DensityQualifier_XHDPI_instance = new DensityQualifier('XHDPI', 3, 320);
    DensityQualifier_XXHDPI_instance = new DensityQualifier('XXHDPI', 4, 480);
    DensityQualifier_XXXHDPI_instance = new DensityQualifier('XXXHDPI', 5, 640);
  }
  var $ENTRIES;
  function DensityQualifier(name, ordinal, dpi) {
    Enum.call(this, name, ordinal);
    this.fez_1 = dpi;
  }
  function ThemeQualifier_LIGHT_getInstance() {
    ThemeQualifier_initEntries();
    return ThemeQualifier_LIGHT_instance;
  }
  function ThemeQualifier_DARK_getInstance() {
    ThemeQualifier_initEntries();
    return ThemeQualifier_DARK_instance;
  }
  function DensityQualifier_LDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_LDPI_instance;
  }
  function DensityQualifier_MDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_MDPI_instance;
  }
  function DensityQualifier_HDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_HDPI_instance;
  }
  function DensityQualifier_XHDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_XHDPI_instance;
  }
  function DensityQualifier_XXHDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_XXHDPI_instance;
  }
  function DensityQualifier_XXXHDPI_getInstance() {
    DensityQualifier_initEntries();
    return DensityQualifier_XXXHDPI_instance;
  }
  var org_jetbrains_compose_resources_Resource$stable;
  var org_jetbrains_compose_resources_ResourceItem$stable;
  function ResourceItem(qualifiers, path, offset, size) {
    this.iex_1 = qualifiers;
    this.jex_1 = path;
    this.kex_1 = offset;
    this.lex_1 = size;
  }
  protoOf(ResourceItem).toString = function () {
    return 'ResourceItem(qualifiers=' + toString(this.iex_1) + ', path=' + this.jex_1 + ', offset=' + this.kex_1.toString() + ', size=' + this.lex_1.toString() + ')';
  };
  protoOf(ResourceItem).hashCode = function () {
    var result = hashCode(this.iex_1);
    result = imul(result, 31) + getStringHashCode(this.jex_1) | 0;
    result = imul(result, 31) + this.kex_1.hashCode() | 0;
    result = imul(result, 31) + this.lex_1.hashCode() | 0;
    return result;
  };
  protoOf(ResourceItem).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ResourceItem))
      return false;
    if (!equals(this.iex_1, other.iex_1))
      return false;
    if (!(this.jex_1 === other.jex_1))
      return false;
    if (!equalsLong(this.kex_1, other.kex_1))
      return false;
    if (!equalsLong(this.lex_1, other.lex_1))
      return false;
    return true;
  };
  function Resource(id, items) {
    this.cf0_1 = id;
    this.df0_1 = items;
  }
  protoOf(Resource).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Resource))
      THROW_CCE();
    return this.cf0_1 === other.cf0_1;
  };
  protoOf(Resource).hashCode = function () {
    return getStringHashCode(this.cf0_1);
  };
  var org_jetbrains_compose_resources_AsyncCache$stable;
  var org_jetbrains_compose_resources_ResourceCaches$stable;
  function AsyncCache$getOrLoad$slambda$slambda($load, resultContinuation) {
    this.mf0_1 = $load;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncCache$getOrLoad$slambda$slambda).of0 = function ($this$async, $completion) {
    var tmp = this.c1m($this$async, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(AsyncCache$getOrLoad$slambda$slambda).e9 = function (p1, $completion) {
    return this.of0((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncCache$getOrLoad$slambda$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.mf0_1(this);
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
  protoOf(AsyncCache$getOrLoad$slambda$slambda).c1m = function ($this$async, completion) {
    var i = new AsyncCache$getOrLoad$slambda$slambda(this.mf0_1, completion);
    i.nf0_1 = $this$async;
    return i;
  };
  function AsyncCache$getOrLoad$slambda$slambda_0($load, resultContinuation) {
    var i = new AsyncCache$getOrLoad$slambda$slambda($load, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.of0($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncCache$getOrLoad$slambda(this$0, $key, $load, resultContinuation) {
    this.xf0_1 = this$0;
    this.yf0_1 = $key;
    this.zf0_1 = $load;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncCache$getOrLoad$slambda).of0 = function ($this$coroutineScope, $completion) {
    var tmp = this.c1m($this$coroutineScope, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(AsyncCache$getOrLoad$slambda).e9 = function (p1, $completion) {
    return this.of0((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncCache$getOrLoad$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            this.cf1_1 = this.xf0_1.mex_1;
            this.bf1_1 = null;
            this.m8_1 = 1;
            suspendResult = this.cf1_1.i1u(this.bf1_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp$ret$0 = Unit_instance;
            l$ret$1: do {
              var tmp_0;
              try {
                var cached = this.xf0_1.nex_1.g2(this.yf0_1);
                if (cached == null || cached.pw()) {
                  var tmp_1 = CoroutineStart_LAZY_getInstance();
                  cached = async(this.af1_1, VOID, tmp_1, AsyncCache$getOrLoad$slambda$slambda_0(this.zf0_1, null));
                  var tmp0 = this.xf0_1.nex_1;
                  var tmp2 = this.yf0_1;
                  var value = cached;
                  tmp0.y1(tmp2, value);
                }
                tmp$ret$0 = cached;
                break l$ret$1;
              } catch ($p) {
                var tmp_2;
                var t = $p;
                this.cf1_1.k1u(this.bf1_1);
                throw t;
              }
            }
             while (false);
            var tmp_3 = tmp$ret$0;
            this.cf1_1.k1u(this.bf1_1);
            var deferred = tmp_3;
            this.m8_1 = 2;
            suspendResult = deferred.ry(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  protoOf(AsyncCache$getOrLoad$slambda).c1m = function ($this$coroutineScope, completion) {
    var i = new AsyncCache$getOrLoad$slambda(this.xf0_1, this.yf0_1, this.zf0_1, completion);
    i.af1_1 = $this$coroutineScope;
    return i;
  };
  function AsyncCache$getOrLoad$slambda_0(this$0, $key, $load, resultContinuation) {
    var i = new AsyncCache$getOrLoad$slambda(this$0, $key, $load, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.of0($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AsyncCache() {
    this.mex_1 = Mutex();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.nex_1 = LinkedHashMap_init_$Create$();
    ResourceCaches_getInstance().ef1(this);
  }
  protoOf(AsyncCache).oex = function (key, load, $completion) {
    return coroutineScope(AsyncCache$getOrLoad$slambda_0(this, key, load, null), $completion);
  };
  function ResourceCaches() {
    ResourceCaches_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.df1_1 = ArrayList_init_$Create$();
  }
  protoOf(ResourceCaches).ef1 = function (cache) {
    return this.df1_1.h(cache);
  };
  var ResourceCaches_instance;
  function ResourceCaches_getInstance() {
    if (ResourceCaches_instance == null)
      new ResourceCaches();
    return ResourceCaches_instance;
  }
  function get_DefaultComposeEnvironment() {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return DefaultComposeEnvironment;
  }
  var DefaultComposeEnvironment;
  function get_LocalComposeEnvironment() {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return LocalComposeEnvironment;
  }
  var LocalComposeEnvironment;
  var getResourceEnvironment;
  var org_jetbrains_compose_resources_ResourceEnvironment$stable;
  function ResourceEnvironment(language, region, theme, density) {
    this.gez_1 = language;
    this.hez_1 = region;
    this.iez_1 = theme;
    this.jez_1 = density;
  }
  protoOf(ResourceEnvironment).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ResourceEnvironment))
      THROW_CCE();
    if (!this.gez_1.equals(other.gez_1))
      return false;
    if (!this.hez_1.equals(other.hez_1))
      return false;
    if (!this.iez_1.equals(other.iez_1))
      return false;
    if (!this.jez_1.equals(other.jez_1))
      return false;
    return true;
  };
  protoOf(ResourceEnvironment).hashCode = function () {
    var result = this.gez_1.hashCode();
    result = imul(31, result) + this.hez_1.hashCode() | 0;
    result = imul(31, result) + this.iez_1.hashCode() | 0;
    result = imul(31, result) + this.jez_1.hashCode() | 0;
    return result;
  };
  function getResourceItemByEnvironment(_this__u8e3s4, environment) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    // Inline function 'kotlin.also' call
    var this_0 = filterByLocale(toList(_this__u8e3s4.df0_1), environment.gez_1, environment.hez_1);
    if (this_0.l() === 1)
      return first(this_0);
    // Inline function 'kotlin.also' call
    var this_1 = filterBy(this_0, environment.iez_1);
    if (this_1.l() === 1)
      return first(this_1);
    // Inline function 'kotlin.also' call
    var this_2 = filterByDensity(this_1, environment.jez_1);
    if (this_2.l() === 1)
      return first(this_2);
    // Inline function 'kotlin.let' call
    if (this_2.n()) {
      // Inline function 'kotlin.error' call
      var message = "Resource with ID='" + _this__u8e3s4.cf0_1 + "' not found";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      // Inline function 'kotlin.error' call
      var message_0 = "Resource with ID='" + _this__u8e3s4.cf0_1 + "' has more than one file: " + joinToString(this_2, VOID, VOID, VOID, VOID, VOID, getResourceItemByEnvironment$lambda);
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
  }
  function rememberResourceEnvironment($composer, $changed) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(707674437, $changed, -1, 'org.jetbrains.compose.resources.rememberResourceEnvironment (ResourceEnvironment.kt:71)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalComposeEnvironment();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g21(this_0);
    sourceInformationMarkerEnd($composer_1);
    var composeEnvironment = tmp0;
    var tmp0_0 = composeEnvironment.hex($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0_0;
  }
  function filterByDensity(_this__u8e3s4, density) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    var items = _this__u8e3s4;
    var withQualifier = emptyList();
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = get_entries();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      if (element.fez_1 >= density.fez_1) {
        destination.h(element);
      }
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = filterByDensity$lambda;
    var tmp$ret$4 = new sam$kotlin_Comparator$0(tmp);
    var exactAndHigherQualifiers = sortedWith(destination, tmp$ret$4);
    var _iterator__ex2g4s_0 = exactAndHigherQualifiers.i();
    $l$loop: while (_iterator__ex2g4s_0.j()) {
      var qualifier = _iterator__ex2g4s_0.k();
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_1 = items.i();
      while (_iterator__ex2g4s_1.j()) {
        var element_0 = _iterator__ex2g4s_1.k();
        var tmp0_0 = element_0.iex_1;
        var tmp$ret$8;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var tmp_0;
          if (isInterface(tmp0_0, Collection)) {
            tmp_0 = tmp0_0.n();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$8 = false;
            break $l$block_0;
          }
          var _iterator__ex2g4s_2 = tmp0_0.i();
          while (_iterator__ex2g4s_2.j()) {
            var element_1 = _iterator__ex2g4s_2.k();
            if (equals(element_1, qualifier)) {
              tmp$ret$8 = true;
              break $l$block_0;
            }
          }
          tmp$ret$8 = false;
        }
        if (tmp$ret$8) {
          destination_0.h(element_0);
        }
      }
      withQualifier = destination_0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!withQualifier.n())
        break $l$loop;
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withQualifier.n())
      return withQualifier;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_1 = minus(get_entries(), DensityQualifier_LDPI_getInstance());
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_3 = tmp0_1.i();
    while (_iterator__ex2g4s_3.j()) {
      var element_2 = _iterator__ex2g4s_3.k();
      if (element_2.fez_1 < density.fez_1) {
        destination_1.h(element_2);
      }
    }
    // Inline function 'kotlin.collections.sortedByDescending' call
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp_1 = filterByDensity$lambda_0;
    var tmp$ret$16 = new sam$kotlin_Comparator$0(tmp_1);
    var lowQualifiers = sortedWith(destination_1, tmp$ret$16);
    var _iterator__ex2g4s_4 = lowQualifiers.i();
    $l$loop_0: while (_iterator__ex2g4s_4.j()) {
      var qualifier_0 = _iterator__ex2g4s_4.k();
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_2 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_5 = items.i();
      while (_iterator__ex2g4s_5.j()) {
        var element_3 = _iterator__ex2g4s_5.k();
        var tmp0_2 = element_3.iex_1;
        var tmp$ret$20;
        $l$block_2: {
          // Inline function 'kotlin.collections.any' call
          var tmp_2;
          if (isInterface(tmp0_2, Collection)) {
            tmp_2 = tmp0_2.n();
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            tmp$ret$20 = false;
            break $l$block_2;
          }
          var _iterator__ex2g4s_6 = tmp0_2.i();
          while (_iterator__ex2g4s_6.j()) {
            var element_4 = _iterator__ex2g4s_6.k();
            if (equals(element_4, qualifier_0)) {
              tmp$ret$20 = true;
              break $l$block_2;
            }
          }
          tmp$ret$20 = false;
        }
        if (tmp$ret$20) {
          destination_2.h(element_3);
        }
      }
      withQualifier = destination_2;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!withQualifier.n())
        break $l$loop_0;
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withQualifier.n())
      return withQualifier;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_3 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_7 = items.i();
    while (_iterator__ex2g4s_7.j()) {
      var element_5 = _iterator__ex2g4s_7.k();
      var tmp0_3 = element_5.iex_1;
      var tmp$ret$27;
      $l$block_4: {
        // Inline function 'kotlin.collections.none' call
        var tmp_3;
        if (isInterface(tmp0_3, Collection)) {
          tmp_3 = tmp0_3.n();
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp$ret$27 = true;
          break $l$block_4;
        }
        var _iterator__ex2g4s_8 = tmp0_3.i();
        while (_iterator__ex2g4s_8.j()) {
          var element_6 = _iterator__ex2g4s_8.k();
          if (element_6 instanceof DensityQualifier) {
            tmp$ret$27 = false;
            break $l$block_4;
          }
        }
        tmp$ret$27 = true;
      }
      if (tmp$ret$27) {
        destination_3.h(element_5);
      }
    }
    var withNoDensity = destination_3;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withNoDensity.n())
      return withNoDensity;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_4 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_9 = items.i();
    while (_iterator__ex2g4s_9.j()) {
      var element_7 = _iterator__ex2g4s_9.k();
      var tmp0_4 = element_7.iex_1;
      var tmp$ret$33;
      $l$block_6: {
        // Inline function 'kotlin.collections.any' call
        var tmp_4;
        if (isInterface(tmp0_4, Collection)) {
          tmp_4 = tmp0_4.n();
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          tmp$ret$33 = false;
          break $l$block_6;
        }
        var _iterator__ex2g4s_10 = tmp0_4.i();
        while (_iterator__ex2g4s_10.j()) {
          var element_8 = _iterator__ex2g4s_10.k();
          if (equals(element_8, DensityQualifier_LDPI_getInstance())) {
            tmp$ret$33 = true;
            break $l$block_6;
          }
        }
        tmp$ret$33 = false;
      }
      if (tmp$ret$33) {
        destination_4.h(element_7);
      }
    }
    return destination_4;
  }
  function filterBy(_this__u8e3s4, qualifier) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = _this__u8e3s4.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var tmp0 = element.iex_1;
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp;
        if (isInterface(tmp0, Collection)) {
          tmp = tmp0.n();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$3 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s_0 = tmp0.i();
        while (_iterator__ex2g4s_0.j()) {
          var element_0 = _iterator__ex2g4s_0.k();
          if (equals(element_0, qualifier)) {
            tmp$ret$3 = true;
            break $l$block_0;
          }
        }
        tmp$ret$3 = false;
      }
      if (tmp$ret$3) {
        destination.h(element);
      }
    }
    var withQualifier = destination;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withQualifier.n())
      return withQualifier;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_1 = _this__u8e3s4.i();
    while (_iterator__ex2g4s_1.j()) {
      var element_1 = _iterator__ex2g4s_1.k();
      var tmp0_0 = element_1.iex_1;
      var tmp$ret$9;
      $l$block_2: {
        // Inline function 'kotlin.collections.none' call
        var tmp_0;
        if (isInterface(tmp0_0, Collection)) {
          tmp_0 = tmp0_0.n();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$9 = true;
          break $l$block_2;
        }
        var _iterator__ex2g4s_2 = tmp0_0.i();
        while (_iterator__ex2g4s_2.j()) {
          var element_2 = _iterator__ex2g4s_2.k();
          if (getKClassFromExpression(element_2).equals(getKClassFromExpression(qualifier))) {
            tmp$ret$9 = false;
            break $l$block_2;
          }
        }
        tmp$ret$9 = true;
      }
      if (tmp$ret$9) {
        destination_0.h(element_1);
      }
    }
    return destination_0;
  }
  function filterByLocale(_this__u8e3s4, language, region) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = _this__u8e3s4.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      var tmp0 = element.iex_1;
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp;
        if (isInterface(tmp0, Collection)) {
          tmp = tmp0.n();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$3 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s_0 = tmp0.i();
        while (_iterator__ex2g4s_0.j()) {
          var element_0 = _iterator__ex2g4s_0.k();
          if (equals(element_0, language)) {
            tmp$ret$3 = true;
            break $l$block_0;
          }
        }
        tmp$ret$3 = false;
      }
      if (tmp$ret$3) {
        destination.h(element);
      }
    }
    var withLanguage = destination;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_1 = withLanguage.i();
    while (_iterator__ex2g4s_1.j()) {
      var element_1 = _iterator__ex2g4s_1.k();
      var tmp0_0 = element_1.iex_1;
      var tmp$ret$8;
      $l$block_2: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(tmp0_0, Collection)) {
          tmp_0 = tmp0_0.n();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$8 = false;
          break $l$block_2;
        }
        var _iterator__ex2g4s_2 = tmp0_0.i();
        while (_iterator__ex2g4s_2.j()) {
          var element_2 = _iterator__ex2g4s_2.k();
          if (equals(element_2, region)) {
            tmp$ret$8 = true;
            break $l$block_2;
          }
        }
        tmp$ret$8 = false;
      }
      if (tmp$ret$8) {
        destination_0.h(element_1);
      }
    }
    var withExactLocale = destination_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withExactLocale.n())
      return withExactLocale;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_3 = withLanguage.i();
    while (_iterator__ex2g4s_3.j()) {
      var element_3 = _iterator__ex2g4s_3.k();
      var tmp0_1 = element_3.iex_1;
      var tmp$ret$14;
      $l$block_4: {
        // Inline function 'kotlin.collections.none' call
        var tmp_1;
        if (isInterface(tmp0_1, Collection)) {
          tmp_1 = tmp0_1.n();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$14 = true;
          break $l$block_4;
        }
        var _iterator__ex2g4s_4 = tmp0_1.i();
        while (_iterator__ex2g4s_4.j()) {
          var element_4 = _iterator__ex2g4s_4.k();
          if (element_4 instanceof RegionQualifier) {
            tmp$ret$14 = false;
            break $l$block_4;
          }
        }
        tmp$ret$14 = true;
      }
      if (tmp$ret$14) {
        destination_1.h(element_3);
      }
    }
    var withDefaultRegion = destination_1;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!withDefaultRegion.n())
      return withDefaultRegion;
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_2 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_5 = _this__u8e3s4.i();
    while (_iterator__ex2g4s_5.j()) {
      var element_5 = _iterator__ex2g4s_5.k();
      var tmp0_2 = element_5.iex_1;
      var tmp$ret$20;
      $l$block_6: {
        // Inline function 'kotlin.collections.none' call
        var tmp_2;
        if (isInterface(tmp0_2, Collection)) {
          tmp_2 = tmp0_2.n();
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          tmp$ret$20 = true;
          break $l$block_6;
        }
        var _iterator__ex2g4s_6 = tmp0_2.i();
        while (_iterator__ex2g4s_6.j()) {
          var element_6 = _iterator__ex2g4s_6.k();
          var tmp_3;
          if (element_6 instanceof LanguageQualifier) {
            tmp_3 = true;
          } else {
            tmp_3 = element_6 instanceof RegionQualifier;
          }
          if (tmp_3) {
            tmp$ret$20 = false;
            break $l$block_6;
          }
        }
        tmp$ret$20 = true;
      }
      if (tmp$ret$20) {
        destination_2.h(element_5);
      }
    }
    return destination_2;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.ff1_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).yb = function (a, b) {
    return this.ff1_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.yb(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).r2 = function () {
    return this.ff1_1;
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
  function DefaultComposeEnvironment$1() {
  }
  protoOf(DefaultComposeEnvironment$1).hex = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.a20(1808039825);
    if (isTraceInProgress()) {
      traceEventStart(1808039825, $changed, -1, 'org.jetbrains.compose.resources.DefaultComposeEnvironment.<no name provided>.rememberEnvironment (ResourceEnvironment.kt:43)');
    }
    var composeLocale = Companion_instance.w1x();
    var composeTheme = isSystemInDarkTheme($composer_0, 0);
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g21(this_0);
    sourceInformationMarkerEnd($composer_1);
    var composeDensity = tmp0;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!($composer_0.w20(composeLocale) | $composer_0.x20(composeTheme)) | $composer_0.w20(composeDensity));
    // Inline function 'kotlin.let' call
    var it = $composer_0.u20();
    var tmp;
    if (invalid || it === Companion_getInstance().s1z_1) {
      var value = new ResourceEnvironment(new LanguageQualifier(composeLocale.f5o()), new RegionQualifier(composeLocale.g5o()), Companion_instance_3.zez(composeTheme), Companion_instance_4.bf0(composeDensity.t3q()));
      $composer_0.v20(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.b20();
    return tmp0_0;
  };
  function LocalComposeEnvironment$lambda() {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return get_DefaultComposeEnvironment();
  }
  function getSystemEnvironment$ref() {
    var l = function () {
      return getSystemEnvironment();
    };
    l.callableName = 'getSystemEnvironment';
    return l;
  }
  function getResourceItemByEnvironment$lambda(it) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return it.jex_1;
  }
  function filterByDensity$lambda(a, b) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.fez_1;
    var tmp$ret$2 = b.fez_1;
    return compareValues(tmp, tmp$ret$2);
  }
  function filterByDensity$lambda_0(a, b) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = b.fez_1;
    var tmp$ret$2 = a.fez_1;
    return compareValues(tmp, tmp$ret$2);
  }
  var properties_initialized_ResourceEnvironment_kt_6hb9vv;
  function _init_properties_ResourceEnvironment_kt__2jx9u5() {
    if (!properties_initialized_ResourceEnvironment_kt_6hb9vv) {
      properties_initialized_ResourceEnvironment_kt_6hb9vv = true;
      DefaultComposeEnvironment = new DefaultComposeEnvironment$1();
      LocalComposeEnvironment = staticCompositionLocalOf(LocalComposeEnvironment$lambda);
      getResourceEnvironment = getSystemEnvironment$ref();
      org_jetbrains_compose_resources_ResourceEnvironment$stable = 0;
    }
  }
  function get_DefaultResourceReader() {
    _init_properties_ResourceReader_kt__hdc5sh();
    return DefaultResourceReader;
  }
  var DefaultResourceReader;
  function get_LocalResourceReader() {
    _init_properties_ResourceReader_kt__hdc5sh();
    return LocalResourceReader;
  }
  var LocalResourceReader;
  var org_jetbrains_compose_resources_MissingResourceException$stable;
  function MissingResourceException(path) {
    Exception_init_$Init$('Missing resource with path: ' + path, this);
    captureStack(this, MissingResourceException);
  }
  function LocalResourceReader$lambda() {
    _init_properties_ResourceReader_kt__hdc5sh();
    return get_DefaultResourceReader();
  }
  var properties_initialized_ResourceReader_kt_tqilcj;
  function _init_properties_ResourceReader_kt__hdc5sh() {
    if (!properties_initialized_ResourceReader_kt_tqilcj) {
      properties_initialized_ResourceReader_kt_tqilcj = true;
      DefaultResourceReader = getPlatformResourceReader();
      LocalResourceReader = staticCompositionLocalOf(LocalResourceReader$lambda);
      org_jetbrains_compose_resources_MissingResourceException$stable = 8;
    }
  }
  var org_jetbrains_compose_resources_StringArrayResource$stable;
  var org_jetbrains_compose_resources_StringResource$stable;
  var org_jetbrains_compose_resources_plural_PluralRuleParseException$stable;
  var org_jetbrains_compose_resources_plural_PluralRule_Condition_And$stable;
  var org_jetbrains_compose_resources_plural_PluralRule_Condition_Or$stable;
  var org_jetbrains_compose_resources_plural_PluralRule_Condition_Relation$stable;
  var org_jetbrains_compose_resources_plural_PluralRule$stable;
  var org_jetbrains_compose_resources_plural_PluralRuleList$stable;
  function parseDp(_this__u8e3s4, density) {
    // Inline function 'kotlin.with' call
    var tmp;
    if (_this__u8e3s4 == null) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0.0);
    } else if (endsWith(_this__u8e3s4, 'dp')) {
      // Inline function 'kotlin.text.toFloat' call
      var this_0 = removeSuffix(_this__u8e3s4, 'dp');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'androidx.compose.ui.unit.dp' call
      var this_1 = toDouble(this_0);
      tmp = _Dp___init__impl__ms3zkb(this_1);
    } else if (endsWith(_this__u8e3s4, 'px')) {
      // Inline function 'kotlin.text.toFloat' call
      var this_2 = removeSuffix(_this__u8e3s4, 'px');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$7 = toDouble(this_2);
      tmp = density.c3r(tmp$ret$7);
    } else {
      throw UnsupportedOperationException_init_$Create$('value should ends with dp or px');
    }
    return tmp;
  }
  function parseFillType(fillType) {
    var tmp;
    switch (fillType) {
      case 'nonZero':
        tmp = Companion_getInstance_0().c4o_1;
        break;
      case 'evenOdd':
        tmp = Companion_getInstance_0().d4o_1;
        break;
      default:
        throw UnsupportedOperationException_init_$Create$('unknown fillType: ' + fillType);
    }
    return tmp;
  }
  function parseStrokeCap(strokeCap) {
    var tmp;
    switch (strokeCap) {
      case 'butt':
        tmp = Companion_getInstance_1().p4o_1;
        break;
      case 'round':
        tmp = Companion_getInstance_1().q4o_1;
        break;
      case 'square':
        tmp = Companion_getInstance_1().r4o_1;
        break;
      default:
        throw UnsupportedOperationException_init_$Create$('unknown strokeCap: ' + strokeCap);
    }
    return tmp;
  }
  function parseStrokeJoin(strokeJoin) {
    var tmp;
    switch (strokeJoin) {
      case 'miter':
        tmp = Companion_getInstance_2().t4o_1;
        break;
      case 'round':
        tmp = Companion_getInstance_2().u4o_1;
        break;
      case 'bevel':
        tmp = Companion_getInstance_2().v4o_1;
        break;
      default:
        throw UnsupportedOperationException_init_$Create$('unknown strokeJoin: ' + strokeJoin);
    }
    return tmp;
  }
  function parseColorValue(color) {
    // Inline function 'kotlin.require' call
    if (!startsWith(color, '#')) {
      var message = 'Invalid color value ' + color;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (color.length) {
      case 7:
        // Inline function 'kotlin.UInt.toInt' call

        var this_0 = toUInt(substring(color, 1), 16);
        tmp = _UInt___get_data__impl__f0vqqw(this_0) | -16777216;
        break;
      case 9:
        // Inline function 'kotlin.UInt.toInt' call

        var this_1 = toUInt(substring(color, 1), 16);
        tmp = _UInt___get_data__impl__f0vqqw(this_1);
        break;
      case 4:
        // Inline function 'kotlin.UInt.toInt' call

        var this_2 = toUInt(substring(color, 1), 16);
        var v = _UInt___get_data__impl__f0vqqw(this_2);
        var k = imul(v >> 8 & 15, 1114112);
        k = k | imul(v >> 4 & 15, 4352);
        k = k | imul(v & 15, 17);
        tmp = k | -16777216;
        break;
      case 5:
        // Inline function 'kotlin.UInt.toInt' call

        var this_3 = toUInt(substring(color, 1), 16);
        var v_0 = _UInt___get_data__impl__f0vqqw(this_3);
        var k_0 = imul(v_0 >> 12 & 15, 285212672);
        k_0 = k_0 | imul(v_0 >> 8 & 15, 1114112);
        k_0 = k_0 | imul(v_0 >> 4 & 15, 4352);
        k_0 = k_0 | imul(v_0 & 15, 17);
        tmp = k_0 | -16777216;
        break;
      default:
        tmp = -16777216;
        break;
    }
    return tmp;
  }
  function parseTileMode(tileMode) {
    var tmp;
    switch (tileMode) {
      case 'clamp':
        tmp = Companion_getInstance_3().a4i_1;
        break;
      case 'repeated':
        tmp = Companion_getInstance_3().b4i_1;
        break;
      case 'mirror':
        tmp = Companion_getInstance_3().c4i_1;
        break;
      default:
        throw UnsupportedOperationException_init_$Create$('unknown tileMode: ' + tileMode);
    }
    return tmp;
  }
  function toImageVector(_this__u8e3s4, density) {
    var context = new BuildContext();
    var tmp = parseDp(attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'width'), density);
    var tmp_0 = parseDp(attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'height'), density);
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'viewportWidth');
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_1;
    var tmp_2 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'viewportHeight');
    var tmp_3;
    if (tmp2_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_3 = toDouble(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_3;
    var builder = new Builder(VOID, tmp, tmp_0, tmp_2, tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs, VOID, VOID, attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'autoMirrored') === 'true');
    parseVectorNodes(_this__u8e3s4, builder, context);
    return builder.i2a();
  }
  var Group_Real_instance;
  var Group_Virtual_instance;
  var Group_entriesInitialized;
  function Group_initEntries() {
    if (Group_entriesInitialized)
      return Unit_instance;
    Group_entriesInitialized = true;
    Group_Real_instance = new Group('Real', 0);
    Group_Virtual_instance = new Group('Virtual', 1);
  }
  function Group(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Group_Real_getInstance() {
    Group_initEntries();
    return Group_Real_instance;
  }
  function Group_Virtual_getInstance() {
    Group_initEntries();
    return Group_Virtual_instance;
  }
  function BuildContext() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.gf1_1 = ArrayList_init_$Create$();
  }
  function attributeOrNull(_this__u8e3s4, namespace, name) {
    var value = _this__u8e3s4.hf1(namespace, name);
    var tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(value)) {
      tmp = value;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function parseVectorNodes(_this__u8e3s4, builder, context) {
    // Inline function 'kotlin.sequences.filterIsInstance' call
    var this_0 = get_childrenSequence(_this__u8e3s4);
    var tmp = filter(this_0, parseVectorNodes$lambda);
    // Inline function 'kotlin.sequences.forEach' call
    var _iterator__ex2g4s = (isInterface(tmp, Sequence) ? tmp : THROW_CCE()).i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      parseVectorNode(element, builder, context);
    }
  }
  function get_childrenSequence(_this__u8e3s4) {
    return sequence(_get_childrenSequence_$slambda_9jpw3j_0(_this__u8e3s4, null));
  }
  function parseVectorNode(_this__u8e3s4, builder, context) {
    switch (_this__u8e3s4.if1()) {
      case 'path':
        parsePath(_this__u8e3s4, builder);
        break;
      case 'clip-path':
        parseClipPath(_this__u8e3s4, builder, context);
        break;
      case 'group':
        parseGroup(_this__u8e3s4, builder, context);
        break;
    }
  }
  function parsePath(_this__u8e3s4, builder) {
    var tmp = addPathNodes(attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'pathData'));
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'fillType');
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = parseFillType(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    var tmp_2 = tmp1_elvis_lhs;
    if ((tmp_2 == null ? null : new PathFillType(tmp_2)) == null) {
      tmp_1 = Companion_getInstance_0().c4o_1;
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var tmp_3 = tmp_1;
    var tmp2_elvis_lhs = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'name');
    var tmp_4 = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
    var tmp3_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'fillColor');
    var tmp_5;
    if (tmp3_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_5 = parseStringBrush(tmp3_safe_receiver);
    }
    var tmp4_elvis_lhs = tmp_5;
    var tmp_6;
    if (tmp4_elvis_lhs == null) {
      var tmp5_safe_receiver = apptAttr(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'fillColor');
      var tmp_7;
      if (tmp5_safe_receiver == null) {
        tmp_7 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_7 = parseElementBrush(tmp5_safe_receiver);
      }
      tmp_6 = tmp_7;
    } else {
      tmp_6 = tmp4_elvis_lhs;
    }
    var tmp_8 = tmp_6;
    var tmp6_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'fillAlpha');
    var tmp_9;
    if (tmp6_safe_receiver == null) {
      tmp_9 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_9 = toDouble(tmp6_safe_receiver);
    }
    var tmp7_elvis_lhs = tmp_9;
    var tmp_10 = tmp7_elvis_lhs == null ? 1.0 : tmp7_elvis_lhs;
    var tmp8_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeColor');
    var tmp_11;
    if (tmp8_safe_receiver == null) {
      tmp_11 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_11 = parseStringBrush(tmp8_safe_receiver);
    }
    var tmp9_elvis_lhs = tmp_11;
    var tmp_12;
    if (tmp9_elvis_lhs == null) {
      var tmp10_safe_receiver = apptAttr(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeColor');
      var tmp_13;
      if (tmp10_safe_receiver == null) {
        tmp_13 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_13 = parseElementBrush(tmp10_safe_receiver);
      }
      tmp_12 = tmp_13;
    } else {
      tmp_12 = tmp9_elvis_lhs;
    }
    var tmp_14 = tmp_12;
    var tmp11_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeAlpha');
    var tmp_15;
    if (tmp11_safe_receiver == null) {
      tmp_15 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_15 = toDouble(tmp11_safe_receiver);
    }
    var tmp12_elvis_lhs = tmp_15;
    var tmp_16 = tmp12_elvis_lhs == null ? 1.0 : tmp12_elvis_lhs;
    var tmp13_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeWidth');
    var tmp_17;
    if (tmp13_safe_receiver == null) {
      tmp_17 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_17 = toDouble(tmp13_safe_receiver);
    }
    var tmp14_elvis_lhs = tmp_17;
    var tmp_18 = tmp14_elvis_lhs == null ? 1.0 : tmp14_elvis_lhs;
    var tmp15_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeLineCap');
    var tmp_19;
    if (tmp15_safe_receiver == null) {
      tmp_19 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_19 = parseStrokeCap(tmp15_safe_receiver);
    }
    var tmp16_elvis_lhs = tmp_19;
    var tmp_20;
    var tmp_21 = tmp16_elvis_lhs;
    if ((tmp_21 == null ? null : new StrokeCap(tmp_21)) == null) {
      tmp_20 = Companion_getInstance_1().p4o_1;
    } else {
      tmp_20 = tmp16_elvis_lhs;
    }
    var tmp_22 = tmp_20;
    var tmp17_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeLineJoin');
    var tmp_23;
    if (tmp17_safe_receiver == null) {
      tmp_23 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_23 = parseStrokeJoin(tmp17_safe_receiver);
    }
    var tmp18_elvis_lhs = tmp_23;
    var tmp_24;
    var tmp_25 = tmp18_elvis_lhs;
    if ((tmp_25 == null ? null : new StrokeJoin(tmp_25)) == null) {
      tmp_24 = Companion_getInstance_2().t4o_1;
    } else {
      tmp_24 = tmp18_elvis_lhs;
    }
    var tmp_26 = tmp_24;
    var tmp19_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'strokeMiterLimit');
    var tmp_27;
    if (tmp19_safe_receiver == null) {
      tmp_27 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_27 = toDouble(tmp19_safe_receiver);
    }
    var tmp20_elvis_lhs = tmp_27;
    var tmp_28 = tmp20_elvis_lhs == null ? 1.0 : tmp20_elvis_lhs;
    var tmp21_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'trimPathStart');
    var tmp_29;
    if (tmp21_safe_receiver == null) {
      tmp_29 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_29 = toDouble(tmp21_safe_receiver);
    }
    var tmp22_elvis_lhs = tmp_29;
    var tmp_30 = tmp22_elvis_lhs == null ? 0.0 : tmp22_elvis_lhs;
    var tmp23_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'trimPathEnd');
    var tmp_31;
    if (tmp23_safe_receiver == null) {
      tmp_31 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_31 = toDouble(tmp23_safe_receiver);
    }
    var tmp24_elvis_lhs = tmp_31;
    var tmp_32 = tmp24_elvis_lhs == null ? 1.0 : tmp24_elvis_lhs;
    var tmp25_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'trimPathOffset');
    var tmp_33;
    if (tmp25_safe_receiver == null) {
      tmp_33 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_33 = toDouble(tmp25_safe_receiver);
    }
    var tmp26_elvis_lhs = tmp_33;
    builder.z6p(tmp, tmp_3, tmp_4, tmp_8, tmp_10, tmp_14, tmp_16, tmp_18, tmp_22, tmp_26, tmp_28, tmp_30, tmp_32, tmp26_elvis_lhs == null ? 0.0 : tmp26_elvis_lhs);
  }
  function parseClipPath(_this__u8e3s4, builder, context) {
    var tmp0_elvis_lhs = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'name');
    builder.x6p(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, VOID, VOID, VOID, VOID, VOID, VOID, VOID, addPathNodes(attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'pathData')));
    context.gf1_1.h(Group_Virtual_getInstance());
  }
  function parseGroup(_this__u8e3s4, builder, context) {
    var tmp0_elvis_lhs = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'name');
    var tmp = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    var tmp1_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'rotation');
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = toDouble(tmp1_safe_receiver);
    }
    var tmp2_elvis_lhs = tmp_0;
    var tmp_1 = tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    var tmp3_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'pivotX');
    var tmp_2;
    if (tmp3_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_2 = toDouble(tmp3_safe_receiver);
    }
    var tmp4_elvis_lhs = tmp_2;
    var tmp_3 = tmp4_elvis_lhs == null ? 0.0 : tmp4_elvis_lhs;
    var tmp5_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'pivotY');
    var tmp_4;
    if (tmp5_safe_receiver == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_4 = toDouble(tmp5_safe_receiver);
    }
    var tmp6_elvis_lhs = tmp_4;
    var tmp_5 = tmp6_elvis_lhs == null ? 0.0 : tmp6_elvis_lhs;
    var tmp7_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'scaleX');
    var tmp_6;
    if (tmp7_safe_receiver == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_6 = toDouble(tmp7_safe_receiver);
    }
    var tmp8_elvis_lhs = tmp_6;
    var tmp_7 = tmp8_elvis_lhs == null ? 1.0 : tmp8_elvis_lhs;
    var tmp9_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'scaleY');
    var tmp_8;
    if (tmp9_safe_receiver == null) {
      tmp_8 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_8 = toDouble(tmp9_safe_receiver);
    }
    var tmp10_elvis_lhs = tmp_8;
    var tmp_9 = tmp10_elvis_lhs == null ? 1.0 : tmp10_elvis_lhs;
    var tmp11_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'translateX');
    var tmp_10;
    if (tmp11_safe_receiver == null) {
      tmp_10 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_10 = toDouble(tmp11_safe_receiver);
    }
    var tmp12_elvis_lhs = tmp_10;
    var tmp_11 = tmp12_elvis_lhs == null ? 0.0 : tmp12_elvis_lhs;
    var tmp13_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'translateY');
    var tmp_12;
    if (tmp13_safe_receiver == null) {
      tmp_12 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_12 = toDouble(tmp13_safe_receiver);
    }
    var tmp14_elvis_lhs = tmp_12;
    builder.w6p(tmp, tmp_1, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, tmp14_elvis_lhs == null ? 0.0 : tmp14_elvis_lhs, get_EmptyPath());
    context.gf1_1.h(Group_Real_getInstance());
    parseVectorNodes(_this__u8e3s4, builder, context);
    do {
      var removedGroup = removeLastOrNull(context.gf1_1);
      builder.y6p();
    }
     while (equals(removedGroup, Group_Virtual_getInstance()));
  }
  function parseStringBrush(str) {
    return new SolidColor(Color(parseColorValue(str)));
  }
  function apptAttr(_this__u8e3s4, namespace, name) {
    var prefix = _this__u8e3s4.jf1(namespace);
    // Inline function 'kotlin.sequences.filterIsInstance' call
    var this_0 = get_childrenSequence(_this__u8e3s4);
    var tmp = filter(this_0, apptAttr$lambda);
    // Inline function 'kotlin.sequences.find' call
    var tmp0 = isInterface(tmp, Sequence) ? tmp : THROW_CCE();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.sequences.firstOrNull' call
      var _iterator__ex2g4s = tmp0.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (element.kf1() === 'http://schemas.android.com/aapt' && element.lf1() === 'attr' && element.mf1('name') === prefix + ':' + name) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    return tmp$ret$2;
  }
  function parseElementBrush(_this__u8e3s4) {
    // Inline function 'kotlin.sequences.filterIsInstance' call
    var this_0 = get_childrenSequence(_this__u8e3s4);
    var tmp = filter(this_0, parseElementBrush$lambda);
    // Inline function 'kotlin.sequences.find' call
    var tmp0 = isInterface(tmp, Sequence) ? tmp : THROW_CCE();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.sequences.firstOrNull' call
      var _iterator__ex2g4s = tmp0.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (element.if1() === 'gradient') {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    return tmp0_safe_receiver == null ? null : parseGradient(tmp0_safe_receiver);
  }
  function parseGradient(_this__u8e3s4) {
    switch (attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'type')) {
      case 'linear':
        return parseLinearGradient(_this__u8e3s4);
      case 'radial':
        return parseRadialGradient(_this__u8e3s4);
      case 'sweep':
        return parseSweepGradient(_this__u8e3s4);
      default:
        return null;
    }
  }
  function parseLinearGradient(_this__u8e3s4) {
    var tmp = Companion_instance_0;
    var tmp_0 = parseColorStops(_this__u8e3s4).slice();
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'startX');
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_1;
    var tmp0 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'startY');
    var tmp_2;
    if (tmp2_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_2 = toDouble(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_2;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$7 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp_3 = _Offset___init__impl__c168vi(tmp$ret$7);
    var tmp4_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'endX');
    var tmp_4;
    if (tmp4_safe_receiver == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_4 = toDouble(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_4;
    var tmp0_0 = tmp5_elvis_lhs == null ? 0.0 : tmp5_elvis_lhs;
    var tmp6_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'endY');
    var tmp_5;
    if (tmp6_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_5 = toDouble(tmp6_safe_receiver);
    }
    var tmp7_elvis_lhs = tmp_5;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2_0 = tmp7_elvis_lhs == null ? 0.0 : tmp7_elvis_lhs;
    var v1_0 = fromInt(toRawBits(tmp0_0));
    var v2_0 = fromInt(toRawBits(val2_0));
    var tmp$ret$15 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
    var tmp_6 = _Offset___init__impl__c168vi(tmp$ret$15);
    var tmp8_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'tileMode');
    var tmp_7;
    if (tmp8_safe_receiver == null) {
      tmp_7 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_7 = parseTileMode(tmp8_safe_receiver);
    }
    var tmp9_elvis_lhs = tmp_7;
    var tmp_8;
    var tmp_9 = tmp9_elvis_lhs;
    if ((tmp_9 == null ? null : new TileMode(tmp_9)) == null) {
      tmp_8 = Companion_getInstance_3().a4i_1;
    } else {
      tmp_8 = tmp9_elvis_lhs;
    }
    return tmp.z4g(tmp_0, tmp_3, tmp_6, tmp_8);
  }
  function parseRadialGradient(_this__u8e3s4) {
    var tmp = Companion_instance_0;
    var tmp_0 = parseColorStops(_this__u8e3s4).slice();
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerX');
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_1;
    var tmp0 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerY');
    var tmp_2;
    if (tmp2_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_2 = toDouble(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_2;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$7 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp_3 = _Offset___init__impl__c168vi(tmp$ret$7);
    var tmp4_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'gradientRadius');
    var tmp_4;
    if (tmp4_safe_receiver == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_4 = toDouble(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_4;
    var tmp_5 = tmp5_elvis_lhs == null ? 0.0 : tmp5_elvis_lhs;
    var tmp6_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'tileMode');
    var tmp_6;
    if (tmp6_safe_receiver == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_6 = parseTileMode(tmp6_safe_receiver);
    }
    var tmp7_elvis_lhs = tmp_6;
    var tmp_7;
    var tmp_8 = tmp7_elvis_lhs;
    if ((tmp_8 == null ? null : new TileMode(tmp_8)) == null) {
      tmp_7 = Companion_getInstance_3().a4i_1;
    } else {
      tmp_7 = tmp7_elvis_lhs;
    }
    return tmp.a4h(tmp_0, tmp_3, tmp_5, tmp_7);
  }
  function parseSweepGradient(_this__u8e3s4) {
    var tmp = Companion_instance_0;
    var tmp_0 = parseColorStops(_this__u8e3s4).slice();
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerX');
    var tmp_1;
    if (tmp0_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_1;
    var tmp0 = tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerY');
    var tmp_2;
    if (tmp2_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_2 = toDouble(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_2;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$7 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$6 = _Offset___init__impl__c168vi(tmp$ret$7);
    return tmp.b4h(tmp_0, tmp$ret$6);
  }
  function parseColorStops(_this__u8e3s4) {
    // Inline function 'kotlin.sequences.filterIsInstance' call
    var this_0 = get_childrenSequence(_this__u8e3s4);
    var tmp = filter(this_0, parseColorStops$lambda);
    var tmp_0 = isInterface(tmp, Sequence) ? tmp : THROW_CCE();
    var items = toList_0(filter(tmp_0, parseColorStops$lambda_0));
    // Inline function 'kotlin.collections.mutableListOf' call
    // Inline function 'kotlin.collections.mapIndexedNotNullTo' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var _iterator__ex2g4s = items.i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var index_0 = checkIndexOverflow(_unary__edvuaz);
      var tmp0_safe_receiver = parseColorStop(item, index_0 / coerceAtLeast(get_lastIndex(items), 1));
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        destination.h(tmp0_safe_receiver);
      }
    }
    var colorStops = destination;
    if (colorStops.n()) {
      var tmp0_safe_receiver_0 = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'startColor');
      var tmp_1;
      if (tmp0_safe_receiver_0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_1 = parseColorValue(tmp0_safe_receiver_0);
      }
      var startColor = tmp_1;
      var tmp1_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'centerColor');
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_2 = parseColorValue(tmp1_safe_receiver);
      }
      var centerColor = tmp_2;
      var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'endColor');
      var tmp_3;
      if (tmp2_safe_receiver == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_3 = parseColorValue(tmp2_safe_receiver);
      }
      var endColor = tmp_3;
      if (!(startColor == null)) {
        colorStops.h(to(0.0, new Color_0(Color(startColor))));
      }
      if (!(centerColor == null)) {
        colorStops.h(to(0.5, new Color_0(Color(centerColor))));
      }
      if (!(endColor == null)) {
        colorStops.h(to(1.0, new Color_0(Color(endColor))));
      }
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(colorStops);
  }
  function parseColorStop(_this__u8e3s4, defaultOffset) {
    var tmp0_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'offset');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = toDouble(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var offset = tmp1_elvis_lhs == null ? defaultOffset : tmp1_elvis_lhs;
    var tmp2_safe_receiver = attributeOrNull(_this__u8e3s4, 'http://schemas.android.com/apk/res/android', 'color');
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = parseColorValue(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp3_elvis_lhs == null) {
      return null;
    } else {
      tmp_1 = tmp3_elvis_lhs;
    }
    var color = tmp_1;
    return to(offset, new Color_0(Color(color)));
  }
  function parseVectorNodes$lambda(it) {
    return !(it == null) ? isInterface(it, Element_0) : false;
  }
  function _get_childrenSequence_$slambda_9jpw3j($this_childrenSequence, resultContinuation) {
    this.vf1_1 = $this_childrenSequence;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_childrenSequence_$slambda_9jpw3j).yf1 = function ($this$sequence, $completion) {
    var tmp = this.zf1($this$sequence, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(_get_childrenSequence_$slambda_9jpw3j).e9 = function (p1, $completion) {
    return this.yf1(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_childrenSequence_$slambda_9jpw3j).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            this.xf1_1 = until(0, this.vf1_1.af2().a()).i();
            this.m8_1 = 1;
            continue $sm;
          case 1:
            if (!this.xf1_1.j()) {
              this.m8_1 = 3;
              continue $sm;
            }

            var i = this.xf1_1.k();
            this.m8_1 = 2;
            suspendResult = this.wf1_1.je(this.vf1_1.af2().bf2(i), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  protoOf(_get_childrenSequence_$slambda_9jpw3j).zf1 = function ($this$sequence, completion) {
    var i = new _get_childrenSequence_$slambda_9jpw3j(this.vf1_1, completion);
    i.wf1_1 = $this$sequence;
    return i;
  };
  function _get_childrenSequence_$slambda_9jpw3j_0($this_childrenSequence, resultContinuation) {
    var i = new _get_childrenSequence_$slambda_9jpw3j($this_childrenSequence, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.yf1($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function apptAttr$lambda(it) {
    return !(it == null) ? isInterface(it, Element_0) : false;
  }
  function parseElementBrush$lambda(it) {
    return !(it == null) ? isInterface(it, Element_0) : false;
  }
  function parseColorStops$lambda(it) {
    return !(it == null) ? isInterface(it, Element_0) : false;
  }
  function parseColorStops$lambda_0(it) {
    return it.if1() === 'item';
  }
  function Element_0() {
  }
  var org_jetbrains_compose_resources_vector_xmldom_MalformedXMLException$stable;
  function MalformedXMLException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, MalformedXMLException);
  }
  function toXmlElement(_this__u8e3s4) {
    var xmlString = decodeToString(_this__u8e3s4);
    var xmlDom = (new DOMParser()).parseFromString(xmlString, 'application/xml');
    var tmp0_elvis_lhs = xmlDom.documentElement;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new MalformedXMLException('missing documentElement');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var domElement = tmp;
    return new ElementImpl(domElement);
  }
  var org_jetbrains_compose_resources_Intl_Locale$stable;
  function getSystemEnvironment() {
    var locale = new Intl.Locale(window.navigator.language);
    var isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dpi = numberToInt(window.devicePixelRatio * 96);
    var tmp = new LanguageQualifier(locale.language);
    var tmp0_elvis_lhs = locale.region;
    return new ResourceEnvironment(tmp, new RegionQualifier(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs), Companion_instance_3.zez(isDarkTheme), Companion_instance_4.af0(dpi));
  }
  var org_jetbrains_compose_resources_DefaultJsResourceReader$stable;
  function getPlatformResourceReader() {
    if (isInTestEnvironment())
      return TestJsResourceReader_instance;
    return DefaultJsResourceReader_instance;
  }
  function isInTestEnvironment() {
    return window.composeResourcesTesting == true;
  }
  function readByteArray($this, path) {
    var resPath = WebResourcesConfiguration_getInstance().cf2_1(path);
    var request = new XMLHttpRequest();
    request.open('GET', resPath, false);
    request.overrideMimeType('text/plain; charset=x-user-defined');
    request.send();
    if (request.status === 200) {
      var text = request.responseText;
      var bytes = new Uint8Array(text.length);
      for (var i = 0; i < text.length; i++) {
        bytes[i] = text.charCodeAt(i) & 255;
      }
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return bytes;
    }
    throw new MissingResourceException(resPath);
  }
  function TestJsResourceReader() {
  }
  protoOf(TestJsResourceReader).wez = function (path, $completion) {
    return readByteArray(this, path);
  };
  var TestJsResourceReader_instance;
  function TestJsResourceReader_getInstance() {
    return TestJsResourceReader_instance;
  }
  function readAsBlob($this, path, $completion) {
    var tmp = new $readAsBlobCOROUTINE$($this, path, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function asByteArray($this, $receiver, $completion) {
    var tmp = new $asByteArrayCOROUTINE$($this, $receiver, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function DefaultJsResourceReader$readAsBlob$slambda($resPath, resultContinuation) {
    this.gf3_1 = $resPath;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultJsResourceReader$readAsBlob$slambda).if3 = function (it, $completion) {
    var tmp = this.jf3(it, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(DefaultJsResourceReader$readAsBlob$slambda).e9 = function (p1, $completion) {
    return this.if3((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultJsResourceReader$readAsBlob$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            var this_0 = window.fetch(this.gf3_1);
            suspendResult = await_0(this_0, this);
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
  protoOf(DefaultJsResourceReader$readAsBlob$slambda).jf3 = function (it, completion) {
    var i = new DefaultJsResourceReader$readAsBlob$slambda(this.gf3_1, completion);
    i.hf3_1 = it;
    return i;
  };
  function DefaultJsResourceReader$readAsBlob$slambda_0($resPath, resultContinuation) {
    var i = new DefaultJsResourceReader$readAsBlob$slambda($resPath, resultContinuation);
    var l = function (it, $completion) {
      return i.if3(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $readCOROUTINE$(_this__u8e3s4, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sf3_1 = _this__u8e3s4;
    this.tf3_1 = path;
  }
  protoOf($readCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            this.m8_1 = 1;
            suspendResult = readAsBlob(this.sf3_1, this.tf3_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.m8_1 = 2;
            suspendResult = asByteArray(this.sf3_1, ARGUMENT, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function $readAsBlobCOROUTINE$(_this__u8e3s4, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.lf2_1 = _this__u8e3s4;
    this.mf2_1 = path;
  }
  protoOf($readAsBlobCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            this.nf2_1 = WebResourcesConfiguration_getInstance().cf2_1(this.mf2_1);
            this.m8_1 = 1;
            var tmp_0 = ResourceWebCache_getInstance();
            suspendResult = tmp_0.zf3(this.nf2_1, DefaultJsResourceReader$readAsBlob$slambda_0(this.nf2_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            if (!response.ok) {
              throw new MissingResourceException(this.nf2_1);
            }

            this.m8_1 = 2;
            suspendResult = await_0(response.blob(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function $asByteArrayCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.wf2_1 = _this__u8e3s4;
    this.xf2_1 = _this__u8e3s4_0;
  }
  protoOf($asByteArrayCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            var tmp_0 = this.xf2_1.arrayBuffer();
            var buffer = tmp_0 instanceof Promise ? tmp_0 : THROW_CCE();
            this.m8_1 = 1;
            suspendResult = await_0(buffer, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new Int8Array(ARGUMENT);
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
  function DefaultJsResourceReader() {
  }
  protoOf(DefaultJsResourceReader).wez = function (path, $completion) {
    var tmp = new $readCOROUTINE$(this, path, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  var DefaultJsResourceReader_instance;
  function DefaultJsResourceReader_getInstance() {
    return DefaultJsResourceReader_instance;
  }
  var org_jetbrains_compose_resources_vector_xmldom_ElementImpl$stable;
  function ElementImpl(element) {
    NodeImpl.call(this, element);
    this.ef4_1 = element;
  }
  protoOf(ElementImpl).lf1 = function () {
    return this.ef4_1.localName;
  };
  protoOf(ElementImpl).kf1 = function () {
    var tmp0_elvis_lhs = this.ef4_1.namespaceURI;
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(ElementImpl).hf1 = function (nameSpaceURI, localName) {
    var tmp0_elvis_lhs = this.ef4_1.getAttributeNS(nameSpaceURI, localName);
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(ElementImpl).mf1 = function (name) {
    var tmp0_elvis_lhs = this.ef4_1.getAttribute(name);
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  var org_jetbrains_compose_resources_vector_xmldom_NodeImpl$stable;
  function NodeImpl$childNodes$3$1(this$0) {
    this.kf4_1 = this$0;
    this.jf4_1 = this$0.ff4_1.childNodes.length;
  }
  protoOf(NodeImpl$childNodes$3$1).bf2 = function (i) {
    var tmp0_elvis_lhs = this.kf4_1.ff4_1.childNodes.item(i);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IndexOutOfBoundsException_init_$Create$('no child node accessible at index=' + i);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var child = tmp;
    var tmp_0;
    if (child instanceof Element) {
      tmp_0 = new ElementImpl(child);
    } else {
      tmp_0 = new NodeImpl(child);
    }
    return tmp_0;
  };
  protoOf(NodeImpl$childNodes$3$1).a = function () {
    return this.jf4_1;
  };
  function NodeImpl$childNodes$delegate$lambda(this$0) {
    return function () {
      return new NodeImpl$childNodes$3$1(this$0);
    };
  }
  function NodeImpl$_get_childNodes_$ref_tsfx09() {
    return function (p0) {
      return p0.af2();
    };
  }
  function NodeImpl(n) {
    this.ff4_1 = n;
    this.gf4_1 = '';
    this.hf4_1 = '';
    var tmp = this;
    tmp.if4_1 = lazy(NodeImpl$childNodes$delegate$lambda(this));
  }
  protoOf(NodeImpl).if1 = function () {
    return this.ff4_1.nodeName;
  };
  protoOf(NodeImpl).lf1 = function () {
    return this.gf4_1;
  };
  protoOf(NodeImpl).kf1 = function () {
    return this.hf4_1;
  };
  protoOf(NodeImpl).af2 = function () {
    var tmp0 = this.if4_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childNodes', 1, tmp, NodeImpl$_get_childNodes_$ref_tsfx09(), null);
    return tmp0.x1();
  };
  protoOf(NodeImpl).jf1 = function (namespaceURI) {
    var tmp0_elvis_lhs = this.ff4_1.lookupPrefix(namespaceURI);
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  var org_jetbrains_compose_resources_DrawCache$stable;
  function clear($this, $receiver) {
    $receiver.v4u(Companion_getInstance_4().m4h_1, VOID, VOID, VOID, VOID, VOID, Companion_getInstance_5().r4f_1);
  }
  function DrawCache() {
    this.lf4_1 = null;
    this.mf4_1 = null;
    this.nf4_1 = null;
    this.of4_1 = LayoutDirection_Ltr_getInstance();
    this.pf4_1 = Companion_getInstance_6().c3s_1;
    this.qf4_1 = Companion_getInstance_7().z4l_1;
    this.rf4_1 = new CanvasDrawScope();
  }
  protoOf(DrawCache).z6o = function (config, size, density, layoutDirection, block) {
    this.nf4_1 = density;
    this.of4_1 = layoutDirection;
    var targetImage = this.lf4_1;
    var targetCanvas = this.mf4_1;
    var tmp;
    var tmp_0;
    var tmp_1;
    if (targetImage == null || targetCanvas == null) {
      tmp_1 = true;
    } else {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(size);
      tmp_1 = convertToInt(shiftRight(value, 32)) > targetImage.h3q();
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(size);
      tmp_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0))) > targetImage.i3q();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !(this.qf4_1 === config);
    }
    if (tmp) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value_1 = _IntSize___get_packedValue__impl__uho7jf(size);
      var tmp_2 = convertToInt(shiftRight(value_1, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_2 = _IntSize___get_packedValue__impl__uho7jf(size);
      var tmp$ret$6 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      targetImage = ImageBitmap(tmp_2, tmp$ret$6, config);
      targetCanvas = Canvas(targetImage);
      this.lf4_1 = targetImage;
      this.mf4_1 = targetCanvas;
      this.qf4_1 = config;
    }
    this.pf4_1 = size;
    var tmp0 = this.rf4_1;
    var tmp6 = targetCanvas;
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw' call
    var size_0 = toSize(size);
    var _destruct__k2r9zo = tmp0.e4t_1;
    var prevDensity = _destruct__k2r9zo.de();
    var prevLayoutDirection = _destruct__k2r9zo.ee();
    var prevCanvas = _destruct__k2r9zo.g4u();
    var prevSize = _destruct__k2r9zo.h4u();
    // Inline function 'kotlin.apply' call
    var this_0 = tmp0.e4t_1;
    this_0.c4u_1 = density;
    this_0.d4u_1 = layoutDirection;
    this_0.e4u_1 = tmp6;
    this_0.f4u_1 = size_0;
    tmp6.d4j();
    clear(this, tmp0);
    block(tmp0);
    tmp6.e4j();
    // Inline function 'kotlin.apply' call
    var this_1 = tmp0.e4t_1;
    this_1.c4u_1 = prevDensity;
    this_1.d4u_1 = prevLayoutDirection;
    this_1.e4u_1 = prevCanvas;
    this_1.f4u_1 = prevSize;
    targetImage.f53();
  };
  protoOf(DrawCache).a6p = function (target, alpha, colorFilter) {
    var targetImage = this.lf4_1;
    // Inline function 'kotlin.check' call
    if (!!(targetImage == null)) {
      var message = 'drawCachedImage must be invoked first before attempting to draw the result into another destination';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    target.x4u(targetImage, VOID, this.pf4_1, VOID, VOID, alpha, VOID, colorFilter);
  };
  var org_jetbrains_compose_resources_SvgElement$stable;
  function toSvgPainter(_this__u8e3s4, density) {
    return new SvgPainter(_this__u8e3s4.sf4_1, density);
  }
  function SvgElement(svgdom) {
    this.sf4_1 = svgdom;
  }
  function toSvgElement(_this__u8e3s4) {
    return new SvgElement(SVGDOM_init_$Create$(Companion_getInstance_8().e3x(_this__u8e3s4)));
  }
  function toImageBitmap(_this__u8e3s4, resourceDensity, targetDensity) {
    var image = Companion_getInstance_9().k40(_this__u8e3s4);
    var targetImage;
    if (resourceDensity > targetDensity) {
      var scale = targetDensity / resourceDensity;
      var targetH = image.i3q() * scale;
      var targetW = image.h3q() * scale;
      var srcRect = Companion_instance_1.e44(image.h3q(), image.i3q());
      var dstRect = Companion_instance_1.e44(targetW, targetH);
      // Inline function 'kotlin.run' call
      var $this$run = Companion_getInstance_10().y44(numberToInt(targetW), numberToInt(targetH));
      // Inline function 'kotlin.apply' call
      var this_0 = Paint_init_$Create$();
      this_0.c41(true);
      var paint = this_0;
      $this$run.d45().q3v(image, srcRect, dstRect, Companion_getInstance_11().i44_1, paint, true);
      targetImage = $this$run.e45();
    } else {
      targetImage = image;
    }
    return toComposeImageBitmap(targetImage);
  }
  function get_currentOrPreview(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-193451530, $changed, -1, 'org.jetbrains.compose.resources.<get-currentOrPreview> (ResourceReader.skiko.kt:6)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g21(_this__u8e3s4);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0;
  }
  var org_jetbrains_compose_resources_SvgPainter$stable;
  function drawSvg($this, $receiver, size) {
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var canvas = $receiver.t4u().d45();
    var tmp0_safe_receiver = $this.bf5_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Size___get_packedValue__impl__7rlt1o(size);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      var tmp$ret$2 = floatFromBits(bits);
      tmp0_safe_receiver.w4b(new SVGLength(tmp$ret$2, SVGLengthUnit_PX_getInstance()));
    }
    var tmp1_safe_receiver = $this.bf5_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o(size);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      var tmp$ret$6 = floatFromBits(bits_0);
      tmp1_safe_receiver.x4b(new SVGLength(tmp$ret$6, SVGLengthUnit_PX_getInstance()));
    }
    var tmp2_safe_receiver = $this.bf5_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.y4b(SVGPreserveAspectRatio_init_$Create$(SVGPreserveAspectRatioAlign_NONE_getInstance()));
    }
    $this.zf4_1.h4b(get_nativeCanvas(canvas));
  }
  function SvgPainter$onDraw$lambda(this$0) {
    return function ($this$drawCachedImage) {
      drawSvg(this$0, $this$drawCachedImage, $this$drawCachedImage.r3p());
      return Unit_instance;
    };
  }
  function SvgPainter(dom, density) {
    Painter.call(this);
    this.zf4_1 = dom;
    this.af5_1 = density;
    this.bf5_1 = this.zf4_1.g4b();
    var tmp = this;
    // Inline function 'kotlin.run' call
    var tmp0_safe_receiver = this.bf5_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h3q();
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.l4b(SVGLengthUnit_PX_getInstance());
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.j4b_1;
    var width = tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs;
    var tmp4_safe_receiver = this.bf5_1;
    var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.i3q();
    var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.l4b(SVGLengthUnit_PX_getInstance());
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.j4b_1;
    var height = tmp7_elvis_lhs == null ? 0.0 : tmp7_elvis_lhs;
    var tmp_0;
    if (width === 0.0 && height === 0.0) {
      tmp_0 = Companion_getInstance_12().k3q_1;
    } else {
      // Inline function 'androidx.compose.ui.geometry.Size' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var v1 = fromInt(toRawBits(width));
      var v2 = fromInt(toRawBits(height));
      var tmp$ret$3 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      tmp_0 = _Size___init__impl__aywn0g(tmp$ret$3);
    }
    tmp.cf5_1 = tmp_0;
    var tmp_1;
    var tmp1_safe_receiver_0 = this.bf5_1;
    if ((tmp1_safe_receiver_0 == null ? null : tmp1_safe_receiver_0.a4c()) == null) {
      // Inline function 'androidx.compose.ui.geometry.isSpecified' call
      var this_0 = this.cf5_1;
      tmp_1 = !equalsLong(_Size___get_packedValue__impl__7rlt1o(this_0), new Long(2143289344, 2143289344));
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp0_safe_receiver_0 = this.bf5_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        var tmp_2 = Companion_instance_1;
        // Inline function 'androidx.compose.ui.geometry.Size.width' call
        var this_1 = this.cf5_1;
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value = _Size___get_packedValue__impl__7rlt1o(this_1);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits = convertToInt(shiftRight(value, 32));
        var tmp_3 = floatFromBits(bits);
        // Inline function 'androidx.compose.ui.geometry.Size.height' call
        var this_2 = this.cf5_1;
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_0 = _Size___get_packedValue__impl__7rlt1o(this_2);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
        var tmp$ret$9 = floatFromBits(bits_0);
        tmp0_safe_receiver_0.z4b(tmp_2.f44(0.0, 0.0, tmp_3, tmp$ret$9));
      }
    }
    this.df5_1 = Companion_getInstance_12().k3q_1;
    this.ef5_1 = 1.0;
    this.ff5_1 = null;
    this.gf5_1 = new DrawCache();
  }
  protoOf(SvgPainter).t4x = function () {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var this_0 = this.cf5_1;
    if (!equalsLong(_Size___get_packedValue__impl__7rlt1o(this_0), new Long(2143289344, 2143289344))) {
      tmp = Size__times_impl_fnp4nc(this.cf5_1, this.af5_1.t3q());
    } else {
      tmp = Companion_getInstance_12().k3q_1;
    }
    return tmp;
  };
  protoOf(SvgPainter).u4x = function (alpha) {
    this.ef5_1 = alpha;
    return true;
  };
  protoOf(SvgPainter).v4x = function (colorFilter) {
    this.ff5_1 = colorFilter;
    return true;
  };
  protoOf(SvgPainter).s4x = function (_this__u8e3s4) {
    if (!equals(this.df5_1, _this__u8e3s4.r3p())) {
      var tmp = Companion_getInstance_7().z4l_1;
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      var this_0 = _this__u8e3s4.r3p();
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Size___get_packedValue__impl__7rlt1o(this_0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.math.ceil' call
      var x = floatFromBits(bits);
      var tmp$ret$4 = Math.ceil(x);
      var tmp0 = numberToInt(tmp$ret$4);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      var this_1 = _this__u8e3s4.r3p();
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.math.ceil' call
      var x_0 = floatFromBits(bits_0);
      var tmp$ret$9 = Math.ceil(x_0);
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = numberToInt(tmp$ret$9);
      var tmp$ret$11 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp_0 = _IntSize___init__impl__emcjft(tmp$ret$11);
      var tmp_1 = _this__u8e3s4.p4u();
      this.gf5_1.z6o(tmp, tmp_0, _this__u8e3s4, tmp_1, SvgPainter$onDraw$lambda(this));
    }
    this.gf5_1.a6p(_this__u8e3s4, this.ef5_1, this.ff5_1);
  };
  var org_jetbrains_compose_resources_WebResourcesConfiguration$stable;
  function WebResourcesConfiguration$getResourcePath$lambda(it) {
    return './' + it;
  }
  function WebResourcesConfiguration() {
    WebResourcesConfiguration_instance = this;
    var tmp = this;
    tmp.cf2_1 = WebResourcesConfiguration$getResourcePath$lambda;
  }
  var WebResourcesConfiguration_instance;
  function WebResourcesConfiguration_getInstance() {
    if (WebResourcesConfiguration_instance == null)
      new WebResourcesConfiguration();
    return WebResourcesConfiguration_instance;
  }
  function rememberResourceState(key1, key2, key3, getDefault, block, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(1947629696, $changed, -1, 'org.jetbrains.compose.resources.rememberResourceState (ResourceState.web.kt:52)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalComposeEnvironment();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g21(this_0);
    sourceInformationMarkerEnd($composer_1);
    var environment = tmp0.hex($composer_0, 0);
    // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
    var getContext = null;
    var $composer_2 = $composer_0;
    sourceInformationMarkerStart($composer_2, 773894976, 'CC(rememberCoroutineScope)600@27430L68:Effects.kt#9igjgp');
    if (!((1 & 1) === 0)) {
      getContext = rememberResourceState$lambda;
    }
    var composer = $composer_2;
    sourceInformationMarkerStart($composer_2, 683736516, 'CC(remember):Effects.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_2.u20();
    var tmp;
    if (false || it === Companion_getInstance().s1z_1) {
      var value = createCompositionCoroutineScope(getContext(), composer);
      $composer_2.v20(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp1_group = tmp;
    sourceInformationMarkerEnd($composer_2);
    sourceInformationMarkerEnd($composer_2);
    var scope = tmp1_group;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!(!!($composer_0.w20(key1) | $composer_0.w20(key2)) | $composer_0.w20(key3)) | $composer_0.w20(environment));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.u20();
    var tmp_0;
    if (invalid || it_0 === Companion_getInstance().s1z_1) {
      var mutableState = mutableStateOf(getDefault());
      var tmp_1 = CoroutineStart_UNDISPATCHED_getInstance();
      launch(scope, VOID, tmp_1, rememberResourceState$slambda_0(mutableState, block, environment, null));
      var value_0 = mutableState;
      $composer_0.v20(value_0);
      tmp_0 = value_0;
    } else {
      tmp_0 = it_0;
    }
    var tmp0_0 = tmp_0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0_0;
  }
  function rememberResourceState$lambda() {
    return EmptyCoroutineContext_getInstance();
  }
  function rememberResourceState$slambda($mutableState, $block, $environment, resultContinuation) {
    this.pf5_1 = $mutableState;
    this.qf5_1 = $block;
    this.rf5_1 = $environment;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberResourceState$slambda).b1m = function ($this$launch, $completion) {
    var tmp = this.c1m($this$launch, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(rememberResourceState$slambda).e9 = function (p1, $completion) {
    return this.b1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberResourceState$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.qf5_1(this.rf5_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.pf5_1.k1k(ARGUMENT);
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
  protoOf(rememberResourceState$slambda).c1m = function ($this$launch, completion) {
    var i = new rememberResourceState$slambda(this.pf5_1, this.qf5_1, this.rf5_1, completion);
    i.sf5_1 = $this$launch;
    return i;
  };
  function rememberResourceState$slambda_0($mutableState, $block, $environment, resultContinuation) {
    var i = new rememberResourceState$slambda($mutableState, $block, $environment, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var org_jetbrains_compose_resources_ResourceWebCache$stable;
  function _get_supportsCacheApi__uddvv5($this) {
    var tmp0 = $this.xf3_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('supportsCacheApi', 1, tmp, ResourceWebCache$_get_supportsCacheApi_$ref_d8lbja(), null);
    return tmp0.x1();
  }
  function isNewSession($this) {
    return !$this.yf3_1;
  }
  function ResourceWebCache$supportsCacheApi$delegate$lambda() {
    return supportsCacheApi() && isCacheableProtocol();
  }
  function ResourceWebCache$_get_supportsCacheApi_$ref_d8lbja() {
    return function (p0) {
      return _get_supportsCacheApi__uddvv5(p0);
    };
  }
  function $loadCOROUTINE$(_this__u8e3s4, path, onNoCacheHit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.bf6_1 = _this__u8e3s4;
    this.cf6_1 = path;
    this.df6_1 = onNoCacheHit;
  }
  protoOf($loadCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 20;
            if (!_get_supportsCacheApi__uddvv5(this.bf6_1)) {
              this.m8_1 = 19;
              suspendResult = this.df6_1(this.cf6_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 1;
              continue $sm;
            }

          case 1:
            if (isNewSession(this.bf6_1)) {
              this.ff6_1 = this.bf6_1.wf3_1;
              this.ef6_1 = null;
              this.m8_1 = 2;
              suspendResult = this.ff6_1.i1u(this.ef6_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 7;
              continue $sm;
            }

          case 2:
            this.mf6_1 = Unit_instance;
            this.m8_1 = 3;
            continue $sm;
          case 3:
            this.n8_1 = 18;
            if (isNewSession(ResourceWebCache_getInstance())) {
              ResourceWebCache_getInstance().yf3_1 = true;
              this.m8_1 = 4;
              suspendResult = ResourceWebCache_getInstance().nf6(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 5;
              continue $sm;
            }

          case 4:
            this.m8_1 = 5;
            continue $sm;
          case 5:
            this.mf6_1 = Unit_instance;
            this.n8_1 = 20;
            this.m8_1 = 6;
            continue $sm;
          case 6:
            this.mf6_1;
            this.n8_1 = 20;
            this.ff6_1.k1u(this.ef6_1);
            this.m8_1 = 7;
            continue $sm;
          case 7:
            var tmp0 = this.bf6_1.vf3_1;
            var key = this.cf6_1;
            var value = tmp0.g2(key);
            var tmp_0;
            if (value == null) {
              var answer = Mutex();
              tmp0.y1(key, answer);
              tmp_0 = answer;
            } else {
              tmp_0 = value;
            }

            var mutex = tmp_0;
            this.hf6_1 = mutex;
            this.gf6_1 = null;
            this.m8_1 = 8;
            suspendResult = this.hf6_1.i1u(this.gf6_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.if6_1 = Unit_instance;
            this.m8_1 = 9;
            continue $sm;
          case 9:
            this.n8_1 = 17;
            this.m8_1 = 10;
            suspendResult = await_1(window.caches.open('compose_web_resources_cache'), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            this.lf6_1 = suspendResult;
            this.m8_1 = 11;
            var cacheName = get_undefined();
            var o = {};
            o['ignoreSearch'] = false;
            o['ignoreMethod'] = false;
            o['ignoreVary'] = false;
            o['cacheName'] = cacheName;
            var tmp_1 = this.lf6_1.match(this.cf6_1, (!(o == null) ? !(o == null) : false) ? o : THROW_CCE());
            suspendResult = await_1(tmp_1 instanceof Promise ? tmp_1 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            var response = suspendResult;
            var tmp1_elvis_lhs = response == null ? null : response.clone();
            if (tmp1_elvis_lhs == null) {
              this.m8_1 = 12;
              suspendResult = this.df6_1(this.cf6_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.jf6_1 = tmp1_elvis_lhs;
              this.m8_1 = 15;
              continue $sm;
            }

          case 12:
            this.kf6_1 = suspendResult;
            var it = this.kf6_1;
            if (it.ok) {
              this.m8_1 = 13;
              suspendResult = await_1(this.lf6_1.put(this.cf6_1, it.clone()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 14;
              continue $sm;
            }

          case 13:
            this.m8_1 = 14;
            continue $sm;
          case 14:
            this.jf6_1 = this.kf6_1;
            this.m8_1 = 15;
            continue $sm;
          case 15:
            this.if6_1 = this.jf6_1;
            this.n8_1 = 20;
            this.m8_1 = 16;
            continue $sm;
          case 16:
            var tmp_2 = this.if6_1;
            this.n8_1 = 20;
            this.hf6_1.k1u(this.gf6_1);
            ResourceWebCache_getInstance().vf3_1.z1(this.cf6_1);
            return tmp_2;
          case 17:
            this.n8_1 = 20;
            var t = this.p8_1;
            this.hf6_1.k1u(this.gf6_1);
            throw t;
          case 18:
            this.n8_1 = 20;
            var t_0 = this.p8_1;
            this.ff6_1.k1u(this.ef6_1);
            throw t_0;
          case 19:
            return suspendResult;
          case 20:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 20) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  function $resetCacheCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.wf6_1 = _this__u8e3s4;
  }
  protoOf($resetCacheCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = await_1(window.caches.delete('compose_web_resources_cache'), this);
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
  function ResourceWebCache() {
    ResourceWebCache_instance = this;
    this.uf3_1 = 'compose_web_resources_cache';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.vf3_1 = LinkedHashMap_init_$Create$();
    this.wf3_1 = Mutex();
    var tmp_0 = this;
    tmp_0.xf3_1 = lazy(ResourceWebCache$supportsCacheApi$delegate$lambda);
    this.yf3_1 = false;
  }
  protoOf(ResourceWebCache).zf3 = function (path, onNoCacheHit, $completion) {
    var tmp = new $loadCOROUTINE$(this, path, onNoCacheHit, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(ResourceWebCache).nf6 = function ($completion) {
    var tmp = new $resetCacheCOROUTINE$(this, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  var ResourceWebCache_instance;
  function ResourceWebCache_getInstance() {
    if (ResourceWebCache_instance == null)
      new ResourceWebCache();
    return ResourceWebCache_instance;
  }
  function supportsCacheApi() {
    return Boolean(window.caches);
  }
  function isCacheableProtocol() {
    return startsWith(window.location.protocol, 'http');
  }
  function await_1(_this__u8e3s4, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.t10();
    var tmp = await$lambda(cancellable);
    _this__u8e3s4.then(tmp, await$lambda_0(cancellable));
    return cancellable.xx();
  }
  function await$lambda($continuation) {
    return function (it) {
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      $continuation.x8(tmp$ret$0);
      return null;
    };
  }
  function await$lambda_0($continuation) {
    return function (it) {
      // Inline function 'kotlin.js.asJsException' call
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(it));
      this_0.x8(tmp$ret$2);
      return null;
    };
  }
  //region block: init
  org_jetbrains_compose_resources_FontResource$stable = 0;
  org_jetbrains_compose_resources_PluralStringResource$stable = 0;
  org_jetbrains_compose_resources_LanguageQualifier$stable = 0;
  org_jetbrains_compose_resources_RegionQualifier$stable = 0;
  Companion_instance_3 = new Companion();
  Companion_instance_4 = new Companion_0();
  org_jetbrains_compose_resources_Resource$stable = 0;
  org_jetbrains_compose_resources_ResourceItem$stable = 0;
  org_jetbrains_compose_resources_AsyncCache$stable = 8;
  org_jetbrains_compose_resources_ResourceCaches$stable = 8;
  org_jetbrains_compose_resources_StringArrayResource$stable = 0;
  org_jetbrains_compose_resources_StringResource$stable = 0;
  org_jetbrains_compose_resources_plural_PluralRuleParseException$stable = 8;
  org_jetbrains_compose_resources_plural_PluralRule_Condition_And$stable = 0;
  org_jetbrains_compose_resources_plural_PluralRule_Condition_Or$stable = 0;
  org_jetbrains_compose_resources_plural_PluralRule_Condition_Relation$stable = 8;
  org_jetbrains_compose_resources_plural_PluralRule$stable = 0;
  org_jetbrains_compose_resources_plural_PluralRuleList$stable = 8;
  org_jetbrains_compose_resources_vector_xmldom_MalformedXMLException$stable = 8;
  org_jetbrains_compose_resources_Intl_Locale$stable = 0;
  org_jetbrains_compose_resources_DefaultJsResourceReader$stable = 0;
  TestJsResourceReader_instance = new TestJsResourceReader();
  DefaultJsResourceReader_instance = new DefaultJsResourceReader();
  org_jetbrains_compose_resources_vector_xmldom_ElementImpl$stable = 8;
  org_jetbrains_compose_resources_vector_xmldom_NodeImpl$stable = 8;
  org_jetbrains_compose_resources_DrawCache$stable = 8;
  org_jetbrains_compose_resources_SvgElement$stable = 8;
  org_jetbrains_compose_resources_SvgPainter$stable = 8;
  org_jetbrains_compose_resources_WebResourcesConfiguration$stable = 8;
  org_jetbrains_compose_resources_ResourceWebCache$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DrawableResource;
  _.$_$.b = ResourceItem;
  _.$_$.c = painterResource;
  //endregion
  return _;
}));

//# sourceMappingURL=components-resources-library.js.map
