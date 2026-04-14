(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './components-resources-library.js', './androidx-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-foundation-foundation-layout.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-material3-material3.js', './compose-multiplatform-core-compose-ui-ui-text.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./components-resources-library.js'), require('./androidx-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-foundation-foundation-layout.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-material3-material3.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Kurlik:composeApp'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Kurlik:composeApp'.");
    }
    if (typeof globalThis['components-resources-library'] === 'undefined') {
      throw new Error("Error loading module 'Kurlik:composeApp'. Its dependency 'components-resources-library' was not found. Please, check whether 'components-resources-library' is loaded prior to 'Kurlik:composeApp'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'Kurlik:composeApp'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'Kurlik:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'Kurlik:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'Kurlik:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'Kurlik:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'Kurlik:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'Kurlik:composeApp'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation-layout' is loaded prior to 'Kurlik:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'Kurlik:composeApp'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'Kurlik:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-material3-material3'] === 'undefined') {
      throw new Error("Error loading module 'Kurlik:composeApp'. Its dependency 'compose-multiplatform-core-compose-material3-material3' was not found. Please, check whether 'compose-multiplatform-core-compose-material3-material3' is loaded prior to 'Kurlik:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'Kurlik:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'Kurlik:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'Kurlik:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'Kurlik:composeApp'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'Kurlik:composeApp'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'Kurlik:composeApp'.");
    }
    globalThis['Kurlik:composeApp'] = factory(typeof globalThis['Kurlik:composeApp'] === 'undefined' ? {} : globalThis['Kurlik:composeApp'], globalThis['kotlin-kotlin-stdlib'], globalThis['components-resources-library'], globalThis['androidx-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-material3-material3'], globalThis['compose-multiplatform-core-compose-ui-ui-text'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_components_resources_library, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var KProperty1 = kotlin_kotlin.$_$.gb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.k9;
  var emptySet = kotlin_kotlin.$_$.w4;
  var Long = kotlin_kotlin.$_$.gd;
  var ResourceItem = kotlin_components_resources_library.$_$.b;
  var setOf = kotlin_kotlin.$_$.o6;
  var DrawableResource = kotlin_components_resources_library.$_$.a;
  var lazy = kotlin_kotlin.$_$.zd;
  var protoOf = kotlin_kotlin.$_$.fa;
  var initMetadataForObject = kotlin_kotlin.$_$.t9;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.t1;
  var Unit_instance = kotlin_kotlin.$_$.n;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.h1;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.y1;
  var getStringHashCode = kotlin_kotlin.$_$.l9;
  var initMetadataForClass = kotlin_kotlin.$_$.n9;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.p6;
  var width = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.z;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.u;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.d;
  var MaterialTheme_instance = kotlin_org_jetbrains_compose_material3_material3.$_$.l;
  var androidx_compose_material3_MaterialTheme$stableprop_getter = kotlin_org_jetbrains_compose_material3_material3.$_$.h;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.c1;
  var VOID = kotlin_kotlin.$_$.c;
  var clickable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e1;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.r;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.s1;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.o6;
  var columnMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j;
  var get_currentCompositeKeyHashCode = kotlin_androidx_compose_runtime_runtime.$_$.d1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.a6;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.l6;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.g1;
  var Applier = kotlin_androidx_compose_runtime_runtime.$_$.h;
  var isInterface = kotlin_kotlin.$_$.w9;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.e2;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.h2;
  var Updater__init_impl_uaeges = kotlin_androidx_compose_runtime_runtime.$_$.f2;
  var Updater__reconcile_impl_1mfi6g = kotlin_androidx_compose_runtime_runtime.$_$.g2;
  var ColumnScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.d1;
  var rowMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.v;
  var RowScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e1;
  var Spacer = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var height = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.n;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.r;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g3;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.c1;
  var Text = kotlin_org_jetbrains_compose_material3_material3.$_$.e;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x3;
  var padding_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u;
  var size = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.x;
  var painterResource = kotlin_components_resources_library.$_$.c;
  var Icon = kotlin_org_jetbrains_compose_material3_material3.$_$.b;
  var rememberLazyListState = kotlin_org_jetbrains_compose_foundation_foundation.$_$.q;
  var Companion_getInstance_2 = kotlin_androidx_compose_runtime_runtime.$_$.a2;
  var LazyRow = kotlin_org_jetbrains_compose_foundation_foundation.$_$.p;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m;
  var get_CircleShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.r;
  var Box = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b;
  var LaunchedEffect = kotlin_androidx_compose_runtime_runtime.$_$.q;
  var maybeCachedBoxMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.o;
  var BoxScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c1;
  var CoroutineImpl = kotlin_kotlin.$_$.s7;
  var THROW_CCE = kotlin_kotlin.$_$.ld;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var compareTo = kotlin_kotlin.$_$.b9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.d7;
  var initMetadataForLambda = kotlin_kotlin.$_$.s9;
  var _FabPosition___init__impl__9ib2hj = kotlin_org_jetbrains_compose_material3_material3.$_$.n;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.a3;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c3;
  var Scaffold = kotlin_org_jetbrains_compose_material3_material3.$_$.d;
  var IconButtonDefaults_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.k;
  var androidx_compose_material3_IconButtonDefaults$stableprop_getter = kotlin_org_jetbrains_compose_material3_material3.$_$.g;
  var IconButton = kotlin_org_jetbrains_compose_material3_material3.$_$.a;
  var TopAppBarDefaults_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.m;
  var androidx_compose_material3_TopAppBarDefaults$stableprop_getter = kotlin_org_jetbrains_compose_material3_material3.$_$.i;
  var TopAppBar = kotlin_org_jetbrains_compose_material3_material3.$_$.f;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var padding_1 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.s;
  var listOf = kotlin_kotlin.$_$.a6;
  var rememberComposableLambda = kotlin_androidx_compose_runtime_runtime.$_$.c;
  var BoxWithConstraints = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j2;
  var lightColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.j;
  var MaterialTheme = kotlin_org_jetbrains_compose_material3_material3.$_$.c;
  var ComposeViewport = kotlin_org_jetbrains_compose_ui_ui.$_$.q5;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(drawable, 'drawable');
  initMetadataForObject(ComposableSingletons$AppKt, 'ComposableSingletons$AppKt');
  initMetadataForClass(EventCardData, 'EventCardData');
  initMetadataForLambda(EventsCarousel$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(ComposableSingletons$MainScreenKt, 'ComposableSingletons$MainScreenKt');
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  //endregion
  function get_bell(_this__u8e3s4) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    var tmp0 = bell$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('bell', 1, tmp, _get_bell_$ref_9s9t3r(), null);
    return tmp0.x1();
  }
  var bell$delegate;
  function get_calendar(_this__u8e3s4) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    var tmp0 = calendar$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('calendar', 1, tmp, _get_calendar_$ref_rmd9ks(), null);
    return tmp0.x1();
  }
  var calendar$delegate;
  function get_clock(_this__u8e3s4) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    var tmp0 = clock$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('clock', 1, tmp, _get_clock_$ref_4574zy(), null);
    return tmp0.x1();
  }
  var clock$delegate;
  var compose_multiplatform$delegate;
  function bell$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:bell', setOf(new ResourceItem(tmp$ret$0, 'composeResources/kurlik.composeapp.generated.resources/drawable/bell.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function _get_bell_$ref_9s9t3r() {
    return function (p0) {
      return get_bell(p0);
    };
  }
  function calendar$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:calendar', setOf(new ResourceItem(tmp$ret$0, 'composeResources/kurlik.composeapp.generated.resources/drawable/calendar.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function _get_calendar_$ref_rmd9ks() {
    return function (p0) {
      return get_calendar(p0);
    };
  }
  function clock$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:clock', setOf(new ResourceItem(tmp$ret$0, 'composeResources/kurlik.composeapp.generated.resources/drawable/clock.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function _get_clock_$ref_4574zy() {
    return function (p0) {
      return get_clock(p0);
    };
  }
  function compose_multiplatform$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:compose_multiplatform', setOf(new ResourceItem(tmp$ret$0, 'composeResources/kurlik.composeapp.generated.resources/drawable/compose-multiplatform.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  var properties_initialized_Drawable0_commonMain_kt_e3wo9q;
  function _init_properties_Drawable0_commonMain_kt__plv2f4() {
    if (!properties_initialized_Drawable0_commonMain_kt_e3wo9q) {
      properties_initialized_Drawable0_commonMain_kt_e3wo9q = true;
      bell$delegate = lazy(bell$delegate$lambda);
      calendar$delegate = lazy(calendar$delegate$lambda);
      clock$delegate = lazy(clock$delegate$lambda);
      compose_multiplatform$delegate = lazy(compose_multiplatform$delegate$lambda);
    }
  }
  var kurlik_composeapp_generated_resources_Res_drawable$stable;
  var kurlik_composeapp_generated_resources_Res_string$stable;
  var kurlik_composeapp_generated_resources_Res_array$stable;
  var kurlik_composeapp_generated_resources_Res_plurals$stable;
  var kurlik_composeapp_generated_resources_Res_font$stable;
  var kurlik_composeapp_generated_resources_Res$stable;
  function drawable() {
  }
  var drawable_instance;
  function drawable_getInstance() {
    return drawable_instance;
  }
  function App($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.g20(1798245421);
    sourceInformation($composer_0, 'C(App)10@269L40:App.kt#tcg28d');
    if ($composer_0.d21(!($changed === 0), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1798245421, $changed, -1, 'com.kurlik.frontend.App (App.kt:9)');
      }
      KurlikTheme(ComposableSingletons$AppKt_getInstance().xf6_1, $composer_0, 6);
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
      tmp0_safe_receiver.k2m(App$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppKt$lambda$_945763035$lambda_mtpnxo($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C11@291L12:App.kt#tcg28d');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-945763035, $changed, -1, 'com.kurlik.frontend.ComposableSingletons$AppKt.lambda$-945763035.<anonymous> (App.kt:11)');
      }
      MainScreen($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableSingletons$AppKt() {
    ComposableSingletons$AppKt_instance = this;
    var tmp = this;
    tmp.xf6_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-945763035, false, ComposableSingletons$AppKt$lambda$_945763035$lambda_mtpnxo));
  }
  var ComposableSingletons$AppKt_instance;
  function ComposableSingletons$AppKt_getInstance() {
    if (ComposableSingletons$AppKt_instance == null)
      new ComposableSingletons$AppKt();
    return ComposableSingletons$AppKt_instance;
  }
  function App$lambda($$changed) {
    return function ($composer, $force) {
      App($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var com_kurlik_frontend_Greeting$stable;
  var com_kurlik_frontend_domain_EventCardData$stable;
  function EventCardData(title, place, time, date) {
    this.yf6_1 = title;
    this.zf6_1 = place;
    this.af7_1 = time;
    this.bf7_1 = date;
  }
  protoOf(EventCardData).toString = function () {
    return 'EventCardData(title=' + this.yf6_1 + ', place=' + this.zf6_1 + ', time=' + this.af7_1 + ', date=' + this.bf7_1 + ')';
  };
  protoOf(EventCardData).hashCode = function () {
    var result = getStringHashCode(this.yf6_1);
    result = imul(result, 31) + getStringHashCode(this.zf6_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.af7_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.bf7_1) | 0;
    return result;
  };
  protoOf(EventCardData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EventCardData))
      return false;
    if (!(this.yf6_1 === other.yf6_1))
      return false;
    if (!(this.zf6_1 === other.zf6_1))
      return false;
    if (!(this.af7_1 === other.af7_1))
      return false;
    if (!(this.bf7_1 === other.bf7_1))
      return false;
    return true;
  };
  function EventCardItem(width_0, eventCardData, onClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.g20(-722299894);
    sourceInformation($composer_0, 'C(EventCardItem)P(2:c#ui.unit.Dp)42@1665L11,38@1520L1182:EventCardItem.kt#9wqulm');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.z20(_Dp___get_value__impl__geb1vb(width_0)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w20(eventCardData) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.b21(onClick) ? 256 : 128);
    if ($composer_0.d21(!(($dirty & 147) === 146), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-722299894, $dirty, -1, 'com.kurlik.frontend.presentation.elements.EventCardItem (EventCardItem.kt:37)');
      }
      var tmp = width(Companion_instance, width_0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(20);
      var tmp_0 = clickable(background(clip(tmp, RoundedCornerShape(tmp$ret$0)), MaterialTheme_instance.le1($composer_0, androidx_compose_material3_MaterialTheme$stableprop_getter()).oe1_1), VOID, VOID, VOID, VOID, onClick);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(12);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = padding(tmp_0, tmp$ret$1);
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1341605231, 'CC(Column)P(2,3,1)87@4443L61,88@4509L134:Column.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier = Companion_instance;
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().y9r_1;
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance().t60_1;
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
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
      sourceInformationMarkerStart($composer_4, 2093002350, 'C89@4557L9:Column.kt#2w3rfo');
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -1527196121, 'C46@1772L320,57@2101L41,60@2231L11,61@2291L10,58@2151L224,65@2429L10,67@2535L11,68@2614L10,64@2384L312:EventCardItem.kt#9wqulm');
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_1 = null;
      var horizontalArrangement = null;
      var verticalAlignment = null;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 844473419, 'CC(Row)P(2,1,3)99@5125L58,100@5188L131:Row.kt#2w3rfo');
      if (!((7 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((7 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().w9r_1;
      if (!((7 & 4) === 0))
        verticalAlignment = Companion_getInstance().q60_1;
      var measurePolicy_0 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1159599143, 'CC(Layout)P(!1,2)81@3355L27,84@3521L416:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.f21();
      var materialized_0 = materialize($composer_7, modifier_2);
      var tmp0_0 = Companion_getInstance_0().d7s_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
      var tmp_2 = $composer_8.t1z();
      if (!isInterface(tmp_2, Applier)) {
        invalidApplier();
      }
      $composer_8.n20();
      if ($composer_8.u1z()) {
        $composer_8.o20(tmp0_0);
      } else {
        $composer_8.p20();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_0().i7s_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_0().h7s_1);
      Updater__init_impl_uaeges($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_0().l7s_1);
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_0().m7s_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_0().f7s_1);
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, 1456264949, 'C101@5233L9:Row.kt#2w3rfo');
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, 236088891, 'C47@1790L112,51@1915L39,52@1967L115:EventCardItem.kt#9wqulm');
      TextWithIcon(eventCardData.af7_1, get_clock(drawable_instance), $composer_10, 0);
      var tmp_3 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$14 = _Dp___init__impl__ms3zkb(3);
      Spacer(width(tmp_3, tmp$ret$14), $composer_10, 6);
      TextWithIcon(eventCardData.bf7_1, get_calendar(drawable_instance), $composer_10, 0);
      sourceInformationMarkerEnd($composer_10);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.q20();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      var tmp_4 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$15 = _Dp___init__impl__ms3zkb(10);
      Spacer(height(tmp_4, tmp$ret$15), $composer_5, 6);
      var tmp_5 = MaterialTheme_instance.le1($composer_5, androidx_compose_material3_MaterialTheme$stableprop_getter()).pe1_1;
      var tmp_6 = MaterialTheme_instance.gee($composer_5, androidx_compose_material3_MaterialTheme$stableprop_getter()).yee_1.v5h();
      var tmp_7 = Companion_getInstance_1().r5f_1;
      var tmp_8 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_9 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_10 = _TextOverflow___init__impl__obguoe(0);
      Text(eventCardData.yf6_1, null, tmp_5, null, tmp_6, null, tmp_7, null, tmp_8, null, null, tmp_9, tmp_10, false, 0, 0, null, null, $composer_5, 1572864, 0, 262058);
      var tmp0_lineHeight = MaterialTheme_instance.gee($composer_5, androidx_compose_material3_MaterialTheme$stableprop_getter()).zee_1.v5h();
      var tmp1_text = eventCardData.zf6_1;
      var tmp2_color = Color__copy$default_impl_ectz3s(MaterialTheme_instance.le1($composer_5, androidx_compose_material3_MaterialTheme$stableprop_getter()).pe1_1, 0.8);
      var tmp3_fontSize = MaterialTheme_instance.gee($composer_5, androidx_compose_material3_MaterialTheme$stableprop_getter()).zee_1.v5h();
      var tmp4_fontWeight = Companion_getInstance_1().j5f_1;
      var tmp_11 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_12 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp1_text, null, tmp2_color, null, tmp3_fontSize, null, tmp4_fontWeight, null, tmp_11, null, null, tmp0_lineHeight, tmp_12, false, 0, 0, null, null, $composer_5, 1572864, 0, 260010);
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
    var tmp0_safe_receiver = $composer_0.h20();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k2m(EventCardItem$lambda(width_0, eventCardData, onClick, $changed));
    }
  }
  function TextWithIcon(text, icon, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.g20(-2021181558);
    sourceInformation($composer_0, 'C(TextWithIcon)P(1)79@2903L11,76@2787L827:EventCardItem.kt#9wqulm');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w20(text) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.w20(icon) ? 32 : 16);
    if ($composer_0.d21(!(($dirty & 19) === 18), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-2021181558, $dirty, -1, 'com.kurlik.frontend.presentation.elements.TextWithIcon (EventCardItem.kt:75)');
      }
      var tmp = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(24);
      var tmp_0 = background(clip(tmp, RoundedCornerShape(tmp$ret$0)), Color__copy$default_impl_ectz3s(MaterialTheme_instance.le1($composer_0, androidx_compose_material3_MaterialTheme$stableprop_getter()).pe1_1, 0.2));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_1 = _Dp___init__impl__ms3zkb(6);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(3);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier = padding_0(tmp_0, tmp_1, tmp$ret$2);
      var horizontalArrangement = null;
      var verticalAlignment = Companion_getInstance().r60_1;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 844473419, 'CC(Row)P(2,1,3)99@5125L58,100@5188L131:Row.kt#2w3rfo');
      if (!((2 & 1) === 0))
        modifier = Companion_instance;
      if (!((2 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().w9r_1;
      if (!((2 & 4) === 0))
        verticalAlignment = Companion_getInstance().q60_1;
      var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 384 >> 3 | 112 & 384 >> 3);
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
      var tmp_2 = $composer_3.t1z();
      if (!isInterface(tmp_2, Applier)) {
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
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -492804929, 'C85@3147L21,86@3203L11,83@3074L199,89@3282L39,92@3398L10,93@3469L10,95@3577L11,90@3330L278:EventCardItem.kt#9wqulm');
      var tmp_3 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$9 = _Dp___init__impl__ms3zkb(10);
      var tmp0_modifier = size(tmp_3, tmp$ret$9);
      var tmp1_painter = painterResource(icon, $composer_5, 14 & $dirty >> 3);
      var tmp2_tint = MaterialTheme_instance.le1($composer_5, androidx_compose_material3_MaterialTheme$stableprop_getter()).pe1_1;
      Icon(tmp1_painter, null, tmp0_modifier, tmp2_tint, $composer_5, 432, 0);
      var tmp_4 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$10 = _Dp___init__impl__ms3zkb(3);
      Spacer(width(tmp_4, tmp$ret$10), $composer_5, 6);
      var tmp3_fontSize = MaterialTheme_instance.gee($composer_5, androidx_compose_material3_MaterialTheme$stableprop_getter()).zee_1.v5h();
      var tmp4_lineHeight = MaterialTheme_instance.gee($composer_5, androidx_compose_material3_MaterialTheme$stableprop_getter()).zee_1.v5h();
      var tmp5_fontWeight = Companion_getInstance_1().j5f_1;
      var tmp6_color = MaterialTheme_instance.le1($composer_5, androidx_compose_material3_MaterialTheme$stableprop_getter()).pe1_1;
      var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_6 = _TextOverflow___init__impl__obguoe(0);
      Text(text, null, tmp6_color, null, tmp3_fontSize, null, tmp5_fontWeight, null, tmp_5, null, null, tmp4_lineHeight, tmp_6, false, 0, 0, null, null, $composer_5, 1572864 | 14 & $dirty, 0, 260010);
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
    var tmp0_safe_receiver = $composer_0.h20();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k2m(TextWithIcon$lambda(text, icon, $changed));
    }
  }
  function EventCardItem$lambda($width, $eventCardData, $onClick, $$changed) {
    return function ($composer, $force) {
      EventCardItem($width, $eventCardData, $onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function TextWithIcon$lambda($text, $icon, $$changed) {
    return function ($composer, $force) {
      TextWithIcon($text, $icon, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function EventsCarousel(width_0, events, onClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.g20(426057343);
    sourceInformation($composer_0, 'C(EventsCarousel)P(2:c#ui.unit.Dp)32@1254L2432:EventsCarousel.kt#9wqulm');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.z20(_Dp___get_value__impl__geb1vb(width_0)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.b21(events) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.b21(onClick) ? 256 : 128);
    if ($composer_0.d21(!(($dirty & 147) === 146), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(426057343, $dirty, -1, 'com.kurlik.frontend.presentation.elements.EventsCarousel (EventsCarousel.kt:31)');
      }
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = null;
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1341605231, 'CC(Column)P(2,3,1)87@4443L61,88@4509L134:Column.kt#2w3rfo');
      if (!((7 & 1) === 0))
        modifier = Companion_instance;
      if (!((7 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().y9r_1;
      if (!((7 & 4) === 0))
        horizontalAlignment = Companion_getInstance().t60_1;
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
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
      var tmp = $composer_3.t1z();
      if (!isInterface(tmp, Applier)) {
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
      sourceInformationMarkerStart($composer_4, 2093002350, 'C89@4557L9:Column.kt#2w3rfo');
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -1782631726, 'C34@1290L23,35@1351L478,35@1322L507,52@1838L40,53@1887L1056,81@2999L681,81@2952L728:EventsCarousel.kt#9wqulm');
      var scrollState = rememberLazyListState(0, 0, $composer_5, 0, 3);
      sourceInformationMarkerStart($composer_5, -1858618969, 'CC(remember):EventsCarousel.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!($composer_0.b21(events) | ($dirty & 14) === 4) | ($dirty & 896) === 256);
      // Inline function 'kotlin.let' call
      var it = $composer_5.u20();
      var tmp_0;
      if (invalid || it === Companion_getInstance_2().s1z_1) {
        var value = EventsCarousel$lambda(events, width_0, onClick);
        $composer_5.v20(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp0_group = tmp_0;
      sourceInformationMarkerEnd($composer_5);
      LazyRow(null, scrollState, null, false, null, null, null, false, null, tmp0_group, $composer_5, 0, 509);
      var tmp_1 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$10 = _Dp___init__impl__ms3zkb(5);
      Spacer(height(tmp_1, tmp$ret$10), $composer_5, 6);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_1 = fillMaxWidth(Companion_instance);
      var horizontalArrangement = Arrangement_getInstance().a9s_1;
      var verticalAlignment = null;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 844473419, 'CC(Row)P(2,1,3)99@5125L58,100@5188L131:Row.kt#2w3rfo');
      if (!((4 & 1) === 0))
        modifier_1 = Companion_instance;
      if (!((4 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().w9r_1;
      if (!((4 & 4) === 0))
        verticalAlignment = Companion_getInstance().q60_1;
      var measurePolicy_0 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_6, 14 & 54 >> 3 | 112 & 54 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      sourceInformationMarkerStart($composer_7, -1159599143, 'CC(Layout)P(!1,2)81@3355L27,84@3521L416:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_2 = Companion_instance;
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.f21();
      var materialized_0 = materialize($composer_7, modifier_2);
      var tmp0_0 = Companion_getInstance_0().d7s_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      sourceInformationMarkerStart($composer_8, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
      var tmp_2 = $composer_8.t1z();
      if (!isInterface(tmp_2, Applier)) {
        invalidApplier();
      }
      $composer_8.n20();
      if ($composer_8.u1z()) {
        $composer_8.o20(tmp0_0);
      } else {
        $composer_8.p20();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_0().i7s_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_0().h7s_1);
      Updater__init_impl_uaeges($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_0().l7s_1);
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_0().m7s_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_0().f7s_1);
      var $composer_9 = $composer_8;
      sourceInformationMarkerStart($composer_9, 1456264949, 'C101@5233L9:Row.kt#2w3rfo');
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, -759825428, 'C75@2736L11,70@2553L380:EventsCarousel.kt#9wqulm');
      $composer_10.a20(806773102);
      sourceInformation($composer_10, '*63@2270L11,58@2067L403,68@2487L39');
      // Inline function 'kotlin.repeat' call
      var times = events.l() - 1 | 0;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp_3 = Companion_instance;
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$19 = _Dp___init__impl__ms3zkb(4);
          Box(background(clip(size(tmp_3, tmp$ret$19), get_CircleShape()), Color__copy$default_impl_ectz3s(MaterialTheme_instance.le1($composer_10, androidx_compose_material3_MaterialTheme$stableprop_getter()).ye1_1, index === scrollState.ucf() ? 1.0 : 0.3)), $composer_10, 0);
          var tmp_4 = Companion_instance;
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$20 = _Dp___init__impl__ms3zkb(4);
          Spacer(width(tmp_4, tmp$ret$20), $composer_10, 6);
        }
         while (inductionVariable < times);
      $composer_10.b20();
      var tmp_5 = Companion_instance;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$21 = _Dp___init__impl__ms3zkb(4);
      Box(background(clip(size(tmp_5, tmp$ret$21), get_CircleShape()), Color__copy$default_impl_ectz3s(MaterialTheme_instance.le1($composer_10, androidx_compose_material3_MaterialTheme$stableprop_getter()).ye1_1, scrollState.ucf() === (events.l() - 1 | 0) ? 1.0 : 0.3)), $composer_10, 0);
      sourceInformationMarkerEnd($composer_10);
      sourceInformationMarkerEnd($composer_9);
      $composer_8.q20();
      sourceInformationMarkerEnd($composer_8);
      sourceInformationMarkerEnd($composer_7);
      sourceInformationMarkerEnd($composer_6);
      var tmp_6 = scrollState.wc4();
      sourceInformationMarkerStart($composer_5, -1858566030, 'CC(remember):EventsCarousel.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_5.w20(scrollState);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_5.u20();
      var tmp_7;
      if (invalid_0 || it_0 === Companion_getInstance_2().s1z_1) {
        var value_0 = EventsCarousel$slambda_0(scrollState, null);
        $composer_5.v20(value_0);
        tmp_7 = value_0;
      } else {
        tmp_7 = it_0;
      }
      var tmp1_group = tmp_7;
      sourceInformationMarkerEnd($composer_5);
      LaunchedEffect(tmp_6, tmp1_group, $composer_5, 0);
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
    var tmp0_safe_receiver = $composer_0.h20();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k2m(EventsCarousel$lambda_0(width_0, events, onClick, $changed));
    }
  }
  function EventsCarousel$lambda$lambda(it) {
    return null;
  }
  function EventsCarousel$lambda$lambda_0($key, $items) {
    return function (index) {
      return $key($items.m(index));
    };
  }
  function EventsCarousel$lambda$lambda_1($contentType, $items) {
    return function (index) {
      return $contentType($items.m(index));
    };
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0, p1, p2) {
      p0.t3c(_this__u8e3s4, p0_0, p1, p2);
      return Unit_instance;
    };
  }
  function EventsCarousel$lambda$lambda$lambda($onClick, $itemData) {
    return function () {
      $onClick($itemData);
      return Unit_instance;
    };
  }
  function EventsCarousel$lambda$lambda_2($items, $width, $onClick) {
    return function ($this$items, it, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C178@8834L22:LazyDsl.kt#428nma');
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.w20($this$items) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (($changed & 48) === 0) {
        $dirty = $dirty | ($composer_0.y20(it) ? 32 : 16);
        tmp_0 = Unit_instance;
      }
      var tmp_1;
      if ($composer_0.d21(!(($dirty & 147) === 146), $dirty & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(802480018, $dirty, -1, 'androidx.compose.foundation.lazy.items.<anonymous> (LazyDsl.kt:178)');
        }
        var tmp2 = $items.m(it);
        var $changed_0 = 14 & $dirty;
        var $composer_1 = $composer_0;
        $composer_1.a20(-440129469);
        sourceInformation($composer_1, 'C*39@1447L358:EventsCarousel.kt#9wqulm');
        var tmp_2 = Companion_instance;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$1 = _Dp___init__impl__ms3zkb(5);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = padding(tmp_2, tmp$ret$1);
        var contentAlignment = null;
        var propagateMinConstraints = false;
        var $composer_2 = $composer_1;
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
        var tmp0 = Companion_getInstance_0().d7s_1;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -553112988, 'CC(ReusableComposeNode)P(1,2)399@15590L9:Composables.kt#9igjgp');
        var tmp_3 = $composer_4.t1z();
        if (!isInterface(tmp_3, Applier)) {
          invalidApplier();
        }
        $composer_4.n20();
        if ($composer_4.u1z()) {
          $composer_4.o20(tmp0);
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
        sourceInformationMarkerStart($composer_6, -1494203950, 'C45@1692L73,42@1546L241:EventsCarousel.kt#9wqulm');
        var tmp0_0 = $width;
        // Inline function 'androidx.compose.ui.unit.dp' call
        // Inline function 'androidx.compose.ui.unit.Dp.minus' call
        var other = _Dp___init__impl__ms3zkb(10);
        var tmp_4 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_0) - _Dp___get_value__impl__geb1vb(other));
        sourceInformationMarkerStart($composer_6, 505993705, 'CC(remember):EventsCarousel.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_6.w20($onClick) | (($changed_0 & 112 ^ 48) > 32 && $composer_6.w20(tmp2) || ($changed_0 & 48) === 32));
        // Inline function 'kotlin.let' call
        var it_0 = $composer_6.u20();
        var tmp_5;
        if (invalid || it_0 === Companion_getInstance_2().s1z_1) {
          var value = EventsCarousel$lambda$lambda$lambda($onClick, tmp2);
          $composer_6.v20(value);
          tmp_5 = value;
        } else {
          tmp_5 = it_0;
        }
        var tmp0_group = tmp_5;
        sourceInformationMarkerEnd($composer_6);
        EventCardItem(tmp_4, tmp2, tmp0_group, $composer_6, 112 & $changed_0);
        sourceInformationMarkerEnd($composer_6);
        sourceInformationMarkerEnd($composer_5);
        $composer_4.q20();
        sourceInformationMarkerEnd($composer_4);
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        $composer_1.b20();
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_instance;
        }
        tmp_1 = tmp_6;
      } else {
        $composer_0.l20();
        tmp_1 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function EventsCarousel$lambda($events, $width, $onClick) {
    return function ($this$LazyRow) {
      // Inline function 'androidx.compose.foundation.lazy.items' call
      var items = $events;
      var contentType = EventsCarousel$lambda$lambda;
      var tmp = items.l();
      var tmp_0;
      if (!(null == null)) {
        tmp_0 = EventsCarousel$lambda$lambda_0(null, items);
      } else {
        tmp_0 = null;
      }
      var tmp_1 = tmp_0;
      var tmp_2 = EventsCarousel$lambda$lambda_1(contentType, items);
      $this$LazyRow.kce(tmp, tmp_1, tmp_2, ComposableLambda$invoke$ref_0(composableLambdaInstance(802480018, true, EventsCarousel$lambda$lambda_2(items, $width, $onClick))));
      return Unit_instance;
    };
  }
  function EventsCarousel$slambda($scrollState, resultContinuation) {
    this.kf7_1 = $scrollState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(EventsCarousel$slambda).b1m = function ($this$LaunchedEffect, $completion) {
    var tmp = this.c1m($this$LaunchedEffect, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(EventsCarousel$slambda).e9 = function (p1, $completion) {
    return this.b1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(EventsCarousel$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            if (!this.kf7_1.wc4()) {
              var tmp0 = this.kf7_1.rcf().cck();
              var tmp$ret$0;
              l$ret$1: do {
                var iterator = tmp0.i();
                if (!iterator.j()) {
                  tmp$ret$0 = null;
                  break l$ret$1;
                }
                var maxValue = iterator.k().qcl();
                while (iterator.j()) {
                  var v = iterator.k().qcl();
                  if (compareTo(maxValue, v) < 0) {
                    maxValue = v;
                  }
                }
                tmp$ret$0 = maxValue;
              }
               while (false);
              var tmp0_elvis_lhs = tmp$ret$0;
              var maxScrollOffset = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
              var currentIndex = this.kf7_1.ucf();
              var currentOffset = this.kf7_1.vcf();
              if (currentOffset > 0) {
                var tmp_0;
                if (currentOffset > maxScrollOffset) {
                  tmp_0 = currentIndex + 1 | 0;
                } else {
                  tmp_0 = currentIndex;
                }
                var targetIndex = tmp_0;
                this.m8_1 = 1;
                suspendResult = this.kf7_1.ncq(targetIndex, VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.m8_1 = 2;
                continue $sm;
              }
            } else {
              this.m8_1 = 3;
              continue $sm;
            }

          case 1:
            this.m8_1 = 2;
            continue $sm;
          case 2:
            this.m8_1 = 3;
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
  protoOf(EventsCarousel$slambda).c1m = function ($this$LaunchedEffect, completion) {
    var i = new EventsCarousel$slambda(this.kf7_1, completion);
    i.lf7_1 = $this$LaunchedEffect;
    return i;
  };
  function EventsCarousel$slambda_0($scrollState, resultContinuation) {
    var i = new EventsCarousel$slambda($scrollState, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.b1m($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function EventsCarousel$lambda_0($width, $events, $onClick, $$changed) {
    return function ($composer, $force) {
      EventsCarousel($width, $events, $onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function MainScreen($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.g20(1901142788);
    sourceInformation($composer_0, 'C(MainScreen)29@1231L2451:MainScreen.kt#99pnzo');
    if ($composer_0.d21(!($changed === 0), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1901142788, $changed, -1, 'com.kurlik.frontend.presentation.screens.MainScreen (MainScreen.kt:28)');
      }
      var tmp = ComposableSingletons$MainScreenKt_getInstance().pf7_1;
      var tmp_0 = _FabPosition___init__impl__9ib2hj(0);
      var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      Scaffold(null, tmp, null, null, null, tmp_0, tmp_1, tmp_2, null, ComposableSingletons$MainScreenKt_getInstance().qf7_1, $composer_0, 805306416, 509);
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
      tmp0_safe_receiver.k2m(MainScreen$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainScreenKt$lambda$14487684$lambda($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C35@1434L10,33@1329L212:MainScreen.kt#99pnzo');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(14487684, $changed, -1, 'com.kurlik.frontend.presentation.screens.ComposableSingletons$MainScreenKt.lambda$14487684.<anonymous> (MainScreen.kt:33)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = MaterialTheme_instance.gee($composer_0, androidx_compose_material3_MaterialTheme$stableprop_getter()).xee_1.v5h();
      var tmp_1 = Companion_getInstance_1().r5f_1;
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_4 = _TextOverflow___init__impl__obguoe(0);
      Text('\u041F\u0440\u0438\u0432\u0435\u0442, \u041F\u043E\u043B\u0438\u043D\u0430!', null, tmp, null, tmp_0, null, tmp_1, null, tmp_2, null, null, tmp_3, tmp_4, false, 0, 0, null, null, $composer_0, 1572870, 0, 262062);
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
  function ComposableSingletons$MainScreenKt$lambda$_1036561775$lambda_ocjz7x($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C50@2032L34,49@1988L170:MainScreen.kt#99pnzo');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1036561775, $changed, -1, 'com.kurlik.frontend.presentation.screens.ComposableSingletons$MainScreenKt.lambda$-1036561775.<anonymous> (MainScreen.kt:49)');
      }
      var tmp = painterResource(get_bell(drawable_instance), $composer_0, 0);
      Icon(tmp, 'Notifications', null, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 48, 12);
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
  function ComposableSingletons$MainScreenKt$lambda$_644328209$lambda_7qw896($this$TopAppBar, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C41@1655L28,45@1814L11,46@1892L11,44@1737L202,40@1609L571:MainScreen.kt#99pnzo');
    if ($composer_0.d21(!(($changed & 17) === 16), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-644328209, $changed, -1, 'com.kurlik.frontend.presentation.screens.ComposableSingletons$MainScreenKt.lambda$-644328209.<anonymous> (MainScreen.kt:40)');
      }
      sourceInformationMarkerStart($composer_0, -724116021, 'CC(remember):MainScreen.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.u20();
      var tmp;
      if (false || it === Companion_getInstance_2().s1z_1) {
        var value = ComposableSingletons$MainScreenKt$lambda$_644328209$lambda$lambda_7cyhpb;
        $composer_0.v20(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp0_group = tmp;
      sourceInformationMarkerEnd($composer_0);
      var tmp_0 = IconButtonDefaults_getInstance();
      var tmp_1 = MaterialTheme_instance.le1($composer_0, androidx_compose_material3_MaterialTheme$stableprop_getter()).de2_1;
      var tmp_2 = MaterialTheme_instance.le1($composer_0, androidx_compose_material3_MaterialTheme$stableprop_getter()).ee2_1;
      var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_4 = tmp_0.ned(tmp_1, tmp_2, tmp_3, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, androidx_compose_material3_IconButtonDefaults$stableprop_getter() << 12, 12);
      IconButton(tmp0_group, null, false, tmp_4, null, null, ComposableSingletons$MainScreenKt_getInstance().nf7_1, $composer_0, 1572870, 54);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainScreenKt$lambda$_644328209$lambda$lambda_7cyhpb() {
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_4(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainScreenKt$lambda$_152416320$lambda_ypx07w($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C56@2311L11,57@2389L11,55@2243L188,31@1272L1173:MainScreen.kt#99pnzo');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-152416320, $changed, -1, 'com.kurlik.frontend.presentation.screens.ComposableSingletons$MainScreenKt.lambda$-152416320.<anonymous> (MainScreen.kt:31)');
      }
      var tmp = ComposableSingletons$MainScreenKt_getInstance().mf7_1;
      var tmp_0 = ComposableSingletons$MainScreenKt_getInstance().of7_1;
      var tmp_1 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_2 = TopAppBarDefaults_getInstance();
      var tmp_3 = MaterialTheme_instance.le1($composer_0, androidx_compose_material3_MaterialTheme$stableprop_getter()).be2_1;
      var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_5 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_6 = MaterialTheme_instance.le1($composer_0, androidx_compose_material3_MaterialTheme$stableprop_getter()).ce2_1;
      var tmp_7 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_8 = tmp_2.ne1(tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, androidx_compose_material3_TopAppBarDefaults$stableprop_getter() << 18, 54);
      TopAppBar(tmp, null, null, tmp_0, tmp_1, null, tmp_8, null, null, $composer_0, 3078, 438);
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
  function ComposableSingletons$MainScreenKt$lambda$_293546219$lambda_efvrnx(paddingValues, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C62@2489L1187:MainScreen.kt#99pnzo');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.w20(paddingValues) ? 4 : 2);
    if ($composer_0.d21(!(($dirty & 19) === 18), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-293546219, $dirty, -1, 'com.kurlik.frontend.presentation.screens.ComposableSingletons$MainScreenKt.lambda$-293546219.<anonymous> (MainScreen.kt:62)');
      }
      var tmp = padding_1(fillMaxSize(Companion_instance), paddingValues);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(3);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = padding(tmp, tmp$ret$0);
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1341605231, 'CC(Column)P(2,3,1)87@4443L61,88@4509L134:Column.kt#2w3rfo');
      if (!((6 & 1) === 0))
        modifier = Companion_instance;
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().y9r_1;
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance().t60_1;
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
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
      sourceInformationMarkerStart($composer_4, 2093002350, 'C89@4557L9:Column.kt#2w3rfo');
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 1441298885, 'C68@2668L793,90@3493L173,90@3474L192:MainScreen.kt#99pnzo');
      sourceInformationMarkerStart($composer_5, 1847609028, 'CC(remember):MainScreen.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_5.u20();
      var tmp_1;
      if (false || it === Companion_getInstance_2().s1z_1) {
        var value = listOf([new EventCardData('\u0418\u0433\u0440\u0430 \u0432 \u043A\u043E\u043C\u043F\u044B \u0441 \u0434\u0440\u0443\u0437\u044C\u044F\u043C\u0438', '\u041A\u043E\u0444\u0435\u0439\u043D\u044F', '16:00', '24 \u0441\u0435\u043D'), new EventCardData('\u0418\u0433\u0440\u0430 \u0432 \u043A\u043E\u043C\u043F\u044B \u0441 \u0434\u0440\u0443\u0437\u044C\u044F\u043C\u0438 2', '\u041A\u043E\u0444\u0435\u0439\u043D\u044F 2', '17:00', '25 \u0441\u0435\u043D'), new EventCardData('\u0418\u0433\u0440\u0430 \u0432 \u043A\u043E\u043C\u043F\u044B \u0441 \u0434\u0440\u0443\u0437\u044C\u044F\u043C\u0438 3', '\u041A\u043E\u0444\u0435\u0439\u043D\u044F 3', '18:00', '26 \u0441\u0435\u043D')]);
        $composer_5.v20(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp0_group = tmp_1;
      sourceInformationMarkerEnd($composer_5);
      var events = tmp0_group;
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-539867679, true, ComposableSingletons$MainScreenKt$lambda$_293546219$lambda$lambda_5h63x4(events), $composer_5, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_6.w20(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_6.u20();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance_2().s1z_1) {
        var value_0 = ComposableLambda$invoke$ref_6(dispatchReceiver);
        $composer_6.v20(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp0_0 = tmp_2;
      sourceInformationMarkerEnd($composer_6);
      BoxWithConstraints(null, null, false, tmp0_0, $composer_5, 3072, 7);
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
    return Unit_instance;
  }
  function ComposableSingletons$MainScreenKt$lambda$_293546219$lambda$lambda$lambda_78vpn7(it) {
    return Unit_instance;
  }
  function ComposableSingletons$MainScreenKt$lambda$_293546219$lambda$lambda_5h63x4($events) {
    return function ($this$BoxWithConstraints, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C94@3632L2,91@3511L141:MainScreen.kt#99pnzo');
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.w20($this$BoxWithConstraints) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if ($composer_0.d21(!(($dirty & 19) === 18), $dirty & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-539867679, $dirty, -1, 'com.kurlik.frontend.presentation.screens.ComposableSingletons$MainScreenKt.lambda$-293546219.<anonymous>.<anonymous>.<anonymous> (MainScreen.kt:91)');
        }
        var tmp_1 = $this$BoxWithConstraints.k9t();
        sourceInformationMarkerStart($composer_0, 878207747, 'CC(remember):MainScreen.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.u20();
        var tmp_2;
        if (false || it === Companion_getInstance_2().s1z_1) {
          var value = ComposableSingletons$MainScreenKt$lambda$_293546219$lambda$lambda$lambda_78vpn7;
          $composer_0.v20(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp0_group = tmp_2;
        sourceInformationMarkerEnd($composer_0);
        EventsCarousel(tmp_1, $events, tmp0_group, $composer_0, 384);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp_0 = tmp_3;
      } else {
        $composer_0.l20();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_6(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      p0.s3c(_this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainScreenKt() {
    ComposableSingletons$MainScreenKt_instance = this;
    var tmp = this;
    tmp.mf7_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(14487684, false, ComposableSingletons$MainScreenKt$lambda$14487684$lambda));
    var tmp_0 = this;
    tmp_0.nf7_1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(-1036561775, false, ComposableSingletons$MainScreenKt$lambda$_1036561775$lambda_ocjz7x));
    var tmp_1 = this;
    tmp_1.of7_1 = ComposableLambda$invoke$ref_3(composableLambdaInstance(-644328209, false, ComposableSingletons$MainScreenKt$lambda$_644328209$lambda_7qw896));
    var tmp_2 = this;
    tmp_2.pf7_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-152416320, false, ComposableSingletons$MainScreenKt$lambda$_152416320$lambda_ypx07w));
    var tmp_3 = this;
    tmp_3.qf7_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(-293546219, false, ComposableSingletons$MainScreenKt$lambda$_293546219$lambda_efvrnx));
  }
  var ComposableSingletons$MainScreenKt_instance;
  function ComposableSingletons$MainScreenKt_getInstance() {
    if (ComposableSingletons$MainScreenKt_instance == null)
      new ComposableSingletons$MainScreenKt();
    return ComposableSingletons$MainScreenKt_instance;
  }
  function MainScreen$lambda($$changed) {
    return function ($composer, $force) {
      MainScreen($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function get_Pink() {
    _init_properties_Colors_kt__dgoqts();
    return Pink;
  }
  var Pink;
  function get_LightPink() {
    _init_properties_Colors_kt__dgoqts();
    return LightPink;
  }
  var LightPink;
  function get_PrimaryText() {
    _init_properties_Colors_kt__dgoqts();
    return PrimaryText;
  }
  var PrimaryText;
  var SecondaryText;
  function get_BG() {
    _init_properties_Colors_kt__dgoqts();
    return BG;
  }
  var BG;
  function get_DarkBlue() {
    _init_properties_Colors_kt__dgoqts();
    return DarkBlue;
  }
  var DarkBlue;
  var properties_initialized_Colors_kt_23tfjm;
  function _init_properties_Colors_kt__dgoqts() {
    if (!properties_initialized_Colors_kt_23tfjm) {
      properties_initialized_Colors_kt_23tfjm = true;
      Pink = Color(new Long(-759393, 0));
      LightPink = Color(new Long(-23609, 0));
      PrimaryText = Color(new Long(-14540254, 0));
      SecondaryText = Color(new Long(-11382190, 0));
      BG = Color(new Long(-855305, 0));
      DarkBlue = Color(new Long(-13942932, 0));
    }
  }
  function KurlikTheme(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.g20(-570712447);
    sourceInformation($composer_0, 'C(KurlikTheme)23@711L25,21@656L80:Theme.kt#nbv0zu');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.b21(content) ? 4 : 2);
    if ($composer_0.d21(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-570712447, $dirty, -1, 'com.kurlik.frontend.presentation.theme.KurlikTheme (Theme.kt:8)');
      }
      var tmp0_primary = get_Pink();
      var tmp1_secondary = get_LightPink();
      var tmp2_onPrimary = Companion_getInstance_3().q4h_1;
      var tmp3_onSecondary = Companion_getInstance_3().q4h_1;
      var tmp4_background = Companion_getInstance_3().q4h_1;
      var tmp5_onBackground = Companion_getInstance_3().m4h_1;
      var tmp6_surface = get_BG();
      var tmp7_tertiary = Companion_getInstance_3().m4h_1;
      var tmp8_onTertiary = get_PrimaryText();
      var tmp9_onSurface = get_DarkBlue();
      var colorScheme = lightColorScheme(tmp0_primary, tmp2_onPrimary, VOID, VOID, VOID, tmp1_secondary, tmp3_onSecondary, VOID, VOID, tmp7_tertiary, tmp8_onTertiary, VOID, VOID, tmp4_background, tmp5_onBackground, tmp6_surface, tmp9_onSurface);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(674688853, true, KurlikTheme$lambda(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.w20(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.u20();
      var tmp;
      if (invalid || it === Companion_getInstance_2().s1z_1) {
        var value = ComposableLambda$invoke$ref_7(dispatchReceiver);
        $composer_1.v20(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp0 = tmp;
      sourceInformationMarkerEnd($composer_1);
      MaterialTheme(colorScheme, null, null, tmp0, $composer_0, 3072, 6);
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
      tmp0_safe_receiver.k2m(KurlikTheme$lambda_0(content, $changed));
    }
  }
  function KurlikTheme$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C24@721L9:Theme.kt#nbv0zu');
      var tmp;
      if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(674688853, $changed, -1, 'com.kurlik.frontend.presentation.theme.KurlikTheme.<anonymous> (Theme.kt:24)');
        }
        $content($composer_0, 0);
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
  function ComposableLambda$invoke$ref_7(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function KurlikTheme$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      KurlikTheme($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var com_kurlik_frontend_JsPlatform$stable;
  function main() {
    ComposeViewport(VOID, VOID, ComposableSingletons$MainKt_getInstance().rf7_1);
  }
  function ComposableLambda$invoke$ref_8(p0) {
    return function (_this__u8e3s4, p0_0) {
      p0.k2g(_this__u8e3s4, p0_0);
      return Unit_instance;
    };
  }
  function ComposableSingletons$MainKt$lambda$_48240962$lambda_4n48v1($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C8@215L5:main.kt#tcg28d');
    if ($composer_0.d21(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-48240962, $changed, -1, 'com.kurlik.frontend.ComposableSingletons$MainKt.lambda$-48240962.<anonymous> (main.kt:8)');
      }
      App($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.l20();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.rf7_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-48240962, false, ComposableSingletons$MainKt$lambda$_48240962$lambda_4n48v1));
  }
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function mainWrapper() {
    main();
  }
  //region block: init
  kurlik_composeapp_generated_resources_Res_drawable$stable = 0;
  kurlik_composeapp_generated_resources_Res_string$stable = 0;
  kurlik_composeapp_generated_resources_Res_array$stable = 0;
  kurlik_composeapp_generated_resources_Res_plurals$stable = 0;
  kurlik_composeapp_generated_resources_Res_font$stable = 0;
  kurlik_composeapp_generated_resources_Res$stable = 0;
  drawable_instance = new drawable();
  com_kurlik_frontend_Greeting$stable = 8;
  com_kurlik_frontend_domain_EventCardData$stable = 0;
  com_kurlik_frontend_JsPlatform$stable = 0;
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=Kurlik-composeApp.js.map
