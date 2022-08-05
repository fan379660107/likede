import Layout from "@/layout";
export default {
  path: "/sku",
  component: Layout,
  meta: { title: "商品管理", icon: "商品管理" },
  children: [
    {
      path: "/sku/sku-class",
      component: () => import("@/views/goodsManagement/goodsType.vue"),
      meta: { title: "商品类型" },
    },
    {
      path: "/sku/sku",
      component: () => import("@/views/goodsManagement/goodsList.vue"),
      meta: { title: "商品管理" },
    },
  ],
};
