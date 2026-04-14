(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui.js', './androidx-collection-collection.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-animation-animation-core.js', './androidx-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-util.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./androidx-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./androidx-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    globalThis['compose-multiplatform-core-compose-material-material-ripple'] = factory(typeof globalThis['compose-multiplatform-core-compose-material-material-ripple'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-material-material-ripple'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['androidx-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['androidx-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-util']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui, kotlin_androidx_collection_collection, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_util) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var CoroutineImpl = kotlin_kotlin.$_$.s7;
  var Unit_instance = kotlin_kotlin.$_$.n;
  var protoOf = kotlin_kotlin.$_$.fa;
  var THROW_CCE = kotlin_kotlin.$_$.ld;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var isInterface = kotlin_kotlin.$_$.w9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.d7;
  var invalidateDraw = kotlin_org_jetbrains_compose_ui_ui.$_$.s3;
  var initMetadataForLambda = kotlin_kotlin.$_$.s9;
  var VOID = kotlin_kotlin.$_$.c;
  var MutableScatterMap = kotlin_androidx_collection_collection.$_$.n;
  var invert = kotlin_kotlin.$_$.j8;
  var shiftLeft = kotlin_kotlin.$_$.o8;
  var bitwiseAnd = kotlin_kotlin.$_$.a8;
  var Long = kotlin_kotlin.$_$.gd;
  var compare = kotlin_kotlin.$_$.d8;
  var shiftRight = kotlin_kotlin.$_$.q8;
  var equalsLong = kotlin_kotlin.$_$.h8;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y1;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x3;
  var initMetadataForClass = kotlin_kotlin.$_$.n9;
  var Interaction = kotlin_org_jetbrains_compose_foundation_foundation.$_$.j;
  var PressInteraction = kotlin_org_jetbrains_compose_foundation_foundation.$_$.o;
  var Cancel = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l;
  var Release = kotlin_org_jetbrains_compose_foundation_foundation.$_$.n;
  var Press = kotlin_org_jetbrains_compose_foundation_foundation.$_$.m;
  var equals = kotlin_kotlin.$_$.f9;
  var FunctionAdapter = kotlin_kotlin.$_$.t8;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var hashCode = kotlin_kotlin.$_$.m9;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.u5;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var MutableObjectList = kotlin_androidx_collection_collection.$_$.m;
  var requireDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.y3;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m1;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var isNaN_0 = kotlin_kotlin.$_$.wd;
  var onMeasureResultChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.u2;
  var onPlaced = kotlin_org_jetbrains_compose_ui_ui.$_$.x2;
  var CompositionLocalConsumerModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.r2;
  var DrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.v2;
  var LayoutAwareModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.z2;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.u;
  var Cancel_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.c;
  var Stop = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e;
  var Start = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d;
  var Unfocus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.g;
  var Focus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f;
  var Exit = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i;
  var Enter = kotlin_org_jetbrains_compose_foundation_foundation.$_$.h;
  var lastOrNull = kotlin_kotlin.$_$.u5;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var convertToInt = kotlin_kotlin.$_$.e8;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.g;
  var floatFromBits = kotlin_kotlin.$_$.g9;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i2;
  var get_LinearEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l;
  var TweenSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.n;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.w;
  var get_FastOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.j;
  var KMutableProperty1 = kotlin_kotlin.$_$.eb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.k9;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.p9;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.l1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c;
  var toRawBits = kotlin_kotlin.$_$.ke;
  var fromInt = kotlin_kotlin.$_$.i8;
  var bitwiseOr = kotlin_kotlin.$_$.b8;
  var _Offset___init__impl__c168vi = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t;
  var ensureNotNull = kotlin_kotlin.$_$.ud;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.c;
  var _Offset___get_packedValue__impl__xh2k8q = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.z;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d3;
  var Offset__getDistance_impl_pclvxn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.w;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var getNumberHashCode = kotlin_kotlin.$_$.j9;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(CommonRippleNode$addRipple$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(RippleNode, 'RippleNode', VOID, Node, [CompositionLocalConsumerModifierNode, DrawModifierNode, LayoutAwareModifierNode]);
  initMetadataForClass(CommonRippleNode, 'CommonRippleNode', VOID, RippleNode);
  initMetadataForLambda(RippleNode$onAttach$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(RippleNode$onAttach$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(StateLayer$handleInteraction$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(StateLayer$handleInteraction$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(StateLayer, 'StateLayer');
  initMetadataForLambda(RippleAnimation$fadeIn$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeIn$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeIn$slambda$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeOut$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeIn$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeOut$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($animateCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($fadeInCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($fadeOutCOROUTINE$, CoroutineImpl);
  initMetadataForClass(RippleAnimation, 'RippleAnimation', VOID, VOID, VOID, [0]);
  initMetadataForClass(RippleAlpha, 'RippleAlpha');
  //endregion
  var androidx_compose_material_ripple_CommonRipple$stable;
  var androidx_compose_material_ripple_CommonRippleNode$stable;
  function CommonRippleNode$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation) {
    this.ldp_1 = $rippleAnimation;
    this.mdp_1 = this$0;
    this.ndp_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CommonRippleNode$addRipple$slambda).b1m = function ($this$launch, $completion) {
    var tmp = this.c1m($this$launch, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(CommonRippleNode$addRipple$slambda).e9 = function (p1, $completion) {
    return this.b1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CommonRippleNode$addRipple$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 5;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.n8_1 = 4;
            this.m8_1 = 2;
            suspendResult = this.ldp_1.adq(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n8_1 = 5;
            this.m8_1 = 3;
            continue $sm;
          case 3:
            this.n8_1 = 5;
            this.mdp_1.adr_1.z1(this.ndp_1);
            invalidateDraw(this.mdp_1);
            return Unit_instance;
          case 4:
            this.n8_1 = 5;
            var t = this.p8_1;
            this.mdp_1.adr_1.z1(this.ndp_1);
            invalidateDraw(this.mdp_1);
            throw t;
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
  protoOf(CommonRippleNode$addRipple$slambda).c1m = function ($this$launch, completion) {
    var i = new CommonRippleNode$addRipple$slambda(this.ldp_1, this.mdp_1, this.ndp_1, completion);
    i.odp_1 = $this$launch;
    return i;
  };
  function CommonRippleNode$addRipple$slambda_0($rippleAnimation, this$0, $interaction, resultContinuation) {
    var i = new CommonRippleNode$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function CommonRippleNode(interactionSource, bounded, radius, color, rippleAlpha) {
    RippleNode.call(this, interactionSource, bounded, radius, color, rippleAlpha);
    this.adr_1 = new MutableScatterMap();
  }
  protoOf(CommonRippleNode).bdr = function (interaction, size, targetRadius) {
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var this_0 = this.adr_1;
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
                  k[index];
                  v[index].cdr();
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
    var origin = this.sdr_1 ? interaction.hce_1 : null;
    var rippleAnimation = new RippleAnimation(origin, targetRadius, this.sdr_1);
    this.adr_1.gq(interaction, rippleAnimation);
    var tmp = this.w62();
    launch(tmp, VOID, VOID, CommonRippleNode$addRipple$slambda_0(rippleAnimation, this, interaction, null));
    invalidateDraw(this);
  };
  protoOf(CommonRippleNode).cds = function (interaction) {
    var tmp0_safe_receiver = this.adr_1.g2(interaction);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.cdr();
    }
  };
  protoOf(CommonRippleNode).dds = function (_this__u8e3s4) {
    var alpha = this.vdr_1().hds_1;
    if (!(alpha === 0.0)) {
      // Inline function 'androidx.collection.ScatterMap.forEach' call
      var this_0 = this.adr_1;
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
                    k[index];
                    // Inline function 'kotlin.with' call
                    v[index].jds(_this__u8e3s4, Color__copy$default_impl_ectz3s(this.ids(), alpha));
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
  };
  protoOf(CommonRippleNode).d63 = function () {
    this.adr_1.s1();
  };
  function get_DefaultTweenSpec() {
    _init_properties_Ripple_kt__d55ieo();
    return DefaultTweenSpec;
  }
  var DefaultTweenSpec;
  var androidx_compose_material_ripple_Ripple$stable;
  var androidx_compose_material_ripple_RippleIndicationInstance$stable;
  var androidx_compose_material_ripple_RippleNode$stable;
  function createRippleModifierNode(interactionSource, bounded, radius, color, rippleAlpha) {
    _init_properties_Ripple_kt__d55ieo();
    return createPlatformRippleNode(interactionSource, bounded, radius, color, rippleAlpha);
  }
  function RippleNode$onAttach$slambda$slambda(this$0, $this_launch, resultContinuation) {
    this.sds_1 = this$0;
    this.tds_1 = $this_launch;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleNode$onAttach$slambda$slambda).xay = function (interaction, $completion) {
    var tmp = this.yay(interaction, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(RippleNode$onAttach$slambda$slambda).e9 = function (p1, $completion) {
    return this.xay((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleNode$onAttach$slambda$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        if (tmp === 0) {
          this.n8_1 = 1;
          var tmp0_subject = this.uds_1;
          if (isInterface(tmp0_subject, PressInteraction)) {
            if (this.sds_1.ads_1) {
              handlePressInteraction(this.sds_1, this.uds_1);
            } else {
              var tmp0 = this.sds_1.bds_1;
              var element = this.uds_1;
              tmp0.h(element);
            }
          } else {
            updateStateLayer(this.sds_1, this.uds_1, this.tds_1);
          }
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
  protoOf(RippleNode$onAttach$slambda$slambda).yay = function (interaction, completion) {
    var i = new RippleNode$onAttach$slambda$slambda(this.sds_1, this.tds_1, completion);
    i.uds_1 = interaction;
    return i;
  };
  function RippleNode$onAttach$slambda$slambda_0(this$0, $this_launch, resultContinuation) {
    var i = new RippleNode$onAttach$slambda$slambda(this$0, $this_launch, resultContinuation);
    var l = function (interaction, $completion) {
      return i.xay(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function handlePressInteraction($this, pressInteraction) {
    if (pressInteraction instanceof Press) {
      $this.bdr(pressInteraction, $this.zdr_1, $this.ydr_1);
    } else {
      if (pressInteraction instanceof Release) {
        $this.cds(pressInteraction.ice_1);
      } else {
        if (pressInteraction instanceof Cancel) {
          $this.cds(pressInteraction.jce_1);
        }
      }
    }
  }
  function updateStateLayer($this, interaction, scope) {
    var tmp0_elvis_lhs = $this.xdr_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new StateLayer($this.sdr_1, $this.vdr_1);
      invalidateDraw($this);
      $this.xdr_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stateLayer = tmp;
    stateLayer.adt(interaction, scope);
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.bdt_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).x1g = function (value, $completion) {
    return this.bdt_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).r2 = function () {
    return this.bdt_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
    return hashCode(this.r2());
  };
  function RippleNode$onAttach$slambda(this$0, resultContinuation) {
    this.kdt_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleNode$onAttach$slambda).b1m = function ($this$launch, $completion) {
    var tmp = this.c1m($this$launch, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(RippleNode$onAttach$slambda).e9 = function (p1, $completion) {
    return this.b1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleNode$onAttach$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            var tmp_0 = this.kdt_1.rdr_1.cb0();
            var tmp_1 = RippleNode$onAttach$slambda$slambda_0(this.kdt_1, this.ldt_1, null);
            suspendResult = tmp_0.l1f(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
  protoOf(RippleNode$onAttach$slambda).c1m = function ($this$launch, completion) {
    var i = new RippleNode$onAttach$slambda(this.kdt_1, completion);
    i.ldt_1 = $this$launch;
    return i;
  };
  function RippleNode$onAttach$slambda_0(this$0, resultContinuation) {
    var i = new RippleNode$onAttach$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleNode(interactionSource, bounded, radius, color, rippleAlpha) {
    Node.call(this);
    this.rdr_1 = interactionSource;
    this.sdr_1 = bounded;
    this.tdr_1 = radius;
    this.udr_1 = color;
    this.vdr_1 = rippleAlpha;
    this.wdr_1 = false;
    this.xdr_1 = null;
    this.ydr_1 = 0.0;
    this.zdr_1 = Companion_getInstance().j3q_1;
    this.ads_1 = false;
    var tmp = this;
    // Inline function 'androidx.collection.mutableObjectListOf' call
    tmp.bds_1 = new MutableObjectList();
  }
  protoOf(RippleNode).x62 = function () {
    return this.wdr_1;
  };
  protoOf(RippleNode).ids = function () {
    return this.udr_1.k4l();
  };
  protoOf(RippleNode).p66 = function (size) {
    this.ads_1 = true;
    var density = requireDensity(this);
    this.zdr_1 = toSize(size);
    var tmp = this;
    // Inline function 'kotlin.with' call
    var tmp_0;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = this.tdr_1;
    if (isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      tmp_0 = getRippleEndRadius(density, this.sdr_1, this.zdr_1);
    } else {
      tmp_0 = density.u3q(this.tdr_1);
    }
    tmp.ydr_1 = tmp_0;
    // Inline function 'androidx.collection.ObjectList.forEach' call
    var this_1 = this.bds_1;
    // Inline function 'kotlin.contracts.contract' call
    var content = this_1.qm_1;
    var inductionVariable = 0;
    var last = this_1.rm_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var it = content[i];
        handlePressInteraction(this, it);
      }
       while (inductionVariable < last);
    this.bds_1.s1();
  };
  protoOf(RippleNode).b63 = function () {
    var tmp = this.w62();
    launch(tmp, VOID, VOID, RippleNode$onAttach$slambda_0(this, null));
  };
  protoOf(RippleNode).a67 = function (_this__u8e3s4) {
    _this__u8e3s4.n6a();
    var tmp0_safe_receiver = this.xdr_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.run' call
      tmp0_safe_receiver.mdt(_this__u8e3s4, this.ydr_1, this.ids());
    }
    this.dds(_this__u8e3s4);
  };
  function StateLayer$handleInteraction$slambda(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation) {
    this.vdt_1 = this$0;
    this.wdt_1 = $targetAlpha;
    this.xdt_1 = $incomingAnimationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StateLayer$handleInteraction$slambda).b1m = function ($this$launch, $completion) {
    var tmp = this.c1m($this$launch, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(StateLayer$handleInteraction$slambda).e9 = function (p1, $completion) {
    return this.b1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StateLayer$handleInteraction$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.vdt_1.xds_1.aa6(this.wdt_1, this.xdt_1, VOID, VOID, this);
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
  protoOf(StateLayer$handleInteraction$slambda).c1m = function ($this$launch, completion) {
    var i = new StateLayer$handleInteraction$slambda(this.vdt_1, this.wdt_1, this.xdt_1, completion);
    i.ydt_1 = $this$launch;
    return i;
  };
  function StateLayer$handleInteraction$slambda_0(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation) {
    var i = new StateLayer$handleInteraction$slambda(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function StateLayer$handleInteraction$slambda_1(this$0, $outgoingAnimationSpec, resultContinuation) {
    this.hdu_1 = this$0;
    this.idu_1 = $outgoingAnimationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StateLayer$handleInteraction$slambda_1).b1m = function ($this$launch, $completion) {
    var tmp = this.c1m($this$launch, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(StateLayer$handleInteraction$slambda_1).e9 = function (p1, $completion) {
    return this.b1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StateLayer$handleInteraction$slambda_1).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.hdu_1.xds_1.aa6(0.0, this.idu_1, VOID, VOID, this);
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
  protoOf(StateLayer$handleInteraction$slambda_1).c1m = function ($this$launch, completion) {
    var i = new StateLayer$handleInteraction$slambda_1(this.hdu_1, this.idu_1, completion);
    i.jdu_1 = $this$launch;
    return i;
  };
  function StateLayer$handleInteraction$slambda_2(this$0, $outgoingAnimationSpec, resultContinuation) {
    var i = new StateLayer$handleInteraction$slambda_1(this$0, $outgoingAnimationSpec, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function StateLayer(bounded, rippleAlpha) {
    this.vds_1 = bounded;
    this.wds_1 = rippleAlpha;
    this.xds_1 = Animatable(0.0);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.yds_1 = ArrayList_init_$Create$();
    this.zds_1 = null;
  }
  protoOf(StateLayer).adt = function (interaction, scope) {
    if (interaction instanceof Enter) {
      this.yds_1.h(interaction);
    } else {
      if (interaction instanceof Exit) {
        this.yds_1.q1(interaction.fce_1);
      } else {
        if (interaction instanceof Focus) {
          this.yds_1.h(interaction);
        } else {
          if (interaction instanceof Unfocus) {
            this.yds_1.q1(interaction.ece_1);
          } else {
            if (interaction instanceof Start) {
              this.yds_1.h(interaction);
            } else {
              if (interaction instanceof Stop) {
                this.yds_1.q1(interaction.cce_1);
              } else {
                if (interaction instanceof Cancel_0) {
                  this.yds_1.q1(interaction.dce_1);
                } else {
                  return Unit_instance;
                }
              }
            }
          }
        }
      }
    }
    var newInteraction = lastOrNull(this.yds_1);
    if (!equals(this.zds_1, newInteraction)) {
      if (!(newInteraction == null)) {
        var rippleAlpha = this.wds_1();
        var tmp;
        if (newInteraction instanceof Enter) {
          tmp = rippleAlpha.gds_1;
        } else {
          if (newInteraction instanceof Focus) {
            tmp = rippleAlpha.fds_1;
          } else {
            if (newInteraction instanceof Start) {
              tmp = rippleAlpha.eds_1;
            } else {
              tmp = 0.0;
            }
          }
        }
        var targetAlpha = tmp;
        var incomingAnimationSpec = incomingStateLayerAnimationSpecFor(newInteraction);
        launch(scope, VOID, VOID, StateLayer$handleInteraction$slambda_0(this, targetAlpha, incomingAnimationSpec, null));
      } else {
        var outgoingAnimationSpec = outgoingStateLayerAnimationSpecFor(this.zds_1);
        launch(scope, VOID, VOID, StateLayer$handleInteraction$slambda_2(this, outgoingAnimationSpec, null));
      }
      this.zds_1 = newInteraction;
    }
  };
  protoOf(StateLayer).mdt = function (_this__u8e3s4, radius, color) {
    var alpha = this.xds_1.x1();
    if (alpha > 0.0) {
      var modulatedColor = Color__copy$default_impl_ectz3s(color, alpha);
      if (this.vds_1) {
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
        // Inline function 'androidx.compose.ui.geometry.Size.width' call
        var this_0 = _this__u8e3s4.r3p();
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value = _Size___get_packedValue__impl__7rlt1o(this_0);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits = convertToInt(shiftRight(value, 32));
        var right = floatFromBits(bits);
        // Inline function 'androidx.compose.ui.geometry.Size.height' call
        var this_1 = _this__u8e3s4.r3p();
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
        var bottom = floatFromBits(bits_0);
        var clipOp = Companion_getInstance_0().m4j_1;
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        // Inline function 'kotlin.with' call
        var $this$with = _this__u8e3s4.t4u();
        var previousSize = $this$with.r3p();
        $this$with.d45().d4j();
        try {
          $this$with.n4u().j4j(0.0, 0.0, right, bottom, clipOp);
          _this__u8e3s4.a4v(modulatedColor, radius);
        }finally {
          $this$with.d45().e4j();
          $this$with.m4u(previousSize);
        }
      } else {
        _this__u8e3s4.a4v(modulatedColor, radius);
      }
    }
  };
  function incomingStateLayerAnimationSpecFor(interaction) {
    _init_properties_Ripple_kt__d55ieo();
    var tmp;
    if (interaction instanceof Enter) {
      tmp = get_DefaultTweenSpec();
    } else {
      if (interaction instanceof Focus) {
        tmp = new TweenSpec(45, VOID, get_LinearEasing());
      } else {
        if (interaction instanceof Start) {
          tmp = new TweenSpec(45, VOID, get_LinearEasing());
        } else {
          tmp = get_DefaultTweenSpec();
        }
      }
    }
    return tmp;
  }
  function outgoingStateLayerAnimationSpecFor(interaction) {
    _init_properties_Ripple_kt__d55ieo();
    var tmp;
    if (interaction instanceof Enter) {
      tmp = get_DefaultTweenSpec();
    } else {
      if (interaction instanceof Focus) {
        tmp = get_DefaultTweenSpec();
      } else {
        if (interaction instanceof Start) {
          tmp = new TweenSpec(150, VOID, get_LinearEasing());
        } else {
          tmp = get_DefaultTweenSpec();
        }
      }
    }
    return tmp;
  }
  var properties_initialized_Ripple_kt_3wqvym;
  function _init_properties_Ripple_kt__d55ieo() {
    if (!properties_initialized_Ripple_kt_3wqvym) {
      properties_initialized_Ripple_kt_3wqvym = true;
      DefaultTweenSpec = new TweenSpec(15, VOID, get_LinearEasing());
      androidx_compose_material_ripple_Ripple$stable = 0;
      androidx_compose_material_ripple_RippleIndicationInstance$stable = 8;
      androidx_compose_material_ripple_RippleNode$stable = 8;
    }
  }
  function get_BoundedRippleExtraRadius() {
    _init_properties_RippleAnimation_kt__8sy0vy();
    return BoundedRippleExtraRadius;
  }
  var BoundedRippleExtraRadius;
  var androidx_compose_material_ripple_RippleAnimation$stable;
  function RippleAnimation$fadeIn$slambda$slambda(this$0, resultContinuation) {
    this.sdu_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda).b1m = function ($this$launch, $completion) {
    var tmp = this.c1m($this$launch, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).e9 = function (p1, $completion) {
    return this.b1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.sdu_1.udp_1.aa6(1.0, tween(75, VOID, get_LinearEasing()), VOID, VOID, this);
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
  protoOf(RippleAnimation$fadeIn$slambda$slambda).c1m = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda(this.sdu_1, completion);
    i.tdu_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeIn$slambda$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeIn$slambda$slambda_1(this$0, resultContinuation) {
    this.cdv_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).b1m = function ($this$launch, $completion) {
    var tmp = this.c1m($this$launch, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).e9 = function (p1, $completion) {
    return this.b1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.cdv_1.vdp_1.aa6(1.0, tween(225, VOID, get_FastOutSlowInEasing()), VOID, VOID, this);
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
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).c1m = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_1(this.cdv_1, completion);
    i.ddv_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeIn$slambda$slambda_2(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_1(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeIn$slambda$slambda_3(this$0, resultContinuation) {
    this.mdv_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).b1m = function ($this$launch, $completion) {
    var tmp = this.c1m($this$launch, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).e9 = function (p1, $completion) {
    return this.b1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.mdv_1.wdp_1.aa6(1.0, tween(225, VOID, get_LinearEasing()), VOID, VOID, this);
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
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).c1m = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_3(this.mdv_1, completion);
    i.ndv_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeIn$slambda$slambda_4(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_3(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeOut$slambda$slambda(this$0, resultContinuation) {
    this.wdv_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeOut$slambda$slambda).b1m = function ($this$launch, $completion) {
    var tmp = this.c1m($this$launch, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).e9 = function (p1, $completion) {
    return this.b1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.wdv_1.udp_1.aa6(0.0, tween(150, VOID, get_LinearEasing()), VOID, VOID, this);
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
  protoOf(RippleAnimation$fadeOut$slambda$slambda).c1m = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeOut$slambda$slambda(this.wdv_1, completion);
    i.xdv_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeOut$slambda$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeOut$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.b1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _set_finishedFadingIn__33hlo9($this, _set____db54di) {
    var tmp0 = $this.ydp_1;
    var tmp = KMutableProperty1;
    var tmp_0 = RippleAnimation$_get_finishedFadingIn_$ref_fbtyx2_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('finishedFadingIn', 1, tmp, tmp_0, RippleAnimation$_set_finishedFadingIn_$ref_1drawq_0());
    tmp0.k1k(_set____db54di);
    return Unit_instance;
  }
  function _get_finishedFadingIn__pzmnej($this) {
    var tmp0 = $this.ydp_1;
    var tmp = KMutableProperty1;
    var tmp_0 = RippleAnimation$_get_finishedFadingIn_$ref_fbtyx2();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('finishedFadingIn', 1, tmp, tmp_0, RippleAnimation$_set_finishedFadingIn_$ref_1drawq());
    return tmp0.x1();
  }
  function _set_finishRequested__u52oy2($this, _set____db54di) {
    var tmp0 = $this.zdp_1;
    var tmp = KMutableProperty1;
    var tmp_0 = RippleAnimation$_get_finishRequested_$ref_hndrqt_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('finishRequested', 1, tmp, tmp_0, RippleAnimation$_set_finishRequested_$ref_4cniuh_0());
    tmp0.k1k(_set____db54di);
    return Unit_instance;
  }
  function _get_finishRequested__usb5ii($this) {
    var tmp0 = $this.zdp_1;
    var tmp = KMutableProperty1;
    var tmp_0 = RippleAnimation$_get_finishRequested_$ref_hndrqt();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('finishRequested', 1, tmp, tmp_0, RippleAnimation$_set_finishRequested_$ref_4cniuh());
    return tmp0.x1();
  }
  function fadeIn($this, $completion) {
    var tmp = new $fadeInCOROUTINE$($this, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function fadeOut($this, $completion) {
    var tmp = new $fadeOutCOROUTINE$($this, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function RippleAnimation$_get_finishedFadingIn_$ref_fbtyx2() {
    return function (p0) {
      return _get_finishedFadingIn__pzmnej(p0);
    };
  }
  function RippleAnimation$_set_finishedFadingIn_$ref_1drawq() {
    return function (p0, p1) {
      _set_finishedFadingIn__33hlo9(p0, p1);
      return Unit_instance;
    };
  }
  function RippleAnimation$_get_finishedFadingIn_$ref_fbtyx2_0() {
    return function (p0) {
      return _get_finishedFadingIn__pzmnej(p0);
    };
  }
  function RippleAnimation$_set_finishedFadingIn_$ref_1drawq_0() {
    return function (p0, p1) {
      _set_finishedFadingIn__33hlo9(p0, p1);
      return Unit_instance;
    };
  }
  function RippleAnimation$_get_finishRequested_$ref_hndrqt() {
    return function (p0) {
      return _get_finishRequested__usb5ii(p0);
    };
  }
  function RippleAnimation$_set_finishRequested_$ref_4cniuh() {
    return function (p0, p1) {
      _set_finishRequested__u52oy2(p0, p1);
      return Unit_instance;
    };
  }
  function RippleAnimation$_get_finishRequested_$ref_hndrqt_0() {
    return function (p0) {
      return _get_finishRequested__usb5ii(p0);
    };
  }
  function RippleAnimation$_set_finishRequested_$ref_4cniuh_0() {
    return function (p0, p1) {
      _set_finishRequested__u52oy2(p0, p1);
      return Unit_instance;
    };
  }
  function RippleAnimation$fadeIn$slambda(this$0, resultContinuation) {
    this.ydw_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda).dd7 = function ($this$coroutineScope, $completion) {
    var tmp = this.c1m($this$coroutineScope, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(RippleAnimation$fadeIn$slambda).e9 = function (p1, $completion) {
    return this.dd7((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        if (tmp === 0) {
          this.n8_1 = 1;
          launch(this.zdw_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_0(this.ydw_1, null));
          launch(this.zdw_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_2(this.ydw_1, null));
          return launch(this.zdw_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_4(this.ydw_1, null));
        } else if (tmp === 1) {
          throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeIn$slambda).c1m = function ($this$coroutineScope, completion) {
    var i = new RippleAnimation$fadeIn$slambda(this.ydw_1, completion);
    i.zdw_1 = $this$coroutineScope;
    return i;
  };
  function RippleAnimation$fadeIn$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda(this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.dd7($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeOut$slambda(this$0, resultContinuation) {
    this.idx_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeOut$slambda).dd7 = function ($this$coroutineScope, $completion) {
    var tmp = this.c1m($this$coroutineScope, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(RippleAnimation$fadeOut$slambda).e9 = function (p1, $completion) {
    return this.dd7((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeOut$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        if (tmp === 0) {
          this.n8_1 = 1;
          return launch(this.jdx_1, VOID, VOID, RippleAnimation$fadeOut$slambda$slambda_0(this.idx_1, null));
        } else if (tmp === 1) {
          throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeOut$slambda).c1m = function ($this$coroutineScope, completion) {
    var i = new RippleAnimation$fadeOut$slambda(this.idx_1, completion);
    i.jdx_1 = $this$coroutineScope;
    return i;
  };
  function RippleAnimation$fadeOut$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeOut$slambda(this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.dd7($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $animateCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sdx_1 = _this__u8e3s4;
  }
  protoOf($animateCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            this.m8_1 = 1;
            suspendResult = fadeIn(this.sdx_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            _set_finishedFadingIn__33hlo9(this.sdx_1, true);
            this.m8_1 = 2;
            suspendResult = this.sdx_1.xdp_1.ry(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m8_1 = 3;
            suspendResult = fadeOut(this.sdx_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  function $fadeInCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.gdw_1 = _this__u8e3s4;
  }
  protoOf($fadeInCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = coroutineScope(RippleAnimation$fadeIn$slambda_0(this.gdw_1, null), this);
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
  function $fadeOutCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.pdw_1 = _this__u8e3s4;
  }
  protoOf($fadeOutCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = coroutineScope(RippleAnimation$fadeOut$slambda_0(this.pdw_1, null), this);
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
  function RippleAnimation(origin, radius, bounded) {
    this.pdp_1 = origin;
    this.qdp_1 = radius;
    this.rdp_1 = bounded;
    this.sdp_1 = null;
    this.tdp_1 = null;
    this.udp_1 = Animatable(0.0);
    this.vdp_1 = Animatable(0.0);
    this.wdp_1 = Animatable(0.0);
    this.xdp_1 = CompletableDeferred(null);
    this.ydp_1 = mutableStateOf(false);
    this.zdp_1 = mutableStateOf(false);
  }
  protoOf(RippleAnimation).adq = function ($completion) {
    var tmp = new $animateCOROUTINE$(this, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(RippleAnimation).cdr = function () {
    _set_finishRequested__u52oy2(this, true);
    this.xdp_1.t12(Unit_instance);
  };
  protoOf(RippleAnimation).jds = function (_this__u8e3s4, color) {
    if (this.sdp_1 == null) {
      this.sdp_1 = getRippleStartRadius(_this__u8e3s4.r3p());
    }
    var tmp = this.pdp_1;
    if ((tmp == null ? null : new Offset(tmp)) == null) {
      this.pdp_1 = _this__u8e3s4.d4v();
    }
    var tmp_0 = this.tdp_1;
    if ((tmp_0 == null ? null : new Offset(tmp_0)) == null) {
      var tmp_1 = this;
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      var this_0 = _this__u8e3s4.r3p();
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Size___get_packedValue__impl__7rlt1o(this_0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      var tmp0 = floatFromBits(bits) / 2.0;
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      var this_1 = _this__u8e3s4.r3p();
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2 = floatFromBits(bits_0) / 2.0;
      var v1 = fromInt(toRawBits(tmp0));
      var v2 = fromInt(toRawBits(val2));
      var tmp$ret$9 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      tmp_1.tdp_1 = _Offset___init__impl__c168vi(tmp$ret$9);
    }
    var tmp_2;
    if (_get_finishRequested__usb5ii(this) && !_get_finishedFadingIn__pzmnej(this)) {
      tmp_2 = 1.0;
    } else {
      tmp_2 = this.udp_1.x1();
    }
    var alpha = tmp_2;
    var radius = lerp(ensureNotNull(this.sdp_1), this.qdp_1, this.vdp_1.x1());
    var tmp_3 = this.pdp_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_2 = ensureNotNull(tmp_3 == null ? null : new Offset(tmp_3)).h3p_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(this_2);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    var tmp_4 = floatFromBits(bits_1);
    var tmp_5 = this.tdp_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_3 = ensureNotNull(tmp_5 == null ? null : new Offset(tmp_5)).h3p_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(this_3);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(shiftRight(value_2, 32));
    var tmp$ret$14 = floatFromBits(bits_2);
    var tmp0_0 = lerp(tmp_4, tmp$ret$14, this.wdp_1.x1());
    var tmp_6 = this.pdp_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_4 = ensureNotNull(tmp_6 == null ? null : new Offset(tmp_6)).h3p_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(this_4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    var tmp_7 = floatFromBits(bits_3);
    var tmp_8 = this.tdp_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_5 = ensureNotNull(tmp_8 == null ? null : new Offset(tmp_8)).h3p_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _Offset___get_packedValue__impl__xh2k8q(this_5);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    var tmp$ret$22 = floatFromBits(bits_4);
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2_0 = lerp(tmp_7, tmp$ret$22, this.wdp_1.x1());
    var v1_0 = fromInt(toRawBits(tmp0_0));
    var v2_0 = fromInt(toRawBits(val2_0));
    var tmp$ret$27 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
    var centerOffset = _Offset___init__impl__c168vi(tmp$ret$27);
    var modulatedColor = Color__copy$default_impl_ectz3s(color, _Color___get_alpha__impl__wcfyv1(color) * alpha);
    if (this.rdp_1) {
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      var this_6 = _this__u8e3s4.r3p();
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_5 = _Size___get_packedValue__impl__7rlt1o(this_6);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_5 = convertToInt(shiftRight(value_5, 32));
      var right = floatFromBits(bits_5);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      var this_7 = _this__u8e3s4.r3p();
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_6 = _Size___get_packedValue__impl__7rlt1o(this_7);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
      var bottom = floatFromBits(bits_6);
      var clipOp = Companion_getInstance_0().m4j_1;
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      // Inline function 'kotlin.with' call
      var $this$with = _this__u8e3s4.t4u();
      var previousSize = $this$with.r3p();
      $this$with.d45().d4j();
      try {
        $this$with.n4u().j4j(0.0, 0.0, right, bottom, clipOp);
        _this__u8e3s4.a4v(modulatedColor, radius, centerOffset);
      }finally {
        $this$with.d45().e4j();
        $this$with.m4u(previousSize);
      }
    } else {
      _this__u8e3s4.a4v(modulatedColor, radius, centerOffset);
    }
  };
  function getRippleEndRadius(_this__u8e3s4, bounded, size) {
    _init_properties_RippleAnimation_kt__8sy0vy();
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$9 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$8 = _Offset___init__impl__c168vi(tmp$ret$9);
    var radiusCoveringBounds = Offset__getDistance_impl_pclvxn(tmp$ret$8) / 2.0;
    var tmp;
    if (bounded) {
      tmp = radiusCoveringBounds + _this__u8e3s4.u3q(get_BoundedRippleExtraRadius());
    } else {
      tmp = radiusCoveringBounds;
    }
    return tmp;
  }
  function getRippleStartRadius(size) {
    _init_properties_RippleAnimation_kt__8sy0vy();
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.math.max' call
    var b = floatFromBits(bits_0);
    return Math.max(tmp0, b) * 0.3;
  }
  var properties_initialized_RippleAnimation_kt_4ja21o;
  function _init_properties_RippleAnimation_kt__8sy0vy() {
    if (!properties_initialized_RippleAnimation_kt_4ja21o) {
      properties_initialized_RippleAnimation_kt_4ja21o = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      BoundedRippleExtraRadius = _Dp___init__impl__ms3zkb(10);
      androidx_compose_material_ripple_RippleAnimation$stable = 8;
    }
  }
  function RippleAlpha(draggedAlpha, focusedAlpha, hoveredAlpha, pressedAlpha) {
    this.eds_1 = draggedAlpha;
    this.fds_1 = focusedAlpha;
    this.gds_1 = hoveredAlpha;
    this.hds_1 = pressedAlpha;
  }
  protoOf(RippleAlpha).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RippleAlpha))
      return false;
    if (!(this.eds_1 === other.eds_1))
      return false;
    if (!(this.fds_1 === other.fds_1))
      return false;
    if (!(this.gds_1 === other.gds_1))
      return false;
    if (!(this.hds_1 === other.hds_1))
      return false;
    return true;
  };
  protoOf(RippleAlpha).hashCode = function () {
    var result = getNumberHashCode(this.eds_1);
    result = imul(31, result) + getNumberHashCode(this.fds_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.gds_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.hds_1) | 0;
    return result;
  };
  protoOf(RippleAlpha).toString = function () {
    return 'RippleAlpha(draggedAlpha=' + this.eds_1 + ', focusedAlpha=' + this.fds_1 + ', ' + ('hoveredAlpha=' + this.gds_1 + ', pressedAlpha=' + this.hds_1 + ')');
  };
  function createPlatformRippleNode(interactionSource, bounded, radius, color, rippleAlpha) {
    return new CommonRippleNode(interactionSource, bounded, radius, color, rippleAlpha);
  }
  //region block: post-declaration
  protoOf(RippleNode).l6a = onMeasureResultChanged;
  protoOf(RippleNode).s66 = onPlaced;
  //endregion
  //region block: init
  androidx_compose_material_ripple_CommonRipple$stable = 0;
  androidx_compose_material_ripple_CommonRippleNode$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = RippleAlpha;
  _.$_$.b = createRippleModifierNode;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-material-material-ripple.js.map
