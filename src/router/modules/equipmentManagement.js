import Layout from "@/layout";
export default {
  path: "/vm",
  component: Layout,
  meta: { title: "设备管理", icon: "设备管理" },
  children: [
    {
      path: "/vm/index",
      component: () => import("@/views/equipmentManagement/equipment.vue"),
      meta: { title: "设备管理" },
    },
    {
      path: "/vm/status",
      component: () => import("@/views/equipmentManagement/equipmentState.vue"),
      meta: { title: "设备状态" },
    },
    {
      path: "/vm/type",
      component: () => import("@/views/equipmentManagement/equipmentType.vue"),
      meta: { title: "设备类型管理" },
    },
  ],
};
