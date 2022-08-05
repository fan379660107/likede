import Layout from "@/layout";
export default {
  path: "/order/index",
  component: Layout,
  children: [
    {
      path: "",
      component: () => import("@/views/goodsOrder"),
      meta: { title: "订单管理", icon: "订单管理" },
    },
  ],
};
