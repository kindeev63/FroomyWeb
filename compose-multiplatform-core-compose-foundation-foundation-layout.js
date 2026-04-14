(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-ui-ui-unit.js', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui.js', './androidx-collection-collection.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./androidx-collection-collection.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] = factory(typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['androidx-collection-collection']);
  }
}(function (_, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui, kotlin_androidx_collection_collection) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var protoOf = kotlin_kotlin.$_$.fa;
  var initMetadataForInterface = kotlin_kotlin.$_$.r9;
  var Unit_instance = kotlin_kotlin.$_$.n;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var initMetadataForClass = kotlin_kotlin.$_$.n9;
  var VOID = kotlin_kotlin.$_$.c;
  var roundToInt = kotlin_kotlin.$_$.ka;
  var isNaN_0 = kotlin_kotlin.$_$.wd;
  var get_lastIndex = kotlin_kotlin.$_$.p5;
  var initMetadataForObject = kotlin_kotlin.$_$.t9;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.t1;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.h1;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.s1;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.p6;
  var get_currentCompositeKeyHashCode = kotlin_androidx_compose_runtime_runtime.$_$.d1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.a6;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.l6;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.g1;
  var Applier = kotlin_androidx_compose_runtime_runtime.$_$.h;
  var isInterface = kotlin_kotlin.$_$.w9;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.e2;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.h2;
  var Updater__reconcile_impl_1mfi6g = kotlin_androidx_compose_runtime_runtime.$_$.g2;
  var Updater__init_impl_uaeges = kotlin_androidx_compose_runtime_runtime.$_$.f2;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var MutableScatterMap = kotlin_androidx_collection_collection.$_$.n;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.o6;
  var THROW_CCE = kotlin_kotlin.$_$.ld;
  var Placeable = kotlin_org_jetbrains_compose_ui_ui.$_$.f2;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var _Constraints___get_value__impl__3ah2ax = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var Long = kotlin_kotlin.$_$.gd;
  var bitwiseAnd = kotlin_kotlin.$_$.a8;
  var _Constraints___init__impl__v8ud31 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var toString = kotlin_kotlin.$_$.ha;
  var hashCode = kotlin_kotlin.$_$.m9;
  var getBooleanHashCode = kotlin_kotlin.$_$.h9;
  var equals = kotlin_kotlin.$_$.f9;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.b2;
  var fromInt = kotlin_kotlin.$_$.i8;
  var shiftLeft = kotlin_kotlin.$_$.o8;
  var bitwiseOr = kotlin_kotlin.$_$.b8;
  var _IntSize___init__impl__emcjft = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.u5;
  var ParentDataModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.c3;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var FunctionAdapter = kotlin_kotlin.$_$.t8;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.y1;
  var Companion_getInstance_1 = kotlin_androidx_compose_runtime_runtime.$_$.a2;
  var SubcomposeLayout = kotlin_org_jetbrains_compose_ui_ui.$_$.i2;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o1;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var Constraints__toString_impl_37yskr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var Constraints__hashCode_impl_ij7484 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var ensureNotNull = kotlin_kotlin.$_$.ud;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var Dp__toString_impl_kcddez = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.b3;
  var offset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d1;
  var constrainWidth = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z;
  var constrainHeight = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.a3;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var androidx_compose_ui_Modifier_Node$stableprop_getter = kotlin_org_jetbrains_compose_ui_ui.$_$.y5;
  var multiply = kotlin_kotlin.$_$.l8;
  var numberToLong = kotlin_kotlin.$_$.n8;
  var subtract = kotlin_kotlin.$_$.r8;
  var compare = kotlin_kotlin.$_$.d8;
  var toNumber = kotlin_kotlin.$_$.s8;
  var get_sign = kotlin_kotlin.$_$.ma;
  var add = kotlin_kotlin.$_$.z7;
  var convertToInt = kotlin_kotlin.$_$.e8;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.k4;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.l4;
  var initMetadataForCompanion = kotlin_kotlin.$_$.o9;
  var getNumberHashCode = kotlin_kotlin.$_$.j9;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e3;
  var shiftRight = kotlin_kotlin.$_$.q8;
  var _IntOffset___init__impl__rq8h7b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u2;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var getKClassFromExpression = kotlin_kotlin.$_$.bb;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var Enum = kotlin_kotlin.$_$.ad;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var coerceIn = kotlin_kotlin.$_$.wa;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a1;
  var _DpSize___get_width__impl__o3d5gt = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var _DpSize___get_height__impl__5xueo2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var _Constraints___get_hasFixedWidth__impl__4p17wc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var _Constraints___get_hasFixedHeight__impl__y56fxx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.l1;
  var charSequenceLength = kotlin_kotlin.$_$.a9;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.p2;
  var coerceAtLeast = kotlin_kotlin.$_$.qa;
  var invalidateMeasurement = kotlin_org_jetbrains_compose_ui_ui.$_$.u3;
  var traverseDescendants = kotlin_org_jetbrains_compose_ui_ui.$_$.c4;
  var TraverseDescendantsAction_SkipSubtreeAndContinueTraversal_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.u6;
  var traverseAncestors = kotlin_org_jetbrains_compose_ui_ui.$_$.b4;
  var TraversableNode = kotlin_org_jetbrains_compose_ui_ui.$_$.n3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var get_LocalPlatformWindowInsets = kotlin_org_jetbrains_compose_ui_ui.$_$.h4;
  //endregion
  //region block: pre-declaration
  function get_spacing() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  initMetadataForInterface(Horizontal, 'Horizontal');
  function get_spacing_0() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  initMetadataForInterface(Vertical, 'Vertical');
  initMetadataForClass(Arrangement$Start$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$End$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$Top$1, VOID, VOID, VOID, [Vertical]);
  initMetadataForClass(Arrangement$Bottom$1, VOID, VOID, VOID, [Vertical]);
  initMetadataForClass(Arrangement$Center$1, VOID, VOID, VOID, [Horizontal, Vertical]);
  initMetadataForClass(Arrangement$SpaceEvenly$1, VOID, VOID, VOID, [Horizontal, Vertical]);
  initMetadataForClass(Arrangement$SpaceBetween$1, VOID, VOID, VOID, [Horizontal, Vertical]);
  initMetadataForClass(Arrangement$SpaceAround$1, VOID, VOID, VOID, [Horizontal, Vertical]);
  initMetadataForObject(Arrangement, 'Arrangement');
  initMetadataForClass(BoxMeasurePolicy, 'BoxMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForObject(BoxScopeInstance, 'BoxScopeInstance');
  initMetadataForClass(BoxChildDataNode, 'BoxChildDataNode', VOID, Node, [ParentDataModifierNode]);
  initMetadataForClass(sam$androidx_compose_ui_layout_MeasurePolicy$0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', VOID, VOID, [MeasurePolicy, FunctionAdapter]);
  initMetadataForClass(BoxWithConstraintsScopeImpl, 'BoxWithConstraintsScopeImpl');
  function createConstraints$default(mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing, $super) {
    isPrioritizing = isPrioritizing === VOID ? false : isPrioritizing;
    return $super === VOID ? this.w9t(mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) : $super.w9t.call(this, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing).n3q_1;
  }
  initMetadataForInterface(RowColumnMeasurePolicy, 'RowColumnMeasurePolicy');
  initMetadataForClass(ColumnMeasurePolicy, 'ColumnMeasurePolicy', VOID, VOID, [MeasurePolicy, RowColumnMeasurePolicy]);
  initMetadataForObject(ColumnScopeInstance, 'ColumnScopeInstance');
  initMetadataForClass(PaddingValuesImpl, 'PaddingValuesImpl', PaddingValuesImpl);
  initMetadataForClass(PaddingElement, 'PaddingElement', VOID, ModifierNodeElement);
  initMetadataForClass(PaddingValuesElement, 'PaddingValuesElement', VOID, ModifierNodeElement);
  initMetadataForClass(PaddingNode, 'PaddingNode', VOID, Node, [LayoutModifierNode]);
  initMetadataForClass(PaddingValuesModifier, 'PaddingValuesModifier', VOID, Node, [LayoutModifierNode]);
  initMetadataForClass(RowMeasurePolicy, 'RowMeasurePolicy', VOID, VOID, [MeasurePolicy, RowColumnMeasurePolicy]);
  initMetadataForObject(RowScopeInstance, 'RowScopeInstance');
  initMetadataForClass(RowColumnParentData, 'RowColumnParentData');
  initMetadataForCompanion(Companion);
  initMetadataForClass(FillElement, 'FillElement', VOID, ModifierNodeElement);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(WrapContentElement, 'WrapContentElement', VOID, ModifierNodeElement);
  initMetadataForClass(SizeElement, 'SizeElement', VOID, ModifierNodeElement);
  initMetadataForClass(FillNode, 'FillNode', VOID, Node, [LayoutModifierNode]);
  initMetadataForClass(Direction, 'Direction', VOID, Enum);
  initMetadataForClass(WrapContentNode, 'WrapContentNode', VOID, Node, [LayoutModifierNode]);
  initMetadataForClass(SizeNode, 'SizeNode', VOID, Node, [LayoutModifierNode]);
  initMetadataForObject(SpacerMeasurePolicy, 'SpacerMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(FixedIntInsets, 'FixedIntInsets');
  initMetadataForClass(LimitInsets, 'LimitInsets');
  initMetadataForClass(UnionInsets, 'UnionInsets');
  initMetadataForClass(ExcludeInsets, 'ExcludeInsets');
  initMetadataForClass(InsetsPaddingValues, 'InsetsPaddingValues');
  initMetadataForClass(InsetsPaddingModifierElement, 'InsetsPaddingModifierElement', VOID, ModifierNodeElement);
  initMetadataForClass(InsetsConsumingModifierNode, 'InsetsConsumingModifierNode', VOID, Node, [TraversableNode]);
  initMetadataForClass(InsetsPaddingModifierNode, 'InsetsPaddingModifierNode', VOID, InsetsConsumingModifierNode, [LayoutModifierNode]);
  initMetadataForClass(ConsumedInsetsModifierElement, 'ConsumedInsetsModifierElement', VOID, ModifierNodeElement);
  initMetadataForClass(ConsumedInsetsModifierNode, 'ConsumedInsetsModifierNode', VOID, InsetsConsumingModifierNode);
  initMetadataForClass(toWindowInsets$1);
  //endregion
  var androidx_compose_foundation_layout_Arrangement_Absolute$stable;
  var androidx_compose_foundation_layout_Arrangement_SpacedAligned$stable;
  var androidx_compose_foundation_layout_Arrangement$stable;
  function Horizontal() {
  }
  function Vertical() {
  }
  function Arrangement$Start$1() {
  }
  protoOf(Arrangement$Start$1).u9r = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().f9s(sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().e9s(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$Start$1).toString = function () {
    return 'Arrangement#Start';
  };
  function Arrangement$End$1() {
  }
  protoOf(Arrangement$End$1).u9r = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().e9s(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().f9s(sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$End$1).toString = function () {
    return 'Arrangement#End';
  };
  function Arrangement$Top$1() {
  }
  protoOf(Arrangement$Top$1).v9r = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().f9s(sizes, outPositions, false);
  };
  protoOf(Arrangement$Top$1).toString = function () {
    return 'Arrangement#Top';
  };
  function Arrangement$Bottom$1() {
  }
  protoOf(Arrangement$Bottom$1).v9r = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().e9s(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Bottom$1).toString = function () {
    return 'Arrangement#Bottom';
  };
  function Arrangement$Center$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.g9s_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$Center$1).t9r = function () {
    return this.g9s_1;
  };
  protoOf(Arrangement$Center$1).u9r = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().h9s(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().h9s(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$Center$1).v9r = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().h9s(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Center$1).toString = function () {
    return 'Arrangement#Center';
  };
  function Arrangement$SpaceEvenly$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.i9s_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceEvenly$1).t9r = function () {
    return this.i9s_1;
  };
  protoOf(Arrangement$SpaceEvenly$1).u9r = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().j9s(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().j9s(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceEvenly$1).v9r = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().j9s(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceEvenly$1).toString = function () {
    return 'Arrangement#SpaceEvenly';
  };
  function Arrangement$SpaceBetween$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.k9s_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceBetween$1).t9r = function () {
    return this.k9s_1;
  };
  protoOf(Arrangement$SpaceBetween$1).u9r = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().l9s(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().l9s(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceBetween$1).v9r = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().l9s(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceBetween$1).toString = function () {
    return 'Arrangement#SpaceBetween';
  };
  function Arrangement$SpaceAround$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.m9s_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceAround$1).t9r = function () {
    return this.m9s_1;
  };
  protoOf(Arrangement$SpaceAround$1).u9r = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().n9s(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().n9s(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceAround$1).v9r = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().n9s(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceAround$1).toString = function () {
    return 'Arrangement#SpaceAround';
  };
  function Arrangement() {
    Arrangement_instance = this;
    var tmp = this;
    tmp.w9r_1 = new Arrangement$Start$1();
    var tmp_0 = this;
    tmp_0.x9r_1 = new Arrangement$End$1();
    var tmp_1 = this;
    tmp_1.y9r_1 = new Arrangement$Top$1();
    var tmp_2 = this;
    tmp_2.z9r_1 = new Arrangement$Bottom$1();
    var tmp_3 = this;
    tmp_3.a9s_1 = new Arrangement$Center$1();
    var tmp_4 = this;
    tmp_4.b9s_1 = new Arrangement$SpaceEvenly$1();
    var tmp_5 = this;
    tmp_5.c9s_1 = new Arrangement$SpaceBetween$1();
    var tmp_6 = this;
    tmp_6.d9s_1 = new Arrangement$SpaceAround$1();
  }
  protoOf(Arrangement).e9s = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var current = totalSize - consumedSize | 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        outPosition[_unary__edvuaz] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          var it = size[i];
          outPosition[i] = current;
          current = current + it | 0;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).f9s = function (size, outPosition, reverseInput) {
    var current = 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = size.length;
      while (inductionVariable < last) {
        var item = size[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        outPosition[_unary__edvuaz] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_0 = size.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          var it = size[i];
          outPosition[i] = current;
          current = current + it | 0;
        }
         while (0 <= inductionVariable_0);
    }
  };
  protoOf(Arrangement).h9s = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var current = (totalSize - consumedSize | 0) / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        var this_0 = current;
        var tmp;
        if (isNaN_0(this_0)) {
          tmp = 0;
        } else {
          // Inline function 'kotlin.math.roundToInt' call
          tmp = roundToInt(this_0);
        }
        outPosition[_unary__edvuaz] = tmp;
        current = current + item;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          var this_1 = current;
          var tmp_0;
          if (isNaN_0(this_1)) {
            tmp_0 = 0;
          } else {
            // Inline function 'kotlin.math.roundToInt' call
            tmp_0 = roundToInt(this_1);
          }
          outPosition[i] = tmp_0;
          current = current + it;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).j9s = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var gapSize = (totalSize - consumedSize | 0) / (size.length + 1 | 0);
    var current = gapSize;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        var this_0 = current;
        var tmp;
        if (isNaN_0(this_0)) {
          tmp = 0;
        } else {
          // Inline function 'kotlin.math.roundToInt' call
          tmp = roundToInt(this_0);
        }
        outPosition[_unary__edvuaz] = tmp;
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          var this_1 = current;
          var tmp_0;
          if (isNaN_0(this_1)) {
            tmp_0 = 0;
          } else {
            // Inline function 'kotlin.math.roundToInt' call
            tmp_0 = roundToInt(this_1);
          }
          outPosition[i] = tmp_0;
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).l9s = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (size.length === 0)
      return Unit_instance;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = get_lastIndex(size);
    var noOfGaps = Math.max(a, 1);
    var gapSize = (totalSize - consumedSize | 0) / noOfGaps;
    var current = 0.0;
    if (reverseInput && size.length === 1) {
      current = gapSize;
    }
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        var this_0 = current;
        var tmp;
        if (isNaN_0(this_0)) {
          tmp = 0;
        } else {
          // Inline function 'kotlin.math.roundToInt' call
          tmp = roundToInt(this_0);
        }
        outPosition[_unary__edvuaz] = tmp;
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          var this_1 = current;
          var tmp_0;
          if (isNaN_0(this_1)) {
            tmp_0 = 0;
          } else {
            // Inline function 'kotlin.math.roundToInt' call
            tmp_0 = roundToInt(this_1);
          }
          outPosition[i] = tmp_0;
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).n9s = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(size.length === 0)) {
      tmp = (totalSize - consumedSize | 0) / size.length;
    } else {
      tmp = 0.0;
    }
    var gapSize = tmp;
    var current = gapSize / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        var this_0 = current;
        var tmp_0;
        if (isNaN_0(this_0)) {
          tmp_0 = 0;
        } else {
          // Inline function 'kotlin.math.roundToInt' call
          tmp_0 = roundToInt(this_0);
        }
        outPosition[_unary__edvuaz] = tmp_0;
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          var this_1 = current;
          var tmp_1;
          if (isNaN_0(this_1)) {
            tmp_1 = 0;
          } else {
            // Inline function 'kotlin.math.roundToInt' call
            tmp_1 = roundToInt(this_1);
          }
          outPosition[i] = tmp_1;
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  var Arrangement_instance;
  function Arrangement_getInstance() {
    if (Arrangement_instance == null)
      new Arrangement();
    return Arrangement_instance;
  }
  function get_Cache1() {
    _init_properties_Box_kt__tvzvdl();
    return Cache1;
  }
  var Cache1;
  function get_Cache2() {
    _init_properties_Box_kt__tvzvdl();
    return Cache2;
  }
  var Cache2;
  var DefaultBoxMeasurePolicy;
  function get_EmptyBoxMeasurePolicy() {
    _init_properties_Box_kt__tvzvdl();
    return EmptyBoxMeasurePolicy;
  }
  var EmptyBoxMeasurePolicy;
  var androidx_compose_foundation_layout_BoxScopeInstance$stable;
  function Box(modifier, $composer, $changed) {
    _init_properties_Box_kt__tvzvdl();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.g20(-211209833);
    sourceInformation($composer_0, 'C(Box)233@9541L66:Box.kt#2w3rfo');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w20(modifier) ? 4 : 2);
    if ($composer_0.d21(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-211209833, $dirty, -1, 'androidx.compose.foundation.layout.Box (Box.kt:232)');
      }
      var tmp2 = get_EmptyBoxMeasurePolicy();
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 544976794, 'CC(Layout)P(1)124@5019L27,127@5185L389:Layout.kt#80mrfh');
      if (!((0 & 1) === 0))
        modifier_0 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_1, 0).hashCode();
      var materialized = materialize($composer_1, modifier_0);
      var localMap = $composer_1.f21();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance().d7s_1;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, 1405779621, 'CC(ReusableComposeNode):Composables.kt#9igjgp');
      var tmp = $composer_2.t1z();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_2.n20();
      if ($composer_2.u1z()) {
        $composer_2.o20(factory);
      } else {
        $composer_2.p20();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp2, Companion_getInstance().i7s_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance().h7s_1);
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance().m7s_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance().f7s_1);
      Updater__init_impl_uaeges($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance().l7s_1);
      $composer_2.q20();
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
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
      tmp0_safe_receiver.k2m(Box$lambda(modifier, $changed));
    }
  }
  function cacheFor(propagate) {
    _init_properties_Box_kt__tvzvdl();
    // Inline function 'kotlin.apply' call
    var this_0 = new MutableScatterMap(9);
    this_0.gq(Companion_getInstance_0().h60_1, new BoxMeasurePolicy(Companion_getInstance_0().h60_1, propagate));
    this_0.gq(Companion_getInstance_0().i60_1, new BoxMeasurePolicy(Companion_getInstance_0().i60_1, propagate));
    this_0.gq(Companion_getInstance_0().j60_1, new BoxMeasurePolicy(Companion_getInstance_0().j60_1, propagate));
    this_0.gq(Companion_getInstance_0().k60_1, new BoxMeasurePolicy(Companion_getInstance_0().k60_1, propagate));
    this_0.gq(Companion_getInstance_0().l60_1, new BoxMeasurePolicy(Companion_getInstance_0().l60_1, propagate));
    this_0.gq(Companion_getInstance_0().m60_1, new BoxMeasurePolicy(Companion_getInstance_0().m60_1, propagate));
    this_0.gq(Companion_getInstance_0().n60_1, new BoxMeasurePolicy(Companion_getInstance_0().n60_1, propagate));
    this_0.gq(Companion_getInstance_0().o60_1, new BoxMeasurePolicy(Companion_getInstance_0().o60_1, propagate));
    this_0.gq(Companion_getInstance_0().p60_1, new BoxMeasurePolicy(Companion_getInstance_0().p60_1, propagate));
    return this_0;
  }
  function BoxMeasurePolicy$measure$lambda($this$layout) {
    return Unit_instance;
  }
  function BoxMeasurePolicy$measure$lambda_0($placeable, $measurable, $this_measure, $boxWidth, $boxHeight, this$0) {
    return function ($this$layout) {
      placeInBox($this$layout, $placeable, $measurable, $this_measure.p4u(), $boxWidth, $boxHeight, this$0.o9s_1);
      return Unit_instance;
    };
  }
  function BoxMeasurePolicy$measure$lambda_1($placeables, $measurables, $this_measure, $boxWidth, $boxHeight, this$0) {
    return function ($this$layout) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        if (!(item instanceof Placeable))
          THROW_CCE();
        var measurable = $measurables.m(_unary__edvuaz);
        placeInBox($this$layout, item, measurable, $this_measure.p4u(), $boxWidth._v, $boxHeight._v, this$0.o9s_1);
      }
      return Unit_instance;
    };
  }
  function BoxMeasurePolicy(alignment, propagateMinConstraints) {
    this.o9s_1 = alignment;
    this.p9s_1 = propagateMinConstraints;
  }
  protoOf(BoxMeasurePolicy).q7g = function (_this__u8e3s4, measurables, constraints) {
    if (measurables.n()) {
      var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      return _this__u8e3s4.i6c(tmp, tmp_0, VOID, BoxMeasurePolicy$measure$lambda);
    }
    var tmp_1;
    if (this.p9s_1) {
      tmp_1 = constraints;
    } else {
      // Inline function 'androidx.compose.ui.unit.Constraints.copyMaxDimensions' call
      tmp_1 = _Constraints___init__impl__v8ud31(bitwiseAnd(_Constraints___get_value__impl__3ah2ax(constraints), new Long(3, -2)));
    }
    var contentConstraints = tmp_1;
    if (measurables.l() === 1) {
      var measurable = measurables.m(0);
      var boxWidth;
      var boxHeight;
      var placeable;
      if (!get_matchesParentSize(measurable)) {
        placeable = measurable.c6c(contentConstraints);
        var tmp0 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
        // Inline function 'kotlin.math.max' call
        var b = placeable.d6c_1;
        boxWidth = Math.max(tmp0, b);
        var tmp0_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
        // Inline function 'kotlin.math.max' call
        var b_0 = placeable.e6c_1;
        boxHeight = Math.max(tmp0_0, b_0);
      } else {
        boxWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
        boxHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
        placeable = measurable.c6c(Companion_instance_0.q3q(_Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_minHeight__impl__ev4bgx(constraints)));
      }
      return _this__u8e3s4.i6c(boxWidth, boxHeight, VOID, BoxMeasurePolicy$measure$lambda_0(placeable, measurable, _this__u8e3s4, boxWidth, boxHeight, this));
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.l();
    var placeables = Array(size);
    var hasMatchParentSizeChildren = false;
    var boxWidth_0 = {_v: _Constraints___get_minWidth__impl__hi9lfi(constraints)};
    var boxHeight_0 = {_v: _Constraints___get_minHeight__impl__ev4bgx(constraints)};
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    var inductionVariable = 0;
    var last = measurables.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = measurables.m(index);
        if (!get_matchesParentSize(item)) {
          var placeable_0 = item.c6c(contentConstraints);
          placeables[index] = placeable_0;
          var tmp0_1 = boxWidth_0._v;
          // Inline function 'kotlin.math.max' call
          var b_1 = placeable_0.d6c_1;
          boxWidth_0._v = Math.max(tmp0_1, b_1);
          var tmp0_2 = boxHeight_0._v;
          // Inline function 'kotlin.math.max' call
          var b_2 = placeable_0.e6c_1;
          boxHeight_0._v = Math.max(tmp0_2, b_2);
        } else {
          hasMatchParentSizeChildren = true;
        }
      }
       while (inductionVariable <= last);
    if (hasMatchParentSizeChildren) {
      var tmp0_minWidth = !(boxWidth_0._v === 2147483647) ? boxWidth_0._v : 0;
      var tmp1_minHeight = !(boxHeight_0._v === 2147483647) ? boxHeight_0._v : 0;
      var tmp2_maxWidth = boxWidth_0._v;
      var tmp3_maxHeight = boxHeight_0._v;
      var matchParentSizeConstraints = Constraints(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
      // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.l() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.m(index_0);
          if (get_matchesParentSize(item_0)) {
            placeables[index_0] = item_0.c6c(matchParentSizeConstraints);
          }
        }
         while (inductionVariable_0 <= last_0);
    }
    var tmp_2 = boxWidth_0._v;
    var tmp_3 = boxHeight_0._v;
    return _this__u8e3s4.i6c(tmp_2, tmp_3, VOID, BoxMeasurePolicy$measure$lambda_1(placeables, measurables, _this__u8e3s4, boxWidth_0, boxHeight_0, this));
  };
  protoOf(BoxMeasurePolicy).toString = function () {
    return 'BoxMeasurePolicy(alignment=' + toString(this.o9s_1) + ', propagateMinConstraints=' + this.p9s_1 + ')';
  };
  protoOf(BoxMeasurePolicy).hashCode = function () {
    var result = hashCode(this.o9s_1);
    result = imul(result, 31) + getBooleanHashCode(this.p9s_1) | 0;
    return result;
  };
  protoOf(BoxMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BoxMeasurePolicy))
      return false;
    if (!equals(this.o9s_1, other.o9s_1))
      return false;
    if (!(this.p9s_1 === other.p9s_1))
      return false;
    return true;
  };
  function maybeCachedBoxMeasurePolicy(alignment, propagateMinConstraints) {
    _init_properties_Box_kt__tvzvdl();
    var cache = propagateMinConstraints ? get_Cache1() : get_Cache2();
    var tmp0_elvis_lhs = cache.g2(alignment);
    return tmp0_elvis_lhs == null ? new BoxMeasurePolicy(alignment, propagateMinConstraints) : tmp0_elvis_lhs;
  }
  function BoxScopeInstance() {
  }
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    return BoxScopeInstance_instance;
  }
  function get_matchesParentSize(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f9t_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function placeInBox(_this__u8e3s4, placeable, measurable, layoutDirection, boxWidth, boxHeight, alignment) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(measurable);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e9t_1;
    var childAlignment = tmp1_elvis_lhs == null ? alignment : tmp1_elvis_lhs;
    var tmp0 = placeable.d6c_1;
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = placeable.e6c_1;
    var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    var tmp = _IntSize___init__impl__emcjft(tmp$ret$1);
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$3 = bitwiseOr(shiftLeft(fromInt(boxWidth), 32), bitwiseAnd(fromInt(boxHeight), new Long(-1, 0)));
    var tmp$ret$2 = _IntSize___init__impl__emcjft(tmp$ret$3);
    var position = childAlignment.c61(tmp, tmp$ret$2, layoutDirection);
    _this__u8e3s4.k7h(placeable, position);
  }
  function BoxChildDataNode() {
  }
  function get_boxChildDataNode(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _this__u8e3s4.m7f();
    return tmp instanceof BoxChildDataNode ? tmp : null;
  }
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.g9t_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).q7g = function (_this__u8e3s4, measurables, constraints) {
    return this.g9t_1(_this__u8e3s4, measurables, new Constraints_0(constraints));
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).r2 = function () {
    return this.g9t_1;
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, MeasurePolicy) : false) {
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
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).hashCode = function () {
    return hashCode(this.r2());
  };
  function EmptyBoxMeasurePolicy$lambda($this$MeasurePolicy, _unused_var__etf5q3, constraints) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints.n3q_1);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints.n3q_1);
    return $this$MeasurePolicy.i6c(tmp, tmp_0, VOID, EmptyBoxMeasurePolicy$lambda$lambda);
  }
  function EmptyBoxMeasurePolicy$lambda$lambda($this$layout) {
    _init_properties_Box_kt__tvzvdl();
    return Unit_instance;
  }
  function Box$lambda($modifier, $$changed) {
    return function ($composer, $force) {
      Box($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_Box_kt_kr8cbp;
  function _init_properties_Box_kt__tvzvdl() {
    if (!properties_initialized_Box_kt_kr8cbp) {
      properties_initialized_Box_kt_kr8cbp = true;
      Cache1 = cacheFor(true);
      Cache2 = cacheFor(false);
      DefaultBoxMeasurePolicy = new BoxMeasurePolicy(Companion_getInstance_0().h60_1, false);
      var tmp = EmptyBoxMeasurePolicy$lambda;
      EmptyBoxMeasurePolicy = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp);
      androidx_compose_foundation_layout_BoxScopeInstance$stable = 0;
    }
  }
  function BoxWithConstraints(modifier, contentAlignment, propagateMinConstraints, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var contentAlignment_0 = {_v: contentAlignment};
    var propagateMinConstraints_0 = {_v: propagateMinConstraints};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.g20(380139498);
    sourceInformation($composer_0, 'C(BoxWithConstraints)P(2,1,3)63@3275L271,63@3248L298:BoxWithConstraints.kt#2w3rfo');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w20(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w20(contentAlignment_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.x20(propagateMinConstraints_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.b21(content) ? 2048 : 1024);
    if ($composer_0.d21(!(($dirty & 1171) === 1170), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        contentAlignment_0._v = Companion_getInstance_0().h60_1;
      }
      if (!(($default & 4) === 0)) {
        propagateMinConstraints_0._v = false;
      }
      if (isTraceInProgress()) {
        traceEventStart(380139498, $dirty, -1, 'androidx.compose.foundation.layout.BoxWithConstraints (BoxWithConstraints.kt:61)');
      }
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment_0._v, propagateMinConstraints_0._v);
      var tmp = modifier_0._v;
      sourceInformationMarkerStart($composer_0, 241849337, 'CC(remember):BoxWithConstraints.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 7168) === 2048 | $composer_0.w20(measurePolicy));
      // Inline function 'kotlin.let' call
      var it = tmp0.u20();
      var tmp_0;
      if (invalid || it === Companion_getInstance_1().s1z_1) {
        var value = BoxWithConstraints$lambda(measurePolicy, content);
        tmp0.v20(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp0_group = tmp_0;
      sourceInformationMarkerEnd($composer_0);
      SubcomposeLayout(tmp, tmp0_group, $composer_0, 14 & $dirty, 0);
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
      tmp1_safe_receiver.k2m(BoxWithConstraints$lambda_0(modifier_0, contentAlignment_0, propagateMinConstraints_0, content, $changed, $default));
    }
  }
  function BoxWithConstraintsScopeImpl(density, constraints) {
    this.h9t_1 = BoxScopeInstance_instance;
    this.i9t_1 = density;
    this.j9t_1 = constraints;
  }
  protoOf(BoxWithConstraintsScopeImpl).k9t = function () {
    // Inline function 'kotlin.with' call
    var $this$with = this.i9t_1;
    return _Constraints___get_hasBoundedWidth__impl__7hd0wr(this.j9t_1) ? $this$with.b3r(_Constraints___get_maxWidth__impl__uuyqc(this.j9t_1)) : Companion_getInstance_2().j3r_1;
  };
  protoOf(BoxWithConstraintsScopeImpl).toString = function () {
    return 'BoxWithConstraintsScopeImpl(density=' + toString(this.i9t_1) + ', constraints=' + Constraints__toString_impl_37yskr(this.j9t_1) + ')';
  };
  protoOf(BoxWithConstraintsScopeImpl).hashCode = function () {
    var result = hashCode(this.i9t_1);
    result = imul(result, 31) + Constraints__hashCode_impl_ij7484(this.j9t_1) | 0;
    return result;
  };
  protoOf(BoxWithConstraintsScopeImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BoxWithConstraintsScopeImpl))
      return false;
    if (!equals(this.i9t_1, other.i9t_1))
      return false;
    if (!equals(this.j9t_1, other.j9t_1))
      return false;
    return true;
  };
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function BoxWithConstraints$lambda$lambda($content, $scope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C66@3463L9:BoxWithConstraints.kt#2w3rfo');
      var tmp;
      if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-431986394, $changed, -1, 'androidx.compose.foundation.layout.BoxWithConstraints.<anonymous>.<anonymous>.<anonymous> (BoxWithConstraints.kt:66)');
        }
        $content($scope, $composer_0, 0);
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
  function BoxWithConstraints$lambda($measurePolicy, $content) {
    return function ($this$SubcomposeLayout, constraints) {
      var scope = new BoxWithConstraintsScopeImpl($this$SubcomposeLayout, constraints.n3q_1);
      var measurables = $this$SubcomposeLayout.c7r(Unit_instance, ComposableLambda$invoke$ref(composableLambdaInstance(-431986394, true, BoxWithConstraints$lambda$lambda($content, scope))));
      // Inline function 'kotlin.with' call
      return $measurePolicy.q7g($this$SubcomposeLayout, measurables, constraints.n3q_1);
    };
  }
  function BoxWithConstraints$lambda_0($modifier, $contentAlignment, $propagateMinConstraints, $content, $$changed, $$default) {
    return function ($composer, $force) {
      BoxWithConstraints($modifier._v, $contentAlignment._v, $propagateMinConstraints._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function get_DefaultColumnMeasurePolicy() {
    _init_properties_Column_kt__s1zb92();
    return DefaultColumnMeasurePolicy;
  }
  var DefaultColumnMeasurePolicy;
  var androidx_compose_foundation_layout_ColumnMeasurePolicy$stable;
  var androidx_compose_foundation_layout_ColumnScopeInstance$stable;
  function getCrossAxisPosition($this, placeable, parentData, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, layoutDirection) {
    var childCrossAlignment = parentData == null ? null : parentData.n9t_1;
    var tmp2_elvis_lhs = childCrossAlignment == null ? null : childCrossAlignment.s9t(crossAxisLayoutSize, $this.r9t(placeable), layoutDirection, placeable, beforeCrossAxisAlignmentLine);
    return tmp2_elvis_lhs == null ? $this.q9t_1.x60($this.r9t(placeable), crossAxisLayoutSize, layoutDirection) : tmp2_elvis_lhs;
  }
  function ColumnMeasurePolicy$placeHelper$lambda($placeables, this$0, $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $measureScope, $mainAxisPositions) {
    return function ($this$layout) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var crossAxisPosition = getCrossAxisPosition(this$0, ensureNotNull(item), get_rowColumnParentData(item), $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $measureScope.p4u());
        $this$layout.i7h(item, crossAxisPosition, $mainAxisPositions[_unary__edvuaz]);
      }
      return Unit_instance;
    };
  }
  function ColumnMeasurePolicy(verticalArrangement, horizontalAlignment) {
    this.p9t_1 = verticalArrangement;
    this.q9t_1 = horizontalAlignment;
  }
  protoOf(ColumnMeasurePolicy).t9t = function (_this__u8e3s4) {
    return _this__u8e3s4.e6c_1;
  };
  protoOf(ColumnMeasurePolicy).r9t = function (_this__u8e3s4) {
    return _this__u8e3s4.d6c_1;
  };
  protoOf(ColumnMeasurePolicy).u9t = function (mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    // Inline function 'kotlin.with' call
    this.p9t_1.v9r(measureScope, mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions);
  };
  protoOf(ColumnMeasurePolicy).v9t = function (placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex) {
    // Inline function 'kotlin.with' call
    return measureScope.i6c(crossAxisLayoutSize, mainAxisLayoutSize, VOID, ColumnMeasurePolicy$placeHelper$lambda(placeables, this, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, measureScope, mainAxisPositions));
  };
  protoOf(ColumnMeasurePolicy).w9t = function (mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) {
    return createColumnConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax);
  };
  protoOf(ColumnMeasurePolicy).q7g = function (_this__u8e3s4, measurables, constraints) {
    var tmp = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp_1 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var tmp_2 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_3 = _this__u8e3s4.v3q(this.p9t_1.t9r());
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.l();
    var tmp$ret$0 = Array(size);
    return measure(this, tmp, tmp_0, tmp_1, tmp_2, tmp_3, _this__u8e3s4, measurables, tmp$ret$0, 0, measurables.l());
  };
  protoOf(ColumnMeasurePolicy).toString = function () {
    return 'ColumnMeasurePolicy(verticalArrangement=' + toString(this.p9t_1) + ', horizontalAlignment=' + toString(this.q9t_1) + ')';
  };
  protoOf(ColumnMeasurePolicy).hashCode = function () {
    var result = hashCode(this.p9t_1);
    result = imul(result, 31) + hashCode(this.q9t_1) | 0;
    return result;
  };
  protoOf(ColumnMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColumnMeasurePolicy))
      return false;
    if (!equals(this.p9t_1, other.p9t_1))
      return false;
    if (!equals(this.q9t_1, other.q9t_1))
      return false;
    return true;
  };
  function columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer, $changed) {
    _init_properties_Column_kt__s1zb92();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1089876336, 'C(columnMeasurePolicy)P(1):Column.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(1089876336, $changed, -1, 'androidx.compose.foundation.layout.columnMeasurePolicy (Column.kt:108)');
    }
    var tmp;
    if (equals(verticalArrangement, Arrangement_getInstance().y9r_1) && equals(horizontalAlignment, Companion_getInstance_0().t60_1)) {
      $composer_0.a20(-1446604504);
      $composer_0.b20();
      tmp = get_DefaultColumnMeasurePolicy();
    } else {
      $composer_0.a20(-1446550657);
      sourceInformation($composer_0, '111@5165L227');
      sourceInformationMarkerStart($composer_0, -600851949, 'CC(remember):Column.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.w20(verticalArrangement) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.w20(horizontalAlignment) || ($changed & 48) === 32));
      // Inline function 'kotlin.let' call
      var it = $composer_0.u20();
      var tmp_0;
      if (invalid || it === Companion_getInstance_1().s1z_1) {
        var value = new ColumnMeasurePolicy(verticalArrangement, horizontalAlignment);
        $composer_0.v20(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp1_group = tmp_0;
      sourceInformationMarkerEnd($composer_0);
      $composer_0.b20();
      tmp = tmp1_group;
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function ColumnScopeInstance() {
  }
  var ColumnScopeInstance_instance;
  function ColumnScopeInstance_getInstance() {
    return ColumnScopeInstance_instance;
  }
  function createColumnConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax) {
    _init_properties_Column_kt__s1zb92();
    var tmp;
    if (!isPrioritizing) {
      tmp = Constraints(crossAxisMin, crossAxisMax, mainAxisMin, mainAxisMax);
    } else {
      tmp = Companion_instance_0.s3q(crossAxisMin, crossAxisMax, mainAxisMin, mainAxisMax);
    }
    return tmp;
  }
  var properties_initialized_Column_kt_nm4x4;
  function _init_properties_Column_kt__s1zb92() {
    if (!properties_initialized_Column_kt_nm4x4) {
      properties_initialized_Column_kt_nm4x4 = true;
      DefaultColumnMeasurePolicy = new ColumnMeasurePolicy(Arrangement_getInstance().y9r_1, Companion_getInstance_0().t60_1);
      androidx_compose_foundation_layout_ColumnMeasurePolicy$stable = 0;
      androidx_compose_foundation_layout_ColumnScopeInstance$stable = 0;
    }
  }
  var androidx_compose_foundation_layout_ComposeFoundationLayoutFlags$stable;
  var androidx_compose_foundation_layout_ContextualFlowRowScopeImpl$stable;
  var androidx_compose_foundation_layout_ContextualFlowColumnScopeImpl$stable;
  var androidx_compose_foundation_layout_ContextualFlowRowOverflowScopeImpl$stable;
  var androidx_compose_foundation_layout_ContextualFlowColumnOverflowScopeImpl$stable;
  var androidx_compose_foundation_layout_ContextualFlowItemIterator$stable;
  var androidx_compose_foundation_layout_FlowLineInfo$stable;
  var androidx_compose_foundation_layout_FlowLayoutBuildingBlocks_WrapInfo$stable;
  var androidx_compose_foundation_layout_FlowLayoutBuildingBlocks_WrapEllipsisInfo$stable;
  var androidx_compose_foundation_layout_FlowLayoutBuildingBlocks$stable;
  var androidx_compose_foundation_layout_FlowRowOverflow$stable;
  var androidx_compose_foundation_layout_FlowColumnOverflow$stable;
  var androidx_compose_foundation_layout_ContextualFlowRowOverflow$stable;
  var androidx_compose_foundation_layout_ContextualFlowColumnOverflow$stable;
  var androidx_compose_foundation_layout_FlowLayoutOverflow$stable;
  var androidx_compose_foundation_layout_FlowLayoutOverflowState$stable;
  var androidx_compose_foundation_layout_PaddingValues_Absolute$stable;
  var androidx_compose_foundation_layout_PaddingValuesImpl$stable;
  function PaddingValues(all) {
    return new PaddingValuesImpl(all, all, all, all);
  }
  function PaddingValues_0(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    return new PaddingValuesImpl(start, top, end, bottom);
  }
  function padding(_this__u8e3s4, start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    return _this__u8e3s4.y61(new PaddingElement(start, top, end, bottom, true, padding$lambda(start, top, end, bottom)));
  }
  function padding_0(_this__u8e3s4, horizontal, vertical) {
    var tmp;
    if (horizontal === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = horizontal;
    }
    horizontal = tmp;
    var tmp_0;
    if (vertical === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = vertical;
    }
    vertical = tmp_0;
    return _this__u8e3s4.y61(new PaddingElement(horizontal, vertical, horizontal, vertical, true, padding$lambda_0(horizontal, vertical)));
  }
  function calculateStartPadding(_this__u8e3s4, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = _this__u8e3s4.z9t(layoutDirection);
    } else {
      tmp = _this__u8e3s4.y9t(layoutDirection);
    }
    return tmp;
  }
  function calculateEndPadding(_this__u8e3s4, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = _this__u8e3s4.y9t(layoutDirection);
    } else {
      tmp = _this__u8e3s4.z9t(layoutDirection);
    }
    return tmp;
  }
  function padding_1(_this__u8e3s4, paddingValues) {
    return _this__u8e3s4.y61(new PaddingValuesElement(paddingValues, padding$lambda_1(paddingValues)));
  }
  function PaddingValuesImpl(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    this.a9u_1 = start;
    this.b9u_1 = top;
    this.c9u_1 = end;
    this.d9u_1 = bottom;
    // Inline function 'androidx.compose.foundation.layout.internal.requirePrecondition' call
    if (!!!(!!(!!(_Dp___get_value__impl__geb1vb(this.a9u_1) >= 0.0 & _Dp___get_value__impl__geb1vb(this.b9u_1) >= 0.0) & _Dp___get_value__impl__geb1vb(this.c9u_1) >= 0.0) & _Dp___get_value__impl__geb1vb(this.d9u_1) >= 0.0)) {
      var tmp$ret$5 = 'Padding must be non-negative';
      throwIllegalArgumentException(tmp$ret$5);
    }
  }
  protoOf(PaddingValuesImpl).z9t = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.a9u_1 : this.c9u_1;
  };
  protoOf(PaddingValuesImpl).e9u = function () {
    return this.b9u_1;
  };
  protoOf(PaddingValuesImpl).y9t = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.c9u_1 : this.a9u_1;
  };
  protoOf(PaddingValuesImpl).f9u = function () {
    return this.d9u_1;
  };
  protoOf(PaddingValuesImpl).equals = function (other) {
    if (!(other instanceof PaddingValuesImpl))
      return false;
    return equals(this.a9u_1, other.a9u_1) && equals(this.b9u_1, other.b9u_1) && equals(this.c9u_1, other.c9u_1) && equals(this.d9u_1, other.d9u_1);
  };
  protoOf(PaddingValuesImpl).hashCode = function () {
    return imul(imul(imul(Dp__hashCode_impl_sxkrra(this.a9u_1), 31) + Dp__hashCode_impl_sxkrra(this.b9u_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.c9u_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.d9u_1) | 0;
  };
  protoOf(PaddingValuesImpl).toString = function () {
    return 'PaddingValues(start=' + Dp__toString_impl_kcddez(this.a9u_1) + ', top=' + Dp__toString_impl_kcddez(this.b9u_1) + ', end=' + Dp__toString_impl_kcddez(this.c9u_1) + ', bottom=' + Dp__toString_impl_kcddez(this.d9u_1) + ')';
  };
  function PaddingElement(start, top, end, bottom, rtlAware, inspectorInfo) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    ModifierNodeElement.call(this);
    this.h9u_1 = start;
    this.i9u_1 = top;
    this.j9u_1 = end;
    this.k9u_1 = bottom;
    this.l9u_1 = rtlAware;
    this.m9u_1 = inspectorInfo;
    var tmp_3;
    if (_Dp___get_value__impl__geb1vb(this.h9u_1) >= 0.0) {
      tmp_3 = true;
    } else {
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      var this_0 = this.h9u_1;
      tmp_3 = isNaN_0(_Dp___get_value__impl__geb1vb(this_0));
    }
    var tmp_4 = tmp_3;
    var tmp_5;
    if (_Dp___get_value__impl__geb1vb(this.i9u_1) >= 0.0) {
      tmp_5 = true;
    } else {
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      var this_1 = this.i9u_1;
      tmp_5 = isNaN_0(_Dp___get_value__impl__geb1vb(this_1));
    }
    var tmp_6 = !!(tmp_4 & tmp_5);
    var tmp_7;
    if (_Dp___get_value__impl__geb1vb(this.j9u_1) >= 0.0) {
      tmp_7 = true;
    } else {
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      var this_2 = this.j9u_1;
      tmp_7 = isNaN_0(_Dp___get_value__impl__geb1vb(this_2));
    }
    var tmp_8 = !!(tmp_6 & tmp_7);
    var tmp_9;
    if (_Dp___get_value__impl__geb1vb(this.k9u_1) >= 0.0) {
      tmp_9 = true;
    } else {
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      var this_3 = this.k9u_1;
      tmp_9 = isNaN_0(_Dp___get_value__impl__geb1vb(this_3));
    }
    // Inline function 'androidx.compose.foundation.layout.internal.requirePrecondition' call
    if (!!!(tmp_8 & tmp_9)) {
      var tmp$ret$9 = 'Padding must be non-negative';
      throwIllegalArgumentException(tmp$ret$9);
    }
  }
  protoOf(PaddingElement).i2n = function () {
    return new PaddingNode(this.h9u_1, this.i9u_1, this.j9u_1, this.k9u_1, this.l9u_1);
  };
  protoOf(PaddingElement).n9u = function (node) {
    node.c9v_1 = this.h9u_1;
    node.d9v_1 = this.i9u_1;
    node.e9v_1 = this.j9u_1;
    node.f9v_1 = this.k9u_1;
    node.g9v_1 = this.l9u_1;
  };
  protoOf(PaddingElement).t67 = function (node) {
    return this.n9u(node instanceof PaddingNode ? node : THROW_CCE());
  };
  protoOf(PaddingElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.h9u_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.i9u_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.j9u_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.k9u_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.l9u_1) | 0;
    return result;
  };
  protoOf(PaddingElement).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifierElement = tmp;
    return equals(this.h9u_1, otherModifierElement.h9u_1) && equals(this.i9u_1, otherModifierElement.i9u_1) && equals(this.j9u_1, otherModifierElement.j9u_1) && equals(this.k9u_1, otherModifierElement.k9u_1) && this.l9u_1 === otherModifierElement.l9u_1;
  };
  function PaddingValuesElement(paddingValues, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.i9v_1 = paddingValues;
    this.j9v_1 = inspectorInfo;
  }
  protoOf(PaddingValuesElement).i2n = function () {
    return new PaddingValuesModifier(this.i9v_1);
  };
  protoOf(PaddingValuesElement).k9v = function (node) {
    node.z9v_1 = this.i9v_1;
  };
  protoOf(PaddingValuesElement).t67 = function (node) {
    return this.k9v(node instanceof PaddingValuesModifier ? node : THROW_CCE());
  };
  protoOf(PaddingValuesElement).hashCode = function () {
    return hashCode(this.i9v_1);
  };
  protoOf(PaddingValuesElement).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingValuesElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherElement = tmp;
    return equals(this.i9v_1, otherElement.i9v_1);
  };
  function PaddingNode$measure$lambda(this$0, $placeable) {
    return function ($this$layout) {
      var tmp;
      if (this$0.g9v_1) {
        $this$layout.a6c($placeable, $this$layout.v3q(this$0.c9v_1), $this$layout.v3q(this$0.d9v_1));
        tmp = Unit_instance;
      } else {
        $this$layout.i7h($placeable, $this$layout.v3q(this$0.c9v_1), $this$layout.v3q(this$0.d9v_1));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function PaddingNode(start, top, end, bottom, rtlAware) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    Node.call(this);
    this.c9v_1 = start;
    this.d9v_1 = top;
    this.e9v_1 = end;
    this.f9v_1 = bottom;
    this.g9v_1 = rtlAware;
  }
  protoOf(PaddingNode).b6c = function (_this__u8e3s4, measurable, constraints) {
    var horizontal = _this__u8e3s4.v3q(this.c9v_1) + _this__u8e3s4.v3q(this.e9v_1) | 0;
    var vertical = _this__u8e3s4.v3q(this.d9v_1) + _this__u8e3s4.v3q(this.f9v_1) | 0;
    var placeable = measurable.c6c(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.d6c_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.e6c_1 + vertical | 0);
    return _this__u8e3s4.i6c(width, height, VOID, PaddingNode$measure$lambda(this, placeable));
  };
  function PaddingValuesModifier$measure$lambda($placeable, $roundedLeftPadding, $roundedTopPadding) {
    return function ($this$layout) {
      $this$layout.i7h($placeable, $roundedLeftPadding, $roundedTopPadding);
      return Unit_instance;
    };
  }
  function PaddingValuesModifier(paddingValues) {
    Node.call(this);
    this.z9v_1 = paddingValues;
  }
  protoOf(PaddingValuesModifier).b6c = function (_this__u8e3s4, measurable, constraints) {
    var leftPadding = this.z9v_1.z9t(_this__u8e3s4.p4u());
    var topPadding = this.z9v_1.e9u();
    var rightPadding = this.z9v_1.y9t(_this__u8e3s4.p4u());
    var bottomPadding = this.z9v_1.f9u();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    var tmp = Dp__compareTo_impl_tlg3dl(leftPadding, tmp$ret$0) >= 0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
    var tmp_0 = !!(tmp & Dp__compareTo_impl_tlg3dl(topPadding, tmp$ret$1) >= 0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$2 = _Dp___init__impl__ms3zkb(0);
    var tmp_1 = !!(tmp_0 & Dp__compareTo_impl_tlg3dl(rightPadding, tmp$ret$2) >= 0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$3 = _Dp___init__impl__ms3zkb(0);
    // Inline function 'androidx.compose.foundation.layout.internal.requirePrecondition' call
    if (!!!(tmp_1 & Dp__compareTo_impl_tlg3dl(bottomPadding, tmp$ret$3) >= 0)) {
      var tmp$ret$5 = 'Padding must be non-negative';
      throwIllegalArgumentException(tmp$ret$5);
    }
    var roundedLeftPadding = _this__u8e3s4.v3q(leftPadding);
    var horizontal = roundedLeftPadding + _this__u8e3s4.v3q(rightPadding) | 0;
    var roundedTopPadding = _this__u8e3s4.v3q(topPadding);
    var vertical = roundedTopPadding + _this__u8e3s4.v3q(bottomPadding) | 0;
    var placeable = measurable.c6c(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.d6c_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.e6c_1 + vertical | 0);
    return _this__u8e3s4.i6c(width, height, VOID, PaddingValuesModifier$measure$lambda(placeable, roundedLeftPadding, roundedTopPadding));
  };
  function padding_2(_this__u8e3s4, all) {
    return _this__u8e3s4.y61(new PaddingElement(all, all, all, all, true, padding$lambda_2(all)));
  }
  function padding$lambda($start, $top, $end, $bottom) {
    return function ($this$PaddingElement) {
      $this$PaddingElement.a9w_1 = 'padding';
      $this$PaddingElement.c9w_1.e9w('start', new Dp($start));
      $this$PaddingElement.c9w_1.e9w('top', new Dp($top));
      $this$PaddingElement.c9w_1.e9w('end', new Dp($end));
      $this$PaddingElement.c9w_1.e9w('bottom', new Dp($bottom));
      return Unit_instance;
    };
  }
  function padding$lambda_0($horizontal, $vertical) {
    return function ($this$PaddingElement) {
      $this$PaddingElement.a9w_1 = 'padding';
      $this$PaddingElement.c9w_1.e9w('horizontal', new Dp($horizontal));
      $this$PaddingElement.c9w_1.e9w('vertical', new Dp($vertical));
      return Unit_instance;
    };
  }
  function padding$lambda_1($paddingValues) {
    return function ($this$PaddingValuesElement) {
      $this$PaddingValuesElement.a9w_1 = 'padding';
      $this$PaddingValuesElement.c9w_1.e9w('paddingValues', $paddingValues);
      return Unit_instance;
    };
  }
  function padding$lambda_2($all) {
    return function ($this$PaddingElement) {
      $this$PaddingElement.a9w_1 = 'padding';
      $this$PaddingElement.b9w_1 = new Dp($all);
      return Unit_instance;
    };
  }
  function get_DefaultRowMeasurePolicy() {
    _init_properties_Row_kt__jenljs();
    return DefaultRowMeasurePolicy;
  }
  var DefaultRowMeasurePolicy;
  var androidx_compose_foundation_layout_RowMeasurePolicy$stable;
  var androidx_compose_foundation_layout_RowScopeInstance$stable;
  function getCrossAxisPosition_0($this, placeable, parentData, crossAxisLayoutSize, beforeCrossAxisAlignmentLine) {
    var childCrossAlignment = parentData == null ? null : parentData.n9t_1;
    var tmp2_elvis_lhs = childCrossAlignment == null ? null : childCrossAlignment.s9t(crossAxisLayoutSize, $this.r9t(placeable), LayoutDirection_Ltr_getInstance(), placeable, beforeCrossAxisAlignmentLine);
    return tmp2_elvis_lhs == null ? $this.g9w_1.z60($this.r9t(placeable), crossAxisLayoutSize) : tmp2_elvis_lhs;
  }
  function RowMeasurePolicy$placeHelper$lambda($placeables, this$0, $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $mainAxisPositions) {
    return function ($this$layout) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var crossAxisPosition = getCrossAxisPosition_0(this$0, ensureNotNull(item), get_rowColumnParentData(item), $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine);
        $this$layout.i7h(item, $mainAxisPositions[_unary__edvuaz], crossAxisPosition);
      }
      return Unit_instance;
    };
  }
  function RowMeasurePolicy(horizontalArrangement, verticalAlignment) {
    this.f9w_1 = horizontalArrangement;
    this.g9w_1 = verticalAlignment;
  }
  protoOf(RowMeasurePolicy).t9t = function (_this__u8e3s4) {
    return _this__u8e3s4.d6c_1;
  };
  protoOf(RowMeasurePolicy).r9t = function (_this__u8e3s4) {
    return _this__u8e3s4.e6c_1;
  };
  protoOf(RowMeasurePolicy).q7g = function (_this__u8e3s4, measurables, constraints) {
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_2 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var tmp_3 = _this__u8e3s4.v3q(this.f9w_1.t9r());
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.l();
    var tmp$ret$0 = Array(size);
    return measure(this, tmp, tmp_0, tmp_1, tmp_2, tmp_3, _this__u8e3s4, measurables, tmp$ret$0, 0, measurables.l());
  };
  protoOf(RowMeasurePolicy).u9t = function (mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    // Inline function 'kotlin.with' call
    this.f9w_1.u9r(measureScope, mainAxisLayoutSize, childrenMainAxisSize, measureScope.p4u(), mainAxisPositions);
  };
  protoOf(RowMeasurePolicy).v9t = function (placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex) {
    // Inline function 'kotlin.with' call
    return measureScope.i6c(mainAxisLayoutSize, crossAxisLayoutSize, VOID, RowMeasurePolicy$placeHelper$lambda(placeables, this, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, mainAxisPositions));
  };
  protoOf(RowMeasurePolicy).w9t = function (mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) {
    return createRowConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax);
  };
  protoOf(RowMeasurePolicy).toString = function () {
    return 'RowMeasurePolicy(horizontalArrangement=' + toString(this.f9w_1) + ', verticalAlignment=' + toString(this.g9w_1) + ')';
  };
  protoOf(RowMeasurePolicy).hashCode = function () {
    var result = hashCode(this.f9w_1);
    result = imul(result, 31) + hashCode(this.g9w_1) | 0;
    return result;
  };
  protoOf(RowMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowMeasurePolicy))
      return false;
    if (!equals(this.f9w_1, other.f9w_1))
      return false;
    if (!equals(this.g9w_1, other.g9w_1))
      return false;
    return true;
  };
  function rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer, $changed) {
    _init_properties_Row_kt__jenljs();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -837807694, 'C(rowMeasurePolicy):Row.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(-837807694, $changed, -1, 'androidx.compose.foundation.layout.rowMeasurePolicy (Row.kt:118)');
    }
    var tmp;
    if (equals(horizontalArrangement, Arrangement_getInstance().w9r_1) && equals(verticalAlignment, Companion_getInstance_0().q60_1)) {
      $composer_0.a20(-1073830487);
      $composer_0.b20();
      tmp = get_DefaultRowMeasurePolicy();
    } else {
      $composer_0.a20(-1073779616);
      sourceInformation($composer_0, '121@5901L224');
      sourceInformationMarkerStart($composer_0, -1974300398, 'CC(remember):Row.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.w20(horizontalArrangement) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.w20(verticalAlignment) || ($changed & 48) === 32));
      // Inline function 'kotlin.let' call
      var it = $composer_0.u20();
      var tmp_0;
      if (invalid || it === Companion_getInstance_1().s1z_1) {
        var value = new RowMeasurePolicy(horizontalArrangement, verticalAlignment);
        $composer_0.v20(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp1_group = tmp_0;
      sourceInformationMarkerEnd($composer_0);
      $composer_0.b20();
      tmp = tmp1_group;
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function RowScopeInstance() {
  }
  var RowScopeInstance_instance;
  function RowScopeInstance_getInstance() {
    return RowScopeInstance_instance;
  }
  function createRowConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax) {
    _init_properties_Row_kt__jenljs();
    var tmp;
    if (!isPrioritizing) {
      tmp = Constraints(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
    } else {
      tmp = Companion_instance_0.r3q(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
    }
    return tmp;
  }
  var properties_initialized_Row_kt_sbxnna;
  function _init_properties_Row_kt__jenljs() {
    if (!properties_initialized_Row_kt_sbxnna) {
      properties_initialized_Row_kt_sbxnna = true;
      DefaultRowMeasurePolicy = new RowMeasurePolicy(Arrangement_getInstance().w9r_1, Companion_getInstance_0().q60_1);
      androidx_compose_foundation_layout_RowMeasurePolicy$stable = 0;
      androidx_compose_foundation_layout_RowScopeInstance$stable = 0;
    }
  }
  var androidx_compose_foundation_layout_CrossAxisAlignment$stable;
  var androidx_compose_foundation_layout_IntrinsicMeasureBlocks$stable;
  var androidx_compose_foundation_layout_LayoutWeightElement$stable;
  var androidx_compose_foundation_layout_LayoutWeightNode$stable;
  var androidx_compose_foundation_layout_WithAlignmentLineBlockElement$stable;
  var androidx_compose_foundation_layout_WithAlignmentLineElement$stable;
  var androidx_compose_foundation_layout_SiblingsAlignedNode_WithAlignmentLineBlockNode$stable;
  var androidx_compose_foundation_layout_SiblingsAlignedNode_WithAlignmentLineNode$stable;
  var androidx_compose_foundation_layout_SiblingsAlignedNode$stable;
  var androidx_compose_foundation_layout_HorizontalAlignElement$stable;
  var androidx_compose_foundation_layout_HorizontalAlignNode$stable;
  var androidx_compose_foundation_layout_VerticalAlignElement$stable;
  var androidx_compose_foundation_layout_VerticalAlignNode$stable;
  var androidx_compose_foundation_layout_RowColumnParentData$stable;
  var androidx_compose_foundation_layout_AlignmentLineProvider_Block$stable;
  var androidx_compose_foundation_layout_AlignmentLineProvider_Value$stable;
  var androidx_compose_foundation_layout_AlignmentLineProvider$stable;
  function RowColumnParentData() {
  }
  function get_rowColumnParentData(_this__u8e3s4) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    var tmp = _this__u8e3s4.m7f();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function get_weight(_this__u8e3s4) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.l9t_1;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  }
  function get_rowColumnParentData_0(_this__u8e3s4) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    var tmp = _this__u8e3s4.m7f();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function get_isRelative(_this__u8e3s4) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    var tmp0_safe_receiver = get_crossAxisAlignment(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h9w();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function get_fill(_this__u8e3s4) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.m9t_1;
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function get_crossAxisAlignment(_this__u8e3s4) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    return _this__u8e3s4 == null ? null : _this__u8e3s4.n9t_1;
  }
  var properties_initialized_RowColumnImpl_kt_57qerk;
  function _init_properties_RowColumnImpl_kt__c7pbaa() {
    if (!properties_initialized_RowColumnImpl_kt_57qerk) {
      properties_initialized_RowColumnImpl_kt_57qerk = true;
      androidx_compose_foundation_layout_CrossAxisAlignment$stable = 0;
      androidx_compose_foundation_layout_IntrinsicMeasureBlocks$stable = 0;
      androidx_compose_foundation_layout_LayoutWeightElement$stable = 0;
      androidx_compose_foundation_layout_LayoutWeightNode$stable = 8;
      androidx_compose_foundation_layout_WithAlignmentLineBlockElement$stable = 0;
      androidx_compose_foundation_layout_WithAlignmentLineElement$stable = 0;
      androidx_compose_foundation_layout_SiblingsAlignedNode_WithAlignmentLineBlockNode$stable = 8;
      androidx_compose_foundation_layout_SiblingsAlignedNode_WithAlignmentLineNode$stable = 8;
      androidx_compose_foundation_layout_SiblingsAlignedNode$stable = androidx_compose_ui_Modifier_Node$stableprop_getter();
      androidx_compose_foundation_layout_HorizontalAlignElement$stable = 0;
      androidx_compose_foundation_layout_HorizontalAlignNode$stable = 8;
      androidx_compose_foundation_layout_VerticalAlignElement$stable = 0;
      androidx_compose_foundation_layout_VerticalAlignNode$stable = 8;
      androidx_compose_foundation_layout_RowColumnParentData$stable = 8;
      androidx_compose_foundation_layout_AlignmentLineProvider_Block$stable = 0;
      androidx_compose_foundation_layout_AlignmentLineProvider_Value$stable = 0;
      androidx_compose_foundation_layout_AlignmentLineProvider$stable = 0;
    }
  }
  function RowColumnMeasurePolicy() {
  }
  function measure(_this__u8e3s4, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, arrangementSpacingInt, measureScope, measurables, placeables, startIndex, endIndex, crossAxisOffset, currentLineIndex) {
    crossAxisOffset = crossAxisOffset === VOID ? null : crossAxisOffset;
    currentLineIndex = currentLineIndex === VOID ? 0 : currentLineIndex;
    var arrangementSpacingPx = fromInt(arrangementSpacingInt);
    var totalWeight = 0.0;
    var fixedSpace = 0;
    var crossAxisSpace = 0;
    var weightChildrenCount = 0;
    var anyAlignBy = false;
    var subSize = endIndex - startIndex | 0;
    var childrenMainAxisSize = new Int32Array(subSize);
    var beforeCrossAxisAlignmentLine = 0;
    var afterCrossAxisAlignmentLine = 0;
    var spaceAfterLastNoWeight = 0;
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var child = measurables.m(i);
        var parentData = get_rowColumnParentData_0(child);
        var weight = get_weight(parentData);
        anyAlignBy = anyAlignBy || get_isRelative(parentData);
        if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          weightChildrenCount = weightChildrenCount + 1 | 0;
        } else {
          var tmp;
          if (crossAxisMax === 2147483647) {
            tmp = null;
          } else {
            var tmp1_safe_receiver = parentData == null ? null : parentData.o9t_1;
            var tmp_0;
            if (tmp1_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.let' call
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              var this_0 = tmp1_safe_receiver.i9w_1 * crossAxisMax;
              var tmp_1;
              if (isNaN_0(this_0)) {
                tmp_1 = 0;
              } else {
                // Inline function 'kotlin.math.roundToInt' call
                tmp_1 = roundToInt(this_0);
              }
              tmp_0 = tmp_1;
            }
            tmp = tmp_0;
          }
          var crossAxisDesiredSize = tmp;
          var remaining = mainAxisMax - fixedSpace | 0;
          var tmp2_elvis_lhs = placeables[i];
          var tmp_2;
          if (tmp2_elvis_lhs == null) {
            var tmp_3 = crossAxisDesiredSize == null ? 0 : crossAxisDesiredSize;
            var tmp_4;
            if (mainAxisMax === 2147483647) {
              tmp_4 = 2147483647;
            } else {
              // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
              tmp_4 = remaining < 0 ? 0 : remaining;
            }
            var tmp_5 = tmp_4;
            tmp_2 = child.c6c(_this__u8e3s4.x9t(0, tmp_3, tmp_5, crossAxisDesiredSize == null ? crossAxisMax : crossAxisDesiredSize));
          } else {
            tmp_2 = tmp2_elvis_lhs;
          }
          var placeable = tmp_2;
          var placeableMainAxisSize = _this__u8e3s4.t9t(placeable);
          var placeableCrossAxisSize = _this__u8e3s4.r9t(placeable);
          childrenMainAxisSize[i - startIndex | 0] = placeableMainAxisSize;
          // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
          var this_1 = remaining - placeableMainAxisSize | 0;
          // Inline function 'kotlin.math.min' call
          var b = this_1 < 0 ? 0 : this_1;
          spaceAfterLastNoWeight = Math.min(arrangementSpacingInt, b);
          fixedSpace = fixedSpace + (placeableMainAxisSize + spaceAfterLastNoWeight | 0) | 0;
          // Inline function 'kotlin.math.max' call
          var a = crossAxisSpace;
          crossAxisSpace = Math.max(a, placeableCrossAxisSize);
          placeables[i] = placeable;
        }
      }
       while (inductionVariable < endIndex);
    var weightedSpace = 0;
    if (weightChildrenCount === 0) {
      fixedSpace = fixedSpace - spaceAfterLastNoWeight | 0;
    } else {
      var tmp_6;
      if (!(mainAxisMax === 2147483647)) {
        tmp_6 = mainAxisMax;
      } else {
        tmp_6 = mainAxisMin;
      }
      var targetSpace = tmp_6;
      // Inline function 'kotlin.Long.times' call
      var other = weightChildrenCount - 1 | 0;
      var arrangementSpacingTotal = multiply(arrangementSpacingPx, fromInt(other));
      var tmp0 = subtract(numberToLong(targetSpace - fixedSpace | 0), arrangementSpacingTotal);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var minimumValue = new Long(0, 0);
      var remainingToTarget = compare(tmp0, minimumValue) < 0 ? minimumValue : tmp0;
      // Inline function 'kotlin.Long.div' call
      var other_0 = totalWeight;
      var weightUnitSpace = toNumber(remainingToTarget) / other_0;
      var remainder = remainingToTarget;
      var inductionVariable_0 = startIndex;
      if (inductionVariable_0 < endIndex)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var measurable = measurables.m(i_0);
          var itemWeight = get_weight(get_rowColumnParentData_0(measurable));
          var weightedSize = weightUnitSpace * itemWeight;
          var tmp0_0 = remainder;
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          var tmp_7;
          if (isNaN_0(weightedSize)) {
            tmp_7 = 0;
          } else {
            // Inline function 'kotlin.math.roundToInt' call
            tmp_7 = roundToInt(weightedSize);
          }
          // Inline function 'kotlin.Long.minus' call
          var other_1 = tmp_7;
          remainder = subtract(tmp0_0, fromInt(other_1));
        }
         while (inductionVariable_0 < endIndex);
      var inductionVariable_1 = startIndex;
      if (inductionVariable_1 < endIndex)
        do {
          var i_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          if (placeables[i_1] == null) {
            var child_0 = measurables.m(i_1);
            var parentData_0 = get_rowColumnParentData_0(child_0);
            var weight_0 = get_weight(parentData_0);
            var tmp_8;
            if (crossAxisMax === 2147483647) {
              tmp_8 = null;
            } else {
              var tmp6_safe_receiver = parentData_0 == null ? null : parentData_0.o9t_1;
              var tmp_9;
              if (tmp6_safe_receiver == null) {
                tmp_9 = null;
              } else {
                // Inline function 'kotlin.let' call
                // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
                var this_2 = tmp6_safe_receiver.i9w_1 * crossAxisMax;
                var tmp_10;
                if (isNaN_0(this_2)) {
                  tmp_10 = 0;
                } else {
                  // Inline function 'kotlin.math.roundToInt' call
                  tmp_10 = roundToInt(this_2);
                }
                tmp_9 = tmp_10;
              }
              tmp_8 = tmp_9;
            }
            var crossAxisDesiredSize_0 = tmp_8;
            // Inline function 'androidx.compose.foundation.layout.internal.checkPrecondition' call
            if (!(weight_0 > 0)) {
              var tmp$ret$19 = 'All weights <= 0 should have placeables';
              throwIllegalStateException(tmp$ret$19);
            }
            var remainderUnit = get_sign(remainder);
            // Inline function 'kotlin.Long.minus' call
            var this_3 = remainder;
            remainder = subtract(this_3, fromInt(remainderUnit));
            var weightedSize_0 = weightUnitSpace * weight_0;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            var tmp_11;
            if (isNaN_0(weightedSize_0)) {
              tmp_11 = 0;
            } else {
              // Inline function 'kotlin.math.roundToInt' call
              tmp_11 = roundToInt(weightedSize_0);
            }
            // Inline function 'kotlin.math.max' call
            var b_0 = tmp_11 + remainderUnit | 0;
            var childMainAxisSize = Math.max(0, b_0);
            var tmp_12;
            if (get_fill(parentData_0) && !(childMainAxisSize === 2147483647)) {
              tmp_12 = childMainAxisSize;
            } else {
              tmp_12 = 0;
            }
            var tmp_13 = tmp_12;
            var tmp_14 = crossAxisDesiredSize_0 == null ? 0 : crossAxisDesiredSize_0;
            var childConstraints = _this__u8e3s4.w9t(tmp_13, tmp_14, childMainAxisSize, crossAxisDesiredSize_0 == null ? crossAxisMax : crossAxisDesiredSize_0, true);
            var placeable_0 = child_0.c6c(childConstraints);
            var placeableMainAxisSize_0 = _this__u8e3s4.t9t(placeable_0);
            var placeableCrossAxisSize_0 = _this__u8e3s4.r9t(placeable_0);
            childrenMainAxisSize[i_1 - startIndex | 0] = placeableMainAxisSize_0;
            weightedSpace = weightedSpace + placeableMainAxisSize_0 | 0;
            // Inline function 'kotlin.math.max' call
            var a_0 = crossAxisSpace;
            crossAxisSpace = Math.max(a_0, placeableCrossAxisSize_0);
            placeables[i_1] = placeable_0;
          }
        }
         while (inductionVariable_1 < endIndex);
      var tmp0_1 = convertToInt(add(numberToLong(weightedSpace), arrangementSpacingTotal));
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue = mainAxisMax - fixedSpace | 0;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_4 = tmp0_1 < 0 ? 0 : tmp0_1;
      weightedSpace = this_4 > maximumValue ? maximumValue : this_4;
    }
    if (anyAlignBy) {
      var inductionVariable_2 = startIndex;
      if (inductionVariable_2 < endIndex)
        do {
          var i_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var placeable_1 = placeables[i_2];
          var parentData_1 = get_rowColumnParentData(ensureNotNull(placeable_1));
          var tmp9_safe_receiver = get_crossAxisAlignment(parentData_1);
          var alignmentLinePosition = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.j9w(placeable_1);
          if (alignmentLinePosition == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            var placeableCrossAxisSize_1 = _this__u8e3s4.r9t(placeable_1);
            var tmp0_2 = beforeCrossAxisAlignmentLine;
            // Inline function 'kotlin.math.max' call
            var b_1 = !(alignmentLinePosition === -2147483648) ? alignmentLinePosition : 0;
            beforeCrossAxisAlignmentLine = Math.max(tmp0_2, b_1);
            var tmp0_3 = afterCrossAxisAlignmentLine;
            var tmp_15;
            if (!(alignmentLinePosition === -2147483648)) {
              tmp_15 = alignmentLinePosition;
            } else {
              tmp_15 = placeableCrossAxisSize_1;
            }
            // Inline function 'kotlin.math.max' call
            var b_2 = placeableCrossAxisSize_1 - tmp_15 | 0;
            afterCrossAxisAlignmentLine = Math.max(tmp0_3, b_2);
          }
        }
         while (inductionVariable_2 < endIndex);
    }
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_5 = fixedSpace + weightedSpace | 0;
    // Inline function 'kotlin.math.max' call
    var a_1 = this_5 < 0 ? 0 : this_5;
    var mainAxisLayoutSize = Math.max(a_1, mainAxisMin);
    var tmp0_4 = crossAxisSpace;
    // Inline function 'kotlin.comparisons.maxOf' call
    var c = beforeCrossAxisAlignmentLine + afterCrossAxisAlignmentLine | 0;
    var crossAxisLayoutSize = Math.max(tmp0_4, crossAxisMin, c);
    var mainAxisPositions = new Int32Array(subSize);
    _this__u8e3s4.u9t(mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope);
    return _this__u8e3s4.v9t(placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex);
  }
  function get_FillWholeMaxWidth() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxWidth;
  }
  var FillWholeMaxWidth;
  var FillWholeMaxHeight;
  function get_FillWholeMaxSize() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxSize;
  }
  var FillWholeMaxSize;
  var WrapContentWidthCenter;
  var WrapContentWidthStart;
  var WrapContentHeightCenter;
  var WrapContentHeightTop;
  var WrapContentSizeCenter;
  var WrapContentSizeTopStart;
  function fillMaxSize(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.y61(fraction === 1.0 ? get_FillWholeMaxSize() : Companion_instance_1.k9w(fraction));
  }
  function size(_this__u8e3s4, size) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = size$lambda(size);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectorInfo = tmp;
    return _this__u8e3s4.y61(new SizeElement(size, size, size, size, true, tmp0_inspectorInfo));
  }
  function fillMaxWidth(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.y61(fraction === 1.0 ? get_FillWholeMaxWidth() : Companion_instance_1.l9w(fraction));
  }
  function height(_this__u8e3s4, height) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = height$lambda(height);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.y61(new SizeElement(VOID, height, VOID, height, true, tmp$ret$0));
  }
  function size_0(_this__u8e3s4, width, height) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = size$lambda_0(width, height);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectorInfo = tmp;
    return _this__u8e3s4.y61(new SizeElement(width, height, width, height, true, tmp0_inspectorInfo));
  }
  function Companion() {
  }
  protoOf(Companion).l9w = function (fraction) {
    return new FillElement(Direction_Horizontal_getInstance(), fraction, 'fillMaxWidth');
  };
  protoOf(Companion).m9w = function (fraction) {
    return new FillElement(Direction_Vertical_getInstance(), fraction, 'fillMaxHeight');
  };
  protoOf(Companion).k9w = function (fraction) {
    return new FillElement(Direction_Both_getInstance(), fraction, 'fillMaxSize');
  };
  var Companion_instance_1;
  function Companion_getInstance_4() {
    return Companion_instance_1;
  }
  function FillElement(direction, fraction, inspectorName) {
    ModifierNodeElement.call(this);
    this.o9w_1 = direction;
    this.p9w_1 = fraction;
    this.q9w_1 = inspectorName;
  }
  protoOf(FillElement).i2n = function () {
    return new FillNode(this.o9w_1, this.p9w_1);
  };
  protoOf(FillElement).r9w = function (node) {
    node.g9x_1 = this.o9w_1;
    node.h9x_1 = this.p9w_1;
  };
  protoOf(FillElement).t67 = function (node) {
    return this.r9w(node instanceof FillNode ? node : THROW_CCE());
  };
  protoOf(FillElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FillElement))
      return false;
    if (!this.o9w_1.equals(other.o9w_1))
      return false;
    if (!(this.p9w_1 === other.p9w_1))
      return false;
    return true;
  };
  protoOf(FillElement).hashCode = function () {
    var result = this.o9w_1.hashCode();
    result = imul(31, result) + getNumberHashCode(this.p9w_1) | 0;
    return result;
  };
  function WrapContentElement$Companion$width$lambda($align) {
    return function (size, layoutDirection) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = size.d3s_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var tmp$ret$0 = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntOffset' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val1 = $align.x60(0, tmp$ret$0, layoutDirection);
      var tmp$ret$3 = bitwiseOr(shiftLeft(fromInt(val1), 32), bitwiseAnd(fromInt(0), new Long(-1, 0)));
      var tmp$ret$2 = _IntOffset___init__impl__rq8h7b(tmp$ret$3);
      return new IntOffset(tmp$ret$2);
    };
  }
  function WrapContentElement$Companion$height$lambda($align) {
    return function (size, _unused_var__etf5q3) {
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_0 = size.d3s_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var tmp$ret$0 = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
      // Inline function 'androidx.compose.ui.unit.IntOffset' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = $align.z60(0, tmp$ret$0);
      var tmp$ret$3 = bitwiseOr(shiftLeft(fromInt(0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$2 = _IntOffset___init__impl__rq8h7b(tmp$ret$3);
      return new IntOffset(tmp$ret$2);
    };
  }
  function WrapContentElement$Companion$size$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset($align.c61(Companion_getInstance_3().c3s_1, size.d3s_1, layoutDirection));
    };
  }
  function Companion_0() {
  }
  protoOf(Companion_0).i9x = function (align, unbounded) {
    var tmp = Direction_Horizontal_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$width$lambda(align), align, 'wrapContentWidth');
  };
  protoOf(Companion_0).j9x = function (align, unbounded) {
    var tmp = Direction_Vertical_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$height$lambda(align), align, 'wrapContentHeight');
  };
  protoOf(Companion_0).k9x = function (align, unbounded) {
    var tmp = Direction_Both_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$size$lambda(align), align, 'wrapContentSize');
  };
  var Companion_instance_2;
  function Companion_getInstance_5() {
    return Companion_instance_2;
  }
  function WrapContentElement(direction, unbounded, alignmentCallback, align, inspectorName) {
    ModifierNodeElement.call(this);
    this.m9x_1 = direction;
    this.n9x_1 = unbounded;
    this.o9x_1 = alignmentCallback;
    this.p9x_1 = align;
    this.q9x_1 = inspectorName;
  }
  protoOf(WrapContentElement).i2n = function () {
    return new WrapContentNode(this.m9x_1, this.n9x_1, this.o9x_1);
  };
  protoOf(WrapContentElement).r9x = function (node) {
    node.g9y_1 = this.m9x_1;
    node.h9y_1 = this.n9x_1;
    node.i9y_1 = this.o9x_1;
  };
  protoOf(WrapContentElement).t67 = function (node) {
    return this.r9x(node instanceof WrapContentNode ? node : THROW_CCE());
  };
  protoOf(WrapContentElement).equals = function (other) {
    if (this === other)
      return true;
    if (other === null)
      return false;
    if (!getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof WrapContentElement))
      THROW_CCE();
    if (!this.m9x_1.equals(other.m9x_1))
      return false;
    if (!(this.n9x_1 === other.n9x_1))
      return false;
    if (!equals(this.p9x_1, other.p9x_1))
      return false;
    return true;
  };
  protoOf(WrapContentElement).hashCode = function () {
    var result = this.m9x_1.hashCode();
    result = imul(31, result) + getBooleanHashCode(this.n9x_1) | 0;
    result = imul(31, result) + hashCode(this.p9x_1) | 0;
    return result;
  };
  function SizeElement(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo) {
    minWidth = minWidth === VOID ? Companion_getInstance_2().k3r_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_2().k3r_1 : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_2().k3r_1 : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_2().k3r_1 : maxHeight;
    ModifierNodeElement.call(this);
    this.k9y_1 = minWidth;
    this.l9y_1 = minHeight;
    this.m9y_1 = maxWidth;
    this.n9y_1 = maxHeight;
    this.o9y_1 = enforceIncoming;
    this.p9y_1 = inspectorInfo;
  }
  protoOf(SizeElement).i2n = function () {
    return new SizeNode(this.k9y_1, this.l9y_1, this.m9y_1, this.n9y_1, this.o9y_1);
  };
  protoOf(SizeElement).q9y = function (node) {
    node.f9z_1 = this.k9y_1;
    node.g9z_1 = this.l9y_1;
    node.h9z_1 = this.m9y_1;
    node.i9z_1 = this.n9y_1;
    node.j9z_1 = this.o9y_1;
  };
  protoOf(SizeElement).t67 = function (node) {
    return this.q9y(node instanceof SizeNode ? node : THROW_CCE());
  };
  protoOf(SizeElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SizeElement))
      return false;
    if (!equals(this.k9y_1, other.k9y_1))
      return false;
    if (!equals(this.l9y_1, other.l9y_1))
      return false;
    if (!equals(this.m9y_1, other.m9y_1))
      return false;
    if (!equals(this.n9y_1, other.n9y_1))
      return false;
    if (!(this.o9y_1 === other.o9y_1))
      return false;
    return true;
  };
  protoOf(SizeElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.k9y_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.l9y_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.m9y_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.n9y_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.o9y_1) | 0;
    return result;
  };
  function FillNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.a6c($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function FillNode(direction, fraction) {
    Node.call(this);
    this.g9x_1 = direction;
    this.h9x_1 = fraction;
  }
  protoOf(FillNode).b6c = function (_this__u8e3s4, measurable, constraints) {
    var minWidth;
    var maxWidth;
    if (_Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) && !this.g9x_1.equals(Direction_Vertical_getInstance())) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      var this_0 = _Constraints___get_maxWidth__impl__uuyqc(constraints) * this.h9x_1;
      var tmp;
      if (isNaN_0(this_0)) {
        tmp = 0;
      } else {
        // Inline function 'kotlin.math.roundToInt' call
        tmp = roundToInt(this_0);
      }
      var tmp0 = tmp;
      var tmp2 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue = _Constraints___get_maxWidth__impl__uuyqc(constraints);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_1 = tmp0 < tmp2 ? tmp2 : tmp0;
      var width = this_1 > maximumValue ? maximumValue : this_1;
      minWidth = width;
      maxWidth = width;
    } else {
      minWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      maxWidth = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var minHeight;
    var maxHeight;
    if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints) && !this.g9x_1.equals(Direction_Horizontal_getInstance())) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      var this_2 = _Constraints___get_maxHeight__impl__dt3e8z(constraints) * this.h9x_1;
      var tmp_0;
      if (isNaN_0(this_2)) {
        tmp_0 = 0;
      } else {
        // Inline function 'kotlin.math.roundToInt' call
        tmp_0 = roundToInt(this_2);
      }
      var tmp0_0 = tmp_0;
      var tmp2_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_3 = tmp0_0 < tmp2_0 ? tmp2_0 : tmp0_0;
      var height = this_3 > maximumValue_0 ? maximumValue_0 : this_3;
      minHeight = height;
      maxHeight = height;
    } else {
      minHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var placeable = measurable.c6c(Constraints(minWidth, maxWidth, minHeight, maxHeight));
    var tmp_1 = placeable.d6c_1;
    var tmp_2 = placeable.e6c_1;
    return _this__u8e3s4.i6c(tmp_1, tmp_2, VOID, FillNode$measure$lambda(placeable));
  };
  var Direction_Vertical_instance;
  var Direction_Horizontal_instance;
  var Direction_Both_instance;
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_instance;
    Direction_entriesInitialized = true;
    Direction_Vertical_instance = new Direction('Vertical', 0);
    Direction_Horizontal_instance = new Direction('Horizontal', 1);
    Direction_Both_instance = new Direction('Both', 2);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function WrapContentNode$measure$lambda(this$0, $wrapperWidth, $placeable, $wrapperHeight, $this_measure) {
    return function ($this$layout) {
      var tmp = this$0.i9y_1;
      var tmp0 = $wrapperWidth - $placeable.d6c_1 | 0;
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = $wrapperHeight - $placeable.e6c_1 | 0;
      var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$0 = _IntSize___init__impl__emcjft(tmp$ret$1);
      var position = tmp(new IntSize(tmp$ret$0), $this_measure.p4u()).s3r_1;
      $this$layout.k7h($placeable, position);
      return Unit_instance;
    };
  }
  function WrapContentNode(direction, unbounded, alignmentCallback) {
    Node.call(this);
    this.g9y_1 = direction;
    this.h9y_1 = unbounded;
    this.i9y_1 = alignmentCallback;
  }
  protoOf(WrapContentNode).b6c = function (_this__u8e3s4, measurable, constraints) {
    var tmp0_minWidth = !this.g9y_1.equals(Direction_Vertical_getInstance()) ? 0 : _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp1_minHeight = !this.g9y_1.equals(Direction_Horizontal_getInstance()) ? 0 : _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp;
    if (!this.g9y_1.equals(Direction_Vertical_getInstance()) && this.h9y_1) {
      tmp = 2147483647;
    } else {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var tmp2_maxWidth = tmp;
    var tmp_0;
    if (!this.g9y_1.equals(Direction_Horizontal_getInstance()) && this.h9y_1) {
      tmp_0 = 2147483647;
    } else {
      tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var tmp3_maxHeight = tmp_0;
    var wrappedConstraints = Constraints(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
    var placeable = measurable.c6c(wrappedConstraints);
    var wrapperWidth = coerceIn(placeable.d6c_1, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
    var wrapperHeight = coerceIn(placeable.e6c_1, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    return _this__u8e3s4.i6c(wrapperWidth, wrapperHeight, VOID, WrapContentNode$measure$lambda(this, wrapperWidth, placeable, wrapperHeight, _this__u8e3s4));
  };
  function _get_targetConstraints__wn7g24($this, $receiver) {
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_0 = $this.h9z_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_1 = $receiver.v3q($this.h9z_1);
      tmp = this_1 < 0 ? 0 : this_1;
    } else {
      tmp = 2147483647;
    }
    var maxWidth = tmp;
    var tmp_0;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_2 = $this.i9z_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_2))) {
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_3 = $receiver.v3q($this.i9z_1);
      tmp_0 = this_3 < 0 ? 0 : this_3;
    } else {
      tmp_0 = 2147483647;
    }
    var maxHeight = tmp_0;
    var tmp_1;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_4 = $this.f9z_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_4))) {
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_5 = $receiver.v3q($this.f9z_1);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_6 = this_5 < 0 ? 0 : this_5;
      // Inline function 'kotlin.let' call
      var it = this_6 > maxWidth ? maxWidth : this_6;
      tmp_1 = !(it === 2147483647) ? it : 0;
    } else {
      tmp_1 = 0;
    }
    var minWidth = tmp_1;
    var tmp_2;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_7 = $this.g9z_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_7))) {
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_8 = $receiver.v3q($this.g9z_1);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_9 = this_8 < 0 ? 0 : this_8;
      // Inline function 'kotlin.let' call
      var it_0 = this_9 > maxHeight ? maxHeight : this_9;
      tmp_2 = !(it_0 === 2147483647) ? it_0 : 0;
    } else {
      tmp_2 = 0;
    }
    var minHeight = tmp_2;
    return Constraints(minWidth, maxWidth, minHeight, maxHeight);
  }
  function SizeNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.a6c($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function SizeNode(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming) {
    minWidth = minWidth === VOID ? Companion_getInstance_2().k3r_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_2().k3r_1 : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_2().k3r_1 : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_2().k3r_1 : maxHeight;
    Node.call(this);
    this.f9z_1 = minWidth;
    this.g9z_1 = minHeight;
    this.h9z_1 = maxWidth;
    this.i9z_1 = maxHeight;
    this.j9z_1 = enforceIncoming;
  }
  protoOf(SizeNode).b6c = function (_this__u8e3s4, measurable, constraints) {
    // Inline function 'kotlin.let' call
    var targetConstraints = _get_targetConstraints__wn7g24(this, _this__u8e3s4);
    var tmp;
    if (this.j9z_1) {
      tmp = constrain(constraints, targetConstraints);
    } else {
      var tmp_0;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      var this_0 = this.f9z_1;
      if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
        tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(targetConstraints);
      } else {
        var tmp0 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
        // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
        var maximumValue = _Constraints___get_maxWidth__impl__uuyqc(targetConstraints);
        tmp_0 = tmp0 > maximumValue ? maximumValue : tmp0;
      }
      var resolvedMinWidth = tmp_0;
      var tmp_1;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      var this_1 = this.h9z_1;
      if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_1))) {
        tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(targetConstraints);
      } else {
        var tmp0_0 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
        // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
        var minimumValue = _Constraints___get_minWidth__impl__hi9lfi(targetConstraints);
        tmp_1 = tmp0_0 < minimumValue ? minimumValue : tmp0_0;
      }
      var resolvedMaxWidth = tmp_1;
      var tmp_2;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      var this_2 = this.g9z_1;
      if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_2))) {
        tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(targetConstraints);
      } else {
        var tmp0_1 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
        // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
        var maximumValue_0 = _Constraints___get_maxHeight__impl__dt3e8z(targetConstraints);
        tmp_2 = tmp0_1 > maximumValue_0 ? maximumValue_0 : tmp0_1;
      }
      var resolvedMinHeight = tmp_2;
      var tmp_3;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      var this_3 = this.i9z_1;
      if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_3))) {
        tmp_3 = _Constraints___get_maxHeight__impl__dt3e8z(targetConstraints);
      } else {
        var tmp0_2 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
        // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
        var minimumValue_0 = _Constraints___get_minHeight__impl__ev4bgx(targetConstraints);
        tmp_3 = tmp0_2 < minimumValue_0 ? minimumValue_0 : tmp0_2;
      }
      var resolvedMaxHeight = tmp_3;
      tmp = Constraints(resolvedMinWidth, resolvedMaxWidth, resolvedMinHeight, resolvedMaxHeight);
    }
    var wrappedConstraints = tmp;
    var placeable = measurable.c6c(wrappedConstraints);
    var tmp_4 = placeable.d6c_1;
    var tmp_5 = placeable.e6c_1;
    return _this__u8e3s4.i6c(tmp_4, tmp_5, VOID, SizeNode$measure$lambda(placeable));
  };
  function width(_this__u8e3s4, width) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = width$lambda(width);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.y61(new SizeElement(width, VOID, width, VOID, true, tmp$ret$0));
  }
  function size_1(_this__u8e3s4, size) {
    _init_properties_Size_kt__jcru8v();
    return size_0(_this__u8e3s4, _DpSize___get_width__impl__o3d5gt(size), _DpSize___get_height__impl__5xueo2(size));
  }
  function size$lambda($size) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.a9w_1 = 'size';
      _this__u8e3s4.b9w_1 = new Dp($size);
      return Unit_instance;
    };
  }
  function height$lambda($height) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.a9w_1 = 'height';
      _this__u8e3s4.b9w_1 = new Dp($height);
      return Unit_instance;
    };
  }
  function size$lambda_0($width, $height) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.a9w_1 = 'size';
      _this__u8e3s4.c9w_1.e9w('width', new Dp($width));
      _this__u8e3s4.c9w_1.e9w('height', new Dp($height));
      return Unit_instance;
    };
  }
  function width$lambda($width) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.a9w_1 = 'width';
      _this__u8e3s4.b9w_1 = new Dp($width);
      return Unit_instance;
    };
  }
  function Direction_Vertical_getInstance() {
    Direction_initEntries();
    return Direction_Vertical_instance;
  }
  function Direction_Horizontal_getInstance() {
    Direction_initEntries();
    return Direction_Horizontal_instance;
  }
  function Direction_Both_getInstance() {
    Direction_initEntries();
    return Direction_Both_instance;
  }
  var properties_initialized_Size_kt_x7rk2r;
  function _init_properties_Size_kt__jcru8v() {
    if (!properties_initialized_Size_kt_x7rk2r) {
      properties_initialized_Size_kt_x7rk2r = true;
      FillWholeMaxWidth = Companion_instance_1.l9w(1.0);
      FillWholeMaxHeight = Companion_instance_1.m9w(1.0);
      FillWholeMaxSize = Companion_instance_1.k9w(1.0);
      WrapContentWidthCenter = Companion_instance_2.i9x(Companion_getInstance_0().u60_1, false);
      WrapContentWidthStart = Companion_instance_2.i9x(Companion_getInstance_0().t60_1, false);
      WrapContentHeightCenter = Companion_instance_2.j9x(Companion_getInstance_0().r60_1, false);
      WrapContentHeightTop = Companion_instance_2.j9x(Companion_getInstance_0().q60_1, false);
      WrapContentSizeCenter = Companion_instance_2.k9x(Companion_getInstance_0().l60_1, false);
      WrapContentSizeTopStart = Companion_instance_2.k9x(Companion_getInstance_0().h60_1, false);
    }
  }
  function Spacer(modifier, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -72882467, 'C(Spacer)38@1430L64:Spacer.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(-72882467, $changed, -1, 'androidx.compose.foundation.layout.Spacer (Spacer.kt:37)');
    }
    // Inline function 'androidx.compose.ui.layout.Layout' call
    var modifier_0 = modifier;
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 544976794, 'CC(Layout)P(1)124@5019L27,127@5185L389:Layout.kt#80mrfh');
    if (!((0 & 1) === 0))
      modifier_0 = Companion_instance;
    var compositeKeyHash = get_currentCompositeKeyHashCode($composer_1, 0).hashCode();
    var materialized = materialize($composer_1, modifier_0);
    var localMap = $composer_1.f21();
    // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
    var factory = Companion_getInstance().d7s_1;
    var $composer_2 = $composer_1;
    sourceInformationMarkerStart($composer_2, 1405779621, 'CC(ReusableComposeNode):Composables.kt#9igjgp');
    var tmp = $composer_2.t1z();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_2.n20();
    if ($composer_2.u1z()) {
      $composer_2.o20(factory);
    } else {
      $composer_2.p20();
    }
    var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, SpacerMeasurePolicy_instance, Companion_getInstance().i7s_1);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance().h7s_1);
    Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance().m7s_1);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance().f7s_1);
    Updater__init_impl_uaeges($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance().l7s_1);
    $composer_2.q20();
    sourceInformationMarkerEnd($composer_2);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function SpacerMeasurePolicy$measure$lambda($this$layout) {
    return Unit_instance;
  }
  function SpacerMeasurePolicy() {
  }
  protoOf(SpacerMeasurePolicy).q7g = function (_this__u8e3s4, measurables, constraints) {
    // Inline function 'kotlin.with' call
    var width = _Constraints___get_hasFixedWidth__impl__4p17wc(constraints) ? _Constraints___get_maxWidth__impl__uuyqc(constraints) : 0;
    var height = _Constraints___get_hasFixedHeight__impl__y56fxx(constraints) ? _Constraints___get_maxHeight__impl__dt3e8z(constraints) : 0;
    return _this__u8e3s4.i6c(width, height, VOID, SpacerMeasurePolicy$measure$lambda);
  };
  var SpacerMeasurePolicy_instance;
  function SpacerMeasurePolicy_getInstance() {
    return SpacerMeasurePolicy_instance;
  }
  function get_EmptyWindowInsets() {
    _init_properties_WindowInsets_kt__lpu9pi();
    return EmptyWindowInsets;
  }
  var EmptyWindowInsets;
  var androidx_compose_foundation_layout_MutableWindowInsets$stable;
  var androidx_compose_foundation_layout_ValueInsets$stable;
  var androidx_compose_foundation_layout_InsetsValues$stable;
  function Companion_1() {
  }
  var Companion_instance_3;
  function Companion_getInstance_6() {
    return Companion_instance_3;
  }
  function only(_this__u8e3s4, sides) {
    _init_properties_WindowInsets_kt__lpu9pi();
    return new LimitInsets(_this__u8e3s4, sides);
  }
  function _WindowInsetsSides___init__impl__nuufbx(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function WindowInsetsSides__plus_impl_9q9m59($this, sides) {
    return _WindowInsetsSides___init__impl__nuufbx(_get_value__a43j40($this) | _get_value__a43j40(sides));
  }
  function WindowInsetsSides__hasAny_impl_v1wjnf($this, sides) {
    return !((_get_value__a43j40($this) & _get_value__a43j40(sides)) === 0);
  }
  function WindowInsetsSides__toString_impl_h23h9x($this) {
    return 'WindowInsetsSides(' + valueToString($this) + ')';
  }
  function valueToString($this) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    if ((_get_value__a43j40($this) & _get_value__a43j40(Companion_getInstance_7().o9z_1)) === _get_value__a43j40(Companion_getInstance_7().o9z_1)) {
      valueToString$appendPlus(this_0, 'Start');
    }
    if ((_get_value__a43j40($this) & _get_value__a43j40(Companion_getInstance_7().s9z_1)) === _get_value__a43j40(Companion_getInstance_7().s9z_1)) {
      valueToString$appendPlus(this_0, 'Left');
    }
    if ((_get_value__a43j40($this) & _get_value__a43j40(Companion_getInstance_7().q9z_1)) === _get_value__a43j40(Companion_getInstance_7().q9z_1)) {
      valueToString$appendPlus(this_0, 'Top');
    }
    if ((_get_value__a43j40($this) & _get_value__a43j40(Companion_getInstance_7().p9z_1)) === _get_value__a43j40(Companion_getInstance_7().p9z_1)) {
      valueToString$appendPlus(this_0, 'End');
    }
    if ((_get_value__a43j40($this) & _get_value__a43j40(Companion_getInstance_7().t9z_1)) === _get_value__a43j40(Companion_getInstance_7().t9z_1)) {
      valueToString$appendPlus(this_0, 'Right');
    }
    if ((_get_value__a43j40($this) & _get_value__a43j40(Companion_getInstance_7().r9z_1)) === _get_value__a43j40(Companion_getInstance_7().r9z_1)) {
      valueToString$appendPlus(this_0, 'Bottom');
    }
    return this_0.toString();
  }
  function Companion_2() {
    Companion_instance_4 = this;
    this.k9z_1 = _WindowInsetsSides___init__impl__nuufbx(8);
    this.l9z_1 = _WindowInsetsSides___init__impl__nuufbx(4);
    this.m9z_1 = _WindowInsetsSides___init__impl__nuufbx(2);
    this.n9z_1 = _WindowInsetsSides___init__impl__nuufbx(1);
    this.o9z_1 = WindowInsetsSides__plus_impl_9q9m59(this.k9z_1, this.n9z_1);
    this.p9z_1 = WindowInsetsSides__plus_impl_9q9m59(this.l9z_1, this.m9z_1);
    this.q9z_1 = _WindowInsetsSides___init__impl__nuufbx(16);
    this.r9z_1 = _WindowInsetsSides___init__impl__nuufbx(32);
    this.s9z_1 = WindowInsetsSides__plus_impl_9q9m59(this.k9z_1, this.m9z_1);
    this.t9z_1 = WindowInsetsSides__plus_impl_9q9m59(this.l9z_1, this.n9z_1);
    this.u9z_1 = WindowInsetsSides__plus_impl_9q9m59(this.s9z_1, this.t9z_1);
    this.v9z_1 = WindowInsetsSides__plus_impl_9q9m59(this.q9z_1, this.r9z_1);
  }
  var Companion_instance_4;
  function Companion_getInstance_7() {
    if (Companion_instance_4 == null)
      new Companion_2();
    return Companion_instance_4;
  }
  function WindowInsetsSides__hashCode_impl_w7unwc($this) {
    return $this;
  }
  function valueToString$appendPlus($this_buildString, text) {
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength($this_buildString) > 0) {
      $this_buildString.s7(_Char___init__impl__6a9atx(43));
    }
    $this_buildString.r7(text);
  }
  function FixedIntInsets(leftVal, topVal, rightVal, bottomVal) {
    this.w9z_1 = leftVal;
    this.x9z_1 = topVal;
    this.y9z_1 = rightVal;
    this.z9z_1 = bottomVal;
  }
  protoOf(FixedIntInsets).aa0 = function (density, layoutDirection) {
    return this.w9z_1;
  };
  protoOf(FixedIntInsets).ba0 = function (density) {
    return this.x9z_1;
  };
  protoOf(FixedIntInsets).ca0 = function (density, layoutDirection) {
    return this.y9z_1;
  };
  protoOf(FixedIntInsets).da0 = function (density) {
    return this.z9z_1;
  };
  protoOf(FixedIntInsets).toString = function () {
    return 'Insets(left=' + this.w9z_1 + ', top=' + this.x9z_1 + ', right=' + this.y9z_1 + ', bottom=' + this.z9z_1 + ')';
  };
  protoOf(FixedIntInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof FixedIntInsets)) {
      return false;
    }
    return this.w9z_1 === other.w9z_1 && this.x9z_1 === other.x9z_1 && this.y9z_1 === other.y9z_1 && this.z9z_1 === other.z9z_1;
  };
  protoOf(FixedIntInsets).hashCode = function () {
    var result = this.w9z_1;
    result = imul(31, result) + this.x9z_1 | 0;
    result = imul(31, result) + this.y9z_1 | 0;
    result = imul(31, result) + this.z9z_1 | 0;
    return result;
  };
  function LimitInsets(insets, sides) {
    this.ea0_1 = insets;
    this.fa0_1 = sides;
  }
  protoOf(LimitInsets).aa0 = function (density, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = Companion_getInstance_7().k9z_1;
    } else {
      tmp = Companion_getInstance_7().m9z_1;
    }
    var layoutDirectionSide = tmp;
    var allowLeft = WindowInsetsSides__hasAny_impl_v1wjnf(this.fa0_1, layoutDirectionSide);
    var tmp_0;
    if (allowLeft) {
      tmp_0 = this.ea0_1.aa0(density, layoutDirection);
    } else {
      tmp_0 = 0;
    }
    return tmp_0;
  };
  protoOf(LimitInsets).ba0 = function (density) {
    return WindowInsetsSides__hasAny_impl_v1wjnf(this.fa0_1, Companion_getInstance_7().q9z_1) ? this.ea0_1.ba0(density) : 0;
  };
  protoOf(LimitInsets).ca0 = function (density, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = Companion_getInstance_7().l9z_1;
    } else {
      tmp = Companion_getInstance_7().n9z_1;
    }
    var layoutDirectionSide = tmp;
    var allowRight = WindowInsetsSides__hasAny_impl_v1wjnf(this.fa0_1, layoutDirectionSide);
    var tmp_0;
    if (allowRight) {
      tmp_0 = this.ea0_1.ca0(density, layoutDirection);
    } else {
      tmp_0 = 0;
    }
    return tmp_0;
  };
  protoOf(LimitInsets).da0 = function (density) {
    return WindowInsetsSides__hasAny_impl_v1wjnf(this.fa0_1, Companion_getInstance_7().r9z_1) ? this.ea0_1.da0(density) : 0;
  };
  protoOf(LimitInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof LimitInsets)) {
      return false;
    }
    return equals(this.ea0_1, other.ea0_1) && this.fa0_1 === other.fa0_1;
  };
  protoOf(LimitInsets).hashCode = function () {
    var result = hashCode(this.ea0_1);
    result = imul(31, result) + WindowInsetsSides__hashCode_impl_w7unwc(this.fa0_1) | 0;
    return result;
  };
  protoOf(LimitInsets).toString = function () {
    return '(' + toString(this.ea0_1) + ' only ' + WindowInsetsSides__toString_impl_h23h9x(this.fa0_1) + ')';
  };
  function union(_this__u8e3s4, insets) {
    _init_properties_WindowInsets_kt__lpu9pi();
    return new UnionInsets(_this__u8e3s4, insets);
  }
  function makeEmptyWindowInsets() {
    _init_properties_WindowInsets_kt__lpu9pi();
    return get_EmptyWindowInsets();
  }
  function WindowInsets(left, top, right, bottom) {
    left = left === VOID ? 0 : left;
    top = top === VOID ? 0 : top;
    right = right === VOID ? 0 : right;
    bottom = bottom === VOID ? 0 : bottom;
    _init_properties_WindowInsets_kt__lpu9pi();
    return new FixedIntInsets(left, top, right, bottom);
  }
  function exclude(_this__u8e3s4, insets) {
    _init_properties_WindowInsets_kt__lpu9pi();
    return new ExcludeInsets(_this__u8e3s4, insets);
  }
  function UnionInsets(first, second) {
    this.ga0_1 = first;
    this.ha0_1 = second;
  }
  protoOf(UnionInsets).aa0 = function (density, layoutDirection) {
    var tmp0 = this.ga0_1.aa0(density, layoutDirection);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = this.ha0_1.aa0(density, layoutDirection);
    return Math.max(tmp0, b);
  };
  protoOf(UnionInsets).ba0 = function (density) {
    var tmp0 = this.ga0_1.ba0(density);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = this.ha0_1.ba0(density);
    return Math.max(tmp0, b);
  };
  protoOf(UnionInsets).ca0 = function (density, layoutDirection) {
    var tmp0 = this.ga0_1.ca0(density, layoutDirection);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = this.ha0_1.ca0(density, layoutDirection);
    return Math.max(tmp0, b);
  };
  protoOf(UnionInsets).da0 = function (density) {
    var tmp0 = this.ga0_1.da0(density);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = this.ha0_1.da0(density);
    return Math.max(tmp0, b);
  };
  protoOf(UnionInsets).hashCode = function () {
    return hashCode(this.ga0_1) + imul(hashCode(this.ha0_1), 31) | 0;
  };
  protoOf(UnionInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof UnionInsets)) {
      return false;
    }
    return equals(other.ga0_1, this.ga0_1) && equals(other.ha0_1, this.ha0_1);
  };
  protoOf(UnionInsets).toString = function () {
    return '(' + toString(this.ga0_1) + ' \u222A ' + toString(this.ha0_1) + ')';
  };
  function ExcludeInsets(included, excluded) {
    this.ia0_1 = included;
    this.ja0_1 = excluded;
  }
  protoOf(ExcludeInsets).aa0 = function (density, layoutDirection) {
    return coerceAtLeast(this.ia0_1.aa0(density, layoutDirection) - this.ja0_1.aa0(density, layoutDirection) | 0, 0);
  };
  protoOf(ExcludeInsets).ba0 = function (density) {
    return coerceAtLeast(this.ia0_1.ba0(density) - this.ja0_1.ba0(density) | 0, 0);
  };
  protoOf(ExcludeInsets).ca0 = function (density, layoutDirection) {
    return coerceAtLeast(this.ia0_1.ca0(density, layoutDirection) - this.ja0_1.ca0(density, layoutDirection) | 0, 0);
  };
  protoOf(ExcludeInsets).da0 = function (density) {
    return coerceAtLeast(this.ia0_1.da0(density) - this.ja0_1.da0(density) | 0, 0);
  };
  protoOf(ExcludeInsets).toString = function () {
    return '(' + toString(this.ia0_1) + ' - ' + toString(this.ja0_1) + ')';
  };
  protoOf(ExcludeInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof ExcludeInsets)) {
      return false;
    }
    return equals(other.ia0_1, this.ia0_1) && equals(other.ja0_1, this.ja0_1);
  };
  protoOf(ExcludeInsets).hashCode = function () {
    return imul(31, hashCode(this.ia0_1)) + hashCode(this.ja0_1) | 0;
  };
  function asPaddingValues(_this__u8e3s4, density) {
    _init_properties_WindowInsets_kt__lpu9pi();
    return new InsetsPaddingValues(_this__u8e3s4, density);
  }
  function InsetsPaddingValues(insets, density) {
    this.ka0_1 = insets;
    this.la0_1 = density;
  }
  protoOf(InsetsPaddingValues).z9t = function (layoutDirection) {
    // Inline function 'kotlin.with' call
    var $this$with = this.la0_1;
    return $this$with.b3r(this.ka0_1.aa0($this$with, layoutDirection));
  };
  protoOf(InsetsPaddingValues).e9u = function () {
    // Inline function 'kotlin.with' call
    var $this$with = this.la0_1;
    return $this$with.b3r(this.ka0_1.ba0($this$with));
  };
  protoOf(InsetsPaddingValues).y9t = function (layoutDirection) {
    // Inline function 'kotlin.with' call
    var $this$with = this.la0_1;
    return $this$with.b3r(this.ka0_1.ca0($this$with, layoutDirection));
  };
  protoOf(InsetsPaddingValues).f9u = function () {
    // Inline function 'kotlin.with' call
    var $this$with = this.la0_1;
    return $this$with.b3r(this.ka0_1.da0($this$with));
  };
  protoOf(InsetsPaddingValues).toString = function () {
    return 'InsetsPaddingValues(insets=' + toString(this.ka0_1) + ', density=' + toString(this.la0_1) + ')';
  };
  protoOf(InsetsPaddingValues).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof InsetsPaddingValues)) {
      return false;
    }
    return equals(this.ka0_1, other.ka0_1) && equals(this.la0_1, other.la0_1);
  };
  protoOf(InsetsPaddingValues).hashCode = function () {
    var result = hashCode(this.ka0_1);
    result = imul(31, result) + hashCode(this.la0_1) | 0;
    return result;
  };
  var properties_initialized_WindowInsets_kt_2k4ux4;
  function _init_properties_WindowInsets_kt__lpu9pi() {
    if (!properties_initialized_WindowInsets_kt_2k4ux4) {
      properties_initialized_WindowInsets_kt_2k4ux4 = true;
      EmptyWindowInsets = new FixedIntInsets(0, 0, 0, 0);
      androidx_compose_foundation_layout_MutableWindowInsets$stable = 0;
      androidx_compose_foundation_layout_ValueInsets$stable = 0;
      androidx_compose_foundation_layout_InsetsValues$stable = 0;
    }
  }
  var androidx_compose_foundation_layout_InsetsPaddingModifier$stable;
  var androidx_compose_foundation_layout_InsetsConsumingModifierNode$stable;
  var androidx_compose_foundation_layout_InsetsPaddingModifierNode$stable;
  function windowInsetsPadding(_this__u8e3s4, insets) {
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = windowInsetsPadding$lambda(insets);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.y61(new InsetsPaddingModifierElement(insets, tmp$ret$0));
  }
  function InsetsPaddingModifierElement(insets, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.na0_1 = insets;
    this.oa0_1 = inspectorInfo;
  }
  protoOf(InsetsPaddingModifierElement).i2n = function () {
    return new InsetsPaddingModifierNode(this.na0_1);
  };
  protoOf(InsetsPaddingModifierElement).pa0 = function (node) {
    node.ha1(this.na0_1);
  };
  protoOf(InsetsPaddingModifierElement).t67 = function (node) {
    return this.pa0(node instanceof InsetsPaddingModifierNode ? node : THROW_CCE());
  };
  protoOf(InsetsPaddingModifierElement).hashCode = function () {
    return hashCode(this.na0_1);
  };
  protoOf(InsetsPaddingModifierElement).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof InsetsPaddingModifierElement)) {
      return false;
    }
    return equals(other.na0_1, this.na0_1);
  };
  function InsetsPaddingModifierNode$measure$lambda($placeable, $left, $top) {
    return function ($this$layout) {
      $this$layout.i7h($placeable, $left, $top);
      return Unit_instance;
    };
  }
  function InsetsPaddingModifierNode(insets) {
    InsetsConsumingModifierNode.call(this);
    this.ga1_1 = insets;
  }
  protoOf(InsetsPaddingModifierNode).ia1 = function (ancestorConsumedInsets) {
    return union(ancestorConsumedInsets, this.ga1_1);
  };
  protoOf(InsetsPaddingModifierNode).ja1 = function () {
    protoOf(InsetsConsumingModifierNode).ja1.call(this);
    invalidateMeasurement(this);
  };
  protoOf(InsetsPaddingModifierNode).ha1 = function (insets) {
    if (!equals(insets, this.ga1_1)) {
      this.ga1_1 = insets;
      this.ja1();
    }
  };
  protoOf(InsetsPaddingModifierNode).b6c = function (_this__u8e3s4, measurable, constraints) {
    var left = this.za1_1.aa0(_this__u8e3s4, _this__u8e3s4.p4u()) - this.ya1_1.aa0(_this__u8e3s4, _this__u8e3s4.p4u()) | 0;
    var top = this.za1_1.ba0(_this__u8e3s4) - this.ya1_1.ba0(_this__u8e3s4) | 0;
    var right = this.za1_1.ca0(_this__u8e3s4, _this__u8e3s4.p4u()) - this.ya1_1.ca0(_this__u8e3s4, _this__u8e3s4.p4u()) | 0;
    var bottom = this.za1_1.da0(_this__u8e3s4) - this.ya1_1.da0(_this__u8e3s4) | 0;
    var horizontal = left + right | 0;
    var vertical = top + bottom | 0;
    var childConstraints = offset(constraints, -horizontal | 0, -vertical | 0);
    var placeable = measurable.c6c(childConstraints);
    var width = constrainWidth(constraints, placeable.d6c_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.e6c_1 + vertical | 0);
    return _this__u8e3s4.i6c(width, height, VOID, InsetsPaddingModifierNode$measure$lambda(placeable, left, top));
  };
  function setAncestorConsumedInsets($this, ancestorConsumedInsets) {
    if (!equals($this.ya1_1, ancestorConsumedInsets)) {
      $this.ya1_1 = ancestorConsumedInsets;
      $this.ja1();
    }
  }
  function invalidateChildConsumedInsets($this) {
    var tmp = $this.o66();
    traverseDescendants($this, tmp, InsetsConsumingModifierNode$invalidateChildConsumedInsets$lambda($this));
  }
  function InsetsConsumingModifierNode$onAttach$lambda(this$0) {
    return function (parent) {
      var tmp = this$0;
      tmp.ya1_1 = (parent instanceof InsetsConsumingModifierNode ? parent : THROW_CCE()).za1_1;
      return false;
    };
  }
  function InsetsConsumingModifierNode$invalidateChildConsumedInsets$lambda(this$0) {
    return function (child) {
      setAncestorConsumedInsets(child instanceof InsetsConsumingModifierNode ? child : THROW_CCE(), this$0.za1_1);
      return TraverseDescendantsAction_SkipSubtreeAndContinueTraversal_getInstance();
    };
  }
  function InsetsConsumingModifierNode() {
    Node.call(this);
    this.ya1_1 = makeEmptyWindowInsets();
    this.za1_1 = makeEmptyWindowInsets();
  }
  protoOf(InsetsConsumingModifierNode).o66 = function () {
    return 'androidx.compose.foundation.layout.ConsumedInsetsProvider';
  };
  protoOf(InsetsConsumingModifierNode).b63 = function () {
    var tmp = this.o66();
    traverseAncestors(this, tmp, InsetsConsumingModifierNode$onAttach$lambda(this));
    this.ja1();
    protoOf(Node).b63.call(this);
  };
  protoOf(InsetsConsumingModifierNode).d63 = function () {
    this.za1_1 = this.ya1_1;
    invalidateChildConsumedInsets(this);
    protoOf(Node).d63.call(this);
  };
  protoOf(InsetsConsumingModifierNode).g63 = function () {
    protoOf(Node).g63.call(this);
    this.ya1_1 = makeEmptyWindowInsets();
  };
  protoOf(InsetsConsumingModifierNode).ja1 = function () {
    this.za1_1 = this.ia1(this.ya1_1);
    invalidateChildConsumedInsets(this);
  };
  function onConsumedWindowInsetsChanged(_this__u8e3s4, block) {
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = onConsumedWindowInsetsChanged$lambda(block);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.y61(new ConsumedInsetsModifierElement(block, tmp$ret$0));
  }
  function ConsumedInsetsModifierElement(block, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.ba2_1 = block;
    this.ca2_1 = inspectorInfo;
  }
  protoOf(ConsumedInsetsModifierElement).i2n = function () {
    return new ConsumedInsetsModifierNode(this.ba2_1);
  };
  protoOf(ConsumedInsetsModifierElement).da2 = function (node) {
    node.va2(this.ba2_1);
  };
  protoOf(ConsumedInsetsModifierElement).t67 = function (node) {
    return this.da2(node instanceof ConsumedInsetsModifierNode ? node : THROW_CCE());
  };
  protoOf(ConsumedInsetsModifierElement).hashCode = function () {
    return hashCode(this.ba2_1);
  };
  protoOf(ConsumedInsetsModifierElement).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof ConsumedInsetsModifierElement)) {
      return false;
    }
    return other.ba2_1 === this.ba2_1;
  };
  function ConsumedInsetsModifierNode(block) {
    InsetsConsumingModifierNode.call(this);
    this.ua2_1 = block;
  }
  protoOf(ConsumedInsetsModifierNode).ia1 = function (ancestorConsumedInsets) {
    this.ua2_1(ancestorConsumedInsets);
    return ancestorConsumedInsets;
  };
  protoOf(ConsumedInsetsModifierNode).va2 = function (block) {
    if (!(block === this.ua2_1)) {
      this.ua2_1 = block;
    }
  };
  function windowInsetsPadding$lambda($insets) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.a9w_1 = 'windowInsetsPadding';
      _this__u8e3s4.c9w_1.e9w('insets', $insets);
      return Unit_instance;
    };
  }
  function onConsumedWindowInsetsChanged$lambda($block) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.a9w_1 = 'onConsumedWindowInsetsChanged';
      _this__u8e3s4.c9w_1.e9w('block', $block);
      return Unit_instance;
    };
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function get_systemBars(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1407564230, 'C(<get-systemBars>)59@2289L7:WindowInsets.skiko.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(1407564230, $changed, -1, 'androidx.compose.foundation.layout.<get-systemBars> (WindowInsets.skiko.kt:59)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalPlatformWindowInsets();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.g21(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = toWindowInsets(tmp0.i9e());
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  }
  function toWindowInsets(_this__u8e3s4) {
    return new toWindowInsets$1(_this__u8e3s4);
  }
  function toWindowInsets$1($this_toWindowInsets) {
    this.wa2_1 = $this_toWindowInsets;
  }
  protoOf(toWindowInsets$1).aa0 = function (density, layoutDirection) {
    return this.wa2_1.q6h();
  };
  protoOf(toWindowInsets$1).ba0 = function (density) {
    return this.wa2_1.y7j();
  };
  protoOf(toWindowInsets$1).ca0 = function (density, layoutDirection) {
    return this.wa2_1.r6h();
  };
  protoOf(toWindowInsets$1).da0 = function (density) {
    return this.wa2_1.z7j();
  };
  //region block: post-declaration
  protoOf(Arrangement$Start$1).t9r = get_spacing;
  protoOf(Arrangement$End$1).t9r = get_spacing;
  protoOf(Arrangement$Top$1).t9r = get_spacing_0;
  protoOf(Arrangement$Bottom$1).t9r = get_spacing_0;
  protoOf(ColumnMeasurePolicy).x9t = createConstraints$default;
  protoOf(RowMeasurePolicy).x9t = createConstraints$default;
  //endregion
  //region block: init
  androidx_compose_foundation_layout_Arrangement_Absolute$stable = 0;
  androidx_compose_foundation_layout_Arrangement_SpacedAligned$stable = 0;
  androidx_compose_foundation_layout_Arrangement$stable = 0;
  BoxScopeInstance_instance = new BoxScopeInstance();
  ColumnScopeInstance_instance = new ColumnScopeInstance();
  androidx_compose_foundation_layout_ComposeFoundationLayoutFlags$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowRowScopeImpl$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowColumnScopeImpl$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowRowOverflowScopeImpl$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowColumnOverflowScopeImpl$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowItemIterator$stable = 8;
  androidx_compose_foundation_layout_FlowLineInfo$stable = 8;
  androidx_compose_foundation_layout_FlowLayoutBuildingBlocks_WrapInfo$stable = 0;
  androidx_compose_foundation_layout_FlowLayoutBuildingBlocks_WrapEllipsisInfo$stable = 8;
  androidx_compose_foundation_layout_FlowLayoutBuildingBlocks$stable = 8;
  androidx_compose_foundation_layout_FlowRowOverflow$stable = 0;
  androidx_compose_foundation_layout_FlowColumnOverflow$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowRowOverflow$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowColumnOverflow$stable = 0;
  androidx_compose_foundation_layout_FlowLayoutOverflow$stable = 0;
  androidx_compose_foundation_layout_FlowLayoutOverflowState$stable = 8;
  androidx_compose_foundation_layout_PaddingValues_Absolute$stable = 0;
  androidx_compose_foundation_layout_PaddingValuesImpl$stable = 0;
  RowScopeInstance_instance = new RowScopeInstance();
  Companion_instance_1 = new Companion();
  Companion_instance_2 = new Companion_0();
  SpacerMeasurePolicy_instance = new SpacerMeasurePolicy();
  Companion_instance_3 = new Companion_1();
  androidx_compose_foundation_layout_InsetsPaddingModifier$stable = 0;
  androidx_compose_foundation_layout_InsetsConsumingModifierNode$stable = 8;
  androidx_compose_foundation_layout_InsetsPaddingModifierNode$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BoxWithConstraints;
  _.$_$.b = Box;
  _.$_$.c = PaddingValues;
  _.$_$.d = PaddingValues_0;
  _.$_$.e = Spacer;
  _.$_$.f = WindowInsets;
  _.$_$.g = asPaddingValues;
  _.$_$.h = calculateEndPadding;
  _.$_$.i = calculateStartPadding;
  _.$_$.j = columnMeasurePolicy;
  _.$_$.k = exclude;
  _.$_$.l = fillMaxSize;
  _.$_$.m = fillMaxWidth;
  _.$_$.n = height;
  _.$_$.o = maybeCachedBoxMeasurePolicy;
  _.$_$.p = onConsumedWindowInsetsChanged;
  _.$_$.q = only;
  _.$_$.r = padding_2;
  _.$_$.s = padding_1;
  _.$_$.t = padding;
  _.$_$.u = padding_0;
  _.$_$.v = rowMeasurePolicy;
  _.$_$.w = size_1;
  _.$_$.x = size;
  _.$_$.y = get_systemBars;
  _.$_$.z = width;
  _.$_$.a1 = windowInsetsPadding;
  _.$_$.b1 = Arrangement_getInstance;
  _.$_$.c1 = BoxScopeInstance_instance;
  _.$_$.d1 = ColumnScopeInstance_instance;
  _.$_$.e1 = RowScopeInstance_instance;
  _.$_$.f1 = Companion_instance_3;
  _.$_$.g1 = Companion_getInstance_7;
  _.$_$.h1 = WindowInsetsSides__plus_impl_9q9m59;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-foundation-foundation-layout.js.map
