// export const AddRowsFromForm = (form) => {
//   function insertOneNode(finalRes, step, node) {
//     let values = node.values;
//     if (values.length === 0) {
//       finalRes.forEach((item) => {
//         item.unshift(undefined);
//       });
//     } else {
//       let newValues = [];
//       for (let a = 0; a < values.length; a++) {
//         newValues.push(...getRepeatList(values[a], step));
//       }
//       let newTotalValues = [];
//       if (finalRes.length > 0 && newValues.length > 0) {
//         for (let b = 0; b < finalRes.length / newValues.length; b++) {
//           newTotalValues.push(...newValues);
//         }
//       }
//       for (let c = 0; c < finalRes.length; c++) {
//         finalRes[c].unshift(newTotalValues[c]);
//         console.log("finalRes[c]", finalRes[c]);
//       }
//       console.log("new total values:", newTotalValues, finalRes);
//     }
//   }
//   function getRepeatList(value, num) {
//     let res = [];
//     for (let i = 0; i < num; i++) {
//       res.push(value);
//     }
//     return res;
//   }
//   console.log("==========AddRowsFromForm", form);
//   let totalCount = (list) => {
//     let nums = [];
//     list.forEach((item) => {
//       let len = item.values.length;
//       if (len === 0) {
//         nums.push(1);
//       } else {
//         nums.push(len);
//       }
//     });
//     let total = nums.reduce((pre, curr) => {
//       return pre * curr;
//     }, 1);
//     return total;
//   };

//   let finalRes = [];
//   for (let i = 0; i < totalCount(twoDList); i++) {
//     finalRes.push([]);
//   }
//   let step = 1;
//   for (let a = twoDList.length - 1; a >= 0; a--) {
//     insertOneNode(finalRes, step, twoDList[a]);
//     if (twoDList[a].values.length === 0) {
//       step = step * 1;
//     } else {
//       step = step * twoDList[a].values.length;
//     }
//   }
//   console.log("==========final Res", finalRes);
// };
interface IData {
  keyName: string;
  values: any[];
  priority?: number;
}
export const join = (data: IData[]) => {
  data = data.sort((a, b) => {
    if (a.priority === undefined && b.priority === undefined) {
      return 0;
    } else if (a.priority === undefined && b.priority !== undefined) {
      return -1;
    } else if (a.priority !== undefined && b.priority === undefined) {
      return 1;
    } else {
      return b.priority! - a.priority!;
    }
  });
  //   console.log("==========排序后，低权重的靠前", data);
  let valuesList = data.map((item) => {
    if (!item.values || item.values.length === 0) {
      return [undefined];
    } else {
      return item.values;
    }
  });
  //   console.log("==========values list", valuesList);
  let res = valuesList.reduce((pre: any[], curr: any[]) => {
    // console.log("==========reduce", pre, curr);
    if (pre.length === 0) {
      return curr.map((item) => [item]);
    } else {
      let join2Res = join2Array(curr, pre);
      return join2Res;
    }
  }, []);
  let reverseData = data.reverse();
//   console.log("==========reverseData ", reverseData);
  let objList = res.map((item, index) => {
    let obj = {} as Record<string, any>;
    item.forEach((a: any, aIndex: number) => {
      let keyName = reverseData[aIndex]?.keyName;
    //   console.log('==========key name and value',keyName,a)
      obj[keyName] = a;
    });
    return obj;
  });
  console.log("==========final join res", res);
  console.log("==========final join obj list", objList);
  let resObj = {
    valuesList: res,
  };
};

const join2Array = (curr: any[], pre: any[][]): any[][] => {
  let res = [] as any[][];
  curr.forEach((a) => {
    pre.forEach((b) => {
      let newItem = [a, ...b];
      res.push(newItem);
    });
  });
  return res;
};
