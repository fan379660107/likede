import Layout from "@/layout";
export default {
  path: "/report/index",
  component: Layout,
  children: [
    {
      path: "",
      component: () => import("@/views/reconciliationStatistical"),
      meta: { title: "对账统计", icon: "对账统计" },
    },
  ],
};
