import Layout from "@/layout";
export default {
  path: "/node",
  component: Layout,
  meta: { title: "点位管理", icon: "点位管理" },
  children: [
    {
      path: "/node/region",
      component: () => import("@/views/pointManagement/area.vue"),
      meta: { title: "区域管理" },
    },
    {
      path: "/node/node",
      component: () => import("@/views/pointManagement/point.vue"),
      meta: { title: "点位管理" },
    },
    {
      path: "/node/partner",
      component: () => import("@/views/pointManagement/partners.vue"),
      meta: { title: "合作商管理" },
    },
  ],
};
