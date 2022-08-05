import Layout from "@/layout";
export default {
  path: "/user",
  component: Layout,
  meta: { title: "人员管理", icon: "人员管理" },
  children: [
    {
      path: "/user/index",
      component: () => import("@/views/personnelManagement/personnelList.vue"),
      meta: { title: "人员列表" },
    },
    {
      path: "/user/user-task-stats",
      component: () => import("@/views/personnelManagement/workStatistics.vue"),
      meta: { title: "人效统计" },
    },
    {
      path: "/user/user-work",
      component: () => import("@/views/personnelManagement/workList.vue"),
      meta: { title: "工作量列表" },
    },
  ],
};
