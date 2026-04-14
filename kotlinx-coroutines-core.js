(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    globalThis['kotlinx-coroutines-core'] = factory(typeof globalThis['kotlinx-coroutines-core'] === 'undefined' ? {} : globalThis['kotlinx-coroutines-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.n;
  var protoOf = kotlin_kotlin.$_$.fa;
  var Continuation = kotlin_kotlin.$_$.m7;
  var initMetadataForClass = kotlin_kotlin.$_$.n9;
  var VOID = kotlin_kotlin.$_$.c;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.e;
  var Key_instance = kotlin_kotlin.$_$.d;
  var equals = kotlin_kotlin.$_$.f9;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.e7;
  var CoroutineImpl = kotlin_kotlin.$_$.s7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.d7;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.p9;
  var toString = kotlin_kotlin.$_$.ha;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var intercepted = kotlin_kotlin.$_$.f7;
  var initMetadataForInterface = kotlin_kotlin.$_$.r9;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var isInterface = kotlin_kotlin.$_$.w9;
  var THROW_CCE = kotlin_kotlin.$_$.ld;
  var toString_0 = kotlin_kotlin.$_$.me;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var initMetadataForObject = kotlin_kotlin.$_$.t9;
  var hashCode = kotlin_kotlin.$_$.m9;
  var Companion_instance = kotlin_kotlin.$_$.m;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.u2;
  var createFailure = kotlin_kotlin.$_$.td;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.v2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.x2;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.i7;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.h7;
  var get = kotlin_kotlin.$_$.j7;
  var minusKey = kotlin_kotlin.$_$.k7;
  var ContinuationInterceptor = kotlin_kotlin.$_$.l7;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.j2;
  var addSuppressed = kotlin_kotlin.$_$.pd;
  var Enum = kotlin_kotlin.$_$.ad;
  var startCoroutine = kotlin_kotlin.$_$.u7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ae;
  var Long = kotlin_kotlin.$_$.gd;
  var compare = kotlin_kotlin.$_$.d8;
  var Duration__isPositive_impl_tvkkt2 = kotlin_kotlin.$_$.n2;
  var Companion_getInstance = kotlin_kotlin.$_$.j;
  var DurationUnit_NANOSECONDS_getInstance = kotlin_kotlin.$_$.p;
  var toDuration = kotlin_kotlin.$_$.uc;
  var Duration__plus_impl_yu9v8f = kotlin_kotlin.$_$.o2;
  var _Duration___get_inWholeMilliseconds__impl__msfiry = kotlin_kotlin.$_$.m2;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.s;
  var add = kotlin_kotlin.$_$.z7;
  var subtract = kotlin_kotlin.$_$.r8;
  var RuntimeException = kotlin_kotlin.$_$.kd;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.i2;
  var captureStack = kotlin_kotlin.$_$.w8;
  var Error_0 = kotlin_kotlin.$_$.bd;
  var Error_init_$Init$ = kotlin_kotlin.$_$.p1;
  var Element = kotlin_kotlin.$_$.q7;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.w7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var CancellationException = kotlin_kotlin.$_$.c7;
  var ArrayList = kotlin_kotlin.$_$.m3;
  var SequenceScope = kotlin_kotlin.$_$.hb;
  var initMetadataForLambda = kotlin_kotlin.$_$.s9;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.y1;
  var sequence = kotlin_kotlin.$_$.mb;
  var plus = kotlin_kotlin.$_$.r7;
  var get_0 = kotlin_kotlin.$_$.o7;
  var fold = kotlin_kotlin.$_$.n7;
  var minusKey_0 = kotlin_kotlin.$_$.p7;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.l1;
  var anyToString = kotlin_kotlin.$_$.u8;
  var UnsupportedOperationException = kotlin_kotlin.$_$.od;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.f1;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.o;
  var returnIfSuspended = kotlin_kotlin.$_$.r;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.ud;
  var fromInt = kotlin_kotlin.$_$.i8;
  var multiply = kotlin_kotlin.$_$.l8;
  var divide = kotlin_kotlin.$_$.g8;
  var modulo = kotlin_kotlin.$_$.k8;
  var convertToInt = kotlin_kotlin.$_$.e8;
  var equalsLong = kotlin_kotlin.$_$.h8;
  var bitwiseAnd = kotlin_kotlin.$_$.a8;
  var shiftRight = kotlin_kotlin.$_$.q8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var listOf = kotlin_kotlin.$_$.a6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var compareTo = kotlin_kotlin.$_$.b9;
  var last = kotlin_kotlin.$_$.bc;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.p2;
  var shiftLeft = kotlin_kotlin.$_$.o8;
  var initMetadataForCompanion = kotlin_kotlin.$_$.o9;
  var IllegalStateException = kotlin_kotlin.$_$.ed;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.w1;
  var NoSuchElementException = kotlin_kotlin.$_$.hd;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.b2;
  var getKClass = kotlin_kotlin.$_$.cb;
  var Unit = kotlin_kotlin.$_$.nd;
  var copyOf = kotlin_kotlin.$_$.q4;
  var get_ONE = kotlin_kotlin.$_$.y7;
  var joinToString = kotlin_kotlin.$_$.n5;
  var FunctionAdapter = kotlin_kotlin.$_$.t8;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.he;
  var Exception = kotlin_kotlin.$_$.cd;
  var toLongOrNull = kotlin_kotlin.$_$.nc;
  var startCoroutineUninterceptedOrReturnNonGeneratorVersion = kotlin_kotlin.$_$.g7;
  var isSuspendFunction = kotlin_kotlin.$_$.x9;
  var Collection = kotlin_kotlin.$_$.n3;
  var KtList = kotlin_kotlin.$_$.o3;
  var plus_0 = kotlin_kotlin.$_$.i6;
  var listOf_0 = kotlin_kotlin.$_$.z5;
  var getKClassFromExpression = kotlin_kotlin.$_$.bb;
  var removeFirstOrNull = kotlin_kotlin.$_$.j6;
  var KtMutableList = kotlin_kotlin.$_$.s3;
  var coerceIn = kotlin_kotlin.$_$.xa;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.i1;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.h1;
  var getStringHashCode = kotlin_kotlin.$_$.l9;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.y;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.g2;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.d1;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.bx(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.bx.call(this, cause);
    }
    return tmp;
  }
  initMetadataForInterface(Job, 'Job', VOID, VOID, [Element], [0]);
  initMetadataForInterface(ParentJob, 'ParentJob', VOID, VOID, [Job], [0]);
  initMetadataForClass(JobSupport, 'JobSupport', VOID, VOID, [Job, ParentJob], [0]);
  initMetadataForInterface(CoroutineScope, 'CoroutineScope');
  initMetadataForClass(AbstractCoroutine, 'AbstractCoroutine', VOID, JobSupport, [Job, Continuation, CoroutineScope], [0]);
  initMetadataForClass(StandaloneCoroutine, 'StandaloneCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', VOID, StandaloneCoroutine, VOID, [0]);
  initMetadataForCoroutine($awaitCOROUTINE$, CoroutineImpl);
  initMetadataForClass(DeferredCoroutine, 'DeferredCoroutine', VOID, AbstractCoroutine, [Job], [0]);
  initMetadataForClass(LazyDeferredCoroutine, 'LazyDeferredCoroutine', VOID, DeferredCoroutine, VOID, [0]);
  initMetadataForClass(ScopeCoroutine, 'ScopeCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(DispatchedCoroutine, 'DispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  function cancel$default_0(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.cz(cause) : $super.cz.call(this, cause);
  }
  initMetadataForInterface(CancellableContinuation, 'CancellableContinuation', VOID, VOID, [Continuation]);
  initMetadataForInterface(NotCompleted, 'NotCompleted');
  initMetadataForInterface(CancelHandler, 'CancelHandler', VOID, VOID, [NotCompleted]);
  initMetadataForClass(DisposeOnCancel, 'DisposeOnCancel', VOID, VOID, [CancelHandler]);
  initMetadataForInterface(Runnable, 'Runnable');
  initMetadataForClass(SchedulerTask, 'SchedulerTask', VOID, VOID, [Runnable]);
  initMetadataForClass(DispatchedTask, 'DispatchedTask', VOID, SchedulerTask);
  initMetadataForInterface(Waiter, 'Waiter');
  initMetadataForClass(CancellableContinuationImpl, 'CancellableContinuationImpl', VOID, DispatchedTask, [CancellableContinuation, Waiter]);
  initMetadataForObject(Active, 'Active', VOID, VOID, [NotCompleted]);
  initMetadataForClass(CompletedContinuation, 'CompletedContinuation');
  initMetadataForClass(UserSupplied, 'UserSupplied', VOID, VOID, [CancelHandler]);
  initMetadataForClass(LockFreeLinkedListNode, 'LockFreeLinkedListNode', LockFreeLinkedListNode);
  initMetadataForInterface(DisposableHandle, 'DisposableHandle');
  initMetadataForInterface(Incomplete, 'Incomplete');
  initMetadataForClass(JobNode, 'JobNode', VOID, LockFreeLinkedListNode, [DisposableHandle, Incomplete]);
  initMetadataForClass(ChildContinuation, 'ChildContinuation', VOID, JobNode);
  initMetadataForCoroutine($awaitCOROUTINE$_0, CoroutineImpl);
  initMetadataForClass(CompletableDeferredImpl, 'CompletableDeferredImpl', VOID, JobSupport, [Job], [0]);
  initMetadataForClass(CompletedExceptionally, 'CompletedExceptionally');
  initMetadataForClass(CancelledContinuation, 'CancelledContinuation', VOID, CompletedExceptionally);
  initMetadataForObject(Key, 'Key', VOID, AbstractCoroutineContextKey);
  initMetadataForClass(CoroutineDispatcher, 'CoroutineDispatcher', VOID, AbstractCoroutineContextElement, [ContinuationInterceptor]);
  initMetadataForObject(Key_0, 'Key');
  initMetadataForObject(Key_1, 'Key');
  initMetadataForObject(GlobalScope, 'GlobalScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(CoroutineStart, 'CoroutineStart', VOID, Enum);
  function invokeOnTimeout(timeMillis, block, context) {
    return get_DefaultDelay().h13(timeMillis, block, context);
  }
  initMetadataForInterface(Delay, 'Delay', VOID, VOID, VOID, [1]);
  initMetadataForInterface(DelayWithTimeoutDiagnostics, 'DelayWithTimeoutDiagnostics', VOID, VOID, [Delay], [1]);
  initMetadataForClass(EventLoop, 'EventLoop', VOID, CoroutineDispatcher);
  initMetadataForObject(ThreadLocalEventLoop, 'ThreadLocalEventLoop');
  initMetadataForClass(CompletionHandlerException, 'CompletionHandlerException', VOID, RuntimeException);
  initMetadataForClass(CoroutinesInternalError, 'CoroutinesInternalError', VOID, Error_0);
  initMetadataForObject(Key_2, 'Key');
  initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle', VOID, VOID, [DisposableHandle]);
  initMetadataForClass(DisposeOnCompletion, 'DisposeOnCompletion', VOID, JobNode);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForClass(Finishing, 'Finishing', VOID, SynchronizedObject, [Incomplete]);
  initMetadataForClass(ChildCompletion, 'ChildCompletion', VOID, JobNode);
  initMetadataForClass(AwaitContinuation, 'AwaitContinuation', VOID, CancellableContinuationImpl);
  initMetadataForLambda(JobSupport$_get_children_$slambda_k839f8, CoroutineImpl, VOID, [1]);
  initMetadataForClass(JobImpl, 'JobImpl', VOID, JobSupport, [Job], [0]);
  initMetadataForClass(Empty, 'Empty', VOID, VOID, [Incomplete]);
  initMetadataForClass(IncompleteStateBox, 'IncompleteStateBox');
  initMetadataForClass(LockFreeLinkedListHead, 'LockFreeLinkedListHead', LockFreeLinkedListHead, LockFreeLinkedListNode);
  initMetadataForClass(NodeList, 'NodeList', NodeList, LockFreeLinkedListHead, [Incomplete]);
  initMetadataForClass(InactiveNodeList, 'InactiveNodeList', VOID, VOID, [Incomplete]);
  initMetadataForClass(InvokeOnCompletion, 'InvokeOnCompletion', VOID, JobNode);
  initMetadataForClass(InvokeOnCancelling, 'InvokeOnCancelling', VOID, JobNode);
  initMetadataForClass(ResumeOnCompletion, 'ResumeOnCompletion', VOID, JobNode);
  initMetadataForClass(ChildHandleNode, 'ChildHandleNode', VOID, JobNode, [DisposableHandle]);
  initMetadataForClass(ResumeAwaitOnCompletion, 'ResumeAwaitOnCompletion', VOID, JobNode);
  initMetadataForClass(MainCoroutineDispatcher, 'MainCoroutineDispatcher', VOID, CoroutineDispatcher);
  initMetadataForClass(SupervisorCoroutine, 'SupervisorCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  initMetadataForClass(SupervisorJobImpl, 'SupervisorJobImpl', VOID, JobImpl, VOID, [0]);
  initMetadataForClass(TimeoutCancellationException, 'TimeoutCancellationException', VOID, CancellationException);
  initMetadataForClass(TimeoutCoroutine, 'TimeoutCoroutine', VOID, ScopeCoroutine, [Runnable], [0]);
  initMetadataForCoroutine($withTimeoutOrNullCOROUTINE$, CoroutineImpl);
  initMetadataForObject(Key_3, 'Key');
  initMetadataForClass(YieldContext, 'YieldContext', YieldContext, AbstractCoroutineContextElement);
  initMetadataForObject(Unconfined, 'Unconfined', VOID, CoroutineDispatcher);
  initMetadataForClass(BufferOverflow, 'BufferOverflow', VOID, Enum);
  initMetadataForClass(ConcurrentLinkedListNode, 'ConcurrentLinkedListNode');
  initMetadataForClass(Segment, 'Segment', VOID, ConcurrentLinkedListNode, [NotCompleted]);
  initMetadataForClass(ChannelSegment, 'ChannelSegment', VOID, Segment);
  initMetadataForCoroutine($hasNextCOROUTINE$, CoroutineImpl);
  initMetadataForClass(SendBroadcast, 'SendBroadcast', VOID, VOID, [Waiter]);
  initMetadataForClass(BufferedChannelIterator, 'BufferedChannelIterator', VOID, VOID, [Waiter], [0, 3]);
  initMetadataForCoroutine($sendCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($receiveCOROUTINE$, CoroutineImpl);
  function cancel$default_1(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.bx(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.bx.call(this, cause);
    }
    return tmp;
  }
  initMetadataForInterface(ReceiveChannel, 'ReceiveChannel', VOID, VOID, VOID, [0]);
  function close$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.z1d(cause) : $super.z1d.call(this, cause);
  }
  initMetadataForInterface(SendChannel, 'SendChannel', VOID, VOID, VOID, [1]);
  initMetadataForClass(BufferedChannel, 'BufferedChannel', VOID, VOID, [ReceiveChannel, SendChannel], [1, 4, 0, 3]);
  initMetadataForClass(WaiterEB, 'WaiterEB');
  initMetadataForClass(ReceiveCatching, 'ReceiveCatching', VOID, VOID, [Waiter]);
  initMetadataForObject(Factory, 'Factory');
  initMetadataForClass(Failed, 'Failed', Failed);
  initMetadataForClass(Closed, 'Closed', VOID, Failed);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ChannelResult, 'ChannelResult');
  initMetadataForClass(ClosedSendChannelException, 'ClosedSendChannelException', VOID, IllegalStateException);
  initMetadataForClass(ClosedReceiveChannelException, 'ClosedReceiveChannelException', VOID, NoSuchElementException);
  initMetadataForClass(ChannelCoroutine, 'ChannelCoroutine', VOID, AbstractCoroutine, [ReceiveChannel, SendChannel], [1, 0]);
  initMetadataForClass(ConflatedBufferedChannel, 'ConflatedBufferedChannel', VOID, BufferedChannel, VOID, [1, 0]);
  initMetadataForInterface(ProducerScope, 'ProducerScope', VOID, VOID, [CoroutineScope, SendChannel], [1]);
  initMetadataForClass(ProducerCoroutine, 'ProducerCoroutine', VOID, ChannelCoroutine, [ProducerScope], [1, 0]);
  initMetadataForClass(AbstractFlow, 'AbstractFlow', VOID, VOID, VOID, [1]);
  initMetadataForClass(SafeFlow, 'SafeFlow', VOID, AbstractFlow, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$, CoroutineImpl);
  initMetadataForClass(ChannelFlow, 'ChannelFlow', VOID, VOID, VOID, [1]);
  initMetadataForClass(ChannelAsFlow, 'ChannelAsFlow', VOID, ChannelFlow, VOID, [1]);
  initMetadataForCoroutine($emitAllImplCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($collectCOROUTINE$_0, CoroutineImpl);
  initMetadataForInterface(FlowCollector, 'FlowCollector', VOID, VOID, VOID, [1]);
  initMetadataForClass(Emitter, 'Emitter', VOID, VOID, [DisposableHandle]);
  initMetadataForCoroutine($collectCOROUTINE$_1, CoroutineImpl);
  initMetadataForClass(AbstractSharedFlow, 'AbstractSharedFlow', VOID, SynchronizedObject);
  initMetadataForClass(SharedFlowImpl, 'SharedFlowImpl', VOID, AbstractSharedFlow, [FlowCollector], [1]);
  initMetadataForClass(AbstractSharedFlowSlot, 'AbstractSharedFlowSlot');
  initMetadataForClass(SharedFlowSlot, 'SharedFlowSlot', SharedFlowSlot, AbstractSharedFlowSlot);
  initMetadataForCoroutine($collectCOROUTINE$_2, CoroutineImpl);
  initMetadataForClass(StateFlowImpl, 'StateFlowImpl', VOID, AbstractSharedFlow, [FlowCollector], [1]);
  initMetadataForClass(StateFlowSlot, 'StateFlowSlot', StateFlowSlot, AbstractSharedFlowSlot, VOID, [0]);
  initMetadataForLambda(ChannelFlow$_get_collectToFun_$slambda_j53z2e, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ChannelFlow$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(FlowCoroutine, 'FlowCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  initMetadataForLambda(scopedFlow$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$_3, CoroutineImpl);
  initMetadataForClass(scopedFlow$$inlined$unsafeFlow$1, VOID, VOID, VOID, VOID, [1]);
  initMetadataForClass(SendingCollector, 'SendingCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForLambda(debounceInternal$slambda$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(debounceInternal$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(debounceInternal$slambda$slambda_1, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(debounceInternal$slambda$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(debounceInternal$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForClass(ThrowingCollector, 'ThrowingCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForCoroutine($onSubscriptionCOROUTINE$, CoroutineImpl);
  initMetadataForClass(SubscribedFlowCollector, 'SubscribedFlowCollector', VOID, VOID, [FlowCollector], [1, 0]);
  initMetadataForCoroutine($collectCOROUTINE$_4, CoroutineImpl);
  initMetadataForClass(ReadonlyStateFlow, 'ReadonlyStateFlow', VOID, VOID, VOID, [1]);
  initMetadataForClass(SegmentOrClosed, 'SegmentOrClosed');
  initMetadataForObject(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', VOID, Exception);
  initMetadataForClass(DispatchedContinuation, 'DispatchedContinuation', VOID, DispatchedTask, [Continuation]);
  initMetadataForClass(UndeliveredElementException, 'UndeliveredElementException', VOID, RuntimeException);
  initMetadataForClass(ContextScope, 'ContextScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForClass(OnTimeout$register$$inlined$Runnable$1, VOID, VOID, VOID, [Runnable]);
  initMetadataForClass(OnTimeout, 'OnTimeout');
  initMetadataForClass(SelectClause0Impl, 'SelectClause0Impl');
  initMetadataForInterface(SelectInstance, 'SelectInstance');
  initMetadataForClass(SelectClause1Impl, 'SelectClause1Impl');
  initMetadataForCoroutine($invokeBlockCOROUTINE$, CoroutineImpl);
  initMetadataForClass(ClauseData, 'ClauseData', VOID, VOID, VOID, [1]);
  initMetadataForCoroutine($doSelectCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($doSelectSuspendCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($completeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($processResultAndInvokeBlockRecoveringExceptionCOROUTINE$, CoroutineImpl);
  initMetadataForClass(SelectImplementation, 'SelectImplementation', VOID, VOID, [CancelHandler, SelectInstance, Waiter], [0, 2]);
  initMetadataForClass(TrySelectDetailedResult, 'TrySelectDetailedResult', VOID, Enum);
  function lock$default(owner, $completion, $super) {
    owner = owner === VOID ? null : owner;
    return $super === VOID ? this.i1u(owner, $completion) : $super.i1u.call(this, owner, $completion);
  }
  function unlock$default(owner, $super) {
    owner = owner === VOID ? null : owner;
    var tmp;
    if ($super === VOID) {
      this.k1u(owner);
      tmp = Unit_instance;
    } else {
      tmp = $super.k1u.call(this, owner);
    }
    return tmp;
  }
  initMetadataForInterface(Mutex, 'Mutex', VOID, VOID, VOID, [1]);
  initMetadataForClass(CancellableContinuationWithOwner, 'CancellableContinuationWithOwner', VOID, VOID, [CancellableContinuation, Waiter]);
  initMetadataForClass(SemaphoreAndMutexImpl, 'SemaphoreAndMutexImpl', VOID, VOID, VOID, [0]);
  initMetadataForClass(MutexImpl, 'MutexImpl', VOID, SemaphoreAndMutexImpl, [Mutex], [1, 0]);
  initMetadataForClass(SemaphoreSegment, 'SemaphoreSegment', VOID, Segment);
  initMetadataForClass(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', VOID, CoroutineDispatcher, [Delay], [1]);
  initMetadataForObject(NodeDispatcher, 'NodeDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(MessageQueue, 'MessageQueue', VOID, VOID, [KtMutableList]);
  initMetadataForClass(ScheduledMessageQueue, 'ScheduledMessageQueue', VOID, MessageQueue);
  initMetadataForClass(WindowMessageQueue, 'WindowMessageQueue', VOID, MessageQueue);
  initMetadataForClass(UnconfinedEventLoop, 'UnconfinedEventLoop', UnconfinedEventLoop, EventLoop);
  initMetadataForObject(SetTimeoutDispatcher, 'SetTimeoutDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(ClearTimeout, 'ClearTimeout', VOID, VOID, [CancelHandler, DisposableHandle]);
  initMetadataForClass(WindowClearTimeout, 'WindowClearTimeout', VOID, ClearTimeout);
  initMetadataForClass(WindowDispatcher, 'WindowDispatcher', VOID, CoroutineDispatcher, [Delay], [1]);
  initMetadataForClass(UndispatchedCoroutine, 'UndispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  initMetadataForObject(Dispatchers, 'Dispatchers');
  initMetadataForClass(JsMainDispatcher, 'JsMainDispatcher', VOID, MainCoroutineDispatcher);
  initMetadataForClass(JobCancellationException, 'JobCancellationException', VOID, CancellationException);
  initMetadataForClass(ChildCancelledException, 'ChildCancelledException', VOID, CancellationException);
  initMetadataForClass(SafeCollector, 'SafeCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForClass(WorkaroundAtomicReference, 'WorkaroundAtomicReference');
  initMetadataForClass(DiagnosticCoroutineContextException, 'DiagnosticCoroutineContextException', VOID, RuntimeException);
  initMetadataForClass(ListClosed, 'ListClosed', VOID, LockFreeLinkedListNode);
  initMetadataForClass(CommonThreadLocal, 'CommonThreadLocal', CommonThreadLocal);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.ov(parentContext.z8(Key_instance_3));
    }
    this.rv_1 = parentContext.jf(this);
  }
  protoOf(AbstractCoroutine).s8 = function () {
    return this.rv_1;
  };
  protoOf(AbstractCoroutine).sv = function () {
    return this.rv_1;
  };
  protoOf(AbstractCoroutine).tv = function () {
    return protoOf(JobSupport).tv.call(this);
  };
  protoOf(AbstractCoroutine).uv = function (value) {
  };
  protoOf(AbstractCoroutine).vv = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).wv = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).xv = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.vv(state.yv_1, state.aw());
    } else {
      this.uv(state);
    }
  };
  protoOf(AbstractCoroutine).x8 = function (result) {
    var state = this.bw(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_instance;
    this.cw(state);
  };
  protoOf(AbstractCoroutine).cw = function (state) {
    return this.dw(state);
  };
  protoOf(AbstractCoroutine).ew = function (exception) {
    handleCoroutineException(this.rv_1, exception);
  };
  protoOf(AbstractCoroutine).fw = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.rv_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).fw.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).fw.call(this);
  };
  protoOf(AbstractCoroutine).gw = function (start, receiver, block) {
    start.jw(block, receiver, this);
  };
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.rx() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.gw(start, coroutine, block);
    return coroutine;
  }
  function async(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.rx() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.gw(start, coroutine, block);
    return coroutine;
  }
  function withContext(context, block, $completion) {
    var tmp$ret$0;
    $l$block_0: {
      var oldContext = $completion.s8();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, $completion);
        tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.z8(Key_instance), oldContext.z8(Key_instance))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, $completion);
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        coroutine_0.rv_1;
        tmp$ret$0 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, $completion);
      startCoroutineCancellable(block, coroutine_1, coroutine_1);
      tmp$ret$0 = coroutine_1.xx();
    }
    return tmp$ret$0;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).ox = function (exception) {
    handleCoroutineException(this.rv_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.ey_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).rw = function () {
    startCoroutineCancellable_0(this.ey_1, this);
  };
  function $awaitCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ny_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.ny_1.qx(this);
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
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(DeferredCoroutine).ry = function ($completion) {
    var tmp = new $awaitCOROUTINE$(this, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.vy_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyDeferredCoroutine).rw = function () {
    startCoroutineCancellable_0(this.vy_1, this);
  };
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.wx_1;
    while (true) {
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.wx_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.wx_1;
    while (true) {
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.wx_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this.wx_1 = atomic$int$1(0);
  }
  protoOf(DispatchedCoroutine).dw = function (state) {
    this.cw(state);
  };
  protoOf(DispatchedCoroutine).cw = function (state) {
    if (tryResume(this))
      return Unit_instance;
    resumeCancellableWith(intercepted(this.zy_1), recoverResult(state, this.zy_1));
  };
  protoOf(DispatchedCoroutine).xx = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.nw());
    if (state instanceof CompletedExceptionally)
      throw state.yv_1;
    return state;
  };
  function CancellableContinuation() {
  }
  function invokeOnCancellation(_this__u8e3s4, handler) {
    var tmp;
    if (_this__u8e3s4 instanceof CancellableContinuationImpl) {
      _this__u8e3s4.oz(handler);
      tmp = Unit_instance;
    } else {
      throw UnsupportedOperationException_init_$Create$('third-party implementation of CancellableContinuation is not supported');
    }
    return tmp;
  }
  function disposeOnCancellation(_this__u8e3s4, handle) {
    return invokeOnCancellation(_this__u8e3s4, new DisposeOnCancel(handle));
  }
  function DisposeOnCancel(handle) {
    this.pz_1 = handle;
  }
  protoOf(DisposeOnCancel).qz = function (cause) {
    return this.pz_1.rz();
  };
  protoOf(DisposeOnCancel).toString = function () {
    return 'DisposeOnCancel[' + toString(this.pz_1) + ']';
  };
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, 1);
    }
    var tmp4_safe_receiver = delegate.yz();
    var tmp;
    if (tmp4_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (tmp4_safe_receiver.zz()) {
        tmp_0 = tmp4_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp0_elvis_lhs = tmp;
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, 2);
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    return tmp_1;
  }
  function get_RESUME_TOKEN() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get_parentHandle__f8dcex($this) {
    return $this.nz_1.kotlinx$atomicfu$value;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp5_subject = $this.nw();
    var tmp;
    if (!(tmp5_subject == null) ? isInterface(tmp5_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp5_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.b10_1)) {
      var tmp_0 = $this.jz_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).a10();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.jz_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.c10(cause);
  }
  function callSegmentOnCancellation($this, segment, cause) {
    // Inline function 'kotlinx.coroutines.index' call
    var index = $this.lz_1.kotlinx$atomicfu$value & 536870911;
    // Inline function 'kotlin.check' call
    if (!!(index === 536870911)) {
      var message = 'The index for Segment.onCancellation(..) is broken';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      segment.h10(index, cause, $this.s8());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.s8(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this.toString(), ex));
      } else {
        throw $p;
      }
    }
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.lz_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$4 = (1 << 29) + (cur & 536870911) | 0;
          if ($this.lz_1.atomicfu$compareAndSet(cur, tmp$ret$4))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.lz_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$4 = (2 << 29) + (cur & 536870911) | 0;
          if ($this.lz_1.atomicfu$compareAndSet(cur, tmp$ret$4))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.s8().z8(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var handle = invokeOnCompletion(parent, VOID, new ChildContinuation($this));
    $this.nz_1.atomicfu$compareAndSet(null, handle);
    return handle;
  }
  function invokeOnCancellationImpl($this, handler) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.mz_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state instanceof Active) {
        if ($this.mz_1.atomicfu$compareAndSet(state, handler))
          return Unit_instance;
      } else {
        var tmp;
        if (!(state == null) ? isInterface(state, CancelHandler) : false) {
          tmp = true;
        } else {
          tmp = state instanceof Segment;
        }
        if (tmp) {
          multipleHandlersError($this, handler, state);
        } else {
          if (state instanceof CompletedExceptionally) {
            if (!state.q10()) {
              multipleHandlersError($this, handler, state);
            }
            if (state instanceof CancelledContinuation) {
              var tmp13_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              var cause = tmp13_safe_receiver == null ? null : tmp13_safe_receiver.yv_1;
              if (isInterface(handler, CancelHandler)) {
                $this.n10(handler, cause);
              } else {
                var segment = handler instanceof Segment ? handler : THROW_CCE();
                callSegmentOnCancellation($this, segment, cause);
              }
            }
            return Unit_instance;
          } else {
            if (state instanceof CompletedContinuation) {
              if (!(state.j10_1 == null)) {
                multipleHandlersError($this, handler, state);
              }
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              if (state.o10()) {
                $this.n10(handler, state.m10_1);
                return Unit_instance;
              }
              var update = state.p10(VOID, handler);
              if ($this.mz_1.atomicfu$compareAndSet(state, update))
                return Unit_instance;
            } else {
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              var update_0 = new CompletedContinuation(state, handler);
              if ($this.mz_1.atomicfu$compareAndSet(state, update_0))
                return Unit_instance;
            }
          }
        }
      }
    }
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var message = "It's prohibited to register multiple handlers, tried to register " + toString(handler) + ', already has ' + toString_0(state);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function dispatchResume($this, mode) {
    if (tryResume_0($this))
      return Unit_instance;
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) && idempotent == null) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          tmp_1 = isInterface(state, CancelHandler);
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, isInterface(state, CancelHandler) ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.mz_1;
    while (true) {
      var tmp0 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false) {
          var update = resumedState($this, tmp0, proposedUpdate, $this.b10_1, onCancellation, idempotent);
          if (!$this.mz_1.atomicfu$compareAndSet(tmp0, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp0 instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) && tmp0.l10_1 === idempotent) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var message = 'Already resumed, but proposed with update ' + toString_0(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.r10();
    }
  }
  function CancellableContinuationImpl$resume$lambda($onCancellation) {
    return function (cause, _unused_var__etf5q3, _unused_var__etf5q3_0) {
      $onCancellation(cause);
      return Unit_instance;
    };
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.jz_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.kz_1 = this.jz_1.s8();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    var tmp$ret$1 = (0 << 29) + 536870911 | 0;
    tmp.lz_1 = atomic$int$1(tmp$ret$1);
    this.mz_1 = atomic$ref$1(Active_instance);
    this.nz_1 = atomic$ref$1(null);
  }
  protoOf(CancellableContinuationImpl).s10 = function () {
    return this.jz_1;
  };
  protoOf(CancellableContinuationImpl).s8 = function () {
    return this.kz_1;
  };
  protoOf(CancellableContinuationImpl).nw = function () {
    return this.mz_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).ow = function () {
    var tmp = this.nw();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).t10 = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.ow()) {
      handle.rz();
      this.nz_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
    }
  };
  protoOf(CancellableContinuationImpl).zz = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this.mz_1.kotlinx$atomicfu$value;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.l10_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.r10();
      return false;
    }
    var tmp_0 = this.lz_1;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    tmp_0.kotlinx$atomicfu$value = (0 << 29) + 536870911 | 0;
    this.mz_1.kotlinx$atomicfu$value = Active_instance;
    return true;
  };
  protoOf(CancellableContinuationImpl).u10 = function () {
    return this.nw();
  };
  protoOf(CancellableContinuationImpl).v10 = function (takenState, cause) {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.mz_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state == null) ? isInterface(state, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        var message = 'Not completed';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        if (state instanceof CompletedExceptionally)
          return Unit_instance;
        else {
          if (state instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            if (!!state.o10()) {
              var message_0 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
            var update = state.p10(VOID, VOID, VOID, VOID, cause);
            if (this.mz_1.atomicfu$compareAndSet(state, update)) {
              state.w10(this, cause);
              return Unit_instance;
            }
          } else {
            if (this.mz_1.atomicfu$compareAndSet(state, new CompletedContinuation(state, VOID, VOID, VOID, cause))) {
              return Unit_instance;
            }
          }
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(CancellableContinuationImpl).cz = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.mz_1;
    while (true) {
      var tmp0 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false))
          return false;
        var tmp;
        if (isInterface(tmp0, CancelHandler)) {
          tmp = true;
        } else {
          tmp = tmp0 instanceof Segment;
        }
        var update = new CancelledContinuation(this, cause, tmp);
        if (!this.mz_1.atomicfu$compareAndSet(tmp0, update)) {
          break $l$block;
        }
        if (isInterface(tmp0, CancelHandler)) {
          this.n10(tmp0, cause);
        } else {
          if (tmp0 instanceof Segment) {
            callSegmentOnCancellation(this, tmp0, cause);
          }
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.b10_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).x10 = function (cause) {
    if (cancelLater(this, cause))
      return Unit_instance;
    this.cz(cause);
    detachChildIfNonResuable(this);
  };
  protoOf(CancellableContinuationImpl).n10 = function (handler, cause) {
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      handler.qz(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.s8(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).y10 = function (onCancellation, cause, value) {
    try {
      onCancellation(cause, value, this.s8());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.s8(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).z10 = function (parent) {
    return parent.sw();
  };
  protoOf(CancellableContinuationImpl).xx = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (_get_parentHandle__f8dcex(this) == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        this.a11();
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      this.a11();
    }
    var state = this.nw();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.yv_1, this);
    if (get_isCancellableMode(this.b10_1)) {
      var job = this.s8().z8(Key_instance_3);
      if (!(job == null) && !job.tv()) {
        var cause = job.sw();
        this.v10(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.b11(state);
  };
  protoOf(CancellableContinuationImpl).a11 = function () {
    var tmp = this.jz_1;
    var tmp10_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp0_elvis_lhs = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.c11(this);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    this.r10();
    this.cz(cancellationCause);
  };
  protoOf(CancellableContinuationImpl).x8 = function (result) {
    return this.d11(toState(result, this), this.b10_1);
  };
  protoOf(CancellableContinuationImpl).gz = function (value, onCancellation) {
    var tmp = this.b10_1;
    var tmp_0;
    if (onCancellation == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = CancellableContinuationImpl$resume$lambda(onCancellation);
    }
    return this.e11(value, tmp, tmp_0);
  };
  protoOf(CancellableContinuationImpl).hz = function (value, onCancellation) {
    return this.e11(value, this.b10_1, onCancellation);
  };
  protoOf(CancellableContinuationImpl).f11 = function (segment, index) {
    var tmp0 = this.lz_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.index' call
        // Inline function 'kotlin.check' call
        if (!((cur & 536870911) === 536870911)) {
          var message = 'invokeOnCancellation should be called at most once';
          throw IllegalStateException_init_$Create$(toString(message));
        }
        // Inline function 'kotlinx.coroutines.decision' call
        // Inline function 'kotlinx.coroutines.decisionAndIndex' call
        var upd = (cur >> 29 << 29) + index | 0;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    invokeOnCancellationImpl(this, segment);
  };
  protoOf(CancellableContinuationImpl).ez = function (handler) {
    return invokeOnCancellation(this, new UserSupplied(handler));
  };
  protoOf(CancellableContinuationImpl).oz = function (handler) {
    return invokeOnCancellationImpl(this, handler);
  };
  protoOf(CancellableContinuationImpl).e11 = function (proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.mz_1;
    while (true) {
      var tmp0 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false) {
          var update = resumedState(this, tmp0, proposedUpdate, resumeMode, onCancellation, null);
          if (!this.mz_1.atomicfu$compareAndSet(tmp0, update)) {
            break $l$block;
          }
          detachChildIfNonResuable(this);
          dispatchResume(this, resumeMode);
          return Unit_instance;
        } else {
          if (tmp0 instanceof CancelledContinuation) {
            if (tmp0.j11()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                this.y10(onCancellation, tmp0.yv_1, proposedUpdate);
              }
              return Unit_instance;
            }
          }
        }
        alreadyResumedError(this, proposedUpdate);
      }
    }
  };
  protoOf(CancellableContinuationImpl).d11 = function (proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    if ($super === VOID) {
      this.e11(proposedUpdate, resumeMode, onCancellation);
      tmp = Unit_instance;
    } else {
      tmp = $super.e11.call(this, proposedUpdate, resumeMode, onCancellation);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).r10 = function () {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.rz();
    this.nz_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
  };
  protoOf(CancellableContinuationImpl).az = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  protoOf(CancellableContinuationImpl).bz = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.b10_1);
  };
  protoOf(CancellableContinuationImpl).fz = function (_this__u8e3s4, value) {
    var tmp = this.jz_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if ((dc == null ? null : dc.tz_1) === _this__u8e3s4) {
      tmp_0 = 4;
    } else {
      tmp_0 = this.b10_1;
    }
    this.d11(value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).b11 = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = state.i10_1;
    } else {
      tmp = state;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).k11 = function (state) {
    var tmp20_safe_receiver = protoOf(DispatchedTask).k11.call(this, state);
    var tmp;
    if (tmp20_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = recoverStackTrace(tmp20_safe_receiver, this.jz_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.l11() + '(' + toDebugString(this.jz_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).l11 = function () {
    return 'CancellableContinuation';
  };
  function Active() {
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    return Active_instance;
  }
  function NotCompleted() {
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.i10_1 = result;
    this.j10_1 = cancelHandler;
    this.k10_1 = onCancellation;
    this.l10_1 = idempotentResume;
    this.m10_1 = cancelCause;
  }
  protoOf(CompletedContinuation).o10 = function () {
    return !(this.m10_1 == null);
  };
  protoOf(CompletedContinuation).w10 = function (cont, cause) {
    var tmp21_safe_receiver = this.j10_1;
    if (tmp21_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      cont.n10(tmp21_safe_receiver, cause);
    }
    var tmp22_safe_receiver = this.k10_1;
    if (tmp22_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      cont.y10(tmp22_safe_receiver, cause, this.i10_1);
    }
  };
  protoOf(CompletedContinuation).o11 = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).p10 = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.i10_1 : result;
    cancelHandler = cancelHandler === VOID ? this.j10_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.k10_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.l10_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.m10_1 : cancelCause;
    return $super === VOID ? this.o11(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.o11.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.i10_1) + ', cancelHandler=' + toString_0(this.j10_1) + ', onCancellation=' + toString_0(this.k10_1) + ', idempotentResume=' + toString_0(this.l10_1) + ', cancelCause=' + toString_0(this.m10_1) + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.i10_1 == null ? 0 : hashCode(this.i10_1);
    result = imul(result, 31) + (this.j10_1 == null ? 0 : hashCode(this.j10_1)) | 0;
    result = imul(result, 31) + (this.k10_1 == null ? 0 : hashCode(this.k10_1)) | 0;
    result = imul(result, 31) + (this.l10_1 == null ? 0 : hashCode(this.l10_1)) | 0;
    result = imul(result, 31) + (this.m10_1 == null ? 0 : hashCode(this.m10_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.i10_1, tmp0_other_with_cast.i10_1))
      return false;
    if (!equals(this.j10_1, tmp0_other_with_cast.j10_1))
      return false;
    if (!equals(this.k10_1, tmp0_other_with_cast.k10_1))
      return false;
    if (!equals(this.l10_1, tmp0_other_with_cast.l10_1))
      return false;
    if (!equals(this.m10_1, tmp0_other_with_cast.m10_1))
      return false;
    return true;
  };
  function UserSupplied(handler) {
    this.p11_1 = handler;
  }
  protoOf(UserSupplied).qz = function (cause) {
    this.p11_1(cause);
  };
  protoOf(UserSupplied).toString = function () {
    return 'CancelHandler.UserSupplied[' + get_classSimpleName(this.p11_1) + '@' + get_hexAddress(this) + ']';
  };
  function CancelHandler() {
  }
  function ChildContinuation(child) {
    JobNode.call(this);
    this.u11_1 = child;
  }
  protoOf(ChildContinuation).v11 = function () {
    return true;
  };
  protoOf(ChildContinuation).qz = function (cause) {
    this.u11_1.x10(this.u11_1.z10(this.a12()));
  };
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function _init_properties_CancellableContinuationImpl_kt__6rrtdd() {
    if (!properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred(parent) {
    parent = parent === VOID ? null : parent;
    return new CompletableDeferredImpl(parent);
  }
  function $awaitCOROUTINE$_0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q12_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$_0).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.q12_1.qx(this);
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
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.ov(parent);
  }
  protoOf(CompletableDeferredImpl).ax = function () {
    return true;
  };
  protoOf(CompletableDeferredImpl).ry = function ($completion) {
    var tmp = new $awaitCOROUTINE$_0(this, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(CompletableDeferredImpl).t12 = function (value) {
    return this.u12(value);
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(state.yv_1, uCont);
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      tmp = _Result___init__impl__xyqfz8(state);
    }
    return tmp;
  }
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.yv_1 = cause;
    this.zv_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).aw = function () {
    return this.zv_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).q10 = function () {
    return this.zv_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.yv_1.toString() + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + toString(continuation) + ' was cancelled normally') : cause, handled);
    this.i11_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).j11 = function () {
    return this.i11_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    // Inline function 'kotlin.getOrElse' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      tmp = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
    } else {
      tmp = new CompletedExceptionally(recoverStackTrace(exception, caller));
    }
    return tmp;
  }
  function toState_0(_this__u8e3s4) {
    // Inline function 'kotlin.getOrElse' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      tmp = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
    } else {
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance_0 = this;
    var tmp = Key_instance;
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance_0;
  function Key_getInstance() {
    if (Key_instance_0 == null)
      new Key();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance();
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(CoroutineDispatcher).w12 = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).y12 = function (context, block) {
    return this.x12(context, block);
  };
  protoOf(CoroutineDispatcher).a9 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).b9 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.z12();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function Key_0() {
  }
  var Key_instance_1;
  function Key_getInstance_0() {
    return Key_instance_1;
  }
  function handleCoroutineException(context, exception) {
    try {
      var tmp23_safe_receiver = context.z8(Key_instance_1);
      if (tmp23_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        tmp23_safe_receiver.a13(context, exception);
        return Unit_instance;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleUncaughtCoroutineException(context, handlerException(exception, t));
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    handleUncaughtCoroutineException(context, exception);
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    // Inline function 'kotlin.apply' call
    var this_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    addSuppressed(this_0, originalException);
    return this_0;
  }
  function Key_1() {
  }
  var Key_instance_2;
  function Key_getInstance_1() {
    return Key_instance_2;
  }
  function CoroutineScope() {
  }
  function coroutineScope(block, $completion) {
    var coroutine = new ScopeCoroutine($completion.s8(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function cancel(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_elvis_lhs = _this__u8e3s4.sv().z8(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'Scope cannot be cancelled because it does not have a job: ' + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.bx(cause);
  }
  function get_isActive(_this__u8e3s4) {
    var tmp24_safe_receiver = _this__u8e3s4.sv().z8(Key_instance_3);
    var tmp0_elvis_lhs = tmp24_safe_receiver == null ? null : tmp24_safe_receiver.tv();
    return tmp0_elvis_lhs == null ? true : tmp0_elvis_lhs;
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.z8(Key_instance_3) == null) ? context : context.jf(Job_0()));
  }
  function MainScope() {
    return new ContextScope(SupervisorJob().jf(Dispatchers_getInstance().f13()));
  }
  function GlobalScope() {
  }
  protoOf(GlobalScope).sv = function () {
    return EmptyCoroutineContext_getInstance();
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    return GlobalScope_instance;
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_instance;
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).jw = function (block, receiver, completion) {
    var tmp;
    switch (this.i2_1) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 1:
        tmp = Unit_instance;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).rx = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_ATOMIC_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_ATOMIC_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function delay(timeMillis, $completion) {
    if (compare(timeMillis, new Long(0, 0)) <= 0)
      return Unit_instance;
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.t10();
    if (compare(timeMillis, new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.s8()).g13(timeMillis, cancellable);
    }
    return cancellable.xx();
  }
  function Delay() {
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.z8(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function DelayWithTimeoutDiagnostics() {
  }
  function toDelayMillis(_this__u8e3s4) {
    var tmp;
    switch (Duration__isPositive_impl_tvkkt2(_this__u8e3s4)) {
      case true:
        Companion_getInstance();
        // Inline function 'kotlin.time.Companion.nanoseconds' call

        var this_0 = new Long(999999, 0);
        var tmp$ret$0 = toDuration(this_0, DurationUnit_NANOSECONDS_getInstance());
        tmp = _Duration___get_inWholeMilliseconds__impl__msfiry(Duration__plus_impl_yu9v8f(_this__u8e3s4, tmp$ret$0));
        break;
      case false:
        tmp = new Long(0, 0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.k13_1 = new Long(0, 0);
    this.l13_1 = false;
    this.m13_1 = null;
  }
  protoOf(EventLoop).n13 = function () {
    var tmp0_elvis_lhs = this.m13_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.qd();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.m11();
    return true;
  };
  protoOf(EventLoop).o13 = function (task) {
    var tmp0_elvis_lhs = this.m13_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayDeque_init_$Create$();
      this.m13_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.od(task);
  };
  protoOf(EventLoop).p13 = function () {
    return compare(this.k13_1, delta(this, true)) >= 0;
  };
  protoOf(EventLoop).q13 = function () {
    var tmp27_safe_receiver = this.m13_1;
    var tmp0_elvis_lhs = tmp27_safe_receiver == null ? null : tmp27_safe_receiver.n();
    return tmp0_elvis_lhs == null ? true : tmp0_elvis_lhs;
  };
  protoOf(EventLoop).r13 = function (unconfined) {
    this.k13_1 = add(this.k13_1, delta(this, unconfined));
    if (!unconfined)
      this.l13_1 = true;
  };
  protoOf(EventLoop).s13 = function (unconfined) {
    this.k13_1 = subtract(this.k13_1, delta(this, unconfined));
    if (compare(this.k13_1, new Long(0, 0)) > 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.l13_1) {
      this.t13();
    }
  };
  protoOf(EventLoop).t13 = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.u13_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
  }
  protoOf(ThreadLocalEventLoop).v13 = function () {
    var tmp0_elvis_lhs = this.u13_1.x13();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      ThreadLocalEventLoop_getInstance().u13_1.y13(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_2() {
  }
  var Key_instance_3;
  function Key_getInstance_2() {
    return Key_instance_3;
  }
  function Job() {
  }
  function DisposableHandle() {
  }
  function cancelAndJoin(_this__u8e3s4, $completion) {
    _this__u8e3s4.cx();
    return _this__u8e3s4.yw($completion);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.z8(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = "Current context doesn't contain Job in it: " + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancel_0(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.bx(CancellationException_0(message, cause));
  }
  function get_isActive_0(_this__u8e3s4) {
    var tmp39_safe_receiver = _this__u8e3s4.z8(Key_instance_3);
    var tmp0_elvis_lhs = tmp39_safe_receiver == null ? null : tmp39_safe_receiver.tv();
    return tmp0_elvis_lhs == null ? true : tmp0_elvis_lhs;
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function cancel_1(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp40_safe_receiver = _this__u8e3s4.z8(Key_instance_3);
    if (tmp40_safe_receiver == null)
      null;
    else {
      tmp40_safe_receiver.bx(cause);
    }
  }
  function ensureActive(_this__u8e3s4) {
    var tmp41_safe_receiver = _this__u8e3s4.z8(Key_instance_3);
    if (tmp41_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp41_safe_receiver);
    }
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).mw = function () {
    return null;
  };
  protoOf(NonDisposableHandle).rz = function () {
  };
  protoOf(NonDisposableHandle).fx = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    return NonDisposableHandle_instance;
  }
  function invokeOnCompletion(_this__u8e3s4, invokeImmediately, handler) {
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    var tmp;
    if (_this__u8e3s4 instanceof JobSupport) {
      tmp = _this__u8e3s4.xw(invokeImmediately, handler);
    } else {
      var tmp_0 = handler.v11();
      tmp = _this__u8e3s4.ww(tmp_0, invokeImmediately, JobNode$invoke$ref(handler));
    }
    return tmp;
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.tv())
      throw _this__u8e3s4.sw();
  }
  function ParentJob() {
  }
  function disposeOnCompletion(_this__u8e3s4, handle) {
    return invokeOnCompletion(_this__u8e3s4, VOID, new DisposeOnCompletion(handle));
  }
  function DisposeOnCompletion(handle) {
    JobNode.call(this);
    this.d14_1 = handle;
  }
  protoOf(DisposeOnCompletion).v11 = function () {
    return false;
  };
  protoOf(DisposeOnCompletion).qz = function (cause) {
    return this.d14_1.rz();
  };
  function JobNode$invoke$ref(p0) {
    var l = function (_this__u8e3s4) {
      p0.qz(_this__u8e3s4);
      return Unit_instance;
    };
    l.callableName = 'invoke';
    return l;
  }
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp74_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp0_elvis_lhs = tmp74_safe_receiver == null ? null : tmp74_safe_receiver.e14_1;
    return tmp0_elvis_lhs == null ? _this__u8e3s4 : tmp0_elvis_lhs;
  }
  function JobNode() {
    LockFreeLinkedListNode.call(this);
  }
  protoOf(JobNode).a12 = function () {
    var tmp = this.z11_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).tv = function () {
    return true;
  };
  protoOf(JobNode).b12 = function () {
    return null;
  };
  protoOf(JobNode).rz = function () {
    return this.a12().zw(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.a12()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.i14_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.i14_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp46_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp46_safe_receiver == null ? null : tmp46_safe_receiver.yv_1;
    var wasCancelling;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    wasCancelling = state.j14();
    var exceptions = state.k14(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) || $this.ox(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).q10();
      }
    }
    if (!wasCancelling) {
      $this.lx(finalException);
    }
    $this.xv(finalState);
    var casSuccess = $this.mv_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.n()) {
      if (state.j14()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.wv() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = exceptions.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (!(element instanceof CancellationException)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var firstNonCancellation = tmp$ret$1;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.m(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = exceptions.i();
        while (_iterator__ex2g4s_0.j()) {
          var element_0 = _iterator__ex2g4s_0.k();
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$3 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$3 = null;
      }
      var detailedTimeoutException = tmp$ret$3;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.l() <= 1)
      return Unit_instance;
    var seenExceptions = identitySet(exceptions.l());
    var unwrappedCause = unwrap(rootCause);
    var _iterator__ex2g4s = exceptions.i();
    while (_iterator__ex2g4s.j()) {
      var exception = _iterator__ex2g4s.k();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) && !(unwrapped === unwrappedCause)) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.h(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        addSuppressed(rootCause, unwrapped);
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.mv_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.lx(null);
    $this.xv(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp47_safe_receiver = $this.lw();
    if (tmp47_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      tmp47_safe_receiver.rz();
      $this.kw(NonDisposableHandle_instance);
    }
    var tmp48_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp48_safe_receiver == null ? null : tmp48_safe_receiver.yv_1;
    if (state instanceof JobNode) {
      try {
        state.qz(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.ew(new CompletionHandlerException('Exception in completion handler ' + state.toString() + ' for ' + $this.toString(), ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp49_safe_receiver = state.b12();
      if (tmp49_safe_receiver == null)
        null;
      else {
        notifyCompletion($this, tmp49_safe_receiver, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.lx(cause);
    list.l14(4);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = list.c12_1;
    while (!equals(cur, list)) {
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        tmp = node.v11();
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.qz(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp50_safe_receiver = exception;
            var tmp_0;
            if (tmp50_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.apply' call
              addSuppressed(tmp50_safe_receiver, ex);
              tmp_0 = tmp50_safe_receiver;
            }
            if (tmp_0 == null) {
              // Inline function 'kotlin.run' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.c12_1;
    }
    var tmp51_safe_receiver = exception;
    if (tmp51_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $this.ew(tmp51_safe_receiver);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.mx())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.lw();
    if (parent === null || parent === NonDisposableHandle_instance) {
      return isCancellation;
    }
    return parent.fx(cause) || isCancellation;
  }
  function notifyCompletion($this, $receiver, cause) {
    $receiver.l14(1);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = $receiver.c12_1;
    while (!equals(cur, $receiver)) {
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        tmp = true;
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.qz(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp50_safe_receiver = exception;
            var tmp_0;
            if (tmp50_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.apply' call
              addSuppressed(tmp50_safe_receiver, ex);
              tmp_0 = tmp50_safe_receiver;
            }
            if (tmp_0 == null) {
              // Inline function 'kotlin.run' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.c12_1;
    }
    var tmp51_safe_receiver = exception;
    if (tmp51_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $this.ew(tmp51_safe_receiver);
    }
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.n14_1)
        return 0;
      if (!$this.mv_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.rw();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.mv_1.atomicfu$compareAndSet(state, state.m14_1))
          return -1;
        $this.rw();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.n14_1 ? list : new InactiveNodeList(list);
    $this.mv_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.h12(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
    var list = state.c12_1;
    $this.mv_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = $this.nw();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false))
        return false;
      if (startInternal($this, state) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.t10();
    disposeOnCancellation(cancellable, invokeOnCompletion($this, VOID, new ResumeOnCompletion(cancellable)));
    return cancellable.xx();
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = $this.nw();
      var tmp;
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state.o14();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, state, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp;
    if (cause == null ? true : cause instanceof Error) {
      var tmp_0;
      if (cause == null) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        tmp_0 = new JobCancellationException(null == null ? $this.wv() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).ix();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = $this.nw();
      $l$block: {
        if (tmp0 instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
          if (tmp0.p14())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0.j14();
          if (!(cause == null) || !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_0 = createCauseException($this, cause);
              causeExceptionCache = this_0;
              tmp = this_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp0.q14(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var this_1 = tmp0.r14();
          var tmp_0;
          if (!wasCancelling) {
            tmp_0 = this_1;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            notifyCancelling($this, tmp0.f14_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp0 == null) ? isInterface(tmp0, Incomplete) : false) {
            var tmp0_elvis_lhs_0 = causeExceptionCache;
            var tmp_1;
            if (tmp0_elvis_lhs_0 == null) {
              // Inline function 'kotlin.also' call
              var this_2 = createCauseException($this, cause);
              causeExceptionCache = this_2;
              tmp_1 = this_2;
            } else {
              tmp_1 = tmp0_elvis_lhs_0;
            }
            var causeException_0 = tmp_1;
            if (tmp0.tv()) {
              if (tryMakeCancelling($this, tmp0, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp0, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var message = 'Cannot happen in ' + toString(tmp0);
                throw IllegalStateException_init_$Create$(toString(message));
              } else if (finalState === get_COMPLETING_RETRY()) {
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp0_elvis_lhs = state.b12();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (state instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (state instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.error' call
          var message = 'State should have list: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.mv_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (finishing.o14())
      return get_COMPLETING_ALREADY();
    finishing.s14(true);
    if (!(finishing === state)) {
      if (!$this.mv_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.j14();
    var tmp65_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp65_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      finishing.q14(tmp65_safe_receiver.yv_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = finishing.r14();
    var tmp_0;
    if (!wasCancelling) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    notifyRootCause = tmp_0;
    if (notifyRootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      notifyCancelling($this, list, notifyRootCause);
    }
    var child = nextChild($this, list);
    if (!(child == null) && tryWaitForChild($this, finishing, child, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    list.l14(2);
    var anotherChild = nextChild($this, list);
    if (!(anotherChild == null) && tryWaitForChild($this, finishing, anotherChild, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js($this, $receiver) {
    var tmp67_safe_receiver = $receiver instanceof CompletedExceptionally ? $receiver : null;
    return tmp67_safe_receiver == null ? null : tmp67_safe_receiver.yv_1;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var handle = invokeOnCompletion(child_0.x14_1, false, new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0));
        if (!(handle === NonDisposableHandle_instance))
          return true;
        var tmp0_elvis_lhs = nextChild($this_0, child_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = nextChild_0;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild($this, lastChild);
    if (!(waitChild == null) && tryWaitForChild($this, state, waitChild, proposedUpdate))
      return Unit_instance;
    state.f14_1.l14(2);
    var waitChildAgain = nextChild($this, lastChild);
    if (!(waitChildAgain == null) && tryWaitForChild($this, state, waitChildAgain, proposedUpdate)) {
      return Unit_instance;
    }
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.dw(finalState);
  }
  function nextChild($this, $receiver) {
    var cur = $receiver;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (!cur.e12_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.prevNode' call
      cur = cur.d12_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
      cur = cur.c12_1;
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (cur.e12_1)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.j14() ? 'Cancelling' : state.o14() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.tv() ? 'Active' : 'New';
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    SynchronizedObject.call(this);
    this.f14_1 = list;
    this.g14_1 = atomic$boolean$1(isCompleting);
    this.h14_1 = atomic$ref$1(rootCause);
    this.i14_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).b12 = function () {
    return this.f14_1;
  };
  protoOf(Finishing).s14 = function (value) {
    this.g14_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).o14 = function () {
    return this.g14_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).y14 = function (value) {
    this.h14_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).r14 = function () {
    return this.h14_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).p14 = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).j14 = function () {
    return !(this.r14() == null);
  };
  protoOf(Finishing).tv = function () {
    return this.r14() == null;
  };
  protoOf(Finishing).k14 = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var this_0 = allocateList(this);
        this_0.h(eh);
        tmp = this_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          // Inline function 'kotlin.error' call
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    var list = tmp;
    var rootCause = this.r14();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      list.u1(0, rootCause);
    }
    if (!(proposedException == null) && !equals(proposedException, rootCause)) {
      list.h(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).q14 = function (exception) {
    var rootCause = this.r14();
    if (rootCause == null) {
      this.y14(exception);
      return Unit_instance;
    }
    if (exception === rootCause)
      return Unit_instance;
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_instance;
        // Inline function 'kotlin.apply' call
        var this_0 = allocateList(this);
        this_0.h(eh);
        this_0.h(exception);
        _set_exceptionsHolder__tqm22h(this, this_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).h(exception);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'State is ' + toString_0(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.j14() + ', completing=' + this.o14() + ', rootCause=' + toString_0(this.r14()) + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.f14_1.toString() + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.d15_1 = parent;
    this.e15_1 = state;
    this.f15_1 = child;
    this.g15_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).v11 = function () {
    return false;
  };
  protoOf(ChildCompletion).qz = function (cause) {
    continueCompleting(this.d15_1, this.e15_1, this.f15_1, this.g15_1);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, 1);
    this.n15_1 = job;
  }
  protoOf(AwaitContinuation).z10 = function (parent) {
    var state = this.n15_1.nw();
    if (state instanceof Finishing) {
      var tmp73_safe_receiver = state.r14();
      if (tmp73_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        return tmp73_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.yv_1;
    return parent.sw();
  };
  protoOf(AwaitContinuation).l11 = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $completion) {
    var cont = new AwaitContinuation(intercepted($completion), $this);
    cont.t10();
    disposeOnCancellation(cont, invokeOnCompletion($this, VOID, new ResumeAwaitOnCompletion(cont)));
    return cont.xx();
  }
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.w15_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JobSupport$_get_children_$slambda_k839f8).b16 = function ($this$sequence, $completion) {
    var tmp = this.c16($this$sequence, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).e9 = function (p1, $completion) {
    return this.b16(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 8;
            var state = this.w15_1.nw();
            if (state instanceof ChildHandleNode) {
              this.m8_1 = 6;
              suspendResult = this.x15_1.je(state.x14_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (!(state == null) ? isInterface(state, Incomplete) : false) {
                var tmp68_safe_receiver = state.b12();
                if (tmp68_safe_receiver == null) {
                  this.y15_1 = null;
                  this.m8_1 = 5;
                  continue $sm;
                } else {
                  this.a16_1 = tmp68_safe_receiver;
                  this.z15_1 = this.a16_1.c12_1;
                  this.m8_1 = 1;
                  continue $sm;
                }
              } else {
                this.m8_1 = 7;
                continue $sm;
              }
            }

          case 1:
            if (!!equals(this.z15_1, this.a16_1)) {
              this.m8_1 = 4;
              continue $sm;
            }

            var it = this.z15_1;
            if (it instanceof ChildHandleNode) {
              this.m8_1 = 2;
              suspendResult = this.x15_1.je(it.x14_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 3;
              continue $sm;
            }

          case 2:
            this.m8_1 = 3;
            continue $sm;
          case 3:
            this.z15_1 = this.z15_1.c12_1;
            this.m8_1 = 1;
            continue $sm;
          case 4:
            var tmp_0 = this;
            tmp_0.y15_1 = Unit_instance;
            this.m8_1 = 5;
            continue $sm;
          case 5:
            this.m8_1 = 7;
            continue $sm;
          case 6:
            this.m8_1 = 7;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 8) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).c16 = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.w15_1, completion);
    i.x15_1 = $this$sequence;
    return i;
  };
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.b16($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport(active) {
    this.mv_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.nv_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).w1 = function () {
    return Key_instance_3;
  };
  protoOf(JobSupport).kw = function (value) {
    this.nv_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).lw = function () {
    return this.nv_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).mw = function () {
    var tmp45_safe_receiver = this.lw();
    return tmp45_safe_receiver == null ? null : tmp45_safe_receiver.mw();
  };
  protoOf(JobSupport).ov = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.kw(NonDisposableHandle_instance);
      return Unit_instance;
    }
    parent.qw();
    var handle = parent.kx(this);
    this.kw(handle);
    if (this.ow()) {
      handle.rz();
      this.kw(NonDisposableHandle_instance);
    }
  };
  protoOf(JobSupport).nw = function () {
    return this.mv_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).tv = function () {
    var state = this.nw();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.tv();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).ow = function () {
    var tmp = this.nw();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).pw = function () {
    var state = this.nw();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.j14();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobSupport).qw = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = this.nw();
      var tmp52_subject = startInternal(this, state);
      if (tmp52_subject === 0)
        return false;
      else if (tmp52_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).rw = function () {
  };
  protoOf(JobSupport).sw = function () {
    var state = this.nw();
    var tmp;
    if (state instanceof Finishing) {
      var tmp54_safe_receiver = state.r14();
      var tmp0_elvis_lhs = tmp54_safe_receiver == null ? null : this.tw(tmp54_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.error' call
        var message = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        // Inline function 'kotlin.error' call
        var message_0 = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.uw(state.yv_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).tw = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.wv() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).uw = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.tw(_this__u8e3s4, message) : $super.tw.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).vw = function (handler) {
    return this.xw(true, new InvokeOnCompletion(handler));
  };
  protoOf(JobSupport).ww = function (onCancelling, invokeImmediately, handler) {
    var tmp;
    if (onCancelling) {
      tmp = new InvokeOnCancelling(handler);
    } else {
      tmp = new InvokeOnCompletion(handler);
    }
    return this.xw(invokeImmediately, tmp);
  };
  protoOf(JobSupport).xw = function (invokeImmediately, node) {
    node.z11_1 = this;
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        var state = this.nw();
        if (state instanceof Empty) {
          if (state.n14_1) {
            if (this.mv_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$0 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.b12();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              var tmp;
              if (node.v11()) {
                var tmp55_safe_receiver = state instanceof Finishing ? state : null;
                var rootCause = tmp55_safe_receiver == null ? null : tmp55_safe_receiver.r14();
                var tmp_0;
                if (rootCause == null) {
                  tmp_0 = list.f12(node, 5);
                } else {
                  if (invokeImmediately) {
                    node.qz(rootCause);
                  }
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_0;
              } else {
                tmp = list.f12(node, 1);
              }
              if (tmp) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
            }
          } else {
            tmp$ret$0 = false;
            break $l$block_1;
          }
        }
      }
    }
    var added = tmp$ret$0;
    if (added)
      return node;
    else if (invokeImmediately) {
      var tmp_1 = this.nw();
      var tmp56_safe_receiver = tmp_1 instanceof CompletedExceptionally ? tmp_1 : null;
      node.qz(tmp56_safe_receiver == null ? null : tmp56_safe_receiver.yv_1);
    }
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).yw = function ($completion) {
    if (!joinInternal(this)) {
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp$ret$0 = $completion.s8();
      ensureActive(tmp$ret$0);
      return Unit_instance;
    }
    return joinSuspend(this, $completion);
  };
  protoOf(JobSupport).zw = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = this.nw();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_instance;
        if (this.mv_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_instance;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.b12() == null)) {
            node.g12();
          }
          return Unit_instance;
        } else {
          return Unit_instance;
        }
      }
    }
  };
  protoOf(JobSupport).ax = function () {
    return false;
  };
  protoOf(JobSupport).bx = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.wv() : null, null, this);
    } else {
      tmp = cause;
    }
    this.dx(tmp);
  };
  protoOf(JobSupport).wv = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).dx = function (cause) {
    this.hx(cause);
  };
  protoOf(JobSupport).ex = function (parentJob) {
    this.hx(parentJob);
  };
  protoOf(JobSupport).fx = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.hx(cause) && this.nx();
  };
  protoOf(JobSupport).gx = function (cause) {
    return this.hx(cause);
  };
  protoOf(JobSupport).hx = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.ax()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.dw(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).ix = function () {
    var state = this.nw();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.r14();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.yv_1;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          // Inline function 'kotlin.error' call
          var message = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp0_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp0_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp0_elvis_lhs;
  };
  protoOf(JobSupport).u12 = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = this.nw();
      $l$block: {
        var finalState = tryMakeCompleting(this, tmp0, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else {
          this.dw(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).bw = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = this.nw();
      $l$block: {
        var finalState = tryMakeCompleting(this, tmp0, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this.toString() + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(this, proposedUpdate));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).jx = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  protoOf(JobSupport).kx = function (child) {
    // Inline function 'kotlin.also' call
    var this_0 = new ChildHandleNode(child);
    this_0.z11_1 = this;
    var node = this_0;
    var tmp$ret$2;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        var state = this.nw();
        if (state instanceof Empty) {
          if (state.n14_1) {
            if (this.mv_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$2 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.b12();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              var addedBeforeCancellation = list.f12(node, 7);
              var tmp;
              if (addedBeforeCancellation) {
                tmp = true;
              } else {
                var addedBeforeCompletion = list.f12(node, 3);
                var latestState = this.nw();
                var tmp_0;
                if (latestState instanceof Finishing) {
                  tmp_0 = latestState.r14();
                } else {
                  // Inline function 'kotlinx.coroutines.assert' call
                  var tmp69_safe_receiver = latestState instanceof CompletedExceptionally ? latestState : null;
                  tmp_0 = tmp69_safe_receiver == null ? null : tmp69_safe_receiver.yv_1;
                }
                var rootCause = tmp_0;
                node.qz(rootCause);
                var tmp_1;
                if (addedBeforeCompletion) {
                  // Inline function 'kotlinx.coroutines.assert' call
                  tmp_1 = true;
                } else {
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_1;
              }
              if (tmp) {
                tmp$ret$2 = true;
                break $l$block_1;
              }
            }
          } else {
            tmp$ret$2 = false;
            break $l$block_1;
          }
        }
      }
    }
    var added = tmp$ret$2;
    if (added)
      return node;
    var tmp_2 = this.nw();
    var tmp70_safe_receiver = tmp_2 instanceof CompletedExceptionally ? tmp_2 : null;
    node.qz(tmp70_safe_receiver == null ? null : tmp70_safe_receiver.yv_1);
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).ew = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).lx = function (cause) {
  };
  protoOf(JobSupport).mx = function () {
    return false;
  };
  protoOf(JobSupport).nx = function () {
    return true;
  };
  protoOf(JobSupport).ox = function (exception) {
    return false;
  };
  protoOf(JobSupport).xv = function (state) {
  };
  protoOf(JobSupport).dw = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.px() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).px = function () {
    return this.fw() + '{' + stateString(this, this.nw()) + '}';
  };
  protoOf(JobSupport).fw = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).qx = function ($completion) {
    $l$loop: while (true) {
      var state = this.nw();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          throw state.yv_1;
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $completion);
  };
  function handlesExceptionF($this) {
    var tmp = $this.lw();
    var tmp75_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp0_elvis_lhs = tmp75_safe_receiver == null ? null : tmp75_safe_receiver.a12();
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.nx())
        return true;
      var tmp_1 = parentJob.lw();
      var tmp76_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp1_elvis_lhs = tmp76_safe_receiver == null ? null : tmp76_safe_receiver.a12();
      var tmp_2;
      if (tmp1_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp1_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.ov(parent);
    this.f16_1 = handlesExceptionF(this);
  }
  protoOf(JobImpl).ax = function () {
    return true;
  };
  protoOf(JobImpl).nx = function () {
    return this.f16_1;
  };
  protoOf(JobImpl).g16 = function (exception) {
    return this.u12(new CompletedExceptionally(exception));
  };
  function Empty(isActive) {
    this.n14_1 = isActive;
  }
  protoOf(Empty).tv = function () {
    return this.n14_1;
  };
  protoOf(Empty).b12 = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.n14_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function IncompleteStateBox(state) {
    this.e14_1 = state;
  }
  function NodeList() {
    LockFreeLinkedListHead.call(this);
  }
  protoOf(NodeList).tv = function () {
    return true;
  };
  protoOf(NodeList).b12 = function () {
    return this;
  };
  protoOf(NodeList).k16 = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.r7('List{');
    this_0.r7(state);
    this_0.r7('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = this.c12_1;
    while (!equals(cur, this)) {
      var node = cur;
      if (node instanceof JobNode) {
        if (first) {
          first = false;
        } else
          this_0.r7(', ');
        this_0.q7(node);
      }
      cur = cur.c12_1;
    }
    this_0.r7(']');
    return this_0.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.k16('Active') : protoOf(LockFreeLinkedListHead).toString.call(this);
  };
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function InactiveNodeList(list) {
    this.m14_1 = list;
  }
  protoOf(InactiveNodeList).b12 = function () {
    return this.m14_1;
  };
  protoOf(InactiveNodeList).tv = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.m14_1.k16('New') : anyToString(this);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.p16_1 = handler;
  }
  protoOf(InvokeOnCompletion).v11 = function () {
    return false;
  };
  protoOf(InvokeOnCompletion).qz = function (cause) {
    return this.p16_1(cause);
  };
  function InvokeOnCancelling(handler) {
    JobNode.call(this);
    this.u16_1 = handler;
    this.v16_1 = atomic$boolean$1(false);
  }
  protoOf(InvokeOnCancelling).v11 = function () {
    return true;
  };
  protoOf(InvokeOnCancelling).qz = function (cause) {
    if (this.v16_1.atomicfu$compareAndSet(false, true))
      this.u16_1(cause);
  };
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.a17_1 = continuation;
  }
  protoOf(ResumeOnCompletion).v11 = function () {
    return false;
  };
  protoOf(ResumeOnCompletion).qz = function (cause) {
    // Inline function 'kotlin.coroutines.resume' call
    var this_0 = this.a17_1;
    // Inline function 'kotlin.Companion.success' call
    var tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_instance);
    this_0.x8(tmp$ret$1);
    return Unit_instance;
  };
  function ChildHandleNode(childJob) {
    JobNode.call(this);
    this.x14_1 = childJob;
  }
  protoOf(ChildHandleNode).mw = function () {
    return this.a12();
  };
  protoOf(ChildHandleNode).v11 = function () {
    return true;
  };
  protoOf(ChildHandleNode).qz = function (cause) {
    return this.x14_1.ex(this.a12());
  };
  protoOf(ChildHandleNode).fx = function (cause) {
    return this.a12().fx(cause);
  };
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.f17_1 = continuation;
  }
  protoOf(ResumeAwaitOnCompletion).v11 = function () {
    return false;
  };
  protoOf(ResumeAwaitOnCompletion).qz = function (cause) {
    var state = this.a12().nw();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      var tmp0 = this.f17_1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = state.yv_1;
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.x8(tmp$ret$2);
    } else {
      var tmp0_0 = this.f17_1;
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var value = unboxState(state);
      var tmp$ret$4 = _Result___init__impl__xyqfz8(value);
      tmp0_0.x8(tmp$ret$4);
    }
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (!properties_initialized_JobSupport_kt_5iq8a4) {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.i17();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).i17 = function () {
    var main = Dispatchers_getInstance().f13();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.h17();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function supervisorScope(block, $completion) {
    var coroutine = new SupervisorCoroutine($completion.s8(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(SupervisorCoroutine).fx = function (cause) {
    return false;
  };
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).fx = function (cause) {
    return false;
  };
  function withTimeoutOrNull(timeMillis, block, $completion) {
    var tmp = new $withTimeoutOrNullCOROUTINE$(timeMillis, block, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, TimeoutCancellationException);
    this.b18_1 = coroutine;
  }
  function TimeoutCoroutine(time, uCont) {
    ScopeCoroutine.call(this, uCont.s8(), uCont);
    this.g18_1 = time;
  }
  protoOf(TimeoutCoroutine).m11 = function () {
    this.gx(TimeoutCancellationException_0(this.g18_1, get_delay(this.rv_1), this));
  };
  protoOf(TimeoutCoroutine).fw = function () {
    return protoOf(ScopeCoroutine).fw.call(this) + '(timeMillis=' + this.g18_1.toString() + ')';
  };
  function setupTimeout(coroutine, block) {
    var cont = coroutine.zy_1;
    var context = cont.s8();
    disposeOnCompletion(coroutine, get_delay(context).h13(coroutine.g18_1, coroutine, coroutine.rv_1));
    return startUndispatchedOrReturnIgnoreTimeout(coroutine, coroutine, block);
  }
  function TimeoutCancellationException_0(time, delay, coroutine) {
    var tmp77_safe_receiver = isInterface(delay, DelayWithTimeoutDiagnostics) ? delay : null;
    var tmp;
    if (tmp77_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.time.Companion.milliseconds' call
      Companion_getInstance();
      var tmp$ret$0 = toDuration(time, DurationUnit_MILLISECONDS_getInstance());
      tmp = tmp77_safe_receiver.i13(tmp$ret$0);
    }
    var tmp0_elvis_lhs = tmp;
    var message = tmp0_elvis_lhs == null ? 'Timed out waiting for ' + time.toString() + ' ms' : tmp0_elvis_lhs;
    return new TimeoutCancellationException(message, coroutine);
  }
  function $withTimeoutOrNullCOROUTINE$(timeMillis, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y17_1 = timeMillis;
    this.z17_1 = block;
  }
  protoOf($withTimeoutOrNullCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            if (compare(this.y17_1, new Long(0, 0)) <= 0)
              return null;
            this.a18_1 = {_v: null};
            this.n8_1 = 2;
            this.m8_1 = 1;
            var timeoutCoroutine = new TimeoutCoroutine(this.y17_1, this);
            this.a18_1._v = timeoutCoroutine;
            suspendResult = returnIfSuspended(setupTimeout(timeoutCoroutine, this.z17_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            this.n8_1 = 3;
            var tmp_0 = this.p8_1;
            if (tmp_0 instanceof TimeoutCancellationException) {
              var e = this.p8_1;
              if (e.b18_1 === this.a18_1._v) {
                return null;
              }
              throw e;
            } else {
              throw this.p8_1;
            }

          case 3:
            throw this.p8_1;
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
  function Key_3() {
  }
  var Key_instance_4;
  function Key_getInstance_3() {
    return Key_instance_4;
  }
  function YieldContext() {
    AbstractCoroutineContextElement.call(this, Key_instance_4);
    this.i18_1 = false;
  }
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).w12 = function (context) {
    return false;
  };
  protoOf(Unconfined).x12 = function (context, block) {
    var yieldContext = context.z8(Key_instance_4);
    if (!(yieldContext == null)) {
      yieldContext.i18_1 = true;
      return Unit_instance;
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Waiter() {
  }
  function yield_0($completion) {
    var tmp$ret$0;
    $l$block_0: {
      var context = $completion.s8();
      ensureActive(context);
      var tmp = intercepted($completion);
      var tmp0_elvis_lhs = tmp instanceof DispatchedContinuation ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var cont = tmp_0;
      if (cont.tz_1.w12(context)) {
        cont.k18(context, Unit_instance);
      } else {
        var yieldContext = new YieldContext();
        cont.k18(context.jf(yieldContext), Unit_instance);
        if (yieldContext.i18_1) {
          tmp$ret$0 = yieldUndispatched(cont) ? get_COROUTINE_SUSPENDED() : Unit_instance;
          break $l$block_0;
        }
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  }
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_instance;
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function BufferOverflow_DROP_LATEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_LATEST_instance;
  }
  function get_NULL_SEGMENT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NULL_SEGMENT;
  }
  var NULL_SEGMENT;
  function get_SEGMENT_SIZE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SEGMENT_SIZE;
  }
  var SEGMENT_SIZE;
  function get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  }
  var EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  function get_BUFFERED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return BUFFERED;
  }
  var BUFFERED;
  function get_IN_BUFFER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return IN_BUFFER;
  }
  var IN_BUFFER;
  function get_RESUMING_BY_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_RCV;
  }
  var RESUMING_BY_RCV;
  function get_RESUMING_BY_EB() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_EB;
  }
  var RESUMING_BY_EB;
  function get_POISONED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return POISONED;
  }
  var POISONED;
  function get_DONE_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return DONE_RCV;
  }
  var DONE_RCV;
  function get_INTERRUPTED_SEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_SEND;
  }
  var INTERRUPTED_SEND;
  function get_INTERRUPTED_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_RCV;
  }
  var INTERRUPTED_RCV;
  function get_CHANNEL_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CHANNEL_CLOSED;
  }
  var CHANNEL_CLOSED;
  function get_SUSPEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND;
  }
  var SUSPEND;
  function get_SUSPEND_NO_WAITER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND_NO_WAITER;
  }
  var SUSPEND_NO_WAITER;
  function get_FAILED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return FAILED;
  }
  var FAILED;
  function get_NO_RECEIVE_RESULT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_RECEIVE_RESULT;
  }
  var NO_RECEIVE_RESULT;
  function get_CLOSE_HANDLER_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_CLOSED;
  }
  var CLOSE_HANDLER_CLOSED;
  function get_CLOSE_HANDLER_INVOKED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_INVOKED;
  }
  var CLOSE_HANDLER_INVOKED;
  function get_NO_CLOSE_CAUSE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_CLOSE_CAUSE;
  }
  var NO_CLOSE_CAUSE;
  function setElementLazy($this, index, value) {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    $this.q18_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value = value;
  }
  function ChannelSegment(id, prev, channel, pointers) {
    Segment.call(this, id, prev, pointers);
    this.p18_1 = channel;
    this.q18_1 = atomicfu$AtomicRefArray$ofNulls(imul(get_SEGMENT_SIZE(), 2));
  }
  protoOf(ChannelSegment).r18 = function () {
    return ensureNotNull(this.p18_1);
  };
  protoOf(ChannelSegment).s18 = function () {
    return get_SEGMENT_SIZE();
  };
  protoOf(ChannelSegment).t18 = function (index, element) {
    setElementLazy(this, index, element);
  };
  protoOf(ChannelSegment).u18 = function (index) {
    return this.q18_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value;
  };
  protoOf(ChannelSegment).v18 = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.u18(index);
    this.w18(index);
    return this_0;
  };
  protoOf(ChannelSegment).w18 = function (index) {
    setElementLazy(this, index, null);
  };
  protoOf(ChannelSegment).x18 = function (index) {
    return this.q18_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value;
  };
  protoOf(ChannelSegment).y18 = function (index, value) {
    this.q18_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value = value;
  };
  protoOf(ChannelSegment).z18 = function (index, from, to) {
    return this.q18_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$compareAndSet(from, to);
  };
  protoOf(ChannelSegment).a19 = function (index, update) {
    return this.q18_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$getAndSet(update);
  };
  protoOf(ChannelSegment).h10 = function (index, cause, context) {
    var isSender = index >= get_SEGMENT_SIZE();
    var index_0 = isSender ? index - get_SEGMENT_SIZE() | 0 : index;
    var element = this.u18(index_0);
    $l$loop: while (true) {
      var cur = this.x18(index_0);
      var tmp;
      if (!(cur == null) ? isInterface(cur, Waiter) : false) {
        tmp = true;
      } else {
        tmp = cur instanceof WaiterEB;
      }
      if (tmp) {
        var update = isSender ? get_INTERRUPTED_SEND() : get_INTERRUPTED_RCV();
        if (this.z18(index_0, cur, update)) {
          this.w18(index_0);
          this.n19(index_0, !isSender);
          if (isSender) {
            var tmp109_safe_receiver = this.r18().c19_1;
            if (tmp109_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp109_safe_receiver, element, context);
            }
          }
          return Unit_instance;
        }
      } else {
        if (cur === get_INTERRUPTED_SEND() || cur === get_INTERRUPTED_RCV()) {
          this.w18(index_0);
          if (isSender) {
            var tmp110_safe_receiver = this.r18().c19_1;
            if (tmp110_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp110_safe_receiver, element, context);
            }
          }
          return Unit_instance;
        } else {
          if (cur === get_RESUMING_BY_EB() || cur === get_RESUMING_BY_RCV())
            continue $l$loop;
          else {
            if (cur === get_DONE_RCV() || cur === get_BUFFERED())
              return Unit_instance;
            else {
              if (cur === get_CHANNEL_CLOSED())
                return Unit_instance;
              else {
                // Inline function 'kotlin.error' call
                var message = 'unexpected state: ' + toString_0(cur);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  };
  protoOf(ChannelSegment).n19 = function (index, receiver) {
    if (receiver) {
      var tmp = this.r18();
      var tmp0 = this.f10_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      // Inline function 'kotlin.Long.plus' call
      var this_0 = multiply(tmp0, fromInt(other));
      var tmp$ret$1 = add(this_0, fromInt(index));
      tmp.o19(tmp$ret$1);
    }
    this.p19();
  };
  function onClosedHasNext($this) {
    $this.b1a_1 = get_CHANNEL_CLOSED();
    var tmp0_elvis_lhs = $this.d1a_1.e1a();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var cause = tmp;
    throw recoverStackTrace_0(cause);
  }
  function hasNextOnNoWaiterSuspend($this, segment, index, r, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      $this.c1a_1 = cancellable;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var this_0 = $this.d1a_1;
      var updCellResult = updateCellReceive(this_0, segment, index, r, $this);
      if (updCellResult === get_SUSPEND()) {
        prepareReceiverForSuspension(this_0, $this, segment, index);
      } else if (updCellResult === get_FAILED()) {
        if (compare(r, this_0.f1a()) < 0) {
          segment.z19();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = this_0.i19_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if (this_0.g1a()) {
              onClosedHasNextNoWaiterSuspend($this);
              break $l$block_0;
            }
            var r_0 = this_0.e19_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = divide(r_0, fromInt(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var tmp$ret$6 = modulo(r_0, fromInt(other_0));
            var i = convertToInt(tmp$ret$6);
            if (!equalsLong(segment_0.f10_1, id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this_0, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive(this_0, segment_0, i, r_0, $this);
            if (updCellResult_0 === get_SUSPEND()) {
              var tmp92_safe_receiver = (!($this == null) ? isInterface($this, Waiter) : false) ? $this : null;
              if (tmp92_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this_0, tmp92_safe_receiver, segment_0, i);
              }
            } else if (updCellResult_0 === get_FAILED()) {
              if (compare(r_0, this_0.f1a()) < 0) {
                segment_0.z19();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === get_SUSPEND_NO_WAITER()) {
              // Inline function 'kotlin.error' call
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.z19();
              $this.b1a_1 = updCellResult_0;
              $this.c1a_1 = null;
              var tmp96_safe_receiver = $this.d1a_1.c19_1;
              cancellable.hz(true, tmp96_safe_receiver == null ? null : bindCancellationFun($this.d1a_1, tmp96_safe_receiver, updCellResult_0));
            }
            break $l$block_0;
          }
        }
      } else {
        segment.z19();
        $this.b1a_1 = updCellResult;
        $this.c1a_1 = null;
        var tmp96_safe_receiver_0 = $this.d1a_1.c19_1;
        cancellable.hz(true, tmp96_safe_receiver_0 == null ? null : bindCancellationFun($this.d1a_1, tmp96_safe_receiver_0, updCellResult));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.a11();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.xx();
  }
  function onClosedHasNextNoWaiterSuspend($this) {
    var cont = ensureNotNull($this.c1a_1);
    $this.c1a_1 = null;
    $this.b1a_1 = get_CHANNEL_CLOSED();
    var cause = $this.d1a_1.e1a();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(false);
      cont.x8(tmp$ret$1);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.x8(tmp$ret$3);
    }
  }
  function $hasNextCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p1a_1 = _this__u8e3s4;
  }
  protoOf($hasNextCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 8;
            if (!(this.p1a_1.b1a_1 === get_NO_RECEIVE_RESULT()) && !(this.p1a_1.b1a_1 === get_CHANNEL_CLOSED())) {
              var tmp_0 = this;
              tmp_0.q1a_1 = true;
              this.m8_1 = 11;
              continue $sm;
            } else {
              this.a1b_1 = this.p1a_1.d1a_1;
              this.z1a_1 = null;
              this.m8_1 = 1;
              continue $sm;
            }

          case 1:
            this.w1a_1 = this.a1b_1;
            this.x1a_1 = this.z1a_1;
            this.t1a_1 = this.w1a_1.i19_1.kotlinx$atomicfu$value;
            this.m8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.m8_1 = 9;
              continue $sm;
            }

            if (this.w1a_1.g1a()) {
              var tmp_1 = this;
              tmp_1.r1a_1 = onClosedHasNext(this.p1a_1);
              this.m8_1 = 10;
              continue $sm;
            } else {
              this.m8_1 = 3;
              continue $sm;
            }

          case 3:
            this.u1a_1 = this.w1a_1.e19_1.atomicfu$getAndIncrement$long();
            var tmp0 = this.u1a_1;
            var other = get_SEGMENT_SIZE();
            var id = divide(tmp0, fromInt(other));
            var tmp_2 = this;
            var tmp0_0 = this.u1a_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_2.v1a_1 = convertToInt(modulo(tmp0_0, fromInt(other_0)));
            if (!equalsLong(this.t1a_1.f10_1, id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this.w1a_1, id, this.t1a_1);
              if (tmp0_elvis_lhs == null) {
                this.m8_1 = 2;
                var tmp_3 = this;
                continue $sm;
              } else {
                this.y1a_1 = tmp0_elvis_lhs;
                this.m8_1 = 4;
                continue $sm;
              }
            } else {
              this.m8_1 = 5;
              continue $sm;
            }

          case 4:
            this.t1a_1 = this.y1a_1;
            this.m8_1 = 5;
            continue $sm;
          case 5:
            var updCellResult = updateCellReceive(this.w1a_1, this.t1a_1, this.v1a_1, this.u1a_1, this.x1a_1);
            if (updCellResult === get_SUSPEND()) {
              var tmp_4 = this;
              var tmp_5 = this.x1a_1;
              var tmp92_safe_receiver = (!(tmp_5 == null) ? isInterface(tmp_5, Waiter) : false) ? tmp_5 : null;
              if (tmp92_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this.w1a_1, tmp92_safe_receiver, this.t1a_1, this.v1a_1);
              }
              this.t1a_1;
              this.v1a_1;
              this.u1a_1;
              var message = 'unreachable';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (updCellResult === get_FAILED()) {
                if (compare(this.u1a_1, this.w1a_1.f1a()) < 0) {
                  this.t1a_1.z19();
                }
                this.m8_1 = 2;
                var tmp_6 = this;
                continue $sm;
              } else {
                if (updCellResult === get_SUSPEND_NO_WAITER()) {
                  var tmp0_1 = this.t1a_1;
                  var tmp2 = this.v1a_1;
                  var r = this.u1a_1;
                  this.m8_1 = 6;
                  suspendResult = hasNextOnNoWaiterSuspend(this.p1a_1, tmp0_1, tmp2, r, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_7 = this;
                  this.t1a_1.z19();
                  this.p1a_1.b1a_1 = updCellResult;
                  tmp_7.s1a_1 = true;
                  this.m8_1 = 7;
                  continue $sm;
                }
              }
            }

          case 6:
            var tmp_8 = this;
            return suspendResult;
          case 7:
            this.r1a_1 = this.s1a_1;
            this.m8_1 = 10;
            continue $sm;
          case 8:
            throw this.p8_1;
          case 9:
            if (false) {
              this.m8_1 = 1;
              continue $sm;
            }

            this.m8_1 = 10;
            continue $sm;
          case 10:
            this.q1a_1 = this.r1a_1;
            this.m8_1 = 11;
            continue $sm;
          case 11:
            return this.q1a_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 8) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  function _get_bufferEndCounter__2d4hee($this) {
    return $this.f19_1.kotlinx$atomicfu$value;
  }
  function _get_isRendezvousOrUnlimited__3mdufi($this) {
    // Inline function 'kotlin.let' call
    var it = _get_bufferEndCounter__2d4hee($this);
    return equalsLong(it, new Long(0, 0)) || equalsLong(it, new Long(-1, 2147483647));
  }
  function onClosedSend($this, element, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.t10();
    $l$block: {
      var tmp79_safe_receiver = $this.c19_1;
      var tmp80_safe_receiver = tmp79_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp79_safe_receiver, element);
      if (tmp80_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        addSuppressed(tmp80_safe_receiver, $this.b1b());
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = recoverStackTrace(tmp80_safe_receiver, cancellable);
        var tmp$ret$5 = _Result___init__impl__xyqfz8(createFailure(exception));
        cancellable.x8(tmp$ret$5);
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
      var exception_0 = $this.b1b();
      // Inline function 'kotlin.Companion.failure' call
      var exception_1 = recoverStackTrace(exception_0, cancellable);
      var tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(exception_1));
      cancellable.x8(tmp$ret$7);
    }
    return cancellable.xx();
  }
  function sendOnNoWaiterSuspend($this, segment, index, element, s, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter' call
      switch (updateCellSend($this, segment, index, element, s, cancellable, false)) {
        case 0:
          segment.z19();
          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$5 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.x8(tmp$ret$5);
          break;
        case 1:
          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$8 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.x8(tmp$ret$8);
          break;
        case 2:
          prepareSenderForSuspension($this, cancellable, segment, index);
          break;
        case 4:
          if (compare(s, $this.c1b()) < 0) {
            segment.z19();
          }

          onClosedSendOnNoWaiterSuspend($this, element, cancellable);
          break;
        case 5:
          segment.z19();
          $l$block_5: {
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
            var segment_0 = $this.h19_1.kotlinx$atomicfu$value;
            $l$loop_0: while (true) {
              var sendersAndCloseStatusCur = $this.d19_1.atomicfu$getAndIncrement$long();
              // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
              var s_0 = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
              var closed = _get_isClosedForSend0__kxgf9m($this, sendersAndCloseStatusCur);
              // Inline function 'kotlin.Long.div' call
              var other = get_SEGMENT_SIZE();
              var id = divide(s_0, fromInt(other));
              // Inline function 'kotlin.Long.rem' call
              var other_0 = get_SEGMENT_SIZE();
              var tmp$ret$13 = modulo(s_0, fromInt(other_0));
              var i = convertToInt(tmp$ret$13);
              if (!equalsLong(segment_0.f10_1, id)) {
                var tmp0_elvis_lhs = findSegmentSend($this, id, segment_0);
                var tmp;
                if (tmp0_elvis_lhs == null) {
                  var tmp_0;
                  if (closed) {
                    onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                    break $l$block_5;
                  } else {
                    continue $l$loop_0;
                  }
                } else {
                  tmp = tmp0_elvis_lhs;
                }
                segment_0 = tmp;
              }
              switch (updateCellSend($this, segment_0, i, element, s_0, cancellable, closed)) {
                case 0:
                  segment_0.z19();
                  // Inline function 'kotlin.coroutines.resume' call

                  // Inline function 'kotlin.Companion.success' call

                  var tmp$ret$17 = _Result___init__impl__xyqfz8(Unit_instance);
                  cancellable.x8(tmp$ret$17);
                  break $l$block_5;
                case 1:
                  // Inline function 'kotlin.coroutines.resume' call

                  // Inline function 'kotlin.Companion.success' call

                  var tmp$ret$20 = _Result___init__impl__xyqfz8(Unit_instance);
                  cancellable.x8(tmp$ret$20);
                  break $l$block_5;
                case 2:
                  if (closed) {
                    segment_0.p19();
                    onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                    break $l$block_5;
                  }

                  var tmp83_safe_receiver = (!(cancellable == null) ? isInterface(cancellable, Waiter) : false) ? cancellable : null;
                  if (tmp83_safe_receiver == null)
                    null;
                  else {
                    prepareSenderForSuspension($this, tmp83_safe_receiver, segment_0, i);
                  }

                  break $l$block_5;
                case 4:
                  if (compare(s_0, $this.c1b()) < 0) {
                    segment_0.z19();
                  }

                  onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                  break $l$block_5;
                case 5:
                  segment_0.z19();
                  continue $l$loop_0;
                case 3:
                  // Inline function 'kotlin.error' call

                  var message = 'unexpected';
                  throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }

          break;
        default:
          // Inline function 'kotlin.error' call

          var message_0 = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message_0));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.a11();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.xx();
  }
  function prepareSenderForSuspension($this, $receiver, segment, index) {
    $receiver.f11(segment, index + get_SEGMENT_SIZE() | 0);
  }
  function onClosedSendOnNoWaiterSuspend($this, element, cont) {
    var tmp81_safe_receiver = $this.c19_1;
    if (tmp81_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp81_safe_receiver, element, cont.s8());
    }
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = recoverStackTrace($this.b1b(), cont);
    var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.x8(tmp$ret$1);
  }
  function SendBroadcast() {
  }
  function updateCellSend($this, segment, index, element, s, waiter, closed) {
    segment.t18(index, element);
    if (closed)
      return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
    var state = segment.x18(index);
    if (state === null) {
      if (bufferOrRendezvousSend($this, s)) {
        if (segment.z18(index, null, get_BUFFERED())) {
          return 1;
        }
      } else {
        if (waiter == null) {
          return 3;
        } else {
          if (segment.z18(index, null, waiter))
            return 2;
        }
      }
    } else {
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        segment.w18(index);
        var tmp;
        if (tryResumeReceiver($this, state, element)) {
          segment.y18(index, get_DONE_RCV());
          $this.d1b();
          tmp = 0;
        } else {
          if (!(segment.a19(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.n19(index, true);
          }
          tmp = 5;
        }
        return tmp;
      }
    }
    return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
  }
  function updateCellSendSlow($this, segment, index, element, s, waiter, closed) {
    while (true) {
      var state = segment.x18(index);
      if (state === null) {
        if (bufferOrRendezvousSend($this, s) && !closed) {
          if (segment.z18(index, null, get_BUFFERED())) {
            return 1;
          }
        } else {
          if (closed) {
            if (segment.z18(index, null, get_INTERRUPTED_SEND())) {
              segment.n19(index, false);
              return 4;
            }
          } else if (waiter == null)
            return 3;
          else if (segment.z18(index, null, waiter))
            return 2;
        }
      } else if (state === get_IN_BUFFER()) {
        if (segment.z18(index, state, get_BUFFERED())) {
          return 1;
        }
      } else if (state === get_INTERRUPTED_RCV()) {
        segment.w18(index);
        return 5;
      } else if (state === get_POISONED()) {
        segment.w18(index);
        return 5;
      } else if (state === get_CHANNEL_CLOSED()) {
        segment.w18(index);
        completeCloseOrCancel($this);
        return 4;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        segment.w18(index);
        var tmp;
        if (state instanceof WaiterEB) {
          tmp = state.e1b_1;
        } else {
          tmp = state;
        }
        var receiver = tmp;
        var tmp_0;
        if (tryResumeReceiver($this, receiver, element)) {
          segment.y18(index, get_DONE_RCV());
          $this.d1b();
          tmp_0 = 0;
        } else {
          if (!(segment.a19(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.n19(index, true);
          }
          tmp_0 = 5;
        }
        return tmp_0;
      }
    }
  }
  function shouldSendSuspend0($this, curSendersAndCloseStatus) {
    if (_get_isClosedForSend0__kxgf9m($this, curSendersAndCloseStatus))
      return false;
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var tmp$ret$0 = bitwiseAnd(curSendersAndCloseStatus, new Long(-1, 268435455));
    return !bufferOrRendezvousSend($this, tmp$ret$0);
  }
  function bufferOrRendezvousSend($this, curSenders) {
    var tmp;
    if (compare(curSenders, _get_bufferEndCounter__2d4hee($this)) < 0) {
      tmp = true;
    } else {
      var tmp0 = $this.c1b();
      // Inline function 'kotlin.Long.plus' call
      var other = $this.b19_1;
      var tmp$ret$0 = add(tmp0, fromInt(other));
      tmp = compare(curSenders, tmp$ret$0) < 0;
    }
    return tmp;
  }
  function tryResumeReceiver($this, $receiver, element) {
    var tmp;
    if (isInterface($receiver, SelectInstance)) {
      tmp = $receiver.j1b($this, element);
    } else {
      if ($receiver instanceof ReceiveCatching) {
        if (!($receiver instanceof ReceiveCatching))
          THROW_CCE();
        var tmp_0 = Companion_getInstance_0().h1b(element);
        var tmp86_safe_receiver = $this.c19_1;
        tmp = tryResume0($receiver.i1b_1, new ChannelResult(tmp_0), tmp86_safe_receiver == null ? null : bindCancellationFunResult($this, tmp86_safe_receiver));
      } else {
        if ($receiver instanceof BufferedChannelIterator) {
          if (!($receiver instanceof BufferedChannelIterator))
            THROW_CCE();
          tmp = $receiver.f1b(element);
        } else {
          if (isInterface($receiver, CancellableContinuation)) {
            if (!isInterface($receiver, CancellableContinuation))
              THROW_CCE();
            var tmp87_safe_receiver = $this.c19_1;
            tmp = tryResume0($receiver, element, tmp87_safe_receiver == null ? null : bindCancellationFun_0($this, tmp87_safe_receiver));
          } else {
            // Inline function 'kotlin.error' call
            var message = 'Unexpected receiver type: ' + toString($receiver);
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
    }
    return tmp;
  }
  function receiveOnNoWaiterSuspend($this, segment, index, r, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var updCellResult = updateCellReceive($this, segment, index, r, cancellable);
      if (updCellResult === get_SUSPEND()) {
        prepareReceiverForSuspension($this, cancellable, segment, index);
      } else if (updCellResult === get_FAILED()) {
        if (compare(r, $this.f1a()) < 0) {
          segment.z19();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = $this.i19_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if ($this.g1a()) {
              onClosedReceiveOnNoWaiterSuspend($this, cancellable);
              break $l$block_0;
            }
            var r_0 = $this.e19_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = divide(r_0, fromInt(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var tmp$ret$6 = modulo(r_0, fromInt(other_0));
            var i = convertToInt(tmp$ret$6);
            if (!equalsLong(segment_0.f10_1, id)) {
              var tmp0_elvis_lhs = findSegmentReceive($this, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive($this, segment_0, i, r_0, cancellable);
            if (updCellResult_0 === get_SUSPEND()) {
              var tmp92_safe_receiver = (!(cancellable == null) ? isInterface(cancellable, Waiter) : false) ? cancellable : null;
              if (tmp92_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension($this, tmp92_safe_receiver, segment_0, i);
              }
            } else if (updCellResult_0 === get_FAILED()) {
              if (compare(r_0, $this.f1a()) < 0) {
                segment_0.z19();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === get_SUSPEND_NO_WAITER()) {
              // Inline function 'kotlin.error' call
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.z19();
              var tmp88_safe_receiver = $this.c19_1;
              var onCancellation = tmp88_safe_receiver == null ? null : bindCancellationFun_0($this, tmp88_safe_receiver);
              cancellable.hz(updCellResult_0, onCancellation);
            }
            break $l$block_0;
          }
        }
      } else {
        segment.z19();
        var tmp88_safe_receiver_0 = $this.c19_1;
        var onCancellation_0 = tmp88_safe_receiver_0 == null ? null : bindCancellationFun_0($this, tmp88_safe_receiver_0);
        cancellable.hz(updCellResult, onCancellation_0);
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.a11();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.xx();
  }
  function prepareReceiverForSuspension($this, $receiver, segment, index) {
    $this.k1b();
    $receiver.f11(segment, index);
  }
  function onClosedReceiveOnNoWaiterSuspend($this, cont) {
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = _get_receiveException__foorc1($this);
    var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.x8(tmp$ret$1);
  }
  function updateCellReceive($this, segment, index, r, waiter) {
    var state = segment.x18(index);
    if (state === null) {
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var this_0 = $this.d19_1.kotlinx$atomicfu$value;
      var senders = bitwiseAnd(this_0, new Long(-1, 268435455));
      if (compare(r, senders) >= 0) {
        if (waiter === null) {
          return get_SUSPEND_NO_WAITER();
        }
        if (segment.z18(index, state, waiter)) {
          expandBuffer($this);
          return get_SUSPEND();
        }
      }
    } else if (state === get_BUFFERED())
      if (segment.z18(index, state, get_DONE_RCV())) {
        expandBuffer($this);
        return segment.v18(index);
      }
    return updateCellReceiveSlow($this, segment, index, r, waiter);
  }
  function updateCellReceiveSlow($this, segment, index, r, waiter) {
    $l$loop: while (true) {
      var state = segment.x18(index);
      if (state === null || state === get_IN_BUFFER()) {
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var this_0 = $this.d19_1.kotlinx$atomicfu$value;
        var senders = bitwiseAnd(this_0, new Long(-1, 268435455));
        if (compare(r, senders) < 0) {
          if (segment.z18(index, state, get_POISONED())) {
            expandBuffer($this);
            return get_FAILED();
          }
        } else {
          if (waiter === null) {
            return get_SUSPEND_NO_WAITER();
          }
          if (segment.z18(index, state, waiter)) {
            expandBuffer($this);
            return get_SUSPEND();
          }
        }
      } else if (state === get_BUFFERED()) {
        if (segment.z18(index, state, get_DONE_RCV())) {
          expandBuffer($this);
          return segment.v18(index);
        }
      } else if (state === get_INTERRUPTED_SEND())
        return get_FAILED();
      else if (state === get_POISONED())
        return get_FAILED();
      else if (state === get_CHANNEL_CLOSED()) {
        expandBuffer($this);
        return get_FAILED();
      } else if (state === get_RESUMING_BY_EB())
        continue $l$loop;
      else {
        if (segment.z18(index, state, get_RESUMING_BY_RCV())) {
          var helpExpandBuffer = state instanceof WaiterEB;
          var tmp;
          if (state instanceof WaiterEB) {
            tmp = state.e1b_1;
          } else {
            tmp = state;
          }
          var sender = tmp;
          var tmp_0;
          if (tryResumeSender($this, sender, segment, index)) {
            segment.y18(index, get_DONE_RCV());
            expandBuffer($this);
            tmp_0 = segment.v18(index);
          } else {
            segment.y18(index, get_INTERRUPTED_SEND());
            segment.n19(index, false);
            if (helpExpandBuffer) {
              expandBuffer($this);
            }
            tmp_0 = get_FAILED();
          }
          return tmp_0;
        }
      }
    }
  }
  function tryResumeSender($this, $receiver, segment, index) {
    var tmp;
    if (isInterface($receiver, CancellableContinuation)) {
      if (!isInterface($receiver, CancellableContinuation))
        THROW_CCE();
      tmp = tryResume0($receiver, Unit_instance);
    } else {
      if (isInterface($receiver, SelectInstance)) {
        if (!($receiver instanceof SelectImplementation))
          THROW_CCE();
        var trySelectResult = $receiver.s1b($this, Unit_instance);
        if (trySelectResult === TrySelectDetailedResult_REREGISTER_getInstance()) {
          segment.w18(index);
        }
        tmp = trySelectResult === TrySelectDetailedResult_SUCCESSFUL_getInstance();
      } else {
        if ($receiver instanceof SendBroadcast) {
          tmp = tryResume0($receiver.l1b_1, true);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'Unexpected waiter: ' + toString($receiver);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp;
  }
  function expandBuffer($this) {
    if (_get_isRendezvousOrUnlimited__3mdufi($this))
      return Unit_instance;
    var segment = $this.j19_1.kotlinx$atomicfu$value;
    try_again: while (true) {
      var b = $this.f19_1.atomicfu$getAndIncrement$long();
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = divide(b, fromInt(other));
      var s = $this.f1a();
      if (compare(s, b) <= 0) {
        if (compare(segment.f10_1, id) < 0 && !(segment.v19() == null)) {
          moveSegmentBufferEndToSpecifiedOrLast($this, id, segment);
        }
        incCompletedExpandBufferAttempts($this);
        return Unit_instance;
      }
      if (!equalsLong(segment.f10_1, id)) {
        var tmp0_elvis_lhs = findSegmentBufferEnd($this, id, segment, b);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue try_again;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var tmp$ret$1 = modulo(b, fromInt(other_0));
      var i = convertToInt(tmp$ret$1);
      if (updateCellExpandBuffer($this, segment, i, b)) {
        incCompletedExpandBufferAttempts($this);
        return Unit_instance;
      } else {
        incCompletedExpandBufferAttempts($this);
        continue try_again;
      }
    }
  }
  function updateCellExpandBuffer($this, segment, index, b) {
    var state = segment.x18(index);
    if (!(state == null) ? isInterface(state, Waiter) : false) {
      if (compare(b, $this.e19_1.kotlinx$atomicfu$value) >= 0) {
        if (segment.z18(index, state, get_RESUMING_BY_EB())) {
          var tmp;
          if (tryResumeSender($this, state, segment, index)) {
            segment.y18(index, get_BUFFERED());
            tmp = true;
          } else {
            segment.y18(index, get_INTERRUPTED_SEND());
            segment.n19(index, false);
            tmp = false;
          }
          return tmp;
        }
      }
    }
    return updateCellExpandBufferSlow($this, segment, index, b);
  }
  function updateCellExpandBufferSlow($this, segment, index, b) {
    $l$loop: while (true) {
      var state = segment.x18(index);
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        if (compare(b, $this.e19_1.kotlinx$atomicfu$value) < 0) {
          if (segment.z18(index, state, new WaiterEB(state)))
            return true;
        } else {
          if (segment.z18(index, state, get_RESUMING_BY_EB())) {
            var tmp;
            if (tryResumeSender($this, state, segment, index)) {
              segment.y18(index, get_BUFFERED());
              tmp = true;
            } else {
              segment.y18(index, get_INTERRUPTED_SEND());
              segment.n19(index, false);
              tmp = false;
            }
            return tmp;
          }
        }
      } else {
        if (state === get_INTERRUPTED_SEND())
          return false;
        else {
          if (state === null) {
            if (segment.z18(index, state, get_IN_BUFFER()))
              return true;
          } else {
            if (state === get_BUFFERED())
              return true;
            else {
              if (state === get_POISONED() || state === get_DONE_RCV() || state === get_INTERRUPTED_RCV())
                return true;
              else {
                if (state === get_CHANNEL_CLOSED())
                  return true;
                else {
                  if (state === get_RESUMING_BY_RCV())
                    continue $l$loop;
                  else {
                    // Inline function 'kotlin.error' call
                    var message = 'Unexpected cell state: ' + toString_0(state);
                    throw IllegalStateException_init_$Create$(toString(message));
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts($this, nAttempts) {
    nAttempts = nAttempts === VOID ? new Long(1, 0) : nAttempts;
    // Inline function 'kotlin.also' call
    var this_0 = $this.g19_1.atomicfu$addAndGet$long(nAttempts);
    // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
    if (!equalsLong(bitwiseAnd(this_0, new Long(0, 1073741824)), new Long(0, 0))) {
      $l$loop: while (true) {
        // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
        var this_1 = $this.g19_1.kotlinx$atomicfu$value;
        if (!!equalsLong(bitwiseAnd(this_1, new Long(0, 1073741824)), new Long(0, 0))) {
          break $l$loop;
        }
      }
    }
  }
  function registerSelectForReceive($this, select, ignoredParam) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
      var segment = $this.i19_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        if ($this.g1a()) {
          onClosedSelectOnReceive($this, select);
          tmp$ret$0 = Unit_instance;
          break $l$block_0;
        }
        var r = $this.e19_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = divide(r, fromInt(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$3 = modulo(r, fromInt(other_0));
        var i = convertToInt(tmp$ret$3);
        if (!equalsLong(segment.f10_1, id)) {
          var tmp0_elvis_lhs = findSegmentReceive($this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var updCellResult = updateCellReceive($this, segment, i, r, select);
        if (updCellResult === get_SUSPEND()) {
          var tmp92_safe_receiver = (!(select == null) ? isInterface(select, Waiter) : false) ? select : null;
          if (tmp92_safe_receiver == null)
            null;
          else {
            prepareReceiverForSuspension($this, tmp92_safe_receiver, segment, i);
          }
        } else if (updCellResult === get_FAILED()) {
          if (compare(r, $this.f1a()) < 0) {
            segment.z19();
          }
          continue $l$loop_0;
        } else if (updCellResult === get_SUSPEND_NO_WAITER()) {
          // Inline function 'kotlin.error' call
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          segment.z19();
          select.t1b(updCellResult);
        }
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  }
  function onClosedSelectOnReceive($this, select) {
    select.t1b(get_CHANNEL_CLOSED());
  }
  function processResultSelectReceiveCatching($this, ignoredParam, selectResult) {
    return new ChannelResult(selectResult === get_CHANNEL_CLOSED() ? Companion_getInstance_0().u1b($this.e1a()) : Companion_getInstance_0().h1b(selectResult));
  }
  function BufferedChannelIterator($outer) {
    this.d1a_1 = $outer;
    this.b1a_1 = get_NO_RECEIVE_RESULT();
    this.c1a_1 = null;
  }
  protoOf(BufferedChannelIterator).v1b = function ($completion) {
    var tmp = new $hasNextCOROUTINE$(this, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(BufferedChannelIterator).f11 = function (segment, index) {
    var tmp97_safe_receiver = this.c1a_1;
    if (tmp97_safe_receiver == null)
      null;
    else {
      tmp97_safe_receiver.f11(segment, index);
    }
  };
  protoOf(BufferedChannelIterator).k = function () {
    var result = this.b1a_1;
    // Inline function 'kotlin.check' call
    if (!!(result === get_NO_RECEIVE_RESULT())) {
      var message = '`hasNext()` has not been invoked';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.b1a_1 = get_NO_RECEIVE_RESULT();
    if (result === get_CHANNEL_CLOSED())
      throw recoverStackTrace_0(_get_receiveException__foorc1(this.d1a_1));
    return result;
  };
  protoOf(BufferedChannelIterator).f1b = function (element) {
    var cont = ensureNotNull(this.c1a_1);
    this.c1a_1 = null;
    this.b1a_1 = element;
    var tmp98_safe_receiver = this.d1a_1.c19_1;
    return tryResume0(cont, true, tmp98_safe_receiver == null ? null : bindCancellationFun(this.d1a_1, tmp98_safe_receiver, element));
  };
  protoOf(BufferedChannelIterator).w1b = function () {
    var cont = ensureNotNull(this.c1a_1);
    this.c1a_1 = null;
    this.b1a_1 = get_CHANNEL_CLOSED();
    var cause = this.d1a_1.e1a();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(false);
      cont.x8(tmp$ret$1);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.x8(tmp$ret$3);
    }
  };
  function _get_receiveException__foorc1($this) {
    var tmp0_elvis_lhs = $this.e1a();
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException('Channel was closed') : tmp0_elvis_lhs;
  }
  function invokeCloseHandler($this) {
    var tmp0 = $this.m19_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.getAndUpdate' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        var tmp;
        if (cur === null) {
          tmp = get_CLOSE_HANDLER_CLOSED();
        } else {
          tmp = get_CLOSE_HANDLER_INVOKED();
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$0 = cur;
          break $l$block;
        }
      }
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var closeHandler = tmp_0;
    if (typeof closeHandler !== 'function')
      THROW_CCE();
    closeHandler($this.e1a());
  }
  function markClosed($this) {
    var tmp0 = $this.d19_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        var tmp;
        switch (convertToInt(shiftRight(cur, 60))) {
          case 0:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$3 = bitwiseAnd(cur, new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$3, 2);
            break;
          case 1:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$4 = bitwiseAnd(cur, new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$4, 3);
            break;
          default:
            return Unit_instance;
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$0 = Unit_instance;
          break $l$block;
        }
      }
      tmp$ret$0 = Unit_instance;
    }
    return tmp$ret$0;
  }
  function markCancelled($this) {
    var tmp0 = $this.d19_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var tmp$ret$2 = bitwiseAnd(cur, new Long(-1, 268435455));
        var upd = constructSendersAndCloseStatus(tmp$ret$2, 3);
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$0 = Unit_instance;
          break $l$block;
        }
      }
      tmp$ret$0 = Unit_instance;
    }
    return tmp$ret$0;
  }
  function markCancellationStarted($this) {
    var tmp0 = $this.d19_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        var tmp;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        if (convertToInt(shiftRight(cur, 60)) === 0) {
          // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
          var tmp$ret$3 = bitwiseAnd(cur, new Long(-1, 268435455));
          tmp = constructSendersAndCloseStatus(tmp$ret$3, 1);
        } else {
          return Unit_instance;
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$0 = Unit_instance;
          break $l$block;
        }
      }
      tmp$ret$0 = Unit_instance;
    }
    return tmp$ret$0;
  }
  function completeCloseOrCancel($this) {
    $this.x1b();
  }
  function completeClose($this, sendersCur) {
    var lastSegment = closeLinkedList($this);
    if ($this.z1b()) {
      var lastBufferedCellGlobalIndex = markAllEmptyCellsAsClosed($this, lastSegment);
      if (!equalsLong(lastBufferedCellGlobalIndex, new Long(-1, -1))) {
        $this.y1b(lastBufferedCellGlobalIndex);
      }
    }
    cancelSuspendedReceiveRequests($this, lastSegment, sendersCur);
    return lastSegment;
  }
  function completeCancel($this, sendersCur) {
    var lastSegment = completeClose($this, sendersCur);
    removeUnprocessedElements($this, lastSegment);
  }
  function closeLinkedList($this) {
    var lastSegment = $this.j19_1.kotlinx$atomicfu$value;
    // Inline function 'kotlin.let' call
    var it = $this.h19_1.kotlinx$atomicfu$value;
    if (compare(it.f10_1, lastSegment.f10_1) > 0)
      lastSegment = it;
    // Inline function 'kotlin.let' call
    var it_0 = $this.i19_1.kotlinx$atomicfu$value;
    if (compare(it_0.f10_1, lastSegment.f10_1) > 0)
      lastSegment = it_0;
    return close(lastSegment);
  }
  function markAllEmptyCellsAsClosed($this, lastSegment) {
    var segment = lastSegment;
    while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.f10_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_0 = multiply(tmp0, fromInt(other));
          var globalIndex = add(this_0, fromInt(index));
          if (compare(globalIndex, $this.c1b()) < 0)
            return new Long(-1, -1);
          cell_update: while (true) {
            var state = segment.x18(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.z18(index, state, get_CHANNEL_CLOSED())) {
                segment.p19();
                break cell_update;
              }
            } else if (state === get_BUFFERED())
              return globalIndex;
            else
              break cell_update;
          }
        }
         while (0 <= inductionVariable);
      var tmp0_elvis_lhs = segment.y19();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return new Long(-1, -1);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
  }
  function removeUnprocessedElements($this, lastSegment) {
    var onUndeliveredElement = $this.c19_1;
    var undeliveredElementException = null;
    var suspendedSenders = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.f10_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_0 = multiply(tmp0, fromInt(other));
          var globalIndex = add(this_0, fromInt(index));
          update_cell: while (true) {
            var state = segment.x18(index);
            if (state === get_DONE_RCV())
              break process_segments;
            else {
              if (state === get_BUFFERED()) {
                if (compare(globalIndex, $this.c1b()) < 0)
                  break process_segments;
                if (segment.z18(index, state, get_CHANNEL_CLOSED())) {
                  if (!(onUndeliveredElement == null)) {
                    var element = segment.u18(index);
                    undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element, undeliveredElementException);
                  }
                  segment.w18(index);
                  segment.p19();
                  break update_cell;
                }
              } else {
                if (state === get_IN_BUFFER() || state === null) {
                  if (segment.z18(index, state, get_CHANNEL_CLOSED())) {
                    segment.p19();
                    break update_cell;
                  }
                } else {
                  var tmp;
                  if (!(state == null) ? isInterface(state, Waiter) : false) {
                    tmp = true;
                  } else {
                    tmp = state instanceof WaiterEB;
                  }
                  if (tmp) {
                    if (compare(globalIndex, $this.c1b()) < 0)
                      break process_segments;
                    var tmp_0;
                    if (state instanceof WaiterEB) {
                      tmp_0 = state.e1b_1;
                    } else {
                      tmp_0 = (!(state == null) ? isInterface(state, Waiter) : false) ? state : THROW_CCE();
                    }
                    var sender = tmp_0;
                    if (segment.z18(index, state, get_CHANNEL_CLOSED())) {
                      if (!(onUndeliveredElement == null)) {
                        var element_0 = segment.u18(index);
                        undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element_0, undeliveredElementException);
                      }
                      suspendedSenders = InlineList__plus_impl_nuetvo(suspendedSenders, sender);
                      segment.w18(index);
                      segment.p19();
                      break update_cell;
                    }
                  } else {
                    if (state === get_RESUMING_BY_EB() || state === get_RESUMING_BY_RCV())
                      break process_segments;
                    else {
                      if (state === get_RESUMING_BY_EB())
                        continue update_cell;
                      else {
                        break update_cell;
                      }
                    }
                  }
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      var tmp0_elvis_lhs = segment.y19();
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        break process_segments;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      segment = tmp_1;
    }
    var tmp0_0 = suspendedSenders;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp154_subject = access$_get_holder__kkflen(tmp0_0);
      if (tmp154_subject == null) {
        break $l$block;
      } else {
        if (!(tmp154_subject instanceof ArrayList)) {
          var it = access$_get_holder__kkflen(tmp0_0);
          resumeSenderOnCancelledChannel($this, it);
        } else {
          var tmp_2 = access$_get_holder__kkflen(tmp0_0);
          var list = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable_0 = list.l() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var it_0 = list.m(i);
              resumeSenderOnCancelledChannel($this, it_0);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
    var tmp100_safe_receiver = undeliveredElementException;
    if (tmp100_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp100_safe_receiver;
    }
  }
  function cancelSuspendedReceiveRequests($this, lastSegment, sendersCounter) {
    var suspendedReceivers = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (!(segment == null)) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.f10_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_0 = multiply(tmp0, fromInt(other));
          var tmp$ret$1 = add(this_0, fromInt(index));
          if (compare(tmp$ret$1, sendersCounter) < 0)
            break process_segments;
          cell_update: while (true) {
            var state = segment.x18(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.z18(index, state, get_CHANNEL_CLOSED())) {
                segment.p19();
                break cell_update;
              }
            } else {
              if (state instanceof WaiterEB) {
                if (segment.z18(index, state, get_CHANNEL_CLOSED())) {
                  suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state.e1b_1);
                  segment.n19(index, true);
                  break cell_update;
                }
              } else {
                if (!(state == null) ? isInterface(state, Waiter) : false) {
                  if (segment.z18(index, state, get_CHANNEL_CLOSED())) {
                    suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state);
                    segment.n19(index, true);
                    break cell_update;
                  }
                } else {
                  break cell_update;
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      segment = segment.y19();
    }
    var tmp0_0 = suspendedReceivers;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp154_subject = access$_get_holder__kkflen(tmp0_0);
      if (tmp154_subject == null) {
        break $l$block;
      } else {
        if (!(tmp154_subject instanceof ArrayList)) {
          var it = access$_get_holder__kkflen(tmp0_0);
          resumeReceiverOnClosedChannel($this, it);
        } else {
          var tmp = access$_get_holder__kkflen(tmp0_0);
          var list = tmp instanceof ArrayList ? tmp : THROW_CCE();
          var inductionVariable_0 = list.l() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var it_0 = list.m(i);
              resumeReceiverOnClosedChannel($this, it_0);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
  }
  function resumeReceiverOnClosedChannel($this, $receiver) {
    return resumeWaiterOnClosedChannel($this, $receiver, true);
  }
  function resumeSenderOnCancelledChannel($this, $receiver) {
    return resumeWaiterOnClosedChannel($this, $receiver, false);
  }
  function resumeWaiterOnClosedChannel($this, $receiver, receiver) {
    if ($receiver instanceof SendBroadcast) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $receiver.l1b_1;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(false);
      this_0.x8(tmp$ret$1);
    } else {
      if (isInterface($receiver, CancellableContinuation)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = receiver ? _get_receiveException__foorc1($this) : $this.b1b();
        var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception));
        $receiver.x8(tmp$ret$3);
      } else {
        if ($receiver instanceof ReceiveCatching) {
          var tmp0 = $receiver.i1b_1;
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = new ChannelResult(Companion_getInstance_0().u1b($this.e1a()));
          var tmp$ret$5 = _Result___init__impl__xyqfz8(value);
          tmp0.x8(tmp$ret$5);
        } else {
          if ($receiver instanceof BufferedChannelIterator) {
            $receiver.w1b();
          } else {
            if (isInterface($receiver, SelectInstance))
              $receiver.j1b($this, get_CHANNEL_CLOSED());
            else {
              // Inline function 'kotlin.error' call
              var message = 'Unexpected waiter: ' + toString($receiver);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  }
  function _get_isClosedForSend0__kxgf9m($this, $receiver) {
    return isClosed($this, $receiver, false);
  }
  function _get_isClosedForReceive0__f7qknl($this, $receiver) {
    return isClosed($this, $receiver, true);
  }
  function isClosed($this, sendersAndCloseStatusCur, isClosedForReceive) {
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp;
    switch (convertToInt(shiftRight(sendersAndCloseStatusCur, 60))) {
      case 0:
        tmp = false;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$1 = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
        completeClose($this, tmp$ret$1);
        tmp = isClosedForReceive ? !$this.a1c() : true;
        break;
      case 3:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$2 = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
        completeCancel($this, tmp$ret$2);
        tmp = true;
        break;
      default:
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call

        // Inline function 'kotlin.error' call

        var message = 'unexpected close status: ' + convertToInt(shiftRight(sendersAndCloseStatusCur, 60));
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function isCellNonEmpty($this, segment, index, globalIndex) {
    while (true) {
      var state = segment.x18(index);
      if (state === null || state === get_IN_BUFFER()) {
        if (segment.z18(index, state, get_POISONED())) {
          expandBuffer($this);
          return false;
        }
      } else if (state === get_BUFFERED())
        return true;
      else if (state === get_INTERRUPTED_SEND())
        return false;
      else if (state === get_CHANNEL_CLOSED())
        return false;
      else if (state === get_DONE_RCV())
        return false;
      else if (state === get_POISONED())
        return false;
      else if (state === get_RESUMING_BY_EB())
        return true;
      else if (state === get_RESUMING_BY_RCV())
        return false;
      else
        return equalsLong(globalIndex, $this.c1b());
    }
  }
  function findSegmentSend($this, id, startFrom) {
    var tmp0 = $this.h19_1;
    var tmp6 = createSegmentFunction();
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp6);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp$ret$2;
            // Inline function 'kotlinx.atomicfu.loop' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (compare(cur.f10_1, tmp2.f10_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp2.r19()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.s19()) {
                  cur.m3();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp2.s19()) {
                tmp2.m3();
              }
            }
            tmp$ret$1 = tmp$ret$2;
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$0 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$0;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      var tmp0_0 = startFrom.f10_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      var tmp$ret$6 = multiply(tmp0_0, fromInt(other));
      if (compare(tmp$ret$6, $this.c1b()) < 0) {
        startFrom.z19();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (compare(segment.f10_1, id) > 0) {
        var tmp0_1 = segment.f10_1;
        // Inline function 'kotlin.Long.times' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$7 = multiply(tmp0_1, fromInt(other_0));
        updateSendersCounterIfLower($this, tmp$ret$7);
        var tmp0_2 = segment.f10_1;
        // Inline function 'kotlin.Long.times' call
        var other_1 = get_SEGMENT_SIZE();
        var tmp$ret$8 = multiply(tmp0_2, fromInt(other_1));
        if (compare(tmp$ret$8, $this.c1b()) < 0) {
          segment.z19();
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function findSegmentReceive($this, id, startFrom) {
    var tmp0 = $this.i19_1;
    var tmp6 = createSegmentFunction();
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp6);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp$ret$2;
            // Inline function 'kotlinx.atomicfu.loop' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (compare(cur.f10_1, tmp2.f10_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp2.r19()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.s19()) {
                  cur.m3();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp2.s19()) {
                tmp2.m3();
              }
            }
            tmp$ret$1 = tmp$ret$2;
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$0 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$0;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      var tmp0_0 = startFrom.f10_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      var tmp$ret$6 = multiply(tmp0_0, fromInt(other));
      if (compare(tmp$ret$6, $this.f1a()) < 0) {
        startFrom.z19();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (!_get_isRendezvousOrUnlimited__3mdufi($this)) {
        var tmp0_1 = _get_bufferEndCounter__2d4hee($this);
        // Inline function 'kotlin.Long.div' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$7 = divide(tmp0_1, fromInt(other_0));
        tmp_1 = compare(id, tmp$ret$7) <= 0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp0_2 = $this.j19_1;
        $l$block_5: {
          // Inline function 'kotlinx.coroutines.internal.moveForward' call
          // Inline function 'kotlinx.atomicfu.loop' call
          while (true) {
            var cur_0 = tmp0_2.kotlinx$atomicfu$value;
            if (compare(cur_0.f10_1, segment.f10_1) >= 0) {
              break $l$block_5;
            }
            if (!segment.r19()) {
              break $l$block_5;
            }
            if (tmp0_2.atomicfu$compareAndSet(cur_0, segment)) {
              if (cur_0.s19()) {
                cur_0.m3();
              }
              break $l$block_5;
            }
            if (segment.s19()) {
              segment.m3();
            }
          }
        }
      }
      var tmp_2;
      if (compare(segment.f10_1, id) > 0) {
        var tmp0_3 = segment.f10_1;
        // Inline function 'kotlin.Long.times' call
        var other_1 = get_SEGMENT_SIZE();
        var tmp$ret$11 = multiply(tmp0_3, fromInt(other_1));
        updateReceiversCounterIfLower($this, tmp$ret$11);
        var tmp0_4 = segment.f10_1;
        // Inline function 'kotlin.Long.times' call
        var other_2 = get_SEGMENT_SIZE();
        var tmp$ret$12 = multiply(tmp0_4, fromInt(other_2));
        if (compare(tmp$ret$12, $this.f1a()) < 0) {
          segment.z19();
        }
        tmp_2 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_2 = segment;
      }
      tmp_0 = tmp_2;
    }
    return tmp_0;
  }
  function findSegmentBufferEnd($this, id, startFrom, currentBufferEndCounter) {
    var tmp0 = $this.j19_1;
    var tmp6 = createSegmentFunction();
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp6);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp$ret$2;
            // Inline function 'kotlinx.atomicfu.loop' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (compare(cur.f10_1, tmp2.f10_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp2.r19()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.s19()) {
                  cur.m3();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp2.s19()) {
                tmp2.m3();
              }
            }
            tmp$ret$1 = tmp$ret$2;
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$0 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$0;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom);
      incCompletedExpandBufferAttempts($this);
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (compare(segment.f10_1, id) > 0) {
        // Inline function 'kotlin.Long.plus' call
        var tmp_2 = add(currentBufferEndCounter, fromInt(1));
        var tmp0_0 = segment.f10_1;
        // Inline function 'kotlin.Long.times' call
        var other = get_SEGMENT_SIZE();
        var tmp$ret$7 = multiply(tmp0_0, fromInt(other));
        if ($this.f19_1.atomicfu$compareAndSet(tmp_2, tmp$ret$7)) {
          var tmp0_1 = segment.f10_1;
          // Inline function 'kotlin.Long.times' call
          var other_0 = get_SEGMENT_SIZE();
          var tmp$ret$8 = multiply(tmp0_1, fromInt(other_0));
          incCompletedExpandBufferAttempts($this, subtract(tmp$ret$8, currentBufferEndCounter));
        } else {
          incCompletedExpandBufferAttempts($this);
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom) {
    var segment = startFrom;
    $l$loop: while (compare(segment.f10_1, id) < 0) {
      var tmp0_elvis_lhs = segment.v19();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
    while (true) {
      $l$loop_0: while (segment.q19()) {
        var tmp1_elvis_lhs = segment.v19();
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        segment = tmp_0;
      }
      var tmp0 = $this.j19_1;
      var tmp2 = segment;
      var tmp$ret$0;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.moveForward' call
        var tmp$ret$1;
        // Inline function 'kotlinx.atomicfu.loop' call
        while (true) {
          var cur = tmp0.kotlinx$atomicfu$value;
          if (compare(cur.f10_1, tmp2.f10_1) >= 0) {
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (!tmp2.r19()) {
            tmp$ret$0 = false;
            break $l$block_1;
          }
          if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
            if (cur.s19()) {
              cur.m3();
            }
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (tmp2.s19()) {
            tmp2.m3();
          }
        }
        tmp$ret$0 = tmp$ret$1;
      }
      if (tmp$ret$0)
        return Unit_instance;
    }
  }
  function updateSendersCounterIfLower($this, value) {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.d19_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var curCounter = bitwiseAnd(cur, new Long(-1, 268435455));
      if (compare(curCounter, value) >= 0)
        return Unit_instance;
      // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
      var tmp$ret$3 = convertToInt(shiftRight(cur, 60));
      var update = constructSendersAndCloseStatus(curCounter, tmp$ret$3);
      if ($this.d19_1.atomicfu$compareAndSet(cur, update))
        return Unit_instance;
    }
    return tmp$ret$0;
  }
  function updateReceiversCounterIfLower($this, value) {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.e19_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      if (compare(cur, value) >= 0)
        return Unit_instance;
      if ($this.e19_1.atomicfu$compareAndSet(cur, value))
        return Unit_instance;
    }
    return tmp$ret$0;
  }
  function bindCancellationFunResult($this, $receiver) {
    return BufferedChannel$onCancellationChannelResultImplDoNotCall$ref($this);
  }
  function onCancellationChannelResultImplDoNotCall($this, cause, element, context) {
    callUndeliveredElement(ensureNotNull($this.c19_1), ensureNotNull(ChannelResult__getOrNull_impl_f5e07h(element)), context);
  }
  function bindCancellationFun($this, $receiver, element) {
    return BufferedChannel$bindCancellationFun$lambda($receiver, element);
  }
  function bindCancellationFun_0($this, $receiver) {
    return BufferedChannel$onCancellationImplDoNotCall$ref($this);
  }
  function onCancellationImplDoNotCall($this, cause, element, context) {
    callUndeliveredElement(ensureNotNull($this.c19_1), element, context);
  }
  function BufferedChannel$registerSelectForReceive$ref() {
    var l = function (p0, p1, p2) {
      registerSelectForReceive(p0, p1, p2);
      return Unit_instance;
    };
    l.callableName = 'registerSelectForReceive';
    return l;
  }
  function BufferedChannel$processResultSelectReceiveCatching$ref() {
    var l = function (p0, p1, p2) {
      return processResultSelectReceiveCatching(p0, p1, p2);
    };
    l.callableName = 'processResultSelectReceiveCatching';
    return l;
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda($element, this$0, $select) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      var tmp;
      if (!($element === get_CHANNEL_CLOSED())) {
        callUndeliveredElement(this$0.c19_1, $element, $select.s8());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this$0) {
    return function (select, _unused_var__etf5q3, element) {
      return BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda(element, this$0, select);
    };
  }
  function BufferedChannel$onCancellationChannelResultImplDoNotCall$ref(p0) {
    var l = function (_this__u8e3s4, p0_0, p1) {
      var tmp0 = p0;
      onCancellationChannelResultImplDoNotCall(tmp0, _this__u8e3s4, p0_0.c1c_1, p1);
      return Unit_instance;
    };
    l.callableName = 'onCancellationChannelResultImplDoNotCall';
    return l;
  }
  function BufferedChannel$bindCancellationFun$lambda($this_bindCancellationFun, $element) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, context) {
      callUndeliveredElement($this_bindCancellationFun, $element, context);
      return Unit_instance;
    };
  }
  function BufferedChannel$onCancellationImplDoNotCall$ref(p0) {
    var l = function (_this__u8e3s4, p0_0, p1) {
      var tmp0 = p0;
      onCancellationImplDoNotCall(tmp0, _this__u8e3s4, p0_0, p1);
      return Unit_instance;
    };
    l.callableName = 'onCancellationImplDoNotCall';
    return l;
  }
  function $sendCOROUTINE$(_this__u8e3s4, element, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l1c_1 = _this__u8e3s4;
    this.m1c_1 = element;
  }
  protoOf($sendCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 11;
            this.x1c_1 = this.l1c_1;
            this.w1c_1 = this.m1c_1;
            this.v1c_1 = null;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.p1c_1 = this.x1c_1;
            this.s1c_1 = this.w1c_1;
            this.q1c_1 = this.v1c_1;
            this.o1c_1 = this.p1c_1.h19_1.kotlinx$atomicfu$value;
            this.m8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.m8_1 = 12;
              continue $sm;
            }

            var sendersAndCloseStatusCur = this.p1c_1.d19_1.atomicfu$getAndIncrement$long();
            var tmp_0 = this;
            tmp_0.r1c_1 = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
            this.t1c_1 = _get_isClosedForSend0__kxgf9m(this.p1c_1, sendersAndCloseStatusCur);
            var tmp0 = this.r1c_1;
            var other = get_SEGMENT_SIZE();
            var id = divide(tmp0, fromInt(other));
            var tmp_1 = this;
            var tmp0_0 = this.r1c_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_1.n1c_1 = convertToInt(modulo(tmp0_0, fromInt(other_0)));
            if (!equalsLong(this.o1c_1.f10_1, id)) {
              var tmp0_elvis_lhs = findSegmentSend(this.p1c_1, id, this.o1c_1);
              if (tmp0_elvis_lhs == null) {
                if (this.t1c_1) {
                  this.m8_1 = 10;
                  suspendResult = onClosedSend(this.l1c_1, this.m1c_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.m8_1 = 2;
                  var tmp_2 = this;
                  continue $sm;
                }
              } else {
                this.u1c_1 = tmp0_elvis_lhs;
                this.m8_1 = 3;
                continue $sm;
              }
            } else {
              this.m8_1 = 4;
              continue $sm;
            }

          case 3:
            this.o1c_1 = this.u1c_1;
            this.m8_1 = 4;
            continue $sm;
          case 4:
            var tmp82_subject = updateCellSend(this.p1c_1, this.o1c_1, this.n1c_1, this.s1c_1, this.r1c_1, this.q1c_1, this.t1c_1);
            if (tmp82_subject === 0) {
              this.o1c_1.z19();
              this.m8_1 = 13;
              continue $sm;
            } else {
              if (tmp82_subject === 1) {
                this.m8_1 = 13;
                continue $sm;
              } else {
                if (tmp82_subject === 2) {
                  if (this.t1c_1) {
                    this.o1c_1.p19();
                    this.m8_1 = 9;
                    suspendResult = onClosedSend(this.l1c_1, this.m1c_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    this.m8_1 = 8;
                    continue $sm;
                  }
                } else {
                  if (tmp82_subject === 4) {
                    if (compare(this.r1c_1, this.p1c_1.c1b()) < 0) {
                      this.o1c_1.z19();
                    }
                    this.m8_1 = 7;
                    suspendResult = onClosedSend(this.l1c_1, this.m1c_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp82_subject === 5) {
                      this.o1c_1.z19();
                      this.m8_1 = 2;
                      continue $sm;
                    } else {
                      if (tmp82_subject === 3) {
                        var tmp0_1 = this.o1c_1;
                        var tmp2 = this.n1c_1;
                        var tmp4 = this.s1c_1;
                        var s = this.r1c_1;
                        this.m8_1 = 6;
                        suspendResult = sendOnNoWaiterSuspend(this.l1c_1, tmp0_1, tmp2, tmp4, s, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.m8_1 = 5;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

          case 5:
            this.m8_1 = 2;
            continue $sm;
          case 6:
            this.m8_1 = 13;
            continue $sm;
          case 7:
            this.m8_1 = 13;
            continue $sm;
          case 8:
            var tmp_3 = this.q1c_1;
            var tmp83_safe_receiver = (!(tmp_3 == null) ? isInterface(tmp_3, Waiter) : false) ? tmp_3 : null;
            if (tmp83_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(this.p1c_1, tmp83_safe_receiver, this.o1c_1, this.n1c_1);
            }

            this.o1c_1;
            this.n1c_1;
            this.m8_1 = 13;
            continue $sm;
          case 9:
            this.m8_1 = 13;
            continue $sm;
          case 10:
            this.m8_1 = 13;
            continue $sm;
          case 11:
            throw this.p8_1;
          case 12:
            if (false) {
              this.m8_1 = 1;
              continue $sm;
            }

            this.m8_1 = 13;
            continue $sm;
          case 13:
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 11) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  function $receiveCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g1d_1 = _this__u8e3s4;
  }
  protoOf($receiveCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 8;
            this.q1d_1 = this.g1d_1;
            this.p1d_1 = null;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.m1d_1 = this.q1d_1;
            this.n1d_1 = this.p1d_1;
            this.j1d_1 = this.m1d_1.i19_1.kotlinx$atomicfu$value;
            this.m8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.m8_1 = 9;
              continue $sm;
            }

            if (this.m1d_1.g1a()) {
              var tmp_0 = this;
              throw recoverStackTrace_0(_get_receiveException__foorc1(this.g1d_1));
            } else {
              this.m8_1 = 3;
              continue $sm;
            }

          case 3:
            this.k1d_1 = this.m1d_1.e19_1.atomicfu$getAndIncrement$long();
            var tmp0 = this.k1d_1;
            var other = get_SEGMENT_SIZE();
            var id = divide(tmp0, fromInt(other));
            var tmp_1 = this;
            var tmp0_0 = this.k1d_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_1.l1d_1 = convertToInt(modulo(tmp0_0, fromInt(other_0)));
            if (!equalsLong(this.j1d_1.f10_1, id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this.m1d_1, id, this.j1d_1);
              if (tmp0_elvis_lhs == null) {
                this.m8_1 = 2;
                var tmp_2 = this;
                continue $sm;
              } else {
                this.o1d_1 = tmp0_elvis_lhs;
                this.m8_1 = 4;
                continue $sm;
              }
            } else {
              this.m8_1 = 5;
              continue $sm;
            }

          case 4:
            this.j1d_1 = this.o1d_1;
            this.m8_1 = 5;
            continue $sm;
          case 5:
            var updCellResult = updateCellReceive(this.m1d_1, this.j1d_1, this.l1d_1, this.k1d_1, this.n1d_1);
            if (updCellResult === get_SUSPEND()) {
              var tmp_3 = this;
              var tmp_4 = this.n1d_1;
              var tmp92_safe_receiver = (!(tmp_4 == null) ? isInterface(tmp_4, Waiter) : false) ? tmp_4 : null;
              if (tmp92_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this.m1d_1, tmp92_safe_receiver, this.j1d_1, this.l1d_1);
              }
              this.j1d_1;
              this.l1d_1;
              this.k1d_1;
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (updCellResult === get_FAILED()) {
                if (compare(this.k1d_1, this.m1d_1.f1a()) < 0) {
                  this.j1d_1.z19();
                }
                this.m8_1 = 2;
                var tmp_5 = this;
                continue $sm;
              } else {
                if (updCellResult === get_SUSPEND_NO_WAITER()) {
                  var tmp0_1 = this.j1d_1;
                  var tmp2 = this.l1d_1;
                  var r = this.k1d_1;
                  this.m8_1 = 6;
                  suspendResult = receiveOnNoWaiterSuspend(this.g1d_1, tmp0_1, tmp2, r, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_6 = this;
                  this.j1d_1.z19();
                  return updCellResult;
                }
              }
            }

          case 6:
            this.i1d_1 = suspendResult;
            this.m8_1 = 7;
            continue $sm;
          case 7:
            this.h1d_1 = this.i1d_1;
            this.m8_1 = 10;
            continue $sm;
          case 8:
            throw this.p8_1;
          case 9:
            if (false) {
              this.m8_1 = 1;
              continue $sm;
            }

            this.m8_1 = 10;
            continue $sm;
          case 10:
            return this.h1d_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 8) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  function BufferedChannel(capacity, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    this.b19_1 = capacity;
    this.c19_1 = onUndeliveredElement;
    // Inline function 'kotlin.require' call
    if (!(this.b19_1 >= 0)) {
      var message = 'Invalid channel capacity: ' + this.b19_1 + ', should be >=0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.d19_1 = atomic$long$1(new Long(0, 0));
    this.e19_1 = atomic$long$1(new Long(0, 0));
    this.f19_1 = atomic$long$1(initialBufferEnd(this.b19_1));
    this.g19_1 = atomic$long$1(_get_bufferEndCounter__2d4hee(this));
    var firstSegment = new ChannelSegment(new Long(0, 0), null, this, 3);
    this.h19_1 = atomic$ref$1(firstSegment);
    this.i19_1 = atomic$ref$1(firstSegment);
    var tmp = this;
    var tmp_0;
    if (_get_isRendezvousOrUnlimited__3mdufi(this)) {
      var tmp_1 = get_NULL_SEGMENT();
      tmp_0 = tmp_1 instanceof ChannelSegment ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = firstSegment;
    }
    tmp.j19_1 = atomic$ref$1(tmp_0);
    var tmp_2 = this;
    var tmp_3;
    if (this.c19_1 == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_3 = BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this);
    }
    tmp_2.k19_1 = tmp_3;
    this.l19_1 = atomic$ref$1(get_NO_CLOSE_CAUSE());
    this.m19_1 = atomic$ref$1(null);
  }
  protoOf(BufferedChannel).f1a = function () {
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var this_0 = this.d19_1.kotlinx$atomicfu$value;
    return bitwiseAnd(this_0, new Long(-1, 268435455));
  };
  protoOf(BufferedChannel).c1b = function () {
    return this.e19_1.kotlinx$atomicfu$value;
  };
  protoOf(BufferedChannel).r1d = function (element, $completion) {
    var tmp = new $sendCOROUTINE$(this, element, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(BufferedChannel).s1d = function (element) {
    if (shouldSendSuspend0(this, this.d19_1.kotlinx$atomicfu$value))
      return Companion_getInstance_0().t1d();
    var tmp4 = get_INTERRUPTED_SEND();
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var segment = this.h19_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = this.d19_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
        var closed = _get_isClosedForSend0__kxgf9m(this, sendersAndCloseStatusCur);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = divide(s, fromInt(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$3 = modulo(s, fromInt(other_0));
        var i = convertToInt(tmp$ret$3);
        if (!equalsLong(segment.f10_1, id)) {
          var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              tmp$ret$0 = Companion_getInstance_0().u1b(this.b1b());
              break $l$block_5;
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        switch (updateCellSend(this, segment, i, element, s, tmp4, closed)) {
          case 0:
            segment.z19();
            tmp$ret$0 = Companion_getInstance_0().h1b(Unit_instance);
            break $l$block_5;
          case 1:
            tmp$ret$0 = Companion_getInstance_0().h1b(Unit_instance);
            break $l$block_5;
          case 2:
            if (closed) {
              segment.p19();
              tmp$ret$0 = Companion_getInstance_0().u1b(this.b1b());
              break $l$block_5;
            }

            var tmp83_safe_receiver = (!(tmp4 == null) ? isInterface(tmp4, Waiter) : false) ? tmp4 : null;
            if (tmp83_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(this, tmp83_safe_receiver, segment, i);
            }

            segment.p19();
            tmp$ret$0 = Companion_getInstance_0().t1d();
            break $l$block_5;
          case 4:
            if (compare(s, this.c1b()) < 0) {
              segment.z19();
            }

            tmp$ret$0 = Companion_getInstance_0().u1b(this.b1b());
            break $l$block_5;
          case 5:
            segment.z19();
            continue $l$loop_0;
          case 3:
            // Inline function 'kotlin.error' call

            var message = 'unexpected';
            throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(BufferedChannel).u1d = function (element) {
    var tmp4 = get_BUFFERED();
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var segment = this.h19_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = this.d19_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
        var closed = _get_isClosedForSend0__kxgf9m(this, sendersAndCloseStatusCur);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = divide(s, fromInt(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$3 = modulo(s, fromInt(other_0));
        var i = convertToInt(tmp$ret$3);
        if (!equalsLong(segment.f10_1, id)) {
          var tmp0_elvis_lhs = findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              return Companion_getInstance_0().u1b(this.b1b());
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        switch (updateCellSend(this, segment, i, element, s, tmp4, closed)) {
          case 0:
            segment.z19();
            return Companion_getInstance_0().h1b(Unit_instance);
          case 1:
            return Companion_getInstance_0().h1b(Unit_instance);
          case 2:
            if (closed) {
              segment.p19();
              return Companion_getInstance_0().u1b(this.b1b());
            }

            var tmp83_safe_receiver = (!(tmp4 == null) ? isInterface(tmp4, Waiter) : false) ? tmp4 : null;
            if (tmp83_safe_receiver == null)
              null;
            else {
              prepareSenderForSuspension(this, tmp83_safe_receiver, segment, i);
            }

            var tmp0 = segment.f10_1;
            // Inline function 'kotlin.Long.times' call

            var other_1 = get_SEGMENT_SIZE();
            // Inline function 'kotlin.Long.plus' call

            var this_0 = multiply(tmp0, fromInt(other_1));
            var tmp$ret$10 = add(this_0, fromInt(i));
            this.y1b(tmp$ret$10);
            return Companion_getInstance_0().h1b(Unit_instance);
          case 4:
            if (compare(s, this.c1b()) < 0) {
              segment.z19();
            }

            return Companion_getInstance_0().u1b(this.b1b());
          case 5:
            segment.z19();
            continue $l$loop_0;
          case 3:
            // Inline function 'kotlin.error' call

            var message = 'unexpected';
            throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(BufferedChannel).k1b = function () {
  };
  protoOf(BufferedChannel).d1b = function () {
  };
  protoOf(BufferedChannel).v1d = function ($completion) {
    var tmp = new $receiveCOROUTINE$(this, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(BufferedChannel).w1d = function () {
    var r = this.e19_1.kotlinx$atomicfu$value;
    var sendersAndCloseStatusCur = this.d19_1.kotlinx$atomicfu$value;
    if (_get_isClosedForReceive0__f7qknl(this, sendersAndCloseStatusCur)) {
      return Companion_getInstance_0().u1b(this.e1a());
    }
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var s = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
    if (compare(r, s) >= 0)
      return Companion_getInstance_0().t1d();
    var tmp2 = get_INTERRUPTED_RCV();
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
      var segment = this.i19_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        if (this.g1a()) {
          tmp$ret$1 = Companion_getInstance_0().u1b(this.e1a());
          break $l$block_0;
        }
        var r_0 = this.e19_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = divide(r_0, fromInt(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$4 = modulo(r_0, fromInt(other_0));
        var i = convertToInt(tmp$ret$4);
        if (!equalsLong(segment.f10_1, id)) {
          var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var updCellResult = updateCellReceive(this, segment, i, r_0, tmp2);
        var tmp_0;
        if (updCellResult === get_SUSPEND()) {
          var tmp92_safe_receiver = (!(tmp2 == null) ? isInterface(tmp2, Waiter) : false) ? tmp2 : null;
          if (tmp92_safe_receiver == null)
            null;
          else {
            prepareReceiverForSuspension(this, tmp92_safe_receiver, segment, i);
          }
          var segm = segment;
          this.o19(r_0);
          segm.p19();
          tmp_0 = new ChannelResult(Companion_getInstance_0().t1d());
        } else if (updCellResult === get_FAILED()) {
          if (compare(r_0, this.f1a()) < 0) {
            segment.z19();
          }
          continue $l$loop_0;
        } else if (updCellResult === get_SUSPEND_NO_WAITER()) {
          // Inline function 'kotlin.error' call
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          segment.z19();
          tmp_0 = new ChannelResult(Companion_getInstance_0().h1b(updCellResult));
        }
        tmp$ret$1 = tmp_0.c1c_1;
        break $l$block_0;
      }
    }
    return tmp$ret$1;
  };
  protoOf(BufferedChannel).y1b = function (globalCellIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    var segment = this.i19_1.kotlinx$atomicfu$value;
    $l$loop_0: while (true) {
      var r = this.e19_1.kotlinx$atomicfu$value;
      // Inline function 'kotlin.Long.plus' call
      var other = this.b19_1;
      var tmp0 = add(r, fromInt(other));
      // Inline function 'kotlin.math.max' call
      var b = _get_bufferEndCounter__2d4hee(this);
      var tmp$ret$2 = compare(tmp0, b) >= 0 ? tmp0 : b;
      if (compare(globalCellIndex, tmp$ret$2) < 0)
        return Unit_instance;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$3 = add(r, fromInt(1));
      if (!this.e19_1.atomicfu$compareAndSet(r, tmp$ret$3))
        continue $l$loop_0;
      // Inline function 'kotlin.Long.div' call
      var other_0 = get_SEGMENT_SIZE();
      var id = divide(r, fromInt(other_0));
      // Inline function 'kotlin.Long.rem' call
      var other_1 = get_SEGMENT_SIZE();
      var tmp$ret$5 = modulo(r, fromInt(other_1));
      var i = convertToInt(tmp$ret$5);
      if (!equalsLong(segment.f10_1, id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      var updCellResult = updateCellReceive(this, segment, i, r, null);
      if (updCellResult === get_FAILED()) {
        if (compare(r, this.f1a()) < 0) {
          segment.z19();
        }
      } else {
        segment.z19();
        var tmp90_safe_receiver = this.c19_1;
        var tmp91_safe_receiver = tmp90_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp90_safe_receiver, updCellResult);
        if (tmp91_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          throw tmp91_safe_receiver;
        }
      }
    }
  };
  protoOf(BufferedChannel).o19 = function (globalIndex) {
    if (_get_isRendezvousOrUnlimited__3mdufi(this))
      return Unit_instance;
    while (compare(_get_bufferEndCounter__2d4hee(this), globalIndex) <= 0) {
    }
    // Inline function 'kotlin.repeat' call
    var times = get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS();
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = _get_bufferEndCounter__2d4hee(this);
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var this_0 = this.g19_1.kotlinx$atomicfu$value;
        var ebCompleted = bitwiseAnd(this_0, new Long(-1, 1073741823));
        if (equalsLong(b, ebCompleted) && equalsLong(b, _get_bufferEndCounter__2d4hee(this)))
          return Unit_instance;
      }
       while (inductionVariable < times);
    var tmp0 = this.g19_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var tmp$ret$5 = bitwiseAnd(cur, new Long(-1, 1073741823));
        var upd = constructEBCompletedAndPauseFlag(tmp$ret$5, true);
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    while (true) {
      var b_0 = _get_bufferEndCounter__2d4hee(this);
      var ebCompletedAndBit = this.g19_1.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
      var ebCompleted_0 = bitwiseAnd(ebCompletedAndBit, new Long(-1, 1073741823));
      // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
      var pauseExpandBuffers = !equalsLong(bitwiseAnd(ebCompletedAndBit, new Long(0, 1073741824)), new Long(0, 0));
      if (equalsLong(b_0, ebCompleted_0) && equalsLong(b_0, _get_bufferEndCounter__2d4hee(this))) {
        var tmp0_0 = this.g19_1;
        $l$block_0: {
          // Inline function 'kotlinx.atomicfu.update' call
          while (true) {
            var cur_0 = tmp0_0.kotlinx$atomicfu$value;
            // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
            var tmp$ret$10 = bitwiseAnd(cur_0, new Long(-1, 1073741823));
            var upd_0 = constructEBCompletedAndPauseFlag(tmp$ret$10, false);
            if (tmp0_0.atomicfu$compareAndSet(cur_0, upd_0)) {
              break $l$block_0;
            }
          }
        }
        return Unit_instance;
      }
      if (!pauseExpandBuffers) {
        this.g19_1.atomicfu$compareAndSet(ebCompletedAndBit, constructEBCompletedAndPauseFlag(ebCompleted_0, true));
      }
    }
  };
  protoOf(BufferedChannel).x1d = function () {
    var tmp = BufferedChannel$registerSelectForReceive$ref();
    var tmp_0 = typeof tmp === 'function' ? tmp : THROW_CCE();
    var tmp_1 = BufferedChannel$processResultSelectReceiveCatching$ref();
    return new SelectClause1Impl(this, tmp_0, typeof tmp_1 === 'function' ? tmp_1 : THROW_CCE(), this.k19_1);
  };
  protoOf(BufferedChannel).i = function () {
    return new BufferedChannelIterator(this);
  };
  protoOf(BufferedChannel).e1a = function () {
    var tmp = this.l19_1.kotlinx$atomicfu$value;
    return (tmp == null ? true : tmp instanceof Error) ? tmp : THROW_CCE();
  };
  protoOf(BufferedChannel).b1b = function () {
    var tmp0_elvis_lhs = this.e1a();
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException('Channel was closed') : tmp0_elvis_lhs;
  };
  protoOf(BufferedChannel).y1d = function () {
  };
  protoOf(BufferedChannel).z1d = function (cause) {
    return this.a1e(cause, false);
  };
  protoOf(BufferedChannel).bx = function (cause) {
    this.c1e(cause);
  };
  protoOf(BufferedChannel).c1e = function (cause) {
    return this.a1e(cause == null ? CancellationException_init_$Create$('Channel was cancelled') : cause, true);
  };
  protoOf(BufferedChannel).a1e = function (cause, cancel) {
    if (cancel) {
      markCancellationStarted(this);
    }
    var closedByThisOperation = this.l19_1.atomicfu$compareAndSet(get_NO_CLOSE_CAUSE(), cause);
    if (cancel) {
      markCancelled(this);
    } else {
      markClosed(this);
    }
    completeCloseOrCancel(this);
    // Inline function 'kotlin.also' call
    this.y1d();
    if (closedByThisOperation) {
      invokeCloseHandler(this);
    }
    return closedByThisOperation;
  };
  protoOf(BufferedChannel).z1b = function () {
    return false;
  };
  protoOf(BufferedChannel).x1b = function () {
    return _get_isClosedForSend0__kxgf9m(this, this.d19_1.kotlinx$atomicfu$value);
  };
  protoOf(BufferedChannel).g1a = function () {
    return _get_isClosedForReceive0__f7qknl(this, this.d19_1.kotlinx$atomicfu$value);
  };
  protoOf(BufferedChannel).a1c = function () {
    $l$loop: while (true) {
      var segment = this.i19_1.kotlinx$atomicfu$value;
      var r = this.c1b();
      var s = this.f1a();
      if (compare(s, r) <= 0)
        return false;
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = divide(r, fromInt(other));
      if (!equalsLong(segment.f10_1, id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (compare(this.i19_1.kotlinx$atomicfu$value.f10_1, id) < 0) {
            return false;
          } else {
            continue $l$loop;
          }
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      segment.z19();
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var tmp$ret$1 = modulo(r, fromInt(other_0));
      var i = convertToInt(tmp$ret$1);
      if (isCellNonEmpty(this, segment, i, r))
        return true;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2 = add(r, fromInt(1));
      this.e19_1.atomicfu$compareAndSet(r, tmp$ret$2);
    }
  };
  protoOf(BufferedChannel).toString = function () {
    var sb = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var this_0 = this.d19_1.kotlinx$atomicfu$value;
    var tmp103_subject = convertToInt(shiftRight(this_0, 60));
    if (tmp103_subject === 2) {
      sb.r7('closed,');
    } else if (tmp103_subject === 3) {
      sb.r7('cancelled,');
    }
    sb.r7('capacity=' + this.b19_1 + ',');
    sb.r7('data=[');
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = listOf([this.i19_1.kotlinx$atomicfu$value, this.h19_1.kotlinx$atomicfu$value, this.j19_1.kotlinx$atomicfu$value]);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      if (!(element === get_NULL_SEGMENT())) {
        destination.h(element);
      }
    }
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.collections.minBy' call
      var iterator = destination.i();
      if (!iterator.j())
        throw NoSuchElementException_init_$Create$();
      var minElem = iterator.k();
      if (!iterator.j()) {
        tmp$ret$4 = minElem;
        break $l$block;
      }
      var minValue = minElem.f10_1;
      do {
        var e = iterator.k();
        var v = e.f10_1;
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.j());
      tmp$ret$4 = minElem;
    }
    var firstSegment = tmp$ret$4;
    var r = this.c1b();
    var s = this.f1a();
    var segment = firstSegment;
    append_elements: while (true) {
      var inductionVariable = 0;
      var last_0 = get_SEGMENT_SIZE();
      if (inductionVariable < last_0)
        process_cell: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0_0 = segment.f10_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_1 = multiply(tmp0_0, fromInt(other));
          var globalCellIndex = add(this_1, fromInt(i));
          if (compare(globalCellIndex, s) >= 0 && compare(globalCellIndex, r) >= 0)
            break append_elements;
          var cellState = segment.x18(i);
          var element_0 = segment.u18(i);
          var tmp;
          if (!(cellState == null) ? isInterface(cellState, CancellableContinuation) : false) {
            tmp = compare(globalCellIndex, r) < 0 && compare(globalCellIndex, s) >= 0 ? 'receive' : compare(globalCellIndex, s) < 0 && compare(globalCellIndex, r) >= 0 ? 'send' : 'cont';
          } else {
            if (!(cellState == null) ? isInterface(cellState, SelectInstance) : false) {
              tmp = compare(globalCellIndex, r) < 0 && compare(globalCellIndex, s) >= 0 ? 'onReceive' : compare(globalCellIndex, s) < 0 && compare(globalCellIndex, r) >= 0 ? 'onSend' : 'select';
            } else {
              if (cellState instanceof ReceiveCatching) {
                tmp = 'receiveCatching';
              } else {
                if (cellState instanceof SendBroadcast) {
                  tmp = 'sendBroadcast';
                } else {
                  if (cellState instanceof WaiterEB) {
                    tmp = 'EB(' + cellState.toString() + ')';
                  } else {
                    if (equals(cellState, get_RESUMING_BY_RCV()) || equals(cellState, get_RESUMING_BY_EB())) {
                      tmp = 'resuming_sender';
                    } else {
                      if (cellState == null || (equals(cellState, get_IN_BUFFER()) || equals(cellState, get_DONE_RCV())) || (equals(cellState, get_POISONED()) || equals(cellState, get_INTERRUPTED_RCV()) || (equals(cellState, get_INTERRUPTED_SEND()) || equals(cellState, get_CHANNEL_CLOSED())))) {
                        continue process_cell;
                      } else {
                        tmp = toString(cellState);
                      }
                    }
                  }
                }
              }
            }
          }
          var cellStateString = tmp;
          if (!(element_0 == null)) {
            sb.r7('(' + cellStateString + ',' + toString_0(element_0) + '),');
          } else {
            sb.r7(cellStateString + ',');
          }
        }
         while (inductionVariable < last_0);
      var tmp0_elvis_lhs = segment.v19();
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break append_elements;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      segment = tmp_0;
    }
    if (last(sb) === _Char___init__impl__6a9atx(44)) {
      sb.hb(sb.a() - 1 | 0);
    }
    sb.r7(']');
    return sb.toString();
  };
  function WaiterEB(waiter) {
    this.e1b_1 = waiter;
  }
  protoOf(WaiterEB).toString = function () {
    return 'WaiterEB(' + toString(this.e1b_1) + ')';
  };
  function initialBufferEnd(capacity) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    switch (capacity) {
      case 0:
        return new Long(0, 0);
      case 2147483647:
        return new Long(-1, 2147483647);
      default:
        return fromInt(capacity);
    }
  }
  function ReceiveCatching() {
  }
  function tryResume0(_this__u8e3s4, value, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_BufferedChannel_kt__d6uc4y();
    // Inline function 'kotlin.let' call
    var token = _this__u8e3s4.az(value, null, onCancellation);
    var tmp;
    if (!(token == null)) {
      _this__u8e3s4.bz(token);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function constructEBCompletedAndPauseFlag(counter, pauseEB) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return add(pauseEB ? new Long(0, 1073741824) : new Long(0, 0), counter);
  }
  function constructSendersAndCloseStatus(counter, closeStatus) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return add(shiftLeft(fromInt(closeStatus), 60), counter);
  }
  function createSegmentFunction() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return createSegment$ref();
  }
  function createSegment(id, prev) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return new ChannelSegment(id, prev, prev.r18(), 0);
  }
  function createSegment$ref() {
    var l = function (p0, p1) {
      return createSegment(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  var properties_initialized_BufferedChannel_kt_58tjvw;
  function _init_properties_BufferedChannel_kt__d6uc4y() {
    if (!properties_initialized_BufferedChannel_kt_58tjvw) {
      properties_initialized_BufferedChannel_kt_58tjvw = true;
      NULL_SEGMENT = new ChannelSegment(new Long(-1, -1), null, null, 0);
      SEGMENT_SIZE = systemProp('kotlinx.coroutines.bufferedChannel.segmentSize', 32);
      EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS = systemProp('kotlinx.coroutines.bufferedChannel.expandBufferCompletionWaitIterations', 10000);
      BUFFERED = new Symbol('BUFFERED');
      IN_BUFFER = new Symbol('SHOULD_BUFFER');
      RESUMING_BY_RCV = new Symbol('S_RESUMING_BY_RCV');
      RESUMING_BY_EB = new Symbol('RESUMING_BY_EB');
      POISONED = new Symbol('POISONED');
      DONE_RCV = new Symbol('DONE_RCV');
      INTERRUPTED_SEND = new Symbol('INTERRUPTED_SEND');
      INTERRUPTED_RCV = new Symbol('INTERRUPTED_RCV');
      CHANNEL_CLOSED = new Symbol('CHANNEL_CLOSED');
      SUSPEND = new Symbol('SUSPEND');
      SUSPEND_NO_WAITER = new Symbol('SUSPEND_NO_WAITER');
      FAILED = new Symbol('FAILED');
      NO_RECEIVE_RESULT = new Symbol('NO_RECEIVE_RESULT');
      CLOSE_HANDLER_CLOSED = new Symbol('CLOSE_HANDLER_CLOSED');
      CLOSE_HANDLER_INVOKED = new Symbol('CLOSE_HANDLER_INVOKED');
      NO_CLOSE_CAUSE = new Symbol('NO_CLOSE_CAUSE');
    }
  }
  function Factory() {
    Factory_instance = this;
    this.d1e_1 = 2147483647;
    this.e1e_1 = 0;
    this.f1e_1 = -1;
    this.g1e_1 = -2;
    this.h1e_1 = -3;
    this.i1e_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.j1e_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function Channel(capacity, onBufferOverflow, onUndeliveredElement) {
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    var tmp;
    switch (capacity) {
      case 0:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(0, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      case -1:
        // Inline function 'kotlin.require' call

        if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
          var message = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }

        tmp = new ConflatedBufferedChannel(1, BufferOverflow_DROP_OLDEST_getInstance(), onUndeliveredElement);
        break;
      case 2147483647:
        tmp = new BufferedChannel(2147483647, onUndeliveredElement);
        break;
      case -2:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(Factory_getInstance().j1e_1, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      default:
        tmp = onBufferOverflow === BufferOverflow_SUSPEND_getInstance() ? new BufferedChannel(capacity, onUndeliveredElement) : new ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement);
        break;
    }
    return tmp;
  }
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function _ChannelResult___get_isClosed__impl__mg7kuu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Closed;
  }
  function ChannelResult__getOrNull_impl_f5e07h($this) {
    var tmp;
    var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp_0 instanceof Failed)) {
      tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    } else {
      tmp = null;
    }
    return tmp;
  }
  function ChannelResult__exceptionOrNull_impl_16ei30($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp112_safe_receiver = tmp instanceof Closed ? tmp : null;
    return tmp112_safe_receiver == null ? null : tmp112_safe_receiver.k1e_1;
  }
  function Failed() {
  }
  protoOf(Failed).toString = function () {
    return 'Failed';
  };
  function Closed(cause) {
    Failed.call(this);
    this.k1e_1 = cause;
  }
  protoOf(Closed).equals = function (other) {
    var tmp;
    if (other instanceof Closed) {
      tmp = equals(this.k1e_1, other.k1e_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Closed).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.k1e_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(Closed).toString = function () {
    return 'Closed(' + toString_0(this.k1e_1) + ')';
  };
  function Companion() {
    Companion_instance_0 = this;
    this.g1b_1 = new Failed();
  }
  protoOf(Companion).h1b = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  protoOf(Companion).t1d = function () {
    return _ChannelResult___init__impl__siwsuf(this.g1b_1);
  };
  protoOf(Companion).u1b = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed(cause));
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function ChannelResult__toString_impl_rrcqu7($this) {
    var tmp;
    if (_ChannelResult___get_holder__impl__pm9gzw($this) instanceof Closed) {
      tmp = _ChannelResult___get_holder__impl__pm9gzw($this).toString();
    } else {
      tmp = 'Value(' + toString_0(_ChannelResult___get_holder__impl__pm9gzw($this)) + ')';
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_lilec2($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function ChannelResult__equals_impl_f471ri($this, other) {
    if (!(other instanceof ChannelResult))
      return false;
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.c1c_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_0();
    this.c1c_1 = holder;
  }
  protoOf(ChannelResult).toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.c1c_1);
  };
  protoOf(ChannelResult).hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.c1c_1);
  };
  protoOf(ChannelResult).equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.c1c_1, other);
  };
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  function SendChannel() {
  }
  function ReceiveChannel() {
  }
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this.p1e_1 = _channel;
  }
  protoOf(ChannelCoroutine).r1d = function (element, $completion) {
    return this.p1e_1.r1d(element, $completion);
  };
  protoOf(ChannelCoroutine).s1d = function (element) {
    return this.p1e_1.s1d(element);
  };
  protoOf(ChannelCoroutine).z1d = function (cause) {
    return this.p1e_1.z1d(cause);
  };
  protoOf(ChannelCoroutine).v1d = function ($completion) {
    return this.p1e_1.v1d($completion);
  };
  protoOf(ChannelCoroutine).w1d = function () {
    return this.p1e_1.w1d();
  };
  protoOf(ChannelCoroutine).i = function () {
    return this.p1e_1.i();
  };
  protoOf(ChannelCoroutine).x1d = function () {
    return this.p1e_1.x1d();
  };
  protoOf(ChannelCoroutine).bx = function (cause) {
    if (this.pw())
      return Unit_instance;
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.wv() : null, null, this);
    } else {
      tmp = cause;
    }
    this.dx(tmp);
  };
  protoOf(ChannelCoroutine).l1e = function (cause, $super) {
    return this.cx(cause, ($super == null ? true : $super instanceof ChannelCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ChannelCoroutine).dx = function (cause) {
    var exception = this.uw(cause);
    this.p1e_1.bx(exception);
    this.gx(exception);
  };
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp;
    if (cause == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_elvis_lhs = cause instanceof CancellationException ? cause : null;
      tmp = tmp0_elvis_lhs == null ? CancellationException_0('Channel was consumed, consumer had failed', cause) : tmp0_elvis_lhs;
    }
    _this__u8e3s4.bx(tmp);
  }
  function trySendImpl($this, element, isSendOp) {
    return $this.d1f_1 === BufferOverflow_DROP_LATEST_getInstance() ? trySendDropLatest($this, element, isSendOp) : $this.u1d(element);
  }
  function trySendDropLatest($this, element, isSendOp) {
    var result = protoOf(BufferedChannel).s1d.call($this, element);
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result) || _ChannelResult___get_isClosed__impl__mg7kuu(result))
      return result;
    if (isSendOp) {
      var tmp118_safe_receiver = $this.c19_1;
      var tmp119_safe_receiver = tmp118_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp118_safe_receiver, element);
      if (tmp119_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        throw tmp119_safe_receiver;
      }
    }
    return Companion_getInstance_0().h1b(Unit_instance);
  }
  function ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    BufferedChannel.call(this, capacity, onUndeliveredElement);
    this.c1f_1 = capacity;
    this.d1f_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    if (!!(this.d1f_1 === BufferOverflow_SUSPEND_getInstance())) {
      var message = 'This implementation does not support suspension for senders, use ' + getKClass(BufferedChannel).y9() + ' instead';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.c1f_1 >= 1)) {
      var message_0 = 'Buffered channel capacity must be at least 1, but ' + this.c1f_1 + ' was specified';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(ConflatedBufferedChannel).z1b = function () {
    return this.d1f_1.equals(BufferOverflow_DROP_OLDEST_getInstance());
  };
  protoOf(ConflatedBufferedChannel).r1d = function (element, $completion) {
    // Inline function 'kotlinx.coroutines.channels.onClosed' call
    var this_0 = trySendImpl(this, element, true);
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(this_0);
    if (tmp instanceof Closed) {
      ChannelResult__exceptionOrNull_impl_16ei30(this_0);
      var tmp116_safe_receiver = this.c19_1;
      var tmp117_safe_receiver = tmp116_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp116_safe_receiver, element);
      if (tmp117_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        addSuppressed(tmp117_safe_receiver, this.b1b());
        throw tmp117_safe_receiver;
      }
      throw this.b1b();
    }
    return Unit_instance;
  };
  protoOf(ConflatedBufferedChannel).s1d = function (element) {
    return trySendImpl(this, element, false);
  };
  function ProducerScope() {
  }
  function produce(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    onCompletion = onCompletion === VOID ? null : onCompletion;
    var channel = Channel(capacity, onBufferOverflow);
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = new ProducerCoroutine(newContext, channel);
    if (!(onCompletion == null)) {
      coroutine.vw(onCompletion);
    }
    coroutine.gw(start, coroutine, block);
    return coroutine;
  }
  function ProducerCoroutine(parentContext, channel) {
    ChannelCoroutine.call(this, parentContext, channel, true, true);
  }
  protoOf(ProducerCoroutine).tv = function () {
    return protoOf(ChannelCoroutine).tv.call(this);
  };
  protoOf(ProducerCoroutine).i1f = function (value) {
    this.p1e_1.b1e();
  };
  protoOf(ProducerCoroutine).uv = function (value) {
    return this.i1f(value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(ProducerCoroutine).vv = function (cause, handled) {
    var processed = this.p1e_1.z1d(cause);
    if (!processed && !handled) {
      handleCoroutineException(this.rv_1, cause);
    }
  };
  protoOf(ProducerCoroutine).l1e = function (cause, $super) {
    return this.cx(cause, ($super == null ? true : $super instanceof ProducerCoroutine) ? $super : THROW_CCE());
  };
  function produce_0(_this__u8e3s4, context, capacity, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? 0 : capacity;
    return produce(_this__u8e3s4, context, capacity, BufferOverflow_SUSPEND_getInstance(), CoroutineStart_DEFAULT_getInstance(), null, block);
  }
  function flow(block) {
    return new SafeFlow(block);
  }
  function SafeFlow(block) {
    AbstractFlow.call(this);
    this.j1f_1 = block;
  }
  protoOf(SafeFlow).k1f = function (collector, $completion) {
    return this.j1f_1(collector, $completion);
  };
  function emitAll(_this__u8e3s4, channel, $completion) {
    return emitAllImpl(_this__u8e3s4, channel, true, $completion);
  }
  function emitAllImpl(_this__u8e3s4, channel, consume, $completion) {
    var tmp = new $emitAllImplCOROUTINE$(_this__u8e3s4, channel, consume, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function receiveAsFlow(_this__u8e3s4) {
    return new ChannelAsFlow(_this__u8e3s4, false);
  }
  function markConsumed($this) {
    if ($this.d1g_1) {
      // Inline function 'kotlin.check' call
      if (!!$this.e1g_1.atomicfu$getAndSet(true)) {
        var message = 'ReceiveChannel.consumeAsFlow can be collected just once';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function $collectCOROUTINE$(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n1g_1 = _this__u8e3s4;
    this.o1g_1 = collector;
  }
  protoOf($collectCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            if (this.n1g_1.q1g_1 === -3) {
              markConsumed(this.n1g_1);
              this.m8_1 = 2;
              suspendResult = emitAllImpl(this.o1g_1, this.n1g_1.c1g_1, this.n1g_1.d1g_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 1;
              suspendResult = protoOf(ChannelFlow).l1f.call(this.n1g_1, this.o1g_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.m8_1 = 3;
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
  function ChannelAsFlow(channel, consume, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? -3 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.c1g_1 = channel;
    this.d1g_1 = consume;
    this.e1g_1 = atomic$boolean$1(false);
  }
  protoOf(ChannelAsFlow).s1g = function (scope, $completion) {
    return emitAllImpl(new SendingCollector(scope), this.c1g_1, this.d1g_1, $completion);
  };
  protoOf(ChannelAsFlow).t1g = function (scope) {
    markConsumed(this);
    var tmp;
    if (this.q1g_1 === -3) {
      tmp = this.c1g_1;
    } else {
      tmp = protoOf(ChannelFlow).t1g.call(this, scope);
    }
    return tmp;
  };
  protoOf(ChannelAsFlow).l1f = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$(this, collector, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(ChannelAsFlow).u1g = function () {
    return 'channel=' + toString(this.c1g_1);
  };
  function $emitAllImplCOROUTINE$(_this__u8e3s4, channel, consume, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u1f_1 = _this__u8e3s4;
    this.v1f_1 = channel;
    this.w1f_1 = consume;
  }
  protoOf($emitAllImplCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 9;
            ensureActive_1(this.u1f_1);
            this.x1f_1 = null;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.n8_1 = 7;
            this.n8_1 = 6;
            this.y1f_1 = this.v1f_1.i();
            this.m8_1 = 2;
            continue $sm;
          case 2:
            this.m8_1 = 3;
            suspendResult = this.y1f_1.v1b(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            if (!suspendResult) {
              this.m8_1 = 5;
              continue $sm;
            }

            var element = this.y1f_1.k();
            this.m8_1 = 4;
            suspendResult = this.u1f_1.x1g(element, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.m8_1 = 2;
            continue $sm;
          case 5:
            this.n8_1 = 9;
            this.m8_1 = 8;
            continue $sm;
          case 6:
            this.n8_1 = 7;
            var tmp_0 = this.p8_1;
            if (tmp_0 instanceof Error) {
              var e = this.p8_1;
              this.x1f_1 = e;
              throw e;
            } else {
              throw this.p8_1;
            }

          case 7:
            this.n8_1 = 9;
            var t = this.p8_1;
            if (this.w1f_1) {
              cancelConsumed(this.v1f_1, this.x1f_1);
            }

            throw t;
          case 8:
            this.n8_1 = 9;
            if (this.w1f_1) {
              cancelConsumed(this.v1f_1, this.x1f_1);
            }

            return Unit_instance;
          case 9:
            throw this.p8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.n8_1 === 9) {
          throw e_0;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e_0;
        }
      }
     while (true);
  };
  function $collectCOROUTINE$_0(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g1h_1 = _this__u8e3s4;
    this.h1h_1 = collector;
  }
  protoOf($collectCOROUTINE$_0).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 5;
            var tmp_0 = this;
            tmp_0.i1h_1 = new SafeCollector(this.h1h_1, this.s8());
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.n8_1 = 4;
            this.m8_1 = 2;
            suspendResult = this.g1h_1.k1f(this.i1h_1, this);
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
            this.i1h_1.w8();
            return Unit_instance;
          case 4:
            this.n8_1 = 5;
            var t = this.p8_1;
            this.i1h_1.w8();
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
  function AbstractFlow() {
  }
  protoOf(AbstractFlow).l1f = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$_0(this, collector, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  function FlowCollector() {
  }
  function get_NO_VALUE() {
    _init_properties_SharedFlow_kt__umasnn();
    return NO_VALUE;
  }
  var NO_VALUE;
  function MutableSharedFlow(replay, extraBufferCapacity, onBufferOverflow) {
    replay = replay === VOID ? 0 : replay;
    extraBufferCapacity = extraBufferCapacity === VOID ? 0 : extraBufferCapacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    _init_properties_SharedFlow_kt__umasnn();
    // Inline function 'kotlin.require' call
    if (!(replay >= 0)) {
      var message = 'replay cannot be negative, but was ' + replay;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(extraBufferCapacity >= 0)) {
      var message_0 = 'extraBufferCapacity cannot be negative, but was ' + extraBufferCapacity;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!(replay > 0 || extraBufferCapacity > 0 || onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()))) {
      var message_1 = 'replay or extraBufferCapacity must be positive with non-default onBufferOverflow strategy ' + onBufferOverflow.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var bufferCapacity0 = replay + extraBufferCapacity | 0;
    var bufferCapacity = bufferCapacity0 < 0 ? 2147483647 : bufferCapacity0;
    return new SharedFlowImpl(replay, bufferCapacity, onBufferOverflow);
  }
  function _get_head__d7jo8b($this) {
    var tmp0 = $this.w1h_1;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = $this.v1h_1;
    return compare(tmp0, b) <= 0 ? tmp0 : b;
  }
  function _get_replaySize__dxgnb1($this) {
    var tmp0 = _get_head__d7jo8b($this);
    // Inline function 'kotlin.Long.plus' call
    var other = $this.x1h_1;
    var tmp$ret$0 = add(tmp0, fromInt(other));
    return convertToInt(subtract(tmp$ret$0, $this.v1h_1));
  }
  function _get_totalSize__xhdb3o($this) {
    return $this.x1h_1 + $this.y1h_1 | 0;
  }
  function _get_bufferEndIndex__d2rk18($this) {
    var tmp0 = _get_head__d7jo8b($this);
    // Inline function 'kotlin.Long.plus' call
    var other = $this.x1h_1;
    return add(tmp0, fromInt(other));
  }
  function _get_queueEndIndex__4m025l($this) {
    var tmp0 = _get_head__d7jo8b($this);
    // Inline function 'kotlin.Long.plus' call
    var other = $this.x1h_1;
    var tmp0_0 = add(tmp0, fromInt(other));
    // Inline function 'kotlin.Long.plus' call
    var other_0 = $this.y1h_1;
    return add(tmp0_0, fromInt(other_0));
  }
  function tryEmitLocked($this, value) {
    if ($this.a1i_1 === 0)
      return tryEmitNoCollectorsLocked($this, value);
    if ($this.x1h_1 >= $this.s1h_1 && compare($this.w1h_1, $this.v1h_1) <= 0) {
      switch ($this.t1h_1.i2_1) {
        case 0:
          return false;
        case 2:
          return true;
        case 1:
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
    }
    enqueueLocked($this, value);
    $this.x1h_1 = $this.x1h_1 + 1 | 0;
    if ($this.x1h_1 > $this.s1h_1) {
      dropOldestLocked($this);
    }
    if (_get_replaySize__dxgnb1($this) > $this.r1h_1) {
      // Inline function 'kotlin.Long.plus' call
      var this_0 = $this.v1h_1;
      var tmp$ret$0 = add(this_0, fromInt(1));
      updateBufferLocked($this, tmp$ret$0, $this.w1h_1, _get_bufferEndIndex__d2rk18($this), _get_queueEndIndex__4m025l($this));
    }
    return true;
  }
  function tryEmitNoCollectorsLocked($this, value) {
    // Inline function 'kotlinx.coroutines.assert' call
    if ($this.r1h_1 === 0)
      return true;
    enqueueLocked($this, value);
    $this.x1h_1 = $this.x1h_1 + 1 | 0;
    if ($this.x1h_1 > $this.r1h_1) {
      dropOldestLocked($this);
    }
    var tmp = $this;
    var tmp0 = _get_head__d7jo8b($this);
    // Inline function 'kotlin.Long.plus' call
    var other = $this.x1h_1;
    tmp.w1h_1 = add(tmp0, fromInt(other));
    return true;
  }
  function dropOldestLocked($this) {
    setBufferAt(ensureNotNull($this.u1h_1), _get_head__d7jo8b($this), null);
    $this.x1h_1 = $this.x1h_1 - 1 | 0;
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b($this);
    var newHead = add(this_0, fromInt(1));
    if (compare($this.v1h_1, newHead) < 0)
      $this.v1h_1 = newHead;
    if (compare($this.w1h_1, newHead) < 0) {
      correctCollectorIndexesOnDropOldest($this, newHead);
    }
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function correctCollectorIndexesOnDropOldest($this, newHead) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.a1i_1 === 0) {
        break $l$block;
      }
      var tmp133_safe_receiver = $this.z1h_1;
      if (tmp133_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp133_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp133_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element == null)) {
            if (compare(element.d1i_1, new Long(0, 0)) >= 0 && compare(element.d1i_1, newHead) < 0) {
              element.d1i_1 = newHead;
            }
          }
        }
      }
    }
    $this.w1h_1 = newHead;
  }
  function enqueueLocked($this, item) {
    var curSize = _get_totalSize__xhdb3o($this);
    var curBuffer = $this.u1h_1;
    var buffer = curBuffer == null ? growBuffer($this, null, 0, 2) : curSize >= curBuffer.length ? growBuffer($this, curBuffer, curSize, imul(curBuffer.length, 2)) : curBuffer;
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b($this);
    var tmp$ret$0 = add(this_0, fromInt(curSize));
    setBufferAt(buffer, tmp$ret$0, item);
  }
  function growBuffer($this, curBuffer, curSize, newSize) {
    // Inline function 'kotlin.check' call
    if (!(newSize > 0)) {
      var message = 'Buffer size overflow';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.also' call
    var this_0 = Array(newSize);
    $this.u1h_1 = this_0;
    var newBuffer = this_0;
    if (curBuffer == null)
      return newBuffer;
    var head = _get_head__d7jo8b($this);
    var inductionVariable = 0;
    if (inductionVariable < curSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.Long.plus' call
        var tmp = add(head, fromInt(i));
        // Inline function 'kotlin.Long.plus' call
        var tmp$ret$6 = add(head, fromInt(i));
        setBufferAt(newBuffer, tmp, getBufferAt(curBuffer, tmp$ret$6));
      }
       while (inductionVariable < curSize);
    return newBuffer;
  }
  function emitSuspend($this, value, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.t10();
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp$ret$4;
    $l$block: {
      if (tryEmitLocked($this, value)) {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$6 = _Result___init__impl__xyqfz8(Unit_instance);
        cancellable.x8(tmp$ret$6);
        resumes = findSlotsToResumeLocked($this, resumes);
        tmp$ret$4 = null;
        break $l$block;
      }
      var tmp0 = _get_head__d7jo8b($this);
      // Inline function 'kotlin.Long.plus' call
      var other = _get_totalSize__xhdb3o($this);
      var tmp$ret$7 = add(tmp0, fromInt(other));
      // Inline function 'kotlin.also' call
      var this_0 = new Emitter($this, tmp$ret$7, value, cancellable);
      enqueueLocked($this, this_0);
      $this.y1h_1 = $this.y1h_1 + 1 | 0;
      if ($this.s1h_1 === 0)
        resumes = findSlotsToResumeLocked($this, resumes);
      tmp$ret$4 = this_0;
    }
    var emitter = tmp$ret$4;
    if (emitter == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      disposeOnCancellation(cancellable, emitter);
    }
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var r = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (r == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$13 = _Result___init__impl__xyqfz8(Unit_instance);
        r.x8(tmp$ret$13);
      }
    }
    return cancellable.xx();
  }
  function cancelEmitter($this, emitter) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (compare(emitter.g1i_1, _get_head__d7jo8b($this)) < 0)
      return Unit_instance;
    var buffer = ensureNotNull($this.u1h_1);
    if (!(getBufferAt(buffer, emitter.g1i_1) === emitter))
      return Unit_instance;
    setBufferAt(buffer, emitter.g1i_1, get_NO_VALUE());
    cleanupTailLocked($this);
    return Unit_instance;
  }
  function updateBufferLocked($this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex) {
    // Inline function 'kotlin.comparisons.minOf' call
    var newHead = compare(newMinCollectorIndex, newReplayIndex) <= 0 ? newMinCollectorIndex : newReplayIndex;
    // Inline function 'kotlinx.coroutines.assert' call
    var inductionVariable = _get_head__d7jo8b($this);
    if (compare(inductionVariable, newHead) < 0)
      do {
        var index = inductionVariable;
        inductionVariable = add(inductionVariable, new Long(1, 0));
        setBufferAt(ensureNotNull($this.u1h_1), index, null);
      }
       while (compare(inductionVariable, newHead) < 0);
    $this.v1h_1 = newReplayIndex;
    $this.w1h_1 = newMinCollectorIndex;
    $this.x1h_1 = convertToInt(subtract(newBufferEndIndex, newHead));
    $this.y1h_1 = convertToInt(subtract(newQueueEndIndex, newBufferEndIndex));
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function cleanupTailLocked($this) {
    if ($this.s1h_1 === 0 && $this.y1h_1 <= 1)
      return Unit_instance;
    var buffer = ensureNotNull($this.u1h_1);
    $l$loop: while (true) {
      var tmp;
      if ($this.y1h_1 > 0) {
        var tmp0 = _get_head__d7jo8b($this);
        // Inline function 'kotlin.Long.plus' call
        var other = _get_totalSize__xhdb3o($this);
        // Inline function 'kotlin.Long.minus' call
        var this_0 = add(tmp0, fromInt(other));
        var tmp$ret$1 = subtract(this_0, fromInt(1));
        tmp = getBufferAt(buffer, tmp$ret$1) === get_NO_VALUE();
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      $this.y1h_1 = $this.y1h_1 - 1 | 0;
      var tmp0_0 = _get_head__d7jo8b($this);
      // Inline function 'kotlin.Long.plus' call
      var other_0 = _get_totalSize__xhdb3o($this);
      var tmp$ret$2 = add(tmp0_0, fromInt(other_0));
      setBufferAt(buffer, tmp$ret$2, null);
    }
  }
  function tryTakeValue($this, slot) {
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var index = tryPeekLocked($this, slot);
    var tmp;
    if (compare(index, new Long(0, 0)) < 0) {
      tmp = get_NO_VALUE();
    } else {
      var oldIndex = slot.d1i_1;
      var newValue = getPeekedValueLockedAt($this, index);
      var tmp_0 = slot;
      // Inline function 'kotlin.Long.plus' call
      tmp_0.d1i_1 = add(index, fromInt(1));
      resumes = $this.j1i(oldIndex);
      tmp = newValue;
    }
    var value = tmp;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var resume = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (resume == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$5 = _Result___init__impl__xyqfz8(Unit_instance);
        resume.x8(tmp$ret$5);
      }
    }
    return value;
  }
  function tryPeekLocked($this, slot) {
    var index = slot.d1i_1;
    if (compare(index, _get_bufferEndIndex__d2rk18($this)) < 0)
      return index;
    if ($this.s1h_1 > 0)
      return new Long(-1, -1);
    if (compare(index, _get_head__d7jo8b($this)) > 0)
      return new Long(-1, -1);
    if ($this.y1h_1 === 0)
      return new Long(-1, -1);
    return index;
  }
  function getPeekedValueLockedAt($this, index) {
    var item = getBufferAt(ensureNotNull($this.u1h_1), index);
    var tmp;
    if (item instanceof Emitter) {
      tmp = item.h1i_1;
    } else {
      tmp = item;
    }
    return tmp;
  }
  function awaitValue($this, slot, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.t10();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    $l$block: {
      var index = tryPeekLocked($this, slot);
      if (compare(index, new Long(0, 0)) < 0) {
        slot.e1i_1 = cancellable;
      } else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$6 = _Result___init__impl__xyqfz8(Unit_instance);
        cancellable.x8(tmp$ret$6);
        break $l$block;
      }
      slot.e1i_1 = cancellable;
    }
    return cancellable.xx();
  }
  function findSlotsToResumeLocked($this, resumesIn) {
    var resumes = resumesIn;
    var resumeCount = resumesIn.length;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.a1i_1 === 0) {
        break $l$block;
      }
      var tmp133_safe_receiver = $this.z1h_1;
      if (tmp133_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp133_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp133_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element == null)) {
            $l$block_1: {
              var tmp0_elvis_lhs = element.e1i_1;
              var tmp;
              if (tmp0_elvis_lhs == null) {
                break $l$block_1;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var cont = tmp;
              if (compare(tryPeekLocked($this, element), new Long(0, 0)) < 0) {
                break $l$block_1;
              }
              if (resumeCount >= resumes.length) {
                var tmp_0 = resumes;
                // Inline function 'kotlin.comparisons.maxOf' call
                var b = imul(2, resumes.length);
                var tmp$ret$4 = Math.max(2, b);
                resumes = copyOf(tmp_0, tmp$ret$4);
              }
              var tmp_1 = resumes;
              var _unary__edvuaz = resumeCount;
              resumeCount = _unary__edvuaz + 1 | 0;
              tmp_1[_unary__edvuaz] = cont;
              element.e1i_1 = null;
            }
          }
        }
      }
    }
    return resumes;
  }
  function Emitter(flow, index, value, cont) {
    this.f1i_1 = flow;
    this.g1i_1 = index;
    this.h1i_1 = value;
    this.i1i_1 = cont;
  }
  protoOf(Emitter).rz = function () {
    return cancelEmitter(this.f1i_1, this);
  };
  function $collectCOROUTINE$_1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s1i_1 = _this__u8e3s4;
    this.t1i_1 = collector;
  }
  protoOf($collectCOROUTINE$_1).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 13;
            this.u1i_1 = this.s1i_1.x1i();
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.n8_1 = 12;
            var tmp_0 = this.t1i_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.m8_1 = 2;
              suspendResult = this.t1i_1.a1j(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 3;
              continue $sm;
            }

          case 2:
            this.m8_1 = 3;
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.w1i_1 = this.s8().z8(Key_instance_3);
            this.m8_1 = 4;
            continue $sm;
          case 4:
            if (!true) {
              this.m8_1 = 10;
              continue $sm;
            }

            this.m8_1 = 5;
            continue $sm;
          case 5:
            if (!true) {
              this.m8_1 = 8;
              continue $sm;
            }

            this.v1i_1 = tryTakeValue(this.s1i_1, this.u1i_1);
            if (!(this.v1i_1 === get_NO_VALUE())) {
              this.m8_1 = 8;
              continue $sm;
            } else {
              this.m8_1 = 6;
              continue $sm;
            }

          case 6:
            this.m8_1 = 7;
            suspendResult = awaitValue(this.s1i_1, this.u1i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.m8_1 = 5;
            continue $sm;
          case 8:
            var tmp121_safe_receiver = this.w1i_1;
            if (tmp121_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp121_safe_receiver);
            }

            this.m8_1 = 9;
            suspendResult = this.t1i_1.x1g(this.v1i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.m8_1 = 4;
            continue $sm;
          case 10:
            this.n8_1 = 13;
            this.m8_1 = 11;
            continue $sm;
          case 11:
            this.n8_1 = 13;
            this.s1i_1.b1j(this.u1i_1);
            return Unit_instance;
          case 12:
            this.n8_1 = 13;
            var t = this.p8_1;
            this.s1i_1.b1j(this.u1i_1);
            throw t;
          case 13:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 13) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  function SharedFlowImpl(replay, bufferCapacity, onBufferOverflow) {
    AbstractSharedFlow.call(this);
    this.r1h_1 = replay;
    this.s1h_1 = bufferCapacity;
    this.t1h_1 = onBufferOverflow;
    this.u1h_1 = null;
    this.v1h_1 = new Long(0, 0);
    this.w1h_1 = new Long(0, 0);
    this.x1h_1 = 0;
    this.y1h_1 = 0;
  }
  protoOf(SharedFlowImpl).c1j = function () {
    var tmp = ensureNotNull(this.u1h_1);
    var tmp0 = this.v1h_1;
    // Inline function 'kotlin.Long.plus' call
    var other = _get_replaySize__dxgnb1(this);
    // Inline function 'kotlin.Long.minus' call
    var this_0 = add(tmp0, fromInt(other));
    var tmp$ret$1 = subtract(this_0, fromInt(1));
    return getBufferAt(tmp, tmp$ret$1);
  };
  protoOf(SharedFlowImpl).d1j = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$_1(this, collector, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(SharedFlowImpl).l1f = function (collector, $completion) {
    return this.d1j(collector, $completion);
  };
  protoOf(SharedFlowImpl).e1j = function (value) {
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp;
    if (tryEmitLocked(this, value)) {
      resumes = findSlotsToResumeLocked(this, resumes);
      tmp = true;
    } else {
      tmp = false;
    }
    var emitted = tmp;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (cont == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_instance);
        cont.x8(tmp$ret$4);
      }
    }
    return emitted;
  };
  protoOf(SharedFlowImpl).x1g = function (value, $completion) {
    if (this.e1j(value))
      return Unit_instance;
    return emitSuspend(this, value, $completion);
  };
  protoOf(SharedFlowImpl).f1j = function () {
    var index = this.v1h_1;
    if (compare(index, this.w1h_1) < 0)
      this.w1h_1 = index;
    return index;
  };
  protoOf(SharedFlowImpl).j1i = function (oldIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (compare(oldIndex, this.w1h_1) > 0)
      return get_EMPTY_RESUMES();
    var head = _get_head__d7jo8b(this);
    // Inline function 'kotlin.Long.plus' call
    var other = this.x1h_1;
    var newMinCollectorIndex = add(head, fromInt(other));
    if (this.s1h_1 === 0 && this.y1h_1 > 0) {
      var _unary__edvuaz = newMinCollectorIndex;
      newMinCollectorIndex = add(_unary__edvuaz, get_ONE());
    }
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if (this.a1i_1 === 0) {
        break $l$block;
      }
      var tmp133_safe_receiver = this.z1h_1;
      if (tmp133_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp133_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp133_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element == null)) {
            if (compare(element.d1i_1, new Long(0, 0)) >= 0 && compare(element.d1i_1, newMinCollectorIndex) < 0)
              newMinCollectorIndex = element.d1i_1;
          }
        }
      }
    }
    // Inline function 'kotlinx.coroutines.assert' call
    if (compare(newMinCollectorIndex, this.w1h_1) <= 0)
      return get_EMPTY_RESUMES();
    var newBufferEndIndex = _get_bufferEndIndex__d2rk18(this);
    var tmp;
    if (this.a1i_1 > 0) {
      var newBufferSize0 = convertToInt(subtract(newBufferEndIndex, newMinCollectorIndex));
      var tmp0 = this.y1h_1;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = this.s1h_1 - newBufferSize0 | 0;
      tmp = Math.min(tmp0, b);
    } else {
      tmp = this.y1h_1;
    }
    var maxResumeCount = tmp;
    var resumes = get_EMPTY_RESUMES();
    var tmp0_0 = newBufferEndIndex;
    // Inline function 'kotlin.Long.plus' call
    var other_0 = this.y1h_1;
    var newQueueEndIndex = add(tmp0_0, fromInt(other_0));
    if (maxResumeCount > 0) {
      // Inline function 'kotlin.arrayOfNulls' call
      resumes = Array(maxResumeCount);
      var resumeCount = 0;
      var buffer = ensureNotNull(this.u1h_1);
      var inductionVariable_0 = newBufferEndIndex;
      if (compare(inductionVariable_0, newQueueEndIndex) < 0)
        $l$loop: do {
          var curEmitterIndex = inductionVariable_0;
          inductionVariable_0 = add(inductionVariable_0, new Long(1, 0));
          var emitter = getBufferAt(buffer, curEmitterIndex);
          if (!(emitter === get_NO_VALUE())) {
            if (!(emitter instanceof Emitter))
              THROW_CCE();
            var tmp_0 = resumes;
            var _unary__edvuaz_0 = resumeCount;
            resumeCount = _unary__edvuaz_0 + 1 | 0;
            tmp_0[_unary__edvuaz_0] = emitter.i1i_1;
            setBufferAt(buffer, curEmitterIndex, get_NO_VALUE());
            setBufferAt(buffer, newBufferEndIndex, emitter.h1i_1);
            var _unary__edvuaz_1 = newBufferEndIndex;
            newBufferEndIndex = add(_unary__edvuaz_1, get_ONE());
            if (resumeCount >= maxResumeCount)
              break $l$loop;
          }
        }
         while (compare(inductionVariable_0, newQueueEndIndex) < 0);
    }
    var newBufferSize1 = convertToInt(subtract(newBufferEndIndex, head));
    if (this.a1i_1 === 0)
      newMinCollectorIndex = newBufferEndIndex;
    var tmp0_1 = this.v1h_1;
    var tmp0_2 = newBufferEndIndex;
    // Inline function 'kotlin.comparisons.minOf' call
    var a = this.r1h_1;
    // Inline function 'kotlin.Long.minus' call
    var other_1 = Math.min(a, newBufferSize1);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_0 = subtract(tmp0_2, fromInt(other_1));
    var newReplayIndex = compare(tmp0_1, b_0) >= 0 ? tmp0_1 : b_0;
    if (this.s1h_1 === 0 && compare(newReplayIndex, newQueueEndIndex) < 0 && equals(getBufferAt(ensureNotNull(this.u1h_1), newReplayIndex), get_NO_VALUE())) {
      var _unary__edvuaz_2 = newBufferEndIndex;
      newBufferEndIndex = add(_unary__edvuaz_2, get_ONE());
      var _unary__edvuaz_3 = newReplayIndex;
      newReplayIndex = add(_unary__edvuaz_3, get_ONE());
    }
    updateBufferLocked(this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex);
    cleanupTailLocked(this);
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(resumes.length === 0))
      resumes = findSlotsToResumeLocked(this, resumes);
    return resumes;
  };
  protoOf(SharedFlowImpl).g1j = function () {
    return new SharedFlowSlot();
  };
  protoOf(SharedFlowImpl).h1j = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return Array(size);
  };
  function SharedFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.d1i_1 = new Long(-1, -1);
    this.e1i_1 = null;
  }
  protoOf(SharedFlowSlot).i1j = function (flow) {
    if (compare(this.d1i_1, new Long(0, 0)) >= 0)
      return false;
    this.d1i_1 = flow.f1j();
    return true;
  };
  protoOf(SharedFlowSlot).j1j = function (flow) {
    return this.i1j(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  protoOf(SharedFlowSlot).k1j = function (flow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var oldIndex = this.d1i_1;
    this.d1i_1 = new Long(-1, -1);
    this.e1i_1 = null;
    return flow.j1i(oldIndex);
  };
  protoOf(SharedFlowSlot).l1j = function (flow) {
    return this.k1j(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  function getBufferAt(_this__u8e3s4, index) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[convertToInt(index) & (_this__u8e3s4.length - 1 | 0)];
  }
  function setBufferAt(_this__u8e3s4, index, item) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[convertToInt(index) & (_this__u8e3s4.length - 1 | 0)] = item;
  }
  var properties_initialized_SharedFlow_kt_tmefor;
  function _init_properties_SharedFlow_kt__umasnn() {
    if (!properties_initialized_SharedFlow_kt_tmefor) {
      properties_initialized_SharedFlow_kt_tmefor = true;
      NO_VALUE = new Symbol('NO_VALUE');
    }
  }
  function get_NONE() {
    _init_properties_StateFlow_kt__eu9yi5();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    _init_properties_StateFlow_kt__eu9yi5();
    return PENDING;
  }
  var PENDING;
  function MutableStateFlow(value) {
    _init_properties_StateFlow_kt__eu9yi5();
    return new StateFlowImpl(value == null ? get_NULL() : value);
  }
  function updateState($this, expectedState, newState) {
    var curSequence;
    var curSlots;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var oldState = $this.q1j_1.kotlinx$atomicfu$value;
    if (!(expectedState == null) && !equals(oldState, expectedState))
      return false;
    if (equals(oldState, newState))
      return true;
    $this.q1j_1.kotlinx$atomicfu$value = newState;
    curSequence = $this.r1j_1;
    if ((curSequence & 1) === 0) {
      curSequence = curSequence + 1 | 0;
      $this.r1j_1 = curSequence;
    } else {
      $this.r1j_1 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this.z1h_1;
    while (true) {
      var tmp127_safe_receiver = curSlots;
      if (tmp127_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp127_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp127_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          if (element == null)
            null;
          else {
            element.t1j();
          }
        }
      }
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
      if ($this.r1j_1 === curSequence) {
        $this.r1j_1 = curSequence + 1 | 0;
        return true;
      }
      curSequence = $this.r1j_1;
      curSlots = $this.z1h_1;
    }
  }
  function $collectCOROUTINE$_2(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c1k_1 = _this__u8e3s4;
    this.d1k_1 = collector;
  }
  protoOf($collectCOROUTINE$_2).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 12;
            this.e1k_1 = this.c1k_1.x1i();
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.n8_1 = 11;
            var tmp_0 = this.d1k_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.m8_1 = 2;
              suspendResult = this.d1k_1.a1j(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 3;
              continue $sm;
            }

          case 2:
            this.m8_1 = 3;
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.h1k_1 = this.s8().z8(Key_instance_3);
            this.f1k_1 = null;
            this.m8_1 = 4;
            continue $sm;
          case 4:
            if (!true) {
              this.m8_1 = 9;
              continue $sm;
            }

            this.g1k_1 = this.c1k_1.q1j_1.kotlinx$atomicfu$value;
            var tmp129_safe_receiver = this.h1k_1;
            if (tmp129_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp129_safe_receiver);
            }

            if (this.f1k_1 == null || !equals(this.f1k_1, this.g1k_1)) {
              this.m8_1 = 5;
              var tmp0 = get_NULL();
              var value = this.g1k_1;
              suspendResult = this.d1k_1.x1g(value === tmp0 ? null : value, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 6;
              continue $sm;
            }

          case 5:
            this.f1k_1 = this.g1k_1;
            this.m8_1 = 6;
            continue $sm;
          case 6:
            if (!this.e1k_1.j1k()) {
              this.m8_1 = 7;
              suspendResult = this.e1k_1.i1k(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 8;
              continue $sm;
            }

          case 7:
            this.m8_1 = 8;
            continue $sm;
          case 8:
            this.m8_1 = 4;
            continue $sm;
          case 9:
            this.n8_1 = 12;
            this.m8_1 = 10;
            continue $sm;
          case 10:
            this.n8_1 = 12;
            this.c1k_1.b1j(this.e1k_1);
            return Unit_instance;
          case 11:
            this.n8_1 = 12;
            var t = this.p8_1;
            this.c1k_1.b1j(this.e1k_1);
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
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this.q1j_1 = atomic$ref$1(initialState);
    this.r1j_1 = 0;
  }
  protoOf(StateFlowImpl).k1k = function (value) {
    updateState(this, null, value == null ? get_NULL() : value);
  };
  protoOf(StateFlowImpl).x1 = function () {
    var tmp0 = get_NULL();
    // Inline function 'kotlinx.coroutines.internal.Symbol.unbox' call
    var value = this.q1j_1.kotlinx$atomicfu$value;
    return value === tmp0 ? null : value;
  };
  protoOf(StateFlowImpl).l1k = function (expect, update) {
    var tmp = expect == null ? get_NULL() : expect;
    return updateState(this, tmp, update == null ? get_NULL() : update);
  };
  protoOf(StateFlowImpl).e1j = function (value) {
    this.k1k(value);
    return true;
  };
  protoOf(StateFlowImpl).x1g = function (value, $completion) {
    this.k1k(value);
    return Unit_instance;
  };
  protoOf(StateFlowImpl).d1j = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$_2(this, collector, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(StateFlowImpl).l1f = function (collector, $completion) {
    return this.d1j(collector, $completion);
  };
  protoOf(StateFlowImpl).g1j = function () {
    return new StateFlowSlot();
  };
  protoOf(StateFlowImpl).h1j = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return Array(size);
  };
  function StateFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.s1j_1 = new WorkaroundAtomicReference(null);
  }
  protoOf(StateFlowSlot).m1k = function (flow) {
    if (!(get_value(this.s1j_1) == null))
      return false;
    set_value(this.s1j_1, get_NONE());
    return true;
  };
  protoOf(StateFlowSlot).j1j = function (flow) {
    return this.m1k(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).n1k = function (flow) {
    set_value(this.s1j_1, null);
    return get_EMPTY_RESUMES();
  };
  protoOf(StateFlowSlot).l1j = function (flow) {
    return this.n1k(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).t1j = function () {
    // Inline function 'kotlinx.coroutines.internal.loop' call
    var this_0 = this.s1j_1;
    while (true) {
      var state = get_value(this_0);
      if (state == null)
        return Unit_instance;
      else if (state === get_PENDING())
        return Unit_instance;
      else if (state === get_NONE()) {
        if (this.s1j_1.p1k(state, get_PENDING()))
          return Unit_instance;
      } else {
        if (this.s1j_1.p1k(state, get_NONE())) {
          // Inline function 'kotlin.coroutines.resume' call
          var this_1 = state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          // Inline function 'kotlin.Companion.success' call
          var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
          this_1.x8(tmp$ret$3);
          return Unit_instance;
        }
      }
    }
  };
  protoOf(StateFlowSlot).j1k = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.coroutines.assert' call
    return ensureNotNull(this.s1j_1.q1k(get_NONE())) === get_PENDING();
  };
  protoOf(StateFlowSlot).i1k = function ($completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.t10();
    $l$block: {
      // Inline function 'kotlinx.coroutines.assert' call
      if (this.s1j_1.p1k(get_NONE(), cancellable)) {
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$5 = _Result___init__impl__xyqfz8(Unit_instance);
      cancellable.x8(tmp$ret$5);
    }
    return cancellable.xx();
  };
  var properties_initialized_StateFlow_kt_nsqikx;
  function _init_properties_StateFlow_kt__eu9yi5() {
    if (!properties_initialized_StateFlow_kt_nsqikx) {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function get_EMPTY_RESUMES() {
    _init_properties_AbstractSharedFlow_kt__h2xygb();
    return EMPTY_RESUMES;
  }
  var EMPTY_RESUMES;
  function AbstractSharedFlow() {
    SynchronizedObject.call(this);
    this.z1h_1 = null;
    this.a1i_1 = 0;
    this.b1i_1 = 0;
    this.c1i_1 = null;
  }
  protoOf(AbstractSharedFlow).x1i = function () {
    var subscriptionCount;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var curSlots = this.z1h_1;
    var tmp;
    if (curSlots == null) {
      // Inline function 'kotlin.also' call
      var this_0 = this.h1j(2);
      this.z1h_1 = this_0;
      tmp = this_0;
    } else {
      var tmp_0;
      if (this.a1i_1 >= curSlots.length) {
        // Inline function 'kotlin.also' call
        var this_1 = copyOf(curSlots, imul(2, curSlots.length));
        this.z1h_1 = this_1;
        tmp_0 = this_1;
      } else {
        tmp_0 = curSlots;
      }
      tmp = tmp_0;
    }
    var slots = tmp;
    var index = this.b1i_1;
    var slot;
    $l$loop: while (true) {
      var tmp0_elvis_lhs = slots[index];
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_2 = this.g1j();
        slots[index] = this_2;
        tmp_1 = this_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      slot = tmp_1;
      index = index + 1 | 0;
      if (index >= slots.length)
        index = 0;
      if ((slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).j1j(this))
        break $l$loop;
    }
    this.b1i_1 = index;
    this.a1i_1 = this.a1i_1 + 1 | 0;
    subscriptionCount = this.c1i_1;
    var slot_0 = slot;
    if (subscriptionCount == null)
      null;
    else
      subscriptionCount.d1l(1);
    return slot_0;
  };
  protoOf(AbstractSharedFlow).b1j = function (slot) {
    var subscriptionCount;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.a1i_1 = this.a1i_1 - 1 | 0;
    subscriptionCount = this.c1i_1;
    if (this.a1i_1 === 0)
      this.b1i_1 = 0;
    var resumes = (slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).l1j(this);
    var inductionVariable = 0;
    var last = resumes.length;
    while (inductionVariable < last) {
      var cont = resumes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (cont == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_instance);
        cont.x8(tmp$ret$4);
      }
    }
    if (subscriptionCount == null)
      null;
    else
      subscriptionCount.d1l(-1);
  };
  function AbstractSharedFlowSlot() {
  }
  var properties_initialized_AbstractSharedFlow_kt_2mpafr;
  function _init_properties_AbstractSharedFlow_kt__h2xygb() {
    if (!properties_initialized_AbstractSharedFlow_kt_2mpafr) {
      properties_initialized_AbstractSharedFlow_kt_2mpafr = true;
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_RESUMES = Array(0);
    }
  }
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation) {
    this.m1l_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).o1l = function (it, $completion) {
    var tmp = this.p1l(it, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).e9 = function (p1, $completion) {
    return this.o1l((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.m1l_1.s1g(this.n1l_1, this);
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
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).p1l = function (it, completion) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this.m1l_1, completion);
    i.n1l_1 = it;
    return i;
  };
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this$0, resultContinuation) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.o1l(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow$collect$slambda($collector, this$0, resultContinuation) {
    this.y1l_1 = $collector;
    this.z1l_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$collect$slambda).b1m = function ($this$coroutineScope, $completion) {
    var tmp = this.c1m($this$coroutineScope, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(ChannelFlow$collect$slambda).e9 = function (p1, $completion) {
    return this.b1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$collect$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = emitAll(this.y1l_1, this.z1l_1.t1g(this.a1m_1), this);
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
  protoOf(ChannelFlow$collect$slambda).c1m = function ($this$coroutineScope, completion) {
    var i = new ChannelFlow$collect$slambda(this.y1l_1, this.z1l_1, completion);
    i.a1m_1 = $this$coroutineScope;
    return i;
  };
  function ChannelFlow$collect$slambda_0($collector, this$0, resultContinuation) {
    var i = new ChannelFlow$collect$slambda($collector, this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.b1m($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow(context, capacity, onBufferOverflow) {
    this.p1g_1 = context;
    this.q1g_1 = capacity;
    this.r1g_1 = onBufferOverflow;
    // Inline function 'kotlinx.coroutines.assert' call
  }
  protoOf(ChannelFlow).v1g = function () {
    return ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this, null);
  };
  protoOf(ChannelFlow).w1g = function () {
    return this.q1g_1 === -3 ? -2 : this.q1g_1;
  };
  protoOf(ChannelFlow).t1g = function (scope) {
    return produce(scope, this.p1g_1, this.w1g(), this.r1g_1, CoroutineStart_ATOMIC_getInstance(), VOID, this.v1g());
  };
  protoOf(ChannelFlow).l1f = function (collector, $completion) {
    return coroutineScope(ChannelFlow$collect$slambda_0(collector, this, null), $completion);
  };
  protoOf(ChannelFlow).u1g = function () {
    return null;
  };
  protoOf(ChannelFlow).toString = function () {
    var props = ArrayList_init_$Create$(4);
    var tmp134_safe_receiver = this.u1g();
    if (tmp134_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      props.h(tmp134_safe_receiver);
    }
    if (!(this.p1g_1 === EmptyCoroutineContext_getInstance())) {
      props.h('context=' + toString(this.p1g_1));
    }
    if (!(this.q1g_1 === -3)) {
      props.h('capacity=' + this.q1g_1);
    }
    if (!this.r1g_1.equals(BufferOverflow_SUSPEND_getInstance())) {
      props.h('onBufferOverflow=' + this.r1g_1.toString());
    }
    return get_classSimpleName(this) + '[' + joinToString(props, ', ') + ']';
  };
  function scopedFlow(block) {
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new scopedFlow$$inlined$unsafeFlow$1(block);
  }
  function flowScope(block, $completion) {
    var coroutine = new FlowCoroutine($completion.s8(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function FlowCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(FlowCoroutine).fx = function (cause) {
    if (cause instanceof ChildCancelledException)
      return true;
    return this.hx(cause);
  };
  function scopedFlow$o$collect$slambda($block, $$this$flow, resultContinuation) {
    this.p1m_1 = $block;
    this.q1m_1 = $$this$flow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(scopedFlow$o$collect$slambda).b1m = function ($this$flowScope, $completion) {
    var tmp = this.c1m($this$flowScope, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(scopedFlow$o$collect$slambda).e9 = function (p1, $completion) {
    return this.b1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(scopedFlow$o$collect$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.p1m_1(this.r1m_1, this.q1m_1, this);
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
  protoOf(scopedFlow$o$collect$slambda).c1m = function ($this$flowScope, completion) {
    var i = new scopedFlow$o$collect$slambda(this.p1m_1, this.q1m_1, completion);
    i.r1m_1 = $this$flowScope;
    return i;
  };
  function scopedFlow$o$collect$slambda_0($block, $$this$flow, resultContinuation) {
    var i = new scopedFlow$o$collect$slambda($block, $$this$flow, resultContinuation);
    var l = function ($this$flowScope, $completion) {
      return i.b1m($this$flowScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$_3(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a1n_1 = _this__u8e3s4;
    this.b1n_1 = collector;
  }
  protoOf($collectCOROUTINE$_3).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            var $this$flow = this.b1n_1;
            this.m8_1 = 1;
            suspendResult = flowScope(scopedFlow$o$collect$slambda_0(this.a1n_1.c1n_1, $this$flow, null), this);
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
  function scopedFlow$$inlined$unsafeFlow$1($block) {
    this.c1n_1 = $block;
  }
  protoOf(scopedFlow$$inlined$unsafeFlow$1).d1n = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$_3(this, collector, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(scopedFlow$$inlined$unsafeFlow$1).l1f = function (collector, $completion) {
    return this.d1n(collector, $completion);
  };
  function get_NULL() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return NULL;
  }
  var NULL;
  var UNINITIALIZED;
  function get_DONE() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return DONE;
  }
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function _init_properties_NullSurrogate_kt__n2yti9() {
    if (!properties_initialized_NullSurrogate_kt_39v8bl) {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function checkContext(_this__u8e3s4, currentContext) {
    var result = currentContext.if(0, checkContext$lambda(_this__u8e3s4));
    if (!(result === _this__u8e3s4.l1h_1)) {
      // Inline function 'kotlin.error' call
      var message = 'Flow invariant is violated:\n' + ('\t\tFlow was collected in ' + toString(_this__u8e3s4.k1h_1) + ',\n') + ('\t\tbut emission happened in ' + toString(currentContext) + '.\n') + "\t\tPlease refer to 'flow' documentation or use 'flowOn' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function transitiveCoroutineParent(_this__u8e3s4, collectJob) {
    var $this = _this__u8e3s4;
    var collectJob_0 = collectJob;
    $l$1: do {
      $l$0: do {
        if ($this === null)
          return null;
        if ($this === collectJob_0)
          return $this;
        if (!($this instanceof ScopeCoroutine))
          return $this;
        var tmp0 = $this.mw();
        var tmp1 = collectJob_0;
        $this = tmp0;
        collectJob_0 = tmp1;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function checkContext$lambda($this_checkContext) {
    return function (count, element) {
      var key = element.w1();
      var collectElement = $this_checkContext.k1h_1.z8(key);
      var tmp;
      if (!(key === Key_instance_3)) {
        return !(element === collectElement) ? -2147483648 : count + 1 | 0;
      }
      var collectJob = (collectElement == null ? true : isInterface(collectElement, Job)) ? collectElement : THROW_CCE();
      var emissionParentJob = transitiveCoroutineParent(isInterface(element, Job) ? element : THROW_CCE(), collectJob);
      var tmp_0;
      if (!(emissionParentJob === collectJob)) {
        // Inline function 'kotlin.error' call
        var message = 'Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n' + ('\t\tChild of ' + toString_0(emissionParentJob) + ', expected child of ' + toString_0(collectJob) + '.\n') + '\t\tFlowCollector is not thread-safe and concurrent emissions are prohibited.\n' + "\t\tTo mitigate this restriction please use 'channelFlow' builder instead of 'flow'";
        throw IllegalStateException_init_$Create$(toString(message));
      }
      return collectJob == null ? count : count + 1 | 0;
    };
  }
  function SendingCollector(channel) {
    this.e1n_1 = channel;
  }
  protoOf(SendingCollector).x1g = function (value, $completion) {
    return this.e1n_1.r1d(value, $completion);
  };
  function debounce(_this__u8e3s4, timeout) {
    return debounce_0(_this__u8e3s4, toDelayMillis(timeout));
  }
  function debounce_0(_this__u8e3s4, timeoutMillis) {
    // Inline function 'kotlin.require' call
    if (!(compare(timeoutMillis, new Long(0, 0)) >= 0)) {
      var message = 'Debounce timeout should not be negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (equalsLong(timeoutMillis, new Long(0, 0)))
      return _this__u8e3s4;
    return debounceInternal(_this__u8e3s4, debounce$lambda(timeoutMillis));
  }
  function debounceInternal(_this__u8e3s4, timeoutMillisSelector) {
    return scopedFlow(debounceInternal$slambda_0(timeoutMillisSelector, _this__u8e3s4, null));
  }
  function debounce$lambda($timeoutMillis) {
    return function (it) {
      return $timeoutMillis;
    };
  }
  function debounceInternal$slambda$slambda$slambda($this_produce, resultContinuation) {
    this.n1n_1 = $this_produce;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda$slambda$slambda).p1n = function (value, $completion) {
    var tmp = this.q1n(value, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(debounceInternal$slambda$slambda$slambda).e9 = function (p1, $completion) {
    return this.p1n(p1, $completion);
  };
  protoOf(debounceInternal$slambda$slambda$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            var tmp0_elvis_lhs = this.o1n_1;
            suspendResult = this.n1n_1.r1d(tmp0_elvis_lhs == null ? get_NULL() : tmp0_elvis_lhs, this);
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
  protoOf(debounceInternal$slambda$slambda$slambda).q1n = function (value, completion) {
    var i = new debounceInternal$slambda$slambda$slambda(this.n1n_1, completion);
    i.o1n_1 = value;
    return i;
  };
  function debounceInternal$slambda$slambda$slambda_0($this_produce, resultContinuation) {
    var i = new debounceInternal$slambda$slambda$slambda($this_produce, resultContinuation);
    var l = function (value, $completion) {
      return i.p1n(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.r1n_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).x1g = function (value, $completion) {
    return this.r1n_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).r2 = function () {
    return this.r1n_1;
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
  function debounceInternal$slambda$slambda($this_debounceInternal, resultContinuation) {
    this.a1o_1 = $this_debounceInternal;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda$slambda).c1o = function ($this$produce, $completion) {
    var tmp = this.d1o($this$produce, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(debounceInternal$slambda$slambda).e9 = function (p1, $completion) {
    return this.c1o((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(debounceInternal$slambda$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            var tmp_0 = debounceInternal$slambda$slambda$slambda_0(this.b1o_1, null);
            suspendResult = this.a1o_1.l1f(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
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
  protoOf(debounceInternal$slambda$slambda).d1o = function ($this$produce, completion) {
    var i = new debounceInternal$slambda$slambda(this.a1o_1, completion);
    i.b1o_1 = $this$produce;
    return i;
  };
  function debounceInternal$slambda$slambda_0($this_debounceInternal, resultContinuation) {
    var i = new debounceInternal$slambda$slambda($this_debounceInternal, resultContinuation);
    var l = function ($this$produce, $completion) {
      return i.c1o($this$produce, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function debounceInternal$slambda$slambda_1($downstream, $lastValue, resultContinuation) {
    this.m1o_1 = $downstream;
    this.n1o_1 = $lastValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda$slambda_1).o1o = function ($completion) {
    var tmp = this.p1o($completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(debounceInternal$slambda$slambda_1).q1o = function ($completion) {
    return this.o1o($completion);
  };
  protoOf(debounceInternal$slambda$slambda_1).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            var tmp0 = get_NULL();
            var value = this.n1o_1._v;
            suspendResult = this.m1o_1.x1g(value === tmp0 ? null : value, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n1o_1._v = null;
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
  protoOf(debounceInternal$slambda$slambda_1).p1o = function (completion) {
    return new debounceInternal$slambda$slambda_1(this.m1o_1, this.n1o_1, completion);
  };
  function debounceInternal$slambda$slambda_2($downstream, $lastValue, resultContinuation) {
    var i = new debounceInternal$slambda$slambda_1($downstream, $lastValue, resultContinuation);
    var l = function ($completion) {
      return i.o1o($completion);
    };
    l.$arity = 0;
    return l;
  }
  function debounceInternal$slambda$slambda_3($lastValue, $downstream, resultContinuation) {
    this.z1o_1 = $lastValue;
    this.a1p_1 = $downstream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda$slambda_3).d1p = function (value, $completion) {
    var tmp = this.e1p(value, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(debounceInternal$slambda$slambda_3).e9 = function (p1, $completion) {
    return this.d1p(p1 instanceof ChannelResult ? p1.c1c_1 : THROW_CCE(), $completion);
  };
  protoOf(debounceInternal$slambda$slambda_3).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            var this_0 = this.b1p_1;
            var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw(this_0);
            if (!(tmp_0 instanceof Failed)) {
              var it = _ChannelResult___get_holder__impl__pm9gzw(this_0);
              this.z1o_1._v = it;
            }

            this.c1p_1 = this_0;
            var tmp_1 = _ChannelResult___get_holder__impl__pm9gzw(this.c1p_1);
            if (tmp_1 instanceof Failed) {
              var tmp140_safe_receiver = ChannelResult__exceptionOrNull_impl_16ei30(this.c1p_1);
              if (tmp140_safe_receiver == null)
                null;
              else {
                throw tmp140_safe_receiver;
              }
              if (!(this.z1o_1._v == null)) {
                this.m8_1 = 1;
                var tmp0 = get_NULL();
                var value = this.z1o_1._v;
                suspendResult = this.a1p_1.x1g(value === tmp0 ? null : value, this);
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
            this.z1o_1._v = get_DONE();
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
  protoOf(debounceInternal$slambda$slambda_3).e1p = function (value, completion) {
    var i = new debounceInternal$slambda$slambda_3(this.z1o_1, this.a1p_1, completion);
    i.b1p_1 = value;
    return i;
  };
  function debounceInternal$slambda$slambda_4($lastValue, $downstream, resultContinuation) {
    var i = new debounceInternal$slambda$slambda_3($lastValue, $downstream, resultContinuation);
    var l = function (value, $completion) {
      return i.d1p(value.c1c_1, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function debounceInternal$slambda($timeoutMillisSelector, $this_debounceInternal, resultContinuation) {
    this.n1p_1 = $timeoutMillisSelector;
    this.o1p_1 = $this_debounceInternal;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda).u1p = function ($this$scopedFlow, downstream, $completion) {
    var tmp = this.v1p($this$scopedFlow, downstream, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(debounceInternal$slambda).w1p = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE();
    return this.u1p(tmp, (!(p2 == null) ? isInterface(p2, FlowCollector) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(debounceInternal$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 7;
            var tmp_0 = this;
            tmp_0.s1p_1 = produce_0(this.p1p_1, VOID, VOID, debounceInternal$slambda$slambda_0(this.o1p_1, null));
            this.r1p_1 = {_v: null};
            this.m8_1 = 1;
            continue $sm;
          case 1:
            if (!!(this.r1p_1._v === get_DONE())) {
              this.m8_1 = 6;
              continue $sm;
            }

            this.t1p_1 = {_v: new Long(0, 0)};
            if (!(this.r1p_1._v == null)) {
              var tmp0 = get_NULL();
              var value = this.r1p_1._v;
              this.t1p_1._v = this.n1p_1(value === tmp0 ? null : value);
              if (!(compare(this.t1p_1._v, new Long(0, 0)) >= 0)) {
                var message = 'Debounce timeout should not be negative';
                throw IllegalArgumentException_init_$Create$(toString(message));
              }
              if (equalsLong(this.t1p_1._v, new Long(0, 0))) {
                this.m8_1 = 2;
                var tmp0_0 = get_NULL();
                var value_0 = this.r1p_1._v;
                suspendResult = this.q1p_1.x1g(value_0 === tmp0_0 ? null : value_0, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.m8_1 = 3;
                continue $sm;
              }
            } else {
              this.m8_1 = 4;
              continue $sm;
            }

          case 2:
            this.r1p_1._v = null;
            this.m8_1 = 3;
            continue $sm;
          case 3:
            this.m8_1 = 4;
            continue $sm;
          case 4:
            var $this$run = new SelectImplementation(this.s8());
            if (!(this.r1p_1._v == null)) {
              var tmp_1 = this.t1p_1._v;
              onTimeout($this$run, tmp_1, debounceInternal$slambda$slambda_2(this.q1p_1, this.r1p_1, null));
            }

            var tmp_2 = this.s1p_1.x1d();
            $this$run.x1p(tmp_2, debounceInternal$slambda$slambda_4(this.r1p_1, this.q1p_1, null));
            this.m8_1 = 5;
            suspendResult = $this$run.y1p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.m8_1 = 1;
            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 7) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  protoOf(debounceInternal$slambda).v1p = function ($this$scopedFlow, downstream, completion) {
    var i = new debounceInternal$slambda(this.n1p_1, this.o1p_1, completion);
    i.p1p_1 = $this$scopedFlow;
    i.q1p_1 = downstream;
    return i;
  };
  function debounceInternal$slambda_0($timeoutMillisSelector, $this_debounceInternal, resultContinuation) {
    var i = new debounceInternal$slambda($timeoutMillisSelector, $this_debounceInternal, resultContinuation);
    var l = function ($this$scopedFlow, downstream, $completion) {
      return i.u1p($this$scopedFlow, downstream, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function ensureActive_1(_this__u8e3s4) {
    if (_this__u8e3s4 instanceof ThrowingCollector)
      throw _this__u8e3s4.z1p_1;
  }
  function ThrowingCollector() {
  }
  function asStateFlow(_this__u8e3s4) {
    return new ReadonlyStateFlow(_this__u8e3s4, null);
  }
  function $onSubscriptionCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i1q_1 = _this__u8e3s4;
  }
  protoOf($onSubscriptionCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 7;
            var tmp_0 = this;
            tmp_0.j1q_1 = new SafeCollector(this.i1q_1.y1i_1, this.s8());
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.n8_1 = 6;
            this.m8_1 = 2;
            suspendResult = this.i1q_1.z1i_1(this.j1q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n8_1 = 7;
            this.m8_1 = 3;
            continue $sm;
          case 3:
            this.n8_1 = 7;
            this.j1q_1.w8();
            var tmp_1 = this.i1q_1.y1i_1;
            if (tmp_1 instanceof SubscribedFlowCollector) {
              this.m8_1 = 4;
              suspendResult = this.i1q_1.y1i_1.a1j(this);
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
            return Unit_instance;
          case 6:
            this.n8_1 = 7;
            var t = this.p8_1;
            this.j1q_1.w8();
            throw t;
          case 7:
            throw this.p8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n8_1 === 7) {
          throw e;
        } else {
          this.m8_1 = this.n8_1;
          this.p8_1 = e;
        }
      }
     while (true);
  };
  function SubscribedFlowCollector() {
  }
  protoOf(SubscribedFlowCollector).a1j = function ($completion) {
    var tmp = new $onSubscriptionCOROUTINE$(this, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  function $collectCOROUTINE$_4(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s1q_1 = _this__u8e3s4;
    this.t1q_1 = collector;
  }
  protoOf($collectCOROUTINE$_4).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 2;
            this.m8_1 = 1;
            suspendResult = this.s1q_1.u1q_1.d1j(this.t1q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
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
  function ReadonlyStateFlow(flow, job) {
    this.u1q_1 = flow;
    this.v1q_1 = job;
  }
  protoOf(ReadonlyStateFlow).d1j = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$_4(this, collector, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(ReadonlyStateFlow).l1f = function (collector, $completion) {
    return this.d1j(collector, $completion);
  };
  protoOf(ReadonlyStateFlow).x1 = function () {
    return this.u1q_1.x1();
  };
  function set_value(_this__u8e3s4, value) {
    return _this__u8e3s4.w1q(value);
  }
  function get_value(_this__u8e3s4) {
    return _this__u8e3s4.x13();
  }
  function get_CLOSED() {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    return CLOSED;
  }
  var CLOSED;
  function Segment(id, prev, pointers) {
    ConcurrentLinkedListNode.call(this, prev);
    this.f10_1 = id;
    this.g10_1 = atomic$int$1(pointers << 16);
  }
  protoOf(Segment).q19 = function () {
    return this.g10_1.kotlinx$atomicfu$value === this.s18() && !this.x19();
  };
  protoOf(Segment).r19 = function () {
    var tmp0 = this.g10_1;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.addConditionally' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        if (!(!(cur === this.s18()) || this.x19())) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        if (tmp0.atomicfu$compareAndSet(cur, cur + 65536 | 0)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(Segment).s19 = function () {
    return this.g10_1.atomicfu$addAndGet(-65536) === this.s18() && !this.x19();
  };
  protoOf(Segment).p19 = function () {
    if (this.g10_1.atomicfu$incrementAndGet() === this.s18()) {
      this.m3();
    }
  };
  function close(_this__u8e3s4) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      var it = access$_get_nextOrClosed__ywzond(this_0);
      var tmp;
      if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
        return cur;
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (next === null) {
        if (cur.a1a())
          return cur;
      } else {
        cur = next;
      }
    }
  }
  function _SegmentOrClosed___init__impl__jnexvb(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _SegmentOrClosed___get_isClosed__impl__qmxmlo($this) {
    return _get_value__a43j40($this) === get_CLOSED();
  }
  function _SegmentOrClosed___get_segment__impl__jvcr9l($this) {
    var tmp;
    if (_get_value__a43j40($this) === get_CLOSED()) {
      // Inline function 'kotlin.error' call
      var message = 'Does not contain segment';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      var tmp_0 = _get_value__a43j40($this);
      tmp = tmp_0 instanceof Segment ? tmp_0 : THROW_CCE();
    }
    return tmp;
  }
  function SegmentOrClosed__toString_impl_pzb2an($this) {
    return 'SegmentOrClosed(value=' + toString_0($this) + ')';
  }
  function SegmentOrClosed__hashCode_impl_4855hs($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function SegmentOrClosed__equals_impl_6erq1g($this, other) {
    if (!(other instanceof SegmentOrClosed))
      return false;
    var tmp0_other_with_cast = other instanceof SegmentOrClosed ? other.b1c_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SegmentOrClosed(value) {
    this.b1c_1 = value;
  }
  protoOf(SegmentOrClosed).toString = function () {
    return SegmentOrClosed__toString_impl_pzb2an(this.b1c_1);
  };
  protoOf(SegmentOrClosed).hashCode = function () {
    return SegmentOrClosed__hashCode_impl_4855hs(this.b1c_1);
  };
  protoOf(SegmentOrClosed).equals = function (other) {
    return SegmentOrClosed__equals_impl_6erq1g(this.b1c_1, other);
  };
  function _get_nextOrClosed__w0gmuv($this) {
    return $this.t19_1.kotlinx$atomicfu$value;
  }
  function _get_aliveSegmentLeft__mr4ndu($this) {
    var cur = $this.y19();
    while (!(cur === null) && cur.q19())
      cur = cur.u19_1.kotlinx$atomicfu$value;
    return cur;
  }
  function _get_aliveSegmentRight__7ulr0b($this) {
    // Inline function 'kotlinx.coroutines.assert' call
    var cur = ensureNotNull($this.v19());
    while (cur.q19()) {
      var tmp0_elvis_lhs = cur.v19();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return cur;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      cur = tmp;
    }
    return cur;
  }
  function access$_get_nextOrClosed__ywzond($this) {
    return _get_nextOrClosed__w0gmuv($this);
  }
  function ConcurrentLinkedListNode(prev) {
    this.t19_1 = atomic$ref$1(null);
    this.u19_1 = atomic$ref$1(prev);
  }
  protoOf(ConcurrentLinkedListNode).v19 = function () {
    // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
    // Inline function 'kotlin.let' call
    var it = access$_get_nextOrClosed__ywzond(this);
    var tmp;
    if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
      return null;
    } else {
      tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
    }
    return tmp;
  };
  protoOf(ConcurrentLinkedListNode).w19 = function (value) {
    return this.t19_1.atomicfu$compareAndSet(null, value);
  };
  protoOf(ConcurrentLinkedListNode).x19 = function () {
    return this.v19() == null;
  };
  protoOf(ConcurrentLinkedListNode).y19 = function () {
    return this.u19_1.kotlinx$atomicfu$value;
  };
  protoOf(ConcurrentLinkedListNode).z19 = function () {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    this.u19_1.kotlinx$atomicfu$value = null;
  };
  protoOf(ConcurrentLinkedListNode).a1a = function () {
    return this.t19_1.atomicfu$compareAndSet(null, get_CLOSED());
  };
  protoOf(ConcurrentLinkedListNode).m3 = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.x19())
      return Unit_instance;
    $l$loop_0: while (true) {
      var prev = _get_aliveSegmentLeft__mr4ndu(this);
      var next = _get_aliveSegmentRight__7ulr0b(this);
      var tmp0 = next.u19_1;
      $l$block: {
        // Inline function 'kotlinx.atomicfu.update' call
        while (true) {
          var cur = tmp0.kotlinx$atomicfu$value;
          var upd = cur === null ? null : prev;
          if (tmp0.atomicfu$compareAndSet(cur, upd)) {
            break $l$block;
          }
        }
      }
      if (!(prev === null))
        prev.t19_1.kotlinx$atomicfu$value = next;
      if (next.q19() && !next.x19())
        continue $l$loop_0;
      if (!(prev === null) && prev.q19())
        continue $l$loop_0;
      return Unit_instance;
    }
  };
  function findSegmentInternal(_this__u8e3s4, id, createNewSegment) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    $l$loop: while (compare(cur.f10_1, id) < 0 || cur.q19()) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      var it = access$_get_nextOrClosed__ywzond(this_0);
      var tmp;
      if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
        return _SegmentOrClosed___init__impl__jnexvb(get_CLOSED());
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (!(next == null)) {
        cur = next;
        continue $l$loop;
      }
      // Inline function 'kotlin.Long.plus' call
      var this_1 = cur.f10_1;
      var newTail = createNewSegment(add(this_1, fromInt(1)), cur);
      if (cur.w19(newTail)) {
        if (cur.q19()) {
          cur.m3();
        }
        cur = newTail;
      }
    }
    return _SegmentOrClosed___init__impl__jnexvb(cur);
  }
  function access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy() {
    return get_CLOSED();
  }
  var properties_initialized_ConcurrentLinkedList_kt_kwt434;
  function _init_properties_ConcurrentLinkedList_kt__5gcgzy() {
    if (!properties_initialized_ConcurrentLinkedList_kt_kwt434) {
      properties_initialized_ConcurrentLinkedList_kt_kwt434 = true;
      CLOSED = new Symbol('CLOSED');
    }
  }
  function handleUncaughtCoroutineException(context, exception) {
    var _iterator__ex2g4s = get_platformExceptionHandlers().i();
    while (_iterator__ex2g4s.j()) {
      var handler = _iterator__ex2g4s.k();
      try {
        handler.a13(context, exception);
      } catch ($p) {
        if ($p instanceof ExceptionSuccessfullyProcessed) {
          var _unused_var__etf5q3 = $p;
          return Unit_instance;
        } else {
          if ($p instanceof Error) {
            var t = $p;
            propagateExceptionFinalResort(handlerException(exception, t));
          } else {
            throw $p;
          }
        }
      }
    }
    try {
      addSuppressed(exception, new DiagnosticCoroutineContextException(context));
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
      } else {
        throw $p;
      }
    }
    propagateExceptionFinalResort(exception);
  }
  function ExceptionSuccessfullyProcessed() {
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this__u8e3s4, result) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith' call
      var state = toState_0(result);
      if (_this__u8e3s4.tz_1.w12(_this__u8e3s4.s8())) {
        _this__u8e3s4.vz_1 = state;
        _this__u8e3s4.b10_1 = 1;
        _this__u8e3s4.tz_1.x12(_this__u8e3s4.s8(), _this__u8e3s4);
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().v13();
          if (false && eventLoop.q13()) {
            break $l$block;
          }
          var tmp_0;
          if (eventLoop.p13()) {
            _this__u8e3s4.vz_1 = state;
            _this__u8e3s4.b10_1 = 1;
            eventLoop.o13(_this__u8e3s4);
            tmp_0 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.r13(true);
            try {
              var tmp$ret$5;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.s8().z8(Key_instance_3);
                if (!(job == null) && !job.tv()) {
                  var cause = job.sw();
                  _this__u8e3s4.v10(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.x8(tmp$ret$7);
                  tmp$ret$5 = true;
                  break $l$block_0;
                }
                tmp$ret$5 = false;
              }
              if (!tmp$ret$5) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                _this__u8e3s4.uz_1;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.wz_1;
                _this__u8e3s4.uz_1.x8(result);
              }
              $l$loop: while (eventLoop.n13()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.n11(e);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.s13(true);
            }
            tmp_0 = false;
          }
        }
      }
      tmp = Unit_instance;
    } else {
      _this__u8e3s4.x8(result);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.xz_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this.tz_1 = dispatcher;
    this.uz_1 = continuation;
    this.vz_1 = get_UNDEFINED();
    this.wz_1 = threadContextElements(this.s8());
    this.xz_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).s8 = function () {
    return this.uz_1.s8();
  };
  protoOf(DispatchedContinuation).a10 = function () {
    return !(this.xz_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).x1q = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.xz_1;
    while (true) {
      if (!(this_0.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_instance;
    }
  };
  protoOf(DispatchedContinuation).z12 = function () {
    this.x1q();
    var tmp148_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp148_safe_receiver == null)
      null;
    else {
      tmp148_safe_receiver.r10();
    }
  };
  protoOf(DispatchedContinuation).yz = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.xz_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state === null) {
        this.xz_1.kotlinx$atomicfu$value = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (state instanceof CancellableContinuationImpl) {
          if (this.xz_1.atomicfu$compareAndSet(state, get_REUSABLE_CLAIMED())) {
            return state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          }
        } else {
          if (state !== get_REUSABLE_CLAIMED()) {
            if (!(state instanceof Error)) {
              // Inline function 'kotlin.error' call
              var message = 'Inconsistent state ' + toString_0(state);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  };
  protoOf(DispatchedContinuation).c11 = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.xz_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state === get_REUSABLE_CLAIMED()) {
        if (this.xz_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (state instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.require' call
          if (!this.xz_1.atomicfu$compareAndSet(state, null)) {
            var message = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          return state;
        } else {
          // Inline function 'kotlin.error' call
          var message_0 = 'Inconsistent state ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).c10 = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.xz_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (equals(state, get_REUSABLE_CLAIMED())) {
        if (this.xz_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (state instanceof Error)
          return true;
        else {
          if (this.xz_1.atomicfu$compareAndSet(state, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).u10 = function () {
    var state = this.vz_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.vz_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).s10 = function () {
    return this;
  };
  protoOf(DispatchedContinuation).x8 = function (result) {
    var state = toState_0(result);
    if (this.tz_1.w12(this.s8())) {
      this.vz_1 = state;
      this.b10_1 = 0;
      this.tz_1.x12(this.s8(), this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().v13();
        if (false && eventLoop.q13()) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.p13()) {
          this.vz_1 = state;
          this.b10_1 = 0;
          eventLoop.o13(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.r13(true);
          try {
            this.s8();
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.wz_1;
            this.uz_1.x8(result);
            $l$loop: while (eventLoop.n13()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.n11(e);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.s13(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).k18 = function (context, value) {
    this.vz_1 = value;
    this.b10_1 = 1;
    this.tz_1.y12(context, this);
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.tz_1.toString() + ', ' + toDebugString(this.uz_1) + ']';
  };
  function yieldUndispatched(_this__u8e3s4) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
      // Inline function 'kotlinx.coroutines.assert' call
      var eventLoop = ThreadLocalEventLoop_getInstance().v13();
      if (true && eventLoop.q13()) {
        tmp$ret$0 = false;
        break $l$block;
      }
      var tmp;
      if (eventLoop.p13()) {
        _this__u8e3s4.vz_1 = Unit_instance;
        _this__u8e3s4.b10_1 = 1;
        eventLoop.o13(_this__u8e3s4);
        tmp = true;
      } else {
        // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
        eventLoop.r13(true);
        try {
          _this__u8e3s4.m11();
          $l$loop: while (eventLoop.n13()) {
          }
        } catch ($p) {
          if ($p instanceof Error) {
            var e = $p;
            _this__u8e3s4.n11(e);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.s13(true);
        }
        tmp = false;
      }
      tmp$ret$0 = tmp;
    }
    return tmp$ret$0;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.b10_1 = resumeMode;
  }
  protoOf(DispatchedTask).v10 = function (takenState, cause) {
  };
  protoOf(DispatchedTask).b11 = function (state) {
    return state;
  };
  protoOf(DispatchedTask).k11 = function (state) {
    var tmp151_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp151_safe_receiver == null ? null : tmp151_safe_receiver.yv_1;
  };
  protoOf(DispatchedTask).m11 = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    var fatalException = null;
    try {
      var tmp = this.s10();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.uz_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.wz_1;
      var context = continuation.s8();
      var state = this.u10();
      var exception = this.k11(state);
      var job = exception == null && get_isCancellableMode(this.b10_1) ? context.z8(Key_instance_3) : null;
      if (!(job == null) && !job.tv()) {
        var cause = job.sw();
        this.v10(state, cause);
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.x8(tmp$ret$4);
      } else {
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.x8(tmp$ret$6);
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = this.b11(state);
          var tmp$ret$8 = _Result___init__impl__xyqfz8(value);
          continuation.x8(tmp$ret$8);
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        fatalException = e;
      } else {
        throw $p;
      }
    }
    finally {
      var tmp152_safe_receiver = fatalException;
      if (tmp152_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        this.n11(tmp152_safe_receiver);
      }
    }
  };
  protoOf(DispatchedTask).n11 = function (exception) {
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + toString(this) + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", exception);
    handleCoroutineException(this.s10().s8(), reason);
  };
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 || _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.s10();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.b10_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.tz_1;
      var context = delegate.s8();
      if (dispatcher.w12(context)) {
        dispatcher.x12(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().v13();
    if (eventLoop.p13()) {
      eventLoop.o13(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.r13(true);
      try {
        resume(_this__u8e3s4, _this__u8e3s4.s10(), true);
        $l$loop: while (eventLoop.n13()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.n11(e);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.s13(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.u10();
    var exception = _this__u8e3s4.k11(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = _this__u8e3s4.b11(state);
      tmp = _Result___init__impl__xyqfz8(value);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var this_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      this_0.uz_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      this_0.wz_1;
      this_0.uz_1.x8(result);
    } else {
      delegate.x8(result);
    }
  }
  function _InlineList___init__impl__z8n56(holder) {
    holder = holder === VOID ? null : holder;
    return holder;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp153_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp153_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp153_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).h(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        list.h(_get_holder__f6h5pd($this));
        list.h(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function access$_get_holder__kkflen($this) {
    return _get_holder__f6h5pd($this);
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp156_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp156_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      handleCoroutineException(context, tmp156_safe_receiver);
    }
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    undeliveredElementException = undeliveredElementException === VOID ? null : undeliveredElementException;
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        if (!(undeliveredElementException == null) && !(undeliveredElementException.cause === ex)) {
          addSuppressed(undeliveredElementException, ex);
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + toString_0(element), ex);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.zy_1 = uCont;
  }
  protoOf(ScopeCoroutine).mx = function () {
    return true;
  };
  protoOf(ScopeCoroutine).dw = function (state) {
    resumeCancellableWith(intercepted(this.zy_1), recoverResult(state, this.zy_1));
  };
  protoOf(ScopeCoroutine).cw = function (state) {
    this.zy_1.x8(recoverResult(state, this.zy_1));
  };
  function ContextScope(context) {
    this.y1q_1 = context;
  }
  protoOf(ContextScope).sv = function () {
    return this.y1q_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + toString(this.y1q_1) + ')';
  };
  function Symbol(symbol) {
    this.z1q_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.z1q_1 + '>';
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? 1 : minValue;
    maxValue = maxValue === VOID ? 2147483647 : maxValue;
    return convertToInt(systemProp_0(propertyName, fromInt(defaultValue), fromInt(minValue), fromInt(maxValue)));
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? new Long(1, 0) : minValue;
    maxValue = maxValue === VOID ? new Long(-1, 2147483647) : maxValue;
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(compare(minValue, parsed) <= 0 ? compare(parsed, maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var message_0 = "System property '" + propertyName + "' should be in range " + minValue.toString() + '..' + maxValue.toString() + ", but is '" + parsed.toString() + "'";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion) {
    // Inline function 'kotlinx.coroutines.intrinsics.runSafely' call
    try {
      var tmp = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp, tmp$ret$2);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(completion, e);
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    // Inline function 'kotlinx.coroutines.intrinsics.runSafely' call
    try {
      var tmp = intercepted(_this__u8e3s4);
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWith(tmp, tmp$ret$2);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(fatalCompletion, e);
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  }
  function dispatcherFailure(completion, e) {
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.x8(tmp$ret$0);
    throw e;
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(block, receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$0 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.bw(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$0 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        state.yv_1;
        if (true) {
          throw recoverStackTrace(state.yv_1, _this__u8e3s4.zy_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.yv_1, _this__u8e3s4.zy_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$0 = tmp_1;
    }
    return tmp$ret$0;
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
    var actualCompletion = completion;
    var tmp;
    try {
      // Inline function 'kotlinx.coroutines.withCoroutineContext' call
      actualCompletion.s8();
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineResumed' call
      // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
      tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(_this__u8e3s4, receiver, actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(e));
        actualCompletion.x8(tmp$ret$6);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$8 = _Result___init__impl__xyqfz8(value);
      actualCompletion.x8(tmp$ret$8);
    }
  }
  function startUndispatchedOrReturnIgnoreTimeout(_this__u8e3s4, receiver, block) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.intrinsics.undispatchedResult' call
      var tmp;
      try {
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(block, receiver, _this__u8e3s4);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          tmp_0 = new CompletedExceptionally(e);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var result = tmp;
      if (result === get_COROUTINE_SUSPENDED()) {
        tmp$ret$0 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var state = _this__u8e3s4.bw(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$0 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        var e_0 = state.yv_1;
        var tmp_3;
        if (e_0 instanceof TimeoutCancellationException) {
          tmp_3 = e_0.b18_1 === _this__u8e3s4;
        } else {
          tmp_3 = false;
        }
        if (!tmp_3) {
          throw recoverStackTrace(state.yv_1, _this__u8e3s4.zy_1);
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.yv_1, _this__u8e3s4.zy_1);
          } else {
            tmp_2 = result;
          }
        }
        tmp_1 = tmp_2;
      } else {
        tmp_1 = unboxState(state);
      }
      tmp$ret$0 = tmp_1;
    }
    return tmp$ret$0;
  }
  function onTimeout(_this__u8e3s4, timeMillis, block) {
    return _this__u8e3s4.c1r((new OnTimeout(timeMillis)).b1r(), block);
  }
  function register($this, select, ignoredParam) {
    if (compare($this.a1r_1, new Long(0, 0)) <= 0) {
      select.t1b(Unit_instance);
      return Unit_instance;
    }
    // Inline function 'kotlinx.coroutines.Runnable' call
    var action = new OnTimeout$register$$inlined$Runnable$1(select, $this);
    if (!(select instanceof SelectImplementation))
      THROW_CCE();
    var context = select.s8();
    var disposableHandle = get_delay(context).h13($this.a1r_1, action, context);
    select.d1r(disposableHandle);
  }
  function OnTimeout$register$ref() {
    var l = function (p0, p1, p2) {
      register(p0, p1, p2);
      return Unit_instance;
    };
    l.callableName = 'register';
    return l;
  }
  function OnTimeout$register$$inlined$Runnable$1($select, this$0) {
    this.e1r_1 = $select;
    this.f1r_1 = this$0;
  }
  protoOf(OnTimeout$register$$inlined$Runnable$1).m11 = function () {
    this.e1r_1.j1b(this.f1r_1, Unit_instance);
  };
  function OnTimeout(timeMillis) {
    this.a1r_1 = timeMillis;
  }
  protoOf(OnTimeout).b1r = function () {
    var tmp = OnTimeout$register$ref();
    return new SelectClause0Impl(this, typeof tmp === 'function' ? tmp : THROW_CCE());
  };
  function get_DUMMY_PROCESS_RESULT_FUNCTION() {
    _init_properties_Select_kt__zhm2jg();
    return DUMMY_PROCESS_RESULT_FUNCTION;
  }
  var DUMMY_PROCESS_RESULT_FUNCTION;
  function get_STATE_REG() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_REG;
  }
  var STATE_REG;
  function get_STATE_COMPLETED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_COMPLETED;
  }
  var STATE_COMPLETED;
  function get_STATE_CANCELLED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_CANCELLED;
  }
  var STATE_CANCELLED;
  function get_NO_RESULT() {
    _init_properties_Select_kt__zhm2jg();
    return NO_RESULT;
  }
  var NO_RESULT;
  function get_PARAM_CLAUSE_0() {
    _init_properties_Select_kt__zhm2jg();
    return PARAM_CLAUSE_0;
  }
  var PARAM_CLAUSE_0;
  function SelectClause0Impl(clauseObject, regFunc, onCancellationConstructor) {
    onCancellationConstructor = onCancellationConstructor === VOID ? null : onCancellationConstructor;
    this.g1r_1 = clauseObject;
    this.h1r_1 = regFunc;
    this.i1r_1 = onCancellationConstructor;
    this.j1r_1 = get_DUMMY_PROCESS_RESULT_FUNCTION();
  }
  protoOf(SelectClause0Impl).k1r = function () {
    return this.g1r_1;
  };
  protoOf(SelectClause0Impl).l1r = function () {
    return this.h1r_1;
  };
  protoOf(SelectClause0Impl).m1r = function () {
    return this.i1r_1;
  };
  protoOf(SelectClause0Impl).n1r = function () {
    return this.j1r_1;
  };
  function SelectInstance() {
  }
  function SelectClause1Impl(clauseObject, regFunc, processResFunc, onCancellationConstructor) {
    onCancellationConstructor = onCancellationConstructor === VOID ? null : onCancellationConstructor;
    this.o1r_1 = clauseObject;
    this.p1r_1 = regFunc;
    this.q1r_1 = processResFunc;
    this.r1r_1 = onCancellationConstructor;
  }
  protoOf(SelectClause1Impl).k1r = function () {
    return this.o1r_1;
  };
  protoOf(SelectClause1Impl).l1r = function () {
    return this.p1r_1;
  };
  protoOf(SelectClause1Impl).n1r = function () {
    return this.q1r_1;
  };
  protoOf(SelectClause1Impl).m1r = function () {
    return this.r1r_1;
  };
  function $invokeBlockCOROUTINE$(_this__u8e3s4, argument, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a1s_1 = _this__u8e3s4;
    this.b1s_1 = argument;
  }
  protoOf($invokeBlockCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            var block = this.a1s_1.h1s_1;
            if (this.a1s_1.g1s_1 === get_PARAM_CLAUSE_0()) {
              if (!isSuspendFunction(block, 0))
                THROW_CCE();
              this.m8_1 = 2;
              suspendResult = block(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (!isSuspendFunction(block, 1))
                THROW_CCE();
              this.m8_1 = 1;
              suspendResult = block(this.b1s_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.c1s_1 = suspendResult;
            this.m8_1 = 3;
            continue $sm;
          case 2:
            this.c1s_1 = suspendResult;
            this.m8_1 = 3;
            continue $sm;
          case 3:
            return this.c1s_1;
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
  function _get_isSelected__uy0hmu($this) {
    var tmp = $this.n1b_1.kotlinx$atomicfu$value;
    return tmp instanceof ClauseData;
  }
  function doSelectSuspend($this, $completion) {
    var tmp = new $doSelectSuspendCOROUTINE$($this, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function checkClauseObject($this, clauseObject) {
    var clauses = ensureNotNull($this.o1b_1);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.none' call
      var tmp;
      if (isInterface(clauses, Collection)) {
        tmp = clauses.n();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = clauses.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (element.d1s_1 === clauseObject) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    // Inline function 'kotlin.check' call
    if (!tmp$ret$0) {
      var message = 'Cannot use select clauses on the same object: ' + toString(clauseObject);
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function waitUntilSelected($this, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.t10();
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.loop' call
      var this_0 = $this.n1b_1;
      while (true) {
        var curState = this_0.kotlinx$atomicfu$value;
        if (curState === get_STATE_REG()) {
          if ($this.n1b_1.atomicfu$compareAndSet(curState, cancellable)) {
            invokeOnCancellation(cancellable, $this);
            break $l$block_0;
          }
        } else {
          if (isInterface(curState, KtList)) {
            if ($this.n1b_1.atomicfu$compareAndSet(curState, get_STATE_REG())) {
              if (!isInterface(curState, KtList))
                THROW_CCE();
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s = curState.i();
              while (_iterator__ex2g4s.j()) {
                var element = _iterator__ex2g4s.k();
                reregisterClause($this, element);
              }
            }
          } else {
            if (curState instanceof ClauseData) {
              cancellable.hz(Unit_instance, curState.v1s($this, $this.r1b_1));
              break $l$block_0;
            } else {
              // Inline function 'kotlin.error' call
              var message = 'unexpected state: ' + toString(curState);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
    return cancellable.xx();
  }
  function reregisterClause($this, clauseObject) {
    var clause = ensureNotNull(findClause($this, clauseObject));
    clause.j1s_1 = null;
    clause.k1s_1 = -1;
    $this.w1s(clause, true);
  }
  function trySelectInternal($this, clauseObject, internalResult) {
    $l$loop: while (true) {
      var curState = $this.n1b_1.kotlinx$atomicfu$value;
      if (isInterface(curState, CancellableContinuation)) {
        var tmp0_elvis_lhs = findClause($this, clauseObject);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var clause = tmp;
        var onCancellation = clause.v1s($this, internalResult);
        if ($this.n1b_1.atomicfu$compareAndSet(curState, clause)) {
          var cont = isInterface(curState, CancellableContinuation) ? curState : THROW_CCE();
          $this.r1b_1 = internalResult;
          if (tryResume_1(cont, onCancellation))
            return 0;
          $this.r1b_1 = get_NO_RESULT();
          return 2;
        }
      } else {
        var tmp_0;
        if (equals(curState, get_STATE_COMPLETED())) {
          tmp_0 = true;
        } else {
          tmp_0 = curState instanceof ClauseData;
        }
        if (tmp_0)
          return 3;
        else {
          if (equals(curState, get_STATE_CANCELLED()))
            return 2;
          else {
            if (equals(curState, get_STATE_REG())) {
              if ($this.n1b_1.atomicfu$compareAndSet(curState, listOf_0(clauseObject)))
                return 1;
            } else {
              if (isInterface(curState, KtList)) {
                if ($this.n1b_1.atomicfu$compareAndSet(curState, plus_0(curState, clauseObject)))
                  return 1;
              } else {
                // Inline function 'kotlin.error' call
                var message = 'Unexpected state: ' + toString(curState);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  }
  function findClause($this, clauseObject) {
    var tmp0_elvis_lhs = $this.o1b_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = clauses.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (element.d1s_1 === clauseObject) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp1_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'Clause with object ' + toString(clauseObject) + ' is not found';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function complete($this, $completion) {
    var tmp = new $completeCOROUTINE$($this, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function processResultAndInvokeBlockRecoveringException($this, clause, internalResult, $completion) {
    var tmp = new $processResultAndInvokeBlockRecoveringExceptionCOROUTINE$($this, clause, internalResult, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  }
  function cleanup($this, selectedClause) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = $this.o1b_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = clauses.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      if (!(element === selectedClause)) {
        element.rz();
      }
    }
    $this.n1b_1.kotlinx$atomicfu$value = get_STATE_COMPLETED();
    $this.r1b_1 = get_NO_RESULT();
    $this.o1b_1 = null;
  }
  function ClauseData($outer, clauseObject, regFunc, processResFunc, param, block, onCancellationConstructor) {
    this.l1s_1 = $outer;
    this.d1s_1 = clauseObject;
    this.e1s_1 = regFunc;
    this.f1s_1 = processResFunc;
    this.g1s_1 = param;
    this.h1s_1 = block;
    this.i1s_1 = onCancellationConstructor;
    this.j1s_1 = null;
    this.k1s_1 = -1;
  }
  protoOf(ClauseData).t1t = function (select) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    this.e1s_1(this.d1s_1, select, this.g1s_1);
    return select.r1b_1 === get_NO_RESULT();
  };
  protoOf(ClauseData).u1t = function (result) {
    return this.f1s_1(this.d1s_1, this.g1s_1, result);
  };
  protoOf(ClauseData).v1t = function (argument, $completion) {
    var tmp = new $invokeBlockCOROUTINE$(this, argument, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(ClauseData).rz = function () {
    // Inline function 'kotlin.with' call
    var $this$with = this.j1s_1;
    var tmp;
    if ($this$with instanceof Segment) {
      $this$with.h10(this.k1s_1, null, this.l1s_1.s8());
      tmp = Unit_instance;
    } else {
      var tmp160_safe_receiver = (!($this$with == null) ? isInterface($this$with, DisposableHandle) : false) ? $this$with : null;
      var tmp_0;
      if (tmp160_safe_receiver == null) {
        tmp_0 = null;
      } else {
        tmp160_safe_receiver.rz();
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    }
  };
  protoOf(ClauseData).v1s = function (select, internalResult) {
    var tmp161_safe_receiver = this.i1s_1;
    return tmp161_safe_receiver == null ? null : tmp161_safe_receiver(select, this.g1s_1, internalResult);
  };
  function $doSelectCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e1u_1 = _this__u8e3s4;
  }
  protoOf($doSelectCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            if (_get_isSelected__uy0hmu(this.e1u_1)) {
              this.m8_1 = 2;
              suspendResult = complete(this.e1u_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 1;
              suspendResult = doSelectSuspend(this.e1u_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.f1u_1 = suspendResult;
            this.m8_1 = 3;
            continue $sm;
          case 2:
            this.f1u_1 = suspendResult;
            this.m8_1 = 3;
            continue $sm;
          case 3:
            return this.f1u_1;
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
  function $doSelectSuspendCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u1s_1 = _this__u8e3s4;
  }
  protoOf($doSelectSuspendCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            this.m8_1 = 1;
            suspendResult = waitUntilSelected(this.u1s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m8_1 = 2;
            suspendResult = complete(this.u1s_1, this);
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
  function $completeCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f1t_1 = _this__u8e3s4;
  }
  protoOf($completeCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            var tmp_0 = this.f1t_1.n1b_1.kotlinx$atomicfu$value;
            var selectedClause = tmp_0 instanceof ClauseData ? tmp_0 : THROW_CCE();
            var internalResult = this.f1t_1.r1b_1;
            cleanup(this.f1t_1, selectedClause);
            if (!get_RECOVER_STACK_TRACES()) {
              var blockArgument = selectedClause.u1t(internalResult);
              this.m8_1 = 2;
              suspendResult = selectedClause.v1t(blockArgument, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m8_1 = 1;
              suspendResult = processResultAndInvokeBlockRecoveringException(this.f1t_1, selectedClause, internalResult, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.g1t_1 = suspendResult;
            this.m8_1 = 3;
            continue $sm;
          case 2:
            this.g1t_1 = suspendResult;
            this.m8_1 = 3;
            continue $sm;
          case 3:
            return this.g1t_1;
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
  function $processResultAndInvokeBlockRecoveringExceptionCOROUTINE$(_this__u8e3s4, clause, internalResult, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p1t_1 = _this__u8e3s4;
    this.q1t_1 = clause;
    this.r1t_1 = internalResult;
  }
  protoOf($processResultAndInvokeBlockRecoveringExceptionCOROUTINE$).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 3;
            this.n8_1 = 2;
            var blockArgument = this.q1t_1.u1t(this.r1t_1);
            this.m8_1 = 1;
            suspendResult = this.q1t_1.v1t(blockArgument, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s1t_1 = suspendResult;
            this.n8_1 = 3;
            this.m8_1 = 4;
            continue $sm;
          case 2:
            this.n8_1 = 3;
            var tmp_0 = this.p8_1;
            if (tmp_0 instanceof Error) {
              var e = this.p8_1;
              var tmp_1 = this;
              throw e;
            } else {
              throw this.p8_1;
            }

          case 3:
            throw this.p8_1;
          case 4:
            this.n8_1 = 3;
            return this.s1t_1;
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
  function SelectImplementation(context) {
    this.m1b_1 = context;
    this.n1b_1 = atomic$ref$1(get_STATE_REG());
    this.o1b_1 = ArrayList_init_$Create$(2);
    this.p1b_1 = null;
    this.q1b_1 = -1;
    this.r1b_1 = get_NO_RESULT();
  }
  protoOf(SelectImplementation).s8 = function () {
    return this.m1b_1;
  };
  protoOf(SelectImplementation).y1p = function ($completion) {
    var tmp = new $doSelectCOROUTINE$(this, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(SelectImplementation).c1r = function (_this__u8e3s4, block) {
    return this.g1u(new ClauseData(this, _this__u8e3s4.k1r(), _this__u8e3s4.l1r(), _this__u8e3s4.n1r(), get_PARAM_CLAUSE_0(), block, _this__u8e3s4.m1r()));
  };
  protoOf(SelectImplementation).x1p = function (_this__u8e3s4, block) {
    return this.g1u(new ClauseData(this, _this__u8e3s4.k1r(), _this__u8e3s4.l1r(), _this__u8e3s4.n1r(), null, block, _this__u8e3s4.m1r()));
  };
  protoOf(SelectImplementation).w1s = function (_this__u8e3s4, reregister) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlin.let' call
    if (this.n1b_1.kotlinx$atomicfu$value instanceof ClauseData)
      return Unit_instance;
    if (!reregister) {
      checkClauseObject(this, _this__u8e3s4.d1s_1);
    }
    if (_this__u8e3s4.t1t(this)) {
      if (!reregister) {
        // Inline function 'kotlin.collections.plusAssign' call
        ensureNotNull(this.o1b_1).h(_this__u8e3s4);
      }
      _this__u8e3s4.j1s_1 = this.p1b_1;
      _this__u8e3s4.k1s_1 = this.q1b_1;
      this.p1b_1 = null;
      this.q1b_1 = -1;
    } else {
      this.n1b_1.kotlinx$atomicfu$value = _this__u8e3s4;
    }
  };
  protoOf(SelectImplementation).g1u = function (_this__u8e3s4, reregister, $super) {
    reregister = reregister === VOID ? false : reregister;
    var tmp;
    if ($super === VOID) {
      this.w1s(_this__u8e3s4, reregister);
      tmp = Unit_instance;
    } else {
      tmp = $super.w1s.call(this, _this__u8e3s4, reregister);
    }
    return tmp;
  };
  protoOf(SelectImplementation).d1r = function (disposableHandle) {
    this.p1b_1 = disposableHandle;
  };
  protoOf(SelectImplementation).f11 = function (segment, index) {
    this.p1b_1 = segment;
    this.q1b_1 = index;
  };
  protoOf(SelectImplementation).t1b = function (internalResult) {
    this.r1b_1 = internalResult;
  };
  protoOf(SelectImplementation).j1b = function (clauseObject, result) {
    return trySelectInternal(this, clauseObject, result) === 0;
  };
  protoOf(SelectImplementation).s1b = function (clauseObject, result) {
    return TrySelectDetailedResult_0(trySelectInternal(this, clauseObject, result));
  };
  protoOf(SelectImplementation).qz = function (cause) {
    var tmp0 = this.n1b_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        if (cur === get_STATE_COMPLETED())
          return Unit_instance;
        var upd = get_STATE_CANCELLED();
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    var tmp0_elvis_lhs = this.o1b_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = clauses.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      element.rz();
    }
    this.r1b_1 = get_NO_RESULT();
    this.o1b_1 = null;
  };
  var TrySelectDetailedResult_SUCCESSFUL_instance;
  var TrySelectDetailedResult_REREGISTER_instance;
  var TrySelectDetailedResult_CANCELLED_instance;
  var TrySelectDetailedResult_ALREADY_SELECTED_instance;
  var TrySelectDetailedResult_entriesInitialized;
  function TrySelectDetailedResult_initEntries() {
    if (TrySelectDetailedResult_entriesInitialized)
      return Unit_instance;
    TrySelectDetailedResult_entriesInitialized = true;
    TrySelectDetailedResult_SUCCESSFUL_instance = new TrySelectDetailedResult('SUCCESSFUL', 0);
    TrySelectDetailedResult_REREGISTER_instance = new TrySelectDetailedResult('REREGISTER', 1);
    TrySelectDetailedResult_CANCELLED_instance = new TrySelectDetailedResult('CANCELLED', 2);
    TrySelectDetailedResult_ALREADY_SELECTED_instance = new TrySelectDetailedResult('ALREADY_SELECTED', 3);
  }
  function TrySelectDetailedResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function TrySelectDetailedResult_0(trySelectInternalResult) {
    _init_properties_Select_kt__zhm2jg();
    var tmp;
    switch (trySelectInternalResult) {
      case 0:
        tmp = TrySelectDetailedResult_SUCCESSFUL_getInstance();
        break;
      case 1:
        tmp = TrySelectDetailedResult_REREGISTER_getInstance();
        break;
      case 2:
        tmp = TrySelectDetailedResult_CANCELLED_getInstance();
        break;
      case 3:
        tmp = TrySelectDetailedResult_ALREADY_SELECTED_getInstance();
        break;
      default:
        // Inline function 'kotlin.error' call

        var message = 'Unexpected internal result: ' + trySelectInternalResult;
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function tryResume_1(_this__u8e3s4, onCancellation) {
    _init_properties_Select_kt__zhm2jg();
    var tmp0_elvis_lhs = _this__u8e3s4.az(Unit_instance, null, onCancellation);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp;
    _this__u8e3s4.bz(token);
    return true;
  }
  function DUMMY_PROCESS_RESULT_FUNCTION$lambda(_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
    _init_properties_Select_kt__zhm2jg();
    return null;
  }
  function TrySelectDetailedResult_SUCCESSFUL_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_SUCCESSFUL_instance;
  }
  function TrySelectDetailedResult_REREGISTER_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_REREGISTER_instance;
  }
  function TrySelectDetailedResult_CANCELLED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_CANCELLED_instance;
  }
  function TrySelectDetailedResult_ALREADY_SELECTED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_ALREADY_SELECTED_instance;
  }
  var properties_initialized_Select_kt_7rpl36;
  function _init_properties_Select_kt__zhm2jg() {
    if (!properties_initialized_Select_kt_7rpl36) {
      properties_initialized_Select_kt_7rpl36 = true;
      DUMMY_PROCESS_RESULT_FUNCTION = DUMMY_PROCESS_RESULT_FUNCTION$lambda;
      STATE_REG = new Symbol('STATE_REG');
      STATE_COMPLETED = new Symbol('STATE_COMPLETED');
      STATE_CANCELLED = new Symbol('STATE_CANCELLED');
      NO_RESULT = new Symbol('NO_RESULT');
      PARAM_CLAUSE_0 = new Symbol('PARAM_CLAUSE_0');
    }
  }
  function get_NO_OWNER() {
    _init_properties_Mutex_kt__jod56b();
    return NO_OWNER;
  }
  var NO_OWNER;
  var ON_LOCK_ALREADY_LOCKED_BY_OWNER;
  function Mutex() {
  }
  function Mutex_0(locked) {
    locked = locked === VOID ? false : locked;
    _init_properties_Mutex_kt__jod56b();
    return new MutexImpl(locked);
  }
  function MutexImpl$CancellableContinuationWithOwner$tryResume$lambda(this$0, this$1) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      // Inline function 'kotlinx.coroutines.assert' call
      this$0.t1u_1.kotlinx$atomicfu$value = this$1.w1u_1;
      this$0.k1u(this$1.w1u_1);
      return Unit_instance;
    };
  }
  function MutexImpl$CancellableContinuationWithOwner$resume$lambda(this$0, this$1) {
    return function (it) {
      this$0.k1u(this$1.w1u_1);
      return Unit_instance;
    };
  }
  function holdsLockImpl($this, owner) {
    $l$loop: while (true) {
      if (!$this.h1u())
        return 0;
      var curOwner = $this.t1u_1.kotlinx$atomicfu$value;
      if (curOwner === get_NO_OWNER())
        continue $l$loop;
      return curOwner === owner ? 1 : 2;
    }
  }
  function lockSuspend($this, owner, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      var contWithOwner = new CancellableContinuationWithOwner($this, cancellable, owner);
      $this.acquireCont(contWithOwner);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.a11();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.xx();
  }
  function tryLockImpl($this, owner) {
    $l$loop: while (true) {
      if ($this.f1v()) {
        // Inline function 'kotlinx.coroutines.assert' call
        $this.t1u_1.kotlinx$atomicfu$value = owner;
        return 0;
      } else {
        if (owner == null)
          return 1;
        switch (holdsLockImpl($this, owner)) {
          case 1:
            return 2;
          case 2:
            return 1;
          case 0:
            continue $l$loop;
        }
      }
    }
  }
  function CancellableContinuationWithOwner($outer, cont, owner) {
    this.x1u_1 = $outer;
    this.v1u_1 = cont;
    this.w1u_1 = owner;
  }
  protoOf(CancellableContinuationWithOwner).g1v = function (value, onCancellation) {
    this.v1u_1.gz(Unit_instance, onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).gz = function (value, onCancellation) {
    return this.g1v(value instanceof Unit ? value : THROW_CCE(), onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).bz = function (token) {
    this.v1u_1.bz(token);
  };
  protoOf(CancellableContinuationWithOwner).cz = function (cause) {
    return this.v1u_1.cz(cause);
  };
  protoOf(CancellableContinuationWithOwner).ez = function (handler) {
    this.v1u_1.ez(handler);
  };
  protoOf(CancellableContinuationWithOwner).h1v = function (_this__u8e3s4, value) {
    this.v1u_1.fz(_this__u8e3s4, Unit_instance);
  };
  protoOf(CancellableContinuationWithOwner).fz = function (_this__u8e3s4, value) {
    return this.h1v(_this__u8e3s4, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(CancellableContinuationWithOwner).oe = function (result) {
    this.v1u_1.x8(result);
  };
  protoOf(CancellableContinuationWithOwner).x8 = function (result) {
    return this.oe(result);
  };
  protoOf(CancellableContinuationWithOwner).s8 = function () {
    return this.v1u_1.s8();
  };
  protoOf(CancellableContinuationWithOwner).f11 = function (segment, index) {
    this.v1u_1.f11(segment, index);
  };
  protoOf(CancellableContinuationWithOwner).i1v = function (value, idempotent, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    var token = this.v1u_1.az(value, idempotent, MutexImpl$CancellableContinuationWithOwner$tryResume$lambda(this.x1u_1, this));
    if (!(token == null)) {
      // Inline function 'kotlinx.coroutines.assert' call
      this.x1u_1.t1u_1.kotlinx$atomicfu$value = this.w1u_1;
    }
    return token;
  };
  protoOf(CancellableContinuationWithOwner).az = function (value, idempotent, onCancellation) {
    return this.i1v(value instanceof Unit ? value : THROW_CCE(), idempotent, onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).j1v = function (value, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    this.x1u_1.t1u_1.kotlinx$atomicfu$value = this.w1u_1;
    this.v1u_1.gz(Unit_instance, MutexImpl$CancellableContinuationWithOwner$resume$lambda(this.x1u_1, this));
  };
  protoOf(CancellableContinuationWithOwner).hz = function (value, onCancellation) {
    return this.j1v(value instanceof Unit ? value : THROW_CCE(), onCancellation);
  };
  function MutexImpl$onSelectCancellationUnlockConstructor$lambda$lambda(this$0, $owner) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      this$0.k1u($owner);
      return Unit_instance;
    };
  }
  function MutexImpl$onSelectCancellationUnlockConstructor$lambda(this$0) {
    return function (_unused_var__etf5q3, owner, _unused_var__etf5q3_0) {
      return MutexImpl$onSelectCancellationUnlockConstructor$lambda$lambda(this$0, owner);
    };
  }
  function MutexImpl(locked) {
    SemaphoreAndMutexImpl.call(this, 1, locked ? 1 : 0);
    this.t1u_1 = atomic$ref$1(locked ? null : get_NO_OWNER());
    var tmp = this;
    tmp.u1u_1 = MutexImpl$onSelectCancellationUnlockConstructor$lambda(this);
  }
  protoOf(MutexImpl).h1u = function () {
    return this.k1v() === 0;
  };
  protoOf(MutexImpl).i1u = function (owner, $completion) {
    if (this.l1v(owner))
      return Unit_instance;
    return lockSuspend(this, owner, $completion);
  };
  protoOf(MutexImpl).l1v = function (owner) {
    var tmp;
    switch (tryLockImpl(this, owner)) {
      case 0:
        tmp = true;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        // Inline function 'kotlin.error' call

        var message = 'This mutex is already locked by the specified owner: ' + toString_0(owner);
        throw IllegalStateException_init_$Create$(toString(message));
      default:
        // Inline function 'kotlin.error' call

        var message_0 = 'unexpected';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MutexImpl).k1u = function (owner) {
    $l$loop_0: while (true) {
      // Inline function 'kotlin.check' call
      if (!this.h1u()) {
        var message = 'This mutex is not locked';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var curOwner = this.t1u_1.kotlinx$atomicfu$value;
      if (curOwner === get_NO_OWNER())
        continue $l$loop_0;
      // Inline function 'kotlin.check' call
      if (!(curOwner === owner || owner == null)) {
        var message_0 = 'This mutex is locked by ' + toString_0(curOwner) + ', but ' + toString_0(owner) + ' is expected';
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      if (!this.t1u_1.atomicfu$compareAndSet(curOwner, get_NO_OWNER()))
        continue $l$loop_0;
      this.m1v();
      return Unit_instance;
    }
  };
  protoOf(MutexImpl).toString = function () {
    return 'Mutex@' + get_hexAddress(this) + '[isLocked=' + this.h1u() + ',owner=' + toString_0(this.t1u_1.kotlinx$atomicfu$value) + ']';
  };
  var properties_initialized_Mutex_kt_yv4p3j;
  function _init_properties_Mutex_kt__jod56b() {
    if (!properties_initialized_Mutex_kt_yv4p3j) {
      properties_initialized_Mutex_kt_yv4p3j = true;
      NO_OWNER = new Symbol('NO_OWNER');
      ON_LOCK_ALREADY_LOCKED_BY_OWNER = new Symbol('ALREADY_LOCKED_BY_OWNER');
    }
  }
  function get_MAX_SPIN_CYCLES() {
    _init_properties_Semaphore_kt__t514r6();
    return MAX_SPIN_CYCLES;
  }
  var MAX_SPIN_CYCLES;
  function get_PERMIT() {
    _init_properties_Semaphore_kt__t514r6();
    return PERMIT;
  }
  var PERMIT;
  function get_TAKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return TAKEN;
  }
  var TAKEN;
  function get_BROKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return BROKEN;
  }
  var BROKEN;
  function get_CANCELLED() {
    _init_properties_Semaphore_kt__t514r6();
    return CANCELLED;
  }
  var CANCELLED;
  function get_SEGMENT_SIZE_0() {
    _init_properties_Semaphore_kt__t514r6();
    return SEGMENT_SIZE_0;
  }
  var SEGMENT_SIZE_0;
  function decPermits($this) {
    $l$loop: while (true) {
      var p = $this.d1v_1.atomicfu$getAndDecrement();
      if (p > $this.y1u_1)
        continue $l$loop;
      return p;
    }
  }
  function coerceAvailablePermitsAtMaximum($this) {
    $l$loop_0: while (true) {
      var cur = $this.d1v_1.kotlinx$atomicfu$value;
      if (cur <= $this.y1u_1)
        break $l$loop_0;
      if ($this.d1v_1.atomicfu$compareAndSet(cur, $this.y1u_1))
        break $l$loop_0;
    }
  }
  function addAcquireToQueue($this, waiter) {
    var curTail = $this.b1v_1.kotlinx$atomicfu$value;
    var enqIdx = $this.c1v_1.atomicfu$getAndIncrement$long();
    var createNewSegment = createSegment$ref_0();
    var tmp0 = $this.b1v_1;
    // Inline function 'kotlin.Long.div' call
    var other = get_SEGMENT_SIZE_0();
    var tmp2 = divide(enqIdx, fromInt(other));
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(curTail, tmp2, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2_0 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$2;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp$ret$3;
            // Inline function 'kotlinx.atomicfu.loop' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (compare(cur.f10_1, tmp2_0.f10_1) >= 0) {
                tmp$ret$2 = true;
                break $l$block_1;
              }
              if (!tmp2_0.r19()) {
                tmp$ret$2 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2_0)) {
                if (cur.s19()) {
                  cur.m3();
                }
                tmp$ret$2 = true;
                break $l$block_1;
              }
              if (tmp2_0.s19()) {
                tmp2_0.m3();
              }
            }
            tmp$ret$2 = tmp$ret$3;
          }
          tmp = tmp$ret$2;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp$ret$1);
    // Inline function 'kotlin.Long.rem' call
    var other_0 = get_SEGMENT_SIZE_0();
    var tmp$ret$5 = modulo(enqIdx, fromInt(other_0));
    var i = convertToInt(tmp$ret$5);
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    if (segment.r1v_1.atomicfu$get(i).atomicfu$compareAndSet(null, waiter)) {
      waiter.f11(segment, i);
      return true;
    }
    var tmp4 = get_PERMIT();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    var value = get_TAKEN();
    if (segment.r1v_1.atomicfu$get(i).atomicfu$compareAndSet(tmp4, value)) {
      if (isInterface(waiter, CancellableContinuation)) {
        if (!isInterface(waiter, CancellableContinuation))
          THROW_CCE();
        waiter.hz(Unit_instance, $this.e1v_1);
      } else {
        if (isInterface(waiter, SelectInstance)) {
          waiter.t1b(Unit_instance);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'unexpected: ' + toString(waiter);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      return true;
    }
    // Inline function 'kotlinx.coroutines.assert' call
    return false;
  }
  function tryResumeNextFromQueue($this) {
    var curHead = $this.z1u_1.kotlinx$atomicfu$value;
    var deqIdx = $this.a1v_1.atomicfu$getAndIncrement$long();
    // Inline function 'kotlin.Long.div' call
    var other = get_SEGMENT_SIZE_0();
    var id = divide(deqIdx, fromInt(other));
    var createNewSegment = createSegment$ref_1();
    var tmp0 = $this.z1u_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(curHead, id, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$2;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp$ret$3;
            // Inline function 'kotlinx.atomicfu.loop' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (compare(cur.f10_1, tmp2.f10_1) >= 0) {
                tmp$ret$2 = true;
                break $l$block_1;
              }
              if (!tmp2.r19()) {
                tmp$ret$2 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.s19()) {
                  cur.m3();
                }
                tmp$ret$2 = true;
                break $l$block_1;
              }
              if (tmp2.s19()) {
                tmp2.m3();
              }
            }
            tmp$ret$2 = tmp$ret$3;
          }
          tmp = tmp$ret$2;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp$ret$1);
    segment.z19();
    if (compare(segment.f10_1, id) > 0)
      return false;
    // Inline function 'kotlin.Long.rem' call
    var other_0 = get_SEGMENT_SIZE_0();
    var tmp$ret$5 = modulo(deqIdx, fromInt(other_0));
    var i = convertToInt(tmp$ret$5);
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.getAndSet' call
    var value = get_PERMIT();
    var cellState = segment.r1v_1.atomicfu$get(i).atomicfu$getAndSet(value);
    if (cellState === null) {
      // Inline function 'kotlin.repeat' call
      var times = get_MAX_SPIN_CYCLES();
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.get' call
          if (segment.r1v_1.atomicfu$get(i).kotlinx$atomicfu$value === get_TAKEN())
            return true;
        }
         while (inductionVariable < times);
      var tmp4 = get_PERMIT();
      // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
      var value_0 = get_BROKEN();
      return !segment.r1v_1.atomicfu$get(i).atomicfu$compareAndSet(tmp4, value_0);
    } else if (cellState === get_CANCELLED())
      return false;
    else
      return tryResumeAcquire($this, cellState);
  }
  function tryResumeAcquire($this, $receiver) {
    var tmp;
    if (isInterface($receiver, CancellableContinuation)) {
      if (!isInterface($receiver, CancellableContinuation))
        THROW_CCE();
      var token = $receiver.az(Unit_instance, null, $this.e1v_1);
      var tmp_0;
      if (!(token == null)) {
        $receiver.bz(token);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      if (isInterface($receiver, SelectInstance)) {
        tmp = $receiver.j1b($this, Unit_instance);
      } else {
        // Inline function 'kotlin.error' call
        var message = 'unexpected: ' + toString($receiver);
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return tmp;
  }
  function SemaphoreAndMutexImpl$onCancellationRelease$lambda(this$0) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      this$0.m1v();
      return Unit_instance;
    };
  }
  function createSegment$ref_0() {
    var l = function (p0, p1) {
      return createSegment_0(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  function createSegment$ref_1() {
    var l = function (p0, p1) {
      return createSegment_0(p0, p1);
    };
    l.callableName = 'createSegment';
    return l;
  }
  function SemaphoreAndMutexImpl(permits, acquiredPermits) {
    this.y1u_1 = permits;
    this.a1v_1 = atomic$long$1(new Long(0, 0));
    this.c1v_1 = atomic$long$1(new Long(0, 0));
    // Inline function 'kotlin.require' call
    if (!(this.y1u_1 > 0)) {
      var message = 'Semaphore should have at least 1 permit, but had ' + this.y1u_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(0 <= acquiredPermits ? acquiredPermits <= this.y1u_1 : false)) {
      var message_0 = 'The number of acquired permits should be in 0..' + this.y1u_1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var s = new SemaphoreSegment(new Long(0, 0), null, 2);
    this.z1u_1 = atomic$ref$1(s);
    this.b1v_1 = atomic$ref$1(s);
    this.d1v_1 = atomic$int$1(this.y1u_1 - acquiredPermits | 0);
    var tmp = this;
    tmp.e1v_1 = SemaphoreAndMutexImpl$onCancellationRelease$lambda(this);
  }
  protoOf(SemaphoreAndMutexImpl).k1v = function () {
    // Inline function 'kotlin.math.max' call
    var a = this.d1v_1.kotlinx$atomicfu$value;
    return Math.max(a, 0);
  };
  protoOf(SemaphoreAndMutexImpl).f1v = function () {
    $l$loop: while (true) {
      var p = this.d1v_1.kotlinx$atomicfu$value;
      if (p > this.y1u_1) {
        coerceAvailablePermitsAtMaximum(this);
        continue $l$loop;
      }
      if (p <= 0)
        return false;
      if (this.d1v_1.atomicfu$compareAndSet(p, p - 1 | 0))
        return true;
    }
  };
  protoOf(SemaphoreAndMutexImpl).acquireCont = function (waiter) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreAndMutexImpl.acquire' call
      while (true) {
        var p = decPermits(this);
        if (p > 0) {
          waiter.hz(Unit_instance, this.e1v_1);
          tmp$ret$0 = Unit_instance;
          break $l$block_0;
        }
        if (addAcquireToQueue(this, isInterface(waiter, Waiter) ? waiter : THROW_CCE())) {
          tmp$ret$0 = Unit_instance;
          break $l$block_0;
        }
      }
      tmp$ret$0 = Unit_instance;
    }
    return tmp$ret$0;
  };
  protoOf(SemaphoreAndMutexImpl).m1v = function () {
    while (true) {
      var p = this.d1v_1.atomicfu$getAndIncrement();
      if (p >= this.y1u_1) {
        coerceAvailablePermitsAtMaximum(this);
        // Inline function 'kotlin.error' call
        var message = 'The number of released permits cannot be greater than ' + this.y1u_1;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      if (p >= 0)
        return Unit_instance;
      if (tryResumeNextFromQueue(this))
        return Unit_instance;
    }
  };
  function SemaphoreSegment(id, prev, pointers) {
    Segment.call(this, id, prev, pointers);
    this.r1v_1 = atomicfu$AtomicRefArray$ofNulls(get_SEGMENT_SIZE_0());
  }
  protoOf(SemaphoreSegment).s18 = function () {
    return get_SEGMENT_SIZE_0();
  };
  protoOf(SemaphoreSegment).h10 = function (index, cause, context) {
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.set' call
    var value = get_CANCELLED();
    this.r1v_1.atomicfu$get(index).kotlinx$atomicfu$value = value;
    this.p19();
  };
  protoOf(SemaphoreSegment).toString = function () {
    return 'SemaphoreSegment[id=' + this.f10_1.toString() + ', hashCode=' + hashCode(this) + ']';
  };
  function createSegment_0(id, prev) {
    _init_properties_Semaphore_kt__t514r6();
    return new SemaphoreSegment(id, prev, 0);
  }
  var properties_initialized_Semaphore_kt_uqcwok;
  function _init_properties_Semaphore_kt__t514r6() {
    if (!properties_initialized_Semaphore_kt_uqcwok) {
      properties_initialized_Semaphore_kt_uqcwok = true;
      MAX_SPIN_CYCLES = systemProp('kotlinx.coroutines.semaphore.maxSpinCycles', 100);
      PERMIT = new Symbol('PERMIT');
      TAKEN = new Symbol('TAKEN');
      BROKEN = new Symbol('BROKEN');
      CANCELLED = new Symbol('CANCELLED');
      SEGMENT_SIZE_0 = systemProp('kotlinx.coroutines.semaphore.segmentSize', 16);
    }
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = window != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = !(typeof window.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' || typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return !(typeof navigator === 'undefined') && navigator != null && navigator.userAgent != null && !(typeof navigator.userAgent === 'undefined') && !(typeof navigator.userAgent.match === 'undefined') && navigator.userAgent.match('\\bjsdom\\b');
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_hexAddress(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var result = _this__u8e3s4.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).y9();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).u1v = function () {
    process.nextTick(this.b1w_1.z1v_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.f1w();
      return Unit_instance;
    };
  }
  function ScheduledMessageQueue(dispatcher) {
    MessageQueue.call(this);
    this.y1v_1 = dispatcher;
    var tmp = this;
    tmp.z1v_1 = ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).g1w = function () {
    this.y1v_1.u1v();
  };
  protoOf(ScheduledMessageQueue).h1w = function () {
    setTimeout(this.z1v_1, 0);
  };
  protoOf(ScheduledMessageQueue).i1w = function (timeout) {
    setTimeout(this.z1v_1, timeout);
  };
  function w3cSetTimeout(handler, timeout) {
    return setTimeout(handler, timeout);
  }
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.v1w_1 && event.data == this$0.w1w_1) {
        event.stopPropagation();
        this$0.f1w();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.f1w();
      return Unit_instance;
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.v1w_1 = window_0;
    this.w1w_1 = 'dispatchCoroutine';
    this.v1w_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).g1w = function () {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).h1w = function () {
    this.v1w_1.postMessage(this.w1w_1, '*');
  };
  function w3cSetTimeout_0(window_0, handler, timeout) {
    return setTimeout_0(window_0, handler, timeout);
  }
  function w3cClearTimeout(window_0, handle) {
    return window_0.clearTimeout(handle);
  }
  function w3cClearTimeout_0(handle) {
    return clearTimeout(handle);
  }
  function setTimeout_0(window_0, handler, timeout) {
    return window_0.setTimeout(handler, timeout);
  }
  function await_0(_this__u8e3s4, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.t10();
    var tmp = await$lambda(cancellable);
    _this__u8e3s4.then(tmp, await$lambda_0(cancellable));
    return cancellable.xx();
  }
  function await$lambda($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(it);
      this_0.x8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function await$lambda_0($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(it));
      this_0.x8(tmp$ret$1);
      return Unit_instance;
    };
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function propagateExceptionFinalResort(exception) {
    console.error(exception.toString());
  }
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).x12 = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).u1v = function () {
    this.b1w_1.i1w(0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.m11();
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      $continuation.fz(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.b1w_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).x12 = function (context, block) {
    this.b1w_1.r1w(block);
  };
  protoOf(SetTimeoutBasedDispatcher).h13 = function (timeMillis, block, context) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  protoOf(SetTimeoutBasedDispatcher).g13 = function (timeMillis, continuation) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new ClearTimeout(handle));
  };
  function MessageQueue() {
    this.c1w_1 = ArrayDeque_init_$Create$();
    this.d1w_1 = 16;
    this.e1w_1 = false;
  }
  protoOf(MessageQueue).j1w = function (element) {
    return this.c1w_1.h(element);
  };
  protoOf(MessageQueue).h = function (element) {
    return this.j1w((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).k1w = function (index, element) {
    this.c1w_1.u1(index, element);
  };
  protoOf(MessageQueue).u1 = function (index, element) {
    return this.k1w(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).l1w = function (index, elements) {
    return this.c1w_1.r1(index, elements);
  };
  protoOf(MessageQueue).r1 = function (index, elements) {
    return this.l1w(index, elements);
  };
  protoOf(MessageQueue).m1w = function (elements) {
    return this.c1w_1.r(elements);
  };
  protoOf(MessageQueue).r = function (elements) {
    return this.m1w(elements);
  };
  protoOf(MessageQueue).s1 = function () {
    this.c1w_1.s1();
  };
  protoOf(MessageQueue).s = function (index) {
    return this.c1w_1.s(index);
  };
  protoOf(MessageQueue).n1w = function (element) {
    return this.c1w_1.q1(element);
  };
  protoOf(MessageQueue).q1 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.n1w((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).v1 = function (index) {
    return this.c1w_1.v1(index);
  };
  protoOf(MessageQueue).o1w = function (index, element) {
    return this.c1w_1.t1(index, element);
  };
  protoOf(MessageQueue).t1 = function (index, element) {
    return this.o1w(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).o1 = function (fromIndex, toIndex) {
    return this.c1w_1.o1(fromIndex, toIndex);
  };
  protoOf(MessageQueue).p1w = function (element) {
    return this.c1w_1.t(element);
  };
  protoOf(MessageQueue).t = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.p1w((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).m = function (index) {
    return this.c1w_1.m(index);
  };
  protoOf(MessageQueue).q1w = function (element) {
    return this.c1w_1.u(element);
  };
  protoOf(MessageQueue).u = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.q1w((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).n = function () {
    return this.c1w_1.n();
  };
  protoOf(MessageQueue).i = function () {
    return this.c1w_1.i();
  };
  protoOf(MessageQueue).l = function () {
    return this.c1w_1.gd_1;
  };
  protoOf(MessageQueue).r1w = function (element) {
    this.j1w(element);
    if (!this.e1w_1) {
      this.e1w_1 = true;
      this.g1w();
    }
  };
  protoOf(MessageQueue).f1w = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.d1w_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0_elvis_lhs = removeFirstOrNull(this);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_instance;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.m11();
        }
         while (inductionVariable < times);
    }finally {
      if (this.n()) {
        this.e1w_1 = false;
      } else {
        this.h1w();
      }
    }
  };
  function WindowClearTimeout($outer, handle) {
    this.e1x_1 = $outer;
    ClearTimeout.call(this, handle);
  }
  protoOf(WindowClearTimeout).rz = function () {
    w3cClearTimeout(this.e1x_1.g1x_1, this.i1x_1);
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      $continuation.fz(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function Runnable$run$ref(p0) {
    var l = function () {
      p0.m11();
      return Unit_instance;
    };
    l.callableName = 'run';
    return l;
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.g1x_1 = window_0;
    this.h1x_1 = new WindowMessageQueue(this.g1x_1);
  }
  protoOf(WindowDispatcher).x12 = function (context, block) {
    return this.h1x_1.r1w(block);
  };
  protoOf(WindowDispatcher).g13 = function (timeMillis, continuation) {
    var handle = w3cSetTimeout_0(this.g1x_1, WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new WindowClearTimeout(this, handle));
  };
  protoOf(WindowDispatcher).h13 = function (timeMillis, block, context) {
    var handle = w3cSetTimeout_0(this.g1x_1, Runnable$run$ref(block), delayToInt(timeMillis));
    return new WindowClearTimeout(this, handle);
  };
  function delayToInt(timeMillis) {
    return convertToInt(coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)));
  }
  function ClearTimeout(handle) {
    this.i1x_1 = handle;
  }
  protoOf(ClearTimeout).rz = function () {
    w3cClearTimeout_0(this.i1x_1);
  };
  protoOf(ClearTimeout).qz = function (cause) {
    this.rz();
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.i1x_1 + ']';
  };
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.sv().jf(context);
    return !(combined === Dispatchers_getInstance().b13_1) && combined.z8(Key_instance) == null ? combined.jf(Dispatchers_getInstance().b13_1) : combined;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.jf(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(UndispatchedCoroutine).cw = function (state) {
    return this.zy_1.x8(recoverResult(state, this.zy_1));
  };
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().b13_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.b13_1 = createDefaultDispatcher();
    this.c13_1 = Unconfined_getInstance();
    this.d13_1 = new JsMainDispatcher(this.b13_1, false);
    this.e13_1 = null;
  }
  protoOf(Dispatchers).f13 = function () {
    var tmp0_elvis_lhs = this.e13_1;
    return tmp0_elvis_lhs == null ? this.d13_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.o1x_1 = delegate;
    this.p1x_1 = invokeImmediately;
    this.q1x_1 = this.p1x_1 ? this : new JsMainDispatcher(this.o1x_1, true);
  }
  protoOf(JsMainDispatcher).h17 = function () {
    return this.q1x_1;
  };
  protoOf(JsMainDispatcher).w12 = function (context) {
    return !this.p1x_1;
  };
  protoOf(JsMainDispatcher).x12 = function (context, block) {
    return this.o1x_1.x12(context, block);
  };
  protoOf(JsMainDispatcher).y12 = function (context, block) {
    return this.o1x_1.y12(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.i17();
    return tmp0_elvis_lhs == null ? this.o1x_1.toString() : tmp0_elvis_lhs;
  };
  function get_RECOVER_STACK_TRACES() {
    return RECOVER_STACK_TRACES;
  }
  var RECOVER_STACK_TRACES;
  function CancellationException_0(message, cause) {
    return CancellationException_init_$Create$_0(message, cause);
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    captureStack(this, JobCancellationException);
    this.r1x_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + toString(this.r1x_1);
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.r1x_1, this.r1x_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.r1x_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs) | 0;
  };
  function Runnable() {
  }
  function SchedulerTask() {
  }
  function ChildCancelledException() {
  }
  function SafeCollector$collectContextSize$lambda(count, _unused_var__etf5q3) {
    return count + 1 | 0;
  }
  function SafeCollector(collector, collectContext) {
    this.j1h_1 = collector;
    this.k1h_1 = collectContext;
    var tmp = this;
    tmp.l1h_1 = this.k1h_1.if(0, SafeCollector$collectContextSize$lambda);
    this.m1h_1 = null;
  }
  protoOf(SafeCollector).x1g = function (value, $completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var currentContext = $completion.s8();
    ensureActive(currentContext);
    if (!(this.m1h_1 === currentContext)) {
      checkContext(this, currentContext);
      this.m1h_1 = currentContext;
    }
    return this.j1h_1.x1g(value, $completion);
  };
  protoOf(SafeCollector).w8 = function () {
  };
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function WorkaroundAtomicReference(value) {
    this.o1k_1 = value;
  }
  protoOf(WorkaroundAtomicReference).x13 = function () {
    return this.o1k_1;
  };
  protoOf(WorkaroundAtomicReference).w1q = function (value) {
    this.o1k_1 = value;
  };
  protoOf(WorkaroundAtomicReference).q1k = function (value) {
    var prev = this.o1k_1;
    this.o1k_1 = value;
    return prev;
  };
  protoOf(WorkaroundAtomicReference).p1k = function (expected, value) {
    if (this.o1k_1 === expected) {
      this.o1k_1 = value;
      return true;
    }
    return false;
  };
  function get_platformExceptionHandlers_() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return platformExceptionHandlers_;
  }
  var platformExceptionHandlers_;
  function get_platformExceptionHandlers() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return get_platformExceptionHandlers_();
  }
  function DiagnosticCoroutineContextException(context) {
    RuntimeException_init_$Init$_0(toString(context), this);
    captureStack(this, DiagnosticCoroutineContextException);
  }
  var properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx;
  function _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf() {
    if (!properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx) {
      properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      platformExceptionHandlers_ = LinkedHashSet_init_$Create$();
    }
  }
  function LockFreeLinkedListNode() {
    this.c12_1 = this;
    this.d12_1 = this;
    this.e12_1 = false;
  }
  protoOf(LockFreeLinkedListNode).f12 = function (node, permissionsBitmask) {
    var prev = this.d12_1;
    var tmp;
    if (prev instanceof ListClosed) {
      tmp = ((prev.v1x_1 & permissionsBitmask) === 0 && prev.f12(node, permissionsBitmask));
    } else {
      node.c12_1 = this;
      node.d12_1 = prev;
      prev.c12_1 = node;
      this.d12_1 = node;
      tmp = true;
    }
    return tmp;
  };
  protoOf(LockFreeLinkedListNode).l14 = function (forbiddenElementsBit) {
    this.f12(new ListClosed(forbiddenElementsBit), forbiddenElementsBit);
  };
  protoOf(LockFreeLinkedListNode).g12 = function () {
    if (this.e12_1)
      return false;
    var prev = this.d12_1;
    var next = this.c12_1;
    prev.c12_1 = next;
    next.d12_1 = prev;
    this.e12_1 = true;
    return true;
  };
  protoOf(LockFreeLinkedListNode).h12 = function (node) {
    if (!(this.c12_1 === this))
      return false;
    this.f12(node, -2147483648);
    return true;
  };
  function LockFreeLinkedListHead() {
    LockFreeLinkedListNode.call(this);
  }
  function ListClosed(forbiddenElementsBitmask) {
    LockFreeLinkedListNode.call(this);
    this.v1x_1 = forbiddenElementsBitmask;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function SynchronizedObject() {
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.w13_1 = null;
  }
  protoOf(CommonThreadLocal).x13 = function () {
    return this.w13_1;
  };
  protoOf(CommonThreadLocal).y13 = function (value) {
    this.w13_1 = value;
  };
  function commonThreadLocal(name) {
    return new CommonThreadLocal();
  }
  //region block: post-declaration
  protoOf(JobSupport).cx = cancel$default;
  protoOf(JobSupport).jf = plus;
  protoOf(JobSupport).z8 = get_0;
  protoOf(JobSupport).if = fold;
  protoOf(JobSupport).hf = minusKey_0;
  protoOf(CancellableContinuationImpl).dz = cancel$default_0;
  protoOf(CoroutineDispatcher).z8 = get;
  protoOf(CoroutineDispatcher).hf = minusKey;
  protoOf(BufferedChannel).b1e = close$default;
  protoOf(ChannelCoroutine).b1e = close$default;
  protoOf(CancellableContinuationWithOwner).dz = cancel$default_0;
  protoOf(MutexImpl).j1u = lock$default;
  protoOf(MutexImpl).l1u = unlock$default;
  //endregion
  //region block: init
  Active_instance = new Active();
  Key_instance_1 = new Key_0();
  Key_instance_2 = new Key_1();
  GlobalScope_instance = new GlobalScope();
  Key_instance_3 = new Key_2();
  NonDisposableHandle_instance = new NonDisposableHandle();
  Key_instance_4 = new Key_3();
  counter = 0;
  DEBUG = false;
  RECOVER_STACK_TRACES = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Key_instance_1;
  _.$_$.b = Key_instance_2;
  _.$_$.c = Dispatchers_getInstance;
  _.$_$.d = GlobalScope_instance;
  _.$_$.e = Key_instance_3;
  _.$_$.f = BufferOverflow_DROP_LATEST_getInstance;
  _.$_$.g = BufferOverflow_DROP_OLDEST_getInstance;
  _.$_$.h = CoroutineStart_DEFAULT_getInstance;
  _.$_$.i = CoroutineStart_LAZY_getInstance;
  _.$_$.j = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.k = await_0;
  _.$_$.l = cancelAndJoin;
  _.$_$.m = coroutineScope;
  _.$_$.n = delay;
  _.$_$.o = supervisorScope;
  _.$_$.p = withContext;
  _.$_$.q = withTimeoutOrNull;
  _.$_$.r = yield_0;
  _.$_$.s = ChannelResult__getOrNull_impl_f5e07h;
  _.$_$.t = _ChannelResult___get_isSuccess__impl__odq1z9;
  _.$_$.u = ChannelResult;
  _.$_$.v = Channel;
  _.$_$.w = cancelConsumed;
  _.$_$.x = FlowCollector;
  _.$_$.y = MutableSharedFlow;
  _.$_$.z = MutableStateFlow;
  _.$_$.a1 = asStateFlow;
  _.$_$.b1 = debounce;
  _.$_$.c1 = flow;
  _.$_$.d1 = receiveAsFlow;
  _.$_$.e1 = Mutex_0;
  _.$_$.f1 = CancellableContinuationImpl;
  _.$_$.g1 = CompletableDeferred;
  _.$_$.h1 = CoroutineDispatcher;
  _.$_$.i1 = CoroutineScope_0;
  _.$_$.j1 = CoroutineScope;
  _.$_$.k1 = invokeOnTimeout;
  _.$_$.l1 = Delay;
  _.$_$.m1 = Job_0;
  _.$_$.n1 = Job;
  _.$_$.o1 = MainScope;
  _.$_$.p1 = Runnable;
  _.$_$.q1 = SupervisorJob;
  _.$_$.r1 = async;
  _.$_$.s1 = cancel;
  _.$_$.t1 = cancel_1;
  _.$_$.u1 = cancel_0;
  _.$_$.v1 = get_isActive_0;
  _.$_$.w1 = get_isActive;
  _.$_$.x1 = get_job;
  _.$_$.y1 = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-coroutines-core.js.map
