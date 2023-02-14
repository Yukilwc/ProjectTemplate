export const isType = {
  // 是否是字符串
  isString: (value: any) => {
    return Object.prototype.toString.call(value) == "[object String]";
  },
  // 是否是数字 NaN也算入在内
  isNumber: (value: any) => {
    return Object.prototype.toString.call(value) == "[object Number]";
  },
  // 是否是布尔值
  isBoolean: (value: any) => {
    return Object.prototype.toString.call(value) == "[object Boolean]";
  },
  // 是否undefined
  isUndefined: (value: any) => {
    return Object.prototype.toString.call(value) == "[object Undefined]";
  },
  // 是否是null
  isNull: (value: any) => {
    return Object.prototype.toString.call(value) == "[object Null]";
  },
  // 是否数组
  isArray: (value: any) => {
    return Object.prototype.toString.call(value) == "[object Array]";
  },
  // 是否是函数
  isFunction: (value: any) => {
    return Object.prototype.toString.call(value) == "[object Function]";
  },
  // 是否是对象
  isObject: (value: any) => {
    return Object.prototype.toString.call(value) == "[object Object]";
  },
  // 是否是正则表达式
  isRegExp: (value: any) => {
    return Object.prototype.toString.call(value) == "[object RegExp]";
  },
  // 是否是日期对象
  isDate: (value: any) => {
    return Object.prototype.toString.call(value) == "[object Date]";
  },
  typeString: (value: any) => {
    return Object.prototype.toString.call(value);
  },
};

// 判断常规的非空输入,考虑到类型转换.
export const isInputEmpty = (value: any) => {
  // console.log('==========isInputEmpty ', value, isType.typeString(value))
  // 是个数字
  if (isType.isNumber(value)) {
    // 判断是否是NaN
    if (Number.isNaN(value)) return true;
    else return false;
  }
  // 字符串类型
  if (isType.isString(value)) {
    // 去除两边多余空格
    let strTrim = value.trim();
    if (!strTrim) {
      return true;
    } else {
      return false;
    }
  }
  // 其他类型，Null,undefined,boolean false为空
  if (value) {
    return false;
  } else {
    return true;
  }
};
