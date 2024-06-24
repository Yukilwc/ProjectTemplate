let data = [
  {
    keyName: "portStartItem",
    values: [1, 2, 3],
    priority: 1,
  },
  {
    keyName: "wharfItem",
    values: [4, 5, 6],
    priority: 2,
  },
  {
    keyName: "emptyItem",
    values: [],
    priority: 3,
  },
  {
    keyName: "nullItem",
    values: [10, 11],
  },
  {
    keyName: "shippingItem",
    values: [7],
    priority: 5,
  },
  {
    keyName: "routeItem",
    values: [8, 9],
    priority: 4,
  },
];
import { join } from "@/utils/join";
test("join", () => {
  console.log("==========join test", join(data));
});
