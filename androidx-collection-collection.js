(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-collection-collection'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-collection-collection'.");
    }
    globalThis['androidx-collection-collection'] = factory(typeof globalThis['androidx-collection-collection'] === 'undefined' ? {} : globalThis['androidx-collection-collection'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var clz32 = Math.clz32;
  var equals = kotlin_kotlin.$_$.f9;
  var Unit_instance = kotlin_kotlin.$_$.n;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var IndexOutOfBoundsException = kotlin_kotlin.$_$.fd;
  var VOID = kotlin_kotlin.$_$.c;
  var protoOf = kotlin_kotlin.$_$.fa;
  var arrayCopy = kotlin_kotlin.$_$.y3;
  var copyOf = kotlin_kotlin.$_$.o4;
  var initMetadataForClass = kotlin_kotlin.$_$.n9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.l1;
  var getNumberHashCode = kotlin_kotlin.$_$.j9;
  var until = kotlin_kotlin.$_$.ab;
  var toRawBits = kotlin_kotlin.$_$.ke;
  var fromInt = kotlin_kotlin.$_$.i8;
  var shiftLeft = kotlin_kotlin.$_$.o8;
  var Long = kotlin_kotlin.$_$.gd;
  var bitwiseAnd = kotlin_kotlin.$_$.a8;
  var bitwiseOr = kotlin_kotlin.$_$.b8;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var longArray = kotlin_kotlin.$_$.z9;
  var fill = kotlin_kotlin.$_$.y4;
  var invert = kotlin_kotlin.$_$.j8;
  var shiftRightUnsigned = kotlin_kotlin.$_$.p8;
  var negate = kotlin_kotlin.$_$.m8;
  var shiftRight = kotlin_kotlin.$_$.q8;
  var multiply = kotlin_kotlin.$_$.l8;
  var bitwiseXor = kotlin_kotlin.$_$.c8;
  var subtract = kotlin_kotlin.$_$.r8;
  var equalsLong = kotlin_kotlin.$_$.h8;
  var countTrailingZeroBits = kotlin_kotlin.$_$.sd;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.a3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.b3;
  var ulongCompare = kotlin_kotlin.$_$.pe;
  var add = kotlin_kotlin.$_$.z7;
  var get_lastIndex = kotlin_kotlin.$_$.q5;
  var compare = kotlin_kotlin.$_$.d8;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.p2;
  var copyOf_0 = kotlin_kotlin.$_$.r4;
  var fill_0 = kotlin_kotlin.$_$.z4;
  var hashCode = kotlin_kotlin.$_$.m9;
  var THROW_CCE = kotlin_kotlin.$_$.ld;
  var copyOf_1 = kotlin_kotlin.$_$.m4;
  var toString = kotlin_kotlin.$_$.ha;
  var ensureNotNull = kotlin_kotlin.$_$.ud;
  var firstOrNull = kotlin_kotlin.$_$.b5;
  var toString_0 = kotlin_kotlin.$_$.me;
  var KtMutableList = kotlin_kotlin.$_$.s3;
  var checkIndexOverflow = kotlin_kotlin.$_$.d4;
  var convertToInt = kotlin_kotlin.$_$.e8;
  var CoroutineImpl = kotlin_kotlin.$_$.s7;
  var SequenceScope = kotlin_kotlin.$_$.hb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.d7;
  var initMetadataForLambda = kotlin_kotlin.$_$.s9;
  var iterator = kotlin_kotlin.$_$.kb;
  var KtSet = kotlin_kotlin.$_$.w3;
  var MutableCollection = kotlin_kotlin.$_$.r3;
  var getKClassFromExpression = kotlin_kotlin.$_$.bb;
  var KtMap = kotlin_kotlin.$_$.q3;
  var numberRangeToNumber = kotlin_kotlin.$_$.aa;
  var Collection = kotlin_kotlin.$_$.n3;
  var isInterface = kotlin_kotlin.$_$.w9;
  var Entry = kotlin_kotlin.$_$.p3;
  var longArrayOf = kotlin_kotlin.$_$.y9;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.c2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var ClassCastException = kotlin_kotlin.$_$.xc;
  var NullPointerException = kotlin_kotlin.$_$.jd;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.k1;
  var copyOf_2 = kotlin_kotlin.$_$.q4;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(DoubleList, 'DoubleList');
  initMetadataForClass(MutableDoubleList, 'MutableDoubleList', MutableDoubleList, DoubleList);
  initMetadataForClass(IndexBasedArrayIterator, 'IndexBasedArrayIterator');
  initMetadataForClass(IntIntMap, 'IntIntMap');
  initMetadataForClass(MutableIntIntMap, 'MutableIntIntMap', MutableIntIntMap, IntIntMap);
  initMetadataForClass(IntList, 'IntList');
  initMetadataForClass(MutableIntList, 'MutableIntList', MutableIntList, IntList);
  initMetadataForClass(IntObjectMap, 'IntObjectMap');
  initMetadataForClass(MutableIntObjectMap, 'MutableIntObjectMap', MutableIntObjectMap, IntObjectMap);
  initMetadataForClass(IntSet, 'IntSet');
  initMetadataForClass(MutableIntSet, 'MutableIntSet', MutableIntSet, IntSet);
  initMetadataForClass(LongList, 'LongList');
  initMetadataForClass(MutableLongList, 'MutableLongList', MutableLongList, LongList);
  initMetadataForClass(LongObjectMap, 'LongObjectMap');
  initMetadataForClass(MutableLongObjectMap, 'MutableLongObjectMap', MutableLongObjectMap, LongObjectMap);
  initMetadataForClass(LongSet, 'LongSet');
  initMetadataForClass(MutableLongSet, 'MutableLongSet', MutableLongSet, LongSet);
  initMetadataForClass(LruCache, 'LruCache');
  initMetadataForClass(ObjectIntMap, 'ObjectIntMap');
  initMetadataForClass(MutableObjectIntMap, 'MutableObjectIntMap', MutableObjectIntMap, ObjectIntMap);
  initMetadataForClass(MutableObjectListIterator, 'MutableObjectListIterator');
  initMetadataForClass(ObjectListMutableList, 'ObjectListMutableList', VOID, VOID, [KtMutableList]);
  initMetadataForClass(SubList, 'SubList', VOID, VOID, [KtMutableList]);
  initMetadataForClass(ObjectList, 'ObjectList');
  initMetadataForClass(MutableObjectList, 'MutableObjectList', MutableObjectList, ObjectList);
  initMetadataForClass(OrderedScatterSet, 'OrderedScatterSet');
  initMetadataForClass(MutableOrderedScatterSet, 'MutableOrderedScatterSet', MutableOrderedScatterSet, OrderedScatterSet);
  initMetadataForLambda(MutableOrderedSetWrapper$iterator$o$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(MutableOrderedSetWrapper$iterator$1);
  initMetadataForClass(OrderedSetWrapper, 'OrderedSetWrapper', VOID, VOID, [KtSet]);
  initMetadataForClass(MutableOrderedSetWrapper, 'MutableOrderedSetWrapper', VOID, OrderedSetWrapper, [KtSet, MutableCollection]);
  initMetadataForLambda(OrderedSetWrapper$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ScatterMap, 'ScatterMap');
  initMetadataForClass(MutableScatterMap, 'MutableScatterMap', MutableScatterMap, ScatterMap);
  initMetadataForClass(MapWrapper, 'MapWrapper', VOID, VOID, [KtMap]);
  initMetadataForLambda(Entries$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(Entries, 'Entries', VOID, VOID, [KtSet]);
  initMetadataForLambda(Keys$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(Keys, 'Keys', VOID, VOID, [KtSet]);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(ScatterSet, 'ScatterSet');
  initMetadataForClass(MutableScatterSet, 'MutableScatterSet', MutableScatterSet, ScatterSet);
  initMetadataForLambda(MutableSetWrapper$iterator$o$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(MutableSetWrapper$iterator$1);
  initMetadataForClass(SetWrapper, 'SetWrapper', VOID, VOID, [KtSet]);
  initMetadataForClass(MutableSetWrapper, 'MutableSetWrapper', VOID, SetWrapper, [KtSet, MutableCollection]);
  initMetadataForLambda(SetWrapper$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ElementIterator, 'ElementIterator', VOID, IndexBasedArrayIterator);
  initMetadataForClass(ArraySet, 'ArraySet', ArraySet, VOID, [MutableCollection, KtSet]);
  initMetadataForClass(LongSparseArray, 'LongSparseArray', LongSparseArray);
  initMetadataForClass(LruHashMap, 'LruHashMap', LruHashMap);
  initMetadataForClass(Lock, 'Lock', Lock);
  //endregion
  function allocArrays(_this__u8e3s4, size) {
    _this__u8e3s4.jh_1 = new Int32Array(size);
    var tmp = _this__u8e3s4;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.kh_1 = Array(size);
  }
  function indexOfNull(_this__u8e3s4) {
    return indexOf(_this__u8e3s4, null, 0);
  }
  function indexOf(_this__u8e3s4, key, hash) {
    var n = _this__u8e3s4.lh_1;
    if (n === 0) {
      return -1;
    }
    var index = binarySearchInternal(_this__u8e3s4, hash);
    if (index < 0) {
      return index;
    }
    if (equals(key, _this__u8e3s4.kh_1[index])) {
      return index;
    }
    var end = index + 1 | 0;
    while (end < n && _this__u8e3s4.jh_1[end] === hash) {
      if (equals(key, _this__u8e3s4.kh_1[end])) {
        return end;
      }
      end = end + 1 | 0;
    }
    var i = index - 1 | 0;
    while (i >= 0 && _this__u8e3s4.jh_1[i] === hash) {
      if (equals(key, _this__u8e3s4.kh_1[i])) {
        return i;
      }
      i = i - 1 | 0;
    }
    return ~end;
  }
  function binarySearchInternal(_this__u8e3s4, hash) {
    var tmp;
    try {
      tmp = binarySearch(_this__u8e3s4.jh_1, _this__u8e3s4.lh_1, hash);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof IndexOutOfBoundsException) {
        var e = $p;
        throw ConcurrentModificationException_init_$Create$();
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function MutableDoubleList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    DoubleList.call(this, initialCapacity);
  }
  protoOf(MutableDoubleList).oh = function (element) {
    this.rh(this.qh_1 + 1 | 0);
    this.ph_1[this.qh_1] = element;
    this.qh_1 = this.qh_1 + 1 | 0;
    return true;
  };
  protoOf(MutableDoubleList).sh = function (index, elements) {
    if (!(0 <= index ? index <= this.qh_1 : false)) {
      throwIndexOutOfBoundsException('');
    }
    // Inline function 'kotlin.collections.isEmpty' call
    if (elements.length === 0)
      return false;
    this.rh(this.qh_1 + elements.length | 0);
    var content = this.ph_1;
    if (!(index === this.qh_1)) {
      var tmp4 = index + elements.length | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.qh_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = content;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, content, tmp4, index, endIndex);
    }
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = elements.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = elements;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, content, index, 0, endIndex_0);
    this.qh_1 = this.qh_1 + elements.length | 0;
    return true;
  };
  protoOf(MutableDoubleList).rh = function (capacity) {
    var oldContent = this.ph_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.ph_1 = copyOf(oldContent, newSize);
    }
  };
  function DoubleList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyDoubleArray();
    } else {
      tmp_0 = new Float64Array(initialCapacity);
    }
    tmp.ph_1 = tmp_0;
    this.qh_1 = 0;
  }
  protoOf(DoubleList).th = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.g(prefix);
      // Inline function 'androidx.collection.DoubleList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.ph_1;
      var inductionVariable = 0;
      var last = this.qh_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element = content[i];
          if (i === limit) {
            this_0.g(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.g(separator);
          }
          this_0.fb(element);
        }
         while (inductionVariable < last);
      this_0.g(postfix);
    }
    return this_0.toString();
  };
  protoOf(DoubleList).uh = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.th(separator, prefix, postfix, limit, truncated) : $super.th.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(DoubleList).hashCode = function () {
    var hashCode = 0;
    // Inline function 'androidx.collection.DoubleList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.ph_1;
    var inductionVariable = 0;
    var last = this.qh_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = content[i];
        hashCode = hashCode + imul(31, getNumberHashCode(element)) | 0;
      }
       while (inductionVariable < last);
    return hashCode;
  };
  protoOf(DoubleList).equals = function (other) {
    var tmp;
    if (!(other instanceof DoubleList)) {
      tmp = true;
    } else {
      tmp = !(other.qh_1 === this.qh_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.ph_1;
    var otherContent = other.ph_1;
    // Inline function 'androidx.collection.DoubleList.indices' call
    var progression = until(0, this.qh_1);
    var inductionVariable = progression.x_1;
    var last = progression.y_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(content[i] === otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(DoubleList).toString = function () {
    return this.uh(VOID, '[', ']');
  };
  function get_EmptyDoubleArray() {
    _init_properties_DoubleSet_kt__4b4k9t();
    return EmptyDoubleArray;
  }
  var EmptyDoubleArray;
  var properties_initialized_DoubleSet_kt_kcrj8h;
  function _init_properties_DoubleSet_kt__4b4k9t() {
    if (!properties_initialized_DoubleSet_kt_kcrj8h) {
      properties_initialized_DoubleSet_kt_kcrj8h = true;
      EmptyDoubleArray = new Float64Array(0);
    }
  }
  function _FloatFloatPair___init__impl__2q1dd3(packedValue) {
    return packedValue;
  }
  function _FloatFloatPair___get_packedValue__impl__5lczxp($this) {
    return $this;
  }
  function _FloatFloatPair___init__impl__2q1dd3_0(first, second) {
    // Inline function 'androidx.collection.packFloats' call
    var v1 = fromInt(toRawBits(first));
    var v2 = fromInt(toRawBits(second));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _FloatFloatPair___init__impl__2q1dd3(tmp$ret$0);
  }
  function IndexBasedArrayIterator(startingSize) {
    this.vh_1 = startingSize;
    this.wh_1 = 0;
    this.xh_1 = false;
  }
  protoOf(IndexBasedArrayIterator).j = function () {
    return this.wh_1 < this.vh_1;
  };
  protoOf(IndexBasedArrayIterator).k = function () {
    if (!this.j()) {
      throw NoSuchElementException_init_$Create$();
    }
    var res = this.yh(this.wh_1);
    this.wh_1 = this.wh_1 + 1 | 0;
    this.xh_1 = true;
    return res;
  };
  protoOf(IndexBasedArrayIterator).m3 = function () {
    // Inline function 'androidx.collection.internal.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.xh_1) {
      var tmp$ret$2 = 'Call next() before removing an element.';
      throwIllegalStateException(tmp$ret$2);
    }
    this.wh_1 = this.wh_1 - 1 | 0;
    this.zh(this.wh_1);
    this.vh_1 = this.vh_1 - 1 | 0;
    this.xh_1 = false;
  };
  function initializeStorage($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.di_1 = newCapacity;
    initializeMetadata($this, newCapacity);
    $this.bi_1 = new Int32Array(newCapacity);
    $this.ci_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.ai_1 = tmp_0;
    var tmp0 = $this.ai_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth($this);
  }
  function initializeGrowth($this) {
    $this.ki_1 = loadedCapacity($this.li()) - $this.ei_1 | 0;
  }
  function findInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.di_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.ai_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$5 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$5);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if ($this.bi_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$10 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$10, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot($this, hash1);
    var tmp_0;
    if ($this.ki_1 === 0) {
      var tmp0_0 = $this.ai_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$12 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$12, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.mi();
      index_0 = findFirstAvailableSlot($this, hash1);
    }
    $this.ei_1 = $this.ei_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.ki_1;
    var tmp_3;
    var tmp0_1 = $this.ai_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$14 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$14, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.ki_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.ai_1;
    var tmp2 = $this.di_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return ~index_0;
  }
  function findFirstAvailableSlot($this, hash1) {
    var probeMask = $this.di_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.ai_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableIntIntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntIntMap.call(this);
    this.ki_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$2 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$2);
    }
    initializeStorage(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntIntMap).ni = function (key, value) {
    var index = findInsertIndex(this, key);
    if (index < 0)
      index = ~index;
    this.bi_1[index] = key;
    this.ci_1[index] = value;
  };
  protoOf(MutableIntIntMap).mi = function () {
    var tmp;
    if (this.di_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.ei_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.di_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.pi();
    } else {
      this.oi(nextCapacity(this.di_1));
    }
  };
  protoOf(MutableIntIntMap).pi = function () {
    var metadata = this.ai_1;
    var capacity = this.di_1;
    var keys = this.bi_1;
    var values = this.ci_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      var k = keys[index];
      var hash = imul(k, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        keys[targetIndex] = keys[index];
        keys[index] = 0;
        values[targetIndex] = values[index];
        values[index] = 0;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth(this);
  };
  protoOf(MutableIntIntMap).oi = function (newCapacity) {
    var previousMetadata = this.ai_1;
    var previousKeys = this.bi_1;
    var previousValues = this.ci_1;
    var previousCapacity = this.di_1;
    initializeStorage(this, newCapacity);
    var newMetadata = this.ai_1;
    var newKeys = this.bi_1;
    var newValues = this.ci_1;
    var capacity = this.di_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$1 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$1, new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot(this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$4);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function IntIntMap() {
    this.ai_1 = get_EmptyGroup();
    this.bi_1 = get_EmptyIntArray();
    this.ci_1 = get_EmptyIntArray();
    this.di_1 = 0;
    this.ei_1 = 0;
  }
  protoOf(IntIntMap).li = function () {
    return this.di_1;
  };
  protoOf(IntIntMap).l = function () {
    return this.ei_1;
  };
  protoOf(IntIntMap).n = function () {
    return this.ei_1 === 0;
  };
  protoOf(IntIntMap).m = function (key) {
    var index = this.ri(key);
    if (index < 0) {
      throwNoSuchElementException('Cannot find value for key ' + key);
    }
    return this.ci_1[index];
  };
  protoOf(IntIntMap).qi = function (key) {
    return this.ri(key) >= 0;
  };
  protoOf(IntIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.bi_1;
    var v = this.ci_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.ai_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
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
                  hash = hash + (k[index] ^ v[index]) | 0;
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
    return hash;
  };
  protoOf(IntIntMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntIntMap)) {
      return false;
    }
    if (!(other.l() === this.l())) {
      return false;
    }
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.bi_1;
    var v = this.ci_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.ai_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
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
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  var index_0 = other.ri(tmp0);
                  if (index_0 < 0 || !(value_0 === other.ci_1[index_0])) {
                    return false;
                  }
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
    return true;
  };
  protoOf(IntIntMap).toString = function () {
    if (this.n()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().s7(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.bi_1;
    var v = this.ci_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.ai_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  s.cb(tmp0);
                  s.r7('=');
                  s.cb(value_0);
                  i = i + 1 | 0;
                  if (i < this.ei_1) {
                    s.s7(_Char___init__impl__6a9atx(44)).s7(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.s7(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(IntIntMap).ri = function (key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.di_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = this.ai_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$5 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$5);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (this.bi_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$10 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$10, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function get_EmptyIntList() {
    _init_properties_IntList_kt__6yao5();
    return EmptyIntList;
  }
  var EmptyIntList;
  function IntList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyIntArray();
    } else {
      tmp_0 = new Int32Array(initialCapacity);
    }
    tmp.si_1 = tmp_0;
    this.ti_1 = 0;
  }
  protoOf(IntList).ui = function (element) {
    // Inline function 'androidx.collection.IntList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.si_1;
    var inductionVariable = 0;
    var last = this.ti_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (content[i] === element) {
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  };
  protoOf(IntList).jd = function () {
    // Inline function 'androidx.collection.IntList.isEmpty' call
    if (this.ti_1 === 0) {
      throwNoSuchElementException('IntList is empty.');
    }
    return this.si_1[0];
  };
  protoOf(IntList).m = function (index) {
    if (!(0 <= index ? index < this.ti_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    return this.si_1[index];
  };
  protoOf(IntList).ld = function () {
    // Inline function 'androidx.collection.IntList.isEmpty' call
    if (this.ti_1 === 0) {
      throwNoSuchElementException('IntList is empty.');
    }
    var tmp = this.si_1;
    // Inline function 'androidx.collection.IntList.lastIndex' call
    return tmp[this.ti_1 - 1 | 0];
  };
  protoOf(IntList).th = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.g(prefix);
      // Inline function 'androidx.collection.IntList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.si_1;
      var inductionVariable = 0;
      var last = this.ti_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element = content[i];
          if (i === limit) {
            this_0.g(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.g(separator);
          }
          this_0.cb(element);
        }
         while (inductionVariable < last);
      this_0.g(postfix);
    }
    return this_0.toString();
  };
  protoOf(IntList).vi = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.th(separator, prefix, postfix, limit, truncated) : $super.th.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntList).hashCode = function () {
    var hashCode = 0;
    // Inline function 'androidx.collection.IntList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.si_1;
    var inductionVariable = 0;
    var last = this.ti_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = content[i];
        hashCode = hashCode + imul(31, element) | 0;
      }
       while (inductionVariable < last);
    return hashCode;
  };
  protoOf(IntList).equals = function (other) {
    var tmp;
    if (!(other instanceof IntList)) {
      tmp = true;
    } else {
      tmp = !(other.ti_1 === this.ti_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.si_1;
    var otherContent = other.si_1;
    // Inline function 'androidx.collection.IntList.indices' call
    var progression = until(0, this.ti_1);
    var inductionVariable = progression.x_1;
    var last = progression.y_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(content[i] === otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(IntList).toString = function () {
    return this.vi(VOID, '[', ']');
  };
  function MutableIntList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    IntList.call(this, initialCapacity);
  }
  protoOf(MutableIntList).yi = function (element) {
    this.rh(this.ti_1 + 1 | 0);
    this.si_1[this.ti_1] = element;
    this.ti_1 = this.ti_1 + 1 | 0;
    return true;
  };
  protoOf(MutableIntList).s1 = function () {
    this.ti_1 = 0;
  };
  protoOf(MutableIntList).rh = function (capacity) {
    var oldContent = this.si_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.si_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableIntList).v1 = function (index) {
    if (!(0 <= index ? index < this.ti_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    var content = this.si_1;
    var item = content[index];
    // Inline function 'androidx.collection.IntList.lastIndex' call
    if (!(index === (this.ti_1 - 1 | 0))) {
      var tmp6 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.ti_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = content;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, content, index, tmp6, endIndex);
    }
    this.ti_1 = this.ti_1 - 1 | 0;
    return item;
  };
  protoOf(MutableIntList).f4 = function (start, end) {
    if (!(0 <= start ? start <= this.ti_1 : false) || !(0 <= end ? end <= this.ti_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    if (end < start) {
      throwIllegalArgumentException('The end index must be < start index');
    }
    if (!(end === start)) {
      if (end < this.ti_1) {
        var tmp0 = this.si_1;
        var tmp2 = this.si_1;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = this.ti_1;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = tmp0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, tmp2, start, end, endIndex);
      }
      this.ti_1 = this.ti_1 - (end - start | 0) | 0;
    }
  };
  protoOf(MutableIntList).zi = function (index, element) {
    if (!(0 <= index ? index < this.ti_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    var content = this.si_1;
    var old = content[index];
    content[index] = element;
    return old;
  };
  function mutableIntListOf(element1) {
    _init_properties_IntList_kt__6yao5();
    var list = new MutableIntList(1);
    // Inline function 'androidx.collection.MutableIntList.plusAssign' call
    list.yi(element1);
    return list;
  }
  function emptyIntList() {
    _init_properties_IntList_kt__6yao5();
    return get_EmptyIntList();
  }
  function intListOf(element1) {
    _init_properties_IntList_kt__6yao5();
    return mutableIntListOf(element1);
  }
  var properties_initialized_IntList_kt_cw8sw3;
  function _init_properties_IntList_kt__6yao5() {
    if (!properties_initialized_IntList_kt_cw8sw3) {
      properties_initialized_IntList_kt_cw8sw3 = true;
      EmptyIntList = new MutableIntList(0);
    }
  }
  function get_EmptyIntObjectMap() {
    _init_properties_IntObjectMap_kt__bzh4pa();
    return EmptyIntObjectMap;
  }
  var EmptyIntObjectMap;
  function initializeStorage_0($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.dj_1 = newCapacity;
    initializeMetadata_0($this, newCapacity);
    $this.bj_1 = new Int32Array(newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.cj_1 = Array(newCapacity);
  }
  function initializeMetadata_0($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.aj_1 = tmp_0;
    var tmp0 = $this.aj_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_0($this);
  }
  function initializeGrowth_0($this) {
    $this.kj_1 = loadedCapacity($this.li()) - $this.ej_1 | 0;
  }
  function findAbsoluteInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.dj_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.aj_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$5 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$5);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if ($this.bj_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$10 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$10, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_0($this, hash1);
    var tmp_0;
    if ($this.kj_1 === 0) {
      var tmp0_0 = $this.aj_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$12 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$12, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.mi();
      index_0 = findFirstAvailableSlot_0($this, hash1);
    }
    $this.ej_1 = $this.ej_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.kj_1;
    var tmp_3;
    var tmp0_1 = $this.aj_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$14 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$14, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.kj_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.aj_1;
    var tmp2 = $this.dj_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_0($this, hash1) {
    var probeMask = $this.dj_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.aj_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableIntObjectMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntObjectMap.call(this);
    this.kj_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$2 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$2);
    }
    initializeStorage_0(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntObjectMap).lj = function (key, value) {
    var index = findAbsoluteInsertIndex(this, key);
    this.bj_1[index] = key;
    this.cj_1[index] = value;
  };
  protoOf(MutableIntObjectMap).mj = function (key, value) {
    var index = findAbsoluteInsertIndex(this, key);
    var oldValue = this.cj_1[index];
    this.bj_1[index] = key;
    this.cj_1[index] = value;
    return oldValue;
  };
  protoOf(MutableIntObjectMap).nj = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.dj_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.aj_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$6 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$6);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (this.bj_1[index] === key) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    var index_0 = tmp$ret$0;
    if (index_0 >= 0) {
      return this.oj(index_0);
    }
    return null;
  };
  protoOf(MutableIntObjectMap).oj = function (index) {
    this.ej_1 = this.ej_1 - 1 | 0;
    var tmp0 = this.aj_1;
    var tmp2 = this.dj_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    var oldValue = this.cj_1[index];
    this.cj_1[index] = null;
    return oldValue;
  };
  protoOf(MutableIntObjectMap).s1 = function () {
    this.ej_1 = 0;
    if (!(this.aj_1 === get_EmptyGroup())) {
      fill(this.aj_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.aj_1;
      var tmp2 = this.dj_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp2 >> 3;
      var b = (tmp2 & 7) << 3;
      tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    }
    fill_0(this.cj_1, null, 0, this.dj_1);
    initializeGrowth_0(this);
  };
  protoOf(MutableIntObjectMap).mi = function () {
    var tmp;
    if (this.dj_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.ej_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.dj_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.pi();
    } else {
      this.oi(nextCapacity(this.dj_1));
    }
  };
  protoOf(MutableIntObjectMap).pi = function () {
    var metadata = this.aj_1;
    var capacity = this.dj_1;
    var keys = this.bj_1;
    var values = this.cj_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      var k = keys[index];
      var hash = imul(k, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_0(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        keys[targetIndex] = keys[index];
        keys[index] = 0;
        values[targetIndex] = values[index];
        values[index] = null;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_0(this);
  };
  protoOf(MutableIntObjectMap).oi = function (newCapacity) {
    var previousMetadata = this.aj_1;
    var previousKeys = this.bj_1;
    var previousValues = this.cj_1;
    var previousCapacity = this.dj_1;
    initializeStorage_0(this, newCapacity);
    var newMetadata = this.aj_1;
    var newKeys = this.bj_1;
    var newValues = this.cj_1;
    var capacity = this.dj_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$1 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$1, new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_0(this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$4);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function mutableIntObjectMapOf() {
    _init_properties_IntObjectMap_kt__bzh4pa();
    return new MutableIntObjectMap();
  }
  function IntObjectMap() {
    this.aj_1 = get_EmptyGroup();
    this.bj_1 = get_EmptyIntArray();
    this.cj_1 = get_EMPTY_OBJECTS();
    this.dj_1 = 0;
    this.ej_1 = 0;
  }
  protoOf(IntObjectMap).li = function () {
    return this.dj_1;
  };
  protoOf(IntObjectMap).l = function () {
    return this.ej_1;
  };
  protoOf(IntObjectMap).n = function () {
    return this.ej_1 === 0;
  };
  protoOf(IntObjectMap).m = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.dj_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.aj_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$6 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$6);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (this.bj_1[index] === key) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    var index_0 = tmp$ret$0;
    return index_0 >= 0 ? this.cj_1[index_0] : null;
  };
  protoOf(IntObjectMap).qi = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.dj_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.aj_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$6 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$6);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (this.bj_1[index] === key) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    return tmp$ret$0 >= 0;
  };
  protoOf(IntObjectMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.bj_1;
    var v = this.cj_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.aj_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
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
                  var tmp = hash;
                  var tmp_0 = k[index];
                  // Inline function 'kotlin.hashCode' call
                  var tmp0_safe_receiver = v[index];
                  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
                  hash = tmp + (tmp_0 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
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
    return hash;
  };
  protoOf(IntObjectMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntObjectMap)) {
      return false;
    }
    if (!(other.l() === this.l())) {
      return false;
    }
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.bj_1;
    var v = this.cj_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.aj_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
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
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  if (value_0 == null) {
                    if (!(other.m(tmp0) == null) || !other.qi(tmp0)) {
                      return false;
                    }
                  } else if (!equals(value_0, other.m(tmp0))) {
                    return false;
                  }
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
    return true;
  };
  protoOf(IntObjectMap).toString = function () {
    if (this.n()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().s7(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.bj_1;
    var v = this.cj_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.aj_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  s.cb(tmp0);
                  s.r7('=');
                  s.q7(value_0 === this ? '(this)' : value_0);
                  i = i + 1 | 0;
                  if (i < this.ej_1) {
                    s.s7(_Char___init__impl__6a9atx(44)).s7(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.s7(_Char___init__impl__6a9atx(125)).toString();
  };
  function intObjectMapOf() {
    _init_properties_IntObjectMap_kt__bzh4pa();
    var tmp = get_EmptyIntObjectMap();
    return tmp instanceof IntObjectMap ? tmp : THROW_CCE();
  }
  function mutableIntObjectMapOf_0(key1, value1, key2, value2, key3, value3) {
    _init_properties_IntObjectMap_kt__bzh4pa();
    // Inline function 'kotlin.also' call
    var this_0 = new MutableIntObjectMap();
    this_0.lj(key1, value1);
    this_0.lj(key2, value2);
    this_0.lj(key3, value3);
    return this_0;
  }
  var properties_initialized_IntObjectMap_kt_hqy7tc;
  function _init_properties_IntObjectMap_kt__bzh4pa() {
    if (!properties_initialized_IntObjectMap_kt_hqy7tc) {
      properties_initialized_IntObjectMap_kt_hqy7tc = true;
      EmptyIntObjectMap = new MutableIntObjectMap(0);
    }
  }
  var EmptyIntSet;
  function get_EmptyIntArray() {
    _init_properties_IntSet_kt__km4dgt();
    return EmptyIntArray;
  }
  var EmptyIntArray;
  function initializeStorage_1($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.rj_1 = newCapacity;
    initializeMetadata_1($this, newCapacity);
    $this.qj_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_1($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.pj_1 = tmp_0;
    var tmp0 = $this.pj_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_1($this);
  }
  function initializeGrowth_1($this) {
    $this.xj_1 = loadedCapacity($this.li()) - $this.sj_1 | 0;
  }
  function removeElementAt($this, index) {
    $this.sj_1 = $this.sj_1 - 1 | 0;
    var tmp0 = $this.pj_1;
    var tmp2 = $this.rj_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
  }
  function findAbsoluteInsertIndex_0($this, element) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(element, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.rj_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.pj_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$5 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$5);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if ($this.qj_1[index] === element) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$10 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$10, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_1($this, hash1);
    var tmp_0;
    if ($this.xj_1 === 0) {
      var tmp0_0 = $this.pj_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$12 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$12, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.mi();
      index_0 = findFirstAvailableSlot_1($this, hash1);
    }
    $this.sj_1 = $this.sj_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.xj_1;
    var tmp_3;
    var tmp0_1 = $this.pj_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$14 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$14, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.xj_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.pj_1;
    var tmp2 = $this.rj_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_1($this, hash1) {
    var probeMask = $this.rj_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.pj_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableIntSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntSet.call(this);
    this.xj_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$2 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$2);
    }
    initializeStorage_1(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntSet).yi = function (element) {
    var oldSize = this.sj_1;
    var index = findAbsoluteInsertIndex_0(this, element);
    this.qj_1[index] = element;
    return !(this.sj_1 === oldSize);
  };
  protoOf(MutableIntSet).nj = function (element) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.rj_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.pj_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$6 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$6);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (this.qj_1[index] === element) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    var index_0 = tmp$ret$0;
    var exists = index_0 >= 0;
    if (exists) {
      removeElementAt(this, index_0);
    }
    return exists;
  };
  protoOf(MutableIntSet).mi = function () {
    var tmp;
    if (this.rj_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.sj_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.rj_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.pi();
    } else {
      this.oi(nextCapacity(this.rj_1));
    }
  };
  protoOf(MutableIntSet).pi = function () {
    var metadata = this.pj_1;
    var capacity = this.rj_1;
    var elements = this.qj_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      var k = elements[index];
      var hash = imul(k, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_1(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        elements[targetIndex] = elements[index];
        elements[index] = 0;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldElement = elements[targetIndex];
        elements[targetIndex] = elements[index];
        elements[index] = oldElement;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_1(this);
  };
  protoOf(MutableIntSet).oi = function (newCapacity) {
    var previousMetadata = this.pj_1;
    var previousElements = this.qj_1;
    var previousCapacity = this.rj_1;
    initializeStorage_1(this, newCapacity);
    var newMetadata = this.pj_1;
    var newElements = this.qj_1;
    var capacity = this.rj_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$1 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$1, new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousElement, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_1(this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$4);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function mutableIntSetOf() {
    _init_properties_IntSet_kt__km4dgt();
    return new MutableIntSet();
  }
  function IntSet() {
    this.pj_1 = get_EmptyGroup();
    this.qj_1 = get_EmptyIntArray();
    this.rj_1 = 0;
    this.sj_1 = 0;
  }
  protoOf(IntSet).li = function () {
    return this.rj_1;
  };
  protoOf(IntSet).ui = function (element) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.rj_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.pj_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$6 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$6);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (this.qj_1[index] === element) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    return tmp$ret$0 >= 0;
  };
  protoOf(IntSet).th = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.g(prefix);
      var index = 0;
      // Inline function 'androidx.collection.IntSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.qj_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.pj_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            var tmp$ret$7 = bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144));
            if (!equalsLong(tmp$ret$7, new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  var value = bitwiseAnd(slot, new Long(255, 0));
                  if (compare(value, new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    var element = k[index_0];
                    if (index === limit) {
                      this_0.g(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.g(separator);
                    }
                    this_0.cb(element);
                    index = index + 1 | 0;
                  }
                  slot = shiftRight(slot, 8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.g(postfix);
    }
    return this_0.toString();
  };
  protoOf(IntSet).yj = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.th(separator, prefix, postfix, limit, truncated) : $super.th.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.qj_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.pj_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$4 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$4, new Long(-2139062144, -2139062144))) {
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
                  hash = hash + k[index] | 0;
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
    return hash;
  };
  protoOf(IntSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntSet)) {
      return false;
    }
    if (!(other.sj_1 === this.sj_1)) {
      return false;
    }
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.qj_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.pj_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$4 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$4, new Long(-2139062144, -2139062144))) {
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
                  var element = k[index];
                  if (!other.ui(element)) {
                    return false;
                  }
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
    return true;
  };
  protoOf(IntSet).toString = function () {
    return this.yj(VOID, '[', ']');
  };
  var properties_initialized_IntSet_kt_za7tcl;
  function _init_properties_IntSet_kt__km4dgt() {
    if (!properties_initialized_IntSet_kt_za7tcl) {
      properties_initialized_IntSet_kt_za7tcl = true;
      EmptyIntSet = new MutableIntSet(0);
      EmptyIntArray = new Int32Array(0);
    }
  }
  function MutableLongList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    LongList.call(this, initialCapacity);
  }
  protoOf(MutableLongList).bk = function (element) {
    this.rh(this.dk_1 + 1 | 0);
    this.ck_1[this.dk_1] = element;
    this.dk_1 = this.dk_1 + 1 | 0;
    return true;
  };
  protoOf(MutableLongList).s1 = function () {
    this.dk_1 = 0;
  };
  protoOf(MutableLongList).rh = function (capacity) {
    var oldContent = this.ck_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.ck_1 = copyOf_1(oldContent, newSize);
    }
  };
  protoOf(MutableLongList).v1 = function (index) {
    if (!(0 <= index ? index < this.dk_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    var content = this.ck_1;
    var item = content[index];
    // Inline function 'androidx.collection.LongList.lastIndex' call
    if (!(index === (this.dk_1 - 1 | 0))) {
      var tmp6 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.dk_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = content;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, content, index, tmp6, endIndex);
    }
    this.dk_1 = this.dk_1 - 1 | 0;
    return item;
  };
  protoOf(MutableLongList).f4 = function (start, end) {
    if (!(0 <= start ? start <= this.dk_1 : false) || !(0 <= end ? end <= this.dk_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    if (end < start) {
      throwIllegalArgumentException('The end index must be < start index');
    }
    if (!(end === start)) {
      if (end < this.dk_1) {
        var tmp0 = this.ck_1;
        var tmp2 = this.ck_1;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = this.dk_1;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = tmp0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, tmp2, start, end, endIndex);
      }
      this.dk_1 = this.dk_1 - (end - start | 0) | 0;
    }
  };
  function LongList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyLongArray();
    } else {
      tmp_0 = longArray(initialCapacity);
    }
    tmp.ck_1 = tmp_0;
    this.dk_1 = 0;
  }
  protoOf(LongList).m = function (index) {
    if (!(0 <= index ? index < this.dk_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    return this.ck_1[index];
  };
  protoOf(LongList).th = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.g(prefix);
      // Inline function 'androidx.collection.LongList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.ck_1;
      var inductionVariable = 0;
      var last = this.dk_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element = content[i];
          if (i === limit) {
            this_0.g(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.g(separator);
          }
          this_0.db(element);
        }
         while (inductionVariable < last);
      this_0.g(postfix);
    }
    return this_0.toString();
  };
  protoOf(LongList).ek = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.th(separator, prefix, postfix, limit, truncated) : $super.th.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(LongList).hashCode = function () {
    var hashCode = 0;
    // Inline function 'androidx.collection.LongList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.ck_1;
    var inductionVariable = 0;
    var last = this.dk_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = content[i];
        hashCode = hashCode + imul(31, element.hashCode()) | 0;
      }
       while (inductionVariable < last);
    return hashCode;
  };
  protoOf(LongList).equals = function (other) {
    var tmp;
    if (!(other instanceof LongList)) {
      tmp = true;
    } else {
      tmp = !(other.dk_1 === this.dk_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.ck_1;
    var otherContent = other.ck_1;
    // Inline function 'androidx.collection.LongList.indices' call
    var progression = until(0, this.dk_1);
    var inductionVariable = progression.x_1;
    var last = progression.y_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equalsLong(content[i], otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(LongList).toString = function () {
    return this.ek(VOID, '[', ']');
  };
  var EmptyLongObjectMap;
  function initializeStorage_2($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.ik_1 = newCapacity;
    initializeMetadata_2($this, newCapacity);
    $this.gk_1 = longArray(newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.hk_1 = Array(newCapacity);
  }
  function initializeMetadata_2($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.fk_1 = tmp_0;
    var tmp0 = $this.fk_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_2($this);
  }
  function initializeGrowth_2($this) {
    $this.pk_1 = loadedCapacity($this.li()) - $this.jk_1 | 0;
  }
  function findAbsoluteInsertIndex_1($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key.hashCode(), -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.ik_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.fk_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$5 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$5);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (equalsLong($this.gk_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$10 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$10, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_2($this, hash1);
    var tmp_0;
    if ($this.pk_1 === 0) {
      var tmp0_0 = $this.fk_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$12 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$12, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.mi();
      index_0 = findFirstAvailableSlot_2($this, hash1);
    }
    $this.jk_1 = $this.jk_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.pk_1;
    var tmp_3;
    var tmp0_1 = $this.fk_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$14 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$14, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.pk_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.fk_1;
    var tmp2 = $this.ik_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_2($this, hash1) {
    var probeMask = $this.ik_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.fk_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableLongObjectMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    LongObjectMap.call(this);
    this.pk_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$2 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$2);
    }
    initializeStorage_2(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableLongObjectMap).qk = function (key, value) {
    var index = findAbsoluteInsertIndex_1(this, key);
    this.gk_1[index] = key;
    this.hk_1[index] = value;
  };
  protoOf(MutableLongObjectMap).rk = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ik_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.fk_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$6 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$6);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equalsLong(this.gk_1[index], key)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    var index_0 = tmp$ret$0;
    if (index_0 >= 0) {
      return this.oj(index_0);
    }
    return null;
  };
  protoOf(MutableLongObjectMap).oj = function (index) {
    this.jk_1 = this.jk_1 - 1 | 0;
    var tmp0 = this.fk_1;
    var tmp2 = this.ik_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    var oldValue = this.hk_1[index];
    this.hk_1[index] = null;
    return oldValue;
  };
  protoOf(MutableLongObjectMap).s1 = function () {
    this.jk_1 = 0;
    if (!(this.fk_1 === get_EmptyGroup())) {
      fill(this.fk_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.fk_1;
      var tmp2 = this.ik_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp2 >> 3;
      var b = (tmp2 & 7) << 3;
      tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    }
    fill_0(this.hk_1, null, 0, this.ik_1);
    initializeGrowth_2(this);
  };
  protoOf(MutableLongObjectMap).mi = function () {
    var tmp;
    if (this.ik_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.jk_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.ik_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.pi();
    } else {
      this.oi(nextCapacity(this.ik_1));
    }
  };
  protoOf(MutableLongObjectMap).pi = function () {
    var metadata = this.fk_1;
    var capacity = this.ik_1;
    var keys = this.gk_1;
    var values = this.hk_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      var k = keys[index];
      var hash = imul(k.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_2(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        keys[targetIndex] = keys[index];
        keys[index] = new Long(0, 0);
        values[targetIndex] = values[index];
        values[index] = null;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_2(this);
  };
  protoOf(MutableLongObjectMap).oi = function (newCapacity) {
    var previousMetadata = this.fk_1;
    var previousKeys = this.gk_1;
    var previousValues = this.hk_1;
    var previousCapacity = this.ik_1;
    initializeStorage_2(this, newCapacity);
    var newMetadata = this.fk_1;
    var newKeys = this.gk_1;
    var newValues = this.hk_1;
    var capacity = this.ik_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$1 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$1, new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey.hashCode(), -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_2(this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$4);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function mutableLongObjectMapOf() {
    _init_properties_LongObjectMap_kt__gzp4kx();
    return new MutableLongObjectMap();
  }
  function LongObjectMap() {
    this.fk_1 = get_EmptyGroup();
    this.gk_1 = get_EmptyLongArray();
    this.hk_1 = get_EMPTY_OBJECTS();
    this.ik_1 = 0;
    this.jk_1 = 0;
  }
  protoOf(LongObjectMap).li = function () {
    return this.ik_1;
  };
  protoOf(LongObjectMap).l = function () {
    return this.jk_1;
  };
  protoOf(LongObjectMap).n = function () {
    return this.jk_1 === 0;
  };
  protoOf(LongObjectMap).sk = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ik_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.fk_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$6 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$6);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equalsLong(this.gk_1[index], key)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    var index_0 = tmp$ret$0;
    return index_0 >= 0 ? this.hk_1[index_0] : null;
  };
  protoOf(LongObjectMap).tk = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ik_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.fk_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$6 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$6);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equalsLong(this.gk_1[index], key)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    return tmp$ret$0 >= 0;
  };
  protoOf(LongObjectMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.LongObjectMap.forEach' call
    var k = this.gk_1;
    var v = this.hk_1;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.forEachIndexed' call
      var m = this.fk_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
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
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  var tmp = hash;
                  var tmp_0 = tmp0.hashCode();
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = value_0 == null ? null : hashCode(value_0);
                  hash = tmp + (tmp_0 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
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
    return hash;
  };
  protoOf(LongObjectMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LongObjectMap)) {
      return false;
    }
    if (!(other.l() === this.l())) {
      return false;
    }
    // Inline function 'androidx.collection.LongObjectMap.forEach' call
    var k = this.gk_1;
    var v = this.hk_1;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.forEachIndexed' call
      var m = this.fk_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
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
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  if (value_0 == null) {
                    if (!(other.sk(tmp0) == null) || !other.tk(tmp0)) {
                      return false;
                    }
                  } else if (!equals(value_0, other.sk(tmp0))) {
                    return false;
                  }
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
    return true;
  };
  protoOf(LongObjectMap).toString = function () {
    if (this.n()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().s7(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.LongObjectMap.forEach' call
    var k = this.gk_1;
    var v = this.hk_1;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.forEachIndexed' call
      var m = this.fk_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  s.db(tmp0);
                  s.r7('=');
                  s.q7(value_0 === this ? '(this)' : value_0);
                  i = i + 1 | 0;
                  if (i < this.jk_1) {
                    s.s7(_Char___init__impl__6a9atx(44)).s7(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.s7(_Char___init__impl__6a9atx(125)).toString();
  };
  var properties_initialized_LongObjectMap_kt_wv4qxd;
  function _init_properties_LongObjectMap_kt__gzp4kx() {
    if (!properties_initialized_LongObjectMap_kt_wv4qxd) {
      properties_initialized_LongObjectMap_kt_wv4qxd = true;
      EmptyLongObjectMap = new MutableLongObjectMap(0);
    }
  }
  var EmptyLongSet;
  function get_EmptyLongArray() {
    _init_properties_LongSet_kt__wt9fxo();
    return EmptyLongArray;
  }
  var EmptyLongArray;
  function initializeStorage_3($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.wk_1 = newCapacity;
    initializeMetadata_3($this, newCapacity);
    $this.vk_1 = longArray(newCapacity);
  }
  function initializeMetadata_3($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.uk_1 = tmp_0;
    var tmp0 = $this.uk_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_3($this);
  }
  function initializeGrowth_3($this) {
    $this.cl_1 = loadedCapacity($this.li()) - $this.xk_1 | 0;
  }
  function removeElementAt_0($this, index) {
    $this.xk_1 = $this.xk_1 - 1 | 0;
    var tmp0 = $this.uk_1;
    var tmp2 = $this.wk_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
  }
  function findAbsoluteInsertIndex_2($this, element) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(element.hashCode(), -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.wk_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.uk_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$5 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$5);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (equalsLong($this.vk_1[index], element)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$10 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$10, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_3($this, hash1);
    var tmp_0;
    if ($this.cl_1 === 0) {
      var tmp0_0 = $this.uk_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$12 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$12, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.mi();
      index_0 = findFirstAvailableSlot_3($this, hash1);
    }
    $this.xk_1 = $this.xk_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.cl_1;
    var tmp_3;
    var tmp0_1 = $this.uk_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$14 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$14, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.cl_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.uk_1;
    var tmp2 = $this.wk_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_3($this, hash1) {
    var probeMask = $this.wk_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.uk_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableLongSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    LongSet.call(this);
    this.cl_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$2 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$2);
    }
    initializeStorage_3(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableLongSet).dl = function (element) {
    var index = findAbsoluteInsertIndex_2(this, element);
    this.vk_1[index] = element;
  };
  protoOf(MutableLongSet).rk = function (element) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.LongSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.wk_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.uk_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$6 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$6);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equalsLong(this.vk_1[index], element)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    var index_0 = tmp$ret$0;
    var exists = index_0 >= 0;
    if (exists) {
      removeElementAt_0(this, index_0);
    }
    return exists;
  };
  protoOf(MutableLongSet).mi = function () {
    var tmp;
    if (this.wk_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.xk_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.wk_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.pi();
    } else {
      this.oi(nextCapacity(this.wk_1));
    }
  };
  protoOf(MutableLongSet).pi = function () {
    var metadata = this.uk_1;
    var capacity = this.wk_1;
    var elements = this.vk_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      var k = elements[index];
      var hash = imul(k.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_3(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        elements[targetIndex] = elements[index];
        elements[index] = new Long(0, 0);
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldElement = elements[targetIndex];
        elements[targetIndex] = elements[index];
        elements[index] = oldElement;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_3(this);
  };
  protoOf(MutableLongSet).oi = function (newCapacity) {
    var previousMetadata = this.uk_1;
    var previousElements = this.vk_1;
    var previousCapacity = this.wk_1;
    initializeStorage_3(this, newCapacity);
    var newMetadata = this.uk_1;
    var newElements = this.vk_1;
    var capacity = this.wk_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$1 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$1, new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousElement.hashCode(), -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_3(this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$4);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function LongSet() {
    this.uk_1 = get_EmptyGroup();
    this.vk_1 = get_EmptyLongArray();
    this.wk_1 = 0;
    this.xk_1 = 0;
  }
  protoOf(LongSet).li = function () {
    return this.wk_1;
  };
  protoOf(LongSet).el = function (element) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.LongSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.wk_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.uk_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$6 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$6);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equalsLong(this.vk_1[index], element)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    return tmp$ret$0 >= 0;
  };
  protoOf(LongSet).th = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.g(prefix);
      var index = 0;
      // Inline function 'androidx.collection.LongSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.vk_1;
      $l$block_0: {
        // Inline function 'androidx.collection.LongSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.uk_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            var tmp$ret$7 = bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144));
            if (!equalsLong(tmp$ret$7, new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  var value = bitwiseAnd(slot, new Long(255, 0));
                  if (compare(value, new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    var element = k[index_0];
                    if (index === limit) {
                      this_0.g(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.g(separator);
                    }
                    this_0.db(element);
                    index = index + 1 | 0;
                  }
                  slot = shiftRight(slot, 8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.g(postfix);
    }
    return this_0.toString();
  };
  protoOf(LongSet).fl = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.th(separator, prefix, postfix, limit, truncated) : $super.th.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(LongSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.LongSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.vk_1;
    $l$block: {
      // Inline function 'androidx.collection.LongSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.uk_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$4 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$4, new Long(-2139062144, -2139062144))) {
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
                  hash = hash + k[index].hashCode() | 0;
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
    return hash;
  };
  protoOf(LongSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LongSet)) {
      return false;
    }
    if (!(other.xk_1 === this.xk_1)) {
      return false;
    }
    // Inline function 'androidx.collection.LongSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.vk_1;
    $l$block: {
      // Inline function 'androidx.collection.LongSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.uk_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$4 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$4, new Long(-2139062144, -2139062144))) {
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
                  var element = k[index];
                  if (!other.el(element)) {
                    return false;
                  }
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
    return true;
  };
  protoOf(LongSet).toString = function () {
    return this.fl(VOID, '[', ']');
  };
  var properties_initialized_LongSet_kt_r3x9iu;
  function _init_properties_LongSet_kt__wt9fxo() {
    if (!properties_initialized_LongSet_kt_r3x9iu) {
      properties_initialized_LongSet_kt_r3x9iu = true;
      EmptyLongSet = new MutableLongSet(0);
      EmptyLongArray = longArray(0);
    }
  }
  function get_DELETED() {
    _init_properties_LongSparseArray_kt__ucg8tx();
    return DELETED;
  }
  var DELETED;
  function access$_get_DELETED_$tLongSparseArrayKt_9psy8u() {
    return get_DELETED();
  }
  var properties_initialized_LongSparseArray_kt_xmlmcz;
  function _init_properties_LongSparseArray_kt__ucg8tx() {
    if (!properties_initialized_LongSparseArray_kt_xmlmcz) {
      properties_initialized_LongSparseArray_kt_xmlmcz = true;
      DELETED = new Object();
    }
  }
  function safeSizeOf($this, key, value) {
    var result = $this.pl(key, value);
    // Inline function 'androidx.collection.internal.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(result >= 0)) {
      var tmp$ret$2 = 'Negative size: ' + toString(key) + '=' + toString(value);
      throwIllegalStateException(tmp$ret$2);
    }
    return result;
  }
  function LruCache(maxSize) {
    this.gl_1 = maxSize;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.gl_1 > 0)) {
      var tmp$ret$2 = 'maxSize <= 0';
      throwIllegalArgumentException(tmp$ret$2);
    }
    this.hl_1 = new LruHashMap(0, 0.75);
    this.il_1 = new Lock();
    this.jl_1 = 0;
    this.kl_1 = 0;
    this.ll_1 = 0;
    this.ml_1 = 0;
    this.nl_1 = 0;
    this.ol_1 = 0;
  }
  protoOf(LruCache).ql = function (key) {
    var mapValue;
    // Inline function 'androidx.collection.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.collection.internal.Lock.synchronizedImpl' call
    this.il_1;
    mapValue = this.hl_1.ql(key);
    if (!(mapValue == null)) {
      this.nl_1 = this.nl_1 + 1 | 0;
      return mapValue;
    }
    this.ol_1 = this.ol_1 + 1 | 0;
    var tmp0_elvis_lhs = this.sl(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var createdValue = tmp;
    // Inline function 'androidx.collection.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.collection.internal.Lock.synchronizedImpl' call
    this.il_1;
    this.ll_1 = this.ll_1 + 1 | 0;
    mapValue = this.hl_1.tl(key, createdValue);
    var tmp_0;
    if (!(mapValue == null)) {
      tmp_0 = this.hl_1.tl(key, ensureNotNull(mapValue));
    } else {
      this.jl_1 = this.jl_1 + safeSizeOf(this, key, createdValue) | 0;
      tmp_0 = Unit_instance;
    }
    var tmp_1;
    if (!(mapValue == null)) {
      this.vl(false, key, createdValue, mapValue);
      tmp_1 = mapValue;
    } else {
      this.ul(this.gl_1);
      tmp_1 = createdValue;
    }
    return tmp_1;
  };
  protoOf(LruCache).tl = function (key, value) {
    var previous;
    // Inline function 'androidx.collection.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.collection.internal.Lock.synchronizedImpl' call
    this.il_1;
    this.kl_1 = this.kl_1 + 1 | 0;
    this.jl_1 = this.jl_1 + safeSizeOf(this, key, value) | 0;
    previous = this.hl_1.tl(key, value);
    if (!(previous == null)) {
      this.jl_1 = this.jl_1 - safeSizeOf(this, key, previous) | 0;
    }
    if (!(previous == null)) {
      this.vl(false, key, previous, value);
    }
    this.ul(this.gl_1);
    return previous;
  };
  protoOf(LruCache).ul = function (maxSize) {
    while (true) {
      var key;
      var value;
      // Inline function 'androidx.collection.internal.synchronized' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.internal.Lock.synchronizedImpl' call
      this.il_1;
      // Inline function 'androidx.collection.internal.checkPrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(this.jl_1 < 0 || (this.hl_1.wl() && !(this.jl_1 === 0)))) {
        var tmp$ret$6 = 'LruCache.sizeOf() is reporting inconsistent results!';
        throwIllegalStateException(tmp$ret$6);
      }
      if (this.jl_1 <= maxSize || this.hl_1.wl()) {
        return Unit_instance;
      }
      var tmp0_elvis_lhs = firstOrNull(this.hl_1.d2());
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return Unit_instance;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var toEvict = tmp;
      key = toEvict.w1();
      value = toEvict.x1();
      this.hl_1.xl(key);
      this.jl_1 = this.jl_1 - safeSizeOf(this, key, value) | 0;
      this.ml_1 = this.ml_1 + 1 | 0;
      this.vl(true, key, value, null);
    }
  };
  protoOf(LruCache).xl = function (key) {
    var previous;
    // Inline function 'androidx.collection.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.collection.internal.Lock.synchronizedImpl' call
    this.il_1;
    previous = this.hl_1.xl(key);
    if (!(previous == null)) {
      this.jl_1 = this.jl_1 - safeSizeOf(this, key, previous) | 0;
    }
    if (!(previous == null)) {
      this.vl(false, key, previous, null);
    }
    return previous;
  };
  protoOf(LruCache).vl = function (evicted, key, oldValue, newValue) {
  };
  protoOf(LruCache).sl = function (key) {
    return null;
  };
  protoOf(LruCache).pl = function (key, value) {
    return 1;
  };
  protoOf(LruCache).toString = function () {
    // Inline function 'androidx.collection.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.collection.internal.Lock.synchronizedImpl' call
    this.il_1;
    var accesses = this.nl_1 + this.ol_1 | 0;
    var tmp;
    if (!(accesses === 0)) {
      tmp = imul(100, this.nl_1) / accesses | 0;
    } else {
      tmp = 0;
    }
    var hitPercent = tmp;
    return 'LruCache[maxSize=' + this.gl_1 + ',hits=' + this.nl_1 + ',misses=' + this.ol_1 + ',' + ('hitRate=' + hitPercent + '%]');
  };
  function get_EmptyObjectIntMap() {
    _init_properties_ObjectIntMap_kt__tjeyss();
    return EmptyObjectIntMap;
  }
  var EmptyObjectIntMap;
  function initializeStorage_4($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.bm_1 = newCapacity;
    initializeMetadata_4($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.zl_1 = Array(newCapacity);
    $this.am_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_4($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.yl_1 = tmp_0;
    var tmp0 = $this.yl_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_4($this);
  }
  function initializeGrowth_4($this) {
    $this.im_1 = loadedCapacity($this.li()) - $this.cm_1 | 0;
  }
  function findIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$1, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.bm_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.yl_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$6 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$6);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (equals($this.zl_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_4($this, hash1);
    var tmp_0;
    if ($this.im_1 === 0) {
      var tmp0_0 = $this.yl_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$13 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$13, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.mi();
      index_0 = findFirstAvailableSlot_4($this, hash1);
    }
    $this.cm_1 = $this.cm_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.im_1;
    var tmp_3;
    var tmp0_1 = $this.yl_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$15 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$15, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.im_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.yl_1;
    var tmp2 = $this.bm_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return ~index_0;
  }
  function findFirstAvailableSlot_4($this, hash1) {
    var probeMask = $this.bm_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.yl_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableObjectIntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ObjectIntMap.call(this);
    this.im_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$2 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$2);
    }
    initializeStorage_4(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableObjectIntMap).jm = function (key, value) {
    var index = findIndex(this, key);
    if (index < 0)
      index = ~index;
    this.zl_1[index] = key;
    this.am_1[index] = value;
  };
  protoOf(MutableObjectIntMap).km = function (key, value, default_0) {
    var index = findIndex(this, key);
    var previous = default_0;
    if (index < 0) {
      index = ~index;
    } else {
      previous = this.am_1[index];
    }
    this.zl_1[index] = key;
    this.am_1[index] = value;
    return previous;
  };
  protoOf(MutableObjectIntMap).lm = function (key) {
    var index = this.mm(key);
    if (index >= 0) {
      this.nm(index);
    }
  };
  protoOf(MutableObjectIntMap).nm = function (index) {
    this.cm_1 = this.cm_1 - 1 | 0;
    var tmp0 = this.yl_1;
    var tmp2 = this.bm_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    this.zl_1[index] = null;
  };
  protoOf(MutableObjectIntMap).s1 = function () {
    this.cm_1 = 0;
    if (!(this.yl_1 === get_EmptyGroup())) {
      fill(this.yl_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.yl_1;
      var tmp2 = this.bm_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp2 >> 3;
      var b = (tmp2 & 7) << 3;
      tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    }
    fill_0(this.zl_1, null, 0, this.bm_1);
    initializeGrowth_4(this);
  };
  protoOf(MutableObjectIntMap).mi = function () {
    var tmp;
    if (this.bm_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.cm_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.bm_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.pi();
    } else {
      this.oi(nextCapacity(this.bm_1));
    }
  };
  protoOf(MutableObjectIntMap).pi = function () {
    var metadata = this.yl_1;
    var capacity = this.bm_1;
    var keys = this.zl_1;
    var values = this.am_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = keys[index];
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      var tmp$ret$3 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$3, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_4(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        keys[targetIndex] = keys[index];
        keys[index] = null;
        values[targetIndex] = values[index];
        values[index] = 0;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_4(this);
  };
  protoOf(MutableObjectIntMap).oi = function (newCapacity) {
    var previousMetadata = this.yl_1;
    var previousKeys = this.zl_1;
    var previousValues = this.am_1;
    var previousCapacity = this.bm_1;
    initializeStorage_4(this, newCapacity);
    var newMetadata = this.yl_1;
    var newKeys = this.zl_1;
    var newValues = this.am_1;
    var capacity = this.bm_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$1 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$1, new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$3 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$3, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_4(this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$5);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function mutableObjectIntMapOf() {
    _init_properties_ObjectIntMap_kt__tjeyss();
    return new MutableObjectIntMap();
  }
  function ObjectIntMap() {
    this.yl_1 = get_EmptyGroup();
    this.zl_1 = get_EMPTY_OBJECTS();
    this.am_1 = get_EmptyIntArray();
    this.bm_1 = 0;
    this.cm_1 = 0;
  }
  protoOf(ObjectIntMap).li = function () {
    return this.bm_1;
  };
  protoOf(ObjectIntMap).l = function () {
    return this.cm_1;
  };
  protoOf(ObjectIntMap).n = function () {
    return this.cm_1 === 0;
  };
  protoOf(ObjectIntMap).om = function () {
    return !(this.cm_1 === 0);
  };
  protoOf(ObjectIntMap).g2 = function (key) {
    var index = this.mm(key);
    if (index < 0) {
      throwNoSuchElementException('There is no key ' + toString_0(key) + ' in the map');
    }
    return this.am_1[index];
  };
  protoOf(ObjectIntMap).pm = function (key, defaultValue) {
    var index = this.mm(key);
    if (index >= 0) {
      return this.am_1[index];
    }
    return defaultValue;
  };
  protoOf(ObjectIntMap).e2 = function (key) {
    return this.mm(key) >= 0;
  };
  protoOf(ObjectIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.zl_1;
    var v = this.am_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.yl_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
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
                  var tmp0 = k[index];
                  var tmp = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = tmp0 == null ? null : hashCode(tmp0);
                  hash = tmp + ((tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) ^ v[index]) | 0;
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
    return hash;
  };
  protoOf(ObjectIntMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ObjectIntMap)) {
      return false;
    }
    if (!(other.l() === this.l())) {
      return false;
    }
    var o = other instanceof ObjectIntMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.zl_1;
    var v = this.am_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.yl_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
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
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  var index_0 = o.mm(tmp0);
                  if (index_0 < 0 || !(value_0 === o.am_1[index_0])) {
                    return false;
                  }
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
    return true;
  };
  protoOf(ObjectIntMap).toString = function () {
    if (this.n()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().s7(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.zl_1;
    var v = this.am_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.yl_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  s.q7(tmp0 === this ? '(this)' : tmp0);
                  s.r7('=');
                  s.cb(value_0);
                  i = i + 1 | 0;
                  if (i < this.cm_1) {
                    s.s7(_Char___init__impl__6a9atx(44)).s7(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.s7(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(ObjectIntMap).mm = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$1, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.bm_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = this.yl_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$6 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$6);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (equals(this.zl_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function emptyObjectIntMap() {
    _init_properties_ObjectIntMap_kt__tjeyss();
    var tmp = get_EmptyObjectIntMap();
    return tmp instanceof ObjectIntMap ? tmp : THROW_CCE();
  }
  var properties_initialized_ObjectIntMap_kt_ycqxma;
  function _init_properties_ObjectIntMap_kt__tjeyss() {
    if (!properties_initialized_ObjectIntMap_kt_ycqxma) {
      properties_initialized_ObjectIntMap_kt_ycqxma = true;
      EmptyObjectIntMap = new MutableObjectIntMap(0);
    }
  }
  function get_EmptyArray() {
    _init_properties_ObjectList_kt__fnapct();
    return EmptyArray;
  }
  var EmptyArray;
  function get_EmptyObjectList() {
    _init_properties_ObjectList_kt__fnapct();
    return EmptyObjectList;
  }
  var EmptyObjectList;
  function throwIndexOutOfBoundsInclusiveException($this, index) {
    throwIndexOutOfBoundsException('Index ' + index + ' must be in 0..' + $this.rm_1);
  }
  function MutableObjectListIterator(list, index) {
    this.sm_1 = list;
    this.tm_1 = index - 1 | 0;
  }
  protoOf(MutableObjectListIterator).j = function () {
    return this.tm_1 < (this.sm_1.l() - 1 | 0);
  };
  protoOf(MutableObjectListIterator).k = function () {
    this.tm_1 = this.tm_1 + 1 | 0;
    return this.sm_1.m(this.tm_1);
  };
  protoOf(MutableObjectListIterator).m3 = function () {
    this.sm_1.v1(this.tm_1);
    this.tm_1 = this.tm_1 - 1 | 0;
  };
  protoOf(MutableObjectListIterator).w3 = function () {
    return this.tm_1 >= 0;
  };
  protoOf(MutableObjectListIterator).x3 = function () {
    return this.tm_1 + 1 | 0;
  };
  protoOf(MutableObjectListIterator).y3 = function () {
    var tmp1 = this.tm_1;
    this.tm_1 = tmp1 - 1 | 0;
    return this.sm_1.m(tmp1);
  };
  protoOf(MutableObjectListIterator).z3 = function () {
    return this.tm_1;
  };
  function ObjectListMutableList(objectList) {
    this.um_1 = objectList;
  }
  protoOf(ObjectListMutableList).l = function () {
    return this.um_1.l();
  };
  protoOf(ObjectListMutableList).vm = function (element) {
    return this.um_1.t(element);
  };
  protoOf(ObjectListMutableList).t = function (element) {
    if (!true)
      return false;
    return this.vm(element);
  };
  protoOf(ObjectListMutableList).m = function (index) {
    checkIndex(this, index);
    return this.um_1.m(index);
  };
  protoOf(ObjectListMutableList).wm = function (element) {
    return this.um_1.u(element);
  };
  protoOf(ObjectListMutableList).u = function (element) {
    if (!true)
      return -1;
    return this.wm(element);
  };
  protoOf(ObjectListMutableList).n = function () {
    return this.um_1.n();
  };
  protoOf(ObjectListMutableList).i = function () {
    return new MutableObjectListIterator(this, 0);
  };
  protoOf(ObjectListMutableList).xm = function (element) {
    return this.um_1.h(element);
  };
  protoOf(ObjectListMutableList).h = function (element) {
    return this.xm(element);
  };
  protoOf(ObjectListMutableList).bn = function (index, element) {
    return this.um_1.u1(index, element);
  };
  protoOf(ObjectListMutableList).u1 = function (index, element) {
    return this.bn(index, element);
  };
  protoOf(ObjectListMutableList).cn = function (index, elements) {
    return this.um_1.r1(index, elements);
  };
  protoOf(ObjectListMutableList).r1 = function (index, elements) {
    return this.cn(index, elements);
  };
  protoOf(ObjectListMutableList).dn = function (elements) {
    return this.um_1.en(elements);
  };
  protoOf(ObjectListMutableList).r = function (elements) {
    return this.dn(elements);
  };
  protoOf(ObjectListMutableList).s1 = function () {
    return this.um_1.s1();
  };
  protoOf(ObjectListMutableList).s = function (index) {
    return new MutableObjectListIterator(this, index);
  };
  protoOf(ObjectListMutableList).fn = function (element) {
    return this.um_1.q1(element);
  };
  protoOf(ObjectListMutableList).q1 = function (element) {
    if (!true)
      return false;
    return this.fn(element);
  };
  protoOf(ObjectListMutableList).v1 = function (index) {
    checkIndex(this, index);
    return this.um_1.v1(index);
  };
  protoOf(ObjectListMutableList).gn = function (index, element) {
    checkIndex(this, index);
    return this.um_1.t1(index, element);
  };
  protoOf(ObjectListMutableList).t1 = function (index, element) {
    return this.gn(index, element);
  };
  protoOf(ObjectListMutableList).o1 = function (fromIndex, toIndex) {
    checkSubIndex(this, fromIndex, toIndex);
    return new SubList(this, fromIndex, toIndex);
  };
  function SubList(list, start, end) {
    this.hn_1 = list;
    this.in_1 = start;
    this.jn_1 = end;
  }
  protoOf(SubList).l = function () {
    return this.jn_1 - this.in_1 | 0;
  };
  protoOf(SubList).vm = function (element) {
    var inductionVariable = this.in_1;
    var last = this.jn_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.hn_1.m(i), element)) {
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  };
  protoOf(SubList).t = function (element) {
    if (!true)
      return false;
    return this.vm(element);
  };
  protoOf(SubList).m = function (index) {
    checkIndex(this, index);
    return this.hn_1.m(index + this.in_1 | 0);
  };
  protoOf(SubList).wm = function (element) {
    var inductionVariable = this.in_1;
    var last = this.jn_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.hn_1.m(i), element)) {
          return i - this.in_1 | 0;
        }
      }
       while (inductionVariable < last);
    return -1;
  };
  protoOf(SubList).u = function (element) {
    if (!true)
      return -1;
    return this.wm(element);
  };
  protoOf(SubList).n = function () {
    return this.jn_1 === this.in_1;
  };
  protoOf(SubList).i = function () {
    return new MutableObjectListIterator(this, 0);
  };
  protoOf(SubList).xm = function (element) {
    var tmp1 = this.jn_1;
    this.jn_1 = tmp1 + 1 | 0;
    this.hn_1.u1(tmp1, element);
    return true;
  };
  protoOf(SubList).h = function (element) {
    return this.xm(element);
  };
  protoOf(SubList).bn = function (index, element) {
    this.hn_1.u1(index + this.in_1 | 0, element);
    this.jn_1 = this.jn_1 + 1 | 0;
  };
  protoOf(SubList).u1 = function (index, element) {
    return this.bn(index, element);
  };
  protoOf(SubList).cn = function (index, elements) {
    this.hn_1.r1(index + this.in_1 | 0, elements);
    this.jn_1 = this.jn_1 + elements.l() | 0;
    return elements.l() > 0;
  };
  protoOf(SubList).r1 = function (index, elements) {
    return this.cn(index, elements);
  };
  protoOf(SubList).dn = function (elements) {
    this.hn_1.r1(this.jn_1, elements);
    this.jn_1 = this.jn_1 + elements.l() | 0;
    return elements.l() > 0;
  };
  protoOf(SubList).r = function (elements) {
    return this.dn(elements);
  };
  protoOf(SubList).s1 = function () {
    var inductionVariable = this.jn_1 - 1 | 0;
    var last = this.in_1;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        this.hn_1.v1(i);
      }
       while (!(i === last));
    this.jn_1 = this.in_1;
  };
  protoOf(SubList).s = function (index) {
    return new MutableObjectListIterator(this, index);
  };
  protoOf(SubList).fn = function (element) {
    var inductionVariable = this.in_1;
    var last = this.jn_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.hn_1.m(i), element)) {
          this.hn_1.v1(i);
          this.jn_1 = this.jn_1 - 1 | 0;
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  };
  protoOf(SubList).q1 = function (element) {
    if (!true)
      return false;
    return this.fn(element);
  };
  protoOf(SubList).v1 = function (index) {
    checkIndex(this, index);
    var element = this.hn_1.v1(index + this.in_1 | 0);
    this.jn_1 = this.jn_1 - 1 | 0;
    return element;
  };
  protoOf(SubList).gn = function (index, element) {
    checkIndex(this, index);
    return this.hn_1.t1(index + this.in_1 | 0, element);
  };
  protoOf(SubList).t1 = function (index, element) {
    return this.gn(index, element);
  };
  protoOf(SubList).o1 = function (fromIndex, toIndex) {
    checkSubIndex(this, fromIndex, toIndex);
    return new SubList(this, fromIndex, toIndex);
  };
  function MutableObjectList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    ObjectList.call(this, initialCapacity);
    this.an_1 = null;
  }
  protoOf(MutableObjectList).h = function (element) {
    // Inline function 'androidx.collection.MutableObjectList.ensureCapacity' call
    var capacity = this.rm_1 + 1 | 0;
    var oldContent = this.qm_1;
    if (oldContent.length < capacity) {
      this.kn(capacity, oldContent);
    }
    this.qm_1[this.rm_1] = element;
    this.rm_1 = this.rm_1 + 1 | 0;
    return true;
  };
  protoOf(MutableObjectList).u1 = function (index, element) {
    if (!(0 <= index ? index <= this.rm_1 : false)) {
      throwIndexOutOfBoundsInclusiveException(this, index);
    }
    // Inline function 'androidx.collection.MutableObjectList.ensureCapacity' call
    var capacity = this.rm_1 + 1 | 0;
    var oldContent = this.qm_1;
    if (oldContent.length < capacity) {
      this.kn(capacity, oldContent);
    }
    var content = this.qm_1;
    if (!(index === this.rm_1)) {
      var tmp4 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.rm_1;
      arrayCopy(content, content, tmp4, index, endIndex);
    }
    content[index] = element;
    this.rm_1 = this.rm_1 + 1 | 0;
  };
  protoOf(MutableObjectList).r1 = function (index, elements) {
    if (!(0 <= index ? index <= this.rm_1 : false)) {
      throwIndexOutOfBoundsInclusiveException(this, index);
    }
    if (elements.n())
      return false;
    // Inline function 'androidx.collection.MutableObjectList.ensureCapacity' call
    var capacity = this.rm_1 + elements.l() | 0;
    var oldContent = this.qm_1;
    if (oldContent.length < capacity) {
      this.kn(capacity, oldContent);
    }
    var content = this.qm_1;
    if (!(index === this.rm_1)) {
      var tmp4 = index + elements.l() | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.rm_1;
      arrayCopy(content, content, tmp4, index, endIndex);
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index_0 = 0;
    var _iterator__ex2g4s = elements.i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      var _unary__edvuaz = index_0;
      index_0 = _unary__edvuaz + 1 | 0;
      content[index + checkIndexOverflow(_unary__edvuaz) | 0] = item;
    }
    this.rm_1 = this.rm_1 + elements.l() | 0;
    return true;
  };
  protoOf(MutableObjectList).ln = function (elements) {
    var oldSize = this.rm_1;
    this.mn(elements);
    return !(oldSize === this.rm_1);
  };
  protoOf(MutableObjectList).en = function (elements) {
    var oldSize = this.rm_1;
    this.nn(elements);
    return !(oldSize === this.rm_1);
  };
  protoOf(MutableObjectList).mn = function (elements) {
    if (elements.n())
      return Unit_instance;
    // Inline function 'androidx.collection.MutableObjectList.ensureCapacity' call
    var capacity = this.rm_1 + elements.rm_1 | 0;
    var oldContent = this.qm_1;
    if (oldContent.length < capacity) {
      this.kn(capacity, oldContent);
    }
    var content = this.qm_1;
    var tmp0 = elements.qm_1;
    var tmp4 = this.rm_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = elements.rm_1;
    arrayCopy(tmp0, content, tmp4, 0, endIndex);
    this.rm_1 = this.rm_1 + elements.rm_1 | 0;
  };
  protoOf(MutableObjectList).nn = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
      this.h(element);
    }
  };
  protoOf(MutableObjectList).s1 = function () {
    fill_0(this.qm_1, null, 0, this.rm_1);
    this.rm_1 = 0;
  };
  protoOf(MutableObjectList).kn = function (capacity, oldContent) {
    var oldSize = oldContent.length;
    // Inline function 'kotlin.math.max' call
    var b = imul(oldSize, 3) / 2 | 0;
    var newSize = Math.max(capacity, b);
    // Inline function 'kotlin.arrayOfNulls' call
    var newContent = Array(newSize);
    var tmp = this;
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(oldContent, newContent, 0, 0, oldSize);
    tmp.qm_1 = newContent;
  };
  protoOf(MutableObjectList).q1 = function (element) {
    var index = this.u(element);
    if (index >= 0) {
      this.v1(index);
      return true;
    }
    return false;
  };
  protoOf(MutableObjectList).v1 = function (index) {
    if (!(0 <= index ? index < this.rm_1 : false)) {
      this.on(index);
    }
    var content = this.qm_1;
    var element = content[index];
    // Inline function 'androidx.collection.ObjectList.lastIndex' call
    if (!(index === (this.rm_1 - 1 | 0))) {
      var tmp6 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.rm_1;
      arrayCopy(content, content, index, tmp6, endIndex);
    }
    this.rm_1 = this.rm_1 - 1 | 0;
    content[this.rm_1] = null;
    return element;
  };
  protoOf(MutableObjectList).f4 = function (start, end) {
    if (!(0 <= start ? start <= this.rm_1 : false) || !(0 <= end ? end <= this.rm_1 : false)) {
      throwIndexOutOfBoundsException('Start (' + start + ') and end (' + end + ') must be in 0..' + this.rm_1);
    }
    if (end < start) {
      throwIllegalArgumentException('Start (' + start + ') is more than end (' + end + ')');
    }
    if (!(end === start)) {
      if (end < this.rm_1) {
        var tmp0 = this.qm_1;
        var tmp2 = this.qm_1;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = this.rm_1;
        arrayCopy(tmp0, tmp2, start, end, endIndex);
      }
      var newSize = this.rm_1 - (end - start | 0) | 0;
      fill_0(this.qm_1, null, newSize, this.rm_1);
      this.rm_1 = newSize;
    }
  };
  protoOf(MutableObjectList).t1 = function (index, element) {
    if (!(0 <= index ? index < this.rm_1 : false)) {
      this.on(index);
    }
    var content = this.qm_1;
    var old = content[index];
    content[index] = element;
    return old;
  };
  protoOf(MutableObjectList).pn = function () {
    var tmp0_elvis_lhs = this.an_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new ObjectListMutableList(this);
      this.an_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  function mutableObjectListOf(element1) {
    _init_properties_ObjectList_kt__fnapct();
    var list = new MutableObjectList(1);
    // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
    list.h(element1);
    return list;
  }
  function ObjectList$toString$lambda(this$0) {
    return function (element) {
      var tmp;
      if (element === this$0) {
        tmp = '(this)';
      } else {
        tmp = toString_0(element);
      }
      return tmp;
    };
  }
  function ObjectList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyArray();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_0 = Array(initialCapacity);
    }
    tmp.qm_1 = tmp_0;
    this.rm_1 = 0;
  }
  protoOf(ObjectList).l = function () {
    return this.rm_1;
  };
  protoOf(ObjectList).t = function (element) {
    return this.u(element) >= 0;
  };
  protoOf(ObjectList).jd = function () {
    if (this.n()) {
      throwNoSuchElementException('ObjectList is empty.');
    }
    return this.qm_1[0];
  };
  protoOf(ObjectList).m = function (index) {
    if (!(0 <= index ? index < this.rm_1 : false)) {
      this.on(index);
    }
    return this.qm_1[index];
  };
  protoOf(ObjectList).on = function (index) {
    // Inline function 'androidx.collection.ObjectList.lastIndex' call
    var tmp$ret$0 = this.rm_1 - 1 | 0;
    throwIndexOutOfBoundsException('Index ' + index + ' must be in 0..' + tmp$ret$0);
  };
  protoOf(ObjectList).u = function (element) {
    if (element == null) {
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.qm_1;
      var inductionVariable = 0;
      var last = this.rm_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (content[i] == null) {
            return i;
          }
        }
         while (inductionVariable < last);
    } else {
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content_0 = this.qm_1;
      var inductionVariable_0 = 0;
      var last_0 = this.rm_1;
      if (inductionVariable_0 < last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item = content_0[i_0];
          if (equals(element, item)) {
            return i_0;
          }
        }
         while (inductionVariable_0 < last_0);
    }
    return -1;
  };
  protoOf(ObjectList).n = function () {
    return this.rm_1 === 0;
  };
  protoOf(ObjectList).om = function () {
    return !(this.rm_1 === 0);
  };
  protoOf(ObjectList).qn = function (separator, prefix, postfix, limit, truncated, transform) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.g(prefix);
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.qm_1;
      var inductionVariable = 0;
      var last = this.rm_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element = content[i];
          if (i === limit) {
            this_0.g(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.g(separator);
          }
          if (transform == null) {
            this_0.q7(element);
          } else {
            this_0.g(transform(element));
          }
        }
         while (inductionVariable < last);
      this_0.g(postfix);
    }
    return this_0.toString();
  };
  protoOf(ObjectList).rn = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.qn(separator, prefix, postfix, limit, truncated, transform) : $super.qn.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ObjectList).hashCode = function () {
    var hashCode_0 = 0;
    // Inline function 'androidx.collection.ObjectList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.qm_1;
    var inductionVariable = 0;
    var last = this.rm_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = hashCode_0;
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver = content[i];
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
        var tmp$ret$3 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        hashCode_0 = tmp + imul(31, tmp$ret$3) | 0;
      }
       while (inductionVariable < last);
    return hashCode_0;
  };
  protoOf(ObjectList).equals = function (other) {
    var tmp;
    if (!(other instanceof ObjectList)) {
      tmp = true;
    } else {
      tmp = !(other.rm_1 === this.rm_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.qm_1;
    var otherContent = other.qm_1;
    // Inline function 'androidx.collection.ObjectList.indices' call
    var progression = until(0, this.rm_1);
    var inductionVariable = progression.x_1;
    var last = progression.y_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(content[i], otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(ObjectList).toString = function () {
    return this.rn(VOID, '[', ']', VOID, VOID, ObjectList$toString$lambda(this));
  };
  function emptyObjectList() {
    _init_properties_ObjectList_kt__fnapct();
    var tmp = get_EmptyObjectList();
    return tmp instanceof ObjectList ? tmp : THROW_CCE();
  }
  function mutableObjectListOf_0(element1, element2) {
    _init_properties_ObjectList_kt__fnapct();
    var list = new MutableObjectList(2);
    // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
    list.h(element1);
    // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
    list.h(element2);
    return list;
  }
  function objectListOf(element1) {
    _init_properties_ObjectList_kt__fnapct();
    return mutableObjectListOf(element1);
  }
  function checkIndex(_this__u8e3s4, index) {
    _init_properties_ObjectList_kt__fnapct();
    var size = _this__u8e3s4.l();
    if (index < 0 || index >= size) {
      throwIndexOutOfBoundsException('Index ' + index + ' is out of bounds. The list has ' + size + ' elements.');
    }
  }
  function checkSubIndex(_this__u8e3s4, fromIndex, toIndex) {
    _init_properties_ObjectList_kt__fnapct();
    var size = _this__u8e3s4.l();
    if (fromIndex > toIndex) {
      throwIllegalArgumentException('Indices are out of order. fromIndex (' + fromIndex + ') is greater than toIndex (' + toIndex + ').');
    }
    if (fromIndex < 0) {
      throwIndexOutOfBoundsException('fromIndex (' + fromIndex + ') is less than 0.');
    }
    if (toIndex > size) {
      throwIndexOutOfBoundsException('toIndex (' + toIndex + ') is more than than the list size (' + size + ')');
    }
  }
  var properties_initialized_ObjectList_kt_7isazj;
  function _init_properties_ObjectList_kt__fnapct() {
    if (!properties_initialized_ObjectList_kt_7isazj) {
      properties_initialized_ObjectList_kt_7isazj = true;
      // Inline function 'kotlin.arrayOfNulls' call
      EmptyArray = Array(0);
      EmptyObjectList = new MutableObjectList(0);
    }
  }
  var EmptyOrderedScatterSet;
  function initializeStorage_5($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.xn_1 = newCapacity;
    initializeMetadata_5($this, newCapacity);
    var tmp_0 = $this;
    var tmp_1;
    if (newCapacity === 0) {
      tmp_1 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_1 = Array(newCapacity);
    }
    tmp_0.tn_1 = tmp_1;
    var tmp_2 = $this;
    var tmp_3;
    if (newCapacity === 0) {
      tmp_3 = get_EmptyNodes();
    } else {
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(newCapacity);
      fill(this_0, new Long(-1, 1073741823));
      tmp_3 = this_0;
    }
    tmp_2.un_1 = tmp_3;
  }
  function initializeMetadata_5($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.sn_1 = tmp_0;
    var tmp0 = $this.sn_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_5($this);
  }
  function initializeGrowth_5($this) {
    $this.go_1 = loadedCapacity($this.li()) - $this.yn_1 | 0;
  }
  function findAbsoluteInsertIndex_3($this, element) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = element == null ? null : hashCode(element);
    var tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$1, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.xn_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.sn_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$6 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$6);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (equals($this.tn_1[index], element)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_5($this, hash1);
    var tmp_0;
    if ($this.go_1 === 0) {
      var tmp0_0 = $this.sn_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$13 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$13, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.mi();
      index_0 = findFirstAvailableSlot_5($this, hash1);
    }
    $this.yn_1 = $this.yn_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.go_1;
    var tmp_3;
    var tmp0_1 = $this.sn_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$15 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$15, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.go_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.sn_1;
    var tmp2 = $this.xn_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_5($this, hash1) {
    var probeMask = $this.xn_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.sn_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function fixupNodes($this, mapping) {
    var nodes = $this.un_1;
    var inductionVariable = 0;
    var last = nodes.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var node = nodes[i];
        // Inline function 'androidx.collection.previousNode' call
        var previous = convertToInt(bitwiseAnd(shiftRight(node, 31), new Long(2147483647, 0)));
        // Inline function 'androidx.collection.nextNode' call
        var next = convertToInt(bitwiseAnd(node, new Long(2147483647, 0)));
        // Inline function 'androidx.collection.createLinks' call
        var tmp = bitwiseAnd(node, new Long(0, -1073741824));
        var tmp_0;
        if (previous === 2147483647) {
          tmp_0 = 2147483647;
        } else {
          // Inline function 'androidx.collection.dst' call
          var this_0 = mapping[previous];
          tmp_0 = convertToInt(bitwiseAnd(this_0, new Long(-1, 0)));
        }
        var tmp_1 = shiftLeft(bitwiseOr(tmp, fromInt(tmp_0)), 31);
        var tmp_2;
        if (next === 2147483647) {
          tmp_2 = 2147483647;
        } else {
          // Inline function 'androidx.collection.dst' call
          var this_1 = mapping[next];
          tmp_2 = convertToInt(bitwiseAnd(this_1, new Long(-1, 0)));
        }
        nodes[i] = bitwiseOr(tmp_1, fromInt(tmp_2));
      }
       while (inductionVariable <= last);
    if (!($this.vn_1 === 2147483647)) {
      var tmp_3 = $this;
      // Inline function 'androidx.collection.dst' call
      var this_2 = mapping[$this.vn_1];
      tmp_3.vn_1 = convertToInt(bitwiseAnd(this_2, new Long(-1, 0)));
    }
    if (!($this.wn_1 === 2147483647)) {
      var tmp_4 = $this;
      // Inline function 'androidx.collection.dst' call
      var this_3 = mapping[$this.wn_1];
      tmp_4.wn_1 = convertToInt(bitwiseAnd(this_3, new Long(-1, 0)));
    }
  }
  function fixupNodes_0($this, mapping) {
    var nodes = $this.un_1;
    var inductionVariable = 0;
    var last = nodes.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var node = nodes[i];
        // Inline function 'androidx.collection.previousNode' call
        var previous = convertToInt(bitwiseAnd(shiftRight(node, 31), new Long(2147483647, 0)));
        // Inline function 'androidx.collection.nextNode' call
        var next = convertToInt(bitwiseAnd(node, new Long(2147483647, 0)));
        // Inline function 'androidx.collection.createLinks' call
        nodes[i] = bitwiseOr(shiftLeft(bitwiseOr(bitwiseAnd(node, new Long(0, -1073741824)), fromInt(previous === 2147483647 ? 2147483647 : mapping[previous])), 31), fromInt(next === 2147483647 ? 2147483647 : mapping[next]));
      }
       while (inductionVariable <= last);
    if (!($this.vn_1 === 2147483647))
      $this.vn_1 = mapping[$this.vn_1];
    if (!($this.wn_1 === 2147483647))
      $this.wn_1 = mapping[$this.wn_1];
  }
  function MutableOrderedScatterSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    OrderedScatterSet.call(this);
    this.go_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$2 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$2);
    }
    initializeStorage_5(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableOrderedScatterSet).h = function (element) {
    var oldSize = this.l();
    var index = findAbsoluteInsertIndex_3(this, element);
    this.tn_1[index] = element;
    // Inline function 'androidx.collection.MutableOrderedScatterSet.moveNodeToHead' call
    var tmp = this.un_1;
    // Inline function 'androidx.collection.createLinkToNext' call
    var next = this.vn_1;
    tmp[index] = bitwiseOr(new Long(-2147483648, 1073741823), bitwiseAnd(fromInt(next), new Long(2147483647, 0)));
    if (!(this.vn_1 === 2147483647)) {
      var tmp_0 = this.un_1;
      var tmp_1 = this.vn_1;
      // Inline function 'androidx.collection.setLinkToPrevious' call
      var node = this.un_1[this.vn_1];
      tmp_0[tmp_1] = bitwiseOr(bitwiseAnd(node, new Long(2147483647, -1073741824)), shiftLeft(bitwiseAnd(fromInt(index), new Long(2147483647, 0)), 31));
    }
    this.vn_1 = index;
    if (this.wn_1 === 2147483647) {
      this.wn_1 = index;
    }
    return !(this.l() === oldSize);
  };
  protoOf(MutableOrderedScatterSet).ho = function (element) {
    var index = findAbsoluteInsertIndex_3(this, element);
    this.tn_1[index] = element;
    // Inline function 'androidx.collection.MutableOrderedScatterSet.moveNodeToHead' call
    var tmp = this.un_1;
    // Inline function 'androidx.collection.createLinkToNext' call
    var next = this.vn_1;
    tmp[index] = bitwiseOr(new Long(-2147483648, 1073741823), bitwiseAnd(fromInt(next), new Long(2147483647, 0)));
    if (!(this.vn_1 === 2147483647)) {
      var tmp_0 = this.un_1;
      var tmp_1 = this.vn_1;
      // Inline function 'androidx.collection.setLinkToPrevious' call
      var node = this.un_1[this.vn_1];
      tmp_0[tmp_1] = bitwiseOr(bitwiseAnd(node, new Long(2147483647, -1073741824)), shiftLeft(bitwiseAnd(fromInt(index), new Long(2147483647, 0)), 31));
    }
    this.vn_1 = index;
    if (this.wn_1 === 2147483647) {
      this.wn_1 = index;
    }
  };
  protoOf(MutableOrderedScatterSet).en = function (elements) {
    var oldSize = this.l();
    this.nn(elements);
    return !(oldSize === this.l());
  };
  protoOf(MutableOrderedScatterSet).nn = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      this.ho(element);
    }
  };
  protoOf(MutableOrderedScatterSet).q1 = function (element) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.OrderedScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$2, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.xn_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.sn_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$7 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$7);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.tn_1[index], element)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    var index_0 = tmp$ret$0;
    var exists = index_0 >= 0;
    if (exists) {
      this.io(index_0);
    }
    return exists;
  };
  protoOf(MutableOrderedScatterSet).io = function (index) {
    this.yn_1 = this.yn_1 - 1 | 0;
    var tmp0 = this.sn_1;
    var tmp2 = this.xn_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    this.tn_1[index] = null;
    // Inline function 'androidx.collection.MutableOrderedScatterSet.removeNode' call
    var nodes = this.un_1;
    var node = nodes[index];
    // Inline function 'androidx.collection.previousNode' call
    var previousIndex = convertToInt(bitwiseAnd(shiftRight(node, 31), new Long(2147483647, 0)));
    // Inline function 'androidx.collection.nextNode' call
    var nextIndex = convertToInt(bitwiseAnd(node, new Long(2147483647, 0)));
    if (!(previousIndex === 2147483647)) {
      // Inline function 'androidx.collection.setLinkToNext' call
      var node_0 = nodes[previousIndex];
      nodes[previousIndex] = bitwiseOr(bitwiseAnd(node_0, new Long(-2147483648, -1)), bitwiseAnd(fromInt(nextIndex), new Long(2147483647, 0)));
    } else {
      this.vn_1 = nextIndex;
    }
    if (!(nextIndex === 2147483647)) {
      // Inline function 'androidx.collection.setLinkToPrevious' call
      var node_1 = nodes[nextIndex];
      nodes[nextIndex] = bitwiseOr(bitwiseAnd(node_1, new Long(2147483647, -1073741824)), shiftLeft(bitwiseAnd(fromInt(previousIndex), new Long(2147483647, 0)), 31));
    } else {
      this.wn_1 = previousIndex;
    }
    nodes[index] = new Long(-1, 1073741823);
  };
  protoOf(MutableOrderedScatterSet).s1 = function () {
    this.yn_1 = 0;
    if (!(this.sn_1 === get_EmptyGroup())) {
      fill(this.sn_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.sn_1;
      var tmp2 = this.xn_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp2 >> 3;
      var b = (tmp2 & 7) << 3;
      tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    }
    fill_0(this.tn_1, null, 0, this.xn_1);
    fill(this.un_1, new Long(-1, 1073741823));
    this.vn_1 = 2147483647;
    this.wn_1 = 2147483647;
    initializeGrowth_5(this);
  };
  protoOf(MutableOrderedScatterSet).mi = function () {
    var tmp;
    if (this.xn_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.yn_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.xn_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.pi();
    } else {
      this.oi(nextCapacity(this.xn_1));
    }
  };
  protoOf(MutableOrderedScatterSet).pi = function () {
    var metadata = this.sn_1;
    if (metadata == null)
      return Unit_instance;
    var capacity = this.xn_1;
    var elements = this.tn_1;
    var nodes = this.un_1;
    var indexMapping = longArray(capacity);
    fill(indexMapping, new Long(2147483647, 2147483647), 0, capacity);
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = elements[index];
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      var tmp$ret$3 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$3, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_5(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        if (equalsLong(indexMapping[index], new Long(2147483647, 2147483647))) {
          var tmp = index;
          var tmp0 = index;
          // Inline function 'androidx.collection.createMapping' call
          var dst = index;
          indexMapping[tmp] = bitwiseOr(shiftLeft(fromInt(tmp0), 32), fromInt(dst));
        }
        metadata[metadata.length - 1 | 0] = metadata[0];
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        elements[targetIndex] = elements[index];
        elements[index] = null;
        nodes[targetIndex] = nodes[index];
        nodes[index] = new Long(-1, 1073741823);
        var mapping = indexMapping[index];
        // Inline function 'androidx.collection.src' call
        var src = convertToInt(bitwiseAnd(shiftRight(mapping, 32), new Long(-1, 0)));
        if (!(src === 2147483647)) {
          // Inline function 'androidx.collection.createDstMapping' call
          var mapping_0 = indexMapping[src];
          // Inline function 'kotlin.ULong.toLong' call
          var this_0 = _ULong___init__impl__c78o9k(new Long(0, -1));
          var tmp$ret$14 = _ULong___get_data__impl__fggpzb(this_0);
          indexMapping[src] = bitwiseOr(bitwiseAnd(mapping_0, tmp$ret$14), fromInt(targetIndex));
          var tmp_0 = index;
          // Inline function 'androidx.collection.eraseSrcMapping' call
          var mapping_1 = indexMapping[index];
          // Inline function 'kotlin.ULong.toLong' call
          var this_1 = _ULong___init__impl__c78o9k(new Long(0, -1));
          var tmp$ret$16 = _ULong___get_data__impl__fggpzb(this_1);
          indexMapping[tmp_0] = bitwiseOr(tmp$ret$16, bitwiseAnd(mapping_1, new Long(-1, 0)));
        } else {
          var tmp_1 = index;
          // Inline function 'androidx.collection.createMapping' call
          var src_0 = 2147483647;
          indexMapping[tmp_1] = bitwiseOr(shiftLeft(fromInt(src_0), 32), fromInt(targetIndex));
        }
        var tmp0_0 = index;
        // Inline function 'androidx.collection.createMapping' call
        var dst_0 = 2147483647;
        indexMapping[targetIndex] = bitwiseOr(shiftLeft(fromInt(tmp0_0), 32), fromInt(dst_0));
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldElement = elements[targetIndex];
        elements[targetIndex] = elements[index];
        elements[index] = oldElement;
        var oldNode = nodes[targetIndex];
        nodes[targetIndex] = nodes[index];
        nodes[index] = oldNode;
        var mapping_2 = indexMapping[index];
        // Inline function 'androidx.collection.src' call
        var src_1 = convertToInt(bitwiseAnd(shiftRight(mapping_2, 32), new Long(-1, 0)));
        if (!(src_1 === 2147483647)) {
          var tmp_2 = src_1;
          // Inline function 'androidx.collection.createDstMapping' call
          var mapping_3 = indexMapping[src_1];
          // Inline function 'kotlin.ULong.toLong' call
          var this_2 = _ULong___init__impl__c78o9k(new Long(0, -1));
          var tmp$ret$23 = _ULong___get_data__impl__fggpzb(this_2);
          indexMapping[tmp_2] = bitwiseOr(bitwiseAnd(mapping_3, tmp$ret$23), fromInt(targetIndex));
          var tmp_3 = index;
          // Inline function 'androidx.collection.createSrcMapping' call
          var mapping_4 = indexMapping[index];
          indexMapping[tmp_3] = bitwiseOr(shiftLeft(fromInt(targetIndex), 32), bitwiseAnd(mapping_4, new Long(-1, 0)));
        } else {
          var tmp_4 = index;
          // Inline function 'androidx.collection.createMapping' call
          indexMapping[tmp_4] = bitwiseOr(shiftLeft(fromInt(targetIndex), 32), fromInt(targetIndex));
          src_1 = index;
        }
        var tmp0_1 = src_1;
        // Inline function 'androidx.collection.createMapping' call
        var dst_1 = index;
        indexMapping[targetIndex] = bitwiseOr(shiftLeft(fromInt(tmp0_1), 32), fromInt(dst_1));
        index = index - 1 | 0;
      }
      metadata[metadata.length - 1 | 0] = metadata[0];
      index = index + 1 | 0;
    }
    initializeGrowth_5(this);
    fixupNodes(this, indexMapping);
  };
  protoOf(MutableOrderedScatterSet).oi = function (newCapacity) {
    var previousMetadata = this.sn_1;
    var previousElements = this.tn_1;
    var previousNodes = this.un_1;
    var previousCapacity = this.xn_1;
    var indexMapping = new Int32Array(previousCapacity);
    initializeStorage_5(this, newCapacity);
    var newMetadata = this.sn_1;
    var newElements = this.tn_1;
    var newNodes = this.un_1;
    var capacity = this.xn_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$1 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$1, new Long(128, 0)) < 0) {
          var previousKey = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$3 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$3, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_5(this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$5);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newElements[index] = previousKey;
          newNodes[index] = previousNodes[i];
          indexMapping[i] = index;
        }
      }
       while (inductionVariable < previousCapacity);
    fixupNodes_0(this, indexMapping);
  };
  protoOf(MutableOrderedScatterSet).jo = function () {
    return new MutableOrderedSetWrapper(this);
  };
  function mutableOrderedScatterSetOf() {
    _init_properties_OrderedScatterSet_kt__4at9i9();
    return new MutableOrderedScatterSet();
  }
  function OrderedScatterSet$toString$lambda(this$0) {
    return function (element) {
      var tmp;
      if (element === this$0) {
        tmp = '(this)';
      } else {
        tmp = toString_0(element);
      }
      return tmp;
    };
  }
  function OrderedScatterSet() {
    this.sn_1 = get_EmptyGroup();
    this.tn_1 = get_EMPTY_OBJECTS();
    this.un_1 = get_EmptyNodes();
    this.vn_1 = 2147483647;
    this.wn_1 = 2147483647;
    this.xn_1 = 0;
    this.yn_1 = 0;
  }
  protoOf(OrderedScatterSet).li = function () {
    return this.xn_1;
  };
  protoOf(OrderedScatterSet).l = function () {
    return this.yn_1;
  };
  protoOf(OrderedScatterSet).n = function () {
    return this.yn_1 === 0;
  };
  protoOf(OrderedScatterSet).t = function (element) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.OrderedScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$2, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.xn_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.sn_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$7 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$7);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.tn_1[index], element)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    return tmp$ret$0 >= 0;
  };
  protoOf(OrderedScatterSet).qn = function (separator, prefix, postfix, limit, truncated, transform) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.g(prefix);
      var index = 0;
      // Inline function 'androidx.collection.OrderedScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var elements = this.tn_1;
      var nodes = this.un_1;
      var candidate = this.wn_1;
      while (!(candidate === 2147483647)) {
        // Inline function 'androidx.collection.previousNode' call
        var this_1 = nodes[candidate];
        var previousNode = convertToInt(bitwiseAnd(shiftRight(this_1, 31), new Long(2147483647, 0)));
        var element = elements[candidate];
        if (index === limit) {
          this_0.g(truncated);
          break $l$block;
        }
        if (!(index === 0)) {
          this_0.g(separator);
        }
        if (transform == null) {
          this_0.q7(element);
        } else {
          this_0.g(transform(element));
        }
        index = index + 1 | 0;
        candidate = previousNode;
      }
      this_0.g(postfix);
    }
    return this_0.toString();
  };
  protoOf(OrderedScatterSet).ko = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.qn(separator, prefix, postfix, limit, truncated, transform) : $super.qn.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(OrderedScatterSet).hashCode = function () {
    var hash = this.xn_1;
    hash = imul(31, hash) + this.yn_1 | 0;
    // Inline function 'androidx.collection.OrderedScatterSet.unorderedForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements = this.tn_1;
    $l$block: {
      // Inline function 'androidx.collection.OrderedScatterSet.unorderedForEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.sn_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$4 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$4, new Long(-2139062144, -2139062144))) {
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
                  var element = elements[index];
                  if (!equals(element, this)) {
                    var tmp = hash;
                    // Inline function 'kotlin.hashCode' call
                    var tmp1_elvis_lhs = element == null ? null : hashCode(element);
                    hash = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
                  }
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
    return hash;
  };
  protoOf(OrderedScatterSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof OrderedScatterSet)) {
      return false;
    }
    if (!(other.l() === this.l())) {
      return false;
    }
    var o = other instanceof OrderedScatterSet ? other : THROW_CCE();
    // Inline function 'androidx.collection.OrderedScatterSet.unorderedForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements = this.tn_1;
    $l$block: {
      // Inline function 'androidx.collection.OrderedScatterSet.unorderedForEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.sn_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$4 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$4, new Long(-2139062144, -2139062144))) {
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
                  var element = elements[index];
                  if (!o.t(element)) {
                    return false;
                  }
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
    return true;
  };
  protoOf(OrderedScatterSet).toString = function () {
    return this.ko(VOID, '[', ']', VOID, VOID, OrderedScatterSet$toString$lambda(this));
  };
  function MutableOrderedSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation) {
    this.to_1 = this$0;
    this.uo_1 = this$1;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableOrderedSetWrapper$iterator$o$iterator$slambda).zo = function ($this$iterator, $completion) {
    var tmp = this.ap($this$iterator, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(MutableOrderedSetWrapper$iterator$o$iterator$slambda).e9 = function (p1, $completion) {
    return this.zo(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableOrderedSetWrapper$iterator$o$iterator$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            var this_0 = this.to_1.cp_1;
            this.yo_1 = this_0.un_1;
            this.wo_1 = this_0.wn_1;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            if (!!(this.wo_1 === 2147483647)) {
              this.m8_1 = 3;
              continue $sm;
            }

            var tmp_0 = this;
            var this_1 = this.yo_1[this.wo_1];
            tmp_0.xo_1 = convertToInt(bitwiseAnd(shiftRight(this_1, 31), new Long(2147483647, 0)));
            var index = this.wo_1;
            this.uo_1.dp_1 = index;
            this.m8_1 = 2;
            suspendResult = this.vo_1.je(this.to_1.cp_1.tn_1[index], this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.wo_1 = this.xo_1;
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
  protoOf(MutableOrderedSetWrapper$iterator$o$iterator$slambda).ap = function ($this$iterator, completion) {
    var i = new MutableOrderedSetWrapper$iterator$o$iterator$slambda(this.to_1, this.uo_1, completion);
    i.vo_1 = $this$iterator;
    return i;
  };
  function MutableOrderedSetWrapper$iterator$o$iterator$slambda_0(this$0, this$1, resultContinuation) {
    var i = new MutableOrderedSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.zo($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableOrderedSetWrapper$iterator$1(this$0) {
    this.fp_1 = this$0;
    this.dp_1 = -1;
    var tmp = this;
    tmp.ep_1 = iterator(MutableOrderedSetWrapper$iterator$o$iterator$slambda_0(this$0, this, null));
  }
  protoOf(MutableOrderedSetWrapper$iterator$1).j = function () {
    return this.ep_1.j();
  };
  protoOf(MutableOrderedSetWrapper$iterator$1).k = function () {
    return this.ep_1.k();
  };
  protoOf(MutableOrderedSetWrapper$iterator$1).m3 = function () {
    if (!(this.dp_1 === -1)) {
      this.fp_1.cp_1.io(this.dp_1);
      this.dp_1 = -1;
    }
  };
  function MutableOrderedSetWrapper(parent) {
    OrderedSetWrapper.call(this, parent);
    this.cp_1 = parent;
  }
  protoOf(MutableOrderedSetWrapper).h = function (element) {
    return this.cp_1.h(element);
  };
  protoOf(MutableOrderedSetWrapper).r = function (elements) {
    return this.cp_1.en(elements);
  };
  protoOf(MutableOrderedSetWrapper).s1 = function () {
    this.cp_1.s1();
  };
  protoOf(MutableOrderedSetWrapper).i = function () {
    return new MutableOrderedSetWrapper$iterator$1(this);
  };
  protoOf(MutableOrderedSetWrapper).q1 = function (element) {
    return this.cp_1.q1(element);
  };
  function OrderedSetWrapper$iterator$slambda(this$0, resultContinuation) {
    this.pp_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OrderedSetWrapper$iterator$slambda).zo = function ($this$iterator, $completion) {
    var tmp = this.ap($this$iterator, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(OrderedSetWrapper$iterator$slambda).e9 = function (p1, $completion) {
    return this.zo(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(OrderedSetWrapper$iterator$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 4;
            var this_0 = this.pp_1.gp_1;
            this.tp_1 = this_0.tn_1;
            this.up_1 = this_0.un_1;
            this.rp_1 = this_0.wn_1;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            if (!!(this.rp_1 === 2147483647)) {
              this.m8_1 = 3;
              continue $sm;
            }

            var tmp_0 = this;
            var this_1 = this.up_1[this.rp_1];
            tmp_0.sp_1 = convertToInt(bitwiseAnd(shiftRight(this_1, 31), new Long(2147483647, 0)));
            var element = this.tp_1[this.rp_1];
            this.m8_1 = 2;
            suspendResult = this.qp_1.je(element, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.rp_1 = this.sp_1;
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
  protoOf(OrderedSetWrapper$iterator$slambda).ap = function ($this$iterator, completion) {
    var i = new OrderedSetWrapper$iterator$slambda(this.pp_1, completion);
    i.qp_1 = $this$iterator;
    return i;
  };
  function OrderedSetWrapper$iterator$slambda_0(this$0, resultContinuation) {
    var i = new OrderedSetWrapper$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.zo($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function OrderedSetWrapper(parent) {
    this.gp_1 = parent;
  }
  protoOf(OrderedSetWrapper).l = function () {
    return this.gp_1.yn_1;
  };
  protoOf(OrderedSetWrapper).p1 = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      if (!this.gp_1.t(element)) {
        return false;
      }
    }
    return true;
  };
  protoOf(OrderedSetWrapper).t = function (element) {
    return this.gp_1.t(element);
  };
  protoOf(OrderedSetWrapper).n = function () {
    return this.gp_1.n();
  };
  protoOf(OrderedSetWrapper).i = function () {
    return iterator(OrderedSetWrapper$iterator$slambda_0(this, null));
  };
  protoOf(OrderedSetWrapper).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof OrderedSetWrapper))
      THROW_CCE();
    return this.gp_1.equals(other.gp_1);
  };
  protoOf(OrderedSetWrapper).hashCode = function () {
    return this.gp_1.hashCode();
  };
  protoOf(OrderedSetWrapper).toString = function () {
    return this.gp_1.toString();
  };
  var properties_initialized_OrderedScatterSet_kt_ois2n;
  function _init_properties_OrderedScatterSet_kt__4at9i9() {
    if (!properties_initialized_OrderedScatterSet_kt_ois2n) {
      properties_initialized_OrderedScatterSet_kt_ois2n = true;
      EmptyOrderedScatterSet = new MutableOrderedScatterSet(0);
    }
  }
  function get_EmptyGroup() {
    _init_properties_ScatterMap_kt__cygxb2();
    return EmptyGroup;
  }
  var EmptyGroup;
  function get_EmptyScatterMap() {
    _init_properties_ScatterMap_kt__cygxb2();
    return EmptyScatterMap;
  }
  var EmptyScatterMap;
  function initializeStorage_6($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.math.max' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.yp_1 = newCapacity;
    initializeMetadata_6($this, newCapacity);
    var tmp_0 = $this;
    var tmp_1;
    if (newCapacity === 0) {
      tmp_1 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_1 = Array(newCapacity);
    }
    tmp_0.wp_1 = tmp_1;
    var tmp_2 = $this;
    var tmp_3;
    if (newCapacity === 0) {
      tmp_3 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_3 = Array(newCapacity);
    }
    tmp_2.xp_1 = tmp_3;
  }
  function initializeMetadata_6($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = capacity >> 3;
      var b = (capacity & 7) << 3;
      this_0[i] = bitwiseOr(bitwiseAnd(this_0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
      tmp_0 = this_0;
    }
    tmp.vp_1 = tmp_0;
    initializeGrowth_6($this);
  }
  function initializeGrowth_6($this) {
    $this.fq_1 = loadedCapacity($this.li()) - $this.zp_1 | 0;
  }
  function findFirstAvailableSlot_6($this, hash1) {
    var probeMask = $this.yp_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.vp_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableScatterMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ScatterMap.call(this);
    this.fq_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$2 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$2);
    }
    initializeStorage_6(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterMap).gq = function (key, value) {
    // Inline function 'kotlin.let' call
    var index = this.hq(key);
    var index_0 = index < 0 ? ~index : index;
    this.wp_1[index_0] = key;
    this.xp_1[index_0] = value;
  };
  protoOf(MutableScatterMap).y1 = function (key, value) {
    // Inline function 'kotlin.let' call
    var index = this.hq(key);
    var index_0 = index < 0 ? ~index : index;
    var oldValue = this.xp_1[index_0];
    this.wp_1[index_0] = key;
    this.xp_1[index_0] = value;
    return oldValue;
  };
  protoOf(MutableScatterMap).iq = function (from) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = from.d2().i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      // Inline function 'kotlin.collections.component1' call
      var key = element.w1();
      // Inline function 'kotlin.collections.component2' call
      var value = element.x1();
      this.gq(key, value);
    }
  };
  protoOf(MutableScatterMap).jq = function (from) {
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = from.wp_1;
    var v = from.xp_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = from.vp_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
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
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  this.gq(tmp0, value_0);
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
  };
  protoOf(MutableScatterMap).z1 = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$2, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.yp_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.vp_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$7 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$7);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.wp_1[index], key)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    var index_0 = tmp$ret$0;
    if (index_0 >= 0) {
      return this.oj(index_0);
    }
    return null;
  };
  protoOf(MutableScatterMap).oj = function (index) {
    this.zp_1 = this.zp_1 - 1 | 0;
    var tmp0 = this.vp_1;
    var tmp2 = this.yp_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    this.wp_1[index] = null;
    var oldValue = this.xp_1[index];
    this.xp_1[index] = null;
    return oldValue;
  };
  protoOf(MutableScatterMap).s1 = function () {
    this.zp_1 = 0;
    if (!(this.vp_1 === get_EmptyGroup())) {
      fill(this.vp_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.vp_1;
      var tmp2 = this.yp_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp2 >> 3;
      var b = (tmp2 & 7) << 3;
      tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    }
    fill_0(this.xp_1, null, 0, this.yp_1);
    fill_0(this.wp_1, null, 0, this.yp_1);
    initializeGrowth_6(this);
  };
  protoOf(MutableScatterMap).hq = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$1, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.yp_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = this.vp_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$6 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$6);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (equals(this.wp_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_6(this, hash1);
    var tmp_0;
    if (this.fq_1 === 0) {
      var tmp0_0 = this.vp_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$13 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$13, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      this.mi();
      index_0 = findFirstAvailableSlot_6(this, hash1);
    }
    this.zp_1 = this.zp_1 + 1 | 0;
    var tmp_1 = this;
    var tmp_2 = this.fq_1;
    var tmp_3;
    var tmp0_1 = this.vp_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$15 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$15, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.fq_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = this.vp_1;
    var tmp2 = this.yp_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return ~index_0;
  };
  protoOf(MutableScatterMap).mi = function () {
    var tmp;
    if (this.yp_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.zp_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.yp_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.pi();
    } else {
      this.oi(nextCapacity(this.yp_1));
    }
  };
  protoOf(MutableScatterMap).pi = function () {
    var metadata = this.vp_1;
    var capacity = this.yp_1;
    var keys = this.wp_1;
    var values = this.xp_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = keys[index];
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      var tmp$ret$3 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$3, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_6(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = metadata[0];
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        keys[targetIndex] = keys[index];
        keys[index] = null;
        values[targetIndex] = values[index];
        values[index] = null;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = metadata[0];
      index = index + 1 | 0;
    }
    initializeGrowth_6(this);
  };
  protoOf(MutableScatterMap).oi = function (newCapacity) {
    var previousMetadata = this.vp_1;
    var previousKeys = this.wp_1;
    var previousValues = this.xp_1;
    var previousCapacity = this.yp_1;
    initializeStorage_6(this, newCapacity);
    var newMetadata = this.vp_1;
    var newKeys = this.wp_1;
    var newValues = this.xp_1;
    var capacity = this.yp_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$1 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$1, new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$3 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$3, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_6(this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$5);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function mutableScatterMapOf() {
    _init_properties_ScatterMap_kt__cygxb2();
    return new MutableScatterMap();
  }
  function ScatterMap() {
    this.vp_1 = get_EmptyGroup();
    this.wp_1 = get_EMPTY_OBJECTS();
    this.xp_1 = get_EMPTY_OBJECTS();
    this.yp_1 = 0;
    this.zp_1 = 0;
  }
  protoOf(ScatterMap).li = function () {
    return this.yp_1;
  };
  protoOf(ScatterMap).l = function () {
    return this.zp_1;
  };
  protoOf(ScatterMap).n = function () {
    return this.zp_1 === 0;
  };
  protoOf(ScatterMap).om = function () {
    return !(this.zp_1 === 0);
  };
  protoOf(ScatterMap).g2 = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$2, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.yp_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.vp_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$7 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$7);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.wp_1[index], key)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    var index_0 = tmp$ret$0;
    return index_0 >= 0 ? this.xp_1[index_0] : null;
  };
  protoOf(ScatterMap).c5 = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$2, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.yp_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.vp_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$7 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$7);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.wp_1[index], key)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    return tmp$ret$0 >= 0;
  };
  protoOf(ScatterMap).e2 = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$2, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.yp_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.vp_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$7 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$7);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.wp_1[index], key)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    return tmp$ret$0 >= 0;
  };
  protoOf(ScatterMap).f2 = function (value) {
    // Inline function 'androidx.collection.ScatterMap.forEachValue' call
    var v = this.xp_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.vp_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value_0 = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value_0, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var v_0 = v[index];
                  if (equals(value, v_0))
                    return true;
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
    return false;
  };
  protoOf(ScatterMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.wp_1;
    var v = this.xp_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.vp_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
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
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  var tmp = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = tmp0 == null ? null : hashCode(tmp0);
                  var tmp_0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs_0 = value_0 == null ? null : hashCode(value_0);
                  hash = tmp + (tmp_0 ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0)) | 0;
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
    return hash;
  };
  protoOf(ScatterMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ScatterMap)) {
      return false;
    }
    if (!(other.l() === this.l())) {
      return false;
    }
    var o = other instanceof ScatterMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.wp_1;
    var v = this.xp_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.vp_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
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
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  if (value_0 == null) {
                    if (!(o.g2(tmp0) == null) || !o.e2(tmp0)) {
                      return false;
                    }
                  } else if (!equals(value_0, o.g2(tmp0))) {
                    return false;
                  }
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
    return true;
  };
  protoOf(ScatterMap).toString = function () {
    if (this.n()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().s7(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.wp_1;
    var v = this.xp_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.vp_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  s.q7(tmp0 === this ? '(this)' : tmp0);
                  s.r7('=');
                  s.q7(value_0 === this ? '(this)' : value_0);
                  i = i + 1 | 0;
                  if (i < this.zp_1) {
                    s.s7(_Char___init__impl__6a9atx(44)).s7(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.s7(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(ScatterMap).kq = function () {
    return new MapWrapper(this);
  };
  function emptyScatterMap() {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp = get_EmptyScatterMap();
    return tmp instanceof ScatterMap ? tmp : THROW_CCE();
  }
  function unloadedCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    if (true && capacity === 7) {
      return 8;
    }
    return capacity + ((capacity - 1 | 0) / 7 | 0) | 0;
  }
  function normalizeCapacity(n) {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp;
    if (n > 0) {
      // Inline function 'kotlin.countLeadingZeroBits' call
      tmp = -1 >>> clz32(n) | 0;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function loadedCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    if (true && capacity === 7) {
      return 6;
    }
    return capacity - (capacity / 8 | 0) | 0;
  }
  function nextCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp;
    if (capacity === 0) {
      tmp = 6;
    } else {
      tmp = imul(capacity, 2) + 1 | 0;
    }
    return tmp;
  }
  function MapWrapper(parent) {
    this.lq_1 = parent;
    this.mq_1 = null;
    this.nq_1 = null;
    this.oq_1 = null;
  }
  protoOf(MapWrapper).d2 = function () {
    var tmp0_elvis_lhs = this.mq_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = new Entries(this.lq_1);
      this.mq_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapWrapper).b2 = function () {
    var tmp0_elvis_lhs = this.nq_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = new Keys(this.lq_1);
      this.nq_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapWrapper).l = function () {
    return this.lq_1.zp_1;
  };
  protoOf(MapWrapper).n = function () {
    return this.lq_1.n();
  };
  protoOf(MapWrapper).g2 = function (key) {
    return this.lq_1.g2(key);
  };
  protoOf(MapWrapper).f2 = function (value) {
    return this.lq_1.f2(value);
  };
  protoOf(MapWrapper).e2 = function (key) {
    return this.lq_1.e2(key);
  };
  protoOf(MapWrapper).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof MapWrapper))
      THROW_CCE();
    return this.lq_1.equals(other.lq_1);
  };
  protoOf(MapWrapper).hashCode = function () {
    return this.lq_1.hashCode();
  };
  protoOf(MapWrapper).toString = function () {
    return this.lq_1.toString();
  };
  function Entries$iterator$slambda(this$0, resultContinuation) {
    this.xq_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Entries$iterator$slambda).hr = function ($this$iterator, $completion) {
    var tmp = this.ir($this$iterator, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(Entries$iterator$slambda).e9 = function (p1, $completion) {
    return this.hr(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Entries$iterator$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 11;
            this.gr_1 = this.xq_1.jr_1;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.er_1 = this.gr_1.vp_1;
            this.dr_1 = this.er_1.length - 2 | 0;
            this.fr_1 = numberRangeToNumber(0, this.dr_1).i();
            this.m8_1 = 2;
            continue $sm;
          case 2:
            if (!this.fr_1.j()) {
              this.m8_1 = 9;
              continue $sm;
            }

            this.br_1 = this.fr_1.k();
            this.ar_1 = this.er_1[this.br_1];
            var this_0 = this.ar_1;
            if (!equalsLong(bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144)), new Long(-2139062144, -2139062144))) {
              this.zq_1 = 8 - (~(this.br_1 - this.dr_1 | 0) >>> 31 | 0) | 0;
              this.cr_1 = until(0, this.zq_1).i();
              this.m8_1 = 3;
              continue $sm;
            } else {
              this.m8_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.cr_1.j()) {
              this.m8_1 = 6;
              continue $sm;
            }

            var j = this.cr_1.k();
            var value = bitwiseAnd(this.ar_1, new Long(255, 0));
            if (compare(value, new Long(128, 0)) < 0) {
              var index = (this.br_1 << 3) + j | 0;
              this.m8_1 = 4;
              suspendResult = this.yq_1.je(new MapEntry(this.xq_1.jr_1.wp_1[index], this.xq_1.jr_1.xp_1[index]), this);
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
            this.ar_1 = shiftRight(this.ar_1, 8);
            this.m8_1 = 3;
            continue $sm;
          case 6:
            if (!(this.zq_1 === 8)) {
              this.m8_1 = 10;
              continue $sm;
            } else {
              this.m8_1 = 7;
              continue $sm;
            }

          case 7:
            this.m8_1 = 8;
            continue $sm;
          case 8:
            this.m8_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.m8_1 = 1;
              continue $sm;
            }

            this.m8_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.p8_1;
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
  protoOf(Entries$iterator$slambda).ir = function ($this$iterator, completion) {
    var i = new Entries$iterator$slambda(this.xq_1, completion);
    i.yq_1 = $this$iterator;
    return i;
  };
  function Entries$iterator$slambda_0(this$0, resultContinuation) {
    var i = new Entries$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.hr($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Entries(parent) {
    this.jr_1 = parent;
  }
  protoOf(Entries).l = function () {
    return this.jr_1.zp_1;
  };
  protoOf(Entries).n = function () {
    return this.jr_1.n();
  };
  protoOf(Entries).i = function () {
    return iterator(Entries$iterator$slambda_0(this, null));
  };
  protoOf(Entries).kr = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.n();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = elements.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (!equals(this.jr_1.g2(element.w1()), element.x1())) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(Entries).p1 = function (elements) {
    return this.kr(elements);
  };
  protoOf(Entries).lr = function (element) {
    return equals(this.jr_1.g2(element.w1()), element.x1());
  };
  protoOf(Entries).t = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.lr((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  function Keys$iterator$slambda(this$0, resultContinuation) {
    this.ur_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Keys$iterator$slambda).fs = function ($this$iterator, $completion) {
    var tmp = this.gs($this$iterator, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(Keys$iterator$slambda).e9 = function (p1, $completion) {
    return this.fs(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Keys$iterator$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 11;
            var this_0 = this.ur_1.hs_1;
            this.yr_1 = this_0.wp_1;
            this.es_1 = this_0;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.cs_1 = this.es_1.vp_1;
            this.bs_1 = this.cs_1.length - 2 | 0;
            this.ds_1 = numberRangeToNumber(0, this.bs_1).i();
            this.m8_1 = 2;
            continue $sm;
          case 2:
            if (!this.ds_1.j()) {
              this.m8_1 = 9;
              continue $sm;
            }

            this.zr_1 = this.ds_1.k();
            this.xr_1 = this.cs_1[this.zr_1];
            var this_1 = this.xr_1;
            if (!equalsLong(bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144)), new Long(-2139062144, -2139062144))) {
              this.wr_1 = 8 - (~(this.zr_1 - this.bs_1 | 0) >>> 31 | 0) | 0;
              this.as_1 = until(0, this.wr_1).i();
              this.m8_1 = 3;
              continue $sm;
            } else {
              this.m8_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.as_1.j()) {
              this.m8_1 = 6;
              continue $sm;
            }

            var j = this.as_1.k();
            var value = bitwiseAnd(this.xr_1, new Long(255, 0));
            if (compare(value, new Long(128, 0)) < 0) {
              var index = (this.zr_1 << 3) + j | 0;
              var key = this.yr_1[index];
              this.m8_1 = 4;
              suspendResult = this.vr_1.je(key, this);
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
            this.xr_1 = shiftRight(this.xr_1, 8);
            this.m8_1 = 3;
            continue $sm;
          case 6:
            if (!(this.wr_1 === 8)) {
              this.m8_1 = 10;
              continue $sm;
            } else {
              this.m8_1 = 7;
              continue $sm;
            }

          case 7:
            this.m8_1 = 8;
            continue $sm;
          case 8:
            this.m8_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.m8_1 = 1;
              continue $sm;
            }

            this.m8_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.p8_1;
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
  protoOf(Keys$iterator$slambda).gs = function ($this$iterator, completion) {
    var i = new Keys$iterator$slambda(this.ur_1, completion);
    i.vr_1 = $this$iterator;
    return i;
  };
  function Keys$iterator$slambda_0(this$0, resultContinuation) {
    var i = new Keys$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.fs($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Keys(parent) {
    this.hs_1 = parent;
  }
  protoOf(Keys).l = function () {
    return this.hs_1.zp_1;
  };
  protoOf(Keys).n = function () {
    return this.hs_1.n();
  };
  protoOf(Keys).i = function () {
    return iterator(Keys$iterator$slambda_0(this, null));
  };
  protoOf(Keys).is = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.n();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = elements.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (!this.hs_1.e2(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(Keys).p1 = function (elements) {
    return this.is(elements);
  };
  protoOf(Keys).c5 = function (element) {
    return this.hs_1.e2(element);
  };
  protoOf(Keys).t = function (element) {
    if (!true)
      return false;
    return this.c5(element);
  };
  function MapEntry(key, value) {
    this.js_1 = key;
    this.ks_1 = value;
  }
  protoOf(MapEntry).w1 = function () {
    return this.js_1;
  };
  protoOf(MapEntry).x1 = function () {
    return this.ks_1;
  };
  var properties_initialized_ScatterMap_kt_apzngg;
  function _init_properties_ScatterMap_kt__cygxb2() {
    if (!properties_initialized_ScatterMap_kt_apzngg) {
      properties_initialized_ScatterMap_kt_apzngg = true;
      // Inline function 'kotlin.longArrayOf' call
      EmptyGroup = longArrayOf([new Long(-2139062017, -2139062144), new Long(-1, -1)]);
      EmptyScatterMap = new MutableScatterMap(0);
    }
  }
  function get_EmptyScatterSet() {
    _init_properties_ScatterSet_kt__vy48mc();
    return EmptyScatterSet;
  }
  var EmptyScatterSet;
  function initializeStorage_7($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.ns_1 = newCapacity;
    initializeMetadata_7($this, newCapacity);
    var tmp_0 = $this;
    var tmp_1;
    if (newCapacity === 0) {
      tmp_1 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_1 = Array(newCapacity);
    }
    tmp_0.ms_1 = tmp_1;
  }
  function initializeMetadata_7($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.ls_1 = tmp_0;
    var tmp0 = $this.ls_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_7($this);
  }
  function initializeGrowth_7($this) {
    $this.ts_1 = loadedCapacity($this.li()) - $this.os_1 | 0;
  }
  function findAbsoluteInsertIndex_4($this, element) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = element == null ? null : hashCode(element);
    var tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$1, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.ns_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.ls_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$6 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$6);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (equals($this.ms_1[index], element)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_7($this, hash1);
    var tmp_0;
    if ($this.ts_1 === 0) {
      var tmp0_0 = $this.ls_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$13 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$13, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.mi();
      index_0 = findFirstAvailableSlot_7($this, hash1);
    }
    $this.os_1 = $this.os_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.ts_1;
    var tmp_3;
    var tmp0_1 = $this.ls_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$15 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$15, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.ts_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.ls_1;
    var tmp2 = $this.ns_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_7($this, hash1) {
    var probeMask = $this.ns_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.ls_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableScatterSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ScatterSet.call(this);
    this.ts_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$2 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$2);
    }
    initializeStorage_7(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterSet).h = function (element) {
    var oldSize = this.l();
    var index = findAbsoluteInsertIndex_4(this, element);
    this.ms_1[index] = element;
    return !(this.l() === oldSize);
  };
  protoOf(MutableScatterSet).ho = function (element) {
    var index = findAbsoluteInsertIndex_4(this, element);
    this.ms_1[index] = element;
  };
  protoOf(MutableScatterSet).en = function (elements) {
    var oldSize = this.l();
    this.nn(elements);
    return !(oldSize === this.l());
  };
  protoOf(MutableScatterSet).us = function (elements) {
    var oldSize = this.l();
    this.vs(elements);
    return !(oldSize === this.l());
  };
  protoOf(MutableScatterSet).nn = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      this.ho(element);
    }
  };
  protoOf(MutableScatterSet).vs = function (elements) {
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements_0 = elements.ms_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = elements.ls_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$4 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$4, new Long(-2139062144, -2139062144))) {
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
                  var element = elements_0[index];
                  this.ho(element);
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
  };
  protoOf(MutableScatterSet).q1 = function (element) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$2, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ns_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.ls_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$7 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$7);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.ms_1[index], element)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    var index_0 = tmp$ret$0;
    var exists = index_0 >= 0;
    if (exists) {
      this.io(index_0);
    }
    return exists;
  };
  protoOf(MutableScatterSet).ws = function (element) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$2, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ns_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.ls_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$7 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$7);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.ms_1[index], element)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    var index_0 = tmp$ret$0;
    if (index_0 >= 0) {
      this.io(index_0);
    }
  };
  protoOf(MutableScatterSet).io = function (index) {
    this.os_1 = this.os_1 - 1 | 0;
    var tmp0 = this.ls_1;
    var tmp2 = this.ns_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    this.ms_1[index] = null;
  };
  protoOf(MutableScatterSet).s1 = function () {
    this.os_1 = 0;
    if (!(this.ls_1 === get_EmptyGroup())) {
      fill(this.ls_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.ls_1;
      var tmp2 = this.ns_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp2 >> 3;
      var b = (tmp2 & 7) << 3;
      tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    }
    fill_0(this.ms_1, null, 0, this.ns_1);
    initializeGrowth_7(this);
  };
  protoOf(MutableScatterSet).mi = function () {
    var tmp;
    if (this.ns_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.os_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.ns_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.pi();
    } else {
      this.oi(nextCapacity(this.ns_1));
    }
  };
  protoOf(MutableScatterSet).pi = function () {
    var metadata = this.ls_1;
    var capacity = this.ns_1;
    var elements = this.ms_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = elements[index];
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      var tmp$ret$3 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$3, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_7(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        elements[targetIndex] = elements[index];
        elements[index] = null;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldElement = elements[targetIndex];
        elements[targetIndex] = elements[index];
        elements[index] = oldElement;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_7(this);
  };
  protoOf(MutableScatterSet).oi = function (newCapacity) {
    var previousMetadata = this.ls_1;
    var previousElements = this.ms_1;
    var previousCapacity = this.ns_1;
    initializeStorage_7(this, newCapacity);
    var newMetadata = this.ls_1;
    var newElements = this.ms_1;
    var capacity = this.ns_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$1 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$1, new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousElement == null ? null : hashCode(previousElement);
          var tmp$ret$3 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$3, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_7(this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$5);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  };
  protoOf(MutableScatterSet).jo = function () {
    return new MutableSetWrapper(this);
  };
  function mutableScatterSetOf() {
    _init_properties_ScatterSet_kt__vy48mc();
    return new MutableScatterSet();
  }
  function ScatterSet$toString$lambda(this$0) {
    return function (element) {
      var tmp;
      if (element === this$0) {
        tmp = '(this)';
      } else {
        tmp = toString_0(element);
      }
      return tmp;
    };
  }
  function ScatterSet() {
    this.ls_1 = get_EmptyGroup();
    this.ms_1 = get_EMPTY_OBJECTS();
    this.ns_1 = 0;
    this.os_1 = 0;
  }
  protoOf(ScatterSet).li = function () {
    return this.ns_1;
  };
  protoOf(ScatterSet).l = function () {
    return this.os_1;
  };
  protoOf(ScatterSet).n = function () {
    return this.os_1 === 0;
  };
  protoOf(ScatterSet).om = function () {
    return !(this.os_1 === 0);
  };
  protoOf(ScatterSet).t = function (element) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$2, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.ns_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.ls_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$7 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$7);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.ms_1[index], element)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    return tmp$ret$0 >= 0;
  };
  protoOf(ScatterSet).qn = function (separator, prefix, postfix, limit, truncated, transform) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.g(prefix);
      var index = 0;
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var elements = this.ms_1;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.ls_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            var tmp$ret$7 = bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144));
            if (!equalsLong(tmp$ret$7, new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  var value = bitwiseAnd(slot, new Long(255, 0));
                  if (compare(value, new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    var element = elements[index_0];
                    if (index === limit) {
                      this_0.g(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.g(separator);
                    }
                    if (transform == null) {
                      this_0.q7(element);
                    } else {
                      this_0.g(transform(element));
                    }
                    index = index + 1 | 0;
                  }
                  slot = shiftRight(slot, 8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.g(postfix);
    }
    return this_0.toString();
  };
  protoOf(ScatterSet).xs = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.qn(separator, prefix, postfix, limit, truncated, transform) : $super.qn.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ScatterSet).hashCode = function () {
    var hash = this.ns_1;
    hash = imul(31, hash) + this.os_1 | 0;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements = this.ms_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.ls_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$4 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$4, new Long(-2139062144, -2139062144))) {
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
                  var element = elements[index];
                  if (!equals(element, this)) {
                    var tmp = hash;
                    // Inline function 'kotlin.hashCode' call
                    var tmp1_elvis_lhs = element == null ? null : hashCode(element);
                    hash = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
                  }
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
    return hash;
  };
  protoOf(ScatterSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ScatterSet)) {
      return false;
    }
    if (!(other.l() === this.l())) {
      return false;
    }
    var o = other instanceof ScatterSet ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements = this.ms_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.ls_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$4 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$4, new Long(-2139062144, -2139062144))) {
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
                  var element = elements[index];
                  if (!o.t(element)) {
                    return false;
                  }
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
    return true;
  };
  protoOf(ScatterSet).toString = function () {
    return this.xs(VOID, '[', ']', VOID, VOID, ScatterSet$toString$lambda(this));
  };
  function emptyScatterSet() {
    _init_properties_ScatterSet_kt__vy48mc();
    var tmp = get_EmptyScatterSet();
    return tmp instanceof ScatterSet ? tmp : THROW_CCE();
  }
  function mutableScatterSetOf_0(element1, element2) {
    _init_properties_ScatterSet_kt__vy48mc();
    // Inline function 'kotlin.apply' call
    var this_0 = new MutableScatterSet(2);
    this_0.ho(element1);
    this_0.ho(element2);
    return this_0;
  }
  function MutableSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation) {
    this.gt_1 = this$0;
    this.ht_1 = this$1;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableSetWrapper$iterator$o$iterator$slambda).zo = function ($this$iterator, $completion) {
    var tmp = this.ap($this$iterator, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(MutableSetWrapper$iterator$o$iterator$slambda).e9 = function (p1, $completion) {
    return this.zo(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableSetWrapper$iterator$o$iterator$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 11;
            this.qt_1 = this.gt_1.st_1;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.ot_1 = this.qt_1.ls_1;
            this.nt_1 = this.ot_1.length - 2 | 0;
            this.pt_1 = numberRangeToNumber(0, this.nt_1).i();
            this.m8_1 = 2;
            continue $sm;
          case 2:
            if (!this.pt_1.j()) {
              this.m8_1 = 9;
              continue $sm;
            }

            this.lt_1 = this.pt_1.k();
            this.kt_1 = this.ot_1[this.lt_1];
            var this_0 = this.kt_1;
            if (!equalsLong(bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144)), new Long(-2139062144, -2139062144))) {
              this.jt_1 = 8 - (~(this.lt_1 - this.nt_1 | 0) >>> 31 | 0) | 0;
              this.mt_1 = until(0, this.jt_1).i();
              this.m8_1 = 3;
              continue $sm;
            } else {
              this.m8_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.mt_1.j()) {
              this.m8_1 = 6;
              continue $sm;
            }

            var j = this.mt_1.k();
            var value = bitwiseAnd(this.kt_1, new Long(255, 0));
            if (compare(value, new Long(128, 0)) < 0) {
              var index = (this.lt_1 << 3) + j | 0;
              this.ht_1.tt_1 = index;
              this.m8_1 = 4;
              suspendResult = this.it_1.je(this.gt_1.st_1.ms_1[index], this);
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
            this.kt_1 = shiftRight(this.kt_1, 8);
            this.m8_1 = 3;
            continue $sm;
          case 6:
            if (!(this.jt_1 === 8)) {
              this.m8_1 = 10;
              continue $sm;
            } else {
              this.m8_1 = 7;
              continue $sm;
            }

          case 7:
            this.m8_1 = 8;
            continue $sm;
          case 8:
            this.m8_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.m8_1 = 1;
              continue $sm;
            }

            this.m8_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.p8_1;
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
  protoOf(MutableSetWrapper$iterator$o$iterator$slambda).ap = function ($this$iterator, completion) {
    var i = new MutableSetWrapper$iterator$o$iterator$slambda(this.gt_1, this.ht_1, completion);
    i.it_1 = $this$iterator;
    return i;
  };
  function MutableSetWrapper$iterator$o$iterator$slambda_0(this$0, this$1, resultContinuation) {
    var i = new MutableSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.zo($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableSetWrapper$iterator$1(this$0) {
    this.vt_1 = this$0;
    this.tt_1 = -1;
    var tmp = this;
    tmp.ut_1 = iterator(MutableSetWrapper$iterator$o$iterator$slambda_0(this$0, this, null));
  }
  protoOf(MutableSetWrapper$iterator$1).j = function () {
    return this.ut_1.j();
  };
  protoOf(MutableSetWrapper$iterator$1).k = function () {
    return this.ut_1.k();
  };
  protoOf(MutableSetWrapper$iterator$1).m3 = function () {
    if (!(this.tt_1 === -1)) {
      this.vt_1.st_1.io(this.tt_1);
      this.tt_1 = -1;
    }
  };
  function MutableSetWrapper(parent) {
    SetWrapper.call(this, parent);
    this.st_1 = parent;
  }
  protoOf(MutableSetWrapper).h = function (element) {
    return this.st_1.h(element);
  };
  protoOf(MutableSetWrapper).r = function (elements) {
    return this.st_1.en(elements);
  };
  protoOf(MutableSetWrapper).s1 = function () {
    this.st_1.s1();
  };
  protoOf(MutableSetWrapper).i = function () {
    return new MutableSetWrapper$iterator$1(this);
  };
  protoOf(MutableSetWrapper).q1 = function (element) {
    return this.st_1.q1(element);
  };
  function SetWrapper$iterator$slambda(this$0, resultContinuation) {
    this.fu_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetWrapper$iterator$slambda).zo = function ($this$iterator, $completion) {
    var tmp = this.ap($this$iterator, $completion);
    tmp.o8_1 = Unit_instance;
    tmp.p8_1 = null;
    return tmp.u8();
  };
  protoOf(SetWrapper$iterator$slambda).e9 = function (p1, $completion) {
    return this.zo(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SetWrapper$iterator$slambda).u8 = function () {
    var suspendResult = this.o8_1;
    $sm: do
      try {
        var tmp = this.m8_1;
        switch (tmp) {
          case 0:
            this.n8_1 = 11;
            var this_0 = this.fu_1.wt_1;
            this.ju_1 = this_0.ms_1;
            this.pu_1 = this_0;
            this.m8_1 = 1;
            continue $sm;
          case 1:
            this.nu_1 = this.pu_1.ls_1;
            this.mu_1 = this.nu_1.length - 2 | 0;
            this.ou_1 = numberRangeToNumber(0, this.mu_1).i();
            this.m8_1 = 2;
            continue $sm;
          case 2:
            if (!this.ou_1.j()) {
              this.m8_1 = 9;
              continue $sm;
            }

            this.ku_1 = this.ou_1.k();
            this.iu_1 = this.nu_1[this.ku_1];
            var this_1 = this.iu_1;
            if (!equalsLong(bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144)), new Long(-2139062144, -2139062144))) {
              this.hu_1 = 8 - (~(this.ku_1 - this.mu_1 | 0) >>> 31 | 0) | 0;
              this.lu_1 = until(0, this.hu_1).i();
              this.m8_1 = 3;
              continue $sm;
            } else {
              this.m8_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.lu_1.j()) {
              this.m8_1 = 6;
              continue $sm;
            }

            var j = this.lu_1.k();
            var value = bitwiseAnd(this.iu_1, new Long(255, 0));
            if (compare(value, new Long(128, 0)) < 0) {
              var index = (this.ku_1 << 3) + j | 0;
              var element = this.ju_1[index];
              this.m8_1 = 4;
              suspendResult = this.gu_1.je(element, this);
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
            this.iu_1 = shiftRight(this.iu_1, 8);
            this.m8_1 = 3;
            continue $sm;
          case 6:
            if (!(this.hu_1 === 8)) {
              this.m8_1 = 10;
              continue $sm;
            } else {
              this.m8_1 = 7;
              continue $sm;
            }

          case 7:
            this.m8_1 = 8;
            continue $sm;
          case 8:
            this.m8_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.m8_1 = 1;
              continue $sm;
            }

            this.m8_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.p8_1;
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
  protoOf(SetWrapper$iterator$slambda).ap = function ($this$iterator, completion) {
    var i = new SetWrapper$iterator$slambda(this.fu_1, completion);
    i.gu_1 = $this$iterator;
    return i;
  };
  function SetWrapper$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SetWrapper$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.zo($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SetWrapper(parent) {
    this.wt_1 = parent;
  }
  protoOf(SetWrapper).l = function () {
    return this.wt_1.os_1;
  };
  protoOf(SetWrapper).p1 = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      if (!this.wt_1.t(element)) {
        return false;
      }
    }
    return true;
  };
  protoOf(SetWrapper).t = function (element) {
    return this.wt_1.t(element);
  };
  protoOf(SetWrapper).n = function () {
    return this.wt_1.n();
  };
  protoOf(SetWrapper).i = function () {
    return iterator(SetWrapper$iterator$slambda_0(this, null));
  };
  protoOf(SetWrapper).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof SetWrapper))
      THROW_CCE();
    return this.wt_1.equals(other.wt_1);
  };
  protoOf(SetWrapper).hashCode = function () {
    return this.wt_1.hashCode();
  };
  protoOf(SetWrapper).toString = function () {
    return this.wt_1.toString();
  };
  var properties_initialized_ScatterSet_kt_dmj456;
  function _init_properties_ScatterSet_kt__vy48mc() {
    if (!properties_initialized_ScatterSet_kt_dmj456) {
      properties_initialized_ScatterSet_kt_dmj456 = true;
      EmptyScatterSet = new MutableScatterSet(0);
    }
  }
  function get_EmptyNodes() {
    _init_properties_SieveCache_kt__ia4lh8();
    return EmptyNodes;
  }
  var EmptyNodes;
  var properties_initialized_SieveCache_kt_k2mhgm;
  function _init_properties_SieveCache_kt__ia4lh8() {
    if (!properties_initialized_SieveCache_kt_k2mhgm) {
      properties_initialized_SieveCache_kt_k2mhgm = true;
      EmptyNodes = longArray(0);
    }
  }
  function get_EMPTY_INTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_INTS;
  }
  var EMPTY_INTS;
  function get_EMPTY_LONGS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_LONGS;
  }
  var EMPTY_LONGS;
  function get_EMPTY_OBJECTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_OBJECTS;
  }
  var EMPTY_OBJECTS;
  function idealLongArraySize(need) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return idealByteArraySize(imul(need, 8)) / 8 | 0;
  }
  function idealByteArraySize(need) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    var inductionVariable = 4;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (need <= ((1 << i) - 12 | 0)) {
          return (1 << i) - 12 | 0;
        }
      }
       while (inductionVariable <= 31);
    return need;
  }
  function binarySearch(array, size, value) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    var lo = 0;
    var hi = size - 1 | 0;
    while (lo <= hi) {
      var mid = (lo + hi | 0) >>> 1 | 0;
      var midVal = array[mid];
      if (midVal < value) {
        lo = mid + 1 | 0;
      } else if (midVal > value) {
        hi = mid - 1 | 0;
      } else {
        return mid;
      }
    }
    return ~lo;
  }
  function binarySearch_0(array, size, value) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    var lo = 0;
    var hi = size - 1 | 0;
    while (lo <= hi) {
      var mid = (lo + hi | 0) >>> 1 | 0;
      var midVal = array[mid];
      if (compare(midVal, value) < 0) {
        lo = mid + 1 | 0;
      } else if (compare(midVal, value) > 0) {
        hi = mid - 1 | 0;
      } else {
        return mid;
      }
    }
    return ~lo;
  }
  var properties_initialized_ContainerHelpers_kt_9fe6be;
  function _init_properties_ContainerHelpers_kt__6fon4s() {
    if (!properties_initialized_ContainerHelpers_kt_9fe6be) {
      properties_initialized_ContainerHelpers_kt_9fe6be = true;
      EMPTY_INTS = new Int32Array(0);
      EMPTY_LONGS = longArray(0);
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_OBJECTS = Array(0);
    }
  }
  function throwIndexOutOfBoundsException(message) {
    throw IndexOutOfBoundsException_init_$Create$(message);
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function throwNoSuchElementException(message) {
    throw NoSuchElementException_init_$Create$_0(message);
  }
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function ElementIterator($outer) {
    this.tu_1 = $outer;
    IndexBasedArrayIterator.call(this, $outer.lh_1);
  }
  protoOf(ElementIterator).yh = function (index) {
    return this.tu_1.uu(index);
  };
  protoOf(ElementIterator).zh = function (index) {
    this.tu_1.v1(index);
  };
  function ArraySet(capacity) {
    capacity = capacity === VOID ? 0 : capacity;
    this.jh_1 = get_EMPTY_INTS();
    this.kh_1 = get_EMPTY_OBJECTS();
    this.lh_1 = 0;
    if (capacity > 0) {
      allocArrays(this, capacity);
    }
  }
  protoOf(ArraySet).l = function () {
    return this.lh_1;
  };
  protoOf(ArraySet).s1 = function () {
    // Inline function 'androidx.collection.clearInternal' call
    if (!(this.lh_1 === 0)) {
      this.jh_1 = get_EMPTY_INTS();
      this.kh_1 = get_EMPTY_OBJECTS();
      this.lh_1 = 0;
    }
    if (!(this.lh_1 === 0)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  };
  protoOf(ArraySet).rh = function (minimumCapacity) {
    // Inline function 'androidx.collection.ensureCapacityInternal' call
    var oSize = this.lh_1;
    if (this.jh_1.length < minimumCapacity) {
      var ohashes = this.jh_1;
      var oarray = this.kh_1;
      allocArrays(this, minimumCapacity);
      if (this.lh_1 > 0) {
        var tmp2 = this.jh_1;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = this.lh_1;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = ohashes;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, tmp2, 0, 0, endIndex);
        var tmp2_0 = this.kh_1;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex_0 = this.lh_1;
        arrayCopy(oarray, tmp2_0, 0, 0, endIndex_0);
      }
    }
    if (!(this.lh_1 === oSize)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  };
  protoOf(ArraySet).t = function (element) {
    // Inline function 'androidx.collection.containsInternal' call
    return this.vu(element) >= 0;
  };
  protoOf(ArraySet).vu = function (key) {
    // Inline function 'androidx.collection.indexOfInternal' call
    return key == null ? indexOfNull(this) : indexOf(this, key, hashCode(key));
  };
  protoOf(ArraySet).uu = function (index) {
    // Inline function 'androidx.collection.valueAtInternal' call
    return this.kh_1[index];
  };
  protoOf(ArraySet).n = function () {
    // Inline function 'androidx.collection.isEmptyInternal' call
    return this.lh_1 <= 0;
  };
  protoOf(ArraySet).h = function (element) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.addInternal' call
      var oSize = this.lh_1;
      var hash;
      var index;
      if (element == null) {
        hash = 0;
        index = indexOfNull(this);
      } else {
        hash = hashCode(element);
        index = indexOf(this, element, hash);
      }
      if (index >= 0) {
        tmp$ret$0 = false;
        break $l$block;
      }
      index = ~index;
      if (oSize >= this.jh_1.length) {
        var n = oSize >= 8 ? oSize + (oSize >> 1) | 0 : oSize >= 4 ? 8 : 4;
        var ohashes = this.jh_1;
        var oarray = this.kh_1;
        allocArrays(this, n);
        if (!(oSize === this.lh_1)) {
          throw ConcurrentModificationException_init_$Create$();
        }
        // Inline function 'kotlin.collections.isNotEmpty' call
        // Inline function 'kotlin.collections.isEmpty' call
        if (!(this.jh_1.length === 0)) {
          var tmp2 = this.jh_1;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex = ohashes.length;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = ohashes;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, tmp2, 0, 0, endIndex);
          var tmp2_0 = this.kh_1;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex_0 = oarray.length;
          arrayCopy(oarray, tmp2_0, 0, 0, endIndex_0);
        }
      }
      if (index < oSize) {
        var tmp0 = this.jh_1;
        var tmp2_1 = this.jh_1;
        var tmp4 = index + 1 | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex = index;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = tmp0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, tmp2_1, tmp4, startIndex, oSize);
        var tmp0_0 = this.kh_1;
        var tmp2_2 = this.kh_1;
        var tmp4_0 = index + 1 | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex_0 = index;
        arrayCopy(tmp0_0, tmp2_2, tmp4_0, startIndex_0, oSize);
      }
      if (!(oSize === this.lh_1) || index >= this.jh_1.length) {
        throw ConcurrentModificationException_init_$Create$();
      }
      this.jh_1[index] = hash;
      this.kh_1[index] = element;
      this.lh_1 = this.lh_1 + 1 | 0;
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(ArraySet).q1 = function (element) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.removeInternal' call
      var index = this.vu(element);
      if (index >= 0) {
        this.v1(index);
        tmp$ret$0 = true;
        break $l$block;
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  };
  protoOf(ArraySet).v1 = function (index) {
    // Inline function 'androidx.collection.removeAtInternal' call
    var oSize = this.lh_1;
    var old = this.kh_1[index];
    if (oSize <= 1) {
      this.s1();
    } else {
      var nSize = oSize - 1 | 0;
      if (this.jh_1.length > 8 && this.lh_1 < (this.jh_1.length / 3 | 0)) {
        var n = this.lh_1 > 8 ? this.lh_1 + (this.lh_1 >> 1) | 0 : 8;
        var ohashes = this.jh_1;
        var oarray = this.kh_1;
        allocArrays(this, n);
        if (index > 0) {
          // Inline function 'kotlin.collections.copyInto' call
          var destination = this.jh_1;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = ohashes;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, destination, 0, 0, index);
          // Inline function 'kotlin.collections.copyInto' call
          var destination_0 = this.kh_1;
          arrayCopy(oarray, destination_0, 0, 0, index);
        }
        if (index < nSize) {
          var tmp2 = this.jh_1;
          var tmp6 = index + 1 | 0;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex = nSize + 1 | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = ohashes;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, tmp2, index, tmp6, endIndex);
          var tmp2_0 = this.kh_1;
          var tmp6_0 = index + 1 | 0;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex_0 = nSize + 1 | 0;
          arrayCopy(oarray, tmp2_0, index, tmp6_0, endIndex_0);
        }
      } else {
        if (index < nSize) {
          var tmp0 = this.jh_1;
          var tmp2_1 = this.jh_1;
          var tmp6_1 = index + 1 | 0;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex_1 = nSize + 1 | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_1 = tmp0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_1, tmp2_1, index, tmp6_1, endIndex_1);
          var tmp0_0 = this.kh_1;
          var tmp2_2 = this.kh_1;
          var tmp6_2 = index + 1 | 0;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex_2 = nSize + 1 | 0;
          arrayCopy(tmp0_0, tmp2_2, index, tmp6_2, endIndex_2);
        }
        this.kh_1[nSize] = null;
      }
      if (!(oSize === this.lh_1)) {
        throw ConcurrentModificationException_init_$Create$();
      }
      this.lh_1 = nSize;
    }
    return old;
  };
  protoOf(ArraySet).equals = function (other) {
    var tmp$ret$0;
    $l$block_4: {
      // Inline function 'androidx.collection.equalsInternal' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_4;
      }
      if (!(other == null) ? isInterface(other, KtSet) : false) {
        if (!(this.l() === other.l())) {
          tmp$ret$0 = false;
          break $l$block_4;
        }
        try {
          var inductionVariable = 0;
          var last = this.lh_1;
          if (inductionVariable < last)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var mine = this.uu(i);
              if (!other.t(mine)) {
                tmp$ret$0 = false;
                break $l$block_4;
              }
            }
             while (inductionVariable < last);
        } catch ($p) {
          if ($p instanceof NullPointerException) {
            var ignored = $p;
            tmp$ret$0 = false;
            break $l$block_4;
          } else {
            if ($p instanceof ClassCastException) {
              var ignored_0 = $p;
              tmp$ret$0 = false;
              break $l$block_4;
            } else {
              throw $p;
            }
          }
        }
        tmp$ret$0 = true;
        break $l$block_4;
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  };
  protoOf(ArraySet).hashCode = function () {
    // Inline function 'androidx.collection.hashCodeInternal' call
    var hashes = this.jh_1;
    var s = this.lh_1;
    var result = 0;
    var inductionVariable = 0;
    if (inductionVariable < s)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result + hashes[i] | 0;
      }
       while (inductionVariable < s);
    return result;
  };
  protoOf(ArraySet).toString = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.toStringInternal' call
      if (this.n()) {
        tmp$ret$0 = '{}';
        break $l$block;
      }
      // Inline function 'kotlin.text.buildString' call
      var capacity = imul(this.lh_1, 14);
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$_0(capacity);
      this_0.s7(_Char___init__impl__6a9atx(123));
      var inductionVariable = 0;
      var last = this.lh_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (i > 0) {
            this_0.r7(', ');
          }
          var value = this.uu(i);
          if (!(value === this)) {
            this_0.q7(value);
          } else {
            this_0.r7('(this Set)');
          }
        }
         while (inductionVariable < last);
      this_0.s7(_Char___init__impl__6a9atx(125));
      tmp$ret$0 = this_0.toString();
    }
    return tmp$ret$0;
  };
  protoOf(ArraySet).i = function () {
    return new ElementIterator(this);
  };
  protoOf(ArraySet).p1 = function (elements) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.containsAllInternal' call
      var tmp0_iterator = elements.i();
      while (tmp0_iterator.j()) {
        var item = tmp0_iterator.k();
        if (!this.t(item)) {
          tmp$ret$0 = false;
          break $l$block;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(ArraySet).r = function (elements) {
    // Inline function 'androidx.collection.addAllInternal' call
    this.rh(this.lh_1 + elements.l() | 0);
    var added = false;
    var tmp0_iterator = elements.i();
    while (tmp0_iterator.j()) {
      var value = tmp0_iterator.k();
      added = !!(this.h(value) | added);
    }
    return added;
  };
  function LongSparseArray(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 10 : initialCapacity;
    this.wu_1 = false;
    this.zu_1 = 0;
    if (initialCapacity === 0) {
      this.xu_1 = get_EMPTY_LONGS();
      this.yu_1 = get_EMPTY_OBJECTS();
    } else {
      var idealCapacity = idealLongArraySize(initialCapacity);
      this.xu_1 = longArray(idealCapacity);
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.yu_1 = Array(idealCapacity);
    }
  }
  protoOf(LongSparseArray).sk = function (key) {
    // Inline function 'androidx.collection.commonGet' call
    // Inline function 'androidx.collection.commonGetInternal' call
    var i = binarySearch_0(this.xu_1, this.zu_1, key);
    var tmp;
    if (i < 0 || this.yu_1[i] === access$_get_DELETED_$tLongSparseArrayKt_9psy8u()) {
      tmp = null;
    } else {
      tmp = this.yu_1[i];
    }
    return tmp;
  };
  protoOf(LongSparseArray).av = function (key) {
    // Inline function 'androidx.collection.commonRemove' call
    var i = binarySearch_0(this.xu_1, this.zu_1, key);
    if (i >= 0) {
      if (!(this.yu_1[i] === access$_get_DELETED_$tLongSparseArrayKt_9psy8u())) {
        this.yu_1[i] = access$_get_DELETED_$tLongSparseArrayKt_9psy8u();
        this.wu_1 = true;
      }
    }
    return Unit_instance;
  };
  protoOf(LongSparseArray).bv = function (key, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.commonPut' call
      var index = binarySearch_0(this.xu_1, this.zu_1, key);
      if (index >= 0) {
        this.yu_1[index] = value;
      } else {
        index = ~index;
        if (index < this.zu_1 && this.yu_1[index] === access$_get_DELETED_$tLongSparseArrayKt_9psy8u()) {
          this.xu_1[index] = key;
          this.yu_1[index] = value;
          tmp$ret$0 = Unit_instance;
          break $l$block;
        }
        if (this.wu_1 && this.zu_1 >= this.xu_1.length) {
          // Inline function 'androidx.collection.commonGc' call
          var n = this.zu_1;
          var newSize = 0;
          var keys = this.xu_1;
          var values = this.yu_1;
          var inductionVariable = 0;
          if (inductionVariable < n)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var value_0 = values[i];
              if (!(value_0 === access$_get_DELETED_$tLongSparseArrayKt_9psy8u())) {
                if (!(i === newSize)) {
                  keys[newSize] = keys[i];
                  values[newSize] = value_0;
                  values[i] = null;
                }
                newSize = newSize + 1 | 0;
              }
            }
             while (inductionVariable < n);
          this.wu_1 = false;
          this.zu_1 = newSize;
          index = ~binarySearch_0(this.xu_1, this.zu_1, key);
        }
        if (this.zu_1 >= this.xu_1.length) {
          var newSize_0 = idealLongArraySize(this.zu_1 + 1 | 0);
          this.xu_1 = copyOf_1(this.xu_1, newSize_0);
          this.yu_1 = copyOf_2(this.yu_1, newSize_0);
        }
        if (!((this.zu_1 - index | 0) === 0)) {
          var tmp0 = this.xu_1;
          var tmp2 = this.xu_1;
          var tmp4 = index + 1 | 0;
          var tmp6 = index;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex = this.zu_1;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = tmp0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, tmp2, tmp4, tmp6, endIndex);
          var tmp0_0 = this.yu_1;
          var tmp2_0 = this.yu_1;
          var tmp4_0 = index + 1 | 0;
          var tmp6_0 = index;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex_0 = this.zu_1;
          arrayCopy(tmp0_0, tmp2_0, tmp4_0, tmp6_0, endIndex_0);
        }
        this.xu_1[index] = key;
        this.yu_1[index] = value;
        this.zu_1 = this.zu_1 + 1 | 0;
      }
      tmp$ret$0 = Unit_instance;
    }
    return tmp$ret$0;
  };
  protoOf(LongSparseArray).cv = function () {
    // Inline function 'androidx.collection.commonSize' call
    if (this.wu_1) {
      // Inline function 'androidx.collection.commonGc' call
      var n = this.zu_1;
      var newSize = 0;
      var keys = this.xu_1;
      var values = this.yu_1;
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value = values[i];
          if (!(value === access$_get_DELETED_$tLongSparseArrayKt_9psy8u())) {
            if (!(i === newSize)) {
              keys[newSize] = keys[i];
              values[newSize] = value;
              values[i] = null;
            }
            newSize = newSize + 1 | 0;
          }
        }
         while (inductionVariable < n);
      this.wu_1 = false;
      this.zu_1 = newSize;
    }
    return this.zu_1;
  };
  protoOf(LongSparseArray).n = function () {
    // Inline function 'androidx.collection.commonIsEmpty' call
    return this.cv() === 0;
  };
  protoOf(LongSparseArray).dv = function (index) {
    // Inline function 'androidx.collection.commonKeyAt' call
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.zu_1 : false)) {
      var tmp$ret$3 = 'Expected index to be within 0..size()-1, but was ' + index;
      throwIllegalArgumentException(tmp$ret$3);
    }
    if (this.wu_1) {
      // Inline function 'androidx.collection.commonGc' call
      var n = this.zu_1;
      var newSize = 0;
      var keys = this.xu_1;
      var values = this.yu_1;
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value = values[i];
          if (!(value === access$_get_DELETED_$tLongSparseArrayKt_9psy8u())) {
            if (!(i === newSize)) {
              keys[newSize] = keys[i];
              values[newSize] = value;
              values[i] = null;
            }
            newSize = newSize + 1 | 0;
          }
        }
         while (inductionVariable < n);
      this.wu_1 = false;
      this.zu_1 = newSize;
    }
    return this.xu_1[index];
  };
  protoOf(LongSparseArray).uu = function (index) {
    // Inline function 'androidx.collection.commonValueAt' call
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.zu_1 : false)) {
      var tmp$ret$3 = 'Expected index to be within 0..size()-1, but was ' + index;
      throwIllegalArgumentException(tmp$ret$3);
    }
    if (this.wu_1) {
      // Inline function 'androidx.collection.commonGc' call
      var n = this.zu_1;
      var newSize = 0;
      var keys = this.xu_1;
      var values = this.yu_1;
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value = values[i];
          if (!(value === access$_get_DELETED_$tLongSparseArrayKt_9psy8u())) {
            if (!(i === newSize)) {
              keys[newSize] = keys[i];
              values[newSize] = value;
              values[i] = null;
            }
            newSize = newSize + 1 | 0;
          }
        }
         while (inductionVariable < n);
      this.wu_1 = false;
      this.zu_1 = newSize;
    }
    return this.yu_1[index];
  };
  protoOf(LongSparseArray).ev = function (key) {
    // Inline function 'androidx.collection.commonIndexOfKey' call
    if (this.wu_1) {
      // Inline function 'androidx.collection.commonGc' call
      var n = this.zu_1;
      var newSize = 0;
      var keys = this.xu_1;
      var values = this.yu_1;
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value = values[i];
          if (!(value === access$_get_DELETED_$tLongSparseArrayKt_9psy8u())) {
            if (!(i === newSize)) {
              keys[newSize] = keys[i];
              values[newSize] = value;
              values[i] = null;
            }
            newSize = newSize + 1 | 0;
          }
        }
         while (inductionVariable < n);
      this.wu_1 = false;
      this.zu_1 = newSize;
    }
    return binarySearch_0(this.xu_1, this.zu_1, key);
  };
  protoOf(LongSparseArray).tk = function (key) {
    // Inline function 'androidx.collection.commonContainsKey' call
    return this.ev(key) >= 0;
  };
  protoOf(LongSparseArray).s1 = function () {
    // Inline function 'androidx.collection.commonClear' call
    var n = this.zu_1;
    var values = this.yu_1;
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        values[i] = null;
      }
       while (inductionVariable < n);
    this.zu_1 = 0;
    this.wu_1 = false;
    return Unit_instance;
  };
  protoOf(LongSparseArray).toString = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.commonToString' call
      if (this.cv() <= 0) {
        tmp$ret$0 = '{}';
        break $l$block;
      }
      // Inline function 'kotlin.text.buildString' call
      var capacity = imul(this.zu_1, 28);
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$_0(capacity);
      this_0.s7(_Char___init__impl__6a9atx(123));
      var inductionVariable = 0;
      var last = this.zu_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (i > 0) {
            this_0.r7(', ');
          }
          var key = this.dv(i);
          this_0.db(key);
          this_0.s7(_Char___init__impl__6a9atx(61));
          var value = this.uu(i);
          if (!(value === this_0)) {
            this_0.q7(value);
          } else {
            this_0.r7('(this Map)');
          }
        }
         while (inductionVariable < last);
      this_0.s7(_Char___init__impl__6a9atx(125));
      tmp$ret$0 = this_0.toString();
    }
    return tmp$ret$0;
  };
  function LruHashMap(initialCapacity, loadFactor) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    loadFactor = loadFactor === VOID ? 0.75 : loadFactor;
    this.rl_1 = LinkedHashMap_init_$Create$(initialCapacity, loadFactor);
  }
  protoOf(LruHashMap).wl = function () {
    return this.rl_1.n();
  };
  protoOf(LruHashMap).d2 = function () {
    return this.rl_1.d2();
  };
  protoOf(LruHashMap).ql = function (key) {
    var item = this.rl_1.z1(key);
    if (!(item == null)) {
      // Inline function 'kotlin.collections.set' call
      this.rl_1.y1(key, item);
    }
    return item;
  };
  protoOf(LruHashMap).tl = function (key, value) {
    var item = this.rl_1.z1(key);
    // Inline function 'kotlin.collections.set' call
    this.rl_1.y1(key, value);
    return item;
  };
  protoOf(LruHashMap).xl = function (key) {
    return this.rl_1.z1(key);
  };
  function Lock() {
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ArraySet;
  _.$_$.b = LongSparseArray;
  _.$_$.c = LruCache;
  _.$_$.d = MutableDoubleList;
  _.$_$.e = MutableIntIntMap;
  _.$_$.f = MutableIntList;
  _.$_$.g = MutableIntObjectMap;
  _.$_$.h = MutableIntSet;
  _.$_$.i = MutableLongList;
  _.$_$.j = MutableLongObjectMap;
  _.$_$.k = MutableLongSet;
  _.$_$.l = MutableObjectIntMap;
  _.$_$.m = MutableObjectList;
  _.$_$.n = MutableScatterMap;
  _.$_$.o = MutableScatterSet;
  _.$_$.p = ObjectList;
  _.$_$.q = ScatterSet;
  _.$_$.r = emptyIntList;
  _.$_$.s = emptyObjectIntMap;
  _.$_$.t = emptyObjectList;
  _.$_$.u = emptyScatterMap;
  _.$_$.v = emptyScatterSet;
  _.$_$.w = intListOf;
  _.$_$.x = intObjectMapOf;
  _.$_$.y = mutableIntListOf;
  _.$_$.z = mutableIntObjectMapOf_0;
  _.$_$.a1 = mutableIntObjectMapOf;
  _.$_$.b1 = mutableIntSetOf;
  _.$_$.c1 = mutableLongObjectMapOf;
  _.$_$.d1 = mutableObjectIntMapOf;
  _.$_$.e1 = mutableObjectListOf;
  _.$_$.f1 = mutableObjectListOf_0;
  _.$_$.g1 = mutableOrderedScatterSetOf;
  _.$_$.h1 = mutableScatterMapOf;
  _.$_$.i1 = mutableScatterSetOf_0;
  _.$_$.j1 = mutableScatterSetOf;
  _.$_$.k1 = objectListOf;
  _.$_$.l1 = _FloatFloatPair___init__impl__2q1dd3_0;
  _.$_$.m1 = _FloatFloatPair___get_packedValue__impl__5lczxp;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-collection-collection.js.map
