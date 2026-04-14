(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-viewmodel'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-lifecycle-lifecycle-viewmodel'.");
    }
    globalThis['androidx-lifecycle-lifecycle-viewmodel'] = factory(typeof globalThis['androidx-lifecycle-lifecycle-viewmodel'] === 'undefined' ? {} : globalThis['androidx-lifecycle-lifecycle-viewmodel'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.fa;
  var initMetadataForInterface = kotlin_kotlin.$_$.r9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.b1;
  var Unit_instance = kotlin_kotlin.$_$.n;
  var initMetadataForClass = kotlin_kotlin.$_$.n9;
  var initMetadataForObject = kotlin_kotlin.$_$.t9;
  var VOID = kotlin_kotlin.$_$.c;
  var initMetadataForCompanion = kotlin_kotlin.$_$.o9;
  var equals = kotlin_kotlin.$_$.f9;
  var hashCode = kotlin_kotlin.$_$.m9;
  var toString = kotlin_kotlin.$_$.ha;
  var objectCreate = kotlin_kotlin.$_$.ea;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.e2;
  var Exception = kotlin_kotlin.$_$.cd;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.d1;
  var ensureNotNull = kotlin_kotlin.$_$.ud;
  var THROW_CCE = kotlin_kotlin.$_$.ld;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var isInterface = kotlin_kotlin.$_$.w9;
  //endregion
  //region block: pre-declaration
  function get_defaultViewModelCreationExtras() {
    return Empty_getInstance();
  }
  initMetadataForInterface(HasDefaultViewModelProviderFactory, 'HasDefaultViewModelProviderFactory');
  initMetadataForClass(ViewModelStore, 'ViewModelStore', ViewModelStore);
  initMetadataForClass(CreationExtras, 'CreationExtras');
  initMetadataForObject(Empty, 'Empty', VOID, CreationExtras);
  initMetadataForCompanion(Companion);
  initMetadataForClass(MutableCreationExtras, 'MutableCreationExtras', MutableCreationExtras_init_$Create$, CreationExtras);
  initMetadataForClass(ViewModelImpl, 'ViewModelImpl', ViewModelImpl_init_$Create$);
  initMetadataForClass(ViewModelProviderImpl, 'ViewModelProviderImpl');
  initMetadataForObject(ViewModelProviders, 'ViewModelProviders');
  initMetadataForClass(ViewModel, 'ViewModel');
  initMetadataForClass(ViewModelProvider$Companion$VIEW_MODEL_KEY$$inlined$Key$1);
  function create(modelClass, extras) {
    return ViewModelProviders_instance.l5z();
  }
  initMetadataForInterface(Factory, 'Factory');
  initMetadataForClass(OnRequeryFactory, 'OnRequeryFactory');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ViewModelProvider, 'ViewModelProvider');
  initMetadataForObject(DefaultViewModelProviderFactory, 'DefaultViewModelProviderFactory', VOID, VOID, [Factory]);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  //endregion
  function HasDefaultViewModelProviderFactory() {
  }
  function ViewModelStore() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.r5y_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ViewModelStore).s5y = function (key, viewModel) {
    var oldViewModel = this.r5y_1.y1(key, viewModel);
    if (oldViewModel == null)
      null;
    else {
      oldViewModel.u5y();
    }
  };
  protoOf(ViewModelStore).v5y = function (key) {
    return this.r5y_1.g2(key);
  };
  protoOf(ViewModelStore).s1 = function () {
    var _iterator__ex2g4s = this.r5y_1.c2().i();
    while (_iterator__ex2g4s.j()) {
      var vm = _iterator__ex2g4s.k();
      vm.u5y();
    }
    this.r5y_1.s1();
  };
  function Empty() {
    Empty_instance = this;
    CreationExtras.call(this);
  }
  var Empty_instance;
  function Empty_getInstance() {
    if (Empty_instance == null)
      new Empty();
    return Empty_instance;
  }
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function CreationExtras() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.w5y_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(CreationExtras).equals = function (other) {
    var tmp;
    if (other instanceof CreationExtras) {
      tmp = equals(this.w5y_1, other.w5y_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CreationExtras).hashCode = function () {
    return hashCode(this.w5y_1);
  };
  protoOf(CreationExtras).toString = function () {
    return 'CreationExtras(extras=' + toString(this.w5y_1) + ')';
  };
  function MutableCreationExtras_init_$Init$(initialExtras, $this) {
    initialExtras = initialExtras === VOID ? Empty_getInstance() : initialExtras;
    MutableCreationExtras.call($this, initialExtras.w5y_1);
    return $this;
  }
  function MutableCreationExtras_init_$Create$(initialExtras) {
    return MutableCreationExtras_init_$Init$(initialExtras, objectCreate(protoOf(MutableCreationExtras)));
  }
  function MutableCreationExtras(initialExtras) {
    CreationExtras.call(this);
    // Inline function 'kotlin.collections.plusAssign' call
    this.w5y_1.a2(initialExtras);
  }
  protoOf(MutableCreationExtras).y5y = function (key, t) {
    // Inline function 'kotlin.collections.set' call
    this.w5y_1.y1(key, t);
  };
  function ViewModelImpl_init_$Init$($this) {
    ViewModelImpl.call($this);
    return $this;
  }
  function ViewModelImpl_init_$Create$() {
    return ViewModelImpl_init_$Init$(objectCreate(protoOf(ViewModelImpl)));
  }
  function closeWithRuntimeException($this, closeable) {
    try {
      if (closeable == null)
        null;
      else {
        closeable.v29();
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        throw RuntimeException_init_$Create$(e);
      } else {
        throw $p;
      }
    }
  }
  protoOf(ViewModelImpl).s1 = function () {
    if (this.c5z_1)
      return Unit_instance;
    this.c5z_1 = true;
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
    this.z5y_1;
    var _iterator__ex2g4s = this.a5z_1.c2().i();
    while (_iterator__ex2g4s.j()) {
      var closeable = _iterator__ex2g4s.k();
      closeWithRuntimeException(this, closeable);
    }
    var _iterator__ex2g4s_0 = this.b5z_1.i();
    while (_iterator__ex2g4s_0.j()) {
      var closeable_0 = _iterator__ex2g4s_0.k();
      closeWithRuntimeException(this, closeable_0);
    }
    this.b5z_1.s1();
  };
  function ViewModelImpl() {
    this.z5y_1 = new SynchronizedObject();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.a5z_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.b5z_1 = LinkedHashSet_init_$Create$();
    this.c5z_1 = false;
  }
  function ViewModelProviderImpl(store, factory, defaultExtras) {
    this.d5z_1 = store;
    this.e5z_1 = factory;
    this.f5z_1 = defaultExtras;
    this.g5z_1 = new SynchronizedObject();
  }
  protoOf(ViewModelProviderImpl).h5z = function (modelClass, key) {
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
    this.g5z_1;
    var tmp$ret$2;
    $l$block: {
      var viewModel = this.d5z_1.v5y(key);
      if (modelClass.z9(viewModel)) {
        var tmp = this.e5z_1;
        if (tmp instanceof OnRequeryFactory) {
          this.e5z_1.i5z(ensureNotNull(viewModel));
        }
        tmp$ret$2 = viewModel instanceof ViewModel ? viewModel : THROW_CCE();
        break $l$block;
      }
      var modelExtras = MutableCreationExtras_init_$Create$(this.f5z_1);
      modelExtras.y5y(Companion_getInstance_0().j5z_1, key);
      // Inline function 'kotlin.also' call
      var this_0 = createViewModel(this.e5z_1, modelClass, modelExtras);
      this.d5z_1.s5y(key, this_0);
      tmp$ret$2 = this_0;
    }
    return tmp$ret$2;
  };
  function ViewModelProviders() {
    this.k5z_1 = 'androidx.lifecycle.ViewModelProvider.DefaultKey';
  }
  protoOf(ViewModelProviders).l5z = function () {
    throw UnsupportedOperationException_init_$Create$('`Factory.create(String, CreationExtras)` is not implemented. You may need to override the method and provide a custom implementation. Note that using `Factory.create(String)` is not supported and considered an error.');
  };
  protoOf(ViewModelProviders).m5z = function (owner) {
    var tmp;
    if (isInterface(owner, HasDefaultViewModelProviderFactory)) {
      tmp = owner.p5y();
    } else {
      tmp = DefaultViewModelProviderFactory_instance;
    }
    return tmp;
  };
  protoOf(ViewModelProviders).n5z = function (owner) {
    var tmp;
    if (isInterface(owner, HasDefaultViewModelProviderFactory)) {
      tmp = owner.q5y();
    } else {
      tmp = Empty_getInstance();
    }
    return tmp;
  };
  var ViewModelProviders_instance;
  function ViewModelProviders_getInstance() {
    return ViewModelProviders_instance;
  }
  function ViewModel_init_$Init$($this) {
    ViewModel.call($this);
    $this.t5y_1 = ViewModelImpl_init_$Create$();
    return $this;
  }
  protoOf(ViewModel).o5z = function () {
  };
  protoOf(ViewModel).u5y = function () {
    this.t5y_1.s1();
    this.o5z();
  };
  function ViewModel() {
  }
  function ViewModelProvider$Companion$VIEW_MODEL_KEY$$inlined$Key$1() {
  }
  function Factory() {
  }
  function OnRequeryFactory() {
  }
  protoOf(OnRequeryFactory).i5z = function (viewModel) {
  };
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'androidx.lifecycle.viewmodel.Companion.Key' call
    tmp.j5z_1 = new ViewModelProvider$Companion$VIEW_MODEL_KEY$$inlined$Key$1();
  }
  protoOf(Companion_0).q5z = function (owner, factory, extras) {
    return new ViewModelProvider(new ViewModelProviderImpl(owner.r5z(), factory, extras));
  };
  protoOf(Companion_0).s5z = function (owner, factory, extras, $super) {
    factory = factory === VOID ? ViewModelProviders_instance.m5z(owner) : factory;
    extras = extras === VOID ? ViewModelProviders_instance.n5z(owner) : extras;
    return $super === VOID ? this.q5z(owner, factory, extras) : $super.q5z.call(this, owner, factory, extras);
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ViewModelProvider(impl) {
    Companion_getInstance_0();
    this.t5z_1 = impl;
  }
  protoOf(ViewModelProvider).u5z = function (key, modelClass) {
    return this.t5z_1.h5z(modelClass, key);
  };
  function DefaultViewModelProviderFactory() {
  }
  protoOf(DefaultViewModelProviderFactory).p5z = function (modelClass, extras) {
    return ViewModelProviders_instance.l5z();
  };
  var DefaultViewModelProviderFactory_instance;
  function DefaultViewModelProviderFactory_getInstance() {
    return DefaultViewModelProviderFactory_instance;
  }
  function createViewModel(factory, modelClass, extras) {
    return factory.p5z(modelClass, extras);
  }
  function SynchronizedObject() {
  }
  //region block: init
  Companion_instance = new Companion();
  ViewModelProviders_instance = new ViewModelProviders();
  DefaultViewModelProviderFactory_instance = new DefaultViewModelProviderFactory();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = HasDefaultViewModelProviderFactory;
  _.$_$.b = create;
  _.$_$.c = Factory;
  _.$_$.d = ViewModelStore;
  _.$_$.e = ViewModel;
  _.$_$.f = Companion_instance;
  _.$_$.g = Companion_getInstance_0;
  _.$_$.h = MutableCreationExtras_init_$Create$;
  _.$_$.i = ViewModel_init_$Init$;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-lifecycle-lifecycle-viewmodel.js.map
