class DateTime {
  // 令牌YYYY-MM-DD HH:mm:ss
  // 时间存在的类型： Date类型，字符串，时间戳 将date类型作为中转
  static defaultFormat = "YYYY-MM-DD HH:mm:ss";
  constructor() {}
  // 匹配到指定索引
  static matchIndex(str: string, reg: RegExp): number[] {
    let resList: number[] = [];
    let res = str.match(reg);
    if (res) {
      let matchStr = res[0];
      let matchStart = res.index || 0;
      let matchEnd = matchStart + matchStr.length;
      resList.push(matchStart);
      resList.push(matchEnd);
    }
    return resList;
  }
  // 格式化令牌格式字符串到Date
  static formatToDate = (
    dateStr: string,
    formatStr: string = DateTime.defaultFormat
  ): Date => {
    function getMatchVal(reg: RegExp): number {
      let resList: number[] = [];
      resList = DateTime.matchIndex(formatStr, reg);
      if (resList.length > 0) {
        let start = resList[0];
        let end = resList[1];
        return Number(dateStr.substring(start, end));
      } else return 0;
    }
    let year = getMatchVal(/Y+/);
    let month = getMatchVal(/M+/) - 1;
    let day = getMatchVal(/D+/);
    let hour = getMatchVal(/H+/);
    let minute = getMatchVal(/m+/);
    let second = getMatchVal(/s+/);
    return new Date(year, month, day, hour, minute, second);
  };
  // 格式化Date到令牌格式字符串
  static formatToStr = (
    date: Date,
    formatStr: string = DateTime.defaultFormat
  ): string => {
    interface IReg {
      reg: string;
      value: number;
    }
    let resStr = formatStr;
    let regList: IReg[] = [];
    let year = date.getFullYear();
    regList.push({
      reg: "Y+",
      value: year,
    });
    let month = date.getMonth() + 1;
    regList.push({
      reg: "M+",
      value: month,
    });

    let day = date.getDate();
    regList.push({
      reg: "D+",
      value: day,
    });

    let hour = date.getHours();
    regList.push({
      reg: "H+",
      value: hour,
    });

    let minute = date.getMinutes();
    regList.push({
      reg: "m+",
      value: minute,
    });

    let second = date.getSeconds();
    regList.push({
      reg: "s+",
      value: second,
    });
    regList.forEach((item) => {
      if (item.reg === "Y+") {
        resStr = resStr.replace(new RegExp(item.reg, "g"), (match) => {
          return String(item.value).substring(4 - match.length);
        });
      } else {
        resStr = resStr.replace(new RegExp(item.reg, "g"), (match) => {
          if (match.length === 1) {
            return String(item.value);
          } else {
            // 小于10则拼接0
            return item.value < 10
              ? `0${String(item.value)}`
              : String(item.value);
          }
        });
      }
    });

    return resStr;
  };
  // 日期字符串，在今日之后,不包含今日 仅支持到天的字符串
  static isFutureDay = (str: string): boolean => {
    let strDate = DateTime.formatToDate(str);
    let nowDate = new Date();
    // console.log('==========',nowDate.getTime(),strDate.getTime() )
    if (nowDate.getTime() < strDate.getTime()) {
      return true;
    } else {
      return false;
    }
  };
  // 日期字符串，在过去,包含今日  仅支持到天的字符串
  static isPastDay = (str: string): boolean => {
    let strDate = DateTime.formatToDate(str);
    let nowDate = new Date();
    if (nowDate.getTime() > strDate.getTime()) {
      return true;
    } else {
      return false;
    }
  };
  // 是否过期 精确到秒
  static isOverTime = (str: string): boolean => {
    let strDate = DateTime.formatToDate(str);
    let nowDate = new Date();
    console.log("==========is over time", strDate, nowDate);
    if (nowDate.getTime() >= strDate.getTime()) {
      return false;
    } else {
      return true;
    }
  };
  // 今日日期字符串
  static todayStr = (formatStr: string = "YYYY-MM-DD"): string => {
    let nowDate = new Date();
    return DateTime.formatToStr(nowDate, formatStr);
  };
  // 获取以今日为起点，最近某天的日期字符串 count可为正负数表示今日前后
  static latestDayStr = (
    count: number,
    formatStr: string = "YYYY-MM-DD"
  ): string => {
    let currentTime = new Date().getTime();
    let targetTime = currentTime + count * 24 * 60 * 60 * 1000;
    let targetDate = new Date(targetTime);
    return DateTime.formatToStr(targetDate, formatStr);
  };
  static getDayStr = (tick: number | undefined) => {
    if (!tick) return "";
    let day = new Date(tick).getDate();
    let dayStr = "";
    if (day < 10) {
      dayStr = `0${day}`;
    } else {
      dayStr = `${day}`;
    }
    return dayStr;
  };
  static getYearStr = (tick: number | undefined) => {
    if (!tick) return "";
    return DateTime.formatToStr(new Date(tick)).substring(0, 4);
  };
  static getEnMonthStr = (tick: number | undefined, locale = "cn") => {
    if (!tick) return "";
    let monthIndex = new Date(tick).getMonth();
    let list = [
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月",
    ];
    let listEn = [
      "Jan.",
      "Feb.",
      "Mar.",
      "Apr.",
      "May.",
      "Jun.",
      "Jul.",
      "Aug.",
      "Sep.",
      "Oct.",
      "Nov.",
      "Dec.",
    ];
    if (locale === "en") {
      return list[monthIndex] || "";
    } else {
      return listEn[monthIndex] || "";
    }
  };
  static stamp2DayStr = (stamp: number) => {
    if (!stamp) return "";
    let d = new Date(stamp);
    return DateTime.formatToStr(d, "YYYY-MM-DD");
  };
}
export { DateTime };
