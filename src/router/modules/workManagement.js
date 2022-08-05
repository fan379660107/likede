import Layout from "@/layout";
export default {
  path: "/task",
  component: Layout,
  meta: { title: "工单管理", icon: "工单管理" },
  children: [
    {
      path: "/task/business",
      component: () => import("@/views/workManagement/operating.vue"),
      meta: { title: "运营管理" },
    },
    {
      path: "/task/operation",
      component: () => import("@/views/workManagement/operations.vue"),
      meta: { title: "运维管理" },
    },
  ],
};
