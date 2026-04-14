(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-collection-collection.js', './compose-multiplatform-core-compose-ui-ui-util.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./skiko-kjs.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui-util'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['skiko-kjs']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_collection_collection, kotlin_org_jetbrains_compose_ui_ui_util, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var VOID = kotlin_kotlin.$_$.c;
  var _FloatFloatPair___init__impl__2q1dd3 = kotlin_androidx_collection_collection.$_$.l1;
  var isNaN_0 = kotlin_kotlin.$_$.wd;
  var fastCbrt = kotlin_org_jetbrains_compose_ui_ui_util.$_$.a;
  var Unit_instance = kotlin_kotlin.$_$.n;
  var protoOf = kotlin_kotlin.$_$.fa;
  var initMetadataForCompanion = kotlin_kotlin.$_$.o9;
  var initMetadataForClass = kotlin_kotlin.$_$.n9;
  var equals = kotlin_kotlin.$_$.f9;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var Size__isEmpty_impl_o9ye97 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var _Offset___get_packedValue__impl__xh2k8q = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.z;
  var shiftRight = kotlin_kotlin.$_$.q8;
  var convertToInt = kotlin_kotlin.$_$.e8;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.g;
  var floatFromBits = kotlin_kotlin.$_$.g9;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var Long = kotlin_kotlin.$_$.gd;
  var bitwiseAnd = kotlin_kotlin.$_$.a8;
  var toRawBits = kotlin_kotlin.$_$.ke;
  var fromInt = kotlin_kotlin.$_$.i8;
  var shiftLeft = kotlin_kotlin.$_$.o8;
  var bitwiseOr = kotlin_kotlin.$_$.b8;
  var _Offset___init__impl__c168vi = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t;
  var hashCode = kotlin_kotlin.$_$.m9;
  var Offset__hashCode_impl_hbql41 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x;
  var bitwiseXor = kotlin_kotlin.$_$.c8;
  var subtract = kotlin_kotlin.$_$.r8;
  var equalsLong = kotlin_kotlin.$_$.h8;
  var Offset__toString_impl_4ffbou = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c1;
  var toString = kotlin_kotlin.$_$.ha;
  var toString_0 = kotlin_kotlin.$_$.me;
  var get_center = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var _Size___get_minDimension__impl__4iso0r = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var getNumberHashCode = kotlin_kotlin.$_$.j9;
  var initMetadataForInterface = kotlin_kotlin.$_$.r9;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.a3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.b3;
  var shiftRightUnsigned = kotlin_kotlin.$_$.p8;
  var convertToShort = kotlin_kotlin.$_$.f8;
  var ulongToDouble = kotlin_kotlin.$_$.qe;
  var ULong__hashCode_impl_6hv2lb = kotlin_kotlin.$_$.c3;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.c;
  var numberToInt = kotlin_kotlin.$_$.da;
  var toShort = kotlin_kotlin.$_$.ga;
  var objectCreate = kotlin_kotlin.$_$.ea;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var trimIndent = kotlin_kotlin.$_$.rc;
  var get_isSimple = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ae;
  var _CornerRadius___get_packedValue__impl__okv4jq = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s;
  var _CornerRadius___init__impl__ojmabe = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r;
  var _Size___init__impl__aywn0g = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var Enum = kotlin_kotlin.$_$.ad;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c;
  var toRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m;
  var charSequenceLength = kotlin_kotlin.$_$.a9;
  var getKClassFromExpression = kotlin_kotlin.$_$.bb;
  var THROW_CCE = kotlin_kotlin.$_$.ld;
  var getStringHashCode = kotlin_kotlin.$_$.l9;
  var withSign = kotlin_kotlin.$_$.oa;
  var compareTo = kotlin_kotlin.$_$.b9;
  var FunctionAdapter = kotlin_kotlin.$_$.t8;
  var isInterface = kotlin_kotlin.$_$.w9;
  var coerceAtLeast = kotlin_kotlin.$_$.pa;
  var initMetadataForObject = kotlin_kotlin.$_$.t9;
  var mutableIntObjectMapOf = kotlin_androidx_collection_collection.$_$.z;
  var arrayCopy = kotlin_kotlin.$_$.y3;
  var coerceIn = kotlin_kotlin.$_$.ua;
  var contentEquals = kotlin_kotlin.$_$.j4;
  var contentHashCode = kotlin_kotlin.$_$.l4;
  var toBits = kotlin_kotlin.$_$.ie;
  var isNaN_1 = kotlin_kotlin.$_$.xd;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var Size__toString_impl_o87ni8 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var toPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f;
  var toPx_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g;
  var roundToPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c;
  var toDp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e;
  var toDp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d;
  var toDp_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var _IntSize___init__impl__emcjft = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n;
  var CornerRadius = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a;
  var Density_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var mutableScatterSetOf = kotlin_androidx_collection_collection.$_$.j1;
  var ensureNotNull = kotlin_kotlin.$_$.ud;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e3;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a3;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b3;
  var roundToInt = kotlin_kotlin.$_$.ka;
  var toSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m1;
  var IntOffset__hashCode_impl_w5rrxs = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var IntSize__hashCode_impl_gm9mta = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d3;
  var IntOffset__toString_impl_h46d8h = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z2;
  var IntSize__toString_impl_54w9zl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f3;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var charCodeAt = kotlin_kotlin.$_$.y8;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.p2;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.r2;
  var numberToChar = kotlin_kotlin.$_$.ba;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.s2;
  var multiply = kotlin_kotlin.$_$.l8;
  var add = kotlin_kotlin.$_$.z7;
  var ulongCompare = kotlin_kotlin.$_$.pe;
  var toNumber = kotlin_kotlin.$_$.s8;
  var substring = kotlin_kotlin.$_$.jc;
  var toDouble = kotlin_kotlin.$_$.kc;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.e3;
  var countLeadingZeroBits = kotlin_kotlin.$_$.qd;
  var compare = kotlin_kotlin.$_$.d8;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.f;
  var doubleFromBits = kotlin_kotlin.$_$.e9;
  var longArrayOf = kotlin_kotlin.$_$.y9;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.d3;
  var getBooleanHashCode = kotlin_kotlin.$_$.h9;
  var toString_1 = kotlin_kotlin.$_$.t2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.q2;
  var emptyList = kotlin_kotlin.$_$.u4;
  var BlendMode_SRC_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u2;
  var BlendMode_LUMINOSITY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j2;
  var BlendMode_COLOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x1;
  var BlendMode_SATURATION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o2;
  var BlendMode_HUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h2;
  var BlendMode_MULTIPLY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l2;
  var BlendMode_EXCLUSION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f2;
  var BlendMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z1;
  var BlendMode_SOFT_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q2;
  var BlendMode_HARD_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g2;
  var BlendMode_COLOR_BURN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v1;
  var BlendMode_COLOR_DODGE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w1;
  var BlendMode_LIGHTEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i2;
  var BlendMode_DARKEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y1;
  var BlendMode_OVERLAY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m2;
  var BlendMode_SCREEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p2;
  var BlendMode_MODULATE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k2;
  var BlendMode_PLUS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n2;
  var BlendMode_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w2;
  var BlendMode_DST_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a2;
  var BlendMode_SRC_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r2;
  var BlendMode_DST_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c2;
  var BlendMode_SRC_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t2;
  var BlendMode_DST_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b2;
  var BlendMode_SRC_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s2;
  var BlendMode_DST_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d2;
  var BlendMode_DST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e2;
  var BlendMode_SRC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v2;
  var BlendMode_CLEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u1;
  var Matrix33 = kotlin_org_jetbrains_skiko_skiko.$_$.s5;
  var Rect_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Companion_instance = kotlin_org_jetbrains_skiko_skiko.$_$.o;
  var Companion_instance_0 = kotlin_org_jetbrains_skiko_skiko.$_$.n;
  var Canvas_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.s4;
  var Companion_getInstance_3 = kotlin_org_jetbrains_skiko_skiko.$_$.k;
  var ClipMode_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y2;
  var ClipMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x2;
  var Matrix44 = kotlin_org_jetbrains_skiko_skiko.$_$.t5;
  var FilterMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f3;
  var MipmapMode_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u3;
  var FilterMipmap = kotlin_org_jetbrains_skiko_skiko.$_$.o5;
  var CubicResampler = kotlin_org_jetbrains_skiko_skiko.$_$.n5;
  var FilterMode_LINEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e3;
  var MipmapMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t3;
  var PaintMode_FILL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v3;
  var PaintMode_STROKE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w3;
  var PaintStrokeCap_BUTT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x3;
  var PaintStrokeCap_SQUARE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z3;
  var PaintStrokeCap_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y3;
  var PaintStrokeJoin_MITER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b4;
  var PaintStrokeJoin_BEVEL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a4;
  var PaintStrokeJoin_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c4;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.w4;
  var coerceIn_0 = kotlin_kotlin.$_$.va;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.l2;
  var PathOp_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l4;
  var PathOp_REVERSE_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j4;
  var PathOp_UNION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k4;
  var PathOp_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i4;
  var PathOp_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h4;
  var Path_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.x4;
  var PathFillMode_WINDING_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g4;
  var PathFillMode_EVEN_ODD_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f4;
  var Companion_getInstance_4 = kotlin_org_jetbrains_skiko_skiko.$_$.l;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$_$.m;
  var PathDirection_COUNTER_CLOCKWISE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e4;
  var PathDirection_CLOCKWISE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d4;
  var PathMeasure_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.y4;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$_$.d;
  var RenderNodeContext_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.c5;
  var RenderNode_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.b5;
  var ColorAlphaType_OPAQUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z2;
  var ColorAlphaType_PREMUL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a3;
  var ColorInfo = kotlin_org_jetbrains_skiko_skiko.$_$.m5;
  var ImageInfo = kotlin_org_jetbrains_skiko_skiko.$_$.r5;
  var Bitmap_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.r4;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.f;
  var ColorType_RGBA_F16_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c3;
  var ColorType_RGB_565_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d3;
  var ColorType_ALPHA_8_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b3;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.e;
  var Companion_getInstance_9 = kotlin_org_jetbrains_skiko_skiko.$_$.q;
  var toFloatArray = kotlin_kotlin.$_$.u6;
  var GradientStyle = kotlin_org_jetbrains_skiko_skiko.$_$.q5;
  var FilterTileMode_CLAMP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g3;
  var FilterTileMode_DECAL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h3;
  var FilterTileMode_MIRROR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i3;
  var FilterTileMode_REPEAT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j3;
  var invert = kotlin_kotlin.$_$.j8;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var Point = kotlin_org_jetbrains_skiko_skiko.$_$.v5;
  var RoundRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.b;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(BlendMode, 'BlendMode');
  initMetadataForClass(Brush, 'Brush');
  initMetadataForClass(SolidColor, 'SolidColor', VOID, Brush);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ShaderBrush, 'ShaderBrush', VOID, Brush);
  initMetadataForClass(LinearGradient, 'LinearGradient', VOID, ShaderBrush);
  initMetadataForClass(RadialGradient, 'RadialGradient', VOID, ShaderBrush);
  initMetadataForClass(SweepGradient, 'SweepGradient', VOID, ShaderBrush);
  function clipRect(rect, clipOp) {
    return this.j4j(rect.n3p_1, rect.o3p_1, rect.p3p_1, rect.q3p_1, clipOp);
  }
  function clipRect$default(rect, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_14().m4j_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.i4j(rect, clipOp);
      tmp = Unit_instance;
    } else {
      clipRect(rect, clipOp);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function clipRect$default_0(left, top, right, bottom, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_14().m4j_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.j4j(left, top, right, bottom, clipOp);
      tmp = Unit_instance;
    } else {
      tmp = $super.j4j.call(this, left, top, right, bottom, new ClipOp(clipOp));
    }
    return tmp;
  }
  function clipPath$default(path, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_14().m4j_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.o4j(path, clipOp);
      tmp = Unit_instance;
    } else {
      tmp = $super.o4j.call(this, path, new ClipOp(clipOp));
    }
    return tmp;
  }
  initMetadataForInterface(Canvas, 'Canvas');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(ClipOp, 'ClipOp');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(Color, 'Color');
  initMetadataForInterface(ColorProducer, 'ColorProducer');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(ColorFilter, 'ColorFilter');
  initMetadataForClass(BlendModeColorFilter, 'BlendModeColorFilter', VOID, ColorFilter);
  initMetadataForCompanion(Companion_4);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(ImageBitmapConfig, 'ImageBitmapConfig');
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(Matrix, 'Matrix');
  initMetadataForClass(Outline, 'Outline');
  initMetadataForClass(Rectangle, 'Rectangle', VOID, Outline);
  initMetadataForClass(Rounded, 'Rounded', VOID, Outline);
  initMetadataForClass(Generic, 'Generic', VOID, Outline);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(Direction, 'Direction', VOID, Enum);
  function quadraticTo(x1, y1, x2, y2) {
    this.o4n(x1, y1, x2, y2);
  }
  function relativeQuadraticTo(dx1, dy1, dx2, dy2) {
    this.q4n(dx1, dy1, dx2, dy2);
  }
  function addRect$default(rect, direction, $super) {
    direction = direction === VOID ? Direction_CounterClockwise_getInstance() : direction;
    var tmp;
    if ($super === VOID) {
      this.u4n(rect, direction);
      tmp = Unit_instance;
    } else {
      tmp = $super.u4n.call(this, rect, direction);
    }
    return tmp;
  }
  function addRoundRect$default(roundRect, direction, $super) {
    direction = direction === VOID ? Direction_CounterClockwise_getInstance() : direction;
    var tmp;
    if ($super === VOID) {
      this.w4n(roundRect, direction);
      tmp = Unit_instance;
    } else {
      tmp = $super.w4n.call(this, roundRect, direction);
    }
    return tmp;
  }
  function addPath$default(path, offset, $super) {
    offset = offset === VOID ? Companion_getInstance_0().j3p_1 : offset;
    var tmp;
    if ($super === VOID) {
      this.x4n(path, offset);
      tmp = Unit_instance;
    } else {
      tmp = $super.x4n.call(this, path, new Offset(offset));
    }
    return tmp;
  }
  function rewind() {
    this.n2w();
  }
  initMetadataForInterface(Path, 'Path');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(PathFillType, 'PathFillType');
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(RectangleShape$1);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(Shadow, 'Shadow', Shadow);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(StrokeCap, 'StrokeCap');
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(StrokeJoin, 'StrokeJoin');
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(TileMode, 'TileMode');
  initMetadataForClass(Adaptation, 'Adaptation');
  initMetadataForClass(Adaptation$Companion$Bradford$1, VOID, VOID, Adaptation);
  initMetadataForClass(Adaptation$Companion$VonKries$1, VOID, VOID, Adaptation);
  initMetadataForClass(Adaptation$Companion$Ciecat02$1, VOID, VOID, Adaptation);
  initMetadataForCompanion(Companion_14);
  initMetadataForCompanion(Companion_15);
  initMetadataForCompanion(Companion_16);
  initMetadataForClass(ColorSpace, 'ColorSpace');
  initMetadataForInterface(DoubleFunction, 'DoubleFunction');
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForObject(ColorSpaces, 'ColorSpaces');
  initMetadataForClass(Connector, 'Connector');
  initMetadataForClass(Connector$Companion$identity$1, VOID, VOID, Connector);
  initMetadataForClass(RgbConnector, 'RgbConnector', VOID, Connector);
  initMetadataForCompanion(Companion_17);
  initMetadataForObject(Illuminant, 'Illuminant');
  initMetadataForCompanion(Companion_18);
  initMetadataForClass(Lab, 'Lab', VOID, ColorSpace);
  initMetadataForCompanion(Companion_19);
  initMetadataForClass(Oklab, 'Oklab', VOID, ColorSpace);
  initMetadataForCompanion(Companion_20);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForCompanion(Companion_21);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_7, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(Rgb, 'Rgb', VOID, ColorSpace);
  initMetadataForClass(TransferParameters, 'TransferParameters');
  initMetadataForClass(WhitePoint, 'WhitePoint');
  initMetadataForClass(Xyz, 'Xyz', VOID, ColorSpace);
  initMetadataForClass(DrawParams, 'DrawParams', DrawParams);
  function set_canvas(_) {
  }
  function get_canvas() {
    return EmptyCanvas_instance;
  }
  function set_layoutDirection(_) {
  }
  function get_layoutDirection() {
    return LayoutDirection_Ltr_getInstance();
  }
  function set_density(_) {
  }
  function get_density() {
    return get_DefaultDensity();
  }
  function set_graphicsLayer(_) {
  }
  function get_graphicsLayer() {
    return null;
  }
  initMetadataForInterface(DrawContext, 'DrawContext');
  initMetadataForClass(CanvasDrawScope$drawContext$1, VOID, VOID, VOID, [DrawContext]);
  function get_center_0() {
    return get_center(this.t4u().r3p());
  }
  function get_size() {
    return this.t4u().r3p();
  }
  function drawRect$default(brush, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance_0().j3p_1 : topLeft;
    size = size === VOID ? offsetSize(this, this.r3p(), topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().y4m_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.f4n(brush, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.f4n.call(this, brush, new Offset(topLeft), new Size(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawRect$default_0(color, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance_0().j3p_1 : topLeft;
    size = size === VOID ? offsetSize(this, this.r3p(), topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().y4m_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.c4n(color, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.c4n.call(this, new Color(color), new Offset(topLeft), new Size(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    this.x4u(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode);
  }
  function drawImage$default(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality, $super) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().u3r_1 : srcOffset;
    var tmp;
    if (srcSize === VOID) {
      var tmp0 = image.h3q();
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = image.i3q();
      var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      tmp = _IntSize___init__impl__emcjft(tmp$ret$1);
    } else {
      tmp = srcSize;
    }
    srcSize = tmp;
    dstOffset = dstOffset === VOID ? Companion_getInstance_1().u3r_1 : dstOffset;
    dstSize = dstSize === VOID ? srcSize : dstSize;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().y4m_1 : blendMode;
    filterQuality = filterQuality === VOID ? Companion_getInstance_35().z4m_1 : filterQuality;
    var tmp_0;
    if ($super === VOID) {
      this.w4u(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp_0 = Unit_instance;
    } else {
      drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp_0 = Unit_instance;
    }
    return tmp_0;
  }
  function drawRoundRect$default(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance_0().j3p_1 : topLeft;
    size = size === VOID ? offsetSize(this, this.r3p(), topLeft) : size;
    cornerRadius = cornerRadius === VOID ? Companion_getInstance_2().x3o_1 : cornerRadius;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().y4m_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.e4n(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.e4n.call(this, brush, new Offset(topLeft), new Size(size), new CornerRadius(cornerRadius), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawCircle$default(color, radius, center, alpha, style, colorFilter, blendMode, $super) {
    radius = radius === VOID ? _Size___get_minDimension__impl__4iso0r(this.r3p()) / 2.0 : radius;
    center = center === VOID ? this.d4v() : center;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().y4m_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.z4u(color, radius, center, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.z4u.call(this, new Color(color), radius, new Offset(center), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPath$default(path, color, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().y4m_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.a4n(path, color, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.a4n.call(this, path, new Color(color), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPath$default_0(path, brush, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().y4m_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.d4n(path, brush, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.d4n.call(this, path, brush, alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  initMetadataForInterface(DrawScope, 'DrawScope', VOID, VOID, [Density_0]);
  initMetadataForClass(CanvasDrawScope, 'CanvasDrawScope', CanvasDrawScope, VOID, [DrawScope]);
  function clipPath$default_0(path, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_14().m4j_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.o4j(path, clipOp);
      tmp = Unit_instance;
    } else {
      tmp = $super.o4j.call(this, path, new ClipOp(clipOp));
    }
    return tmp;
  }
  initMetadataForInterface(DrawTransform, 'DrawTransform');
  initMetadataForClass(asDrawTransform$1, VOID, VOID, VOID, [DrawTransform]);
  initMetadataForCompanion(Companion_22);
  initMetadataForCompanion(Companion_23);
  initMetadataForClass(DrawStyle, 'DrawStyle');
  initMetadataForClass(Stroke, 'Stroke', Stroke, DrawStyle);
  initMetadataForObject(Fill, 'Fill', VOID, DrawStyle);
  initMetadataForObject(EmptyCanvas, 'EmptyCanvas', VOID, VOID, [Canvas]);
  initMetadataForClass(ChildLayerDependenciesTracker, 'ChildLayerDependenciesTracker', ChildLayerDependenciesTracker);
  initMetadataForCompanion(Companion_24);
  initMetadataForClass(Painter, 'Painter');
  initMetadataForClass(BitmapPainter, 'BitmapPainter', VOID, Painter);
  initMetadataForClass(PathNode, 'PathNode');
  initMetadataForObject(Close, 'Close', VOID, PathNode);
  initMetadataForClass(RelativeMoveTo, 'RelativeMoveTo', VOID, PathNode);
  initMetadataForClass(MoveTo, 'MoveTo', VOID, PathNode);
  initMetadataForClass(RelativeLineTo, 'RelativeLineTo', VOID, PathNode);
  initMetadataForClass(LineTo, 'LineTo', VOID, PathNode);
  initMetadataForClass(RelativeHorizontalTo, 'RelativeHorizontalTo', VOID, PathNode);
  initMetadataForClass(HorizontalTo, 'HorizontalTo', VOID, PathNode);
  initMetadataForClass(RelativeVerticalTo, 'RelativeVerticalTo', VOID, PathNode);
  initMetadataForClass(VerticalTo, 'VerticalTo', VOID, PathNode);
  initMetadataForClass(RelativeCurveTo, 'RelativeCurveTo', VOID, PathNode);
  initMetadataForClass(CurveTo, 'CurveTo', VOID, PathNode);
  initMetadataForClass(RelativeReflectiveCurveTo, 'RelativeReflectiveCurveTo', VOID, PathNode);
  initMetadataForClass(ReflectiveCurveTo, 'ReflectiveCurveTo', VOID, PathNode);
  initMetadataForClass(RelativeQuadTo, 'RelativeQuadTo', VOID, PathNode);
  initMetadataForClass(QuadTo, 'QuadTo', VOID, PathNode);
  initMetadataForClass(RelativeReflectiveQuadTo, 'RelativeReflectiveQuadTo', VOID, PathNode);
  initMetadataForClass(ReflectiveQuadTo, 'ReflectiveQuadTo', VOID, PathNode);
  initMetadataForClass(RelativeArcTo, 'RelativeArcTo', VOID, PathNode);
  initMetadataForClass(ArcTo, 'ArcTo', VOID, PathNode);
  initMetadataForClass(PathParser, 'PathParser', PathParser);
  initMetadataForClass(SkiaBackedCanvas, 'SkiaBackedCanvas', VOID, VOID, [Canvas]);
  initMetadataForClass(SkiaBackedPaint, 'SkiaBackedPaint', SkiaBackedPaint);
  initMetadataForClass(SkiaBackedPath, 'SkiaBackedPath', SkiaBackedPath, VOID, [Path]);
  initMetadataForClass(SkiaBackedPathEffect, 'SkiaBackedPathEffect');
  initMetadataForClass(SkiaBackedPathMeasure, 'SkiaBackedPathMeasure', SkiaBackedPathMeasure);
  initMetadataForClass(SkiaGraphicsContext, 'SkiaGraphicsContext', SkiaGraphicsContext);
  initMetadataForClass(SkiaBackedImageBitmap, 'SkiaBackedImageBitmap');
  initMetadataForClass(TransformShader, 'TransformShader', TransformShader);
  initMetadataForClass(GraphicsLayer, 'GraphicsLayer', VOID, VOID, VOID, [0]);
  //endregion
  function computeCubicVerticalBounds(p0y, p1y, p2y, p3y, roots, index) {
    index = index === VOID ? 0 : index;
    var d0 = 3.0 * (p1y - p0y);
    var d1 = 3.0 * (p2y - p1y);
    var d2 = 3.0 * (p3y - p2y);
    var count = findQuadraticRoots(d0, d1, d2, roots, index);
    var dd0 = 2.0 * (d1 - d0);
    var dd1 = 2.0 * (d2 - d1);
    var tmp = count;
    // Inline function 'androidx.compose.ui.graphics.findLineRoot' call
    var index_0 = index + count | 0;
    count = tmp + writeValidRootInUnitRange(-dd0 / (dd1 - dd0), roots, index_0) | 0;
    // Inline function 'kotlin.math.min' call
    var minY = Math.min(p0y, p3y);
    // Inline function 'kotlin.math.max' call
    var maxY = Math.max(p0y, p3y);
    var inductionVariable = 0;
    var last = count;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = roots[i];
        var y = evaluateCubic_0(p0y, p1y, p2y, p3y, t);
        // Inline function 'kotlin.math.min' call
        var a = minY;
        minY = Math.min(a, y);
        // Inline function 'kotlin.math.max' call
        var a_0 = maxY;
        maxY = Math.max(a_0, y);
      }
       while (inductionVariable < last);
    return _FloatFloatPair___init__impl__2q1dd3(minY, maxY);
  }
  function findFirstCubicRoot(p0, p1, p2, p3) {
    var a = 3.0 * (p0 - 2.0 * p1 + p2);
    var b = 3.0 * (p1 - p0);
    var c = p0;
    var d = -p0 + 3.0 * (p1 - p2) + p3;
    // Inline function 'androidx.compose.ui.graphics.closeTo' call
    // Inline function 'kotlin.math.abs' call
    var x = d - 0.0;
    if (Math.abs(x) < 1.0E-7) {
      // Inline function 'androidx.compose.ui.graphics.closeTo' call
      // Inline function 'kotlin.math.abs' call
      var x_0 = a - 0.0;
      if (Math.abs(x_0) < 1.0E-7) {
        // Inline function 'androidx.compose.ui.graphics.closeTo' call
        // Inline function 'kotlin.math.abs' call
        var x_1 = b - 0.0;
        if (Math.abs(x_1) < 1.0E-7) {
          return NaN;
        }
        // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
        var r = -c / b;
        // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
        // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
        // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
        var this_0 = r < 0.0 ? 0.0 : r;
        var s = this_0 > 1.0 ? 1.0 : this_0;
        var tmp;
        // Inline function 'kotlin.math.abs' call
        var x_2 = s - r;
        if (Math.abs(x_2) > 1.05E-6) {
          tmp = NaN;
        } else {
          tmp = s;
        }
        return tmp;
      } else {
        // Inline function 'kotlin.math.sqrt' call
        var x_3 = b * b - 4.0 * a * c;
        var q = Math.sqrt(x_3);
        var a2 = 2.0 * a;
        // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
        var r_0 = (q - b) / a2;
        // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
        // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
        // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
        var this_1 = r_0 < 0.0 ? 0.0 : r_0;
        var s_0 = this_1 > 1.0 ? 1.0 : this_1;
        var tmp_0;
        // Inline function 'kotlin.math.abs' call
        var x_4 = s_0 - r_0;
        if (Math.abs(x_4) > 1.05E-6) {
          tmp_0 = NaN;
        } else {
          tmp_0 = s_0;
        }
        var root = tmp_0;
        if (!isNaN_0(root))
          return root;
        // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
        var r_1 = (-b - q) / a2;
        // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
        // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
        // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
        var this_2 = r_1 < 0.0 ? 0.0 : r_1;
        var s_1 = this_2 > 1.0 ? 1.0 : this_2;
        var tmp_1;
        // Inline function 'kotlin.math.abs' call
        var x_5 = s_1 - r_1;
        if (Math.abs(x_5) > 1.05E-6) {
          tmp_1 = NaN;
        } else {
          tmp_1 = s_1;
        }
        return tmp_1;
      }
    }
    a = a / d;
    b = b / d;
    c = c / d;
    var o3 = (3.0 * b - a * a) / 9.0;
    var q2 = (2.0 * a * a * a - 9.0 * a * b + 27.0 * c) / 54.0;
    var discriminant = q2 * q2 + o3 * o3 * o3;
    var a3 = a / 3.0;
    if (discriminant < 0.0) {
      var mp33 = -(o3 * o3 * o3);
      // Inline function 'kotlin.math.sqrt' call
      var r_2 = Math.sqrt(mp33);
      var t = -q2 / r_2;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var minimumValue = -1.0;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_3 = t < minimumValue ? minimumValue : t;
      var cosPhi = this_3 > 1.0 ? 1.0 : this_3;
      // Inline function 'kotlin.math.acos' call
      var phi = Math.acos(cosPhi);
      var t1 = 2.0 * fastCbrt(r_2);
      // Inline function 'kotlin.math.cos' call
      var x_6 = phi / 3.0;
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      var r_3 = t1 * Math.cos(x_6) - a3;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_4 = r_3 < 0.0 ? 0.0 : r_3;
      var s_2 = this_4 > 1.0 ? 1.0 : this_4;
      var tmp_2;
      // Inline function 'kotlin.math.abs' call
      var x_7 = s_2 - r_3;
      if (Math.abs(x_7) > 1.05E-6) {
        tmp_2 = NaN;
      } else {
        tmp_2 = s_2;
      }
      var root_0 = tmp_2;
      if (!isNaN_0(root_0))
        return root_0;
      // Inline function 'kotlin.math.cos' call
      var x_8 = (phi + 6.283185307179586) / 3.0;
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      var r_4 = t1 * Math.cos(x_8) - a3;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_5 = r_4 < 0.0 ? 0.0 : r_4;
      var s_3 = this_5 > 1.0 ? 1.0 : this_5;
      var tmp_3;
      // Inline function 'kotlin.math.abs' call
      var x_9 = s_3 - r_4;
      if (Math.abs(x_9) > 1.05E-6) {
        tmp_3 = NaN;
      } else {
        tmp_3 = s_3;
      }
      root_0 = tmp_3;
      if (!isNaN_0(root_0))
        return root_0;
      // Inline function 'kotlin.math.cos' call
      var x_10 = (phi + 2.0 * 6.283185307179586) / 3.0;
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      var r_5 = t1 * Math.cos(x_10) - a3;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_6 = r_5 < 0.0 ? 0.0 : r_5;
      var s_4 = this_6 > 1.0 ? 1.0 : this_6;
      var tmp_4;
      // Inline function 'kotlin.math.abs' call
      var x_11 = s_4 - r_5;
      if (Math.abs(x_11) > 1.05E-6) {
        tmp_4 = NaN;
      } else {
        tmp_4 = s_4;
      }
      return tmp_4;
    } else if (discriminant === 0.0) {
      var u1 = -fastCbrt(q2);
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      var r_6 = 2.0 * u1 - a3;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_7 = r_6 < 0.0 ? 0.0 : r_6;
      var s_5 = this_7 > 1.0 ? 1.0 : this_7;
      var tmp_5;
      // Inline function 'kotlin.math.abs' call
      var x_12 = s_5 - r_6;
      if (Math.abs(x_12) > 1.05E-6) {
        tmp_5 = NaN;
      } else {
        tmp_5 = s_5;
      }
      var root_1 = tmp_5;
      if (!isNaN_0(root_1))
        return root_1;
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      var r_7 = -u1 - a3;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_8 = r_7 < 0.0 ? 0.0 : r_7;
      var s_6 = this_8 > 1.0 ? 1.0 : this_8;
      var tmp_6;
      // Inline function 'kotlin.math.abs' call
      var x_13 = s_6 - r_7;
      if (Math.abs(x_13) > 1.05E-6) {
        tmp_6 = NaN;
      } else {
        tmp_6 = s_6;
      }
      return tmp_6;
    }
    // Inline function 'kotlin.math.sqrt' call
    var sd = Math.sqrt(discriminant);
    var u1_0 = fastCbrt(-q2 + sd);
    var v1 = fastCbrt(q2 + sd);
    // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
    var r_8 = u1_0 - v1 - a3;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_9 = r_8 < 0.0 ? 0.0 : r_8;
    var s_7 = this_9 > 1.0 ? 1.0 : this_9;
    var tmp_7;
    // Inline function 'kotlin.math.abs' call
    var x_14 = s_7 - r_8;
    if (Math.abs(x_14) > 1.05E-6) {
      tmp_7 = NaN;
    } else {
      tmp_7 = s_7;
    }
    return tmp_7;
  }
  function evaluateCubic(p1, p2, t) {
    var a = 1.0 / 3.0 + (p1 - p2);
    var b = p2 - 2.0 * p1;
    var c = p1;
    return 3.0 * ((a * t + b) * t + c) * t;
  }
  function findQuadraticRoots(p0, p1, p2, roots, index) {
    index = index === VOID ? 0 : index;
    var a = p0;
    var b = p1;
    var c = p2;
    var d = a - 2.0 * b + c;
    var rootCount = 0;
    if (!(d === 0.0)) {
      // Inline function 'kotlin.math.sqrt' call
      var x = b * b - a * c;
      var v1 = -Math.sqrt(x);
      var v2 = -a + b;
      rootCount = rootCount + writeValidRootInUnitRange(-(v1 + v2) / d, roots, index) | 0;
      rootCount = rootCount + writeValidRootInUnitRange((v1 - v2) / d, roots, index + rootCount | 0) | 0;
      if (rootCount > 1) {
        var s = roots[index];
        var t = roots[index + 1 | 0];
        if (s > t) {
          roots[index] = t;
          roots[index + 1 | 0] = s;
        } else if (s === t) {
          rootCount = rootCount - 1 | 0;
        }
      }
    } else if (!(b === c)) {
      rootCount = rootCount + writeValidRootInUnitRange((2.0 * b - c) / (2.0 * b - 2.0 * c), roots, index) | 0;
    }
    return rootCount;
  }
  function evaluateCubic_0(p0, p1, p2, p3, t) {
    var a = p3 + 3.0 * (p1 - p2) - p0;
    var b = 3.0 * (p2 - 2.0 * p1 + p0);
    var c = 3.0 * (p1 - p0);
    return ((a * t + b) * t + c) * t + p0;
  }
  function writeValidRootInUnitRange(r, roots, index) {
    // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = r < 0.0 ? 0.0 : r;
    var s = this_0 > 1.0 ? 1.0 : this_0;
    var tmp;
    // Inline function 'kotlin.math.abs' call
    var x = s - r;
    if (Math.abs(x) > 1.05E-6) {
      tmp = NaN;
    } else {
      tmp = s;
    }
    var v = tmp;
    roots[index] = v;
    return isNaN_0(v) ? 0 : 1;
  }
  function _BlendMode___init__impl__q6jalh(value) {
    return value;
  }
  function Companion() {
    Companion_instance_1 = this;
    this.r4f_1 = _BlendMode___init__impl__q6jalh(0);
    this.s4f_1 = _BlendMode___init__impl__q6jalh(1);
    this.t4f_1 = _BlendMode___init__impl__q6jalh(2);
    this.u4f_1 = _BlendMode___init__impl__q6jalh(3);
    this.v4f_1 = _BlendMode___init__impl__q6jalh(4);
    this.w4f_1 = _BlendMode___init__impl__q6jalh(5);
    this.x4f_1 = _BlendMode___init__impl__q6jalh(6);
    this.y4f_1 = _BlendMode___init__impl__q6jalh(7);
    this.z4f_1 = _BlendMode___init__impl__q6jalh(8);
    this.a4g_1 = _BlendMode___init__impl__q6jalh(9);
    this.b4g_1 = _BlendMode___init__impl__q6jalh(10);
    this.c4g_1 = _BlendMode___init__impl__q6jalh(11);
    this.d4g_1 = _BlendMode___init__impl__q6jalh(12);
    this.e4g_1 = _BlendMode___init__impl__q6jalh(13);
    this.f4g_1 = _BlendMode___init__impl__q6jalh(14);
    this.g4g_1 = _BlendMode___init__impl__q6jalh(15);
    this.h4g_1 = _BlendMode___init__impl__q6jalh(16);
    this.i4g_1 = _BlendMode___init__impl__q6jalh(17);
    this.j4g_1 = _BlendMode___init__impl__q6jalh(18);
    this.k4g_1 = _BlendMode___init__impl__q6jalh(19);
    this.l4g_1 = _BlendMode___init__impl__q6jalh(20);
    this.m4g_1 = _BlendMode___init__impl__q6jalh(21);
    this.n4g_1 = _BlendMode___init__impl__q6jalh(22);
    this.o4g_1 = _BlendMode___init__impl__q6jalh(23);
    this.p4g_1 = _BlendMode___init__impl__q6jalh(24);
    this.q4g_1 = _BlendMode___init__impl__q6jalh(25);
    this.r4g_1 = _BlendMode___init__impl__q6jalh(26);
    this.s4g_1 = _BlendMode___init__impl__q6jalh(27);
    this.t4g_1 = _BlendMode___init__impl__q6jalh(28);
  }
  var Companion_instance_1;
  function Companion_getInstance_12() {
    if (Companion_instance_1 == null)
      new Companion();
    return Companion_instance_1;
  }
  function BlendMode__toString_impl_uuibkd($this) {
    return $this === Companion_getInstance_12().r4f_1 ? 'Clear' : $this === Companion_getInstance_12().s4f_1 ? 'Src' : $this === Companion_getInstance_12().t4f_1 ? 'Dst' : $this === Companion_getInstance_12().u4f_1 ? 'SrcOver' : $this === Companion_getInstance_12().v4f_1 ? 'DstOver' : $this === Companion_getInstance_12().w4f_1 ? 'SrcIn' : $this === Companion_getInstance_12().x4f_1 ? 'DstIn' : $this === Companion_getInstance_12().y4f_1 ? 'SrcOut' : $this === Companion_getInstance_12().z4f_1 ? 'DstOut' : $this === Companion_getInstance_12().a4g_1 ? 'SrcAtop' : $this === Companion_getInstance_12().b4g_1 ? 'DstAtop' : $this === Companion_getInstance_12().c4g_1 ? 'Xor' : $this === Companion_getInstance_12().d4g_1 ? 'Plus' : $this === Companion_getInstance_12().e4g_1 ? 'Modulate' : $this === Companion_getInstance_12().f4g_1 ? 'Screen' : $this === Companion_getInstance_12().g4g_1 ? 'Overlay' : $this === Companion_getInstance_12().h4g_1 ? 'Darken' : $this === Companion_getInstance_12().i4g_1 ? 'Lighten' : $this === Companion_getInstance_12().j4g_1 ? 'ColorDodge' : $this === Companion_getInstance_12().k4g_1 ? 'ColorBurn' : $this === Companion_getInstance_12().l4g_1 ? 'HardLight' : $this === Companion_getInstance_12().m4g_1 ? 'Softlight' : $this === Companion_getInstance_12().n4g_1 ? 'Difference' : $this === Companion_getInstance_12().o4g_1 ? 'Exclusion' : $this === Companion_getInstance_12().p4g_1 ? 'Multiply' : $this === Companion_getInstance_12().q4g_1 ? 'Hue' : $this === Companion_getInstance_12().r4g_1 ? 'Saturation' : $this === Companion_getInstance_12().s4g_1 ? 'Color' : $this === Companion_getInstance_12().t4g_1 ? 'Luminosity' : 'Unknown';
  }
  function BlendMode__hashCode_impl_93ceri($this) {
    return $this;
  }
  function BlendMode__equals_impl_1tm25i($this, other) {
    if (!(other instanceof BlendMode))
      return false;
    if (!($this === other.u4g_1))
      return false;
    return true;
  }
  function BlendMode(value) {
    Companion_getInstance_12();
    this.u4g_1 = value;
  }
  protoOf(BlendMode).toString = function () {
    return BlendMode__toString_impl_uuibkd(this.u4g_1);
  };
  protoOf(BlendMode).hashCode = function () {
    return BlendMode__hashCode_impl_93ceri(this.u4g_1);
  };
  protoOf(BlendMode).equals = function (other) {
    return BlendMode__equals_impl_1tm25i(this.u4g_1, other);
  };
  function SolidColor(value) {
    Brush.call(this);
    this.w4g_1 = value;
  }
  protoOf(SolidColor).x4g = function (size, p, alpha) {
    p.n4c(1.0);
    var tmp;
    if (!(alpha === 1.0)) {
      tmp = Color__copy$default_impl_ectz3s(this.w4g_1, _Color___get_alpha__impl__wcfyv1(this.w4g_1) * alpha);
    } else {
      tmp = this.w4g_1;
    }
    p.y4g(tmp);
    if (!(p.q41() == null)) {
      p.p41(null);
    }
  };
  protoOf(SolidColor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SolidColor))
      return false;
    if (!equals(this.w4g_1, other.w4g_1))
      return false;
    return true;
  };
  protoOf(SolidColor).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.w4g_1);
  };
  protoOf(SolidColor).toString = function () {
    return 'SolidColor(value=' + Color__toString_impl_hpzmaq(this.w4g_1) + ')';
  };
  function Companion_0() {
  }
  protoOf(Companion_0).z4g = function (colorStops, start, end, tileMode) {
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = colorStops.length;
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$4 = colorStops[index].ce_1;
        list.h(tmp$ret$4);
      }
       while (inductionVariable < size);
    var tmp = list;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size_0 = colorStops.length;
    var list_0 = ArrayList_init_$Create$(size_0);
    // Inline function 'kotlin.repeat' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < size_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp$ret$9 = colorStops[index_0].be_1;
        list_0.h(tmp$ret$9);
      }
       while (inductionVariable_0 < size_0);
    return new LinearGradient(tmp, list_0, start, end, tileMode);
  };
  protoOf(Companion_0).a4h = function (colorStops, center, radius, tileMode) {
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = colorStops.length;
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$4 = colorStops[index].ce_1;
        list.h(tmp$ret$4);
      }
       while (inductionVariable < size);
    var tmp = list;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size_0 = colorStops.length;
    var list_0 = ArrayList_init_$Create$(size_0);
    // Inline function 'kotlin.repeat' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < size_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp$ret$9 = colorStops[index_0].be_1;
        list_0.h(tmp$ret$9);
      }
       while (inductionVariable_0 < size_0);
    return new RadialGradient(tmp, list_0, center, radius, tileMode);
  };
  protoOf(Companion_0).b4h = function (colorStops, center) {
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = colorStops.length;
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$4 = colorStops[index].ce_1;
        list.h(tmp$ret$4);
      }
       while (inductionVariable < size);
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size_0 = colorStops.length;
    var list_0 = ArrayList_init_$Create$(size_0);
    // Inline function 'kotlin.repeat' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < size_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp$ret$9 = colorStops[index_0].be_1;
        list_0.h(tmp$ret$9);
      }
       while (inductionVariable_0 < size_0);
    return new SweepGradient(center, list, list_0);
  };
  var Companion_instance_2;
  function Companion_getInstance_13() {
    return Companion_instance_2;
  }
  function Brush() {
    this.c4h_1 = Companion_getInstance().k3q_1;
  }
  function obtainTransformShader($this) {
    var tmp0_elvis_lhs = $this.e4h_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new TransformShader();
      $this.e4h_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function ShaderBrush() {
    Brush.call(this);
    this.e4h_1 = null;
    this.f4h_1 = Companion_getInstance().k3q_1;
    this.g4h_1 = null;
  }
  protoOf(ShaderBrush).x4g = function (size, p, alpha) {
    var transformShader = this.e4h_1;
    if (transformShader == null || !equals(this.f4h_1, size)) {
      if (Size__isEmpty_impl_o9ye97(size)) {
        transformShader = null;
        this.e4h_1 = null;
        this.f4h_1 = Companion_getInstance().k3q_1;
      } else {
        // Inline function 'kotlin.apply' call
        var this_0 = obtainTransformShader(this);
        var tmp = this.g4h_1;
        if (!((tmp == null ? null : new Matrix(tmp)) == null)) {
          this_0.l4h(this.g4h_1);
        }
        this_0.p41(this.h4h(size));
        transformShader = this_0;
        this.e4h_1 = transformShader;
        this.f4h_1 = size;
      }
    }
    if (!equals(p.z4h(), Companion_getInstance_15().m4h_1)) {
      p.y4g(Companion_getInstance_15().m4h_1);
    }
    var tmp_0 = p.q41();
    var tmp1_safe_receiver = transformShader;
    if (!equals(tmp_0, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q41())) {
      var tmp0_safe_receiver = transformShader;
      p.p41(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q41());
    }
    if (!(p.b4e() === alpha)) {
      p.n4c(alpha);
    }
  };
  function LinearGradient(colors, stops, start, end, tileMode) {
    stops = stops === VOID ? null : stops;
    tileMode = tileMode === VOID ? Companion_getInstance_26().a4i_1 : tileMode;
    ShaderBrush.call(this);
    this.i4i_1 = colors;
    this.j4i_1 = stops;
    this.k4i_1 = start;
    this.l4i_1 = end;
    this.m4i_1 = tileMode;
  }
  protoOf(LinearGradient).h4h = function (size) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_0 = this.k4i_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    if (floatFromBits(bits) === Infinity) {
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o(size);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(shiftRight(value_0, 32));
      tmp = floatFromBits(bits_0);
    } else {
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_1 = this.k4i_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_1 = _Offset___get_packedValue__impl__xh2k8q(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_1 = convertToInt(shiftRight(value_1, 32));
      tmp = floatFromBits(bits_1);
    }
    var startX = tmp;
    var tmp_0;
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_2 = this.k4i_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(this_2);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    if (floatFromBits(bits_2) === Infinity) {
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_3 = _Size___get_packedValue__impl__7rlt1o(size);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
      tmp_0 = floatFromBits(bits_3);
    } else {
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_3 = this.k4i_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_4 = _Offset___get_packedValue__impl__xh2k8q(this_3);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
      tmp_0 = floatFromBits(bits_4);
    }
    var startY = tmp_0;
    var tmp_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_4 = this.l4i_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_5 = _Offset___get_packedValue__impl__xh2k8q(this_4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_5 = convertToInt(shiftRight(value_5, 32));
    if (floatFromBits(bits_5) === Infinity) {
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_6 = _Size___get_packedValue__impl__7rlt1o(size);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_6 = convertToInt(shiftRight(value_6, 32));
      tmp_1 = floatFromBits(bits_6);
    } else {
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_5 = this.l4i_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_7 = _Offset___get_packedValue__impl__xh2k8q(this_5);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_7 = convertToInt(shiftRight(value_7, 32));
      tmp_1 = floatFromBits(bits_7);
    }
    var endX = tmp_1;
    var tmp_2;
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_6 = this.l4i_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_8 = _Offset___get_packedValue__impl__xh2k8q(this_6);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_8 = convertToInt(bitwiseAnd(value_8, new Long(-1, 0)));
    if (floatFromBits(bits_8) === Infinity) {
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_9 = _Size___get_packedValue__impl__7rlt1o(size);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_9 = convertToInt(bitwiseAnd(value_9, new Long(-1, 0)));
      tmp_2 = floatFromBits(bits_9);
    } else {
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_7 = this.l4i_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_10 = _Offset___get_packedValue__impl__xh2k8q(this_7);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_10 = convertToInt(bitwiseAnd(value_10, new Long(-1, 0)));
      tmp_2 = floatFromBits(bits_10);
    }
    var endY = tmp_2;
    var tmp0_colors = this.i4i_1;
    var tmp1_colorStops = this.j4i_1;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits(startX));
    var v2 = fromInt(toRawBits(startY));
    var tmp$ret$49 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp2_from = _Offset___init__impl__c168vi(tmp$ret$49);
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = fromInt(toRawBits(endX));
    var v2_0 = fromInt(toRawBits(endY));
    var tmp$ret$51 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
    var tmp3_to = _Offset___init__impl__c168vi(tmp$ret$51);
    var tmp4_tileMode = this.m4i_1;
    return LinearGradientShader(tmp2_from, tmp3_to, tmp0_colors, tmp1_colorStops, tmp4_tileMode);
  };
  protoOf(LinearGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LinearGradient))
      return false;
    if (!equals(this.i4i_1, other.i4i_1))
      return false;
    if (!equals(this.j4i_1, other.j4i_1))
      return false;
    if (!equals(this.k4i_1, other.k4i_1))
      return false;
    if (!equals(this.l4i_1, other.l4i_1))
      return false;
    if (!(this.m4i_1 === other.m4i_1))
      return false;
    return true;
  };
  protoOf(LinearGradient).hashCode = function () {
    var result = hashCode(this.i4i_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.j4i_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.k4i_1) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.l4i_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.m4i_1) | 0;
    return result;
  };
  protoOf(LinearGradient).toString = function () {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isFinite' call
    var this_0 = this.k4i_1;
    var v = bitwiseXor(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(this_0), new Long(2139095040, 2139095040)), new Long(2139095040, 2139095040));
    if (equalsLong(bitwiseAnd(subtract(v, new Long(1, 1)), new Long(-2147483648, -2147483648)), new Long(0, 0))) {
      tmp = 'start=' + Offset__toString_impl_4ffbou(this.k4i_1) + ', ';
    } else {
      tmp = '';
    }
    var startValue = tmp;
    var tmp_0;
    // Inline function 'androidx.compose.ui.geometry.isFinite' call
    var this_1 = this.l4i_1;
    var v_0 = bitwiseXor(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(this_1), new Long(2139095040, 2139095040)), new Long(2139095040, 2139095040));
    if (equalsLong(bitwiseAnd(subtract(v_0, new Long(1, 1)), new Long(-2147483648, -2147483648)), new Long(0, 0))) {
      tmp_0 = 'end=' + Offset__toString_impl_4ffbou(this.l4i_1) + ', ';
    } else {
      tmp_0 = '';
    }
    var endValue = tmp_0;
    return 'LinearGradient(colors=' + toString(this.i4i_1) + ', ' + ('stops=' + toString_0(this.j4i_1) + ', ') + startValue + endValue + ('tileMode=' + TileMode__toString_impl_tlb7f4(this.m4i_1) + ')');
  };
  function RadialGradient(colors, stops, center, radius, tileMode) {
    stops = stops === VOID ? null : stops;
    tileMode = tileMode === VOID ? Companion_getInstance_26().a4i_1 : tileMode;
    ShaderBrush.call(this);
    this.r4i_1 = colors;
    this.s4i_1 = stops;
    this.t4i_1 = center;
    this.u4i_1 = radius;
    this.v4i_1 = tileMode;
  }
  protoOf(RadialGradient).h4h = function (size) {
    var centerX;
    var centerY;
    // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
    var this_0 = this.t4i_1;
    if (equalsLong(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(this_0), new Long(2147483647, 2147483647)), new Long(2143289344, 2143289344))) {
      var drawCenter = get_center(size);
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(drawCenter);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      centerX = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(drawCenter);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      centerY = floatFromBits(bits_0);
    } else {
      var tmp;
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_1 = this.t4i_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_1 = _Offset___get_packedValue__impl__xh2k8q(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_1 = convertToInt(shiftRight(value_1, 32));
      if (floatFromBits(bits_1) === Infinity) {
        // Inline function 'androidx.compose.ui.geometry.Size.width' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_2 = convertToInt(shiftRight(value_2, 32));
        tmp = floatFromBits(bits_2);
      } else {
        // Inline function 'androidx.compose.ui.geometry.Offset.x' call
        var this_2 = this.t4i_1;
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_3 = _Offset___get_packedValue__impl__xh2k8q(this_2);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_3 = convertToInt(shiftRight(value_3, 32));
        tmp = floatFromBits(bits_3);
      }
      centerX = tmp;
      var tmp_0;
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_3 = this.t4i_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_4 = _Offset___get_packedValue__impl__xh2k8q(this_3);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
      if (floatFromBits(bits_4) === Infinity) {
        // Inline function 'androidx.compose.ui.geometry.Size.height' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_5 = _Size___get_packedValue__impl__7rlt1o(size);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_5 = convertToInt(bitwiseAnd(value_5, new Long(-1, 0)));
        tmp_0 = floatFromBits(bits_5);
      } else {
        // Inline function 'androidx.compose.ui.geometry.Offset.y' call
        var this_4 = this.t4i_1;
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_6 = _Offset___get_packedValue__impl__xh2k8q(this_4);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
        tmp_0 = floatFromBits(bits_6);
      }
      centerY = tmp_0;
    }
    var tmp0_colors = this.r4i_1;
    var tmp1_colorStops = this.s4i_1;
    var tmp0 = centerX;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = centerY;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$34 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp2_center = _Offset___init__impl__c168vi(tmp$ret$34);
    var tmp3_radius = this.u4i_1 === Infinity ? _Size___get_minDimension__impl__4iso0r(size) / 2 : this.u4i_1;
    var tmp4_tileMode = this.v4i_1;
    return RadialGradientShader(tmp2_center, tmp3_radius, tmp0_colors, tmp1_colorStops, tmp4_tileMode);
  };
  protoOf(RadialGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RadialGradient))
      return false;
    if (!equals(this.r4i_1, other.r4i_1))
      return false;
    if (!equals(this.s4i_1, other.s4i_1))
      return false;
    if (!equals(this.t4i_1, other.t4i_1))
      return false;
    if (!(this.u4i_1 === other.u4i_1))
      return false;
    if (!(this.v4i_1 === other.v4i_1))
      return false;
    return true;
  };
  protoOf(RadialGradient).hashCode = function () {
    var result = hashCode(this.r4i_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.s4i_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.t4i_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.u4i_1) | 0;
    result = imul(31, result) + TileMode__hashCode_impl_7u5am9(this.v4i_1) | 0;
    return result;
  };
  protoOf(RadialGradient).toString = function () {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var this_0 = this.t4i_1;
    if (!equalsLong(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(this_0), new Long(2147483647, 2147483647)), new Long(2143289344, 2143289344))) {
      tmp = 'center=' + Offset__toString_impl_4ffbou(this.t4i_1) + ', ';
    } else {
      tmp = '';
    }
    var centerValue = tmp;
    var tmp_0;
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    var this_1 = this.u4i_1;
    if ((toRawBits(this_1) & 2147483647) < 2139095040) {
      tmp_0 = 'radius=' + this.u4i_1 + ', ';
    } else {
      tmp_0 = '';
    }
    var radiusValue = tmp_0;
    return 'RadialGradient(' + ('colors=' + toString(this.r4i_1) + ', ') + ('stops=' + toString_0(this.s4i_1) + ', ') + centerValue + radiusValue + ('tileMode=' + TileMode__toString_impl_tlb7f4(this.v4i_1) + ')');
  };
  function SweepGradient(center, colors, stops) {
    stops = stops === VOID ? null : stops;
    ShaderBrush.call(this);
    this.a4j_1 = center;
    this.b4j_1 = colors;
    this.c4j_1 = stops;
  }
  protoOf(SweepGradient).h4h = function (size) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
    var this_0 = this.a4j_1;
    if (equalsLong(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(this_0), new Long(2147483647, 2147483647)), new Long(2143289344, 2143289344))) {
      tmp = get_center(size);
    } else {
      var tmp_0;
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_1 = this.a4j_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      if (floatFromBits(bits) === Infinity) {
        // Inline function 'androidx.compose.ui.geometry.Size.width' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_0 = _Size___get_packedValue__impl__7rlt1o(size);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_0 = convertToInt(shiftRight(value_0, 32));
        tmp_0 = floatFromBits(bits_0);
      } else {
        // Inline function 'androidx.compose.ui.geometry.Offset.x' call
        var this_2 = this.a4j_1;
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_1 = _Offset___get_packedValue__impl__xh2k8q(this_2);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_1 = convertToInt(shiftRight(value_1, 32));
        tmp_0 = floatFromBits(bits_1);
      }
      var tmp0 = tmp_0;
      var tmp_1;
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_3 = this.a4j_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_2 = _Offset___get_packedValue__impl__xh2k8q(this_3);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      if (floatFromBits(bits_2) === Infinity) {
        // Inline function 'androidx.compose.ui.geometry.Size.height' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_3 = _Size___get_packedValue__impl__7rlt1o(size);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
        tmp_1 = floatFromBits(bits_3);
      } else {
        // Inline function 'androidx.compose.ui.geometry.Offset.y' call
        var this_4 = this.a4j_1;
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_4 = _Offset___get_packedValue__impl__xh2k8q(this_4);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
        tmp_1 = floatFromBits(bits_4);
      }
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2 = tmp_1;
      var v1 = fromInt(toRawBits(tmp0));
      var v2 = fromInt(toRawBits(val2));
      var tmp$ret$26 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      tmp = _Offset___init__impl__c168vi(tmp$ret$26);
    }
    return SweepGradientShader(tmp, this.b4j_1, this.c4j_1);
  };
  protoOf(SweepGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SweepGradient))
      return false;
    if (!equals(this.a4j_1, other.a4j_1))
      return false;
    if (!equals(this.b4j_1, other.b4j_1))
      return false;
    if (!equals(this.c4j_1, other.c4j_1))
      return false;
    return true;
  };
  protoOf(SweepGradient).hashCode = function () {
    var result = Offset__hashCode_impl_hbql41(this.a4j_1);
    result = imul(31, result) + hashCode(this.b4j_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.c4j_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(SweepGradient).toString = function () {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    var this_0 = this.a4j_1;
    if (!equalsLong(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(this_0), new Long(2147483647, 2147483647)), new Long(2143289344, 2143289344))) {
      tmp = 'center=' + Offset__toString_impl_4ffbou(this.a4j_1) + ', ';
    } else {
      tmp = '';
    }
    var centerValue = tmp;
    return 'SweepGradient(' + centerValue + ('colors=' + toString(this.b4j_1) + ', stops=' + toString_0(this.c4j_1) + ')');
  };
  function Canvas() {
  }
  function Canvas_0(image) {
    return ActualCanvas(image);
  }
  function _ClipOp___init__impl__pqwwy8(value) {
    return value;
  }
  function Companion_1() {
    Companion_instance_3 = this;
    this.l4j_1 = _ClipOp___init__impl__pqwwy8(0);
    this.m4j_1 = _ClipOp___init__impl__pqwwy8(1);
  }
  var Companion_instance_3;
  function Companion_getInstance_14() {
    if (Companion_instance_3 == null)
      new Companion_1();
    return Companion_instance_3;
  }
  function ClipOp__toString_impl_vwrlao($this) {
    return $this === Companion_getInstance_14().l4j_1 ? 'Difference' : $this === Companion_getInstance_14().m4j_1 ? 'Intersect' : 'Unknown';
  }
  function ClipOp__hashCode_impl_hd6jvl($this) {
    return $this;
  }
  function ClipOp__equals_impl_g5ajel($this, other) {
    if (!(other instanceof ClipOp))
      return false;
    if (!($this === other.v4j_1))
      return false;
    return true;
  }
  function ClipOp(value) {
    Companion_getInstance_14();
    this.v4j_1 = value;
  }
  protoOf(ClipOp).toString = function () {
    return ClipOp__toString_impl_vwrlao(this.v4j_1);
  };
  protoOf(ClipOp).hashCode = function () {
    return ClipOp__hashCode_impl_hd6jvl(this.v4j_1);
  };
  protoOf(ClipOp).equals = function (other) {
    return ClipOp__equals_impl_g5ajel(this.v4j_1, other);
  };
  function _Color___init__impl__r6cqi2(value) {
    return value;
  }
  function _Color___get_value__impl__1pls5m($this) {
    return $this;
  }
  function _Color___get_colorSpace__impl__jqqozk($this) {
    var tmp0 = ColorSpaces_getInstance();
    var tmp0_0 = _Color___get_value__impl__1pls5m($this);
    // Inline function 'kotlin.ULong.and' call
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    // Inline function 'kotlin.ULong.toInt' call
    var this_0 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other)));
    // Inline function 'androidx.compose.ui.graphics.colorspace.ColorSpaces.getColorSpace' call
    var id = convertToInt(_ULong___get_data__impl__fggpzb(this_0));
    return tmp0.x4k_1[id];
  }
  function Color__convert_impl_so5m8t($this, colorSpace) {
    var connector = connect(_Color___get_colorSpace__impl__jqqozk($this), colorSpace);
    return connector.e4l($this);
  }
  function _Color___get_red__impl__cwrsk6($this) {
    var tmp;
    var tmp0 = _Color___get_value__impl__1pls5m($this);
    // Inline function 'kotlin.ULong.and' call
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.shr' call
      var this_0 = _Color___get_value__impl__1pls5m($this);
      var tmp0_0 = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(this_0), 48));
      // Inline function 'kotlin.ULong.and' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toFloat' call
      var this_1 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_0)));
      // Inline function 'kotlin.ulongToFloat' call
      var value = _ULong___get_data__impl__fggpzb(this_1);
      tmp = ulongToDouble(value) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.shr' call
      var this_2 = _Color___get_value__impl__1pls5m($this);
      var tmp0_1 = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(this_2), 48));
      // Inline function 'kotlin.ULong.and' call
      var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
      // Inline function 'kotlin.ULong.toShort' call
      var this_3 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_1)));
      var tmp0_2 = convertToShort(_ULong___get_data__impl__fggpzb(this_3));
      var tmp$ret$8;
      $l$block: {
        // Inline function 'androidx.compose.ui.graphics.halfToFloat' call
        var bits = tmp0_2 & 65535;
        var s = bits & 32768;
        var e = (bits >>> 10 | 0) & 31;
        var m = bits & 1023;
        var outE = 0;
        var outM = 0;
        if (e === 0) {
          if (!(m === 0)) {
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            // Inline function 'kotlin.fromBits' call
            var bits_0 = 1056964608 + m | 0;
            var o = floatFromBits(bits_0);
            o = o - access$_get_Fp32DenormalFloat_$tFloat16Kt_xjne9g();
            tmp$ret$8 = s === 0 ? o : -o;
            break $l$block;
          }
        } else {
          outM = m << 13;
          if (e === 31) {
            outE = 255;
            if (!(outM === 0)) {
              outM = outM | 4194304;
            }
          } else {
            outE = (e - 15 | 0) + 127 | 0;
          }
        }
        var out = s << 16 | outE << 23 | outM;
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        tmp$ret$8 = floatFromBits(out);
      }
      tmp = tmp$ret$8;
    }
    return tmp;
  }
  function _Color___get_green__impl__bta9rs($this) {
    var tmp;
    var tmp0 = _Color___get_value__impl__1pls5m($this);
    // Inline function 'kotlin.ULong.and' call
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.shr' call
      var this_0 = _Color___get_value__impl__1pls5m($this);
      var tmp0_0 = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(this_0), 40));
      // Inline function 'kotlin.ULong.and' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toFloat' call
      var this_1 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_0)));
      // Inline function 'kotlin.ulongToFloat' call
      var value = _ULong___get_data__impl__fggpzb(this_1);
      tmp = ulongToDouble(value) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.shr' call
      var this_2 = _Color___get_value__impl__1pls5m($this);
      var tmp0_1 = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(this_2), 32));
      // Inline function 'kotlin.ULong.and' call
      var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
      // Inline function 'kotlin.ULong.toShort' call
      var this_3 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_1)));
      var tmp0_2 = convertToShort(_ULong___get_data__impl__fggpzb(this_3));
      var tmp$ret$8;
      $l$block: {
        // Inline function 'androidx.compose.ui.graphics.halfToFloat' call
        var bits = tmp0_2 & 65535;
        var s = bits & 32768;
        var e = (bits >>> 10 | 0) & 31;
        var m = bits & 1023;
        var outE = 0;
        var outM = 0;
        if (e === 0) {
          if (!(m === 0)) {
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            // Inline function 'kotlin.fromBits' call
            var bits_0 = 1056964608 + m | 0;
            var o = floatFromBits(bits_0);
            o = o - access$_get_Fp32DenormalFloat_$tFloat16Kt_xjne9g();
            tmp$ret$8 = s === 0 ? o : -o;
            break $l$block;
          }
        } else {
          outM = m << 13;
          if (e === 31) {
            outE = 255;
            if (!(outM === 0)) {
              outM = outM | 4194304;
            }
          } else {
            outE = (e - 15 | 0) + 127 | 0;
          }
        }
        var out = s << 16 | outE << 23 | outM;
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        tmp$ret$8 = floatFromBits(out);
      }
      tmp = tmp$ret$8;
    }
    return tmp;
  }
  function _Color___get_blue__impl__xwez13($this) {
    var tmp;
    var tmp0 = _Color___get_value__impl__1pls5m($this);
    // Inline function 'kotlin.ULong.and' call
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.shr' call
      var this_0 = _Color___get_value__impl__1pls5m($this);
      var tmp0_0 = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(this_0), 32));
      // Inline function 'kotlin.ULong.and' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toFloat' call
      var this_1 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_0)));
      // Inline function 'kotlin.ulongToFloat' call
      var value = _ULong___get_data__impl__fggpzb(this_1);
      tmp = ulongToDouble(value) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.shr' call
      var this_2 = _Color___get_value__impl__1pls5m($this);
      var tmp0_1 = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(this_2), 16));
      // Inline function 'kotlin.ULong.and' call
      var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
      // Inline function 'kotlin.ULong.toShort' call
      var this_3 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_1)));
      var tmp0_2 = convertToShort(_ULong___get_data__impl__fggpzb(this_3));
      var tmp$ret$8;
      $l$block: {
        // Inline function 'androidx.compose.ui.graphics.halfToFloat' call
        var bits = tmp0_2 & 65535;
        var s = bits & 32768;
        var e = (bits >>> 10 | 0) & 31;
        var m = bits & 1023;
        var outE = 0;
        var outM = 0;
        if (e === 0) {
          if (!(m === 0)) {
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            // Inline function 'kotlin.fromBits' call
            var bits_0 = 1056964608 + m | 0;
            var o = floatFromBits(bits_0);
            o = o - access$_get_Fp32DenormalFloat_$tFloat16Kt_xjne9g();
            tmp$ret$8 = s === 0 ? o : -o;
            break $l$block;
          }
        } else {
          outM = m << 13;
          if (e === 31) {
            outE = 255;
            if (!(outM === 0)) {
              outM = outM | 4194304;
            }
          } else {
            outE = (e - 15 | 0) + 127 | 0;
          }
        }
        var out = s << 16 | outE << 23 | outM;
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        tmp$ret$8 = floatFromBits(out);
      }
      tmp = tmp$ret$8;
    }
    return tmp;
  }
  function _Color___get_alpha__impl__wcfyv1($this) {
    var tmp;
    var tmp0 = _Color___get_value__impl__1pls5m($this);
    // Inline function 'kotlin.ULong.and' call
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.shr' call
      var this_0 = _Color___get_value__impl__1pls5m($this);
      var tmp0_0 = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(this_0), 56));
      // Inline function 'kotlin.ULong.and' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toFloat' call
      var this_1 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_0)));
      // Inline function 'kotlin.ulongToFloat' call
      var value = _ULong___get_data__impl__fggpzb(this_1);
      tmp = ulongToDouble(value) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.shr' call
      var this_2 = _Color___get_value__impl__1pls5m($this);
      var tmp0_1 = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(this_2), 6));
      // Inline function 'kotlin.ULong.and' call
      var other_1 = _ULong___init__impl__c78o9k(new Long(1023, 0));
      // Inline function 'kotlin.ULong.toFloat' call
      var this_3 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_1)));
      // Inline function 'kotlin.ulongToFloat' call
      var value_0 = _ULong___get_data__impl__fggpzb(this_3);
      tmp = ulongToDouble(value_0) / 1023.0;
    }
    return tmp;
  }
  function Color__copy_impl_qlvcl1($this, alpha, red, green, blue) {
    return Color_2(red, green, blue, alpha, _Color___get_colorSpace__impl__jqqozk($this));
  }
  function Color__copy$default_impl_ectz3s($this, alpha, red, green, blue, $super) {
    alpha = alpha === VOID ? _Color___get_alpha__impl__wcfyv1($this) : alpha;
    red = red === VOID ? _Color___get_red__impl__cwrsk6($this) : red;
    green = green === VOID ? _Color___get_green__impl__bta9rs($this) : green;
    blue = blue === VOID ? _Color___get_blue__impl__xwez13($this) : blue;
    var tmp;
    if ($super === VOID) {
      tmp = Color__copy_impl_qlvcl1($this, alpha, red, green, blue);
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Color(tmp_0)).g4l.call(new Color($this), alpha, red, green, blue).f4l_1;
    }
    return tmp;
  }
  function Color__toString_impl_hpzmaq($this) {
    return 'Color(' + _Color___get_red__impl__cwrsk6($this) + ', ' + _Color___get_green__impl__bta9rs($this) + ', ' + _Color___get_blue__impl__xwez13($this) + ', ' + _Color___get_alpha__impl__wcfyv1($this) + ', ' + _Color___get_colorSpace__impl__jqqozk($this).h4l_1 + ')';
  }
  function Companion_2() {
    Companion_instance_4 = this;
    this.m4h_1 = Color_1(new Long(-16777216, 0));
    this.n4h_1 = Color_1(new Long(-12303292, 0));
    this.o4h_1 = Color_1(new Long(-7829368, 0));
    this.p4h_1 = Color_1(new Long(-3355444, 0));
    this.q4h_1 = Color_1(new Long(-1, 0));
    this.r4h_1 = Color_1(new Long(-65536, 0));
    this.s4h_1 = Color_1(new Long(-16711936, 0));
    this.t4h_1 = Color_1(new Long(-16776961, 0));
    this.u4h_1 = Color_1(new Long(-256, 0));
    this.v4h_1 = Color_1(new Long(-16711681, 0));
    this.w4h_1 = Color_1(new Long(-65281, 0));
    this.x4h_1 = Color_3(0);
    this.y4h_1 = Color_2(0.0, 0.0, 0.0, 0.0, ColorSpaces_getInstance().t4k_1);
  }
  var Companion_instance_4;
  function Companion_getInstance_15() {
    if (Companion_instance_4 == null)
      new Companion_2();
    return Companion_instance_4;
  }
  function Color__hashCode_impl_vjyivj($this) {
    return ULong__hashCode_impl_6hv2lb($this);
  }
  function Color__equals_impl_k06uqz($this, other) {
    if (!(other instanceof Color))
      return false;
    var tmp0_other_with_cast = other.f4l_1;
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Color(value) {
    Companion_getInstance_15();
    this.f4l_1 = value;
  }
  protoOf(Color).toString = function () {
    return Color__toString_impl_hpzmaq(this.f4l_1);
  };
  protoOf(Color).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.f4l_1);
  };
  protoOf(Color).equals = function (other) {
    return Color__equals_impl_k06uqz(this.f4l_1, other);
  };
  function lerp_0(start, stop, fraction) {
    var colorSpace = ColorSpaces_getInstance().w4k_1;
    var startColor = Color__convert_impl_so5m8t(start, colorSpace);
    var endColor = Color__convert_impl_so5m8t(stop, colorSpace);
    var startAlpha = _Color___get_alpha__impl__wcfyv1(startColor);
    var startL = _Color___get_red__impl__cwrsk6(startColor);
    var startA = _Color___get_green__impl__bta9rs(startColor);
    var startB = _Color___get_blue__impl__xwez13(startColor);
    var endAlpha = _Color___get_alpha__impl__wcfyv1(endColor);
    var endL = _Color___get_red__impl__cwrsk6(endColor);
    var endA = _Color___get_green__impl__bta9rs(endColor);
    var endB = _Color___get_blue__impl__xwez13(endColor);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = fraction < 0.0 ? 0.0 : fraction;
    var t = this_0 > 1.0 ? 1.0 : this_0;
    var interpolated = UncheckedColor(lerp(startL, endL, t), lerp(startA, endA, t), lerp(startB, endB, t), lerp(startAlpha, endAlpha, t), colorSpace);
    return Color__convert_impl_so5m8t(interpolated, _Color___get_colorSpace__impl__jqqozk(stop));
  }
  function ColorProducer() {
  }
  function Color_0(red, green, blue, alpha) {
    alpha = alpha === VOID ? 255 : alpha;
    var color = (alpha & 255) << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255;
    return Color_3(color);
  }
  function compositeOver(_this__u8e3s4, background) {
    var fg = Color__convert_impl_so5m8t(_this__u8e3s4, _Color___get_colorSpace__impl__jqqozk(background));
    var bgA = _Color___get_alpha__impl__wcfyv1(background);
    var fgA = _Color___get_alpha__impl__wcfyv1(fg);
    var a = fgA + bgA * (1.0 - fgA);
    var tmp0 = _Color___get_red__impl__cwrsk6(fg);
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var bgC = _Color___get_red__impl__cwrsk6(background);
    var r = a === 0.0 ? 0.0 : (tmp0 * fgA + bgC * bgA * (1.0 - fgA)) / a;
    var tmp0_0 = _Color___get_green__impl__bta9rs(fg);
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var bgC_0 = _Color___get_green__impl__bta9rs(background);
    var g = a === 0.0 ? 0.0 : (tmp0_0 * fgA + bgC_0 * bgA * (1.0 - fgA)) / a;
    var tmp0_1 = _Color___get_blue__impl__xwez13(fg);
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var bgC_1 = _Color___get_blue__impl__xwez13(background);
    var b = a === 0.0 ? 0.0 : (tmp0_1 * fgA + bgC_1 * bgA * (1.0 - fgA)) / a;
    return UncheckedColor(r, g, b, a, _Color___get_colorSpace__impl__jqqozk(background));
  }
  function Color_1(color) {
    // Inline function 'kotlin.toULong' call
    var this_0 = shiftLeft(color, 32);
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    return _Color___init__impl__r6cqi2(tmp$ret$0);
  }
  function Color_2(red, green, blue, alpha, colorSpace) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().d4k_1 : colorSpace;
    if (colorSpace.l4l()) {
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_0 = alpha < 0.0 ? 0.0 : alpha;
      var tmp$ret$0 = this_0 > 1.0 ? 1.0 : this_0;
      var tmp = numberToInt(tmp$ret$0 * 255.0 + 0.5) << 24;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_1 = red < 0.0 ? 0.0 : red;
      var tmp$ret$3 = this_1 > 1.0 ? 1.0 : this_1;
      var tmp_0 = tmp | numberToInt(tmp$ret$3 * 255.0 + 0.5) << 16;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_2 = green < 0.0 ? 0.0 : green;
      var tmp$ret$6 = this_2 > 1.0 ? 1.0 : this_2;
      var tmp_1 = tmp_0 | numberToInt(tmp$ret$6 * 255.0 + 0.5) << 8;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_3 = blue < 0.0 ? 0.0 : blue;
      var tmp$ret$9 = this_3 > 1.0 ? 1.0 : this_3;
      var argb = tmp_1 | numberToInt(tmp$ret$9 * 255.0 + 0.5);
      // Inline function 'kotlin.toULong' call
      // Inline function 'kotlin.ULong.shl' call
      var this_4 = _ULong___init__impl__c78o9k(fromInt(argb));
      var tmp$ret$13 = _ULong___init__impl__c78o9k(shiftLeft(_ULong___get_data__impl__fggpzb(this_4), 32));
      return _Color___init__impl__r6cqi2(tmp$ret$13);
    }
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    if (!(colorSpace.m4l() === 3)) {
      var tmp$ret$15 = 'Color only works with ColorSpaces with 3 components';
      throwIllegalArgumentException(tmp$ret$15);
    }
    var id = colorSpace.j4l_1;
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    if (!!(id === -1)) {
      var tmp$ret$17 = 'Unknown color space, please use a color space in ColorSpaces';
      throwIllegalArgumentException(tmp$ret$17);
    }
    var tmp2 = colorSpace.n4l(0);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue = colorSpace.o4l(0);
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_5 = red < tmp2 ? tmp2 : red;
    var tmp0 = this_5 > maximumValue ? maximumValue : this_5;
    var tmp$ret$21;
    $l$block: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits = toRawBits(tmp0);
      var s = bits >>> 31 | 0;
      var e = (bits >>> 23 | 0) & 255;
      var m = bits & 8388607;
      var outE = 0;
      var outM = 0;
      if (e === 255) {
        outE = 31;
        outM = !(m === 0) ? 512 : 0;
      } else {
        e = (e - 127 | 0) + 15 | 0;
        if (e >= 31) {
          outE = 49;
        } else if (e <= 0) {
          if (e >= -10) {
            m = (m | 8388608) >> (1 - e | 0);
            if (!((m & 4096) === 0))
              m = m + 8192 | 0;
            outM = m >> 13;
          }
        } else {
          outE = e;
          outM = m >> 13;
          if (!((m & 4096) === 0)) {
            var out = outE << 10 | outM;
            out = out + 1 | 0;
            tmp$ret$21 = toShort(out | s << 15);
            break $l$block;
          }
        }
      }
      tmp$ret$21 = toShort(s << 15 | outE << 10 | outM);
    }
    var r = tmp$ret$21;
    var tmp2_0 = colorSpace.n4l(1);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue_0 = colorSpace.o4l(1);
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_6 = green < tmp2_0 ? tmp2_0 : green;
    var tmp0_0 = this_6 > maximumValue_0 ? maximumValue_0 : this_6;
    var tmp$ret$25;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits_0 = toRawBits(tmp0_0);
      var s_0 = bits_0 >>> 31 | 0;
      var e_0 = (bits_0 >>> 23 | 0) & 255;
      var m_0 = bits_0 & 8388607;
      var outE_0 = 0;
      var outM_0 = 0;
      if (e_0 === 255) {
        outE_0 = 31;
        outM_0 = !(m_0 === 0) ? 512 : 0;
      } else {
        e_0 = (e_0 - 127 | 0) + 15 | 0;
        if (e_0 >= 31) {
          outE_0 = 49;
        } else if (e_0 <= 0) {
          if (e_0 >= -10) {
            m_0 = (m_0 | 8388608) >> (1 - e_0 | 0);
            if (!((m_0 & 4096) === 0))
              m_0 = m_0 + 8192 | 0;
            outM_0 = m_0 >> 13;
          }
        } else {
          outE_0 = e_0;
          outM_0 = m_0 >> 13;
          if (!((m_0 & 4096) === 0)) {
            var out_0 = outE_0 << 10 | outM_0;
            out_0 = out_0 + 1 | 0;
            tmp$ret$25 = toShort(out_0 | s_0 << 15);
            break $l$block_0;
          }
        }
      }
      tmp$ret$25 = toShort(s_0 << 15 | outE_0 << 10 | outM_0);
    }
    var g = tmp$ret$25;
    var tmp2_1 = colorSpace.n4l(2);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue_1 = colorSpace.o4l(2);
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_7 = blue < tmp2_1 ? tmp2_1 : blue;
    var tmp0_1 = this_7 > maximumValue_1 ? maximumValue_1 : this_7;
    var tmp$ret$29;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits_1 = toRawBits(tmp0_1);
      var s_1 = bits_1 >>> 31 | 0;
      var e_1 = (bits_1 >>> 23 | 0) & 255;
      var m_1 = bits_1 & 8388607;
      var outE_1 = 0;
      var outM_1 = 0;
      if (e_1 === 255) {
        outE_1 = 31;
        outM_1 = !(m_1 === 0) ? 512 : 0;
      } else {
        e_1 = (e_1 - 127 | 0) + 15 | 0;
        if (e_1 >= 31) {
          outE_1 = 49;
        } else if (e_1 <= 0) {
          if (e_1 >= -10) {
            m_1 = (m_1 | 8388608) >> (1 - e_1 | 0);
            if (!((m_1 & 4096) === 0))
              m_1 = m_1 + 8192 | 0;
            outM_1 = m_1 >> 13;
          }
        } else {
          outE_1 = e_1;
          outM_1 = m_1 >> 13;
          if (!((m_1 & 4096) === 0)) {
            var out_1 = outE_1 << 10 | outM_1;
            out_1 = out_1 + 1 | 0;
            tmp$ret$29 = toShort(out_1 | s_1 << 15);
            break $l$block_1;
          }
        }
      }
      tmp$ret$29 = toShort(s_1 << 15 | outE_1 << 10 | outM_1);
    }
    var b = tmp$ret$29;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_8 = alpha < 0.0 ? 0.0 : alpha;
    var tmp$ret$30 = this_8 > 1.0 ? 1.0 : this_8;
    var a = numberToInt(tmp$ret$30 * 1023.0 + 0.5);
    // Inline function 'kotlin.toULong' call
    var this_9 = bitwiseOr(bitwiseOr(bitwiseOr(bitwiseOr(shiftLeft(bitwiseAnd(fromInt(r), new Long(65535, 0)), 48), shiftLeft(bitwiseAnd(fromInt(g), new Long(65535, 0)), 32)), shiftLeft(bitwiseAnd(fromInt(b), new Long(65535, 0)), 16)), shiftLeft(bitwiseAnd(fromInt(a), new Long(1023, 0)), 6)), bitwiseAnd(fromInt(id), new Long(63, 0)));
    var tmp$ret$33 = _ULong___init__impl__c78o9k(this_9);
    return _Color___init__impl__r6cqi2(tmp$ret$33);
  }
  function toArgb(_this__u8e3s4) {
    // Inline function 'kotlin.ULong.shr' call
    var this_0 = _Color___get_value__impl__1pls5m(Color__convert_impl_so5m8t(_this__u8e3s4, ColorSpaces_getInstance().d4k_1));
    // Inline function 'kotlin.ULong.toInt' call
    var this_1 = _ULong___init__impl__c78o9k(shiftRightUnsigned(_ULong___get_data__impl__fggpzb(this_0), 32));
    return convertToInt(_ULong___get_data__impl__fggpzb(this_1));
  }
  function Color_3(color) {
    // Inline function 'kotlin.toULong' call
    // Inline function 'kotlin.ULong.shl' call
    var this_0 = _ULong___init__impl__c78o9k(fromInt(color));
    var tmp$ret$1 = _ULong___init__impl__c78o9k(shiftLeft(_ULong___get_data__impl__fggpzb(this_0), 32));
    return _Color___init__impl__r6cqi2(tmp$ret$1);
  }
  function UncheckedColor(red, green, blue, alpha, colorSpace) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().d4k_1 : colorSpace;
    if (colorSpace.l4l()) {
      var argb = numberToInt(alpha * 255.0 + 0.5) << 24 | numberToInt(red * 255.0 + 0.5) << 16 | numberToInt(green * 255.0 + 0.5) << 8 | numberToInt(blue * 255.0 + 0.5);
      // Inline function 'kotlin.toULong' call
      // Inline function 'kotlin.ULong.shl' call
      var this_0 = _ULong___init__impl__c78o9k(fromInt(argb));
      var tmp$ret$1 = _ULong___init__impl__c78o9k(shiftLeft(_ULong___get_data__impl__fggpzb(this_0), 32));
      return _Color___init__impl__r6cqi2(tmp$ret$1);
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits = toRawBits(red);
      var s = bits >>> 31 | 0;
      var e = (bits >>> 23 | 0) & 255;
      var m = bits & 8388607;
      var outE = 0;
      var outM = 0;
      if (e === 255) {
        outE = 31;
        outM = !(m === 0) ? 512 : 0;
      } else {
        e = (e - 127 | 0) + 15 | 0;
        if (e >= 31) {
          outE = 49;
        } else if (e <= 0) {
          if (e >= -10) {
            m = (m | 8388608) >> (1 - e | 0);
            if (!((m & 4096) === 0))
              m = m + 8192 | 0;
            outM = m >> 13;
          }
        } else {
          outE = e;
          outM = m >> 13;
          if (!((m & 4096) === 0)) {
            var out = outE << 10 | outM;
            out = out + 1 | 0;
            tmp$ret$2 = toShort(out | s << 15);
            break $l$block;
          }
        }
      }
      tmp$ret$2 = toShort(s << 15 | outE << 10 | outM);
    }
    var r = tmp$ret$2;
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits_0 = toRawBits(green);
      var s_0 = bits_0 >>> 31 | 0;
      var e_0 = (bits_0 >>> 23 | 0) & 255;
      var m_0 = bits_0 & 8388607;
      var outE_0 = 0;
      var outM_0 = 0;
      if (e_0 === 255) {
        outE_0 = 31;
        outM_0 = !(m_0 === 0) ? 512 : 0;
      } else {
        e_0 = (e_0 - 127 | 0) + 15 | 0;
        if (e_0 >= 31) {
          outE_0 = 49;
        } else if (e_0 <= 0) {
          if (e_0 >= -10) {
            m_0 = (m_0 | 8388608) >> (1 - e_0 | 0);
            if (!((m_0 & 4096) === 0))
              m_0 = m_0 + 8192 | 0;
            outM_0 = m_0 >> 13;
          }
        } else {
          outE_0 = e_0;
          outM_0 = m_0 >> 13;
          if (!((m_0 & 4096) === 0)) {
            var out_0 = outE_0 << 10 | outM_0;
            out_0 = out_0 + 1 | 0;
            tmp$ret$3 = toShort(out_0 | s_0 << 15);
            break $l$block_0;
          }
        }
      }
      tmp$ret$3 = toShort(s_0 << 15 | outE_0 << 10 | outM_0);
    }
    var g = tmp$ret$3;
    var tmp$ret$4;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits_1 = toRawBits(blue);
      var s_1 = bits_1 >>> 31 | 0;
      var e_1 = (bits_1 >>> 23 | 0) & 255;
      var m_1 = bits_1 & 8388607;
      var outE_1 = 0;
      var outM_1 = 0;
      if (e_1 === 255) {
        outE_1 = 31;
        outM_1 = !(m_1 === 0) ? 512 : 0;
      } else {
        e_1 = (e_1 - 127 | 0) + 15 | 0;
        if (e_1 >= 31) {
          outE_1 = 49;
        } else if (e_1 <= 0) {
          if (e_1 >= -10) {
            m_1 = (m_1 | 8388608) >> (1 - e_1 | 0);
            if (!((m_1 & 4096) === 0))
              m_1 = m_1 + 8192 | 0;
            outM_1 = m_1 >> 13;
          }
        } else {
          outE_1 = e_1;
          outM_1 = m_1 >> 13;
          if (!((m_1 & 4096) === 0)) {
            var out_1 = outE_1 << 10 | outM_1;
            out_1 = out_1 + 1 | 0;
            tmp$ret$4 = toShort(out_1 | s_1 << 15);
            break $l$block_1;
          }
        }
      }
      tmp$ret$4 = toShort(s_1 << 15 | outE_1 << 10 | outM_1);
    }
    var b = tmp$ret$4;
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.max' call
    var b_0 = Math.min(alpha, 1.0);
    var tmp$ret$6 = Math.max(0.0, b_0);
    var a = numberToInt(tmp$ret$6 * 1023.0 + 0.5);
    var id = colorSpace.j4l_1;
    // Inline function 'kotlin.toULong' call
    var this_1 = bitwiseOr(bitwiseOr(bitwiseOr(bitwiseOr(shiftLeft(bitwiseAnd(fromInt(r), new Long(65535, 0)), 48), shiftLeft(bitwiseAnd(fromInt(g), new Long(65535, 0)), 32)), shiftLeft(bitwiseAnd(fromInt(b), new Long(65535, 0)), 16)), shiftLeft(bitwiseAnd(fromInt(a), new Long(1023, 0)), 6)), bitwiseAnd(fromInt(id), new Long(63, 0)));
    var tmp$ret$7 = _ULong___init__impl__c78o9k(this_1);
    return _Color___init__impl__r6cqi2(tmp$ret$7);
  }
  function Companion_3() {
  }
  protoOf(Companion_3).p4l = function (color, blendMode) {
    return BlendModeColorFilter_init_$Create$(color, blendMode);
  };
  protoOf(Companion_3).q4l = function (color, blendMode, $super) {
    blendMode = blendMode === VOID ? Companion_getInstance_12().w4f_1 : blendMode;
    return $super === VOID ? this.p4l(color, blendMode) : $super.p4l.call(this, new Color(color), new BlendMode(blendMode));
  };
  var Companion_instance_5;
  function Companion_getInstance_16() {
    return Companion_instance_5;
  }
  function ColorFilter(nativeColorFilter) {
    this.r4l_1 = nativeColorFilter;
  }
  function BlendModeColorFilter_init_$Init$(color, blendMode, $this) {
    BlendModeColorFilter.call($this, color, blendMode, actualTintColorFilter(color, blendMode));
    return $this;
  }
  function BlendModeColorFilter_init_$Create$(color, blendMode) {
    return BlendModeColorFilter_init_$Init$(color, blendMode, objectCreate(protoOf(BlendModeColorFilter)));
  }
  function BlendModeColorFilter(color, blendMode, nativeColorFilter) {
    ColorFilter.call(this, nativeColorFilter);
    this.t4l_1 = color;
    this.u4l_1 = blendMode;
  }
  protoOf(BlendModeColorFilter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlendModeColorFilter))
      return false;
    if (!equals(this.t4l_1, other.t4l_1))
      return false;
    if (!(this.u4l_1 === other.u4l_1))
      return false;
    return true;
  };
  protoOf(BlendModeColorFilter).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.t4l_1);
    result = imul(31, result) + BlendMode__hashCode_impl_93ceri(this.u4l_1) | 0;
    return result;
  };
  protoOf(BlendModeColorFilter).toString = function () {
    return 'BlendModeColorFilter(color=' + Color__toString_impl_hpzmaq(this.t4l_1) + ', blendMode=' + BlendMode__toString_impl_uuibkd(this.u4l_1) + ')';
  };
  function _FilterQuality___init__impl__nv51aq(value) {
    return value;
  }
  function Companion_4() {
    Companion_instance_6 = this;
    this.v4l_1 = _FilterQuality___init__impl__nv51aq(0);
    this.w4l_1 = _FilterQuality___init__impl__nv51aq(1);
    this.x4l_1 = _FilterQuality___init__impl__nv51aq(2);
    this.y4l_1 = _FilterQuality___init__impl__nv51aq(3);
  }
  var Companion_instance_6;
  function Companion_getInstance_17() {
    if (Companion_instance_6 == null)
      new Companion_4();
    return Companion_instance_6;
  }
  function FilterQuality__toString_impl_i5cfty($this) {
    return $this === Companion_getInstance_17().v4l_1 ? 'None' : $this === Companion_getInstance_17().w4l_1 ? 'Low' : $this === Companion_getInstance_17().x4l_1 ? 'Medium' : $this === Companion_getInstance_17().y4l_1 ? 'High' : 'Unknown';
  }
  function FilterQuality__hashCode_impl_v4lpcb($this) {
    return $this;
  }
  function get_Fp32DenormalFloat() {
    _init_properties_Float16_kt__eyzj8x();
    return Fp32DenormalFloat;
  }
  var Fp32DenormalFloat;
  function access$_get_Fp32DenormalFloat_$tFloat16Kt_xjne9g() {
    return get_Fp32DenormalFloat();
  }
  var properties_initialized_Float16_kt_xeo1ox;
  function _init_properties_Float16_kt__eyzj8x() {
    if (!properties_initialized_Float16_kt_xeo1ox) {
      properties_initialized_Float16_kt_xeo1ox = true;
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = 1056964608;
      Fp32DenormalFloat = floatFromBits(bits);
    }
  }
  function ImageBitmap(width, height, config, hasAlpha, colorSpace) {
    config = config === VOID ? Companion_getInstance_18().z4l_1 : config;
    hasAlpha = hasAlpha === VOID ? true : hasAlpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().d4k_1 : colorSpace;
    return ActualImageBitmap(width, height, config, hasAlpha, colorSpace);
  }
  function _ImageBitmapConfig___init__impl__wfx9yl(value) {
    return value;
  }
  function Companion_5() {
    Companion_instance_7 = this;
    this.z4l_1 = _ImageBitmapConfig___init__impl__wfx9yl(0);
    this.a4m_1 = _ImageBitmapConfig___init__impl__wfx9yl(1);
    this.b4m_1 = _ImageBitmapConfig___init__impl__wfx9yl(2);
    this.c4m_1 = _ImageBitmapConfig___init__impl__wfx9yl(3);
    this.d4m_1 = _ImageBitmapConfig___init__impl__wfx9yl(4);
  }
  var Companion_instance_7;
  function Companion_getInstance_18() {
    if (Companion_instance_7 == null)
      new Companion_5();
    return Companion_instance_7;
  }
  function ImageBitmapConfig__toString_impl_dfv42d($this) {
    return $this === Companion_getInstance_18().z4l_1 ? 'Argb8888' : $this === Companion_getInstance_18().a4m_1 ? 'Alpha8' : $this === Companion_getInstance_18().b4m_1 ? 'Rgb565' : $this === Companion_getInstance_18().c4m_1 ? 'F16' : $this === Companion_getInstance_18().d4m_1 ? 'Gpu' : 'Unknown';
  }
  function ImageBitmapConfig__hashCode_impl_8basqi($this) {
    return $this;
  }
  function ImageBitmapConfig__equals_impl_hqcsv2($this, other) {
    if (!(other instanceof ImageBitmapConfig))
      return false;
    if (!($this === other.e4m_1))
      return false;
    return true;
  }
  function ImageBitmapConfig(value) {
    Companion_getInstance_18();
    this.e4m_1 = value;
  }
  protoOf(ImageBitmapConfig).toString = function () {
    return ImageBitmapConfig__toString_impl_dfv42d(this.e4m_1);
  };
  protoOf(ImageBitmapConfig).hashCode = function () {
    return ImageBitmapConfig__hashCode_impl_8basqi(this.e4m_1);
  };
  protoOf(ImageBitmapConfig).equals = function (other) {
    return ImageBitmapConfig__equals_impl_hqcsv2(this.e4m_1, other);
  };
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function _Matrix___init__impl__q3kp4w(values) {
    var tmp;
    if (values === VOID) {
      // Inline function 'kotlin.floatArrayOf' call
      tmp = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
    } else {
      tmp = values;
    }
    values = tmp;
    return values;
  }
  function _Matrix___get_values__impl__fblr7b($this) {
    return $this;
  }
  function Matrix__map_impl_7meu7m($this, point) {
    if (_Matrix___get_values__impl__fblr7b($this).length < 16)
      return point;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v00 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v01 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v03 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v10 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v11 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v13 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v30 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v31 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v33 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(point);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(point);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var y = floatFromBits(bits_0);
    var z = v03 * x + v13 * y + v33;
    var inverseZ = 1 / z;
    var tmp;
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    if ((toRawBits(inverseZ) & 2147483647) < 2139095040) {
      tmp = inverseZ;
    } else {
      tmp = 0.0;
    }
    var pZ = tmp;
    var tmp0 = pZ * (v00 * x + v10 * y + v30);
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = pZ * (v01 * x + v11 * y + v31);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$19 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$19);
  }
  function Matrix__map_impl_7meu7m_0($this, rect) {
    if (_Matrix___get_values__impl__fblr7b($this).length < 16)
      return Unit_instance;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v00 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v01 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v03 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v10 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v11 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v13 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v30 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v31 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v33 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    var l = rect.z3o_1;
    var t = rect.a3p_1;
    var r = rect.b3p_1;
    var b = rect.c3p_1;
    var x = l;
    var y = t;
    var inverseZ = 1.0 / (v03 * x + v13 * y + v33);
    var tmp;
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    var this_0 = inverseZ;
    if ((toRawBits(this_0) & 2147483647) < 2139095040) {
      tmp = inverseZ;
    } else {
      tmp = 0.0;
    }
    var pZ = tmp;
    var x0 = pZ * (v00 * x + v10 * y + v30);
    var y0 = pZ * (v01 * x + v11 * y + v31);
    x = l;
    y = b;
    inverseZ = 1.0 / (v03 * x + v13 * y + v33);
    var tmp_0;
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    var this_1 = inverseZ;
    if ((toRawBits(this_1) & 2147483647) < 2139095040) {
      tmp_0 = inverseZ;
    } else {
      tmp_0 = 0.0;
    }
    pZ = tmp_0;
    var x1 = pZ * (v00 * x + v10 * y + v30);
    var y1 = pZ * (v01 * x + v11 * y + v31);
    x = r;
    y = t;
    inverseZ = 1.0 / (v03 * x + v13 * y + v33);
    var tmp_1;
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    var this_2 = inverseZ;
    if ((toRawBits(this_2) & 2147483647) < 2139095040) {
      tmp_1 = inverseZ;
    } else {
      tmp_1 = 0.0;
    }
    pZ = tmp_1;
    var x2 = pZ * (v00 * x + v10 * y + v30);
    var y2 = pZ * (v01 * x + v11 * y + v31);
    x = r;
    y = b;
    inverseZ = 1.0 / (v03 * x + v13 * y + v33);
    var tmp_2;
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    var this_3 = inverseZ;
    if ((toRawBits(this_3) & 2147483647) < 2139095040) {
      tmp_2 = inverseZ;
    } else {
      tmp_2 = 0.0;
    }
    pZ = tmp_2;
    var x3 = pZ * (v00 * x + v10 * y + v30);
    var y3 = pZ * (v01 * x + v11 * y + v31);
    var tmp_3 = rect;
    // Inline function 'androidx.compose.ui.util.fastMinOf' call
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'kotlin.comparisons.minOf' call
    var b_0 = Math.min(x2, x3);
    // Inline function 'kotlin.comparisons.minOf' call
    var b_1 = Math.min(x1, b_0);
    tmp_3.z3o_1 = Math.min(x0, b_1);
    var tmp_4 = rect;
    // Inline function 'androidx.compose.ui.util.fastMinOf' call
    // Inline function 'kotlin.comparisons.minOf' call
    // Inline function 'kotlin.comparisons.minOf' call
    var b_2 = Math.min(y2, y3);
    // Inline function 'kotlin.comparisons.minOf' call
    var b_3 = Math.min(y1, b_2);
    tmp_4.a3p_1 = Math.min(y0, b_3);
    var tmp_5 = rect;
    // Inline function 'androidx.compose.ui.util.fastMaxOf' call
    // Inline function 'kotlin.comparisons.maxOf' call
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_4 = Math.max(x2, x3);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_5 = Math.max(x1, b_4);
    tmp_5.b3p_1 = Math.max(x0, b_5);
    var tmp_6 = rect;
    // Inline function 'androidx.compose.ui.util.fastMaxOf' call
    // Inline function 'kotlin.comparisons.maxOf' call
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_6 = Math.max(y2, y3);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_7 = Math.max(y1, b_6);
    tmp_6.c3p_1 = Math.max(y0, b_7);
  }
  function Matrix__timesAssign_impl_oas521($this, m) {
    var v = _Matrix___get_values__impl__fblr7b($this);
    if (v.length < 16)
      return Unit_instance;
    if (_Matrix___get_values__impl__fblr7b(m).length < 16)
      return Unit_instance;
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = tmp_0 + tmp_1 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = tmp_2 + tmp_3 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v00 = tmp_4 + tmp_5 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = tmp_6 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = tmp_7 + tmp_8 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_11 = tmp_9 + tmp_10 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_12 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v01 = tmp_11 + tmp_12 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_13 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_14 = tmp_13 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_15 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_16 = tmp_14 + tmp_15 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_17 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_18 = tmp_16 + tmp_17 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_19 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v02 = tmp_18 + tmp_19 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_20 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_21 = tmp_20 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_22 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_23 = tmp_21 + tmp_22 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_24 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_25 = tmp_23 + tmp_24 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_26 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v03 = tmp_25 + tmp_26 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_27 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_28 = tmp_27 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_29 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_30 = tmp_28 + tmp_29 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_31 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_32 = tmp_30 + tmp_31 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_33 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v10 = tmp_32 + tmp_33 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_34 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_35 = tmp_34 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_36 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_37 = tmp_35 + tmp_36 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_38 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_39 = tmp_37 + tmp_38 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_40 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v11 = tmp_39 + tmp_40 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_41 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_42 = tmp_41 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_43 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_44 = tmp_42 + tmp_43 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_45 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_46 = tmp_44 + tmp_45 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_47 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v12 = tmp_46 + tmp_47 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_48 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_49 = tmp_48 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_50 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_51 = tmp_49 + tmp_50 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_52 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_53 = tmp_51 + tmp_52 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_54 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v13 = tmp_53 + tmp_54 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_55 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_56 = tmp_55 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_57 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_58 = tmp_56 + tmp_57 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_59 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_60 = tmp_58 + tmp_59 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_61 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v20 = tmp_60 + tmp_61 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_62 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_63 = tmp_62 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_64 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_65 = tmp_63 + tmp_64 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_66 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_67 = tmp_65 + tmp_66 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_68 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v21 = tmp_67 + tmp_68 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_69 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_70 = tmp_69 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_71 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_72 = tmp_70 + tmp_71 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_73 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_74 = tmp_72 + tmp_73 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_75 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v22 = tmp_74 + tmp_75 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_76 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_77 = tmp_76 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_78 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_79 = tmp_77 + tmp_78 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_80 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_81 = tmp_79 + tmp_80 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_82 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v23 = tmp_81 + tmp_82 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_83 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_84 = tmp_83 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_85 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_86 = tmp_84 + tmp_85 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_87 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_88 = tmp_86 + tmp_87 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_89 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v30 = tmp_88 + tmp_89 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_90 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_91 = tmp_90 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_92 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_93 = tmp_91 + tmp_92 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_94 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_95 = tmp_93 + tmp_94 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_96 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v31 = tmp_95 + tmp_96 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_97 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_98 = tmp_97 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_99 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_100 = tmp_98 + tmp_99 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_101 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_102 = tmp_100 + tmp_101 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_103 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v32 = tmp_102 + tmp_103 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.dot' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_104 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_105 = tmp_104 * _Matrix___get_values__impl__fblr7b(m)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_106 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_107 = tmp_105 + tmp_106 * _Matrix___get_values__impl__fblr7b(m)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_108 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_109 = tmp_107 + tmp_108 * _Matrix___get_values__impl__fblr7b(m)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_110 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var v33 = tmp_109 + tmp_110 * _Matrix___get_values__impl__fblr7b(m)[imul(3, 4) + 3 | 0];
    v[0] = v00;
    v[1] = v01;
    v[2] = v02;
    v[3] = v03;
    v[4] = v10;
    v[5] = v11;
    v[6] = v12;
    v[7] = v13;
    v[8] = v20;
    v[9] = v21;
    v[10] = v22;
    v[11] = v23;
    v[12] = v30;
    v[13] = v31;
    v[14] = v32;
    v[15] = v33;
  }
  function Matrix__toString_impl_l0abk0($this) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_11 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_12 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_13 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp$ret$15 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    return trimIndent('\n            |' + tmp + ' ' + tmp_0 + ' ' + tmp_1 + ' ' + tmp_2 + '|\n            |' + tmp_3 + ' ' + tmp_4 + ' ' + tmp_5 + ' ' + tmp_6 + '|\n            |' + tmp_7 + ' ' + tmp_8 + ' ' + tmp_9 + ' ' + tmp_10 + '|\n            |' + tmp_11 + ' ' + tmp_12 + ' ' + tmp_13 + ' ' + tmp$ret$15 + '|\n        ');
  }
  function Matrix__reset_impl_4l49i7($this) {
    var v = _Matrix___get_values__impl__fblr7b($this);
    if (v.length < 16)
      return Unit_instance;
    v[0] = 1.0;
    v[1] = 0.0;
    v[2] = 0.0;
    v[3] = 0.0;
    v[4] = 0.0;
    v[5] = 1.0;
    v[6] = 0.0;
    v[7] = 0.0;
    v[8] = 0.0;
    v[9] = 0.0;
    v[10] = 1.0;
    v[11] = 0.0;
    v[12] = 0.0;
    v[13] = 0.0;
    v[14] = 0.0;
    v[15] = 1.0;
  }
  function Matrix__rotateX_impl_3e5y7j($this, degrees) {
    if (_Matrix___get_values__impl__fblr7b($this).length < 16)
      return Unit_instance;
    var r = degrees * (3.141592653589793 / 180.0);
    // Inline function 'kotlin.math.sin' call
    var s = Math.sin(r);
    // Inline function 'kotlin.math.cos' call
    var c = Math.cos(r);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a01 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    var v01 = a01 * c - a02 * s;
    var v02 = a01 * s + a02 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a11 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    var v11 = a11 * c - a12 * s;
    var v12 = a11 * s + a12 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a21 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a22 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    var v21 = a21 * c - a22 * s;
    var v22 = a21 * s + a22 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a31 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a32 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    var v31 = a31 * c - a32 * s;
    var v32 = a31 * s + a32 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] = v21;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0] = v31;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = v32;
  }
  function Matrix__rotateY_impl_2x4btc($this, degrees) {
    if (_Matrix___get_values__impl__fblr7b($this).length < 16)
      return Unit_instance;
    var r = degrees * (3.141592653589793 / 180.0);
    // Inline function 'kotlin.math.sin' call
    var s = Math.sin(r);
    // Inline function 'kotlin.math.cos' call
    var c = Math.cos(r);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a00 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    var v00 = a00 * c + a02 * s;
    var v02 = -a00 * s + a02 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a10 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    var v10 = a10 * c + a12 * s;
    var v12 = -a10 * s + a12 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a20 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a22 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    var v20 = a20 * c + a22 * s;
    var v22 = -a20 * s + a22 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a30 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a32 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    var v30 = a30 * c + a32 * s;
    var v32 = -a30 * s + a32 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] = v20;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0] = v30;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = v32;
  }
  function Matrix__rotateZ_impl_2g2pf5($this, degrees) {
    if (_Matrix___get_values__impl__fblr7b($this).length < 16)
      return Unit_instance;
    var r = degrees * (3.141592653589793 / 180.0);
    // Inline function 'kotlin.math.sin' call
    var s = Math.sin(r);
    // Inline function 'kotlin.math.cos' call
    var c = Math.cos(r);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a00 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a10 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    var v00 = c * a00 + s * a10;
    var v10 = -s * a00 + c * a10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a01 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a11 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    var v01 = c * a01 + s * a11;
    var v11 = -s * a01 + c * a11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    var v02 = c * a02 + s * a12;
    var v12 = -s * a02 + c * a12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a03 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a13 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    var v03 = c * a03 + s * a13;
    var v13 = -s * a03 + c * a13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] = v03;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] = v13;
  }
  function Matrix__scale_impl_6w89a4($this, x, y, z) {
    if (_Matrix___get_values__impl__fblr7b($this).length < 16)
      return Unit_instance;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_0 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v_0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_1 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v_1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_2 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] = v_2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_3 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v_3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_4 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v_4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_5 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v_5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_6 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] = v_6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_7 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] = v_7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_8 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] = v_8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_9 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v_9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_10 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] = v_10;
  }
  function Matrix__scale$default_impl_snaws9($this, x, y, z, $super) {
    x = x === VOID ? 1.0 : x;
    y = y === VOID ? 1.0 : y;
    z = z === VOID ? 1.0 : z;
    var tmp;
    if ($super === VOID) {
      Matrix__scale_impl_6w89a4($this, x, y, z);
      tmp = Unit_instance;
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Matrix(tmp_0)).g4m.call(new Matrix($this), x, y, z);
    }
    return tmp;
  }
  function Matrix__translate_impl_1hftog($this, x, y, z) {
    if (_Matrix___get_values__impl__fblr7b($this).length < 16)
      return Unit_instance;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = tmp_0 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t1 = tmp_1 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = tmp_2 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = tmp_3 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t2 = tmp_4 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = tmp_5 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = tmp_6 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t3 = tmp_7 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = tmp_8 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = tmp_9 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t4 = tmp_10 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0] = t1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0] = t2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = t3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0] = t4;
  }
  function Matrix__translate$default_impl_10t8ql($this, x, y, z, $super) {
    x = x === VOID ? 0.0 : x;
    y = y === VOID ? 0.0 : y;
    z = z === VOID ? 0.0 : z;
    var tmp;
    if ($super === VOID) {
      Matrix__translate_impl_1hftog($this, x, y, z);
      tmp = Unit_instance;
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Matrix(tmp_0)).h4m.call(new Matrix($this), x, y, z);
    }
    return tmp;
  }
  function Companion_6() {
    this.i4m_1 = 0;
    this.j4m_1 = 1;
    this.k4m_1 = 3;
    this.l4m_1 = 4;
    this.m4m_1 = 5;
    this.n4m_1 = 7;
    this.o4m_1 = 10;
    this.p4m_1 = 12;
    this.q4m_1 = 13;
    this.r4m_1 = 14;
    this.s4m_1 = 15;
  }
  var Companion_instance_8;
  function Companion_getInstance_19() {
    return Companion_instance_8;
  }
  function Matrix__hashCode_impl_s9ntm9($this) {
    return hashCode($this);
  }
  function Matrix__equals_impl_g5p8p9($this, other) {
    if (!(other instanceof Matrix))
      return false;
    var tmp0_other_with_cast = other.f4m_1;
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Matrix(values) {
    this.f4m_1 = values;
  }
  protoOf(Matrix).toString = function () {
    return Matrix__toString_impl_l0abk0(this.f4m_1);
  };
  protoOf(Matrix).hashCode = function () {
    return Matrix__hashCode_impl_s9ntm9(this.f4m_1);
  };
  protoOf(Matrix).equals = function (other) {
    return Matrix__equals_impl_g5p8p9(this.f4m_1, other);
  };
  function isIdentity(_this__u8e3s4) {
    var v = _Matrix___get_values__impl__fblr7b(_this__u8e3s4);
    if (v.length < 16)
      return false;
    return v[0] === 1.0 && v[1] === 0.0 && v[2] === 0.0 && v[3] === 0.0 && v[4] === 0.0 && v[5] === 1.0 && v[6] === 0.0 && v[7] === 0.0 && v[8] === 0.0 && v[9] === 0.0 && v[10] === 1.0 && v[11] === 0.0 && v[12] === 0.0 && v[13] === 0.0 && v[14] === 0.0 && v[15] === 1.0;
  }
  function Rectangle(rect) {
    Outline.call(this);
    this.t4m_1 = rect;
  }
  protoOf(Rectangle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rectangle))
      return false;
    if (!this.t4m_1.equals(other.t4m_1))
      return false;
    return true;
  };
  protoOf(Rectangle).hashCode = function () {
    return this.t4m_1.hashCode();
  };
  function Rounded(roundRect) {
    Outline.call(this);
    this.u4m_1 = roundRect;
    var tmp = this;
    var tmp_0;
    if (!get_isSimple(this.u4m_1)) {
      // Inline function 'kotlin.apply' call
      var this_0 = Path_0();
      this_0.w4m(this.u4m_1);
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    tmp.v4m_1 = tmp_0;
  }
  protoOf(Rounded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rounded))
      return false;
    if (!this.u4m_1.equals(other.u4m_1))
      return false;
    return true;
  };
  protoOf(Rounded).hashCode = function () {
    return this.u4m_1.hashCode();
  };
  function Generic(path) {
    Outline.call(this);
    this.x4m_1 = path;
  }
  function Outline() {
  }
  function drawOutline(_this__u8e3s4, outline, color, alpha, style, colorFilter, blendMode) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().y4m_1 : blendMode;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp;
    if (outline instanceof Rectangle) {
      var rect = outline.t4m_1;
      _this__u8e3s4.c4n(color, topLeft(rect), size(rect), alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      if (outline instanceof Rounded) {
        var path = outline.v4m_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.a4n(path, color, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_instance;
        } else {
          var rrect = outline.u4m_1;
          // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
          var this_0 = rrect.e3q_1;
          // Inline function 'androidx.compose.ui.util.unpackFloat1' call
          var value = _CornerRadius___get_packedValue__impl__okv4jq(this_0);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          // Inline function 'kotlin.fromBits' call
          var bits = convertToInt(shiftRight(value, 32));
          var radius = floatFromBits(bits);
          var tmp0_topLeft = topLeft_0(rrect);
          var tmp1_size = size_0(rrect);
          // Inline function 'androidx.compose.ui.geometry.CornerRadius' call
          // Inline function 'androidx.compose.ui.util.packFloats' call
          var v1 = fromInt(toRawBits(radius));
          var v2 = fromInt(toRawBits(radius));
          var tmp$ret$9 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
          var tmp2_cornerRadius = _CornerRadius___init__impl__ojmabe(tmp$ret$9);
          _this__u8e3s4.b4n(color, tmp0_topLeft, tmp1_size, tmp2_cornerRadius, style, alpha, colorFilter, blendMode);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        if (outline instanceof Generic) {
          var path_0 = outline.x4m_1;
          _this__u8e3s4.a4n(path_0, color, alpha, style, colorFilter, blendMode);
          tmp = Unit_instance;
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function drawOutline_0(_this__u8e3s4, outline, brush, alpha, style, colorFilter, blendMode) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_35().y4m_1 : blendMode;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp;
    if (outline instanceof Rectangle) {
      var rect = outline.t4m_1;
      _this__u8e3s4.f4n(brush, topLeft(rect), size(rect), alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      if (outline instanceof Rounded) {
        var path = outline.v4m_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.d4n(path, brush, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_instance;
        } else {
          var rrect = outline.u4m_1;
          // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
          var this_0 = rrect.e3q_1;
          // Inline function 'androidx.compose.ui.util.unpackFloat1' call
          var value = _CornerRadius___get_packedValue__impl__okv4jq(this_0);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          // Inline function 'kotlin.fromBits' call
          var bits = convertToInt(shiftRight(value, 32));
          var radius = floatFromBits(bits);
          var tmp_1 = topLeft_0(rrect);
          var tmp_2 = size_0(rrect);
          // Inline function 'androidx.compose.ui.geometry.CornerRadius' call
          // Inline function 'androidx.compose.ui.util.packFloats' call
          var v1 = fromInt(toRawBits(radius));
          var v2 = fromInt(toRawBits(radius));
          var tmp$ret$9 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
          var tmp$ret$8 = _CornerRadius___init__impl__ojmabe(tmp$ret$9);
          _this__u8e3s4.e4n(brush, tmp_1, tmp_2, tmp$ret$8, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        if (outline instanceof Generic) {
          var path_0 = outline.x4m_1;
          _this__u8e3s4.d4n(path_0, brush, alpha, style, colorFilter, blendMode);
          tmp = Unit_instance;
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function topLeft(_this__u8e3s4) {
    var tmp0 = _this__u8e3s4.n3p_1;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _this__u8e3s4.o3p_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$1);
  }
  function size(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.geometry.Rect.width' call
    var tmp0 = _this__u8e3s4.p3p_1 - _this__u8e3s4.n3p_1;
    // Inline function 'androidx.compose.ui.geometry.Rect.height' call
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _this__u8e3s4.q3p_1 - _this__u8e3s4.o3p_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$3 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$3);
  }
  function topLeft_0(_this__u8e3s4) {
    var tmp0 = _this__u8e3s4.x3p_1;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _this__u8e3s4.y3p_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$1);
  }
  function size_0(_this__u8e3s4) {
    var tmp0 = _this__u8e3s4.h3q();
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _this__u8e3s4.i3q();
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$1);
  }
  function _PaintingStyle___init__impl__pwxppo(value) {
    return value;
  }
  function Companion_7() {
    Companion_instance_9 = this;
    this.g4n_1 = _PaintingStyle___init__impl__pwxppo(0);
    this.h4n_1 = _PaintingStyle___init__impl__pwxppo(1);
  }
  var Companion_instance_9;
  function Companion_getInstance_20() {
    if (Companion_instance_9 == null)
      new Companion_7();
    return Companion_instance_9;
  }
  var Direction_CounterClockwise_instance;
  var Direction_Clockwise_instance;
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_instance;
    Direction_entriesInitialized = true;
    Direction_CounterClockwise_instance = new Direction('CounterClockwise', 0);
    Direction_Clockwise_instance = new Direction('Clockwise', 1);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Direction_CounterClockwise_getInstance() {
    Direction_initEntries();
    return Direction_CounterClockwise_instance;
  }
  function Path() {
  }
  function _PathFillType___init__impl__d59lzz(value) {
    return value;
  }
  function Companion_8() {
    Companion_instance_10 = this;
    this.c4o_1 = _PathFillType___init__impl__d59lzz(0);
    this.d4o_1 = _PathFillType___init__impl__d59lzz(1);
  }
  var Companion_instance_10;
  function Companion_getInstance_21() {
    if (Companion_instance_10 == null)
      new Companion_8();
    return Companion_instance_10;
  }
  function PathFillType__toString_impl_nw7h1d($this) {
    return $this === Companion_getInstance_21().c4o_1 ? 'NonZero' : $this === Companion_getInstance_21().d4o_1 ? 'EvenOdd' : 'Unknown';
  }
  function PathFillType__hashCode_impl_pdqo4w($this) {
    return $this;
  }
  function PathFillType__equals_impl_94fhtg($this, other) {
    if (!(other instanceof PathFillType))
      return false;
    if (!($this === other.e4o_1))
      return false;
    return true;
  }
  function PathFillType(value) {
    Companion_getInstance_21();
    this.e4o_1 = value;
  }
  protoOf(PathFillType).toString = function () {
    return PathFillType__toString_impl_nw7h1d(this.e4o_1);
  };
  protoOf(PathFillType).hashCode = function () {
    return PathFillType__hashCode_impl_pdqo4w(this.e4o_1);
  };
  protoOf(PathFillType).equals = function (other) {
    return PathFillType__equals_impl_94fhtg(this.e4o_1, other);
  };
  function _PathOperation___init__impl__8ddeif(value) {
    return value;
  }
  function Companion_9() {
    Companion_instance_11 = this;
    this.f4o_1 = _PathOperation___init__impl__8ddeif(0);
    this.g4o_1 = _PathOperation___init__impl__8ddeif(1);
    this.h4o_1 = _PathOperation___init__impl__8ddeif(2);
    this.i4o_1 = _PathOperation___init__impl__8ddeif(3);
    this.j4o_1 = _PathOperation___init__impl__8ddeif(4);
  }
  var Companion_instance_11;
  function Companion_getInstance_22() {
    if (Companion_instance_11 == null)
      new Companion_9();
    return Companion_instance_11;
  }
  function get_RectangleShape() {
    _init_properties_RectangleShape_kt__k3dd0u();
    return RectangleShape;
  }
  var RectangleShape;
  function RectangleShape$1() {
  }
  protoOf(RectangleShape$1).k4o = function (size, layoutDirection, density) {
    return new Rectangle(toRect(size));
  };
  protoOf(RectangleShape$1).toString = function () {
    return 'RectangleShape';
  };
  var properties_initialized_RectangleShape_kt_h73j90;
  function _init_properties_RectangleShape_kt__k3dd0u() {
    if (!properties_initialized_RectangleShape_kt_h73j90) {
      properties_initialized_RectangleShape_kt_h73j90 = true;
      RectangleShape = new RectangleShape$1();
    }
  }
  function LinearGradientShader(from, to, colors, colorStops, tileMode) {
    colorStops = colorStops === VOID ? null : colorStops;
    tileMode = tileMode === VOID ? Companion_getInstance_26().a4i_1 : tileMode;
    return ActualLinearGradientShader(from, to, colors, colorStops, tileMode);
  }
  function RadialGradientShader(center, radius, colors, colorStops, tileMode) {
    colorStops = colorStops === VOID ? null : colorStops;
    tileMode = tileMode === VOID ? Companion_getInstance_26().a4i_1 : tileMode;
    return ActualRadialGradientShader(center, radius, colors, colorStops, tileMode);
  }
  function SweepGradientShader(center, colors, colorStops) {
    colorStops = colorStops === VOID ? null : colorStops;
    return ActualSweepGradientShader(center, colors, colorStops);
  }
  function Companion_10() {
    Companion_instance_12 = this;
    this.l4o_1 = new Shadow();
  }
  var Companion_instance_12;
  function Companion_getInstance_23() {
    if (Companion_instance_12 == null)
      new Companion_10();
    return Companion_instance_12;
  }
  function Shadow(color, offset, blurRadius) {
    Companion_getInstance_23();
    color = color === VOID ? Color_1(new Long(-16777216, 0)) : color;
    offset = offset === VOID ? Companion_getInstance_0().j3p_1 : offset;
    blurRadius = blurRadius === VOID ? 0.0 : blurRadius;
    this.m4o_1 = color;
    this.n4o_1 = offset;
    this.o4o_1 = blurRadius;
  }
  protoOf(Shadow).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!equals(this.m4o_1, other.m4o_1))
      return false;
    if (!equals(this.n4o_1, other.n4o_1))
      return false;
    if (!(this.o4o_1 === other.o4o_1))
      return false;
    return true;
  };
  protoOf(Shadow).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.m4o_1);
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.n4o_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.o4o_1) | 0;
    return result;
  };
  protoOf(Shadow).toString = function () {
    return 'Shadow(color=' + Color__toString_impl_hpzmaq(this.m4o_1) + ', offset=' + Offset__toString_impl_4ffbou(this.n4o_1) + ', blurRadius=' + this.o4o_1 + ')';
  };
  function _StrokeCap___init__impl__kfgr27(value) {
    return value;
  }
  function Companion_11() {
    Companion_instance_13 = this;
    this.p4o_1 = _StrokeCap___init__impl__kfgr27(0);
    this.q4o_1 = _StrokeCap___init__impl__kfgr27(1);
    this.r4o_1 = _StrokeCap___init__impl__kfgr27(2);
  }
  var Companion_instance_13;
  function Companion_getInstance_24() {
    if (Companion_instance_13 == null)
      new Companion_11();
    return Companion_instance_13;
  }
  function StrokeCap__toString_impl_3xn0rd($this) {
    return $this === Companion_getInstance_24().p4o_1 ? 'Butt' : $this === Companion_getInstance_24().q4o_1 ? 'Round' : $this === Companion_getInstance_24().r4o_1 ? 'Square' : 'Unknown';
  }
  function StrokeCap__hashCode_impl_posxk8($this) {
    return $this;
  }
  function StrokeCap__equals_impl_m9bjik($this, other) {
    if (!(other instanceof StrokeCap))
      return false;
    if (!($this === other.s4o_1))
      return false;
    return true;
  }
  function StrokeCap(value) {
    Companion_getInstance_24();
    this.s4o_1 = value;
  }
  protoOf(StrokeCap).toString = function () {
    return StrokeCap__toString_impl_3xn0rd(this.s4o_1);
  };
  protoOf(StrokeCap).hashCode = function () {
    return StrokeCap__hashCode_impl_posxk8(this.s4o_1);
  };
  protoOf(StrokeCap).equals = function (other) {
    return StrokeCap__equals_impl_m9bjik(this.s4o_1, other);
  };
  function _StrokeJoin___init__impl__ig23zz(value) {
    return value;
  }
  function Companion_12() {
    Companion_instance_14 = this;
    this.t4o_1 = _StrokeJoin___init__impl__ig23zz(0);
    this.u4o_1 = _StrokeJoin___init__impl__ig23zz(1);
    this.v4o_1 = _StrokeJoin___init__impl__ig23zz(2);
  }
  var Companion_instance_14;
  function Companion_getInstance_25() {
    if (Companion_instance_14 == null)
      new Companion_12();
    return Companion_instance_14;
  }
  function StrokeJoin__toString_impl_ph4e1r($this) {
    return $this === Companion_getInstance_25().t4o_1 ? 'Miter' : $this === Companion_getInstance_25().u4o_1 ? 'Round' : $this === Companion_getInstance_25().v4o_1 ? 'Bevel' : 'Unknown';
  }
  function StrokeJoin__hashCode_impl_3pyh8w($this) {
    return $this;
  }
  function StrokeJoin__equals_impl_hf9ej8($this, other) {
    if (!(other instanceof StrokeJoin))
      return false;
    if (!($this === other.w4o_1))
      return false;
    return true;
  }
  function StrokeJoin(value) {
    Companion_getInstance_25();
    this.w4o_1 = value;
  }
  protoOf(StrokeJoin).toString = function () {
    return StrokeJoin__toString_impl_ph4e1r(this.w4o_1);
  };
  protoOf(StrokeJoin).hashCode = function () {
    return StrokeJoin__hashCode_impl_3pyh8w(this.w4o_1);
  };
  protoOf(StrokeJoin).equals = function (other) {
    return StrokeJoin__equals_impl_hf9ej8(this.w4o_1, other);
  };
  function _TileMode___init__impl__syhjao(value) {
    return value;
  }
  function Companion_13() {
    Companion_instance_15 = this;
    this.a4i_1 = _TileMode___init__impl__syhjao(0);
    this.b4i_1 = _TileMode___init__impl__syhjao(1);
    this.c4i_1 = _TileMode___init__impl__syhjao(2);
    this.d4i_1 = _TileMode___init__impl__syhjao(3);
  }
  var Companion_instance_15;
  function Companion_getInstance_26() {
    if (Companion_instance_15 == null)
      new Companion_13();
    return Companion_instance_15;
  }
  function TileMode__toString_impl_tlb7f4($this) {
    return $this === Companion_getInstance_26().a4i_1 ? 'Clamp' : $this === Companion_getInstance_26().b4i_1 ? 'Repeated' : $this === Companion_getInstance_26().c4i_1 ? 'Mirror' : $this === Companion_getInstance_26().d4i_1 ? 'Decal' : 'Unknown';
  }
  function TileMode__hashCode_impl_7u5am9($this) {
    return $this;
  }
  function TileMode__equals_impl_7nvbdv($this, other) {
    if (!(other instanceof TileMode))
      return false;
    if (!($this === other.x4o_1))
      return false;
    return true;
  }
  function TileMode(value) {
    Companion_getInstance_26();
    this.x4o_1 = value;
  }
  protoOf(TileMode).toString = function () {
    return TileMode__toString_impl_tlb7f4(this.x4o_1);
  };
  protoOf(TileMode).hashCode = function () {
    return TileMode__hashCode_impl_7u5am9(this.x4o_1);
  };
  protoOf(TileMode).equals = function (other) {
    return TileMode__equals_impl_7nvbdv(this.x4o_1, other);
  };
  function Adaptation$Companion$Bradford$1() {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.8951, -0.7502, 0.0389, 0.2664, 1.7135, -0.0685, -0.1614, 0.0367, 1.0296]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$Bradford$1).toString = function () {
    return 'Bradford';
  };
  function Adaptation$Companion$VonKries$1() {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.40024, -0.2263, 0.0, 0.7076, 1.16532, 0.0, -0.08081, 0.0457, 0.91822]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$VonKries$1).toString = function () {
    return 'VonKries';
  };
  function Adaptation$Companion$Ciecat02$1() {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.7328, -0.7036, 0.003, 0.4296, 1.6975, 0.0136, -0.1624, 0.0061, 0.9834]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$Ciecat02$1).toString = function () {
    return 'Ciecat02';
  };
  function Companion_14() {
    Companion_instance_16 = this;
    var tmp = this;
    tmp.y4o_1 = new Adaptation$Companion$Bradford$1();
    var tmp_0 = this;
    tmp_0.z4o_1 = new Adaptation$Companion$VonKries$1();
    var tmp_1 = this;
    tmp_1.a4p_1 = new Adaptation$Companion$Ciecat02$1();
  }
  var Companion_instance_16;
  function Companion_getInstance_27() {
    if (Companion_instance_16 == null)
      new Companion_14();
    return Companion_instance_16;
  }
  function Adaptation(transform) {
    Companion_getInstance_27();
    this.b4p_1 = transform;
  }
  function _ColorModel___init__impl__b968n9(packedValue) {
    return packedValue;
  }
  function _ColorModel___get_packedValue__impl__uvxrhj($this) {
    return $this;
  }
  function _ColorModel___get_componentCount__impl__au0uoc($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _ColorModel___get_packedValue__impl__uvxrhj($this);
    return convertToInt(shiftRight(value, 32));
  }
  function Companion_15() {
    Companion_instance_17 = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$0 = bitwiseOr(shiftLeft(fromInt(3), 32), bitwiseAnd(fromInt(0), new Long(-1, 0)));
    tmp.c4p_1 = _ColorModel___init__impl__b968n9(tmp$ret$0);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(3), 32), bitwiseAnd(fromInt(1), new Long(-1, 0)));
    tmp_0.d4p_1 = _ColorModel___init__impl__b968n9(tmp$ret$1);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$2 = bitwiseOr(shiftLeft(fromInt(3), 32), bitwiseAnd(fromInt(2), new Long(-1, 0)));
    tmp_1.e4p_1 = _ColorModel___init__impl__b968n9(tmp$ret$2);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$3 = bitwiseOr(shiftLeft(fromInt(4), 32), bitwiseAnd(fromInt(3), new Long(-1, 0)));
    tmp_2.f4p_1 = _ColorModel___init__impl__b968n9(tmp$ret$3);
  }
  var Companion_instance_17;
  function Companion_getInstance_28() {
    if (Companion_instance_17 == null)
      new Companion_15();
    return Companion_instance_17;
  }
  function ColorModel__toString_impl_msukd7($this) {
    return equals($this, Companion_getInstance_28().c4p_1) ? 'Rgb' : equals($this, Companion_getInstance_28().d4p_1) ? 'Xyz' : equals($this, Companion_getInstance_28().e4p_1) ? 'Lab' : equals($this, Companion_getInstance_28().f4p_1) ? 'Cmyk' : 'Unknown';
  }
  function ColorModel__hashCode_impl_11onkc($this) {
    return $this.hashCode();
  }
  function Companion_16() {
    this.g4p_1 = -1;
    this.h4p_1 = 63;
  }
  var Companion_instance_18;
  function Companion_getInstance_29() {
    return Companion_instance_18;
  }
  function ColorSpace(name, model, id) {
    this.h4l_1 = name;
    this.i4l_1 = model;
    this.j4l_1 = id;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.h4l_1;
    if (charSequenceLength(this_0) === 0) {
      throw IllegalArgumentException_init_$Create$('The name of a color space cannot be null and must contain at least 1 character');
    }
    if (this.j4l_1 < -1 || this.j4l_1 > 63) {
      throw IllegalArgumentException_init_$Create$('The id must be between -1 and 63');
    }
  }
  protoOf(ColorSpace).m4l = function () {
    return _ColorModel___get_componentCount__impl__au0uoc(this.i4l_1);
  };
  protoOf(ColorSpace).l4l = function () {
    return false;
  };
  protoOf(ColorSpace).i4p = function (r, g, b) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([r, g, b]);
    return this.j4p(tmp$ret$0);
  };
  protoOf(ColorSpace).k4p = function (v0, v1, v2) {
    var xyz = this.i4p(v0, v1, v2);
    var tmp0 = xyz[0];
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = xyz[1];
    var v1_0 = fromInt(toRawBits(tmp0));
    var v2_0 = fromInt(toRawBits(val2));
    return bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
  };
  protoOf(ColorSpace).l4p = function (v0, v1, v2) {
    var xyz = this.i4p(v0, v1, v2);
    return xyz[2];
  };
  protoOf(ColorSpace).m4p = function (x, y, z, a, colorSpace) {
    var colors = this.n4p(x, y, z);
    return Color_2(colors[0], colors[1], colors[2], a, colorSpace);
  };
  protoOf(ColorSpace).n4p = function (x, y, z) {
    var xyz = new Float32Array(_ColorModel___get_componentCount__impl__au0uoc(this.i4l_1));
    xyz[0] = x;
    xyz[1] = y;
    xyz[2] = z;
    return this.o4p(xyz);
  };
  protoOf(ColorSpace).toString = function () {
    return this.h4l_1 + ' (id=' + this.j4l_1 + ', model=' + ColorModel__toString_impl_msukd7(this.i4l_1) + ')';
  };
  protoOf(ColorSpace).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other))) {
      return false;
    }
    var that = other instanceof ColorSpace ? other : THROW_CCE();
    if (!(this.j4l_1 === that.j4l_1))
      return false;
    return !(this.h4l_1 === that.h4l_1) ? false : equals(this.i4l_1, that.i4l_1);
  };
  protoOf(ColorSpace).hashCode = function () {
    var result = getStringHashCode(this.h4l_1);
    result = imul(31, result) + ColorModel__hashCode_impl_11onkc(this.i4l_1) | 0;
    result = imul(31, result) + this.j4l_1 | 0;
    return result;
  };
  function connect(_this__u8e3s4, destination, intent) {
    destination = destination === VOID ? ColorSpaces_getInstance().d4k_1 : destination;
    intent = intent === VOID ? Companion_getInstance_33().p4p_1 : intent;
    var srcId = _this__u8e3s4.j4l_1;
    var dstId = destination.j4l_1;
    var tmp;
    if ((srcId | dstId) < 0) {
      tmp = createConnector(_this__u8e3s4, destination, intent);
    } else {
      var tmp0 = get_Connectors();
      // Inline function 'androidx.compose.ui.graphics.colorspace.connectorKey' call
      // Inline function 'androidx.collection.MutableIntObjectMap.getOrPut' call
      var key = srcId | dstId << 6 | _RenderIntent___get_value__impl__ip9mbh(intent) << 12;
      var tmp0_elvis_lhs = tmp0.m(key);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = createConnector(_this__u8e3s4, destination, intent);
        tmp0.lj(key, this_0);
        tmp_0 = this_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function createConnector(source, destination, intent) {
    var tmp;
    if (source === destination) {
      tmp = Companion_instance_19.t4p(source);
    } else if (equals(source.i4l_1, Companion_getInstance_28().c4p_1) && equals(destination.i4l_1, Companion_getInstance_28().c4p_1)) {
      var tmp_0 = source instanceof Rgb ? source : THROW_CCE();
      tmp = new RgbConnector(tmp_0, destination instanceof Rgb ? destination : THROW_CCE(), intent);
    } else {
      tmp = Connector_init_$Create$(source, destination, intent);
    }
    return tmp;
  }
  function absRcpResponse(x, a, b, c, d, g) {
    return withSign(rcpResponse(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function absResponse(x, a, b, c, d, g) {
    return withSign(response(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function adapt(_this__u8e3s4, whitePoint, adaptation) {
    adaptation = adaptation === VOID ? Companion_getInstance_27().y4o_1 : adaptation;
    if (equals(_this__u8e3s4.i4l_1, Companion_getInstance_28().c4p_1)) {
      var rgb = _this__u8e3s4 instanceof Rgb ? _this__u8e3s4 : THROW_CCE();
      if (compare_1(rgb.x4p_1, whitePoint)) {
        return _this__u8e3s4;
      }
      var xyz = whitePoint.o4q();
      var adaptationTransform = chromaticAdaptation(adaptation.b4p_1, rgb.x4p_1.o4q(), xyz);
      var transform = mul3x3(adaptationTransform, rgb.c4q_1);
      return Rgb_init_$Create$_1(rgb, transform, whitePoint);
    }
    return _this__u8e3s4;
  }
  function compare_0(a, b) {
    if (a === b)
      return true;
    var inductionVariable = 0;
    var last = a.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp;
        if (!(compareTo(a[i], b[i]) === 0)) {
          // Inline function 'kotlin.math.abs' call
          var x = a[i] - b[i];
          tmp = Math.abs(x) > 0.001;
        } else {
          tmp = false;
        }
        if (tmp)
          return false;
      }
       while (inductionVariable <= last);
    return true;
  }
  function mul3x3Float3(lhs, rhs) {
    if (lhs.length < 9)
      return rhs;
    if (rhs.length < 3)
      return rhs;
    var r0 = rhs[0];
    var r1 = rhs[1];
    var r2 = rhs[2];
    rhs[0] = lhs[0] * r0 + lhs[3] * r1 + lhs[6] * r2;
    rhs[1] = lhs[1] * r0 + lhs[4] * r1 + lhs[7] * r2;
    rhs[2] = lhs[2] * r0 + lhs[5] * r1 + lhs[8] * r2;
    return rhs;
  }
  function compare_1(a, b) {
    if (a === b)
      return true;
    var tmp;
    // Inline function 'kotlin.math.abs' call
    var x = a.m4q_1 - b.m4q_1;
    if (Math.abs(x) < 0.001) {
      // Inline function 'kotlin.math.abs' call
      var x_0 = a.n4q_1 - b.n4q_1;
      tmp = Math.abs(x_0) < 0.001;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function mul3x3(lhs, rhs) {
    var r = new Float32Array(9);
    if (lhs.length < 9)
      return r;
    if (rhs.length < 9)
      return r;
    r[0] = lhs[0] * rhs[0] + lhs[3] * rhs[1] + lhs[6] * rhs[2];
    r[1] = lhs[1] * rhs[0] + lhs[4] * rhs[1] + lhs[7] * rhs[2];
    r[2] = lhs[2] * rhs[0] + lhs[5] * rhs[1] + lhs[8] * rhs[2];
    r[3] = lhs[0] * rhs[3] + lhs[3] * rhs[4] + lhs[6] * rhs[5];
    r[4] = lhs[1] * rhs[3] + lhs[4] * rhs[4] + lhs[7] * rhs[5];
    r[5] = lhs[2] * rhs[3] + lhs[5] * rhs[4] + lhs[8] * rhs[5];
    r[6] = lhs[0] * rhs[6] + lhs[3] * rhs[7] + lhs[6] * rhs[8];
    r[7] = lhs[1] * rhs[6] + lhs[4] * rhs[7] + lhs[7] * rhs[8];
    r[8] = lhs[2] * rhs[6] + lhs[5] * rhs[7] + lhs[8] * rhs[8];
    return r;
  }
  function chromaticAdaptation(matrix, srcWhitePoint, dstWhitePoint) {
    var srcLMS = mul3x3Float3(matrix, srcWhitePoint);
    var dstLMS = mul3x3Float3(matrix, dstWhitePoint);
    // Inline function 'kotlin.floatArrayOf' call
    var LMS = new Float32Array([dstLMS[0] / srcLMS[0], dstLMS[1] / srcLMS[1], dstLMS[2] / srcLMS[2]]);
    return mul3x3(inverse3x3(matrix), mul3x3Diag(LMS, matrix));
  }
  function inverse3x3(m) {
    var a = m[0];
    var b = m[3];
    var c = m[6];
    var d = m[1];
    var e = m[4];
    var f = m[7];
    var g = m[2];
    var h = m[5];
    var i = m[8];
    var xA = e * i - f * h;
    var xB = f * g - d * i;
    var xC = d * h - e * g;
    var det = a * xA + b * xB + c * xC;
    var inverted = new Float32Array(m.length);
    inverted[0] = xA / det;
    inverted[1] = xB / det;
    inverted[2] = xC / det;
    inverted[3] = (c * h - b * i) / det;
    inverted[4] = (a * i - c * g) / det;
    inverted[5] = (b * g - a * h) / det;
    inverted[6] = (b * f - c * e) / det;
    inverted[7] = (c * d - a * f) / det;
    inverted[8] = (a * e - b * d) / det;
    return inverted;
  }
  function mul3x3Diag(lhs, rhs) {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([lhs[0] * rhs[0], lhs[1] * rhs[1], lhs[2] * rhs[2], lhs[0] * rhs[3], lhs[1] * rhs[4], lhs[2] * rhs[5], lhs[0] * rhs[6], lhs[1] * rhs[7], lhs[2] * rhs[8]]);
  }
  function rcpResponse(x, a, b, c, d, g) {
    var tmp;
    if (x >= d * c) {
      // Inline function 'kotlin.math.pow' call
      var x_0 = 1.0 / g;
      tmp = (Math.pow(x, x_0) - b) / a;
    } else {
      tmp = x / c;
    }
    return tmp;
  }
  function rcpResponse_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d * c) {
      var tmp0 = x - e;
      // Inline function 'kotlin.math.pow' call
      var x_0 = 1.0 / g;
      tmp = (Math.pow(tmp0, x_0) - b) / a;
    } else {
      tmp = (x - f) / c;
    }
    return tmp;
  }
  function response(x, a, b, c, d, g) {
    var tmp;
    if (x >= d) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = a * x + b;
      tmp = Math.pow(this_0, g);
    } else {
      tmp = c * x;
    }
    return tmp;
  }
  function response_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = a * x + b;
      tmp = Math.pow(this_0, g) + e;
    } else {
      tmp = c * x + f;
    }
    return tmp;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(function_0) {
    this.p4q_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).q4q = function (double) {
    return this.p4q_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).r2 = function () {
    return this.p4q_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).hashCode = function () {
    return hashCode(this.r2());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(function_0) {
    this.r4q_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).q4q = function (double) {
    return this.r4q_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).r2 = function () {
    return this.r4q_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).hashCode = function () {
    return hashCode(this.r2());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(function_0) {
    this.s4q_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).q4q = function (double) {
    return this.s4q_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).r2 = function () {
    return this.s4q_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).hashCode = function () {
    return hashCode(this.r2());
  };
  function ColorSpaces$ExtendedSrgb$lambda(x) {
    return absRcpResponse(x, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045, 2.4);
  }
  function ColorSpaces$ExtendedSrgb$lambda_0(x) {
    return absResponse(x, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045, 2.4);
  }
  function ColorSpaces$Bt2020Hlg$lambda(x) {
    return ColorSpaces_getInstance().t4q(ColorSpaces_getInstance().b4k_1, x);
  }
  function ColorSpaces$Bt2020Hlg$lambda_0(x) {
    return ColorSpaces_getInstance().u4q(ColorSpaces_getInstance().b4k_1, x);
  }
  function ColorSpaces$Bt2020Pq$lambda(x) {
    return ColorSpaces_getInstance().v4q(ColorSpaces_getInstance().c4k_1, x);
  }
  function ColorSpaces$Bt2020Pq$lambda_0(x) {
    return ColorSpaces_getInstance().w4q(ColorSpaces_getInstance().c4k_1, x);
  }
  function ColorSpaces() {
    ColorSpaces_instance = this;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.w4j_1 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    var tmp_0 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_0.x4j_1 = new Float32Array([0.67, 0.33, 0.21, 0.71, 0.14, 0.08]);
    var tmp_1 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_1.y4j_1 = new Float32Array([0.708, 0.292, 0.17, 0.797, 0.131, 0.046]);
    this.z4j_1 = new TransferParameters(2.4, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045);
    this.a4k_1 = new TransferParameters(2.2, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045);
    this.b4k_1 = new TransferParameters(-3.0, 2.0, 2.0, 1 / 0.17883277, 0.28466892, 0.55991073, -0.685490157);
    this.c4k_1 = new TransferParameters(-2.0, -1.555223, 1.860454, 32 / 2523.0, 2413 / 128.0, -2392 / 128.0, 8192 / 1305.0);
    this.d4k_1 = Rgb_init_$Create$('sRGB IEC61966-2.1', this.w4j_1, Illuminant_getInstance().d4r_1, this.z4j_1, 0);
    this.e4k_1 = Rgb_init_$Create$_0('sRGB IEC61966-2.1 (Linear)', this.w4j_1, Illuminant_getInstance().d4r_1, 1.0, 0.0, 1.0, 1);
    var tmp_2 = this;
    var tmp_3 = Illuminant_getInstance().d4r_1;
    var tmp_4 = ColorSpaces$ExtendedSrgb$lambda;
    var tmp_5 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_4);
    var tmp_6 = ColorSpaces$ExtendedSrgb$lambda_0;
    tmp_2.f4k_1 = new Rgb('scRGB-nl IEC 61966-2-2:2003', this.w4j_1, tmp_3, null, tmp_5, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_6), -0.799, 2.399, this.z4j_1, 2);
    this.g4k_1 = Rgb_init_$Create$_0('scRGB IEC 61966-2-2:2003', this.w4j_1, Illuminant_getInstance().d4r_1, 1.0, -0.5, 7.499, 3);
    var tmp_7 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$3 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    tmp_7.h4k_1 = Rgb_init_$Create$('Rec. ITU-R BT.709-5', tmp$ret$3, Illuminant_getInstance().d4r_1, new TransferParameters(1 / 0.45, 1 / 1.099, 0.099 / 1.099, 1 / 4.5, 0.081), 4);
    var tmp_8 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$4 = new Float32Array([0.708, 0.292, 0.17, 0.797, 0.131, 0.046]);
    tmp_8.i4k_1 = Rgb_init_$Create$('Rec. ITU-R BT.2020-1', tmp$ret$4, Illuminant_getInstance().d4r_1, new TransferParameters(1 / 0.45, 1 / 1.0993, 0.0993 / 1.0993, 1 / 4.5, 0.08145), 5);
    var tmp_9 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$5 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_9.j4k_1 = Rgb_init_$Create$_0('SMPTE RP 431-2-2007 DCI (P3)', tmp$ret$5, new WhitePoint(0.314, 0.351), 2.6, 0.0, 1.0, 6);
    var tmp_10 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$6 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_10.k4k_1 = Rgb_init_$Create$('Display P3', tmp$ret$6, Illuminant_getInstance().d4r_1, this.z4j_1, 7);
    this.l4k_1 = Rgb_init_$Create$('NTSC (1953)', this.x4j_1, Illuminant_getInstance().z4q_1, new TransferParameters(1 / 0.45, 1 / 1.099, 0.099 / 1.099, 1 / 4.5, 0.081), 8);
    var tmp_11 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$7 = new Float32Array([0.63, 0.34, 0.31, 0.595, 0.155, 0.07]);
    tmp_11.m4k_1 = Rgb_init_$Create$('SMPTE-C RGB', tmp$ret$7, Illuminant_getInstance().d4r_1, new TransferParameters(1 / 0.45, 1 / 1.099, 0.099 / 1.099, 1 / 4.5, 0.081), 9);
    var tmp_12 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$8 = new Float32Array([0.64, 0.33, 0.21, 0.71, 0.15, 0.06]);
    tmp_12.n4k_1 = Rgb_init_$Create$_0('Adobe RGB (1998)', tmp$ret$8, Illuminant_getInstance().d4r_1, 2.2, 0.0, 1.0, 10);
    var tmp_13 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$9 = new Float32Array([0.7347, 0.2653, 0.1596, 0.8404, 0.0366, 1.0E-4]);
    tmp_13.o4k_1 = Rgb_init_$Create$('ROMM RGB ISO 22028-2:2013', tmp$ret$9, Illuminant_getInstance().a4r_1, new TransferParameters(1.8, 1.0, 0.0, 1 / 16.0, 0.031248), 11);
    var tmp_14 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$10 = new Float32Array([0.7347, 0.2653, 0.0, 1.0, 1.0E-4, -0.077]);
    tmp_14.p4k_1 = Rgb_init_$Create$_0('SMPTE ST 2065-1:2012 ACES', tmp$ret$10, Illuminant_getInstance().c4r_1, 1.0, -65504.0, 65504.0, 12);
    var tmp_15 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$11 = new Float32Array([0.713, 0.293, 0.165, 0.83, 0.128, 0.044]);
    tmp_15.q4k_1 = Rgb_init_$Create$_0('Academy S-2014-004 ACEScg', tmp$ret$11, Illuminant_getInstance().c4r_1, 1.0, -65504.0, 65504.0, 13);
    this.r4k_1 = new Xyz('Generic XYZ', 14);
    this.s4k_1 = new Lab('Generic L*a*b*', 15);
    this.t4k_1 = Rgb_init_$Create$('None', this.w4j_1, Illuminant_getInstance().d4r_1, this.a4k_1, 16);
    var tmp_16 = this;
    var tmp_17 = Illuminant_getInstance().d4r_1;
    var tmp_18 = ColorSpaces$Bt2020Hlg$lambda;
    var tmp_19 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(tmp_18);
    var tmp_20 = ColorSpaces$Bt2020Hlg$lambda_0;
    tmp_16.u4k_1 = new Rgb('Hybrid Log Gamma encoding', this.y4j_1, tmp_17, null, tmp_19, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(tmp_20), 0.0, 1.0, this.b4k_1, 17);
    var tmp_21 = this;
    var tmp_22 = Illuminant_getInstance().d4r_1;
    var tmp_23 = ColorSpaces$Bt2020Pq$lambda;
    var tmp_24 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(tmp_23);
    var tmp_25 = ColorSpaces$Bt2020Pq$lambda_0;
    tmp_21.v4k_1 = new Rgb('Perceptual Quantizer encoding', this.y4j_1, tmp_22, null, tmp_24, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(tmp_25), 0.0, 1.0, this.c4k_1, 18);
    this.w4k_1 = new Oklab('Oklab', 19);
    var tmp_26 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_26.x4k_1 = [this.d4k_1, this.e4k_1, this.f4k_1, this.g4k_1, this.h4k_1, this.i4k_1, this.j4k_1, this.k4k_1, this.l4k_1, this.m4k_1, this.n4k_1, this.o4k_1, this.p4k_1, this.q4k_1, this.r4k_1, this.s4k_1, this.t4k_1, this.u4k_1, this.v4k_1, this.w4k_1];
  }
  protoOf(ColorSpaces).t4q = function (params, x) {
    var sign = x < 0 ? -1.0 : 1.0;
    var absX = x * sign;
    var R = 1.0 / params.i4r_1;
    var G = 1.0 / params.j4r_1;
    var a = 1.0 / params.k4r_1;
    var b = params.l4r_1;
    var c = params.m4r_1;
    var K = params.n4r_1 + 1.0;
    absX = absX / K;
    var tmp;
    if (absX <= 1) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = absX;
      tmp = R * Math.pow(this_0, G);
    } else {
      // Inline function 'kotlin.math.ln' call
      var x_0 = absX - b;
      tmp = a * Math.log(x_0) + c;
    }
    var result = tmp;
    return sign * result;
  };
  protoOf(ColorSpaces).u4q = function (params, x) {
    var sign = x < 0 ? -1.0 : 1.0;
    var absX = x * sign;
    var R = params.i4r_1;
    var G = params.j4r_1;
    var a = params.k4r_1;
    var b = params.l4r_1;
    var c = params.m4r_1;
    var K = params.n4r_1 + 1.0;
    var tmp;
    if (absX * R <= 1) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = absX * R;
      tmp = Math.pow(this_0, G);
    } else {
      // Inline function 'kotlin.math.exp' call
      var x_0 = (absX - c) * a;
      tmp = Math.exp(x_0) + b;
    }
    var result = tmp;
    return K * sign * result;
  };
  protoOf(ColorSpaces).v4q = function (params, x) {
    var sign = x < 0 ? -1.0 : 1.0;
    var absX = x * sign;
    var a = -params.i4r_1;
    var b = params.l4r_1;
    var c = 1.0 / params.n4r_1;
    var d = params.j4r_1;
    var e = -params.m4r_1;
    var f = 1.0 / params.k4r_1;
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.max' call
    var a_0 = a + b * Math.pow(absX, c);
    var tmp = Math.max(a_0, 0.0);
    // Inline function 'kotlin.math.pow' call
    // Inline function 'kotlin.math.pow' call
    var this_0 = tmp / (d + e * Math.pow(absX, c));
    return sign * Math.pow(this_0, f);
  };
  protoOf(ColorSpaces).w4q = function (pq, x) {
    var sign = x < 0 ? -1.0 : 1.0;
    var absX = x * sign;
    // Inline function 'kotlin.math.pow' call
    var x_0 = pq.k4r_1;
    var tmp$ret$0 = Math.pow(absX, x_0);
    var tmp = coerceAtLeast(pq.i4r_1 + pq.j4r_1 * tmp$ret$0, 0.0);
    // Inline function 'kotlin.math.pow' call
    var x_1 = pq.k4r_1;
    var tmp$ret$1 = Math.pow(absX, x_1);
    var tmp0 = tmp / (pq.l4r_1 + pq.m4r_1 * tmp$ret$1);
    // Inline function 'kotlin.math.pow' call
    var x_2 = pq.n4r_1;
    return sign * Math.pow(tmp0, x_2);
  };
  var ColorSpaces_instance;
  function ColorSpaces_getInstance() {
    if (ColorSpaces_instance == null)
      new ColorSpaces();
    return ColorSpaces_instance;
  }
  function get_Connectors() {
    _init_properties_Connector_kt__swbf17();
    return Connectors;
  }
  var Connectors;
  function computeTransform($this, source, destination, intent) {
    if (compare_1(source.x4p_1, destination.x4p_1)) {
      return mul3x3(destination.d4q_1, source.c4q_1);
    } else {
      var transform = source.c4q_1;
      var inverseTransform = destination.d4q_1;
      var srcXYZ = source.x4p_1.o4q();
      var dstXYZ = destination.x4p_1.o4q();
      if (!compare_1(source.x4p_1, Illuminant_getInstance().a4r_1)) {
        var srcAdaptation = chromaticAdaptation(Companion_getInstance_27().y4o_1.b4p_1, srcXYZ, Illuminant_getInstance().o4r());
        transform = mul3x3(srcAdaptation, source.c4q_1);
      }
      if (!compare_1(destination.x4p_1, Illuminant_getInstance().a4r_1)) {
        var dstAdaptation = chromaticAdaptation(Companion_getInstance_27().y4o_1.b4p_1, dstXYZ, Illuminant_getInstance().o4r());
        inverseTransform = inverse3x3(mul3x3(dstAdaptation, destination.c4q_1));
      }
      if (intent === Companion_getInstance_33().s4p_1) {
        // Inline function 'kotlin.floatArrayOf' call
        var tmp$ret$0 = new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
        transform = mul3x3Diag(tmp$ret$0, transform);
      }
      return mul3x3(inverseTransform, transform);
    }
  }
  function computeTransform_0($this, source, destination, intent) {
    if (!(intent === Companion_getInstance_33().s4p_1))
      return null;
    var srcRGB = equals(source.i4l_1, Companion_getInstance_28().c4p_1);
    var dstRGB = equals(destination.i4l_1, Companion_getInstance_28().c4p_1);
    if (srcRGB && dstRGB)
      return null;
    if (srcRGB || dstRGB) {
      var tmp = srcRGB ? source : destination;
      var rgb = tmp instanceof Rgb ? tmp : THROW_CCE();
      var srcXYZ = srcRGB ? rgb.x4p_1.o4q() : Illuminant_getInstance().g4r_1;
      var dstXYZ = dstRGB ? rgb.x4p_1.o4q() : Illuminant_getInstance().g4r_1;
      // Inline function 'kotlin.floatArrayOf' call
      return new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
    }
    return null;
  }
  function Connector$Companion$identity$1($source) {
    Connector_init_$Init$($source, $source, Companion_getInstance_33().q4p_1, this);
  }
  protoOf(Connector$Companion$identity$1).e4l = function (color) {
    return color;
  };
  function Connector_init_$Init$(source, destination, intent, $this) {
    var tmp = equals(source.i4l_1, Companion_getInstance_28().c4p_1) ? adapt(source, Illuminant_getInstance().a4r_1) : source;
    var tmp_0;
    if (equals(destination.i4l_1, Companion_getInstance_28().c4p_1)) {
      tmp_0 = adapt(destination, Illuminant_getInstance().a4r_1);
    } else {
      tmp_0 = destination;
    }
    Connector.call($this, source, destination, tmp, tmp_0, intent, computeTransform_0(Companion_instance_19, source, destination, intent));
    return $this;
  }
  function Connector_init_$Create$(source, destination, intent) {
    return Connector_init_$Init$(source, destination, intent, objectCreate(protoOf(Connector)));
  }
  function RgbConnector(mSource, mDestination, intent) {
    Connector.call(this, mSource, mDestination, mSource, mDestination, intent, null);
    this.b4s_1 = mSource;
    this.c4s_1 = mDestination;
    this.d4s_1 = computeTransform(this, this.b4s_1, this.c4s_1, intent);
  }
  protoOf(RgbConnector).e4l = function (color) {
    // Inline function 'androidx.compose.ui.graphics.Color.component1' call
    var r = _Color___get_red__impl__cwrsk6(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component2' call
    var g = _Color___get_green__impl__bta9rs(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component3' call
    var b = _Color___get_blue__impl__xwez13(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component4' call
    var a = _Color___get_alpha__impl__wcfyv1(color);
    var v0 = this.b4s_1.j4q_1.q4q(r);
    var v1 = this.b4s_1.j4q_1.q4q(g);
    var v2 = this.b4s_1.j4q_1.q4q(b);
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = this.d4s_1;
    var v01 = lhs[0] * v0 + lhs[3] * v1 + lhs[6] * v2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = this.d4s_1;
    var v11 = lhs_0[1] * v0 + lhs_0[4] * v1 + lhs_0[7] * v2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = this.d4s_1;
    var v21 = lhs_1[2] * v0 + lhs_1[5] * v1 + lhs_1[8] * v2;
    var v02 = this.c4s_1.g4q_1.q4q(v01);
    var v12 = this.c4s_1.g4q_1.q4q(v11);
    var v22 = this.c4s_1.g4q_1.q4q(v21);
    return Color_2(v02, v12, v22, a, this.c4s_1);
  };
  function Companion_17() {
  }
  protoOf(Companion_17).t4p = function (source) {
    return new Connector$Companion$identity$1(source);
  };
  var Companion_instance_19;
  function Companion_getInstance_30() {
    return Companion_instance_19;
  }
  function Connector(source, destination, transformSource, transformDestination, renderIntent, transform) {
    this.y4k_1 = source;
    this.z4k_1 = destination;
    this.a4l_1 = transformSource;
    this.b4l_1 = transformDestination;
    this.c4l_1 = renderIntent;
    this.d4l_1 = transform;
  }
  protoOf(Connector).e4l = function (color) {
    // Inline function 'androidx.compose.ui.graphics.Color.component1' call
    var r = _Color___get_red__impl__cwrsk6(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component2' call
    var g = _Color___get_green__impl__bta9rs(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component3' call
    var b = _Color___get_blue__impl__xwez13(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component4' call
    var a = _Color___get_alpha__impl__wcfyv1(color);
    var packed = this.a4l_1.k4p(r, g, b);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(packed, 32));
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(packed, new Long(-1, 0)));
    var y = floatFromBits(bits_0);
    var z = this.a4l_1.l4p(r, g, b);
    if (!(this.d4l_1 == null)) {
      x = x * this.d4l_1[0];
      y = y * this.d4l_1[1];
      z = z * this.d4l_1[2];
    }
    return this.b4l_1.m4p(x, y, z, a, this.z4k_1);
  };
  var properties_initialized_Connector_kt_5j9z4t;
  function _init_properties_Connector_kt__swbf17() {
    if (!properties_initialized_Connector_kt_5j9z4t) {
      properties_initialized_Connector_kt_5j9z4t = true;
      var tmp0 = ColorSpaces_getInstance().d4k_1.j4l_1;
      var tmp2 = ColorSpaces_getInstance().d4k_1.j4l_1;
      // Inline function 'androidx.compose.ui.graphics.colorspace.connectorKey' call
      var renderIntent = Companion_getInstance_33().p4p_1;
      var tmp = tmp0 | tmp2 << 6 | _RenderIntent___get_value__impl__ip9mbh(renderIntent) << 12;
      var tmp_0 = Companion_instance_19.t4p(ColorSpaces_getInstance().d4k_1);
      var tmp0_0 = ColorSpaces_getInstance().d4k_1.j4l_1;
      var tmp2_0 = ColorSpaces_getInstance().w4k_1.j4l_1;
      // Inline function 'androidx.compose.ui.graphics.colorspace.connectorKey' call
      var renderIntent_0 = Companion_getInstance_33().p4p_1;
      var tmp_1 = tmp0_0 | tmp2_0 << 6 | _RenderIntent___get_value__impl__ip9mbh(renderIntent_0) << 12;
      var tmp_2 = Connector_init_$Create$(ColorSpaces_getInstance().d4k_1, ColorSpaces_getInstance().w4k_1, Companion_getInstance_33().p4p_1);
      var tmp0_1 = ColorSpaces_getInstance().w4k_1.j4l_1;
      var tmp2_1 = ColorSpaces_getInstance().d4k_1.j4l_1;
      // Inline function 'androidx.compose.ui.graphics.colorspace.connectorKey' call
      var renderIntent_1 = Companion_getInstance_33().p4p_1;
      var tmp$ret$2 = tmp0_1 | tmp2_1 << 6 | _RenderIntent___get_value__impl__ip9mbh(renderIntent_1) << 12;
      Connectors = mutableIntObjectMapOf(tmp, tmp_0, tmp_1, tmp_2, tmp$ret$2, Connector_init_$Create$(ColorSpaces_getInstance().w4k_1, ColorSpaces_getInstance().d4k_1, Companion_getInstance_33().p4p_1));
    }
  }
  function Illuminant() {
    Illuminant_instance = this;
    this.x4q_1 = new WhitePoint(0.44757, 0.40745);
    this.y4q_1 = new WhitePoint(0.34842, 0.35161);
    this.z4q_1 = new WhitePoint(0.31006, 0.31616);
    this.a4r_1 = new WhitePoint(0.34567, 0.3585);
    this.b4r_1 = new WhitePoint(0.33242, 0.34743);
    this.c4r_1 = new WhitePoint(0.32168, 0.33767);
    this.d4r_1 = new WhitePoint(0.31271, 0.32902);
    this.e4r_1 = new WhitePoint(0.29902, 0.31485);
    this.f4r_1 = new WhitePoint(0.33333, 0.33333);
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.g4r_1 = new Float32Array([0.964212, 1.0, 0.825188]);
  }
  protoOf(Illuminant).o4r = function () {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([0.964212, 1.0, 0.825188]);
  };
  var Illuminant_instance;
  function Illuminant_getInstance() {
    if (Illuminant_instance == null)
      new Illuminant();
    return Illuminant_instance;
  }
  function Companion_18() {
    this.e4s_1 = 0.008856452;
    this.f4s_1 = 7.787037;
    this.g4s_1 = 0.13793103;
    this.h4s_1 = 0.20689656;
  }
  var Companion_instance_20;
  function Companion_getInstance_31() {
    return Companion_instance_20;
  }
  function Lab(name, id) {
    ColorSpace.call(this, name, Companion_getInstance_28().e4p_1, id);
  }
  protoOf(Lab).n4l = function (component) {
    return component === 0 ? 0.0 : -128.0;
  };
  protoOf(Lab).o4l = function (component) {
    return component === 0 ? 100.0 : 128.0;
  };
  protoOf(Lab).j4p = function (v) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = v[0];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = this_0 < 0.0 ? 0.0 : this_0;
    v[0] = this_1 > 100.0 ? 100.0 : this_1;
    var tmp0 = v[1];
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -128.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = tmp0 < minimumValue ? minimumValue : tmp0;
    v[1] = this_2 > 128.0 ? 128.0 : this_2;
    var tmp0_0 = v[2];
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_0 = -128.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_3 = tmp0_0 < minimumValue_0 ? minimumValue_0 : tmp0_0;
    v[2] = this_3 > 128.0 ? 128.0 : this_3;
    var fy = (v[0] + 16.0) / 116.0;
    var fx = fy + v[1] * 0.002;
    var fz = fy - v[2] * 0.005;
    var x = fx > 0.20689656 ? fx * fx * fx : 1.0 / 7.787037 * (fx - 0.13793103);
    var y = fy > 0.20689656 ? fy * fy * fy : 1.0 / 7.787037 * (fy - 0.13793103);
    var z = fz > 0.20689656 ? fz * fz * fz : 1.0 / 7.787037 * (fz - 0.13793103);
    v[0] = x * Illuminant_getInstance().g4r_1[0];
    v[1] = y * Illuminant_getInstance().g4r_1[1];
    v[2] = z * Illuminant_getInstance().g4r_1[2];
    return v;
  };
  protoOf(Lab).k4p = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v0 < 0.0 ? 0.0 : v0;
    var v00 = this_0 > 100.0 ? 100.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -128.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = v1 < minimumValue ? minimumValue : v1;
    var v10 = this_1 > 128.0 ? 128.0 : this_1;
    var fy = (v00 + 16.0) / 116.0;
    var fx = fy + v10 * 0.002;
    var x = fx > 0.20689656 ? fx * fx * fx : 1.0 / 7.787037 * (fx - 0.13793103);
    var y = fy > 0.20689656 ? fy * fy * fy : 1.0 / 7.787037 * (fy - 0.13793103);
    var tmp0 = x * Illuminant_getInstance().g4r_1[0];
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = y * Illuminant_getInstance().g4r_1[1];
    var v1_0 = fromInt(toRawBits(tmp0));
    var v2_0 = fromInt(toRawBits(val2));
    return bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
  };
  protoOf(Lab).l4p = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v0 < 0.0 ? 0.0 : v0;
    var v00 = this_0 > 100.0 ? 100.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -128.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = v2 < minimumValue ? minimumValue : v2;
    var v20 = this_1 > 128.0 ? 128.0 : this_1;
    var fy = (v00 + 16.0) / 116.0;
    var fz = fy - v20 * 0.005;
    var z = fz > 0.20689656 ? fz * fz * fz : 1.0 / 7.787037 * (fz - 0.13793103);
    return z * Illuminant_getInstance().g4r_1[2];
  };
  protoOf(Lab).m4p = function (x, y, z, a, colorSpace) {
    var x1 = x / Illuminant_getInstance().g4r_1[0];
    var y1 = y / Illuminant_getInstance().g4r_1[1];
    var z1 = z / Illuminant_getInstance().g4r_1[2];
    var tmp;
    if (x1 > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp = Math.cbrt(x1);
    } else {
      tmp = 7.787037 * x1 + 0.13793103;
    }
    var fx = tmp;
    var tmp_0;
    if (y1 > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp_0 = Math.cbrt(y1);
    } else {
      tmp_0 = 7.787037 * y1 + 0.13793103;
    }
    var fy = tmp_0;
    var tmp_1;
    if (z1 > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp_1 = Math.cbrt(z1);
    } else {
      tmp_1 = 7.787037 * z1 + 0.13793103;
    }
    var fz = tmp_1;
    var l = 116.0 * fy - 16.0;
    var a1 = 500.0 * (fx - fy);
    var b = 200.0 * (fy - fz);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = l < 0.0 ? 0.0 : l;
    var tmp_2 = this_0 > 100.0 ? 100.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -128.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = a1 < minimumValue ? minimumValue : a1;
    var tmp_3 = this_1 > 128.0 ? 128.0 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_0 = -128.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = b < minimumValue_0 ? minimumValue_0 : b;
    var tmp$ret$9 = this_2 > 128.0 ? 128.0 : this_2;
    return Color_2(tmp_2, tmp_3, tmp$ret$9, a, colorSpace);
  };
  protoOf(Lab).o4p = function (v) {
    var x = v[0] / Illuminant_getInstance().g4r_1[0];
    var y = v[1] / Illuminant_getInstance().g4r_1[1];
    var z = v[2] / Illuminant_getInstance().g4r_1[2];
    var tmp;
    if (x > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp = Math.cbrt(x);
    } else {
      tmp = 7.787037 * x + 0.13793103;
    }
    var fx = tmp;
    var tmp_0;
    if (y > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp_0 = Math.cbrt(y);
    } else {
      tmp_0 = 7.787037 * y + 0.13793103;
    }
    var fy = tmp_0;
    var tmp_1;
    if (z > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp_1 = Math.cbrt(z);
    } else {
      tmp_1 = 7.787037 * z + 0.13793103;
    }
    var fz = tmp_1;
    var l = 116.0 * fy - 16.0;
    var a = 500.0 * (fx - fy);
    var b = 200.0 * (fy - fz);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = l < 0.0 ? 0.0 : l;
    v[0] = this_0 > 100.0 ? 100.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -128.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = a < minimumValue ? minimumValue : a;
    v[1] = this_1 > 128.0 ? 128.0 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_0 = -128.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = b < minimumValue_0 ? minimumValue_0 : b;
    v[2] = this_2 > 128.0 ? 128.0 : this_2;
    return v;
  };
  function Companion_19() {
    Companion_instance_21 = this;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.818933, 0.032984544, 0.0482003, 0.36186674, 0.9293119, 0.26436627, -0.12885971, 0.03614564, 0.6338517]);
    tmp.l4s_1 = mul3x3(tmp$ret$0, chromaticAdaptation(Companion_getInstance_27().y4o_1.b4p_1, Illuminant_getInstance().a4r_1.o4q(), Illuminant_getInstance().d4r_1.o4q()));
    var tmp_0 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_0.m4s_1 = new Float32Array([0.21045426, 1.9779985, 0.025904037, 0.7936178, -2.4285922, 0.78277177, -0.004072047, 0.4505937, -0.80867577]);
    this.n4s_1 = inverse3x3(this.l4s_1);
    this.o4s_1 = inverse3x3(this.m4s_1);
  }
  var Companion_instance_21;
  function Companion_getInstance_32() {
    if (Companion_instance_21 == null)
      new Companion_19();
    return Companion_instance_21;
  }
  function Oklab(name, id) {
    Companion_getInstance_32();
    ColorSpace.call(this, name, Companion_getInstance_28().e4p_1, id);
  }
  protoOf(Oklab).n4l = function (component) {
    return component === 0 ? 0.0 : -0.5;
  };
  protoOf(Oklab).o4l = function (component) {
    return component === 0 ? 1.0 : 0.5;
  };
  protoOf(Oklab).j4p = function (v) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = v[0];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = this_0 < 0.0 ? 0.0 : this_0;
    v[0] = this_1 > 1.0 ? 1.0 : this_1;
    var tmp0 = v[1];
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -0.5;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = tmp0 < minimumValue ? minimumValue : tmp0;
    v[1] = this_2 > 0.5 ? 0.5 : this_2;
    var tmp0_0 = v[2];
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_0 = -0.5;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_3 = tmp0_0 < minimumValue_0 ? minimumValue_0 : tmp0_0;
    v[2] = this_3 > 0.5 ? 0.5 : this_3;
    mul3x3Float3(Companion_getInstance_32().o4s_1, v);
    v[0] = v[0] * v[0] * v[0];
    v[1] = v[1] * v[1] * v[1];
    v[2] = v[2] * v[2] * v[2];
    mul3x3Float3(Companion_getInstance_32().n4s_1, v);
    return v;
  };
  protoOf(Oklab).k4p = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v0 < 0.0 ? 0.0 : v0;
    var v00 = this_0 > 1.0 ? 1.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -0.5;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = v1 < minimumValue ? minimumValue : v1;
    var v10 = this_1 > 0.5 ? 0.5 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_0 = -0.5;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = v2 < minimumValue_0 ? minimumValue_0 : v2;
    var v20 = this_2 > 0.5 ? 0.5 : this_2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = Companion_getInstance_32().o4s_1;
    var v01 = lhs[0] * v00 + lhs[3] * v10 + lhs[6] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = Companion_getInstance_32().o4s_1;
    var v11 = lhs_0[1] * v00 + lhs_0[4] * v10 + lhs_0[7] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = Companion_getInstance_32().o4s_1;
    var v21 = lhs_1[2] * v00 + lhs_1[5] * v10 + lhs_1[8] * v20;
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs_2 = Companion_getInstance_32().n4s_1;
    var v03 = lhs_2[0] * v02 + lhs_2[3] * v12 + lhs_2[6] * v22;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_3 = Companion_getInstance_32().n4s_1;
    var v13 = lhs_3[1] * v02 + lhs_3[4] * v12 + lhs_3[7] * v22;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = fromInt(toRawBits(v03));
    var v2_0 = fromInt(toRawBits(v13));
    return bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
  };
  protoOf(Oklab).l4p = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v0 < 0.0 ? 0.0 : v0;
    var v00 = this_0 > 1.0 ? 1.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -0.5;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = v1 < minimumValue ? minimumValue : v1;
    var v10 = this_1 > 0.5 ? 0.5 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_0 = -0.5;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = v2 < minimumValue_0 ? minimumValue_0 : v2;
    var v20 = this_2 > 0.5 ? 0.5 : this_2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = Companion_getInstance_32().o4s_1;
    var v01 = lhs[0] * v00 + lhs[3] * v10 + lhs[6] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = Companion_getInstance_32().o4s_1;
    var v11 = lhs_0[1] * v00 + lhs_0[4] * v10 + lhs_0[7] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = Companion_getInstance_32().o4s_1;
    var v21 = lhs_1[2] * v00 + lhs_1[5] * v10 + lhs_1[8] * v20;
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_2 = Companion_getInstance_32().n4s_1;
    var v23 = lhs_2[2] * v02 + lhs_2[5] * v12 + lhs_2[8] * v22;
    return v23;
  };
  protoOf(Oklab).m4p = function (x, y, z, a, colorSpace) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = Companion_getInstance_32().l4s_1;
    var v0 = lhs[0] * x + lhs[3] * y + lhs[6] * z;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = Companion_getInstance_32().l4s_1;
    var v1 = lhs_0[1] * x + lhs_0[4] * y + lhs_0[7] * z;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = Companion_getInstance_32().l4s_1;
    var v2 = lhs_1[2] * x + lhs_1[5] * y + lhs_1[8] * z;
    v0 = fastCbrt(v0);
    v1 = fastCbrt(v1);
    v2 = fastCbrt(v2);
    var tmp0 = Companion_getInstance_32().m4s_1;
    var tmp2 = v0;
    var tmp4 = v1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var r2 = v2;
    var v01 = tmp0[0] * tmp2 + tmp0[3] * tmp4 + tmp0[6] * r2;
    var tmp0_0 = Companion_getInstance_32().m4s_1;
    var tmp2_0 = v0;
    var tmp4_0 = v1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var r2_0 = v2;
    var v11 = tmp0_0[1] * tmp2_0 + tmp0_0[4] * tmp4_0 + tmp0_0[7] * r2_0;
    var tmp0_1 = Companion_getInstance_32().m4s_1;
    var tmp2_1 = v0;
    var tmp4_1 = v1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var r2_1 = v2;
    var v21 = tmp0_1[2] * tmp2_1 + tmp0_1[5] * tmp4_1 + tmp0_1[8] * r2_1;
    return Color_2(v01, v11, v21, a, colorSpace);
  };
  protoOf(Oklab).o4p = function (v) {
    mul3x3Float3(Companion_getInstance_32().l4s_1, v);
    v[0] = fastCbrt(v[0]);
    v[1] = fastCbrt(v[1]);
    v[2] = fastCbrt(v[2]);
    mul3x3Float3(Companion_getInstance_32().m4s_1, v);
    return v;
  };
  function _RenderIntent___init__impl__jceahd(value) {
    return value;
  }
  function _RenderIntent___get_value__impl__ip9mbh($this) {
    return $this;
  }
  function Companion_20() {
    Companion_instance_22 = this;
    this.p4p_1 = _RenderIntent___init__impl__jceahd(0);
    this.q4p_1 = _RenderIntent___init__impl__jceahd(1);
    this.r4p_1 = _RenderIntent___init__impl__jceahd(2);
    this.s4p_1 = _RenderIntent___init__impl__jceahd(3);
  }
  var Companion_instance_22;
  function Companion_getInstance_33() {
    if (Companion_instance_22 == null)
      new Companion_20();
    return Companion_instance_22;
  }
  function isSrgb($this, primaries, whitePoint, OETF, EOTF, min, max, id) {
    if (id === 0)
      return true;
    if (!compare_0(primaries, ColorSpaces_getInstance().w4j_1)) {
      return false;
    }
    if (!compare_1(whitePoint, Illuminant_getInstance().d4r_1)) {
      return false;
    }
    if (!(min === 0.0))
      return false;
    if (!(max === 1.0))
      return false;
    var srgb = ColorSpaces_getInstance().d4k_1;
    var x = 0.0;
    while (x <= 1.0) {
      if (!compare_2($this, x, OETF, srgb.e4q_1))
        return false;
      if (!compare_2($this, x, EOTF, srgb.h4q_1))
        return false;
      x = x + 1 / 255.0;
    }
    return true;
  }
  function compare_2($this, point, a, b) {
    var rA = a.q4q(point);
    var rB = b.q4q(point);
    // Inline function 'kotlin.math.abs' call
    var x = rA - rB;
    return Math.abs(x) <= 0.001;
  }
  function isWideGamut($this, primaries, min, max) {
    return area($this, primaries) / area($this, ColorSpaces_getInstance().x4j_1) > 0.9 && contains($this, primaries, ColorSpaces_getInstance().w4j_1) || (min < 0.0 && max > 1.0);
  }
  function area($this, primaries) {
    if (primaries.length < 6)
      return 0.0;
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var det = rx * gy + ry * bx + gx * by - gy * bx - ry * gx - rx * by;
    var r = 0.5 * det;
    return r < 0.0 ? -r : r;
  }
  function contains($this, p1, p2) {
    // Inline function 'kotlin.floatArrayOf' call
    var p0 = new Float32Array([p1[0] - p2[0], p1[1] - p2[1], p1[2] - p2[2], p1[3] - p2[3], p1[4] - p2[4], p1[5] - p2[5]]);
    var tmp;
    var tmp2 = p0[0];
    var tmp4 = p0[1];
    var tmp6 = p2[0] - p2[4];
    // Inline function 'androidx.compose.ui.graphics.colorspace.Companion.cross' call
    if (tmp2 * (p2[1] - p2[5]) - tmp4 * tmp6 < 0) {
      tmp = true;
    } else {
      var tmp2_0 = p2[0] - p2[2];
      var tmp4_0 = p2[1] - p2[3];
      var tmp6_0 = p0[0];
      // Inline function 'androidx.compose.ui.graphics.colorspace.Companion.cross' call
      tmp = tmp2_0 * p0[1] - tmp4_0 * tmp6_0 < 0;
    }
    if (tmp) {
      return false;
    }
    var tmp_0;
    var tmp2_1 = p0[2];
    var tmp4_1 = p0[3];
    var tmp6_1 = p2[2] - p2[0];
    // Inline function 'androidx.compose.ui.graphics.colorspace.Companion.cross' call
    if (tmp2_1 * (p2[3] - p2[1]) - tmp4_1 * tmp6_1 < 0) {
      tmp_0 = true;
    } else {
      var tmp2_2 = p2[2] - p2[4];
      var tmp4_2 = p2[3] - p2[5];
      var tmp6_2 = p0[2];
      // Inline function 'androidx.compose.ui.graphics.colorspace.Companion.cross' call
      tmp_0 = tmp2_2 * p0[3] - tmp4_2 * tmp6_2 < 0;
    }
    if (tmp_0) {
      return false;
    }
    var tmp_1;
    var tmp2_3 = p0[4];
    var tmp4_3 = p0[5];
    var tmp6_3 = p2[4] - p2[2];
    // Inline function 'androidx.compose.ui.graphics.colorspace.Companion.cross' call
    if (tmp2_3 * (p2[5] - p2[3]) - tmp4_3 * tmp6_3 < 0) {
      tmp_1 = true;
    } else {
      var tmp2_4 = p2[4] - p2[0];
      var tmp4_4 = p2[5] - p2[1];
      var tmp6_4 = p0[4];
      // Inline function 'androidx.compose.ui.graphics.colorspace.Companion.cross' call
      tmp_1 = tmp2_4 * p0[5] - tmp4_4 * tmp6_4 < 0;
    }
    return !tmp_1;
  }
  function xyPrimaries($this, primaries) {
    var xyPrimaries = new Float32Array(6);
    if (primaries.length === 9) {
      var sum = primaries[0] + primaries[1] + primaries[2];
      xyPrimaries[0] = primaries[0] / sum;
      xyPrimaries[1] = primaries[1] / sum;
      sum = primaries[3] + primaries[4] + primaries[5];
      xyPrimaries[2] = primaries[3] / sum;
      xyPrimaries[3] = primaries[4] / sum;
      sum = primaries[6] + primaries[7] + primaries[8];
      xyPrimaries[4] = primaries[6] / sum;
      xyPrimaries[5] = primaries[7] / sum;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = primaries;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, xyPrimaries, 0, 0, 6);
    }
    return xyPrimaries;
  }
  function computeXYZMatrix($this, primaries, whitePoint) {
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var wx = whitePoint.m4q_1;
    var wy = whitePoint.n4q_1;
    var oneRxRy = (1 - rx) / ry;
    var oneGxGy = (1 - gx) / gy;
    var oneBxBy = (1 - bx) / by;
    var oneWxWy = (1 - wx) / wy;
    var rxRy = rx / ry;
    var gxGy = gx / gy;
    var bxBy = bx / by;
    var wxWy = wx / wy;
    var byNumerator = (oneWxWy - oneRxRy) * (gxGy - rxRy) - (wxWy - rxRy) * (oneGxGy - oneRxRy);
    var byDenominator = (oneBxBy - oneRxRy) * (gxGy - rxRy) - (bxBy - rxRy) * (oneGxGy - oneRxRy);
    var bY = byNumerator / byDenominator;
    var gY = (wxWy - rxRy - bY * (bxBy - rxRy)) / (gxGy - rxRy);
    var rY = 1.0 - gY - bY;
    var rYRy = rY / ry;
    var gYGy = gY / gy;
    var bYBy = bY / by;
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([rYRy * rx, rY, rYRy * (1.0 - rx - ry), gYGy * gx, gY, gYGy * (1.0 - gx - gy), bYBy * bx, bY, bYBy * (1.0 - bx - by)]);
  }
  function generateOetf($this, function_0) {
    var tmp;
    if (function_0.t4s()) {
      var tmp_0 = Rgb$Companion$generateOetf$lambda(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_0);
    } else if (function_0.s4s()) {
      var tmp_1 = Rgb$Companion$generateOetf$lambda_0(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_1);
    } else {
      var tmp_2;
      if (function_0.m4r_1 === 0.0 && function_0.n4r_1 === 0.0) {
        var tmp_3 = Rgb$Companion$generateOetf$lambda_1(function_0);
        tmp_2 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_3);
      } else {
        var tmp_4 = Rgb$Companion$generateOetf$lambda_2(function_0);
        tmp_2 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_4);
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function generateEotf($this, function_0) {
    var tmp;
    if (function_0.t4s()) {
      var tmp_0 = Rgb$Companion$generateEotf$lambda(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_0);
    } else if (function_0.s4s()) {
      var tmp_1 = Rgb$Companion$generateEotf$lambda_0(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_1);
    } else {
      var tmp_2;
      if (function_0.m4r_1 === 0.0 && function_0.n4r_1 === 0.0) {
        var tmp_3 = Rgb$Companion$generateEotf$lambda_1(function_0);
        tmp_2 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_3);
      } else {
        var tmp_4 = Rgb$Companion$generateEotf$lambda_2(function_0);
        tmp_2 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_4);
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(function_0) {
    this.u4s_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).q4q = function (double) {
    return this.u4s_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).r2 = function () {
    return this.u4s_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).hashCode = function () {
    return hashCode(this.r2());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(function_0) {
    this.v4s_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).q4q = function (double) {
    return this.v4s_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).r2 = function () {
    return this.v4s_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).hashCode = function () {
    return hashCode(this.r2());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(function_0) {
    this.w4s_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).q4q = function (double) {
    return this.w4s_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).r2 = function () {
    return this.w4s_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).hashCode = function () {
    return hashCode(this.r2());
  };
  function Rgb$Companion$DoubleIdentity$lambda(d) {
    return d;
  }
  function Rgb$Companion$generateOetf$lambda($function) {
    return function (x) {
      return ColorSpaces_getInstance().t4q($function, x);
    };
  }
  function Rgb$Companion$generateOetf$lambda_0($function) {
    return function (x) {
      return ColorSpaces_getInstance().v4q($function, x);
    };
  }
  function Rgb$Companion$generateOetf$lambda_1($function) {
    return function (x) {
      return rcpResponse(x, $function.i4r_1, $function.j4r_1, $function.k4r_1, $function.l4r_1, $function.h4r_1);
    };
  }
  function Rgb$Companion$generateOetf$lambda_2($function) {
    return function (x) {
      return rcpResponse_0(x, $function.i4r_1, $function.j4r_1, $function.k4r_1, $function.l4r_1, $function.m4r_1, $function.n4r_1, $function.h4r_1);
    };
  }
  function Rgb$Companion$generateEotf$lambda($function) {
    return function (x) {
      return ColorSpaces_getInstance().u4q($function, x);
    };
  }
  function Rgb$Companion$generateEotf$lambda_0($function) {
    return function (x) {
      return ColorSpaces_getInstance().w4q($function, x);
    };
  }
  function Rgb$Companion$generateEotf$lambda_1($function) {
    return function (x) {
      return response(x, $function.i4r_1, $function.j4r_1, $function.k4r_1, $function.l4r_1, $function.h4r_1);
    };
  }
  function Rgb$Companion$generateEotf$lambda_2($function) {
    return function (x) {
      return response_0(x, $function.i4r_1, $function.j4r_1, $function.k4r_1, $function.l4r_1, $function.m4r_1, $function.n4r_1, $function.h4r_1);
    };
  }
  function Rgb_init_$Init$(name, primaries, whitePoint, function_0, id, $this) {
    Rgb.call($this, name, primaries, whitePoint, null, generateOetf(Companion_getInstance_34(), function_0), generateEotf(Companion_getInstance_34(), function_0), 0.0, 1.0, function_0, id);
    return $this;
  }
  function Rgb_init_$Create$(name, primaries, whitePoint, function_0, id) {
    return Rgb_init_$Init$(name, primaries, whitePoint, function_0, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_0(name, primaries, whitePoint, gamma, min, max, id, $this) {
    var tmp;
    if (gamma === 1.0) {
      tmp = Companion_getInstance_34().x4s_1;
    } else {
      var tmp_0 = Rgb$_init_$lambda_yyl4se(gamma);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_7(tmp_0);
    }
    var tmp_1 = tmp;
    var tmp_2;
    if (gamma === 1.0) {
      tmp_2 = Companion_getInstance_34().x4s_1;
    } else {
      var tmp_3 = Rgb$_init_$lambda_yyl4se_0(gamma);
      tmp_2 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_7(tmp_3);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_1, tmp_2, min, max, new TransferParameters(gamma, 1.0, 0.0, 0.0, 0.0), id);
    return $this;
  }
  function Rgb_init_$Create$_0(name, primaries, whitePoint, gamma, min, max, id) {
    return Rgb_init_$Init$_0(name, primaries, whitePoint, gamma, min, max, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_1(colorSpace, transform, whitePoint, $this) {
    Rgb.call($this, colorSpace.h4l_1, colorSpace.b4q_1, whitePoint, transform, colorSpace.e4q_1, colorSpace.h4q_1, colorSpace.y4p_1, colorSpace.z4p_1, colorSpace.a4q_1, -1);
    return $this;
  }
  function Rgb_init_$Create$_1(colorSpace, transform, whitePoint) {
    return Rgb_init_$Init$_1(colorSpace, transform, whitePoint, objectCreate(protoOf(Rgb)));
  }
  function Companion_21() {
    Companion_instance_23 = this;
    var tmp = this;
    var tmp_0 = Rgb$Companion$DoubleIdentity$lambda;
    tmp.x4s_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(tmp_0);
  }
  var Companion_instance_23;
  function Companion_getInstance_34() {
    if (Companion_instance_23 == null)
      new Companion_21();
    return Companion_instance_23;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5(function_0) {
    this.y4s_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5).q4q = function (double) {
    return this.y4s_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5).r2 = function () {
    return this.y4s_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5).hashCode = function () {
    return hashCode(this.r2());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6(function_0) {
    this.z4s_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6).q4q = function (double) {
    return this.z4s_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6).r2 = function () {
    return this.z4s_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6).hashCode = function () {
    return hashCode(this.r2());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_7(function_0) {
    this.a4t_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_7).q4q = function (double) {
    return this.a4t_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_7).r2 = function () {
    return this.a4t_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_7).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_7).hashCode = function () {
    return hashCode(this.r2());
  };
  function Rgb$oetf$lambda(this$0) {
    return function (x) {
      return coerceIn(this$0.e4q_1.q4q(x), this$0.y4p_1, this$0.z4p_1);
    };
  }
  function Rgb$oetfFunc$lambda(this$0) {
    return function (x) {
      return coerceIn(this$0.e4q_1.q4q(x), this$0.y4p_1, this$0.z4p_1);
    };
  }
  function Rgb$eotf$lambda(this$0) {
    return function (x) {
      return this$0.h4q_1.q4q(coerceIn(x, this$0.y4p_1, this$0.z4p_1));
    };
  }
  function Rgb$eotfFunc$lambda(this$0) {
    return function (x) {
      return this$0.h4q_1.q4q(coerceIn(x, this$0.y4p_1, this$0.z4p_1));
    };
  }
  function Rgb$_init_$lambda_yyl4se($gamma) {
    return function (x) {
      var tmp0 = x < 0.0 ? 0.0 : x;
      // Inline function 'kotlin.math.pow' call
      var x_0 = 1.0 / $gamma;
      return Math.pow(tmp0, x_0);
    };
  }
  function Rgb$_init_$lambda_yyl4se_0($gamma) {
    return function (x) {
      var tmp0 = x < 0.0 ? 0.0 : x;
      // Inline function 'kotlin.math.pow' call
      var x_0 = $gamma;
      return Math.pow(tmp0, x_0);
    };
  }
  function Rgb(name, primaries, whitePoint, transform, oetf, eotf, min, max, transferParameters, id) {
    Companion_getInstance_34();
    ColorSpace.call(this, name, Companion_getInstance_28().c4p_1, id);
    this.x4p_1 = whitePoint;
    this.y4p_1 = min;
    this.z4p_1 = max;
    this.a4q_1 = transferParameters;
    this.e4q_1 = oetf;
    var tmp = this;
    tmp.f4q_1 = Rgb$oetf$lambda(this);
    var tmp_0 = this;
    var tmp_1 = Rgb$oetfFunc$lambda(this);
    tmp_0.g4q_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_5(tmp_1);
    this.h4q_1 = eotf;
    var tmp_2 = this;
    tmp_2.i4q_1 = Rgb$eotf$lambda(this);
    var tmp_3 = this;
    var tmp_4 = Rgb$eotfFunc$lambda(this);
    tmp_3.j4q_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_6(tmp_4);
    if (!(primaries.length === 6) && !(primaries.length === 9)) {
      throw IllegalArgumentException_init_$Create$("The color space's primaries must be defined as an array of 6 floats in xyY or 9 floats in XYZ");
    }
    if (this.y4p_1 >= this.z4p_1) {
      throw IllegalArgumentException_init_$Create$('Invalid range: min=' + this.y4p_1 + ', max=' + this.z4p_1 + '; min must be strictly < max');
    }
    this.b4q_1 = xyPrimaries(Companion_getInstance_34(), primaries);
    if (transform == null) {
      this.c4q_1 = computeXYZMatrix(Companion_getInstance_34(), this.b4q_1, this.x4p_1);
    } else {
      if (!(transform.length === 9)) {
        throw IllegalArgumentException_init_$Create$('Transform must have 9 entries! Has ' + transform.length);
      }
      this.c4q_1 = transform;
    }
    this.d4q_1 = inverse3x3(this.c4q_1);
    this.k4q_1 = isWideGamut(Companion_getInstance_34(), this.b4q_1, this.y4p_1, this.z4p_1);
    this.l4q_1 = isSrgb(Companion_getInstance_34(), this.b4q_1, this.x4p_1, oetf, eotf, this.y4p_1, this.z4p_1, id);
  }
  protoOf(Rgb).l4l = function () {
    return this.l4q_1;
  };
  protoOf(Rgb).n4l = function (component) {
    return this.y4p_1;
  };
  protoOf(Rgb).o4l = function (component) {
    return this.z4p_1;
  };
  protoOf(Rgb).j4p = function (v) {
    if (v.length < 3)
      return v;
    v[0] = this.j4q_1.q4q(v[0]);
    v[1] = this.j4q_1.q4q(v[1]);
    v[2] = this.j4q_1.q4q(v[2]);
    return mul3x3Float3(this.c4q_1, v);
  };
  protoOf(Rgb).k4p = function (v0, v1, v2) {
    var v00 = this.j4q_1.q4q(v0);
    var v10 = this.j4q_1.q4q(v1);
    var v20 = this.j4q_1.q4q(v2);
    if (this.c4q_1.length < 9)
      return new Long(0, 0);
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = this.c4q_1;
    var x = lhs[0] * v00 + lhs[3] * v10 + lhs[6] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = this.c4q_1;
    var y = lhs_0[1] * v00 + lhs_0[4] * v10 + lhs_0[7] * v20;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = fromInt(toRawBits(x));
    var v2_0 = fromInt(toRawBits(y));
    return bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
  };
  protoOf(Rgb).l4p = function (v0, v1, v2) {
    var v00 = this.j4q_1.q4q(v0);
    var v10 = this.j4q_1.q4q(v1);
    var v20 = this.j4q_1.q4q(v2);
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs = this.c4q_1;
    var z = lhs[2] * v00 + lhs[5] * v10 + lhs[8] * v20;
    return z;
  };
  protoOf(Rgb).m4p = function (x, y, z, a, colorSpace) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = this.d4q_1;
    var v0 = lhs[0] * x + lhs[3] * y + lhs[6] * z;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = this.d4q_1;
    var v1 = lhs_0[1] * x + lhs_0[4] * y + lhs_0[7] * z;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = this.d4q_1;
    var v2 = lhs_1[2] * x + lhs_1[5] * y + lhs_1[8] * z;
    v0 = this.g4q_1.q4q(v0);
    v1 = this.g4q_1.q4q(v1);
    v2 = this.g4q_1.q4q(v2);
    return Color_2(v0, v1, v2, a, colorSpace);
  };
  protoOf(Rgb).o4p = function (v) {
    mul3x3Float3(this.d4q_1, v);
    if (v.length < 3)
      return v;
    v[0] = this.g4q_1.q4q(v[0]);
    v[1] = this.g4q_1.q4q(v[1]);
    v[2] = this.g4q_1.q4q(v[2]);
    return v;
  };
  protoOf(Rgb).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!protoOf(ColorSpace).equals.call(this, other))
      return false;
    var rgb = other instanceof Rgb ? other : THROW_CCE();
    if (!(compareTo(rgb.y4p_1, this.y4p_1) === 0))
      return false;
    if (!(compareTo(rgb.z4p_1, this.z4p_1) === 0))
      return false;
    if (!this.x4p_1.equals(rgb.x4p_1))
      return false;
    if (!contentEquals(this.b4q_1, rgb.b4q_1))
      return false;
    if (!(this.a4q_1 == null)) {
      return equals(this.a4q_1, rgb.a4q_1);
    } else if (rgb.a4q_1 == null) {
      return true;
    }
    return !equals(this.e4q_1, rgb.e4q_1) ? false : equals(this.h4q_1, rgb.h4q_1);
  };
  protoOf(Rgb).hashCode = function () {
    var result = protoOf(ColorSpace).hashCode.call(this);
    result = imul(31, result) + this.x4p_1.hashCode() | 0;
    result = imul(31, result) + contentHashCode(this.b4q_1) | 0;
    result = imul(31, result) + (!(this.y4p_1 === 0.0) ? toBits(this.y4p_1) : 0) | 0;
    result = imul(31, result) + (!(this.z4p_1 === 0.0) ? toBits(this.z4p_1) : 0) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.a4q_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    if (this.a4q_1 == null) {
      result = imul(31, result) + hashCode(this.e4q_1) | 0;
      result = imul(31, result) + hashCode(this.h4q_1) | 0;
    }
    return result;
  };
  function DoubleFunction() {
  }
  function TransferParameters(gamma, a, b, c, d, e, f) {
    e = e === VOID ? 0.0 : e;
    f = f === VOID ? 0.0 : f;
    this.h4r_1 = gamma;
    this.i4r_1 = a;
    this.j4r_1 = b;
    this.k4r_1 = c;
    this.l4r_1 = d;
    this.m4r_1 = e;
    this.n4r_1 = f;
    if (isNaN_1(this.i4r_1) || isNaN_1(this.j4r_1) || isNaN_1(this.k4r_1) || isNaN_1(this.l4r_1) || isNaN_1(this.m4r_1) || isNaN_1(this.n4r_1) || isNaN_1(this.h4r_1)) {
      throw IllegalArgumentException_init_$Create$('Parameters cannot be NaN');
    }
    if (!isSpecialG(this.h4r_1)) {
      if (!(this.l4r_1 >= 0.0 && this.l4r_1 <= 1.0)) {
        throw IllegalArgumentException_init_$Create$('Parameter d must be in the range [0..1], was ' + ('' + this.l4r_1));
      }
      if (this.l4r_1 === 0.0 && (this.i4r_1 === 0.0 || this.h4r_1 === 0.0)) {
        throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, the transfer function is constant');
      }
      if (this.l4r_1 >= 1.0 && this.k4r_1 === 0.0) {
        throw IllegalArgumentException_init_$Create$('Parameter c is zero, the transfer function is constant');
      }
      if ((this.i4r_1 === 0.0 || this.h4r_1 === 0.0) && this.k4r_1 === 0.0) {
        throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, and c is zero, the transfer function is constant');
      }
      if (this.k4r_1 < 0.0) {
        throw IllegalArgumentException_init_$Create$('The transfer function must be increasing');
      }
      if (this.i4r_1 < 0.0 || this.h4r_1 < 0.0) {
        throw IllegalArgumentException_init_$Create$('The transfer function must be positive or increasing');
      }
    }
  }
  protoOf(TransferParameters).t4s = function () {
    return this.h4r_1 === -3.0;
  };
  protoOf(TransferParameters).s4s = function () {
    return this.h4r_1 === -2.0;
  };
  protoOf(TransferParameters).toString = function () {
    return 'TransferParameters(gamma=' + this.h4r_1 + ', a=' + this.i4r_1 + ', b=' + this.j4r_1 + ', c=' + this.k4r_1 + ', d=' + this.l4r_1 + ', e=' + this.m4r_1 + ', f=' + this.n4r_1 + ')';
  };
  protoOf(TransferParameters).hashCode = function () {
    var result = getNumberHashCode(this.h4r_1);
    result = imul(result, 31) + getNumberHashCode(this.i4r_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.j4r_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.k4r_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.l4r_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.m4r_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.n4r_1) | 0;
    return result;
  };
  protoOf(TransferParameters).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransferParameters))
      return false;
    if (!equals(this.h4r_1, other.h4r_1))
      return false;
    if (!equals(this.i4r_1, other.i4r_1))
      return false;
    if (!equals(this.j4r_1, other.j4r_1))
      return false;
    if (!equals(this.k4r_1, other.k4r_1))
      return false;
    if (!equals(this.l4r_1, other.l4r_1))
      return false;
    if (!equals(this.m4r_1, other.m4r_1))
      return false;
    if (!equals(this.n4r_1, other.n4r_1))
      return false;
    return true;
  };
  function isSpecialG(gamma) {
    return gamma === -2.0 || gamma === -3.0;
  }
  function WhitePoint(x, y) {
    this.m4q_1 = x;
    this.n4q_1 = y;
  }
  protoOf(WhitePoint).o4q = function () {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([this.m4q_1 / this.n4q_1, 1.0, (1.0 - this.m4q_1 - this.n4q_1) / this.n4q_1]);
  };
  protoOf(WhitePoint).toString = function () {
    return 'WhitePoint(x=' + this.m4q_1 + ', y=' + this.n4q_1 + ')';
  };
  protoOf(WhitePoint).hashCode = function () {
    var result = getNumberHashCode(this.m4q_1);
    result = imul(result, 31) + getNumberHashCode(this.n4q_1) | 0;
    return result;
  };
  protoOf(WhitePoint).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WhitePoint))
      return false;
    if (!equals(this.m4q_1, other.m4q_1))
      return false;
    if (!equals(this.n4q_1, other.n4q_1))
      return false;
    return true;
  };
  function Xyz(name, id) {
    ColorSpace.call(this, name, Companion_getInstance_28().d4p_1, id);
  }
  protoOf(Xyz).n4l = function (component) {
    return -2.0;
  };
  protoOf(Xyz).o4l = function (component) {
    return 2.0;
  };
  protoOf(Xyz).j4p = function (v) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    var tmp0 = v[0];
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = tmp0 < minimumValue ? minimumValue : tmp0;
    v[0] = this_0 > 2.0 ? 2.0 : this_0;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    var tmp0_0 = v[1];
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_0 = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = tmp0_0 < minimumValue_0 ? minimumValue_0 : tmp0_0;
    v[1] = this_1 > 2.0 ? 2.0 : this_1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    var tmp0_1 = v[2];
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_1 = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = tmp0_1 < minimumValue_1 ? minimumValue_1 : tmp0_1;
    v[2] = this_2 > 2.0 ? 2.0 : this_2;
    return v;
  };
  protoOf(Xyz).k4p = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v0 < minimumValue ? minimumValue : v0;
    var tmp0 = this_0 > 2.0 ? 2.0 : this_0;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_0 = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = v1 < minimumValue_0 ? minimumValue_0 : v1;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this_1 > 2.0 ? 2.0 : this_1;
    var v1_0 = fromInt(toRawBits(tmp0));
    var v2_0 = fromInt(toRawBits(val2));
    return bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
  };
  protoOf(Xyz).l4p = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v2 < minimumValue ? minimumValue : v2;
    return this_0 > 2.0 ? 2.0 : this_0;
  };
  protoOf(Xyz).m4p = function (x, y, z, a, colorSpace) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = x < minimumValue ? minimumValue : x;
    var tmp = this_0 > 2.0 ? 2.0 : this_0;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_0 = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = y < minimumValue_0 ? minimumValue_0 : y;
    var tmp_0 = this_1 > 2.0 ? 2.0 : this_1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_1 = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = z < minimumValue_1 ? minimumValue_1 : z;
    var tmp$ret$8 = this_2 > 2.0 ? 2.0 : this_2;
    return Color_2(tmp, tmp_0, tmp$ret$8, a, colorSpace);
  };
  protoOf(Xyz).o4p = function (v) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    var tmp0 = v[0];
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = tmp0 < minimumValue ? minimumValue : tmp0;
    v[0] = this_0 > 2.0 ? 2.0 : this_0;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    var tmp0_0 = v[1];
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_0 = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = tmp0_0 < minimumValue_0 ? minimumValue_0 : tmp0_0;
    v[1] = this_1 > 2.0 ? 2.0 : this_1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    var tmp0_1 = v[2];
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue_1 = -2.0;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = tmp0_1 < minimumValue_1 ? minimumValue_1 : tmp0_1;
    v[2] = this_2 > 2.0 ? 2.0 : this_2;
    return v;
  };
  function obtainFillPaint($this) {
    var tmp0_elvis_lhs = $this.g4t_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = Paint();
      this_0.i4t(Companion_getInstance_20().g4n_1);
      // Inline function 'kotlin.also' call
      $this.g4t_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function obtainStrokePaint($this) {
    var tmp0_elvis_lhs = $this.h4t_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = Paint();
      this_0.i4t(Companion_getInstance_20().h4n_1);
      // Inline function 'kotlin.also' call
      $this.h4t_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function selectPaint($this, drawStyle) {
    var tmp;
    if (equals(drawStyle, Fill_getInstance())) {
      tmp = obtainFillPaint($this);
    } else {
      if (drawStyle instanceof Stroke) {
        // Inline function 'kotlin.apply' call
        var this_0 = obtainStrokePaint($this);
        if (!(this_0.l41() === drawStyle.j4t_1)) {
          this_0.k41(drawStyle.j4t_1);
        }
        if (!(this_0.p4t() === drawStyle.l4t_1)) {
          this_0.o4t(drawStyle.l4t_1);
        }
        if (!(this_0.r4t() === drawStyle.k4t_1)) {
          this_0.q4t(drawStyle.k4t_1);
        }
        if (!(this_0.t4t() === drawStyle.m4t_1)) {
          this_0.s4t(drawStyle.m4t_1);
        }
        if (!equals(this_0.v4t(), drawStyle.n4t_1)) {
          this_0.u4t(drawStyle.n4t_1);
        }
        tmp = this_0;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_35().z4m_1 : filterQuality;
    // Inline function 'kotlin.apply' call
    var this_0 = selectPaint($this, style);
    if (!(brush == null)) {
      brush.x4g($this.r3p(), this_0, alpha);
    } else {
      if (!(this_0.q41() == null)) {
        this_0.p41(null);
      }
      if (!equals(this_0.z4h(), Companion_getInstance_15().m4h_1)) {
        this_0.y4g(Companion_getInstance_15().m4h_1);
      }
      if (!(this_0.b4e() === alpha)) {
        this_0.n4c(alpha);
      }
    }
    if (!equals(this_0.x4t(), colorFilter)) {
      this_0.w4t(colorFilter);
    }
    if (!(this_0.z4t() === blendMode)) {
      this_0.y4t(blendMode);
    }
    if (!(this_0.b4u() === filterQuality)) {
      this_0.a4u(filterQuality);
    }
    return this_0;
  }
  function configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_35().z4m_1 : filterQuality;
    // Inline function 'kotlin.apply' call
    var this_0 = selectPaint($this, style);
    var targetColor = modulate($this, color, alpha);
    if (!equals(this_0.z4h(), targetColor)) {
      this_0.y4g(targetColor);
    }
    if (!(this_0.q41() == null)) {
      this_0.p41(null);
    }
    if (!equals(this_0.x4t(), colorFilter)) {
      this_0.w4t(colorFilter);
    }
    if (!(this_0.z4t() === blendMode)) {
      this_0.y4t(blendMode);
    }
    if (!(this_0.b4u() === filterQuality)) {
      this_0.a4u(filterQuality);
    }
    return this_0;
  }
  function modulate($this, $receiver, alpha) {
    var tmp;
    if (!(alpha === 1.0)) {
      tmp = Color__copy$default_impl_ectz3s($receiver, _Color___get_alpha__impl__wcfyv1($receiver) * alpha);
    } else {
      tmp = $receiver;
    }
    return tmp;
  }
  function DrawParams(density, layoutDirection, canvas, size) {
    density = density === VOID ? get_DefaultDensity() : density;
    layoutDirection = layoutDirection === VOID ? LayoutDirection_Ltr_getInstance() : layoutDirection;
    canvas = canvas === VOID ? EmptyCanvas_instance : canvas;
    size = size === VOID ? Companion_getInstance().j3q_1 : size;
    this.c4u_1 = density;
    this.d4u_1 = layoutDirection;
    this.e4u_1 = canvas;
    this.f4u_1 = size;
  }
  protoOf(DrawParams).de = function () {
    return this.c4u_1;
  };
  protoOf(DrawParams).ee = function () {
    return this.d4u_1;
  };
  protoOf(DrawParams).g4u = function () {
    return this.e4u_1;
  };
  protoOf(DrawParams).h4u = function () {
    return this.f4u_1;
  };
  protoOf(DrawParams).toString = function () {
    return 'DrawParams(density=' + toString(this.c4u_1) + ', layoutDirection=' + this.d4u_1.toString() + ', canvas=' + toString(this.e4u_1) + ', size=' + Size__toString_impl_o87ni8(this.f4u_1) + ')';
  };
  protoOf(DrawParams).hashCode = function () {
    var result = hashCode(this.c4u_1);
    result = imul(result, 31) + this.d4u_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.e4u_1) | 0;
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.f4u_1) | 0;
    return result;
  };
  protoOf(DrawParams).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DrawParams))
      return false;
    if (!equals(this.c4u_1, other.c4u_1))
      return false;
    if (!this.d4u_1.equals(other.d4u_1))
      return false;
    if (!equals(this.e4u_1, other.e4u_1))
      return false;
    if (!equals(this.f4u_1, other.f4u_1))
      return false;
    return true;
  };
  function CanvasDrawScope$drawContext$1(this$0) {
    this.k4u_1 = this$0;
    this.i4u_1 = asDrawTransform(this);
    this.j4u_1 = null;
  }
  protoOf(CanvasDrawScope$drawContext$1).l4u = function (value) {
    this.k4u_1.e4t_1.e4u_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).d45 = function () {
    return this.k4u_1.e4t_1.e4u_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).m4u = function (value) {
    this.k4u_1.e4t_1.f4u_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).r3p = function () {
    return this.k4u_1.e4t_1.f4u_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).n4u = function () {
    return this.i4u_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).o4u = function (value) {
    this.k4u_1.e4t_1.d4u_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).p4u = function () {
    return this.k4u_1.e4t_1.d4u_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).q4u = function (value) {
    this.k4u_1.e4t_1.c4u_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).t3q = function () {
    return this.k4u_1.e4t_1.c4u_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).r4u = function (_set____db54di) {
    this.j4u_1 = _set____db54di;
  };
  protoOf(CanvasDrawScope$drawContext$1).s4u = function () {
    return this.j4u_1;
  };
  function CanvasDrawScope() {
    this.e4t_1 = new DrawParams();
    var tmp = this;
    tmp.f4t_1 = new CanvasDrawScope$drawContext$1(this);
    this.g4t_1 = null;
    this.h4t_1 = null;
  }
  protoOf(CanvasDrawScope).p4u = function () {
    return this.e4t_1.d4u_1;
  };
  protoOf(CanvasDrawScope).t3q = function () {
    return this.e4t_1.c4u_1.t3q();
  };
  protoOf(CanvasDrawScope).e3r = function () {
    return this.e4t_1.c4u_1.e3r();
  };
  protoOf(CanvasDrawScope).t4u = function () {
    return this.f4t_1;
  };
  protoOf(CanvasDrawScope).f4n = function (brush, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.e4t_1.e4u_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp_1 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    var tmp_2 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(shiftRight(value_2, 32));
    var tmp_3 = tmp_2 + floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    var tmp_4 = floatFromBits(bits_3);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    var tmp$ret$20 = floatFromBits(bits_4);
    return tmp.q4j(tmp_0, tmp_1, tmp_3, tmp_4 + tmp$ret$20, configurePaint(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).c4n = function (color, topLeft, size, alpha, style, colorFilter, blendMode) {
    var tmp = this.e4t_1.e4u_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp_1 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    var tmp_2 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(shiftRight(value_2, 32));
    var tmp_3 = tmp_2 + floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    var tmp_4 = floatFromBits(bits_3);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    var tmp$ret$20 = floatFromBits(bits_4);
    return tmp.q4j(tmp_0, tmp_1, tmp_3, tmp_4 + tmp$ret$20, configurePaint_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).w4u = function (image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    return this.e4t_1.e4u_1.u4j(image, srcOffset, srcSize, dstOffset, dstSize, configurePaint(this, null, style, alpha, colorFilter, blendMode, filterQuality));
  };
  protoOf(CanvasDrawScope).e4n = function (brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode) {
    var tmp = this.e4t_1.e4u_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp_1 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    var tmp_2 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(shiftRight(value_2, 32));
    var tmp_3 = tmp_2 + floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    var tmp_4 = floatFromBits(bits_3);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    var tmp_5 = tmp_4 + floatFromBits(bits_4);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_5 = _CornerRadius___get_packedValue__impl__okv4jq(cornerRadius);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_5 = convertToInt(shiftRight(value_5, 32));
    var tmp_6 = floatFromBits(bits_5);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_6 = _CornerRadius___get_packedValue__impl__okv4jq(cornerRadius);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
    var tmp$ret$28 = floatFromBits(bits_6);
    return tmp.r4j(tmp_0, tmp_1, tmp_3, tmp_5, tmp_6, tmp$ret$28, configurePaint(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).b4n = function (color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode) {
    var tmp = this.e4t_1.e4u_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp_1 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    var tmp_2 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(shiftRight(value_2, 32));
    var tmp_3 = tmp_2 + floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(topLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    var tmp_4 = floatFromBits(bits_3);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    var tmp_5 = tmp_4 + floatFromBits(bits_4);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_5 = _CornerRadius___get_packedValue__impl__okv4jq(cornerRadius);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_5 = convertToInt(shiftRight(value_5, 32));
    var tmp_6 = floatFromBits(bits_5);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_6 = _CornerRadius___get_packedValue__impl__okv4jq(cornerRadius);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
    var tmp$ret$28 = floatFromBits(bits_6);
    return tmp.r4j(tmp_0, tmp_1, tmp_3, tmp_5, tmp_6, tmp$ret$28, configurePaint_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).z4u = function (color, radius, center, alpha, style, colorFilter, blendMode) {
    return this.e4t_1.e4u_1.s4j(center, radius, configurePaint_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).a4n = function (path, color, alpha, style, colorFilter, blendMode) {
    return this.e4t_1.e4u_1.t4j(path, configurePaint_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).d4n = function (path, brush, alpha, style, colorFilter, blendMode) {
    return this.e4t_1.e4u_1.t4j(path, configurePaint(this, brush, style, alpha, colorFilter, blendMode));
  };
  function asDrawTransform(_this__u8e3s4) {
    return new asDrawTransform$1(_this__u8e3s4);
  }
  function asDrawTransform$1($this_asDrawTransform) {
    this.e4v_1 = $this_asDrawTransform;
  }
  protoOf(asDrawTransform$1).r3p = function () {
    return this.e4v_1.r3p();
  };
  protoOf(asDrawTransform$1).f4v = function (left, top, right, bottom) {
    // Inline function 'kotlin.let' call
    var it = this.e4v_1.d45();
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    var this_0 = this.r3p();
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp0 = floatFromBits(bits) - (left + right);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    var this_1 = this.r3p();
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) - (top + bottom);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$11 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var updatedSize = _Size___init__impl__aywn0g(tmp$ret$11);
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Size___get_packedValue__impl__7rlt1o(updatedSize);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    if (floatFromBits(bits_1) >= 0) {
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_2 = _Size___get_packedValue__impl__7rlt1o(updatedSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      tmp = floatFromBits(bits_2) >= 0;
    } else {
      tmp = false;
    }
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    if (!tmp) {
      var tmp$ret$21 = 'Width and height must be greater than or equal to zero';
      throwIllegalArgumentException(tmp$ret$21);
    }
    this.e4v_1.m4u(updatedSize);
    it.e3p(left, top);
  };
  protoOf(asDrawTransform$1).j4j = function (left, top, right, bottom, clipOp) {
    this.e4v_1.d45().j4j(left, top, right, bottom, clipOp);
  };
  protoOf(asDrawTransform$1).o4j = function (path, clipOp) {
    this.e4v_1.d45().o4j(path, clipOp);
  };
  protoOf(asDrawTransform$1).e3p = function (left, top) {
    this.e4v_1.d45().e3p(left, top);
  };
  protoOf(asDrawTransform$1).h4v = function (scaleX, scaleY, pivot) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.e4v_1.d45();
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(pivot);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(pivot);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp$ret$6 = floatFromBits(bits_0);
    this_0.e3p(tmp, tmp$ret$6);
    this_0.g4j(scaleX, scaleY);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(pivot);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    var tmp_0 = -floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(pivot);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    var tmp$ret$14 = floatFromBits(bits_2);
    this_0.e3p(tmp_0, -tmp$ret$14);
  };
  protoOf(asDrawTransform$1).i4v = function (matrix) {
    this.e4v_1.d45().h4j(matrix);
  };
  function get_DefaultDensity() {
    _init_properties_DrawContext_kt__bfvdzt();
    return DefaultDensity;
  }
  var DefaultDensity;
  function DrawContext() {
  }
  var properties_initialized_DrawContext_kt_nwly1n;
  function _init_properties_DrawContext_kt__bfvdzt() {
    if (!properties_initialized_DrawContext_kt_nwly1n) {
      properties_initialized_DrawContext_kt_nwly1n = true;
      DefaultDensity = Density(1.0, 1.0);
    }
  }
  function offsetSize($this, $receiver, offset) {
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o($receiver);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(shiftRight(value_0, 32));
    var tmp0 = tmp - floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _Size___get_packedValue__impl__7rlt1o($receiver);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp_0 - floatFromBits(bits_2);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$17 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$17);
  }
  function Companion_22() {
    Companion_instance_24 = this;
    this.y4m_1 = Companion_getInstance_12().u4f_1;
    this.z4m_1 = Companion_getInstance_17().w4l_1;
  }
  var Companion_instance_24;
  function Companion_getInstance_35() {
    if (Companion_instance_24 == null)
      new Companion_22();
    return Companion_instance_24;
  }
  function DrawScope() {
  }
  function Companion_23() {
    Companion_instance_25 = this;
    this.j4v_1 = 0.0;
    this.k4v_1 = 4.0;
    this.l4v_1 = Companion_getInstance_24().p4o_1;
    this.m4v_1 = Companion_getInstance_25().t4o_1;
  }
  var Companion_instance_25;
  function Companion_getInstance_36() {
    if (Companion_instance_25 == null)
      new Companion_23();
    return Companion_instance_25;
  }
  function Stroke(width, miter, cap, join, pathEffect) {
    Companion_getInstance_36();
    width = width === VOID ? 0.0 : width;
    miter = miter === VOID ? 4.0 : miter;
    cap = cap === VOID ? Companion_getInstance_36().l4v_1 : cap;
    join = join === VOID ? Companion_getInstance_36().m4v_1 : join;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    DrawStyle.call(this);
    this.j4t_1 = width;
    this.k4t_1 = miter;
    this.l4t_1 = cap;
    this.m4t_1 = join;
    this.n4t_1 = pathEffect;
  }
  protoOf(Stroke).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stroke))
      return false;
    if (!(this.j4t_1 === other.j4t_1))
      return false;
    if (!(this.k4t_1 === other.k4t_1))
      return false;
    if (!(this.l4t_1 === other.l4t_1))
      return false;
    if (!(this.m4t_1 === other.m4t_1))
      return false;
    if (!equals(this.n4t_1, other.n4t_1))
      return false;
    return true;
  };
  protoOf(Stroke).hashCode = function () {
    var result = getNumberHashCode(this.j4t_1);
    result = imul(31, result) + getNumberHashCode(this.k4t_1) | 0;
    result = imul(31, result) + StrokeCap__hashCode_impl_posxk8(this.l4t_1) | 0;
    result = imul(31, result) + StrokeJoin__hashCode_impl_3pyh8w(this.m4t_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.n4t_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(Stroke).toString = function () {
    return 'Stroke(width=' + this.j4t_1 + ', miter=' + this.k4t_1 + ', cap=' + StrokeCap__toString_impl_3xn0rd(this.l4t_1) + ', join=' + StrokeJoin__toString_impl_ph4e1r(this.m4t_1) + ', pathEffect=' + toString_0(this.n4t_1) + ')';
  };
  function DrawStyle() {
  }
  function Fill() {
    Fill_instance = this;
    DrawStyle.call(this);
  }
  var Fill_instance;
  function Fill_getInstance() {
    if (Fill_instance == null)
      new Fill();
    return Fill_instance;
  }
  function DrawTransform() {
  }
  function EmptyCanvas() {
  }
  protoOf(EmptyCanvas).d4j = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).e4j = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).f4j = function (bounds, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).e3p = function (dx, dy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).g4j = function (sx, sy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).h4j = function (matrix) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).j4j = function (left, top, right, bottom, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).o4j = function (path, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).q4j = function (left, top, right, bottom, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).r4j = function (left, top, right, bottom, radiusX, radiusY, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).s4j = function (center, radius, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).t4j = function (path, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).u4j = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  var EmptyCanvas_instance;
  function EmptyCanvas_getInstance() {
    return EmptyCanvas_instance;
  }
  function access$_get_dependency__eau0ww($this) {
    return $this.n4v_1;
  }
  function access$_set_dependency__rek8c($this, _set____db54di) {
    $this.n4v_1 = _set____db54di;
    return Unit_instance;
  }
  function access$_get_oldDependency__6kx1q7($this) {
    return $this.o4v_1;
  }
  function access$_set_oldDependency__lsok8j($this, _set____db54di) {
    $this.o4v_1 = _set____db54di;
    return Unit_instance;
  }
  function access$_get_dependenciesSet__8t5wug($this) {
    return $this.p4v_1;
  }
  function access$_get_oldDependenciesSet__gb53k7($this) {
    return $this.q4v_1;
  }
  function access$_set_oldDependenciesSet__hmq7k5($this, _set____db54di) {
    $this.q4v_1 = _set____db54di;
    return Unit_instance;
  }
  function access$_set_trackingInProgress__dxkhgu($this, _set____db54di) {
    $this.r4v_1 = _set____db54di;
    return Unit_instance;
  }
  function ChildLayerDependenciesTracker() {
    this.n4v_1 = null;
    this.o4v_1 = null;
    this.p4v_1 = null;
    this.q4v_1 = null;
    this.r4v_1 = false;
  }
  protoOf(ChildLayerDependenciesTracker).s4v = function (graphicsLayer) {
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    if (!this.r4v_1) {
      var tmp$ret$1 = 'Only add dependencies during a tracking';
      throwIllegalArgumentException(tmp$ret$1);
    }
    if (!(this.p4v_1 == null)) {
      ensureNotNull(this.p4v_1).h(graphicsLayer);
    } else if (!(this.n4v_1 == null)) {
      var tmp = this;
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterSetOf();
      this_0.h(ensureNotNull(this.n4v_1));
      this_0.h(graphicsLayer);
      tmp.p4v_1 = this_0;
      this.n4v_1 = null;
    } else {
      this.n4v_1 = graphicsLayer;
    }
    if (!(this.q4v_1 == null)) {
      return !ensureNotNull(this.q4v_1).q1(graphicsLayer);
    } else {
      if (!(this.o4v_1 === graphicsLayer)) {
        return true;
      } else {
        this.o4v_1 = null;
        return false;
      }
    }
  };
  function _CompositingStrategy___init__impl__pgr8e(value) {
    return value;
  }
  function Companion_24() {
    Companion_instance_26 = this;
    this.t4v_1 = _CompositingStrategy___init__impl__pgr8e(0);
    this.u4v_1 = _CompositingStrategy___init__impl__pgr8e(1);
    this.v4v_1 = _CompositingStrategy___init__impl__pgr8e(2);
  }
  var Companion_instance_26;
  function Companion_getInstance_37() {
    if (Companion_instance_26 == null)
      new Companion_24();
    return Companion_instance_26;
  }
  function drawLayer(_this__u8e3s4, graphicsLayer) {
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var canvas = _this__u8e3s4.t4u().d45();
    graphicsLayer.b4x(canvas, _this__u8e3s4.t4u().s4u());
  }
  function setOutline(_this__u8e3s4, outline) {
    if (outline instanceof Rectangle) {
      var tmp0 = outline.t4m_1.n3p_1;
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2 = outline.t4m_1.o3p_1;
      var v1 = fromInt(toRawBits(tmp0));
      var v2 = fromInt(toRawBits(val2));
      var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      var tmp = _Offset___init__impl__c168vi(tmp$ret$1);
      // Inline function 'androidx.compose.ui.geometry.Rect.width' call
      var this_0 = outline.t4m_1;
      var tmp0_0 = this_0.p3p_1 - this_0.n3p_1;
      // Inline function 'androidx.compose.ui.geometry.Rect.height' call
      var this_1 = outline.t4m_1;
      // Inline function 'androidx.compose.ui.geometry.Size' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2_0 = this_1.q3p_1 - this_1.o3p_1;
      var v1_0 = fromInt(toRawBits(tmp0_0));
      var v2_0 = fromInt(toRawBits(val2_0));
      var tmp$ret$5 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
      var tmp$ret$4 = _Size___init__impl__aywn0g(tmp$ret$5);
      _this__u8e3s4.e4x(tmp, tmp$ret$4);
    } else {
      if (outline instanceof Generic) {
        _this__u8e3s4.d4x(outline.x4m_1);
      } else {
        if (outline instanceof Rounded) {
          if (!(outline.v4m_1 == null)) {
            _this__u8e3s4.d4x(outline.v4m_1);
          } else {
            var rr = outline.u4m_1;
            var tmp0_1 = rr.x3p_1;
            // Inline function 'androidx.compose.ui.geometry.Offset' call
            // Inline function 'androidx.compose.ui.util.packFloats' call
            var val2_1 = rr.y3p_1;
            var v1_1 = fromInt(toRawBits(tmp0_1));
            var v2_1 = fromInt(toRawBits(val2_1));
            var tmp$ret$7 = bitwiseOr(shiftLeft(v1_1, 32), bitwiseAnd(v2_1, new Long(-1, 0)));
            var tmp_0 = _Offset___init__impl__c168vi(tmp$ret$7);
            var tmp0_2 = rr.h3q();
            // Inline function 'androidx.compose.ui.geometry.Size' call
            // Inline function 'androidx.compose.ui.util.packFloats' call
            var val2_2 = rr.i3q();
            var v1_2 = fromInt(toRawBits(tmp0_2));
            var v2_2 = fromInt(toRawBits(val2_2));
            var tmp$ret$9 = bitwiseOr(shiftLeft(v1_2, 32), bitwiseAnd(v2_2, new Long(-1, 0)));
            var tmp_1 = _Size___init__impl__aywn0g(tmp$ret$9);
            // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
            var this_2 = rr.e3q_1;
            // Inline function 'androidx.compose.ui.util.unpackFloat1' call
            var value = _CornerRadius___get_packedValue__impl__okv4jq(this_2);
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            // Inline function 'kotlin.fromBits' call
            var bits = convertToInt(shiftRight(value, 32));
            var tmp$ret$10 = floatFromBits(bits);
            _this__u8e3s4.c4x(tmp_0, tmp_1, tmp$ret$10);
          }
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  }
  function validateSize($this, srcOffset, srcSize) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (_IntOffset___get_x__impl__qiqr5o(srcOffset) >= 0 && _IntOffset___get_y__impl__2avpwj(srcOffset) >= 0) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(srcSize);
      tmp_2 = convertToInt(shiftRight(value, 32)) >= 0;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(srcSize);
      tmp_1 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0))) >= 0;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value_1 = _IntSize___get_packedValue__impl__uho7jf(srcSize);
      tmp_0 = convertToInt(shiftRight(value_1, 32)) <= $this.l4x_1.h3q();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_2 = _IntSize___get_packedValue__impl__uho7jf(srcSize);
      tmp = convertToInt(bitwiseAnd(value_2, new Long(-1, 0))) <= $this.l4x_1.i3q();
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return srcSize;
  }
  function BitmapPainter(image, srcOffset, srcSize) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().u3r_1 : srcOffset;
    var tmp;
    if (srcSize === VOID) {
      var tmp0 = image.h3q();
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = image.i3q();
      var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      tmp = _IntSize___init__impl__emcjft(tmp$ret$1);
    } else {
      tmp = srcSize;
    }
    srcSize = tmp;
    Painter.call(this);
    this.l4x_1 = image;
    this.m4x_1 = srcOffset;
    this.n4x_1 = srcSize;
    this.o4x_1 = Companion_getInstance_17().w4l_1;
    this.p4x_1 = validateSize(this, this.m4x_1, this.n4x_1);
    this.q4x_1 = 1.0;
    this.r4x_1 = null;
  }
  protoOf(BitmapPainter).s4x = function (_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    var this_0 = _this__u8e3s4.r3p();
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_1 = floatFromBits(bits);
    var tmp;
    if (isNaN_0(this_1)) {
      tmp = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp = roundToInt(this_1);
    }
    var tmp0 = tmp;
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    var this_2 = _this__u8e3s4.r3p();
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(this_2);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_3 = floatFromBits(bits_0);
    var tmp_0;
    if (isNaN_0(this_3)) {
      tmp_0 = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp_0 = roundToInt(this_3);
    }
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = tmp_0;
    var tmp$ret$13 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    var tmp$ret$12 = _IntSize___init__impl__emcjft(tmp$ret$13);
    _this__u8e3s4.x4u(this.l4x_1, this.m4x_1, this.n4x_1, VOID, tmp$ret$12, this.q4x_1, VOID, this.r4x_1, VOID, this.o4x_1);
  };
  protoOf(BitmapPainter).t4x = function () {
    return toSize_0(this.p4x_1);
  };
  protoOf(BitmapPainter).u4x = function (alpha) {
    this.q4x_1 = alpha;
    return true;
  };
  protoOf(BitmapPainter).v4x = function (colorFilter) {
    this.r4x_1 = colorFilter;
    return true;
  };
  protoOf(BitmapPainter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BitmapPainter))
      return false;
    if (!equals(this.l4x_1, other.l4x_1))
      return false;
    if (!equals(this.m4x_1, other.m4x_1))
      return false;
    if (!equals(this.n4x_1, other.n4x_1))
      return false;
    if (!(this.o4x_1 === other.o4x_1))
      return false;
    return true;
  };
  protoOf(BitmapPainter).hashCode = function () {
    var result = hashCode(this.l4x_1);
    result = imul(31, result) + IntOffset__hashCode_impl_w5rrxs(this.m4x_1) | 0;
    result = imul(31, result) + IntSize__hashCode_impl_gm9mta(this.n4x_1) | 0;
    result = imul(31, result) + FilterQuality__hashCode_impl_v4lpcb(this.o4x_1) | 0;
    return result;
  };
  protoOf(BitmapPainter).toString = function () {
    return 'BitmapPainter(image=' + toString(this.l4x_1) + ', srcOffset=' + IntOffset__toString_impl_h46d8h(this.m4x_1) + ', srcSize=' + IntSize__toString_impl_54w9zl(this.n4x_1) + ', ' + ('filterQuality=' + FilterQuality__toString_impl_i5cfty(this.o4x_1) + ')');
  };
  function obtainPaint($this) {
    var target = $this.w4x_1;
    if (target == null) {
      target = Paint();
      $this.w4x_1 = target;
    }
    return target;
  }
  function configureColorFilter($this, colorFilter) {
    if (!equals($this.y4x_1, colorFilter)) {
      var consumedColorFilter = $this.v4x(colorFilter);
      if (!consumedColorFilter) {
        if (colorFilter == null) {
          var tmp0_safe_receiver = $this.w4x_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.w4t(null);
          }
          $this.x4x_1 = false;
        } else {
          obtainPaint($this).w4t(colorFilter);
          $this.x4x_1 = true;
        }
      }
      $this.y4x_1 = colorFilter;
    }
  }
  function configureAlpha($this, alpha) {
    if (!($this.z4x_1 === alpha)) {
      var consumed = $this.u4x(alpha);
      if (!consumed) {
        if (alpha === 1.0) {
          var tmp0_safe_receiver = $this.w4x_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.n4c(alpha);
          }
          $this.x4x_1 = false;
        } else {
          obtainPaint($this).n4c(alpha);
          $this.x4x_1 = true;
        }
      }
      $this.z4x_1 = alpha;
    }
  }
  function configureLayoutDirection($this, rtl) {
    if (!$this.a4y_1.equals(rtl)) {
      $this.c4y(rtl);
      $this.a4y_1 = rtl;
    }
  }
  function Painter$drawLambda$lambda(this$0) {
    return function (_this__u8e3s4) {
      this$0.s4x(_this__u8e3s4);
      return Unit_instance;
    };
  }
  function Painter() {
    this.w4x_1 = null;
    this.x4x_1 = false;
    this.y4x_1 = null;
    this.z4x_1 = 1.0;
    this.a4y_1 = LayoutDirection_Ltr_getInstance();
    var tmp = this;
    tmp.b4y_1 = Painter$drawLambda$lambda(this);
  }
  protoOf(Painter).u4x = function (alpha) {
    return false;
  };
  protoOf(Painter).v4x = function (colorFilter) {
    return false;
  };
  protoOf(Painter).c4y = function (layoutDirection) {
    return false;
  };
  protoOf(Painter).d4y = function (_this__u8e3s4, size, alpha, colorFilter) {
    configureAlpha(this, alpha);
    configureColorFilter(this, colorFilter);
    configureLayoutDirection(this, _this__u8e3s4.p4u());
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    var this_0 = _this__u8e3s4.r3p();
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(shiftRight(value_0, 32));
    var tmp6 = tmp - floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    var this_1 = _this__u8e3s4.r3p();
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _Size___get_packedValue__impl__7rlt1o(this_1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.graphics.drawscope.inset' call
    var bottom = tmp_0 - floatFromBits(bits_2);
    _this__u8e3s4.t4u().n4u().f4v(0.0, 0.0, tmp6, bottom);
    try {
      var tmp_1;
      var tmp_2;
      if (alpha > 0.0) {
        // Inline function 'androidx.compose.ui.geometry.Size.width' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_3 = _Size___get_packedValue__impl__7rlt1o(size);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_3 = convertToInt(shiftRight(value_3, 32));
        tmp_2 = floatFromBits(bits_3) > 0;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        // Inline function 'androidx.compose.ui.geometry.Size.height' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_4 = _Size___get_packedValue__impl__7rlt1o(size);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
        tmp_1 = floatFromBits(bits_4) > 0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        if (this.x4x_1) {
          var tmp_3 = Companion_getInstance_0().j3p_1;
          // Inline function 'androidx.compose.ui.geometry.Size.width' call
          // Inline function 'androidx.compose.ui.util.unpackFloat1' call
          var value_5 = _Size___get_packedValue__impl__7rlt1o(size);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          // Inline function 'kotlin.fromBits' call
          var bits_5 = convertToInt(shiftRight(value_5, 32));
          var tmp0 = floatFromBits(bits_5);
          // Inline function 'androidx.compose.ui.geometry.Size.height' call
          // Inline function 'androidx.compose.ui.util.unpackFloat2' call
          var value_6 = _Size___get_packedValue__impl__7rlt1o(size);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          // Inline function 'kotlin.fromBits' call
          var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
          // Inline function 'androidx.compose.ui.geometry.Size' call
          // Inline function 'androidx.compose.ui.util.packFloats' call
          var val2 = floatFromBits(bits_6);
          var v1 = fromInt(toRawBits(tmp0));
          var v2 = fromInt(toRawBits(val2));
          var tmp$ret$35 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
          var tmp$ret$34 = _Size___init__impl__aywn0g(tmp$ret$35);
          var layerRect = Rect(tmp_3, tmp$ret$34);
          // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
          var tmp0_0 = _this__u8e3s4.t4u().d45();
          // Inline function 'androidx.compose.ui.graphics.withSaveLayer' call
          var paint = obtainPaint(this);
          try {
            tmp0_0.f4j(layerRect, paint);
            this.s4x(_this__u8e3s4);
          }finally {
            tmp0_0.e4j();
          }
        } else {
          this.s4x(_this__u8e3s4);
        }
      }
    }finally {
      _this__u8e3s4.t4u().n4u().f4v(-0.0, -0.0, -tmp6, -bottom);
    }
  };
  function get_PowersOfTen() {
    _init_properties_FastFloatParser_kt__fk9z4j();
    return PowersOfTen;
  }
  var PowersOfTen;
  function get_Mantissa64() {
    _init_properties_FastFloatParser_kt__fk9z4j();
    return Mantissa64;
  }
  var Mantissa64;
  function nextFloat(s, start, end) {
    _init_properties_FastFloatParser_kt__fk9z4j();
    if (start === end) {
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      return bitwiseOr(shiftLeft(fromInt(start), 32), bitwiseAnd(fromInt(toRawBits(NaN)), new Long(-1, 0)));
    }
    var index = start;
    var c = charCodeAt(s, index);
    var isNegative = c === _Char___init__impl__6a9atx(45);
    if (isNegative) {
      index = index + 1 | 0;
      if (index === end) {
        // Inline function 'androidx.compose.ui.graphics.vector.pack' call
        var index_0 = index;
        return bitwiseOr(shiftLeft(fromInt(index_0), 32), bitwiseAnd(fromInt(toRawBits(NaN)), new Long(-1, 0)));
      }
      c = charCodeAt(s, index);
      var tmp;
      // Inline function 'androidx.compose.ui.graphics.vector.isDigit' call
      var this_0 = c;
      // Inline function 'kotlin.code' call
      var this_1 = numberToChar(Char__minus_impl_a2frrh(this_0, _Char___init__impl__6a9atx(48)));
      if (!(Char__toInt_impl_vasixd(this_1) < 10)) {
        tmp = !(c === _Char___init__impl__6a9atx(46));
      } else {
        tmp = false;
      }
      if (tmp) {
        // Inline function 'androidx.compose.ui.graphics.vector.pack' call
        var index_1 = index;
        return bitwiseOr(shiftLeft(fromInt(index_1), 32), bitwiseAnd(fromInt(toRawBits(NaN)), new Long(-1, 0)));
      }
    }
    var significand = new Long(0, 0);
    var significandStartIndex = index;
    var dataLength = s.length;
    $l$loop: while (true) {
      var tmp_0;
      if (!(index === end)) {
        // Inline function 'androidx.compose.ui.graphics.vector.isDigit' call
        var this_2 = c;
        // Inline function 'kotlin.code' call
        var this_3 = numberToChar(Char__minus_impl_a2frrh(this_2, _Char___init__impl__6a9atx(48)));
        tmp_0 = Char__toInt_impl_vasixd(this_3) < 10;
      } else {
        tmp_0 = false;
      }
      if (!tmp_0) {
        break $l$loop;
      }
      var tmp_1 = multiply(new Long(10, 0), significand);
      // Inline function 'kotlin.code' call
      var this_4 = c;
      var tmp_2 = Char__toInt_impl_vasixd(this_4);
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(48);
      var tmp$ret$8 = Char__toInt_impl_vasixd(this_5);
      significand = add(tmp_1, fromInt(tmp_2 - tmp$ret$8 | 0));
      index = index + 1 | 0;
      c = index < dataLength ? charCodeAt(s, index) : _Char___init__impl__6a9atx(0);
    }
    var significandEndIndex = index;
    var digitCount = index - significandStartIndex | 0;
    var exponent = 0;
    var exponentStartIndex = index;
    var exponentEndIndex = index;
    if (!(index === end) && c === _Char___init__impl__6a9atx(46)) {
      index = index + 1 | 0;
      exponentStartIndex = index;
      $l$loop_0: while ((end - index | 0) >= 4) {
        // Inline function 'androidx.compose.ui.graphics.vector.parseFourDigits' call
        var offset = index;
        // Inline function 'kotlin.code' call
        var this_6 = charCodeAt(s, offset);
        var tmp$ret$10 = Char__toInt_impl_vasixd(this_6);
        var tmp_3 = fromInt(tmp$ret$10);
        // Inline function 'kotlin.code' call
        var this_7 = charCodeAt(s, offset + 1 | 0);
        var tmp$ret$11 = Char__toInt_impl_vasixd(this_7);
        var tmp_4 = bitwiseOr(tmp_3, shiftLeft(fromInt(tmp$ret$11), 16));
        // Inline function 'kotlin.code' call
        var this_8 = charCodeAt(s, offset + 2 | 0);
        var tmp$ret$12 = Char__toInt_impl_vasixd(this_8);
        var tmp_5 = bitwiseOr(tmp_4, shiftLeft(fromInt(tmp$ret$12), 32));
        // Inline function 'kotlin.code' call
        var this_9 = charCodeAt(s, offset + 3 | 0);
        var tmp$ret$13 = Char__toInt_impl_vasixd(this_9);
        var v = bitwiseOr(tmp_5, shiftLeft(fromInt(tmp$ret$13), 48));
        var base = subtract(v, new Long(3145776, 3145776));
        var predicate = bitwiseOr(add(v, new Long(4587590, 4587590)), base);
        var tmp_6;
        // Inline function 'kotlin.ULong.toLong' call
        var this_10 = _ULong___init__impl__c78o9k(new Long(-8323200, -8323200));
        var tmp$ret$14 = _ULong___get_data__impl__fggpzb(this_10);
        if (!equalsLong(bitwiseAnd(predicate, tmp$ret$14), new Long(0, 0))) {
          tmp_6 = -1;
        } else {
          tmp_6 = convertToInt(shiftRightUnsigned(multiply(base, new Long(655361, 65536100)), 48));
        }
        var digits = tmp_6;
        if (digits < 0)
          break $l$loop_0;
        significand = add(multiply(new Long(10000, 0), significand), fromInt(digits));
        index = index + 4 | 0;
      }
      c = index < dataLength ? charCodeAt(s, index) : _Char___init__impl__6a9atx(0);
      $l$loop_1: while (true) {
        var tmp_7;
        if (!(index === end)) {
          // Inline function 'androidx.compose.ui.graphics.vector.isDigit' call
          var this_11 = c;
          // Inline function 'kotlin.code' call
          var this_12 = numberToChar(Char__minus_impl_a2frrh(this_11, _Char___init__impl__6a9atx(48)));
          tmp_7 = Char__toInt_impl_vasixd(this_12) < 10;
        } else {
          tmp_7 = false;
        }
        if (!tmp_7) {
          break $l$loop_1;
        }
        var tmp_8 = multiply(new Long(10, 0), significand);
        // Inline function 'kotlin.code' call
        var this_13 = c;
        var tmp_9 = Char__toInt_impl_vasixd(this_13);
        // Inline function 'kotlin.code' call
        var this_14 = _Char___init__impl__6a9atx(48);
        var tmp$ret$18 = Char__toInt_impl_vasixd(this_14);
        significand = add(tmp_8, fromInt(tmp_9 - tmp$ret$18 | 0));
        index = index + 1 | 0;
        c = index < dataLength ? charCodeAt(s, index) : _Char___init__impl__6a9atx(0);
      }
      exponent = exponentStartIndex - index | 0;
      exponentEndIndex = index;
      digitCount = digitCount - exponent | 0;
    }
    if (digitCount === 0) {
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      var index_2 = index;
      return bitwiseOr(shiftLeft(fromInt(index_2), 32), bitwiseAnd(fromInt(toRawBits(NaN)), new Long(-1, 0)));
    }
    var exponentNumber = 0;
    // Inline function 'kotlin.code' call
    var this_15 = c;
    var tmp_10 = Char__toInt_impl_vasixd(this_15) | 32;
    // Inline function 'kotlin.code' call
    var this_16 = _Char___init__impl__6a9atx(101);
    if (tmp_10 === Char__toInt_impl_vasixd(this_16)) {
      index = index + 1 | 0;
      c = index < dataLength ? charCodeAt(s, index) : _Char___init__impl__6a9atx(0);
      var isExponentNegative = c === _Char___init__impl__6a9atx(45);
      if (isExponentNegative || c === _Char___init__impl__6a9atx(43)) {
        index = index + 1 | 0;
      }
      c = charCodeAt(s, index);
      $l$loop_2: while (true) {
        var tmp_11;
        if (!(index === end)) {
          // Inline function 'androidx.compose.ui.graphics.vector.isDigit' call
          var this_17 = c;
          // Inline function 'kotlin.code' call
          var this_18 = numberToChar(Char__minus_impl_a2frrh(this_17, _Char___init__impl__6a9atx(48)));
          tmp_11 = Char__toInt_impl_vasixd(this_18) < 10;
        } else {
          tmp_11 = false;
        }
        if (!tmp_11) {
          break $l$loop_2;
        }
        if (exponentNumber < 1024) {
          var tmp_12 = imul(10, exponentNumber);
          // Inline function 'kotlin.code' call
          var this_19 = c;
          var tmp_13 = Char__toInt_impl_vasixd(this_19);
          // Inline function 'kotlin.code' call
          var this_20 = _Char___init__impl__6a9atx(48);
          exponentNumber = tmp_12 + (tmp_13 - Char__toInt_impl_vasixd(this_20) | 0) | 0;
        }
        index = index + 1 | 0;
        c = index < dataLength ? charCodeAt(s, index) : _Char___init__impl__6a9atx(0);
      }
      if (isExponentNegative)
        exponentNumber = -exponentNumber | 0;
      exponent = exponent + exponentNumber | 0;
    }
    var tooManyDigits = false;
    if (digitCount > 19) {
      var retryIndex = significandStartIndex;
      c = charCodeAt(s, retryIndex);
      while (!(index === end) && (c === _Char___init__impl__6a9atx(48) || c === _Char___init__impl__6a9atx(46))) {
        if (c === _Char___init__impl__6a9atx(48)) {
          digitCount = digitCount - 1 | 0;
        }
        retryIndex = retryIndex + 1 | 0;
        c = retryIndex < dataLength ? charCodeAt(s, retryIndex) : _Char___init__impl__6a9atx(0);
      }
      if (digitCount > 19) {
        tooManyDigits = true;
        significand = new Long(0, 0);
        retryIndex = significandStartIndex;
        c = charCodeAt(s, retryIndex);
        $l$loop_3: while (true) {
          var tmp_14;
          if (!(retryIndex === significandEndIndex)) {
            // Inline function 'kotlin.toULong' call
            var this_21 = significand;
            var tmp0 = _ULong___init__impl__c78o9k(this_21);
            // Inline function 'kotlin.ULong.compareTo' call
            var other = _ULong___init__impl__c78o9k(new Long(-1486618624, 232830643));
            tmp_14 = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)) < 0;
          } else {
            tmp_14 = false;
          }
          if (!tmp_14) {
            break $l$loop_3;
          }
          var tmp_15 = multiply(new Long(10, 0), significand);
          // Inline function 'kotlin.code' call
          var this_22 = c;
          var tmp_16 = Char__toInt_impl_vasixd(this_22);
          // Inline function 'kotlin.code' call
          var this_23 = _Char___init__impl__6a9atx(48);
          var tmp$ret$29 = Char__toInt_impl_vasixd(this_23);
          significand = add(tmp_15, fromInt(tmp_16 - tmp$ret$29 | 0));
          retryIndex = retryIndex + 1 | 0;
          c = retryIndex < dataLength ? charCodeAt(s, retryIndex) : _Char___init__impl__6a9atx(0);
        }
        // Inline function 'kotlin.toULong' call
        var this_24 = significand;
        var tmp0_0 = _ULong___init__impl__c78o9k(this_24);
        // Inline function 'kotlin.ULong.compareTo' call
        var other_0 = _ULong___init__impl__c78o9k(new Long(-1486618624, 232830643));
        if (ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_0)) >= 0) {
          exponent = (significandEndIndex - retryIndex | 0) + exponentNumber | 0;
        } else {
          retryIndex = exponentStartIndex;
          c = charCodeAt(s, retryIndex);
          $l$loop_4: while (true) {
            var tmp_17;
            if (!(retryIndex === exponentEndIndex)) {
              // Inline function 'kotlin.toULong' call
              var this_25 = significand;
              var tmp0_1 = _ULong___init__impl__c78o9k(this_25);
              // Inline function 'kotlin.ULong.compareTo' call
              var other_1 = _ULong___init__impl__c78o9k(new Long(-1486618624, 232830643));
              tmp_17 = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_1)) < 0;
            } else {
              tmp_17 = false;
            }
            if (!tmp_17) {
              break $l$loop_4;
            }
            var tmp_18 = multiply(new Long(10, 0), significand);
            // Inline function 'kotlin.code' call
            var this_26 = c;
            var tmp_19 = Char__toInt_impl_vasixd(this_26);
            // Inline function 'kotlin.code' call
            var this_27 = _Char___init__impl__6a9atx(48);
            var tmp$ret$35 = Char__toInt_impl_vasixd(this_27);
            significand = add(tmp_18, fromInt(tmp_19 - tmp$ret$35 | 0));
            retryIndex = retryIndex + 1 | 0;
            c = retryIndex < dataLength ? charCodeAt(s, retryIndex) : _Char___init__impl__6a9atx(0);
          }
          exponent = (exponentStartIndex - retryIndex | 0) + exponentNumber | 0;
        }
      }
    }
    var tmp_20;
    if ((-10 <= exponent ? exponent <= 10 : false) && !tooManyDigits) {
      // Inline function 'kotlin.toULong' call
      var this_28 = significand;
      var tmp0_2 = _ULong___init__impl__c78o9k(this_28);
      // Inline function 'kotlin.ULong.shl' call
      var this_29 = _ULong___init__impl__c78o9k(new Long(1, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_2 = _ULong___init__impl__c78o9k(shiftLeft(_ULong___get_data__impl__fggpzb(this_29), 24));
      tmp_20 = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_2), _ULong___get_data__impl__fggpzb(other_2)) <= 0;
    } else {
      tmp_20 = false;
    }
    if (tmp_20) {
      var f = toNumber(significand);
      if (exponent < 0) {
        f = f / get_PowersOfTen()[-exponent | 0];
      } else {
        f = f * get_PowersOfTen()[exponent];
      }
      var tmp0_3 = index;
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      var value = isNegative ? -f : f;
      return bitwiseOr(shiftLeft(fromInt(tmp0_3), 32), bitwiseAnd(fromInt(toRawBits(value)), new Long(-1, 0)));
    }
    if (equalsLong(significand, new Long(0, 0))) {
      var tmp0_4 = index;
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      var value_0 = isNegative ? -0.0 : 0.0;
      return bitwiseOr(shiftLeft(fromInt(tmp0_4), 32), bitwiseAnd(fromInt(toRawBits(value_0)), new Long(-1, 0)));
    }
    if (!(-126 <= exponent ? exponent <= 127 : false)) {
      var tmp0_5 = index;
      // Inline function 'kotlin.text.toFloat' call
      var this_30 = substring(s, start, index);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      var value_1 = toDouble(this_30);
      return bitwiseOr(shiftLeft(fromInt(tmp0_5), 32), bitwiseAnd(fromInt(toRawBits(value_1)), new Long(-1, 0)));
    }
    // Inline function 'kotlin.ULong.toLong' call
    var this_31 = ULongArray__get_impl_pr71q9(get_Mantissa64(), exponent - -325 | 0);
    var significandFactor = _ULong___get_data__impl__fggpzb(this_31);
    var lz = countLeadingZeroBits(significand);
    significand = shiftLeft(significand, lz);
    // Inline function 'androidx.compose.ui.graphics.vector.fullMultiplicationHighBits' call
    var x = significand;
    var xLo = bitwiseAnd(x, new Long(-1, 0));
    var xHi = shiftRightUnsigned(x, 32);
    var yLo = bitwiseAnd(significandFactor, new Long(-1, 0));
    var yHi = shiftRightUnsigned(significandFactor, 32);
    var xTimesYHi = multiply(xHi, yHi);
    var xTimesYMid = multiply(xLo, yHi);
    var yTimesXMid = multiply(xHi, yLo);
    var xTimesYLo = multiply(xLo, yLo);
    var carry = add(add(yTimesXMid, shiftRightUnsigned(xTimesYLo, 32)), bitwiseAnd(xTimesYMid, new Long(-1, 0)));
    var upper = add(add(xTimesYHi, shiftRightUnsigned(carry, 32)), shiftRightUnsigned(xTimesYMid, 32));
    var upperBit = convertToInt(shiftRightUnsigned(upper, 63));
    var mantissa = shiftRightUnsigned(upper, upperBit + 9 | 0);
    lz = lz + (1 ^ upperBit) | 0;
    if (equalsLong(bitwiseAnd(upper, new Long(511, 0)), new Long(511, 0)) || (equalsLong(bitwiseAnd(upper, new Long(511, 0)), new Long(0, 0)) && equalsLong(bitwiseAnd(mantissa, new Long(3, 0)), new Long(1, 0)))) {
      var tmp0_6 = index;
      // Inline function 'kotlin.text.toFloat' call
      var this_32 = substring(s, start, index);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      var value_2 = toDouble(this_32);
      return bitwiseOr(shiftLeft(fromInt(tmp0_6), 32), bitwiseAnd(fromInt(toRawBits(value_2)), new Long(-1, 0)));
    }
    // Inline function 'kotlin.Long.plus' call
    var this_33 = mantissa;
    mantissa = add(this_33, fromInt(1));
    mantissa = shiftRightUnsigned(mantissa, 1);
    if (compare(mantissa, new Long(0, 2097152)) >= 0) {
      mantissa = new Long(0, 1048576);
      lz = lz - 1 | 0;
    }
    mantissa = bitwiseAnd(mantissa, new Long(-1, -1048577));
    var tmp0_7 = new Long(217706, 0);
    // Inline function 'kotlin.Long.times' call
    var other_3 = exponent;
    var tmp$ret$52 = multiply(tmp0_7, fromInt(other_3));
    // Inline function 'kotlin.Long.plus' call
    var this_34 = shiftRight(tmp$ret$52, 16);
    // Inline function 'kotlin.Long.plus' call
    var this_35 = add(this_34, fromInt(1024));
    var adjustedExponent = add(this_35, fromInt(63));
    // Inline function 'kotlin.Long.minus' call
    var other_4 = lz;
    var realExponent = subtract(adjustedExponent, fromInt(other_4));
    if (compare(realExponent, new Long(1, 0)) < 0 || compare(realExponent, new Long(2046, 0)) > 0) {
      var tmp0_8 = index;
      // Inline function 'kotlin.text.toFloat' call
      var this_36 = substring(s, start, index);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'androidx.compose.ui.graphics.vector.pack' call
      var value_3 = toDouble(this_36);
      return bitwiseOr(shiftLeft(fromInt(tmp0_8), 32), bitwiseAnd(fromInt(toRawBits(value_3)), new Long(-1, 0)));
    }
    mantissa = bitwiseOr(mantissa, shiftLeft(realExponent, 52));
    mantissa = bitwiseOr(mantissa, isNegative ? new Long(0, -2147483648) : new Long(0, 0));
    var tmp0_9 = index;
    // Inline function 'androidx.compose.ui.util.doubleFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = mantissa;
    // Inline function 'androidx.compose.ui.graphics.vector.pack' call
    var value_4 = doubleFromBits(bits);
    return bitwiseOr(shiftLeft(fromInt(tmp0_9), 32), bitwiseAnd(fromInt(toRawBits(value_4)), new Long(-1, 0)));
  }
  var properties_initialized_FastFloatParser_kt_wcdbov;
  function _init_properties_FastFloatParser_kt__fk9z4j() {
    if (!properties_initialized_FastFloatParser_kt_wcdbov) {
      properties_initialized_FastFloatParser_kt_wcdbov = true;
      // Inline function 'kotlin.floatArrayOf' call
      PowersOfTen = new Float32Array([1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, 1.0E7, 1.0E8, 1.0E9, 1.0E10]);
      // Inline function 'kotlin.ulongArrayOf' call
      Mantissa64 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(2118029704, -1513171909)), _ULong___init__impl__c78o9k(new Long(1573795306, -817723062)), _ULong___init__impl__c78o9k(new Long(2057363890, -2121689650)), _ULong___init__impl__c78o9k(new Long(424221215, -1578370238)), _ULong___init__impl__c78o9k(new Long(-1617207130, -899220974)), _ULong___init__impl__c78o9k(new Long(1199716560, -50284393)), _ULong___init__impl__c78o9k(new Long(-1934531710, -1642040482)), _ULong___init__impl__c78o9k(new Long(803060834, -978808778)), _ULong___init__impl__c78o9k(new Long(-1143657605, -149769149)), _ULong___init__impl__c78o9k(new Long(1432697645, -1704218454)), _ULong___init__impl__c78o9k(new Long(-356611592, -1056531244)), _ULong___init__impl__c78o9k(new Long(627977334, -246922230)), _ULong___init__impl__c78o9k(new Long(1466227658, -1764939130)), _ULong___init__impl__c78o9k(new Long(-314699076, -1132432089)), _ULong___init__impl__c78o9k(new Long(-393373845, -341798287)), _ULong___init__impl__c78o9k(new Long(827883171, -1824236665)), _ULong___init__impl__c78o9k(new Long(-38887860, -1206554008)), _ULong___init__impl__c78o9k(new Long(1025131999, -434450685)), _ULong___init__impl__c78o9k(new Long(103836587, -1882144414)), _ULong___init__impl__c78o9k(new Long(-2017687914, -1278938694)), _ULong___init__impl__c78o9k(new Long(699115580, -524931543)), _ULong___init__impl__c78o9k(new Long(-1173665499, -1938694951)), _ULong___init__impl__c78o9k(new Long(680401775, -1349626864)), _ULong___init__impl__c78o9k(new Long(850502218, -613291756)), _ULong___init__impl__c78o9k(new Long(-1615919762, -1993920084)), _ULong___init__impl__c78o9k(new Long(-946157878, -1418658281)), _ULong___init__impl__c78o9k(new Long(-1182697347, -699581027)), _ULong___init__impl__c78o9k(new Long(-1812927666, -2047850878)), _ULong___init__impl__c78o9k(new Long(955065889, -1486071773)), _ULong___init__impl__c78o9k(new Long(120090538, -783847892)), _ULong___init__impl__c78o9k(new Long(-2072427062, -2100517669)), _ULong___init__impl__c78o9k(new Long(1704433468, -1551905262)), _ULong___init__impl__c78o9k(new Long(-16941812, -866139754)), _ULong___init__impl__c78o9k(new Long(-1094919089, -8932868)), _ULong___init__impl__c78o9k(new Long(-147453519, -1616195779)), _ULong___init__impl__c78o9k(new Long(1963166749, -946502899)), _ULong___init__impl__c78o9k(new Long(-767267035, -109386800)), _ULong___init__impl__c78o9k(new Long(-2090154633, -1678979486)), _ULong___init__impl__c78o9k(new Long(608532181, -1024982533)), _ULong___init__impl__c78o9k(new Long(-313076598, -207486343)), _ULong___init__impl__c78o9k(new Long(878068950, -1740291700)), _ULong___init__impl__c78o9k(new Long(1097586188, -1101622801)), _ULong___init__impl__c78o9k(new Long(298240911, -303286677)), _ULong___init__impl__c78o9k(new Long(-350470343, -1800166910)), _ULong___init__impl__c78o9k(new Long(-1511829753, -1176466813)), _ULong___init__impl__c78o9k(new Long(-1889787191, -396841692)), _ULong___init__impl__c78o9k(new Long(-644246082, -1858638794)), _ULong___init__impl__c78o9k(new Long(-1879049427, -1249556668)), _ULong___init__impl__c78o9k(new Long(-1275069959, -488204011)), _ULong___init__impl__c78o9k(new Long(-1870660549, -1915740243)), _ULong___init__impl__c78o9k(new Long(-190842038, -1320933480)), _ULong___init__impl__c78o9k(new Long(835189277, -577425025)), _ULong___init__impl__c78o9k(new Long(2132606034, -1971503377)), _ULong___init__impl__c78o9k(new Long(1592015718, -1390637397)), _ULong___init__impl__c78o9k(new Long(916277824, -664554922)), _ULong___init__impl__c78o9k(new Long(-501068184, -2025959563)), _ULong___init__impl__c78o9k(new Long(1521148418, -1458707629)), _ULong___init__impl__c78o9k(new Long(827693699, -749642712)), _ULong___init__impl__c78o9k(new Long(517308561, -2079139431)), _ULong___init__impl__c78o9k(new Long(1720377526, -1525182465)), _ULong___init__impl__c78o9k(new Long(1076730083, -832736257)), _ULong___init__impl__c78o9k(new Long(-2011398258, -2131072897)), _ULong___init__impl__c78o9k(new Long(1780719474, -1590099297)), _ULong___init__impl__c78o9k(new Long(1152157518, -913882297)), _ULong___init__impl__c78o9k(new Long(366455074, -68611047)), _ULong___init__impl__c78o9k(new Long(-1381578315, -1653494641)), _ULong___init__impl__c78o9k(new Long(-1726972894, -993126477)), _ULong___init__impl__c78o9k(new Long(2136251179, -167666272)), _ULong___init__impl__c78o9k(new Long(1335156987, -1715404156)), _ULong___init__impl__c78o9k(new Long(1668946233, -1070513371)), _ULong___init__impl__c78o9k(new Long(-1135042680, -264399890)), _ULong___init__impl__c78o9k(new Long(901211061, -1775862667)), _ULong___init__impl__c78o9k(new Long(-2094711646, -1146086510)), _ULong___init__impl__c78o9k(new Long(602835915, -358866313)), _ULong___init__impl__c78o9k(new Long(1987385183, -1834904182)), _ULong___init__impl__c78o9k(new Long(336747830, -1219888403)), _ULong___init__impl__c78o9k(new Long(1494676612, -451118680)), _ULong___init__impl__c78o9k(new Long(934172882, -1892561911)), _ULong___init__impl__c78o9k(new Long(-2053509369, -1291960565)), _ULong___init__impl__c78o9k(new Long(1728080585, -541208882)), _ULong___init__impl__c78o9k(new Long(6308541, -1948868287)), _ULong___init__impl__c78o9k(new Long(1081627501, -1362343535)), _ULong___init__impl__c78o9k(new Long(-1869191096, -629187595)), _ULong___init__impl__c78o9k(new Long(2052981037, -2003854983)), _ULong___init__impl__c78o9k(new Long(-654999176, -1431076905)), _ULong___init__impl__c78o9k(new Long(-818748970, -715104307)), _ULong___init__impl__c78o9k(new Long(-1585459930, -2057552928)), _ULong___init__impl__c78o9k(new Long(-908083089, -1498199336)), _ULong___init__impl__c78o9k(new Long(-61362037, -799007346)), _ULong___init__impl__c78o9k(new Long(1572261463, -2109992327)), _ULong___init__impl__c78o9k(new Long(-1255898643, -1563748585)), _ULong___init__impl__c78o9k(new Long(-1569873304, -880943907)), _ULong___init__impl__c78o9k(new Long(185142018, -27438059)), _ULong___init__impl__c78o9k(new Long(652584673, -1627761523)), _ULong___init__impl__c78o9k(new Long(1889472666, -960960080)), _ULong___init__impl__c78o9k(new Long(-1933126464, -127458276)), _ULong___init__impl__c78o9k(new Long(-671333128, -1690274159)), _ULong___init__impl__c78o9k(new Long(1308317238, -1039100874)), _ULong___init__impl__c78o9k(new Long(-512087100, -225134269)), _ULong___init__impl__c78o9k(new Long(1827429210, -1751321654)), _ULong___init__impl__c78o9k(new Long(136802865, -1115410243)), _ULong___init__impl__c78o9k(new Long(1244745405, -320520980)), _ULong___init__impl__c78o9k(new Long(-1369517770, -1810938349)), _ULong___init__impl__c78o9k(new Long(-1711897212, -1189931112)), _ULong___init__impl__c78o9k(new Long(-1066129691, -413672066)), _ULong___init__impl__c78o9k(new Long(944281679, -1869157777)), _ULong___init__impl__c78o9k(new Long(106610275, -1262705397)), _ULong___init__impl__c78o9k(new Long(-940478981, -504639923)), _ULong___init__impl__c78o9k(new Long(-1661541187, -1926012688)), _ULong___init__impl__c78o9k(new Long(-1003184660, -1333774036)), _ULong___init__impl__c78o9k(new Long(-180239001, -593475721)), _ULong___init__impl__c78o9k(new Long(-112649376, -1981535062)), _ULong___init__impl__c78o9k(new Long(-1214553543, -1403177003)), _ULong___init__impl__c78o9k(new Long(629291719, -680229429)), _ULong___init__impl__c78o9k(new Long(-143563588, -2035756130)), _ULong___init__impl__c78o9k(new Long(-1253196309, -1470953338)), _ULong___init__impl__c78o9k(new Long(1654730086, -764949848)), _ULong___init__impl__c78o9k(new Long(1034206304, -2088706391)), _ULong___init__impl__c78o9k(new Long(-1928467592, -1537141165)), _ULong___init__impl__c78o9k(new Long(1884382806, -847684632)), _ULong___init__impl__c78o9k(new Long(1177739254, -2140415631)), _ULong___init__impl__c78o9k(new Long(-1749051405, -1601777715)), _ULong___init__impl__c78o9k(new Long(-38830608, -928480320)), _ULong___init__impl__c78o9k(new Long(1025203564, -86858575)), _ULong___init__impl__c78o9k(new Long(-969860509, -1664899346)), _ULong___init__impl__c78o9k(new Long(2008899836, -1007382358)), _ULong___init__impl__c78o9k(new Long(363641147, -185486123)), _ULong___init__impl__c78o9k(new Long(764146629, -1726541563)), _ULong___init__impl__c78o9k(new Long(2028925110, -1084435130)), _ULong___init__impl__c78o9k(new Long(388672740, -281802088)), _ULong___init__impl__c78o9k(new Long(242920462, -1786739041)), _ULong___init__impl__c78o9k(new Long(-770091246, -1159681978)), _ULong___init__impl__c78o9k(new Long(-2036355881, -375860648)), _ULong___init__impl__c78o9k(new Long(1411632134, -1845525641)), _ULong___init__impl__c78o9k(new Long(690798344, -1233165227)), _ULong___init__impl__c78o9k(new Long(1937239754, -467714710)), _ULong___init__impl__c78o9k(new Long(-2010450626, -1902934430)), _ULong___init__impl__c78o9k(new Long(708162189, -1304926213)), _ULong___init__impl__c78o9k(new Long(-188539087, -557415943)), _ULong___init__impl__c78o9k(new Long(955904894, -1958997700)), _ULong___init__impl__c78o9k(new Long(1194881118, -1375005301)), _ULong___init__impl__c78o9k(new Long(419859574, -645014802)), _ULong___init__impl__c78o9k(new Long(-811329591, -2013746988)), _ULong___init__impl__c78o9k(new Long(59579836, -1443441910)), _ULong___init__impl__c78o9k(new Long(-2073008853, -730560564)), _ULong___init__impl__c78o9k(new Long(-758759621, -2067213089)), _ULong___init__impl__c78o9k(new Long(-948449527, -1510274537)), _ULong___init__impl__c78o9k(new Long(-1185561908, -814101347)), _ULong___init__impl__c78o9k(new Long(-1814718017, -2119426078)), _ULong___init__impl__c78o9k(new Long(952827951, -1575540773)), _ULong___init__impl__c78o9k(new Long(117293115, -895684142)), _ULong___init__impl__c78o9k(new Long(-2000867254, -45863354)), _ULong___init__impl__c78o9k(new Long(360070702, -1639277332)), _ULong___init__impl__c78o9k(new Long(450088378, -975354841)), _ULong___init__impl__c78o9k(new Long(-511131352, -145451728)), _ULong___init__impl__c78o9k(new Long(-1930069831, -1701520066)), _ULong___init__impl__c78o9k(new Long(808638183, -1053158258)), _ULong___init__impl__c78o9k(new Long(-1136685919, -242705999)), _ULong___init__impl__c78o9k(new Long(363313125, -1762303985)), _ULong___init__impl__c78o9k(new Long(-619600418, -1129138158)), _ULong___init__impl__c78o9k(new Long(-1848242346, -337680873)), _ULong___init__impl__c78o9k(new Long(-1155151467, -1821663282)), _ULong___init__impl__c78o9k(new Long(1777286139, -1203337278)), _ULong___init__impl__c78o9k(new Long(74124026, -430429773)), _ULong___init__impl__c78o9k(new Long(-490543396, -1879631345)), _ULong___init__impl__c78o9k(new Long(-613179245, -1275797357)), _ULong___init__impl__c78o9k(new Long(-766474056, -521004872)), _ULong___init__impl__c78o9k(new Long(-2089659021, -1936240781)), _ULong___init__impl__c78o9k(new Long(1682893519, -1346559152)), _ULong___init__impl__c78o9k(new Long(2103616899, -609457116)), _ULong___init__impl__c78o9k(new Long(-832723086, -1991523434)), _ULong___init__impl__c78o9k(new Long(-2114645681, -1415662468)), _ULong___init__impl__c78o9k(new Long(-1569565278, -695836261)), _ULong___init__impl__c78o9k(new Long(1166505349, -2045510399)), _ULong___init__impl__c78o9k(new Long(-1763093785, -1483146175)), _ULong___init__impl__c78o9k(new Long(-56383584, -780190895)), _ULong___init__impl__c78o9k(new Long(1038502084, -2098232045)), _ULong___init__impl__c78o9k(new Long(224385781, -1549048232)), _ULong___init__impl__c78o9k(new Long(280482227, -862568466)), _ULong___init__impl__c78o9k(new Long(-1796880865, -4468759)), _ULong___init__impl__c78o9k(new Long(-49308717, -1613405711)), _ULong___init__impl__c78o9k(new Long(2085847752, -943015314)), _ULong___init__impl__c78o9k(new Long(459826043, -105027318)), _ULong___init__impl__c78o9k(new Long(1361133101, -1676254810)), _ULong___init__impl__c78o9k(new Long(-446067272, -1021576689)), _ULong___init__impl__c78o9k(new Long(-557584090, -203229037)), _ULong___init__impl__c78o9k(new Long(1798993591, -1737630884)), _ULong___init__impl__c78o9k(new Long(-2046225307, -1098296781)), _ULong___init__impl__c78o9k(new Long(1737185663, -299129152)), _ULong___init__impl__c78o9k(new Long(1085741039, -1797568456)), _ULong___init__impl__c78o9k(new Long(1357176299, -1173218746)), _ULong___init__impl__c78o9k(new Long(-451013274, -392781609)), _ULong___init__impl__c78o9k(new Long(-281883296, -1856101242)), _ULong___init__impl__c78o9k(new Long(-1426095944, -1246384728)), _ULong___init__impl__c78o9k(new Long(-708878106, -484239086)), _ULong___init__impl__c78o9k(new Long(-979919729, -1913262165)), _ULong___init__impl__c78o9k(new Long(-1224899661, -1317835882)), _ULong___init__impl__c78o9k(new Long(1690100896, -573553028)), _ULong___init__impl__c78o9k(new Long(-1091170588, -1969083379)), _ULong___init__impl__c78o9k(new Long(783520413, -1387612399)), _ULong___init__impl__c78o9k(new Long(2053142340, -660773675)), _ULong___init__impl__c78o9k(new Long(1820084875, -2023596283)), _ULong___init__impl__c78o9k(new Long(-946119379, -1455753530)), _ULong___init__impl__c78o9k(new Long(2038576249, -745950088)), _ULong___init__impl__c78o9k(new Long(1274110155, -2076831541)), _ULong___init__impl__c78o9k(new Long(518895870, -1522297602)), _ULong___init__impl__c78o9k(new Long(-1498863810, -829130179)), _ULong___init__impl__c78o9k(new Long(-2010531705, -2128819098)), _ULong___init__impl__c78o9k(new Long(708060840, -1587282048)), _ULong___init__impl__c78o9k(new Long(885076050, -910360736)), _ULong___init__impl__c78o9k(new Long(1106345063, -64209096)), _ULong___init__impl__c78o9k(new Long(691465664, -1650743421)), _ULong___init__impl__c78o9k(new Long(-209409743, -989687453)), _ULong___init__impl__c78o9k(new Long(-261762179, -163367492)), _ULong___init__impl__c78o9k(new Long(373269550, -1712717418)), _ULong___init__impl__c78o9k(new Long(-1680896711, -1067154949)), _ULong___init__impl__c78o9k(new Long(-2101120888, -260201862)), _ULong___init__impl__c78o9k(new Long(-1850071467, -1773238900)), _ULong___init__impl__c78o9k(new Long(-1238847510, -1142806801)), _ULong___init__impl__c78o9k(new Long(-1548559387, -354766677)), _ULong___init__impl__c78o9k(new Long(1179634031, -1832341909)), _ULong___init__impl__c78o9k(new Long(400800715, -1216685562)), _ULong___init__impl__c78o9k(new Long(-1646482755, -447115129)), _ULong___init__impl__c78o9k(new Long(-1029051722, -1890059692)), _ULong___init__impl__c78o9k(new Long(-212572828, -1288832791)), _ULong___init__impl__c78o9k(new Long(1881767613, -537299164)), _ULong___init__impl__c78o9k(new Long(-971378890, -1946424714)), _ULong___init__impl__c78o9k(new Long(2007001859, -1359289068)), _ULong___init__impl__c78o9k(new Long(-1786214972, -625369511)), _ULong___init__impl__c78o9k(new Long(-42642533, -2001468681)), _ULong___init__impl__c78o9k(new Long(-53303167, -1428094027)), _ULong___init__impl__c78o9k(new Long(2080854690, -711375709)), _ULong___init__impl__c78o9k(new Long(763663269, -2055222554)), _ULong___init__impl__c78o9k(new Long(-1192904562, -1495286369)), _ULong___init__impl__c78o9k(new Long(-1491130702, -795366137)), _ULong___init__impl__c78o9k(new Long(-931956689, -2107716572)), _ULong___init__impl__c78o9k(new Long(-91204037, -1560903891)), _ULong___init__impl__c78o9k(new Long(2033478602, -877388039)), _ULong___init__impl__c78o9k(new Long(-679377220, -22993225)), _ULong___init__impl__c78o9k(new Long(-424610762, -1624983502)), _ULong___init__impl__c78o9k(new Long(-1604505277, -957487553)), _ULong___init__impl__c78o9k(new Long(-2005631596, -123117617)), _ULong___init__impl__c78o9k(new Long(-1253519748, -1687561247)), _ULong___init__impl__c78o9k(new Long(580583963, -1035709734)), _ULong___init__impl__c78o9k(new Long(-1421753694, -220895344)), _ULong___init__impl__c78o9k(new Long(1795758501, -1748672326)), _ULong___init__impl__c78o9k(new Long(97214479, -1112098583)), _ULong___init__impl__c78o9k(new Long(1195259923, -316381405)), _ULong___init__impl__c78o9k(new Long(210166539, -1808351114)), _ULong___init__impl__c78o9k(new Long(-1884775474, -1186697069)), _ULong___init__impl__c78o9k(new Long(1938997954, -409629512)), _ULong___init__impl__c78o9k(new Long(1211873721, -1866631181)), _ULong___init__impl__c78o9k(new Long(441100328, -1259547152)), _ULong___init__impl__c78o9k(new Long(551375410, -500692116)), _ULong___init__impl__c78o9k(new Long(-1802874017, -1923545309)), _ULong___init__impl__c78o9k(new Long(2041374775, -1330689812)), _ULong___init__impl__c78o9k(new Long(-1743248828, -589620441)), _ULong___init__impl__c78o9k(new Long(-1089530517, -1979125512)), _ULong___init__impl__c78o9k(new Long(-288171323, -1400165066)), _ULong___init__impl__c78o9k(new Long(-1433955977, -676464508)), _ULong___init__impl__c78o9k(new Long(-359351574, -2033403054)), _ULong___init__impl__c78o9k(new Long(-1522931291, -1468011993)), _ULong___init__impl__c78o9k(new Long(-1903664114, -761273167)), _ULong___init__impl__c78o9k(new Long(-116048247, -2086408466)), _ULong___init__impl__c78o9k(new Long(-1218802133, -1534268758)), _ULong___init__impl__c78o9k(new Long(1697722806, -844094123)), _ULong___init__impl__c78o9k(new Long(1597947665, -2138171563)), _ULong___init__impl__c78o9k(new Long(-1223790890, -1598972630)), _ULong___init__impl__c78o9k(new Long(1691486859, -924973963)), _ULong___init__impl__c78o9k(new Long(-1106866898, -82475630)), _ULong___init__impl__c78o9k(new Long(-1228662723, -1662160005)), _ULong___init__impl__c78o9k(new Long(-1535828404, -1003958182)), _ULong___init__impl__c78o9k(new Long(1301439967, -181205903)), _ULong___init__impl__c78o9k(new Long(-797212757, -1723866426)), _ULong___init__impl__c78o9k(new Long(-2070257770, -1081091208)), _ULong___init__impl__c78o9k(new Long(-1514080388, -277622186)), _ULong___init__impl__c78o9k(new Long(664312493, -1784126602)), _ULong___init__impl__c78o9k(new Long(-1317093031, -1156416429)), _ULong___init__impl__c78o9k(new Long(-1646366289, -371778712)), _ULong___init__impl__c78o9k(new Long(1655375629, -1842974431)), _ULong___init__impl__c78o9k(new Long(-1152005935, -1229976215)), _ULong___init__impl__c78o9k(new Long(707476229, -463728444)), _ULong___init__impl__c78o9k(new Long(-1705311005, -1900443014)), _ULong___init__impl__c78o9k(new Long(1089586716, -1301811943)), _ULong___init__impl__c78o9k(new Long(-1859242077, -553523105)), _ULong___init__impl__c78o9k(new Long(-1162026298, -1956564677)), _ULong___init__impl__c78o9k(new Long(-1452532873, -1371964022)), _ULong___init__impl__c78o9k(new Long(1405559381, -641213203)), _ULong___init__impl__c78o9k(new Long(1415345525, -2011370988)), _ULong___init__impl__c78o9k(new Long(1769181906, -1440471911)), _ULong___init__impl__c78o9k(new Long(-1009748089, -726848065)), _ULong___init__impl__c78o9k(new Long(-631092556, -2064892777)), _ULong___init__impl__c78o9k(new Long(-788865695, -1507374147)), _ULong___init__impl__c78o9k(new Long(1161401530, -810475859)), _ULong___init__impl__c78o9k(new Long(1262746868, -2117160148)), _ULong___init__impl__c78o9k(new Long(1578433585, -1572708361)), _ULong___init__impl__c78o9k(new Long(899300158, -892143627)), _ULong___init__impl__c78o9k(new Long(-2097100275, -41437710)), _ULong___init__impl__c78o9k(new Long(-1847558584, -1636511305)), _ULong___init__impl__c78o9k(new Long(1985519066, -971897307)), _ULong___init__impl__c78o9k(new Long(-739326639, -141129810)), _ULong___init__impl__c78o9k(new Long(1148533586, -1698818867)), _ULong___init__impl__c78o9k(new Long(-1785558489, -1049781760)), _ULong___init__impl__c78o9k(new Long(-1158206287, -238485376)), _ULong___init__impl__c78o9k(new Long(1960475630, -1759666096)), _ULong___init__impl__c78o9k(new Long(-1844372758, -1125840796)), _ULong___init__impl__c78o9k(new Long(-1231724123, -333559171)), _ULong___init__impl__c78o9k(new Long(-1843569401, -1819087218)), _ULong___init__impl__c78o9k(new Long(916763721, -1200117198)), _ULong___init__impl__c78o9k(new Long(-1001528997, -426404674)), _ULong___init__impl__c78o9k(new Long(984657113, -1877115657)), _ULong___init__impl__c78o9k(new Long(157079567, -1272652747)), _ULong___init__impl__c78o9k(new Long(1270091283, -517074110)), _ULong___init__impl__c78o9k(new Long(1867548875, -1933784055)), _ULong___init__impl__c78o9k(new Long(-886789378, -1343488245)), _ULong___init__impl__c78o9k(new Long(-1108486722, -605618482)), _ULong___init__impl__c78o9k(new Long(917808535, -1989124287)), _ULong___init__impl__c78o9k(new Long(-2073964804, -1412663535)), _ULong___init__impl__c78o9k(new Long(-444972356, -692087595)), _ULong___init__impl__c78o9k(new Long(-1351849547, -2043167483)), _ULong___init__impl__c78o9k(new Long(457671715, -1480217529)), _ULong___init__impl__c78o9k(new Long(-501652181, -776530088)), _ULong___init__impl__c78o9k(new Long(-1924145349, -2095944041)), _ULong___init__impl__c78o9k(new Long(1889785610, -1546188227)), _ULong___init__impl__c78o9k(new Long(-858993460, -858993460)), _ULong___init__impl__c78o9k(new Long(0, -2147483648)), _ULong___init__impl__c78o9k(new Long(0, -1610612736)), _ULong___init__impl__c78o9k(new Long(0, -939524096)), _ULong___init__impl__c78o9k(new Long(0, -100663296)), _ULong___init__impl__c78o9k(new Long(0, -1673527296)), _ULong___init__impl__c78o9k(new Long(0, -1018167296)), _ULong___init__impl__c78o9k(new Long(0, -198967296)), _ULong___init__impl__c78o9k(new Long(0, -1734967296)), _ULong___init__impl__c78o9k(new Long(0, -1094967296)), _ULong___init__impl__c78o9k(new Long(0, -294967296)), _ULong___init__impl__c78o9k(new Long(0, -1794967296)), _ULong___init__impl__c78o9k(new Long(0, -1169967296)), _ULong___init__impl__c78o9k(new Long(0, -388717296)), _ULong___init__impl__c78o9k(new Long(0, -1853561046)), _ULong___init__impl__c78o9k(new Long(-2147483648, -1243209484)), _ULong___init__impl__c78o9k(new Long(-1610612736, -480270031)), _ULong___init__impl__c78o9k(new Long(67108864, -1910781505)), _ULong___init__impl__c78o9k(new Long(-989855744, -1314735058)), _ULong___init__impl__c78o9k(new Long(1983905792, -569676998)), _ULong___init__impl__c78o9k(new Long(-1981284352, -1966660860)), _ULong___init__impl__c78o9k(new Long(-1402863616, -1384584251)), _ULong___init__impl__c78o9k(new Long(393904128, -656988489)), _ULong___init__impl__c78o9k(new Long(1856802816, -2021230542)), _ULong___init__impl__c78o9k(new Long(173519872, -1452796353)), _ULong___init__impl__c78o9k(new Long(-856841984, -742253618)), _ULong___init__impl__c78o9k(new Long(1075086496, -2074521247)), _ULong___init__impl__c78o9k(new Long(-1877367352, -1519409735)), _ULong___init__impl__c78o9k(new Long(-199225542, -825520345)), _ULong___init__impl__c78o9k(new Long(-124515964, -2126562952)), _ULong___init__impl__c78o9k(new Long(918096869, -1584461865)), _ULong___init__impl__c78o9k(new Long(73879262, -906835507)), _ULong___init__impl__c78o9k(new Long(1166090902, -59802560)), _ULong___init__impl__c78o9k(new Long(728806813, -1647989336)), _ULong___init__impl__c78o9k(new Long(911008517, -986244846)), _ULong___init__impl__c78o9k(new Long(-1008723002, -159064234)), _ULong___init__impl__c78o9k(new Long(980160860, -1710027882)), _ULong___init__impl__c78o9k(new Long(-922282573, -1063793029)), _ULong___init__impl__c78o9k(new Long(-1152853216, -255999462)), _ULong___init__impl__c78o9k(new Long(-1257404172, -1770612400)), _ULong___init__impl__c78o9k(new Long(-498013391, -1139523676)), _ULong___init__impl__c78o9k(new Long(451225085, -350662770)), _ULong___init__impl__c78o9k(new Long(-791726146, -1829776968)), _ULong___init__impl__c78o9k(new Long(84084141, -1213479385)), _ULong___init__impl__c78o9k(new Long(-968636647, -443107408)), _ULong___init__impl__c78o9k(new Long(2078956655, -1887554866)), _ULong___init__impl__c78o9k(new Long(451212171, -1285701758)), _ULong___init__impl__c78o9k(new Long(-1583468434, -533385374)), _ULong___init__impl__c78o9k(new Long(-1526538683, -1943978595)), _ULong___init__impl__c78o9k(new Long(239310294, -1356231419)), _ULong___init__impl__c78o9k(new Long(1372879692, -621547450)), _ULong___init__impl__c78o9k(new Long(-215692017, -1999079893)), _ULong___init__impl__c78o9k(new Long(-269615021, -1425108042)), _ULong___init__impl__c78o9k(new Long(-1410760600, -707643228)), _ULong___init__impl__c78o9k(new Long(-344854463, -2052889754)), _ULong___init__impl__c78o9k(new Long(-1504809903, -1492370368)), _ULong___init__impl__c78o9k(new Long(-807270555, -791721136)), _ULong___init__impl__c78o9k(new Long(-2115156833, -2105438446)), _ULong___init__impl__c78o9k(new Long(577279431, -1558056233)), _ULong___init__impl__c78o9k(new Long(-352142535, -873828468)), _ULong___init__impl__c78o9k(new Long(633563656, -18543760)), _ULong___init__impl__c78o9k(new Long(395977285, -1622202586)), _ULong___init__impl__c78o9k(new Long(-1652512042, -954011409)), _ULong___init__impl__c78o9k(new Long(-2065640053, -118772437)), _ULong___init__impl__c78o9k(new Long(856458615, -1684845509)), _ULong___init__impl__c78o9k(new Long(-3168555, -1032315063)), _ULong___init__impl__c78o9k(new Long(2143522954, -216652004)), _ULong___init__impl__c78o9k(new Long(-807781802, -1746020239)), _ULong___init__impl__c78o9k(new Long(1137756396, -1108783474)), _ULong___init__impl__c78o9k(new Long(-725288153, -312237519)), _ULong___init__impl__c78o9k(new Long(620436728, -1805761185)), _ULong___init__impl__c78o9k(new Long(-298195914, -1183459658)), _ULong___init__impl__c78o9k(new Long(-1446486716, -405582748)), _ULong___init__impl__c78o9k(new Long(-367183286, -1864101954)), _ULong___init__impl__c78o9k(new Long(-1532720931, -1256385618)), _ULong___init__impl__c78o9k(new Long(1305324308, -496740198)), _ULong___init__impl__c78o9k(new Long(1889569516, -1921075360)), _ULong___init__impl__c78o9k(new Long(-1933005400, -1327602376)), _ULong___init__impl__c78o9k(new Long(-1342514926, -585761146)), _ULong___init__impl__c78o9k(new Long(771540907, -1976713452)), _ULong___init__impl__c78o9k(new Long(964426134, -1397149991)), _ULong___init__impl__c78o9k(new Long(-2015692805, -672695665)), _ULong___init__impl__c78o9k(new Long(-1259808003, -2031047527)), _ULong___init__impl__c78o9k(new Long(572723644, -1465067584)), _ULong___init__impl__c78o9k(new Long(715904555, -757592656)), _ULong___init__impl__c78o9k(new Long(447440347, -2084108146)), _ULong___init__impl__c78o9k(new Long(-1588183214, -1531393359)), _ULong___init__impl__c78o9k(new Long(162254630, -840499874)), _ULong___init__impl__c78o9k(new Long(-972332680, -2135925158)), _ULong___init__impl__c78o9k(new Long(2005809622, -1596164623)), _ULong___init__impl__c78o9k(new Long(-713963444, -921463955)), _ULong___init__impl__c78o9k(new Long(1255029343, -78088119)), _ULong___init__impl__c78o9k(new Long(-826219397, -1659417811)), _ULong___init__impl__c78o9k(new Long(1114709402, -1000530439)), _ULong___init__impl__c78o9k(new Long(-1827838720, -176921225)), _ULong___init__impl__c78o9k(new Long(-1142399200, -1721188502)), _ULong___init__impl__c78o9k(new Long(1793226472, -1077743803)), _ULong___init__impl__c78o9k(new Long(-979692382, -273437930)), _ULong___init__impl__c78o9k(new Long(998304997, -1781511442)), _ULong___init__impl__c78o9k(new Long(-899602401, -1153147479)), _ULong___init__impl__c78o9k(new Long(1022980646, -367692524)), _ULong___init__impl__c78o9k(new Long(-1508120744, -1840420564)), _ULong___init__impl__c78o9k(new Long(-811409106, -1226783881)), _ULong___init__impl__c78o9k(new Long(-1014261382, -459738027)), _ULong___init__impl__c78o9k(new Long(-1707655188, -1897949003)), _ULong___init__impl__c78o9k(new Long(12914663, -1298694429)), _ULong___init__impl__c78o9k(new Long(-1057598495, -549626213)), _ULong___init__impl__c78o9k(new Long(1486484588, -1954129119)), _ULong___init__impl__c78o9k(new Long(-1363119737, -1368919575)), _ULong___init__impl__c78o9k(new Long(443583977, -637407644)), _ULong___init__impl__c78o9k(new Long(-1870243662, -2008992514)), _ULong___init__impl__c78o9k(new Long(883420894, -1437498818)), _ULong___init__impl__c78o9k(new Long(-1043207530, -723131699)), _ULong___init__impl__c78o9k(new Long(-1725746530, -2062570048)), _ULong___init__impl__c78o9k(new Long(-1083441339, -1504470736)), _ULong___init__impl__c78o9k(new Long(-280559850, -806846596)), _ULong___init__impl__c78o9k(new Long(361521006, -2114891858)), _ULong___init__impl__c78o9k(new Long(-1695582391, -1569872999)), _ULong___init__impl__c78o9k(new Long(28005660, -888599424)), _ULong___init__impl__c78o9k(new Long(35007075, -37007456)), _ULong___init__impl__c78o9k(new Long(21879422, -1633742396)), _ULong___init__impl__c78o9k(new Long(27349277, -968436171)), _ULong___init__impl__c78o9k(new Long(1107928421, -136803390)), _ULong___init__impl__c78o9k(new Long(1766197087, -1696114855)), _ULong___init__impl__c78o9k(new Long(-1013479113, -1046401745)), _ULong___init__impl__c78o9k(new Long(-1266848892, -234260357)), _ULong___init__impl__c78o9k(new Long(1355703090, -1757025459)), _ULong___init__impl__c78o9k(new Long(-1526596609, -1122540000)), _ULong___init__impl__c78o9k(new Long(-834503937, -329433176)), _ULong___init__impl__c78o9k(new Long(-2132177697, -1816508471)), _ULong___init__impl__c78o9k(new Long(-517738473, -1196893765)), _ULong___init__impl__c78o9k(new Long(-647173091, -422375382)), _ULong___init__impl__c78o9k(new Long(-941354094, -1874597350)), _ULong___init__impl__c78o9k(new Long(2044532855, -1269504863)), _ULong___init__impl__c78o9k(new Long(-665559404, -513139255)), _ULong___init__impl__c78o9k(new Long(657767197, -1931324770)), _ULong___init__impl__c78o9k(new Long(-1325274652, -1340414139)), _ULong___init__impl__c78o9k(new Long(490890333, -601775849)), _ULong___init__impl__c78o9k(new Long(1917419194, -1986722642)), _ULong___init__impl__c78o9k(new Long(249290345, -1409661478)), _ULong___init__impl__c78o9k(new Long(-1835870717, -688335024)), _ULong___init__impl__c78o9k(new Long(1536935362, -2040822126)), _ULong___init__impl__c78o9k(new Long(-226314446, -1477285834)), _ULong___init__impl__c78o9k(new Long(-1356634881, -772865468)), _ULong___init__impl__c78o9k(new Long(-311025889, -2093653654)), _ULong___init__impl__c78o9k(new Long(-1462524185, -1543325243)), _ULong___init__impl__c78o9k(new Long(319328417, -855414729)), _ULong___init__impl__c78o9k(new Long(1810192996, -2145246942)), _ULong___init__impl__c78o9k(new Long(115257597, -1607816853)), _ULong___init__impl__c78o9k(new Long(-929669827, -936029243)), _ULong___init__impl__c78o9k(new Long(985396364, -96294729)), _ULong___init__impl__c78o9k(new Long(-2068481833, -1670796942)), _ULong___init__impl__c78o9k(new Long(635623181, -1014754353)), _ULong___init__impl__c78o9k(new Long(-279212847, -194701118)), _ULong___init__impl__c78o9k(new Long(-711378942, -1732300935)), _ULong___init__impl__c78o9k(new Long(1258259971, -1091634344)), _ULong___init__impl__c78o9k(new Long(1572824964, -290801106)), _ULong___init__impl__c78o9k(new Long(-90726222, -1792363428)), _ULong___init__impl__c78o9k(new Long(960334047, -1166712460)), _ULong___init__impl__c78o9k(new Long(1200417559, -384648751)), _ULong___init__impl__c78o9k(new Long(-860351762, -1851018206)), _ULong___init__impl__c78o9k(new Long(2145785770, -1240030933)), _ULong___init__impl__c78o9k(new Long(1608490388, -476296842)), _ULong___init__impl__c78o9k(new Long(-68435331, -1908298263)), _ULong___init__impl__c78o9k(new Long(2061939484, -1311631004)), _ULong___init__impl__c78o9k(new Long(-1717542941, -565796931)), _ULong___init__impl__c78o9k(new Long(-2147206162, -1964235818)), _ULong___init__impl__c78o9k(new Long(537217769, -1381552948)), _ULong___init__impl__c78o9k(new Long(671522212, -653199361)), _ULong___init__impl__c78o9k(new Long(2030314118, -2018862337)), _ULong___init__impl__c78o9k(new Long(1464150824, -1449836097)), _ULong___init__impl__c78o9k(new Long(756446706, -738553297)), _ULong___init__impl__c78o9k(new Long(2083391927, -2072208547)), _ULong___init__impl__c78o9k(new Long(-616985563, -1516518860)), _ULong___init__impl__c78o9k(new Long(302509870, -821906750)), _ULong___init__impl__c78o9k(new Long(1262810493, -2124304455)), _ULong___init__impl__c78o9k(new Long(-1642712356, -1581638745)), _ULong___init__impl__c78o9k(new Long(-2053390445, -903306607)), _ULong___init__impl__c78o9k(new Long(-419254408, -55391435)), _ULong___init__impl__c78o9k(new Long(-1335775829, -1645232383)), _ULong___init__impl__c78o9k(new Long(477763862, -982798654)), _ULong___init__impl__c78o9k(new Long(-1550278821, -154756494)), _ULong___init__impl__c78o9k(new Long(-1505795175, -1707335545)), _ULong___init__impl__c78o9k(new Long(-1882243969, -1060427607)), _ULong___init__impl__c78o9k(new Long(-205321313, -251792685)), _ULong___init__impl__c78o9k(new Long(2019157827, -1767983164)), _ULong___init__impl__c78o9k(new Long(-1771020012, -1136237131)), _ULong___init__impl__c78o9k(new Long(-66291367, -346554590)), _ULong___init__impl__c78o9k(new Long(-578303016, -1827209355)), _ULong___init__impl__c78o9k(new Long(1424604878, -1210269869)), _ULong___init__impl__c78o9k(new Long(707014273, -439095512)), _ULong___init__impl__c78o9k(new Long(441883920, -1885047431)), _ULong___init__impl__c78o9k(new Long(1626096725, -1282567465)), _ULong___init__impl__c78o9k(new Long(958879082, -529467507)), _ULong___init__impl__c78o9k(new Long(1136170338, -1941529928)), _ULong___init__impl__c78o9k(new Long(1420212923, -1353170586)), _ULong___init__impl__c78o9k(new Long(-372217494, -617721409)), _ULong___init__impl__c78o9k(new Long(-232635934, -1996688617)), _ULong___init__impl__c78o9k(new Long(-290794918, -1422118947)), _ULong___init__impl__c78o9k(new Long(1783990001, -703906859)), _ULong___init__impl__c78o9k(new Long(1651864662, -2050554523)), _ULong___init__impl__c78o9k(new Long(-1156394644, -1489451330)), _ULong___init__impl__c78o9k(new Long(1775732167, -788072338)), _ULong___init__impl__c78o9k(new Long(36090780, -2103157947)), _ULong___init__impl__c78o9k(new Long(1118855300, -1555205610)), _ULong___init__impl__c78o9k(new Long(-748914523, -870265189)), _ULong___init__impl__c78o9k(new Long(-936143154, -14089662)), _ULong___init__impl__c78o9k(new Long(-1121960383, -1619418775)), _ULong___init__impl__c78o9k(new Long(745033169, -950531644)), _ULong___init__impl__c78o9k(new Long(931291461, -114422731)), _ULong___init__impl__c78o9k(new Long(1118928075, -1682126943)), _ULong___init__impl__c78o9k(new Long(-1822565378, -1028916855)), _ULong___init__impl__c78o9k(new Long(-130723074, -212404245)), _ULong___init__impl__c78o9k(new Long(2065781726, -1743365389)), _ULong___init__impl__c78o9k(new Long(1508485334, -1105464912)), _ULong___init__impl__c78o9k(new Long(1885606668, -308089316)), _ULong___init__impl__c78o9k(new Long(-968979481, -1803168559)), _ULong___init__impl__c78o9k(new Long(936259297, -1180218874)), _ULong___init__impl__c78o9k(new Long(-977159527, -401531769)), _ULong___init__impl__c78o9k(new Long(-610724704, -1861570092)), _ULong___init__impl__c78o9k(new Long(310335944, -1253220790)), _ULong___init__impl__c78o9k(new Long(-1759563718, -492784164)), _ULong___init__impl__c78o9k(new Long(-562856412, -1918602839)), _ULong___init__impl__c78o9k(new Long(1443913133, -1324511724)), _ULong___init__impl__c78o9k(new Long(1804891416, -581897831)), _ULong___init__impl__c78o9k(new Long(-482555601, -1974298881)), _ULong___init__impl__c78o9k(new Long(-603194501, -1394131777)), _ULong___init__impl__c78o9k(new Long(-753993126, -668922897)), _ULong___init__impl__c78o9k(new Long(-471245704, -2028689547)), _ULong___init__impl__c78o9k(new Long(1558426518, -1462120109)), _ULong___init__impl__c78o9k(new Long(874291324, -753908312)), _ULong___init__impl__c78o9k(new Long(546432077, -2081805431)), _ULong___init__impl__c78o9k(new Long(1756781920, -1528514965)), _ULong___init__impl__c78o9k(new Long(1122235577, -836901882)), _ULong___init__impl__c78o9k(new Long(-372344589, -2133676413)), _ULong___init__impl__c78o9k(new Long(-465430736, -1593353692)), _ULong___init__impl__c78o9k(new Long(491953404, -917950290)), _ULong___init__impl__c78o9k(new Long(-1532541892, -73696039)), _ULong___init__impl__c78o9k(new Long(115903141, -1656672760)), _ULong___init__impl__c78o9k(new Long(144878926, -997099126)), _ULong___init__impl__c78o9k(new Long(-1966384990, -172632084)), _ULong___init__impl__c78o9k(new Long(-692119707, -1718507789)), _ULong___init__impl__c78o9k(new Long(-865149633, -1074392912)), _ULong___init__impl__c78o9k(new Long(-7695218, -269249316)), _ULong___init__impl__c78o9k(new Long(532061401, -1778893558)), _ULong___init__impl__c78o9k(new Long(-1482406897, -1149875124)), _ULong___init__impl__c78o9k(new Long(-779266797, -363602081)), _ULong___init__impl__c78o9k(new Long(-487041748, -1837864037)), _ULong___init__impl__c78o9k(new Long(-608802185, -1223588222)), _ULong___init__impl__c78o9k(new Long(-1834744555, -455743453)), _ULong___init__impl__c78o9k(new Long(1000768301, -1895452394)), _ULong___init__impl__c78o9k(new Long(-896523272, -1295573669)), _ULong___init__impl__c78o9k(new Long(-1120654090, -545725262)), _ULong___init__impl__c78o9k(new Long(-1237279718, -1951691025)), _ULong___init__impl__c78o9k(new Long(-1546599648, -1365871957)), _ULong___init__impl__c78o9k(new Long(-1933249560, -633598122)), _ULong___init__impl__c78o9k(new Long(402331761, -2006611562)), _ULong___init__impl__c78o9k(new Long(-1644568947, -1434522629)), _ULong___init__impl__c78o9k(new Long(-2055711183, -719411462)), _ULong___init__impl__c78o9k(new Long(-1821690402, -2060244900)), _ULong___init__impl__c78o9k(new Long(-1203371178, -1501564301)), _ULong___init__impl__c78o9k(new Long(-1504213972, -803213552)), _ULong___init__impl__c78o9k(new Long(1744220827, -2112621206)), _ULong___init__impl__c78o9k(new Long(32792386, -1567034683)), _ULong___init__impl__c78o9k(new Long(1114732307, -885051530)), _ULong___init__impl__c78o9k(new Long(-754068265, -32572589)), _ULong___init__impl__c78o9k(new Long(1676190982, -1630970604)), _ULong___init__impl__c78o9k(new Long(2095238728, -964971431)), _ULong___init__impl__c78o9k(new Long(-602177062, -132472465)), _ULong___init__impl__c78o9k(new Long(-376360664, -1693408027)), _ULong___init__impl__c78o9k(new Long(1677032818, -1043018209)), _ULong___init__impl__c78o9k(new Long(1022549199, -230030937)), _ULong___init__impl__c78o9k(new Long(-2045261311, -1754382072)), _ULong___init__impl__c78o9k(new Long(-1482834814, -1119235766)), _ULong___init__impl__c78o9k(new Long(1367681954, -325302883)), _ULong___init__impl__c78o9k(new Long(1391672133, -1813927038)), _ULong___init__impl__c78o9k(new Long(-407893481, -1193666974)), _ULong___init__impl__c78o9k(new Long(-1583608675, -418341893)), _ULong___init__impl__c78o9k(new Long(1157728226, -1872076419)), _ULong___init__impl__c78o9k(new Long(-1774065190, -1266353700)), _ULong___init__impl__c78o9k(new Long(-1143839663, -509200301)), _ULong___init__impl__c78o9k(new Long(1432583858, -1928862924)), _ULong___init__impl__c78o9k(new Long(1790729823, -1337336831)), _ULong___init__impl__c78o9k(new Long(-982813193, -597929215)), _ULong___init__impl__c78o9k(new Long(459483578, -1984318495)), _ULong___init__impl__c78o9k(new Long(1648096297, -1406656295)), _ULong___init__impl__c78o9k(new Long(-1161105101, -684578545)), _ULong___init__impl__c78o9k(new Long(-725690688, -2038474327)), _ULong___init__impl__c78o9k(new Long(1240370288, -1474351084)), _ULong___init__impl__c78o9k(new Long(1550462860, -769197031)), _ULong___init__impl__c78o9k(new Long(-641573449, -2091360881)), _ULong___init__impl__c78o9k(new Long(-801966811, -1540459277)), _ULong___init__impl__c78o9k(new Long(-1002458513, -851832272)), _ULong___init__impl__c78o9k(new Long(2057817989, -2143007906)), _ULong___init__impl__c78o9k(new Long(424788838, -1605018058)), _ULong___init__impl__c78o9k(new Long(-1616497600, -932530749)), _ULong___init__impl__c78o9k(new Long(-2020622000, -91921612)), _ULong___init__impl__c78o9k(new Long(-726017838, -1668063744)), _ULong___init__impl__c78o9k(new Long(166219527, -1011337855)), _ULong___init__impl__c78o9k(new Long(1281516232, -190430495)), _ULong___init__impl__c78o9k(new Long(-809665091, -1729631796)), _ULong___init__impl__c78o9k(new Long(61660460, -1088297920)), _ULong___init__impl__c78o9k(new Long(77075576, -286630576)), _ULong___init__impl__c78o9k(new Long(48172235, -1789756846)), _ULong___init__impl__c78o9k(new Long(-2087268355, -1163454234)), _ULong___init__impl__c78o9k(new Long(612140029, -380575968)), _ULong___init__impl__c78o9k(new Long(382587518, -1848472716)), _ULong___init__impl__c78o9k(new Long(478234397, -1236849071)), _ULong___init__impl__c78o9k(new Long(1671534821, -472319515)), _ULong___init__impl__c78o9k(new Long(1581580175, -1905812433))]));
    }
  }
  function Close() {
    Close_instance = this;
    PathNode.call(this);
  }
  var Close_instance;
  function Close_getInstance() {
    if (Close_instance == null)
      new Close();
    return Close_instance;
  }
  function RelativeMoveTo(dx, dy) {
    PathNode.call(this);
    this.g4y_1 = dx;
    this.h4y_1 = dy;
  }
  protoOf(RelativeMoveTo).toString = function () {
    return 'RelativeMoveTo(dx=' + this.g4y_1 + ', dy=' + this.h4y_1 + ')';
  };
  protoOf(RelativeMoveTo).hashCode = function () {
    var result = getNumberHashCode(this.g4y_1);
    result = imul(result, 31) + getNumberHashCode(this.h4y_1) | 0;
    return result;
  };
  protoOf(RelativeMoveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeMoveTo))
      return false;
    if (!equals(this.g4y_1, other.g4y_1))
      return false;
    if (!equals(this.h4y_1, other.h4y_1))
      return false;
    return true;
  };
  function MoveTo(x, y) {
    PathNode.call(this);
    this.k4y_1 = x;
    this.l4y_1 = y;
  }
  protoOf(MoveTo).toString = function () {
    return 'MoveTo(x=' + this.k4y_1 + ', y=' + this.l4y_1 + ')';
  };
  protoOf(MoveTo).hashCode = function () {
    var result = getNumberHashCode(this.k4y_1);
    result = imul(result, 31) + getNumberHashCode(this.l4y_1) | 0;
    return result;
  };
  protoOf(MoveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MoveTo))
      return false;
    if (!equals(this.k4y_1, other.k4y_1))
      return false;
    if (!equals(this.l4y_1, other.l4y_1))
      return false;
    return true;
  };
  function RelativeLineTo(dx, dy) {
    PathNode.call(this);
    this.o4y_1 = dx;
    this.p4y_1 = dy;
  }
  protoOf(RelativeLineTo).toString = function () {
    return 'RelativeLineTo(dx=' + this.o4y_1 + ', dy=' + this.p4y_1 + ')';
  };
  protoOf(RelativeLineTo).hashCode = function () {
    var result = getNumberHashCode(this.o4y_1);
    result = imul(result, 31) + getNumberHashCode(this.p4y_1) | 0;
    return result;
  };
  protoOf(RelativeLineTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeLineTo))
      return false;
    if (!equals(this.o4y_1, other.o4y_1))
      return false;
    if (!equals(this.p4y_1, other.p4y_1))
      return false;
    return true;
  };
  function LineTo(x, y) {
    PathNode.call(this);
    this.s4y_1 = x;
    this.t4y_1 = y;
  }
  protoOf(LineTo).toString = function () {
    return 'LineTo(x=' + this.s4y_1 + ', y=' + this.t4y_1 + ')';
  };
  protoOf(LineTo).hashCode = function () {
    var result = getNumberHashCode(this.s4y_1);
    result = imul(result, 31) + getNumberHashCode(this.t4y_1) | 0;
    return result;
  };
  protoOf(LineTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LineTo))
      return false;
    if (!equals(this.s4y_1, other.s4y_1))
      return false;
    if (!equals(this.t4y_1, other.t4y_1))
      return false;
    return true;
  };
  function RelativeHorizontalTo(dx) {
    PathNode.call(this);
    this.w4y_1 = dx;
  }
  protoOf(RelativeHorizontalTo).toString = function () {
    return 'RelativeHorizontalTo(dx=' + this.w4y_1 + ')';
  };
  protoOf(RelativeHorizontalTo).hashCode = function () {
    return getNumberHashCode(this.w4y_1);
  };
  protoOf(RelativeHorizontalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeHorizontalTo))
      return false;
    if (!equals(this.w4y_1, other.w4y_1))
      return false;
    return true;
  };
  function HorizontalTo(x) {
    PathNode.call(this);
    this.z4y_1 = x;
  }
  protoOf(HorizontalTo).toString = function () {
    return 'HorizontalTo(x=' + this.z4y_1 + ')';
  };
  protoOf(HorizontalTo).hashCode = function () {
    return getNumberHashCode(this.z4y_1);
  };
  protoOf(HorizontalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HorizontalTo))
      return false;
    if (!equals(this.z4y_1, other.z4y_1))
      return false;
    return true;
  };
  function RelativeVerticalTo(dy) {
    PathNode.call(this);
    this.c4z_1 = dy;
  }
  protoOf(RelativeVerticalTo).toString = function () {
    return 'RelativeVerticalTo(dy=' + this.c4z_1 + ')';
  };
  protoOf(RelativeVerticalTo).hashCode = function () {
    return getNumberHashCode(this.c4z_1);
  };
  protoOf(RelativeVerticalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeVerticalTo))
      return false;
    if (!equals(this.c4z_1, other.c4z_1))
      return false;
    return true;
  };
  function VerticalTo(y) {
    PathNode.call(this);
    this.f4z_1 = y;
  }
  protoOf(VerticalTo).toString = function () {
    return 'VerticalTo(y=' + this.f4z_1 + ')';
  };
  protoOf(VerticalTo).hashCode = function () {
    return getNumberHashCode(this.f4z_1);
  };
  protoOf(VerticalTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerticalTo))
      return false;
    if (!equals(this.f4z_1, other.f4z_1))
      return false;
    return true;
  };
  function RelativeCurveTo(dx1, dy1, dx2, dy2, dx3, dy3) {
    PathNode.call(this, true);
    this.i4z_1 = dx1;
    this.j4z_1 = dy1;
    this.k4z_1 = dx2;
    this.l4z_1 = dy2;
    this.m4z_1 = dx3;
    this.n4z_1 = dy3;
  }
  protoOf(RelativeCurveTo).toString = function () {
    return 'RelativeCurveTo(dx1=' + this.i4z_1 + ', dy1=' + this.j4z_1 + ', dx2=' + this.k4z_1 + ', dy2=' + this.l4z_1 + ', dx3=' + this.m4z_1 + ', dy3=' + this.n4z_1 + ')';
  };
  protoOf(RelativeCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.i4z_1);
    result = imul(result, 31) + getNumberHashCode(this.j4z_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.k4z_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.l4z_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.m4z_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.n4z_1) | 0;
    return result;
  };
  protoOf(RelativeCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeCurveTo))
      return false;
    if (!equals(this.i4z_1, other.i4z_1))
      return false;
    if (!equals(this.j4z_1, other.j4z_1))
      return false;
    if (!equals(this.k4z_1, other.k4z_1))
      return false;
    if (!equals(this.l4z_1, other.l4z_1))
      return false;
    if (!equals(this.m4z_1, other.m4z_1))
      return false;
    if (!equals(this.n4z_1, other.n4z_1))
      return false;
    return true;
  };
  function CurveTo(x1, y1, x2, y2, x3, y3) {
    PathNode.call(this, true);
    this.q4z_1 = x1;
    this.r4z_1 = y1;
    this.s4z_1 = x2;
    this.t4z_1 = y2;
    this.u4z_1 = x3;
    this.v4z_1 = y3;
  }
  protoOf(CurveTo).toString = function () {
    return 'CurveTo(x1=' + this.q4z_1 + ', y1=' + this.r4z_1 + ', x2=' + this.s4z_1 + ', y2=' + this.t4z_1 + ', x3=' + this.u4z_1 + ', y3=' + this.v4z_1 + ')';
  };
  protoOf(CurveTo).hashCode = function () {
    var result = getNumberHashCode(this.q4z_1);
    result = imul(result, 31) + getNumberHashCode(this.r4z_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s4z_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.t4z_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.u4z_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v4z_1) | 0;
    return result;
  };
  protoOf(CurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CurveTo))
      return false;
    if (!equals(this.q4z_1, other.q4z_1))
      return false;
    if (!equals(this.r4z_1, other.r4z_1))
      return false;
    if (!equals(this.s4z_1, other.s4z_1))
      return false;
    if (!equals(this.t4z_1, other.t4z_1))
      return false;
    if (!equals(this.u4z_1, other.u4z_1))
      return false;
    if (!equals(this.v4z_1, other.v4z_1))
      return false;
    return true;
  };
  function RelativeReflectiveCurveTo(dx1, dy1, dx2, dy2) {
    PathNode.call(this, true);
    this.y4z_1 = dx1;
    this.z4z_1 = dy1;
    this.a50_1 = dx2;
    this.b50_1 = dy2;
  }
  protoOf(RelativeReflectiveCurveTo).toString = function () {
    return 'RelativeReflectiveCurveTo(dx1=' + this.y4z_1 + ', dy1=' + this.z4z_1 + ', dx2=' + this.a50_1 + ', dy2=' + this.b50_1 + ')';
  };
  protoOf(RelativeReflectiveCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.y4z_1);
    result = imul(result, 31) + getNumberHashCode(this.z4z_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.a50_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.b50_1) | 0;
    return result;
  };
  protoOf(RelativeReflectiveCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeReflectiveCurveTo))
      return false;
    if (!equals(this.y4z_1, other.y4z_1))
      return false;
    if (!equals(this.z4z_1, other.z4z_1))
      return false;
    if (!equals(this.a50_1, other.a50_1))
      return false;
    if (!equals(this.b50_1, other.b50_1))
      return false;
    return true;
  };
  function ReflectiveCurveTo(x1, y1, x2, y2) {
    PathNode.call(this, true);
    this.e50_1 = x1;
    this.f50_1 = y1;
    this.g50_1 = x2;
    this.h50_1 = y2;
  }
  protoOf(ReflectiveCurveTo).toString = function () {
    return 'ReflectiveCurveTo(x1=' + this.e50_1 + ', y1=' + this.f50_1 + ', x2=' + this.g50_1 + ', y2=' + this.h50_1 + ')';
  };
  protoOf(ReflectiveCurveTo).hashCode = function () {
    var result = getNumberHashCode(this.e50_1);
    result = imul(result, 31) + getNumberHashCode(this.f50_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.g50_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.h50_1) | 0;
    return result;
  };
  protoOf(ReflectiveCurveTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReflectiveCurveTo))
      return false;
    if (!equals(this.e50_1, other.e50_1))
      return false;
    if (!equals(this.f50_1, other.f50_1))
      return false;
    if (!equals(this.g50_1, other.g50_1))
      return false;
    if (!equals(this.h50_1, other.h50_1))
      return false;
    return true;
  };
  function RelativeQuadTo(dx1, dy1, dx2, dy2) {
    PathNode.call(this, VOID, true);
    this.k50_1 = dx1;
    this.l50_1 = dy1;
    this.m50_1 = dx2;
    this.n50_1 = dy2;
  }
  protoOf(RelativeQuadTo).toString = function () {
    return 'RelativeQuadTo(dx1=' + this.k50_1 + ', dy1=' + this.l50_1 + ', dx2=' + this.m50_1 + ', dy2=' + this.n50_1 + ')';
  };
  protoOf(RelativeQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.k50_1);
    result = imul(result, 31) + getNumberHashCode(this.l50_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.m50_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.n50_1) | 0;
    return result;
  };
  protoOf(RelativeQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeQuadTo))
      return false;
    if (!equals(this.k50_1, other.k50_1))
      return false;
    if (!equals(this.l50_1, other.l50_1))
      return false;
    if (!equals(this.m50_1, other.m50_1))
      return false;
    if (!equals(this.n50_1, other.n50_1))
      return false;
    return true;
  };
  function QuadTo(x1, y1, x2, y2) {
    PathNode.call(this, VOID, true);
    this.q50_1 = x1;
    this.r50_1 = y1;
    this.s50_1 = x2;
    this.t50_1 = y2;
  }
  protoOf(QuadTo).toString = function () {
    return 'QuadTo(x1=' + this.q50_1 + ', y1=' + this.r50_1 + ', x2=' + this.s50_1 + ', y2=' + this.t50_1 + ')';
  };
  protoOf(QuadTo).hashCode = function () {
    var result = getNumberHashCode(this.q50_1);
    result = imul(result, 31) + getNumberHashCode(this.r50_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s50_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.t50_1) | 0;
    return result;
  };
  protoOf(QuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof QuadTo))
      return false;
    if (!equals(this.q50_1, other.q50_1))
      return false;
    if (!equals(this.r50_1, other.r50_1))
      return false;
    if (!equals(this.s50_1, other.s50_1))
      return false;
    if (!equals(this.t50_1, other.t50_1))
      return false;
    return true;
  };
  function RelativeReflectiveQuadTo(dx, dy) {
    PathNode.call(this, VOID, true);
    this.w50_1 = dx;
    this.x50_1 = dy;
  }
  protoOf(RelativeReflectiveQuadTo).toString = function () {
    return 'RelativeReflectiveQuadTo(dx=' + this.w50_1 + ', dy=' + this.x50_1 + ')';
  };
  protoOf(RelativeReflectiveQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.w50_1);
    result = imul(result, 31) + getNumberHashCode(this.x50_1) | 0;
    return result;
  };
  protoOf(RelativeReflectiveQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeReflectiveQuadTo))
      return false;
    if (!equals(this.w50_1, other.w50_1))
      return false;
    if (!equals(this.x50_1, other.x50_1))
      return false;
    return true;
  };
  function ReflectiveQuadTo(x, y) {
    PathNode.call(this, VOID, true);
    this.a51_1 = x;
    this.b51_1 = y;
  }
  protoOf(ReflectiveQuadTo).toString = function () {
    return 'ReflectiveQuadTo(x=' + this.a51_1 + ', y=' + this.b51_1 + ')';
  };
  protoOf(ReflectiveQuadTo).hashCode = function () {
    var result = getNumberHashCode(this.a51_1);
    result = imul(result, 31) + getNumberHashCode(this.b51_1) | 0;
    return result;
  };
  protoOf(ReflectiveQuadTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReflectiveQuadTo))
      return false;
    if (!equals(this.a51_1, other.a51_1))
      return false;
    if (!equals(this.b51_1, other.b51_1))
      return false;
    return true;
  };
  function RelativeArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartDx, arcStartDy) {
    PathNode.call(this);
    this.e51_1 = horizontalEllipseRadius;
    this.f51_1 = verticalEllipseRadius;
    this.g51_1 = theta;
    this.h51_1 = isMoreThanHalf;
    this.i51_1 = isPositiveArc;
    this.j51_1 = arcStartDx;
    this.k51_1 = arcStartDy;
  }
  protoOf(RelativeArcTo).toString = function () {
    return 'RelativeArcTo(horizontalEllipseRadius=' + this.e51_1 + ', verticalEllipseRadius=' + this.f51_1 + ', theta=' + this.g51_1 + ', isMoreThanHalf=' + this.h51_1 + ', isPositiveArc=' + this.i51_1 + ', arcStartDx=' + this.j51_1 + ', arcStartDy=' + this.k51_1 + ')';
  };
  protoOf(RelativeArcTo).hashCode = function () {
    var result = getNumberHashCode(this.e51_1);
    result = imul(result, 31) + getNumberHashCode(this.f51_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.g51_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.h51_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.i51_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.j51_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.k51_1) | 0;
    return result;
  };
  protoOf(RelativeArcTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RelativeArcTo))
      return false;
    if (!equals(this.e51_1, other.e51_1))
      return false;
    if (!equals(this.f51_1, other.f51_1))
      return false;
    if (!equals(this.g51_1, other.g51_1))
      return false;
    if (!(this.h51_1 === other.h51_1))
      return false;
    if (!(this.i51_1 === other.i51_1))
      return false;
    if (!equals(this.j51_1, other.j51_1))
      return false;
    if (!equals(this.k51_1, other.k51_1))
      return false;
    return true;
  };
  function ArcTo(horizontalEllipseRadius, verticalEllipseRadius, theta, isMoreThanHalf, isPositiveArc, arcStartX, arcStartY) {
    PathNode.call(this);
    this.n51_1 = horizontalEllipseRadius;
    this.o51_1 = verticalEllipseRadius;
    this.p51_1 = theta;
    this.q51_1 = isMoreThanHalf;
    this.r51_1 = isPositiveArc;
    this.s51_1 = arcStartX;
    this.t51_1 = arcStartY;
  }
  protoOf(ArcTo).toString = function () {
    return 'ArcTo(horizontalEllipseRadius=' + this.n51_1 + ', verticalEllipseRadius=' + this.o51_1 + ', theta=' + this.p51_1 + ', isMoreThanHalf=' + this.q51_1 + ', isPositiveArc=' + this.r51_1 + ', arcStartX=' + this.s51_1 + ', arcStartY=' + this.t51_1 + ')';
  };
  protoOf(ArcTo).hashCode = function () {
    var result = getNumberHashCode(this.n51_1);
    result = imul(result, 31) + getNumberHashCode(this.o51_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p51_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.q51_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.r51_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s51_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.t51_1) | 0;
    return result;
  };
  protoOf(ArcTo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ArcTo))
      return false;
    if (!equals(this.n51_1, other.n51_1))
      return false;
    if (!equals(this.o51_1, other.o51_1))
      return false;
    if (!equals(this.p51_1, other.p51_1))
      return false;
    if (!(this.q51_1 === other.q51_1))
      return false;
    if (!(this.r51_1 === other.r51_1))
      return false;
    if (!equals(this.s51_1, other.s51_1))
      return false;
    if (!equals(this.t51_1, other.t51_1))
      return false;
    return true;
  };
  function PathNode(isCurve, isQuad) {
    isCurve = isCurve === VOID ? false : isCurve;
    isQuad = isQuad === VOID ? false : isQuad;
    this.u51_1 = isCurve;
    this.v51_1 = isQuad;
  }
  function addPathNodes(_this__u8e3s4, nodes, args, count) {
    if (_this__u8e3s4 === _Char___init__impl__6a9atx(122) || _this__u8e3s4 === _Char___init__impl__6a9atx(90))
      nodes.h(Close_getInstance());
    else if (_this__u8e3s4 === _Char___init__impl__6a9atx(109)) {
      pathRelativeMoveNodeFromArgs(nodes, args, count);
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(77)) {
      pathMoveNodeFromArgs(nodes, args, count);
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(108)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end = count - 2 | 0;
      var index = 0;
      while (index <= end) {
        var start = index;
        var tmp$ret$1 = new RelativeLineTo(args[start], args[start + 1 | 0]);
        nodes.h(tmp$ret$1);
        index = index + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(76)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_0 = count - 2 | 0;
      var index_0 = 0;
      while (index_0 <= end_0) {
        var start_0 = index_0;
        var tmp$ret$3 = new LineTo(args[start_0], args[start_0 + 1 | 0]);
        nodes.h(tmp$ret$3);
        index_0 = index_0 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(104)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_1 = count - 1 | 0;
      var index_1 = 0;
      while (index_1 <= end_1) {
        var start_1 = index_1;
        var tmp$ret$5 = new RelativeHorizontalTo(args[start_1]);
        nodes.h(tmp$ret$5);
        index_1 = index_1 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(72)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_2 = count - 1 | 0;
      var index_2 = 0;
      while (index_2 <= end_2) {
        var start_2 = index_2;
        var tmp$ret$7 = new HorizontalTo(args[start_2]);
        nodes.h(tmp$ret$7);
        index_2 = index_2 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(118)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_3 = count - 1 | 0;
      var index_3 = 0;
      while (index_3 <= end_3) {
        var start_3 = index_3;
        var tmp$ret$9 = new RelativeVerticalTo(args[start_3]);
        nodes.h(tmp$ret$9);
        index_3 = index_3 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(86)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_4 = count - 1 | 0;
      var index_4 = 0;
      while (index_4 <= end_4) {
        var start_4 = index_4;
        var tmp$ret$11 = new VerticalTo(args[start_4]);
        nodes.h(tmp$ret$11);
        index_4 = index_4 + 1 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(99)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_5 = count - 6 | 0;
      var index_5 = 0;
      while (index_5 <= end_5) {
        var start_5 = index_5;
        var tmp$ret$13 = new RelativeCurveTo(args[start_5], args[start_5 + 1 | 0], args[start_5 + 2 | 0], args[start_5 + 3 | 0], args[start_5 + 4 | 0], args[start_5 + 5 | 0]);
        nodes.h(tmp$ret$13);
        index_5 = index_5 + 6 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(67)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_6 = count - 6 | 0;
      var index_6 = 0;
      while (index_6 <= end_6) {
        var start_6 = index_6;
        var tmp$ret$15 = new CurveTo(args[start_6], args[start_6 + 1 | 0], args[start_6 + 2 | 0], args[start_6 + 3 | 0], args[start_6 + 4 | 0], args[start_6 + 5 | 0]);
        nodes.h(tmp$ret$15);
        index_6 = index_6 + 6 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(115)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_7 = count - 4 | 0;
      var index_7 = 0;
      while (index_7 <= end_7) {
        var start_7 = index_7;
        var tmp$ret$17 = new RelativeReflectiveCurveTo(args[start_7], args[start_7 + 1 | 0], args[start_7 + 2 | 0], args[start_7 + 3 | 0]);
        nodes.h(tmp$ret$17);
        index_7 = index_7 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(83)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_8 = count - 4 | 0;
      var index_8 = 0;
      while (index_8 <= end_8) {
        var start_8 = index_8;
        var tmp$ret$19 = new ReflectiveCurveTo(args[start_8], args[start_8 + 1 | 0], args[start_8 + 2 | 0], args[start_8 + 3 | 0]);
        nodes.h(tmp$ret$19);
        index_8 = index_8 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(113)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_9 = count - 4 | 0;
      var index_9 = 0;
      while (index_9 <= end_9) {
        var start_9 = index_9;
        var tmp$ret$21 = new RelativeQuadTo(args[start_9], args[start_9 + 1 | 0], args[start_9 + 2 | 0], args[start_9 + 3 | 0]);
        nodes.h(tmp$ret$21);
        index_9 = index_9 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(81)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_10 = count - 4 | 0;
      var index_10 = 0;
      while (index_10 <= end_10) {
        var start_10 = index_10;
        var tmp$ret$23 = new QuadTo(args[start_10], args[start_10 + 1 | 0], args[start_10 + 2 | 0], args[start_10 + 3 | 0]);
        nodes.h(tmp$ret$23);
        index_10 = index_10 + 4 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(116)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_11 = count - 2 | 0;
      var index_11 = 0;
      while (index_11 <= end_11) {
        var start_11 = index_11;
        var tmp$ret$25 = new RelativeReflectiveQuadTo(args[start_11], args[start_11 + 1 | 0]);
        nodes.h(tmp$ret$25);
        index_11 = index_11 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(84)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_12 = count - 2 | 0;
      var index_12 = 0;
      while (index_12 <= end_12) {
        var start_12 = index_12;
        var tmp$ret$27 = new ReflectiveQuadTo(args[start_12], args[start_12 + 1 | 0]);
        nodes.h(tmp$ret$27);
        index_12 = index_12 + 2 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(97)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_13 = count - 7 | 0;
      var index_13 = 0;
      while (index_13 <= end_13) {
        var start_13 = index_13;
        var tmp$ret$29 = new RelativeArcTo(args[start_13], args[start_13 + 1 | 0], args[start_13 + 2 | 0], !(compareTo(args[start_13 + 3 | 0], 0.0) === 0), !(compareTo(args[start_13 + 4 | 0], 0.0) === 0), args[start_13 + 5 | 0], args[start_13 + 6 | 0]);
        nodes.h(tmp$ret$29);
        index_13 = index_13 + 7 | 0;
      }
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(65)) {
      // Inline function 'androidx.compose.ui.graphics.vector.pathNodesFromArgs' call
      var end_14 = count - 7 | 0;
      var index_14 = 0;
      while (index_14 <= end_14) {
        var start_14 = index_14;
        var tmp$ret$31 = new ArcTo(args[start_14], args[start_14 + 1 | 0], args[start_14 + 2 | 0], !(compareTo(args[start_14 + 3 | 0], 0.0) === 0), !(compareTo(args[start_14 + 4 | 0], 0.0) === 0), args[start_14 + 5 | 0], args[start_14 + 6 | 0]);
        nodes.h(tmp$ret$31);
        index_14 = index_14 + 7 | 0;
      }
    } else
      throw IllegalArgumentException_init_$Create$('Unknown command for: ' + toString_1(_this__u8e3s4));
  }
  function pathRelativeMoveNodeFromArgs(nodes, args, count) {
    var end = count - 2 | 0;
    if (end >= 0) {
      nodes.h(new RelativeMoveTo(args[0], args[1]));
      var index = 2;
      while (index <= end) {
        nodes.h(new RelativeLineTo(args[index], args[index + 1 | 0]));
        index = index + 2 | 0;
      }
    }
  }
  function pathMoveNodeFromArgs(nodes, args, count) {
    var end = count - 2 | 0;
    if (end >= 0) {
      nodes.h(new MoveTo(args[0], args[1]));
      var index = 2;
      while (index <= end) {
        nodes.h(new LineTo(args[index], args[index + 1 | 0]));
        index = index + 2 | 0;
      }
    }
  }
  var EmptyArray;
  function PathParser() {
    this.w51_1 = null;
    this.x51_1 = new Float32Array(64);
  }
  protoOf(PathParser).y51 = function (pathData) {
    var dstNodes = this.w51_1;
    if (dstNodes == null) {
      dstNodes = ArrayList_init_$Create$_0();
      this.w51_1 = dstNodes;
    } else {
      dstNodes.s1();
    }
    this.z51(pathData, dstNodes);
    return this;
  };
  protoOf(PathParser).z51 = function (pathData, nodes) {
    var start = 0;
    var end = pathData.length;
    var dataCount = 0;
    while (start < end && Char__compareTo_impl_ypi4mb(charCodeAt(pathData, start), _Char___init__impl__6a9atx(32)) <= 0) {
      start = start + 1 | 0;
    }
    while (end > start && Char__compareTo_impl_ypi4mb(charCodeAt(pathData, end - 1 | 0), _Char___init__impl__6a9atx(32)) <= 0) {
      end = end - 1 | 0;
    }
    var index = start;
    while (index < end) {
      var c;
      var command = _Char___init__impl__6a9atx(0);
      $l$loop: do {
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        c = charCodeAt(pathData, _unary__edvuaz);
        // Inline function 'kotlin.code' call
        var lowerChar = Char__toInt_impl_vasixd(c) | 32;
        var tmp;
        // Inline function 'kotlin.code' call
        var this_0 = _Char___init__impl__6a9atx(97);
        var tmp_0 = lowerChar - Char__toInt_impl_vasixd(this_0) | 0;
        // Inline function 'kotlin.code' call
        var this_1 = _Char___init__impl__6a9atx(122);
        var tmp$ret$2 = Char__toInt_impl_vasixd(this_1);
        if (imul(tmp_0, lowerChar - tmp$ret$2 | 0) <= 0) {
          // Inline function 'kotlin.code' call
          var this_2 = _Char___init__impl__6a9atx(101);
          tmp = !(lowerChar === Char__toInt_impl_vasixd(this_2));
        } else {
          tmp = false;
        }
        if (tmp) {
          command = c;
          break $l$loop;
        }
      }
       while (index < end);
      if (!(command === _Char___init__impl__6a9atx(0))) {
        // Inline function 'kotlin.code' call
        var this_3 = command;
        var tmp_1 = Char__toInt_impl_vasixd(this_3) | 32;
        // Inline function 'kotlin.code' call
        var this_4 = _Char___init__impl__6a9atx(122);
        if (!(tmp_1 === Char__toInt_impl_vasixd(this_4))) {
          dataCount = 0;
          while (index < end && Char__compareTo_impl_ypi4mb(charCodeAt(pathData, index), _Char___init__impl__6a9atx(32)) <= 0) {
            index = index + 1 | 0;
          }
          // Inline function 'kotlin.code' call
          var this_5 = command;
          var tmp_2 = Char__toInt_impl_vasixd(this_5) | 32;
          // Inline function 'kotlin.code' call
          var this_6 = _Char___init__impl__6a9atx(97);
          var isThisAnArcCommand = tmp_2 === Char__toInt_impl_vasixd(this_6);
          var count = dataCount;
          do {
            var tmp_3;
            var tmp_4;
            if (isThisAnArcCommand) {
              var containsArg = dataCount - count | 0;
              tmp_4 = 3 <= containsArg ? containsArg <= 4 : false;
            } else {
              tmp_4 = false;
            }
            if (tmp_4) {
              var tmp_5 = index;
              var tmp0 = index + 1 | 0;
              // Inline function 'kotlin.math.min' call
              var b = end;
              var tmp$ret$8 = Math.min(tmp0, b);
              tmp_3 = nextFloat(pathData, tmp_5, tmp$ret$8);
            } else {
              tmp_3 = nextFloat(pathData, index, end);
            }
            var result = tmp_3;
            // Inline function 'androidx.compose.ui.graphics.vector.index' call
            index = convertToInt(shiftRightUnsigned(result, 32));
            // Inline function 'androidx.compose.ui.graphics.vector.floatValue' call
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            // Inline function 'kotlin.fromBits' call
            var bits = convertToInt(bitwiseAnd(result, new Long(-1, 0)));
            var value = floatFromBits(bits);
            if (!isNaN_0(value)) {
              var tmp_6 = this.x51_1;
              var _unary__edvuaz_0 = dataCount;
              dataCount = _unary__edvuaz_0 + 1 | 0;
              tmp_6[_unary__edvuaz_0] = value;
              // Inline function 'androidx.compose.ui.graphics.vector.PathParser.resizeNodeData' call
              var dataCount_0 = dataCount;
              if (dataCount_0 >= this.x51_1.length) {
                var src = this.x51_1;
                this.x51_1 = new Float32Array(imul(dataCount_0, 2));
                var tmp2 = this.x51_1;
                // Inline function 'kotlin.collections.copyInto' call
                var endIndex = src.length;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                var tmp_7 = src;
                // Inline function 'kotlin.js.unsafeCast' call
                // Inline function 'kotlin.js.asDynamic' call
                arrayCopy(tmp_7, tmp2, 0, 0, endIndex);
              }
            }
            while (index < end && (Char__compareTo_impl_ypi4mb(charCodeAt(pathData, index), _Char___init__impl__6a9atx(32)) <= 0 || charCodeAt(pathData, index) === _Char___init__impl__6a9atx(44))) {
              index = index + 1 | 0;
            }
          }
           while (index < end && !isNaN_0(value));
        }
        addPathNodes(command, nodes, this.x51_1, dataCount);
      }
    }
    return nodes;
  };
  protoOf(PathParser).a52 = function () {
    var tmp0_elvis_lhs = this.w51_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  function toPath(_this__u8e3s4, target) {
    target = target === VOID ? Path_0() : target;
    _init_properties_PathParser_kt__xn6mis();
    var fillType = target.j4n();
    target.z4n();
    target.i4n(fillType);
    var currentX = 0.0;
    var currentY = 0.0;
    var ctrlX = 0.0;
    var ctrlY = 0.0;
    var segmentX = 0.0;
    var segmentY = 0.0;
    var reflectiveCtrlX;
    var reflectiveCtrlY;
    var previousNode = _this__u8e3s4.n() ? Close_getInstance() : _this__u8e3s4.m(0);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.m(index);
        if (item instanceof Close) {
          currentX = segmentX;
          currentY = segmentY;
          ctrlX = segmentX;
          ctrlY = segmentY;
          target.v29();
        } else {
          if (item instanceof RelativeMoveTo) {
            currentX = currentX + item.g4y_1;
            currentY = currentY + item.h4y_1;
            target.l4n(item.g4y_1, item.h4y_1);
            segmentX = currentX;
            segmentY = currentY;
          } else {
            if (item instanceof MoveTo) {
              currentX = item.k4y_1;
              currentY = item.l4y_1;
              target.k4n(item.k4y_1, item.l4y_1);
              segmentX = currentX;
              segmentY = currentY;
            } else {
              if (item instanceof RelativeLineTo) {
                target.n4n(item.o4y_1, item.p4y_1);
                currentX = currentX + item.o4y_1;
                currentY = currentY + item.p4y_1;
              } else {
                if (item instanceof LineTo) {
                  target.m4n(item.s4y_1, item.t4y_1);
                  currentX = item.s4y_1;
                  currentY = item.t4y_1;
                } else {
                  if (item instanceof RelativeHorizontalTo) {
                    target.n4n(item.w4y_1, 0.0);
                    currentX = currentX + item.w4y_1;
                  } else {
                    if (item instanceof HorizontalTo) {
                      target.m4n(item.z4y_1, currentY);
                      currentX = item.z4y_1;
                    } else {
                      if (item instanceof RelativeVerticalTo) {
                        target.n4n(0.0, item.c4z_1);
                        currentY = currentY + item.c4z_1;
                      } else {
                        if (item instanceof VerticalTo) {
                          target.m4n(currentX, item.f4z_1);
                          currentY = item.f4z_1;
                        } else {
                          if (item instanceof RelativeCurveTo) {
                            target.t4n(item.i4z_1, item.j4z_1, item.k4z_1, item.l4z_1, item.m4z_1, item.n4z_1);
                            ctrlX = currentX + item.k4z_1;
                            ctrlY = currentY + item.l4z_1;
                            currentX = currentX + item.m4z_1;
                            currentY = currentY + item.n4z_1;
                          } else {
                            if (item instanceof CurveTo) {
                              target.s4n(item.q4z_1, item.r4z_1, item.s4z_1, item.t4z_1, item.u4z_1, item.v4z_1);
                              ctrlX = item.s4z_1;
                              ctrlY = item.t4z_1;
                              currentX = item.u4z_1;
                              currentY = item.v4z_1;
                            } else {
                              if (item instanceof RelativeReflectiveCurveTo) {
                                if (previousNode.u51_1) {
                                  reflectiveCtrlX = currentX - ctrlX;
                                  reflectiveCtrlY = currentY - ctrlY;
                                } else {
                                  reflectiveCtrlX = 0.0;
                                  reflectiveCtrlY = 0.0;
                                }
                                target.t4n(reflectiveCtrlX, reflectiveCtrlY, item.y4z_1, item.z4z_1, item.a50_1, item.b50_1);
                                ctrlX = currentX + item.y4z_1;
                                ctrlY = currentY + item.z4z_1;
                                currentX = currentX + item.a50_1;
                                currentY = currentY + item.b50_1;
                              } else {
                                if (item instanceof ReflectiveCurveTo) {
                                  if (previousNode.u51_1) {
                                    reflectiveCtrlX = 2 * currentX - ctrlX;
                                    reflectiveCtrlY = 2 * currentY - ctrlY;
                                  } else {
                                    reflectiveCtrlX = currentX;
                                    reflectiveCtrlY = currentY;
                                  }
                                  target.s4n(reflectiveCtrlX, reflectiveCtrlY, item.e50_1, item.f50_1, item.g50_1, item.h50_1);
                                  ctrlX = item.e50_1;
                                  ctrlY = item.f50_1;
                                  currentX = item.g50_1;
                                  currentY = item.h50_1;
                                } else {
                                  if (item instanceof RelativeQuadTo) {
                                    target.r4n(item.k50_1, item.l50_1, item.m50_1, item.n50_1);
                                    ctrlX = currentX + item.k50_1;
                                    ctrlY = currentY + item.l50_1;
                                    currentX = currentX + item.m50_1;
                                    currentY = currentY + item.n50_1;
                                  } else {
                                    if (item instanceof QuadTo) {
                                      target.p4n(item.q50_1, item.r50_1, item.s50_1, item.t50_1);
                                      ctrlX = item.q50_1;
                                      ctrlY = item.r50_1;
                                      currentX = item.s50_1;
                                      currentY = item.t50_1;
                                    } else {
                                      if (item instanceof RelativeReflectiveQuadTo) {
                                        if (previousNode.v51_1) {
                                          reflectiveCtrlX = currentX - ctrlX;
                                          reflectiveCtrlY = currentY - ctrlY;
                                        } else {
                                          reflectiveCtrlX = 0.0;
                                          reflectiveCtrlY = 0.0;
                                        }
                                        target.r4n(reflectiveCtrlX, reflectiveCtrlY, item.w50_1, item.x50_1);
                                        ctrlX = currentX + reflectiveCtrlX;
                                        ctrlY = currentY + reflectiveCtrlY;
                                        currentX = currentX + item.w50_1;
                                        currentY = currentY + item.x50_1;
                                      } else {
                                        if (item instanceof ReflectiveQuadTo) {
                                          if (previousNode.v51_1) {
                                            reflectiveCtrlX = 2 * currentX - ctrlX;
                                            reflectiveCtrlY = 2 * currentY - ctrlY;
                                          } else {
                                            reflectiveCtrlX = currentX;
                                            reflectiveCtrlY = currentY;
                                          }
                                          target.p4n(reflectiveCtrlX, reflectiveCtrlY, item.a51_1, item.b51_1);
                                          ctrlX = reflectiveCtrlX;
                                          ctrlY = reflectiveCtrlY;
                                          currentX = item.a51_1;
                                          currentY = item.b51_1;
                                        } else {
                                          if (item instanceof RelativeArcTo) {
                                            var arcStartX = item.j51_1 + currentX;
                                            var arcStartY = item.k51_1 + currentY;
                                            drawArc(target, currentX, currentY, arcStartX, arcStartY, item.e51_1, item.f51_1, item.g51_1, item.h51_1, item.i51_1);
                                            currentX = arcStartX;
                                            currentY = arcStartY;
                                            ctrlX = currentX;
                                            ctrlY = currentY;
                                          } else {
                                            if (item instanceof ArcTo) {
                                              drawArc(target, currentX, currentY, item.s51_1, item.t51_1, item.n51_1, item.o51_1, item.p51_1, item.q51_1, item.r51_1);
                                              currentX = item.s51_1;
                                              currentY = item.t51_1;
                                              ctrlX = currentX;
                                              ctrlY = currentY;
                                            } else {
                                              noWhenBranchMatchedException();
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        previousNode = item;
      }
       while (inductionVariable <= last);
    return target;
  }
  function drawArc(p, x0, y0, x1, y1, a, b, theta, isMoreThanHalf, isPositiveArc) {
    _init_properties_PathParser_kt__xn6mis();
    // Inline function 'androidx.compose.ui.graphics.vector.toRadians' call
    var thetaD = theta / 180 * 3.141592653589793;
    // Inline function 'kotlin.math.cos' call
    var cosTheta = Math.cos(thetaD);
    // Inline function 'kotlin.math.sin' call
    var sinTheta = Math.sin(thetaD);
    var x0p = (x0 * cosTheta + y0 * sinTheta) / a;
    var y0p = (-x0 * sinTheta + y0 * cosTheta) / b;
    var x1p = (x1 * cosTheta + y1 * sinTheta) / a;
    var y1p = (-x1 * sinTheta + y1 * cosTheta) / b;
    var dx = x0p - x1p;
    var dy = y0p - y1p;
    var xm = (x0p + x1p) / 2;
    var ym = (y0p + y1p) / 2;
    var dsq = dx * dx + dy * dy;
    if (dsq === 0.0) {
      return Unit_instance;
    }
    var disc = 1.0 / dsq - 1.0 / 4.0;
    if (disc < 0.0) {
      // Inline function 'kotlin.math.sqrt' call
      var adjust = Math.sqrt(dsq) / 1.99999;
      drawArc(p, x0, y0, x1, y1, a * adjust, b * adjust, theta, isMoreThanHalf, isPositiveArc);
      return Unit_instance;
    }
    // Inline function 'kotlin.math.sqrt' call
    var s = Math.sqrt(disc);
    var sdx = s * dx;
    var sdy = s * dy;
    var cx;
    var cy;
    if (isMoreThanHalf === isPositiveArc) {
      cx = xm - sdy;
      cy = ym + sdx;
    } else {
      cx = xm + sdy;
      cy = ym - sdx;
    }
    var tmp0 = y0p - cy;
    // Inline function 'kotlin.math.atan2' call
    var x = x0p - cx;
    var eta0 = Math.atan2(tmp0, x);
    var tmp0_0 = y1p - cy;
    // Inline function 'kotlin.math.atan2' call
    var x_0 = x1p - cx;
    var eta1 = Math.atan2(tmp0_0, x_0);
    var sweep = eta1 - eta0;
    if (!(isPositiveArc === sweep >= 0)) {
      if (sweep > 0) {
        sweep = sweep - 2 * 3.141592653589793;
      } else {
        sweep = sweep + 2 * 3.141592653589793;
      }
    }
    cx = cx * a;
    cy = cy * b;
    var tcx = cx;
    cx = cx * cosTheta - cy * sinTheta;
    cy = tcx * sinTheta + cy * cosTheta;
    arcToBezier(p, cx, cy, a, b, x0, y0, thetaD, eta0, sweep);
  }
  function arcToBezier(p, cx, cy, a, b, e1x, e1y, theta, start, sweep) {
    _init_properties_PathParser_kt__xn6mis();
    var eta1x = e1x;
    var eta1y = e1y;
    // Inline function 'kotlin.math.abs' call
    var x = sweep * 4 / 3.141592653589793;
    // Inline function 'kotlin.math.ceil' call
    var x_0 = Math.abs(x);
    var tmp$ret$1 = Math.ceil(x_0);
    var numSegments = numberToInt(tmp$ret$1);
    var eta1 = start;
    // Inline function 'kotlin.math.cos' call
    var cosTheta = Math.cos(theta);
    // Inline function 'kotlin.math.sin' call
    var sinTheta = Math.sin(theta);
    // Inline function 'kotlin.math.cos' call
    var x_1 = eta1;
    var cosEta1 = Math.cos(x_1);
    // Inline function 'kotlin.math.sin' call
    var x_2 = eta1;
    var sinEta1 = Math.sin(x_2);
    var ep1x = -a * cosTheta * sinEta1 - b * sinTheta * cosEta1;
    var ep1y = -a * sinTheta * sinEta1 + b * cosTheta * cosEta1;
    var anglePerSegment = sweep / numSegments;
    var inductionVariable = 0;
    if (inductionVariable < numSegments)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var eta2 = eta1 + anglePerSegment;
        // Inline function 'kotlin.math.sin' call
        var sinEta2 = Math.sin(eta2);
        // Inline function 'kotlin.math.cos' call
        var cosEta2 = Math.cos(eta2);
        var e2x = cx + a * cosTheta * cosEta2 - b * sinTheta * sinEta2;
        var e2y = cy + a * sinTheta * cosEta2 + b * cosTheta * sinEta2;
        var ep2x = -a * cosTheta * sinEta2 - b * sinTheta * cosEta2;
        var ep2y = -a * sinTheta * sinEta2 + b * cosTheta * cosEta2;
        // Inline function 'kotlin.math.tan' call
        var x_3 = (eta2 - eta1) / 2;
        var tanDiff2 = Math.tan(x_3);
        // Inline function 'kotlin.math.sin' call
        var x_4 = eta2 - eta1;
        var tmp = Math.sin(x_4);
        // Inline function 'kotlin.math.sqrt' call
        var x_5 = 4 + 3.0 * tanDiff2 * tanDiff2;
        var alpha = tmp * (Math.sqrt(x_5) - 1) / 3;
        var q1x = eta1x + alpha * ep1x;
        var q1y = eta1y + alpha * ep1y;
        var q2x = e2x - alpha * ep2x;
        var q2y = e2y - alpha * ep2y;
        p.s4n(q1x, q1y, q2x, q2y, e2x, e2y);
        eta1 = eta2;
        eta1x = e2x;
        eta1y = e2y;
        ep1x = ep2x;
        ep1y = ep2y;
      }
       while (inductionVariable < numSegments);
  }
  var properties_initialized_PathParser_kt_mzars6;
  function _init_properties_PathParser_kt__xn6mis() {
    if (!properties_initialized_PathParser_kt_mzars6) {
      properties_initialized_PathParser_kt_mzars6 = true;
      EmptyArray = new Float32Array(0);
    }
  }
  function toSkia(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_12().r4f_1 ? BlendMode_CLEAR_getInstance() : _this__u8e3s4 === Companion_getInstance_12().s4f_1 ? BlendMode_SRC_getInstance() : _this__u8e3s4 === Companion_getInstance_12().t4f_1 ? BlendMode_DST_getInstance() : _this__u8e3s4 === Companion_getInstance_12().u4f_1 ? BlendMode_SRC_OVER_getInstance() : _this__u8e3s4 === Companion_getInstance_12().v4f_1 ? BlendMode_DST_OVER_getInstance() : _this__u8e3s4 === Companion_getInstance_12().w4f_1 ? BlendMode_SRC_IN_getInstance() : _this__u8e3s4 === Companion_getInstance_12().x4f_1 ? BlendMode_DST_IN_getInstance() : _this__u8e3s4 === Companion_getInstance_12().y4f_1 ? BlendMode_SRC_OUT_getInstance() : _this__u8e3s4 === Companion_getInstance_12().z4f_1 ? BlendMode_DST_OUT_getInstance() : _this__u8e3s4 === Companion_getInstance_12().a4g_1 ? BlendMode_SRC_ATOP_getInstance() : _this__u8e3s4 === Companion_getInstance_12().b4g_1 ? BlendMode_DST_ATOP_getInstance() : _this__u8e3s4 === Companion_getInstance_12().c4g_1 ? BlendMode_XOR_getInstance() : _this__u8e3s4 === Companion_getInstance_12().d4g_1 ? BlendMode_PLUS_getInstance() : _this__u8e3s4 === Companion_getInstance_12().e4g_1 ? BlendMode_MODULATE_getInstance() : _this__u8e3s4 === Companion_getInstance_12().f4g_1 ? BlendMode_SCREEN_getInstance() : _this__u8e3s4 === Companion_getInstance_12().g4g_1 ? BlendMode_OVERLAY_getInstance() : _this__u8e3s4 === Companion_getInstance_12().h4g_1 ? BlendMode_DARKEN_getInstance() : _this__u8e3s4 === Companion_getInstance_12().i4g_1 ? BlendMode_LIGHTEN_getInstance() : _this__u8e3s4 === Companion_getInstance_12().j4g_1 ? BlendMode_COLOR_DODGE_getInstance() : _this__u8e3s4 === Companion_getInstance_12().k4g_1 ? BlendMode_COLOR_BURN_getInstance() : _this__u8e3s4 === Companion_getInstance_12().l4g_1 ? BlendMode_HARD_LIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_12().m4g_1 ? BlendMode_SOFT_LIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_12().n4g_1 ? BlendMode_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_12().o4g_1 ? BlendMode_EXCLUSION_getInstance() : _this__u8e3s4 === Companion_getInstance_12().p4g_1 ? BlendMode_MULTIPLY_getInstance() : _this__u8e3s4 === Companion_getInstance_12().q4g_1 ? BlendMode_HUE_getInstance() : _this__u8e3s4 === Companion_getInstance_12().r4g_1 ? BlendMode_SATURATION_getInstance() : _this__u8e3s4 === Companion_getInstance_12().s4g_1 ? BlendMode_COLOR_getInstance() : _this__u8e3s4 === Companion_getInstance_12().t4g_1 ? BlendMode_LUMINOSITY_getInstance() : BlendMode_SRC_OVER_getInstance();
  }
  function setFrom(_this__u8e3s4, matrix) {
    var scaleX = _Matrix___get_values__impl__fblr7b(matrix)[0];
    var skewY = _Matrix___get_values__impl__fblr7b(matrix)[1];
    var v2 = _Matrix___get_values__impl__fblr7b(matrix)[2];
    var persp0 = _Matrix___get_values__impl__fblr7b(matrix)[3];
    var skewX = _Matrix___get_values__impl__fblr7b(matrix)[4];
    var scaleY = _Matrix___get_values__impl__fblr7b(matrix)[5];
    var v6 = _Matrix___get_values__impl__fblr7b(matrix)[6];
    var persp1 = _Matrix___get_values__impl__fblr7b(matrix)[7];
    var v8 = _Matrix___get_values__impl__fblr7b(matrix)[8];
    var translateX = _Matrix___get_values__impl__fblr7b(matrix)[12];
    var translateY = _Matrix___get_values__impl__fblr7b(matrix)[13];
    var persp2 = _Matrix___get_values__impl__fblr7b(matrix)[15];
    var v = _Matrix___get_values__impl__fblr7b(matrix);
    v[0] = scaleX;
    v[1] = skewX;
    v[2] = translateX;
    v[3] = skewY;
    v[4] = scaleY;
    v[5] = translateY;
    v[6] = persp0;
    v[7] = persp1;
    v[8] = persp2;
    var inductionVariable = 0;
    if (inductionVariable <= 8)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.u3v_1[i] = v[i];
      }
       while (inductionVariable <= 8);
    v[0] = scaleX;
    v[1] = skewY;
    v[2] = v2;
    v[3] = persp0;
    v[4] = skewX;
    v[5] = scaleY;
    v[6] = v6;
    v[7] = persp1;
    v[8] = v8;
  }
  function identityMatrix33() {
    return new Matrix33(new Float32Array([1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0]));
  }
  function prepareTransformationMatrix(matrix, pivotX, pivotY, translationX, translationY, rotationX, rotationY, rotationZ, scaleX, scaleY, cameraDistance) {
    Matrix__reset_impl_4l49i7(matrix);
    Matrix__translate$default_impl_10t8ql(matrix, -pivotX, -pivotY);
    // Inline function 'kotlin.apply' call
    var this_0 = new Matrix(_Matrix___init__impl__q3kp4w());
    var $this$apply = this_0.f4m_1;
    Matrix__rotateZ_impl_2g2pf5($this$apply, rotationZ);
    Matrix__rotateY_impl_2x4btc($this$apply, rotationY);
    Matrix__rotateX_impl_3e5y7j($this$apply, rotationX);
    Matrix__scale$default_impl_snaws9($this$apply, scaleX, scaleY);
    var tmp$ret$0 = this_0.f4m_1;
    Matrix__timesAssign_impl_oas521(matrix, tmp$ret$0);
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isZero' call
    // Inline function 'kotlin.math.abs' call
    if (!(Math.abs(rotationX) <= 0.001)) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.ui.graphics.isZero' call
      // Inline function 'kotlin.math.abs' call
      tmp = !(Math.abs(rotationY) <= 0.001);
    }
    if (tmp) {
      // Inline function 'kotlin.apply' call
      var this_1 = new Matrix(_Matrix___init__impl__q3kp4w());
      var depth = cameraDistance * 72.0;
      var tmp0 = this_1.f4m_1;
      // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
      var v = -1.0 / depth;
      _Matrix___get_values__impl__fblr7b(tmp0)[imul(2, 4) + 3 | 0] = v;
      var tmp$ret$6 = this_1.f4m_1;
      Matrix__timesAssign_impl_oas521(matrix, tmp$ret$6);
    }
    // Inline function 'kotlin.apply' call
    var this_2 = new Matrix(_Matrix___init__impl__q3kp4w());
    var $this$apply_0 = this_2.f4m_1;
    Matrix__translate$default_impl_10t8ql($this$apply_0, pivotX + translationX, pivotY + translationY);
    var tmp$ret$9 = this_2.f4m_1;
    Matrix__timesAssign_impl_oas521(matrix, tmp$ret$9);
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(2, 4) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(2, 4) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(2, 4) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(0, 4) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(1, 4) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(3, 4) + 2 | 0] = 0.0;
  }
  function toComposeRect(_this__u8e3s4) {
    return new Rect_0(_this__u8e3s4.d3v_1, _this__u8e3s4.e3v_1, _this__u8e3s4.f3v_1, _this__u8e3s4.g3v_1);
  }
  function toSkiaRect(_this__u8e3s4) {
    return Companion_instance.d44(_this__u8e3s4.n3p_1, _this__u8e3s4.o3p_1, _this__u8e3s4.p3p_1, _this__u8e3s4.q3p_1);
  }
  function toSkiaRRect(_this__u8e3s4) {
    var radii = new Float32Array(8);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    var this_0 = _this__u8e3s4.b3q_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _CornerRadius___get_packedValue__impl__okv4jq(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    radii[0] = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    var this_1 = _this__u8e3s4.b3q_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _CornerRadius___get_packedValue__impl__okv4jq(this_1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    radii[1] = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    var this_2 = _this__u8e3s4.c3q_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _CornerRadius___get_packedValue__impl__okv4jq(this_2);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    radii[2] = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    var this_3 = _this__u8e3s4.c3q_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _CornerRadius___get_packedValue__impl__okv4jq(this_3);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    radii[3] = floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    var this_4 = _this__u8e3s4.d3q_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_3 = _CornerRadius___get_packedValue__impl__okv4jq(this_4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_3 = convertToInt(shiftRight(value_3, 32));
    radii[4] = floatFromBits(bits_3);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    var this_5 = _this__u8e3s4.d3q_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _CornerRadius___get_packedValue__impl__okv4jq(this_5);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    radii[5] = floatFromBits(bits_4);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    var this_6 = _this__u8e3s4.e3q_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_5 = _CornerRadius___get_packedValue__impl__okv4jq(this_6);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_5 = convertToInt(shiftRight(value_5, 32));
    radii[6] = floatFromBits(bits_5);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    var this_7 = _this__u8e3s4.e3q_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_6 = _CornerRadius___get_packedValue__impl__okv4jq(this_7);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
    radii[7] = floatFromBits(bits_6);
    return Companion_instance_0.c44(_this__u8e3s4.x3p_1, _this__u8e3s4.y3p_1, _this__u8e3s4.z3p_1, _this__u8e3s4.a3q_1, radii);
  }
  function get_nativeCanvas(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).b52_1;
  }
  function ActualCanvas(image) {
    var skiaBitmap = asSkiaBitmap(image);
    // Inline function 'kotlin.require' call
    if (!!skiaBitmap.i3t()) {
      var message = 'Cannot draw on immutable ImageBitmap';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new SkiaBackedCanvas(Canvas_init_$Create$(skiaBitmap));
  }
  function _get_skia__ddpejf($this, $receiver) {
    // Inline function 'kotlin.apply' call
    var this_0 = $receiver instanceof SkiaBackedPaint ? $receiver : THROW_CCE();
    this_0.o52($this.c52_1);
    return this_0.d52_1;
  }
  function drawImageRect($this, image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    var bitmap = asSkiaBitmap(image);
    // Inline function 'org.jetbrains.skia.impl.use' call
    var this_0 = Companion_getInstance_3().j40(bitmap);
    var tmp;
    try {
      var tmp_0 = Companion_instance;
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(srcOffset);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      var tmp_1 = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(srcOffset);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      var tmp_2 = floatFromBits(bits_0);
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_1 = _Size___get_packedValue__impl__7rlt1o(srcSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_1 = convertToInt(shiftRight(value_1, 32));
      var tmp_3 = floatFromBits(bits_1);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_2 = _Size___get_packedValue__impl__7rlt1o(srcSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      var tmp$ret$14 = floatFromBits(bits_2);
      var tmp_4 = tmp_0.f44(tmp_1, tmp_2, tmp_3, tmp$ret$14);
      var tmp_5 = Companion_instance;
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_3 = _Offset___get_packedValue__impl__xh2k8q(dstOffset);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_3 = convertToInt(shiftRight(value_3, 32));
      var tmp_6 = floatFromBits(bits_3);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_4 = _Offset___get_packedValue__impl__xh2k8q(dstOffset);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
      var tmp_7 = floatFromBits(bits_4);
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_5 = _Size___get_packedValue__impl__7rlt1o(dstSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_5 = convertToInt(shiftRight(value_5, 32));
      var tmp_8 = floatFromBits(bits_5);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_6 = _Size___get_packedValue__impl__7rlt1o(dstSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
      var tmp$ret$30 = floatFromBits(bits_6);
      tmp = $this.b52_1.q3v(this_0, tmp_4, tmp_5.f44(tmp_6, tmp_7, tmp_8, tmp$ret$30), toSkia_2($this, paint.b4u()), _get_skia__ddpejf($this, paint), true);
    }finally {
      this_0.v29();
    }
  }
  function toSkia_0($this, $receiver) {
    return $receiver === Companion_getInstance_14().l4j_1 ? ClipMode_DIFFERENCE_getInstance() : $receiver === Companion_getInstance_14().m4j_1 ? ClipMode_INTERSECT_getInstance() : ClipMode_INTERSECT_getInstance();
  }
  function toSkia_1($this, $receiver) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($receiver)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = _Matrix___get_values__impl__fblr7b($receiver)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b($receiver)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b($receiver)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b($receiver)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b($receiver)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b($receiver)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = _Matrix___get_values__impl__fblr7b($receiver)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = _Matrix___get_values__impl__fblr7b($receiver)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b($receiver)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = _Matrix___get_values__impl__fblr7b($receiver)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = _Matrix___get_values__impl__fblr7b($receiver)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_11 = _Matrix___get_values__impl__fblr7b($receiver)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_12 = _Matrix___get_values__impl__fblr7b($receiver)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_13 = _Matrix___get_values__impl__fblr7b($receiver)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp$ret$15 = _Matrix___get_values__impl__fblr7b($receiver)[imul(3, 4) + 3 | 0];
    return new Matrix44(new Float32Array([tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp$ret$15]));
  }
  function toSkia_2($this, $receiver) {
    return $receiver === Companion_getInstance_17().w4l_1 ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NONE_getInstance()) : $receiver === Companion_getInstance_17().x4l_1 ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NEAREST_getInstance()) : $receiver === Companion_getInstance_17().y4l_1 ? new CubicResampler(1 / 3.0, 1 / 3.0) : new FilterMipmap(FilterMode_NEAREST_getInstance(), MipmapMode_NONE_getInstance());
  }
  function SkiaBackedCanvas(skia) {
    this.b52_1 = skia;
    this.c52_1 = 1.0;
  }
  protoOf(SkiaBackedCanvas).d4j = function () {
    this.b52_1.c3w();
  };
  protoOf(SkiaBackedCanvas).e4j = function () {
    this.b52_1.e3w();
  };
  protoOf(SkiaBackedCanvas).f4j = function (bounds, paint) {
    this.b52_1.d3w(bounds.n3p_1, bounds.o3p_1, bounds.p3p_1, bounds.q3p_1, _get_skia__ddpejf(this, paint));
  };
  protoOf(SkiaBackedCanvas).e3p = function (dx, dy) {
    this.b52_1.t3p(dx, dy);
  };
  protoOf(SkiaBackedCanvas).g4j = function (sx, sy) {
    this.b52_1.z3v(sx, sy);
  };
  protoOf(SkiaBackedCanvas).h4j = function (matrix) {
    if (!isIdentity(matrix)) {
      this.b52_1.a3w(toSkia_1(this, matrix));
    }
  };
  protoOf(SkiaBackedCanvas).j4j = function (left, top, right, bottom, clipOp) {
    var antiAlias = true;
    this.b52_1.w3v(Companion_instance.d44(left, top, right, bottom), toSkia_0(this, clipOp), antiAlias);
  };
  protoOf(SkiaBackedCanvas).o4j = function (path, clipOp) {
    var antiAlias = true;
    this.b52_1.y3v(asSkiaPath(path), toSkia_0(this, clipOp), antiAlias);
  };
  protoOf(SkiaBackedCanvas).q4j = function (left, top, right, bottom, paint) {
    this.b52_1.c3v(Companion_instance.d44(left, top, right, bottom), _get_skia__ddpejf(this, paint));
  };
  protoOf(SkiaBackedCanvas).r4j = function (left, top, right, bottom, radiusX, radiusY, paint) {
    this.b52_1.i3v(Companion_instance_0.b44(left, top, right, bottom, radiusX, radiusY), _get_skia__ddpejf(this, paint));
  };
  protoOf(SkiaBackedCanvas).s4j = function (center, radius, paint) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(center);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(center);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp$ret$4 = floatFromBits(bits_0);
    this.b52_1.h3v(tmp, tmp$ret$4, radius, _get_skia__ddpejf(this, paint));
  };
  protoOf(SkiaBackedCanvas).t4j = function (path, paint) {
    this.b52_1.p3v(asSkiaPath(path), _get_skia__ddpejf(this, paint));
  };
  protoOf(SkiaBackedCanvas).u4j = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    var tmp0 = _IntOffset___get_x__impl__qiqr5o(srcOffset);
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _IntOffset___get_y__impl__2avpwj(srcOffset);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp = _Offset___init__impl__c168vi(tmp$ret$1);
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf(srcSize);
    var tmp0_0 = convertToInt(shiftRight(value, 32));
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_0 = _IntSize___get_packedValue__impl__uho7jf(srcSize);
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var v1_0 = fromInt(toRawBits(tmp0_0));
    var v2_0 = fromInt(toRawBits(val2_0));
    var tmp$ret$7 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
    var tmp_0 = _Size___init__impl__aywn0g(tmp$ret$7);
    var tmp0_1 = _IntOffset___get_x__impl__qiqr5o(dstOffset);
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2_1 = _IntOffset___get_y__impl__2avpwj(dstOffset);
    var v1_1 = fromInt(toRawBits(tmp0_1));
    var v2_1 = fromInt(toRawBits(val2_1));
    var tmp$ret$9 = bitwiseOr(shiftLeft(v1_1, 32), bitwiseAnd(v2_1, new Long(-1, 0)));
    var tmp_1 = _Offset___init__impl__c168vi(tmp$ret$9);
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value_1 = _IntSize___get_packedValue__impl__uho7jf(dstSize);
    var tmp0_2 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_2 = _IntSize___get_packedValue__impl__uho7jf(dstSize);
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    var v1_2 = fromInt(toRawBits(tmp0_2));
    var v2_2 = fromInt(toRawBits(val2_2));
    var tmp$ret$15 = bitwiseOr(shiftLeft(v1_2, 32), bitwiseAnd(v2_2, new Long(-1, 0)));
    var tmp$ret$14 = _Size___init__impl__aywn0g(tmp$ret$15);
    drawImageRect(this, image, tmp, tmp_0, tmp_1, tmp$ret$14, paint);
  };
  function asComposeCanvas(_this__u8e3s4) {
    return new SkiaBackedCanvas(_this__u8e3s4);
  }
  function set_alphaMultiplier(_this__u8e3s4, value) {
    (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).c52_1 = value;
  }
  function Paint() {
    return new SkiaBackedPaint();
  }
  function updateAlpha($this, alpha, multiplier) {
    alpha = alpha === VOID ? $this.b4e() : alpha;
    multiplier = multiplier === VOID ? $this.e52_1 : multiplier;
    $this.d52_1.f41(toArgb(Color__copy$default_impl_ectz3s(Color_3($this.d52_1.g41()), alpha * multiplier)));
  }
  function toSkia_3($this, $receiver) {
    return $receiver === Companion_getInstance_20().g4n_1 ? PaintMode_FILL_getInstance() : $receiver === Companion_getInstance_20().h4n_1 ? PaintMode_STROKE_getInstance() : PaintMode_FILL_getInstance();
  }
  function toSkia_4($this, $receiver) {
    return $receiver === Companion_getInstance_24().p4o_1 ? PaintStrokeCap_BUTT_getInstance() : $receiver === Companion_getInstance_24().q4o_1 ? PaintStrokeCap_ROUND_getInstance() : $receiver === Companion_getInstance_24().r4o_1 ? PaintStrokeCap_SQUARE_getInstance() : PaintStrokeCap_BUTT_getInstance();
  }
  function toSkia_5($this, $receiver) {
    return $receiver === Companion_getInstance_25().t4o_1 ? PaintStrokeJoin_MITER_getInstance() : $receiver === Companion_getInstance_25().u4o_1 ? PaintStrokeJoin_ROUND_getInstance() : $receiver === Companion_getInstance_25().v4o_1 ? PaintStrokeJoin_BEVEL_getInstance() : PaintStrokeJoin_MITER_getInstance();
  }
  function SkiaBackedPaint(skia) {
    skia = skia === VOID ? Paint_init_$Create$() : skia;
    this.d52_1 = skia;
    this.e52_1 = 1.0;
    this.f52_1 = Companion_getInstance_12().u4f_1;
    this.g52_1 = Companion_getInstance_20().g4n_1;
    this.h52_1 = Companion_getInstance_24().p4o_1;
    this.i52_1 = Companion_getInstance_25().u4o_1;
    this.j52_1 = 0.0;
    this.k52_1 = Companion_getInstance_17().x4l_1;
    this.l52_1 = null;
    this.m52_1 = null;
    this.n52_1 = null;
  }
  protoOf(SkiaBackedPaint).p52 = function () {
    return this.d52_1;
  };
  protoOf(SkiaBackedPaint).o52 = function (value) {
    var multiplier = coerceIn_0(value, 0.0, 1.0);
    updateAlpha(this, VOID, multiplier);
    this.e52_1 = multiplier;
  };
  protoOf(SkiaBackedPaint).n4c = function (value) {
    updateAlpha(this, value);
  };
  protoOf(SkiaBackedPaint).b4e = function () {
    return _Color___get_alpha__impl__wcfyv1(Color_3(this.d52_1.g41()));
  };
  protoOf(SkiaBackedPaint).y4g = function (color) {
    this.d52_1.f41(toArgb(color));
  };
  protoOf(SkiaBackedPaint).z4h = function () {
    return Color_3(this.d52_1.g41());
  };
  protoOf(SkiaBackedPaint).y4t = function (value) {
    this.d52_1.s41(toSkia(value));
    this.f52_1 = value;
  };
  protoOf(SkiaBackedPaint).z4t = function () {
    return this.f52_1;
  };
  protoOf(SkiaBackedPaint).i4t = function (value) {
    this.d52_1.d41(toSkia_3(this, value));
    this.g52_1 = value;
  };
  protoOf(SkiaBackedPaint).k41 = function (value) {
    this.d52_1.k41(value);
  };
  protoOf(SkiaBackedPaint).l41 = function () {
    return this.d52_1.l41();
  };
  protoOf(SkiaBackedPaint).o4t = function (value) {
    this.d52_1.n41(toSkia_4(this, value));
    this.h52_1 = value;
  };
  protoOf(SkiaBackedPaint).p4t = function () {
    return this.h52_1;
  };
  protoOf(SkiaBackedPaint).s4t = function (value) {
    this.d52_1.o41(toSkia_5(this, value));
    this.i52_1 = value;
  };
  protoOf(SkiaBackedPaint).t4t = function () {
    return this.i52_1;
  };
  protoOf(SkiaBackedPaint).q4t = function (value) {
    this.d52_1.m41(value);
    this.j52_1 = value;
  };
  protoOf(SkiaBackedPaint).r4t = function () {
    return this.j52_1;
  };
  protoOf(SkiaBackedPaint).a4u = function (_set____db54di) {
    this.k52_1 = _set____db54di;
  };
  protoOf(SkiaBackedPaint).b4u = function () {
    return this.k52_1;
  };
  protoOf(SkiaBackedPaint).p41 = function (value) {
    this.d52_1.p41(value);
    this.l52_1 = value;
  };
  protoOf(SkiaBackedPaint).q41 = function () {
    return this.l52_1;
  };
  protoOf(SkiaBackedPaint).w4t = function (value) {
    this.d52_1.r41(value == null ? null : asSkiaColorFilter(value));
    this.m52_1 = value;
  };
  protoOf(SkiaBackedPaint).x4t = function () {
    return this.m52_1;
  };
  protoOf(SkiaBackedPaint).u4t = function (value) {
    var tmp0_safe_receiver = (value == null ? true : value instanceof SkiaBackedPathEffect) ? value : THROW_CCE();
    this.d52_1.v41(tmp0_safe_receiver == null ? null : asSkiaPathEffect(tmp0_safe_receiver));
    this.n52_1 = value;
  };
  protoOf(SkiaBackedPaint).v4t = function () {
    return this.n52_1;
  };
  function Path_0() {
    return new SkiaBackedPath();
  }
  function asSkiaPath(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedPath) {
      tmp = _this__u8e3s4.q52_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Path');
    }
    return tmp;
  }
  function toSkiaOperation($this, $receiver) {
    return $receiver === Companion_getInstance_22().f4o_1 ? PathOp_DIFFERENCE_getInstance() : $receiver === Companion_getInstance_22().g4o_1 ? PathOp_INTERSECT_getInstance() : $receiver === Companion_getInstance_22().h4o_1 ? PathOp_UNION_getInstance() : $receiver === Companion_getInstance_22().i4o_1 ? PathOp_XOR_getInstance() : $receiver === Companion_getInstance_22().j4o_1 ? PathOp_REVERSE_DIFFERENCE_getInstance() : PathOp_XOR_getInstance();
  }
  function SkiaBackedPath(internalPath) {
    internalPath = internalPath === VOID ? Path_init_$Create$() : internalPath;
    this.q52_1 = internalPath;
  }
  protoOf(SkiaBackedPath).i4n = function (value) {
    var tmp = this.q52_1;
    var tmp_0;
    if (value === Companion_getInstance_21().d4o_1) {
      tmp_0 = PathFillMode_EVEN_ODD_getInstance();
    } else {
      tmp_0 = PathFillMode_WINDING_getInstance();
    }
    tmp.b42(tmp_0);
  };
  protoOf(SkiaBackedPath).j4n = function () {
    var tmp;
    if (this.q52_1.c42().equals(PathFillMode_EVEN_ODD_getInstance())) {
      tmp = Companion_getInstance_21().d4o_1;
    } else {
      tmp = Companion_getInstance_21().c4o_1;
    }
    return tmp;
  };
  protoOf(SkiaBackedPath).k4n = function (x, y) {
    this.q52_1.g42(x, y);
  };
  protoOf(SkiaBackedPath).l4n = function (dx, dy) {
    this.q52_1.h42(dx, dy);
  };
  protoOf(SkiaBackedPath).m4n = function (x, y) {
    this.q52_1.i42(x, y);
  };
  protoOf(SkiaBackedPath).n4n = function (dx, dy) {
    this.q52_1.j42(dx, dy);
  };
  protoOf(SkiaBackedPath).o4n = function (x1, y1, x2, y2) {
    this.q52_1.k42(x1, y1, x2, y2);
  };
  protoOf(SkiaBackedPath).p4n = function (x1, y1, x2, y2) {
    this.q52_1.k42(x1, y1, x2, y2);
  };
  protoOf(SkiaBackedPath).q4n = function (dx1, dy1, dx2, dy2) {
    this.q52_1.l42(dx1, dy1, dx2, dy2);
  };
  protoOf(SkiaBackedPath).r4n = function (dx1, dy1, dx2, dy2) {
    this.q52_1.l42(dx1, dy1, dx2, dy2);
  };
  protoOf(SkiaBackedPath).s4n = function (x1, y1, x2, y2, x3, y3) {
    this.q52_1.m42(x1, y1, x2, y2, x3, y3);
  };
  protoOf(SkiaBackedPath).t4n = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    this.q52_1.n42(dx1, dy1, dx2, dy2, dx3, dy3);
  };
  protoOf(SkiaBackedPath).u4n = function (rect, direction) {
    this.q52_1.q42(toSkiaRect(rect), toSkiaPathDirection(direction));
  };
  protoOf(SkiaBackedPath).w4n = function (roundRect, direction) {
    this.q52_1.s42(toSkiaRRect(roundRect), toSkiaPathDirection(direction));
  };
  protoOf(SkiaBackedPath).x4n = function (path, offset) {
    var tmp = this.q52_1;
    var tmp_0 = asSkiaPath(path);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_1 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp$ret$4 = floatFromBits(bits_0);
    tmp.u42(tmp_0, tmp_1, tmp$ret$4);
  };
  protoOf(SkiaBackedPath).v29 = function () {
    this.q52_1.o42();
  };
  protoOf(SkiaBackedPath).n2w = function () {
    var fillType = this.j4n();
    this.q52_1.b41();
    this.i4n(fillType);
  };
  protoOf(SkiaBackedPath).z4n = function () {
    this.q52_1.d42();
  };
  protoOf(SkiaBackedPath).d3p = function (offset) {
    var tmp = this.q52_1;
    var tmp_0 = Companion_getInstance_4();
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_1 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp$ret$4 = floatFromBits(bits_0);
    tmp.w42(tmp_0.w40(tmp_1, tmp$ret$4));
  };
  protoOf(SkiaBackedPath).a4o = function () {
    var bounds = this.q52_1.e42();
    return new Rect_0(bounds.d3v_1, bounds.e3v_1, bounds.f3v_1, bounds.g3v_1);
  };
  protoOf(SkiaBackedPath).b4o = function (path1, path2, operation) {
    var path = Companion_getInstance_5().x41(asSkiaPath(path1), asSkiaPath(path2), toSkiaOperation(this, operation));
    var tmp = this;
    tmp.q52_1 = path == null ? this.q52_1 : path;
    return !(path == null);
  };
  protoOf(SkiaBackedPath).wl = function () {
    return this.q52_1.wl();
  };
  function toSkiaPathDirection(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.i2_1) {
      case 0:
        tmp = PathDirection_COUNTER_CLOCKWISE_getInstance();
        break;
      case 1:
        tmp = PathDirection_CLOCKWISE_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function SkiaBackedPathEffect() {
  }
  function asSkiaPathEffect(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedPathEffect ? _this__u8e3s4 : THROW_CCE()).r52_1;
  }
  function PathMeasure() {
    return new SkiaBackedPathMeasure();
  }
  function SkiaBackedPathMeasure(skia) {
    skia = skia === VOID ? PathMeasure_init_$Create$() : skia;
    this.s52_1 = skia;
  }
  protoOf(SkiaBackedPathMeasure).t52 = function (path, forceClosed) {
    this.s52_1.c43(path == null ? null : asSkiaPath(path), forceClosed);
  };
  protoOf(SkiaBackedPathMeasure).u52 = function (startDistance, stopDistance, destination, startWithMoveTo) {
    return this.s52_1.d43(startDistance, stopDistance, asSkiaPath(destination), startWithMoveTo);
  };
  protoOf(SkiaBackedPathMeasure).a = function () {
    return this.s52_1.a();
  };
  function actualTintColorFilter(color, blendMode) {
    return Companion_getInstance_6().m3w(toArgb(color), toSkia(blendMode));
  }
  function asSkiaColorFilter(_this__u8e3s4) {
    return _this__u8e3s4.r4l_1;
  }
  function SkiaGraphicsContext(measureDrawBounds) {
    measureDrawBounds = measureDrawBounds === VOID ? false : measureDrawBounds;
    this.v52_1 = RenderNodeContext_init_$Create$(measureDrawBounds);
    this.w52_1 = 0;
  }
  protoOf(SkiaGraphicsContext).rz = function () {
    this.v52_1.v29();
  };
  protoOf(SkiaGraphicsContext).l4d = function (centerX, centerY, centerZ, radius, ambientShadowAlpha, spotShadowAlpha) {
    this.v52_1.l4d(centerX, centerY, centerZ, radius, ambientShadowAlpha, spotShadowAlpha);
  };
  protoOf(SkiaGraphicsContext).x52 = function () {
    this.w52_1 = this.w52_1 + 1 | 0;
    return new GraphicsLayer(RenderNode_init_$Create$(this.v52_1));
  };
  protoOf(SkiaGraphicsContext).y52 = function (layer) {
    if (!layer.a4x_1) {
      this.w52_1 = this.w52_1 - 1 | 0;
    }
    layer.z52();
  };
  function ActualImageBitmap(width, height, config, hasAlpha, colorSpace) {
    // Inline function 'kotlin.require' call
    if (!(width > 0 && height > 0)) {
      var message = 'width and height must be > 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var colorType = toSkiaColorType(config);
    var alphaType = hasAlpha ? ColorAlphaType_PREMUL_getInstance() : ColorAlphaType_OPAQUE_getInstance();
    var skiaColorSpace = toSkiaColorSpace(colorSpace);
    var colorInfo = new ColorInfo(colorType, alphaType, skiaColorSpace);
    var imageInfo = new ImageInfo(colorInfo, width, height);
    var bitmap = Bitmap_init_$Create$();
    bitmap.d3t(imageInfo);
    return new SkiaBackedImageBitmap(bitmap);
  }
  function asSkiaBitmap(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedImageBitmap) {
      tmp = _this__u8e3s4.a53_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Image');
    }
    return tmp;
  }
  function toSkiaColorType(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_18().z4l_1 ? Companion_getInstance_7().z3w_1 : _this__u8e3s4 === Companion_getInstance_18().a4m_1 ? ColorType_ALPHA_8_getInstance() : _this__u8e3s4 === Companion_getInstance_18().b4m_1 ? ColorType_RGB_565_getInstance() : _this__u8e3s4 === Companion_getInstance_18().c4m_1 ? ColorType_RGBA_F16_getInstance() : Companion_getInstance_7().z3w_1;
  }
  function toSkiaColorSpace(_this__u8e3s4) {
    return _this__u8e3s4.equals(ColorSpaces_getInstance().d4k_1) ? Companion_getInstance_8().v3w_1 : _this__u8e3s4.equals(ColorSpaces_getInstance().e4k_1) ? Companion_getInstance_8().w3w_1 : _this__u8e3s4.equals(ColorSpaces_getInstance().k4k_1) ? Companion_getInstance_8().x3w_1 : Companion_getInstance_8().v3w_1;
  }
  function SkiaBackedImageBitmap(bitmap) {
    this.a53_1 = bitmap;
    this.b53_1 = toComposeColorSpace(this.a53_1.t3t());
    this.c53_1 = toComposeConfig(this.a53_1.s3t());
    this.d53_1 = !this.a53_1.u3t();
  }
  protoOf(SkiaBackedImageBitmap).e53 = function () {
    return this.c53_1;
  };
  protoOf(SkiaBackedImageBitmap).i3q = function () {
    return this.a53_1.i3q();
  };
  protoOf(SkiaBackedImageBitmap).h3q = function () {
    return this.a53_1.h3q();
  };
  protoOf(SkiaBackedImageBitmap).f53 = function () {
    return Unit_instance;
  };
  function toComposeColorSpace(_this__u8e3s4) {
    return equals(_this__u8e3s4, Companion_getInstance_8().v3w_1) ? ColorSpaces_getInstance().d4k_1 : equals(_this__u8e3s4, Companion_getInstance_8().w3w_1) ? ColorSpaces_getInstance().e4k_1 : equals(_this__u8e3s4, Companion_getInstance_8().x3w_1) ? ColorSpaces_getInstance().k4k_1 : ColorSpaces_getInstance().d4k_1;
  }
  function toComposeConfig(_this__u8e3s4) {
    return _this__u8e3s4.equals(Companion_getInstance_7().z3w_1) ? Companion_getInstance_18().z4l_1 : _this__u8e3s4.equals(ColorType_ALPHA_8_getInstance()) ? Companion_getInstance_18().a4m_1 : _this__u8e3s4.equals(ColorType_RGB_565_getInstance()) ? Companion_getInstance_18().b4m_1 : _this__u8e3s4.equals(ColorType_RGBA_F16_getInstance()) ? Companion_getInstance_18().c4m_1 : Companion_getInstance_18().z4l_1;
  }
  function toComposeImageBitmap(_this__u8e3s4) {
    return new SkiaBackedImageBitmap(toBitmap(_this__u8e3s4));
  }
  function TransformShader() {
    this.i4h_1 = null;
    this.j4h_1 = null;
    this.k4h_1 = null;
  }
  protoOf(TransformShader).l4h = function (matrix) {
    var tmp = this;
    var tmp_0;
    var tmp_1 = matrix;
    if (!((tmp_1 == null ? null : new Matrix(tmp_1)) == null)) {
      // Inline function 'kotlin.apply' call
      var this_0 = Companion_getInstance_4().w40(0.0, 0.0);
      setFrom(this_0, matrix);
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    tmp.k4h_1 = tmp_0;
    this.j4h_1 = null;
  };
  protoOf(TransformShader).p41 = function (value) {
    this.i4h_1 = value;
    this.j4h_1 = null;
  };
  protoOf(TransformShader).q41 = function () {
    var tmp0_elvis_lhs = this.k4h_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.i4h_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var matrix = tmp;
    if (this.j4h_1 == null) {
      var tmp_0 = this;
      var tmp1_safe_receiver = this.i4h_1;
      tmp_0.j4h_1 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.r44(matrix);
    }
    return this.j4h_1;
  };
  function ActualLinearGradientShader(from, to, colors, colorStops, tileMode) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_9();
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(from);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(from);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp_1 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(to);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    var tmp_2 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(to);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    var tmp_3 = floatFromBits(bits_2);
    var tmp_4 = toIntArray(colors);
    return tmp.l44(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, colorStops == null ? null : toFloatArray(colorStops), new GradientStyle(toSkiaTileMode(tileMode), true, identityMatrix33()));
  }
  function ActualRadialGradientShader(center, radius, colors, colorStops, tileMode) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_9();
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(center);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(center);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp_1 = floatFromBits(bits_0);
    var tmp_2 = toIntArray(colors);
    return tmp.m44(tmp_0, tmp_1, radius, tmp_2, colorStops == null ? null : toFloatArray(colorStops), new GradientStyle(toSkiaTileMode(tileMode), true, identityMatrix33()));
  }
  function ActualSweepGradientShader(center, colors, colorStops) {
    validateColorStops(colors, colorStops);
    var tmp = Companion_getInstance_9();
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(center);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(center);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp_1 = floatFromBits(bits_0);
    var tmp_2 = toIntArray(colors);
    return tmp.n44(tmp_0, tmp_1, tmp_2, colorStops == null ? null : toFloatArray(colorStops));
  }
  function validateColorStops(colors, colorStops) {
    if (colorStops == null) {
      if (colors.l() < 2) {
        throw IllegalArgumentException_init_$Create$('colors must have length of at least 2 if colorStops is omitted.');
      }
    } else if (!(colors.l() === colorStops.l())) {
      throw IllegalArgumentException_init_$Create$('colors and colorStops arguments must have equal length.');
    }
  }
  function toIntArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.l();
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = toArgb(_this__u8e3s4.m(tmp_2).f4l_1);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function toSkiaTileMode(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_26().a4i_1 ? FilterTileMode_CLAMP_getInstance() : _this__u8e3s4 === Companion_getInstance_26().b4i_1 ? FilterTileMode_REPEAT_getInstance() : _this__u8e3s4 === Companion_getInstance_26().c4i_1 ? FilterTileMode_MIRROR_getInstance() : _this__u8e3s4 === Companion_getInstance_26().d4i_1 ? FilterTileMode_DECAL_getInstance() : FilterTileMode_CLAMP_getInstance();
  }
  function _set_size__9twho6($this, value) {
    if (!equals($this.i4w_1, value)) {
      $this.i4w_1 = value;
      var tmp0_safe_receiver = $this.w4v_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp = Companion_instance;
        var tmp_0 = _IntOffset___get_x__impl__qiqr5o($this.h4w_1);
        var tmp_1 = _IntOffset___get_y__impl__2avpwj($this.h4w_1);
        // Inline function 'androidx.compose.ui.unit.IntSize.width' call
        // Inline function 'androidx.compose.ui.util.unpackInt1' call
        var value_0 = _IntSize___get_packedValue__impl__uho7jf(value);
        var tmp_2 = convertToInt(shiftRight(value_0, 32));
        // Inline function 'androidx.compose.ui.unit.IntSize.height' call
        // Inline function 'androidx.compose.ui.util.unpackInt2' call
        var value_1 = _IntSize___get_packedValue__impl__uho7jf(value);
        var tmp$ret$2 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
        tmp0_safe_receiver.l4c(tmp.f44(tmp_0, tmp_1, tmp_2, tmp$ret$2));
      }
      // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
      var this_0 = $this.a4w_1;
      if (equalsLong(_Size___get_packedValue__impl__7rlt1o(this_0), new Long(2143289344, 2143289344))) {
        $this.y4v_1 = true;
        configureOutlineAndClip($this);
      }
    }
  }
  function resetOutlineParams($this) {
    $this.c4w_1 = null;
    $this.d4w_1 = null;
    $this.a4w_1 = Companion_getInstance().k3q_1;
    $this.z4v_1 = Companion_getInstance_0().j3p_1;
    $this.b4w_1 = 0.0;
    $this.y4v_1 = true;
  }
  function recordWithTracking($this, block) {
    var tmp0_elvis_lhs = $this.w4v_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var renderNode = tmp;
    var recordingCanvas = renderNode.g4d();
    try {
      var tmp_0 = asComposeCanvas(recordingCanvas);
      var composeCanvas = tmp_0 instanceof SkiaBackedCanvas ? tmp_0 : THROW_CCE();
      // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.withTracking' call
      var this_0 = $this.f4w_1;
      access$_set_oldDependency__lsok8j(this_0, access$_get_dependency__eau0ww(this_0));
      var tmp0_safe_receiver = access$_get_dependenciesSet__8t5wug(this_0);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        if (tmp0_safe_receiver.om()) {
          var tmp0_elvis_lhs_0 = access$_get_oldDependenciesSet__gb53k7(this_0);
          var tmp_1;
          if (tmp0_elvis_lhs_0 == null) {
            // Inline function 'kotlin.also' call
            var this_1 = mutableScatterSetOf();
            access$_set_oldDependenciesSet__hmq7k5(this_0, this_1);
            tmp_1 = this_1;
          } else {
            tmp_1 = tmp0_elvis_lhs_0;
          }
          var oldSet = tmp_1;
          oldSet.us(tmp0_safe_receiver);
          tmp0_safe_receiver.s1();
        }
      }
      access$_set_trackingInProgress__dxkhgu(this_0, true);
      block(composeCanvas);
      access$_set_trackingInProgress__dxkhgu(this_0, false);
      var tmp1_safe_receiver = access$_get_oldDependency__6kx1q7(this_0);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        onRemovedFromParentLayer(tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = access$_get_oldDependenciesSet__gb53k7(this_0);
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        if (tmp2_safe_receiver.om()) {
          // Inline function 'androidx.collection.ScatterSet.forEach' call
          // Inline function 'kotlin.contracts.contract' call
          var elements = tmp2_safe_receiver.ms_1;
          $l$block: {
            // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
            // Inline function 'kotlin.contracts.contract' call
            var m = tmp2_safe_receiver.ls_1;
            var lastIndex = m.length - 2 | 0;
            var inductionVariable = 0;
            if (inductionVariable <= lastIndex)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var slot = m[i];
                // Inline function 'androidx.collection.maskEmptyOrDeleted' call
                var this_2 = slot;
                var tmp$ret$14 = bitwiseAnd(bitwiseAnd(this_2, shiftLeft(invert(this_2), 7)), new Long(-2139062144, -2139062144));
                if (!equalsLong(tmp$ret$14, new Long(-2139062144, -2139062144))) {
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
                        var it = elements[index];
                        onRemovedFromParentLayer(it);
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
          tmp2_safe_receiver.s1();
        }
      }
    }finally {
      renderNode.h4d();
    }
  }
  function addSubLayer($this, graphicsLayer) {
    if ($this.f4w_1.s4v(graphicsLayer)) {
      onAddedToParentLayer(graphicsLayer);
    }
  }
  function onAddedToParentLayer($this) {
    $this.e4w_1 = $this.e4w_1 + 1 | 0;
  }
  function onRemovedFromParentLayer($this) {
    $this.e4w_1 = $this.e4w_1 - 1 | 0;
    discardContentIfReleasedAndHaveNoParentLayerUsages($this);
  }
  function configureOutlineAndClip($this) {
    if (!$this.y4v_1)
      return Unit_instance;
    var tmp0_elvis_lhs = $this.w4v_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var renderNode = tmp;
    var outlineIsNeeded = $this.y4w_1 || $this.p4w_1 > 0.0;
    if (!outlineIsNeeded) {
      renderNode.f4d(false);
      renderNode.e4d(null);
    } else {
      renderNode.f4d($this.y4w_1);
      var tmpOutline = $this.g53();
      if (tmpOutline instanceof Rectangle) {
        renderNode.a4d(toSkiaRect(tmpOutline.t4m_1), VOID, true);
      } else {
        if (tmpOutline instanceof Rounded) {
          renderNode.c4d(toSkiaRRect(tmpOutline.u4m_1), VOID, true);
        } else {
          if (tmpOutline instanceof Generic) {
            renderNode.e4d(asSkiaPath(tmpOutline.x4m_1), VOID, true);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
    }
    $this.y4v_1 = false;
  }
  function discardContentIfReleasedAndHaveNoParentLayerUsages($this) {
    if ($this.a4x_1 && $this.e4w_1 === 0) {
      // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.removeDependencies' call
      var this_0 = $this.f4w_1;
      var tmp0_safe_receiver = access$_get_dependency__eau0ww(this_0);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        onRemovedFromParentLayer(tmp0_safe_receiver);
        access$_set_dependency__rek8c(this_0, null);
      }
      var tmp1_safe_receiver = access$_get_dependenciesSet__8t5wug(this_0);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var elements = tmp1_safe_receiver.ms_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = tmp1_safe_receiver.ls_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              var tmp$ret$10 = bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144));
              if (!equalsLong(tmp$ret$10, new Long(-2139062144, -2139062144))) {
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
                      var it = elements[index];
                      onRemovedFromParentLayer(it);
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
        tmp1_safe_receiver.s1();
      }
      var tmp0_safe_receiver_0 = $this.w4v_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        tmp0_safe_receiver_0.v29();
      }
      $this.w4v_1 = null;
    }
  }
  function updateLayerProperties($this) {
    var tmp0_safe_receiver = $this.w4v_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp;
      if (requiresLayer($this)) {
        // Inline function 'kotlin.also' call
        var this_0 = Paint_init_$Create$();
        this_0.j41($this.k4w_1);
        var tmp0_safe_receiver_0 = $this.z4w_1;
        this_0.w41(tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.i53());
        var tmp1_safe_receiver = $this.t4w_1;
        this_0.r41(tmp1_safe_receiver == null ? null : asSkiaColorFilter(tmp1_safe_receiver));
        this_0.s41(toSkia($this.s4w_1));
        tmp = this_0;
      } else {
        tmp = null;
      }
      tmp0_safe_receiver.k4c(tmp);
    }
  }
  function requiresLayer($this) {
    var alphaNeedsLayer = $this.k4w_1 < 1.0 && !($this.g4w_1 === Companion_getInstance_37().v4v_1);
    var hasColorFilter = !($this.t4w_1 == null);
    var hasBlendMode = !($this.s4w_1 === Companion_getInstance_12().u4f_1);
    var hasRenderEffect = !($this.z4w_1 == null);
    var offscreenBufferRequested = $this.g4w_1 === Companion_getInstance_37().u4v_1;
    return alphaNeedsLayer || hasColorFilter || hasBlendMode || hasRenderEffect || offscreenBufferRequested;
  }
  function GraphicsLayer$record$lambda(this$0, $density, $layoutDirection, $size, $block) {
    return function (canvas) {
      var tmp = canvas;
      var tmp_0;
      if (this$0.g4w_1 === Companion_getInstance_37().v4v_1) {
        tmp_0 = this$0.k4w_1;
      } else {
        tmp_0 = 1.0;
      }
      tmp.c52_1 = tmp_0;
      var tmp0 = this$0.x4v_1;
      var tmp2 = $density;
      var tmp4 = $layoutDirection;
      var tmp8 = toSize_0($size);
      var tmp10 = this$0;
      // Inline function 'androidx.compose.ui.graphics.drawscope.draw' call
      var block = $block;
      var prevDensity = tmp0.t4u().t3q();
      var prevLayoutDirection = tmp0.t4u().p4u();
      var prevCanvas = tmp0.t4u().d45();
      var prevSize = tmp0.t4u().r3p();
      var prevLayer = tmp0.t4u().s4u();
      // Inline function 'kotlin.apply' call
      var this_0 = tmp0.t4u();
      this_0.q4u(tmp2);
      this_0.o4u(tmp4);
      this_0.l4u(canvas);
      this_0.m4u(tmp8);
      this_0.r4u(tmp10);
      canvas.d4j();
      try {
        block(tmp0);
      }finally {
        canvas.e4j();
        // Inline function 'kotlin.apply' call
        var this_1 = tmp0.t4u();
        this_1.q4u(prevDensity);
        this_1.o4u(prevLayoutDirection);
        this_1.l4u(prevCanvas);
        this_1.m4u(prevSize);
        this_1.r4u(prevLayer);
      }
      return Unit_instance;
    };
  }
  function GraphicsLayer(renderNode) {
    this.w4v_1 = renderNode;
    this.x4v_1 = new CanvasDrawScope();
    this.y4v_1 = true;
    this.z4v_1 = Companion_getInstance_0().j3p_1;
    this.a4w_1 = Companion_getInstance().k3q_1;
    this.b4w_1 = 0.0;
    this.c4w_1 = null;
    this.d4w_1 = null;
    this.e4w_1 = 0;
    this.f4w_1 = new ChildLayerDependenciesTracker();
    this.g4w_1 = Companion_getInstance_37().t4v_1;
    this.h4w_1 = Companion_getInstance_1().u3r_1;
    this.i4w_1 = Companion_getInstance_10().c3s_1;
    this.j4w_1 = Companion_getInstance_0().l3p_1;
    this.k4w_1 = 1.0;
    this.l4w_1 = 1.0;
    this.m4w_1 = 1.0;
    this.n4w_1 = 0.0;
    this.o4w_1 = 0.0;
    this.p4w_1 = 0.0;
    this.q4w_1 = Companion_getInstance_15().m4h_1;
    this.r4w_1 = Companion_getInstance_15().m4h_1;
    this.s4w_1 = Companion_getInstance_12().u4f_1;
    this.t4w_1 = null;
    this.u4w_1 = 0.0;
    this.v4w_1 = 0.0;
    this.w4w_1 = 0.0;
    this.x4w_1 = 8.0;
    this.y4w_1 = false;
    this.z4w_1 = null;
    this.a4x_1 = false;
  }
  protoOf(GraphicsLayer).j53 = function (value) {
    if (!(this.g4w_1 === value)) {
      this.g4w_1 = value;
      updateLayerProperties(this);
    }
  };
  protoOf(GraphicsLayer).k53 = function (value) {
    if (!equals(this.h4w_1, value)) {
      this.h4w_1 = value;
      var tmp0_safe_receiver = this.w4v_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp = Companion_instance;
        var tmp_0 = _IntOffset___get_x__impl__qiqr5o(value);
        var tmp_1 = _IntOffset___get_y__impl__2avpwj(value);
        // Inline function 'androidx.compose.ui.unit.IntSize.width' call
        var this_0 = this.i4w_1;
        // Inline function 'androidx.compose.ui.util.unpackInt1' call
        var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_0);
        var tmp_2 = convertToInt(shiftRight(value_0, 32));
        // Inline function 'androidx.compose.ui.unit.IntSize.height' call
        var this_1 = this.i4w_1;
        // Inline function 'androidx.compose.ui.util.unpackInt2' call
        var value_1 = _IntSize___get_packedValue__impl__uho7jf(this_1);
        var tmp$ret$2 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
        tmp0_safe_receiver.l4c(tmp.f44(tmp_0, tmp_1, tmp_2, tmp$ret$2));
      }
    }
  };
  protoOf(GraphicsLayer).l53 = function (value) {
    if (!equals(this.j4w_1, value)) {
      this.j4w_1 = value;
      var tmp0_safe_receiver = this.w4v_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'androidx.compose.ui.geometry.Offset.x' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_0 = _Offset___get_packedValue__impl__xh2k8q(value);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits = convertToInt(shiftRight(value_0, 32));
        var tmp = floatFromBits(bits);
        // Inline function 'androidx.compose.ui.geometry.Offset.y' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_1 = _Offset___get_packedValue__impl__xh2k8q(value);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_0 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
        var tmp$ret$4 = floatFromBits(bits_0);
        tmp0_safe_receiver.m4c(new Point(tmp, tmp$ret$4));
      }
    }
  };
  protoOf(GraphicsLayer).n4c = function (value) {
    if (!(this.k4w_1 === value)) {
      this.k4w_1 = value;
      var tmp0_safe_receiver = this.w4v_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.n4c(value);
      }
      updateLayerProperties(this);
    }
  };
  protoOf(GraphicsLayer).o4c = function (value) {
    if (!(this.l4w_1 === value)) {
      this.l4w_1 = value;
      var tmp0_safe_receiver = this.w4v_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.o4c(value);
      }
    }
  };
  protoOf(GraphicsLayer).p4c = function (value) {
    if (!(this.m4w_1 === value)) {
      this.m4w_1 = value;
      var tmp0_safe_receiver = this.w4v_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.p4c(value);
      }
    }
  };
  protoOf(GraphicsLayer).q4c = function (value) {
    if (!(this.n4w_1 === value)) {
      this.n4w_1 = value;
      var tmp0_safe_receiver = this.w4v_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.q4c(value);
      }
    }
  };
  protoOf(GraphicsLayer).r4c = function (value) {
    if (!(this.o4w_1 === value)) {
      this.o4w_1 = value;
      var tmp0_safe_receiver = this.w4v_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.r4c(value);
      }
    }
  };
  protoOf(GraphicsLayer).s4c = function (value) {
    if (!(this.p4w_1 === value)) {
      this.p4w_1 = value;
      var tmp0_safe_receiver = this.w4v_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.s4c(value);
      }
      this.y4v_1 = true;
      configureOutlineAndClip(this);
    }
  };
  protoOf(GraphicsLayer).m53 = function (value) {
    if (!equals(this.q4w_1, value)) {
      this.q4w_1 = value;
      var tmp0_safe_receiver = this.w4v_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.t4c(toArgb(value));
      }
    }
  };
  protoOf(GraphicsLayer).n53 = function (value) {
    if (!equals(this.r4w_1, value)) {
      this.r4w_1 = value;
      var tmp0_safe_receiver = this.w4v_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.u4c(toArgb(value));
      }
    }
  };
  protoOf(GraphicsLayer).y4t = function (value) {
    if (!(this.s4w_1 === value)) {
      this.s4w_1 = value;
      updateLayerProperties(this);
    }
  };
  protoOf(GraphicsLayer).w4t = function (value) {
    if (!equals(this.t4w_1, value)) {
      this.t4w_1 = value;
      updateLayerProperties(this);
    }
  };
  protoOf(GraphicsLayer).g53 = function () {
    var tmpOutline = this.c4w_1;
    var tmpPath = this.d4w_1;
    var tmp;
    if (!(tmpOutline == null)) {
      tmp = tmpOutline;
    } else if (!(tmpPath == null)) {
      // Inline function 'kotlin.also' call
      var this_0 = new Generic(tmpPath);
      this.c4w_1 = this_0;
      tmp = this_0;
    } else {
      // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.resolveOutlinePosition' call
      var layerSize = toSize_0(this.i4w_1);
      var rRectTopLeft = this.z4v_1;
      var rRectSize = this.a4w_1;
      var tmp_0;
      // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
      if (equalsLong(_Size___get_packedValue__impl__7rlt1o(rRectSize), new Long(2143289344, 2143289344))) {
        tmp_0 = layerSize;
      } else {
        tmp_0 = rRectSize;
      }
      var outlineSize = tmp_0;
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(rRectTopLeft);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      var left = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(rRectTopLeft);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      var top = floatFromBits(bits_0);
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_1 = _Size___get_packedValue__impl__7rlt1o(outlineSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_1 = convertToInt(shiftRight(value_1, 32));
      var right = left + floatFromBits(bits_1);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_2 = _Size___get_packedValue__impl__7rlt1o(outlineSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      var bottom = top + floatFromBits(bits_2);
      var cornerRadius = this.b4w_1;
      var tmp_1;
      if (cornerRadius > 0.0) {
        // Inline function 'androidx.compose.ui.geometry.CornerRadius' call
        // Inline function 'androidx.compose.ui.util.packFloats' call
        var v1 = fromInt(toRawBits(cornerRadius));
        var v2 = fromInt(toRawBits(cornerRadius));
        var tmp$ret$22 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
        var tmp$ret$21 = _CornerRadius___init__impl__ojmabe(tmp$ret$22);
        tmp_1 = new Rounded(RoundRect(left, top, right, bottom, tmp$ret$21));
      } else {
        tmp_1 = new Rectangle(new Rect_0(left, top, right, bottom));
      }
      // Inline function 'kotlin.also' call
      var this_1 = tmp_1;
      this.c4w_1 = this_1;
      tmp = this_1;
    }
    return tmp;
  };
  protoOf(GraphicsLayer).d4x = function (path) {
    resetOutlineParams(this);
    this.d4w_1 = path;
    configureOutlineAndClip(this);
  };
  protoOf(GraphicsLayer).c4x = function (topLeft, size, cornerRadius) {
    if (!equals(this.z4v_1, topLeft) || !equals(this.a4w_1, size) || !(this.b4w_1 === cornerRadius) || !(this.d4w_1 == null)) {
      resetOutlineParams(this);
      this.z4v_1 = topLeft;
      this.a4w_1 = size;
      this.b4w_1 = cornerRadius;
      configureOutlineAndClip(this);
    }
  };
  protoOf(GraphicsLayer).e4x = function (topLeft, size) {
    this.c4x(topLeft, size, 0.0);
  };
  protoOf(GraphicsLayer).v4c = function (value) {
    if (!(this.u4w_1 === value)) {
      this.u4w_1 = value;
      var tmp0_safe_receiver = this.w4v_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.v4c(value);
      }
    }
  };
  protoOf(GraphicsLayer).w4c = function (value) {
    if (!(this.v4w_1 === value)) {
      this.v4w_1 = value;
      var tmp0_safe_receiver = this.w4v_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.w4c(value);
      }
    }
  };
  protoOf(GraphicsLayer).x4c = function (value) {
    if (!(this.w4w_1 === value)) {
      this.w4w_1 = value;
      var tmp0_safe_receiver = this.w4v_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.x4c(value);
      }
    }
  };
  protoOf(GraphicsLayer).y4c = function (value) {
    if (!(this.x4w_1 === value)) {
      this.x4w_1 = value;
      var tmp0_safe_receiver = this.w4v_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.y4c(value);
      }
    }
  };
  protoOf(GraphicsLayer).f4d = function (value) {
    if (!(this.y4w_1 === value)) {
      this.y4w_1 = value;
      this.y4v_1 = true;
      configureOutlineAndClip(this);
    }
  };
  protoOf(GraphicsLayer).o53 = function (value) {
    if (!equals(this.z4w_1, value)) {
      this.z4w_1 = value;
      updateLayerProperties(this);
    }
  };
  protoOf(GraphicsLayer).p53 = function (density, layoutDirection, size, block) {
    _set_size__9twho6(this, size);
    recordWithTracking(this, GraphicsLayer$record$lambda(this, density, layoutDirection, size, block));
  };
  protoOf(GraphicsLayer).b4x = function (canvas, parentLayer) {
    if (this.a4x_1)
      return Unit_instance;
    configureOutlineAndClip(this);
    if (parentLayer == null)
      null;
    else {
      addSubLayer(parentLayer, this);
    }
    var tmp1_safe_receiver = this.w4v_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.i4d(get_nativeCanvas(canvas));
    }
  };
  protoOf(GraphicsLayer).z52 = function () {
    if (!this.a4x_1) {
      this.a4x_1 = true;
      discardContentIfReleasedAndHaveNoParentLayerUsages(this);
    }
  };
  function toBitmap(_this__u8e3s4) {
    var bitmap = Companion_getInstance_11().v3s(_this__u8e3s4);
    bitmap.j3t();
    return bitmap;
  }
  //region block: post-declaration
  protoOf(CanvasDrawScope).u4u = drawRect$default;
  protoOf(CanvasDrawScope).v4u = drawRect$default_0;
  protoOf(CanvasDrawScope).x4u = drawImage$default;
  protoOf(CanvasDrawScope).y4u = drawRoundRect$default;
  protoOf(CanvasDrawScope).a4v = drawCircle$default;
  protoOf(CanvasDrawScope).b4v = drawPath$default;
  protoOf(CanvasDrawScope).c4v = drawPath$default_0;
  protoOf(CanvasDrawScope).d4v = get_center_0;
  protoOf(CanvasDrawScope).r3p = get_size;
  protoOf(CanvasDrawScope).u3q = toPx;
  protoOf(CanvasDrawScope).w3q = toPx_0;
  protoOf(CanvasDrawScope).v3q = roundToPx;
  protoOf(CanvasDrawScope).b3r = toDp;
  protoOf(CanvasDrawScope).c3r = toDp_0;
  protoOf(CanvasDrawScope).a3r = toDp_1;
  protoOf(CanvasDrawScope).d3r = toSize;
  protoOf(asDrawTransform$1).g4v = clipPath$default_0;
  protoOf(EmptyCanvas).n4j = clipRect$default_0;
  protoOf(EmptyCanvas).p4j = clipPath$default;
  protoOf(EmptyCanvas).i4j = clipRect;
  protoOf(EmptyCanvas).k4j = clipRect$default;
  protoOf(SkiaBackedCanvas).n4j = clipRect$default_0;
  protoOf(SkiaBackedCanvas).p4j = clipPath$default;
  protoOf(SkiaBackedCanvas).i4j = clipRect;
  protoOf(SkiaBackedCanvas).k4j = clipRect$default;
  protoOf(SkiaBackedPath).v4n = addRect$default;
  protoOf(SkiaBackedPath).w4m = addRoundRect$default;
  protoOf(SkiaBackedPath).y4n = addPath$default;
  //endregion
  //region block: init
  Companion_instance_2 = new Companion_0();
  Companion_instance_5 = new Companion_3();
  Companion_instance_8 = new Companion_6();
  Companion_instance_18 = new Companion_16();
  Companion_instance_19 = new Companion_17();
  Companion_instance_20 = new Companion_18();
  EmptyCanvas_instance = new EmptyCanvas();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CanvasDrawScope;
  _.$_$.b = DrawScope;
  _.$_$.c = Stroke;
  _.$_$.d = drawLayer;
  _.$_$.e = setOutline;
  _.$_$.f = BitmapPainter;
  _.$_$.g = Painter;
  _.$_$.h = PathParser;
  _.$_$.i = toPath;
  _.$_$.j = BlendModeColorFilter;
  _.$_$.k = BlendMode;
  _.$_$.l = Canvas_0;
  _.$_$.m = ColorProducer;
  _.$_$.n = Color_0;
  _.$_$.o = Color_3;
  _.$_$.p = Color_2;
  _.$_$.q = Color_1;
  _.$_$.r = Color;
  _.$_$.s = ImageBitmapConfig;
  _.$_$.t = ImageBitmap;
  _.$_$.u = Matrix;
  _.$_$.v = Generic;
  _.$_$.w = Rectangle;
  _.$_$.x = Rounded;
  _.$_$.y = Paint;
  _.$_$.z = PathFillType;
  _.$_$.a1 = PathMeasure;
  _.$_$.b1 = Path_0;
  _.$_$.c1 = get_RectangleShape;
  _.$_$.d1 = ShaderBrush;
  _.$_$.e1 = Shadow;
  _.$_$.f1 = SkiaGraphicsContext;
  _.$_$.g1 = SolidColor;
  _.$_$.h1 = StrokeCap;
  _.$_$.i1 = StrokeJoin;
  _.$_$.j1 = TileMode;
  _.$_$.k1 = set_alphaMultiplier;
  _.$_$.l1 = asComposeCanvas;
  _.$_$.m1 = asSkiaPath;
  _.$_$.n1 = compositeOver;
  _.$_$.o1 = computeCubicVerticalBounds;
  _.$_$.p1 = drawOutline;
  _.$_$.q1 = drawOutline_0;
  _.$_$.r1 = evaluateCubic;
  _.$_$.s1 = findFirstCubicRoot;
  _.$_$.t1 = isIdentity;
  _.$_$.u1 = lerp_0;
  _.$_$.v1 = get_nativeCanvas;
  _.$_$.w1 = prepareTransformationMatrix;
  _.$_$.x1 = toArgb;
  _.$_$.y1 = toComposeImageBitmap;
  _.$_$.z1 = toComposeRect;
  _.$_$.a2 = toSkiaRRect;
  _.$_$.b2 = toSkiaRect;
  _.$_$.c2 = ColorSpaces_getInstance;
  _.$_$.d2 = Companion_getInstance_35;
  _.$_$.e2 = Fill_getInstance;
  _.$_$.f2 = Companion_getInstance_37;
  _.$_$.g2 = Companion_getInstance_12;
  _.$_$.h2 = Companion_instance_2;
  _.$_$.i2 = Companion_getInstance_14;
  _.$_$.j2 = Companion_getInstance_15;
  _.$_$.k2 = Companion_instance_5;
  _.$_$.l2 = Companion_getInstance_18;
  _.$_$.m2 = Companion_getInstance_20;
  _.$_$.n2 = Companion_getInstance_21;
  _.$_$.o2 = Companion_getInstance_22;
  _.$_$.p2 = Companion_getInstance_23;
  _.$_$.q2 = Companion_getInstance_24;
  _.$_$.r2 = Companion_getInstance_25;
  _.$_$.s2 = Companion_getInstance_26;
  _.$_$.t2 = drawCircle$default;
  _.$_$.u2 = drawImage$default;
  _.$_$.v2 = drawPath$default_0;
  _.$_$.w2 = drawPath$default;
  _.$_$.x2 = drawRect$default;
  _.$_$.y2 = drawRect$default_0;
  _.$_$.z2 = drawRoundRect$default;
  _.$_$.a3 = BlendMode__hashCode_impl_93ceri;
  _.$_$.b3 = BlendMode__toString_impl_uuibkd;
  _.$_$.c3 = _Color___init__impl__r6cqi2;
  _.$_$.d3 = _Color___get_alpha__impl__wcfyv1;
  _.$_$.e3 = _Color___get_blue__impl__xwez13;
  _.$_$.f3 = _Color___get_colorSpace__impl__jqqozk;
  _.$_$.g3 = Color__convert_impl_so5m8t;
  _.$_$.h3 = _Color___get_green__impl__bta9rs;
  _.$_$.i3 = Color__hashCode_impl_vjyivj;
  _.$_$.j3 = _Color___get_red__impl__cwrsk6;
  _.$_$.k3 = Color__toString_impl_hpzmaq;
  _.$_$.l3 = _Color___get_value__impl__1pls5m;
  _.$_$.m3 = _Matrix___init__impl__q3kp4w;
  _.$_$.n3 = Matrix__hashCode_impl_s9ntm9;
  _.$_$.o3 = Matrix__map_impl_7meu7m;
  _.$_$.p3 = Matrix__map_impl_7meu7m_0;
  _.$_$.q3 = Matrix__reset_impl_4l49i7;
  _.$_$.r3 = Matrix__rotateZ_impl_2g2pf5;
  _.$_$.s3 = Matrix__scale_impl_6w89a4;
  _.$_$.t3 = _Matrix___get_values__impl__fblr7b;
  _.$_$.u3 = PathFillType__hashCode_impl_pdqo4w;
  _.$_$.v3 = StrokeCap__hashCode_impl_posxk8;
  _.$_$.w3 = StrokeJoin__hashCode_impl_3pyh8w;
  _.$_$.x3 = Color__copy$default_impl_ectz3s;
  _.$_$.y3 = Matrix__translate$default_impl_10t8ql;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-graphics.js.map
