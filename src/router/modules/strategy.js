import Layout from "@/layout";
export default {
  path: "/policy/index",
  component: Layout,
  children: [
    {
      path: "",
      component: () => import("@/views/strategy"),
      meta: { title: "策略管理", icon: "策略管理" },
    },
  ],
};
